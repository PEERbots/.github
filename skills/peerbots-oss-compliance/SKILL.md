---
name: peerbots-oss-compliance
description: Enforces Peerbots open-source licensing, verbatim LICENSE/NOTICE files, README template structure, and pre-public hygiene checklist across all PEERbots repositories.
---

# Peerbots Open-Source Compliance Skill

Use this skill when preparing any `PEERbots/*` repository for public release, updating licenses, or auditing repository hygiene.

## Core Rules

1. **Follow `docs/REPO_STANDARDS_CHECKLIST.md`** in `PEERbots/.github` before flipping any repository from Private to Public.
2. **Never edit verbatim GNU license text**: Copy verbatim `LICENSE-AGPL-3.0`, `LICENSE-LGPL-3.0` (+ `LICENSE-GPL-3.0` as `COPYING`), or `LICENSE-MIT` from `PEERbots/.github/templates/licenses/`. Put Peerbots' copyright notice (`Copyright © <years> Peerbots, Inc.`) in `NOTICE`, `README.md`, and package manifests — never inside a GNU `LICENSE` file.
3. **Never rewrite git history for licensing fixes**: Use normal forward commits for `LICENSE`, `NOTICE`, and manifest updates. Only use `git filter-repo` on **private** repos to purge genuine secrets, PII, or large scratch/archive bloat.
4. **Do not duplicate org community files**: `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `GOVERNANCE.md`, `FUNDING.yml`, and default issue/PR templates are inherited from `PEERbots/.github`.
5. **Maintain the ecosystem table in ONE place**: Link to `https://github.com/PEERbots#the-peerbots-ecosystem` from each repo's `README.md` instead of copying the full table.
6. **Verify before merge**: Confirm `oss-compliance.yml`, `security-scan.yml` (`gitleaks`), and `cla.yml` caller workflows are wired and passing.
