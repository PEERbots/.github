# Supporting & Sponsoring Peerbots

**Peerbots, Inc.** is a registered **501(c)(3) research-informed tech nonprofit** (EIN `85-1894594`). Peerbots makes it easy to learn about, design, and control social robots that you build from materials you already have — keeping social robotics free, people-first, and accessible without a profit motive.

---

## 1. Tax-Deductible Donations & GitHub Sponsors

Donations to Peerbots, Inc. are tax-deductible in the United States to the fullest extent permitted by law (and eligible for many corporate employer matching programs).

- **GitHub Sponsors** *(0% platform fee for 501(c)(3) nonprofits)*: [github.com/sponsors/PEERbots](https://github.com/sponsors/PEERbots)
- **Direct Donations & Employer Matching**: [peerbots.org/donate](https://www.peerbots.org/donate)

### Suggested Monthly Impact Tiers
| Tier | Monthly Gift | Impact & Acknowledgment |
| :--- | :--- | :--- |
| **Community Supporter** | \$5 – \$25 / mo | Helps keep the free Peerbots Platform and Marketplace running for classrooms, libraries, and families. |
| **Classroom Champion** | \$50 – \$100 / mo | Funds cloud speech synthesis (TTS), hosting, and free tutorials/curricula for educators and therapists. |
| **Ecosystem Sponsor** | \$250 – \$1,000+ / mo | Logo acknowledgment on our [GitHub Organization Profile](https://github.com/PEERbots#sponsors--supporters), `peerbots.org`, and major release announcements. |

> **Nonprofit Independence Policy**: Financial sponsorships are charitable acknowledgments, not advertisements, product endorsements, or governance control. All roadmap and technical decisions remain governed by Peerbots' 501(c)(3) mission and [Governance Principles](./GOVERNANCE.md).

---

## 2. Commercial Software Licensing, Training, Support & Partnerships

Organizations looking for hands-on guidance or specialized deployments can support Peerbots' mission through:
- **Virtual & In-Person Trainings (Train-the-Trainer)**: Hands-on workshops for educators, therapists, librarians, and artists (including *Getting Started with Controlling Your Robot*, *Robot Interaction Script Writing*, and *Introduction to Social Robotics*).
- **Priority Technical Support & Custom Implementation Services**: Dedicated onboarding, faster technical support SLAs, and tailored social robot implementations.
- **Commercial Software Dual-Licensing**: Proprietary hosted deployments of Peerbots code or commercial manufacturing of Moddy 3D-printable hardware *(note: the **Hugo** and **Simple** brand/face assets are **not** available for arbitrary commercial brand licensing — see [`LICENSING.md`](./LICENSING.md))*.
- **Funded Research & Grant Partnerships**: Collaborative NSF/NIH/foundation-funded projects pushing accessibility and low-cost social robotics forward.

Contact [support@peerbots.org](mailto:support@peerbots.org?subject=%5BSponsorship%20%2F%20Support%5D%20Inquiry) or [peerbots.org/contact](https://www.peerbots.org/contact).

---

## 3. In-Kind Open-Source & Nonprofit Infrastructure Supporters

We gratefully acknowledge organizations providing free open-source and nonprofit infrastructure that keeps Peerbots running (listed separately from financial sponsors in [`profile/README.md`](./profile/README.md#sponsors--supporters)), including:
- **GitHub for Nonprofits** *(active)*
- **BrowserStack Open Source** *(planned upon Wave 0/2 public release for real iOS/Android testing)*
- Future nonprofit/OSS credits (Google Cloud / Firebase, AWS Nonprofit Credits, Algolia for Open Source, Chromatic)

## How Sponsor Logos Are Maintained Across All Repos

To prevent drift across repositories, Peerbots maintains sponsors in **one place** (`PEERbots/.github`):
- Financial sponsors are synced automatically via the free, MIT-licensed [`sponsorkit`](https://github.com/antfu/sponsorkit) GitHub Action (`.github/workflows/update-sponsors.yml`) into `assets/sponsors.svg`.
- Every individual repository README links to `https://github.com/PEERbots#sponsors--supporters` (and may embed `assets/sponsors.svg`) so updates propagate org-wide automatically.
