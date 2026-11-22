import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photos Composition (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Belgian Delegation Meeting & Product Display */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
                <img
                  src="/images/belgium-delegation-meeting-afroza.jpg"
                  alt="Belgian Delegation Meeting with Mrs. Afroza Sultana"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-burgundy/90 px-2.5 py-1 rounded-full inline-block mb-1.5 shadow-sm">
                    International Facility Inspection
                  </span>
                  <p className="text-xs font-semibold text-slate-100 leading-snug">
                    Delegation from Belgium evaluating Fowzia Food's hygienic agro-processing and food safety standards
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
                <div className="bg-amber-50 p-2 text-center border-t border-amber-200">
                  <span className="text-[10px] font-bold text-burgundy">Home Style Tofu (Bean Curd)</span>
                </div>
              </div>

              {/* Floating Badge: Founder 2014 */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-burgundy via-burgundy-dark to-slate-950 text-white p-4 rounded-2xl shadow-xl border border-gold/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold text-burgundy-dark font-black flex items-center justify-center text-sm shadow-md">
                  10+
                </div>
                <div>
                  <div className="text-[10px] text-amber-300 uppercase font-bold tracking-wider">Years of Trust</div>
                  <div className="text-xs font-bold text-white">Established 2014</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-burgundy text-xs font-bold uppercase tracking-wider border border-rose-200">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                About Fowzia Healthy Food Products
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Quality Food. Better Nutrition. <span className="text-burgundy">Stronger Communities.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Fowzia Healthy Food Products</strong> is a women-led agro-processing and food manufacturing enterprise specializing in the processing, production, and marketing of dairy and soy-based nutritious foods in Bangladesh.
              </p>
              <p>
                The enterprise was established in <strong>2014 by Mrs. Afroza Sultana</strong> with a heartfelt vision to create nutritious, affordable, and high-quality food products while supporting family livelihood and community development. The inspiration behind the business originated from a personal family challenge: when her husband faced physical health constraints to continue his regular job, Mrs. Afroza took bold entrepreneurial initiative to establish a sustainable business that provides financial stability for her family while creating meaningful employment opportunities for women and youth.
              </p>
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <strong className="text-burgundy font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Supervised Agricultural Value Chain:
                </strong>
                <p className="text-slate-600">
                  Fowzia Food collects raw materials directly from marginal farmers, processing, producing, and marketing under the overall technical supervision of the <strong>Department of Agricultural Marketing (DAM)</strong>, <strong>Bangladesh Agricultural University, Gazipur</strong>, and <strong>Solidaridad Bangladesh</strong>.
                </p>
              </div>
            </div>

            {/* Core Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Women-Led Leadership:</strong> World Bank Awardee Mrs. Afroza Sultana</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ISO 22000:2018:</strong> International standard hygienic processing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Farmer Linkage:</strong> Sourcing pure soybeans and fresh full-cream milk</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Affordable Nutrition:</strong> High-protein foods accessible for all families</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/fsdi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all"
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
