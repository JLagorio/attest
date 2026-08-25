StateBadge — the state vocabulary, tinted by how loud it is. Pass the label, not a tone.

    <StateBadge state="Awaiting response"/>      → attention
    <StateBadge state="Other than satisfied"/>   → problem
    <StateBadge state="Inherited — current"/>    → neutral
    <StateBadge state="Unknown"/>                → unknown
    <StateBadge state="Satisfied"/>              → muted text, no badge

Four rules the domain will not bend on:

- **Satisfied is never a badge.** A determination that came out clean is muted text. There is no green in the system, so a green-shaped habit cannot form.
- **Inherited is not Satisfied, and Unknown is not Not applicable.** Use the exact label — the tiers exist so those distinctions survive being glanced at.
- **A response is not a determination.** Contributor states (Submitted, In progress) are attention; only a reviewer's outcome may read Satisfied or Other than satisfied.
- **Never colour alone.** The label carries the state; remove the tint and the row still reads.

Unrecognised labels come back `neutral` on purpose: a new state arrives quiet, not urgent. Still bound by the badge budget — at most a third of the rows in a collection may carry one.
