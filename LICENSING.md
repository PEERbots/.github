# Peerbots Licensing & Trademark Policy

**Peerbots, Inc.** is a 501(c)(3) research-informed tech nonprofit on a mission to build **social robots for everyone, powered by experts**. Peerbots makes it easy to learn about, design, and control social robots that you build from materials you already have.

We believe in being **explicit and transparent** about *why* we chose each license across our ecosystem.

---

## Our Licensing Philosophy

We build tools without a profit motive so people can keep their privacy, agency, and creative control. Our licensing tiers balance three goals:

1. **Protect our nonprofit mission from closed-source enclosure**: Peerbots is built with community effort, grants, and donations to **raise the floor** of social robotics — not to feed proprietary lock-in. Hosted platforms and backends use strong network copyleft (**`AGPL-3.0-or-later`**) so no organization can take our work, host a closed-source paid SaaS competitor, and withhold improvements from the community.
2. **Make reusable building blocks easy to adopt**: Researchers, universities, educators, and assistive-tech builders should be able to embed our robot face engine and UI components into their own projects without relicensing their entire codebase. Our reusable npm libraries use weak copyleft (**`LGPL-3.0-or-later`**) — embed them freely, and share back improvements to the Peerbots libraries themselves.
3. **Keep Peerbots financially sustainable without paywalling our mission**: Organizations that need proprietary hosted deployments, commercial Moddy manufacturing, or priority technical support and hands-on training can partner with Peerbots, Inc., with proceeds funding our free open-source tools and educational programs.

---

## License Matrix Across Peerbots Repositories

| Tier | License | Applies To | Rationale |
| :--- | :--- | :--- | :--- |
| **Hosted Apps & Backends** | **`AGPL-3.0-or-later`** | `app.peerbots.org`, `api`, `peerbots-content`, `constrained-face-agent`, `halloween-competition-runner`, `Moddy` *(code)*, `peerbots.org` *(code)* | Closes the SaaS loophole so modified cloud deployments share improvements back with the community. |
| **Reusable npm Libraries** | **`LGPL-3.0-or-later`** | `peerbots-core` (`@peerbots/core`), `peerbots-face` (`@peerbots/face` *engine code & generic faces*) | Stays in the GNU v3 family while letting labs, schools, and builders embed Peerbots packages in any app as long as library improvements are shared back. |
| **3D Hardware Designs** | **`CC BY-NC-SA 4.0`** | `Moddy` 3D robot designs & committed CAD models (`printing/`) | Free for personal, educational, research, and non-commercial printing/remixing; commercial manufacturing requires a commercial license supporting Peerbots, Inc. |
| **Peerbots Mascot & Brand Assets** | **`All Rights Reserved`** *(limited Peerbots use)* | **Hugo** and **Simple** face character artwork (2D sprites, 3D `.glb` models in `peerbots-face`), Peerbots logos, and team/event photography (`peerbots.org`) | Protects Peerbots' signature **Hugo** and **Simple** faces and brand identity from arbitrary or unauthorized use. Permitted for unmodified use within Peerbots apps and non-commercial education/research; any other use, redistribution, or commercial use requires prior written permission. |
| **Educational Curriculum** | **`CC BY-SA 4.0`** *(content)* + **`MIT`** *(template code)* | `course-in-a-box` | Preserves upstream Peer 2 Peer University (P2PU) MIT template terms while keeping Peerbots training modules open and share-alike. |
| **Copy-Paste Sample Code** | **`MIT`** | `api-samples` | Zero-friction sample integrations developers can copy directly into any project. |

> **Always check each repository's root `LICENSE` and `NOTICE` files** — they are the authoritative legal terms for that repository.

---

## Commercial Software Licensing & Priority Support

Want to run a proprietary hosted Peerbots deployment, integrate Peerbots code into a closed-source commercial product, commercially manufacture Moddy robot hardware, or arrange priority technical support and hands-on training?

Peerbots, Inc. offers **commercial software licenses and priority support plans** whose revenue directly funds our 501(c)(3) mission *(note: the **Hugo** and **Simple** brand/face assets are reserved for Peerbots and are not licensed for arbitrary commercial brand use)*. See [`SPONSORSHIP.md`](./SPONSORSHIP.md), email [support@peerbots.org](mailto:support@peerbots.org?subject=%5BCommercial%20License%20%2F%20Support%5D%20Inquiry), or contact us at [peerbots.org/contact](https://www.peerbots.org/contact).

---

## Trademarks, Brand Assets & Signature Faces (Hugo & Simple)

Open-source software licenses (`AGPL-3.0`, `LGPL-3.0`, `MIT`) apply to **code** — they do **not** grant trademark or mascot rights.

- The **Peerbots** name, **Peerbots logo**, **Moddy** name, **Hugo** and **Simple** signature face artwork (including 2D sprites and 3D `.glb` models in `peerbots-face`), and team/event photography (e.g., in `peerbots.org`) are trademarks and/or **© Peerbots, Inc., All Rights Reserved**.
- Hugo and Simple face assets may be used unmodified within Peerbots applications and for non-commercial educational or academic research using Peerbots. They may **not** be arbitrarily redistributed, modified into derivative characters, used to imply official Peerbots endorsement, or used commercially without prior written permission from Peerbots, Inc.
- If you fork a Peerbots application or embed `@peerbots/face` in a third-party product, use the open generic face styles (`Robotic`, `Display`) or your own custom `.glb`/sprite assets instead of Hugo, Simple, and Peerbots branding.

---

## Contributor IP & CLA

- **External Pull Requests**: Covered by our [Fiduciary License Agreement (FLA 2.0)](./CLA.md), automated via CLA Assistant Lite. Contributors retain copyright to their work and receive a binding guarantee that Peerbots will always remain Free and Open Source.
- **Contractors & Core Collaborators**: Paid or commissioned work for Peerbots, Inc. is covered by a written IP assignment to Peerbots, Inc.
