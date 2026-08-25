import React from "react";
export function Pagination({start,end,total,label="rows",onPrev,onNext}){
  return <div className="pager"><span className="num">{start}–{end} of {total} {label}</span><div style={{display:"flex",gap:8}}><button className="btn quiet" onClick={onPrev} disabled={start<=1}>Previous</button><button className="btn quiet" onClick={onNext} disabled={end>=total}>Next</button></div></div>;
}
