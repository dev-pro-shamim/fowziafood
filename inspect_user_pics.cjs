const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/DITS-USER/Pictures/fowzia food';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.jfif'));

function getJpgDimensions(buf) {
  let i = 0;
  if (buf[0] !== 0xFF || buf[1] !== 0xD8) return null;
  i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const marker = buf[i + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buf.readUInt16BE(i + 5);
      const width = buf.readUInt16BE(i + 7);
      return { width, height };
    }
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

let catalogHtml = `<!DOCTYPE html><html><head><style>
body { font-family: sans-serif; background: #1a1a1a; color: #fff; padding: 20px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.card { background: #2a2a2a; padding: 10px; border-radius: 8px; text-align: center; }
img { max-width: 100%; max-height: 240px; object-fit: contain; }
p { font-size: 11px; word-break: break-all; margin: 4px 0; }
</style></head><body><h1>User Pictures/fowzia food Catalog</h1><div class="grid">`;

files.forEach(f => {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  const dims = getJpgDimensions(buf);
  const b64 = buf.toString('base64');
  catalogHtml += `<div class="card">
    <img src="data:image/jpeg;base64,${b64}" />
    <p><strong>${f}</strong></p>
    <p>${dims ? dims.width + 'x' + dims.height : 'unknown'} (${Math.round(buf.length/1024)} KB)</p>
  </div>`;
});

catalogHtml += `</div></body></html>`;

fs.writeFileSync('C:/Users/DITS-USER/.gemini/antigravity/scratch/fowzia-healthy-food/catalog_user_pics.html', catalogHtml);
console.log('Catalog saved to scratch/fowzia-healthy-food/catalog_user_pics.html');
