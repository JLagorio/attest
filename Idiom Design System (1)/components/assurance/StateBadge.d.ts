import * as React from "react";
/** Tint tiers. `none` is not a colour: it renders the label as muted text, because Satisfied carries no badge. */
export type StateTone = "none" | "neutral" | "attention" | "problem" | "unknown";
/** Look up the tier for a state label. Unrecognised labels fall back to `neutral` — a new state never arrives loud. */
export declare function toneFor(state: string): StateTone;
/**
 * A state from the platform vocabulary. Pass the label; the tier is derived.
 *
 * neutral   a fact that needs nobody — Inherited, Planned, Published, Local, Not applicable
 * attention a person must act — Awaiting response, Ready for review, Attestation required, Reassessment required
 * problem   contradicted or broken — Other than satisfied, Conflict, Impacted, Expired
 * unknown   never established — Unknown, Not reviewed, Evidence restricted
 * none      Satisfied, Current, Verified — rendered as muted text, never a badge
 */
export interface StateBadgeProps {
  /** A label from Appendix C of the UX spec, e.g. "Awaiting response", "Other than satisfied", "Inherited — current". */
  state: string;
  /** Override the derived tier. Use only when the same label means something different in context. */
  tone?: StateTone;
  /** Display text, if it must differ from the state looked up. */
  children?: React.ReactNode;
  /** Render nothing at all for `none` states, instead of muted text. For dense collections. */
  hideSatisfied?: boolean;
}
export declare function StateBadge(props: StateBadgeProps): JSX.Element | null;
