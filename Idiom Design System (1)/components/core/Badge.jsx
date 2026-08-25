import React from "react";
const TONES={neutral:"neutral",attention:"attention",problem:"problem",unknown:"unknown"};
export function Badge({tone="unknown",children}){
  return <span className={"badge "+(TONES[tone]||TONES.unknown)}>{children}</span>;
}
