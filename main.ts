// Two Lines to Your Past Self — make.fun entry.
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output), byte-exact, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Don't sell the old guitar to pay the rent in March \u2014 pawn the TV instead.",
  "That guitar is the one you play at your daughter's wedding, twenty years later.",
];

const text = LINES.join("\n");
if (text.length < 1 || text.length > 280 || LINES.length !== 2) {
  throw new Error("entry must be exactly two lines, 1-280 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
