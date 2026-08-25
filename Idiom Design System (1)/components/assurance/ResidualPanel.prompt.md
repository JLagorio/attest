ResidualPanel — inheritance with the local half still visible.

    <ResidualPanel
      provider="Enterprise IAM" version="v4.2"
      covers={38} residual={7} attestation={2}
      lastAssessed="Jul 30" evidence="Restricted — result reusable"
      items={[
        {title:"Local role assignment", meta:"Nighthawk privileged roles · 3 objectives", state:"Awaiting response"},
        {title:"Privileged-role approval workflow", meta:"Program-specific · 2 objectives", state:"Planned"},
        {title:"Removal of program entitlements at offboarding", meta:"2 objectives", state:"Unknown"},
        {title:"Enclave account scope confirmation", meta:"Attestation · 2 objectives", state:"Attestation required"}
      ]}
      actions={<><Button variant="primary">Accept consumption</Button><Button>Review applicability</Button></>}/>

The three counts add to the obligation on purpose. The provider's number never appears alone — that is how a program ends up believing it inherited a control it still owns.

Rules this panel encodes:

- **Restricted is not missing.** "Restricted — result reusable" means the result is valid and the evidence is not yours to read. Never render that as an absence or a broken lock.
- **Attestation is its own count.** Reusable *after* local confirmation is not reused yet.
- **Residual work is named, never counted.** `items` is what makes the residual real; a bare number is a promise nobody can act on.
- **No percentage.** The meter is a composition of three factual counts, not a coverage score.

Use in the aside of an Inheritance Review, or as the body of a package-consumption view. `--series-1..3` in order; no fourth segment exists.
