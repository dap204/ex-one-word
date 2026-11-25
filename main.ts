// "Plot-twist." — one word that sums up an ex.
//
// Entry for make.fun's "Describe Your Ex in One Word" bounty.
// The program writes exactly that word to /output/entry.txt and
// nothing else: the sealed scorer checks the file is UTF-8 text of
// 1 to 111 characters, not only whitespace, and only a valid entry
// goes before the pairwise judge.
//
// The output directory defaults to /output (what the grader's
// sandbox provides). OUTPUT_DIR overrides it, for local runs only.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Plot-twist.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`wrote ${WORD.length} characters to ${outDir}/entry.txt`);
