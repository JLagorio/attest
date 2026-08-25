import React from "react";
export function Meter({segments=[],total,showKey=true,format}){
  const sum=segments.reduce((a,s)=>a+s.value,0);
  const whole=total||sum||1;
  const rest=Math.max(0,whole-sum);
  return <div>
    <div className="meter">{segments.slice(0,3).map((s,i)=><i key={i} style={{width:(s.value/whole*100)+"%",background:s.color||"var(--series-"+(i+1)+")"}}/>)}{rest>0&&<i style={{width:(rest/whole*100)+"%"}}/>}</div>
    {showKey&&<div className="meter-key">{segments.slice(0,3).map((s,i)=><React.Fragment key={i}><div className="nm"><b style={{background:s.color||"var(--series-"+(i+1)+")"}}/>{s.label}</div><div className="vl">{format?format(s.value):s.value.toLocaleString()}</div></React.Fragment>)}</div>}
  </div>;
}
