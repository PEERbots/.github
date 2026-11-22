# Peerbots Repository Standards Checklist

Every Peerbots repository must pass this checklist **before flipping from Private to Public** (and stay compliant via CI afterward). Copy-ready templates and code snippets live in [`templates/`](../templates/).

---

## 1. Licensing & Legal
- [ ] **Verbatim `LICENSE` file** at repo root matching Peerbots' tier (`AGPL-3.0-or-later` for apps/backends, `LGPL-3.0-or-later` + `COPYING` for npm libraries, `MIT` for samples/P2PU fork). Never edit GNU license text or its appendix!
- [ ] **`NOTICE` file** at repo root containing `Copyright © <first-year>–2026 Peerbots, Inc.` plus any third-party/upstream attributions and trademark/design caveats.
- [ ] **Manifest metadata** matches `LICENSE` (`package.json` `license`, `author: "Peerbots, Inc."`, `repository`; or `pyproject.toml` `license`).
- [ ] **Contributor IP verified**: All pre-public human contributors are either Peerbots, Inc. employees/contractors with IP assignment or have given written license sign-off.
- [ ] **Dependency license scan passes** (`license-checker` for Node / `pip-licenses` for Python) with no incompatible licenses.

## 2. README & Community Health
- [ ] **`README.md` follows `templates/README.template.md`**:
  - Centered Peerbots logo, title, tagline, compact side-by-side badges, hero preview (for visual/app repos), top `npm install` block (for npm packages).
  - Plain-English **What Is This?**, **Who Is It For?**, **Where Can I Use It Already?**, **Quick Start**, **What Is Peerbots?** (linking to `https://github.com/PEERbots#the-peerbots-ecosystem`), **Community & Contributing**, and **License & Copyright**.
  - Optional repo-specific **Cite This Project** + `CITATION.cff` for research-facing repos.
- [ ] **No stale duplicated community files**: Delete repo-local copies of `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, `GOVERNANCE.md`, `FUNDING.yml`, and generic issue/PR templates so GitHub automatically inherits them from `PEERbots/.github`.
- [ ] **GitHub Insights → Community Standards** shows 100% and the License badge renders cleanly.

## 3. Security, Privacy & Hygiene (Hard Gate Before Going Public)
- [ ] **Full-history secret scan passes** (`gitleaks detect --source .`) with zero exposed private keys, service accounts, or admin tokens.
- [ ] **No scratch, archive, or internal admin files** tracked in HEAD or history (`scratch/`, `archive/`, `retool-admin-app.json`, `.env`).
- [ ] **Firebase / Database Rules audited** (if applicable — see `templates/firebase/`):
  - No world-readable PII (`users` emails isolated to private subcollection).
  - Every `update`/`delete` enforces ownership or `isAdmin()`.
  - Moderation hooks active (`isNotBanned()`, `isNotMuted()`, `moderationLocked`).
  - Storage rules require auth + path-scoped ownership on uploads and `isAdmin()` on deletes.
- [ ] **Cloud Functions / APIs hardened** (if applicable):
  - `enforceAppCheck: true` + non-anonymous auth (or strict quota) on paid APIs (AWS Polly, Gemini, FreeCAD).
  - Input length caps, per-UID rate limits, and `maxInstances` caps configured.
  - GCP/AWS billing alerts & daily API quotas active.
- [ ] **Client keys locked down**: Firebase web keys have GCP HTTP referrer restrictions; Algolia keys verified search-only; `.env.example` provided.

## 4. CI/CD & GitHub Settings
- [ ] **Fork-PR safe workflows**: No `pull_request_target` with untrusted checkout; preview deploy workflows (`firebase-hosting-pull-request.yml`) guarded by `if: github.event.pull_request.head.repo.full_name == github.repository`.
- [ ] **Reusable org workflows wired**: `oss-compliance.yml`, `security-scan.yml`, `cla.yml` (FLA 2.0 CLA Assistant Lite), and `.github/dependabot.yml`.
- [ ] **Free public-repo Code Security enabled** (`Settings → Code security`): Dependabot alerts, Dependabot security updates, Secret scanning, Push protection, and Private vulnerability reporting.
- [ ] **Branch protection** active on default branch (`main`).
