// news-image-01 entry (Node 22, standard library only): copies the image beside
// this file to $MAKEFUN_OUTPUT_DIR/entry.png.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Gate: output must be a whole PNG or JPEG, <=1 MiB (1,048,576 B), <=1024x1024.
// The bundled entry.png is a 1024x1024 JPEG, 305,983 bytes — inside the gate.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
