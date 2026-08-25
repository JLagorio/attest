import React from "react";
export function Avatar({initials,size=30,style}){
  return <div className="avatar" style={Object.assign({width:size,height:size},style)}>{initials}</div>;
}
