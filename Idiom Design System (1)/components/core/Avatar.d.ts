import * as React from "react";
/** Round initials mark on a flat whisper fill — no gradient, no photo ring. */
export interface AvatarProps {
  /** Two letters, e.g. "AN" */
  initials: string;
  /** Diameter, default 30 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
