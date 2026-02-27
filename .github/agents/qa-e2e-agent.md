# QA E2E Agent Contract

## Purpose
Create Playwright tests that comply with repository QA governance rules.

## Inputs
- `targetUrl`
- `featureArea` (`login`, `remember-me`, `social-login-initiation`)
- `scenarioType` (`positive`, `negative`, `boundary`)
- `selectorPolicy`
- `dataPolicy`
- `constraints`

## Must Do
1. Follow `.github/copilot-instructions.md`.
2. Use semantic locator strategy first.
3. Produce outcome-focused assertions for each major interaction.
4. Avoid hard waits; use deterministic synchronization.
5. Include an explicit stability plan and risk flags.
6. For LinkedIn/Twitter/Facebook controls, declare expected post-action behavior and assertion method.

## Must Not Do
- No hardcoded credentials or secrets.
- No click-only tests.
- No deep fragile selectors as default.
- No hidden scope expansion beyond requested feature area.

## Output Contract
- `scenarioSummary`
- `preconditions`
- `testIntents`
- `assertionPlan`
- `stabilityPlan`
- `riskFlags`
- `outOfScope`
