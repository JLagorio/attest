/** 6px pill bar for a composition of at most three parts; anything unaccounted for stays whisper. */
export interface MeterSegment {
  label: string;
  value: number;
  /** Defaults to --series-1..3 in order */
  color?: string;
}
export interface MeterProps {
  /** Three segments maximum — a fourth hue does not exist in this system */
  segments: MeterSegment[];
  /** Whole the segments are parts of; defaults to their sum */
  total?: number;
  showKey?: boolean;
  format?: (value: number) => string;
}
export declare function Meter(props: MeterProps): JSX.Element;
