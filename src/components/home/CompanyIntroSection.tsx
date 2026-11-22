import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, ArrowRight, Heart, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photos Composition (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Belgian Delegation Meeting & Product Display */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/belgium-delegation-meeting-afroza.jpg"
                  alt="Belgian Delegation Meeting with Mrs. Afroza Sultana"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light bg-burgundy/80 px-2 py-0.5 rounded">
                    International Quality
                  </span>
                  <p className="text-xs font-semibold text-white/90 mt-1">
                    Belgium delegation reviewing Fowzia Food's operations & food safety standards
                  </p>
                </div>
              </div>

              {/* Secondary Floating Image: Fresh Tofu Presentation */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/fowzia-tofu-box.jpg"
                  alt="Fowzia Tofu Home Style"
                  className="w-full h-36 object-contain p-2"
                />
                <div className="bg-cream p-2 text-center border-t border-gold/20">
                  <span className="text-[10px] font-bold text-burgundy">Home Style Tofu (Bean Curd)</span>
                </div>
              </div>

              {/* Floating Badge: Founder 2014 */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-burgundy to-burgundy-dark text-white p-4 rounded-2xl shadow-xl border border-gold/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold text-burgundy-dark font-extrabold flex items-center justify-center text-sm">
                  10+
                </div>
                <div>
                  <div className="text-[10px] text-gold-light uppercase font-bold">Years of Trust</div>
                  <div className="text-xs font-bold text-white">Established 2014</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold" />
                About Fowzia Healthy Food Products
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-darkText leading-tight">
                Quality Food. Better Nutrition. <span className="text-burgundy">Stronger Communities.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm text-darkText/80 leading-relaxed">
              <p>
                <strong>Fowzia Healthy Food Products</strong> is a women-led agro-processing and food manufacturing enterprise specializing in the processing, production, and marketing of dairy and soy-based nutritious foods in Bangladesh.
              </p>
              <p>
                The enterprise was established in <strong>2014 by Mrs. Afroza Sultana</strong> with a heartfelt vision to create nutritious, affordable, and high-quality food products while supporting family livelihood and community development. The inspiration behind the business originated from a personal family challenge: when her husband faced physical health constraints to continue his regular job, Mrs. Afroza took bold entrepreneurial initiative to establish a sustainable business that provides financial stability for her family while creating meaningful employment opportunities for women and youth.
              </p>
              <p className="bg-white p-4 rounded-xl border border-gold/30 text-xs text-mutedText">
                <strong className="text-burgundy">Supervised Agricultural Value Chain:</strong> Fowzia Food collects raw materials directly from marginal farmers, processing, producing, and marketing under the overall technical supervision of the <strong>Department of Agricultural Marketing (DAM)</strong>, <strong>Bangladesh Agricultural University, Gazipur</strong>, and <strong>Solidaridad Bangladesh</strong>.
              </p>
            </div>

            {/* Core Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-darkText">
                <CheckCircle className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span><strong>Women-Led Leadership:</strong> World Bank Awardee Mrs. Afroza Sultana</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-darkText">
                <CheckCircle className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span><strong>ISO 22000:2018:</strong> International standard hygienic processing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-darkText">
                <CheckCircle className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span><strong>Farmer Linkage:</strong> Sourcing pure soybeans and fresh full-cream milk</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-darkText">
                <CheckCircle className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span><strong>Affordable Nutrition:</strong> High-protein foods accessible for all families</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/fsdi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream hover:bg-cream-dark text-burgundy font-semibold text-xs uppercase tracking-wider border border-burgundy/20 hover:border-burgundy transition-all"
              >
                <span>FSDI Institute (~35k Trained)</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
