const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/DITS-USER/Pictures/fowzia food';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.jfif'));

// Let's print the files with their sizes and aspect ratios
files.forEach((f, i) => {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  // find dimensions
  let w = 0, h = 0;
  let idx = 2;
  while (idx < buf.length) {
    if (buf[idx] !== 0xFF) { idx++; continue; }
    const m = buf[idx + 1];
    if (m === 0xC0 || m === 0xC2) {
      h = buf.readUInt16BE(idx + 5);
      w = buf.readUInt16BE(idx + 7);
      break;
    }
    const len = buf.readUInt16BE(idx + 2);
    idx += 2 + len;
  }
  console.log(`${i}: ${f} -> ${w}x${h} (${Math.round(buf.length/1024)} KB)`);
});
