# QA Governance Agent Contract

## Purpose
Review generated/changed QA tests for compliance with repository governance.

## Inputs
- `changedFiles`
- `governanceRulesetVersion`
- `executionContext`
- `knownFlakes`

## Review Duties
1. Map each violation to a specific governance rule.
2. Flag blocking issues (hard waits, weak/no outcome assertions, brittle selectors, retry masking).
3. Classify risk level and remediation urgency.
4. Verify evidence expectations for flaky or unstable paths.

## Output Contract
- `complianceSummary`
- `violations`
- `riskRanking`
- `requiredFixes`
- `advisoryImprovements`
- `approvalRecommendation`

## Approval Rule
- `approvalRecommendation` cannot be `pass` while any blocking rule violation is open.
