import React from "react";
export function KeyValue({items=[],labelWidth}){
  return <dl className="keyvalue" style={labelWidth?{gridTemplateColumns:labelWidth+"px minmax(0,1fr)"}:undefined}>{items.map((it,i)=><React.Fragment key={i}><dt>{it.label}</dt><dd>{it.value}</dd></React.Fragment>)}</dl>;
}
