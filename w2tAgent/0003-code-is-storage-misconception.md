# Misconception: "needed across future sessions" conflated with "must be persisted"

Re-checking lesson 2 with a fresh scenario (user language preference set via `/lang fr` vs. a
valid-language-codes list compiled from a code constant), the user classified BOTH as
database-required, reasoning "they have to survive across all the future sessions."

The gap: the user's classification rule is *durability of need* ("will this be needed later?"),
but nearly everything is needed later — the correct rule is *provenance* ("is a fresh instance
born already holding this, from code + env, or did the world have to tell it?"). The user does not
yet register that deployed code and env vars ARE persistent storage — the most durable kind — so
constants never need saving. Framing that landed: built-in ringtones (ship with the OS, survive
every reboot without ever being backed up) vs. contacts (told by the world, must be written down).

Repo anchor used: `SUPPORTED_LANGUAGES` in `server/domain/types.ts:1` (code constant, nowhere in
Firestore) vs. `activeLanguage` in `users/{userId}` (user-chosen, persisted).

Status: RESOLVED. On the follow-up scenario (streak = today − first-message date) the user
correctly applied provenance: first-message date → persist, streak → not persisted. One residual
refinement taught in chat: a derived value needs no variable at all (compute on read, store
nowhere — module-scoping it would serve a stale streak after midnight). Introduced the third
category, "derived values", anchored to the repo's own rule that portion age is always derived
as `dayCounter − intakeIndex` and never stored. Lesson 3 can build on the full three-way model:
told-facts → DB, config-derived caches → module scope OK, derived values → compute on read.
