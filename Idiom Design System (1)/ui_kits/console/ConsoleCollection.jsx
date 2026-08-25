import React from "react";
const ROWS=[
 ["SC-07b.[01]","Boundary protection at external interfaces of the Tactical Management Controller",null,"Unknown","Aug 12"],
 ["SC-28(1)","Data-at-rest protection on removable mission data stores",null,"Unknown","Aug 9"],
 ["CA-03a.[01]","Interconnection agreements executed for each external system connection",null,"Unknown","Jul 12"],
 ["CM-06a.[02]","Configuration settings applied and deviations documented per baseline GW-STD-11","Network Eng","Other than satisfied","Aug 19"],
 ["RA-05a.[01]","Vulnerability scanning performed on the air-gapped enclave at defined intervals","Vuln Mgmt","Other than satisfied","Jul 15"],
 ["AC-17a.[01]","Remote access methods documented, authorized and monitored across maintenance paths","Enterprise VPN","Reassessment required","Yesterday"],
 ["SI-02c.[01]","Flaw remediation within organization-defined response times for fielded firmware","Firmware Eng","Reassessment required","Jul 27"],
 ["AC-02g.[01]","Privileged account use monitored and reported per organization policy","SOC","Ready for review","6h ago"],
 ["AC-06(1)","Access to security functions restricted to explicitly authorized personnel","Platform Security","Ready for review","Yesterday"],
 ["AU-12a.[02]","Audit records generated for the events defined in AU-2 on all TMC subsystems","SOC","Awaiting response","Aug 20"],
 ["IA-05(1)","Password-based authenticator strength enforced at the enterprise identity provider","Enterprise IAM","Awaiting response","Aug 15"],
 ["SC-08(1)","Transmission confidentiality protected by cryptographic mechanisms on C2 links","Comms Eng","Insufficient information","Aug 12"],
 ["MA-04a.[02]","Nonlocal maintenance sessions approved, monitored and terminated on completion","Field Support","In progress","Jul 18"],
 ["SR-05a.[01]","Acquisition strategies applied to limit supply chain exposure for COTS boards","Supply Chain","Awaiting response","Jul 9"],
 ["SI-04a.[01]","Monitoring objectives defined for the TMC operational network segment","SOC","Planned","Jul 27"]
];
export function ConsoleCollection({query}){
  const NS=window.IdiomDesignSystem_c24a1d;
  const [sel,setSel]=React.useState("AC-06(1)");
  const q=(query||"").toLowerCase();
  const rows=ROWS.filter(r=>!q||(r[0]+" "+r[1]+" "+(r[2]||"")+" "+r[3]).toLowerCase().includes(q));
  return <section>
    <NS.FilterBar label="Assessment cycle" value="FY26 Q3"/>
    <div className="metrics" style={{marginTop:28}}>
      <NS.Metric label="Objectives in scope" value="312" note="from the effective profile"/>
      <NS.Metric label="Resolved by inheritance" value="128" note="6 packages, all current"/>
      <NS.Metric label="Residual local work" value="184" note="63 not yet started"/>
      <NS.Metric label="Unknown" value="41" note="14 without an owner"/>
    </div>
    <h2 className="t-section" style={{marginTop:44,marginBottom:14}}>Objectives determined, by month</h2>
    <NS.LineChart min={0} max={220} height={210}
      xLabels={["Sep","Nov","Jan","Mar","May","Jul","Aug"]}
      format={v=>String(Math.round(v))}
      series={[
        {label:"Determined",points:[18,34,62,88,124,168,212]},
        {label:"Inherited",points:[44,58,71,96,112,124,128]},
        {label:"Unknown",points:[96,88,74,66,58,47,41]}
      ]}/>
    <h2 className="t-section" style={{marginTop:48,marginBottom:14}}>Needs determination</h2>
    {rows.length===0
      ?<NS.EmptyState title="No objectives match this search"
         body="Clear the search to see all 312 objectives in the effective profile, including the 128 resolved by inherited assurance."
         action={<NS.Button>Clear search</NS.Button>}/>
      :<><NS.Table columns={[{label:"Objective",width:118},{label:"Statement"},{label:"Owner",width:170},{label:"State",width:170},{label:"Updated",width:100}]}>
        {rows.map(r=><tr key={r[0]} className={sel===r[0]?"on":undefined} onClick={()=>setSel(sel===r[0]?null:r[0])}>
          <td><span className="t-mono">{r[0]}</span></td>
          <td>{r[1]}</td>
          <td>{r[2]||<span className="muted">Unassigned</span>}</td>
          <td><NS.StateBadge state={r[3]}/></td>
          <td className="t-micro">{r[4]}</td>
        </tr>)}
      </NS.Table>
      <div style={{marginTop:20}}><NS.Pagination start={1} end={rows.length} total={184} label="residual objectives"/></div></>}
  </section>;
}
