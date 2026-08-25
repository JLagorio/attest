Dialog — one decision, two buttons, right-aligned. The confirm button is the primary, and it may be the screen's only accent while open.

    <Dialog title="Revoke this API key?" confirmLabel="Revoke key" onConfirm={revoke} onDismiss={close}>Requests signed with sk_live_2f1 stop working immediately.</Dialog>

No close X, no icon, no stacked dialogs.
