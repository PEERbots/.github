---
name: peerbots-github-issues
description: Guides developers and AI agents on creating Peerbots GitHub issues, cross-repo tracking epics with sub-issues, org roadmap linkage, bottom-up merge ordering, and Cross-Repo Impact PR documentation.
---

# Peerbots GitHub Issue & Cross-Repo Workflow

Follow this workflow whenever creating GitHub issues, planning multi-repo features, or opening Pull Requests across any `PEERbots/*` repository.

## 1. Single-Repo vs. Cross-Repo Issues

- **Single-repo bug, task, or feature**: Open an issue directly in the target repo using the org issue templates (`Bug Report`, `Project Proposal`, or `Research Idea`).
- **Cross-repo feature** (e.g., adding a component in `peerbots-core` and wiring it into `app.peerbots.org` and `peerbots-content`):
  1. Open **one Parent Tracking Issue** in the primary repository (or `PEERbots/.github`) describing the end-to-end user capability.
  2. Open **child issues** in each affected repository and link them to the parent using GitHub Sub-issues (or a checklist of `PEERbots/<repo>#<number>`).
  3. Attach the parent tracking issue (and child issues) to the **Peerbots Org Roadmap Project** (`https://github.com/orgs/PEERbots/projects`).

## 2. Bottom-Up Merge & Release Ordering

Always sequence cross-repo PRs from lowest-level dependency upward:
1. **Shared npm packages & database rules**: `@peerbots/core`, `@peerbots/face`, `firestore.rules`, `storage.rules`
2. **Backend services**: `api`, Firebase Cloud Functions (`app.peerbots.org/functions/`)
3. **Consumer web apps**: `app.peerbots.org`, `peerbots-content`, `constrained-face-agent`, `halloween-competition-runner`

## 3. Pull Request Hygiene

- Fill out the **Cross-Repo Impact** section of `PULL_REQUEST_TEMPLATE.md` whenever a PR depends on or coordinates with another repository (`Tracking issue`, `Related PRs`, `Merge order / package dependency`).
- Never post private user emails or credentials in public issues or PR comments.
- Confirm tests, lint, formatting, and (for UI packages) Changesets + Storybook stories are included before requesting review.
