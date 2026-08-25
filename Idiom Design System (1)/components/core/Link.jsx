import React from "react";
export function Link({children,...rest}){
  return <a className="link" {...rest}>{children}</a>;
}
