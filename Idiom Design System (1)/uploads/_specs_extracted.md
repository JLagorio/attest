

=====================
### Program_Assurance_Platform_Vision_One_Pager_v1.0.docx  (3388 chars)
=====================
Program Assurance Platform
The vision on a page  ·  v1.0  ·  August 12, 2026
The problem
Every program rebuilds the same security knowledge. Which controls apply, who owns which system, what has already been assessed, what evidence exists — today those answers live in per-program spreadsheets, inboxes, and people’s heads. Shared services are asked the same questions by every program that consumes them. The workbook is stale the day it ships, and the twentieth program costs as much as the first.
The idea
One living, versioned graph connecting the three questions the organization keeps answering separately: who is responsible (organization units, owners, delegation), what exists (assets, shared services, products, systems, components), and what must be true (controls, requirements, assessments, evidence, findings). Assurance is established once, at the highest scope where it is valid, and reused everywhere it still applies — as a governed reference with conditions and provenance, never a copy. Missing knowledge is recorded as Unknown and becomes work; it is never silently marked satisfied.
Where we start
1. Catalog (R0). Model the organization units, owners, and assets that real work actually touches. No enterprise-cleanup prerequisite — the catalog grows through use.
2. Controls (R1). Import authoritative NIST SP 800-53 controls and SP 800-53A assessment objectives (OSCAL-aligned). Layer organization profiles, tailoring, parameters, and customer requirements on top with full provenance; source text is never edited.
3. SCTM (R2). Generate the Security Controls Traceability Matrix from the live graph: every obligation traced to its source, allocation, implementation, evidence, and current state. The workbook becomes an export, not a hand-maintained artifact.
How it compounds
4. Assessments (R3). Objectives become plain-language, delegated tasks routed to the people who actually know. Contributors respond; authorized reviewers determine. A “yes” is never automatic compliance.
5. Inheritance (R4). Shared services publish Reusable Assurance Packages: what they cover, under what conditions, and what stays with the consumer. Programs inherit the valid portion and work only the residual — with remediation, risk, and POA&M for what falls short.
6. Learning (R5). Program discoveries are promoted upward into canonical knowledge. Any change traces to exactly the assurance it touches. Every cycle leaves the organization knowing more.
What it is not
No opaque “X% secure” score — dashboards show factual states. Not a CMDB, PLM, or project-management replacement — authoritative sources stay authoritative. No AI-made assurance decisions — automation proposes, accountable humans approve.
The product, grouped
Foundation: Home · Organization · Assets    Obligations: Library (controls, profiles, requirements, templates)    Delivery: Products & Systems · Programs (SCTM)    Assurance work: Assessments · Findings · Risks & POA&M
Success looks like
The second assessment is cheaper than the first; the twentieth program starts ahead of the fifth. Any change shows its blast radius immediately. And on any obligation, anyone can ask “Why is this here?” and get a complete answer.
Read next: PRD (why and what) → Product & System Specification (operating model) → Domain & Rules Specification (canonical semantics) → UX & Workflow Specification (the experience).

=====================
### Program_Assurance_Platform_PRD_v1.1.docx  (42277 chars)
=====================
Program Assurance Platform
Product Requirements Document
Product thesis Assurance should be established at the highest valid scope and reused everywhere it still applies. The platform lets teams begin either from the organization or from a product/program. Both paths use the same assessment, asset, inheritance, findings, and assurance model so every cycle leaves behind reusable knowledge rather than another isolated workbook.
Field
 | Value
 | 
Status
 | Draft for product, security, design, and engineering review
 | 
Version
 | 1.1 Draft
 | 
Date
 | August 12, 2026
 | 
Audience
 | Product, Systems Security Engineering, Security/GRC, System Engineering, HW/FW/SW Engineering, Assessment, Program Leadership
 | 
Document purpose
 | Define why the product exists, who it serves, the product principles, major user journeys, boundaries, MVP, outcomes, and product-level decisions. The companion documents go progressively deeper: the Vision One-Pager tells the story in a page; the Product & System Specification defines the operating model; the Domain & Rules Specification is the canonical semantic contract for entities, states, and rules; the UX & Workflow Interaction Specification defines the experience. Where semantics conflict, the Domain & Rules Specification governs.
 | 

Contents
1. Executive Summary
2. Why This Exists
3. Users and Jobs to Be Done
4. Product Principles
5. Product Model at a Glance
6. Primary Product Experience
7. Major User Journeys
8. Product Scope and Boundaries
9. MVP and Release Strategy
10. Outcomes and Metrics
11. Product Risks and Decisions
12. Open Product Questions
Appendix A. Product Glossary
1. Executive Summary
The Program Assurance Platform is an internal assessment-and-inheritance operating system for organizational and product assurance. It replaces a pattern where security knowledge is repeatedly reconstructed in program workbooks, questionnaires, meetings, spreadsheets, and individual expertise.
The product supports two equally valid ways to begin:
Organization-first
 | Product/program-first
 | 
Model only the organizational units needed for current work; catalog policies, procedures, shared services, and assets as they are encountered; run ad hoc or recurring assessments; delegate questions and evidence requests; publish reusable assurance at the highest valid scope.
 | Create a product, system, or program even when the organization catalog is incomplete; inherit any applicable organizational assurance and known product/system baseline; assess the delta and unknowns; delegate technical work; create findings and remediation; promote reusable discoveries upward.
 | 

Neither path requires the other to be finished. A team can begin with a single shared service assessment, a single physical product, or a single program under deadline. The platform becomes more complete through actual work.
Where the build starts. Delivery begins with the three layers every program already understands: the Catalog (who owns what, and what exists), Controls (authoritative NIST SP 800-53/53A content, profiles, and tailoring - OSCAL-aligned), and the SCTM (the Security Controls Traceability Matrix, generated from the live graph rather than handcrafted in a spreadsheet). The assessment engine, assurance inheritance, and the organizational learning loop then animate and compound that foundation.
The product connects three models that are usually fragmented across GRC, asset, engineering, and program tools:
1. Responsibility model - who owns, manages, reviews, or provides assurance.
2. Asset/system model - what exists, how products/systems are composed, and where shared assets are consumed.
3. Assurance model - what must be true, what has been assessed, what can be inherited, what remains unknown, and what gaps require action.
Assessment is the primary workflow connecting these models. For NIST-based workflows, SP 800-53 supplies controls and SP 800-53A supplies canonical assessment objectives/procedures. Organization-authored assessment templates translate those objectives into practical questions, evidence requests, interviews, examinations, tests, attestations, and discovery tasks. Contributors provide information; authorized reviewers make determinations; gaps become findings; findings drive remediation, risk, and POA&M work where required.
A key product concept is the Reusable Assurance Package: a governed, versioned package published by an organizational unit, shared service, product, or system that states what assurance it provides, under what conditions, which evidence/results support it, what responsibilities remain with consumers, and when reassessment is required. This makes inheritance understandable to both humans and the system.
North-star outcome At any organizational, product, system, or program scope, an authorized user should be able to answer: What obligations apply? What do we already know? What assurance can be inherited? What remains my responsibility? What is unknown? What must be assessed? Who owes information? What findings remain? What remediation threatens the deadline? And what newly validated knowledge should become reusable elsewhere?
2. Why This Exists
2.1 Current-state problem
Assurance work is performed repeatedly because the organization lacks a shared model for reusable truth. Organizational policies, procedures, shared services, product architecture, customer requirements, assessment results, evidence, findings, and POA&M items frequently live in separate artifacts and tools.
At the organizational level, teams may already operate enterprise IAM, PKI, VPN, MDM, vulnerability management, firmware signing, incident response, or other shared capabilities. Those teams often have policies, procedures, architecture, evidence, and prior assessment work that should apply to many downstream systems. Yet each program may ask the same questions again because the assurance was never published in a reusable, scoped form.
At the product/program level, System Security Engineers repeatedly determine applicability, reconstruct system architecture, identify owners, contact engineers, gather evidence, and document control implementation. Physical products are commonly variants of known baseline products, but program workbooks often act as though each delivery begins from zero.
2.2 Failure modes to eliminate
Re-asking the same assessment question even when a valid higher-scope answer already exists.
Treating organizational policy or shared-service implementation as program-local knowledge.
Treating contributor answers as control satisfaction without reviewer determination.
Copying controls, evidence, or implementation statements into program workbooks and losing provenance/version history.
Requiring a complete enterprise asset inventory before useful assessment work can start.
Representing missing data as N/A or satisfied instead of Unknown.
Losing program discoveries because they never propagate to the organizational scope where they actually apply.
Reassessing an entire control family because one component changed instead of reopening only impacted objectives.
Hiding shared responsibilities when an enterprise service provides part of an implementation but the consuming system still has local duties.
Creating isolated findings that cannot be grouped into common remediation or traced into risk/POA&M workflows.
Producing an opaque security percentage that masks whether work is unassessed, inherited, insufficiently evidenced, or actually Other Than Satisfied.
2.3 Product problem statement
The organization needs a shared assurance model and workflow engine that can assess any relevant scope, reuse trusted work across organizational and product/system boundaries, delegate information gathering to the people who know the answer, preserve human assessment authority, convert gaps into actionable findings/remediation/risk work, and continuously turn validated local discoveries into reusable organizational knowledge.
2.4 Why now
The platform creates leverage only if assurance work compounds. Without a shared graph, every new product variation, customer requirement, organizational assessment, or program deadline produces more documents but not more reusable organizational knowledge. The product should make the second assessment cheaper than the first, the twentieth program easier than the fifth, and the impact of an upstream change immediately visible to every dependent consumer.
3. Users and Jobs to Be Done
3.1 Primary users
User
 | Primary job
 | 
Organizational Assurance / Security-GRC Lead
 | Model the portion of the organization needed for assurance, launch assessments, establish reusable policies/procedures/implementations, understand findings across units, and govern inheritance.
 | 
Organizational Unit Owner
 | Own unit-scoped assurance; answer or delegate assessment work; publish reusable policy, procedure, service, implementation, evidence, and assessment knowledge.
 | 
System Security Engineer / Program Security Lead
 | Establish program context and obligations, inherit existing assurance, identify product/system delta and unknowns, route work, adjudicate responses, and drive readiness to a deadline.
 | 
Product/System Security Lead
 | Establish reusable product/system baseline knowledge so variants start from what is already known.
 | 
System Architect / HW/FW/SW Engineer
 | Receive narrow technical questions or evidence requests, answer or delegate them, and expose actual architecture/configuration without having to understand the full control framework.
 | 
Shared-Service / Asset Owner
 | Maintain canonical shared-asset identity, implementation, evidence, validity, assessment state, and provider responsibilities.
 | 
Assessor / Reviewer
 | Review observations/evidence, execute assessment methods, make determinations within authority, create findings, and preserve provenance.
 | 
Finding / Remediation / Risk Owner
 | Consolidate related findings, create remediation initiatives and milestones, manage risk/POA&M obligations, and provide closure evidence.
 | 
Program / Security Leadership
 | Understand factual readiness, unresolved work, systemic findings, critical dependencies, remediation exposure, and deadline risk.
 | 

3.2 Contributor design principle
Most contributors should never need to navigate NIST control identifiers. They should receive a human request such as:
“Describe how privileged account requests are approved for the Tactical Management Controller and link the current procedure.”
The platform preserves the control/objective trace behind that task. The contributor supplies information; the assessor retains determination authority.
3.3 Ownership principle
Ownership belongs to objects and scopes, not only to job titles. A shared service can be owned by Enterprise IAM, a baseline by Product Security, an assessment by an Assessment Lead, and a finding by Firmware Engineering. Delegation transfers responsibility to provide an input; it does not automatically transfer assessment authority.
4. Product Principles
Principle
 | Meaning
 | 
Two entry paths, one graph
 | Organization-first and product/program-first work create and consume the same canonical objects.
 | 
Assess anywhere, reuse everywhere valid
 | Any authorized unit, asset owner, product team, or program can initiate assessment work; validated results are reusable only where applicability is demonstrated.
 | 
Establish assurance at the highest valid scope
 | Organization-wide or unit-wide policy, service, implementation, evidence, and results should not be recreated inside every program.
 | 
Local first, promote later
 | Missing assets or knowledge can be created immediately within current work; broader reuse requires governed promotion and ownership.
 | 
Inheritance is a claim, not a copy
 | Inherited assurance retains source, version, conditions, responsibilities, evidence/result lineage, and invalidation rules.
 | 
Provider and consumer responsibilities remain explicit
 | A shared service can satisfy part of an objective while the consuming system retains local duties.
 | 
Response != determination
 | Contributor answers are inputs. Authorized reviewers determine whether assessment objectives are satisfied.
 | 
Unknown is first-class truth
 | Missing architecture, ownership, applicability, implementation, or evidence creates work rather than false N/A/satisfaction.
 | 
Delta over repetition
 | Known baselines focus work on changes, unknowns, stale evidence, unsupported responsibilities, and new obligations.
 | 
Evidence is structured assurance
 | Evidence has provenance, scope, validity, applicability, visibility, and lifecycle; it is not merely an attachment.
 | 
Historical truth must be reconstructable
 | Published baselines, assurance packages, profile versions, evidence, and assessment snapshots are versioned/pinned.
 | 
Conflicts remain visible until adjudicated
 | Source disagreement is a first-class condition; the system does not silently overwrite competing assertions.
 | 
No fake security score
 | Product rollups expose factual assessment state, findings, evidence health, and deadline risk rather than an opaque “X% secure” score.
 | 
Human authority for consequential decisions
 | Automation may suggest mappings, routing, applicability, inheritance, or impact; authorized humans approve assurance truth, risk acceptance, and promotion.
 | 
OSCAL is an interchange layer, not the UX
 | Standards alignment exists underneath workflow-native screens and internal operating concepts.
 | 

5. Product Model at a Glance
5.1 Three connected models
Model
 | Question answered
 | Examples
 | 
Responsibility
 | Who owns/manages this and who should receive work?
 | Organization, business unit, department/team, asset owner, program SSE
 | 
Asset/System
 | What exists, what is it made of, and where is it used?
 | Shared service, product, system, subsystem, hardware, firmware/software, policy, procedure
 | 
Assurance
 | What must be true, what do we know, and what remains?
 | Controls, requirements, objectives, assurance packages, evidence, assessments, determinations, findings, risks, POA&M
 | 

These form a graph rather than one master tree. Organizational hierarchy represents responsibility and inheritance scope. Product/system architecture represents technical composition and impact. The same asset may be owned in one hierarchy and consumed in many products/systems.
5.2 Dual-entry operating model
Organization-first
1. Create only the organizational units needed for current work.
2. Add known policies, procedures, shared assets/services, and owners.
3. Launch a targeted or ad hoc assessment.
4. Group assessment tasks into packages and delegate to SMEs.
5. Review responses and make objective determinations.
6. Create findings/remediation where required.
7. Publish valid reusable assurance packages at the correct scope.
8. Grow the asset catalog/library from what was actually learned.
Product/program-first
1. Create a product, system, or program even if the organizational model is sparse.
2. Establish effective control/requirements profile and customer-specific obligations.
3. Use a known product/system baseline, create a variant, or create an incomplete new system.
4. Resolve organizational and baseline assurance inheritance before generating work.
5. Assess only residual, changed, stale, conflicting, or unknown areas.
6. Delegate technical questions and evidence requests.
7. Create findings/remediation/POA&M as required.
8. Promote reusable discoveries upward to the correct owner/scope.
5.3 Reusable Assurance Package
The Reusable Assurance Package is the product-level abstraction for “what assurance does this provider give its consumers?”
A package contains:
provider asset/unit and owner;
package version and publication status;
supported controls/requirements/assessment objectives;
implementation assertions;
provider responsibilities;
consumer/residual responsibilities;
applicability conditions (configuration, version, environment, scope, dependencies);
supporting assessment results and evidence references;
evidence visibility/reuse rules;
validity/refresh conditions;
invalidation triggers;
consumers/dependents.
Example: Enterprise IAM Assurance Package v4.2 may resolve 38 objectives for systems using the approved production configuration, require 7 local residual tasks, and require 2 consumer attestations. A program consumes the package instead of copying dozens of implementation/evidence/result records.
5.4 Programs retain two different baselines
A program combines:
1. Control/requirements profile - what the program must satisfy, including organization defaults, applicable selection/tailoring, and customer requirements.
2. Product/system baseline - what the standard product/system is believed to contain and which assurance it already carries.
Those are independent. A new customer requirement may strengthen the obligation without changing the architecture; a component change may invalidate assurance without changing the control baseline.
6. Primary Product Experience
6.1 Product navigation
The product should feel like an operational workspace, not a standards browser. The surfaces group into four product areas - Foundation (Home, Organization, Assets), Obligations (Library), Delivery (Products & Systems, Programs), and Assurance Work (Assessments, Findings, Risks & POA&M):
Surface
 | What the user comes here to do
 | 
Home / Work
 | Resolve assigned assessment packages/tasks, reviews, evidence requests, findings, promotion decisions, and deadline-critical work.
 | 
Organization
 | Model assurance-relevant organizational units, understand owned assets/policies/procedures, publish shared assurance, and see downstream consumers.
 | 
Assets
 | Search and navigate the canonical assurance-relevant catalog across shared services, products, systems, components, policies, procedures, and other assessable subjects.
 | 
Products & Systems
 | Build and maintain product/system baselines, architecture, reusable implementation knowledge, variants, and system-definition completeness.
 | 
Programs
 | Establish customer/program obligations, select systems/baselines, review inherited assurance, manage delta/unknowns, assessments, findings, POA&M, and deadline readiness.
 | 
Assessments
 | Plan assessments, resolve inheritance, assign/delegate tasks, gather evidence, review responses, make determinations, and create findings.
 | 
Findings
 | Triage identified gaps across scopes, group related findings, and track ownership and disposition.
 | 
Risks & POA&M
 | Manage risk treatment, remediation initiatives, formal POA&M milestones, and validate closure.
 | 
Library
 | Govern standards content, profiles, assessment templates, reusable assurance packages, requirements, and promotion candidates.
 | 

6.2 Home is work-centric
A user should not land on a control catalog. Home answers: What do I owe, what is waiting on me, what changed, and what threatens a milestone?
For contributors this means a small queue of plain-language tasks. For an SSE it means unresolved applicability, system unknowns, responses ready for review, impacted inheritance, findings, and deadline-critical remediation. For an organizational assurance owner it means assessment packages, shared-service assurance freshness, promotion requests, and downstream consumers affected by change.
6.3 Explain inheritance before asking for work
Any assessment or program workflow that generates tasks must first show what the platform believes is already covered and why. Users should see:
assurance package/source being inherited;
applicability conditions that passed or remain unknown;
provider responsibilities;
consumer/residual responsibilities;
current assessment/evidence state;
attestation or reassessment requirements;
conflicts blocking inheritance.
This review is the point where an SSE can reject an inappropriate inheritance claim before the platform suppresses local work.
6.4 Separate contributor and reviewer experiences
The contributor experience is intentionally narrow. A contributor is asked to explain, provide, confirm, examine, or test something they actually own. They can delegate or flag incorrect ownership. They do not need to know whether the task maps to one or five controls.
The reviewer/SSE experience is assurance-centric. It shows objective/control/requirement lineage, assessment snapshot, inherited provider assurance, conflicting assertions, evidence, previous determinations, and residual responsibilities. This separation allows the workflow to scale beyond dedicated security teams without diluting assessment authority.
6.5 Make Unknown actionable
Unknown is not a warning banner that users learn to ignore. Every material Unknown should have an owner or an explicit unassigned state, a reason it matters, and a path to resolution. A new physical system can therefore begin as a skeleton and progressively mature as engineering decisions are made.
The platform should clearly separate system-definition completeness from assurance state. An undocumented architecture must never produce a misleading positive assurance view.
6.6 Make provenance one click away
Any effective requirement, inherited result, parameter, implementation assertion, or assessment task should expose Why is this here? The provenance view should show the source standards/customer requirement, organization/profile decisions, product/system baseline, reusable assurance package, applicability result, version/snapshot, and human approvals that produced the effective state.
This is essential for user trust and for debugging the inheritance engine itself.
7. Major User Journeys
7.1 Journey A - Set up the organization incrementally
The first user should not face an enterprise data-cleanup project. They create the top-level organization and only the units necessary for the first assessment. Units can own policies, procedures, shared services, assets, assurance packages, findings, and responsibilities.
A user may create a unit hierarchy such as:
Enterprise -> Enterprise Security -> IAM / PKI / Vulnerability Management
The hierarchy is not required to mirror the HR org chart. It exists to establish assurance scope, ownership, assignment routing, inheritance, and rollups.
As assessments uncover uncataloged assets or procedures, they can be created locally, used immediately, and later promoted to the correct canonical scope.
7.2 Journey B - Run an ad hoc organizational assessment
An Organizational Assurance Lead selects a unit, asset, service, policy, product, system, program, or targeted set of controls/requirements and launches an assessment.
The system:
1. resolves applicable assessment objectives;
2. evaluates current reusable assurance before asking questions;
3. suppresses redundant tasks where current applicable results exist;
4. generates residual/attestation/reassessment tasks only where needed;
5. groups remaining tasks into assignment packages by owner/team/asset;
6. lets package owners delegate individual tasks;
7. gathers responses, evidence, interviews, examinations, and tests;
8. routes complete objectives to authorized reviewers;
9. records determinations and findings;
10. allows valid results to become reusable assurance at the highest approved scope.
This is useful even if no program exists. A corporate IAM team can assess and document itself today; tomorrow a product/system can inherit the valid portion of that work.
7.3 Journey C - Create a program and establish obligations
A Program SSE creates the program and captures customer/mission, deadline, security lead, security context, source profiles/overlays, customer requirements, systems, and ownership.
Customer requirements remain first-class sources. If the organization default password minimum is 15 characters and the customer requires 24, the system preserves both values and records the approved effective program value rather than editing the organization baseline.
Conflicting or semantically ambiguous requirements create adjudication work; the platform does not assume “largest number wins” or “customer always wins.”
7.4 Journey D - Select an existing system, create a variant, or start incomplete
For each program system, the SSE chooses:
Use existing baseline - inherit a pinned known product/system configuration and confirm applicability assumptions.
Create variant - begin from a pinned baseline and explicitly declare changed/added/removed/unknown elements.
Create new/incomplete system - start with Unknown states and progressively discover boundary, components, owners, implementations, and evidence.
Import legacy system - migrate an existing workbook or system description as program-scoped facts; ambiguous or blank values become triaged Unknowns rather than assumed satisfaction.
A new system is allowed to be incomplete. Unknown processor, bootloader version, system boundary, implementation, or evidence becomes assigned discovery work.
7.5 Journey E - Inherit assurance before generating assessment work
Before creating questions, the platform evaluates applicable organizational assurance packages and product/system baseline assurance.
For each objective, the result can be:
inherited/current;
inherited but consumer responsibility remains;
inherited but attestation required;
impacted/expired/reassessment required;
unresolved/no reusable result;
applicability decision required.
This is the core mechanism that prevents repeated questioning.
7.6 Journey F - Delegate to engineers without turning them into GRC specialists
Remaining tasks are packaged by likely owner. A Firmware Engineering lead might receive 47 tasks and delegate individual tasks to the engineers who actually own the bootloader, FPGA, recovery firmware, and signing workflow.
The contributor experience shows:
plain-language request;
system/asset context;
due date/requester;
expected response or evidence;
why the information matters;
previous reusable answer where useful;
delegate/reassign option when permitted.
The SSE/assessor sees the control/objective trace and makes the determination.
7.7 Journey G - Turn assessment gaps into action
Other Than Satisfied determinations or cross-object assessor observations create Findings. Related findings can be grouped into one Remediation Initiative when they share a root cause. Findings can inform Risk and, for applicable system/program authorization workflows, create or link to POA&M items.
Closure requires validation/reassessment appropriate to the affected objective; marking work complete does not silently restore assurance.
7.8 Journey H - Promote learning upward
A program may discover a policy that actually applies across a product division, a new shared asset, a better assessment task set, a reusable firmware-signing procedure, or an implementation that many products use.
The creator can submit a Promotion Request. The system finds likely duplicates, identifies a destination scope/owner, validates applicability, and publishes a new canonical version if approved. Historical programs remain pinned to what they actually used.
8. Product Scope and Boundaries
8.1 In scope
Organization and organizational-unit modeling for assurance ownership and inheritance.
Assurance-relevant Asset Catalog with canonical identity, owner, version, source links, relationships, consumers, and assessment history.
Ad hoc, recurring, product/system, and program-linked assessments.
NIST SP 800-53 controls and SP 800-53A assessment-objective ingestion.
Organization-authored assessment templates mapped to canonical objectives.
Assignment packages, individual delegation, contributor responses, evidence, reviewer determinations, and findings.
Reusable Assurance Packages with provider/consumer responsibility and applicability semantics.
Product/system baselines, variants, incomplete-system discovery, and delta/impact analysis.
Organization/customer/internal requirements and scoped parameter values with provenance.
Findings, remediation initiatives, risk relationships, POA&M, reassessment, and closure.
Bottom-up promotion and top-down reuse of validated knowledge.
Versioning, assessment snapshots, audit history, invalidation, and conflict resolution.
Standards-aligned import/export where OSCAL semantics fit the workflow.
8.2 Out of scope / not initially system of record
Proprietary maturity model, fixed “discipline” taxonomy, radar chart, or generic security coverage score.
Full CMDB/enterprise asset-management replacement.
Full PLM/digital twin/source-code/CI-CD/ALM replacement.
Enterprise document repository; evidence may remain in authoritative external systems.
Generic project-management replacement; remediation initiatives are assurance-specific.
Fully autonomous control satisfaction, tailoring, risk acceptance, or promotion.
Forcing organization-level ad hoc assessments into system-centric OSCAL artifacts when the semantic fit is poor.
8.3 Product boundary with source systems
The platform owns assurance identity, relationships, provenance, assessment state, inheritance, and work. External systems remain authoritative for data they already govern well: people/directory, detailed engineering configuration, code, PLM, source documents, test execution, or ticket execution.
When an external authoritative source conflicts with a locally recorded value, the platform creates a Source Conflict condition; it does not silently choose one.
9. MVP and Release Strategy
9.1 MVP hypothesis
Stage 1 (R0-R2): if one program can generate a defensible SCTM from a shared catalog and controls graph - with provenance, explicit Unknowns, and customer tailoring - the platform has replaced the handcrafted workbook. Stage 2 (R3-R4): if one organizational unit can then run a real delegated 800-53A-based assessment, publish reusable assurance for a shared service, and a consuming program inherits that work while generating only residual/changed tasks and findings, the platform has proven the compounding architecture.
9.2 MVP capabilities
The first builds prove the foundation first, then the loop, in release order:
1. Catalog (R0): organization/unit hierarchy and ownership.
2. Catalog (R0): Asset Catalog with stable identity and a local-to-canonical promotion path.
3. Controls (R1): NIST 800-53 + 800-53A objective import/versioning (OSCAL-aligned).
4. Controls (R1): organization profile/requirements, parameters, and provenance.
5. Controls (R1): program/customer requirement overrides.
6. SCTM (R2): basic product/system/program creation, including incomplete systems.
7. SCTM (R2): obligation allocation, implementation assertions, and explicit Unknowns.
8. SCTM (R2): SCTM generation/export with “Why is this here?” provenance.
9. Assessments (R3): assessment template authoring for pilot objectives.
10. Assessments (R3): package assignment, task delegation, and the contributor response/evidence experience.
11. Assessments (R3): reviewer determination, findings, work queues, and audit history.
12. Inheritance (R4): assessment planning with inheritance resolution before task generation.
13. Inheritance (R4): Reusable Assurance Package publication/consumption for one shared service.
14. Inheritance (R4): basic promotion of validated local knowledge to canonical scope.
9.3 Explicit MVP non-goals
Complete enterprise asset inventory.
Complete product portfolio/model.
Full automated OSCAL export suite.
Advanced risk scoring.
Continuous machine evidence.
Automatic customer-requirement parsing.
Full blast-radius engine for every engineering source.
General project management.
AI making assurance determinations.
9.4 Delivery sequence
Release
 | Scope
 | Exit outcome
 | 
R0 - Catalog
 | Organization/unit hierarchy and ownership; Asset Catalog with stable identity, typing, relationships, and local-to-canonical lifecycle; versioning, audit, and permission spine; domain schema for later releases (assessment and assurance-package objects).
 | Teams can model who owns what and what exists - incrementally, with one graph serving organization and product/system scopes without copies.
 | 
R1 - Controls (OSCAL)
 | NIST SP 800-53 catalog and SP 800-53A objective ingestion (OSCAL-aligned); organization profiles/baselines, tailoring, and parameters; customer/internal requirements as first-class objects; CNSSI 1253 selection inputs; full provenance.
 | Effective obligations are resolvable for any scope, with every value traceable to its source.
 | 
R2 - SCTM
 | Programs, systems, and product baselines sufficient to allocate obligations; implementation assertions; explicit Unknowns; customer overrides; SCTM generation and export from the live graph.
 | A program builds and maintains its SCTM from structured, provenance-backed data instead of a handcrafted spreadsheet.
 | 
R3 - Assessments
 | 800-53A-based assessment campaigns; organization templates; assignment packages and delegation; contributor responses/evidence; reviewer determinations; findings; assessment snapshots.
 | Delegated assessment work populates the SCTM with defensible determinations.
 | 
R4 - Inheritance and remediation
 | Reusable Assurance Packages, applicability rules, and inheritance resolution before task generation; residual responsibilities; delta/impact and invalidation; basic promotion; remediation initiatives, risk, and POA&M.
 | A second program starts from inherited assurance and generates only residual/changed work; gaps flow into governed remediation.
 | 
R5 - Learning organization and interoperability
 | Advanced promotion/deduplication; blast-radius analysis; recurring assessment; machine evidence; source-system integrations; expanded OSCAL interoperability (AP/AR/POA&M); assisted mapping/routing.
 | Repeated work measurably compounds organizational assurance knowledge.
 | 

9.5 First pilot
Start with one active product/program: build the catalog entries it actually needs, import 800-53/800-53A, establish the effective profile including customer requirements, and generate its SCTM. In parallel, identify one shared service with high reuse that the program consumes (for example IAM, PKI/key management, firmware signing, vulnerability management).
When the assessment engine lands (R3), run the shared-service assessment. Then measure what program work disappears through valid inheritance (R4), what residual responsibilities remain, and what new knowledge is promoted upward.
10. Outcomes and Metrics
The product measures operating leverage and assurance state, not an opaque maturity score.
Outcome / metric
 | What it tells us
 | 
Assessment startup time
 | How quickly a scope moves from assessment creation to resolved inheritance and assigned residual work.
 | 
Inherited objective reuse
 | How much assessment work is safely resolved through current higher-scope assurance.
 | 
Manual re-questioning avoided
 | Whether the platform actually prevents repeated SME outreach.
 | 
Residual-work ratio
 | Remaining local work after inheritance versus raw objective/task set.
 | 
Delegation latency
 | Whether package/task ownership is clear enough to move work.
 | 
Reviewer latency
 | Whether the system speeds determination rather than merely collecting answers.
 | 
Unknown burn-down
 | Whether incomplete systems become better understood over time.
 | 
Finding recurrence
 | Whether systemic issues are visible across organizational/product/program scopes.
 | 
Remediation consolidation
 | Whether common root causes are handled once rather than through isolated fixes.
 | 
Promotion yield and reuse
 | Whether local discoveries actually become future organizational leverage.
 | 
Inheritance invalidation rate
 | Whether applicability rules are too permissive or too conservative.
 | 
Evidence health
 | Current/expiring/expired/impacted/missing evidence at critical scopes.
 | 
Program assurance critical path
 | Which unresolved assurance work threatens delivery/authorization milestones.
 | 

Success means subsequent assessments/programs begin with more trustworthy reusable assurance and less redundant work than earlier ones.
11. Product Risks and Decisions
11.1 Key product risks
Risk
 | Failure mode
 | Product response
 | 
Ontology over-design
 | Users face a taxonomy project instead of doing assessment work.
 | Keep contributor UX task-centric; allow local-first creation; formalize only semantic distinctions needed for trust/inheritance.
 | 
False inheritance confidence
 | A shared result is reused despite configuration/responsibility differences.
 | Assurance packages, applicability conditions, residual responsibilities, snapshots, attestation, and targeted reassessment.
 | 
Question explosion
 | Raw 800-53A content overwhelms teams.
 | Inheritance resolution first, organization templates, assignment packages, dependency rules.
 | 
Catalog paralysis
 | Team waits for perfect asset data.
 | Incremental catalog and local-to-canonical promotion.
 | 
Answer-as-compliance
 | “Yes” becomes a false positive.
 | Response/Observation/Determination separation and authority gating.
 | 
Source conflict hidden
 | PLM/system reality and local assurance model disagree.
 | Source Conflict workflow and explicit adjudication.
 | 
Evidence oversharing
 | Reuse leaks sensitive program artifacts.
 | Separate assurance-result reuse from evidence visibility; allow metadata-only inheritance.
 | 
Standards dictate UX
 | OSCAL/system-centric terms make organizational assessment awkward.
 | Workflow-native internal model with standards mapping at import/export boundaries.
 | 
Platform becomes everything
 | Asset, ticketing, docs, and engineering tools are recreated poorly.
 | Own assurance semantics/work; integrate or reference authoritative sources.
 | 

11.2 Product decisions locked by this PRD
Organization-first and product/program-first are peer workflows.
Assessment objects are designed into the domain spine from R0; the delegated assessment engine becomes the primary workflow in R3, on the Catalog, Controls, and SCTM foundation.
Responsibility hierarchy and system architecture are separate graphs.
Asset Catalog grows through work; completeness is not a prerequisite.
Reusable Assurance Package is the primary human/system abstraction for shared assurance inheritance.
Provider and consumer responsibilities are explicit.
NIST 800-53A supplies the canonical objective backbone; organization templates supply practical task wording and routing.
Contributor answers do not create final determinations.
Missing information is Unknown and creates work.
Effective control profile and product/system baseline remain separate.
Findings, remediation, risk, and POA&M are related but distinct.
Published assurance/baseline/result history is versioned and reconstructable.
Conflicts are first-class and adjudicated rather than overwritten.
No proprietary maturity/coverage score is required.
OSCAL is an interoperability target, not the primary interaction model.
12. Open Product Questions
1. What initial organizational hierarchy depth gives useful ownership/routing without recreating the HR org chart?
2. Which asset types must be strongly typed in R1 versus represented as generic assets with attributes?
3. Who is allowed to publish a Reusable Assurance Package at organization, unit, product, and system scope?
4. Which reusable assessment determinations may be inherited across programs under policy, and which require local attestation or reassessment?
5. What information may be inherited when underlying evidence is restricted from the consuming program?
6. What are the minimum snapshot semantics required for formal assessment/authorization traceability?
7. Which conflict types must require security/governance adjudication versus asset-owner resolution?
8. What external source should be integrated first for the pilot: directory/org ownership, asset/CMDB/PLM, documents, or test/evidence?
9. Which exact CNSSI 1253 artifacts and organization-specific workflow must be represented for target NSS programs?
10. Which OSCAL exports are contractual/authorization deliverables versus simply useful interchange?
11. What is the minimum viable applicability rule syntax that is expressive enough without becoming a policy-programming language?
12. Which evidence trust/visibility classifications are required by the organization’s information-sharing rules?
Appendix A. Product Glossary
Term
 | Product meaning
 | 
Asset
 | Any assurance-relevant subject with stable identity and ownership: service, policy, procedure, product, system, component, process, etc.
 | 
Assessment Objective
 | Canonical determination target, typically imported from SP 800-53A for NIST controls.
 | 
Assessment Template
 | Organization-authored practical way to gather/produce information for one or more objectives.
 | 
Reusable Assurance Package
 | Published versioned bundle stating what assurance a provider offers consumers, under what conditions, supported by what results/evidence, and with what residual responsibilities.
 | 
