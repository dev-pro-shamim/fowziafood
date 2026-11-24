export interface Product {
  id: string;
  name: string;
  category: 'Soy-Based' | 'Dairy & Yogurt Drinks' | 'Dairy Desserts' | 'Cheese' | 'Frozen Foods' | 'Spices';
  categorySlug: 'soy' | 'dairy-drinks' | 'dairy-desserts' | 'cheese' | 'frozen' | 'spices';
  size: string;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  year: number;
  description: string;
  image: string;
  category: 'Award' | 'Certification' | 'Grant' | 'International' | 'Exhibition';
  certificateDetails?: {
    certNo?: string;
    scope?: string;
    issuer?: string;
    accreditation?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Products' | 'Production' | 'Events' | 'Awards' | 'Training' | 'International' | 'Exhibitions';
  image: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "Fowzia Healthy Food Products",
  shortName: "Fowzia Food",
  founder: "Mrs. Afroza Sultana",
  established: 2014,
  businessType: "Agro-processing and Food Manufacturing",
  specialization: "Soy, dairy and protein-Based Healthy Food Products processing and Marketing",
  tagline: "Nutritious Foods for a Healthier Future",
  motto: "Nutritious Foods for a Healthier Future",
  address: "128/2, Mohammadia Housing Limited, Mohammadpur, Dhaka-1207, Bangladesh",
  phone: "01711228729",
  email: "fowziafood.bd@gmail.com",
  website: "www.fowzianoms.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61582687887855#",
  tradeLicenseNo: "TRAD/DNCC/033224/2022",
  tin: "416692584716",
  vatReg: "001001499-0402",
  graDocuments: [
    "BSTI Certification",
    "B-mark (Packaging) Certificate",
    "Trade Mark",
    "Premises License",
    "BSCIC License"
  ],
  stats: [
    { label: "Established Year", value: "2014", subtext: "A decade of healthy food innovation" },
    { label: "Training Beneficiaries", value: "35,000+", subtext: "Youth & women empowered through FSDI" },
    { label: "Business Initiatives", value: "3", subtext: "Fowzia Food, Fowzia Nom's & FSDI" },
    { label: "Catalog Products", value: "19", subtext: "Soy, dairy, frozen quick food & spices" },
  ],
  partnerships: [
    {
      name: "Department of Agricultural Marketing (DAM)",
      role: "Ministry of Agriculture - Supervision & Technical Project Partner (SACP-RAINS, PARTNER-APCU-DAM)"
    },
    {
      name: "Bangladesh Agricultural University, Gazipur",
      role: "Agricultural technical guidance and processing supervision"
    },
    {
      name: "Solidaridad Bangladesh",
      role: "Farmer linkage, value chain development & soybean farmer empowerment"
    },
    {
      name: "World Bank Group",
      role: "Best Women Entrepreneur Recognition (2020) & SME Capacity Support"
    },
    {
      name: "Livestock and Dairy Development Project (LDDP)",
      role: "Matching Grant for Small-Scale Milk Processing Technology (DLS, 2023)"
    },
    {
      name: "US Soy Food (USSEC)",
      role: "International technical exchange, Asia Soy Excellence & Food Summit delegate"
    }
  ]
};

export const PRODUCTS: Product[] = [
  // 1. Soy-Based
  {
    id: "fowzia-tofu-200g",
    name: "Fowzia Tofu (Bean Curd)",
    category: "Soy-Based",
    categorySlug: "soy",
    size: "200g",
    image: "/images/hd/pic_02.jpg",
    description: "Authentic, fresh, high-protein tofu curd crafted through hygienic soy-milk coagulation. Rich in complete plant protein, calcium, and essential minerals.",
    features: ["100% Plant-Based Protein", "Rich in Calcium & Isoflavones", "Hygienically Packed", "No Added Preservatives"],
    isFeatured: true
  },
  {
    id: "fowzia-soy-protein-ball-300g",
    name: "Fowzia Soy Protein Ball",
    category: "Soy-Based",
    categorySlug: "soy",
    size: "300g",
    image: "/images/hd/pic_03.jpg",
    description: "Nutritious, savory soy protein balls pre-prepared for quick home meals, curries, and appetizers. An ideal source of wholesome vegetable protein for families.",
    features: ["High Protein Meat Alternative", "Easy to Cook & Pan-Fry", "Enriched with Fiber", "Convenient Home-Style Pack"],
    isFeatured: true
  },
  {
    id: "fowzia-soy-porata-700g",
    name: "Fowzia Soy Porata",
    category: "Soy-Based",
    categorySlug: "soy",
    size: "700g (10 Pcs)",
    image: "/images/hd/pic_04.jpg",
    description: "Multi-layered, flaky, golden parathas enriched with wholesome soybean flour for enhanced protein and fiber. Ready to heat and serve.",
    features: ["Made with Love - 10 Pcs Pack", "Soy Flour Enriched", "Crispy & Flaky Texture", "Nutritious Breakfast Solution"],
    isFeatured: true
  },
  {
    id: "fowzia-soy-ruti-450g",
    name: "Fowzia Soy Ruti",
    category: "Soy-Based",
    categorySlug: "soy",
    size: "450g (10 Pcs)",
    image: "/images/hd/pic_05.jpg",
    description: "Soft, diabetic-friendly whole wheat and soy flour rotis offering a low-glycemic, high-protein daily staple for health-conscious households.",
    features: ["Home Style Recipe", "High Protein & Dietary Fiber", "Zero Trans Fat", "Quick Ready-to-Heat"],
    isFeatured: true
  },
  {
    id: "fowzia-soybean-whole-grain-1kg",
    name: "Fowzia Soybean Whole Grain",
    category: "Soy-Based",
    categorySlug: "soy",
    size: "1kg",
    image: "/images/hd/pic_06.jpg",
    description: "Premium whole grain soybeans sourced directly from local marginal farmers under Solidaridad Bangladesh and DAM supervision. Cleaned, graded, and packed for culinary and sprouting use.",
    features: ["Sourced from Local Farmers", "Non-GMO Pure Grain", "Solidaridad Bangladesh Supervised", "High in Essential Amino Acids"],
    isFeatured: false
  },

  // 2. Dairy & Yogurt Drinks
  {
    id: "fowzia-special-borhani-1500ml",
    name: "Fowzia Special Borhani",
    category: "Dairy & Yogurt Drinks",
    categorySlug: "dairy-drinks",
    size: "1.5L",
    image: "/images/hd/pic_07.jpg",
    description: "Traditional spicy yogurt digestive beverage prepared with pure cow's milk, mint, mustard seed, green chilies, and aromatic spices. Perfect for festive feasts and family gatherings.",
    features: ["Pure Full Cream Milk Base", "Digestive Probiotic Enzymes", "Authentic Bangladeshi Recipe", "Party & Family Feast Size"],
    isFeatured: true
  },
  {
    id: "fowzia-special-borhani-750ml",
    name: "Fowzia Special Borhani",
    category: "Dairy & Yogurt Drinks",
    categorySlug: "dairy-drinks",
    size: "750ml",
    image: "/images/hd/pic_07.jpg",
    description: "Rich, tangy, aromatic Borhani formulated with natural digestive herbs and cultured curd. Ideal for dinners and weekend dining.",
    features: ["Natural Cultured Curd", "Rich Traditional Herb Blend", "Chilled Ready to Drink", "Digestive Friendly"],
    isFeatured: false
  },
  {
    id: "fowzia-special-borhani-250ml",
    name: "Fowzia Special Borhani",
    category: "Dairy & Yogurt Drinks",
    categorySlug: "dairy-drinks",
    size: "250ml",
    image: "/images/hd/pic_07.jpg",
    description: "Convenient single-serve bottle of authentic Fowzia Borhani for quick on-the-go refreshments, lunches, and individual portions.",
    features: ["Single Serve Bottle", "Tangy & Refreshing", "Zero Artificial Flavoring", "Hygienically Bottled"],
    isFeatured: false
  },
  {
    id: "fowzia-special-matha-250ml",
    name: "Fowzia Special Matha",
    category: "Dairy & Yogurt Drinks",
    categorySlug: "dairy-drinks",
    size: "250ml",
    image: "/images/hd/pic_07.jpg",
    description: "Traditional cooling yogurt buttermilk beverage made from fresh churned curd, lightly salted and seasoned to soothe digestion and beat the heat.",
    features: ["Light & Hydrating", "Natural Electrolytes", "Probiotic Cultures", "Cooling & Gut-Healthy"],
    isFeatured: false
  },

  // 3. Dairy Desserts
  {
    id: "fowzia-special-sweet-curd-1kg",
    name: "Fowzia Special Sweet Curd (Misti Doi)",
    category: "Dairy Desserts",
    categorySlug: "dairy-desserts",
    size: "1kg",
    image: "/images/hd/pic_09.jpg",
    description: "Renowned Bangladeshi caramelized sweet yogurt set in authentic earthen clay pots. Slow-steamed full cream milk delivers velvety texture and rich caramel flavor.",
    features: ["Traditional Clay Pot Fermented", "Dense Cream Layer", "Natural Caramelized Sweetness", "Ideal for Celebrations"],
    isFeatured: true
  },
  {
    id: "fowzia-special-sweet-curd-500g",
    name: "Fowzia Special Sweet Curd",
    category: "Dairy Desserts",
    categorySlug: "dairy-desserts",
    size: "500g",
    image: "/images/hd/pic_09.jpg",
    description: "Luscious, creamy sweet yogurt crafted from pure whole milk, packed in clay pots to allow optimal breathing and moisture balance.",
    features: ["Pure Whole Milk", "Clay Pot Set", "Traditional Recipe", "Medium Family Size"],
    isFeatured: false
  },
  {
    id: "fowzia-special-sweet-sour-curd-500g",
    name: "Fowzia Special Sweet & Sour Curd",
    category: "Dairy Desserts",
    categorySlug: "dairy-desserts",
    size: "500g",
    image: "/images/hd/pic_09.jpg",
    description: "A balanced delicacy combining the mild sweetness of caramelized curd with the tangy zest of natural yogurt fermentation. Great for raita or direct dessert.",
    features: ["Balanced Flavor Profile", "Cultured Probiotic Base", "Rich in Protein", "Versatile Table Curd"],
    isFeatured: false
  },
  {
    id: "fowzia-special-sour-curd-500g",
    name: "Fowzia Special Sour Curd (Tok Doi)",
    category: "Dairy Desserts",
    categorySlug: "dairy-desserts",
    size: "500g",
    image: "/images/hd/pic_09.jpg",
    description: "Pure, unsweetened probiotic sour yogurt made with live cultures. Essential for culinary cooking, meat tenderizing, marinades, and healthy weight management.",
    features: ["Unsweetened Pure Yogurt", "Live Active Probiotics", "Culinary Grade for Marinades", "Diabetic Friendly"],
    isFeatured: false
  },
  {
    id: "fowzia-special-sweet-sour-curd-100ml",
    name: "Fowzia Special Sweet / Sour Curd",
    category: "Dairy Desserts",
    categorySlug: "dairy-desserts",
    size: "100ml",
    image: "/images/hd/pic_09.jpg",
    description: "Individual cup portion of fresh Fowzia curd, ideal for personal snacking, school tiffin boxes, and single dessert servings.",
    features: ["Convenient Single Serving", "Sealed Freshness", "On-the-go Nutrition", "Hygienic Cup Pack"],
    isFeatured: false
  },

  // 4. Cheese
  {
    id: "fowzia-special-mozzarella-cheese-250g",
    name: "Fowzia Special Mozzarella Cheese",
    category: "Cheese",
    categorySlug: "cheese",
    size: "250g",
    image: "/images/hd/pic_11.jpg",
    description: "Freshly stretched artisanal mozzarella cheese crafted from 100% pure cow's milk. Boasts exceptional meltability, golden browning, and delicious stretch for pizzas and sandwiches.",
    features: ["100% Pure Milk Mozzarella", "Superior Stretch & Melt", "Rich in Calcium", "No Synthetic Oils"],
    isFeatured: true
  },

  // 5. Frozen Quick Food
  {
    id: "fowzia-french-fries-1kg",
    name: "Fowzia French Fries",
    category: "Frozen Foods",
    categorySlug: "frozen",
    size: "1kg",
    image: "/images/hd/pic_14.jpg",
    description: "Selected premium grade potatoes cut into uniform, crispy-finish fries. Flash frozen to lock in farm-fresh flavor and fluffy interior texture.",
    features: ["Uniform Golden Cut", "Crispy Outside, Fluffy Inside", "Quick Fry or Bake", "1kg Bulk Pack"],
    isFeatured: true
  },

  // 6. Spices
  {
    id: "fowzia-chili-powder-200g",
    name: "Fowzia Chili Powder",
    category: "Spices",
    categorySlug: "spices",
    size: "200g",
    image: "/images/hd/pic_08.jpg",
    description: "Pure, sun-dried red chilies finely milled to deliver bright natural red color and balanced piquancy without artificial food coloring or adulterants.",
    features: ["100% Pure Red Chilies", "No Added Artificial Dyes", "Aromatic & Pungent", "Hygienic Jar Packaging"],
    isFeatured: false
  },
  {
    id: "fowzia-turmeric-powder-200g",
    name: "Fowzia Turmeric Powder",
    category: "Spices",
    categorySlug: "spices",
    size: "200g",
    image: "/images/hd/pic_08.jpg",
    description: "Sun-dried turmeric rhizomes ground under hygienic processing standards. Rich in natural curcumin, providing brilliant golden color and health benefits.",
    features: ["High Natural Curcumin", "Pure Ground Rhizomes", "Anti-inflammatory Properties", "Sealed Air-Tight Jar"],
    isFeatured: false
  },
  {
    id: "fowzia-coriander-powder-200g",
    name: "Fowzia Coriander Powder",
    category: "Spices",
    categorySlug: "spices",
    size: "200g",
    image: "/images/hd/pic_08.jpg",
    description: "Fragrant, freshly roasted and milled coriander seeds providing an earthy, citrusy aroma and authentic taste to curries and savory culinary creations.",
    features: ["Aromatic Roasted Seeds", "Fine Culinary Texture", "Freshness Sealed", "Unadulterated Quality"],
    isFeatured: false
  }
];

export const FUTURE_PRODUCTS = [
  "Soy biscuits",
  "Soy Snacks",
  "Soy chips",
  "Roasted soybeans",
  "Soy noodles",
  "Soy beverages",
  "Soy baby food",
  "Soy energy bars",
  "Soy meat substitutes"
];

export const CATEGORIES = [
  {
    id: "soy",
    name: "Soy-Based Products",
    description: "Plant-powered nutrition including fresh Tofu, Soy Protein Balls, high-fiber Soy Ruti, and Soy Paratha.",
    image: "/images/fowzia-tofu-served-cubes.jpg",
    itemCount: "5 Products",
    color: "from-amber-600/90 to-amber-900/90"
  },
  {
    id: "dairy-drinks",
    name: "Dairy & Yogurt Drinks",
    description: "Traditional refreshing beverages including artisanal Borhani and soothing Matha made with cultured dairy.",
    image: "/images/hd/pic_07.jpg",
    itemCount: "4 Products",
    color: "from-rose-700/90 to-red-950/90"
  },
  {
    id: "dairy-desserts",
    name: "Dairy Desserts",
    description: "Caramelized clay-pot Sweet Curd (Misti Doi), versatile Sweet & Sour Curd, and culinary Tok Doi.",
    image: "/images/hd/pic_09.jpg",
    itemCount: "5 Products",
    color: "from-yellow-700/90 to-amber-950/90"
  },
  {
    id: "cheese",
    name: "Artisanal Cheese",
    description: "Fowzia Special Mozzarella Cheese crafted from 100% pure cow's milk for outstanding stretch and melt.",
    image: "/images/hd/pic_11.jpg",
    itemCount: "1 Product",
    color: "from-amber-500/90 to-yellow-800/90"
  },
  {
    id: "frozen",
    name: "Frozen Quick Foods",
    description: "Convenient frozen solutions including golden crispy French Fries ready to fry or bake.",
    image: "/images/hd/pic_14.jpg",
    itemCount: "1 Product",
    color: "from-orange-600/90 to-amber-950/90"
  },
  {
    id: "spices",
    name: "Essential Spices",
    description: "Pure, unadulterated ground chili, turmeric, and coriander powders packed with natural aroma.",
    image: "/images/hd/pic_08.jpg",
    itemCount: "3 Products",
    color: "from-red-700/90 to-burgundy-dark/90"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "world-bank-award-2020",
    title: "Best Women Entrepreneur of Bangladesh",
    organization: "World Bank Group / WEConnect International / LightCastle Partners",
    date: "February 9, 2020",
    year: 2020,
    category: "Award",
    description: "Awarded by the World Bank Group in recognition of Mrs. Afroza Sultana's pioneering leadership and achievement as one of the top 5 women entrepreneurs in the Corporate Connect Pitch Competition.",
    image: "/images/world-bank-best-entrepreneur-trophy.jpg",
    certificateDetails: {
      scope: "Corporate Connect: Strengthening Market Access for Women Business Owners in Bangladesh",
      issuer: "World Bank Group, WEConnect International, LightCastle Partners"
    }
  },
  {
    id: "lddp-matching-grant-2023",
    title: "LDDP Matching Grant for Milk Processing Technology",
    organization: "Livestock and Dairy Development Project (LDDP) & Department of Livestock Services (DLS)",
    date: "December 2023",
    year: 2023,
    category: "Grant",
    description: "Awarded special technical matching grant under the Matching Grant for Small-Scale Milk Processing Technology to scale hygienic dairy processing and milk value addition.",
    image: "/images/lddp-matching-grant-ceremony.jpg",
    certificateDetails: {
      scope: "Small-Scale Milk Processing Technology Upgradation",
      issuer: "Livestock and Dairy Development Project (LDDP), DLS, Ministry of Fisheries and Livestock"
    }
  },
  {
    id: "iso-22000-cert",
    title: "ISO 22000:2018 Food Safety Management System",
    organization: "AQC GLOBAL LLC (Accredited by EGAC & Member of IAF MLA)",
    date: "November 28, 2023",
    year: 2023,
    category: "Certification",
    description: "Certified for Food Safety Management System conforming to ISO 22000:2018 for manufacturing, processing, packaging, and supplier of dairy, frozen items, and soybean products.",
    image: "/images/iso-22000-official-certificate.jpg",
    certificateDetails: {
      certNo: "23EFMG09",
      scope: "Manufacturing, Processing, Packaging and Supplier of Dairy, Frozen Items and Soybean Products (Category C & Subcategory CI, CII)",
      issuer: "AQC GLOBAL LLC",
      accreditation: "EGAC Accredited FSMS Certification CAB # 012226, Member of IAF MLA"
    }
  },
  {
    id: "sme-foundation-fsms-2022",
    title: "Food Safety Management System (FSMS) ISO 22000:2018 Training",
    organization: "Small & Medium Enterprise Foundation (SME Foundation)",
    date: "December 17–22, 2022",
    year: 2022,
    category: "Certification",
    description: "Completion of intensive professional training on Food Safety Management Systems (FSMS) ISO 22000:2018 organized by the SME Foundation.",
    image: "/images/sme-foundation-iso22000-cert.jpg",
    certificateDetails: {
      certNo: "TD-43361/22",
      scope: "Food Safety Management System (FSMS) - ISO 22000:2018",
      issuer: "Small and Medium Enterprise Foundation (SMEF)"
    }
  },
  {
    id: "us-soy-thailand-nepal-2026",
    title: "Asia Soy Excellence & Food Summit Delegation",
    organization: "US Soy Food / USSEC (U.S. Soybean Export Council)",
    date: "International Participation",
    year: 2026,
    category: "International",
    description: "Invited by US Soy Food to participate in international technical workshops in Thailand and Nepal, exchanging global best practices on soy food processing technologies and market trends.",
    image: "/images/asia-soy-summit-thailand-banner.jpg",
    certificateDetails: {
      scope: "Asia Soy Excellence & Food Summit (ASEFS) & USSEC Technical Exchange",
      issuer: "U.S. Soybean Export Council (USSEC)"
    }
  },
  {
    id: "belgium-delegation-inspection",
    title: "International Inspection & Evaluation Visit",
    organization: "Delegation from Belgium",
    date: "Facility Inspection",
    year: 2024,
    category: "International",
    description: "A prestigious delegation from Belgium visited Fowzia Food's production facility to observe and evaluate food processing standards, hygiene practices, and quality control systems.",
    image: "/images/belgium-delegation-lab-tour.jpg",
    certificateDetails: {
      scope: "On-site Factory Tour, Hygiene Inspection, and Operational Quality Evaluation",
      issuer: "Belgian Trade & Food Delegation"
    }
  },
  {
    id: "national-food-exhibitions",
    title: "National Entrepreneurship Conference & Food Expos",
    organization: "National SME & Agro-Food Exhibitions Bangladesh",
    date: "Ongoing Exhibitions",
    year: 2023,
    category: "Exhibition",
    description: "Active participation in major national trade fairs and entrepreneurship expos to showcase soy and dairy innovations and receive direct consumer feedback.",
    image: "/images/national-expo-stall-banner.jpg",
    certificateDetails: {
      scope: "National Exhibition & Market Outreach for Women Entrepreneurs",
      issuer: "National Entrepreneurship Conference"
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-hd-1",
    title: "National Conference Product Showcase",
    category: "Exhibitions",
    image: "/images/hd/pic_07.jpg",
    description: "High-resolution capture of Fowzia Food's agro-product display and stakeholder discussions."
  },
  {
    id: "gal-hd-2",
    title: "FSDI Practical Training Session",
    category: "Training",
    image: "/images/hd/pic_09.jpg",
    description: "Empowering women and youths with hands-on food processing skills and entrepreneurship mentoring."
  },
  {
    id: "gal-hd-3",
    title: "International Technical Exchange",
    category: "International",
    image: "/images/hd/pic_04.jpg",
    description: "Mrs. Afroza Sultana participating in high-level agro-processing and food innovation forums."
  },
  {
    id: "gal-hd-4",
    title: "Product Packaging & Retail Presentation",
    category: "Products",
    image: "/images/hd/pic_12.jpg",
    description: "Showcase of premium soy, curd and dairy value-added products prepared for modern trade."
  },
  {
    id: "gal-hd-5",
    title: "Official Delegation & Institutional Review",
    category: "Production",
    image: "/images/hd/pic_13.jpg",
    description: "Delegates reviewing hygienic food safety standards and laboratory operations."
  },
  {
    id: "gal-hd-6",
    title: "Award & Recognition Ceremony",
    category: "Awards",
    image: "/images/hd/pic_38.jpg",
    description: "Celebration of women entrepreneurship and excellence in agro-food manufacturing."
  },
  {
    id: "gal-1",
    title: "Fowzia Tofu & Served Dish",
    category: "Products",
    image: "/images/fowzia-tofu-served-cubes.jpg",
    description: "Freshly sliced home-style tofu cubes prepared for healthy cooking."
  },
  {
    id: "gal-2",
    title: "Soy Protein Ball Box Packaging",
    category: "Products",
    image: "/images/hd/pic_03.jpg",
    description: "High protein meat-alternative soy protein ball packaging."
  },
  {
    id: "gal-3",
    title: "Fowzia Artisanal Dairy Curds",
    category: "Products",
    image: "/images/hd/pic_09.jpg",
    description: "Traditional earthen pots of sweet and sour yogurt curds."
  },
  {
    id: "gal-4",
    title: "Fowzia Mozzarella Cheese & Shreds",
    category: "Products",
    image: "/images/hd/pic_11.jpg",
    description: "Pure milk mozzarella block with freshly grated cheese."
  },
  {
    id: "gal-5",
    title: "Belgian Delegation Facility Inspection",
    category: "Production",
    image: "/images/belgium-delegation-lab-tour.jpg",
    description: "Belgian international delegation inspecting clean production rooms."
  },
  {
    id: "gal-6",
    title: "Belgian Delegation Technical Discussion",
    category: "Production",
    image: "/images/belgium-delegation-briefing.jpg",
    description: "Operational review and hygiene procedures briefing with Belgian team."
  },
  {
    id: "gal-7",
    title: "World Bank Award Ceremony Stage",
    category: "Awards",
    image: "/images/world-bank-award-ceremony-stage.jpg",
    description: "Mrs. Afroza Sultana honored on stage by World Bank & WEConnect."
  },
  {
    id: "gal-8",
    title: "Best Women Entrepreneur Trophy",
    category: "Awards",
    image: "/images/world-bank-best-entrepreneur-trophy.jpg",
    description: "Mrs. Afroza Sultana holding the World Bank award trophy in Feb 2020."
  },
  {
    id: "gal-9",
    title: "LDDP Matching Grant Award Ceremony",
    category: "Awards",
    image: "/images/lddp-matching-grant-ceremony.jpg",
    description: "Recognition ceremony under the Livestock and Dairy Development Project."
  },
  {
    id: "gal-10",
    title: "FSDI Classroom & Training Setup",
    category: "Training",
    image: "/images/fsdi-training-center.jpg",
    description: "Fowzia Skill Development Institute modern training classroom."
  },
  {
    id: "gal-11",
    title: "Women Entrepreneurs Training Session",
    category: "Training",
    image: "/images/fsdi-women-entrepreneurs-training-1.jpg",
    description: "Women participants receiving hands-on entrepreneurship and food processing training."
  },
  {
    id: "gal-12",
    title: "FSDI Interactive Workshop",
    category: "Training",
    image: "/images/fsdi-women-entrepreneurs-training-2.jpg",
    description: "Capacity building session empowering community youth and women."
  },
  {
    id: "gal-13",
    title: "Asia Soy Excellence Summit in Thailand",
    category: "International",
    image: "/images/asia-soy-summit-thailand-banner.jpg",
    description: "Mrs. Afroza Sultana at the Asia Soy Excellence & Food Summit 2026."
  },
  {
    id: "gal-14",
    title: "International Summit Conference Hall",
    category: "International",
    image: "/images/asia-soy-summit-conference-auditorium.jpg",
    description: "Global delegates assembled at the international soy food summit in Bangkok."
  },
  {
    id: "gal-15",
    title: "USSEC US Soy Summit Stage",
    category: "International",
    image: "/images/ussec-us-soy-podium.jpg",
    description: "USSEC conference podium presenting sustainable soy processing technologies."
  },
  {
    id: "gal-16",
    title: "Fowzia Nom's Ribbon Cutting Ceremony",
    category: "Events",
    image: "/images/fowzia-noms-opening-ribbon-cutting.jpg",
    description: "Official opening ceremony and ribbon cutting of Fowzia Nom's retail initiative."
  },
  {
    id: "gal-17",
    title: "Fowzia Nom's Opening Celebration",
    category: "Events",
    image: "/images/fowzia-noms-opening-celebration.jpg",
    description: "Community partners and guests celebrating the launch of Fowzia Nom's."
  },
  {
    id: "gal-18",
    title: "National Food Exhibition Pavilion",
    category: "Exhibitions",
    image: "/images/national-expo-stall-banner.jpg",
    description: "Fowzia Food product display booth at the National Entrepreneurship Conference."
  },
  {
    id: "gal-19",
    title: "Customer & Dignitary Engagement",
    category: "Exhibitions",
    image: "/images/national-expo-meeting-dignitary.jpg",
    description: "Meeting with trade officials and discussing healthy agro-processing."
  },
  {
    id: "gal-20",
    title: "Exhibition Stall Visitor Inquiries",
    category: "Exhibitions",
    image: "/images/national-expo-stall-visitors.jpg",
    description: "Consumers exploring soy-based foods and pure dairy curds at the expo."
  }
];

export const TIMELINE = [
  {
    year: "2014",
    title: "Establishment of Fowzia Healthy Food Products",
    description: "Founded by Mrs. Afroza Sultana in Dhaka to produce nutritious, affordable dairy and soy-based food products while supporting family livelihood and community employment."
  },
  {
    year: "2019",
    title: "Corporate Connect MasterClass Training",
    description: "Completed intensive MasterClass training on Corporate Connect - Strengthening Market Access for Women-Owned Businesses in Bangladesh (Dec 2019)."
  },
  {
    year: "2020",
    title: "World Bank Recognition - Best Women Entrepreneur",
    description: "Recognized as 'Best Women Entrepreneur of Bangladesh' by the World Bank Group and WEConnect International in February 2020."
  },
  {
    year: "2022",
    title: "FSMS ISO 22000:2018 Training with SME Foundation",
    description: "Completed rigorous Food Safety Management System training organized by SME Foundation, strengthening quality assurance protocols."
  },
  {
    year: "2023",
    title: "FSDI Launch & LDDP Matching Grant Award",
    description: "Established Fowzia Skill Development Institute (FSDI) with technical assistance from DAM (Ministry of Agriculture) & World Bank; received LDDP matching grant for milk processing technology."
  },
  {
    year: "2023",
    title: "ISO 22000:2018 International Certification",
    description: "Formally assessed and certified for ISO 22000:2018 Food Safety Management System by AQC Global LLC with IAF and EGAC accreditation."
  },
  {
    year: "2024",
    title: "Belgian Delegation Inspection & Fowzia Nom's Launch",
    description: "Hosted international inspection delegation from Belgium evaluating hygiene and processing; officially inaugurated Fowzia Nom's modern trade distribution network."
  },
  {
    year: "2026+",
    title: "Asia Soy Excellence Summit & Vision 2030",
    description: "Participated in the Thailand and Nepal international workshops invited by US Soy Food; advancing toward a modern processing plant and nationwide reach."
  }
];

export const SWOT = {
  strengths: [
    "Strong commitment to producing healthy and nutritious soy and dairy products.",
    "Established business experience since 2014.",
    "Founder’s resilience, dedication, and recognized leadership.",
    "Growing customer trust and product acceptance across Dhaka and regions.",
    "Affordable pricing strategy making protein accessible for middle-income consumers.",
    "Focus on food safety, quality, and hygiene (ISO 22000:2018 certified).",
    "High potential for women empowerment and measurable social impact.",
    "Strong connection with local marginal farmers and farming communities."
  ],
  weaknesses: [
    "Limited financial resources for large-scale capital expansion.",
    "Limited production capacity compared to massive multinational conglomerates.",
    "Dependence on local markets and physical distribution channels.",
    "Brand recognition still developing at nationwide scale.",
    "Need for further access to automated advanced processing technology.",
    "Limited traditional marketing budget and promotional advertising.",
    "Shortage of skilled technical and specialized food science personnel."
  ],
  opportunities: [
    "Surging consumer demand for healthy, plant-based, and protein-rich foods.",
    "Rising awareness of soybean benefits (cholesterol-free, cardio-protective).",
    "Expansion into supermarkets, schools, hospitals, and institutional canteens.",
    "Growth of online grocery platforms, modern trade, and digital ordering.",
    "Government and multilateral development partner support for agro-food SMEs.",
    "Opportunities for product line diversification (soy biscuits, soy milk, soy noodles).",
    "Regional and international export potential for processed soy foods."
  ],
  threats: [
    "Intense competition from established commercial dairy and frozen food brands.",
    "Fluctuations in raw material prices (soybeans, milk, specialized packaging).",
    "Broader economic volatility affecting consumer purchasing power.",
    "Changes in food safety regulations and compliance certification renewals.",
    "Supply chain bottlenecks and temperature-controlled logistics challenges."
  ]
};

export const INITIATIVES = [
  {
    id: "fowzia-food",
    name: "Fowzia Healthy Food Products",
    tagline: "Agro-Processing & Healthy Food Manufacturing",
    description: "The core manufacturing engine founded in 2014. Focuses on value-addition to soy and dairy, sourcing raw milk and soybeans directly from marginal farmers under DAM and Solidaridad supervision to produce 19 distinct wholesome food products.",
    badge: "Core Enterprise",
    accentColor: "from-burgundy to-burgundy-dark",
    image: "/images/hd/pic_02.jpg",
    link: "/about",
    highlights: [
      "10+ years of manufacturing experience",
      "ISO 22000:2018 Certified food safety",
      "Direct sourcing from marginal farmers",
      "Affordable protein for families"
    ]
  },
  {
    id: "fowzia-noms",
    name: "Fowzia Nom's",
    tagline: "Market Linkage & Sustainable Food Distribution",
    description: "The distribution and modern trade arm designed to bridge local producers, women entrepreneurs, grocery stores, supermarkets, pharmacies, and institutional buyers directly with consumers across Bangladesh.",
    badge: "Distribution Arm",
    accentColor: "from-amber-600 to-amber-800",
    image: "/images/fowzia-noms-opening-celebration.jpg",
    link: "/fowzia-noms",
    highlights: [
      "Modern trade retail partnerships",
      "Supermarkets, pharmacies & health food shops",
      "Institutional supply (schools, hospitals)",
      "Empowering retail entrepreneurs"
    ]
  },
  {
    id: "fsdi",
    name: "Fowzia Skill Development Institute (FSDI)",
    tagline: "Capacity Building & Entrepreneurship Education",
    description: "Established in 2023 with financial and technical assistance from the Department of Agricultural Marketing (DAM) (Ministry of Agriculture) under SACP-RAINS and PARTNER-APCU-DAM projects, and the World Bank. Has trained over 35,000 youth and women.",
    badge: "Empowerment Hub",
    accentColor: "from-rose-800 to-amber-700",
    image: "/images/fsdi-women-entrepreneurs-training-1.jpg",
    link: "/fsdi",
    highlights: [
      "~35,000 youth & women trained to date",
      "Supported by DAM (Ministry of Agriculture)",
      "Funded under SACP-RAINS, PARTNER-APCU-DAM & World Bank",
      "Hands-on food processing & business mentoring"
    ]
  }
];
