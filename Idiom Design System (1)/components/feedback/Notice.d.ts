import * as React from "react";
/** Inline message: a Badge, a sentence, an optional Link. No fill, no border, no icon — the air around it does the framing. */
export interface NoticeProps {
  tone?: "neutral" | "attention" | "problem" | "unknown";
  /** Badge text, e.g. "Action needed" */
  label?: string;
  children?: React.ReactNode;
  /** Usually a Link */
  action?: React.ReactNode;
}
export declare function Notice(props: NoticeProps): JSX.Element;
