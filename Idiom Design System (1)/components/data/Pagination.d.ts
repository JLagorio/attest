/** Range readout plus two quiet buttons, right-aligned under a table. No numbered page pills. */
export interface PaginationProps {
  start: number;
  end: number;
  total: number;
  /** Object being counted, default "rows" */
  label?: string;
  onPrev?: () => void;
  onNext?: () => void;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
