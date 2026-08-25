/** 16px checkbox; checked fill is ink, matching Switch. Used for row selection and consent. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
