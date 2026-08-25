import React from "react";
export function IconButton({label,children,...rest}){
  return <button className="iconbtn" aria-label={label} title={label} {...rest}>{children}</button>;
}
