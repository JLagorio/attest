SourceCompare — competing sources for one value, and who settled it.

Resolved:

    <SourceCompare
      rows={[
        {source:"Organization baseline", value:"15", scope:"ACME Defense", authority:"Published default"},
        {source:"Product baseline",      value:"No change", scope:"Falcon v6", authority:"Inherited"},
        {source:"Customer CR-118",       value:"24", scope:"Nighthawk", authority:"Customer source"}
      ]}
      effective={{value:"24", scope:"Nighthawk", authority:"Approved by A. Nkemelu, Aug 12"}}
      note="The organization default is unchanged. Nighthawk carries the stronger value for the life of the contract."/>

Unresolved:

    <SourceCompare conflict
      rows={[
        {source:"PLM export",        value:"TPM Model Y", scope:"Falcon v6", authority:"Source system, synced Aug 19"},
        {source:"Program engineer",  value:"TPM Model Z", scope:"Nighthawk", authority:"Reported Aug 21, unverified"}
      ]}
      note="Six Secure Boot objectives are held at Review required until this is decided. Decision owner: Hardware Engineering."/>

The point of the component is what it refuses to do: no source wins for being stricter, newer, or hand-entered. An unresolved conflict shows as a conflict and blocks the derived work — it does not quietly pick one and move on.

Resolving one of these fires the impact resolver, so say what it releases. Source rows stay visible after resolution; the effective row is added, never a replacement.
