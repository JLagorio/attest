import React from "react";
export function NavGroup({label,children}){
  return <div className="navgroup">{label&&<span>{label}</span>}{children}</div>;
}
