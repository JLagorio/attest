# CyberTrace Compliance Engine — Platform Specification

**Document type:** Engineering & Product Definition
**Audience:** Internal — Systems Security Engineering, ISSO/ISSM, Program Security
**Status:** Draft for review — v4 (OSCAL-native)

---

## 1. Problem Statement

### 1.1 Failure Modes

1. **Artifact divergence.** The SP and SCTM are maintained as separate documents. They drift. Reconciling them is manual and never fully trusted.
2. **Evidence archaeology.** Proof lives in SharePoint, Lucid, Confluence, ticketing, and email. Nobody knows which artifact proves which control, whether it is current, or who owns it.
3. **No reuse across systems and variants.** Subsystems are shared across products and programs, but implementations are re-authored each time — largely because parameter values are baked into narrative text instead of bound late.
4. **Untracked work.** Assignment, aging, blockers, and reviewer state are invisible until a delivery date slips.
5. **Unmanaged change.** A component swap, a published CVE, or an overlay revision perturbs the package in ways predictable in kind but untracked in practice. The blast radius is recomputed by hand, from memory, every time.

Failure mode 5 is the largest and the least addressed by existing tooling.

### 1.2 The Package Is a Living Object

The SP and SCTM are perturbed continuously by a small set of recurring event types (§5). Three consequences drive the architecture:

- **Implementation status is not monotonic.** A published CVE knocks controls from Implemented back to Partially Implemented. Status is a versioned, reversible state with history — not a checkbox that only advances.
- **The evidence bar changes with authorization state.** At IATT, "Planned" with an accepted risk is legitimate. At ATO the same record is a gap. Readiness is evaluated *against a target state*, never absolutely.
- **Change impact is computable.** Every trigger type has a known propagation pattern. The platform computes blast radius; it does not ask the SSE to remember it.

### 1.3 What the SCTM Actually Is

The SCTM is **a rendering and accountability matrix that joins the control requirement to the SSP.** The control text says what is required ("passwords must be 24 characters"); the SP holds the implementation narrative and the supporting evidence; the SCTM ties the two together and proves every required control is accounted for.

It is therefore **a projection, not a document type** — a join across data the platform already holds:

```
resolved control requirement   ×   implementation statement   ×   evidence   ×   accountability
  (catalog + profile,               (SSP implemented-              (pointers)     (owner, status,
   parameters substituted)           requirement)                                 due, review state)
```

Nothing in the SCTM is separately authored, so nothing can diverge from the SP. That is the whole of AD-1.

Consequences:

- **Format is customer-dictated.** They supply a template or request extra columns. Export to *their* format; the model does not change.
- **Custom columns are typed data, not notes** — queryable, assignable, reportable.
- **A program has multiple systems.** Each gets its own SCTM, often against one shared template, with a program rollup.
- **SSE discretion is a feature.** How an implementation is described is engineering judgment. Support and standardize it; do not automate it away.

### 1.4 Explicit Non-Goals

- **Not a vulnerability or STIG scanner.** Scan results are one evidence input among many.
- **Not a document repository.** Evidence stays in its system of record; the platform holds references, metadata, and validity state.
- **Not an authorship replacement.** The tool eliminates rekeying, reconciliation, and forgotten downstream edits — not engineering judgment.

---

## 2. OSCAL Conformance

**OSCAL is the internal data model.** Not an export format bolted on later — the schema the platform is built against.

### 2.1 The Layer Architecture

OSCAL is organized as a stack of **layers**, each providing a set of **models**. Each lower layer provides information structures the higher layers reference and build on. **Models stack within a layer as well as across layers** — this is not presentational. The layering *is* the traceability model, and it is why the SCTM works as a projection.

```
┌─ ASSESSMENT LAYER ──────────────────────────────────────────┐
│                                                             │
│   Plan of Action & Milestones (POA&M) Model                 │
│   Assessment Results Model                                  │
│   Assessment Plan Model                                     │
│   ┄ Other Assessment Models (Future) ┄                      │
└────────────────────────────┬────────────────────────────────┘
                             │ IMPORT SSP
┌─ IMPLEMENTATION LAYER ─────┴────────────────────────────────┐
│                                                             │
│   System Security Plan Model                                │
│   Component Model            ── imported into ──► SSP       │
│   ┄ Other Implementation Models (Future) ┄                  │
└────────────────────────────┬────────────────────────────────┘
                             │ IMPORT PROFILE
┌─ CONTROLS LAYER ───────────┴────────────────────────────────┐
│                                                             │
│   Control Mapping Model                                     │
│   Profile Model              ── imports ──► Catalog/Profile │
│   Catalog Model                                             │
└─────────────────────────────────────────────────────────────┘

                    ◄── traceability ──
```

Each model defines an import mechanism for the artifact it consumes, giving native traceability from the assessment layer down to the catalog. A control used in the implementation or assessment layers must first be imported by a profile, and every control a profile imports must originate in a catalog.

That chain — catalog → profile → SSP → assessment — is exactly the SCTM's join path. The matrix is a horizontal read across a vertical stack OSCAL already enforces.

Three structural facts worth internalizing:

- **Within the Controls Layer, Control Mapping sits above Profile, which sits above Catalog.** Mapping operates on controls that catalogs define and profiles select — it is not a peer of Catalog.
- **Profiles import from catalogs *or other profiles*.** After importing a control, a profile may tailor it — including additions, changes, and removal of statements, parameters, control objectives, and assessment actions. This is what makes both the nine-axis composition (§3.3) and the customer requirements tier (§3.5) native patterns rather than workarounds, with traceability preserved back to the originating catalog control.
- **Component definitions exist to pre-populate SSPs.** NIST's stated intent is that SSP authoring tools import component content to fill significant portions of an SSP, then tailor it to reflect the actual implementation. The component library in AD-6 is the model's purpose, not an adaptation of it.

**Both upper layers carry explicit "Other Models (Future)" placeholders.** The layers are designed to grow. Anything the platform builds in the custom workflow tier should be structured so that a future NIST implementation-layer model could absorb it without a rewrite.

NIST publishes the SP 800-53 Rev 5 catalog with the 800-53B baselines, plus the Rev 4 catalog and baselines, supplying catalog content and the concurrent-revision support in §3.6 without transcription.

### 2.2 Common Document Structure and Identity

All OSCAL models share a common high-level structure and reuse many constructs. Every document is: **root element** (names the model) + **document UUID** + **metadata** (title, last-modified, version, oscal-version; also roles, parties, locations) + **model-specific body** + **back-matter**.

Three mechanisms here do real work for this platform, and inventing parallel ones would be a mistake:

**Back-matter is identical across every model.** It holds linked and attached resources, and content authors are encouraged to associate resources there and reference them from the body. This is the native home for evidence pointers and supporting documents — in *any* model, not only the SSP.

**Document UUID and `last-modified` are change-detection primitives.** Every time a document's content changes, a new root UUID must be generated and `last-modified` set. NIST states plainly that these are the two mechanisms by which tools can quickly tell whether a file has changed since last encountered. The Change Impact Engine (§5) should use them directly for detecting upstream catalog, profile, and component changes rather than hashing content or diffing text.

**`document-id` plus RFC 5829 version links give a native version graph.** A new version of a document keeps the same `document-id`; `link rel="latest-version"` and `rel="successor-version"` establish a resolvable version chain. Use this for resolved-profile snapshots and component versioning instead of a custom scheme.

**Identifier discipline** — two types, used differently:

- **Human-readable `id`** for controls, statements, parameters, groups, and roles. Document-scoped; stable across revisions; changed only when the identified subject has meaningfully changed.
- **UUIDs** for tool-generated linkage across documents. Stable when attributes change, replaced when identity changes.

NIST's own example is exactly the component library's governance rule: if a component represents a database and its software version updates, the component UUID stays the same; if the database is replaced by a competing product from a different vendor, the UUID changes. **A vendor swap is a new component identity — which is precisely Trigger 1 (§5.1), detectable rather than reported.**

**Information model vs data model.** OSCAL defines each model's *information model* via the Metaschema framework, then binds it to XML, JSON, and YAML as concrete *data models*, convertible between formats without data loss. Build against the information model; treat the serialization as a choice.

### 2.3 Model-by-Model Disposition

**Eight released models across three layers.**

| Layer | Model | Sections | Disposition |
|---|---|---|---|
| Control | **Catalog** | metadata · group · control · back-matter | **Adopt as-is.** NIST-published Rev 4 and Rev 5, unmodified. Controls carry `param`, `prop`, `link`, and nested `part` structures; enhancements are nested `control` elements. |
| Control | **Profile** | metadata · **import** · **merge** · **modify** · back-matter | **Adopt as-is.** `import` selects from a catalog *or another profile*; `merge` organizes output **and resolves conflicts when multiple imports bring variants of the same control**; `modify` tailors parameters, statements, guidance, objectives, and assessment actions. |
| Control | **Control Mapping** | metadata · **provenance** · **mapping** · back-matter | **Adopt as-is.** Rev 4 ↔ Rev 5 crosswalk and any customer-framework mapping. See §3.6. |
| Implementation | **Component Definition** | metadata · import · **component** · **capability** · back-matter | **Adopt + extend.** Components may be hardware, software, service, **policy, process, procedure, or compliance artifact**. `capability` groups components that jointly satisfy controls no single component satisfies alone. |
| Implementation | **System Security Plan** | metadata · **import-profile** · **system-characteristics** · **system-implementation** · **control-implementation** · back-matter | **Adopt + extend.** Models authorization boundary, information types and categorization, inventory, control parameter values, responsible roles, implementation status, **control origination**, and satisfaction down to individual control statements — per system or per component. Also **`leveraged-authorization`** with `provided` / `responsibility` / `export` (§8.5). |
| Assessment | **Assessment Plan** | metadata · import-ssp · local-definitions · terms-and-conditions · reviewed-controls · subject · assets · activities · back-matter | **Adopt as-is.** Identifies the system; every Assessment Results document must reference one. |
| Assessment | **Assessment Results** | metadata · import-ap · local-definitions · **results** · back-matter | **Adopt as-is.** `results` carries reviewed-controls, subject, assets, attestation, log, **observation** (evidence of compliance or non-compliance), **risk**, and **finding** — plus false positives, risk adjustments, **operationally required risks**, and **result expiration**. |
| Assessment | **POA&M** | metadata · import-ssp · **risks** · **poam-items** · back-matter | **Adopt + extend.** Shares identical Risk syntax with Assessment Results. Extended with milestone ownership and change-event linkage. |
| — | **SCTM** | — | **Not an OSCAL model. Projection only** (§2.6). |
| — | **Change events, tasks, authorization lifecycle** | — | **Fully custom** (§5, §6). |

