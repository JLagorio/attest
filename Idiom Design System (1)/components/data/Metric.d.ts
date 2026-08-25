/** Label above value on bare surface — no card, no border, no icon. Value uses the title size with tabular figures. */
export interface MetricProps {
  /** Sentence case, muted */
  label: string;
  value: string | number;
  /** Optional 13px qualifier under the value ("vs. 284 in July") */
  note?: string;
}
export declare function Metric(props: MetricProps): JSX.Element;
