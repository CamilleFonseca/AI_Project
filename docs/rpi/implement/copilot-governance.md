# RPI Implement Evidence: Copilot Governance

Date: 2026-02-24  
Plan source: `docs/rpi/plan/copilot-governance.md`

## 1) Summary of files created/updated

### Updated
- `.github/copilot-instructions.md`

### Created
- `.github/instructions/playwright.instructions.md`
- `.github/prompts/rpi-research.prompt.md`
- `.github/prompts/rpi-plan.prompt.md`
- `.github/prompts/rpi-implement.prompt.md`
- `.github/agents/qa-delivery.agent.md`
- `docs/rpi/implement/copilot-governance.md` (this evidence file)

## 2) Rationale for key constraints

- **Strict stage boundaries** prevent premature coding and keep Research/Plan decisions auditable.
- **Blocker-first failure conditions** ensure non-negotiable quality gates are explicit and reviewable.
- **Allow-list execution model** reduces accidental scope expansion and protects repo stability.
- **Concise, enforceable language** makes prompt/agent behavior deterministic and easier to validate.

## 3) Validation steps (prompts recognized and usable)

1. Open each prompt file under `.github/prompts/` and confirm it includes:
   - intent,
   - stage boundary,
   - failure conditions,
   - required output contract.
2. In Copilot Chat, invoke each stage command/context and verify response behavior aligns:
   - research responses use evidence matrix style,
   - plan responses include ordered steps + acceptance/rollback,
   - implement responses respect allow-list and include validation + residual risks.
3. Confirm `.github/copilot-instructions.md` is loaded by asking Copilot to summarize repo QA guardrails.
4. Validate agent contract discoverability by referencing `.github/agents/qa-delivery.agent.md` in a governance task prompt.
5. Run a dry-run review prompt and ensure blocker violations force non-pass recommendation.

## 4) Residual risks / follow-ups

- Existing legacy governance files from prior scaffolding may diverge from this allow-listed artifact set.
- Prompt adherence is policy-driven; automated lint/policy checks are still a follow-up.
- Ownership/RACI approval workflow remains organizational and should be formally recorded.
- Pilot-stage measurement thresholds (false-positive tolerance, slowdown thresholds) need concrete numeric targets.
