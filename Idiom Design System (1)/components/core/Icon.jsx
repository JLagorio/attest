import React from "react";
const G={
search:[["circle",{cx:11,cy:11,r:7}],["path",{d:"m20 20-3.6-3.6"}]],
home:[["path",{d:"M3.5 10.5 12 3.5l8.5 7"}],["path",{d:"M5.5 9.6V20.5h13V9.6"}]],
org:[["rect",{x:3.5,y:3.5,width:10,height:17,rx:1.5}],["path",{d:"M13.5 8.5h7v12h-7M6.5 7.5h4M6.5 11.5h4M6.5 15.5h4"}]],
box:[["path",{d:"M12 3.2 3.7 7.6v8.8L12 20.8l8.3-4.4V7.6L12 3.2Z"}],["path",{d:"M3.7 7.6 12 12l8.3-4.4M12 12v8.8"}]],
lib:[["path",{d:"M4.5 4v16M8.5 4v16"}],["path",{d:"m12.5 5.4 4.6-1 3 14.2-4.6 1z"}]],
lay:[["path",{d:"m12 3.4 8.4 4.7-8.4 4.7-8.4-4.7 8.4-4.7Z"}],["path",{d:"m3.6 13.4 8.4 4.7 8.4-4.7"}]],
clip:[["rect",{x:5,y:4,width:14,height:16.5,rx:2}],["path",{d:"M9.2 4h5.6v3H9.2zM9 12.5h6M9 16h4"}]],
inbox:[["path",{d:"M4 13.2h4.2l1.4 2.9h4.8l1.4-2.9H20"}],["path",{d:"M4 13.2 6 5.2h12l2 8v6.6H4v-6.6Z"}]],
flag:[["path",{d:"M5.5 20.5V4h11l-1.6 4.2 1.6 4.2h-11"}]],
shield:[["path",{d:"M12 3.4 5.4 6.2v6c0 4.4 2.9 7.4 6.6 8.7 3.7-1.3 6.6-4.3 6.6-8.7v-6L12 3.4Z"}],["path",{d:"M12 9.2v4M12 16.1h.01"}]],
chev:[["path",{d:"m6 9.5 6 6 6-6"}]],
help:[["circle",{cx:12,cy:12,r:8.5}],["path",{d:"M9.8 9.6a2.3 2.3 0 1 1 2.7 2.3v1.4M12.5 16.6h.01"}]],
bell:[["path",{d:"M18 15.5V10a6 6 0 1 0-12 0v5.5L4.5 18h15L18 15.5Z"}],["path",{d:"M10 20.5h4"}]],
gear:[["circle",{cx:12,cy:12,r:3}],["path",{d:"M12 3.2v2.3M12 18.5v2.3M20.8 12h-2.3M5.5 12H3.2M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6M18.2 18.2l-1.6-1.6M7.4 7.4 5.8 5.8"}]],
plus:[["path",{d:"M12 5.5v13M5.5 12h13"}]],
check:[["path",{d:"m5.5 12.4 4.4 4.4L18.5 7.6"}]],
close:[["path",{d:"M6.2 6.2l11.6 11.6M17.8 6.2 6.2 17.8"}]],
chevr:[["path",{d:"m9.5 6 6 6-6 6"}]]
};
export function Icon({name,size=18,style,...rest}){
  const g=G[name]||[];
  return React.createElement("svg",Object.assign({className:"icon",viewBox:"0 0 24 24",style:Object.assign({width:size,height:size},style),"aria-hidden":true},rest),g.map((e,i)=>React.createElement(e[0],Object.assign({key:i},e[1]))));
}
Icon.names=Object.keys(G);