**Roadmap note.** The assessment layer is slated for expansion in OSCAL 2.0 to support automation of assessment activities. Anything built tightly against Assessment Plan or Assessment Results should be treated as more likely to churn than the control and implementation layers. Phase 4 sequencing already accounts for this.

**Documentation caution.** NIST's own pages are not uniformly current — the Profile Model page still describes Profile as the sole model in the Control layer, which predates Control Mapping's release. Treat the schemas and the Layers page as authoritative over individual model narrative pages, and check page revision dates.

### 2.4 Extension Discipline

OSCAL is explicitly designed for this: models are organized hierarchically, and at each level `prop` objects may carry an organizational namespace (`ns`) identifying the organization creating the extension. Within its own namespace an organization may use any token as the property name.

Everything custom goes in namespaced `props` and `links`, never in altered core structures. A platform-produced SSP must validate against the stock OSCAL schema with extensions ignorable. Three hard rules:

1. **Register and publish one namespace URI** for all platform extensions, and set `ns` on every extension property. NIST warns that when no `ns` is given the default is the core OSCAL namespace — so an unnamespaced `status` prop and a FedRAMP `status` prop collide for any tool that filters on name alone. Every read path must filter on `ns`, not just `name`.
2. **Property values must be atomic.** OSCAL requires prop values to be simple strings, numbers, or dates — no markdown, no structure. **Anything richer than a name-value pair must use `link` or `part`, not `prop`.** This constrains several extensions in this spec: a component's ODP dependency set with valid ranges (§4.3) does not fit in a prop and needs `link` or a structured `part`. Design each extension against this limit before assuming a prop will hold it.
3. **No local edits to published catalog content.** Ever. All modification flows through profiles.
4. **Extensions are additive.** If stripping every platform-namespace extension breaks the document's meaning, the extension is in the wrong place.

Note that NIST itself uses this pattern in the published catalog — SP 800-53 params carry `prop name="aggregates" ns="http://csrc.nist.gov/ns/rmf"` values. Namespaced extension is normal practice, not a workaround.

Verify structural details against the current reference release before building — element nesting has shifted across minor versions, and the Control Mapping model is newer than the original seven.

### 2.5 Previously Specced as Custom, Actually Native

Reading the model documentation closely moved a significant amount of this spec from the custom column into the adopt-and-extend column. Recorded explicitly so the build does not reinvent them.

Reading the published OSCAL content directly moved a significant amount of this spec from the custom column into adopt-and-extend. Each row below was verified against the actual JSON in `usnistgov/oscal-content`, not inferred from documentation.

| Concept | Earlier treatment here | Verified OSCAL home |
|---|---|---|
| **C-I-A impact trigraph** | Custom `categorization` entity — "the most consequential schema decision" | **Native.** SSP `system-characteristics.security-impact-level` has exactly `security-objective-confidentiality` / `-integrity` / `-availability`. NIST's own example is **M-M-L**. Per-information-type impacts carry `confidentiality-impact` / `integrity-impact` / `availability-impact`, each with `base` (and `selected` + `adjustment-justification` for AO adjustment) |
| Overall categorization | Part of custom entity | `security-sensitivity-level` alongside the trigraph |
| Responsibility (system-specific / inherited / hybrid / CCP) | Custom `responsibility` field | SSP `control-origination` |
| Inheritance / common control provider | Custom resolution tiers 4–6 | **`leveraged-authorizations`** + a four-part `export` contract (§8.5) |
| Hybrid control delta | Custom `hybrid_delta` field | The `responsibilities` / `satisfied` half of that contract |
| Subsystem grouping | Custom composition | Component Definition `capability` |
| Component's target revision/baseline | Custom `catalog_revision` prop | **Native `control-implementations[].source`** — a URI naming the profile or catalog the implementation is claimed against |
| Component asserting a parameter value | Not modeled | Components carry `set-parameters` — e.g. MongoDB binding `sc-8_prm_1` to `confidentiality` |
| Supporting documents (CONOPS, key handling plan) | Custom entity | **Components** — `type` includes policy, process, procedure, plan, guidance, standard, validation |
| Crypto module validation (FIPS 140-2) | Custom evidence type | A component of type `validation` |
| Assessment procedures | Custom `assessment_procedure` entity | **Native and enormous.** The Rev 5 catalog ships **3,715 `assessment-objective` parts and 2,931 `assessment-method` parts** across 1,216 controls |
| Evidence of compliance / non-compliance | Custom evidence artifact | Assessment Results `observation` with `methods` (TEST / EXAMINE / INTERVIEW), `types`, and component-scoped `subjects` |
| Evidence collection date and validity window | Custom `collected_date` / `validity_window` | `observation.collected` and **`observation.expires`** |
| Risk accepted for mission constraints | Custom `risk_acceptance` | `risk.status: deviation-approved` |
| Interim mitigations | Custom field | `risk.mitigating-factors` |
| POA&M milestone deadline | Custom | `risk.deadline` and `remediations[].lifecycle` |
| Risk scoring | Not modeled | `risk.characterizations[].facets` — likelihood and impact against an organization-defined `system` URI |
| Finding → implementation traceability | Custom join | `finding.target` (`type: objective-id`, `target-id: ac-6.1_obj`, `status.state: not-satisfied`) plus **`implementation-statement-uuid`** linking straight back to the SSP statement |
| Cross-revision confidence | Custom confidence field | Control Mapping `provenance` — method, status, confidence score, responsible parties |
| Cross-version parameter correspondence | Custom | Catalog params carry `alt-identifier` props (e.g. `ac-01_odp.03` → `ac-1_prm_2`) |
| Change detection on upstream content | Custom hashing | Document `uuid` + `last-modified` |
| Version history of a snapshot | Custom versioning | `document-id` + RFC 5829 version links |

**What remains genuinely custom** is materially narrower than v4 assumed:

- The change event model and blast-radius engine
- The task, assignment, aging, and escalation layer
- The authorization state machine and target-state readiness evaluation
- Implementation status *history* (OSCAL carries current state, not the transition log)
- Evidence **link health and reachability** — OSCAL states external `link` references cannot be validated
- Supporting-document **alignment state** (referenced-but-stale)
- The SCTM template and projection engine
- Program-level grouping above system
- **Categorization approval workflow and overlay-driven floors** — the *values* are native; the AO state machine and the floor computation are not

Several Phase 2 items shrink from subsystems to extensions. The POA&M Manager in particular is now mostly a workflow wrapper over native structures.

### 2.6 The SCTM as a Projection

The SCTM is a view. Column-to-source mapping:

| SCTM column | Source | Model |
|---|---|---|
| Control ID / title | Resolved profile | Profile → Catalog |
| What the control requires | Control prose **with parameters substituted** | Catalog `part` + resolved `param` values |
| Why this control applies | Which axis profile, overlay, or customer profile contributed it | Profile resolution trace |
| Why this value | Customer override attribution with source citation, where applicable | Profile resolution trace |
| How the system implements it | `implemented-requirement` → `statement` → `by-component` description | SSP |
| Implementation status | `implementation-status` | SSP |
| Responsible entity | `responsible-role` / component attribution | SSP |
| Supporting artifacts | Back-matter `resource` with `rlink` | SSP back-matter |
| Owner / due date / review state | **Custom workflow layer** | Not OSCAL |
| Customer-specific columns | Namespaced `props` | SSP extension |

**Row granularity is a choice, not a constraint.** OSCAL shreds control text into nested `part` elements where every item at every level carries its own id (`ac-1_smt.a.1.b`), and the SSP can attach a `by-component` implementation at `statement-id`. A customer template demanding per-statement rows rather than per-control rows is therefore a projection setting, not a data-model change.

**Referential integrity is checkable.** OSCAL defines constraints for SSP references — `control-id` must resolve in the imported baseline, `param-id` must resolve to a parameter in the resolved baseline, `component-uuid` must resolve to a component in the local or leveraged SSP. Run these before export; they catch a class of SCTM defect that currently surfaces during customer review.

**Coverage assertion.** Because the SCTM is generated rather than authored, completeness is a validation rule, not a review activity. Before export, the platform asserts:

1. Every control in the resolved profile has exactly one row, with a status, a narrative, and either linked evidence or a documented reason there is none.
2. Every OSCAL referential constraint resolves — `control-id` in the imported baseline, `param-id` in the resolved baseline, `component-uuid` in the local or leveraged SSP.
3. **Every inherited item's assigned responsibilities are discharged** — for each `inherited` entry, each linked `responsibilities` item from the provider has a matching `satisfied` entry (§8.5). This catches the case where a program assumes a common control provider covers something the provider explicitly assigned back to them.

Failing any of these blocks export.

### 2.7 What OSCAL Does Not Cover

No change events, tasks, owners, due dates, or review states. No authorization state machine or target-state readiness. No status history. No evidence validity windows, link health, or scope enforcement. No supporting-document alignment tracking.

This is by design — OSCAL describes the *state* of a package, not how it got perturbed or who owes what. The custom layer sits exactly there, which is also where the platform's value is.

---

## 3. Framework Model

### 3.1 Derivation Chain

```
Catalog        +  Categorization  +  Overlays        +  Program Tailoring
(800-53,          (C-I-A trigraph)   (profile          (profile modify)
 published                            imports)
 OSCAL)
   │                    │                 │                    │
   └────────────────────┴─────────────────┴────────────────────┘
                            │
                            ▼
                 RESOLVED PROFILE  (control set + bound parameters)
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
        SSP (OSCAL)                 SCTM (projection)
```

Every stage is individually inspectable and reversible.

### 3.2 Standards Layer

**NIST SP 800-53** is the master catalog — canonical source of control text, enhancements, and parameters.

**CNSSI 1253** applies to national security systems and builds on the 800-53 catalog rather than replacing it. The material difference is the selection model: 1253 preserves three discrete impact values rather than applying a high-water mark, producing trigraph categorizations such as M-M-L, and allocates controls to baselines per objective. Each row in the Appendix D allocation tables carries a mark under one or more of the nine objective-level columns; a control belongs in the set if it is marked under any of the system's three levels.

### 3.3 Baseline as Profile Composition

The three-axis model is expressed natively in OSCAL, not through a custom applicability table.

**Nine atomic axis profiles:** C-Low, C-Moderate, C-High, I-Low, I-Moderate, I-High, A-Low, A-Moderate, A-High — each importing the 800-53 catalog and including the controls that Appendix D allocates to that objective at that level.

