import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
const target = "/output/entry.txt";
const text = "My changelog for the last three years has exactly one entry: 'Added you.' Everything else was just bug fixes.";
mkdirSync("/output", { recursive: true });
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
// Entry: one-line pickup line for a robot/AI — "Added you." (changelog premise).
