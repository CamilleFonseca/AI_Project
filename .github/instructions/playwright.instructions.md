# Playwright QA Execution Instructions

## Scope
- Applies to Playwright test authoring/review under repository governance.

## Required Practices
1. Prefer `getByRole` and accessible selectors.
2. Assert business outcomes after each critical action.
3. Use web-first assertions for synchronization.
4. Capture trace/screenshot/log evidence on retry/failure.

## Prohibited Practices
- `waitForTimeout` without explicit approved waiver.
- Click-only scenarios with no outcome checks.
- Deep structural selectors as default strategy.

## Stage Boundaries
- **Research/Plan stages:** no test implementation.
- **Implement stage:** only approved governance artifacts.
- **Pilot stage:** login-surface only until gate criteria pass.

## Blocker Criteria
- Missing outcome assertions for critical interactions.
- Hard wait usage without approved waiver.
- Fragile deep CSS/XPath as primary selector strategy.
- Retry-only pass behavior with unresolved deterministic failure.
- Missing trace/log/screenshot evidence for retry/failure paths.
- Missing expected outcome mapping for social-entry controls.

## Failure Conditions
- Any blocker from this file or `.github/copilot-instructions.md`.
