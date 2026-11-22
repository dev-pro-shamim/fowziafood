const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/DITS-USER/.gemini/antigravity/scratch/fowzia-healthy-food/public/images/hd';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

console.log('HD Photos available:');
files.forEach((f, i) => {
  const p = path.join(dir, f);
  const size = fs.statSync(p).size;
  console.log(`${f}: ${Math.round(size / 1024)} KB`);
});
