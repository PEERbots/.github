---
name: peerbots-qa-runner
description: Step 2 of Peerbots' two-step QA workflow. Runs Playwright E2E suites against Firebase PR preview URLs, inspects traces/screenshots on failure, and produces structured P0/P1/P2 QA reports including remaining Manual/Hardware checks.
---

# Peerbots QA Runner Skill (Step 2)

Use this skill to independently verify a PR or Firebase Preview URL against the repository's `docs/QA_CHECKLIST.md` and Playwright E2E suite.

## Execution Workflow

1. **Run Automated Checks Against the Preview URL**:
   - Execute `PLAYWRIGHT_BASE_URL=<preview-url> npx playwright test` (filtering by `@p0` / `@p1` / `@p2` as requested).
   - Capture HTML reports, failure screenshots, and Playwright `.zip` traces.
2. **Triage Failures**:
   - For every failing test, distinguish between a real product regression, an environment/preview issue, or a flaky selector.
   - Attach exact test case IDs (`TC-...`), reproduction steps, screenshots, and trace artifact references.
3. **Report Structured Findings on the PR**:
   - Summarize results grouped by **P0 (Blocker)**, **P1 (Core)**, and **P2 (Edge / Mobile / WCAG 2.1 AA / i18n+RTL)**.
   - Explicitly list all remaining **`[Manual / Hardware]`** test cases from `docs/QA_CHECKLIST.md` that require human verification on physical devices before release.
