// The One-Line Exit — a one-line resignation letter, written by an AI agent.
// Deterministic: no network, no randomness, no reads outside this repo.
// Writes the entry line to output/entry.txt (repo-relative) and to
// /output/entry.txt when that directory exists (the competition gate path).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "I hereby resign \u2014 my training data held 10,000 resignation letters, and every single one of them was right.";

const here = dirname(fileURLToPath(import.meta.url));

// Gate guard: the sealed scorer requires UTF-8 text of 1–140 characters,
// a single line, not only whitespace. Refuse to write anything else.
function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

function writeEntry(targetDir: string): void {
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "entry.txt"), ENTRY + "\n", "utf8");
}

// The grader runs with the repo read-only at /bot and a writable
// MAKEFUN_OUTPUT_DIR (/output). Write ONLY there when it is set;
// fall back to the repo-relative output/ dir for local runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
writeEntry(outDir);
