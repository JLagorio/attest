ListRow — the generic list unit: activity feeds, queues, member lists, anything in the subordinate column.

    <ListRow title="Invoice 4021 failed" meta="Northwind · card declined" trailing={<Badge tone="problem">Retry</Badge>}/>
    <ListRow title="Ana Duarte" meta="Admin · joined Aug 12" trailing={<span className="t-micro">3 keys</span>}/>

Stack them under a t-section heading; the section reads as a group because of the space around it, not a box.
