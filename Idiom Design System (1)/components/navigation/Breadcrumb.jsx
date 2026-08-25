import React from "react";
export function Breadcrumb({trail=[]}){
  const NS=typeof window!=="undefined"&&window.IdiomDesignSystem_c24a1d;
  const I=NS&&NS.Icon;
  return <nav className="crumbs" aria-label="Breadcrumb">{trail.map((t,i)=>{const last=i===trail.length-1;return <React.Fragment key={i}>{i>0&&I&&<I name="chevr"/>}{last?<strong>{t.label}</strong>:<a href={t.href||"#"}>{t.label}</a>}</React.Fragment>;})}</nav>;
}
