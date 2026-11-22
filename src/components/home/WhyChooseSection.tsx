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
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "Quality-Focused Production",
      description: "Stringent raw material selection from marginal farmers under the guidance of DAM and Bangladesh Agricultural University, Gazipur."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Hygienic Processing",
      description: "ISO 22000:2018 food safety management system ensures cleanroom standards, hygienic packaging, and food-grade safety."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Nutritious Food Products",
      description: "Rich in complete plant protein, dietary fiber, essential vitamins, and calcium for everyday family health and wellness."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-gold" />,
      title: "Affordable Pricing",
      description: "A competitive pricing strategy tailored for middle-income consumers, ensuring wholesome nutrition is within reach of every household."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold" />,
      title: "Women-Led Entrepreneurship",
      description: "Founded and spearheaded by World Bank recognized leader Mrs. Afroza Sultana, championing female business independence."
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Community Development",
      description: "Over 35,000 youth and women trained through FSDI, fostering local economic self-reliance and sustainable livelihoods."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Why Choose <span className="text-burgundy">Fowzia Food?</span>
          </h2>
          <p className="text-sm sm:text-base text-mutedText">
            Our unwavering commitment to hygiene, scientific food processing, fair agricultural sourcing, and social empowerment sets us apart.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-cream/50 hover:bg-white border border-gold/20 hover:border-gold shadow-sm hover:shadow-premium transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-darkText group-hover:text-burgundy transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gold/20 flex items-center gap-2 text-xs font-semibold text-burgundy">
                <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
