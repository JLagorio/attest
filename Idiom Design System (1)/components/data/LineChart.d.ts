/** Up to three 2.5px polylines on three whisper gridlines, with a value axis and x labels. A chart without values is cut, not decorated. */
export interface LineSeries {
  label: string;
  points: number[];
  /** Defaults to --series-1..3 in order */
  color?: string;
}
export interface LineChartProps {
  series: LineSeries[];
  legend?: boolean;
  height?: number;
  min?: number;
  max?: number;
  /** Ticks along the x axis, first and last at the ends */
  xLabels?: string[];
  /** Formats the three y values */
  format?: (value: number) => string;
}
export declare function LineChart(props: LineChartProps): JSX.Element;
