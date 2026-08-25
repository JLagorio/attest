import React from "react";
export function EmptyState({title,body,action}){
  return <div className="empty"><div className="t-section">{title}</div>{body&&<p className="t-label" style={{marginTop:8}}>{body}</p>}{action&&<div style={{marginTop:20}}>{action}</div>}</div>;
}
