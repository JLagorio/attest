import * as React from "react";
/** Left-aligned empty state: section heading, one muted line, one action. No illustration, no dashed box. */
export interface EmptyStateProps {
  /** States the absence in the user's words: "No invoices yet" */
  title: string;
  body?: string;
  /** One Button, usually primary if the screen has no other */
  action?: React.ReactNode;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
