import * as React from "react";
/** Record detail pairs: muted label column, ink value column, whisper separators. Replaces the "detail card". */
export interface KeyValueProps {
  items: Array<{label: string; value: React.ReactNode}>;
  /** Label column width in px, default 180 */
  labelWidth?: number;
}
export declare function KeyValue(props: KeyValueProps): JSX.Element;
