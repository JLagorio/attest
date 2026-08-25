import * as React from "react";
/** Two-line row for subordinate lists: 600 title, 13px meta, free trailing slot. Whisper separators, none on the last row. */
export interface ListRowProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  /** One clipped line of context */
  meta?: React.ReactNode;
  /** Badge, date, count or Link at the right edge */
  trailing?: React.ReactNode;
}
export declare function ListRow(props: ListRowProps): JSX.Element;
