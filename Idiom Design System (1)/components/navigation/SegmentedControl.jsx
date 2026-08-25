import React from "react";
export function SegmentedControl({options,active,onChange}){
  return <div className="segmented">{options.map(o=><button key={o} className={o===active?"on":undefined} aria-pressed={o===active} onClick={()=>onChange&&onChange(o)}>{o}</button>)}</div>;
}
