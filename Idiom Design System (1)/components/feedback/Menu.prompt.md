Menu — row and object actions that do not deserve a button.

    <Menu items={["Rename","Duplicate","-",{label:"Delete workspace"}]} onSelect={run}/>

Item labels are verbs. Destructive items are plain — the confirming Dialog carries the weight.
