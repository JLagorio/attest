import * as React from "react";
/**
 * One row of somebody's work queue. The title is the action asked of a person in their own
 * words; the control identifier is metadata and never the title — a contributor should be able
 * to answer without learning the framework.
 */
export interface WorkRowProps {
  /** The request, action-first: "Describe how privileged account requests are approved". */
  title: React.ReactNode;
  /** Work type: "Question", "Evidence request", "Test", "Determination", "Applicability review", "Promotion review". */
  kind?: React.ReactNode;
  /** Scope the work sits in: "Nightwing · Tactical Management Controller". */
  target?: React.ReactNode;
  /** Current owner, or "Unassigned". */
  owner?: React.ReactNode;
  /** Relative when near ("6h ago", "Today"), short form when far ("Sep 2"). */
  due?: React.ReactNode;
  /** StateBadge label. */
  state?: string;
  /** Downstream consequence, only when real: "Blocks the Oct 5 control freeze". Reads in problem ink. */
  blocking?: React.ReactNode;
  onOpen?: () => void;
  /** Replaces the due column — a Link ("Delegate") or a count. */
  trailing?: React.ReactNode;
}
export declare function WorkRow(props: WorkRowProps): JSX.Element;
