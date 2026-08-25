import * as React from "react";
/** Select styled exactly like Input, with the chevron glyph inset right. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Strings, or {value,label} pairs */
  options?: Array<string | {value: string; label: string}>;
}
export declare function Select(props: SelectProps): JSX.Element;
