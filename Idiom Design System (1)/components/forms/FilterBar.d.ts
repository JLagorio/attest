/** Two-part scope control: static key, pressable value. The value is ink 600 — filters never spend accent. */
export interface FilterBarProps {
  /** What is being scoped, e.g. "Billing period" */
  label: string;
  /** Current scope, e.g. "Aug 2026" */
  value: string;
  onClick?: () => void;
}
export declare function FilterBar(props: FilterBarProps): JSX.Element;
