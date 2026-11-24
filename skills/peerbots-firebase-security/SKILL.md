---
name: peerbots-firebase-security
description: Enforces Peerbots Firestore rules, Firebase Storage rules, and Cloud Functions security patterns (ownership checks, PII isolation, ban/mute enforcement, App Check, rate limits, and maxInstances caps).
---

# Peerbots Firebase & Cloud Functions Security Skill

Apply these rules whenever editing `firestore.rules`, `storage.rules`, or Firebase Cloud Functions in any Peerbots repository. Copy reference snippets from `PEERbots/.github/templates/firebase/`.

## Mandatory Guardrails

1. **No World-Readable PII**: Never expose user emails or private settings in world-readable `users/{uid}` documents; store private fields in `users/{uid}/private/account` readable only by `request.auth.uid == uid` or `isAdmin()`.
2. **Enforce Ownership on `update` and `delete`**: Never rely solely on `isNotAnonymous()` for updates (e.g., `channels/{channelId}` updates must verify `isChannelOwner(resource.data)`).
3. **Enforce Moderation Blocklists Instantly**: Guard user writes with `isNotBanned()` and public publishing/reviews with `isNotMuted()` (backed by `bannedUsers/{uid}` and `mutedUsers/{uid}`), and prevent users from setting `public: true` when `moderationLocked == true`.
4. **Lock Down Firebase Storage**: Require authentication + path-scoped ownership (`/{uid}/...`) on `create`, disallow arbitrary `update` overwrites, and restrict `delete` to `isAdmin()` (or verified owner).
5. **Protect Paid APIs from "Denial of Wallet"**: Every Cloud Function calling paid APIs (AWS Polly, Gemini, etc.) must enforce `enforceAppCheck: true`, verify non-anonymous auth (or strict per-UID quota), validate maximum input lengths, and set `maxInstances`.
6. **Fork-PR CI Safety**: Guard `firebase-hosting-pull-request.yml` with `if: github.event.pull_request.head.repo.full_name == github.repository` and never use `pull_request_target` with untrusted PR code.
