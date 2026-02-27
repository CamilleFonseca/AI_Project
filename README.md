# AI_Project — Playwright E2E Tests

This repository contains Playwright end-to-end tests focused on checkout and login stabilization for the Saucedemo example application. It includes test specs, page objects, traces and saved reports used during QA and flake triage.

**Contents**
- `playwright.config.ts` — Playwright configuration and projects
- `tests/` — Test specs (e.g. `tests/checkout/login.spec.ts`)
- `pages/` — Page objects (e.g. `pages/login.page.ts`)
- `data/`, `trace/`, `test-results/`, `playwright-report/` — artifacts and reports
- `docs/` — QA, RPI research/plan/implement governance docs

Prerequisites
- Node.js 16+ (or the version defined in project CI)
- npm or yarn

Quick setup

```bash
# install dependencies
npm install
# install Playwright browsers (if not installed via postinstall)
npx playwright install --with-deps
```

Running tests

```bash
# run all tests
npx playwright test

# run a single test file
npx playwright test tests/checkout/login.spec.ts

# run with a specific project (chromium/firefox/webkit)
npx playwright test -p chromium
```

Useful files
- `playwright.config.ts` — see configured projects, timeouts, reporters
- `tests/checkout/login.spec.ts` — example spec covering login + checkout flow
- `pages/login.page.ts` — page object used by tests
- `playwright-report/` — saved HTML reports

Project conventions
- Use page objects under `pages/` for UI interactions
- Store traces and artifacts under `trace/` and `test-results/` for triage
- Prefer semantic locators and assertion-driven waits (see governance docs)

Governance & QA notes
- This repo includes Copilot QA governance and research artifacts under `docs/qa` and `docs/rpi`.
- Follow the rules in `docs/rpi/implement/copilot-governance.md` for test authoring and flaky test handling.


