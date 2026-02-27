# Copilot Prompt Schema: QA Test Review

## Stage Boundary
- Use for Implement/Pilot governance review outputs only.
- Must not produce test implementation content.

## Input fields
- `changedFiles`
- `rulesetVersion`
- `executionContext`

## Required output sections
- `complianceSummary`
- `blockerViolations`
- `nonBlockerFindings`
- `requiredFixes`
- `approvalRecommendation`

## Validation rules
1. Every blocker violation must map to one governance rule.
2. `approvalRecommendation` cannot be `approve` when blocker violations exist.
