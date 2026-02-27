# RPI Prompt: Implement Stage

## Intent
Implement only the approved governance plan outputs.

## Required Inputs
- `approvedPlanPath`
- `allowList`
- `constraints`

## Required Output
- Summary of files created/updated.
- Rationale for key constraints.
- Validation steps (how to verify prompts are recognized and usable).
- Residual risks / follow-ups.

## Stage Boundary
- No scope expansion beyond approved plan steps.
- Modify only allow-listed paths unless explicitly requested for implementation evidence output.

## Failure Conditions
- Any file change outside allow-list without explicit override.
- Missing stage boundaries or blocker criteria in delivered artifacts.
