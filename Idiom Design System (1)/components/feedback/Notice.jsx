import React from "react";
export function Notice({tone="attention",label,children,action}){
  const NS=typeof window!=="undefined"&&window.IdiomDesignSystem_c24a1d;
  const B=NS&&NS.Badge;
  return <div className="notice">{label&&B&&<B tone={tone}>{label}</B>}<div className="t-body" style={{flex:1,minWidth:0}}>{children}</div>{action}</div>;
}
