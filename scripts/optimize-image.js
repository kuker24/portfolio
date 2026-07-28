import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const source = path.resolve('myself.jpeg');
const targetDir = path.resolve('public/images');
const targetJpeg = path.join(targetDir, 'myself.jpeg');
const targetWebp = path.join(targetDir, 'myself.webp');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(source, targetJpeg);
console.log(`Copied ${source} -> ${targetJpeg}`);

await sharp(targetJpeg)
  .rotate() // Auto-orient according to EXIF
  .webp({ quality: 85 })
  .toFile(targetWebp);

console.log(`Generated optimized WebP -> ${targetWebp}`);
