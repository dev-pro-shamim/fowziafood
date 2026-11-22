const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/DITS-USER/Pictures/fowzia food';
const destDir = 'C:/Users/DITS-USER/.gemini/antigravity/scratch/fowzia-healthy-food/public/images/hd';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jfif'));
files.forEach((f, i) => {
  const src = path.join(srcDir, f);
  const dest = path.join(destDir, `pic_${String(i).padStart(2, '0')}.jpg`);
  fs.copyFileSync(src, dest);
});
console.log(`Copied ${files.length} high-res pictures to public/images/hd/`);
