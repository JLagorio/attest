import React from "react";
export function SearchInput({placeholder="Search",style,...rest}){
  const NS=typeof window!=="undefined"&&window.IdiomDesignSystem_c24a1d;
  const I=NS&&NS.Icon;
  return <div className="search" style={style}>{I&&<I name="search" size={16}/>}<input placeholder={placeholder} {...rest}/></div>;
}
