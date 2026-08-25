import * as React from "react";
/**
 * A named gap: what is not known, why it matters, who owns finding out, and by when.
 * Missing knowledge is recorded, owned and dated — it is never silently satisfied and never
 * inferred to be Not applicable. Use this anywhere a blank cell would otherwise appear.
 */
export interface UnknownItemProps {
  /** The thing that is unknown: "Processor / SoC", "Production signing configuration". */
  subject: string;
  /** One sentence of what is missing and what it costs. "Production SoC has not been selected." */
  what: React.ReactNode;
  /** Owner of the discovery. Pass nothing and it renders "Unassigned" in muted — an honest state, not a blank. */
  owner?: string | null;
  /** Target decision date, short form: "Sep 14". */
  neededBy?: string;
  /** What this blocks, counted: ["Blocks 8 implementation mappings", "3 assessment objectives"]. */
  blocks?: string[];
  /** Usually a Button: "Assign discovery". */
  action?: React.ReactNode;
}
export declare function UnknownItem(props: UnknownItemProps): JSX.Element;
