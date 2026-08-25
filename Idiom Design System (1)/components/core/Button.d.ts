import * as React from "react";
/** Action button: 34px, 6px radius, 600 label, flat — no shadow. Labels name the real action in sentence case. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "primary" spends one of the screen's three accent uses; "quiet" is borderless for toolbars */
  variant?: "primary" | "secondary" | "quiet";
  /** Leading icon node, never larger than the label */
  icon?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
