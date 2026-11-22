const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/DITS-USER/Pictures/fowzia food';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.jfif'));

const htmlPath = 'C:/Users/DITS-USER/.gemini/antigravity/scratch/fowzia-healthy-food/hd_index.html';

let html = `<!DOCTYPE html><html><head><title>Visual HD Photo Index</title>
<style>
  body { font-family: system-ui; background: #0f172a; color: #f8fafc; padding: 20px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  .card { background: #1e293b; border-radius: 12px; overflow: hidden; border: 1px solid #334155; }
  img { width: 100%; height: 200px; object-fit: cover; }
  .meta { padding: 12px; font-size: 12px; }
  .meta strong { color: #f59e0b; }
</style></head><body>
<h1>HD Photo Gallery Index</h1>
<div class="grid">`;

files.forEach((f, idx) => {
  const p = path.join(dir, f);
  const stat = fs.statSync(p);
  const b64 = fs.readFileSync(p).toString('base64');
  html += `<div class="card">
    <img src="data:image/jpeg;base64,${b64}" />
    <div class="meta">
      <div><strong>#${idx}</strong>: ${f}</div>
      <div>Size: ${Math.round(stat.size/1024)} KB</div>
    </div>
  </div>`;
});

html += `</div></body></html>`;
fs.writeFileSync(htmlPath, html);
console.log('Saved visual index to hd_index.html');