Implementation Assertion
 | Statement explaining how an asset/system/component supports an obligation under stated conditions.
 | 
Response
 | Contributor answer/submission to an assessment task.
 | 
Observation
 | Structured fact/evidence accepted or generated during assessment.
 | 
Determination
 | Authorized reviewer conclusion for an assessment objective.
 | 
Finding
 | Gap/issue identified from assessment evidence/observations/determinations.
 | 
Remediation Initiative
 | Grouped assurance-specific effort addressing one or more related findings.
 | 
Promotion
 | Governed movement of validated local knowledge to a broader reusable scope without rewriting history.
 | 
Assessment Snapshot
 | Immutable record of the profile, asset/system state, assurance packages, evidence/result versions, roles, and scope against which an assessment determination was made.
 | 
Source Conflict
 | Explicit unresolved disagreement between two authoritative or material assertions about the same fact/attribute.
 | 
SCTM (Security Controls Traceability Matrix)
 | Derived traceability view generated from the live graph for a scope/snapshot: effective obligation, allocation, implementation, evidence, assessment state, and disposition. Exported as the program workbook artifact; never handcrafted or independently edited.
 |

=====================
### Program_Assurance_Platform_Product_System_Spec_v1.1.docx  (144484 chars)
=====================
Program Assurance Platform
Product & System Specification
Specification purpose This is the canonical product/system design document for the Program Assurance Platform. It defines the operating model, domain semantics, lifecycle rules, assurance inheritance, assessment workflow, governance, user experience contract, and delivery requirements. The companion Product Requirements Document defines the shorter product intent and MVP framing; the Domain & Rules Specification v1.1 is the canonical semantic contract - where Part III of this document and that specification differ, the Domain & Rules Specification governs. Technical implementation details and architecture decisions should be captured in engineering design documents/ADRs as the system is built.
Field
 | Value
 | 
Status
 | Draft for domain, security, design, and engineering review
 | 
Version
 | 1.1 Draft
 | 
Date
 | August 12, 2026
 | 
Audience
 | Product, Systems Security Engineering, Security/GRC, System Engineering, HW/FW/SW Engineering, Assessment, Design, Architecture, Program Leadership
 | 
Source
 | Restructured and expanded from Program Assurance Platform PRD v0.2; aligned to PRD v1.1. Domain semantics are governed by the Domain & Rules Specification v1.1
 | 

Contents
Part I - Product Foundation
1. Executive Summary
2. Product Context and Problem
3. Vision, Principles, and Boundaries
4. Users, Roles, and Governance
Part II - Operating Model
5. Operating Model Overview
6. Organization Model, Asset Catalog, and Assurance Library
7. Control Profiles, Tailoring, and Customer Requirements
8. Product and System Baselines
9. Program Creation, System Onboarding, and Delta
10. Assessment Operating Model
Part III - Assurance Domain and System Rules
11. Canonical Identity and Entity Model
12. Scope and Applicability Model
13. Reusable Assurance Package
14. Authority, Assertions, and Conflict Resolution
15. Assessment Snapshot Model
16. Evidence Trust, Provenance, and Visibility
17. Source-of-Truth Reconciliation and Synchronization
18. Assessment Semantics and Decision Authority
19. Findings, Remediation, Risk, and POA&M Semantics
20. Change, Impact, and Invalidation Rules
21. Security, Markings, and Cross-Scope Information Sharing
22. Lifecycle, State Transitions, and Invariants
23. Automation and Explainability Boundary
Part IV - User Experience and Workflow Contract
24. Information Architecture and Navigation
25. Organization-First Workflow
26. Product/Program-First Workflow
27. Assessment Workspace and Delegation
28. Program/System Workspace and Discovery
29. Findings, Remediation, and Promotion UX
30. End-to-End Example
Part V - Delivery and Engineering Contract
31. Functional Requirements
32. Non-Functional Requirements
33. MVP and Delivery Sequence
34. Metrics and Instrumentation
35. Migration and Adoption
36. Risks and Design Decisions
37. Open Questions and Required Decisions
38. Standards Alignment
Appendix A. Object Ownership / RACI
Appendix B. Acceptance Scenarios

Part I - Product Foundation
1. Executive Summary
The platform is not just a program workbook replacement. It is an assessment-and-inheritance operating system for organizational and product assurance.
Today, assurance knowledge is fragmented across organizational policies, procedures, shared services, product documentation, program workbooks, SME knowledge, assessment results, and evidence repositories. Teams repeatedly ask the same questions and recreate the same mappings because the organization lacks a shared model for: who owns an asset; which requirements apply; what has already been assessed; what can be inherited; what is product-specific; what changed; and what work remains.
The platform supports two equally valid entry paths that converge on the same data model and workflows:
Organization-first path
 | Product/program-first path
 | 
Model the organization and organizational units; catalog shared assets, policies, procedures, services, and implementations; run ad hoc or recurring assessments; delegate information requests; record evidence, determinations, findings, and remediation.
 | Create a product/system/program; inherit applicable organizational policies, shared implementations, evidence, and assessment results; apply product/system baselines and customer requirements; assess the delta and unknowns; delegate technical questions; create findings and POA&M work; promote reusable discoveries upward.
 | 

Neither path requires the other to be complete first. An organization can begin with a single assessment of an organizational unit, a single product, or a single program. Every validated object created through real work can make the reusable catalog more complete.
The platform therefore maintains three connected models:
1. Responsibility model - the organization and its organizational units, including ownership and delegated responsibility.
2. Asset/system model - the assets, products, systems, subsystems, components, services, policies, and procedures that can be assessed or inherited.
3. Assurance model - controls, requirements, assessment objectives, implementation assertions, evidence, observations, determinations, findings, risks, remediation, and POA&M items.
The assessment workflow is the primary mechanism that connects these models. NIST SP 800-53 provides control content; NIST SP 800-53A provides assessment procedures/objectives; organizational assessment templates translate those objectives into human-friendly questions, evidence requests, interviews, and tests; responses become observations/evidence; authorized reviewers make determinations; gaps become findings; findings drive remediation, risk, and POA&M activity.
1.1 North-star outcome
North-star At any organizational, product, system, or program scope, the platform should tell an authorized user what obligations apply, what the organization already knows, what can be inherited, what is unknown, what must be assessed, who needs to provide information, what has been determined, what findings remain open, what remediation threatens a deadline, and how newly validated knowledge can be reused elsewhere.
1.2 Key product decisions
Assessment is a core workflow engine, designed in from the start and activated in R3. Assessment objects live in the domain spine from R0. Once activated, assessments launch ad hoc at organization/unit/product/system/program scope and within formal program assurance workflows, on the Catalog, Controls, and SCTM foundation.
Two entry paths, one graph. Organization-first and product/program-first workflows create and consume the same canonical objects rather than separate modules/databases.
Organization hierarchy and system hierarchy are distinct. Organizational units answer “who owns/manages this?” while product/system/component relationships answer “what is this made of and where is it used?”
The Asset Catalog can be built incrementally through work. Assets discovered in assessments or programs can exist locally first and be promoted to canonical organization scope after review.
Inheritance is explicit, reference-based, scoped, and versioned. A child organization, product, system, or program can inherit a policy, implementation, evidence item, or assessment result only when applicability conditions remain true.
An inherited result does not mean permanent satisfaction. Relevant changes, expiry, scope differences, or unsupported responsibilities reopen the affected assessment objectives.
Responses are not determinations. Engineers and business owners provide information and evidence; the authorized SSE/assessor/reviewer decides whether an assessment objective is satisfied.
Unknown is a valid state. Missing architecture, assets, components, mappings, evidence, or ownership becomes discovery work rather than silent N/A or compliance.
No capability-maturity model or synthetic coverage score is required. Rollups show factual assessment state, findings, unresolved work, evidence sufficiency, and deadline risk rather than a generic “security score.”
Programs retain the two-baseline model. The effective control/requirements profile describes what must be satisfied; the product/system baseline describes what is believed to exist and what assurance is reusable.
OSCAL is the standards-aligned interchange layer, not the UX. OSCAL catalog/profile/component/SSP/assessment-plan/assessment-results/POA&M semantics are mapped underneath workflow-native screens.
1.3 Primary product surface
Space
 | Purpose
 | Primary users
 | 
Home / Work
 | Personal and team assignments, delegated assessment tasks, overdue reviews, evidence requests, findings, and decisions.
 | All contributors
 | 
Organization
 | Organization hierarchy, organizational units, ownership, inherited policies/implementations, unit-level assessments, and rollups.
 | Security/GRC, business/security owners, leadership
 | 
Assets
 | Canonical asset catalog across shared services, policies, procedures, products, systems, hardware, firmware/software, and other assessable subjects.
 | Asset owners, engineers, security teams
 | 
Programs
 | Program setup, deadlines, systems, effective requirements, customer tailoring, delta analysis, assessments, findings, POA&M, and readiness.
 | Program SSEs, program leadership, assessors
 | 
Products & Systems
 | Product families, baseline versions, system architecture, reusable components, implementation assertions, and inherited assurance.
 | Product security, system engineering, HW/FW/SW
 | 
Assessments
 | Ad hoc and program-linked assessment campaigns, assessment plans, grouped assignments, delegated tasks, observations, evidence, determinations, and results.
 | SSEs, assessors, security/GRC, contributors
 | 
Findings
 | Cross-scope record of identified gaps, source assessments, affected assets/systems, ownership, and disposition.
 | Security teams, asset/system owners
 | 
Risks & POA&M
 | Risk treatment, remediation initiatives, milestones, deviations/acceptances, and program/system POA&M tracking.
 | SSEs, risk owners, program/security leadership
 | 
Library
 | Control catalogs/profiles, requirements, 800-53A objectives, organization assessment templates, reusable implementations, evidence patterns, and governed knowledge.
 | Governance, library stewards, SMEs
 | 

2. Product Context and Problem
2.1 Current-state pattern
The current problem appears in two places at once.
Across the organization, security/GRC and functional teams often know that enterprise-level policies, procedures, shared services, or standard practices exist, but that knowledge is scattered across documents and people. Assessments are frequently performed through questionnaires, spreadsheets, meetings, and email. Answers may be valid for an entire organizational unit, yet they are not represented as reusable scoped assurance knowledge.
Inside products and programs, System Security Engineers repeatedly reconstruct applicability, implementations, evidence, and ownership. They contact engineers and shared-service owners to answer questions that may already have been answered elsewhere. Physical products are variants of known products, but program-specific workbooks often behave as though every system is brand new.
Common failure modes include:
The same assessment question is asked repeatedly to different products or programs even when a shared organizational implementation is the answer.
Policies and procedures that apply organization-wide or to a business unit are not modeled at the scope where they actually apply.
Shared assets such as IAM, VPN, PKI, MDM, signing infrastructure, vulnerability management, or incident response are assessed once informally but not inherited systematically.
Organizational units cannot run targeted assessments of themselves and then make the resulting knowledge reusable to products/systems beneath them.
Product/system assessments lack an explicit delegation workflow, forcing SSEs to chase engineers manually.
Questionnaire answers are confused with assessment determinations; a contributor answering “yes” can be incorrectly interpreted as proving a control.
Findings are trapped inside an assessment artifact rather than becoming reusable work/risk objects.
Multiple findings caused by one systemic problem cannot be grouped into a single remediation initiative.
Program-specific discoveries do not reliably propagate upward into organizational policies, assets, reusable implementation statements, or assessment templates.
Asset inventories, organization ownership, system architecture, assurance results, and POA&M tracking live in different tools with weak traceability.
2.2 Primary product problem
Problem statement The organization lacks a shared assurance model and workflow engine that can assess any relevant scope, inherit trusted work across organizational/product/system boundaries, delegate information gathering to the people who actually know the answer, preserve human assessment authority, turn gaps into findings/remediation/risk/POA&M work, and continuously convert validated local discoveries into reusable organizational knowledge.
2.3 Jobs to be done
Actor
 | Job to be done
 | 
Security/GRC / Organizational Assurance Lead
 | Model the organization, assign ownership, launch ad hoc assessments, reuse enterprise-level implementations, understand findings across units, and establish reusable policies/procedures/assessment templates.
 | 
Organizational Unit Owner
 | Answer or delegate assessment work for the assets/processes my unit owns and establish assertions/evidence that downstream consumers can inherit.
 | 
Program SSE / Program Security Lead
 | Start a program quickly, determine what applies, inherit organizational and product assurance, expose deltas/unknowns, delegate assessment tasks, adjudicate responses, and drive findings/POA&M to deadline.
 | 
System Security / Product Security
 | Establish reusable product/system baselines and implementation knowledge once so variants can assess only what changed or remains unknown.
 | 
System Architect / HW/FW/SW Engineer
 | Receive narrow technical questions/evidence requests, delegate when necessary, and respond without needing to navigate the full control framework.
 | 
Asset / Shared-Service Owner
 | Maintain the canonical description, implementation, evidence, and assessment state for shared assets used by many products/systems.
 | 
Assessor / Reviewer
 | Execute or review assessment procedures, distinguish observations from determinations, create findings, and preserve assessment provenance.
 | 
Risk / Remediation Owner
 | Group related findings, define remediation initiatives and milestones, manage accepted/deferred risk, and close the loop with reassessment.
 | 
Leadership
 | Understand factual assessment state, systemic findings, remediation exposure, inherited dependencies, and deadline risk without relying on a synthetic maturity score.
 | 

3. Vision, Principles, and Boundaries
3.1 Vision
Create an internal assurance operating system for the organization and its physical products: a structured, versioned graph that connects organizational responsibility, assessable assets, product/system architecture, controls/requirements, assessment objectives, implementations, evidence, findings, remediation, and risk. The system compounds knowledge whether work begins from an organizational assessment or from a product/program delivery.
3.2 Product principles
Principle
 | Meaning
 | 
Assess anywhere, reuse everywhere valid
 | Any authorized organizational unit, asset owner, product team, or program can initiate assessment work; validated results are reusable at all scopes where applicability is proven.
 | 
Establish truth at the highest valid scope
 | Policies, procedures, shared implementations, evidence, and assessments should live at organization/unit/asset scope when they truly apply there rather than being copied into each program.
 | 
Local first, promote later
 | A program or assessment can create local objects immediately. Reuse beyond that scope requires governed promotion, deduplication, ownership, and versioning.
 | 
Responsibility tree != system tree
 | Organization structure governs ownership/inheritance; product/system/component structure governs architecture and technical impact. They are related, not collapsed.
 | 
Response != observation != determination != finding
 | Contributor answers and evidence are inputs. Authorized assessors/reviewers make control-objective determinations. Gaps produce findings.
 | 
Inheritance over redundant questioning
 | If an applicable higher-scope implementation/result already satisfies an objective, redundant local tasks are suppressed; local residual responsibility remains explicit.
 | 
Delta over repetition
 | Known product/system baselines focus effort on variation, unknowns, expired assurance, unsupported responsibilities, and changed applicability.
 | 
Unknown over invented certainty
 | Missing data, missing assets, missing owners, and insufficient evidence are explicit states that create work.
 | 
No fake security score
 | Operational rollups show counts/states, findings, remediation, evidence sufficiency, assessment completion, and deadline risk; maturity models and opaque coverage scores are outside the core product.
 | 
Human authority for assurance decisions
 | Automation may suggest mappings, inheritance, task routing, or impacted objectives; authorized humans approve applicability, tailoring, determination, risk acceptance, and promotion.
 | 
Source systems stay authoritative where appropriate
 | The platform references engineering/document/test systems and progressively integrates them; it does not need to become the design authority for source code, PLM, or document storage.
 | 
Standards-compatible, workflow-native
 | OSCAL/NIST semantics guide identifiers, lineage, imports/exports, and assessment structure without forcing users to author OSCAL or navigate standards-native object names.
 | 

3.3 Product boundaries
In scope
Organization/organizational-unit modeling for assurance ownership and inheritance.
Asset catalog sufficient to identify assessable/reusable assets and their owners, consumers, versions, and relationships.
Ad hoc, periodic, and program-linked assessments.
NIST SP 800-53 control content and NIST SP 800-53A assessment objective/procedure ingestion.
Organization-authored assessment templates that translate standards objectives into questions, interviews, evidence requests, and tests.
Assessment assignment packages, delegation, responses, observations, evidence, reviewer determinations, and findings.
Product/system baselines, component/capability modeling, customer tailoring, program deltas, impact, and inheritance.
Findings, remediation initiatives, risk/POA&M relationships, reassessment, and closure.
Bottom-up and top-down promotion of policies, procedures, assets, requirements, implementations, evidence, and assessment templates.
Standards-aligned import/export, especially OSCAL Catalog/Profile/Component Definition/SSP/Assessment Plan/Assessment Results/POA&M where useful.
Out of scope / not initially the system of record
A proprietary capability-maturity model, discipline taxonomy, or single organizational security score.
Full enterprise asset-management/CMDB replacement; the Asset Catalog stores assurance-relevant identity, ownership, relationships, versions, and source links.
Full engineering digital twin, PLM, source-code, CI/CD, or ALM replacement.
Enterprise document storage; evidence may reference authoritative repositories.
Fully autonomous compliance decisions or automatic risk acceptance.
Generic project-management replacement; remediation initiatives exist only as needed to manage assurance findings/POA&M work.
4. Users, Roles, and Governance
4.1 Product roles
Role
 | Primary responsibility
 | 
Governance / Control Steward
 | Owns control catalogs, organization profiles, tailoring policy, standards versions, and approval rules.
 | 
Organization Model Administrator
 | Maintains top-level organization structure, organizational-unit relationships, and delegated administrative boundaries.
 | 
Organizational Unit Assurance Owner
 | Owns assurance data for a unit; launches/accepts assessments; maintains unit-scoped policies, procedures, implementations, and inheritable assertions.
 | 
Asset Owner / Shared-Service Owner
 | Owns an asset's canonical identity, description, lifecycle, implementation assertions, evidence, and assessment responsibilities.
 | 
Library Steward
 | Curates reusable assessment templates, requirements, components/capabilities, evidence patterns, and promotion requests.
 | 
Product Security Lead
 | Owns reusable product/system baseline security content and product-specific assurance inheritance.
 | 
System Architect / System Owner
 | Defines system boundary, architecture, asset/component inventory, interfaces, and technical ownership.
 | 
Program SSE / Program Security Lead
 | Establishes program context, validates inherited assurance, drives program/system assessments, routes unresolved work, adjudicates results within authority, and owns readiness.
 | 
Assessment Lead / Assessor
 | Defines assessment scope/plan, reviews responses/evidence, executes assessment methods, records determinations, findings, and risk observations.
 | 
Assessment Package Owner
 | Receives a grouped set of assessment tasks for a team/unit and may delegate individual tasks to SMEs.
 | 
Contributor / SME
 | Answers questions, supplies evidence, performs requested tests/interviews, and can delegate when permitted; does not automatically make the final assessment determination.
 | 
Finding / Remediation Owner
 | Owns resolution of one or more findings, creates remediation initiatives/milestones, and coordinates closure evidence.
 | 
Risk / POA&M Owner
 | Owns risk treatment and POA&M disposition/milestones where required.
 | 
Program / Security Leadership
 | Consumes factual state, systemic findings, critical-path work, and risk/remediation rollups.
 | 

4.2 Object ownership model
Permissions follow object scope, ownership, delegated authority, and assessment role rather than job title alone. Organizational inheritance does not grant edit authority to inherited consumers.
Object / scope
 | Typical author
 | Typical approval / publication authority
 | 
Organization hierarchy / unit
 | Org admin
 | Configured organization governance
 | 
Unit-scoped policy/procedure
 | Unit assurance owner / policy owner
 | Unit or enterprise policy authority
 | 
Asset catalog record
 | Asset owner, assessment/program contributor as candidate
 | Asset owner / catalog steward for canonical organization scope
 | 
Organization profile / control policy
 | Governance/control steward
 | Governance authority
 | 
Assessment template
 | Assessor/SSE/SME/library steward
 | Assessment content owner / governance
 | 
Assessment campaign/plan
 | Assessment lead, SSE, unit assurance owner
 | Configured assessment authority
 | 
Assessment response/observation
 | Contributor / assessor
 | Reviewer accepts as input; not itself a final determination
 | 
Assessment determination/result
 | Assessor/reviewer
 | Assessment authority as configured
 | 
Finding
 | Assessor/reviewer
 | Assessment authority / finding owner acknowledgement
 | 
Product/system baseline
 | Product security + system engineering
 | Product baseline owner / security authority
 | 
Program requirement/override
 | Program SSE / customer requirement intake
 | Program security/governance per policy
 | 
Program-local asset/component
 | Program/SSE/engineering contributor
 | Program/system owner for local use; higher-scope promotion requires destination owner
 | 
Remediation initiative
 | Finding/remediation owner
 | Security/program owner as configured
 | 
Risk acceptance / POA&M disposition
 | Risk owner / SSE
 | Configured risk/authorization authority
 | 

4.3 Delegation model
Assessment assignment is two-level by design:
1. Package assignment sends a coherent group of assessment tasks to the responsible organizational unit/team/asset owner.
2. Task delegation lets that owner delegate individual questions, evidence requests, interviews, or tests to the people who know the answer.
Delegation transfers responsibility for providing the requested input, not the assessor's authority to determine whether an objective is satisfied. Every delegation and reassignment is auditable.

Part II - Operating Model
5. Operating Model Overview
The platform operates as a dual-entry assurance graph. Organization-first and product/program-first work are not separate modules; they are different paths through the same entities and workflow engine.
The operating loop is:
Model scope/ownership -> identify assessable assets/systems -> resolve obligations -> resolve reusable assurance -> generate residual assessment/discovery work -> collect information/evidence -> make authorized determinations -> create findings/remediation/risk -> validate closure -> publish/promote reusable assurance -> future scopes inherit more.
The organization does not need to be fully modeled before work begins. Product/system baselines do not need to be complete before a program begins. Incompleteness is visible and creates work.
5.1 Responsibility graph and technical graph
The organization hierarchy answers “who owns/manages this?” The asset/system graph answers “what exists and where is it used?” These graphs are connected by ownership, consumption, responsibility, and assurance relationships but never collapsed into one tree.
5.2 Assurance Library and Reusable Assurance Package
The Assurance Library contains standards content, profiles, requirements, assessment templates, canonical assets, implementation patterns, evidence patterns, and published Reusable Assurance Packages. A RAP is the preferred mechanism for a provider to expose reusable assurance to downstream consumers while retaining residual responsibility and evidence-visibility semantics.
5.3 Work is generated from unresolved assurance
The platform should not use a static checklist as its primary work model. It computes effective obligations and assurance, then creates work only for unresolved, changed, expired, conflicted, insufficiently evidenced, or locally retained responsibilities.
6. Organization Model, Asset Catalog, and Assurance Library
6.1 Dual-entry bootstrap model
The platform must not require a complete organization catalog before useful work can begin. It supports two bootstrap modes that can run in parallel:
Organization-first bootstrap
1. Create/import top-level organization and organizational units.
2. Assign unit assurance owners.
3. Create only the assets/policies/procedures already known.
4. Launch a targeted/ad hoc assessment against a unit or asset.
5. During responses, create missing assets, policies, procedures, implementations, and evidence as local/candidate objects.
6. Review and promote validated reusable objects to canonical organization scope.
7. Future assessments and products inherit them.
Product/program-first bootstrap
1. Create a product/system/program even if organization modeling is sparse.
2. Link known owning organizational units and existing assets.
3. Build missing system components/assets through discovery and assessment work.
4. Reuse any organization-level policies/implementations already known.
5. Promote reusable product/program discoveries upward to the owning unit or organization library.
6. Later organization-first assessments can reuse what the SSE discovered.
The platform therefore improves through usage instead of requiring a long pre-implementation data-cleanup project.
6.2 Organization hierarchy and scope inheritance
Organizational units are configurable and may represent business units, divisions, departments, teams, sites, or mission organizations. The hierarchy is used for ownership, assessment scope, policy/implementation inheritance, and rollups-not as the technical system architecture.
An object authored at a parent scope may declare inheritance semantics:
applies to this unit only;
applies to this unit and all descendants;
applies only to selected descendants/assets;
available for reuse but requires local attestation;
shared responsibility: inherited portion plus required local responsibilities.
Child units can add local requirements/implementations without mutating the parent object. If a child discovers that a local policy/procedure actually applies broadly, it can submit that object for upward promotion.
6.3 Asset Catalog
The Asset Catalog is built over time from organization modeling, assessment work, product/system baselines, imports, and program discovery.
Minimum canonical asset fields
Field
 | Purpose
 | 
Stable ID / name / type
 | Canonical identity and classification
 | 
Owning organizational unit
 | Default responsibility/inheritance source
 | 
Technical/business owner(s)
 | Routing and accountability
 | 
Lifecycle/version
 | Validity and change impact
 | 
Source system / external identifier
 | Link to authoritative CMDB/PLM/repository where applicable
 | 
Parent/composition relationships
 | Product/system/component structure
 | 
Consumers/dependencies
 | Blast radius and inheritance
 | 
Policies/requirements
 | Applicable obligations
 | 
Implementation assertions
 | How the asset contributes to controls/requirements
 | 
Evidence / assessment results
 | Reusable proof and historical results
 | 
Scope/applicability rules
 | Where reuse/inheritance is permitted
 | 

Assets created during a local assessment/program are immediately usable within that scope. Canonical promotion requires deduplication and owner review.
6.4 Assurance Library domains
Domain
 | Examples
 | 
Standards content
 | NIST SP 800-53 controls, baselines/profiles, 800-53A assessment objectives/procedures
 | 
Organization profiles/requirements
 | Approved baseline selections, overlays, parameters, internal security requirements
 | 
Assessment templates
 | Human-friendly questions, evidence requests, interview prompts, tests, routing, dependency/supersession logic
 | 
Policies & procedures
 | Organization/unit-scoped governing artifacts with owner, version, applicability
 | 
Reusable assets/components/capabilities
 | Enterprise IAM, PKI, signing service, secure-boot implementation, vulnerability management process
 | 
Implementation assertions
 | Which control/requirement portions an asset implements and what responsibilities remain local
 | 
Evidence patterns/artifacts
 | Reusable evidence references, test expectations, validity/applicability conditions
 | 
Assessment results
 | Reusable current results against specific assets/implementations/objectives when policy permits
 | 

The existing Capability object remains only as a grouping of components/assets that jointly provide a security function (for example Secure Boot). It is unrelated to a capability-maturity model.
6.5 How the library gets populated
Source
 | Path
 | 
Authoritative standards
 | Imported/versioned; never manually recreated if machine-readable authoritative content exists
 | 
Organization policies/procedures
 | Authored/linked by responsible organizational unit; reviewed/published at correct scope
 | 
Shared-service owners
 | Establish reusable assets, implementations, evidence, and assessment packages
 | 
Product/system baseline teams
 | Publish product-specific architecture and reusable implementation assertions
 | 
Ad hoc assessments
 | Create responses, observations, assets, findings, and candidate reusable knowledge
 | 
Programs
 | Create local customer requirements, assets/components, implementations/evidence, findings, and promotion candidates
 | 
Integrations
 | Later sync ownership/version/config/evidence metadata from CMDB/PLM/SCM/test/document systems
 | 

6.6 Promotion and deduplication
When a local assessment or program creates an object that appears reusable, the system should show candidate matches and allow the user to:
link to an existing canonical asset/object;
keep the object local;
submit a new canonical object;
submit a proposed change/new version to an existing canonical object.
Promotion preserves origin lineage and never retroactively rewrites historical assessment/program state.
7. Control Profiles, Tailoring, and Customer Requirements
7.1 Control source vs. effective program profile
The user experience must distinguish a control catalog from a selected/tailored baseline. NIST SP 800-53 is treated as a control source/catalog; an organization or program selects and tailors the applicable set using the organization’s approved security process. For NSS contexts, the product must support the organization’s CNSSI 1253-derived categorization and control-selection workflow and retain the authoritative inputs and decisions used to establish the applicable program profile.
7.2 Profile layering model
Effective program obligation layering
Authoritative catalog(s)
 | Organization profile
 | Product profile / overlay
 | Program security context
 | Customer requirements
 | Program tailoring decisions
 | Effective program profile
 | 

Layering must preserve provenance. The system does not flatten away the reason a requirement exists. Users can always inspect the source stack and the decision that produced the effective value.
7.3 Organization-defined parameters and customer overrides
Parameter values should be modeled as scoped assertions, not overwritten strings. A program may inherit an organizational default and then receive a customer-specific value. The platform computes a proposed effective value but requires review when sources conflict or when “stricter” cannot be determined mechanically.
Source
 | Example value
 | State
 | 
Organization baseline
 | Password minimum length = 15
 | Inherited default
 | 
Product baseline
 | No modification
 | Inherited
 | 
Customer requirement CR-118
 | Password minimum length = 24
 | Program-specific source
 | 
Program decision
 | Effective value = 24
 | Approved with rationale
 | 

Precedence rule Do not hard-code “customer always wins” or “largest number wins.” The system may propose a likely resolution, but effective values require policy-aware adjudication when sources conflict, weaken a requirement, use different scope, or are not semantically comparable.
7.4 Customer requirement intake
Classification
 | System behavior
 | 
Parameter modification
 | Map to an existing control/requirement parameter; retain customer source; require approval of effective value.
 | 
Strengthening requirement
 | Map to existing control/requirement and add program-specific requirement text/acceptance criteria.
 | 
New requirement
 | Create a program-specific requirement and map to controls/capabilities where appropriate.
 | 
Conflicting requirement
 | Flag for decision; do not auto-resolve; show impacted controls/systems.
 | 
Unmapped / ambiguous
 | Create triage item assigned to Program SSE or security SME.
 | 
Not security-related
 | Retain outside assurance scope or link to external requirements system as configured.
 | 

7.5 Tailoring UX
The default experience should show the resolved program profile and exceptions, not hundreds of raw profile operations. Advanced users can inspect source selection, inclusions/exclusions, parameter modifications, overlays, and decision history. Proposed N/A or exclusion actions require rationale, scope, approver, and affected requirement/system information.
8. Product and System Baselines
8.1 Why a second baseline is required
A program’s control profile answers what must be satisfied. A product/system baseline answers what the organization believes the standard product contains and how it normally satisfies those obligations. Keeping these separate prevents a “baseline” from ambiguously meaning both security requirements and product architecture.
8.2 Product model
Object
 | Purpose
 | 
Product Family
 | Stable identity for a product line or reusable physical-product architecture.
 | 
Product Baseline Version
 | Immutable published configuration such as Falcon v6.
 | 
System Template
 | One or more assurance boundaries that normally exist inside the product baseline.
 | 
Baseline Component Set
 | Expected HW/FW/SW/services/processes used by the system template.
 | 
Baseline Capabilities
 | Reusable security/assurance capabilities consumed by the system.
 | 
Baseline Implementation Assertions
 | Known mappings from obligations to implementations, including conditions.
 | 
Baseline Evidence References
 | Evidence potentially reusable when program applicability conditions hold.
 | 

8.3 Who builds and publishes a baseline
Stage
 | Owner
 | Workflow
 | 
Create draft product/system model
 | Product Security + System Engineering
 | Start from existing product architecture, prior program, imported inventory, or blank template.
 | 
Populate components/capabilities
 | System engineering + capability owners
 | Select from library; add product-local components where required.
 | 
Map implementations
 | Security architecture / SMEs
 | Attach reusable implementation assertions and applicability conditions.
 | 
Attach reusable evidence
 | Evidence owners / security
 | Reference evidence; define validity conditions and refresh rules.
 | 
Resolve unknowns
 | Assigned engineering/system owners
 | Close required architecture/documentation gaps before publication threshold.
 | 
Publish baseline version
 | Configured product baseline owner
 | Freeze the version; future changes create a new version or revision according to policy.
 | 

8.4 Baseline completeness
A baseline may exist before it is complete. The product must expose baseline maturity so programs understand what they are inheriting. Recommended dimensions are architecture completeness, component identification, capability mapping, implementation coverage, evidence coverage, and review freshness. Publication policy may require thresholds for “approved reusable baseline,” while draft baselines remain usable with explicit warnings.
9. Program Creation, System Onboarding, and Delta
9.1 Design goal
Creating a program should produce a usable assurance plan, not an empty container. The setup flow gathers enough context to establish effective obligations, systems, inherited knowledge, responsible roles, and the first set of unresolved work. The flow is resumable; incomplete setup is allowed and visibly represented.
9.2 Program setup wizard
Step
 | Experience
 | 
1. Program basics
 | Name, customer/mission, target milestone, key dates, program manager, Program SSE/security lead.
 | 
2. Security context
 | NSS/non-NSS context as configured; categorization inputs; environment/mission attributes; applicable organization policy.
 | 
3. Control sources & overlays
 | Organization profile, product overlay, CNSSI-derived selection inputs as applicable, additional framework/customer overlays.
 | 
4. Customer requirements
 | Import/upload/enter customer requirements; classify, map, parameterize, or send to triage.
 | 
5. Systems
 | Select known product/system baselines, create variants, or create new/incomplete systems.
 | 
6. Shared organizational dependencies
 | Confirm known organization-owned services/assets (for example IAM, PKI, signing, vulnerability management) so candidate assurance packages are identified before launch.
 | 
7. Ownership
 | Assign system owners, engineering leads, capability owners, reviewers, assessors; apply routing defaults.
 | 
8. Review effective plan
 | Show obligation count, inheritance sources, unknowns, conflicts, unassigned items, and planned work.
 | 
9. Launch
 | Instantiate program graph, pin baseline versions, create work items, notify owners, generate initial workbook/workspace.
 | 

9.3 System selection during setup
Choice
 | When used
 | System behavior
 | 
Use existing baseline
 | Program delivers a known standard product/system with no expected structural change.
 | Instantiate system from pinned baseline; require confirmation of key applicability assumptions.
 | 
Create variant
 | Program is a known product with customer/program modifications.
 | Instantiate baseline plus explicit delta workspace; impact analysis starts from declared differences.
 | 
Create new system
 | No trusted reusable baseline exists.
 | Create incomplete system with Unknown states and guided discovery tasks.
 | 
Import legacy program system
 | Existing workbook/data describes the program.
 | Create program-scoped objects, map known fields, mark unmapped/ambiguous content for triage.
 | 

9.4 Launch gating
A program should not be blocked from launch because every system is fully modeled. The minimum launch gate is: program identity, security lead, target milestone, at least one control-selection source or explicit “pending,” at least one system placeholder, and ownership for unresolved setup decisions. The platform then creates work to finish definition.
9.5 System is a first-class assurance boundary
A system instance is the unit against which architecture, control allocation, implementation, evidence, and assessment are reconciled. A program may contain multiple systems, including systems instantiated from different product baselines and systems that do not exist yet.
9.6 New/incomplete system UX
System page area
 | Behavior
 | 
Overview
 | Definition completeness, assurance readiness, owner, boundary status, key unknowns, blocked decisions.
 | 
Architecture
 | Boundary, interfaces, trust relationships, environment, major subsystems, external dependencies.
 | 
Components
 | HW/FW/SW/service/process inventory with source, version, scope, owner, confidence, and unknown placeholders.
 | 
Capabilities
 | Reusable capabilities consumed or program-local capabilities under development.
 | 
Requirements & Controls
 | Allocated obligations and current implementation/evidence status.
 | 
Evidence
 | Evidence by implementation/assessment; inherited vs local; stale/invalidated/missing.
 | 
Changes
 | Declared architecture/configuration changes and impact results.
 | 

9.7 Unknown model
Unknown type
 | Example
 | Generated work
 | 
Unknown component
 | Processor/SoC has not been selected.
 | Discovery task to hardware lead: identify production component and target decision date.
 | 
Unknown version/config
 | Bootloader known, production version unknown.
 | Confirm configuration/version with firmware lead.
 | 
Unknown boundary
 | External key service may be in or out of system boundary.
 | Boundary decision assigned to SSE/system architect.
 | 
