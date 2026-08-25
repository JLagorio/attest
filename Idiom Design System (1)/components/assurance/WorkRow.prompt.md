WorkRow — the unit of Home. Everything a person has been asked for, in the words they were asked in.

    <WorkRow
      title="Describe how privileged account requests are approved"
      kind="Question" target="Nightwing · Tactical Management Controller"
      owner="You" due="Today" state="Awaiting response"
      blocking="Blocks the Oct 5 control freeze" onOpen={open}/>

    <WorkRow
      title="14 responses ready for review"
      kind="Determination" target="TMC FY26 assessment"
      due="Today" state="Ready for review" onOpen={open}/>

    <WorkRow
      title="Confirm the production signing configuration"
      kind="Evidence request" target="Falcon v6 · signing service"
      owner="Unassigned" due="Sep 2" state="Unknown" onOpen={open}/>

The framework identifier is not the title. "AC-06(1)" tells a firmware engineer nothing; "Confirm who may change secure-boot keys" tells them exactly what to write. Put the identifier in `kind`/`target` or in the task's own context drawer.

`blocking` is the only place problem ink appears in a row, and only when a milestone genuinely depends on it. Everything overdue is not blocking; use it and it stops meaning anything.

Rows are a queue, not a table — no header, whisper separators, entire row is the hit target. For an assessor's objective list with sortable columns, use `Table` instead.
