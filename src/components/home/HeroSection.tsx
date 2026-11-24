import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  FileText, 
  Download, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
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

  // 4 Corporate Showcases using ONLY Genuine Product, Factory & Training Photos (NO Authority Portraits in Hero)
  const corporateSlides = [
    {
      badge: 'Agro-Processing & Soy Innovation',
      title: 'High-Protein Soy Food Innovation',
      subtitle: 'Tofu, Soy Protein Balls, Soy Paratha & Whole Soybeans',
      description: 'Manufactured with high-protein non-GMO soybeans under ISO 22000:2018 hygienic standards. 100% plant-based, zero cholesterol, and rich in natural minerals.',
      image: '/images/hd/pic_02.jpg', // Genuine High-Res Camera Photo of Products
      subImage: '/images/hd/pic_03.jpg',
      metric: '100% Plant-Based Protein',
      link: '/products?category=soy',
      cardTheme: 'from-orange-50 via-white to-amber-50',
      pillBg: 'bg-orange-100 text-amber-950 border-orange-200'
    },
    {
      badge: 'Farm-Fresh Dairy & Digestive Beverages',
      title: 'Fowzia Special Borhani & Cultured Curds',
      subtitle: 'Pure Cow Milk, Matha & Traditional Earthen Pot Curd',
      description: 'Crafted from fresh cow milk and blended with natural digestive herbs, mint, and mustard seeds. Available in 1.5L party feasts, 750ml, and 250ml bottles.',
      image: '/images/hd/pic_07.jpg', // Genuine High-Res Camera Photo of Borhani & Dairy
      subImage: '/images/hd/pic_05.jpg',
      metric: 'Live Probiotic Cultures',
      link: '/products?category=dairy-drinks',
      cardTheme: 'from-amber-50 via-white to-orange-50',
      pillBg: 'bg-amber-100 text-amber-950 border-amber-200'
    },
    {
      badge: 'Artisanal Cheese & Frozen Quick Foods',
      title: 'Fowzia Mozzarella Cheese & French Fries',
      subtitle: '250g Stretchy Pizza Cheese & 1kg Golden French Fries',
      description: 'Chef-grade mozzarella cheese crafted with 100% pure cow milk for optimal stretch, paired with premium golden crispy french fries ready in minutes.',
      image: '/images/hd/pic_11.jpg', // Genuine High-Res Camera Photo
      subImage: '/images/hd/pic_14.jpg',
      metric: 'Pure Cow Milk Mozzarella',
      link: '/products?category=cheese',
      cardTheme: 'from-orange-50 via-white to-amber-50',
      pillBg: 'bg-orange-100 text-amber-950 border-orange-200'
    },
    {
      badge: 'Capacity Building & Agribusiness Training',
      title: 'FSDI Agribusiness Skill Development',
      subtitle: 'Empowering Over 35,000 Women and Youth in Food Processing',
      description: 'Hands-on practical training in hygienic food processing, packaging, and entrepreneurship supported by DAM, BAU Gazipur, and the World Bank.',
      image: '/images/hd/pic_01.jpg', // Authentic High-Res Classroom Training Session (NO Authority Portraits)
      subImage: '/images/hd/pic_04.jpg',
      metric: '~35,000 Beneficiaries Trained',
      link: '/fsdi',
      cardTheme: 'from-amber-50 via-white to-orange-50',
      pillBg: 'bg-amber-100 text-amber-950 border-amber-200'
    }
  ];

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % corporateSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, corporateSlides.length]);

  const activeSlide = corporateSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F3] to-[#FFF1E6] border-b border-orange-100 py-10 sm:py-14 lg:py-18">
      
      {/* Soft Ambient Light Glows (White & Warm Orange Theme) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Company Profile Headline + Right Interactive Clean Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================
              LEFT COLUMN: CLEAN CORPORATE PROFILE HERO
             ========================================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Credibility Badge (Realistic, No Emojis, Larger Text) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-300 text-amber-950 text-xs sm:text-sm font-bold shadow-2xs">
              <span className="whitespace-nowrap">Established {COMPANY_INFO.established}</span>
              <span className="text-amber-400">•</span>
              <span className="whitespace-nowrap">Women-Led Enterprise</span>
              <span className="text-amber-400">•</span>
              <span className="text-[#9E1B32] font-extrabold whitespace-nowrap">ISO 22000:2018 Certified</span>
            </div>

            {/* Main Primary Headline (Increased Font Size for Impact & Readability) */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.12] text-balance-header">
                Nutritious Foods for a{' '}
                <span className="text-[#9E1B32]">
                  Healthier Future
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 leading-snug">
                Pioneering Soy & Pure Dairy Agro-Processing in Bangladesh
              </p>
            </div>

            {/* Official Company Description (Increased font size: text-base / 16px) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Founded by <strong className="font-semibold text-slate-900">Mrs. Afroza Sultana</strong> (World Bank Best Women Entrepreneur Awardee) and managed by CEO <strong className="font-semibold text-slate-900">Md Forman Ali Bhuiyan</strong>, 
              <strong className="font-semibold text-slate-900"> Fowzia Healthy Food Products</strong> delivers nutritious, hygienic, and affordable 
              soy and pure dairy foods while supporting marginal farmers and local communities.
            </p>

            {/* Credibility Key Facts (Clean Soft-White Responsive Grid with Larger Numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              <div className="bg-white p-3.5 rounded-2xl border border-orange-200 shadow-2xs">
                <div className="text-[#9E1B32] font-black text-xl sm:text-2xl leading-none">2014</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Established Year</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-orange-200 shadow-2xs">
                <div className="text-amber-700 font-black text-xl sm:text-2xl leading-none">~35,000</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Trained in FSDI</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-orange-200 shadow-2xs">
                <div className="text-emerald-700 font-black text-xl sm:text-2xl leading-none">ISO 22000</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Food Safety Standard</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-orange-200 shadow-2xs">
                <div className="text-[#9E1B32] font-black text-xl sm:text-2xl leading-none">19 Items</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Certified Products</div>
              </div>
            </div>

            {/* Action CTA Buttons (Realistic, Bold, High Contrast) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Primary Products CTA */}
              <Link
                to="/products"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9E1B32] hover:bg-[#7A0C22] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 group whitespace-nowrap"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Company Profile PDF Interactive Viewer */}
              <button
                onClick={onOpenPDF}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-slate-900 font-bold text-sm border border-orange-300 hover:border-orange-400 shadow-2xs transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Company Profile (PDF)</span>
              </button>

              {/* Direct PDF Download */}
              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia_Food_Company_Profile.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-slate-700 hover:text-[#9E1B32] text-sm font-semibold hover:bg-white/60 transition-colors whitespace-nowrap"
                title="Direct Download PDF (952 KB)"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

            </div>

            {/* Institutional Supervision & Partners Strip */}
            <div className="pt-4 border-t border-orange-200/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-amber-950 whitespace-nowrap">Technical & Institutional Partners:</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold text-slate-800">
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
              (Using Product, Processing & Training Photos ONLY)
             ========================================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Showcase Card */}
            <div 
              className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${activeSlide.cardTheme} border-2 border-orange-200/90 shadow-lg transition-all duration-500 text-left`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Top Tag & Indicator */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border whitespace-nowrap ${activeSlide.pillBg}`}>
                  {activeSlide.badge}
                </span>

                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full border border-orange-200 text-xs font-bold text-amber-950">
                  <span>{currentSlide + 1}</span>
                  <span className="text-slate-400">/</span>
                  <span>{corporateSlides.length}</span>
                </div>
              </div>

              {/* Title & Subtitle (Larger, Readable) */}
              <div className="space-y-1.5 mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {activeSlide.title}
                </h3>
                <p className="text-sm font-bold text-[#9E1B32]">
                  {activeSlide.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 line-clamp-2 font-normal">
                  {activeSlide.description}
                </p>
              </div>

              {/* Visual Presentation Area: High-Res Camera Photo */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden border border-orange-200 shadow-sm my-4 group">
                
                {/* Main High-Resolution Photo */}
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover object-center filter group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                />

                {/* Secondary Inset Thumbnail */}
                <div className="absolute bottom-2 right-2 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white border-2 border-amber-400 shadow-md hidden sm:block">
                  <img
                    src={activeSlide.subImage}
                    alt="Secondary photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Credibility Pill */}
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-orange-200 text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-2xs">
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
                    className="p-2 rounded-full bg-white hover:bg-orange-100 text-slate-700 border border-orange-200 shadow-2xs transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % corporateSlides.length)}
                    className="p-2 rounded-full bg-white hover:bg-orange-100 text-slate-700 border border-orange-200 shadow-2xs transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <Link
                    to={activeSlide.link}
                    className="ml-2 inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-orange-100 hover:bg-[#9E1B32] text-amber-950 hover:text-white text-xs font-bold transition-colors whitespace-nowrap"
                  >
                    <span>View Range</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
