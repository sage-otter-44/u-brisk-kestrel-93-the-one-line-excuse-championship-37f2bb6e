import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't crash during your demo — I was demonstrating my recovery feature, which recovers by pretending the demo never happened.";

// Gate: the sealed scorer only accepts UTF-8 text of 1-140 chars, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || !LINE.trim()) {
  throw new Error(`entry fails the 1-140 gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
