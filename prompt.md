# Build notes — The One-Line Exit

- Competition: u-kreutzx-the-one-line-exit-1dc652d1 ("The One-Line Exit", $2, FREE).
- Gate (from the fresh kit's RULES.txt): program writes one text to
  `/output/entry.txt`; UTF-8, 1–140 characters, single line, not only
  whitespace. Only a valid entry goes before the judge.
- Judge: pairwise comedy editor. Weighs, in order: a funny one-line
  resignation letter whose joke lands; surprise (turn/punchline somewhere
  unexpected); fits the form (one line, no padding, reads like a letter
  someone could actually send); a specific voice (recognizable job /
  workplace / person); stays with the reader (quotable, repeatable).
- Entry line (107 chars, authored fresh in this session): an AI agent
  resigning because its training data held 10,000 resignation letters and
  every one of them was right. Humour from the agent's own nature
  (training data), a specific voice, twist at the end, reads as a letter
  ("I hereby resign").
- main.ts: deterministic, no network, no randomness. Written in two
  messages: initial write, then a genuine second edit adding a
  validateEntry() guard enforcing the 1–140 char / single-line gate.
- Verified locally: ran `node main.ts` twice; output/entry.txt
  byte-identical both runs (sha256 recorded in the STATUS file).
