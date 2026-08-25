/** 36x20 pill toggle. On-state is ink, never accent — repeated controls never carry state colour. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Label to the right; omit for a bare switch in a table cell */
  label?: string;
  /** One clipped line under the label */
  description?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;
