## Summary
- What changed:
- Why it changed:

## QA Governance Checklist (Required)
- [ ] Follows `.github/copilot-instructions.md`
- [ ] Stage boundary respected for current RPI phase (Research/Plan/Implement/Pilot)
- [ ] No hard waits (`waitForTimeout`) without approved waiver
- [ ] Uses stable/semantic selector strategy
- [ ] Includes outcome assertions (not click-only)
- [ ] Avoids cross-test coupling
- [ ] No hardcoded credentials/secrets
- [ ] Includes evidence plan for failures/retries (trace/screenshot/log)
- [ ] Social-entry controls assert explicit post-action outcome (`redirect`/`blocked`/`error`/`known no-op defect signal`)

## Scope and Risk
- Feature area:
- Risk level (`low`/`medium`/`high`):
- Known constraints:

## Evidence Links
- Test run/report:
- Trace/screenshot/log artifacts:
- Flake triage notes (if applicable):

## Review Outcome
- [ ] Ready for review
- [ ] Blocking governance issues remain
