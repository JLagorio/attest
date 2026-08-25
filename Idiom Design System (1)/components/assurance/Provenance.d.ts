import * as React from "react";
export interface ProvenanceStep {
  /** The fact, stated plainly: "Enterprise IAM RAP v4.2 covers IA-05(1)". */
  label: string;
  /** The qualifier: scope, version, rule, or the human who decided. */
  detail?: React.ReactNode;
}
/**
 * The body of the "Why is this here?" drawer. Any derived state — inherited, effective,
 * suppressed, impacted, reassessment-required — must be able to fill this out, or it may not ship.
 *
 * The chain answers, in order: what state is this, which sources produced it, at which scope
 * and version, which rule or decision applied — then what stays local, what would break it,
 * and who could change the decision underneath.
 */
export interface ProvenanceProps {
  /** The derived state being explained, as a StateBadge label. */
  state?: string;
  tone?: "none" | "neutral" | "attention" | "problem" | "unknown";
  /** Ordered chain, numbered in mono. Four to seven steps; if it takes more, the rule is too clever. */
  steps: ProvenanceStep[];
  /** What the consumer still owns. Omit only when genuinely nothing remains — never leave it blank to look clean. */
  residual?: React.ReactNode;
  /** The change that would invalidate this state. */
  invalidatedBy?: React.ReactNode;
  /** Who has authority over the underlying decision. */
  authority?: React.ReactNode;
}
export declare function Provenance(props: ProvenanceProps): JSX.Element;
