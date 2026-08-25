import * as React from "react";
export interface ResidualItem {
  title: React.ReactNode;
  meta?: React.ReactNode;
  /** StateBadge label for the residual item itself. */
  state?: string;
}
/**
 * What a provider covers set against what stays with the consumer. Inheritance is never
 * presented as a total: the three counts always add up to the obligation, so the part that
 * remains local cannot disappear behind the part that was reused.
 *
 * Not a coverage score. Three factual counts and the list of what is still owed.
 */
export interface ResidualPanelProps {
  /** Provider asset or unit: "Enterprise IAM". */
  provider?: React.ReactNode;
  /** Package version, rendered mono: "v4.2". Consuming an unversioned package is not a thing. */
  version?: string;
  /** Objectives the provider's assurance resolves. */
  covers: number;
  /** Objectives that remain the consumer's work. */
  residual: number;
  /** Objectives reusable only after local confirmation. */
  attestation?: number;
  /** Visibility, said plainly: "Restricted — result reusable", "Open", "Metadata-only". Restricted evidence is not missing evidence. */
  evidence?: React.ReactNode;
  /** Short-form date the provider result was determined. */
  lastAssessed?: React.ReactNode;
  /** The residual responsibilities, named. Never summarised as a count alone. */
  items?: ResidualItem[];
  /** "Review applicability", "Accept consumption", "Resolve unknown", "View provider assurance". */
  actions?: React.ReactNode;
}
export declare function ResidualPanel(props: ResidualPanelProps): JSX.Element;
