import React from "react";
export function Checkbox({checked,onChange,label,...rest}){
  const NS=typeof window!=="undefined"&&window.IdiomDesignSystem_c24a1d;
  const I=NS&&NS.Icon;
  const box=<button type="button" role="checkbox" aria-checked={!!checked} aria-label={label} className={checked?"check on":"check"} onClick={()=>onChange&&onChange(!checked)} {...rest}>{I&&<I name="check"/>}</button>;
  return label?<label className="toggle-row" style={{alignItems:"center"}}>{box}<span className="t-body">{label}</span></label>:box;
}
