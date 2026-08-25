import React from "react";
export function Tabs({tabs,active,onChange,style}){
  return <div className="tabs" style={style} role="tablist">{tabs.map(t=><button key={t} role="tab" aria-selected={t===active} className={t===active?"tab on":"tab"} onClick={()=>onChange&&onChange(t)}>{t}</button>)}</div>;
}
