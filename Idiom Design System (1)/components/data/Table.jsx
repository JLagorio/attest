import React from "react";
export function Table({columns,children,style}){
  return <table className="tbl" style={style}><colgroup>{columns.map((c,i)=><col key={i} style={{width:c.width}}/>)}</colgroup><thead><tr>{columns.map((c,i)=><th key={i} style={{textAlign:c.align}}>{c.label}</th>)}</tr></thead><tbody>{children}</tbody></table>;
}
