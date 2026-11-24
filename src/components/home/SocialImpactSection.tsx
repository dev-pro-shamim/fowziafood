import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Sparkles, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SocialImpactSection: React.FC = () => {
  const impacts = [
    {
      title: "Women's Empowerment",
      desc: "Training women in food processing and business management to foster financial independence."
    },
    {
      title: "Youth Development",
      desc: "Imparting modern agro-business skills to unemployed and aspiring youths through FSDI."
    },
    {
      title: "Local Farmer Support",
      desc: "Sourcing soybeans and raw milk directly from marginal farmers, ensuring fair market prices."
    },
    {
      title: "Nutrition Awareness",
      desc: "Promoting healthy, plant-based protein consumption to combat widespread malnutrition."
    },
    {
      title: "Employment Generation",
      desc: "Creating sustainable jobs across production, packaging, quality control, and distribution."
    },
    {
      title: "Entrepreneurship Mentoring",
      desc: "Guiding micro-entrepreneurs to launch and scale their own food production and retail units."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] relative overflow-hidden border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Narrative Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Community & Social Impact
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight text-balance-header">
                Empowering Communities Through{' '}
                <span className="text-[#9E1B32]">
                  Nutritious Food
                </span>{' '}
                and Entrepreneurship
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Fowzia Healthy Food Products, commercial success is inextricably linked with community well-being. By collaborating with the Department of Agricultural Marketing (DAM) and the World Bank under SACP-RAINS and PARTNER-APCU-DAM projects, we have transformed ideas into sustainable livelihoods for ~35,000 women and youth across Bangladesh.
            </p>

            {/* Impact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {impacts.map((imp, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white border border-orange-200/90 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-black text-xs text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{imp.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-6 font-normal">
                    {imp.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/fsdi"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] hover:from-[#7A0C22] hover:to-[#9E1B32] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Learn More About FSDI Institute</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Visual Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Photo: High-Res Camera Photo of Training Session */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
                <img
                  src="/images/hd/pic_01.jpg"
                  alt="FSDI Women Entrepreneurs Training"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                />
                <div className="p-4 bg-white border-t border-orange-200 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#9E1B32]">FSDI Training Class</span>
                    <span className="text-amber-700 font-bold">DAM & World Bank Assisted</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 font-normal">
                    Hands-on practical skills development and business mentoring for women entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Stat Overlay Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-4 rounded-2xl shadow-lg border-2 border-white text-left">
                <div className="text-2xl font-black leading-none">~35,000</div>
                <div className="text-[10px] font-bold uppercase tracking-wider mt-1">Beneficiaries Trained</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
