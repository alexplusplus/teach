# User verified telegramLinks against the lesson; private-chat id semantics sharpened

After lesson 3, the user inspected Firestore and noticed `telegramLinks/{chatId}`'s key equals
their Telegram user id, and asked whether that's intentional — hypothesizing that "chat id within
a particular bot should equal the user id."

Two outcomes:

1. **Confirmed + refined.** It IS intentional: Telegram defines a private chat's id as the other
   party's user id. But the user's "within a particular bot" scoping is wrong in an interesting
   way — the id is the same across ALL bots (every bot's private chat with this user is numbered
   by the user's id). Conversations are disambiguated by the bot token, so the full private-chat
   address is (bot token, chat id), and (bot token, chat id, message id) for a bubble.

2. **Lesson 3 quiz 3 contained an error** ("different bot, different chat id") that this question
   exposed. Fixed in the lesson, the chat-id body section, and the glossary's Chat entry. Takeaway
   for future material: when a claim about id uniqueness/scoping is made, verify it against the
   Bot API reference rather than intuition — id-scoping facts are exactly where plausible-sounding
   statements go wrong (message ids per-chat, private chat ids = user id, group ids negative).

Positive signal: the user is cross-checking taught models against live data unprompted — lessons
can start including small "verify it in your own Firestore/logs" tasks as feedback loops.
