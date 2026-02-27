# Copilot Prompt Schema: QA Test Authoring

## Stage Boundary
- Governed usage during Implement/Pilot stages only.
- Must not generate production test implementation during Research/Plan.

## Input fields
- `targetUrl`
- `featureArea` (`login`, `checkout`, `social-entry`)
- `scenarioType` (`positive`, `negative`, `boundary`)
- `constraints`
- `dataPolicy`

## Required output sections
- `scenarioSummary`
- `preconditions`
- `actionPlan`
- `outcomeAssertions`
- `synchronizationStrategy`
- `riskFlags`
- `outOfScope`

## Validation rules
1. Must include post-action outcomes for every critical action.
2. Must prohibit hard waits (`waitForTimeout`) without approved waiver.
3. Must map social-entry actions to explicit outcome categories (`redirect`, `blocked`, `error`, `known no-op defect signal`).
4. Must avoid click-only success criteria.
