const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/DITS-USER/.gemini/antigravity/brain/77964b65-ccee-42e4-861e-8d99d872f456/scratch/extracted_images';
const logoSrc = 'C:/Users/DITS-USER/.gemini/antigravity/brain/77964b65-ccee-42e4-861e-8d99d872f456/.user_uploaded/media_1795337327790_2b5a8e6a.jpg';
const destDir = 'C:/Users/DITS-USER/.gemini/antigravity/scratch/fowzia-healthy-food/public/images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Copy logo
fs.copyFileSync(logoSrc, path.join(destDir, 'fowzia-logo.jpg'));
fs.copyFileSync(logoSrc, path.join(destDir, 'fowzia-logo.png')); // duplicate for flexibility
console.log('Copied logo to public/images/fowzia-logo.jpg');

// 2. Map of extracted images by file name to their descriptive destination
// Based on dimensions and sequence in PDF:
const imageMap = {
  // Page 2: World Bank & LDDP
  'img_01.jpg': 'world-bank-award-ceremony-stage.jpg',       // 322x192
  'img_02.jpg': 'world-bank-best-entrepreneur-trophy.jpg',    // 308x205
  'img_03.jpg': 'lddp-matching-grant-ceremony.jpg',           // 226x315
  
  // Page 4: Future & Nom's
  'img_05.jpg': 'future-products-collage.jpg',                // 455x275
  'img_06.jpg': 'fowzia-noms-packaging-banner.jpg',           // 69x253
  'img_07.jpg': 'fowzia-noms-retail-display.jpg',             // 650x239
  'img_09.jpg': 'fowzia-noms-opening-ribbon-cutting.jpg',     // 317x238
  'img_10.jpg': 'fowzia-noms-opening-celebration.jpg',        // 314x224
  
  // Page 5: FSDI
  'img_11.jpg': 'fsdi-training-center.jpg',                   // 342x256
  'img_14.jpg': 'fsdi-women-entrepreneurs-training-1.jpg',    // 241x233
  'img_15.jpg': 'fsdi-women-entrepreneurs-training-2.jpg',    // 300x173
  
  // Page 11: Products
  'img_18.jpg': 'fowzia-soybean-whole-grain.jpg',             // 323x359
  'img_19.jpg': 'fowzia-tofu-box.jpg',                        // 332x359
  'img_20.jpg': 'fowzia-tofu-served-cubes.jpg',               // 576x359
  'img_21.jpg': 'fowzia-soy-protein-ball-pack.jpg',           // 976x593
  
  // Page 12: Products
  'img_22.jpg': 'fowzia-soy-ruti-pack.jpg',                   // 427x389
  'img_23.jpg': 'fowzia-soy-paratha-pack.jpg',                // 361x272
  'img_24.jpg': 'fowzia-mozzarella-cheese.jpg',               // 485x411
  'img_25.jpg': 'fowzia-french-fries.jpg',                    // 446x390
  
  // Page 13: Drinks & Sweets & Spices
  'img_26.jpg': 'fowzia-borhani-yogurt-drinks.jpg',           // 276x221
  'img_27.jpg': 'iso-22000-official-certificate.jpg',         // 595x877
  'img_28.jpg': 'fowzia-spices-pack.jpg',                     // 716x538
  'img_29.jpg': 'fowzia-sweet-sour-curd-pots.jpg',            // 390x295
  
  // Page 15 & 16 & 17: Certificates
  'img_30.jpg': 'sme-foundation-iso22000-cert.jpg',           // 752x525
  'img_31.jpg': 'world-bank-corporate-connect-cert.jpg',      // 683x467
  
  // Page 18: Workshops & Thailand Summit
  'img_32.jpg': 'fowzia-training-session-hall.jpg',           // 315x177
  'img_33.jpg': 'fowzia-workshop-group-delegates.jpg',        // 305x221
  'img_34.jpg': 'asia-soy-summit-thailand-banner.jpg',        // 375x281
  
  // Page 19: Thailand Summit
  'img_35.jpg': 'asia-soy-summit-thailand-delegates.jpg',     // 264x352
  'img_36.jpg': 'asia-soy-summit-conference-auditorium.jpg',  // 375x211
  'img_37.jpg': 'ussec-us-soy-podium.jpg',                    // 268x341
  
  // Page 20: Food Exhibitions
  'img_38.jpg': 'national-expo-stall-banner.jpg',             // 296x178
  'img_39.jpg': 'national-expo-meeting-dignitary.jpg',        // 345x258
  'img_40.jpg': 'national-expo-stall-visitors.jpg',           // 396x296
  
  // Page 21: Belgium Delegation Visit
  'img_41.jpg': 'belgium-delegation-lab-tour.jpg',            // 325x218
  'img_42.jpg': 'belgium-delegation-briefing.jpg',            // 324x238
  'img_43.jpg': 'belgium-delegation-meeting-afroza.jpg'       // 320x240
};

for (const [srcFile, targetName] of Object.entries(imageMap)) {
  const fullSrc = path.join(srcDir, srcFile);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, path.join(destDir, targetName));
    console.log(`Copied ${srcFile} -> ${targetName}`);
  } else {
    console.warn(`File not found: ${srcFile}`);
  }
}

console.log('All authentic assets copied to public/images!');
