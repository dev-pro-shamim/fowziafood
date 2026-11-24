import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  Download, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  HeartHandshake,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeroSectionProps {
  onOpenPDF: () => void;
  onOpenInquiry: (productName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPDF, onOpenInquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 Corporate Showcases using High-Resolution Original Camera Photos (NO Blurry PDF Crops!)
  const corporateSlides = [
    {
      badge: 'Agro-Processing & Soy Innovation',
      category: 'Pure Soy Food Range',
      title: 'High-Protein Soy Nutrition',
      subtitle: 'Tofu, Soy Protein Balls, Soy Paratha & Ruti',
      description: 'Manufactured with high-protein non-GMO soybeans under ISO 22000:2018 hygienic standards. 100% plant-based, zero cholesterol, and rich in natural isoflavones.',
      image: '/images/hd/pic_02.jpg', // Genuine 2000x2000 High-Res Camera Photo
      subImage: '/images/hd/pic_03.jpg',
      tagline: '100% Plant-Based Protein',
      metric: 'Rich in Protein & Calcium',
      link: '/products?category=soy',
      cardTheme: 'from-orange-50 via-white to-amber-50',
      pillBg: 'bg-orange-100 text-amber-900 border-orange-200'
    },
    {
      badge: 'Farm-Fresh Dairy & Digestive Drinks',
      category: 'Probiotic Dairy Range',
      title: 'Fowzia Special Borhani & Curds',
      subtitle: 'Pure Cow Milk, Matha & Cultured Curds',
      description: 'Prepared from pure cow milk and enriched with natural digestive herbs, mint, and mustard seeds. Available in 1.5L party feasts, 750ml, and 250ml bottles.',
      image: '/images/hd/pic_07.jpg', // Genuine High-Res Camera Photo (766 KB)
      subImage: '/images/hd/pic_05.jpg',
      tagline: 'Authentic Traditional Recipe',
      metric: 'Live Probiotic Cultures',
      link: '/products?category=dairy-drinks',
      cardTheme: 'from-amber-50 via-white to-orange-50',
      pillBg: 'bg-amber-100 text-amber-900 border-amber-200'
    },
    {
      badge: 'Artisanal Dairy & Frozen Foods',
      category: 'Cheese & Frozen Snacks',
      title: 'Fowzia Mozzarella & Fries',
      subtitle: '250g Stretchy Cheese & 1kg French Fries',
      description: 'Chef-grade mozzarella cheese crafted with 100% pure cow milk for optimal stretch, paired with golden crispy french fries ready in minutes.',
      image: '/images/hd/pic_11.jpg', // Genuine High-Res Camera Photo
      subImage: '/images/hd/pic_14.jpg',
      tagline: '100% Pure Cow Milk Mozzarella',
      metric: 'Chef-Grade Stretch & Taste',
      link: '/products?category=cheese',
      cardTheme: 'from-orange-50 via-white to-amber-50',
      pillBg: 'bg-orange-100 text-amber-900 border-orange-200'
    },
    {
      badge: 'Executive Leadership & Empowerment',
      category: 'FSDI Training Institute',
      title: 'Empowering ~35,000 Beneficiaries',
      subtitle: 'Led by World Bank Awardee Mrs. Afroza Sultana',
      description: 'Practical agribusiness training, food safety certification, and women entrepreneurship development supported by DAM, BAU Gazipur, and the World Bank.',
      image: '/images/leadership/afroza-sultana-proprietor.jpg', // High-Res Authority Photo
      subImage: '/images/leadership/forman-ali-bhuiyan-ceo.jpg',
      tagline: 'World Bank & LDDP Supported',
      metric: '~35,000 Women & Youth Trained',
      link: '/fsdi',
      cardTheme: 'from-amber-50 via-white to-orange-50',
      pillBg: 'bg-amber-100 text-amber-900 border-amber-200'
    }
  ];

  // Auto-play timer (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % corporateSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, corporateSlides.length]);

  const activeSlide = corporateSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F3] to-[#FFF1E6] border-b border-orange-100 py-8 sm:py-12 lg:py-16">
      
      {/* Soft Ambient Light Glows (White & Warm Orange Theme) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Company Profile Headline + Right Interactive Clean Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================
              LEFT COLUMN: CLEAN CORPORATE PROFILE HERO
             ========================================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Credibility Badge (No Break) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-300 text-amber-950 text-xs sm:text-[13px] font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="whitespace-nowrap">Est. 2014</span>
              <span className="text-amber-400">•</span>
              <span className="whitespace-nowrap">Women-Led Enterprise</span>
              <span className="text-amber-400">•</span>
              <span className="text-[#9E1B32] font-extrabold whitespace-nowrap">ISO 22000:2018</span>
            </div>

            {/* Main Primary Headline (Clean, Poppins, Perfectly Balanced, No Broken Header) */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.15] text-balance-header">
                Nutritious Foods for a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E1B32] via-[#B91C1C] to-[#D97706]">
                  Healthier Future
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-bold text-amber-900/90 leading-snug">
                Pioneering Soy & Pure Dairy Agro-Processing in Bangladesh
              </p>
            </div>

            {/* Official Company Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Founded by <span className="font-semibold text-slate-900">Mrs. Afroza Sultana</span> (World Bank Best Women Entrepreneur Awardee) and managed by CEO <span className="font-semibold text-slate-900">Md Forman Ali Bhuiyan</span>, 
              <span className="font-semibold text-slate-900"> Fowzia Healthy Food Products</span> transforms farm-fresh soybeans and pure cow milk into wholesome foods under stringent ISO 22000:2018 hygienic standards.
            </p>

            {/* Credibility Key Facts (Clean Soft-White Responsive Grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-1">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-orange-200/80 shadow-xs">
                <div className="text-[#9E1B32] font-black text-lg sm:text-xl leading-none">2014</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Established Year</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-orange-200/80 shadow-xs">
                <div className="text-amber-600 font-black text-lg sm:text-xl leading-none">~35k</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Trained in FSDI</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-orange-200/80 shadow-xs">
                <div className="text-emerald-700 font-black text-lg sm:text-xl leading-none">ISO 22000</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Food Safety Standard</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-orange-200/80 shadow-xs">
                <div className="text-[#9E1B32] font-black text-lg sm:text-xl leading-none">19 Items</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Certified Products</div>
              </div>
            </div>

            {/* Action CTA Buttons (Clean, Responsive, No Broken Text) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Primary Products CTA */}
              <Link
                to="/products"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] hover:from-[#7A0C22] hover:to-[#9E1B32] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 group whitespace-nowrap"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Company Profile PDF Interactive Viewer */}
              <button
                onClick={onOpenPDF}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white hover:bg-orange-50/80 text-amber-950 font-bold text-xs sm:text-sm border border-orange-300 hover:border-orange-400 shadow-xs transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Company Profile (PDF)</span>
              </button>

              {/* Direct PDF Download */}
              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia_Food_Company_Profile.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-slate-600 hover:text-[#9E1B32] text-xs font-semibold hover:bg-white/60 transition-colors whitespace-nowrap"
                title="Direct Download PDF (952 KB)"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

            </div>

            {/* Institutional Supervision & Partners Strip */}
            <div className="pt-4 border-t border-orange-200/60 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600">
              <span className="font-bold text-amber-900 whitespace-nowrap">Technical & Institutional Partners:</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold text-slate-700">
                <span className="hover:text-[#9E1B32] transition-colors whitespace-nowrap">World Bank</span>
                <span className="text-orange-300">•</span>
                <span className="hover:text-[#9E1B32] transition-colors whitespace-nowrap">DAM</span>
                <span className="text-orange-300">•</span>
                <span className="hover:text-[#9E1B32] transition-colors whitespace-nowrap">BAU Gazipur</span>
                <span className="text-orange-300">•</span>
                <span className="hover:text-[#9E1B32] transition-colors whitespace-nowrap">Solidaridad</span>
                <span className="text-orange-300">•</span>
                <span className="hover:text-[#9E1B32] transition-colors whitespace-nowrap">LDDP</span>
              </div>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: CLEAN CORPORATE SHOWCASE SLIDER
              (Using Crisp High-Resolution Camera Photos)
             ========================================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Showcase Card */}
            <div 
              className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${activeSlide.cardTheme} border-2 border-orange-200/90 shadow-xl transition-all duration-500`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Top Tag & Indicator */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide border shadow-2xs whitespace-nowrap ${activeSlide.pillBg}`}>
                  {activeSlide.badge}
                </span>

                <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full border border-orange-200 text-[11px] font-bold text-amber-900">
                  <span>{currentSlide + 1}</span>
                  <span className="text-slate-400">/</span>
                  <span>{corporateSlides.length}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1 mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {activeSlide.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#9E1B32]">
                  {activeSlide.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1 line-clamp-2">
                  {activeSlide.description}
                </p>
              </div>

              {/* Visual Presentation Area: High-Res Camera Photo */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden border border-orange-100 shadow-md my-4 group">
                
                {/* Main High-Resolution Photo */}
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover object-center filter group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                />

                {/* Secondary Inset Thumbnail */}
                <div className="absolute bottom-2 right-2 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white border-2 border-amber-400 shadow-lg hidden sm:block">
                  <img
                    src={activeSlide.subImage}
                    alt="Secondary item"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Credibility Pill */}
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-orange-200 text-[10px] font-extrabold text-amber-950 flex items-center gap-1 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="whitespace-nowrap">{activeSlide.metric}</span>
                </div>

              </div>

              {/* Slide Controls & Link Action */}
              <div className="pt-2 flex items-center justify-between gap-3">
                
                {/* Dots Pagination */}
                <div className="flex items-center gap-1.5">
                  {corporateSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx 
                          ? 'w-7 bg-[#9E1B32]' 
                          : 'w-2 bg-orange-300 hover:bg-orange-400'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Prev/Next Arrows */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + corporateSlides.length) % corporateSlides.length)}
                    className="p-2 rounded-full bg-white hover:bg-orange-100 text-slate-700 border border-orange-200 shadow-xs transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % corporateSlides.length)}
                    className="p-2 rounded-full bg-white hover:bg-orange-100 text-slate-700 border border-orange-200 shadow-xs transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <Link
                    to={activeSlide.link}
                    className="ml-2 inline-flex items-center gap-1 px-3 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>

            {/* Floating World Bank Credibility Card (Bottom Accent) */}
            <div className="mt-3 bg-white p-3.5 rounded-2xl border border-orange-200 shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9E1B32] to-[#F59E0B] p-0.5 shrink-0 flex items-center justify-center text-white shadow-xs">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    World Bank Best Women Entrepreneur Award
                  </div>
                  <div className="text-[11px] text-amber-900/80 font-semibold">
                    Conferred February 2020 • Mrs. Afroza Sultana
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenPDF}
                className="text-[11px] font-bold text-[#9E1B32] hover:underline whitespace-nowrap shrink-0"
              >
                Read in PDF →
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
