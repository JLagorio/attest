import React from "react";
export function UnknownItem({subject,what,owner,neededBy,blocks=[],action}){
  const NS=window.IdiomDesignSystem_c24a1d;
  return <div className="unknown-item">
    <div style={{minWidth:0}}>
      <div className="t-strong">{subject}</div>
      <div className="t-label" style={{marginTop:2}}>{what}</div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)"}}>
      <NS.StateBadge state="Unknown"/>
      {action}
    </div>
    <div className="blocks">
      {blocks.map((b,i)=><span key={i} className="t-micro">{b}</span>)}
      <span className="t-micro">Owner <span style={{color:owner?"var(--ink-secondary)":"var(--ink-muted)"}}>{owner||"Unassigned"}</span></span>
      {neededBy&&<span className="t-micro">Needed by <span style={{color:"var(--ink-secondary)"}}>{neededBy}</span></span>}
    </div>
  </div>;
}
