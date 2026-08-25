---
name: idiom-design
description: Use this skill to design and build any surface of the Program Assurance Platform in the Idiom design language — console screens, object records, contributor tasks, reviewer workspaces, wizards, auth, emails, decks and throwaway mocks. Contains the budgets, tokens, type, icons, the assurance state vocabulary, component contracts and six reference surfaces.
user-invocable: true
---

Read `readme.md` first: it carries the budgets (three accent uses, five hairlines, three type sizes below the title, two weights, one shadow, four status tints) and the list of things the interface is not allowed to do. Then read `css/components.css` — it is the ground truth for every component, so plain HTML with these class names is as native as the React files.

For a new surface, start from the closest reference in `ui_kits/console/` or `patterns/` and replace the content; do not invent new components before checking `components/*/*.prompt.md`. Anything that names a domain state, explains a derived state, records an unknown, compares sources or divides inheritance already exists in `components/assurance/` — use it rather than hand-rolling a badge or a lineage list.

When making visual artifacts (mocks, prototypes, slides), copy the assets you need out of this project and write static HTML the user can open. When working in production code, read the contracts in `components/*/*.d.ts` and match values exactly rather than eyeballing them.

Before you hand anything over, run four checks and state the first two: accent uses and hairlines against their budgets. Then: every badge on the screen came from `StateBadge` with a real label, and every derived state on it could survive someone clicking Why. Fix any failure before showing it. Then remove one element — if the screen is better without it, it stays removed.
