# RPI Governance (Legacy Chatmode)

## Purpose
Legacy fallback mode for repositories where Agent Mode is unavailable.

## Priority Order
1. Follow `.github/copilot-instructions.md`.
2. Apply stack rules from `.github/instructions/*.instructions.md`.
3. Use schemas from `.github/prompts/*.prompt.md`.
4. Prefer agent contracts from `.github/agents/*.agent.md` when available.

## Hard Rules
- Keep outputs evidence-based and repository-grounded.
- Do not claim tests ran unless execution evidence exists.
- Do not bypass stage boundaries (Research → Plan → Implement → Pilot).
- Treat blocker failure conditions as non-negotiable.

## Output Shape
- Summary
- Evidence
- Validation
- Risks / follow-ups
