import * as React from "react";
/** Modal on a 32% scrim: 460px, 8px radius, the overlay shadow. Overlays are the one exception to the single-shadow rule. */
export interface DialogProps {
  open?: boolean;
  /** Sentence-case question or statement, section size */
  title: string;
  children?: React.ReactNode;
  /** Set false for an acknowledge-only dialog */
  confirm?: boolean;
  /** Names the action, e.g. "Record determination" — never "Approve" */
  confirmLabel?: string;
  dismissLabel?: string;
  onConfirm?: () => void;
  onDismiss?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element;
