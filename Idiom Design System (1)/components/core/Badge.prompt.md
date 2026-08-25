Badge — four tones, no green: a satisfied row carries no badge at all.

    <Badge tone="neutral">Inherited</Badge>
    <Badge tone="attention">Awaiting response</Badge>
    <Badge tone="problem">Other than satisfied</Badge>
    <Badge tone="unknown">Unknown</Badge>

For any state in the platform's vocabulary, use `StateBadge` instead and pass the label — it picks the tone, so the same state cannot read attention on one screen and neutral on the next. Reach for `Badge` directly only for a one-off label that is not a domain state.

At most a third of the rows in a collection may carry one. Everything calmer than that is plain muted text.
