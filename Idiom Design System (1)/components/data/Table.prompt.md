Table — table-layout is fixed, so give every column a width except the one fluid column, and let long cells truncate.

    <Table columns={[{label:"Objective",width:118},{label:"Statement"},{label:"Owner",width:170},{label:"State",width:170},{label:"Updated",width:100}]}>
      <tr className={sel?"on":undefined}><td><span className="t-mono">AC-06(1)</span></td><td className="trunc">Access to security functions restricted</td><td>Platform Security</td><td><StateBadge state="Ready for review"/></td><td className="t-micro">6h ago</td></tr>
    </Table>

Numeric columns are right-aligned and carry .num. Badge at most a third of the rows.
