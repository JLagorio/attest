ObjectHeader — one header for every object: asset, package, program, system, objective, finding.

    <ObjectHeader
      crumbs={[{label:"Organization",href:"#"},{label:"Enterprise Security",href:"#"},{label:"IAM"}]}
      name="Enterprise IAM"
      type="Shared service"
      states={["Canonical/active","Published"]}
      meta={[{label:"Owner",value:"Enterprise Security / IAM"},
             {label:"Source",value:"ServiceNow CMDB"},
             {label:"Version",value:<span className="t-mono">v4.2</span>},
             {label:"Last assessed",value:"Jul 30"}]}
      actions={<><Button variant="primary">Publish version</Button><Button>Assess asset</Button></>}
      onWhy={openDrawer} onActivity={openLog}/>

Carries no border — the Tabs directly beneath it already spend a hairline. Put it above the tabs, never inside them.

`onWhy` is not decoration. If any state in `states` was derived — inherited, effective, impacted, suppressed, reassessment-required — the header must be able to explain it, or the state is not allowed on screen. `meta` values are verbatim: identifiers in `t-mono`, nulls as words ("Unassigned"), never a blank.

Authority lives in `actions`: show the action a user cannot take, disabled, rather than hiding it — then say who can.
