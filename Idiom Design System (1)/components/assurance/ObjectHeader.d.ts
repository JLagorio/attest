import * as React from "react";
export interface ObjectHeaderMeta {
  /** Owner, Source, Version, Effective, Last assessed. Faint. */
  label: string;
  value: React.ReactNode;
}
/**
 * The header every object detail page shares: where it sits, what it is, what state it is in,
 * who has authority over it, and the two links that must always be reachable — Why and Activity.
 */
export interface ObjectHeaderProps {
  /** Containment path. Technical paths do not imply ownership — say so in the meta, not the crumbs. */
  crumbs?: { label: string; href?: string }[];
  name: string;
  /** Explicit type: "Reusable assurance package", "Program system", "Assessment objective". Never inferred from the icon. */
  type?: string;
  /** Labels for StateBadge, in order of consequence. Lifecycle, then assurance, then freshness. */
  states?: string[];
  /** Owner / source / version / effective date. Anything a determination would have to cite. */
  meta?: ObjectHeaderMeta[];
  /** Authority-aware. Name the action ("Publish version", "Record determination"), never "Approve". */
  actions?: React.ReactNode;
  /** Opens the provenance drawer. Required on any object whose state was derived rather than entered. */
  onWhy?: () => void;
  onActivity?: () => void;
}
export declare function ObjectHeader(props: ObjectHeaderProps): JSX.Element;
