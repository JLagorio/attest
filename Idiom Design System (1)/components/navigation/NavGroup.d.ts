import * as React from "react";
/** Group of NavItems with an optional 13px muted caption. Groups are separated by space, not rules. */
export interface NavGroupProps {
  /** Sentence case, never uppercase */
  label?: string;
  children?: React.ReactNode;
}
export declare function NavGroup(props: NavGroupProps): JSX.Element;
