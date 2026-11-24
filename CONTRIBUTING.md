# Contributing to Peerbots

Thank you for your interest in contributing to **Peerbots**! Peerbots, Inc. is a 501(c)(3) nonprofit building free, open-source, research-informed social robotics tools designed to keep humans in control.

We welcome contributions of all kinds: code, accessibility improvements, documentation, translations, 3D-printable hardware improvements, research ideas, and bug reports.

---

## Community Standards

By participating in any Peerbots repository or discussion space, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md) and align with our [Governance Principles](./GOVERNANCE.md).

## Before You Start

1. **Questions or early ideas?** Start a thread in [Peerbots GitHub Discussions](https://github.com/PEERbots/.github/discussions) before opening a large PR.
2. **Found a security issue?** Please do **not** open a public issue — follow [SECURITY.md](./SECURITY.md) to report it privately.
3. **Check existing issues & the roadmap**: Browse the repository's Issues tab and the [Peerbots Org Roadmap Project](https://github.com/orgs/PEERbots/projects).

## Contributor License Agreement (FLA 2.0)

To keep Peerbots sustainable as a 501(c)(3) nonprofit (including offering commercial dual-licenses whose proceeds fund our free tools for schools, therapists, and families) **while legally guaranteeing that Peerbots will always remain Free and Open Source**, external contributors sign our [Fiduciary License Agreement (FLA 2.0)](./CLA.md).

- **How signing works**: On your first Pull Request, our automated **CLA Assistant Lite** bot will post a comment linking to [CLA.md](./CLA.md). Reply with the confirmation phrase once — it takes 10 seconds and applies across Peerbots repositories.
- **Paid contractors & core collaborators**: Covered under our written Peerbots, Inc. IP Assignment Policy.

## Making a Pull Request

1. Fork the repository and create a descriptive branch from `main` (e.g., `feat/...`, `fix/...`, `docs/...`).
2. Follow the repository's local setup, formatting, linting, and test commands (see the repo's `README.md`).
   - For TypeScript/React repos: use `npm` (never yarn/pnpm/bun), keep Prettier formatting clean, maintain WCAG 2.1 AA accessibility, and update Storybook stories (`Default` & `Variations`) for UI changes.
   - For `@peerbots/core` and `@peerbots/face`: include a Changeset (`npx changeset`) with every PR.
3. Fill out the Pull Request template completely, including the **Cross-Repo Impact** section if your change spans multiple Peerbots repositories.
4. Keep PRs focused and small so maintainers can review them quickly.

## Cross-Repo Features

If a feature spans multiple Peerbots repositories (for example, `@peerbots/core` + `app.peerbots.org` + `peerbots-content`):

1. Open a single **Parent Tracking Issue** in the primary repository (or `PEERbots/.github`) and link child issues in each affected repo.
2. Merge and release **bottom-up**:
   - Shared libraries (`@peerbots/core`, `@peerbots/face`) & database rules first
   - Backend services (`api`, Cloud Functions) second
   - Consumer apps (`app.peerbots.org`, `peerbots-content`, `constrained-face-agent`) last

See [`skills/peerbots-github-issues/SKILL.md`](./skills/peerbots-github-issues/SKILL.md) for the full issue & cross-repo workflow.