Unknown implementation
 | Applicable authentication requirement has no implementation mapping.
 | Implementation analysis assigned to system security + SW owner.
 | 
Unknown evidence
 | Implementation believed present but no current proof identified.
 | Evidence request to implementation/evidence owner.
 | 
Unknown applicability
 | Control scope unclear for system.
 | Applicability decision assigned to Program SSE/reviewer.
 | 

9.8 Progressive system construction
New system maturation
Create system placeholder
 | Define boundary + owners
 | Identify major components
 | 
Select/create capabilities
 | Allocate requirements
 | Map implementations
 | 
Collect/validate evidence
 | Assess
 | Publish reusable candidate baseline
 | 

9.9 Program-created components
When an engineer identifies a component that does not exist in the canonical Asset Catalog / Assurance Library, they create a program-scoped component with the minimum known fields. Matching suggests possible canonical duplicates. The program can proceed immediately. A library steward or capability owner later decides whether to promote, merge, or retain the component as program-specific.
9.10 Variant workflow
For a system instantiated from an existing baseline, the primary onboarding experience is not a blank architecture editor. It is a confirmation and delta review. The UI shows inherited architecture and asks the program to confirm unchanged areas, declare modifications/additions/removals, and identify unknowns.
Delta state
 | Meaning
 | 
Confirmed unchanged
 | Program has affirmed that a baseline element and its relevant applicability assumptions remain true.
 | 
Changed
 | Baseline element differs; new value/component/configuration is recorded.
 | 
Added
 | Program introduces a new component/capability/interface/requirement.
 | 
Removed
 | Baseline element is not present in the program system.
 | 
Unknown
 | Program cannot yet confirm whether the inherited assertion holds.
 | 
Not reviewed
 | No human confirmation yet; inheritance remains provisional according to policy.
 | 

9.11 Impact engine
Impact analysis traverses the assurance graph from a changed node to dependent requirements, controls, implementation assertions, evidence, assessment results, and program milestones. The engine does not automatically declare noncompliance; it changes the confidence/validity state and creates review work.
Example blast radius
TPM Y -\> TPM Z
 | Secure Boot capability condition violated
 | Inherited implementation becomes Impacted
 | Evidence applicability questioned
 | Affected controls/requirements flagged
 | Revalidation work assigned
 | 

9.12 Impact classifications
Classification
 | Meaning
 | Default action
 | 
No known impact
 | Change does not intersect documented assurance dependencies.
 | Record change; no new work.
 | 
Applicability Changed
 | A source or consumer applicability rule may now evaluate differently.
 | Re-evaluate applicability; create review work.
 | 
RAP Consumption Impacted
 | Consumer package reliance requires attestation, review, or reassessment.
 | Notify consumers; create review/attestation work.
 | 
Review required
 | Dependency exists but impact cannot be determined automatically.
 | Create review work.
 | 
Assertion Impacted
 | Implementation claim assumptions changed; invalidation occurs only by rule or approved decision (Domain & Rules Specification 16.5).
 | Require new/updated implementation.
 | 
Evidence Impacted
 | Evidence may no longer support the changed context.
 | Review; replace/revalidate where concluded invalid.
 | 
New Obligation
 | Change causes additional requirement/control applicability.
 | Add effective obligation and route work.
 | 
Determination Impacted
 | A prior objective result may no longer be safely reusable.
 | Require assessor/reviewer determination.
 | 
Impacted means review is required; invalidated means a known rule or approved authority decision concludes the prior item is not valid for current reuse. These classifications match Domain & Rules Specification 16.4-16.5.

10. Assessment Operating Model
10.1 Product concept
Assessment is the workflow engine The platform converts control/requirement assessment objectives into structured, delegable work. Organizational teams can run assessments independently of a program; program SSEs use the same engine to assess products/systems while automatically reusing applicable organization-level work.
The previous “workbook as work queue” concept remains, but assessment tasks are a specialized first-class work type with stronger semantics: objective linkage, assessment method, response/evidence, reviewer determination, and finding generation.
10.2 Creating an assessment
An authorized user can create an assessment from:
an organizational unit;
an asset/shared service/policy/procedure;
a product or product baseline;
a system/system instance;
a program;
a selected set of controls/requirements for an ad hoc review.
Setup defines target scope, control profile or selected controls, applicable assessment objectives, assessment period/milestone, assessment lead, inheritance policy, and optional routing template.
10.3 Objective resolution before assignment
Before creating questions/tasks, the platform resolves each objective against current reusable assurance:
Resolution
 | Behavior
 | 
Inherited - current and applicable
 | Suppress redundant local task; retain lineage to inherited result.
 | 
Inherited - local responsibility remains
 | Generate only the residual local task(s).
 | 
Inherited - attestation required
 | Generate a lightweight confirmation task.
 | 
Impacted / expired / changed
 | Reopen only the objectives affected by the changed condition.
 | 
No reusable result
 | Generate the organization assessment template tasks for that objective.
 | 
Applicability uncertain
 | Generate an applicability decision task to SSE/assessor before substantive tasks.
 | 
Conflict
 | Create adjudication work; block automatic inheritance where the disputed fact is material.
 | 
Not reusable
 | Provider result is valid but policy or visibility prevents reuse here; generate local tasks.
 | 

This generalizes the old “question supersedes question” concept into assessment dependency and inheritance rules.
10.4 Assessment assignment packages
Remaining tasks are grouped into coherent packages based on asset ownership, organizational unit, system/component ownership, task type, or configured routing rules.
Example:
Package
 | Tasks
 | Default owner
 | 
Identity & access for Nightwing
 | 31
 | Enterprise IAM / local system IAM owner
 | 
Firmware security
 | 47
 | Firmware Engineering
 | 
Crypto / key management
 | 18
 | Enterprise PKI / Key Management
 | 
System architecture
 | 24
 | System Engineering
 | 
Program security decisions
 | 36
 | Program SSE
 | 

Package names are functional UX labels only; there is no fixed “discipline” taxonomy requirement.
10.5 Delegation workflow
The package owner receives the bundle and can:
answer tasks personally;
delegate individual tasks to SMEs;
bulk-delegate related tasks;
request reassignment when the wrong unit/owner was selected;
identify a new asset/owner while answering;
attach/link evidence or request clarification.
A delegated task retains the package owner, assessment context, objective trace, due date, and reviewer. The system shows why the information is needed without forcing the contributor to understand NIST control structure.
10.6 Task types
Task type
 | Example
 | 
Question / interview
 | “Describe how privileged account requests are approved for this system.”
 | 
Evidence request
 | “Provide/link the privileged account approval procedure.”
 | 
Test
 | “Demonstrate that an unauthorized privileged-access request is rejected.”
 | 
Examine / reviewer action
 | “Review the configured account types and account-management policy.”
 | 
Applicability decision
 | “Does this objective apply to the system given its authentication architecture?”
 | 
Attestation
 | “Confirm this system continues to use Enterprise IAM under the assessed configuration.”
 | 
Discovery
 | “Identify the production SoC and owner for this subsystem.”
 | 

10.7 Contributor experience
A contributor sees a narrow task page:
plain-language request;
asset/system/program context;
due date and requester;
expected response/evidence type;
source policy/requirement only when useful;
“why this matters” / blocked milestone;
delegate button if permitted;
related previous response or reusable organization answer when relevant.
The contributor's answer becomes a Response and may create/attach Evidence or an Observation. It does not automatically mark a control/objective satisfied.
10.8 Reviewer / SSE experience
The reviewer queue groups completed responses by objective and shows:
objective/control/requirement trace;
inherited assertions/results;
new responses/observations/evidence;
conflicts or stale evidence;
assessment method(s) performed;
prior determinations;
related findings.
The reviewer records the authorized determination, rationale, scope, date, and any finding. Where a response is insufficient, it can be returned for clarification without creating a final finding yet.
10.9 General assurance work outside assessments
The platform still supports work items for architecture discovery, implementation changes, evidence refresh, customer-requirement decisions, promotion reviews, baseline publication, and risk/remediation actions. Assessment tasks and general work share assignment/deadline infrastructure but remain semantically distinct.
10.10 Standards-backed assessment content
For NIST-based workflows, the platform should ingest NIST SP 800-53A assessment content alongside SP 800-53 controls. NIST publishes assessment procedures/objectives and supplemental machine-readable content, and OSCAL-compatible NIST control content represents assessment objectives linked back to control statements. The platform should preserve authoritative identifiers/source/version rather than recreating the assessment intent manually.
The organization then layers Assessment Templates on top of the canonical objectives to define the best practical way to assess them in this environment.
10.11 800-53A objective -> organization task model
Layer
 | Owned by
 | Purpose
 | 
Control / control statement
 | NIST / authoritative source
 | What security/privacy requirement is being expressed
 | 
Assessment objective / determination statement
 | NIST SP 800-53A
 | What the assessor must determine
 | 
Assessment method
 | NIST/assessment plan
 | Examine, interview, test, or combination as appropriate
 | 
Organization assessment template
 | Organization
 | Human-friendly reusable method for gathering/producing the needed information
 | 
Assessment task
 | Assessment campaign
 | Concrete delegated question/evidence request/interview/test for this scope
 | 
Response / observation / evidence
 | Contributor / assessor
 | What was learned or produced
 | 
Determination
 | Authorized reviewer
 | Whether the objective is satisfied at the assessed scope/time
 | 
Finding
 | Assessor/reviewer
 | Gap/issue requiring disposition
 | 

10.12 Evidence is not a file attachment
Evidence is a structured assurance object with provenance, owner, source, creation time, supported observations/assertions/objectives, asset/system/component context, applicability conditions, validity/expiration semantics, and review status. The underlying file may remain in an external document/test system.
Evidence may be organization reusable, asset-specific, product/system baseline, program-specific, or machine-generated. Reuse requires version/configuration/scope/applicability checks.
10.13 Assessment result states
Internal workflow needs more granularity than the final determination. Suggested objective lifecycle:
State
 | Meaning
 | 
Not planned
 | Not in current assessment scope
 | 
Planned
 | In scope, no task/result yet
 | 
Inherited - current
 | Valid reusable result applies
 | 
Attestation required
 | Inheritance contingent on consumer confirmation
 | 
Awaiting response
 | Assigned contributor work outstanding
 | 
Ready for review
 | Required inputs submitted
 | 
Insufficient information
 | Reviewer cannot yet determine; more work required
 | 
Satisfied
 | Authorized positive determination
 | 
Other Than Satisfied
 | Authorized negative determination / gap exists
 | 
Not Applicable
 | Authorized applicability decision with rationale
 | 
Impacted / reassessment required
 | Prior result invalidated or no longer safely reusable
 | 

Final standards export can map the internal states into the supported standards representation while retaining richer operational state inside the product.
10.14 Findings
A Finding is first-class and traceable to the assessment result that produced it. Minimum fields include source assessment, affected organization/unit/asset/product/system/program, control/objective/requirement links, description, supporting observations/evidence, owner, status, priority/severity as configured, due date, and disposition.
Findings are not forced into one-to-one relationships with controls or risks. One finding may affect several objectives; several findings may share one root cause.
10.15 Remediation initiatives
Security teams need to group related findings when a shared fix addresses multiple gaps. A Remediation Initiative represents that work without turning the platform into a general project-management suite.
Example:
Finding F-112 - quarterly access review missing
Finding F-118 - no automated recertification
Finding F-143 - no terminated-user reconciliation
Finding F-151 - no privileged-access reporting
All may be addressed by Enterprise Access Governance with design, implementation, pilot, deployment, and reassessment milestones.
A remediation initiative can span multiple assets/products/programs if the root cause is organizational, while individual POA&M obligations remain traceable to the affected system/program where required.
10.16 Risk
Risk is related to findings but not identical to them. Multiple findings can contribute to one risk statement; one finding may be remediated without creating a separate risk object if the organization does not require it. Risk treatment can include remediate/mitigate, accept, transfer, avoid, or other configured dispositions.
Risk acceptance is an authority decision and must never be inferred from lack of remediation.
10.17 POA&M
For system/program authorization workflows, the platform creates or links POA&M items from relevant findings/risks. POA&M records capture source of discovery, affected system, weakness/risk description, responsible owner, remediation plan, milestones, target dates, status, deviations/acceptances, and closure evidence/reassessment.
The platform should support OSCAL-aligned POA&M import/export where useful, while allowing organization-specific fields/workflows internally.
10.18 Reassessment and closure
Closing a finding/remediation/POA&M item does not automatically restore inherited assurance. Closure requires configured validation, which may include new evidence, targeted reassessment objectives, reviewer determination, or baseline/version update.
Once reassessed successfully, the result can become reusable at the highest valid scope and can automatically resolve eligible downstream objectives.
10.19 Factual rollups, not maturity scores
Assessment rollups should show counts and operational states such as:
objectives inherited/current;
objectives awaiting responses;
objectives ready for review;
satisfied / Other Than Satisfied / insufficient information / not assessed;
open findings and age;
remediation initiatives/milestones at risk;
POA&M items due/overdue;
impacted inherited results requiring reassessment;
evidence expiring/invalidated;
organization units/assets generating repeated findings.
The core platform does not derive a capability maturity level, discipline score, radar score, or opaque percentage indicating that an organization/system is “X% secure.”
10.20 OSCAL assessment alignment
The internal assessment model should map cleanly where appropriate to:
OSCAL Assessment Plan for planned scope, reviewed controls/objectives, assessment subjects/assets, and tasks/activities;
OSCAL Assessment Results for performed activities, observations, evidence, findings, objective status, and identified risks;
OSCAL POA&M for system-scoped risk/remediation tracking and milestones.
OSCAL models are system-centric in important places; the product's organization-unit/ad hoc assessment capability may therefore use the same internal objects without forcing every organizational assessment into a literal OSCAL Assessment Plan. Standards export is generated where the target workflow fits the standard model.

Part III - Assurance Domain and System Rules
This part defines the semantic contracts that must remain consistent across UX, APIs, storage, integrations, exports, and future automation. These rules are intentionally more precise than the PRD. Engineering may implement them differently, but implementations must preserve the semantics. The canonical statement of these rules is the Domain & Rules Specification v1.1; this part summarizes them in operating context, and any divergence defers to that document.
11. Canonical Identity and Entity Model
11.1 Asset as the assurance identity substrate
The system uses Asset as the common assurance identity for things that can be owned, assessed, related, consumed, or carry assurance. Strongly typed objects may specialize Asset behavior without losing canonical identity.
Recommended type families:
Asset type family
 | Examples
 | Special semantics
 | 
Organizational artifact
 | Policy, procedure, standard, process
 | Versioned governing content, scope/inheritance rules
 | 
Shared service / infrastructure
 | IAM, PKI, VPN, MDM, signing service
 | Provider/consumer relationships, reusable assurance packages
 | 
Product/System
 | Product family, baseline product, system, subsystem
 | Architecture boundary, composition, baseline/version semantics
 | 
Technical component
 | Hardware, firmware/software, service, library
 | Version/configuration, composition and impact semantics
 | 
Evidence-producing asset
 | Test service, scanner, build pipeline
 | Evidence provenance and automation source
 | 
Other assessable subject
 | Facility, site, business process
 | Custom attributes but same scope/assessment identity
 | 

A Product, System, Policy, Procedure, or Component may therefore be represented by a typed Asset record plus specialized attributes/relationships. The implementation should avoid parallel identifiers that cause one real thing to appear as unrelated records across modules.
11.2 Identity invariants
Every canonical asset has a stable internal ID independent of display name.
External source identifiers are aliases/links, not primary identity.
Local/candidate assets receive stable IDs immediately and remain traceable if later merged/promoted.
Merging does not rewrite historical assessment snapshots; lineage records the canonical successor.
Versions/configurations do not create unrelated identities unless the organization intentionally treats them as separate assets.
Product/system baseline versions reference immutable/pinned asset versions or configuration assertions.
11.3 Relationship vocabulary
At minimum the graph must distinguish:
owned-by organizational unit/person/role;
part-of / composed-of product-system-component structure;
consumes / depends-on cross-boundary dependency;
governed-by policy/procedure/requirement;
implements / contributes-to obligation implementation;
provides-assurance-to / consumes-assurance-from Reusable Assurance Package relationship;
assessed-in / assessment-subject-of assessment relationships;
supported-by evidence/observation/result;
supersedes / version-of lifecycle lineage.
Relationships may carry scope, effective dates, source, confidence/verification state, and configuration qualifiers when materially required.
12. Scope and Applicability Model
12.1 Scope
A Scope identifies where an assertion, policy, requirement, assessment result, evidence item, or assurance package is valid or owned. Scopes are not limited to the organization hierarchy.
Supported scope anchors include:
organization;
organizational unit;
asset/shared service;
product family/baseline;
system/system instance;
program;
assessment;
explicit set of assets/consumers.
12.2 Applicability rule
An object intended for inheritance or reuse may define an Applicability Rule containing predicates such as:
consumer is within organizational scope X;
consumer is one of selected assets/products/programs;
consumer uses asset/component/service version within allowed range;
required configuration parameter equals/contains value;
required environment/mission attribute is present;
prerequisite assurance package/version is consumed;
required evidence/result is current;
disqualifying component/configuration is absent;
local attestation is required;
consumer must perform listed residual responsibilities.
Rules should be declarative and reviewable. R1 should support a bounded set of condition types rather than an unrestricted scripting language.
12.3 Applicability result
For a candidate inherited item, evaluation returns a structured result rather than true/false only:
Result
 | Meaning
 | 
Applicable
 | Conditions satisfied; item may be inherited.
 | 
Applicable with residual responsibility
 | Provider assurance applies but consumer tasks remain.
 | 
Applicable with attestation
 | Conditions appear satisfied but policy requires local confirmation.
 | 
Not applicable
 | Conditions demonstrably fail.
 | 
Conflict
 | Required facts disagree across sources; adjudication is required before reuse.
 | 
Review Required
 | Rule explicitly requires human judgment or a policy decision.
 | 
Unknown
 | Required facts/configuration are missing or conflicted.
 | 
Impacted
 | Previously applicable state may no longer hold because a dependency changed.
 | 
Expired
 | Validity/assessment/evidence freshness rule is no longer satisfied.
 | 

Unknown, Impacted, Expired, Conflict, and Review Required must create review work rather than silently dropping or retaining assurance. The applicability predicate proper returns Applicable / Not Applicable / Unknown / Conflict / Review Required (Domain & Rules Specification 10.4); residual-responsibility, attestation, Impacted, and Expired are consumption/validity outcomes surfaced during inheritance resolution (Domain & Rules Specification 11.2).
12.4 Inheritance resolution order
For a target scope, the engine should conceptually:
1. Resolve effective obligations and assessment objectives.
2. Identify candidate Reusable Assurance Packages, implementation assertions, and results from organizational and product/system sources.
3. Evaluate scope and applicability conditions against the target snapshot/current state.
4. Determine provider-covered portions and consumer residual responsibilities.
5. Detect conflicts between candidate inherited sources or local assertions.
6. Prefer no automatic resolution when authority/semantic precedence is not explicit.
7. Produce objective-level resolution state: inherited, residual work, attestation, reassessment, unresolved, or applicability decision.
8. Preserve a machine-readable explanation for “Why is this here?”
This resolution output is ephemeral/effective state derived from immutable/versioned source assertions; it should not require copying source objects into the program.
13. Reusable Assurance Package
13.1 Purpose
A Reusable Assurance Package (RAP) packages the assurance a provider offers to downstream consumers. It is the primary human-facing inheritance unit for shared organizational services and reusable product/system security implementations.
Without a package abstraction, consumers must reason about dozens of implementation assertions, evidence artifacts, objective results, and residual responsibilities independently. The RAP gives those records a governed provider contract.
13.2 Required fields
Field
 | Purpose
 | 
Stable package ID / name
 | Canonical identity
 | 
Provider asset + owning scope
 | Who is providing the assurance
 | 
Version / publication state
 | Reproducible inheritance
 | 
Supported obligations/objectives
 | What the package claims to cover or contribute to
 | 
Implementation assertions
 | How the provider satisfies the claimed portions
 | 
Provider responsibilities
 | What the provider owns/operates
 | 
Consumer responsibilities
 | What remains local to each consumer
 | 
Applicability rules
 | Conditions under which package may be consumed
 | 
Assessment result set
 | Objective determinations supporting the package
 | 
Evidence references
 | Supporting artifacts/results and their provenance
 | 
Evidence visibility policy
 | What consumers can inspect versus merely rely upon
 | 
Validity/freshness conditions
 | Review/expiry/refresh semantics
 | 
Invalidation triggers
 | Changes that require impact/reassessment
 | 
Approval/publisher
 | Authority that made package reusable
 | 
Consumers
 | Current products/systems/programs relying on the package
 | 

13.3 Package lifecycle
Draft -> Under Review -> Published -> Impacted -> Superseded -> Retired
Published package versions are immutable. Corrections create a new version unless governance allows an administrative metadata correction that cannot change assurance meaning.
13.4 Package consumption states
A consumer records a reference to a specific published version and one of:
Candidate;
Applicable;
Attestation Required;
Active;
Partially Active (residual responsibilities open);
Impacted;
Reassessment Required;
Not Applicable;
Conflict;
Ended / Superseded.
These states match the RAP Consumption lifecycle in the Domain & Rules Specification (21.5).
Consuming a new package version requires impact/delta review rather than silent replacement.
13.5 Provider/consumer example
Enterprise IAM Assurance Package v4.2
Provider: Enterprise Security / IAM.
Applicable when: approved production IAM tenant/configuration is used and required integration settings are enabled.
Provider responsibilities: authentication service operation, credential policy enforcement, enterprise account lifecycle controls.
Consumer responsibilities: local role assignment, application authorization, privileged access approval, local service-account inventory.
Result: 38 assessment objectives resolved, 7 residual local tasks, 2 consumer attestations.
Evidence: assessment report and configuration/test evidence; selected evidence restricted to IAM assessors while result metadata is reusable.
14. Authority, Assertions, and Conflict Resolution
14.1 Assertions retain source and authority
The system stores material facts as sourced assertions when competing truth can exist. Example: “Bootloader version = 4.4” should retain whether it came from PLM, build metadata, program input, or assessor observation.
An assertion may include:
subject + attribute/predicate + value;
source system/document/person;
asserted by / observed by;
scope and effective time;
authority class/source role;
verification state;
version/configuration context;
supersession/withdrawal linkage.
14.2 Authority is policy, not a universal hard-coded ranking
Different attributes have different authoritative sources. PLM may govern hardware configuration; a policy authority governs password policy; an assessor governs assessment determinations; customer contract documents govern customer requirements.
The platform therefore supports configurable authority rules by data domain/attribute rather than one global precedence order.
14.3 Source Conflict object
When two material assertions cannot both be true in the same scope/time, create a Source Conflict rather than overwriting one.
Lifecycle:
Detected -> Triaged -> Under Review -> Resolved / Accepted Ambiguity -> Superseded
Resolution records:
conflicting assertions and sources;
affected scopes/consumers;
decision authority;
selected effective assertion or explanation;
rationale/evidence;
effective time;
downstream invalidation/reassessment effects.
14.4 Requirement/parameter conflicts
Control parameters and customer/internal requirements use the same conflict mechanism. The system may suggest that a requirement is strengthening, weakening, or incompatible, but a human/policy rule must adjudicate when semantics cannot be safely compared.
15. Assessment Snapshot Model
15.1 Why snapshots are required
Assessments occur over time while systems, evidence, profiles, and shared services continue changing. Every determination must be reconstructable against the exact state that was assessed.
15.2 Snapshot contents
An Assessment Snapshot captures or references immutable versions of:
assessment scope and subjects;
effective control/requirements profile and parameter values;
relevant standards/catalog/profile versions;
product/system baseline version and system configuration/asset graph;
consumed Reusable Assurance Package versions;
implementation assertions;
evidence/result versions used;
known source conflicts/unknowns;
assessor/reviewer roles/authority;
assessment plan/objective/template versions;
assessment start/cutoff/effective dates as required by policy.
15.3 Snapshot vs live state
The user can view Assessment State and Current State side by side. Changes after the snapshot do not rewrite the assessment. Instead, the change engine determines whether the prior result remains reusable, needs attestation, or requires reassessment.
15.4 Snapshot invariants
Determinations always point to a snapshot or equivalent immutable state reference.
A historical assessment can be reproduced even if canonical assets/templates/policies have new versions.
Upstream package/baseline changes after snapshot create impact events, not historical edits.
Evidence deletion/retention policy must preserve enough metadata/hash/reference to establish what evidence supported the historical determination.
16. Evidence Trust, Provenance, and Visibility
16.1 Evidence object
Evidence is a structured object referencing or containing an artifact/result. Required semantic fields include:
source/provenance;
produced by actor/system;
creation/collection time;
subject/scope/configuration;
linked assertion/objective/observation;
validation/reviewer state;
integrity metadata where required (hash/signature/source ID);
freshness/expiration/refresh rule;
applicability conditions;
sensitivity/visibility policy;
authoritative repository link when external.
16.2 Evidence source classes
The platform may classify evidence for workflow and policy without deriving a generic confidence score:
machine-generated from authoritative/test system;
authoritative external/controlled document;
assessor-produced observation/test output;
owner-attested artifact/record;
manually uploaded artifact;
contributor self-report with no independent artifact.
Assessment policy decides what combination is sufficient for each objective; source class alone does not determine satisfaction.
16.3 Visibility and inheritance
Assurance can be reusable even when underlying evidence cannot be exposed to every consumer. Evidence access therefore separates:
1. Existence metadata - evidence ID/type/date/owner/validity may be visible.
2. Assurance result metadata - objective determination and package applicability may be reusable.
3. Artifact/content access - controlled independently by markings/permissions.
A downstream program may inherit “Enterprise IAM objective X satisfied under package v4.2” without permission to open the restricted IAM evidence artifact.
16.4 Revocation and invalidation
Evidence may become expired, superseded, revoked, inaccessible, or invalidated by configuration change. Such transitions trigger dependency evaluation for every assertion/result/package that relied upon the evidence.
17. Source-of-Truth Reconciliation and Synchronization
17.1 Authoritative source mapping
The platform should define, by attribute/domain, which external source is expected to be authoritative where integrations exist. Examples:
people/team membership -> directory/HR source;
product hardware configuration -> PLM/approved configuration source;
firmware build/version -> build/artifact system;
control/assessment content -> authoritative standards source;
customer requirement -> controlled contract/requirements repository;
assessment determination -> platform assessment record.
17.2 Synchronization states
For externally sourced attributes:
Synchronized | Locally overridden by approved exception | Source changed - review required | Conflict | Source unavailable | Stale
Local editing of source-governed fields should either be prevented or explicitly create an override/assertion rather than silently mutating the imported truth.
17.3 Change events
A material upstream source change creates a Change Event containing source, old/new value, effective time, impacted assets/scopes, and calculated assurance dependencies. Change Events feed impact analysis and work generation.
18. Assessment Semantics and Decision Authority
18.1 Assessment object hierarchy
Assessment Campaign/Plan -> Snapshot -> Objective Set -> Tasks -> Responses/Observations/Evidence -> Determinations -> Findings
An objective can be supported by multiple tasks; one task may support multiple objectives where appropriate. Task completion does not imply objective completion.
18.2 Assessment methods
Organization templates may implement examine, interview, test, attestation, applicability decision, or discovery steps. The template remains mapped to canonical objectives so wording/process improvements do not detach from standards intent.
18.3 Determination authority
Only configured assessment authorities may record final objective determinations. Program SSEs may be authorized for some workflows and not others. The platform must represent authority separately from task ownership.
18.4 Determination states
Operational state may include:
Planned -> Inherited Current / Awaiting Response -> Ready for Review -> Insufficient Information -> Satisfied / Other Than Satisfied / Not Applicable -> Impacted/Reassessment Required
Legal transitions and side effects are defined in Section 22.
19. Findings, Remediation, Risk, and POA&M Semantics
19.1 Finding
A Finding is an identified gap/issue, not automatically a risk or POA&M item. It retains source assessment/snapshot, affected scope, linked objectives/controls/requirements/assets, observations/evidence, owner, status, and disposition.
19.2 Remediation Initiative
Multiple findings may share a root cause and one remediation effort. A Remediation Initiative groups assurance-specific work/milestones without replacing external engineering/project execution systems.
19.3 Risk
Risk is a separate analysis/decision object. Multiple findings can contribute to one risk. Risk treatment/acceptance requires configured authority; inaction never implies acceptance.
19.4 POA&M
Where formal system/program workflow requires it, a finding/risk may create or link to a POA&M item with weakness/risk, source of discovery, owner, remediation plan, milestones, dates, status, deviations/acceptance, and closure evidence.
19.5 Closure invariant
Closing a task, finding, remediation initiative, or POA&M item does not automatically restore assurance. The affected objective/result returns to current only after the required validation/reassessment/determination occurs.
20. Change, Impact, and Invalidation Rules
20.1 Impact graph
A Change Event traverses typed dependencies:
Changed asset/configuration -> implementation assertions -> Reusable Assurance Packages -> evidence/results -> assessment objectives -> consuming systems/programs -> milestones/work
The impact engine reports known relationships; it does not declare noncompliance solely from a change.
20.2 Impact outcomes
No Known Impact;
Review Required;
Applicability Changed;
Assertion Impacted;
RAP Consumption Impacted;
Evidence Impacted (including expiry);
Determination Impacted;
New Obligation;
Consumer attestation required (a resolution outcome);
Reassessment required (a resolution outcome).
Each outcome identifies the rule/path that produced it. Impact classifications match Domain & Rules Specification 16.4; attestation and reassessment are resolution outcomes that follow impact review (16.5).
21. Security, Markings, and Cross-Scope Information Sharing
21.1 Principle
Reusable assurance must not require unrestricted evidence sharing. Permissions operate at object, scope, relationship, and evidence-content levels.
21.2 Access dimensions
At minimum policy can control:
object discovery/existence;
metadata visibility;
detailed implementation visibility;
assessment result visibility;
evidence artifact/content visibility;
program/customer-restricted data;
ability to consume assurance without opening evidence;
ability to promote information across scope boundaries.
21.3 Derived/reusable metadata
Where policy permits, sensitive evidence can produce reusable non-sensitive metadata such as package version, assessment date, objective status, owner, and expiration without exposing underlying artifacts.
21.4 No inference of access
A consumer's right to inherit an assurance result does not imply access to the provider's evidence or internal architecture. Conversely, evidence access does not grant authority to republish or promote it.
22. Lifecycle, State Transitions, and Invariants
22.1 General invariant pattern
Material state transitions record actor, authority, timestamp, prior/new state, reason, source event, and downstream side effects. Invalid transitions are rejected rather than silently coerced.
22.2 Reusable Assurance Package transitions
From
 | To
 | Required condition
 | Side effect
 | 
Draft
 | Under Review
 | Required provider fields complete
 | Review work created
 | 
Under Review
 | Published
 | Publisher authority approves
 | Immutable version becomes consumable
 | 
Published
 | Impacted
 | Dependency/config/evidence/result changed
 | Consumers notified; objective resolution recalculated
 | 
Published/Impacted
 | Superseded
 | New package version published
 | Existing consumers remain pinned until reconcile/adopt
 | 
Superseded
 | Retired
 | Retention/governance permits
 | No new consumers; history retained
 | 

22.3 Assessment objective transitions
From
 | To
 | Required condition
 | Side effect
 | 
Planned
 | Inherited Current
 | Applicable current package/result resolves objective
 | Redundant tasks suppressed; lineage retained
 | 
Planned
 | Awaiting Response
 | Residual/unresolved tasks assigned
 | Work created
 | 
Awaiting Response
 | Ready for Review
 | Required inputs submitted
 | Reviewer queue entry
 | 
Ready for Review
 | Insufficient Information
 | Reviewer cannot determine
 | Clarification/rework tasks generated
 | 
Ready for Review
 | Satisfied / Other Than Satisfied / N/A
 | Authorized determination
 | Result recorded; finding as required
 | 
Satisfied/Inherited Current
 | Impacted/Reassessment Required
 | Material dependency invalidated
 | New review/reassessment work; downstream package impact if published
 | 
Impacted/Reassessment Required
 | Satisfied
 | Reassessment/authority completed
 | Current assurance restored at approved scope
 | 

22.4 Finding transitions
Open -> Triaged -> Remediation Planned -> In Remediation -> Ready for Validation -> Closed
Alternative terminal/disposition states may include Accepted/Deferred according to risk authority. Closed requires validation policy; Accepted does not mean Satisfied.
22.5 Source Conflict transitions
Detected -> Triaged -> Under Review -> Resolved / Accepted Ambiguity -> Superseded
An unresolved conflict blocks automatic inheritance when the disputed fact is material to applicability.
22.6 Promotion transitions
Local -> Submitted -> Duplicate Review -> Scope/Applicability Review -> Approved -> Published or Rejected/Kept Local. Promotion never rewrites historical references.
23. Automation and Explainability Boundary
Automation may:
suggest control/requirement mappings;
suggest likely asset duplicates;
propose task routing;
identify candidate assurance packages;
evaluate deterministic applicability rules;
calculate dependency paths/impact;
recommend promotion candidates;
summarize evidence/responses for reviewer attention.
Automation may not, without explicit configured authority/policy:
create a final assessment determination;
approve tailoring/conflicting requirements;
accept risk;
publish a reusable assurance package;
promote sensitive/local knowledge across scope boundaries;
silently resolve source conflicts.
Every automation-generated proposal is distinguishable from approved truth and exposes the rule/source context used.

Part IV - User Experience and Workflow Contract
The UX specification below defines required workflow behavior and information hierarchy. It is not a substitute for wireframes/Figma. Each journey should later receive a dedicated interaction specification containing screens, empty/error/loading states, permissions, edge cases, and acceptance criteria.
24. Information Architecture and Navigation
24.1 Global navigation
Navigation
 | What lives here
 | 
Home
 | My work, assessment packages, delegated tasks, requested evidence, findings requiring action, reviews, due dates, and alerts.
 | 
Organization
 | Organization hierarchy, organizational-unit details, inherited policies/implementations, owned assets, unit assessments, findings, and rollups.
 | 
Assets
 | Searchable asset catalog and relationship graph: shared services, policies/procedures, products, systems, technical components, owners, consumers, assurance history.
 | 
Programs
 | Program portfolio, setup, systems, effective requirements/profile, delta analysis, linked assessments, findings, POA&M, work, and deadline state.
 | 
Products & Systems
 | Product families, baseline versions, standard systems/architecture, component relationships, reusable implementations/evidence.
 | 
Assessments
 | Assessment campaigns/plans, objective selection, assignment packages, delegated tasks, observations/evidence, reviewer queues, determinations, and results.
 | 
Findings
 | Findings across scopes; source assessments; related objectives/assets/systems; owner; severity/priority; remediation linkage; status.
 | 
Risks & POA&M
 | Risks, risk treatment, remediation initiatives, milestones, POA&M items, deviations/acceptances, and reassessment/closure.
 | 
Library
 | Controls/profiles, requirements, 800-53A objectives, organization assessment templates, implementation patterns, reusable evidence patterns, promotion candidates.
 | 
Admin
 | Roles, org model permissions, routing/delegation rules, source integrations, approval policy, taxonomy, import/export configuration.
 | 

24.2 Organization workspace
Each organizational unit page should answer:
What does this unit own?
What policies/procedures/implementations originate here?
What assurance is inherited from parent units?
Which assets and downstream products/systems consume this unit's work?
What assessments are active/completed?
What tasks are awaiting this unit or its delegates?
What findings/remediation/risk are open?
Which local objects are candidates for promotion to a broader scope?
Suggested tabs: Overview | Assets | Policies & Procedures | Assurance | Assessments | Findings | Risks/Remediation | Inheritance | Activity.
24.3 Assessment workspace
The assessment workspace is the primary workflow surface and must work for both ad hoc organizational assessments and product/program assessments.
Suggested tabs/steps:
Assessment area
 | Purpose
 | 
