import React from "react";
const WORK=[
 ["14 responses ready for review","Determination","TMC FY26 assessment","Today","Ready for review",null],
 ["Determine AC-06(1)","Determination","Platform Security response accepted as input","Today","Ready for review","Blocks the Oct 5 control freeze"],
 ["Answer J. Whitfield on IA-05(1)","Clarification","Which IdP policy applies to the enclave","Aug 26","Clarification requested",null],
 ["Re-evaluate Enterprise VPN consumption","Applicability review","6 dependent objectives","Aug 28","Impacted",null],
 ["Attest device certificate scope","Attestation","Enterprise PKI v3.2","Sep 2","Attestation required",null]
];
const UPSTREAM=[
 ["Enterprise VPN v2.8","Gateway config moved to GW-STD-12","Impacted"],
 ["Enterprise PKI v3.2","You consume v3.1","Delta"],
 ["Enterprise MDM v5.0","Contradicts the lab asset assertion","Conflict"]
];
export function ConsoleAside(){
  const NS=window.IdiomDesignSystem_c24a1d;
  return <aside>
    <div style={{marginBottom:44}}>
      <div className="t-strong" style={{marginBottom:14}}>Enterprise IAM v4.2</div>
      <NS.ResidualPanel covers={38} residual={7} attestation={2}
        lastAssessed="Jul 30" evidence="Restricted — result reusable"
        actions={<NS.Button>Review applicability</NS.Button>}/>
    </div>
    <div style={{marginBottom:44}}>
      <div className="t-strong" style={{marginBottom:6}}>Waiting on you</div>
      {WORK.map(w=><NS.WorkRow key={w[0]} title={w[0]} kind={w[1]} target={w[2]} due={w[3]} state={w[4]} blocking={w[5]||undefined}/>)}
      <NS.Link href="#" style={{display:"inline-block",marginTop:16}}>View all 23</NS.Link>
    </div>
    <div>
      <div className="t-strong" style={{marginBottom:6}}>Changed upstream</div>
      {UPSTREAM.map(u=><NS.ListRow key={u[0]} title={u[0]} meta={u[1]} trailing={<NS.StateBadge state={u[2]}/>}/>)}
      <NS.Link href="#" style={{display:"inline-block",marginTop:16}}>Review changes</NS.Link>
    </div>
  </aside>;
}
