import React from "react";
export function LineChart({series=[],legend=true,height=230,min,max,xLabels=[],format}){
  const W=920,H=height;
  const all=series.flatMap(s=>s.points);
  const lo=min!=null?min:Math.min.apply(null,all),hi=max!=null?max:Math.max.apply(null,all);
  const y=v=>H-8-((v-lo)/((hi-lo)||1))*(H-24);
  const line=s=>s.points.map((v,i)=>(i*(W/((s.points.length-1)||1))).toFixed(1)+","+y(v).toFixed(1)).join(" ");
  const ticks=[hi,lo+(hi-lo)/2,lo].map(v=>format?format(v):Math.round(v).toLocaleString());
  const grid=[8,H/2,H-8];
  return <div>
    {legend&&<div className="legend" style={{marginBottom:18}}>{series.map((s,i)=><div key={i}><b style={{background:s.color||"var(--series-"+(i+1)+")"}}/>{s.label}</div>)}</div>}
    <div style={{display:"flex",gap:12}}>
      <div className="axis-y" style={{height:H}}>{ticks.map((t,i)=><span key={i} className="t-micro num">{t}</span>)}</div>
      <div style={{flex:1,minWidth:0}}>
        <svg className="chart" style={{height:H}} viewBox={"0 0 "+W+" "+H} preserveAspectRatio="none" aria-label="Line chart">
          {grid.map(g=><line key={g} className="grid" x1="0" y1={g+0.5} x2={W} y2={g+0.5}/>)}
          {series.map((s,i)=><polyline key={i} points={line(s)} fill="none" stroke={s.color||"var(--series-"+(i+1)+")"} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>)}
        </svg>
        {xLabels.length>0&&<div className="axis-x">{xLabels.map((l,i)=><span key={i} className="t-micro">{l}</span>)}</div>}
      </div>
    </div>
  </div>;
}
