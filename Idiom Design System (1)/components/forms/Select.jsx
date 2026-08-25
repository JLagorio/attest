import React from "react";
export function Select({label,options=[],hint,...rest}){
  const NS=typeof window!=="undefined"&&window.IdiomDesignSystem_c24a1d;
  const Chev=NS&&NS.Icon;
  return <label className="field">{label&&<span>{label}</span>}<span className="select"><select className="input" {...rest}>{options.map(o=>{const v=typeof o==="string"?o:o.value,l=typeof o==="string"?o:o.label;return <option key={v} value={v}>{l}</option>;})}</select>{Chev&&<Chev name="chev"/>}</span>{hint&&<span className="t-micro">{hint}</span>}</label>;
}
