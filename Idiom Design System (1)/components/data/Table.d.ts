import * as React from "react";
/** Fixed-layout collection table: 52px rows, whisper separators, one hairline under the header, no fill, no zebra, no vertical rules. */
export interface TableColumn {
  label: string;
  /** Fixed px or %; leave one column undefined so it takes the slack */
  width?: number | string;
  align?: "left" | "right";
}
export interface TableProps {
  columns: TableColumn[];
  /** <tr> rows; add className="on" for the selected row */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): JSX.Element;
