# RPI Prompt: Research Stage

## Intent
Perform governance research only.

## Inputs
- `scope`
- `targetUrls`
- `artifactPaths`

## Required Output Format
`facts | assumptions | unknowns | risks | evidence gaps`

## Stage Boundary
- Do not create implementation artifacts or production test code.

## Failure Conditions
- Any claim without repository evidence.
- Missing evidence gaps for unresolved unknowns.
