import React from "react";
export function Button({variant="secondary",icon,children,...rest}){
  return <button className={"btn"+(variant!=="secondary"?" "+variant:"")} {...rest}>{icon}{children}</button>;
}