Scope & Plan
 | Target organization/unit/asset/product/system/program; framework/profile/controls; objectives; dates; assessment authority.
 | 
Inheritance Review
 | Show objectives already covered by applicable inherited implementations/results and local residual responsibilities.
 | 
Assignments
 | Group remaining tasks into assignment packages by org unit/asset owner/team; assign package owners and due dates.
 | 
Tasks
 | Human-friendly questions, evidence requests, interviews, tests, and reviews; package owners can delegate individually.
 | 
Responses & Evidence
 | Contributor submissions, source links, evidence, comments, and requests for clarification.
 | 
Reviewer Queue
 | Objectives ready for assessor/SSE review; evidence sufficiency; conflicts; incomplete responses.
 | 
Determinations
 | Objective-level determinations and rationale, with source observations/evidence and reviewer identity.
 | 
Findings
 | Findings generated from Other Than Satisfied/insufficient conditions or assessor observations.
 | 
Results / Export
 | Assessment result summary, traceability, OSCAL-aligned export where supported.
 | 

24.4 Program information architecture
Program page / tab
 | Primary content
 | 
Overview
 | Target milestone, systems, assessment state, critical path, open findings, POA&M/remediation, top decisions.
 | 
Setup
 | Security context, categorization inputs, source profiles/overlays, customer requirements, effective parameters, roles.
 | 
Systems
 | System instances; source baseline; definition completeness; asset/component graph; delta state; owner.
 | 
Requirements & Controls
 | Effective obligations, provenance, parameter values, allocation, implementation, inherited assessment state.
 | 
Assessments
 | Program/system assessment campaigns, inheritance review, packages/tasks, responses, determinations, results.
 | 
Findings & POA&M
 | Findings, grouped remediation initiatives, risks, milestones, dispositions, closure/reassessment.
 | 
Work
 | Discovery, implementation, evidence, review, decisions, and non-assessment operational work.
 | 
Changes
 | Architecture/config/customer/baseline changes and calculated impact/invalidation/reassessment.
 | 
Export / Workbook
 | Program-specific structured assurance/assessment output, including the SCTM, generated from live graph.
 | 

24.5 Dashboard semantics
Dashboards do not present a maturity model or opaque security score. They show factual operational dimensions such as:
assessment objectives: inherited/current, ready for review, satisfied, other than satisfied, insufficient evidence, not assessed;
system-definition unknowns and undocumented assets/components;
open findings by owner/age/critical path;
remediation initiatives and POA&M milestones at risk;
inherited assurance that has become impacted/expired;
evidence freshness/sufficiency;
tasks awaiting contributor response vs. assessor review;
program deadline risk.
25. Organization-First Workflow
25.1 Entry point
An authorized user can start with a top-level organization and a minimal set of organizational units. The UI emphasizes current work and ownership rather than completeness.
Primary flow:
1. Create/select organizational unit.
2. Assign assurance owner(s).
3. Add/link only known assets, policies, procedures, and shared services.
4. Launch an assessment against the unit or selected assets/controls.
5. Review inherited parent assurance before generating tasks.
6. Package/delegate residual tasks.
7. Review responses/evidence and record determinations.
8. Create findings/remediation.
9. Publish a Reusable Assurance Package for valid provider assurance where appropriate.
10. Promote local assets/templates/policies/procedures to broader scope when validated.
25.2 Unit overview
A unit landing page should answer:
What does this unit own?
What assurance does it provide downstream?
What does it inherit from parent scope?
Which Reusable Assurance Packages are published/impacted?
Which assessments/tasks/findings/remediation are open?
Which products/systems/programs consume this unit's assurance?
What local knowledge is waiting for promotion?
25.3 Shared-service provider experience
A shared-service owner needs a dedicated Provider Assurance view showing package versions, supported objectives, provider/consumer responsibilities, assessment freshness, evidence health, consumers, impact events, and pending reassessment.
26. Product/Program-First Workflow
26.1 Entry point
A Product Security Lead or Program SSE can begin before organization modeling is complete. Known organizational owners/assets are linked where available; missing knowledge becomes local/candidate data and assigned work.
26.2 Program setup
Program setup must establish:
customer/mission/deadline;
security context and applicable selection/tailoring inputs;
effective control/requirements profile;
customer requirements/parameter conflicts;
system instances and product/system baseline sources;
owning organizational units and key roles;
candidate Reusable Assurance Packages;
initial Unknown/conflict/unassigned work.
Launch produces a populated program assurance workspace rather than an empty container.
26.3 System selection
For each system:
Use existing baseline | Create variant | Create new/incomplete system | Import legacy system data
The system page distinguishes definition completeness from assurance state. A poorly documented system must never look compliant merely because no implementation data exists.
26.4 Inheritance review
Before generating tasks, the SSE sees a review explaining:
which organizational assurance packages apply and why;
which product/system baseline assurance applies;
residual consumer responsibilities;
attestations required;
impacted/expired inherited results;
conflicts preventing inheritance;
unresolved obligations.
The SSE can inspect “Why is this here?” for every effective inherited item.
27. Assessment Workspace and Delegation
27.1 Assessment creation
Assessment setup selects scope/subjects, profile/controls/objectives, assessment period/milestone, lead/reviewer authority, inheritance policy, and routing template.
27.2 Inheritance review is a mandatory stage
The platform resolves reusable assurance before assignment. The user should never have to manually discover after task creation that thirty questions were redundant.
27.3 Assignment packages
Tasks are grouped by likely owner/unit/asset/system. Package owners remain accountable while delegating individual tasks to SMEs.
The package screen shows:
package purpose and assessed scope;
number/type of tasks;
objectives represented;
due date/reviewer;
accepted/delegated/submitted counts;
blocked/ownership issues;
ability to bulk delegate/reassign.
27.4 Contributor task
The contributor sees plain language, expected evidence/response, context, due date, why it matters, delegation/reassignment controls, and relevant previous/inherited information. Standards detail is available but secondary.
27.5 Reviewer queue
The reviewer sees objective-level context, snapshot state, inherited provider assurance, responses/observations, evidence, conflicts, assessment methods, prior results, and related findings. Reviewer actions include request clarification, insufficient information, determination, finding, or applicability decision.
28. Program/System Workspace and Discovery
28.1 Program home
The program landing page emphasizes:
target milestone/deadline;
system definition completeness;
unresolved/impacted assessment objectives;
tasks awaiting contributors vs reviewer;
open findings/remediation/POA&M;
assurance packages consumed/impacted;
critical-path work and decisions;
customer requirement conflicts.
28.2 System architecture/discovery
The system workspace represents known architecture plus explicit Unknown placeholders. Unknowns are assignable discovery objects/tasks. Selecting or creating an asset/component immediately updates the graph and affected obligations/assurance resolution.
28.3 Variant delta experience
A baseline variant review should default to unchanged / changed / added / removed / unknown / not reviewed rather than a blank architecture form. Declaring a delta triggers impact analysis and only reopens affected assurance.
29. Findings, Remediation, and Promotion UX
29.1 Findings
Findings are searchable across organizational, asset, product, system, program, and assessment scopes. The source assessment/objective and current remediation/risk state remain visible.
29.2 Remediation Initiative
Users can select multiple related findings and create a shared remediation initiative with owner, root cause, milestones, external execution links, impacted consumers, and validation plan.
29.3 Promotion queue
The Promotion queue contains local assets, policies/procedures, implementation assertions, assessment templates, evidence patterns, and assurance-package candidates. Review includes duplicate matching, destination scope/owner, applicability, sensitive-data check, and publication/version decision.
30. End-to-End Example
30.1 Two paths converging
Assume the organization begins using the platform before the organizational catalog is complete.
Track A - organization-first
Enterprise Security creates the organization hierarchy and adds Enterprise IAM as an owned shared asset. The IAM team launches an ad hoc assessment using the organization's NIST 800-53 profile. The platform resolves applicable 800-53A objectives, groups remaining tasks into an IAM assessment package, and assigns the package to the IAM assurance owner.
The owner delegates individual tasks to identity engineers. Engineers describe account provisioning, attach procedures/configuration evidence, and perform requested tests. The assessor reviews the responses and records objective determinations. Several objectives are satisfied; one finding is created for insufficient quarterly privileged-access review. The current satisfied results and implementation assertions are published as reusable assurance for Enterprise IAM under stated configuration/version conditions.
Track B - product/program-first
Program Nightwing is then created to deliver a Falcon-based product plus a new Tactical Management Controller to Customer X. The program uses the required CNSSI/organizational control-selection workflow and adds a customer-specific 24-character password requirement.
Nightwing contains:
a Falcon variant based on Falcon v6;
a new Tactical Management Controller with incomplete architecture;
Enterprise IAM as an organization-owned shared asset.
The platform performs inheritance review before generating assessment work:
applicable Enterprise IAM implementation assertions and current objective results are inherited;
local responsibilities not covered by Enterprise IAM generate Nightwing tasks;
the customer password parameter creates/changes only affected tasks/objectives;
Falcon baseline results remain inherited except where the customer FPGA and bootloader delta impact them;
the new Tactical Controller generates discovery and assessment tasks because its architecture is incomplete.
30.2 Delegation and discovery
The Program SSE receives an assessment plan containing grouped packages rather than hundreds of raw controls. Firmware Engineering receives a firmware package; System Engineering receives architecture questions; Enterprise IAM receives only the residual/changed IAM tasks not already satisfied through inheritance.
While answering a Tactical Controller task, a hardware engineer identifies a previously uncataloged SoC. The asset is created locally, linked to the system, and routed to the owning engineering unit. It can immediately participate in the program assessment without waiting for enterprise catalog governance.
30.3 Findings -> remediation -> POA&M
The assessment produces three related findings involving access governance across different Nightwing systems. Rather than creating three disconnected projects, the SSE groups them into one Access Governance Remediation Initiative owned by Identity Engineering. Nightwing-specific authorization obligations create linked POA&M items with system-specific milestones.
Reassessment later closes the findings. If the improved access-review procedure is applicable across the Enterprise IAM service, the IAM owner promotes the procedure and updated assessment template/result at the organization level. Future programs inherit it by default.
30.4 What the user sees after convergence
View
 | Example state
 | 
Organization / Enterprise IAM
 | Current reusable implementation + assessment results; one remediation initiative; consumers: Falcon, Raven, Nightwing
 | 
Asset Catalog
 | Enterprise IAM, Falcon assets, Tactical Controller local SoC candidate, policies/procedures with owners
 | 
Nightwing assessment
 | 1,182 objectives considered; many resolved by valid inheritance; remaining tasks grouped/delegated; reviewer queue active
 | 
Nightwing findings
 | System-specific and inherited/shared-service findings separated; root-cause grouping visible
 | 
Nightwing POA&M
 | Formal items only where system/program workflow requires them; linked to source findings/remediation
 | 
Promotion queue
 | New SoC candidate, improved assessment template, and access-review procedure proposed for broader reuse
 | 

The end state is not that the organization built a perfect catalog first. The catalog became more complete because assessments and programs generated validated knowledge that could move to the scope where it truly belongs.
Part V - Delivery and Engineering Contract
31. Functional Requirements
Priority labels indicate semantic criticality, not delivery order: the Section 33 release sequence governs when capability ships (for example, assessment-engine requirements labeled MVP ship with R3). MVP-labeled semantics must be preserved in the domain schema from R0 even where the workflow activates later.
31.1 Organization Model and Ownership
ID
 | Priority
 | Requirement
 | 
FR-001
 | MVP
 | The system shall represent an organization with configurable nested organizational units.
 | 
FR-002
 | MVP
 | Organizational units shall support owners, assurance owners, parent/child relationships, and scoped permissions.
 | 
FR-003
 | MVP
 | Objects shall be scopeable to organization, organizational unit, product, system, program, asset, or assessment as applicable.
 | 
FR-004
 | MVP
 | Organizational inheritance rules shall support parent-only, descendants, selected descendants/assets, attestation-required, and shared-responsibility semantics.
 | 
FR-005
 | P1
 | The system shall provide organizational rollups of assessments, findings, remediation, risks, inherited dependencies, and owned assets without calculating a mandatory maturity score.
 | 

31.2 Asset Catalog
ID
 | Priority
 | Requirement
 | 
FR-006
 | MVP
 | The system shall maintain stable asset identities with type, owner organizational unit, responsible parties, lifecycle/version, source-system reference, and relationships.
 | 
FR-007
 | MVP
 | Assets shall support organization-created, product-created, program-local, and assessment-local lifecycle states.
 | 
FR-008
 | MVP
 | Users shall be able to create a missing local asset during assessment/program work without blocking that work.
 | 
FR-009
 | MVP
 | Local assets shall be eligible for deduplication and governed promotion to canonical Asset Catalog scope.
 | 
FR-010
 | P1
 | The system shall show asset consumers/dependencies and blast radius across products, systems, programs, and assessments.
 | 
FR-011
 | P2
 | The system shall synchronize selected metadata with authoritative CMDB/PLM/SCM/document/test systems while preserving source provenance.
 | 

31.3 Standards, Profiles, Requirements, and Tailoring
ID
 | Priority
 | Requirement
 | 
FR-012
 | MVP
 | The system shall import/version authoritative NIST SP 800-53 control content and preserve stable source identifiers.
 | 
FR-013
 | MVP
 | The system shall import/version NIST SP 800-53A assessment objectives/procedures from authoritative machine-readable sources where available.
 | 
FR-014
 | MVP
 | The system shall support organization profiles/baselines with control selection, tailoring, parameters, and provenance.
 | 
FR-015
 | MVP
 | Customer/internal requirements shall be first-class objects and may map to controls/objectives without rewriting source standards.
 | 
FR-016
 | MVP
 | Program-specific parameter overrides shall preserve organization default, effective value, source, scope, approval, and rationale.
 | 
FR-017
 | P1
 | The system shall support the organization's authoritative CNSSI 1253 selection/categorization workflow and preserve its inputs/resulting profile.
 | 

31.4 Organization Assessment Templates
ID
 | Priority
 | Requirement
 | 
FR-018
 | MVP
 | The system shall support reusable assessment templates mapped to one or more assessment objectives.
 | 
FR-019
 | MVP
 | Template steps shall support question/interview, evidence request, examine/review, test, attestation, applicability decision, and discovery task types.
 | 
FR-020
 | MVP
 | Templates shall support default routing by organizational unit, asset owner, product/system owner, or configured role.
 | 
FR-021
 | MVP
 | Templates shall support dependency/inheritance rules that can suppress, replace, or reopen tasks based on applicability, inherited results, answers, or changed assets/configuration.
 | 
FR-022
 | P1
 | Users shall be able to submit locally improved assessment tasks/templates for higher-scope promotion.
 | 

31.5 Assessment Planning and Campaigns
ID
 | Priority
 | Requirement
 | 
FR-023
 | MVP
 | Authorized users shall be able to launch an assessment against an organization unit, asset, product, system, program, or selected controls/requirements.
 | 
FR-024
 | MVP
 | Assessment setup shall capture scope, target subjects, control/profile/objective selection, assessment lead/reviewer, dates/milestones, and inheritance policy.
 | 
FR-025
 | MVP
 | Before task generation, the system shall resolve current applicable inherited implementations and assessment results.
 | 
FR-026
 | MVP
 | The system shall distinguish objectives resolved by inheritance, requiring local residual work, requiring attestation, impacted/reassessment required, or unresolved.
 | 
FR-027
 | P1
 | The system shall support recurring/continuous assessment schedules and targeted reassessment of impacted objectives.
 | 

31.6 Assignment Packages and Delegation
ID
 | Priority
 | Requirement
 | 
FR-028
 | MVP
 | Unresolved assessment tasks shall be groupable into assignment packages by owner/unit/asset/system/task type.
 | 
FR-029
 | MVP
 | Each package shall have an owner, due date, reviewer, scope, and objective/task count.
 | 
FR-030
 | MVP
 | Package owners shall be able to delegate individual or bulk-selected tasks to SMEs while retaining package accountability.
 | 
FR-031
 | MVP
 | Delegated contributors shall receive a simplified task experience showing the request, context, due date, expected evidence/response, and why it matters.
 | 
FR-032
 | MVP
 | Contributors shall be able to answer, attach/link evidence, comment, delegate if permitted, or flag incorrect ownership/applicability.
 | 
FR-033
 | MVP
 | All assignment/delegation/reassignment/due-date changes shall be auditable.
 | 

31.7 Responses, Evidence, Review, and Determination
ID
 | Priority
 | Requirement
 | 
FR-034
 | MVP
 | Contributor responses shall be stored separately from assessor determinations.
 | 
FR-035
 | MVP
 | Evidence shall retain provenance, scope, asset/system/objective relationships, owner, creation/validation date, applicability conditions, and lifecycle state.
 | 
FR-036
 | MVP
 | Reviewers shall be able to accept observations/evidence, request clarification, mark information insufficient, or record an authorized determination.
 | 
FR-037
 | MVP
 | Objective determinations shall include reviewer, date, rationale, supporting observations/evidence, scope, and source assessment.
 | 
FR-038
 | MVP
 | Internal workflow shall support at least Planned, Inherited Current, Attestation Required, Awaiting Response, Ready for Review, Insufficient Information, Satisfied, Other Than Satisfied, Not Applicable, and Impacted/Reassessment Required states.
 | 
FR-039
 | P1
 | Changes to relevant asset/config/version/evidence conditions shall invalidate or flag impacted inherited results and create reassessment work.
 | 

31.8 Findings
ID
 | Priority
 | Requirement
 | 
FR-040
 | MVP
 | Assessors/reviewers shall be able to create findings from assessment objectives, observations, or cross-object analysis.
 | 
FR-041
 | MVP
 | Findings shall link to source assessment, affected scope/assets/systems, controls/objectives/requirements, evidence/observations, owner, status, and due date.
 | 
FR-042
 | MVP
 | A finding may relate to multiple objectives/controls/assets; multiple findings may share remediation/risk relationships.
 | 
FR-043
 | MVP
 | Finding dashboards shall support filtering by organizational unit, asset/product/system/program, owner, age, status, and source assessment.
 | 

31.9 Remediation, Risk, and POA&M
ID
 | Priority
 | Requirement
 | 
FR-044
 | P1
 | Users shall be able to group multiple findings into a remediation initiative with owner, milestones, dependencies, and target dates.
 | 
FR-045
 | P1
 | Remediation initiatives shall support organization/product/program scope while preserving links to individual affected findings/systems.
 | 
FR-046
 | P1
 | Findings may create or link to risk objects; risk acceptance/treatment decisions shall require configured authority and rationale.
 | 
FR-047
 | P1
 | System/program findings or risks shall be promotable into POA&M items with source, weakness/risk, owner, remediation plan, milestones, target dates, status, and closure evidence.
 | 
FR-048
 | P1
 | Closing findings/POA&M items shall support targeted reassessment before assurance is restored.
 | 
FR-049
 | P2
 | The system shall support OSCAL-aligned POA&M import/export for supported workflows.
 | 

31.10 Product/System Baselines and Program Creation
ID
 | Priority
 | Requirement
 | 
FR-050
 | MVP
 | Users shall be able to publish immutable versioned product/system baselines referencing canonical assets/components, implementations, evidence, and assessment results.
 | 
FR-051
 | MVP
 | New program systems shall support use-existing-baseline, variant-from-baseline, or new/incomplete-system creation.
 | 
FR-052
 | MVP
 | Program setup shall retain both the effective control/requirements profile and one or more system/product baseline sources.
 | 
FR-053
 | MVP
 | Programs shall inherit applicable organization/unit/shared-asset assurance independently of product/system baseline inheritance.
 | 
FR-054
 | MVP
 | Unknown architecture/assets/components shall be represented explicitly and create discovery/assessment work rather than defaulting to N/A or satisfied.
 | 
FR-055
 | MVP
 | Program customer requirements and parameter modifications shall be program-scoped with full provenance and approval.
 | 

31.11 Delta, Impact, and Inheritance
ID
 | Priority
 | Requirement
 | 
FR-056
 | MVP
 | Program variants shall record changed, added, removed, and unknown assets/components/configuration relative to a pinned baseline.
 | 
FR-057
 | MVP
 | The system shall calculate which inherited implementations/evidence/assessment objectives are unaffected, require attestation, impacted, or require reassessment.
 | 
FR-058
 | P1
 | The system shall traverse organization/shared-asset and product/system dependency relationships for change blast-radius analysis.
 | 
FR-059
 | P1
 | Inherited results shall preserve source scope, owner, version, assessment date, applicability conditions, and residual local responsibilities.
 | 

31.12 General Work and Deadline Management
ID
 | Priority
 | Requirement
 | 
FR-060
 | MVP
 | The system shall support non-assessment work items for discovery, implementation, evidence refresh, review, decision, baseline publication, promotion, remediation, and risk actions.
 | 
FR-061
 | MVP
 | Work shall include context, owner, due date, status, dependencies/blockers, reviewer when applicable, and downstream impact.
 | 
FR-062
 | P1
 | Program SSEs and assurance owners shall be able to prioritize/sequence work against program or assessment milestones.
 | 
FR-063
 | P1
 | The system shall derive critical-path assurance work from blockers, due dates, reassessment needs, remediation milestones, and program deadlines.
 | 

31.13 Promotion and Organizational Learning
ID
 | Priority
 | Requirement
 | 
FR-064
 | MVP
 | Users shall be able to submit local assets, policies/procedures, requirements, implementations, evidence, and assessment templates for promotion to a higher scope.
 | 
FR-065
 | MVP
 | Promotion shall support duplicate matching, destination scope/owner, applicability review, approval, version publication, and origin lineage.
 | 
FR-066
 | P1
 | Approved promoted objects shall be available to future eligible consumers without rewriting historical assessment/program facts.
 | 
FR-067
 | P1
 | The system shall surface repeated local questions, evidence, findings, implementation patterns, and program deltas as candidate organizational improvements.
 | 

31.14 Reporting, Search, and Interoperability
ID
 | Priority
 | Requirement
 | 
FR-068
 | MVP
 | Dashboards shall report factual assessment/work/finding/remediation states and shall not require a proprietary maturity model or opaque “security score.”
 | 
FR-069
 | MVP
 | Users shall be able to search/navigate across organization units, assets, controls, objectives, requirements, products/systems, programs, assessments, evidence, findings, risks, POA&M, and work.
 | 
FR-070
 | MVP
 | Every inherited/effective assertion or result shall provide a “Why is this here?” provenance view.
 | 
FR-071
 | MVP
 | The system shall generate program/assessment workbook or report views - including the Security Controls Traceability Matrix (SCTM) - from the live assurance graph.
 | 
FR-072
 | P1
 | The system shall support OSCAL Profile and Component Definition aligned import/export where supported.
 | 
FR-073
 | P1
 | The system shall support OSCAL Assessment Plan and Assessment Results aligned import/export for system-centric assessment workflows.
 | 
FR-074
 | P2
 | The system shall support OSCAL SSP and POA&M aligned artifacts where they match organizational authorization workflows.
 | 

31.15 Audit, Permissions, and Sensitive Data
ID
 | Priority
 | Requirement
 | 
FR-075
 | MVP
 | Every material object/state/assignment/determination/promotion change shall record actor, timestamp, old/new value, source, and rationale when required.
 | 
FR-076
 | MVP
 | The system shall support role/object/scope permissions and approval gates across organizational and program boundaries.
 | 
FR-077
 | MVP
 | Assessment contributors shall see only the context necessary to answer assigned tasks subject to data-access rules.
 | 
FR-078
 | P1
 | The system shall support markings/access restrictions for sensitive program/assessment content while preserving reusable non-sensitive metadata where permitted.
 | 

31.16 Reusable Assurance Package, Conflict, Snapshot, and Trust Requirements
ID
 | Priority
 | Requirement
 | 
FR-079
 | MVP
 | The system shall represent Reusable Assurance Packages with provider scope, version, supported objectives/obligations, provider/consumer responsibilities, applicability rules, result/evidence references, validity, and approval.
 | 
FR-080
 | MVP
 | Consumers shall reference a pinned published assurance-package version rather than copying package contents into local scope.
 | 
FR-081
 | MVP
 | Assurance-package consumption shall support applicable, residual-responsibility, attestation, impacted, expired, unknown, and rejected states.
 | 
FR-082
 | MVP
 | The system shall preserve a machine-readable explanation of every inheritance/applicability resolution sufficient to render “Why is this here?”.
 | 
FR-083
 | MVP
 | Material conflicting assertions shall create Source Conflict records and shall not be silently overwritten when the conflict affects assurance semantics.
 | 
FR-084
 | MVP
 | Authority/source rules shall be configurable by data domain/attribute and shall identify the authority required to resolve material conflicts.
 | 
FR-085
 | MVP
 | Every final assessment determination shall reference an immutable Assessment Snapshot or equivalent immutable version set describing what was assessed.
 | 
FR-086
 | MVP
 | Assessment snapshots shall pin effective profile/parameters, system/baseline state, consumed assurance-package versions, relevant evidence/results, objective/template versions, and assessment authority.
 | 
FR-087
 | MVP
 | Evidence visibility shall be separable from result/inheritance visibility so a consumer may rely on authorized reusable assurance without access to restricted evidence content.
 | 
FR-088
 | P1
 | The system shall classify evidence provenance/source and support integrity metadata, freshness/expiry, revocation, and impact propagation.
 | 
FR-089
 | P1
 | Externally governed attributes shall retain authoritative source mapping and synchronization/conflict state rather than being silently overridden locally.
 | 
FR-090
 | P1
 | Material source changes shall create Change Events that can trigger impact evaluation and targeted reassessment.
 | 
FR-091
 | MVP
 | An unresolved Source Conflict material to applicability shall block automatic inheritance until resolved or explicitly dispositioned by authority.
 | 
FR-092
 | MVP
 | Published Reusable Assurance Package and baseline versions shall be immutable; updates produce new versions and do not rewrite historical assessment/program state.
 | 
FR-093
 | MVP
 | Security/marking policy shall independently control object discovery, metadata, implementation detail, assessment result, and evidence-artifact visibility.
 | 
FR-094
 | P1
 | The system shall support promotion/reuse of permitted non-sensitive assurance metadata without automatically exposing restricted underlying evidence.
 | 

32. Non-Functional Requirements
ID
 | Category
 | Requirement
 | 
NFR-001
 | Auditability
 | All material assurance changes, approvals, imports, promotions, and assessments must be attributable and historically reconstructable.
 | 
NFR-002
 | Data integrity
 | References between profiles, systems, components, assertions, evidence, and assessments must preserve referential integrity across versions.
 | 
NFR-003
 | Security
 | Access control, encryption, secure authentication, authorization, logging, and data-handling controls must match the organization’s internal security policy and information sensitivity.
 | 
NFR-004
 | Performance
 | Program dashboards and primary work queues should load interactively at realistic program sizes; graph impact calculations may be asynchronous only if state and completion are explicit to the user.
 | 
NFR-005
 | Scalability
 | Data model must support hundreds of products/programs, thousands of systems/components, and large control/evidence graphs without requiring per-program copies of reusable objects.
 | 
NFR-006
 | Availability
 | The platform should support routine program execution without creating a single point of failure for source engineering artifacts; external links should degrade gracefully.
 | 
NFR-007
 | Interoperability
 | Stable identifiers and import/export boundaries must support standards-aligned data exchange and future integrations.
 | 
NFR-008
 | Usability
 | Non-GRC contributors must be able to resolve assigned work without understanding control-framework syntax.
 | 
NFR-009
 | Explainability
 | Automation-generated mappings, impact, routing, or suggestions must expose source reasoning/context sufficient for human review; automated proposals are distinguishable from approved truth.
 | 
NFR-010
 | Versioning
 | Published profiles/baselines/reusable objects must be immutable or versioned so historical program decisions remain reproducible.
 | 

32.1 Additional semantic integrity requirements
Determinism: Given the same pinned source versions, scope, and applicability facts, inheritance resolution must produce the same result.
Explainability: Every computed effective obligation/inheritance/impact result must expose the source path/rule that created it.
Historical reconstruction: A formal assessment/program state must remain reconstructable after source systems and canonical library objects evolve.
Least disclosure: Reuse of assurance should disclose no more evidence/content than the consumer is authorized to see.
Idempotent synchronization: Re-importing unchanged authoritative source data must not create duplicate identities or spurious versions.
33. MVP and Delivery Sequence
33.1 MVP hypothesis
MVP hypothesis Stage 1 (R0-R2): if one organization can model the portion of its hierarchy/assets a real program needs, import authoritative 800-53/800-53A content, resolve the program’s effective obligations, and generate its SCTM from the live graph, the platform has replaced the handcrafted workbook. Stage 2 (R3-R4): if an organizational unit can then run a real delegated 800-53A-based assessment, establish reusable organization-level assurance, and a consuming program inherits that work generating only residual local tasks/findings, the platform has proven the compounding architecture.
33.2 Delivery sequence
Release
 | Scope
 | Exit outcome
 | 
R0 - Catalog
 | Organization/unit model; Asset Catalog with stable IDs, typing, relationships, and local-to-canonical lifecycle; version/audit spine; permissions; domain schema for controls, assessment, and assurance-package objects (activated in later releases).
 | Seeded data proves organization and system scopes live in one graph; teams model who owns what and what exists incrementally.
 | 
R1 - Controls (OSCAL)
 | Import/version NIST SP 800-53 controls and SP 800-53A objectives (OSCAL-aligned); organization profiles/baselines, tailoring, parameters; customer/internal requirements as first-class objects; CNSSI 1253 selection workflow inputs; provenance throughout.
 | Effective obligations resolve for any scope with every value traceable to its source stack.
 | 
R2 - SCTM
 | Program creation; system onboarding including new/incomplete systems; product/system baselines; obligation allocation; implementation assertions; explicit Unknowns; customer overrides; SCTM generation/export from the live graph; deadline work queues.
 | A Program SSE builds and maintains the SCTM from structured, provenance-backed data instead of a handcrafted spreadsheet.
 | 
R3 - Assessments
 | Ad hoc and program assessment campaigns; objective resolution; assessment templates; package assignment/delegation; contributor response/evidence; reviewer determinations; findings; assessment snapshots.
 | Delegated assessment work populates the SCTM with defensible, snapshot-bound determinations.
 | 
R4 - Inheritance + remediation
 | Reusable Assurance Packages; applicability rules; inheritance resolution before task generation; residual responsibilities; delta/impact and invalidation; basic promotion; finding rollups; remediation initiatives; risk; POA&M; targeted reassessment/closure.
 | A second program inherits valid work and generates only residual/changed tasks; gaps flow into governed remediation and formal obligations.
 | 
R5 - Learning organization + interoperability
 | Advanced promotion/deduplication; baseline revisions; blast radius; recurring assessment; OSCAL AP/AR/POA&M expansion; high-value source integrations; machine evidence; assisted mapping/routing.
 | Repeated work compounds organizational knowledge and reduces future assessment effort.
 | 

33.3 R0-R2 explicit non-goals
No complete enterprise asset inventory required before first assessment.
No complete product baseline required before assessing a new/incomplete system.
No proprietary capability-maturity model, discipline taxonomy, radar score, or generic “coverage score.”
No automatic control satisfaction based on a contributor answer or evidence attachment.
No general-purpose project-management replacement.
No requirement for full automated customer-requirement parsing.
No requirement to force non-system organizational assessments into a literal OSCAL Assessment Plan when the OSCAL model does not fit the scope.
No requirement to support every OSCAL artifact/export in R1.
33.4 Suggested first pilot
Choose a pilot with both inheritance and discovery:
1. One active product/program with a meaningful deadline: build only the catalog entries it needs, import 800-53/800-53A, resolve its effective profile including customer requirements, and generate its SCTM (R0-R2).
2. One organization unit/shared service the program consumes (for example IAM, PKI, vulnerability management, or firmware signing); when the assessment engine lands (R3), run a targeted NIST-based assessment against it using imported 800-53A objectives and organization-authored tasks.
3. Ensure the program contains at least one product-specific variation or incomplete system so delta and discovery workflows are exercised.
4. With R4, measure how much program assessment work is eliminated by valid organizational inheritance, and how many program discoveries are promoted back upward.
34. Metrics and Instrumentation
The platform should instrument operational outcomes rather than synthesize them into a maturity score.
Metric
 | Definition
 | 
Assessment startup time
 | Time from assessment creation to resolved inheritance + assigned remaining work.
 | 
Program startup time
 | Time from program creation to a credible effective obligation/system/assessment/work plan.
 | 
Inherited objective reuse
 | Count/share of assessment objectives resolved using current applicable higher-scope results rather than redundant local questioning.
 | 
Residual-work ratio
 | Local tasks generated after inheritance vs. tasks that would have been generated from the raw objective set.
 | 
Delegation latency
 | Time from package/task assignment to acceptance/delegation and first response.
 | 
Reviewer latency
 | Time from response ready to assessor determination/clarification request.
 | 
Unknown burn-down
 | Count/age of undocumented assets/components/owners/system-definition unknowns.
 | 
Finding recurrence
 | Same/similar finding repeated across organizational units, products, systems, or programs.
 | 
Remediation consolidation
 | Findings grouped into shared remediation initiatives vs. handled independently.
 | 
POA&M deadline risk
 | Milestones/items due or forecast late relative to authorization/program deadlines.
 | 
Promotion yield
 | Local assets/templates/implementations/evidence/policies promoted and subsequently reused.
 | 
Inheritance invalidation rate
 | Reused results later reopened because version/config/scope/applicability changed; useful for tuning inheritance rules.
 | 
Evidence health
 | Current, expiring, expired, impacted, missing evidence counts by critical scope.
 | 
Manual re-questioning avoided
 | Repeated questions/tasks suppressed because trusted reusable assurance already existed.
 | 

Initial pilots establish baseline values. No metric should be interpreted as a standalone statement that an organization or system is “X% secure.”
35. Migration and Adoption
35.1 Migration strategy
The migration strategy should intentionally use the same two entry paths as the product.
Organization-first migration
1. Import the top-level organization structure only to the depth needed for the pilot.
2. Select one high-reuse shared service or assurance domain (for example IAM, PKI/key management, vulnerability management, firmware signing, or incident response).
3. Create/link only the assets, policies, and procedures necessary for that scope.
4. Import authoritative 800-53/800-53A content and create the first organization assessment template/tasks needed for the pilot.
5. Run a real delegated assessment and publish only validated reusable implementations/evidence/results.
6. Use discovered gaps/assets/policies to grow the Asset Catalog and Assurance Library.
Product/program-first migration
1. Select one active product/program with a meaningful deadline and known reuse opportunity.
2. Create the product/system/program even if the organizational model/catalog is incomplete.
3. Link any already-known organization assets/results from the first path.
4. Import/migrate existing workbook data as program-scoped facts; represent ambiguous blanks/unknowns explicitly.
5. Run the assessment workflow, delegate missing information, and create findings/remediation normally.
6. Promote validated reusable product/program discoveries upward.
The migration does not require a full enterprise asset inventory, complete product portfolio, or exhaustive policy catalog before first value.
35.2 Legacy workbook coexistence
The product should initially coexist with established program workbook/report expectations. The live structured assurance/assessment graph is authoritative inside the platform, while export produces familiar program-specific workbook/report views. Existing assessment questionnaires may also be imported as organization templates when their mapping to canonical objectives can be validated.
35.3 Adoption guardrails
Never require engineers or business contributors to learn control IDs to answer an assigned task.
Never require a complete organization hierarchy, Asset Catalog, or Assurance Library before an assessment/program can begin.
Never import legacy blank cells as Not Applicable or Satisfied.
Never convert a contributor response directly into a final assessment determination without configured reviewer authority.
Never auto-promote local assets, policies, procedures, implementations, evidence, or assessment templates/results without destination ownership and review.
Never silently apply upstream baseline/result changes to active programs or historical assessments.
Never hide source, scope, version, approval, and applicability history for inherited assurance.
Never require a maturity model or security score to communicate assessment state.
36. Risks and Design Decisions
Risk
 | Failure mode
 | Mitigation
 | 
