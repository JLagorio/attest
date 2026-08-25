Provenance — the chain behind a derived state. Lives in a `.drawer`, opened from `ObjectHeader`'s Why link or a row's Why action.

    <Provenance
      state="Inherited — current"
      steps={[
        {label:"Nighthawk consumes Enterprise IAM production configuration X",
         detail:"Declared as a shared dependency at program setup, Aug 4"},
        {label:"Enterprise IAM RAP v4.2 covers IA-05(1)",
         detail:"Published by Enterprise Security / IAM, effective Jul 30"},
        {label:"All six applicability facts matched the package predicate",
         detail:"Identity provider, credential type, enclave class, tenancy, region, FIPS mode"},
        {label:"Provider assessment result is current",
         detail:"Determined Satisfied by M. Okafor on Jul 30 · next review Jan 30"},
        {label:"No material change has invalidated it",
         detail:"Last impact evaluation Aug 24"}
      ]}
      residual="Nighthawk still owns local role assignment and privileged-role approval. One residual task remains."
      invalidatedBy="A change to the identity provider, the credential type, or a new determination on the provider result."
      authority="Enterprise Security / IAM — assurance owner"/>

Seven questions the chain has to answer: what the state is, which sources produced it, which scope and versions apply, which rule or human decision caused it, what residual responsibility remains, what would invalidate it, and who has authority to change the decision underneath.

Two failures this component exists to prevent: an inherited badge with no source or version, and a state the interface cannot account for. If you cannot write the steps, the state is a guess — show Unknown instead.

Keep steps in causal order, not chronological. Never a rule ID as a step label; put the identifier in `detail` and say what the rule did in words.
