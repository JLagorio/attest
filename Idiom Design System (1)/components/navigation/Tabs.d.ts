import * as React from "react";
/** Page-level tabs on one hairline rule; active = accent text + 2px accent underline. */
export interface TabsProps {
  tabs: string[];
  active: string;
  onChange?: (tab: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
