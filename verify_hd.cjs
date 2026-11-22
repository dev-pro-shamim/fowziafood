const fs = require('fs');
const path = require('path');

// Let's create an HTML file that has all images nicely laid out with labels so it's easy to browse
const dir = 'C:/Users/DITS-USER/.gemini/antigravity/scratch/fowzia-healthy-food/public/images/hd';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

console.log('HD count in public:', files.length);
