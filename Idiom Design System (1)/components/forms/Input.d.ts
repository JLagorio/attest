import * as React from "react";
/** Labelled text field: 38px, 8px radius, hairline border; focus = accent border + 3px ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Sentence-case label above the field */
  label?: string;
  /** Optional 13px helper under the field */
  hint?: string;
}
export declare function Input(props: InputProps): JSX.Element;
