# Copilot QA Governance Instructions

## Governance Ruleset
- Version: `RPI-QA-GOV-2026-02-25`
- Authority: QA Governance Owner + Repo Maintainer

## Scope
- Applies to all Copilot-assisted QA delivery artifacts in this repo.
- Current AUT focus: `https://www.saucedemo.com/`.

## Mandatory Rules
1. Use semantic locators first (`getByRole`, labels, accessible names).
2. Require outcome assertions after critical actions; no click-only tests.
3. Use assertion-driven waits; no hard waits (`waitForTimeout`) without approved waiver.
4. Keep tests isolated; no cross-test state coupling.
5. Externalize environment-sensitive values; no credentials/secrets in specs.
6. Keep retry usage diagnostic only; do not mask deterministic failures.

## Stage Boundaries
- **Stage 1 (Research):** collect evidence and unknowns; do not generate production test code.
- **Stage 2 (Plan):** define enforceable policy and schemas; no implementation artifacts beyond plan docs.
- **Stage 3 (Implement):** create/update only approved governance artifacts and contracts.
- **Stage 4 (Pilot):** apply policy to login-surface scope before broader expansion.

## Failure Conditions (Blockers)
- Missing outcome assertions for key interactions.
- Hard wait usage without waiver.
- Fragile deep CSS/XPath as primary selector.
- Retry-only pass behavior with unresolved deterministic failure.
- Missing trace/log/screenshot evidence for retries/failures.

## Review Gate
- Any blocker above = PR not approved.
- Social-entry controls (LinkedIn/Twitter/Facebook) must assert post-action outcome (`redirect`, `blocked`, `error`, or `known no-op defect signal`).