**NIST's own baselines are pure selection — they bind no parameters.** Verified: the Rev 5 LOW / MODERATE / HIGH baseline profiles contain `imports` and `merge` but **no `modify` section at all** (149, 287, and 370 controls respectively, as flat `include-controls.with-ids` lists). Parameter binding is left entirely to the organization.

This simplifies §4.4 considerably. **Parameter conflicts do not arise between axis profiles** — if the 1253 allocations are modeled the same way, the nine axis profiles are selection-only and cannot disagree about a value. Conflicts arise between *overlays*, and between overlays and the customer profile. A much smaller surface.

Two practical notes from the published profiles: `include-controls` supports both explicit `with-ids` lists and `matching[].pattern` globs, and imports reference the catalog by **back-matter fragment** (`href: "#84cbf061-…"`) rather than a file path, which keeps profiles portable.

**Profile resolution produces a catalog.** NIST publishes resolved counterparts of its profiles suffixed `-resolved-profile_catalog` — the resolution process emits a catalog containing only the selected and tailored controls. The `resolved_profile` snapshot in this spec is therefore a *catalog document*, not a third document type, and downstream consumers can treat it as one.

**A system's baseline is a profile that imports the three matching axis profiles**, then the applicable overlay profiles, then the customer requirements profile (§3.5), then program tailoring. Union merge across the three axis imports *is* "selected if any axis meets its threshold" — the selection logic falls out of OSCAL's composition semantics rather than fighting them.

**Selection provenance is free.** Profile resolution knows which import contributed each control, so "SC-8 is here solely because Confidentiality is Moderate" is answerable from the resolution trace. Persist it as a namespaced `prop` on the resolved control.

**Merge policy — the one decision that needs an explicit call:**

- **Control selection:** union. Lowest-wins and any-wins produce identical sets, since a control allocated at A-Low is in regardless of C and I.
- **Provenance attribution:** attribute to the **lowest** threshold that pulled the control in. That is the justification hardest to remove, and it is the right answer to "what happens if the AO downgrades an axis." Retain the full contributing set alongside it for downgrade analysis.
- **Parameter values:** *lowest-wins is not safe as a global rule.* Where two contributing profiles bind the same ODP differently, taking the looser value is wrong whenever an overlay is raising a floor. Set `combine` policy per parameter class, and **surface the conflict rather than silently resolving it** (§4.4).

**Content sourcing.** NIST publishes the 800-53 catalogs and the 800-53B civilian baselines as OSCAL. Published OSCAL content for the 1253 Appendix D allocations was not located; assume the nine axis profiles are a local build until proven otherwise. Bounded and one-time-ish, but it is the long pole in Phase 1 — confirm before scheduling (§14, Q1).

### 3.4 Generating the Axis Profiles from CNSSI 1253

The nine axis profiles are **generated in-app from the 1253 allocation tables**, not sourced as published OSCAL content and not hand-authored. This removes the largest unknown from Phase 1 and makes 1253 revisions a re-run rather than a re-transcription.

#### 3.4.1 Table D-1 — the allocation matrix

Table D-1 is a 3-by-3 matrix: nine columns covering three impact values (low, moderate, high) for each of the three security objectives. Cell vocabulary:

| Marking | Meaning | Generator action |
|---|---|---|
| `X` | NIST SP 800-53 baseline allocation at that impact value | Include |
| `+` | Additional CNSS specification for NSS beyond the NIST baseline | Include, and tag as NSS-added |
| *(blank)* | Not selected, or not allocated to that objective | Exclude |
| `Withdrawn` | No longer in the 800-53 catalog | Exclude; record as withdrawn |

Every cell is stated explicitly, so **selection is a direct nine-cell lookup, not a threshold comparison.** For a system categorized (c, i, a):

```
selected(control) =
    cell(C, c) ≠ blank  OR  cell(I, i) ≠ blank  OR  cell(A, a) ≠ blank
```

Example: AC-2(5) Inactivity Logout is marked `+ + X` across each objective — `+` at Low and Moderate, `X` at High. A system at C-Moderate picks it up from the C column via the `+`.

Each of the nine axis profiles is therefore a selection-only OSCAL profile listing every control whose corresponding cell is non-blank — structurally identical to `NIST_SP-800-53_rev5_MODERATE-baseline_profile.json`, which is `imports` + `merge` with no `modify`.

#### 3.4.2 Table D-2 — provenance and inheritance seeding

Table D-2 is a second table, and it is more valuable to this platform than D-1. Columns: control ID, C / I / A **objective association**, **justification for NSS baseline**, and **potentially common/inheritable**.

Three uses:

**Objective association** is distinct from allocation. D-2 records which objectives a control primarily addresses; NIST's own baselines do not characterize controls as having relationships with security objectives, and CNSS added this. It is described as a factor in building D-1 and as input to tailoring decisions. Carry it as a `prop` — it answers "does this control even relate to Availability" during a downgrade analysis, which allocation alone cannot.

**Justification is a controlled vocabulary**, not free text: Insider Threat · APT · NSS Best Practice · Issuance: *[CNSS document]* · In support of and/or consistent with *[control(s)]* · NIST Assumption: *[assumption]* · In support of EO *[number]* · Enables continuous monitoring · Best Practice. Emit each as a namespaced `prop` on the selected control. **This is authored selection rationale from the standard itself** — the "why is this control here" answer stops being something an SSE writes and becomes something the generator carries. Where the justification cites another control ("In support of and/or consistent with CM-5(5)"), emit it as a `link` so the dependency is traversable.

**Potentially common/inheritable** marks controls that may be implemented as common controls. **This directly seeds the `leveraged-authorization` candidate list (§8.5).** On system creation, the platform can propose: here are the controls the standard itself flags as inheritable — are any of these provided by a common control provider rather than by you? That converts a judgment call into a prompted checklist.

#### 3.4.3 Appendix E and Appendix F

**Appendix E, Table E-1** specifies security control parameter values for NSS. This is where 1253 binds ODPs — *not* in D-1. Generate it as a **separate NSS parameter profile** carrying `modify.set-parameters`, imported after the axis profiles. This preserves the clean split from §3.3: axis profiles select, parameter profiles bind.

**Appendix F** holds the overlays, published independently as attachments and updated separately from the base instruction. Each becomes its own overlay profile with its own version and effective date.

#### 3.4.4 Special cases the generator must handle

- **PM family.** PM-1 through PM-16 sit outside the matrix entirely — deployed organization-wide, not associated with security control baselines, independent of any impact level. They are always included and have no axis provenance. Do not let the row parser treat their descriptive text as cell markings.
- **Withdrawn rows** span the objective columns with a single value rather than nine cells.
- **Enhancement ID normalization.** The published tables are inconsistent — `AC-2(13)` appears with a hyphen, `AC16(10)` and `SA12(10)` without, and long IDs wrap across lines (`AU-` / `6(10)`). Normalize to catalog `id` form (`ac-2.13`) and **fail loudly on any ID that does not resolve against the pinned catalog** rather than silently dropping it. A dropped row is a missing control in a delivered SCTM.
- **Wrapped titles.** Control titles wrap across lines; the row parser must key on ID and column position, not line breaks.

#### 3.4.5 Revision alignment — a real trap

**The 27 March 2014 edition of CNSSI 1253 is built on 800-53 Revision 4.** Its Appendix A cites Revision 4 explicitly, and Table D-1 uses Rev 4 control identifiers — SA-12 Supply Chain Protection, for instance, which does not survive into Rev 5 in that form. The July 2022 edition is the Rev 5-aligned one.

Consequences:

- **Pin the 1253 edition to the catalog revision, and validate the pairing.** Generating axis profiles from the 2014 tables against the Rev 5 catalog produces unresolvable IDs and a silently wrong baseline.
- The generator must **refuse to emit** a profile where any allocated ID fails to resolve in the pinned catalog, and report the full list.
- Where a program genuinely runs 1253-2014 against 800-53 Rev 4 (§3.6), that is a valid, supported pairing — the platform holds both.
- **1253 appendices are administratively updated on a periodic basis**, and organizations are expected to plan transitions including periodic updates of the control allocations. Treat a 1253 appendix update as a Trigger 4 change event with the same blast-radius machinery.

#### 3.4.6 Generator output

Per (1253 edition × catalog revision): **nine axis profiles** + **one NSS parameter profile** + **N overlay profiles** from Appendix F, each an OSCAL document with `document-id`, version links, and a metadata citation back to the source table and edition.

Ingestion of the tables themselves is a reviewed step, not an unattended import — a mis-parsed cell is a missing or spurious control in every SCTM generated downstream. Emit a diff against the prior edition and require sign-off before the profiles go live.

**One note worth recording:** CNSSI 1253 itself references the SCTM by name, in the context of distinguishing intra-domain reliance from genuine common-control inheritance. The artifact this platform generates is named in the standard that drives it.

### 3.5 Customer Requirements as a Superseding Profile

Customers issue requirements that override the standards-derived baseline. A customer may specify a 24-character password minimum where the CNSSI baseline binds a shorter value; that customer value governs.

**This is a profile, not an exception mechanism.** The resolution chain is a straight import stack:

```
800-53 Catalog
   └─► Axis profiles (C / I / A at the system's levels)
          └─► Overlay profiles (JSIG, Space, Classified, …)
                 └─► CUSTOMER REQUIREMENTS PROFILE   ◄── supersedes
                        └─► Program tailoring profile
                               └─► System profile (resolved)
```

Because a profile may tailor an imported control — including changing parameters — a customer profile that rebinds `ia-5_prm_1` to 24 characters simply wins by sitting higher in the stack. No custom override table, no exception flag, and full traceability from the delivered value back through every contributing profile to the originating catalog control.

**Requirements:**

- **Customer profiles are ingested artifacts with their own lifecycle.** Versioned, dated, attributable to a contract or customer direction, and pinned per program (sometimes per system, where one program serves multiple customers).
- **Ingestion path.** Customers rarely deliver OSCAL. Requirements arrive as a document, a spreadsheet, or contract language. Authoring the customer profile is a real, recurring task with its own review gate — a mis-transcribed customer requirement is a delivery defect, not a modeling detail. Every entry records its source citation.
- **Customer overrides are visibly attributed.** Any control or parameter whose delivered value comes from the customer profile is marked as such in the SCTM and the Implementation Workspace. "Why 24 and not the baseline value" must answer instantly with the customer document reference.
- **A customer requirement change is a Trigger 4 change event** with the same blast radius machinery — including the exact parameter-consumer query (§4.5), which is what makes "customer changed one parameter" tractable instead of a full re-review.
- **Precedence against local tailoring needs an explicit policy.** The diagram above places program tailoring last, which would let a local decision override a contractual requirement. That is almost certainly wrong as a default. Recommended: customer profile is terminal for anything it binds, and local tailoring may only act on controls and parameters the customer profile leaves open — with any conflict raised to the customer rather than silently resolved. Confirm before building (§15, Q3).

