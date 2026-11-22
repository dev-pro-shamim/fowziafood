import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#641126] via-[#8B1538] to-[#4A0C1B] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Golden Ambient Gradients & Rings */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-burgundy-dark/60 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle radial pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D6A743_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Award-Winning Agro-Processing & Food Manufacturing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Nutritious Foods for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Healthier Future</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-cream/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Bringing nutritious, affordable, and high-quality soy and dairy-based food products to every household in Bangladesh. Certified by ISO 22000:2018 and recognized by the World Bank.
            </p>

            {/* Key Value Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-cream/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>100% Hygienic Processing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Local Farmer Supervised</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Affordable Daily Protein</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-burgundy-dark font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-gold/40 hover:border-gold backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Discover Our Story</span>
              </Link>
            </div>

            {/* Mini Trust Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-cream/70 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold" />
                <span>World Bank Awardee 2020</span>
              </div>
              <span className="text-gold/40">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>ISO 22000:2018</span>
              </div>
              <span className="text-gold/40">•</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-gold" />
                <span>35k+ Trained</span>
              </div>
            </div>

          </div>

          {/* Right Visual Product Composition Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Composition Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Card */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-gold/30 via-burgundy/40 to-burgundy-dark/60 backdrop-blur-xl border border-gold/40 shadow-2xl">
                
                <div className="relative rounded-2xl overflow-hidden bg-white/10 aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/images/fowzia-soy-protein-ball-pack.jpg"
                    alt="Fowzia Soy Food Products"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating Logo Watermark */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-gold/40">
                    <img src="/images/fowzia-logo.jpg" alt="Logo" className="w-6 h-6 object-contain" />
                    <span className="text-burgundy font-bold text-xs">Fowzia Food</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-gold text-[11px] font-bold uppercase tracking-wider">Premium Soy Series</span>
                    <h3 className="text-white font-bold text-lg leading-tight">High-Protein Home Style Foods</h3>
                  </div>
                </div>

                {/* Subgrid of 2 Genuine Feature Shots */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white/10 border border-white/10 group">
                    <img 
                      src="/images/fowzia-tofu-served-cubes.jpg" 
                      alt="Fowzia Fresh Tofu" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Fresh Tofu Curd</span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white/10 border border-white/10 group">
                    <img 
                      src="/images/fowzia-sweet-sour-curd-pots.jpg" 
                      alt="Fowzia Clay Pot Curd" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Artisanal Sweet Curd</span>
                  </div>
                </div>

              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white text-darkText p-3.5 rounded-2xl shadow-2xl border border-gold/50 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <Award className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-mutedText tracking-wider">World Bank Recognized</div>
                  <div className="text-xs font-bold text-burgundy-dark">Best Women Entrepreneur</div>
                </div>
              </div>

              {/* Floating 19 Products Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-burgundy-dark text-white p-3 rounded-2xl shadow-2xl border border-gold/50 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gold text-burgundy-dark font-black flex items-center justify-center text-base">
                  19+
                </div>
                <div>
                  <div className="text-[10px] text-gold-light uppercase font-bold">Catalog Range</div>
                  <div className="text-xs font-semibold text-white">Pure & Hygienic</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
