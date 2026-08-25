import React from "react";
export function WorkRow({title,kind,target,owner,due,state,blocking,onOpen,trailing}){
  const NS=window.IdiomDesignSystem_c24a1d;
  const meta=[kind,target,owner].filter(Boolean).join(" · ");
  return <button type="button" className="workrow" onClick={onOpen}>
    <div style={{minWidth:0}}>
      <div className="t-strong" style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{title}</div>
      <div className="t-micro" style={{marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{meta}</div>
      {blocking&&<div className="t-micro" style={{marginTop:2,color:"var(--problem-fg)"}}>{blocking}</div>}
    </div>
    {state?<NS.StateBadge state={state}/>:<span/>}
    {trailing||<span className="due">{due}</span>}
  </button>;
}
