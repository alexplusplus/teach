# User requested an entity-model step-back before the lifecycle lesson

Before proceeding to the planned request-lifecycle lesson, the user asked to "step back and review
the structure of a bot in general — chat id, cards, message ids and other entities and how they
relate to one another."

What this signals: lessons 1–2 used Telegram primitives (message id, card, callback) as vocabulary
before formally teaching them — consistent with the pattern in [0002] (jargon assumed too early
for a bots-newcomer). The user notices and asks for foundations rather than pushing on; honor that
by front-loading entity definitions in any new topic area.

Delivered as lesson 0003 (entity model) plus `reference/telegram-entity-glossary.html` — the
workspace's glossary, to be adhered to in all future lessons. Key facts the lesson pivots on:
message ids are per-chat counters (true address = chat id + message id pair); a callback query
carries the message it was tapped on, which is what lets verb-only buttons resolve per-card
sessions; "card" is an app pattern (message + keyboard + session doc keyed by message id), not a
Telegram object; two tokens = two separate bot accounts with independent update queues.

The request-lifecycle lesson (Telegram POST → cold/warm start → fast-response requirement) is now
lesson 4, unblocked once the entity model is confirmed via lesson 3's quizzes.
