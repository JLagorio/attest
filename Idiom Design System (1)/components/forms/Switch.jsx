import React from "react";
export function Switch({checked,onChange,label,description}){
  const sw=<button type="button" role="switch" aria-checked={!!checked} aria-label={label} className={checked?"switch on":"switch"} onClick={()=>onChange&&onChange(!checked)}><i/></button>;
  if(!label&&!description)return sw;
  return <div className="toggle-row">{sw}<div><div className="t-strong">{label}</div>{description&&<div className="t-label">{description}</div>}</div></div>;
}
