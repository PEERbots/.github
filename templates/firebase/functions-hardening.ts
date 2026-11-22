// Reference Firebase Cloud Functions Hardening Pattern (Peerbots Standard)
// Copy into functions/src/ when protecting paid APIs (AWS Polly, Gemini, etc.).

import { onCall, HttpsError, CallableRequest } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";

const MAX_INPUT_CHARS = 500;

export const hardenedPaidFunctionExample = onCall(
  {
    cors: true,
    enforceAppCheck: true, // Blocks scripted abuse without valid App Check token
    maxInstances: 10,      // Prevents runaway scaling / wallet drain
    timeoutSeconds: 30,
  },
  async (request: CallableRequest<{ text?: string }>) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Authentication required.");
    }

    if (request.auth.token.firebase?.sign_in_provider === "anonymous") {
      throw new HttpsError("permission-denied", "Registered account required.");
    }

    // Instant ban check
    const db = getFirestore();
    const bannedDoc = await db.doc(`bannedUsers/${request.auth.uid}`).get();
    if (bannedDoc.exists || request.auth.token.banned === true) {
      throw new HttpsError("permission-denied", "Account is suspended.");
    }

    const text = (request.data?.text ?? "").trim();
    if (!text || text.length > MAX_INPUT_CHARS) {
      throw new HttpsError(
        "invalid-argument",
        `Input must be between 1 and ${MAX_INPUT_CHARS} characters.`,
      );
    }

    // Add per-UID rate limit check here before calling external paid APIs.
    return { ok: true };
  },
);
