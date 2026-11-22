# QA Checklist — <Project Name>

> Follows [Peerbots Org-Wide QA Standards](https://github.com/PEERbots/.github/blob/main/docs/QA_STANDARDS.md) (**ISO/IEC/IEEE 29119** + **Gherkin / BDD**).

## Feature Area 1: <e.g., Live Robot Face & Audio>

### User Journey 1.1: <e.g., Classroom iPad Fullscreen Speech Playback>

#### TC-001: <Short Descriptive Title>
- **Priority**: `P0` *(Smoke/Blocker)* | `P1` *(Core)* | `P2` *(Edge / Mobile / WCAG 2.1 AA / i18n+RTL)*
- **Execution Mode**: `[Automated: Playwright]` · `[Automated: Storybook / Vitest]` · `[Automated: Real-Device Cloud]` · `[Manual / Hardware]`
- **Spec Reference**: `e2e/<spec-file>.spec.ts` *(or `N/A — Manual/Hardware`)*
- **Preconditions**: <Required state, auth role, device, or test fixture>
- **Given** <initial context>
- **When** <user action or trigger>
- **Then** <observable expected result>

---

## Manual / Hardware Release Gate Summary

Items tagged `[Manual / Hardware]` that must be verified on physical devices before tagging a production release:

- [ ] **TC-HW-001**: Physical iPhone/iPad Safari audio playback with hardware silent switch behavior verified
- [ ] **TC-HW-002**: Physical robot / hardware integration verified *(if applicable)*