### 3.6 Concurrent Catalog Revisions

Revisions are adopted inconsistently, and customers sometimes request an older one deliberately — space programs have asked for Rev 4 on schedule grounds, accepting the tradeoff.

- **Multiple revisions live simultaneously.** Program A on Rev 4 and Program B on Rev 5 is steady state, not a migration window. NIST publishes both.
- **Systems pin to a revision.** Migration is an explicit change event (§5, Trigger 4).
- **Cross-revision crosswalk uses the OSCAL Control Mapping model.** Rev 4 → Rev 5 renumbered, merged, split, and withdrew controls. Mapping expresses relationships using set-theory terms — `equivalent-to`, `equal-to`, `subset-of`, `superset-of`, `intersects-with`, `no-relationship` — many-to-many, at control, statement, or objective granularity, across catalogs and profiles alike.

  **Three matching methods, and the same pair can relate differently under each.** NIST's own example: a source control requiring TLS versus a target requiring TLS 1.2 or above is `subset-of` *syntactically* but `superset-of` *functionally*. Method must be recorded per mapping, and the platform must state which method a reuse decision rests on. Syntactic is described as best supporting automation.

  **`provenance` carries method, status, confidence score, mapping description, and responsible parties** — native, and better than the ad-hoc confidence field earlier drafts of this spec proposed.

  NIST explicitly positions the model for **gap analysis, inheritance evaluation, and change impact analysis when source controls evolve** — which is Trigger 4 by another name. Anything other than `equivalent-to` or `equal-to` routes to human review before a component implementation crosses revisions.

- **Mapping is not only for revisions.** The same model expresses a customer's own framework mapped onto 800-53, and 1253 allocations mapped to catalog controls. Where a customer assesses against their framework, mapping lets assessment results and evidence gathered against one resource be inferred toward the other — which is the formal version of the delta-package reuse argument (§5.1, Trigger 5).
- **Component implementations declare their revision.** Reusing a Rev 5 component statement on a Rev 4 system requires an explicit mapped-and-reviewed step, checked by the compatibility engine (§8.7).

### 3.7 Categorization

Each objective rated independently. **M-M-L** = moderate impact for confidentiality and integrity compromise, low for availability loss.

**The trigraph is native OSCAL, verified in the published SSP example.** `system-characteristics.security-impact-level` carries `security-objective-confidentiality`, `security-objective-integrity`, and `security-objective-availability` as separate fields — NIST's own example is M-M-L. Per-information-type impacts carry `confidentiality-impact` / `integrity-impact` / `availability-impact`, each with a `base` and an optional `selected` plus `adjustment-justification` — which is precisely the AO-adjustment mechanism. `security-sensitivity-level` holds the overall value alongside.

**So the custom entity shrinks to workflow.** Store the values natively; keep only what OSCAL does not model:

| Field | Native or custom |
|---|---|
| C / I / A levels | **Native** — `security-impact-level` objectives |
| Per-information-type impacts | **Native** — `base` / `selected` / `adjustment-justification` |
| AO adjustment rationale | **Native** — `adjustment-justification` |
| `applied_floors[]` | **Custom** — overlay-driven minimums with source overlay recorded |
| `effective_c/i/a` computation | **Custom** — `max(proposed, all applicable floors)` per axis |
| `approval_state` | **Custom** — Proposed / Under review / AO-approved / Superseded |
| `approving_ao`, `approval_date` | **Custom** workflow (parties are native) |
| `version`, `superseded_by` | **Native pattern** — `document-id` + version links |

**The AO has final say.** Proposed and approved are distinct states. Baselines may be computed from a proposed categorization for planning, but every exported SCTM states plainly which it rests on.

**Overlay floors are computed and attributed.** JSIG triggers a minimum M-L-L; the floor applies automatically when the overlay attaches, the raise is visible with its source, and the SSE cannot propose below it.

**Verify the axis enum** against the 1253 revision your programs cite. Authoritative text shows L/M/H trigraphs; some secondary sources describe a Very High level for NSS. If VH is real in your revision it changes the enum and adds three atomic profiles.

### 3.8 Overlays

Overlays are OSCAL profiles. They add controls, remove controls with rationale, bind or tighten parameters via `set-parameter`, raise categorization floors, and attach supplemental guidance.

In scope: JSIG, Classified Information, Space Platform, Cross Domain, Privacy, Intel, plus program-specific and locally authored overlays.

Overlays stack; import order is explicit and stored. Parameter conflicts surface rather than resolve silently. Overlays never mutate the catalog.

### 3.9 Program Tailoring

Removes controls not applicable; adds controls the environment demands; every action requires a rationale.

**Removals are suppressed, not deleted.** The control stays in the record with status Not Applicable and its rationale, and still appears in the SCTM. A control silently missing reads as an oversight; a control marked N/A with justification reads as engineering. *(Template-level toggle where a customer expects a shorter matrix.)*

---

## 4. Parameters and the Reusable Library

The mechanism that makes component reuse work. Under-treated in prior revisions.

### 4.1 Late Binding and the Two-Tier Parameter Structure

800-53 control text carries organization-defined parameters — bracketed assignments and selections. OSCAL models these natively: `param` elements, `<insert type="param" id-ref="...">` inside control prose, and `set-parameter` bindings supplied by profiles and SSPs.

**The published Rev 5 catalog has two parameter tiers, and this matters for binding and for consumer queries.** AC-1 illustrates it:

- `ac-1_prm_1` — the legacy coarse parameter, carrying `prop name="aggregates" ns="http://csrc.nist.gov/ns/rmf"` values pointing at finer parameters
- `ac-01_odp.01`, `ac-01_odp.02` — the granular SP 800-53A organization-defined parameters it aggregates, each with its own `label` and `guideline`

Consequences:

- **Bind at the granular ODP tier**, not the aggregate, or two distinct requirements collapse into one value.
- **Consumer queries (§4.5) must traverse aggregation.** A narrative citing `ac-1_prm_1` is affected by a change to either underlying ODP.
- **Parameters may be defined at group or catalog level**, not only inside a control — which is how a customer profile can define a value once across many controls rather than repeating it.

**Two structurally different parameter kinds**, and they merge differently:

| Kind | Structure | Merge semantics |
|---|---|---|
| **Assignment** | Free value with `label` and `guideline` | Scalar comparison — strictest / loosest / halt |
| **Selection** | `select how-many="one-or-more"` with enumerated `choice` elements | **Set operations, not scalar comparison.** Narrowing a choice set is a tightening; the merge policy in §4.4 must treat these as sets |

**Cross-revision parameter correspondence is partly native.** Params carry `alt-identifier` props precisely to preserve correspondence across SP 800-53 versions. Use them before hand-building parameter-level crosswalk entries — the control-level Control Mapping (§3.6) does not by itself resolve which parameter became which.

**Component implementations reference parameters, never literal values.** A statement cites `ac-2_prm_3` rather than "30 days." The same component resolves correctly into a C-Moderate system and a C-High system because the profile supplies the value. This is what makes the library reusable across categorizations instead of reusable-with-manual-edits.

Binding precedence, most specific wins:

```
System-level set-parameter (SSP)
   └─► Program tailoring profile        (only where customer leaves it open)
          └─► CUSTOMER REQUIREMENTS PROFILE   ◄── contractual; terminal for what it binds
                 └─► Overlay profiles (in import order)
                        └─► Axis baseline profiles
                               └─► Catalog default
```

A parameter bound by the customer profile is settled. Where a lower tier and the customer profile disagree, the customer value governs and the conflict is recorded, not resolved silently. Where a *higher* tier would override a customer binding, the platform blocks and routes the question to the customer.

### 4.2 Rendering

The SCTM's requirement column renders **resolved** prose — parameters substituted for this system. Free from profile resolution, consistent by construction, and diffable across systems in a way hand-authored text never is.

### 4.3 Declared ODP Dependencies

Each component implementation declares:

- **`consumes`** — which ODPs the narrative references, at the granular tier
- **`valid_range`** — the bound values under which the implementation actually holds (e.g. valid only where session timeout ≤ 15 minutes)
- ~~`catalog_revision`~~ — **not needed.** `control-implementations[].source` is native: a URI naming the profile or catalog the implementation is claimed against. Verified in the published component-definition example.

Components also natively carry `set-parameters` — the MongoDB example binds `sc-8_prm_1` to `confidentiality`. A component therefore *asserts* parameter values, giving the compatibility engine (§8.7) a native surface: does the component's asserted value contradict the target system's resolved binding?

**Serialization note.** `consumes` is a list of tokens and fits as repeated namespaced props. `valid_range` is structured — an operator, a bound, possibly a choice subset — and **prop values must be atomic**, so it must be carried as a `link` to a structured resource or as a namespaced `part`. Deciding this before authoring the first component definition avoids a library-wide migration later.

This turns reuse from a judgment call into a contract.

### 4.4 Parameter Conflict Surfacing

**Scope note.** Because NIST-style baselines bind no parameters (§3.3), this applies between overlays, and between overlays and the customer profile — not among the axis profiles.

The Profile model's **`merge`** section exists for exactly this: it provides directives for resolving conflicts where two or more variations of a control are imported as a result of multiple import statements. Use it rather than resolving outside the model — then the resolution is expressed in the profile itself and is inspectable by any OSCAL tool, not buried in platform logic.

Where contributing profiles bind the same ODP to different values and no merge directive settles it, resolution halts on that parameter and presents the conflict with each contributing profile and its value. The SSE decides; the decision is written into the profile's `merge`/`modify` and recorded as a tailoring action. No global lowest-wins or strictest-wins rule — the correct answer depends on whether an overlay is raising a floor or an axis is simply less demanding, and selection parameters merge as sets rather than scalars.

### 4.5 Parameter-Consumer Queries

The single largest precision gain in the change engine. When an overlay revision or baseline update changes a parameter binding, the affected set is an **exact query** — every component implementation and system narrative whose `consumes` list includes that ODP — rather than a text search for stale values. This makes Trigger 4 blast radius precise (§5.1).

