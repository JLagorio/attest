import React from "react";
export function SourceCompare({rows=[],effective,conflict=false,note}){
  const NS=window.IdiomDesignSystem_c24a1d;
  return <div>
    {conflict&&<div style={{marginBottom:"var(--space-4)"}}>
      <NS.Notice tone="problem" label="Conflict">Sources disagree and no rule resolves them. A decision is required before this obligation can be assessed.</NS.Notice>
    </div>}
    <NS.Table columns={[{label:"Source",width:210},{label:"Value",width:130},{label:"Scope",width:170},{label:"Authority"}]}>
      {rows.map((r,i)=><tr key={i}>
        <td>{r.source}</td>
        <td className="num">{r.value}</td>
        <td>{r.scope}</td>
        <td className="t-micro" style={{textAlign:"left"}}>{r.authority}</td>
      </tr>)}
      {effective&&!conflict&&<tr className="on">
        <td className="t-strong">Effective</td>
        <td className="t-strong num">{effective.value}</td>
        <td className="t-strong">{effective.scope}</td>
        <td className="t-micro" style={{textAlign:"left"}}>{effective.authority}</td>
      </tr>}
    </NS.Table>
    {note&&<p className="t-label" style={{marginTop:"var(--space-4)"}}>{note}</p>}
  </div>;
}
