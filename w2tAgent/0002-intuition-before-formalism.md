# Lesson 2 quizzes passed as guessing — intuition must precede formal tests

After lesson 2 (where bot state lives), the user reported the quizzes "went ok, but it was more
like guessing" and asked for two things in plainer language: what a rebuildable cache is, and what
pairing is at all.

Two distinct gaps surfaced:

1. **Undefined jargon.** "Pairing" was used as if self-evident. The user is new to bots and didn't
   yet have the underlying fact that makes pairing necessary: Telegram bots are public, have no
   login, and identify chats only by a numeric id — so associating a chat with an app user is the
   developer's job. Bot-domain terms (pairing, session, webhook secret) need defining from first
   principles on first use; the user's web-dev background does not cover them.

2. **Formalism before intuition.** The cache-vs-authoritative distinction was introduced via an
   abstract test ("would losing it change behavior?") and a classification table before any
   concrete mental model. The framing that worked instead: state the program *learned from the
   world* (events told to it — phone contacts) vs. state it *worked out by itself* from ingredients
   it still has (regenerable — photo thumbnails).

Lesson 2 and the state reference card were revised accordingly (pairing-from-scratch section;
contacts/thumbnails analogy). Concepts not yet confirmed as understood — re-check both with fresh
scenario questions at the start of lesson 3 before building on them.
