# RPI Plan: Copilot Governance for QA Delivery

Date: 2026-02-25  
Source research baseline: `docs/rpi/research/copilot-governance.md`  
Stage: Plan only (no implementation artifacts in this document).

## Traceability baseline (research-to-plan mapping)

| research evidence theme | plan implication |
|---|---|
| Playwright is the active E2E stack with CI retries and trace-on-retry behavior. | Governance must enforce retry as diagnostic-only and require evidence quality checks. |
| Mandatory blockers are defined: no hard waits, no fragile selectors, no click-only checks, no retry masking, required failure evidence. | Plan must encode blocker-aware prompts/agents and PR gate criteria. |
| Stage discipline is required (Research → Plan → Implement → Pilot). | Plan steps must preserve stage boundaries and implementation sequencing. |
| Social-entry controls require explicit post-action outcomes (redirect/blocked/error/no-op defect signal). | Authoring/review schemas must require explicit outcome mapping per control. |
| Evidence gaps exist around historical flake trends and unknown private scope. | Plan must include acceptance and rollback triggers tied to measurable pilot outcomes. |

## 1) Files to create/update (path, action, owner, phase)

| path | action | owner | phase |
|---|---|---|---|
| `.github/copilot-instructions.md` | update | QA Governance Owner + Repo Maintainer | Phase 1 |
| `.github/instructions/playwright.instructions.md` | update | QA Automation Lead | Phase 1 |
| `.github/agents/qa-delivery.agent.md` | update | QA Automation Lead | Phase 2 |
| `docs/qa/copilot-test-authoring.prompt.md` | update | QA Automation Lead | Phase 3 |
| `docs/qa/copilot-test-review.prompt.md` | update | QA Reviewer Lead | Phase 3 |
| `docs/qa/copilot-flake-triage.prompt.md` | update | QA Reliability Owner | Phase 3 |
| `.github/PULL_REQUEST_TEMPLATE.md` | update | Repo Maintainer | Phase 4 |
| `docs/rpi/research/copilot-governance.md` | update | QA Governance Owner | Phase 5 |

## 2) Purpose of each file

| file | governance purpose |
|---|---|
| `.github/copilot-instructions.md` | Defines non-negotiable QA governance rules (selectors, assertions, waits, retries, evidence) and blocker semantics. |
| `.github/instructions/playwright.instructions.md` | Enforces stack-specific Playwright execution practices aligned to repository standards. |
| `.github/agents/qa-delivery.agent.md` | Constrains agent behavior for stage-aware QA delivery and compliance evidence reporting. |
| `docs/qa/copilot-test-authoring.prompt.md` | Standardizes authoring requests into enforceable scenarios with explicit expected outcomes. |
| `docs/qa/copilot-test-review.prompt.md` | Standardizes policy compliance review output so violations are rule-traceable. |
| `docs/qa/copilot-flake-triage.prompt.md` | Standardizes flaky-failure triage classification with owner/SLA and evidence level. |
| `.github/PULL_REQUEST_TEMPLATE.md` | Converts governance blockers into merge gate checklist items. |
| `docs/rpi/research/copilot-governance.md` | Maintains living research evidence and closes unknowns/evidence gaps after pilot. |

## 3) Ordered implementation steps (traceable)

1. Confirm governance ownership, approvers, and waiver authority (RACI) before rule updates.
2. Ratify rule set from research blockers (hard-wait ban, semantic selectors, outcome assertions, retry diagnostics, evidence capture).
3. Update global and Playwright instruction files with consistent blocker wording and definitions.
4. Update QA delivery agent contract so agent outputs include stage declaration, compliance status, and blocker detection.
5. Update authoring/review/triage prompt files with strict schemas and validation checks.
6. Update PR template so blocker violations prevent approval and require linked evidence.
7. Pilot governance on login-surface and social-entry controls only; collect violations and evidence-quality stats.
8. Reconcile pilot outputs with research unknowns/evidence gaps; update research baseline.
9. Decide expand/hold/rollback based on acceptance and rollback criteria below.

