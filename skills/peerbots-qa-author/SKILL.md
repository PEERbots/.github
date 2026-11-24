---
name: peerbots-qa-author
description: Step 1 of Peerbots' two-step QA workflow. Creates and maintains ISO/IEC/IEEE 29119 + Gherkin/BDD hierarchical QA checklists (docs/QA_CHECKLIST.md) and Playwright E2E specs for features and PRs.
---

# Peerbots QA Author Skill (Step 1)

Use this skill when designing QA coverage for a new feature, refactoring user flows, or updating E2E tests in any Peerbots repository.

## Responsibilities

1. **Follow `PEERbots/.github/docs/QA_STANDARDS.md`**:
   - Organize `docs/QA_CHECKLIST.md` hierarchically: `Feature Area → User Journey → Test Case`.
   - Write every test case with an ID, Priority (`P0`, `P1`, `P2`), Execution Mode tag (`[Automated: Playwright]`, `[Automated: Storybook / Vitest]`, `[Automated: Real-Device Cloud]`, or `[Manual / Hardware]`), Preconditions, and Gherkin `Given / When / Then` steps.
2. **Separate Automated vs. Manual/Hardware Explicitly**:
   - Automate deterministic browser/DOM/network/a11y/i18n/RTL checks in `@playwright/test` (`e2e/*.spec.ts`) or Storybook/Vitest.
   - Explicitly tag physical-world checks (e.g., iPhone hardware silent switch, physical robot hardware, classroom audio) as `[Manual / Hardware]` so they are never silently skipped.
3. **Tag Specs by Priority**:
   - Include `@p0`, `@p1`, or `@p2` in Playwright test titles so CI can run fast P0 smoke gates on every PR and full P1/P2 suites on releases.
4. **Handoff to QA Runner**:
   - Do not self-grade preview deployments in the same pass — hand off the updated checklist & Playwright specs to a QA Runner agent (`peerbots-qa-runner`) to execute against the Firebase PR preview URL.
