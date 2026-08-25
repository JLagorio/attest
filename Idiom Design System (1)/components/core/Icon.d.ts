import * as React from "react";
/** 24x24 stroke icon (1.6 weight, round caps, currentColor) copied from the source sprite. */
export interface IconProps {
  /** Glyph name from the source sprite */
  name: "search"|"home"|"org"|"box"|"lib"|"lay"|"clip"|"inbox"|"flag"|"shield"|"chev"|"chevr"|"check"|"close"|"help"|"bell"|"gear"|"plus";
  /** Square size in px. 18 default; 14-16 inside dense controls. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
