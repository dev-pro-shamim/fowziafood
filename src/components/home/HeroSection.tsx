import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Scale,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeroSectionProps {
  onOpenPDF: () => void;
  onOpenInquiry: (productName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPDF, onOpenInquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    // Slide 1: Soy Innovation (Crimson Ruby)
    {
      theme: 'from-[#7A0C22] via-[#9E1B32] to-[#B91C1C]',
      badgeColor: 'bg-amber-400 text-burgundy-dark',
      badgeText: 'Pioneering Soy Agro-Processing Since 2014',
      title: 'BIG NUTRITION.',
      highlight: 'BIGGER HEALTH!',
      subtitle: 'Nutritious Foods for a Healthier Future',
      desc: 'High-protein, affordable, and 100% plant-based soy foods crafted under hygienic ISO 22000:2018 standards in Bangladesh.',
      productImage: '/images/fowzia-soy-protein-ball-pack.jpg',
      subProductImage: '/images/fowzia-tofu-box.jpg',
      taglineBadge: 'Starting from 100% Pure Soy',
      warrantyBadge: 'World Bank Recognized',
      ctaText: 'Explore Soy Range',
      ctaLink: '/products?category=soy',
      secondaryText: 'Download Profile (PDF)',
      secondaryAction: 'pdf',
      accentGlow: 'rgba(245, 158, 11, 0.4)'
    },
    // Slide 2: Dairy & Probiotic Drinks (Sapphire Blue)
    {
      theme: 'from-[#0A192F] via-[#1E3A8A] to-[#2563EB]',
      badgeColor: 'bg-emerald-400 text-slate-900',
      badgeText: 'Pure Cow Milk • Live Active Cultures',
      title: 'AUTHENTIC FARM DAIRY',
      highlight: '& DIGESTIVE DRINKS',
      subtitle: 'Fowzia Special Borhani, Matha & Sweet Curd',
      desc: 'Crafted with natural digestive herbs, mustard seeds, mint, and pure cultured curd. Available in 1.5L party feasts, 750ml, and 250ml.',
      productImage: '/images/fowzia-borhani-yogurt-drinks.jpg',
      subProductImage: '/images/fowzia-sweet-sour-curd-pots.jpg',
      taglineBadge: 'Party & Feast Packs: 1.5L / 750ml / 250ml',
      warrantyBadge: 'LDDP Matching Grant Winner',
      ctaText: 'Browse Dairy & Curds',
      ctaLink: '/products?category=dairy-drinks',
      secondaryText: 'Order Wholesale Party Pack',
      secondaryAction: 'inquiry',
      accentGlow: 'rgba(56, 189, 248, 0.4)'
    },
    // Slide 3: Cheese & Frozen Quick Food (Royal Purple)
    {
      theme: 'from-[#3B0764] via-[#581C87] to-[#7E22CE]',
      badgeColor: 'bg-yellow-300 text-purple-950',
      badgeText: 'Chef-Grade Stretch & Golden Crisp',
      title: 'ARTISANAL MOZZARELLA',
      highlight: '& QUICK FROZEN FRIES',
      subtitle: 'Pure Dairy Cheese & Golden Potato Fries',
      desc: '100% cow milk stretchy mozzarella cheese (250g) and uniform golden crispy french fries (1kg). Ideal for homes, cafes, and restaurants.',
      productImage: '/images/fowzia-mozzarella-cheese.jpg',
      subProductImage: '/images/fowzia-french-fries.jpg',
      taglineBadge: '100% Pure Cow Milk Mozzarella',
      warrantyBadge: 'Food Safety Tested',
      ctaText: 'Browse Frozen & Cheese',
      ctaLink: '/products?category=cheese',
      secondaryText: 'Request Restaurant Quote',
      secondaryAction: 'inquiry',
      accentGlow: 'rgba(216, 180, 254, 0.4)'
    },
    // Slide 4: FSDI & Women Empowerment (Lush Emerald)
    {
      theme: 'from-[#064E3B] via-[#047857] to-[#059669]',
      badgeColor: 'bg-gold text-emerald-950',
      badgeText: 'DAM, Ministry of Agriculture & World Bank Assisted',
      title: 'EMPOWERING 35,000+',
      highlight: 'WOMEN & YOUTHS',
      subtitle: 'Fowzia Skill Development Institute (FSDI)',
      desc: 'Practical entrepreneurship education, hands-on food processing techniques, and sustainable agro-business mentoring since 2023.',
      productImage: '/images/fsdi-women-entrepreneurs-training-1.jpg',
      subProductImage: '/images/world-bank-best-entrepreneur-trophy.jpg',
      taglineBadge: '~35,000 Training Beneficiaries',
      warrantyBadge: 'Women-Led Pioneer',
      ctaText: 'Discover FSDI Institute',
      ctaLink: '/fsdi',
      secondaryText: 'Download Full Profile PDF',
      secondaryAction: 'pdf',
      accentGlow: 'rgba(52, 211, 153, 0.4)'
    }
  ];

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="bg-slate-100 py-4 sm:py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Slider + Right 2 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          
          {/* =========================================
              LEFT COLUMN: DYNAMIC SLIDING BANNER (8 Cols)
             ========================================= */}
          <div 
            className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.theme} transition-all duration-700`} />
            
            {/* Ambient Decorative Lighting */}
            <div 
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40"
              style={{ backgroundColor: slide.accentGlow }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Slider Content */}
            <div className="relative z-10 p-6 sm:p-10 flex-1 flex flex-col justify-between">
              
              {/* Top Row: Category Tag & Trust Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${slide.badgeColor}`}>
                  {slide.badgeText}
                </span>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>ISO 22000:2018 Certified</span>
                  </div>
                </div>
              </div>

              {/* Center Content: Split Text & Product Composition */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6">
                
                {/* Left Text */}
                <div className="md:col-span-7 space-y-4 text-white text-left">
                  <div className="space-y-1">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] drop-shadow-md">
                      {slide.title} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-white">
                        {slide.highlight}
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-amber-200 font-semibold tracking-wide">
                      {slide.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-md line-clamp-3">
                    {slide.desc}
                  </p>

                  {/* Highlight Callout Pill */}
                  <div className="inline-flex items-center gap-3 bg-black/35 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-white/15 shadow-lg">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-burgundy-dark font-black text-xs">
                      ★ VERIFIED
                    </div>
                    <div className="text-left pr-2">
                      <div className="text-[10px] text-white/70 uppercase font-semibold">Quality Guarantee</div>
                      <div className="text-xs font-bold text-white">{slide.taglineBadge}</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to={slide.ctaLink}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-gold via-amber-400 to-yellow-400 hover:from-yellow-300 hover:to-gold text-burgundy-dark font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-gold-glow hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {slide.secondaryAction === 'pdf' ? (
                      <button
                        onClick={onOpenPDF}
                        className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
                      >
                        <FileText className="w-3.5 h-3.5 text-gold-light" />
                        <span>Company Profile (PDF)</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenInquiry(slide.highlight)}
                        className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-gold-light" />
                        <span>{slide.secondaryText}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Product Composition */}
                <div className="md:col-span-5 relative flex items-center justify-center">
                  <div className="relative w-full max-w-[280px] aspect-square rounded-3xl p-3 bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl flex items-center justify-center group">
                    <img
                      src={slide.productImage}
                      alt={slide.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />

                    {/* Secondary Overlapping Thumbnail */}
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-white p-1.5 shadow-2xl border-2 border-gold/50 overflow-hidden hidden sm:block">
                      <img
                        src={slide.subProductImage}
                        alt="Sub Product"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>

                    {/* Floating Trust Badge */}
                    <div className="absolute -top-3 -right-3 bg-gold text-burgundy-dark font-black text-[10px] uppercase px-3 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                      <Award className="w-3 h-3 text-burgundy-dark" />
                      <span>{slide.warrantyBadge}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Slider Indicators & Institutional Partners Strip */}
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Dots Pagination */}
                <div className="flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx 
                          ? 'w-8 bg-gold shadow-md' 
                          : 'w-2.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Institutional Partner Logos Text */}
                <div className="text-[11px] text-white/80 font-medium hidden md:flex items-center gap-2">
                  <span className="text-amber-300 font-bold">Partners:</span>
                  <span>World Bank</span>
                  <span>•</span>
                  <span>DAM</span>
                  <span>•</span>
                  <span>BAU Gazipur</span>
                  <span>•</span>
                  <span>Solidaridad</span>
                </div>

              </div>

            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: 2 STACKED PROMO CARDS (4 Cols)
              (Exactly as requested in user reference image!)
             ========================================= */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 justify-between">
            
            {/* -------------------------------------
                TOP CARD: SAPPHIRE BLUE DAIRY CARD
                (Inspired by Hisense card in reference)
               ------------------------------------- */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl p-5 sm:p-6 bg-gradient-to-br from-[#0F2B5C] via-[#1E40AF] to-[#2563EB] text-white flex flex-col justify-between min-h-[240px] border border-blue-400/30 group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between relative z-10">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">
                    FOWZIA DAIRY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Fowzia Special Borhani
                  </h3>
                  <p className="text-xs text-blue-100 font-medium">
                    Smart Digestive Probiotic Beverage
                  </p>
                </div>

                {/* Top Stamp Badge */}
                <div className="w-12 h-12 rounded-full bg-gold text-burgundy-dark font-black text-[9px] flex flex-col items-center justify-center uppercase text-center border-2 border-white shadow-md leading-tight shrink-0">
                  <span>100%</span>
                  <span>PURE</span>
                </div>
              </div>

              {/* Middle: Cutout Image & Highlights */}
              <div className="grid grid-cols-12 gap-3 items-center my-3 relative z-10">
                <div className="col-span-7 space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-black/40 border border-cyan-400/30 text-xs">
                    <span className="text-cyan-300 font-bold">Feast Sizes:</span>
                    <div className="font-extrabold text-white text-sm">1.5L / 750ml / 250ml</div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[11px] text-blue-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Cultured Probiotic Enzymes</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-blue-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Pure Full Cream Milk Base</span>
                  </div>
                </div>

                <div className="col-span-5 flex items-center justify-center">
                  <div className="w-24 h-28 rounded-2xl bg-white/10 p-2 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/fowzia-borhani-yogurt-drinks.jpg"
                      alt="Fowzia Borhani Drink"
                      className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 border-t border-white/15 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-semibold text-cyan-200">
                  Wholesale & Party Catering
                </span>
                <button
                  onClick={() => onOpenInquiry('Fowzia Special Borhani')}
                  className="px-4 py-1.5 rounded-full bg-white text-blue-900 hover:bg-cyan-300 font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* -------------------------------------
                BOTTOM CARD: ROYAL PURPLE SOY CARD
                (Inspired by Haier card in reference)
               ------------------------------------- */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl p-5 sm:p-6 bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#9333EA] text-white flex flex-col justify-between min-h-[240px] border border-purple-400/30 group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-pink-400/20 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between relative z-10">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                    FOWZIA SOY PROTEIN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Fowzia Fresh Tofu
                  </h3>
                  <p className="text-xs text-purple-100 font-medium">
                    200g Home-Style Pure Plant Protein
                  </p>
                </div>

                {/* Top Badge */}
                <div className="px-2.5 py-1 rounded-full bg-emerald-400 text-purple-950 font-black text-[10px] uppercase shadow-md shrink-0">
                  ISO 22000
                </div>
              </div>

              {/* Middle: Cutout Image & Highlights */}
              <div className="grid grid-cols-12 gap-3 items-center my-3 relative z-10">
                <div className="col-span-7 space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-black/40 border border-purple-400/30 text-xs">
                    <span className="text-amber-300 font-bold">Protein Power:</span>
                    <div className="font-extrabold text-white text-sm">Zero Cholesterol • High Fiber</div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-purple-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>Home-Style Ready to Cook</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-purple-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>Direct Marginal Farmer Sourced</span>
                  </div>
                </div>

                <div className="col-span-5 flex items-center justify-center">
                  <div className="w-24 h-28 rounded-2xl bg-white/10 p-2 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/fowzia-tofu-box.jpg"
                      alt="Fowzia Tofu"
                      className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2 border-t border-white/15 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-semibold text-purple-200">
                  Retail & Supermarket Supply
                </span>
                <Link
                  to="/products/fowzia-tofu-200g"
                  className="px-4 py-1.5 rounded-full bg-gold text-purple-950 hover:bg-amber-300 font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  View Details
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
