import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  DollarSign, 
  Users, 
  Award,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-burgundy" />,
      title: "Quality-Focused Production",
      description: "Stringent raw material selection from marginal farmers under the guidance of DAM and Bangladesh Agricultural University, Gazipur.",
      badge: "Pure Sourcing",
      color: "bg-rose-50 text-burgundy"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Hygienic Processing",
      description: "ISO 22000:2018 food safety management system ensures cleanroom standards, hygienic packaging, and food-grade safety.",
      badge: "ISO 22000:2018",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Nutritious Food Products",
      description: "Rich in complete plant protein, dietary fiber, essential vitamins, and calcium for everyday family health and wellness.",
      badge: "Rich Protein",
      color: "bg-amber-50 text-amber-700"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Affordable Pricing",
      description: "A competitive pricing strategy tailored for middle-income consumers, ensuring wholesome nutrition is within reach of every household.",
      badge: "Fair Value",
      color: "bg-blue-50 text-blue-700"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-600" />,
      title: "Women-Led Entrepreneurship",
      description: "Founded and spearheaded by World Bank recognized leader Mrs. Afroza Sultana, championing female business independence.",
      badge: "World Bank Awardee",
      color: "bg-purple-50 text-purple-700"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: "Community Development",
      description: "Over 35,000 youth and women trained through FSDI, fostering local economic self-reliance and sustainable livelihoods.",
      badge: "35k+ Empowered",
      color: "bg-teal-50 text-teal-700"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose <span className="text-burgundy">Fowzia Food?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Our unwavering commitment to hygiene, scientific food processing, fair agricultural sourcing, and social empowerment sets us apart.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-200`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-burgundy transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
