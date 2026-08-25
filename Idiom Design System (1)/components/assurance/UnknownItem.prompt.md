UnknownItem — an unknown, made into work.

    <UnknownItem
      subject="Processor / SoC"
      what="Production SoC has not been selected."
      blocks={["Blocks 8 implementation mappings","3 assessment objectives"]}
      owner="Hardware Engineering" neededBy="Sep 14"
      action={<Button>Assign discovery</Button>}/>

    <UnknownItem
      subject="Production signing configuration"
      what="Reported as Enabled in the baseline, unconfirmed on this build."
      blocks={["Blocks attestation on 2 objectives","Evidence request open"]}
      owner={null} neededBy="Sep 2"
      action={<Button>Assign discovery</Button>}/>

An incomplete architecture creates work, not a false Not applicable. Every unknown says what it blocks and who has to resolve it; `owner={null}` renders "Unassigned", which is a real answer and reads as one.

Stack these directly under a system or baseline overview, **above** any state summary — the unknowns are what the summary is missing. Whisper separators only; no card, no border, no icon.

Do not use for a state that is merely unreviewed or awaiting a response — those are attention states on the item itself. This is for facts nobody has established.
