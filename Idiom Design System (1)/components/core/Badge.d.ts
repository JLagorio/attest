import * as React from "react";
/** Status label: tint background, dark tint text, no border, no dot. Four tones, no green. */
export interface BadgeProps {
  /** neutral = a fact needing nobody; attention = a person must act; problem = broken, blocked or contradicted; unknown = never established */
  tone?: "neutral" | "attention" | "problem" | "unknown";
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
