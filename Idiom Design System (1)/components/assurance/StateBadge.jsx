import React from "react";
/* The platform's state vocabulary, mapped to four tints. Labels are readable without colour;
   the tint only says how loud the state is. Satisfied is deliberately absent from every tone. */
const TONE={};
const put=(tone,labels)=>labels.forEach(l=>TONE[l]=tone);
put("none",["satisfied","verified","current","canonical/active","accepted/validated","confirmed unchanged","no known impact","complete"]);
put("neutral",["planned","new","packaged","assigned","delegated","inherited","inherited — current","inherited - current","local","candidate","local/candidate","program-specific","draft","published","superseded","retired","applicable","active","not applicable","closed","accepted as input","triaged","approved","merged/superseded","ended/superseded","false positive","accepted/deferred","metadata-only","result visible"]);
put("attention",["awaiting response","in progress","submitted","ready for review","clarification requested","insufficient information","insufficient info","attestation required","needs review","review required","under review","reassessment required","reassess","expiring","ready for validation","remediation planned","in remediation","open","duplicate review","scope review","promotion review","evidence stale","partially active","delta","unreviewed","candidate/unreviewed","returned for clarification","waiting on response"]);
put("problem",["other than satisfied","not satisfied","conflict","impacted","expired","revoked","rejected/kept local","rejected","overdue","blocked","invalidated"]);
put("unknown",["unknown","not reviewed","evidence restricted","restricted","implementation detail restricted","boundary unknown","unresolved"]);
export function toneFor(state){return TONE[String(state||"").trim().toLowerCase()]||"neutral";}
export function StateBadge({state,tone,children,hideSatisfied=false}){
  const label=children||state;
  const t=tone||toneFor(state);
  if(t==="none")return hideSatisfied?null:<span className="muted">{label}</span>;
  return <span className={"badge "+t}>{label}</span>;
}
