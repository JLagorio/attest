import * as React from "react";
/** Topbar search: 38px, leading 16px glyph, grows to 560px. Same focus treatment as Input. */
export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
}
export declare function SearchInput(props: SearchInputProps): JSX.Element;
