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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-gold-dark" />
                Community & Social Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight leading-tight">
                Empowering Communities Through <span className="text-burgundy">Nutritious Food</span> and Entrepreneurship
              </h2>
            </div>

            <p className="text-sm sm:text-base text-mutedText leading-relaxed">
              At Fowzia Healthy Food Products, business success is intrinsically tied to community well-being. By partnering with the Department of Agricultural Marketing (DAM) and the World Bank under SACP-RAINS and PARTNER-APCU-DAM projects, we have transformed ideas into sustainable livelihoods for thousands of women and youth across Bangladesh.
            </p>

            {/* Impact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {impacts.map((imp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-cream/60 border border-gold/20 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs text-darkText">
                    <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0" />
                    <span>{imp.title}</span>
                  </div>
                  <p className="text-[11px] text-mutedText leading-relaxed pl-6">
                    {imp.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/fsdi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Learn More About FSDI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Visual Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Photo: Women in Training */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream">
                <img
                  src="/images/fsdi-women-entrepreneurs-training-1.jpg"
                  alt="FSDI Women Entrepreneurs Training"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 bg-white border-t border-gold/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-burgundy">FSDI Training Class</span>
                    <span className="text-gold-dark font-semibold">DAM & World Bank Assisted</span>
                  </div>
                  <p className="text-[11px] text-mutedText mt-1">
                    Hands-on skills development and business mentoring for women entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Stat Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gold-dark to-gold text-burgundy-dark p-4 rounded-2xl shadow-xl border-2 border-white">
                <div className="text-2xl font-black">~35,000</div>
                <div className="text-[10px] font-bold uppercase tracking-wider">Beneficiaries Trained</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
