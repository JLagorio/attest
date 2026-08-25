import * as React from "react";
export interface SourceRow {
  /** Where the value came from: "Organization baseline", "Customer CR-118", "PLM export". */
  source: React.ReactNode;
  /** The competing value, verbatim. Rendered tabular. */
  value: React.ReactNode;
  /** The scope it holds at: "Organization", "Product", "Nightwing". */
  scope: React.ReactNode;
  /** State of that source: "Published default", "Inherited", "Customer source", "Reported by engineer". */
  authority: React.ReactNode;
}
/**
 * Side-by-side sources for one contested value — a control parameter, a component identity,
 * a configuration assertion. The effective row is the resolved answer and carries the authority
 * that approved it; when nothing resolves the sources, pass `conflict` and no effective row appears.
 *
 * Stricter does not win automatically. Newer does not win automatically. Manual entry does not
 * beat a source system. Resolution is a human decision with a name attached to it.
 */
export interface SourceCompareProps {
  rows: SourceRow[];
  /** The resolved value. Omit when unresolved. */
  effective?: { value: React.ReactNode; scope: React.ReactNode; authority: React.ReactNode };
  /** Unresolved: shows the conflict notice and suppresses the effective row. */
  conflict?: boolean;
  /** What the reader should do next, or what the resolution turned on. */
  note?: React.ReactNode;
}
export declare function SourceCompare(props: SourceCompareProps): JSX.Element;
