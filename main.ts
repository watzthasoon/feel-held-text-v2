import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Past midnight, the streetlamp hums to itself, amber over an empty road. " +
  "A cat crosses it, unhurried, and is gone. " +
  "The night keeps its own time. " +
  "Moths drift through the light, slow as snow. " +
  "The lamp stays on, warm and unasked, for whoever is still awake.";

const points = [...TEXT].length;
if (points < 1 || points > 280) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