Ontology over-design
 | Too many object types slow MVP and confuse contributors.
 | Keep contributor UI task-centric; preserve distinctions primarily in reviewer/governance views.
 | 
Organization hierarchy misuse
 | Teams try to make the org chart equal the technical architecture.
 | Maintain separate responsibility and asset/system graphs with explicit relationships.
 | 
Asset-catalog paralysis
 | Program waits for complete enterprise inventory before work can start.
 | Local-first asset creation + candidate promotion; seed only what real assessments/programs need.
 | 
False inheritance confidence
 | Parent/shared-service result is inherited even though local responsibilities/config differ.
 | Applicability conditions, residual responsibilities, version pinning, attestation/reassessment states.
 | 
Answer-as-compliance
 | Contributor “yes” answer gets treated as satisfaction.
 | Separate Response/Observation/Determination; only authorized reviewer produces determination.
 | 
Question explosion
 | Raw 800-53A objectives generate overwhelming task volume.
 | Objective inheritance resolution first; reusable organization templates; grouped package assignment; dependency rules.
 | 
Question-template drift
 | Organization-authored questions drift from canonical assessment intent.
 | Keep objective mapping/source/version; review template changes; flag standards updates impacting templates.
 | 
Library garbage growth
 | Bottom-up asset/template creation creates duplicates.
 | Local scope first; candidate matching; steward/owner promotion gates; versioning/retirement.
 | 
Findings become another issue tracker
 | Security findings lose assessment/control traceability.
 | Finding object requires source assessment/affected scope/objective evidence and controlled lifecycle.
 | 
Remediation overreach
 | Platform turns into general project-management software.
 | Remediation Initiatives are narrowly scoped to grouped assurance findings/milestones; integrate external PM tools later.
 | 
Score pressure
 | Stakeholders demand one “security score” that hides uncertainty.
 | Product defaults to factual states/counts and requires transparent definition for any optional derived metric.
 | 
OSCAL dictates bad UX
 | System-centric standards structures constrain organization/ad hoc workflows.
 | Use internal canonical model; map/export OSCAL only where semantic fit exists.
 | 
Source drift
 | Asset/version/config data diverges from engineering systems.
 | Source links/freshness now; targeted integrations later; change detection creates review work.
 | 

36.1 Key decisions locked by this specification
The platform is dual-entry: organization-first and product/program-first workflows are peer workflows on the same graph.
Assessment is designed into the domain spine from R0 and activates as the primary workflow in R3, on the Catalog, Controls, and SCTM foundation.
Organization hierarchy, Asset Catalog, and product/system architecture are separate but connected models.
The Asset Catalog grows incrementally through assessments/programs; completeness is not a launch prerequisite.
NIST SP 800-53A provides the canonical assessment-objective backbone for NIST controls; organization templates provide human-friendly execution steps.
Package assignment + individual delegation is a core assessment UX pattern.
Contributor response is not the final assessment determination.
Valid organization/unit/shared-asset assessment results can be inherited into product/system/program assessments; only residual/changed work is generated.
Program/SSE work can propagate upward through governed promotion of policies, procedures, assets, implementations, evidence, and assessment templates/results.
Findings are first-class; related findings can be grouped into remediation initiatives; risks and POA&M remain linked but distinct.
No proprietary capability-maturity model, discipline model, or opaque coverage/security score is required.
Product/system baselines and effective control/requirements profiles remain distinct inheritance sources inside a program.
OSCAL is a schema/interchange alignment target; it does not dictate the organization/ad hoc assessment UX.
36.2 Additional design decisions introduced by this specification
Reusable Assurance Package is the preferred published provider contract for shared assurance; raw implementation/evidence/result objects remain available underneath it.
Asset is the canonical assurance identity substrate; strongly typed product/system/component/policy/procedure concepts specialize it rather than creating unrelated duplicate identities.
Applicability is structured and multi-state, not a single inherit=true flag.
Source Conflict is a first-class object when material assertions disagree.
Assessment Snapshot is required for final determinations and historical reproducibility.
Evidence-result separation allows result reuse without broad evidence disclosure.
Authority is domain-specific, not one global source precedence ranking.
Change Events connect authoritative-source updates and user-declared deltas to impact/reassessment.
37. Open Questions and Required Decisions
These questions should be resolved through pilot design, security-authority review, and engineering discovery rather than blocking the conceptual architecture.
1. What organizational-unit hierarchy is useful for assurance ownership without attempting to replicate the entire HR org chart?
2. Which asset types must exist in R1, and which should initially remain generic/custom types?
3. What is the authoritative source and ingestion/update mechanism for the organization's NIST SP 800-53 / 800-53A / 800-53B content and CNSSI 1253 artifacts?
4. Which assessment-template authoring privileges and review gates are required to prevent local question drift from canonical 800-53A intent?
5. Which assessment results are legally/policy-wise reusable across programs, and what attestation/expiration rules apply?
6. How should shared responsibility be represented when an organization-level service implements part of a control but local product/system owners retain responsibilities?
7. Which final determination vocabulary is required by the organization's authorization process beyond internal workflow states?
8. Which findings require formal risk objects or POA&M items versus simpler remediation tracking?
9. What data markings/access controls limit upward promotion or cross-program inheritance of evidence while still allowing reusable metadata/implementation statements?
10. What external systems should be integrated first: identity/HR directory for people/org units, CMDB/asset inventory, PLM, Jira, source control, document repository, test/evidence systems?
11. Should assessment package routing initially be manually configured per organization/unit or inferred from asset ownership?
12. What constitutes sufficient closure/reassessment for each finding/POA&M class?
13. Which exact OSCAL artifacts are required as contractual/authorization deliverables versus useful internal interchange only?
37.1 Additional decisions required before semantic-kernel implementation
1. What exact Asset type hierarchy is required for R0/R1, and which specialization fields are mandatory?
2. What bounded applicability predicate types will R1 support?
3. What is the formal provider/consumer responsibility representation for partial control/objective implementation?
4. Which authority domains require source-of-truth configuration on day one?
5. What Snapshot cutover semantics apply to long-running assessments: start snapshot, end snapshot, per-observation time, or configured hybrid?
6. Which evidence markings/access labels must be implemented in the pilot environment?
7. What assurance metadata is permitted to cross program/customer boundaries when evidence is restricted?
8. Which changes automatically mark a RAP Impacted versus simply notify an owner for review?
9. What is the minimum deterministic inheritance-resolution algorithm engineering will expose as a service/API?
10. Which state transitions require dual approval or independent assessor validation?
38. Standards Alignment
This specification separates user-facing workflow from standards representation. The implementation should preserve identifiers/lineage necessary to import/export standards-aligned artifacts without forcing standards-native structures into every UI workflow.
38.1 NIST SP 800-53 / 800-53B
Treat SP 800-53 as the control catalog/source. Treat applicable 800-53B or organization/CNSSI-derived baselines as selection/tailoring inputs. Organization-defined parameters and customer modifications are scoped/versioned values with provenance rather than edits to source control text.
38.2 NIST SP 800-53A
SP 800-53A provides the methodology and procedures/objectives for assessing controls. NIST's current supplemental material is published as SP 800-53A Release 5.2.0. The platform should ingest authoritative assessment-objective content and map organization-authored assessment tasks back to those objective identifiers/source versions.
38.3 OSCAL Catalog / Profile
OSCAL Catalog/Profile semantics align with imported control content and selected/tailored control baselines. The UI presents resolved effective obligations while retaining source and modification lineage.
38.4 OSCAL Component Definition / SSP
OSCAL Component Definition aligns with reusable hardware/software/service/policy/process/procedure implementation knowledge. OSCAL SSP aligns with system-specific characteristics, inventory, roles, and control implementation statements. The internal Asset Catalog may be broader than either model and should generate mappings where appropriate.
38.5 OSCAL Assessment Plan
The OSCAL Assessment Plan model represents system-assessment scope, reviewed controls/objectives, assessment subjects/assets, activities/tasks, and related planning information. It is a strong export/import target for system/program assessment campaigns. Organization-unit ad hoc assessments can use the same internal assessment engine even when a literal OSCAL AP is not the correct external artifact.
38.6 OSCAL Assessment Results
The OSCAL Assessment Results model represents what was assessed/performed and supports observations, evidence, findings, objective status, identified risks, and recommended remediation. This aligns closely with the platform's assessor/reviewer result model.
38.7 OSCAL POA&M
The OSCAL POA&M model supports system-scoped risk/remediation tracking, milestones, source of discovery, and dispositions/deviations. The platform should preserve enough structure for aligned export where required while supporting organization-specific internal workflow.
38.8 CNSSI 1253
For National Security System workflows, program setup must support the organization's authoritative CNSSI 1253 categorization/control-selection process and preserve its inputs, selection basis, tailoring decisions, and resulting profile. Exact rules/artifacts should be validated with organizational security authorities before engineering encodes them.
38.9 Reference sources consulted for this revision
NIST SP 800-53 Rev. 5 / Release 5.2.0 control content and NIST Risk Management Framework resources.
NIST SP 800-53A Rev. 5 and supplemental Release 5.2.0 assessment procedures.
NIST OSCAL content repository for NIST SP 800-53 assessment-objective linkage.
NIST OSCAL Assessment Plan model documentation.
NIST OSCAL Assessment Results model documentation.
NIST OSCAL Plan of Action and Milestones model documentation.
NIST OSCAL Profile, Component Definition, and System Security Plan model documentation.
Authoritative CNSS/CNSSI 1253 material to be incorporated according to organizational policy/current controlled references.
Appendix A. Object Ownership / RACI
Activity
 | Governance
 | Org Unit Owner
 | Asset Owner
 | Program SSE
 | Assessor
 | Contributor
 | Risk/Remediation Owner
 | 
Maintain org hierarchy
 | A/C
 | C
 | I
 | I
 | I
 | I
 | I
 | 
Publish unit policy/procedure
 | C/A
 | R/A
 | C
 | I
 | C
 | C
 | I
 | 
Maintain canonical asset
 | C
 | C
 | R/A
 | C
 | C
 | C
 | I
 | 
Author assessment template
 | A
 | C
 | C
 | C
 | R
 | C
 | I
 | 
Create ad hoc org assessment
 | C
 | R/A
 | C
 | C
 | R
 | I
 | I
 | 
Create program/system assessment
 | C
 | I
 | C
 | R/A
 | R
 | I
 | I
 | 
Assign assessment package
 | I
 | R
 | C
 | R
 | R/A
 | I
 | I
 | 
Delegate/answer task
 | I
 | R
 | R
 | C
 | C
 | R
 | I
 | 
Make objective determination
 | I
 | I
 | C
 | C/R by authority
 | R/A
 | I
 | I
 | 
Create finding
 | I
 | I
 | C
 | C
 | R/A
 | I
 | I
 | 
Own remediation initiative
 | C
 | R where org-scoped
 | R where asset-scoped
 | R where program-scoped
 | C
 | C
 | R/A
 | 
Accept risk / approve deviation
 | A per policy
 | C
 | C
 | R/C
 | C
 | I
 | R
 | 
Promote local object upward
 | A/C
 | R/A for destination
 | R/A for asset
 | R submitter
 | C
 | C
 | I
 | 

R = Responsible, A = Accountable/approver, C = Consulted, I = Informed. Actual assignments are policy-configurable.
Appendix B. Acceptance Scenarios
Before committing the domain model and first release to engineering, the team should be able to walk through these scenarios without inventing a side database or bypassing scope, ownership, assessment authority, or versioning rules:
Create a top-level organization and only two organizational units; start useful work without modeling the whole company.
Launch an ad hoc NIST-based assessment against Enterprise IAM using imported 800-53A objectives.
Group the assessment work into a package, assign it to the IAM team, and delegate individual questions/evidence requests/tests to different SMEs.
Accept contributor answers/evidence as inputs while requiring an authorized reviewer to make the objective determination.
Publish valid organization-level IAM implementation/assertion/result data so downstream products can inherit it.
Create a product/system assessment that consumes Enterprise IAM and suppress redundant IAM tasks while retaining local residual responsibilities.
Change the shared IAM configuration/version and identify which inherited product/program objectives must be reassessed.
Create a policy/procedure during a product assessment, keep it local initially, then promote it to the organizational unit when broader applicability is validated.
Discover a new technical asset/component during a program assessment, use it immediately, then deduplicate/promote it into the canonical Asset Catalog later.
Create a program with a known product baseline and no customer changes.
Create a variant where one firmware component changes and only impacted implementation/evidence/assessment objectives reopen.
Create a program with a 24-character customer password requirement overriding a 15-character organizational default while preserving both values and source provenance.
Create a new system that does not exist yet, assign discovery of its HW/FW/SW architecture, and progress without false compliance states.
Produce an assessment finding from an Other Than Satisfied determination, relate it to multiple objectives/assets if needed, and assign an owner.
Group multiple related findings into one remediation initiative without losing system-specific traceability.
Create a system/program POA&M item from a relevant finding/risk, track milestones, and require targeted reassessment before closure.
Show why a specific assessment task exists, which objective/control it supports, who answered it, what evidence was used, who made the determination, and what inherited result it replaced or reused.
Generate the program-specific workbook/report from structured data and reconcile it with the live assessment/work queues.
Close an assessment/program and promote validated learning so the next organizational unit/product/program starts with more reusable assurance knowledge than the previous one.
Definition of a successful foundation The platform succeeds when teams can begin from either an organizational assessment or a product/program, safely reuse what is already known, delegate only the information that still needs to be gathered, preserve assessor authority, turn gaps into actionable findings/remediation, and leave the organization with more reusable assurance knowledge after every cycle.

=====================
### Program_Assurance_Platform_UX_Workflow_Interaction_Spec_v1.1.docx  (70319 chars)
=====================
Program Assurance Platform
UX & Workflow Interaction Specification
Experience thesis The platform should make assurance work feel like resolving a finite set of well-explained decisions, questions, evidence requests, and reviews - not navigating a control framework. Users enter from either the organization or a product/program, inherit trusted work before new work is generated, expose unknowns and conflicts instead of hiding them, and always retain a visible path back to why an item exists and who has authority to resolve it.
Field
 | Value
 | 
Status
 | Draft for product, design, SSE, assessor, and engineering review
 | 
Version
 | 1.1
 | 
Date
 | August 12, 2026
 | 
Audience
 | Product Design, Product Management, Systems Security Engineering, Security/GRC, Assessment, System Engineering, HW/FW/SW Engineering, Program Leadership, Frontend Engineering
 | 
Companion documents
 | Vision One-Pager v1.0; Product Requirements Document v1.1; Product & System Specification v1.1; Domain & Rules Specification v1.1
 | 
Purpose
 | Define user-facing information architecture, workflows, interaction contracts, screen behavior, role experiences, states, and acceptance journeys suitable for wireframing and implementation
 | 

This specification does not redefine the platform ontology or domain rules. It translates the canonical product and domain contracts into a coherent user experience. If an interaction described here conflicts with the Domain & Rules Specification, the domain rule wins and the UX must be redesigned rather than silently weakening the rule.
Contents
1. Purpose, UX Contract, and Document Boundaries
2. Experience Principles
3. User Modes and Jobs
4. Global Information Architecture
5. Cross-Cutting Interaction Language
6. Home and Work Queue
7. Organization Setup and Organizational Units
8. Asset Catalog and Asset Detail
9. Assurance Library and Reusable Assurance Packages
10. Organization-First Assessment Entry
11. Product and System Baseline Management
12. Program Creation Wizard
13. System Onboarding Modes
14. New and Incomplete System Discovery
15. Effective Obligations, Tailoring, and Customer Requirements
16. Inheritance Review and Reusable Assurance Consumption
17. Variant Delta and Impact Review
18. Assessment Planning and Objective Resolution
19. Assignment Packages, Routing, and Delegation
20. Contributor Task Experience
21. Reviewer / SSE Assessment Experience
22. Findings, Remediation, Risk, and POA&M Workflow
23. Reassessment and Closure
24. Promotion, Deduplication, and Upward Propagation
25. Conflict, Source Reconciliation, and Authority Decisions
26. Evidence Experience and Restricted Visibility
27. Notifications, Deadlines, and Escalation
28. Dashboards, Rollups, and Readiness
29. Search, Graph Navigation, and Explainability
30. Import, Export, Workbook, and OSCAL-Aligned Interactions
31. Screen and Page Anatomy Catalog
32. Empty, Loading, Error, and Partial-Truth States
33. Permissions, Markings, and Sensitive-Data UX
34. Accessibility and Interaction Quality
35. MVP Interaction Scope and Delivery Sequence
36. End-to-End Acceptance Walkthroughs
Appendix A. Route and Screen Inventory
Appendix B. Standard Action Vocabulary
Appendix C. Status and Badge Vocabulary
Appendix D. OSCAL Interaction Alignment
Appendix E. Figma Frame Inventory

Part I - Experience Foundation
1. Purpose, UX Contract, and Document Boundaries
1.1 What this document specifies
This document specifies the user experience contract for the Program Assurance Platform. It answers questions such as:
Where does a user start?
What does the application ask them to do first?
How does an organizational unit run an assessment without first creating a program?
How does a Program SSE create a program, select systems, and inherit existing organizational work?
How are unknown systems represented before architecture exists?
How are assignment packages created and delegated to individual engineers?
What does a contributor see compared with an assessor?
How does an inherited result explain where it came from and what remains local?
How are conflicts, stale evidence, sensitive evidence, and invalidated inheritance shown?
How do findings become remediation, risk, or POA&M work without turning the product into a generic project manager?
How does local work move upward into reusable organization knowledge?
The document is intended to be directly convertible into user flows, low-fidelity wireframes, Figma frames, frontend route definitions, and interaction acceptance criteria.
1.2 What this document does not specify
This document does not define:
physical database schemas;
API transport formats;
event-bus technology;
OSCAL serialization details;
authorization-policy implementation;
exact visual brand, color system, typography, or component library;
final information-security policy or authority delegation;
a replacement for engineering source systems such as PLM, CMDB, source control, ALM, or document repositories.
Those concerns belong in technical architecture, design-system, or organization-policy artifacts.
1.3 Normative relationship to companion documents
Question
 | Canonical artifact
 | 
Why does the product exist and what is in scope?
 | PRD
 | 
What is the entire vision in one page?
 | Vision One-Pager
 | 
How does the operating model work across organization, product, system, and program?
 | Product & System Specification
 | 
What is a valid entity, state, transition, inheritance result, evidence state, or conflict?
 | Domain & Rules Specification
 | 
What does the user see and do?
 | This UX & Workflow Interaction Specification
 | 
How is the platform physically implemented?
 | Technical Architecture / ADRs
 | 

UX constraint The interface may simplify domain language, but it may not collapse distinctions that are necessary for assurance integrity. In particular: Response is not Determination; Unknown is not Not Applicable; Inherited is not locally implemented; Evidence access is not assurance-result access; and a contributor cannot make an assessor-authority decision through a convenient button.
2. Experience Principles
2.1 Primary principles
Principle
 | UX implication
 | 
Work before framework
 | Default views show what needs action, not a wall of control IDs. Framework traceability remains one click away.
 | 
Inheritance before questioning
 | The system resolves reusable assurance before generating contributor tasks. Users see why work disappeared or what residual work remains.
 | 
Unknown is visible
 | Missing architecture, ownership, evidence, source authority, applicability, and configuration are explicit cards/items with owners and next actions.
 | 
Progressive disclosure
 | Contributors see plain-language tasks. SSEs and assessors can expand objective/control/provenance detail. Governance users can inspect source versions and rule logic.
 | 
Authority is visible
 | Actions that create authoritative determinations, tailoring decisions, risk acceptance, publication, or promotion identify the authority and approval consequence.
 | 
Local work is never trapped
 | Every reusable local object has a clear path to submit for higher-scope promotion without blocking current work.
 | 
No false green
 | Incomplete, stale, conflicted, unreviewed, or inherited-with-residual-responsibility states are visually distinct from Satisfied.
 | 
Explain every derived state
 | Every inherited, impacted, effective, suppressed, or reassessment-required state offers a “Why?” explanation with source and rule lineage.
 | 
Deadline context matters
 | Program work surfaces due dates, blockers, dependencies, and delivery impact without turning assurance into generic project management.
 | 
Bulk where safe, deliberate where authoritative
 | Users can bulk route, delegate, acknowledge, or tag work. High-authority decisions remain intentionally explicit.
 | 

2.2 Design anti-patterns
The design must avoid:
a default home screen containing hundreds of control rows;
a single percentage that implies an organization or system is “X% secure”;
automatically marking unanswered items Not Applicable;
an inherited badge with no source, version, or applicability explanation;
allowing a contributor answer of “Yes” to directly produce Satisfied;
forcing organization users to understand product/system architecture to run an organizational assessment;
forcing a Program SSE to finish the enterprise Asset Catalog before creating a new system;
hiding changed source-system data until the next formal assessment;
duplicating inherited evidence into every consuming program;
requiring users to know OSCAL model names for routine workflow.
3. User Modes and Jobs
3.1 User modes
A person may operate in multiple modes. The product should adapt surfaces by current context rather than permanently typecasting the person into one persona.
Mode
 | Primary concern
 | Typical starting surface
 | 
Contributor
 | “What do you need from me?”
 | Home / My Work
 | 
Package Owner
 | “What does my team need to answer and who knows each answer?”
 | Assessment package
 | 
Assessor / Reviewer
 | “Do I have enough information to make a determination?”
 | Reviewer Queue
 | 
Program SSE
 | “What remains unresolved before the program milestone?”
 | Program Overview / Work / Assessments
 | 
System / Product Security
 | “What is reusable about this baseline and what changed?”
 | Products & Systems
 | 
Organizational Assurance Owner
 | “What does this unit own, what has been assessed, and what can downstream consumers inherit?”
 | Organization unit
 | 
Asset / Shared-Service Owner
 | “What assurance do I provide and who consumes it?”
 | Asset / Assurance Package
 | 
Governance / Library Steward
 | “What is authoritative, reusable, current, and properly scoped?”
 | Library / Promotion Queue
 | 
Leadership
 | “Where are the unresolved facts, findings, remediation, and deadline risks?”
 | Organization / Program Overview
 | 

3.2 Default role switching
Users with multiple responsibilities should be able to switch context using scope and work views rather than separate applications. Example: an engineer who owns the Enterprise Signing Service can answer a delegated task from Home, then open the asset page to maintain reusable evidence, without switching to an “admin mode.”
4. Global Information Architecture
4.1 Primary navigation
The recommended desktop navigation is:
Home | Organization | Assets | Products & Systems | Programs | Assessments | Findings | Risks & POA&M | Library
Administrative configuration is exposed through a secondary Admin area for authorized users.
Area
 | Primary question answered
 | 
Home
 | What needs my attention?
 | 
Organization
 | Who owns what and what assurance exists at each organizational scope?
 | 
Assets
 | What assessable/reusable subjects exist and where are they used?
 | 
Products & Systems
 | What do our standard products/systems contain and how are they normally assured?
 | 
Programs
 | What are we delivering, what applies, what remains, and what threatens the milestone?
 | 
Assessments
 | What is being assessed, who owes input, and what determinations remain?
 | 
Findings
 | What gaps have been identified and where do they apply?
 | 
Risks & POA&M
 | What formal risk/remediation work is active?
 | 
Library
 | What authoritative controls, profiles, assessment content, reusable assurance, and governed knowledge can be reused?
 | 

4.2 Global scope selector
A scope selector should be available where the same view can operate at multiple levels. It must not silently change data meaning.
Example scopes:
ACME Defense
Enterprise Security
Product Division A
Falcon Product Family
Falcon v6 Baseline
Nightwing Program
Tactical Management Controller
The selector shows current scope, parent path, and access level. Switching scope preserves the current conceptual page where meaningful; otherwise it routes to the nearest valid landing page.
4.3 Global command/search entry
A global search/command entry should support:
direct entity navigation;
“go to Program Nightwing”;
“find AC-2”;
“find Enterprise IAM evidence”;
“show work assigned to me”;
“create assessment”;
“create program” for authorized users.
Search results must honor markings and may show metadata-only results where policy permits without revealing restricted content.
5. Cross-Cutting Interaction Language
5.1 Universal object header
Most object detail pages should use a shared header pattern:
Element
 | Behavior
 | 
Breadcrumb
 | Shows scope and containment path without implying organizational ownership when the path is technical.
 | 
Name + type
 | Human-readable name and explicit type.
 | 
State badges
 | Lifecycle, assurance, conflict, or freshness states relevant to the object.
 | 
Owner
 | Organizational owner and responsible person/role where applicable.
 | 
Source
 | Canonical source or locally created origin.
 | 
Version / effective date
 | Shown for versioned objects.
 | 
Primary actions
 | Contextual and authority-aware.
 | 
Why / provenance
 | Opens lineage drawer for derived/inherited/effective states.
 | 
Activity
 | Opens chronological audit/event view.
 | 

5.2 “Why is this here?” drawer
Every derived item must expose an explanation drawer. The drawer should answer:
1. What is the current state?
2. Which source objects produced it?
3. Which scope and versions apply?
4. Which rule, assertion, profile operation, or human decision caused it?
5. What residual responsibilities remain?
6. What would invalidate or change this state?
7. Who has authority to change the underlying decision?
The drawer is especially important for inherited assessment results, effective parameters, suppressed tasks, impacted evidence, and customer overrides.
5.3 Status badges
Status badges should encode state, not judgmental color theater. Labels must remain readable without color.
Recommended cross-cutting badge language:
Current
Inherited
Local
Program-specific
Draft
Published
Unknown
Conflict
Needs review
Reassessment required
Evidence restricted
Evidence stale
Waiting on response
Ready for review
Satisfied
Other Than Satisfied
Not Applicable
5.4 Context drawer
Contributor-facing screens use a compact “Context” drawer rather than dumping full framework content into the task. The drawer may show:
system/program or organization scope;
relevant requirement text;
mapped control/objective;
requester and reviewer;
why the task exists;
related prior response;
downstream milestone.
5.5 Activity and comments
Comments are discussion attached to work. They do not alter assurance truth. Material changes require structured actions.
Example:
A comment saying “This should be N/A” does not change applicability.
The user must choose Request applicability review.
A comment saying “We upgraded the bootloader” does not change the system configuration.
The user must choose Report configuration change or edit the authoritative local configuration if permitted.
This distinction keeps chat from becoming shadow truth.
6. Home and Work Queue
6.1 Home design goal
Home is the universal front door for most users. It should immediately answer: What do I need to do, what is waiting on me, and what is at risk?
6.2 Home layout
Recommended desktop layout:
Region
 | Content
 | 
Top summary
 | My overdue items; due this week; waiting for my review; blocked items; newly assigned.
 | 
My Work
 | Sortable list of assessment tasks, review items, findings, decisions, promotion reviews, and general assurance work.
 | 
Packages
 | Assessment packages I own, with completion and delegation state.
 | 
Watching / Owned
 | Assets, systems, programs, or organizational units where the user is owner or assurance owner.
 | 
Recent changes
 | Upstream changes that impact owned work.
 | 

6.3 Work item row
Each work row should show:
action-oriented title;
work type;
target object/scope;
due date;
current owner;
blocking milestone or downstream consequence when relevant;
state;
one-click open;
quick delegate/reassign where allowed.
Framework IDs are secondary metadata, not the row title.
6.4 Saved work views
Useful presets:
Assigned to me
Awaiting my review
My assessment packages
Overdue
Due in 7 days
Blocking a program milestone
Returned for clarification
Reassessment required
Promotion reviews

Part II - Organization-First Experience
7. Organization Setup and Organizational Units
7.1 Organization setup entry
A new tenant or new business area should not be forced into exhaustive org modeling. Initial setup requires only:
top-level organization name;
first useful organizational units;
assurance owner(s);
optional parent-child relationships;
optional identity/directory links.
The setup wizard explicitly says: “Model only what you need to start. You can add units while assessments uncover ownership.”
7.2 Organization tree interaction
The Organization page uses a collapsible hierarchy with a detail panel. Each unit node shows:
unit name;
assurance owner;
count of owned assets;
active assessments;
open findings;
unresolved inherited issues;
promotion candidates.
The tree is an ownership/responsibility hierarchy, not technical architecture. The UI should state this in onboarding and help content.
7.3 Organizational unit detail page
Suggested tabs:
Overview | Assets | Policies & Procedures | Assurance | Assessments | Findings | Risks & Remediation | Inheritance | Activity
Overview
Shows:
unit mission/description;
parent and children;
unit owners;
inherited parent policies/assurance;
reusable assurance provided by the unit;
active work;
open findings/remediation;
downstream consumers of unit-owned assets.
Inheritance tab
Separates:
inherited from parent;
originated here;
available to descendants;
requires descendant attestation;
shared-responsibility items.
Users can inspect residual responsibilities before using an inherited item.
7.4 Create organizational object during work
If an assessment uncovers a missing policy, procedure, service, or owner, users can create a local/candidate object inline without leaving the assessment. The creation panel asks for minimum viable fields and marks the object Local / Candidate until promoted.
8. Asset Catalog and Asset Detail
8.1 Catalog experience
The Asset Catalog is not presented as a CMDB clone. It is a searchable assurance-oriented inventory with filters for:
asset type;
owning organizational unit;
product/system usage;
lifecycle/version;
assessment state;
assurance package availability;
evidence freshness;
open findings;
canonical vs local candidate state.
8.2 Asset type presentation
The UX may use friendly categories while preserving canonical type metadata:
Policy
Procedure
Shared Service
Security Service
Process
Product
System
Subsystem
Hardware
Firmware / Software
External Service
Evidence Producer
Other Assessable Asset
8.3 Asset detail page
Suggested tabs:
Overview | Relationships | Implementations | Assurance Packages | Evidence | Assessments | Findings | Consumers | Changes | Activity
The Overview prominently shows:
owner and owning unit;
source-of-truth system;
version/configuration;
consumers;
current assessment state;
reusable assurance available;
stale/conflicted source data;
material unknowns.
8.4 Relationship graph
The Relationships tab should allow a focused graph view rather than a global spaghetti graph. Users choose relationship lenses such as:
Contains / part of
Consumes / provides
Owned by
Implements
Evidence supports
Assessed by
Used by products/programs
The graph is secondary to tabular lists for routine work.
9. Assurance Library and Reusable Assurance Packages
9.1 Library structure
The Library should be organized by reusable knowledge type:
Standards | Profiles | Requirements | Assessment Objectives | Assessment Templates | Reusable Assurance | Policies & Procedures | Evidence Patterns | Promotion Queue
9.2 Reusable Assurance Package list
The reusable assurance list shows:
package name;
provider asset;
owning organization unit;
version;
publication status;
supported control/objective count;
consumer responsibility count;
evidence visibility level;
last assessment date;
consumer count;
impacted/stale state.
9.3 Reusable Assurance Package detail
Suggested tabs:
Overview | Provides | Consumer Responsibilities | Applicability | Evidence & Results | Consumers | Versions | Activity
Overview
Must answer:
What assurance does this package provide?
Who owns it?
What asset/service provides it?
Under what conditions can it be consumed?
What does the consumer still have to do?
When was the provider last assessed?
Can the consumer see the evidence or only the authorized result?
9.4 Publish flow
Publishing an assurance package is an authority-bearing workflow:
1. Validate provider asset and owner.
2. Review implementation assertions.
3. Review supported objectives/controls.
4. Define applicability conditions.
5. Define consumer responsibilities.
6. Validate evidence/result freshness.
7. Define evidence visibility.
8. Preview eligible consumers.
9. Approve/publish immutable version.
The final confirmation explicitly states that future consumers may rely on this package under its conditions.
10. Organization-First Assessment Entry
10.1 Entry points
An ad hoc assessment can begin from:
Organization page → New Assessment;
Organizational Unit → Assess this unit;
Asset → Assess asset;
Assessments → New Assessment.
10.2 Organization assessment setup
The wizard asks:
Step
 | Question
 | 
Scope
 | What unit or asset are you assessing?
 | 
Basis
 | Which organization profile, control subset, requirement set, or targeted objective set applies?
 | 
Assessment intent
 | Full assessment, targeted review, recurring review, evidence refresh, or remediation validation?
 | 
Inheritance
 | Which parent/shared assurance sources should be considered?
 | 
Timing
 | Due date / assessment window / milestone.
 | 
Authority
 | Who leads, who reviews, and who may make determinations?
 | 
Routing
 | Use default ownership rules, template routing, or manual assignment?
 | 

10.3 Assessment preview before launch
Before launch, show:
objectives considered;
objectives already resolved by valid inheritance;
residual/local objectives;
objectives requiring attestation;
unresolved applicability;
estimated task count;
expected assignment packages;
missing owners;
source conflicts.
The user may resolve missing owners before launch or launch with explicit unresolved work.

Part III - Product and Program Experience
11. Product and System Baseline Management
11.1 Products & Systems landing page
The landing page supports:
product families;
published baselines;
draft baselines;
system templates;
shared reusable systems;
baselines with impacted assurance;
baselines waiting for publication review.
11.2 Product family detail
Suggested tabs:
Overview | Baselines | Systems | Components | Assurance | Assessments | Consumers / Programs | Changes
The Overview shows the latest published baseline and clearly distinguishes latest from used by active programs.
11.3 Create baseline
Entry choices:
Start from previous baseline
Start from existing program/system
Import known architecture/inventory
Start blank
The baseline workspace uses a checklist across:
systems/boundaries;
major components;
reusable capabilities/services;
implementation assertions;
reusable assurance packages consumed;
evidence/results;
unresolved unknowns;
review/publish requirements.
11.4 Publication readiness
The UI should not show one “baseline completeness score.” Instead show dimensions:
Architecture definition
Component identification
Ownership completeness
Obligation allocation
Implementation mapping
Assurance/evidence availability
Unknowns requiring acknowledgement
Each dimension links to its unresolved items.
12. Program Creation Wizard
12.1 Design goal
Creating a program should result in an actionable starting assurance plan. The wizard is resumable and allows incomplete truth.
12.2 Wizard steps
Step
 | Primary interaction
 | 
1. Program basics
 | Name, customer/mission, target milestone, Program SSE, program owner.
 | 
2. Security context
 | Required categorization/context fields and governing process.
 | 
3. Control/profile sources
 | Organization profile, overlays, CNSSI-derived selection result where applicable, other authoritative sources.
 | 
4. Customer requirements
 | Import or enter customer-specific requirements and parameter values.
 | 
5. Systems
 | Add baseline systems, variants, new systems, or placeholders.
 | 
6. Shared organizational dependencies
 | Confirm known organization-owned services/assets such as IAM, PKI, signing, vulnerability management.
 | 
7. Ownership
 | Assign system owners, engineering leads, assessment authority, package-routing defaults.
 | 
8. Review
 | Show effective obligations, inheritance sources, unknowns, conflicts, and work expected at launch.
 | 
9. Launch
 | Pin sources/versions, create program graph, create work, and notify owners.
 | 

