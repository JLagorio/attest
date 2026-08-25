import * as React from "react";
/** Sidebar row: 34px, 6px radius, 18px glyph. Active = accent text + 600 (one of three accent uses). */
export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  label: string;
  /** Trailing count as text — never an icon badge */
  count?: string | number;
  active?: boolean;
}
export declare function NavItem(props: NavItemProps): JSX.Element;
