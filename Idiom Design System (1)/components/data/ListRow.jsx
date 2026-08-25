import React from "react";
export function ListRow({title,meta,trailing,...rest}){
  return <div className="listrow" {...rest}><div className="who"><div className="t-strong trunc">{title}</div>{meta&&<div className="t-micro trunc">{meta}</div>}</div>{trailing}</div>;
}
