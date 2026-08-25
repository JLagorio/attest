import React from "react";
export function Menu({items=[],onSelect,style}){
  return <div className="menu" role="menu" style={style}>{items.map((it,i)=>it==="-"?<hr key={i}/>:<button key={i} role="menuitem" onClick={()=>onSelect&&onSelect(typeof it==="string"?it:it.label)}>{typeof it==="string"?it:<>{it.icon}{it.label}</>}</button>)}</div>;
}
