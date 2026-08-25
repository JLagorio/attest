# Idiom Design System

The design language for the Program Assurance Platform — the console, the object record, the contributor task, the reviewer workspace, the setup wizard, the sign-in page — held together by budgets rather than by decoration. White surfaces, four inks, one blue, almost no rules, more air than feels efficient.

Two layers. The **primitives** name jobs, never objects (`ListRow`, `KeyValue`, `Notice`, `Table`) and would work in any product. The **assurance layer** encodes the things this domain will not let a screen get away with: a state vocabulary where Satisfied is never green, a header that cannot show a derived state it can't explain, an unknown that has an owner and a date, competing sources that no rule silently resolves, and inheritance that always shows the local half.

## The budgets

These are the system. Everything else is taste.

| Budget | Value |
|---|---|
| Accent uses per screen | **3** — active nav item, active tab, primary button. Links and focus rings are free. |
| Hairlines per screen | **5** — nav edge, tab rule, table header rule, control borders, one spare. `--whisper` row separators do not count. |
| Type sizes below the page title | **3** — 20 / 14 / 13. The title (30) doubles as the figure size. |
| Weights | **2** — 400 and 600. |
| Shadows | **1** — the app surface. Overlays (dialog, menu, Why drawer) are the single exception. |
| Status tints | **4** — neutral, attention, problem, unknown. There is no green: Satisfied is the absence of a badge. |
| Data hues | **3** — `--series-1..3`, in order. Remainders stay whisper. |
| Rows carrying a badge | **≤ ⅓** of a collection. Past that, use muted text. |
| Radii | **3 + pill** — 4 / 6 / 8. Nothing rounds harder than 8px unless it is a pill. |

## Rules that follow from them

- **Grouping is done with space.** Reaching for a border means the spacing failed. There are no cards, no bordered containers, no filled panels, no gray sidebar.
- **Hierarchy is weight and colour first, size second.** Desaturate the screen: if the structure stops reading, colour was doing layout's job.
- **Composition has a dominant region and a subordinate one** — `.split` is `1fr | 340px`, never two equal columns, and it collapses below 1180px. `.triptych` (queue | objective | provenance) is the one three-column layout, earned by the reviewer workspace and used nowhere else.
- **Repeated controls never take the accent.** Switches, checkboxes, segmented controls and filter values are ink; the accent means "where you are" and "the one action".
- **Tracking tightens as size grows** (-1px at 30px → -.01px at 13px). Sentence case everywhere; no uppercase micro-labels, no positive letter-spacing.
- **Tabular figures are opt-in** (`.num` on numeric columns and figures), never on `body`.
- **Flat fills only** — no gradients anywhere, including the brand mark. Hover shifts background, never opacity. Transitions 80–120ms on background and border-color only.
- **No decorative charts, and no scores.** Axes carry values or the chart is cut and the number is stated instead. Counts are shown as counts; the product has no "X% secure".
- **No icon larger than the text beside it.** Counts are text, never dots on glyphs. No emoji.

## What the interface is not allowed to do

The domain rules outrank the layout. These are load-bearing:

- **Satisfied is never green, and never a badge.** There is no success colour to reach for.
- **A response is not a determination.** Contributor states are attention; only a reviewer's outcome may read Satisfied or Other than satisfied. Bulk-Satisfied does not exist.
- **Unknown is not Not applicable.** A blank is never inferred to be either. Missing knowledge becomes an `UnknownItem` with an owner and a date.
- **Inherited is not locally implemented.** Anything inherited shows its source, version and residual half in the same view.
- **Restricted evidence is not missing evidence.** Say which of the result, the evidence and the implementation detail you can see.
- **Every derived state can explain itself.** If `Provenance` can't be written for it, the state doesn't ship — show Unknown instead.
- **No source wins for being stricter, newer or hand-entered.** An unresolved conflict shows as a conflict and blocks the work it feeds.

## Voice

You-voice, terse, sentence case. Buttons name the authority they carry ("Record determination", "Publish version", "Submit for broader reuse"), never "Approve" and never "Submit". Requests are written for the person answering, not in framework language — the control identifier is metadata beside the question. Nulls are words in muted ("Unassigned", "Not reviewed"), never blanks. Dates are relative when near ("6h ago", "Yesterday"), short-form when far ("Aug 22"). Identifiers are verbatim in `--font-mono`. No exclamation marks, no marketing adjectives, no percentage that implies security.

## Layers

**Foundations** — `styles.css` is the entry point; it imports `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, then `css/base.css` (reset, focus, utilities) and `css/components.css`. `css/components.css` is the ground truth for every component: the React files add behaviour and nothing else, so a plain HTML page using the same class names is a first-class citizen of the system (four of the six surfaces are written that way).

**Components** — 34 in six folders, each with a `.d.ts` contract and a `.prompt.md` usage note:

- `components/core/` — Button, IconButton, Badge, Avatar, Link, Icon
- `components/forms/` — Input, Select, Switch, Checkbox, SearchInput, FilterBar
- `components/navigation/` — NavItem, NavGroup, Tabs, SegmentedControl, Breadcrumb
- `components/data/` — Metric, Table, ListRow, KeyValue, Pagination, Meter, LineChart
- `components/feedback/` — Notice, EmptyState, Dialog, Menu
- `components/assurance/` — StateBadge, ObjectHeader, Provenance, UnknownItem, SourceCompare, ResidualPanel, WorkRow

**Surfaces** — the shapes this product actually needs:

- `ui_kits/console/` — the shell: nav | page, topbar, object header, tabs, objective collection + residual panel and work queue (React, interactive, with the Why drawer)
- `patterns/record.html` — one object: a reusable assurance package, what it provides, what stays with the consumer, who consumes it
- `patterns/task.html` — the contributor task: one plain-language request, the response, and the ways to say "I don't know"
- `patterns/review.html` — the reviewer workspace: queue, the objective under review, the provenance beside it
- `patterns/settings.html` — program setup: fields, dependencies, switches, and what launch will create
- `patterns/signin.html` — out of product: one column, no chrome, one action

**Specimens** — `guidelines/` holds one card per foundation (accent, ink, surface & line, status, series, scale, weight & case, figures, space, hairline budget, radii, elevation, focus, voice, brand slot, iconography).

## Iconography

One inline sprite, 18 glyphs, 24×24 box, stroke 1.6, round caps, `currentColor`, no fills: search, home, org, box, lib, lay, clip, inbox, flag, shield, chev, chevr, check, close, help, bell, gear, plus. Default 18px; 14–16px inside dense controls. No icon font, no emoji, no unicode-as-icon, and never a hand-drawn illustration.

## Known edges

- Inter loads from Google Fonts; no font binaries ship here. `--font-mono` is a system stack, so control identifiers cost no request.
- The brand slot is an initials mark in `--ink`. Swap in a real wordmark when one exists — keep the 26px box and never colour it accent.
- `Table` is `table-layout: fixed`: give every column a width except the one fluid column, or cells will not truncate.
- `--fs-display` survives for one job only — the sign-in page. There is no marketing surface in an internal platform; do not reintroduce one.
- `StateBadge` falls back to `neutral` for a label it does not recognise. Add new vocabulary to its map rather than passing `tone` at the call site, or the same state will read differently on two screens.
