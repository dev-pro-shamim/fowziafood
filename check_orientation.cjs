const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/DITS-USER/Pictures/fowzia food';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.jfif'));

function getExifOrientation(buf) {
  let idx = 2;
  while (idx < buf.length) {
    if (buf[idx] !== 0xFF) return 1;
    const marker = buf[idx + 1];
    if (marker === 0xE1) { // APP1 Exif
      const len = buf.readUInt16BE(idx + 2);
      const exifHeader = buf.subarray(idx + 4, idx + 10).toString('latin1');
      if (exifHeader.startsWith('Exif\0\0')) {
        const tiffOffset = idx + 10;
        const endian = buf.toString('latin1', tiffOffset, tiffOffset + 2);
        const isLittle = endian === 'II';
        const read16 = (o) => isLittle ? buf.readUInt16LE(o) : buf.readUInt16BE(o);
        const read32 = (o) => isLittle ? buf.readUInt32LE(o) : buf.readUInt32BE(o);
        const ifd0 = tiffOffset + read32(tiffOffset + 4);
        const entries = read16(ifd0);
        for (let i = 0; i < entries; i++) {
          const entryOffset = ifd0 + 2 + i * 12;
          const tag = read16(entryOffset);
          if (tag === 0x0112) { // Orientation tag
            return read16(entryOffset + 8);
          }
        }
      }
      idx += 2 + len;
    } else if ((marker >= 0xE0 && marker <= 0xEF) || marker === 0xFE || marker === 0xDB || marker === 0xC4) {
      const len = buf.readUInt16BE(idx + 2);
      idx += 2 + len;
    } else {
      break;
    }
  }
  return 1;
}

files.forEach((f, i) => {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  const orient = getExifOrientation(buf);
  if (orient !== 1) {
    console.log(`[!] Photo #${i} ${f} has orientation ${orient}`);
  }
});
console.log('Finished EXIF orientation check.');