---

## 5. Change Event Model

Every perturbation of the package is a typed **change event** with a computable blast radius.

```
[Intake] ──► [Classify Trigger] ──► [Compute Blast Radius] ──► [Confirm Scope]
                                                                     │
                                                                     ▼
                        [Regenerate Artifacts] ◄── [Review] ◄── [Tasks]
                                    │
                                    ▼
                        [Event Closed — package consistent]
```

An event stays **open until every derived task closes**. Package consistency is a state the platform asserts, not a hope.

### 5.1 Trigger Taxonomy

**Trigger 1 — Authorization boundary change**
*Component added, removed, or replaced: new GSE in a configuration, a hardware part swapped to a different vendor, a software module added to the mission computer.*

| Impact | Computable |
|---|---|
| SP boundary section update | Yes — flag section, generate task |
| New component needs implementation narratives | Yes if in library; task if new |
| **NVM subsection** where the component has non-volatile memory | Yes — component attribute rule (§8.6) |
| SCTM reflects controls now implemented differently or newly applicable | Partially — controls touched by the component's declared implementations; SSE reviews the residual |
| Parameter compatibility of the incoming component | Yes — §8.7 |

**Trigger 2 — Vulnerability / POA&M lifecycle**
*CVE published against a fielded component, scan finding returned, POA&M milestone due. Continuous after IATT or ATO.*

| Impact | Computable |
|---|---|
| Status regresses on affected controls (typically **RA-5, SI-2, CM-6**) | Yes — and the join is native: `finding.target` names an `objective-id` with `status.state`, and `finding.implementation-statement-uuid` points straight back to the SSP statement |
| POA&M entry created or updated | Yes |
| Risk assessment section documenting exposure and interim mitigations | Task-generated; narrative is SSE judgment |
| Authorization posture impact where severe | Flagged for ISSM/AO — never auto-decided |

Requires inbound CVE and finding feeds mapped **to components**, so a finding on a shared component fans out to every consuming system.

**Trigger 3 — Authorization milestone transition**
*IATT → ATO, ATO renewal, dev → production.*

| Impact | Computable |
|---|---|
| Scoped-down set with accepted risks → complete evidence for every baseline control | Yes — target-state gap report (§6) |
| Open IATT POA&Ms need resolution or approved risk acceptance | Yes — filtered queue |
| SP shifts from forward-looking plans to evidence-backed statements | Partially — flag future-tense narratives |

**Trigger 4 — Baseline or overlay update**
*Customer or authorizing body issues updated overlay parameters; NIST revises 800-53; CNSS updates 1253; AO adds program requirements. Rare, high blast radius.*

| Impact | Computable |
|---|---|
| Control set re-derived | Yes — profile re-resolution and diff |
| New controls added | Yes, with tasks |
| Removed controls need tailoring-out justification | Yes — flagged; rationale is SSE work |
| **Parameter value changes** | **Yes — exact `consumes` query (§4.5)** |
| SP sections reflecting updated requirements | Task-generated per affected section |

Runs **per program**, not globally, because revisions are pinned per program. Rev 4 → Rev 5 resolves through the Control Mapping crosswalk, with non-equivalent relationships gated on human review.

**Trigger 5 — Configuration divergence across variants**
*Configurations fork from a shared baseline into distinct variants — different hardware, environments, or threat exposures. Triggers 1 and 6 often live underneath.*

| Impact | Computable |
|---|---|
| SP boundary definitions delineate shared vs divergent implementations | Yes — inheritance provenance carries it |
| SCTM needs per-configuration tracking | Yes — three delivery modes |
| Configuration-specific components need own narratives and NVM subsections | Yes — attribute rules |

**Three SCTM delivery modes**, selectable per program: separate SCTMs, separate tabs in one workbook, or per-configuration status columns in one matrix. All render from the same records. Plus the **delta package**: the subset showing exactly what differs from an approved parent.

**Trigger 6 — Security-relevant capability change**
*A new capability with security implications — cryptographic subsystem, classified data handling path, new communication interface, COMSEC-controlled device. Introduces new security functions, data flows, or compliance requirements rather than swapping a part. Examples: GPS receiver requiring key loading, encrypted comm link, new test or maintenance interface handling sensitive data, a device changing CCI status.*

| Impact | Computable |
|---|---|
| New or revised narratives, particularly **SC-12, SC-13, SC-28, AU-10** | Control set flagged; narratives are SSE work |
| SP architecture sections, data flow diagrams, key management sections, CCI handling | Yes — flag by capability type |
| **New supporting documents** — CONOPS, key handling plan, sanitization plan | Yes — capability-driven requirements (§8.9) |
| SP must reference, incorporate, and align with those documents | Reference tracked; alignment flagged |

### 5.2 Cross-Cutting

- **Typed at intake.** Free-text events are available but report as unclassified in the audit trail.
- **Proposed, then confirmed.** The engine computes; the SSE reviews and adjusts scope with rationale. Never a silent auto-edit of delivered content.
- **Events nest.** Trigger 5 commonly contains 1 and 6. Parent/child with rolled-up closure.
- **Explicit closure.** Open / In Progress / Pending Review / Closed. Open events appear on every readiness view and the program rollup.
- **Shared-component fan-out**, subject to program segregation (§14, Q6).

---

## 6. Authorization Lifecycle

Authorization state is a first-class system attribute because it sets the evidence bar.

```
[Pre-authorization] ──► [IATT] ──► [ATO] ──► [Reauthorization] ──► [ATO']
                                     └──► [Decommission]
```

| State | Control set | Acceptable status | Evidence bar |
|---|---|---|---|
| **Pre-authorization** | Draft baseline | Planned dominant | Design intent; forward-looking narratives |
| **IATT** | Scoped-down, accepted risks | Planned acceptable with approved risk acceptance | Partial; interim mitigations documented |
| **ATO** | Complete baseline | Implemented / N/A / Inherited; Planned only with approved POA&M | Evidence-backed for every control |
| **Reauthorization** | Re-derived against current baseline | As ATO | Current evidence; expired artifacts fail |
| **Dev → Production** | Production boundary set | As ATO | Production-environment evidence, not dev |

- **Target-state readiness.** Every readiness view evaluates against a target. The IATT → ATO gap report — every control acceptable now but not at ATO, plus every open POA&M requiring resolution or accepted risk — should take minutes.
- **Narrative mode shift.** Flag future-tense narratives when the target state is ATO. A real and repeated finding.
- **Transitions are change events** and run through §5.

---

## 7. Core Architectural Decisions

| ID | Decision |
|---|---|
| **AD-1** | The SCTM is a projection, not a document. One editable record per (system, control); SCTM, SP, and POA&M are renders. No output artifact is ever hand-edited. |
| **AD-2** | **OSCAL is the internal data model.** Extensions go in namespaced `props`; core structures are never altered. |
| **AD-3** | **Baselines are profile composition.** Nine atomic axis profiles + overlays + tailoring. Selection provenance persisted from the resolution trace. |
| **AD-4** | **Parameters bind late.** Component implementations reference ODPs, never literal values, and declare their dependencies and valid ranges. |
| **AD-5** | Evidence is federated, not stored. Link integrity and staleness are first-class. |
| **AD-6** | Control implementations attach to components, not only systems. |
| **AD-7** | A variant is a delta, not a copy. |
| **AD-8** | Program is a first-class level above system. |
| **AD-9** | **The change event is the unit of work.** Controls and documents are what events touch. |
| **AD-10** | **Status is versioned and reversible.** Regression is a normal transition, not an error. |
| **AD-11** | **Readiness is evaluated against a target authorization state**, never absolutely. |

---

## 8. Data Model

### 8.1 Hierarchy

```
PROGRAM
├── customer, deliverables, SCTM template(s), classification guidance
├── catalog revision pin, program-level common controls, tailoring profile
│
├── SYSTEM A ── categorization ── auth state ── resolved profile ── SSP ── SCTM
├── SYSTEM B ── categorization ── auth state ── resolved profile ── SSP ── SCTM
└── SYSTEM C ── ...
    └── VARIANT C-2 ── delta only ── SCTM (+ delta package)

COMPONENT LIBRARY (cross-program, separately governed)
└── OSCAL component-definitions with attributes, ODP dependencies, revision tags
```

Two systems in one program can legitimately have different control sets — each carries its own categorization and authorization state.

### 8.2 Entities by Disposition

**OSCAL-native:** `catalog` · `axis_profile` (9) · `overlay_profile` · **`customer_requirements_profile`** · `program_tailoring_profile` · `system_profile` (composition) · `resolved_profile` (snapshot) · `control_mapping` (cross-revision crosswalk) · `component_definition` · `ssp` · `poam` · `assessment_plan` / `assessment_results`

Add: `capability` (component grouping) · `leveraged_authorization` (inheritance) · `observation` / `risk` / `finding` (assessment results) · `assessment_procedure` content shipped inside the NIST catalog as `part` elements.

**OSCAL-extended:** `component` attributes (§8.6, props) · ODP dependencies (§4.3, **link or part — not props**) · selection provenance (props) · custom SCTM fields (props) · classification markings (props) · POA&M milestone ownership

**Fully custom:** `program` · `categorization` approval workflow · `authorization_state` and target-state readiness · `change_event` · `task` · `implementation_status_history` · evidence **link health and reachability state** · `supporting_document` **alignment state** · `sctm_template` · `tailoring_action` · `sp_section`

Note what left this list: `risk_acceptance` (Assessment Results *operationally required risks* and *risk adjustments*), evidence validity windows (result expiration), and assessment procedures (catalog `part` content).

### 8.3 SCTM Row Composition

Not stored. Assembled per §2.6 from resolved profile + SSP + evidence registry + workflow layer, with the coverage assertion enforced before export.

### 8.4 Implementation Status

`Implemented` · `Partially Implemented` · `Planned` · `Not Applicable` · `Alternate Implementation` · `Inherited`

Versioned and bidirectional. Every transition records timestamp, actor, cause, and driving change event. When a POA&M closes, prior evidence and narrative are recoverable rather than re-authored. Acceptability is evaluated against target authorization state, never a fixed rule.

### 8.5 Inheritance Resolution

```
1. Variant-level override
2. System-specific implementation        → SSP implemented-requirement
3. Component-provided implementation     → component-definition / capability
4. Parent system inheritance (variants)  → leveraged-authorization
5. Program-level common control provider → leveraged-authorization
6. Enterprise common control provider    → leveraged-authorization
7. UNSATISFIED → task + candidate POA&M item
```

