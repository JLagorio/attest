import React from "react";
export function Provenance({state,tone,steps=[],residual,invalidatedBy,authority}){
  const NS=window.IdiomDesignSystem_c24a1d;
  const tail=[residual&&{label:"Residual responsibility",value:residual},
              invalidatedBy&&{label:"What would change this",value:invalidatedBy},
              authority&&{label:"Authority to change",value:authority}].filter(Boolean);
  return <div>
    {state&&<div style={{marginBottom:"var(--space-5)"}}><NS.StateBadge state={state} tone={tone}/></div>}
    <ol className="why">
      {steps.map((s,i)=><li key={i}><div><b>{s.label}</b>{s.detail&&<span>{s.detail}</span>}</div></li>)}
    </ol>
    {tail.length>0&&<div style={{marginTop:"var(--space-6)"}}><NS.KeyValue items={tail} labelWidth={168}/></div>}
  </div>;
}
