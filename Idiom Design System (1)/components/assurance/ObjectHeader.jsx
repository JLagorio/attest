import React from "react";
export function ObjectHeader({crumbs=[],name,type,states=[],meta=[],actions,onWhy,onActivity}){
  const NS=window.IdiomDesignSystem_c24a1d;
  return <header className="objhead">
    {crumbs.length>0&&<NS.Breadcrumb trail={crumbs}/>}
    <div className="objhead-id">
      <div style={{minWidth:0}}>
        <h1 className="t-title">{name}</h1>
        {(type||states.length>0)&&<div className="states">
          {type&&<span className="t-label">{type}</span>}
          {states.map((s,i)=><NS.StateBadge key={i} state={s}/>)}
        </div>}
      </div>
      <div style={{flex:1}}/>
      {actions}
    </div>
    {meta.length>0&&<dl className="objhead-meta">
      {meta.map((m,i)=><div key={i}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}
    </dl>}
    {(onWhy||onActivity)&&<div style={{display:"flex",gap:"var(--space-5)"}}>
      {onWhy&&<NS.Link href="#" onClick={e=>{e.preventDefault();onWhy();}}>Why is this here?</NS.Link>}
      {onActivity&&<NS.Link href="#" onClick={e=>{e.preventDefault();onActivity();}}>Activity</NS.Link>}
    </div>}
  </header>;
}
