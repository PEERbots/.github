# Peerbots Org-Wide QA Standards

This document defines the shared Quality Assurance (QA) standard across all Peerbots repositories, complementing our existing **Vitest**, **Storybook** (`@storybook/addon-vitest` + `addon-a11y`), **Chromatic**, **Pa11y CI**, **Lighthouse CI**, and **Firebase PR Preview** stack.

---

## 1. Hierarchical QA Checklist Format (ISO/IEC/IEEE 29119 + Gherkin/BDD)

Every application repository maintains a `docs/QA_CHECKLIST.md` (copied from [`templates/QA_CHECKLIST.template.md`](../templates/QA_CHECKLIST.template.md)) structured in three levels:

```text
Feature Area
  └── User Journey
        └── Test Case (ID, Priority, Execution Mode, Preconditions, Given/When/Then)
```

### Priority Tiers & Release Gates
| Priority | Scope | Gate Policy |
| :--- | :--- | :--- |
| **P0 — Smoke / Blocker** | App boot, auth, live robot control/face rendering, TTS/audio playback, critical Firestore/Storage security rules | **Hard PR merge gate** (100% pass required) |
| **P1 — Core Flows** | Authoring, Marketplace browsing/cloning, template upload, cross-browser parity | **Required before release** (runs on PRs & `main`) |
| **P2 — Edge Cases & Quality Bars** | Mobile viewports, **WCAG 2.1 AA**, **i18n + RTL**, slow/offline network, WebGL fallback | **Release-candidate / scheduled gate** |

### Execution Mode Tags (Explicit on Every Test Case)
- **`[Automated: Playwright]`** — E2E specs (`@playwright/test`) executed against local dev or Firebase PR preview URLs (Chromium, Firefox, WebKit + mobile viewports).
- **`[Automated: Storybook / Vitest]`** — Unit tests, store invariants, and Storybook interaction/a11y checks.
- **`[Automated: Real-Device Cloud]`** — Real iOS Safari & Android devices via **BrowserStack Open Source** (run on `qa-real-device`-labeled PRs and release candidates).
- **`[Manual / Hardware]`** — Physical-world behaviors that cannot be emulated (e.g., physical iPhone hardware silent/mute switch, real robot hardware, classroom audio, 3D-printed Moddy fitment).

---

## 2. Two-Step Agent QA Workflow

To keep QA objective and traceable on every PR:

1. **Step 1 — QA Author (`skills/peerbots-qa-author/SKILL.md`)**: Updates `docs/QA_CHECKLIST.md` (ISO 29119 + Gherkin) and writes/updates `@playwright/test` specs for new or changed user journeys.
2. **Step 2 — QA Runner (`skills/peerbots-qa-runner/SKILL.md`)**: Runs the Playwright suite against the Firebase PR preview URL (via `.github/workflows/playwright-e2e.yml`), inspects HTML reports/screenshots/traces on failure, and posts a structured P0/P1/P2 summary plus any remaining `[Manual / Hardware]` checks on the PR.

---

## 3. Real-Device Cross-Browser Testing (BrowserStack Open Source)

Because real iOS Safari audio-unlock and fullscreen quirks cannot be fully reproduced by desktop WebKit emulation, Peerbots uses a tiered rollout:

1. **Always-On Free Baseline**: GitHub Actions + Playwright WebKit/Chromium/Firefox runs on every PR (`run-browserstack: false` by default).
2. **BrowserStack Open Source Application**: Apply at `browserstack.com/open-source` once public OSI-licensed repos (`AGPL-3.0-or-later` / `LGPL-3.0-or-later`) are live (starting with `PEERbots/peerbots-face`).
3. **Post-Approval**: Configure `BROWSERSTACK_USERNAME` & `BROWSERSTACK_ACCESS_KEY` org secrets, enable `run-browserstack: true` on labeled PRs/releases, and credit BrowserStack in `profile/README.md` under **Infrastructure & Tooling Supporters**.
