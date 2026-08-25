import React from "react";
export function Dialog({open=true,title,children,confirm,confirmLabel="Confirm",dismissLabel="Cancel",onConfirm,onDismiss}){
  if(!open)return null;
  return <div className="scrim" role="dialog" aria-modal="true" aria-label={title} onClick={e=>{if(e.target===e.currentTarget&&onDismiss)onDismiss();}}>
    <div className="dialog">
      <div className="t-section">{title}</div>
      <div className="t-label" style={{marginTop:8}}>{children}</div>
      <footer><button className="btn" onClick={onDismiss}>{dismissLabel}</button>{confirm!==false&&<button className="btn primary" onClick={onConfirm}>{confirmLabel}</button>}</footer>
    </div>
  </div>;
}