**Tiers 4–6 are one native mechanism, and it is a two-sided contract — richer than the custom design it replaces.** Verified against `oscal_leveraged-example_ssp.json` and `oscal_leveraging-example_ssp.json`:

```
PROVIDER SSP                                  CONSUMER SSP
control-implementation                        control-implementation
 └ implemented-requirements[]                  └ implemented-requirements[]
    └ statements[]                                └ statements[]
       └ by-components[]                             └ by-components[]
          └ export                                      ├ inherited[]
             ├ provided[]        ◄── provided-uuid ─────┘  (what was taken)
             │   {uuid, description,                    │
             │    responsible-roles}                    │
             └ responsibilities[] ◄─ responsibility-uuid┘
                 {uuid, provided-uuid,          └ satisfied[]
                  description,                      {uuid, responsibility-uuid,
                  responsible-roles}                 description,
                                                     responsible-roles}
```

The provider declares **both** what it supplies *and* what the consumer must still do. The consumer declares **both** what it inherited *and* how it discharged each assigned responsibility. Every link is UUID-based and every side carries `responsible-roles`.

Four consequences:

- **A parent system and a common control provider are the same construct** at different scopes. No distinct machinery for variants versus enterprise CCPs.
- **The hybrid control is native**, and better specified than `hybrid_delta`: `inherited` is the provider's half, `satisfied` is the consumer's half, and the two are separately attributed.
- **Unsatisfied responsibilities are a computable gap.** For every `inherited` item, the provider's linked `responsibilities` must each have a matching `satisfied` entry. That is a completeness check the platform runs automatically — and it is exactly the failure mode where a program assumes a CCP covers something it explicitly assigned back to them. **Add it to the coverage assertion (§2.6).**
- **Granularity is statement-level.** The contract attaches at `implemented-requirements[].statements[].by-components[]` — "in satisfaction of AC-2, part a" — not at whole controls.

Referential integrity is checkable when the leveraged SSP is accessible in OSCAL form. Where a provider does not publish OSCAL, the reference degrades to an unvalidatable external `link`; that gap must be visible on the readiness view rather than silently trusted.

Responsibility itself is `control-origination`, not a custom field. Overriding inherited values requires rationale and writes a `tailoring_action`.

### 8.6 Component Attributes → Required Documentation

Component `props` drive documentation requirements automatically. Generalization of the NVM rule.

| Attribute | Generated requirement |
|---|---|
| `has_nvm` | NVM subsection in the SP; sanitization procedure |
| `is_cryptographic` | Key management section; SC-12 / SC-13 narratives |
| `is_cci` | CCI handling procedures; accountability documentation |
| `handles_classified_data` | Data flow diagram update; SC-28 narrative |
| `external_interface` | Boundary diagram update; SC-7 narrative; ICD |
| `requires_key_loading` | Key handling plan reference |

The rule table is data, not code. Requirements instantiate as tasks on the triggering change event.

**Two modeling notes.** A component may itself be a **policy, process, or procedure**, so several generated requirements (sanitization procedure, key handling plan) are satisfied by adding a *component*, not by attaching a document — which means they inherit the library's reuse and versioning for free. And where a control is satisfied only by several components acting together — a crypto subsystem plus its key loading procedure plus its handling policy — that is a **`capability`**, which is the native construct for Trigger 6's "new security-relevant capability.

### 8.7 Reuse Compatibility

Whether a component implementation can drop into a target system, computed rather than judged:

| Check | Fails when |
|---|---|
| **Source alignment** | The component's `control-implementations[].source` names a different profile or catalog than the target resolves to |
| **Asserted value conflict** | A component `set-parameters` value contradicts the target's resolved binding |
| **Parameter resolution** | An ODP in `consumes` has no binding in the target's resolved profile |
| **Range validity** | A bound value falls outside the implementation's declared `valid_range` |
| **Catalog revision** | Component authored against a different revision; requires a reviewed crosswalk mapping |
| **Control presence** | The target profile does not select the control the implementation addresses |
| **Attribute obligations** | Component attributes introduce documentation requirements not yet satisfied |

Runs on composition, on variant derivation, and on every Trigger 1 and Trigger 4 event.

### 8.8 POA&M

**Almost entirely native.** The POA&M model carries `import-ssp`, `system-id`, `observations`, `risks`, and `poam-items`; each `poam-item` links to both `related-observations` and `related-risks`. Risk itself carries nearly everything earlier drafts of this spec invented:

| Need | Native field |
|---|---|
| Risk acceptance | `risk.status: deviation-approved` |
| Interim mitigations | `risk.mitigating-factors` |
| Milestone deadline | `risk.deadline` |
| Remediation lifecycle | `remediations[].lifecycle` (planned / …) with title and description |
| Risk scoring | `characterizations[].facets` — likelihood and impact against an org-defined `system` URI |
| Source evidence | `related-observations` → `observation` with `methods`, `subjects`, `collected`, `expires` |
| Component scoping for fan-out | `observation.subjects[].type: component` |

**Custom remainder:** milestone *ownership and assignment*, aging and escalation, change-event linkage, and the ISSM/AO authorization-impact flag.

Milestone due dates generate Trigger 2 events. Open items feed the Trigger 3 gap report.

### 8.9 Supporting Documents

Distinct from evidence. Evidence *proves* a control; a supporting document is a companion deliverable the SP must reference, incorporate, and align with — CONOPS, key handling plan, sanitization plan.

`document_type` · `uri` · `owner` · `version` · `approval_state` · `required_by` · `referenced_by_sp_sections[]` · `alignment_state` · `last_alignment_check` · `classification_marking`

Two tracked failure states: **required but missing**, and **referenced but stale**.

### 8.10 Evidence Artifact

`source_system` · `uri` · `artifact_type` · `title` · `owner` · `collected_date` · `validity_window` · `scope` · `version_stamp` · `link_state` · `last_verified` · `environment` (dev / test / production) · `classification_marking`

Stale when past validity window, source-modified after collection, or unreachable past threshold. `environment` matters at dev → production: dev evidence does not satisfy a production authorization.

**Split between native and custom.** Assessment-derived evidence belongs in Assessment Results `observation`, which explicitly holds evidence of compliance *or non-compliance*, and result expiration covers the validity window natively. What stays custom is the part OSCAL cannot do: **link health and reachability**. NIST states plainly that external `link` references carry no assurance the author has access to the linked data and therefore cannot be validated. That is the exact gap the Evidence Registry fills — and the reason it is a real module rather than a thin wrapper.

Rendered into OSCAL as back-matter `resource` entries with `rlink`; back-matter syntax is identical across all models, so the same pattern works from catalog to POA&M.

---

## 9. Operational Workflows

### 9.1 Initial Package Build

**Catalog & Profile Ingest.** Load NIST-published Rev 4 and Rev 5 catalogs and 800-53B baselines. Build or load the nine 1253 axis profiles and overlay profiles. Diff on import; report per-system impact.

**Program Setup.** Customer, deliverables, SCTM template and delivery mode, custom fields, classification guidance, catalog revision pin, program tailoring profile, program-level common controls.

**System Definition & Composition.** Define the boundary; compose from the component library. Compatibility checks run at composition. Attributes instantiate documentation requirements. Coverage appears before authoring begins.

**Categorization & AO Approval.** SSE proposes C, I, A with per-axis rationale. Overlay floors apply automatically and visibly. AO review and approval; state carries into every downstream artifact.

**Profile Resolution & Tailoring.** Compose axis profiles + overlays + tailoring. Resolve parameters; surface conflicts. Every control shows why it is present. Removals become N/A with rationale. Resolved profile snapshots on approval; every SCTM cites the snapshot.

**Implementation Authoring.** Author or confirm statements for controls not satisfied by inheritance. Statements reference ODPs, not literals. Inherited text read-only with provenance; overriding explicit.

**Evidence Linking & Tasking.** Link evidence; where absent, create tasks with owners and dates. Where delivery schedules are won or lost.

**Review & Generation.** Author → ISSO → ISSE → ISSM. Coverage assertion runs. Generate SCTM in the customer's template and delivery mode, plus SP, POA&M, and evidence index — all renders of the same records, marked, timestamped, hash-stamped, citing resolved profile version, catalog revision, categorization approval state, and authorization state.

### 9.2 The Change Loop *(steady state — where most of the work lives)*

```
[Typed intake] ──► [Blast radius computed & confirmed]
                              │
        ┌─────────────┬───────┴───────┬─────────────┐
        ▼             ▼               ▼             ▼
  [Controls to   [SP sections   [Evidence to   [Supporting
   re-author]     to update]     re-collect]    docs to align]
        └─────────────┴───────┬───────┴─────────────┘
                              ▼
              [Tasks → Review → Regenerate → Closed]
```

A system with open change events is a system without a current package, and reports as such.

### 9.3 Continuous Monitoring

Evidence link reachability and source modification · validity expiry · catalog revisions affecting pinned programs · POA&M milestone dates · authorization expiry approaching · supporting document drift. Each finding generates a typed change event or a task on an existing one. Nothing surfaces as a dismissible notification.

---

## 10. Module Specifications

**A — Catalog & Profile Manager.** Import NIST-published catalogs and baselines · **generate the nine axis profiles, the NSS parameter profile, and Appendix F overlay profiles from CNSSI 1253 tables (§3.4)** · **customer requirements profile ingestion with source citation and review gate** · profile composition and resolution with provenance capture including customer-override attribution · concurrent revision support with per-program pinning · cross-revision crosswalk as OSCAL Control Mapping content, with non-equivalent relationships routed to review · parameter conflict surfacing · version diffing with per-system impact.

**A2 — 1253 Table Ingestion & Profile Generator.** Parse Table D-1 allocations (nine cells, `X` / `+` / blank / Withdrawn) and Table D-2 (objective association, justification vocabulary, common/inheritable flag) · normalize enhancement IDs and **fail loudly on unresolvable IDs** · handle the PM family and withdrawn rows as special cases · emit nine selection-only axis profiles plus an Appendix E parameter profile plus Appendix F overlay profiles · pin 1253 edition to catalog revision and validate the pairing · diff against the prior edition with review sign-off before profiles go live.

**B — Program Workspace.** Program definition, customer, deliverables · SCTM template and delivery mode · custom field definitions · catalog revision pin · program tailoring profile · program-level common controls · cross-system rollup: readiness by target state, evidence currency, open change events, open POA&Ms, delivery dates.