## 4) Prompt/agent output schemas

### 4.1 Prompt schema: `docs/qa/copilot-test-authoring.prompt.md`

- Input fields
  - `targetUrl`
  - `featureArea` (login, checkout, social-entry)
  - `scenarioType` (positive, negative, boundary)
  - `constraints`
  - `dataPolicy`
- Required output sections
  - `scenarioSummary`
  - `preconditions`
  - `actionPlan`
  - `outcomeAssertions`
  - `synchronizationStrategy`
  - `riskFlags`
  - `outOfScope`
- Validation rules
  - Must include post-action outcomes for every critical action.
  - Must prohibit hard waits.
  - Must map social-entry actions to explicit outcome categories.

### 4.2 Prompt schema: `docs/qa/copilot-test-review.prompt.md`

- Input fields
  - `changedFiles`
  - `rulesetVersion`
  - `executionContext`
- Required output sections
  - `complianceSummary`
  - `blockerViolations`
  - `nonBlockerFindings`
  - `requiredFixes`
  - `approvalRecommendation`
- Validation rules
  - Every blocker violation must map to one governance rule.
  - `approvalRecommendation` cannot be `approve` when blocker violations exist.

### 4.3 Prompt schema: `docs/qa/copilot-flake-triage.prompt.md`

- Input fields
  - `failureSignal`
  - `testIdentifier`
  - `retryBehavior`
  - `providerDependency`
- Required output sections
  - `classification`
  - `confidence`
  - `evidenceQuality`
  - `immediateMitigation`
  - `longTermFix`
  - `owner`
  - `sla`
- Validation rules
  - Must distinguish product defect vs test design vs environment vs third-party variance.
  - Must include owner and SLA before triage is considered complete.

### 4.4 Agent schema: `.github/agents/qa-delivery.agent.md`

- Input fields
  - `stage` (research, plan, implement, pilot)
  - `scope`
  - `targetUrls`
  - `artifactPaths`
  - `governanceRulesetVersion`
- Required output sections
  - `stageDeclaration`
  - `workSummary`
  - `complianceCheck`
  - `blockers`
  - `evidence`
  - `nextAction`
- Validation rules
  - Must refuse implementation output during research/plan stages.
  - Must report blocker presence explicitly (`none` allowed).
  - Must include evidence references for claims.

## 5) Acceptance criteria

1. All files listed in Section 1 are updated and reviewed by designated owners.
2. Rule text in global instructions and Playwright instructions is consistent for blocker definitions.
3. Prompt files and agent file validate against Section 4 schemas (all required fields/sections present).
4. PR template includes blocker-gate checklist items that map to research blockers.
5. Pilot outputs demonstrate outcome assertions for critical actions (no click-only pass criteria).
6. Pilot outputs show zero unauthorized hard waits and no retry-only masking of deterministic failures.
7. Research baseline is updated with pilot findings in `facts | assumptions | unknowns | risks | evidence gaps` format.

## 6) Rollback criteria

Rollback triggers:

1. Blocker false-positive rate exceeds agreed threshold for two consecutive sprint cycles.
2. Governance adoption causes sustained PR throughput degradation beyond agreed tolerance.
3. Deterministic failures are still passing only via retries after governance rollout.
4. Stage boundary violations recur (implementation artifacts produced in research/plan stages).
5. Owner-level review cannot reach policy interpretation agreement after calibration cycle.

Rollback actions:

1. Revert governance docs to last approved stable revision.
2. Freeze net-new governance rule additions.
3. Retain only baseline non-controversial controls (hard-wait ban, outcome assertions, no cross-test coupling).
4. Re-run pilot on minimal scope and re-baseline metrics.
5. Reintroduce deferred rules incrementally with explicit owner sign-off.
