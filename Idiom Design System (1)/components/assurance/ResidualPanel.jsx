import React from "react";
export function ResidualPanel({provider,version,covers,residual,attestation=0,evidence,lastAssessed,items=[],actions}){
  const NS=window.IdiomDesignSystem_c24a1d;
  const total=covers+residual+attestation;
  return <div>
    {(provider||version)&&<div className="t-strong" style={{marginBottom:"var(--space-4)"}}>
      {provider}{version&&<span className="t-mono" style={{marginLeft:8}}>{version}</span>}
    </div>}
    <div className="residual">
      <div><div className="t-label">Covered by provider</div><div className="n">{covers}</div></div>
      <div><div className="t-label">Yours to work</div><div className="n">{residual}</div></div>
      <div><div className="t-label">Attestation only</div><div className="n">{attestation}</div></div>
    </div>
    <div style={{marginTop:"var(--space-5)"}}>
      <NS.Meter total={total} showKey={false} segments={[{label:"Covered",value:covers},{label:"Residual",value:residual},{label:"Attestation",value:attestation}]}/>
    </div>
    {(evidence||lastAssessed)&&<dl className="objhead-meta" style={{marginTop:"var(--space-4)"}}>
      {lastAssessed&&<div><dt>Provider last assessed</dt><dd>{lastAssessed}</dd></div>}
      {evidence&&<div><dt>Evidence</dt><dd>{evidence}</dd></div>}
    </dl>}
    {items.length>0&&<div style={{marginTop:"var(--space-6)"}}>
      <div className="t-strong" style={{marginBottom:"var(--space-2)"}}>What stays with you</div>
      {items.map((it,i)=><NS.ListRow key={i} title={it.title} meta={it.meta} trailing={it.state?<NS.StateBadge state={it.state}/>:undefined}/>)}
    </div>}
    {actions&&<div style={{display:"flex",gap:"var(--space-2)",marginTop:"var(--space-5)"}}>{actions}</div>}
  </div>;
}