**C — Categorization Manager.** Per-axis proposal with mandatory rationale · automatic overlay floor application with attribution · AO approval workflow · versioned recategorization · impact preview before committing an axis change.

**D — Component Library.** OSCAL component-definitions with typed attributes and declared ODP dependencies · attribute-driven documentation rules as editable data · revision tagging · reverse impact query required before any edit · versioning · CVE and finding fan-out · separately governed cross-program tier.

**E — Reuse Compatibility Engine.** The checks in §8.7, run on composition, variant derivation, and Triggers 1 and 4 · parameter resolution and range validation · cross-revision mapping gate · pre-flight report before a component is added to a system · batch mode: "which of these 40 components can drop into this new variant unchanged."

**F — Change Impact Engine.** ⭐ Typed intake across all six triggers · blast radius computation per type, including exact parameter-consumer queries · proposed-then-confirmed workflow · automatic task generation with suggested owners from assignment history · nested parent/child events with rolled-up closure · closure gating · inbound feeds: CVE and scan findings mapped to components, POA&M milestones, catalog publications, authorization expiry.

**G — Authorization Lifecycle Manager.** Versioned state with effective dates · target-state selection · state-specific evidence bar evaluation · IATT → ATO gap report · future-tense narrative detection · risk acceptance register with authority, scope, expiry · reauthorization countdown.

**H — POA&M Manager.** First-class lifecycle with milestones and owners · status regression driven into affected implementations with history · interim mitigation narratives feeding the SP risk assessment section · component-level fan-out · risk acceptance linkage · authorization impact flagged to ISSM/AO.

**I — Implementation Workspace.** Primary authoring surface.

| Column | Content |
|---|---|
| Control | ID, title, **parameter-resolved text**, and why it is in this baseline (axis + overlay provenance) |
| Responsibility | System-specific / inherited / hybrid / CCP / N/A |
| Provenance | Full inheritance resolution chain |
| Implementation | Narrative with ODP references — editable, or read-only if inherited |
| Status | Current status, history, and acceptability against target state |
| Evidence | Linked artifacts with currency indicators |
| Open items | Change events and POA&Ms touching this control |
| Custom | Program-defined template columns |
| Owner / Due | Assignment and aging |

Filterable by family, status, responsibility, owner, evidence currency, selecting axis, overlay-modified, ODP consumed, open event, and target-state gap.

**J — SCTM Projection & Template Engine.** Column mapping per §2.6 · customer layout import or definition · typed custom fields with vocabularies · three delivery modes selectable per program · coverage assertion enforced before export · exact-format XLSX preserving headers, ordering, styling · customer markup re-import mapping assessor comments back to source records · template versioning.

**K — Evidence Registry.** SharePoint, Lucid, Confluence, ticketing, repository connectors with URL fallback · scheduled link health · validity windows and staleness · scope and environment enforcement · reverse lookup · orphan reporting · SSP back-matter rendering.

**L — Supporting Document Register.** Capability- and attribute-driven requirements · SP reference tracking · alignment state with review workflow · missing-vs-stale distinction · version and approval tracking.

**M — Task & Workflow Engine.** Assignment against controls, evidence, documents, or POA&M items · normally parented to change events · owner, due date, blocker, escalation · aging and per-owner queues · review chain · full audit log.

**N — Artifact Generation.** SCTM in customer format and delivery mode · OSCAL SSP (native) · POA&M · evidence index · supporting document index · variant delta package · IATT → ATO gap report · optional native OSCAL package export. All marked, timestamped, hash-stamped. Hand-editing structurally prevented.

**O — Technical Check Connector** *(Phase 4)*. STIG/SCAP results populate evidence records and generate Trigger 2 events. Published CCI-to-control mappings have lagged catalog revisions; treat the crosswalk as curation requiring review.

---

## 11. Deployment & Handling Constraints

| Constraint | Requirement |
|---|---|
| Network isolation | Fully functional with no outbound connectivity. No phone-home, no external webhooks. |
| Offline updates | Catalog, profile, overlay, and CVE feed updates as signed offline bundles. |
| Classification marking | Every record marked; artifacts carry banner and portion markings; aggregates at highest constituent level. |
| Program segregation | No cross-program visibility via any query path, including search, reverse lookup, and the component library. |
| Audit | Immutable log of all record changes, approvals, categorization decisions, status transitions, and exports. |

---

## 12. Feature Matrix

| ID | Module | Requirement | Acceptance Metric |
|---|---|---|---|
| FT-OSC-01 | Platform | OSCAL-native model | Generated SSP validates against stock OSCAL schema with extensions ignorable |
| FT-OSC-02 | Platform | Extension discipline | Stripping platform-namespace props leaves a valid, meaningful document |
| FT-OSC-03 | Catalog Manager | Unmodified published content | NIST catalogs used as shipped; all modification via profiles |
| FT-PRF-01 | Profile Manager | Axis profile composition | System baseline = 3 axis imports + overlays + tailoring; union merge |
| FT-PRF-02 | Profile Manager | Selection provenance | Every control persists which axis and overlay contributed it |
| FT-PRF-03 | Profile Manager | Provenance attribution rule | Lowest contributing threshold recorded, full contributing set retained |
| FT-PRF-04 | Profile Manager | Parameter conflict surfacing | Divergent ODP bindings halt resolution pending explicit decision |
| FT-PRF-05 | Profile Manager | Concurrent revisions | Rev 4 and Rev 5 programs operate simultaneously without interference |
| FT-GEN-01 | Profile Generator | Table D-1 parsing | Nine-cell allocation read correctly; `X` and `+` both select, blank and Withdrawn do not |
| FT-GEN-02 | Profile Generator | ID resolution gate | Generation fails with a full report if any allocated ID does not resolve in the pinned catalog |
| FT-GEN-03 | Profile Generator | Edition/revision pairing | 1253 edition pinned to catalog revision; mismatched pairings blocked |
| FT-GEN-04 | Profile Generator | D-2 provenance | Justification vocabulary and objective association emitted as namespaced props; control cross-references as links |
| FT-GEN-05 | Profile Generator | Inheritable seeding | Controls flagged potentially common/inheritable proposed as `leveraged-authorization` candidates at system creation |
| FT-GEN-06 | Profile Generator | Appendix separation | Appendix E emitted as a parameter profile; Appendix F as discrete overlay profiles |
| FT-GEN-07 | Profile Generator | Edition diff | New 1253 edition produces a control-level diff and requires sign-off before going live |
| FT-CUS-01 | Profile Manager | Customer profile ingestion | Customer requirements authored as an OSCAL profile with per-entry source citation and review gate |
| FT-CUS-02 | Profile Manager | Customer supersession | Customer-bound parameters govern over overlay and baseline values |
| FT-CUS-03 | Profile Manager | Override attribution | Any customer-sourced control or value is marked as such in the SCTM with its citation |
| FT-CUS-04 | Change Engine | Customer requirement change | Treated as Trigger 4 with exact parameter-consumer blast radius |
| FT-OSC-04 | Platform | Namespaced extensions | Every extension prop carries the platform `ns`; all read paths filter on `ns`, not name alone |
| FT-OSC-05 | Change Engine | Native change detection | Upstream catalog, profile, and component changes detected via document UUID and `last-modified` |
| FT-OSC-06 | Platform | Native version graph | Profile snapshots and component versions use `document-id` plus RFC 5829 version links |
| FT-OSC-07 | Component Library | Identity discipline | Attribute changes preserve component UUID; vendor replacement mints a new one and raises Trigger 1 |
| FT-PRF-06 | Profile Manager | Crosswalk as Mapping model | Cross-revision mappings expressed as OSCAL Control Mapping with typed relationships; non-equivalent mappings queue for review |
| FT-PRM-01 | Parameters | Late binding | Component statements reference ODPs; no literal values in reusable text |
| FT-PRM-02 | Parameters | Resolved rendering | SCTM requirement column renders parameter-substituted prose |
| FT-PRM-03 | Parameters | Declared dependencies | Every component implementation declares consumed ODPs and valid ranges |
| FT-PRM-04 | Parameters | Consumer query | Parameter change returns exact affected set, traversing `aggregates` from coarse params to granular ODPs |
| FT-PRM-05 | Parameters | Tier-correct binding | Values bind at the granular ODP tier; aggregate params never bound directly |
| FT-PRM-06 | Parameters | Selection merge | Selection params merge as choice sets, not scalars |
| FT-INH-01 | SSP Layer | Native inheritance | Common control providers and parent systems both expressed as `leveraged-authorization` |
| FT-INH-02 | SSP Layer | Hybrid controls | Inherited and retained portions separately identified via `provided` / `responsibility` |
| FT-INH-03 | SSP Layer | Unvalidatable inheritance visible | Inheritance from a non-OSCAL provider is flagged on readiness, not silently trusted |
| FT-MAP-01 | Mapping | Method-aware relationships | Mappings record method (syntactic / semantic / functional); a pair may relate differently by method |
| FT-MAP-02 | Mapping | Statement granularity | Mappings expressible at control, statement, or objective level |
| FT-CAZ-01 | Categorization | Independent C-I-A | Trigraph stored end to end; no high-water-mark collapse |
| FT-CAZ-02 | Categorization | Automatic overlay floors | Overlay attach applies its minimum with visible attribution |
| FT-CAZ-03 | Categorization | AO approval state | Every export states AO-approved vs provisional |
| FT-CAZ-04 | Categorization | Recategorization impact | Axis change produces full baseline diff before commit |
| FT-SCT-01 | SCTM Engine | Projection only | No separately stored SCTM content; every column traces to a source |
| FT-SCT-02 | SCTM Engine | Coverage assertion | Export blocked unless every profile control has a row with status, narrative, and evidence or documented reason |
| FT-SCT-03 | SCTM Engine | Customer format | Exports in the customer's exact columns, order, headers |
| FT-SCT-04 | SCTM Engine | Delivery modes | Separate files, tabs, and per-configuration columns from one dataset |
| FT-SCT-05 | SCTM Engine | Typed custom fields | Customer columns are queryable, assignable data |
| FT-SCT-06 | SCTM Engine | Markup re-import | Customer comments map back to source records |
| FT-CMP-01 | Component Library | Reusable implementations | Statement authored once appears in every composing system with provenance |
| FT-CMP-02 | Component Library | Reverse impact query | Component edit surfaces all affected systems before save |
| FT-CMP-03 | Component Library | Attribute rules | `has_nvm` and peers auto-generate documentation requirements as tasks |
| FT-RUC-01 | Compatibility Engine | Parameter resolution check | Unbound consumed ODP blocks reuse |
| FT-RUC-02 | Compatibility Engine | Range validation | Bound value outside declared valid range flags incompatibility |
| FT-RUC-03 | Compatibility Engine | Revision gate | Cross-revision reuse requires a reviewed crosswalk mapping |
| FT-RUC-04 | Compatibility Engine | Batch pre-flight | Answers "which components drop into this variant unchanged" |
| FT-CHG-01 | Change Engine | Typed intake | All six triggers classifiable; untyped events report as unclassified |
| FT-CHG-02 | Change Engine | Blast radius | Each trigger computes affected controls, SP sections, evidence, documents |
| FT-CHG-03 | Change Engine | Confirm before apply | No delivered content edits without SSE scope confirmation |
| FT-CHG-04 | Change Engine | Closure gating | Package reports consistent only when all derived tasks close |
| FT-CHG-05 | Change Engine | Nested events | Parent/child with rolled-up closure state |
| FT-CHG-06 | Change Engine | Component fan-out | Component-level finding generates child events on every consuming system |
| FT-LFC-01 | Lifecycle Manager | State-specific bar | Same record evaluates differently against IATT vs ATO targets |
| FT-LFC-02 | Lifecycle Manager | Transition gap report | Lists every control and POA&M blocking transition |
| FT-LFC-03 | Lifecycle Manager | Narrative tense detection | Future-tense narratives flagged when target is ATO |
| FT-LFC-04 | Lifecycle Manager | Environment scoping | Dev evidence does not satisfy production authorization |
| FT-STS-01 | Implementation | Reversible status | Regression preserves prior narrative and evidence for recovery |
| FT-STS-02 | Implementation | Status history | Every transition records timestamp, actor, cause, driving event |
| FT-PAM-01 | POA&M Manager | First-class lifecycle | Milestones with owners and dates; due dates generate change events |
| FT-PAM-02 | POA&M Manager | Status propagation | Opening a POA&M regresses affected control status automatically |
| FT-PAM-03 | POA&M Manager | Authorization impact | Posture-affecting findings flag to ISSM/AO; never auto-decided |
| FT-SUP-01 | Supporting Docs | Requirement generation | Capability changes instantiate required document tasks |
| FT-SUP-02 | Supporting Docs | Alignment tracking | Distinguishes required-but-missing from referenced-but-stale |
| FT-EVD-01 | Evidence Registry | Federated references | Evidence resolves to its system of record; no primary copies |
| FT-EVD-02 | Evidence Registry | Link health | Unreachable links detected on schedule and routed to owners |
| FT-EVD-03 | Evidence Registry | Scope enforcement | Out-of-scope cross-system reuse blocked or flagged |
| FT-VAR-01 | Variant Engine | Delta derivation | Variant stores only deltas; unchanged controls resolve by inheritance |
| FT-VAR-02 | Variant Engine | Impact computation | Declared delta computes affected controls and invalidated evidence |
| FT-VAR-03 | Artifact Generation | Delta package | Exports the SCTM subset differing from the approved parent |
| FT-WFL-01 | Task Engine | Assignment and aging | Any gap assignable with owner, due date, escalation |
| FT-WFL-02 | Task Engine | Review chain | Approval states enforced with immutable audit trail |
| FT-GEN-01 | Artifact Generation | No hand-editing | Exports marked, timestamped, hash-stamped, regenerable |
| FT-DEP-01 | Platform | Isolated-network operation | Full functionality with no outbound connectivity |
| FT-DEP-02 | Platform | Marking propagation | Aggregates marked at highest constituent level |
| FT-DEP-03 | Platform | Program segregation | No cross-program visibility via any query path |

