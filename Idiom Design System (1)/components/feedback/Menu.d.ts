import * as React from "react";
/** Overflow menu: 200px minimum, 32px items, whisper divider, overlay shadow. Positioned by the caller. */
export interface MenuProps {
  /** Labels, {icon,label} objects, or "-" for a divider */
  items: Array<string | "-" | {label: string; icon?: React.ReactNode}>;
  onSelect?: (label: string) => void;
  style?: React.CSSProperties;
}
export declare function Menu(props: MenuProps): JSX.Element;
