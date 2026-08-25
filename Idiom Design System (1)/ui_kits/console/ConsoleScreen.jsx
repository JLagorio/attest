import React from "react";
export function ConsoleScreen(){
  const NS=window.IdiomDesignSystem_c24a1d;
  const [tab,setTab]=React.useState("Overview");
  const [nav,setNav]=React.useState("Programs");
  const [q,setQ]=React.useState("");
  const [why,setWhy]=React.useState(false);
  return <div className="app">
    <NS.ConsoleNav active={nav} onSelect={setNav}/>
    <div style={{minWidth:0,display:"flex",flexDirection:"column"}}>
      <div className="topbar">
        <NS.SearchInput placeholder="Search objectives, assets, packages, findings" value={q} onChange={e=>setQ(e.target.value)}/>
        <div style={{flex:1}}/>
        <NS.IconButton label="Help"><NS.Icon name="help"/></NS.IconButton>
        <NS.IconButton label="Notifications"><NS.Icon name="bell"/></NS.IconButton>
        <NS.Avatar initials="AN"/>
      </div>
      <div className="page">
        <div style={{paddingTop:"var(--space-6)"}}>
          <NS.ObjectHeader
            crumbs={[{label:"Programs",href:"#"},{label:"Falcon product family",href:"#"},{label:"Nighthawk"}]}
            name="Nighthawk" type="Program"
            states={["Active","Reassessment required"]}
            meta={[{label:"Program SSE",value:"A. Nkemelu"},
                   {label:"Profile",value:"ACME moderate, rev 5"},
                   {label:"Customer requirements",value:"CR-101 – CR-140"},
                   {label:"Control freeze",value:"Oct 5"}]}
            actions={<><NS.Button variant="primary" icon={<NS.Icon name="plus" size={15}/>}>Record determination</NS.Button><NS.Button>Export SCTM</NS.Button></>}
            onWhy={()=>setWhy(true)}/>
        </div>
        <NS.Tabs tabs={["Overview","Requirements & controls","Inheritance","Systems","Assessments","Findings","Evidence"]} active={tab} onChange={setTab} style={{marginTop:24}}/>
        <div className="split" style={{marginTop:32}}>
          <NS.ConsoleCollection query={q}/>
          <NS.ConsoleAside/>
        </div>
      </div>
    </div>
    {why&&<>
      <div className="scrim" onClick={()=>setWhy(false)}/>
      <div className="drawer">
        <header>
          <div style={{minWidth:0}}>
            <div className="t-section">Why is Nighthawk in reassessment?</div>
            <div className="t-label" style={{marginTop:2}}>Program assurance state</div>
          </div>
          <div style={{flex:1}}/>
          <NS.IconButton label="Close" onClick={()=>setWhy(false)}><NS.Icon name="close"/></NS.IconButton>
        </header>
        <NS.Provenance state="Reassessment required"
          steps={[{label:"Falcon v6 reported a TPM change on Aug 19",detail:"PLM export said Model Z; the program engineer had confirmed Model Y"},
                  {label:"The conflict was resolved to Model Z on Aug 21",detail:"Hardware Engineering, with authority for component identity"},
                  {label:"The impact resolver found the Secure Boot dependency",detail:"Three objectives assert the TPM model directly"},
                  {label:"Those three objectives moved to Reassessment required",detail:"SI-07(1), SI-07a.[01], CM-06a.[02] · the other 309 stayed as they were"}]}
          residual="Nighthawk owns the reassessment. Enterprise IAM and PKI inheritance is untouched."
          invalidatedBy="A successful targeted reassessment of the three objectives, or a further change to the component identity."
          authority="Assessment lead — M. Okafor"/>
      </div>
    </>}
  </div>;
}