---

## 13. Success Metrics

| Metric | Direction |
|---|---|
| **Time from change event intake to package consistency** | Down — headline |
| Time to first draft SCTM for a new system in an existing program | Down |
| Time to first draft SCTM for a variant of an approved system | Down |
| **Change events closed without a downstream item missed** | Up toward 100% |
| **Component reuse rate without narrative edits** | Up — the ODP payoff |
| Median open change event age | Down |
| Systems with zero open change events at delivery | Up |
| SP/SCTM discrepancy count | Structurally zero |
| Coverage assertion failures at export attempt | Down |
| Rework cycles after customer SCTM review | Down |
| Time to produce an IATT → ATO gap report | Minutes, not weeks |
| % of controls with linked, current evidence | Up |
| Required-but-missing and referenced-but-stale supporting documents | Zero at delivery |
| Controls with no assigned owner or no selection provenance | Zero |

---

## 14. Phasing

**Phase 0 — OSCAL spike (now ~1 week; several original questions are already answered).**

*Resolved by direct inspection of `usnistgov/oscal-content` — no longer spike items:*
- ~~Catalog parameter modeling~~ — two-tier `_prm_N` / `_odp.NN` with `aggregates` and `alt-identifier` props, 1,600 params across 1,216 controls.
- ~~SSP categorization structure~~ — `security-impact-level` trigraph confirmed; NIST's example is M-M-L.
- ~~Leveraged authorization shape~~ — four-part `export` / `provided` / `responsibilities` / `inherited` / `satisfied` contract confirmed at statement level.
- ~~Whether baselines bind parameters~~ — they do not; LOW/MODERATE/HIGH are selection-only.
- ~~Component revision declaration~~ — native `control-implementations[].source`.

*Remaining spike work:*
1. Prototype the **Table D-1 parser** against the real PDF and hand-build one axis profile (C-Moderate) as a selection-only profile mirroring `NIST_SP-800-53_rev5_MODERATE-baseline_profile.json`. Validate every allocated ID resolves. Known parser hazards: wrapped titles, inconsistent enhancement ID formatting (`AC16(10)` vs `AC-2(13)`), IDs split across lines, the PM family's descriptive block, and `Withdrawn` rows spanning columns.
2. Compose it with a second axis profile; confirm union merge produces the expected control set and that the resolution trace preserves which import contributed each control.
3. Add an overlay profile with `modify.set-parameters` and a second overlay rebinding the same ODP; **confirm resolution behavior through nested imports** and exercise `merge` conflict directives rather than resolving outside the model.
4. Render one control's prose with `insert` substitution, binding at the **granular ODP tier** and confirming aggregate params resolve.
5. Decide and prototype the serialization for component ODP dependencies with `valid_range` — `link` to a structured resource, or namespaced `part`. Props cannot hold it.
6. Study the **FedRAMP baselines** as the closest production reference implementation.

Recommend running the spike against `NIST_SP-800-53_rev5_catalog.json` directly; the content repo supports sparse checkout, so only `examples/` and `nist.gov/SP800-53/rev5/json` are needed.

**Phase 1 — Single source of truth.** 1253 table ingestion and axis profile generation, profile composition, program and system definition, categorization with floors and AO state, tailoring, implementation authoring with ODP references, SCTM projection and template engine, SSP generation. *Kills artifact divergence and manual SCTM assembly.*

**Phase 2 — Evidence, work, lifecycle.** Evidence registry with SharePoint and Lucid connectors, link health, task engine, review chain, authorization state with target-state readiness, POA&M manager, supporting document register. *Kills evidence archaeology and untracked work; makes IATT → ATO a report instead of a project.*

**Phase 3 — Reuse and change impact.** Component library with attributes and ODP dependencies, reuse compatibility engine, change impact engine across all six triggers, variant derivation, delta packages, component fan-out, continuous monitoring. *Kills unmanaged change and re-authoring. Highest value.*

**Phase 4 — Automated checks.** STIG/SCAP connector feeding evidence and generating Trigger 2 events.

**Sequencing note.** Change Impact is the differentiator but cannot come first — blast radius computation needs the Phase 1 profile and parameter model and the Phase 2 evidence and lifecycle layers. Built early, it computes impact against records nobody trusts.

---

## 15. Open Questions

1. **Which CNSSI 1253 edition governs each program?** *(Supersedes the earlier "does published 1253 OSCAL exist" question — the platform generates the profiles from the tables, so published content is no longer needed.)* The **2014 edition is 800-53 Rev 4-based**; the **2022 edition is Rev 5-based**. Generating from the wrong edition against the wrong catalog yields unresolvable IDs and a silently wrong baseline. Confirm per program, and confirm which edition your customers actually cite in their requirements. Also confirm the current appendix update state, since appendices are refreshed on a periodic cycle independent of the base instruction.

2. **Axis enum — is Very High in scope?** Authoritative 1253 text shows L/M/H trigraphs; some secondary sources describe a VH level for NSS. Confirm against the revision your programs cite. Note this now has a schema consequence beyond the platform: OSCAL's published example uses `fips-199-moderate` / `fips-199-low` style values in `security-impact-level`, so a VH level requires an organization-defined value outside the FIPS 199 vocabulary.

3. **Precedence policy: customer profile vs local tailoring.** Can a program tailoring decision ever override a customer-bound control or parameter, or is the customer profile terminal for everything it touches? Recommendation is terminal, with conflicts raised to the customer. This is a contracts question as much as an engineering one and it determines resolver order.

4. **Parameter merge policy by class.** Below the customer tier: which ODP categories take strictest-wins, which take lowest-wins, and which always halt for human decision? Needs a written policy before the resolver is built.

5. **CVE and finding feed.** Authoritative inbound source for Trigger 2, and what maps a CVE to a component in the library? That join is the difference between fan-out working and not. On isolated networks it arrives as an offline bundle, capping freshness.

6. **Component ownership.** Who owns and approves a shared component's implementations and ODP declarations, given that an edit fans out across programs? Named role needed before Phase 3.

7. **Cross-program component sharing vs segregation.** Proposed resolution: a separately governed, non-program-scoped component tier with its own access model, where fan-out notifies the consuming program's ISSO without exposing the originating program. Confirm with program security before building.

8. **Authorization path per program.** DoD RMF via eMASS, DCSA under DAAPM, or SAP under JSIG? Does not change the baseline but determines whether an eMASS export is mandatory. JSIG's presence in the overlay set implies SAP work — design markings and segregation accordingly.

9. **Custom field governance.** Who defines new customer template columns? Uncontrolled proliferation fragments cross-program reporting within a year.

10. **Catalog revision policy.** Default for pinned programs when 800-53 or 1253 revises — migrate at reauthorization, on customer direction, or indefinite pinning? And what is the review standard for accepting a Control Mapping relationship as authoritative — is `intersects-with` ever sufficient to carry a component implementation across revisions, or does only `equivalent-to` pass unreviewed?

11. **Highest classification handled.** Determines deployment topology and whether one instance can serve all programs.
