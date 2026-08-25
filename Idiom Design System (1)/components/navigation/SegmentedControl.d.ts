/** View switcher on a whisper track; active segment is a surface chip with ink 600 text — no accent. */
export interface SegmentedControlProps {
  options: string[];
  active: string;
  onChange?: (option: string) => void;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
