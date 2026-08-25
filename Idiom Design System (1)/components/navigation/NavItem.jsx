import React from "react";
export function NavItem({icon,label,count,active,...rest}){
  return <a className={active?"navitem on":"navitem"} aria-current={active?"page":undefined} href="#" {...rest}>{icon}<span className="trunc">{label}</span>{count!=null&&<em>{count}</em>}</a>;
}
