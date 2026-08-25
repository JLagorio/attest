import React from "react";
export function Metric({label,value,note}){
  return <div><div className="t-label">{label}</div><div className="t-figure num" style={{marginTop:2}}>{value}</div>{note&&<div className="t-micro" style={{marginTop:2}}>{note}</div>}</div>;
}
