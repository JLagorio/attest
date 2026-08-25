import * as React from "react";
/** 32px transparent square for topbar icons. Hover fills with surface-hover; no badge dots. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required accessible label, also the tooltip */
  label: string;
  /** One 18px Icon */
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