12.3 Customer requirements interaction
Customer requirements enter an intake grid with status:
Parsed / entered
Mapped to existing parameter
Strengthens existing requirement
New requirement
Conflict
Needs triage
Out of assurance scope
The user can open a side-by-side comparison showing organization default, product default, customer source, and proposed effective value.
No conflict is automatically resolved simply because one value appears “stricter.”
12.4 Launch summary
The final screen should show statements such as:
327 control obligations in the effective profile
4 systems added
2 systems based on published baselines
1 new incomplete system
1 external/shared organizational service
184 objectives currently reusable through inherited assurance
63 objectives require local work
21 applicability decisions remain
7 missing owners
2 source conflicts
Primary actions:
Launch program or Save draft.
13. System Onboarding Modes
13.1 Add System chooser
When adding a system, present three primary cards:
Use existing baseline
Use when the delivered system is expected to match a published baseline.
Create variant
Use when the system starts from a baseline but contains known or expected changes.
Create new / incomplete system
Use when no reliable baseline exists or the system is still being designed.
A fourth advanced path supports legacy import.
13.2 Existing baseline confirmation
The user selects a baseline version and sees:
architecture summary;
major components;
consumed assurance packages;
known implementation assertions;
current reusable assessment results;
assumptions required for reuse.
The user must explicitly acknowledge whether the key assumptions appear valid. “Not reviewed yet” remains available.
13.3 Variant entry
Variant onboarding goes directly into Delta Review rather than making the user recreate architecture.
13.4 New system entry
New system onboarding creates a system placeholder with:
system name;
owner if known;
boundary state = Unknown or Draft;
architecture completeness = partial;
zero assumptions that missing means N/A.
14. New and Incomplete System Discovery
14.1 System workspace
Suggested tabs:
Overview | Architecture | Components | Capabilities | Dependencies | Requirements & Controls | Implementations | Evidence | Assessments | Changes | Activity
14.2 Overview layout
Top section:
System name / owner
Definition state
Boundary state
Critical unknowns
Assessment readiness
Active findings
Blocking decisions
Below that, show Unknowns requiring resolution before compliance-style summaries.
14.3 Architecture editor
The system should support a lightweight structured architecture editor, not a full CAD/digital-twin system.
Users can add:
subsystem;
hardware component;
firmware/software component;
external service;
data/interface relationship;
trust boundary marker;
organization-owned shared service;
unknown placeholder.
Each element may link to a canonical Asset Catalog entry or remain system-local/candidate.
14.4 Unknown placeholder interaction
An unknown placeholder includes:
what is unknown;
why it matters;
owner or unassigned state;
target decision date;
affected obligations/assessment objectives if known;
button: Assign discovery.
Example:
Processor / SoC - Unknown Production SoC has not been selected. This blocks 8 implementation mappings and 3 assessment objectives. Owner: Hardware Engineering Needed by: Sep 14
14.5 Inline discovery task creation
Selecting Assign discovery opens a compact work dialog:
request;
default owner based on technical ownership;
due date;
context;
affected items;
optional package grouping.
The result becomes general assurance work or an assessment discovery task depending on current context.
15. Effective Obligations, Tailoring, and Customer Requirements
15.1 Requirements & Controls workspace
This workspace defaults to effective obligations, with filters for provenance:
Organization baseline
Product overlay
Customer requirement
Program-specific
Tailored/modified
Conflict
Not Applicable decision
The raw source catalog remains accessible but is not the default program view.
15.2 Obligation row
Each row shows:
obligation name / plain-language summary;
source stack;
effective parameter/value where relevant;
allocation to system(s)/assets;
implementation state;
assurance state;
conflict/unknown badge;
“Why?” action.
15.3 Parameter comparison panel
When multiple parameter values exist, show a comparison:
Source
 | Value
 | Scope
 | Authority / state
 | 
Organization baseline
 | 15
 | Organization
 | Published default
 | 
Product baseline
 | No change
 | Product
 | Inherited
 | 
Customer CR-118
 | 24
 | Nightwing
 | Customer source
 | 
Effective program decision
 | 24
 | Nightwing
 | Approved by configured authority
 | 

If the system cannot mechanically resolve the sources, the panel displays Conflict - decision required.
15.4 Tailoring decision modal
High-authority decisions require:
selected decision;
rationale;
source references;
scope;
effective date;
approver/authority;
affected systems;
optional expiration/review date.
16. Inheritance Review and Reusable Assurance Consumption
16.1 Inheritance Review purpose
Inheritance Review is a first-class UX surface. It answers:
What do we think we can reuse, why, what remains local, and what should not be trusted yet?
16.2 Review categories
Category
 | Meaning
 | 
Applicable - current
 | Source assurance is valid and can resolve the covered objective(s).
 | 
Applicable - attestation required
 | Reuse is allowed only after local confirmation.
 | 
Applicable - residual work remains
 | Provider covers part; consumer still has explicit responsibilities.
 | 
Unknown
 | Required facts are missing.
 | 
Conflict
 | Facts/sources disagree.
 | 
Review required
 | Applicability may hold but a policy/authority review is required.
 | 
Impacted
 | Previously valid reuse may no longer hold because a relevant change occurred.
 | 
Not applicable
 | Authorized determination says the package/result does not apply.
 | 

16.3 Assurance package consumption card
A card for Enterprise IAM Assurance Package v4.2 might show:
Provider: Enterprise IAM
Owner: Enterprise Security / IAM
Provides: 38 assessment objectives
Local residual: 7 objectives
Attestation: 2 items
Last assessed: date
Evidence: restricted; result reusable
Applicability checks: 6 passed, 1 unknown
Consumers: 14 products/programs
Actions:
Review applicability | Accept consumption | Resolve unknown | View provider assurance
16.4 Residual responsibility panel
The user must be able to see precisely what is not inherited.
Example:
Enterprise IAM provides authentication, credential lifecycle, and enterprise account disablement. Nightwing remains responsible for local role assignment, privileged-role approval, and removal of program-specific entitlements.
Residual tasks are generated only for those responsibilities.
16.5 Restricted provider evidence
If provider evidence is restricted, the consumer sees:
authorized result;
provider/assessor identity where permitted;
assessment date;
objective coverage;
assurance package version;
evidence access = Restricted;
access request action if policy allows.
The absence of evidence visibility must not be presented as missing evidence when a reusable authorized result is valid.
17. Variant Delta and Impact Review
17.1 Delta workspace
The Delta workspace compares a pinned baseline with the program system.
Filters:
Changed
Added
Removed
Unknown
Not reviewed
Confirmed unchanged
17.2 Delta row
Example:
Element
 | Baseline
 | Program
 | State
 | Assurance impact
 | 
Bootloader
 | 4.2
 | 4.4
 | Changed
 | 6 objectives need review
 | 
TPM
 | Model Y
 | Model Y
 | Confirmed unchanged
 | No known impact
 | 
FPGA
 | Standard
 | Customer FPGA 2.3
 | Changed
 | 3 Secure Boot objectives impacted
 | 
Network module
 | None
 | Customer module
 | Added
 | New applicability review
 | 
Production signing config
 | Enabled
 | Unknown
 | Unknown
 | Attestation / evidence blocked
 | 

17.3 Report a change
Changes can originate from:
user edit;
source-system synchronization;
program requirement change;
baseline adoption;
assessment observation.
The UX records source and does not instantly interpret a change as failure.
17.4 Impact review
After a change, show:
implementation assertions impacted;
evidence potentially invalidated;
inherited assessment results affected;
new obligations or applicability decisions;
impacted RAP consumptions;
generated review/reassessment work;
affected milestones.
Users may accept No known impact only when authorized and supported by the domain rules.

Part IV - Assessment Execution
18. Assessment Planning and Objective Resolution
18.1 Assessment landing page
The Assessments landing page supports filters by:
scope;
type;
owner;
active/completed;
organization vs program;
framework/profile;
due date;
inherited reuse level;
findings generated.
18.2 Assessment create flow
Common steps:
1. Choose subject/scope.
2. Choose basis/profile/objectives.
3. Choose intent and assessment window.
4. Resolve inherited assurance.
5. Review applicability unknowns/conflicts.
6. Generate practical tasks from templates.
7. Group tasks into packages.
8. Assign package owners/reviewers.
9. Launch.
18.3 Objective Resolution screen
This is a reviewer/planner view, not a contributor view.
Columns:
objective;
source control/requirement;
subject;
resolution;
source assurance package/result;
residual responsibility;
task plan;
reviewer;
status.
The planner can filter to Unresolved only.
18.4 Task generation preview
Before generating tasks, show:
raw objective count;
objectives resolved by inheritance;
objectives requiring only attestation;
objectives requiring residual/local work;
objectives blocked by unknown/conflict;
tasks generated after reusable templates/dependency rules;
expected package count.
This makes the benefit of inheritance visible without turning it into a security score.
19. Assignment Packages, Routing, and Delegation
19.1 Package model in UX
A package is a coherent bundle of assessment tasks assigned to one accountable owner/team. It is the unit of coordination; tasks remain individually delegable.
19.2 Package list
Each package shows:
package title;
subject/system;
accountable owner;
task count;
delegated count;
answered count;
returned for clarification;
due date;
reviewer;
overdue/blocking state.
19.3 Automatic routing preview
Before launch, the system suggests package groupings based on:
asset owner;
organizational unit;
system/component owner;
assessment template routing;
configured defaults.
The assessment lead can edit the suggestions.
19.4 Package Owner view
The Package Owner sees:
package purpose;
due date;
progress by task state;
list of tasks;
current delegates;
bulk actions.
Allowed bulk actions:
assign/delegate;
change due date within authority;
request reassignment;
add package note;
filter by unanswered / missing evidence / returned.
Bulk Satisfied is not allowed.
19.5 Delegation interaction
Selecting one or more tasks and choosing Delegate opens:
people/team search;
suggested assignees based on asset/component ownership;
due date;
optional message;
whether delegate may re-delegate;
preview of sensitive context shared.
The package owner remains accountable unless the package itself is reassigned.
20. Contributor Task Experience
20.1 Contributor design goal
A contributor should be able to respond correctly without understanding the control framework or navigating the full platform.
20.2 Task page anatomy
Top:
Plain-language request
Example:
Describe how privileged account requests are approved for the Tactical Management Controller. Link the procedure or workflow used to approve them.
Then show:
Assigned to
Requested by
Due date
Program/system or organization context
Expected response type
Why this matters
Primary response area supports text, structured answer, evidence link/upload reference, test result, or interview notes depending on task type.
20.3 Contributor actions
Submit response
Save draft
Attach/link evidence
Delegate if allowed
Ask clarification
Flag wrong owner
Flag not applicable / request applicability review
Report conflicting source information
Create/link missing asset
20.4 “I don’t know” is valid
The UI must provide an explicit path for:
Unknown
Need another owner
Decision not yet made
Source conflict
Planned but not implemented
These answers create review/discovery work. They are preferable to forced Yes/No answers.
20.5 Prior answer reuse
When a similar current answer exists, show:
A previous response may help Enterprise IAM answered a related task on June 12.
The contributor can reference it or say it does not apply. The previous answer does not silently prefill an authoritative determination.
20.6 Submit confirmation
On submission, explain:
Your response has been submitted as assessment input. The assigned reviewer will determine whether additional information is needed and whether the assessment objective is satisfied.
This reinforces Response != Determination.
21. Reviewer / SSE Assessment Experience
21.1 Reviewer Queue
The reviewer queue is optimized for decision throughput and evidence sufficiency.
Filters:
Ready for review
Returned once or more
Inherited result requiring attestation
Conflicts
Insufficient information
High deadline impact
By control/objective/system/package
21.2 Review workspace layout
Recommended three-panel desktop layout:
Panel
 | Content
 | 
Left
 | Objective/task queue with state and urgency.
 | 
Center
 | Current objective, task responses, observations, evidence, prior result, inherited source.
 | 
Right
 | Context/provenance, applicability, implementation assertion, source requirement/control, history.
 | 

21.3 Reviewer actions
Request clarification
Accept input / observation
Record Satisfied determination
Record Other Than Satisfied determination
Record Not Applicable decision when authorized
Mark Insufficient Information
Create finding
Link existing finding
Trigger targeted follow-up task
Escalate conflict/applicability decision
21.4 Determination confirmation
An authoritative determination dialog requires:
outcome;
rationale;
scope/subject;
supporting observations/evidence;
snapshot reference;
reviewer identity;
effective date;
finding decision when Other Than Satisfied.
High-authority decisions should not be a one-click icon.
21.5 Comparison with inherited result
When reviewing an objective with prior/inherited assurance, show:
previous determination;
source package/result;
assessment date;
current facts;
changed facts;
reason reassessment was triggered.
22. Findings, Remediation, Risk, and POA&M Workflow
22.1 Finding creation
A finding can be created directly from an assessment determination or later from cross-object analysis.
Prepopulate:
source assessment/objective;
affected subject;
control/requirement links;
evidence/observation references;
current owner suggestion.
User adds:
concise finding statement;
impact/priority fields required by organization policy;
owner;
target date;
disposition path.
22.2 Finding detail page
Suggested tabs:
Overview | Source & Evidence | Affected Scope | Remediation | Risk / POA&M | Reassessment | Activity
22.3 Group into remediation initiative
From Findings, users can select multiple related findings and choose Create remediation initiative.
The dialog shows potential shared root cause and affected scopes but does not automatically merge findings.
The initiative captures:
title/root cause;
owner;
linked findings;
milestones;
dependencies;
target completion;
programs/systems impacted.
22.4 Risk relationship
The UI distinguishes:
Finding = observed gap/problem
Risk = uncertainty/exposure requiring treatment decision
Remediation Initiative = coordinated work
POA&M Item = formal system/program tracking artifact where required
Buttons use these nouns explicitly.
22.5 Create POA&M item
When applicable, the system prepopulates a POA&M creation flow from finding/risk data. The user reviews:
system/program;
weakness/source;
owner;
remediation plan;
milestones;
target dates;
deviations/acceptance authority;
closure criteria.
23. Reassessment and Closure
23.1 Closure is a validation flow
Closing remediation does not immediately turn assurance green. The UX should distinguish:
Work complete → Ready for validation → Reassessed / verified → Finding closed.
23.2 Targeted reassessment
The system proposes objectives impacted by the remediation and allows the assessor to create a targeted reassessment plan.
Show:
original finding;
changed implementation/configuration;
required evidence/test;
affected objectives;
previous determination;
closure authority.
23.3 Restore reusable assurance
After successful reassessment, the reviewer may:
close the finding locally;
update a product/system baseline candidate;
update/publish a reusable assurance package version;
submit improved evidence/template for promotion.
Historical assessments remain unchanged.

Part V - Cross-Scope Learning, Trust, and Operations
24. Promotion, Deduplication, and Upward Propagation
24.1 Promotion entry points
Local/candidate objects show Submit for broader reuse when eligible.
Eligible object types include:
assets/components;
policies/procedures;
requirements;
implementation assertions;
evidence patterns;
assessment templates;
reusable assessment results/assurance packages;
product/system baseline candidates.
24.2 Promotion wizard
1. Choose proposed destination scope.
2. Show likely canonical matches.
3. Choose link/merge/new version/new canonical object.
4. Review applicability broadening.
5. Select destination owner.
6. Review sensitive data/markings.
7. Submit to approval.
24.3 Promotion Queue
Governance/library owners see:
source local object;
proposed destination;
submitter;
candidate duplicates;
current consumers;
applicability change;
sensitive-data impact;
origin assessment/program.
24.4 Promote from product assessment
A Program SSE who discovers a policy that applies across Product Division A should be able to submit it directly to that organizational unit without copying the text into a new object. Origin lineage is preserved.
25. Conflict, Source Reconciliation, and Authority Decisions
25.1 Conflict presentation
Conflicts should interrupt the relevant workflow without making the entire platform unusable.
A conflict card shows:
field/assertion in dispute;
source A;
source B;
current effective state = unresolved;
affected inheritance/assessment work;
decision owner/authority;
due date if blocking.
25.2 Example source conflict
PLM says TPM Model Y. Program engineer reports TPM Model Z. Current system component identity: Conflict - unresolved.
The UI offers:
Verify source
Request evidence
Assign decision
Resolve with authority
Accept bounded ambiguity (authority-only; records scope and expiry)
It does not silently prefer the newer entry or the manual entry.
25.3 Conflict resolution view
Resolution requires:
selected authoritative outcome;
rationale;
source(s) retained;
resolver authority;
effective time;
follow-up action to source systems if required.
If the conflict affected inheritance, resolving it automatically triggers the inheritance/impact resolver and surfaces changed downstream work.
26. Evidence Experience and Restricted Visibility
26.1 Evidence list
Evidence lists show:
title/type;
source;
owner;
supported assertion/objective;
subject/system;
freshness state;
visibility/marking;
validation state;
last used/assessed date.
26.2 Evidence detail
Suggested regions:
metadata/provenance;
source link/file reference;
supports relationships;
applicability conditions;
assessment uses;
freshness/revocation;
access restrictions;
history.
26.3 Evidence access denied
When a user can rely on a result but not inspect evidence, show:
Evidence restricted You are authorized to view the reusable assessment result, but not the underlying evidence. The result was issued by [authorized provider/assessor] for [package/version] on [date].
Actions may include Request access or Contact owner if policy allows.
26.4 Revoked or stale evidence
Stale/revoked evidence should show its consumers and impacted assertions/results before the user confirms revocation where authority requires it.
27. Notifications, Deadlines, and Escalation
27.1 Notification philosophy
Notifications should be event- and responsibility-driven, not every-change spam.
High-value notifications:
new assignment/delegation;
task returned for clarification;
reviewer action required;
source conflict assigned;
inherited assurance impacted;
evidence expiring where the user owns the evidence;
remediation milestone approaching;
program critical-path item at risk;
promotion review assigned;
upstream reusable assurance package changed.
27.2 Digest vs immediate
Immediate:
direct assignment;
blocking conflict;
access/authority decision;
critical deadline impact;
reassessment triggered by material change.
Digest:
routine completed responses;
non-blocking evidence freshness;
general activity in watched scopes.
27.3 Escalation
Escalation rules may be configured by scope and workflow. The UX always shows:
current owner;
escalation path;
next escalation date;
affected milestone.
28. Dashboards, Rollups, and Readiness
28.1 Dashboard rule
Dashboards show factual operational state. They do not create a proprietary maturity score or a single “coverage” percentage that implies security quality.
28.2 Program Overview
Recommended cards:
Systems: defined / incomplete / unknown
Assessment objectives: inherited / awaiting response / ready for review / satisfied / other than satisfied / insufficient information / reassessment required
Findings: open / critical-path / remediation active
POA&M: open / due soon / overdue
Evidence: current / expiring / invalidated
Unknowns and source conflicts
Critical-path assurance work
Next milestone
28.3 Organizational Unit Overview
Recommended cards:
Owned assets
Reusable assurance packages
Active assessments
Assessment tasks awaiting unit response
Open findings
Shared remediation initiatives
Downstream products/programs consuming unit assurance
Promotion candidates
Evidence freshness
28.4 Readiness statement
If the product uses a derived readiness indicator, it must be explainable and operational, such as:
Not ready for assessment completion because 14 objectives lack sufficient information, 3 source conflicts block applicability, and 2 critical findings remain unresolved.
No opaque numeric score is required.
29. Search, Graph Navigation, and Explainability
29.1 Search result grouping
Search groups results by type:
Organization units
Assets
Products/systems
Programs
Controls/requirements/objectives
Assessments
Evidence
Findings
Assurance packages
Work
29.2 Relationship navigation
Every major entity detail should expose relevant relationships as clickable chips or lists, for example:
Enterprise IAM → provides RAP v4.2 → consumed by Falcon → instantiated by Nightwing → inherited by Nightwing assessment.
29.3 Explainability view
For any derived state, the explainability view should provide a human-readable chain:
Nightwing inherited objective IA-X.a from Enterprise IAM RAP v4.2 because Nightwing consumes Enterprise IAM production configuration X, all required applicability facts matched the RAP predicate, the provider assessment result is current, and no material change has invalidated it. Nightwing still owns role-assignment responsibility, so one residual task remains.
Advanced users may expand source IDs and rules.
30. Import, Export, Workbook, and OSCAL-Aligned Interactions
30.1 User principle
OSCAL should appear as an interoperability/export option, not as required vocabulary in everyday screens.
30.2 Import center
The Import Center supports staged import with preview and validation:
control catalogs/profiles;
customer requirements;
product/system inventory;
legacy workbooks;
evidence metadata;
supported OSCAL artifacts.
Import never silently converts blank values to N/A/Satisfied.
30.3 Legacy workbook import
The workflow should:
1. Upload/select workbook.
2. Map columns/sections.
3. Preview recognized controls/requirements/assets/statuses.
4. Mark ambiguous values.
5. Choose destination scope.
6. Create program/local objects.
7. Generate triage tasks for unresolved rows.
30.4 Program workbook / SCTM export
The program workbook/report - the Security Controls Traceability Matrix (SCTM) and related views - is generated from the live graph. Export settings choose:
scope;
point-in-time snapshot;
control/requirement columns;
implementation statements;
evidence references;
assessment status;
findings/POA&M content;
sensitive-data handling.
The export includes generation timestamp and source snapshot/version information.
30.5 OSCAL interaction alignment
Supported system-centric workflows may expose actions such as:
Import Profile
Export Profile
Export Component Definition
Export SSP-compatible implementation package
Export Assessment Plan
Export Assessment Results
Export POA&M
The UI should explain validation errors in product language and optionally expose OSCAL paths/identifiers to advanced users.

Part VI - Screen Contracts and Delivery
31. Screen and Page Anatomy Catalog
31.1 Core screen catalog
Screen
 | Primary user
 | Primary job
 | Key actions
 | 
Home / My Work
 | Everyone
 | Resolve assigned work
 | Open, delegate, respond, review
 | 
Organization tree
 | Org assurance
 | Model responsibility scopes
 | Add unit, assign owner, assess
 | 
Organization unit detail
 | Org assurance
 | Manage unit assurance
 | Add asset, assess, publish reusable work
 | 
Asset Catalog
 | All power users
 | Find assurance-relevant assets
 | Search, filter, create candidate
 | 
Asset detail
 | Asset owner
 | Maintain canonical asset assurance
 | Update, assess, publish RAP
 | 
Library
 | Governance
 | Find reusable knowledge
 | Import, author, review, publish
 | 
RAP detail
 | Provider/consumer
 | Understand reusable assurance
 | Publish, consume, inspect responsibilities
 | 
Product family
 | Product security
 | Manage reusable product truth
 | Create baseline, compare versions
 | 
Baseline workspace
 | Product/system
 | Define reusable system/product
 | Model, map, review, publish
 | 
Program list
 | Program security
 | Navigate program portfolio
 | Create program, filter risk
 | 
Program Overview
 | SSE/leadership
 | Understand readiness
 | Open blockers, assessments, findings
 | 
Program Setup
 | SSE
 | Manage effective context
 | Tailor, add requirements, assign roles
 | 
System workspace
 | SSE/engineering
 | Model system and unknowns
 | Add component, assign discovery
 | 
Delta Review
 | SSE/engineering
 | Confirm baseline difference
 | Mark changed/unknown, impact review
 | 
Requirements & Controls
 | SSE
 | Understand obligations
 | Filter, allocate, resolve conflict
 | 
Inheritance Review
 | SSE/assessor
 | Decide reusable assurance
 | Consume RAP, resolve residuals
 | 
Assessment planner
 | Assessor/SSE
 | Define plan
 | Resolve inheritance, package tasks
 | 
Assessment package
 | Package owner
 | Coordinate team input
 | Delegate, track, return
 | 
Contributor task
 | Engineer/SME
 | Provide information/evidence
 | Respond, attach, delegate, flag
 | 
Reviewer Queue
 | Assessor/SSE
 | Make determinations
 | Clarify, determine, find
 | 
Finding detail
 | Security/remediation
 | Resolve a gap
 | Assign, group, remediate, reassess
 | 
Remediation initiative
 | Remediation owner
 | Coordinate shared fix
 | Milestones, link findings
 | 
Risk / POA&M
 | Risk/SSE
 | Manage formal risk/remediation
 | Treat, approve, close
 | 
Promotion Queue
 | Steward
 | Govern upward reuse
 | Deduplicate, approve, publish
 | 
Conflict detail
 | Authority owner
 | Resolve competing truth
 | Compare sources, decide, propagate
 | 
Import Center
 | Admin/power user
 | Bring structured data in safely
 | Map, validate, triage
 | 
Export Center
 | SSE/assessor
 | Produce external artifact
 | Select snapshot, format, validate
 | 

31.2 Standard page anatomy
For complex workspaces, use:
1. Global navigation
2. Scope breadcrumb/header
3. Object identity + state
4. Local tab navigation
5. Primary work/content region
6. Right-side context/provenance drawer when needed
7. Sticky primary action for the current workflow
8. Activity/audit access
31.3 Page density
Power-user screens may be dense, but density should come from structured tables and panels rather than tiny text. Contributor screens should be materially simpler than SSE/assessor screens.
32. Empty, Loading, Error, and Partial-Truth States
32.1 Empty states must teach the model
Examples:
No organization assets yet
No assets are cataloged for this unit yet. You can add known assets now or start an assessment and create assets as they are discovered.
Actions: Add asset | Start assessment
New system has no architecture
This system has not been defined yet. Unknown architecture is allowed. Add major components now or assign discovery work to engineering.
Actions: Add component | Assign discovery
No assessment template
The selected objective has no organization-authored assessment template. Use the canonical assessment objective as guidance and create tasks for this assessment. You can later submit the improved task set for reuse.
32.2 Loading and calculation states
Inheritance and impact calculations may take time at scale. Use explicit states:
Resolving applicable assurance...
Evaluating 42 reusable packages...
Calculating impact across 18 dependent systems...
If asynchronous, the user can leave the page and receives completion status. Never show the old result as if it were current without an “Updating” indicator.
32.3 Error states
Errors distinguish:
authorization/access;
invalid source data;
import validation;
rules conflict;
synchronization unavailable;
calculation failure.
The interface must not collapse a failed calculation into Unknown applicability without saying the calculation failed.
33. Permissions, Markings, and Sensitive-Data UX
33.1 Permission-aware actions
Users may see a state they cannot modify. The UI should show why an action is unavailable:
You can view this determination but only an authorized assessor can change it.
33.2 Markings
Sensitive objects should show markings consistently in headers, lists, previews, exports, and share dialogs. Copy/paste or export actions may be restricted based on markings.
33.3 Metadata-only visibility
When policy permits metadata inheritance without content access, distinguish:
Result visible
Evidence restricted
Implementation detail restricted
Do not display a generic broken-lock icon that leaves users guessing.
33.4 Delegation preview
Before delegating a sensitive task, preview the context and attachments the delegate will receive. If the selected delegate lacks access, the UI blocks the delegation or offers a sanitized task variant when policy supports it.
34. Accessibility and Interaction Quality
34.1 Accessibility requirements
The experience should support:
keyboard navigation for work queues and tables;
visible focus states;
semantic headings and labels;
no status communicated by color alone;
accessible table sorting/filtering;
screen-reader-friendly badges;
form errors associated with fields;
sufficient target sizes;
reduced motion compatibility;
text equivalents for graph relationships.
34.2 Table usability
Large tables should support:
sticky header;
column chooser;
saved filters;
density preference;
bulk selection;
keyboard row navigation;
accessible export;
deep-link to row/object.
34.3 Confirmation design
Use confirmation only when actions are irreversible, authoritative, or broad in blast radius. Routine saves and task responses should not generate modal fatigue.
35. MVP Interaction Scope and Delivery Sequence
35.1 MVP UX hypothesis
Stage 1 (R0-R2): if a program team can assemble its catalog, resolve its effective controls, and generate its SCTM from the live graph, the foundation experience is proven. Stage 2 (R3-R4): if an organizational unit can run a real delegated assessment, publish reusable assurance, and a Program SSE inherits that work generating only residual tasks - with clear contributor/reviewer separation - the compounding experience is proven.
35.2 R0-R2 must-have screens (Catalog, Controls, SCTM)
1. Home / My Work
2. Organization tree + unit detail
3. Asset Catalog + basic asset detail
4. Library: standards, profiles, objectives
5. Program creation wizard (basic)
6. Add System chooser + system workspace with Unknown placeholders
7. Requirements & Controls: effective obligations + parameter comparison
8. Customer requirements intake + tailoring decision modal
9. Conflict detail (parameter/source conflicts)
10. Import Center: catalogs, controls, legacy workbooks
11. Product family + baseline workspace (basic)
12. Export / Workbook Center: SCTM generation
13. Why/provenance drawer
14. Local/candidate asset creation inline
35.3 R3 screens (Assessment engine)
New Assessment wizard
Objective Resolution
Assignment Package view + delegation
Contributor Task (question, evidence request, test)
Reviewer Queue + determination dialog
Finding creation/detail
Evidence detail + freshness
Program Overview / critical path
Assessment results / export
35.4 R4 screens (Inheritance + remediation)
Remediation initiatives
Risk treatment
POA&M
Targeted reassessment/closure
Cross-scope findings
Inheritance Review
RAP detail/consumption workflow
Delta Review + Change Impact Review
Promotion Queue (basic)
35.5 R5 screens (Learning + interoperability)
Advanced blast radius
recurring/continuous assessment administration
source-system reconciliation center
advanced promotion/deduplication
OSCAL artifact center
machine-generated evidence integrations
assisted routing/mapping recommendations
36. End-to-End Acceptance Walkthroughs
36.1 Organization-first IAM assessment
1. Organization admin creates ACME and Enterprise Security / IAM.
2. IAM owner creates Enterprise IAM asset.
3. IAM owner selects Assess this asset.
4. Assessment wizard uses organization NIST profile and imported assessment objectives.
5. Objective Resolution suppresses parent-level inherited items and generates remaining work.
6. System groups 31 tasks into an Identity package.
7. Package owner delegates provisioning questions to Engineer A, access-review evidence to Engineer B, and a test to Security Test.
8. Engineer A answers without seeing raw control syntax by default.
9. Reviewer receives submitted inputs in Reviewer Queue.
10. Reviewer records determinations; one objective is Other Than Satisfied and creates a finding.
11. Satisfied results and supporting implementation assertions are assembled into Enterprise IAM RAP v1 draft.
12. Authorized owner publishes RAP v1 with residual consumer responsibilities.
13. Evidence is restricted but reusable result metadata is visible to eligible consumers.
Pass condition: a downstream product can consume the published result without repeating the provider questions.
36.2 Nightwing program inherits Enterprise IAM
1. Program SSE creates Nightwing.
2. Setup selects organizational profile/security context and adds customer requirements.
3. SSE adds Falcon v6 variant plus new Tactical Management Controller.
4. Nightwing declares Enterprise IAM as shared dependency.
5. Inheritance Review evaluates Enterprise IAM RAP v1 (the first publication; mature-state examples elsewhere in the suite show v4.2).
6. 38 objectives are current/applicable; 7 residual local responsibilities remain; 2 require attestation.
7. Only residual/attestation tasks are generated.
8. Why drawer explains source, version, applicability, and consumer responsibilities.
Pass condition: valid organization work eliminates redundant questioning without hiding local responsibility.
36.3 Customer password override
1. Organization default is 15 characters.
2. Customer requirement CR-118 says 24 characters.
3. Requirements workspace shows both sources.
4. System proposes mapping to parameter but does not silently overwrite the organization default.
5. Program authority approves effective 24-character value with rationale.
6. Affected tasks/objectives update.
7. Source provenance remains visible.
Pass condition: the program can explain exactly why 24 applies without mutating source standards or organization policy.
36.4 New incomplete system
1. SSE creates Tactical Management Controller with no baseline.
2. System Overview shows incomplete architecture and Unknown states.
3. SSE creates unknown placeholders for SoC, bootloader version, and signing configuration.
4. Discovery tasks route to hardware/firmware owners.
5. Hardware engineer identifies a new SoC not in Asset Catalog and creates a program-local candidate inline.
6. The program continues immediately.
7. Candidate SoC can later be submitted to the organization catalog.
Pass condition: incomplete architecture creates work, not false N/A or false satisfaction.
36.5 Variant change invalidates inherited assurance
1. Falcon v6 baseline uses TPM Y and customer program initially confirms it.
2. Source sync later reports TPM Z.
3. Program engineer disputes the change.
4. System creates Source Conflict and marks related inherited assurance Review Required rather than Failed.
5. Authority resolves TPM Z as correct.
6. Impact engine identifies Secure Boot dependency.
7. Three assessment objectives become Reassessment Required; unaffected objectives remain inherited.
Pass condition: change blast radius is targeted and historical truth is preserved.
36.6 Findings grouped into remediation
1. Assessment creates four related access-governance findings across two systems.
2. Security lead selects the findings and creates Enterprise Access Governance remediation initiative.
3. Program-specific formal requirements create linked POA&M items where required.
4. Engineering completes remediation milestones.
5. Findings move to Ready for Validation, not Closed.
6. Assessor launches targeted reassessment.
7. Successful determinations close the findings and update reusable assurance where applicable.
Pass condition: remediation can be shared while finding/system traceability remains intact.
36.7 Product assessment promotes policy upward
1. Falcon assessment discovers a firmware-signing procedure used across Product Division A.
2. Procedure begins as Falcon-local candidate.
3. SSE chooses Submit for broader reuse.
4. Promotion wizard suggests Product Division A and checks for duplicates.
5. Division assurance owner reviews scope and markings.
6. Procedure is approved/published at division scope.
7. Existing Falcon history still references the original local version/lineage.
8. Future assessments inherit the new canonical policy.
Pass condition: local work compounds into higher-scope organizational truth without rewriting history.
Appendix A. Route and Screen Inventory
Route concept
 | Example
 | 
Home
 | /home
 | 
Organization
 | /organization
 | 
Organization unit
 | /organization/{unit-id}
 | 
Asset Catalog
 | /assets
 | 
Asset detail
 | /assets/{asset-id}
 | 
Products
 | /products
 | 
Product family
 | /products/{product-id}
 | 
Product baseline
 | /products/{product-id}/baselines/{version-id}
 | 
Programs
 | /programs
 | 
Program
 | /programs/{program-id}
 | 
Program system
 | /programs/{program-id}/systems/{system-id}
 | 
Assessments
 | /assessments
 | 
Assessment
 | /assessments/{assessment-id}
 | 
Assignment package
 | /assessments/{assessment-id}/packages/{package-id}
 | 
Task
 | /work/{task-id}
 | 
Findings
 | /findings
 | 
Finding
 | /findings/{finding-id}
 | 
Risks & POA&M
 | /risks
 | 
Library
 | /library
 | 
RAP detail
 | /library/assurance/{rap-id}
 | 
Promotion Queue
 | /library/promotions
 | 
Conflict
 | /conflicts/{conflict-id}
 | 

Routes are conceptual and do not constrain frontend framework implementation.
Appendix B. Standard Action Vocabulary
Use consistent verbs:
Create
Add
Link
Assign
Delegate
Reassign
Submit
Request clarification
Accept as input
Record determination
Create finding
Create remediation initiative
Create POA&M item
Request applicability review
Resolve conflict
Report change
Reassess
Submit for broader reuse
Promote
Publish
Supersede
Retire
Export
Avoid ambiguous buttons such as Approve when the user is actually publishing, making a determination, accepting risk, or resolving a conflict. Name the authority-bearing action.
Appendix C. Status and Badge Vocabulary
Domain
 | Preferred labels
 | 
Assessment objective
 | Planned; Inherited - Current; Awaiting Response; Ready for Review; Insufficient Information; Satisfied; Other Than Satisfied; Not Applicable; Reassessment Required
 | 
Assessment task
 | New; Packaged; Assigned; Delegated; In Progress; Submitted; Clarification Requested; Accepted as Input; Closed
 | 
Assurance package
 | Draft; Under Review; Published; Superseded; Retired; Impacted
 | 
RAP consumption
 | Candidate; Applicable; Attestation Required; Active; Partially Active; Impacted; Reassessment Required; Conflict; Not Applicable; Ended/Superseded
 | 
Evidence
 | Candidate/Unreviewed; Accepted/Validated; Current; Expiring; Expired; Revoked; Impacted (visibility shown separately: Open / Metadata-only / Restricted)
 | 
Finding
 | Open; Triaged; Remediation Planned; In Remediation; Ready for Validation; Closed; Accepted/Deferred; False Positive; Merged/Superseded
 | 
Asset
 | Local/Candidate; Under Review; Canonical/Active; Superseded; Retired
 | 
Promotion
 | Local; Submitted; Duplicate Review; Scope Review; Approved; Published; Rejected/Kept Local
 | 

