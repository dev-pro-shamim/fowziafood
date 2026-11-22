const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/DITS-USER/Pictures/fowzia food';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.jfif'));

files.forEach((f, i) => {
  const p = path.join(dir, f);
  const stat = fs.statSync(p);
  console.log(`[${i}] ${f} -> ${Math.round(stat.size/1024)} KB`);
});
