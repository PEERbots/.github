---
name: peerbots-design-system
description: Enforces Peerbots UI/UX standards across web repositories: @peerbots/core reuse, brand/DESIGN.md tokens, brand/BRAND_VOICE.md plain language, Storybook Default/Variations pattern, WCAG 2.1 AA accessibility, Prettier, and npm-only usage.
---

# Peerbots Design System & Frontend Standards

Apply these standards in every Peerbots web repository (`peerbots-core`, `peerbots-face`, `app.peerbots.org`, `peerbots-content`, `constrained-face-agent`, `Moddy/web`, `halloween-competition-runner`, `peerbots.org`).

## Standards

1. **Package Manager**: Always use **`npm`** (never `yarn`, `pnpm`, or `bun`).
2. **Reuse `@peerbots/core` First**: Check `@peerbots/core` before creating a new component. If a new primitive or shared banner (e.g., `<AccountStatusBanner />`) is needed across apps, build it in `peerbots-core` first.
3. **Brand & Voice**: Follow [`brand/DESIGN.md`](../../brand/DESIGN.md) for Peerbots colors/tokens and [`brand/BRAND_VOICE.md`](../../brand/BRAND_VOICE.md) for plain-English, human-in-control copy.
4. **Storybook Pattern**: Create/update at most 2 stories per component (`Default` and `Variations`), unless interaction tests require more.
5. **Accessibility (WCAG 2.1 AA)**: Every interactive element must have descriptive `aria-label` / `aria-labelledby`, keyboard support, and pass `@storybook/addon-a11y`.
6. **Formatting & Changesets**: Run Prettier formatting checks before committing; include a Changeset (`npx changeset`) on every PR in published packages (`@peerbots/core`, `@peerbots/face`).