Appendix D. OSCAL Interaction Alignment
The product experience is intentionally workflow-native while preserving clean mapping to OSCAL where the external semantic fit exists.
Product UX concept
 | OSCAL alignment
 | UX rule
 | 
Imported control catalog
 | Catalog
 | Users browse controls normally; OSCAL format is implementation detail.
 | 
Selected/tailored organization or program profile
 | Profile
 | UI shows effective obligations and provenance, not profile operations by default.
 | 
Reusable asset/component implementation
 | Component Definition where semantically appropriate
 | Users work with assets/assurance packages; export may emit Component Definition content.
 | 
System implementation
 | SSP
 | System workspace collects system characteristics, inventory, roles, and implementation content without forcing SSP-native navigation.
 | 
System assessment plan
 | Assessment Plan
 | Assessment planner can export AP-compatible structure for system-centric workflows.
 | 
System assessment result
 | Assessment Results
 | Determinations, observations, evidence, findings, and risks can map to AR where applicable.
 | 
Formal system remediation
 | POA&M
 | POA&M workspace can export supported OSCAL structure.
 | 
Program SCTM / workbook
 | Projection across Profile, SSP, and Assessment Results content
 | The SCTM is a generated traceability view; export decomposes to standards artifacts where the semantic fit exists.
 | 
Organization hierarchy
 | Application layer
 | Do not force into an OSCAL model that does not represent the organizational operating workflow.
 | 
Assignment packages/delegation
 | Application workflow layer
 | Preserve assessment task/activity lineage while keeping human routing UX outside standards-native terminology.
 | 
Reusable Assurance Package
 | Application abstraction across OSCAL-aligned implementation/results
 | RAP is the human/product abstraction for controlled reuse; export decomposes to appropriate standards artifacts where needed.
 | 

The Assessment Results experience must remain tied to an assessment plan/snapshot for system-centric OSCAL export. Organization-unit ad hoc assessments may use the same internal engine without pretending every such assessment is literally an OSCAL system Assessment Plan.
Appendix E. Figma Frame Inventory
The first wireframe/design pass should include at minimum:
1. Home - Contributor
2. Home - Program SSE
3. Organization tree
4. Organization unit Overview
5. Organization unit Inheritance
6. Asset Catalog
7. Asset Detail
8. Library landing
9. RAP Detail - provider view
10. RAP Detail - consumer view
11. New Organization Assessment - wizard
12. Assessment Preview / Objective Resolution
13. Package Owner view
14. Contributor Task - question
15. Contributor Task - evidence request
16. Contributor Task - test
17. Reviewer Queue
18. Reviewer Objective Review
19. Determination dialog
20. Finding creation
21. Finding Detail
22. Promotion Queue
23. Promotion wizard
24. Product family Overview
25. Baseline workspace
26. Program Creation - wizard
27. Program Launch Summary
28. Program Overview
29. Program Requirements & Controls
30. Program Inheritance Review
31. Add System chooser
32. New System Overview
33. New System Architecture / Unknowns
34. Variant Delta Review
35. Change Impact Review
36. Conflict Detail
37. Evidence Detail - unrestricted
38. Evidence Detail - restricted result reuse
39. Remediation Initiative
40. POA&M Detail
41. Reassessment flow
42. Why / Provenance drawer
43. Import Center
44. Export / Workbook Center
45. Empty-state variants
46. Permission-denied / metadata-only variants
Definition of a successful UX foundation A contributor can understand and answer a task without learning the control framework; an assessor can make a defensible determination with complete lineage; an SSE can see what remains before a program milestone; an organizational owner can establish reusable assurance once; and every inherited or derived state can explain exactly why it exists, what remains local, and what would cause it to change.

=====================
### Program_Assurance_Platform_Domain_Rules_Spec_v1.1.docx  (80371 chars)
=====================
Program Assurance Platform
Domain & Rules Specification
Purpose This document defines the canonical domain semantics and business rules that product design, application services, APIs, persistence, automation, and testing must implement consistently. It is the engineering contract underneath the Product Requirements Document and the Product & System Specification. If a UI, database design, integration, or automation conflicts with a rule in this document, the domain rule wins until the rule is deliberately revised.
Field
 | Value
 | 
Status
 | Draft for product, security, architecture, and engineering review
 | 
Version
 | 1.1
 | 
Date
 | August 12, 2026
 | 
Parent documents
 | Program Assurance Platform PRD v1.1; Product & System Specification v1.1. This document is the canonical semantic contract for the suite; where other suite documents differ on semantics, this document governs.
 | 
Primary audience
 | Product, application architecture, data architecture, backend/frontend engineering, security engineering, assessment leads, QA
 | 
Normative intent
 | Defines canonical entities, relationships, invariants, state transitions, resolution rules, and acceptance scenarios
 | 

Contents
1. Purpose, Normative Language, and Design Philosophy
2. Non-Negotiable System Invariants
3. Canonical Identity and Object Taxonomy
4. Scope, Ownership, and Responsibility Model
5. Authority, Provenance, and Source-of-Truth Model
6. Obligations: Controls, Profiles, Requirements, and Parameters
7. Asset, Product, System, and Component Graph
8. Implementation Assertions and Shared Responsibility
9. Reusable Assurance Packages
10. Applicability Rule Model
11. Inheritance Resolution Engine
12. Assessment Content and Execution Model
13. Assessment Snapshots
14. Evidence Trust, Visibility, and Reuse
15. Conflict Detection and Reconciliation
16. Change Events, Impact Analysis, and Invalidation
17. Findings, Remediation, Risk, and POA&M
18. Promotion, Deduplication, and Canonicalization
19. Versioning, Temporal Semantics, and Historical Reconstruction
20. Permissions, Markings, and Cross-Scope Visibility
21. State Machines and Transition Rules
22. Audit Ledger and Domain Events
23. Derived Views and Calculation Semantics
24. Domain Service Contracts
25. Worked Scenarios
26. MVP Domain Contract and Deferred Semantics
27. Acceptance and Conformance Scenarios
Appendix A. Glossary
Appendix B. Relationship Catalog
Appendix C. Recommended Identifiers and Required Metadata
Appendix D. Open Domain Decisions

Part I - Contract and Ontology
1. Purpose, Normative Language, and Design Philosophy
1.1 What this document is
The PRD defines why the product exists and what outcomes matter. The Product & System Specification defines the platform operating model and major user/system behavior. This document defines the semantic contract: the rules that must remain true regardless of interface, storage engine, service boundaries, or delivery phase.
This document is intentionally more precise than the product specification. It answers questions such as:
What exactly is an Asset, System, Requirement, Determination, or Reusable Assurance Package?
Which objects are authoritative facts and which states are derived?
When may a child scope inherit a higher-scope result?
What must be captured before an assessment determination can be considered reusable?
What happens when two authoritative sources disagree?
What changes invalidate an inherited result, evidence item, or implementation assertion?
Which historical facts must remain reconstructable after canonical objects change?
Which state transitions are legal and what side effects must occur?
1.2 Normative language
The terms MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are normative.
MUST / MUST NOT indicate system invariants or requirements that cannot be violated without changing this specification.
SHOULD / SHOULD NOT indicate expected behavior that may be overridden only for a documented reason.
MAY indicates optional behavior or implementation freedom.
1.3 Design philosophy
The system is built around several deliberate separations:
1. Fact versus interpretation. A source assertion, contributor response, observation, implementation claim, assessment determination, and derived dashboard state are not interchangeable.
2. Scope versus containment. Organizational ownership, technical composition, assessment scope, and program delivery context are separate dimensions.
3. Reuse versus copying. Inheritance is a versioned reference with applicability and responsibility semantics, not duplicated rows.
4. Current truth versus historical truth. Current canonical state may evolve; historical assessments and program decisions must remain reproducible.
5. Knowledge versus authority. A person may know an answer without having authority to approve a policy, determine a control objective, accept risk, or publish reusable assurance.
6. Unknown versus negative. Unknown, insufficiently documented, not assessed, not applicable, and other-than-satisfied are materially different states.
7. Evidence versus conclusion. Evidence supports a conclusion but does not create that conclusion automatically.
8. Automation versus approval. Automation can propose, route, compare, detect, and calculate; it does not silently create authoritative assurance truth.
2. Non-Negotiable System Invariants
The following rules are the platform's core laws. Engineering designs that make any of these difficult should be reconsidered.
ID
 | Invariant
 | 
INV-001
 | Every canonical object MUST have a stable immutable identifier independent of mutable name, path, owner, or display label.
 | 
INV-002
 | Historical references MUST resolve to the version/state actually used at that time; current canonical changes MUST NOT rewrite historical program or assessment truth.
 | 
INV-003
 | Missing data MUST remain Unknown or Unresolved; it MUST NOT silently become Not Applicable, Satisfied, absent, or inherited.
 | 
INV-004
 | Contributor Responses MUST NOT directly produce final Assessment Determinations.
 | 
INV-005
 | A final Assessment Determination MUST identify assessment scope, objective, reviewer authority, supporting inputs, and effective time/snapshot.
 | 
INV-006
 | Inheritance MUST be derived from explicit source, scope, version, applicability conditions, consumer facts, and residual responsibilities.
 | 
INV-007
 | Inherited assurance MUST remain traceable to its provider and MUST NOT be represented as locally authored assurance.
 | 
INV-008
 | A consumer MUST NOT inherit assurance beyond the provider package's declared scope, applicability, visibility, or validity conditions.
 | 
INV-009
 | Partial/shared implementation MUST preserve provider and consumer responsibilities separately.
 | 
INV-010
 | An evidence artifact MUST NOT be treated as universally reusable merely because it is attached to a reusable implementation.
 | 
INV-011
 | Restricted evidence MAY support reusable assurance without being visible to every assurance consumer; result visibility and evidence visibility are separate.
 | 
INV-012
 | Source conflicts MUST be preserved and resolved explicitly; the system MUST NOT silently overwrite one source with another.
 | 
INV-013
 | Risk acceptance MUST be an explicit authority action and MUST NOT be inferred from age, inactivity, waived work, or missed deadlines.
 | 
INV-014
 | A closed finding or remediation item MUST NOT automatically restore a prior determination without required validation or reassessment.
 | 
INV-015
 | Promotion to a broader scope MUST preserve origin lineage and MUST NOT retroactively broaden historical applicability.
 | 
INV-016
 | Published product/system baselines, profiles, templates, and Reusable Assurance Packages MUST be immutable or versioned.
 | 
INV-017
 | A change to a dependency MUST trigger evaluation of affected assertions, evidence, inherited results, and assessments rather than directly declaring compliance or noncompliance.
 | 
INV-018
 | Organizational hierarchy MUST NOT be used as a substitute for technical system/component architecture.
 | 
INV-019
 | Technical containment MUST NOT automatically imply policy applicability or organizational ownership.
 | 
INV-020
 | Program delivery context MUST NOT be used as the canonical identity of a reusable organization/product asset.
 | 
INV-021
 | A control catalog source text MUST remain distinguishable from organization/customer requirements and tailoring decisions.
 | 
INV-022
 | Effective parameter values MUST preserve every contributing source and decision; source values MUST NOT be destructively overwritten.
 | 
INV-023
 | Derived rollups MUST be reproducible from underlying canonical facts and rules and MUST expose their definition.
 | 
INV-024
 | Every material state-changing action MUST be attributable to an actor or automated service identity, timestamp, and source event.
 | 
INV-025
 | Automation-generated proposals MUST be distinguishable from approved/published authoritative objects.
 | 
INV-026
 | The same semantic rule MUST produce the same result regardless of whether the initiating workflow began from an organizational assessment or a program/system assessment.
 | 

3. Canonical Identity and Object Taxonomy
3.1 Identity model
Every persistent domain object MUST have:
id: stable immutable platform identifier;
type: canonical domain type;
created_at and created_by;
lifecycle_state where applicable;
scope_ref or explicit global/imported scope;
version semantics where the object is publishable or historically referenced;
provenance sufficient to explain where the object came from.
Names are labels, not identifiers. A renamed team, product, requirement, or component retains its stable identity.
3.2 Entity classes
The platform uses four broad classes of objects.
Class
 | Meaning
 | Examples
 | 
Reference content
 | Imported or governed content describing external/internal obligations or assessment intent.
 | Control Catalog, Control, Assessment Objective, Profile definition
 | 
Managed subjects
 | Things that exist, are owned, composed, consumed, or assessed.
 | Organization Unit, Asset, Product, System, Component, Policy, Procedure, Service
 | 
Assurance knowledge
 | Assertions and results about managed subjects.
 | Requirement, Implementation Assertion, Evidence, Reusable Assurance Package, Assessment Determination
 | 
Execution/governance
 | Work and decisions through which assurance knowledge is produced or changed.
 | Program, Assessment, Task, Response, Finding, Remediation Initiative, Risk, POA&M, Promotion Request
 | 

3.3 Asset as common assessable subject
Asset is the common identity abstraction for an assurance-relevant subject that can have ownership, relationships, versions, evidence, implementations, or assessment history.
Asset types MAY include:
policy;
procedure;
shared service;
business/security process;
product;
system;
subsystem;
hardware component;
firmware/software component;
external service;
evidence-producing/test service;
facility/site where relevant;
generic/custom assessable subject.
Specialized product/system/component objects MAY be stored through subtype tables, typed document structures, or service-specific models. Regardless of implementation, they MUST share stable Asset identity when they participate in the assurance graph.
3.4 Capability semantics
A Capability is not a maturity concept. It is a reusable logical grouping of assets/components/processes that jointly provide a security or assurance function when no single constituent is sufficient.
Examples: Secure Boot, Secure Update, Enterprise Identity, Firmware Signing.
A Capability:
MAY have a stable Asset identity if it is independently governed, versioned, assessed, and consumed;
MUST declare constituent relationships rather than hide them;
MUST NOT imply that every constituent independently satisfies every mapped control;
SHOULD normally be the provider subject for a Reusable Assurance Package when the organization intends consumers to rely on the combined function.
3.5 Object identity versus version identity
Objects that evolve over time require both stable identity and immutable version identity.
Example:
Product Family: Falcon - stable identity.
Product Baseline Version: Falcon v6 - immutable version identity.
Reusable Assurance Package: Enterprise IAM Assurance - stable identity.
RAP Version: Enterprise IAM Assurance v4.2 - immutable version identity.
A historical assessment points to the version identity, not merely the stable family identity.
4. Scope, Ownership, and Responsibility Model
4.1 Scope is first-class
A Scope identifies where an object or assertion is authored, valid, assessed, or governed. Scope MUST NOT be inferred solely from storage location or URL path.
Supported scope kinds include:
Scope kind
 | Example
 | Typical use
 | 
Organization
 | ACME Defense
 | Enterprise policy, control baseline, canonical library
 | 
Organizational Unit
 | Enterprise Security / IAM
 | Unit policy, shared-service assurance, assessments
 | 
Asset
 | Enterprise IAM service
 | Asset-specific implementation/evidence/result
 | 
Product
 | Falcon product family/baseline
 | Reusable product assurance
 | 
System
 | Falcon Mission Controller
 | System-specific architecture/assessment
 | 
Program
 | Nightwing
 | Customer/program requirement, delivery-specific work
 | 
Assessment
 | Nightwing FY27 control assessment
 | Responses, observations, assessment-local evidence
 | 
Imported/External
 | NIST catalog
 | Authoritative external reference content
 | 

4.2 Responsibility graph
Organizational hierarchy represents responsibility and administrative scope, not technical composition.
Each organizational unit MUST support:
stable identity;
parent unit where applicable;
assurance owner(s);
administrative owner(s);
routing roles;
inherited policy/assurance relationships;
scoped permissions.
A product/system/component MAY be owned by one organizational unit and consumed by systems owned by other units.
4.3 Technical graph
The technical graph represents composition, interfaces, consumption, and dependency relationships among assets.
Relationships SHOULD include explicit semantics such as:
contains / part_of;
depends_on;
consumes_service;
implements_with;
interfaces_with;
produces_evidence_for;
derived_from_baseline;
variant_of.
4.4 Scope inheritance is not ownership inheritance
If Unit B inherits a policy or assurance package from Unit A:
Unit B does not become the owner of the source object;
Unit B cannot edit the source unless separately authorized;
Unit B MAY create local additions, exceptions, or residual responsibilities;
downstream views MUST show the source owner.
4.5 Scope broadening requires governance
An object created at Program scope MUST NOT become Organization or Organizational Unit truth merely because several programs use it. Broadening scope requires a Promotion Request or equivalent governed action.

Part II - Assurance Semantics
5. Authority, Provenance, and Source-of-Truth Model
5.1 Assertion provenance
Every assertion that could influence assurance state MUST preserve provenance.
Minimum provenance includes:
source type;
source identifier/link where applicable;
source owner/authority;
observed/imported/asserted time;
actor/service that created the platform record;
original scope;
confidence or verification state when the assertion is not yet authoritative;
supersession/version lineage where applicable.
5.2 Source classes
Source class
 | Examples
 | Default treatment
 | 
Authoritative external standard
 | NIST control catalog
 | Source content immutable; local tailoring represented separately
 | 
Authoritative enterprise system
 | PLM, CMDB, identity directory
 | Trusted for configured fields, subject to freshness/conflict detection
 | 
Governed organization publication
 | Approved policy, published RAP
 | Authoritative within declared scope/version
 | 
Product/system baseline
 | Published Falcon v6 model
 | Authoritative baseline claim, not proof that every program matches it
 | 
Assessment result
 | Approved determination
 | Authoritative for assessed snapshot/scope/time within validity rules
 | 
Contributor assertion
 | Engineer response
 | Input requiring review; not automatically authoritative assurance truth
 | 
Automated observation
 | Scanner/test/build output
 | Evidence/observation whose trust depends on source identity and collection controls
 | 
Imported legacy content
 | Spreadsheet/workbook
 | Historical input; authority and semantics may require triage
 | 

5.3 Field-level authority
A single Asset may have different authoritative sources for different attributes.
Example:
name/model number: PLM;
operational owner: organization directory;
security classification: security authority;
current firmware version for a program instance: release/build system;
assurance package: security governance.
The platform SHOULD therefore maintain source authority at field or assertion level where practical rather than assigning one global “source of truth” to the entire asset.
5.4 Authority does not suppress contradictions
If a lower-authority source contradicts a higher-authority source, the lower-authority observation MUST still be recordable. The system flags a SourceConflict; it does not discard the contradictory information.
Example: PLM says Product Alpha uses SoC X; an engineer states the delivered build uses SoC Y. The engineer response is not silently rejected. It becomes a conflict that must be resolved because the mismatch may reveal source-system drift.
6. Obligations: Controls, Profiles, Requirements, and Parameters
6.1 Control Catalog
A Control Catalog is imported/governed reference content. A Control retains source family, identifier, source version, statement parts, parameters, and related source metadata.
The platform MUST NOT edit source control text to represent customer or organization-specific modifications.
6.2 Profile
A Profile selects, tailors, parameterizes, or overlays control content for a declared scope/use.
A Profile version MUST preserve:
imported source catalog/profile versions;
included/excluded controls;
parameter values and source;
modifications/overlays;
rationale/approval where required;
publication/version identity.
6.3 Requirement
A Requirement is a first-class obligation authored outside the immutable source control text.
Requirement source types include:
organizational security requirement;
product requirement;
customer/contractual requirement;
program-specific requirement;
engineering constraint;
derived implementation requirement.
A Requirement MAY map to one or more Controls or Assessment Objectives, but a mapping MUST express relationship semantics rather than assuming equivalence.
Recommended mapping relationships:
Relationship
 | Meaning
 | 
Implements
 | Meeting the requirement is intended to implement all or part of the mapped obligation
 | 
Supports
 | Requirement contributes to but does not independently satisfy the obligation
 | 
Strengthens
 | Requirement imposes a stricter or additional constraint
 | 
Derived from
 | Requirement was created because of the mapped source obligation
 | 
Related to
 | Informational association without satisfaction semantics
 | 

6.4 Effective obligations
An Effective Obligation Set is derived for a specific scope/snapshot from:
governing profile(s);
organization/product overlays;
customer requirements;
program tailoring decisions;
applicability decisions;
approved exceptions or deviations.
The set MUST retain provenance for every included obligation and every tailored value.
6.5 Parameters
Parameter values MUST be represented as scoped assertions, not destructive edits.
Minimum parameter assertion:
parameter identifier;
source object/version;
value;
scope;
effective interval where applicable;
approval state;
rationale;
precedence or adjudication decision when conflicts exist.
The effective parameter value is derived. It is not the only stored value.
6.6 Parameter conflict
The system MUST create a conflict when two applicable parameter assertions cannot be mechanically reconciled.
Examples:
organization minimum password length = 15; customer minimum = 24: may be proposed as 24 if policy permits but still retains both sources;
organization session timeout = 15 minutes; customer says “no idle timeout”: semantic conflict requiring authority review;
one requirement says 90 days, another says quarterly: potentially equivalent but SHOULD require normalization/decision rather than blind numeric comparison.
7. Asset, Product, System, and Component Graph
7.1 Product Family
A Product Family is a stable reusable product identity independent of any single program.
7.2 Product Baseline Version
A Product Baseline Version is an immutable published claim about a standard product configuration at a point in time.
It MAY include:
system templates/boundaries;
expected components and versions/ranges;
consumed organization services;
capabilities;
implementation assertions;
candidate RAPs;
evidence references;
baseline assessment results;
known unknowns/completeness metadata.
Publication does not imply complete assurance. Completeness is separately represented.
7.3 System Template and System Instance
A System Template belongs to a product baseline and represents a reusable standard system boundary/model.
A System Instance belongs to a concrete program/delivery/assessment context and may be:
instantiated from a System Template;
created as a variant;
created without a reusable baseline;
imported from legacy content.
7.4 Component identity
A component in a program/system MUST distinguish:
canonical component identity, if known;
product baseline component reference, if inherited;
program/system instance configuration;
local candidate identity when canonicalization has not occurred.
A program-local component can participate fully in assurance before being promoted to the organization catalog.
7.5 Unknown placeholders
Unknown architecture MUST be explicit.
An Unknown placeholder MUST include:
unknown kind;
parent system/context;
why the information is expected/required;
owner or unresolved routing state;
target date if applicable;
source that revealed the unknown;
resolution status.
Removing an Unknown placeholder requires either replacing it with known facts or an authorized decision that the information is not required/applicable.
8. Implementation Assertions and Shared Responsibility
8.1 Definition
An Implementation Assertion states how a subject contributes to an obligation under explicit conditions.
Minimum fields:
provider subject (asset/capability/system/process);
obligation target(s): requirement/control/control-part/objective as appropriate;
implementation statement;
implementation status;
applicability conditions;
provider responsibilities;
consumer/local responsibilities, if shared;
source owner and approval state;
version/effective interval;
related evidence and assessment results.
8.2 Assertion is not determination
An Implementation Assertion is a claim about implementation. It MAY be supported by assessment results, but the existence of the assertion does not itself mean the corresponding objective is Satisfied.
8.3 Granularity
Assertions SHOULD map to the smallest meaningful obligation portion when a control contains multiple materially independent responsibilities.
Overly broad assertions such as “Enterprise IAM satisfies AC-2” SHOULD be rejected or decomposed when actual responsibility is split across provider and consumer.
8.4 Shared responsibility
A shared implementation MUST make the division explicit.
Example:
Enterprise IAM provider responsibilities
authenticates enterprise identities;
enforces centrally configured credential policy;
disables identities when authoritative HR termination is received.
Consumer system responsibilities
maps enterprise identities to application roles;
approves privileged role assignments;
removes local entitlements no longer required;
retains local access-review evidence.
The consumer may inherit provider assurance for the first set while still receiving assessment tasks for the residual responsibilities.
9. Reusable Assurance Packages
9.1 Purpose
A Reusable Assurance Package (RAP) is the governed unit through which a provider offers reusable assurance to downstream consumers. It prevents consumers from having to reason about dozens of disconnected implementation assertions, evidence objects, determinations, and validity rules.
Canonical question answered by a RAP “What assurance does this provider offer me, under what conditions, based on what assessment, and what responsibilities still remain mine?”
9.2 RAP identity and versioning
A RAP has stable identity plus immutable published versions.
Example:
RAP family: Enterprise IAM Assurance
RAP version: Enterprise IAM Assurance v4.2
Consumers pin the version they relied upon.
9.3 Required RAP content
Area
 | Required semantics
 | 
Provider
 | Canonical asset/capability/service that owns the assurance
 | 
Owner / authority
 | Organization unit and publishing authority
 | 
Version
 | Immutable package version
 | 
Supported obligations
 | Controls/requirements/objectives or portions supported
 | 
Implementation assertions
 | Approved provider implementation claims
 | 
Provider responsibilities
 | What the provider is accountable for
 | 
Consumer responsibilities
 | Residual work every consumer must perform or confirm
 | 
Applicability rule
 | Facts that must be true for a consumer to rely on the package
 | 
Assessment basis
 | Approved assessment result(s)/snapshot(s) supporting the package
 | 
Evidence basis
 | Evidence references and visibility/reuse rules
 | 
Validity
 | Time/event/change conditions that trigger review or expiration
 | 
Attestation policy
 | Whether consumers must confirm configuration/use
 | 
Visibility
 | Which metadata/results/evidence consumers may see
 | 
Publication status
 | Draft, under review, published, superseded, retired
 | 

9.4 RAP does not equal blanket control satisfaction
A RAP MAY resolve only part of a control or objective set. The package MUST express supported portions and consumer residual responsibilities.
9.5 RAP consumption record
When a consumer relies on a RAP, the system MUST create a RAPConsumption record containing:
consumer scope/subject;
RAP version;
consumer facts used to evaluate applicability;
evaluation result;
attestation/approval if required;
effective date;
residual tasks generated;
snapshot reference for formal assessments/program milestones;
later impact/invalidation status.
The system MUST NOT represent RAP use by copying package contents into the consumer scope.
9.6 Restricted evidence
A RAP can be consumable even when supporting evidence is not directly visible to the consumer, provided policy allows reuse of the approved determination. The consumer view MUST distinguish:
result is reusable;
evidence exists and was reviewed by authority;
evidence access is restricted;
consumer has no direct evidence entitlement.
10. Applicability Rule Model
10.1 Applicability is a predicate
Applicability is modeled as a structured predicate evaluated against facts about a candidate consumer or scope.
An applicability rule MUST NOT be stored only as prose if it drives automated inheritance or suppression of assessment work.
10.2 Fact model
Candidate facts may include:
organization ancestry;
asset type;
product family/baseline;
component identity/version;
system classification/categorization;
environment;
customer/mission;
configuration values;
consumed service/capability;
boundary relationship;
cryptographic mode;
location/site;
effective date;
explicit human attestation.
Facts MUST preserve source and freshness.
10.3 Predicate operators
The rule model SHOULD support:
equals / not equals;
one-of / none-of;
exists / absent;
greater-than / less-than for normalized values;
version range;
organizational descendant-of;
consumes / does-not-consume relationship;
all / any / not logical composition;
date/time interval;
explicit approved attestation;
human-review-required predicate for non-computable conditions.
10.4 Applicability result
Applicability evaluation returns more than Boolean.
Result
 | Meaning
 | 
Applicable
 | Required facts are known and predicate is true
 | 
Not Applicable
 | Required facts are known and predicate is false
 | 
Unknown
 | Required facts are missing/ambiguous
 | 
Conflict
 | Required facts disagree across sources
 | 
Review Required
 | Rule explicitly requires human judgment or policy decision
 | 

Only Applicable may proceed to automatic inheritance. Unknown, Conflict, and Review Required create work.
10.5 Rule provenance
Every rule MUST identify owner, version, scope, effective interval, and source rationale.
11. Inheritance Resolution Engine
11.1 Inheritance is derived state
“Inherited” is not a free-form user assertion. It is the result of evaluating a reusable source against a consumer context.
The resolver MUST consider:
1. source publication status and version;
2. consumer eligibility/scope;
3. applicability rule result;
4. provider assessment/result status;
5. evidence/result validity rules;
6. known changes after assessment/package publication;
7. visibility/reuse permissions;
8. consumer residual responsibilities;
9. conflicting local or authoritative facts;
10. assessment snapshot/time context.
11.2 Resolution output
For each obligation/objective supported by a reusable source, the resolver SHOULD produce one of:
Resolution
 | Meaning / action
 | 
Resolved by inheritance
 | Current provider result applies; no redundant substantive local task
 | 
Resolved with attestation
 | Provider result applies if consumer confirms declared condition
 | 
Partially resolved
 | Provider portion inherited; residual local responsibilities generate tasks
 | 
Reassessment required
 | Prior provider result/package is impacted, stale, expired, or changed
 | 
Applicability unknown
 | Required consumer facts missing; create discovery/applicability work
 | 
Conflict
 | Consumer/source facts or applicable sources disagree; adjudication required
 | 
Not reusable
 | Package/result is valid for provider but policy/scope prevents reuse here
 | 
Not applicable
 | Reusable source does not apply to this consumer
 | 

11.3 Recommended resolution sequence
The logical order is normative even if implementation is optimized:
1. Identify candidate reusable sources by obligation and consumer relationships.
2. Filter to published/eligible source versions.
3. Evaluate consumer visibility and reuse permission.
4. Evaluate structured applicability predicates.
5. Evaluate provider result/package validity.
6. Compare consumer facts against provider assumptions/snapshot.
7. Detect local overrides/conflicts/changes.
8. Resolve supported provider responsibilities.
9. Generate residual local responsibilities/tasks.
10. Persist a traceable resolution record or cache derived result with dependency references.
11.4 Multiple candidate sources
If multiple packages or inherited sources cover the same objective:
the system MAY combine complementary partial responsibilities;
the system MUST NOT double-count the same responsibility as stronger assurance merely because multiple sources claim it;
conflicting claims MUST create a conflict;
source priority MAY choose a preferred package only if governance has explicitly configured that policy;
the final provenance view MUST show all sources materially involved in the resolution.
11.5 Local work superseding inheritance
A local determination MAY supersede an inherited result for that consumer/snapshot without altering the provider result.
Examples:
local implementation differs from the provider assumptions;
customer requirement strengthens the obligation;
local test demonstrates a provider result is not applicable to the consumer configuration.
The local result MUST preserve the inherited source relationship and the reason inheritance was replaced or narrowed.

Part III - Assessment Semantics
12. Assessment Content and Execution Model
12.1 Canonical layers
Assessment semantics MUST preserve these layers:
Layer
 | Purpose
 | 
Control / Requirement
 | Obligation to be satisfied
 | 
Assessment Objective
 | Canonical determination target
 | 
Assessment Template
 | Organization-approved way to gather sufficient information for an objective
 | 
Assessment Task
 | Concrete execution work in a specific assessment
 | 
Response
 | Contributor-provided information
 | 
Observation
 | Structured fact/result accepted or recorded during assessment
 | 
Evidence
 | Supporting artifact/result with provenance
 | 
Determination
 | Authorized conclusion for an objective at a scope/snapshot/time
 | 
Finding
 | Gap/issue requiring disposition
 | 

No implementation MAY collapse Response and Determination into the same record/state.
12.2 Assessment Template
A Template is reusable organization knowledge that maps canonical assessment objectives to practical steps.
A template version MAY define:
objective mapping;
task sequence;
assessment methods;
plain-language wording;
expected response/evidence types;
default package/routing rule;
branching/dependency logic;
preconditions;
reusable evidence patterns;
reviewer guidance;
supersession/reassessment triggers.
Published templates MUST be versioned. Updating template wording MUST NOT rewrite prior assessment tasks.
12.3 Assessment Campaign
An Assessment or Assessment Campaign defines a bounded execution context.
Minimum fields:
assessment identity;
target scope/subjects;
effective obligation/profile basis;
objective set;
assessment lead;
reviewer/authority model;
planned dates/milestone;
inheritance policy;
snapshot policy;
lifecycle state;
source template/profile versions.
12.4 Objective Resolution
Before tasks are instantiated, every objective MUST be evaluated against reusable assurance.
Objectives resolved by current inheritance should not generate redundant substantive tasks. Objectives with residual consumer responsibilities generate only those residual tasks.
12.5 Assignment Package
An Assignment Package groups tasks for operational delegation while retaining objective lineage.
Package grouping MAY use:
organizational unit;
asset/shared-service owner;
system/component owner;
functional routing rule;
task method/type;
due date/milestone.
A package owner remains accountable for package completion even after delegating tasks unless the package itself is reassigned.
12.6 Task
Each Assessment Task MUST include:
source assessment;
supported objective(s);
task type/method;
assignee and package owner;
due date where used;
target subject/context;
prompt/action;
expected response/evidence shape;
lifecycle state;
dependency/branching references;
reviewer or review route.
12.7 Response
A Response records what the contributor provided.
A Response MUST preserve:
contributor identity;
submission time;
original answer/content;
evidence links/attachments;
response version/edits;
delegation/reassignment lineage;
source task.
A Response MAY be marked complete by the contributor while still being insufficient for reviewer determination.
12.8 Observation
An Observation is a structured fact or result recorded during assessment.
Examples:
configuration value observed;
documented procedure exists;
test passed/failed;
interview statement;
discrepancy between PLM and delivered hardware;
evidence item verified.
An Observation SHOULD identify method, subject, time, actor/tool, source evidence, and any relevant confidence/limitations.
12.9 Determination
A Determination is the authoritative assessment conclusion for one objective in one assessment context.
Required fields:
objective;
assessed subject/scope;
assessment snapshot;
outcome;
reviewer identity/authority;
rationale;
supporting responses/observations/evidence;
determination time;
validity/reassessment conditions where applicable.
12.10 Determination outcomes
Internal workflow may contain many states, but final outcome semantics SHOULD include at least:
Satisfied;
Other Than Satisfied;
Not Applicable, when the organization's process permits an authorized N/A outcome;
No Determination / Insufficient Information for incomplete work, which is operationally distinct from a final negative outcome.
12.11 Finding generation
An Other Than Satisfied determination SHOULD normally produce or link to at least one Finding unless organizational policy explicitly permits a documented no-finding disposition.
Insufficient Information MAY create a discovery/evidence work item without immediately creating a formal Finding.
13. Assessment Snapshots
13.1 Why snapshots are required
An assessment can take days or months while the underlying environment changes. A determination is meaningless unless the platform can reconstruct what was assessed.
An AssessmentSnapshot freezes the relevant semantic context without necessarily copying every underlying object.
13.2 Snapshot content
A snapshot SHOULD pin or materialize references to:
assessment target subjects and boundaries;
effective control/profile/requirement versions;
product/system baseline versions;
system/component/configuration facts used by applicability;
RAP versions and consumption records;
inherited assessment result versions;
relevant evidence versions/references;
organization policy/profile versions;
customer requirement versions;
open conflicts/unknowns material to the assessment;
scope and ownership references;
time/effective date.
13.3 Snapshot timing
The platform SHOULD support at least:
planning snapshot: basis when assessment is launched;
determination snapshot: basis when reviewer makes a determination;
final assessment snapshot: consolidated basis for published results.
A lightweight MVP MAY use one final snapshot if all relevant changes during execution are audited and surfaced to reviewers.
13.4 Snapshot change handling
If a material underlying fact changes during an active assessment:
1. record the change event;
2. identify affected objectives/tasks/determinations;
3. flag the assessment snapshot as having a material delta;
4. require reviewer choice to adopt the new fact, retain old assessment basis, or split/reassess as appropriate;
5. preserve both histories.
The system MUST NOT silently mutate an active assessment's basis.
14. Evidence Trust, Visibility, and Reuse
14.1 Evidence record
Evidence is a structured record referencing an artifact or machine result. Required metadata SHOULD include:
stable evidence identity;
artifact/source location or embedded content reference;
evidence type;
subject(s);
producer/collector;
created/observed time;
integrity metadata where applicable;
source system;
supported assertions/objectives/observations;
validity/freshness policy;
applicability conditions;
visibility/marking;
review state;
supersession/revocation state.
14.2 Evidence trust dimensions
The system SHOULD model trust using independent dimensions rather than a single score.
Dimension
 | Examples
 | 
