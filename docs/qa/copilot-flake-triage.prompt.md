# Copilot Prompt Schema: QA Flake Triage

## Stage Boundary
- Use for Pilot triage and post-pilot governance tuning.
- Must not modify test implementation directly.

## Input fields
- `failureSignal` (trace/log/screenshot summary)
- `testIdentifier`
- `retryBehavior`
- `providerDependency` (`none`, `twitter`, `facebook`, `linkedin`)

## Required output sections
- `classification` (`product`, `test-design`, `environment`, `third-party-auth`)
- `confidence`
- `evidenceQuality`
- `immediateMitigation`
- `longTermFix`
- `owner`
- `sla`

## Validation rules
1. Must separate third-party auth variance from product defects.
2. Must assign owner and SLA for each triaged failure.
3. Must include evidence quality level (trace/log/screenshot) before labeling as environment or third-party variance.
