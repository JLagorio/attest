import React from "react";
export function Input({label,hint,...rest}){
  return <label className="field">{label&&<span>{label}</span>}<input className="input" {...rest}/>{hint&&<span className="t-micro">{hint}</span>}</label>;
}