Source authority
 | Authoritative system, approved procedure owner, manual upload
 | 
Collection method
 | Machine-generated, assessor-observed, contributor-submitted
 | 
Integrity
 | Hash/signature available, source-controlled artifact, unverifiable attachment
 | 
Freshness
 | Current, expiring, expired, timeless subject to change triggers
 | 
Applicability
 | Exact assessed version/config, broader scope with conditions, unknown
 | 
Review
 | Unreviewed, accepted as input, assessor-validated
 | 
Visibility
 | Open to consumer, metadata-only, restricted evidence
 | 

14.3 Evidence freshness
Freshness MAY be time-based, event-based, or both.
Examples:
policy: valid until superseded or annual review date;
penetration test: valid until defined architecture/configuration change or expiration;
FIPS certificate: valid according to external status/version;
build test: valid only for exact build/component version;
organization process interview: requires periodic reassessment.
14.4 Evidence revocation
Evidence can be revoked or invalidated without deleting historical use.
Revocation MUST:
preserve the artifact and prior assessment lineage;
mark current reuse unavailable;
trigger impact analysis for consumers relying on it;
create reassessment/refresh work where policy requires.
14.5 Evidence access versus assurance access
The platform MUST support cases where:
consumer can see the full evidence;
consumer can see evidence metadata but not content;
consumer can only see an approved determination/package statement;
evidence is restricted to assessor/provider authority.
Lack of direct evidence visibility does not necessarily invalidate inheritance if governance permits reliance on the approved provider determination.
15. Conflict Detection and Reconciliation
15.1 Conflict is first-class
A Conflict records incompatible assertions that materially affect assurance, applicability, configuration, ownership, or requirements.
Conflict types include:
source data conflict;
parameter/requirement conflict;
ownership conflict;
applicability conflict;
implementation conflict;
assessment-result conflict;
version/configuration conflict.
15.2 Conflict lifecycle
State
 | Meaning
 | 
Detected
 | Incompatible assertions identified
 | 
Triaged
 | Responsible authority identified and materiality assessed
 | 
Under Review
 | Resolution work active
 | 
Resolved
 | Authoritative decision/current fact established with rationale
 | 
Accepted Ambiguity
 | Authority permits unresolved ambiguity for a bounded period/scope
 | 
Superseded
 | Conflict resolved by later authoritative information/version
 | 

15.3 Conflict resolution record
Resolution MUST preserve:
all conflicting source assertions;
decision authority;
selected/derived effective fact;
rationale;
scope;
effective date;
impacted objects/work;
whether source-system correction is required.
15.4 Conflict blocking semantics
A conflict SHOULD block automatic inheritance or final determination only when it is material to the relevant applicability/assessment decision.
Non-material conflicts remain visible but need not halt unrelated work.
15.5 No destructive reconciliation
Resolving a conflict does not delete or rewrite the original assertions. It adds an authoritative resolution and may mark older assertions superseded or incorrect for current use.
16. Change Events, Impact Analysis, and Invalidation
16.1 ChangeEvent
A ChangeEvent represents a material change or newly discovered change in a dependency that may alter assurance state.
Examples:
component version changed;
system boundary changed;
customer requirement changed;
policy/RAP/profile new version published;
evidence expired/revoked;
provider implementation changed;
source conflict resolved;
organizational ownership moved;
assessment determination superseded.
16.2 Change is not failure
A ChangeEvent does not directly set a control/objective to failed. It initiates impact evaluation.
16.3 Dependency traversal
Impact analysis SHOULD traverse explicit dependency edges from changed nodes to:
applicability facts/rules;
Implementation Assertions;
RAP versions/consumptions;
Evidence;
Assessment Determinations;
Requirements/Controls/Objectives;
Product/system baselines;
active Programs;
Findings/POA&M where relevant;
milestones/work items.
16.4 Impact result
Impact state
 | Meaning
 | 
No Known Impact
 | No documented dependency invalidated; event retained
 | 
Review Required
 | Dependency exists but rule cannot safely decide impact
 | 
Applicability Changed
 | Source/consumer rule may now evaluate differently
 | 
Assertion Impacted
 | Implementation claim assumptions changed
 | 
Evidence Impacted
 | Evidence may not support changed context
 | 
Determination Impacted
 | Prior objective result no longer safely reusable
 | 
RAP Consumption Impacted
 | Consumer package reliance requires attestation/review/reassessment
 | 
New Obligation
 | Change introduces new applicable requirement/control/objective
 | 

16.5 Invalidation versus impact
Impacted means review is required. Invalidated means a known rule or approved decision concludes the prior item is not valid for current reuse.
The system SHOULD avoid invalidating when the effect is uncertain; uncertainty becomes Review Required.
16.6 Cascading side effects
When a dependency becomes invalidated:
current derived inheritance may change;
affected assessment objectives move to Impacted / Reassessment Required;
redundant local tasks may become active again;
dashboards/work queues update;
historical determinations remain unchanged within their original snapshots.

Part IV - Governance and Lifecycle Semantics
17. Findings, Remediation, Risk, and POA&M
17.1 Finding
A Finding represents an identified assurance gap, deficiency, inconsistency, or material issue requiring disposition.
A Finding MUST preserve source and affected scope.
Minimum fields:
description;
source assessment/observation/determination or manual authority source;
affected subjects/scopes;
related obligations/objectives;
owner;
state;
severity/priority if used;
due/target date if used;
evidence/observations;
disposition.
17.2 Finding is not Risk
A Finding answers what gap was observed. Risk answers what adverse outcome/exposure may result and how it will be treated.
The relationship is many-to-many.
17.3 Remediation Initiative
A Remediation Initiative groups work addressing one or more Findings through common root cause or implementation change.
It MUST NOT erase finding-specific scope or closure requirements.
17.4 POA&M
A POA&M Item is a formal system/program-tracked remediation record where required by the authorization/governance process.
A Finding MAY exist without a POA&M Item. A POA&M Item MUST preserve source finding/risk lineage when created from them.
17.5 Closure
Finding closure requires a disposition and, where applicable, validation.
Possible dispositions include:
remediated and validated;
accepted risk/deviation with authority;
false positive/invalid finding with rationale;
not applicable after authorized reassessment;
merged/superseded into another finding.
Closing a Finding MUST NOT automatically close associated Risk or POA&M objects unless their own rules are satisfied.
18. Promotion, Deduplication, and Canonicalization
18.1 Local-first creation
Objects created inside an Assessment, System, Product, or Program MAY remain local and usable immediately.
Local-first objects include:
assets/components;
policy/procedure records;
requirements;
Implementation Assertions;
evidence patterns;
Assessment Templates;
RAP candidates.
18.2 Promotion Request
A Promotion Request proposes broader reusable scope.
Required semantics:
source local object/version;
proposed destination scope;
destination owner;
duplicate/candidate matches;
proposed canonical identity/new version;
applicability justification;
supporting evidence/usage;
reviewer/approval state.
18.3 Deduplication
Deduplication MUST distinguish:
exact duplicate identity;
same canonical asset, new version;
similar asset but distinct configuration/owner;
potentially equivalent requirement/template;
no match.
The system SHOULD suggest candidates but MUST NOT automatically merge high-impact assurance objects without governed policy.
18.4 Canonicalization outcomes
Outcome
 | Meaning
 | 
Link to existing
 | Local object was a reference to already-canonical object
 | 
Merge metadata
 | Non-conflicting metadata incorporated into canonical object/new revision
 | 
Publish new version
 | Local change materially changes existing reusable object
 | 
Create new canonical
 | Distinct reusable object approved
 | 
Keep local
 | Object not reusable outside source scope
 | 
Reject
 | Proposal invalid/duplicate/not authorized
 | 

18.5 Historical lineage
Promotion MUST NOT change the identity/version referenced by past assessments. A historical local object MAY record that it later became linked to a canonical object, but the original historical reference remains reconstructable.
19. Versioning, Temporal Semantics, and Historical Reconstruction
19.1 Versioned object classes
At minimum, the following SHOULD be versioned when published/reused:
Profiles/Baselines;
Product/System Baselines;
Assessment Templates;
Reusable Assurance Packages;
policies/procedures when represented as governed assurance objects;
significant Implementation Assertions;
canonical components/configuration definitions where version matters.
19.2 Immutable published versions
Published versions MUST NOT be edited in place. Corrections create a new version/revision or an explicit erratum mechanism that preserves prior content.
19.3 Effective time
Objects may have:
created time;
published time;
effective-from time;
effective-to/superseded time;
observed time;
assessment time.
These are distinct.
19.4 Bi-temporal need
The persistence design SHOULD support the conceptual distinction between:
valid time: when a fact was true in the real world;
system time: when the platform learned/recorded the fact.
Full bi-temporal storage is an engineering choice, but the domain MUST preserve enough temporal metadata to answer: “What did we know then, and what was actually true then?” for material assurance decisions.
19.5 Historical reconstruction
The system MUST be able to reconstruct:
effective obligations for a program/assessment at a historical milestone;
pinned baselines/RAP versions;
component/configuration facts used;
evidence/result versions;
decision/approval lineage;
open conflicts/unknowns known at the time;
assessment determination and snapshot.
20. Permissions, Markings, and Cross-Scope Visibility
20.1 Permission dimensions
Authorization SHOULD consider:
user/service identity;
role/capability;
organization scope;
program membership;
object ownership;
assessment role;
information marking/classification;
action type;
provider/consumer relationship.
20.2 Object permission versus field/content visibility
Some objects require partial visibility.
Example RAP consumer may be allowed to see:
package existence/name/version;
supported obligations;
determination status/date;
provider/consumer responsibilities;
but not:
restricted evidence contents;
assessor notes;
provider-sensitive configuration details.
20.3 Metadata-level inheritance
The platform MUST support inheritance of approved assurance metadata/result when underlying evidence remains restricted, if policy allows.
20.4 Promotion security check
Promotion to broader scope MUST evaluate whether any embedded data is more restricted than the destination scope. The system SHOULD support promoting sanitized metadata or a reusable assertion without copying restricted evidence.
20.5 Search leakage
Search, counts, notifications, and relationship graphs MUST respect visibility rules. A user SHOULD NOT infer sensitive program/assets merely from hidden-object counts or autocomplete results unless policy permits.
21. State Machines and Transition Rules
21.1 Assessment lifecycle
State
 | Allowed next states
 | Key gate
 | 
Draft
 | Planned, Cancelled
 | Scope/owner exists
 | 
Planned
 | Active, Cancelled
 | Objective set and assessment authority configured
 | 
Active
 | Paused, Completing, Cancelled
 | Work executing
 | 
Paused
 | Active, Cancelled
 | Authorized resume
 | 
Completing
 | Published, Active
 | Reviewer resolves required pending items or documents exceptions
 | 
Published
 | Superseded
 | Results immutable; later changes create new/reassessment campaign
 | 
Cancelled
 | None
 | History retained
 | 
Superseded
 | None
 | Replacement assessment/result identified
 | 

21.2 Assessment objective lifecycle
Operational state is derived from tasks, inheritance, and determination.
State
 | Entry condition
 | Exit trigger
 | 
Planned
 | Objective in assessment snapshot; not resolved
 | Inheritance/task resolution
 | 
Inherited Current
 | Applicable reusable determination resolves objective
 | Impact/change/local override
 | 
Attestation Required
 | Inheritance contingent on consumer confirmation
 | Attestation accepted/rejected
 | 
Awaiting Response
 | Active tasks outstanding
 | Required inputs submitted
 | 
Ready for Review
 | Inputs sufficient to enter reviewer queue
 | Reviewer action
 | 
Insufficient Information
 | Reviewer cannot determine
 | New inputs submitted
 | 
Satisfied
 | Authorized determination
 | Material change creates impacted state for current reuse
 | 
Other Than Satisfied
 | Authorized negative determination
 | Reassessment creates new determination; original retained
 | 
Not Applicable
 | Authorized applicability determination
 | Scope/facts change
 | 
Impacted / Reassessment Required
 | Current reusable result no longer safe
 | New review/determination
 | 

21.3 Assessment task lifecycle
New -> Packaged -> Assigned -> In Progress/Delegated -> Submitted -> Clarification Requested or Accepted as Input -> Closed
Rules:
Delegation does not remove package accountability.
Clarification returns task to active contributor state while preserving prior response versions.
Accepted as Input does not imply objective satisfaction.
21.4 RAP lifecycle
State
 | Meaning
 | 
Draft
 | Provider assembling assertions/evidence/results
 | 
Under Review
 | Governance/assessment review active
 | 
Published
 | Available to eligible consumers
 | 
Impacted
 | Material provider change requires package review; policy determines continued reuse
 | 
Superseded
 | New published version replaces default future use
 | 
Retired
 | Not available for new consumption; history retained
 | 

A Published RAP version is immutable.
21.5 RAP Consumption lifecycle
Possible states:
Candidate;
Applicable;
Attestation Required;
Active;
Partially Active;
Impacted;
Reassessment Required;
Not Applicable;
Conflict;
Ended/Superseded.
21.6 Evidence lifecycle
Candidate/Unreviewed -> Accepted/Validated -> Current -> Expiring -> Expired with possible Revoked or Impacted from any current state as policy permits.
21.7 Finding lifecycle
Open -> Triaged -> Remediation Planned -> In Remediation -> Ready for Validation -> Closed, with configured alternatives Accepted/Deferred, False Positive, Merged/Superseded.
Risk acceptance must be a separate authority record when used.
21.8 Promotion lifecycle
Local -> Submitted -> Duplicate Review -> Scope/Applicability Review -> Approved -> Published or Rejected/Kept Local.
21.9 Asset lifecycle
Local/Candidate -> Under Review -> Canonical/Active -> Superseded -> Retired
Rules: a local/candidate asset is immediately usable within its creating scope (18.1). Canonicalization occurs only through the promotion lifecycle (21.8). Superseding or retiring an asset MUST NOT break historical references (INV-002), and retired human-readable keys MUST NOT be reused where ambiguity could result (C.1). This lifecycle matches the Asset status vocabulary in the UX Specification, Appendix C.

Part V - Platform Rule Services and Derived State
22. Audit Ledger and Domain Events
22.1 Audit versus domain event
The platform SHOULD distinguish:
Audit record: who changed what and when;
Domain event: meaningful business event that can trigger downstream rules.
Not every field edit needs to become a domain event, but every domain event should be auditable.
22.2 Material domain events
Examples:
OrganizationUnitCreated/Changed;
AssetCanonicalized;
ProductBaselinePublished;
ProfilePublished;
RAPPublished;
RAPImpacted;
RAPConsumed;
ComponentVersionChanged;
RequirementAdded/Changed;
CustomerOverrideApproved;
AssessmentStarted;
AssessmentSnapshotCreated;
ResponseSubmitted;
EvidenceAccepted/Expired/Revoked;
DeterminationRecorded;
FindingCreated/Closed;
RiskAccepted;
POAMItemCreated/Closed;
PromotionApproved;
SourceConflictDetected/Resolved.
22.3 Idempotency
Integrations and event handlers MUST be designed so replaying the same source event does not create duplicate canonical objects, duplicate findings, or repeated invalidation work.
22.4 Event causality
Material derived changes SHOULD preserve causal linkage.
Example:
ComponentVersionChanged -> RAPConsumptionImpacted -> ObjectiveReassessmentRequired -> WorkItemCreated
The UI should be able to explain that chain.
23. Derived Views and Calculation Semantics
23.1 Derived state principle
Dashboards SHOULD favor derived state over stored aggregates where consistency matters. Cached/indexed projections MAY be used for performance but MUST be rebuildable from canonical events/data.
23.2 System definition completeness
System completeness MUST NOT be presented as security satisfaction.
If implemented, completeness may include independent dimensions:
boundary defined;
required owners assigned;
expected component slots resolved;
component versions known;
interfaces/dependencies known;
obligations allocated;
implementation mapping coverage;
evidence mapping coverage.
The calculation definition MUST be transparent and SHOULD avoid a single deceptive percentage when dimensions differ materially.
23.3 Assessment state rollup
Rollups count objective states within a defined snapshot/scope. The denominator MUST be explicit.
Examples:
objectives in scope;
objectives resolved by current inheritance;
objectives satisfied by local determination;
other-than-satisfied;
insufficient information;
not assessed;
impacted/reassessment required.
“Not Applicable” SHOULD be displayed separately rather than silently removed from denominator unless the report definition explicitly says otherwise.
23.4 No synthetic security score
The core system MUST NOT reduce heterogeneous findings/objectives/unknowns into an opaque “X% secure” score.
23.5 Readiness
Program readiness MAY be expressed using explicit blocking conditions such as:
unresolved critical applicability decisions;
required assessment objectives without final determination;
open findings designated release/authorization blockers;
overdue POA&M milestones;
system definition unknowns that block assessment;
impacted inherited assurance awaiting review.
Readiness rules must be organization-configurable and explainable.
23.6 SCTM as a derived view
The Security Controls Traceability Matrix (SCTM) is a derived view over the canonical graph, not an independently edited artifact. For a declared scope and snapshot, the SCTM MUST be renderable per effective obligation with: the source/provenance stack; allocation to systems/components; implementation assertions and provider/consumer responsibilities where shared; supporting evidence references and their visibility state; assessment objective states and determinations; related findings, risks, and POA&M items; and open Unknowns and Conflicts.
Every SCTM cell MUST be traceable to canonical objects and rules (INV-023) and reproducible against the snapshot used to generate it (INV-002). An exported SCTM MUST identify its generation time and snapshot basis. Editing an exported SCTM does not change assurance truth; corrections flow through the canonical objects and rules.
24. Domain Service Contracts
These are logical domain services. Physical service boundaries are an engineering architecture decision.
24.1 Scope Resolver
Input: user/action, target object, requested operation.
Output: effective scope, ownership, authorization context, inheritance ancestors/consumers as needed.
Must not conflate org ancestry with system composition.
24.2 Obligation Resolver
Input: scope/program/system + effective time/snapshot.
Output: effective controls/requirements/parameters with full provenance and conflicts.
24.3 Applicability Evaluator
Input: rule version + candidate consumer facts.
Output: Applicable, Not Applicable, Unknown, Conflict, or Review Required; facts used; facts missing; source versions.
24.4 Assurance Inheritance Resolver
Input: consumer subject/scope, obligation/objective set, time/snapshot.
Output: candidate provider sources, RAP consumptions, resolved responsibilities, residual responsibilities, inheritance state, explanation graph.
24.5 Assessment Planner
Input: assessment scope, objective set, snapshot policy, available reusable assurance, template versions.
Output: objective-resolution plan, assignment-package candidates, tasks, inheritance/attestation work, unresolved applicability items.
24.6 Assessment Reviewer Service
Input: objective, responses, observations, evidence, inherited results, snapshot, reviewer authority.
Output: reviewer workspace; accepted input records; final determination when authorized; finding creation linkage.
The service MUST NOT auto-determine solely from contributor answers.
24.7 Evidence Evaluator
Input: evidence + candidate assertion/objective/consumer/snapshot.
Output: current/applicable status, visibility, freshness, trust metadata, review requirements.
24.8 Change Impact Engine
Input: ChangeEvent.
Output: affected graph nodes, impact classification, required review/reassessment/work, causal explanation.
24.9 Conflict Service
Input: incompatible assertions/facts/requirements.
Output: conflict record, materiality, responsible authority, blocked dependent decisions, resolution lineage.
24.10 Promotion Service
Input: local object/version + proposed destination scope.
Output: duplicate candidates, required destination owner/review, promotion state, published canonical identity/version if approved.
24.11 Snapshot Service
Input: assessment/program milestone + requested snapshot policy.
Output: immutable snapshot manifest of pinned versions/facts/relationships required for historical reconstruction.
24.12 Explainability Service
Every major derived state SHOULD support a consistent “Why?” contract that returns:
direct sources;
rule version(s);
facts used;
decisions/approvals;
inheritance/provider chain;
conflicts/unknowns;
current blockers;
causal change event where relevant.
25. Worked Scenarios
25.1 Enterprise IAM inherited by Nightwing
Provider state
Enterprise IAM publishes RAP v4.2. It supports defined IA/AC objective portions. The package states that Enterprise IAM authenticates enterprise identities and manages credential lifecycle, while consumer systems remain responsible for role assignment and privileged-access review.
Applicability rule
Consumer must:
consume Enterprise IAM production service;
use approved protocol/configuration;
not bypass IAM with local password authentication;
fall within declared organization/program reuse policy.
Nightwing facts
Nightwing System A consumes Enterprise IAM using approved configuration. Facts are current and source-linked.
Resolution
provider objectives -> Resolved by inheritance;
privileged role assignment -> residual local task;
quarterly local entitlement review -> residual local task;
evidence backing Enterprise IAM assessment -> metadata visible, detailed content restricted.
Result
Nightwing does not re-ask Enterprise IAM how identities are authenticated. It assesses only local responsibilities and any customer-specific strengthening requirements.
25.2 Customer password requirement
Organization profile defines password minimum length 15. Customer requirement CR-118 requires minimum 24 for Nightwing.
The system stores both assertions and maps CR-118 as a strengthening requirement. Program Security approves effective parameter 24 for the relevant systems.
The effective value is derived. The organization baseline remains 15. Other programs are unaffected.
If one Nightwing system inherits Enterprise IAM and Enterprise IAM is configured at 15 globally, the system detects that the consumer cannot satisfy the 24-character customer requirement through the inherited provider configuration. The inherited implementation is therefore insufficient for the strengthened obligation even if it remains valid for the organization baseline. A local/provider change or exception decision is required.
25.3 Secure Boot product variant
Falcon v6 baseline uses TPM Y, Bootloader 4.2, Signing Service v3, and Secure Boot RAP v4.
Nightwing variant changes TPM Y to TPM Z.
Change Impact Engine traverses:
TPM component -> Secure Boot implementation assertion -> RAP applicability condition -> inherited evidence -> assessment objectives
The rule says TPM Y or approved equivalent list is required. TPM Z is not yet on the approved list.
Result:
RAPConsumption becomes Review Required/Impacted;
three objectives move to Reassessment Required;
evidence tied to TPM Y becomes impacted for Nightwing;
unaffected secure-boot objectives remain inherited;
a task is assigned to the secure-boot owner to validate TPM Z and update package/baseline if reusable.
The system does not mark all Secure Boot controls failed.
25.4 New system with incomplete architecture
Nightwing creates Tactical Management Controller with no reusable baseline.
Known facts:
system owner assigned;
network interface expected;
processor/SoC unknown;
bootloader unknown;
Enterprise IAM usage undecided.
The system creates Unknown placeholders and discovery tasks. Applicability for authentication objectives returns Unknown because the authentication architecture is not known.
No objectives are silently marked Not Applicable. Assessment Planner waits or generates the minimum discovery/applicability tasks necessary before creating substantive authentication tasks.
An engineer identifies AMD XYZ as the SoC. It is created as program-local Asset and used immediately. Later, a Promotion Request proposes it for canonical Asset Catalog inclusion.
25.5 Organization-first ad hoc assessment creates reusable knowledge
Enterprise PKI team launches an assessment of the Firmware Signing service.
During assessment:
policy/procedure links are captured;
service/component assets are canonicalized;
implementation assertions are reviewed;
assessment objectives are determined;
evidence is validated;
two findings are remediated.
After successful reassessment, the team publishes Firmware Signing RAP v1.0.
Future products that consume the service under declared conditions can resolve provider-side objectives by inheritance while retaining local signing-key/request responsibilities.
25.6 Source conflict during assessment
A program baseline says Bootloader 4.2. CI/build metadata says production image contains Bootloader 4.4. Engineer confirms 4.4 was deliberately adopted.
The platform creates a SourceConflict rather than silently updating the baseline.
The reviewer determines the actual assessed system is 4.4, creates/adopts the relevant change in the assessment snapshot, and routes a correction/update to product baseline owners. Any assurance depending on 4.2-specific evidence is re-evaluated.
Historical Falcon v6 baseline remains 4.2 until a new baseline/version is published.
25.7 Restricted evidence reuse
Enterprise vulnerability management assessment is supported by sensitive scan results. Organization policy permits downstream systems to inherit the approved determination but not view raw scan data.
The RAP exposes:
provider/service;
objectives supported;
assessment date/outcome;
assessor/authority;
evidence status = validated/restricted;
consumer residual responsibilities.
Nightwing can inherit the result without direct evidence access. The audit record shows that the provider assessor had access to evidence and approved reuse.
26. MVP Domain Contract and Deferred Semantics
26.1 MVP rules that MUST exist from day one
The MVP may simplify interfaces and automation, but it MUST preserve these semantic boundaries:
stable identity and scope;
organization hierarchy separate from asset/system graph;
Asset common identity with local/canonical lifecycle;
imported control/objective identity/version;
Requirement separate from Control;
Response separate from Determination;
Evidence with provenance and scope;
explicit Unknown;
published version immutability;
RAP family/version and consumer residual responsibility;
structured applicability with Unknown/Review states;
reference-based inheritance with explanation;
assessment snapshot sufficient for historical reconstruction;
Conflict first-class rather than overwrite;
Finding separate from Risk and Remediation;
promotion without historical rewrite;
audit of material changes.
26.2 MVP simplifications allowed
The MVP MAY:
support a limited applicability predicate vocabulary;
require manual creation/approval of RAPs;
use manual source authority configuration;
support one final assessment snapshot rather than multiple snapshot phases;
compute impact synchronously for small graphs;
expose restricted evidence as metadata-only without fine-grained field-level policies;
support limited product/system asset types;
use manually configured routing rules;
defer full bi-temporal database implementation while retaining required timestamps/version references;
defer automatic deduplication to suggestion/manual review;
export only the standards artifacts required for pilots.
26.3 Semantics that MUST NOT be deferred even if UI is deferred
Engineering MUST NOT choose a schema that makes the following impossible without destructive migration:
many-to-many provider/consumer responsibility;
partial inheritance;
version-pinned RAP consumption;
assessment snapshots;
multiple source assertions/conflicts;
evidence visibility separate from result visibility;
historical reconstruction;
program-local objects promoted later;
objective-level determination lineage;
change dependency traversal.
27. Acceptance and Conformance Scenarios
The domain implementation is conformant only if these scenarios can be represented without special-case side databases or destructive edits.
27.1 Identity and scope
Rename an organizational unit without changing object identity or breaking historical ownership references.
Move a team to a new parent unit without rewriting historical assessment scope.
Use one Enterprise IAM asset across three product systems owned by different units.
Create a program-local component and later link/promote it to canonical identity without rewriting past assessment references.
27.2 Obligations
Import a new NIST catalog release while retaining historical programs on their pinned source/profile versions.
Apply a customer strengthening requirement without editing source NIST control text.
Preserve organization parameter 15 and program customer parameter 24 while deriving effective 24 for the program.
Represent an unresolved parameter conflict without choosing a value.
27.3 RAP and inheritance
Publish Enterprise IAM RAP v4.2 with provider and consumer responsibilities.
Consume RAP v4.2 in Nightwing and resolve only provider-side objectives.
Require a consumer attestation before activating inheritance.
Restrict evidence visibility while allowing approved determination reuse.
Publish RAP v4.3 without silently updating Nightwing from v4.2.
Mark v4.2 impacted and identify every active consumer.
27.4 Assessment
Launch an organization-unit assessment and a program-system assessment through the same canonical assessment engine.
Resolve current inherited objectives before task generation.
Delegate an assignment package to a team, then individual tasks to SMEs.
Accept a contributor Response without producing a Determination.
Request clarification while preserving the first response.
Record a Satisfied determination against an immutable assessment snapshot.
Record Other Than Satisfied and create a Finding.
27.5 Unknown and conflict
Create a system with unknown SoC and authentication architecture and ensure no related objectives become N/A automatically.
Detect PLM = TPM Y versus program observation = TPM Z and preserve both assertions.
Resolve the source conflict with an authority decision and trigger impact analysis.
27.6 Change and invalidation
Change a component version and reopen only impacted objectives.
Expire an evidence item and identify RAP consumptions relying on it.
Change customer requirement after an assessment snapshot and require reviewer decision before changing assessment basis.
Retain historical satisfied determination even after current reuse becomes impacted.
27.7 Findings and closure
Link one Finding to multiple objectives and assets.
Group multiple Findings into one Remediation Initiative.
Create a POA&M Item for one affected system without forcing every related finding into a POA&M.
Accept risk only through explicit authority record.
Close remediation but keep assurance impacted until required reassessment succeeds.
27.8 Promotion and history
Promote a program-authored policy to an organizational unit after review.
Publish a new canonical assessment template version while old assessments retain original wording/version.
Deduplicate a local component against existing canonical identity.
Show that the next program reuses newly promoted assurance while the prior program retains its original historical references.

Appendix A. Glossary
Term
 | Definition
 | 
Applicability
 | Structured evaluation of whether an obligation, implementation, RAP, evidence item, or result applies to a candidate scope/subject.
 | 
Assessment
 | Bounded execution that evaluates objectives for declared subjects/scope/time.
 | 
Assessment Objective
 | Canonical determination target used by an assessment.
 | 
Assessment Snapshot
 | Immutable manifest of the relevant versions/facts/context that formed the basis of an assessment determination/result.
 | 
Asset
 | Common assurance-relevant subject identity: policy, procedure, service, product, system, component, process, etc.
 | 
Capability
 | Logical grouping of assets/components/processes jointly providing a reusable function; unrelated to maturity models.
 | 
Conflict
 | First-class record of materially incompatible assertions requiring adjudication.
 | 
Determination
 | Authorized assessment conclusion for one objective at a declared scope/snapshot/time.
 | 
Evidence
 | Structured record of an artifact or machine/human-produced result supporting assurance analysis.
 | 
Finding
 | Identified assurance gap/issue requiring disposition.
 | 
Implementation Assertion
 | Claim describing how a subject contributes to an obligation under explicit conditions/responsibilities.
 | 
Inheritance
 | Derived reuse of approved higher/reusable assurance when scope/applicability/validity/responsibility conditions are met.
 | 
Observation
 | Structured fact/result recorded during assessment.
 | 
Program
 | Delivery/customer context combining effective obligations and one or more system instances.
 | 
Promotion
 | Governed movement of validated local knowledge to broader reusable scope.
 | 
RAP
 | Reusable Assurance Package: governed provider package of implementations, supported obligations, assessment basis, applicability, validity, and residual consumer responsibilities.
 | 
Requirement
 | Organization/customer/product/program obligation stored separately from immutable source control text.
 | 
Response
 | Contributor-provided answer/submission; not a final determination.
 | 
Scope
 | Domain boundary at which an object/assertion is authored, governed, assessed, or applicable.
 | 
SCTM
 | Security Controls Traceability Matrix: derived traceability view rendering effective obligations, allocations, implementations, evidence, assessment states, and dispositions for a scope/snapshot (23.6). Exported as the program workbook artifact.
 | 
SourceConflict
 | Conflict specifically between claims from separate source systems/actors.
 | 
Unknown
 | Explicit lack of sufficient fact; not equivalent to false, absent, N/A, or failed.
 | 

Appendix B. Relationship Catalog
From
 | Relationship
 | To
 | Semantic note
 | 
Organization Unit
 | parent_of
 | Organization Unit
 | Responsibility hierarchy only
 | 
Organization Unit
 | owns
 | Asset
 | Default ownership/routing; not technical containment
 | 
Asset
 | contains
 | Asset
 | Technical/logical composition
 | 
Asset
 | depends_on
 | Asset
 | Change-impact dependency
 | 
System
 | consumes_service
 | Asset/Capability
 | Enables candidate assurance-package reuse
 | 
Product Baseline
 | includes
 | System Template/Asset
 | Immutable baseline composition
 | 
System Instance
 | derived_from
 | Product/System Baseline
 | Pins source baseline version
 | 
Requirement
 | mapped_to
 | Control/Objective
 | Relationship type required
 | 
Implementation Assertion
 | supports
 | Requirement/Control/Objective
 | Does not itself create satisfaction
 | 
Implementation Assertion
 | provided_by
 | Asset/Capability
 | Provider responsibility
 | 
RAP
 | packages
 | Implementation Assertion/Determination/Evidence
 | Reusable assurance unit
 | 
RAP
 | applicable_to
 | Consumer predicate
 | Structured rule, not direct static list only
 | 
RAP Consumption
 | consumes
 | RAP Version
 | Version-pinned provider/consumer link
 | 
Assessment
 | targets
 | Scope/Asset/System/Program
 | Assessment subject
 | 
Assessment Task
 | supports
 | Assessment Objective
 | Many-to-many allowed
 | 
Response
 | answers
 | Assessment Task
 | Contributor input
 | 
Observation
 | derived_from
 | Response/Evidence/Test
 | Structured fact/result
 | 
Determination
 | evaluates
 | Assessment Objective
 | Snapshot-bound authority decision
 | 
Determination
 | supported_by
 | Observation/Evidence/Inherited Result
 | Provenance
 | 
Finding
 | arises_from
 | Determination/Observation
 | Gap lineage
 | 
Finding
 | contributes_to
 | Risk
 | Many-to-many
 | 
Remediation Initiative
 | addresses
 | Finding
 | Grouped corrective work
 | 
POA&M Item
 | tracks
 | Finding/Risk
 | Formal system/program remediation
 | 
Promotion Request
 | proposes
 | Local Object Version
 | Broader canonicalization
 | 
ChangeEvent
 | impacts
 | Domain Object
 | Causal impact graph
 | 
Conflict
 | concerns
 | Assertion/Object
 | Preserves contradictory claims
 | 

Appendix C. Recommended Identifiers and Required Metadata
C.1 Identifier conventions
Human-readable keys MAY exist for usability, but canonical references MUST use stable machine identifiers.
Examples:
asset_uuid + display key AST-00142;
requirement_uuid + display key REQ-IAM-014;
finding_uuid + display key FND-00218;
rap_uuid + version 4.2;
imported control retains source key AC-2 plus source catalog/version identity.
Human-readable keys MUST NOT be reused after retirement if doing so would create historical ambiguity.
C.2 Required cross-cutting metadata
Most governed objects SHOULD support:
id;
display name/key;
type;
scope;
owner;
lifecycle state;
created/updated actor/time;
source/provenance;
version/effective interval where relevant;
sensitivity/marking;
tags/custom metadata only where they do not replace canonical semantics.
Appendix D. Open Domain Decisions
The following require architecture/security-authority validation before the domain contract is considered fully locked:
1. Exact canonical Asset subtype set for R0/R1.
2. Whether Capability is always an Asset subtype or may remain a separate grouping entity with optional Asset identity.
3. Exact CNSSI-derived categorization/profile entities and parameter sources used by the organization.
4. Which RAP/result reuse rules require explicit consumer attestation versus automatic applicability.
5. Default RAP validity and provider change-review policy.
6. Whether final assessment outcomes require vocabulary beyond Satisfied / Other Than Satisfied / N/A in the target authorization process.
7. Evidence integrity requirements for machine-generated and restricted evidence.
8. Required markings model and cross-program metadata visibility.
9. Required temporal reconstruction level and whether the persistence architecture implements full bi-temporal history.
10. Which source systems are authoritative for which Asset/System attributes in the first pilot.
11. Whether organization-level ad hoc assessments publish reusable Determinations directly or only through a RAP/publication review. Working assumption pending decision: publication occurs through RAP review (UX Specification 36.1).
12. Exact policy for combining multiple partial provider packages supporting the same objective.
13. Which domain events require synchronous versus queued impact resolution.
14. Data retention and archival requirements for historical assessments, evidence references, and audit events.
Definition of a stable domain foundation Product, UX, and engineering can independently implement the platform without inventing different meanings for identity, scope, applicability, inheritance, evidence, assessment, conflict, versioning, or historical truth. A program can explain every effective obligation and inherited result; an assessment can reconstruct exactly what was assessed; a provider can publish reusable assurance without granting unnecessary evidence access; and any material change can be traced to the assurance state it may affect.