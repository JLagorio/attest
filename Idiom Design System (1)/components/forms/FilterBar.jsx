import React from "react";
export function FilterBar({label,value,onClick}){
  const NS=typeof window!=="undefined"&&window.IdiomDesignSystem_c24a1d;
  const I=NS&&NS.Icon;
  return <div className="filterbar"><span className="k">{label}</span><button className="v" onClick={onClick}>{value}{I&&<I name="chev" size={15}/>}</button></div>;
}
