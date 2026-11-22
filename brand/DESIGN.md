# Peerbots Design System & Visual Guidelines

All Peerbots web applications share a unified visual identity built on **[`@peerbots/core`](https://github.com/PEERbots/peerbots-core)** ([Browse Live Storybook](https://main--69ce9e8ef541367e5769da26.chromatic.com)).

## Brand Color Palette

| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Peerbots Teal | `#5FC7CC` | Primary brand accent, interactive highlights, Mermaid fills |
| **Primary Dark** | Dark Teal | `#0F766E` | High-contrast text/icons on light surfaces, accessible CTA fills |
| **Accent** | Peerbots Pink | `#E86E8A` | Secondary accent, expressive/creative highlights |
| **Neutral Dark** | Dark Blue | `#2E3A59` | Headings, dark text, primary borders |
| **Surface Soft** | Soft Teal | `#E6F7F7` | Callout backgrounds, subtle highlight surfaces |
| **Surface Pink** | Soft Pink | `#FDF2F4` | Secondary callout backgrounds |
| **Surface Base** | Soft Cyan | `#F9FFFF` | Light page/diagram canvas |

## UI & Component Principles

1. **Reuse `@peerbots/core` first**: Always check `@peerbots/core` before creating a new UI primitive. If a new reusable pattern is needed across apps, build it in `peerbots-core` first.
2. **WCAG 2.1 AA by default**: All interactive elements must have accessible labels (`aria-label` / `aria-labelledby`), keyboard navigation, focus states, and passing contrast ratios (verified via `@storybook/addon-a11y`).
3. **Storybook standard**: Every component ships with at most 2 stories unless interaction tests require more: `Default` and `Variations` (showing all visual states in one view).
4. **Logos & Assets**: Canonical Peerbots logos live in [`assets/`](../assets/). Do not distort, recolor, or imply official endorsement on third-party forks (see [`LICENSING.md`](../LICENSING.md)).

## Mermaid Diagram Theme Directive

Use this subtle Peerbots brand theme directive in documentation diagrams:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e6f7f7', 'primaryTextColor': '#2e3a59', 'primaryBorderColor': '#5fc7cc', 'lineColor': '#0f766e', 'secondaryColor': '#fdf2f4', 'tertiaryColor': '#f9ffff' }}}%%
```
