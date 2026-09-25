# 0006 — Capstone: synthesis into a reusable build order

**Date:** 2026-07-22
**Status:** delivered; awaiting the user's design-task answers

## Context
Lessons 1–5 each isolated one concept (delivery models, state, entities, request
lifecycle, registration). The mission's second success criterion — *design a new bot
from scratch* — is the only one none of them directly exercised. It requires
**sequencing**, not recall.

## What was taught
Lesson 6 (`lessons/0006-blank-folder-capstone.html`) reframes lessons 1–5 as an
ordered eight-step build order (blank folder → working bot), each step tagged with
its source lesson, its sane default, and the specific trap it prevents. Order is
load-bearing: two tokens → one brain → two entrypoints → DB-keyed state → pairing →
gated registration → idempotency → runtime choice. Companion reference
`reference/new-bot-checklist.html` is the same list, printable — the single most
reusable artifact of the mission (the user's stated goal is template reuse across
future projects).

## Assessment design
- Warm-up carries lesson 5's first-deploy chicken-and-egg forward into the new-bot context.
- Two synthesis quizzes test *sequencing under a constraint*, not definitions: the
  single-token dev/prod collision (why step 1 is first) and the module-scope `Set`
  bug (the test-passing production-only failure signature of state in the wrong tier).
- Open-ended design task: apply all six core decisions to a bot of the user's choosing,
  answers to be pressure-tested in chat.
- Explicit mission scorecard maps each of the 5 success criteria to where it was
  covered, inviting the user to name any that don't yet feel whiteboard-ready.

## Open threads / next directions offered
1. **Build it for real** — scaffold the standup bot, review each file against the checklist.
2. **Go deeper on one seam** — grammY sessions/middleware, the `secret_token` header
   alternative to the path secret, or Firestore data modeling for bot state.

## Signals to watch for next session
- Whether the user returns the design-task answers (strong signal of engagement + the
  best diagnostic of the synthesis skill).
- If the module-scope `Map`/`Set` trap still tempts them in their own design → state-tier
  intuition (record 0003) needs another pass.
- The mission's formal success criteria are now all covered at least once; a mission
  update or a new mission may be warranted if the user wants to move to building.
