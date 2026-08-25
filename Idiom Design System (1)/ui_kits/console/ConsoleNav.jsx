import React from "react";
const GROUPS=[
 {label:null,items:[["home","Home","6"],["org","Organization","23"],["box","Assets","4,112"],["lib","Library","57"]]},
 {label:"Delivery",items:[["lay","Products & systems","48"],["clip","Programs","6"]]},
 {label:"Assurance work",items:[["inbox","Assessments","3"],["flag","Findings","96"],["shield","Risks & POA&M","9"]]}
];
export function ConsoleNav({active,onSelect}){
  const NS=window.IdiomDesignSystem_c24a1d;
  return <nav>
    <div className="brand" style={{padding:"0 8px",marginBottom:26}}><div className="brand-mark">PA</div><div className="brand-name">Assurance</div></div>
    {GROUPS.map((g,i)=><NS.NavGroup key={i} label={g.label||undefined}>
      {g.items.map(it=><NS.NavItem key={it[1]} icon={<NS.Icon name={it[0]}/>} label={it[1]} count={it[2]||undefined} active={active===it[1]} onClick={e=>{e.preventDefault();onSelect&&onSelect(it[1]);}}/>)}
    </NS.NavGroup>)}
  </nav>;
}
