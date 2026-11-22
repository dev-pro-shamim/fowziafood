import React from 'react';
import { Calendar, Users, Layers, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8 text-gold" />,
      number: "2014",
      label: "Established",
      description: "Founded by Mrs. Afroza Sultana in Dhaka",
      badge: "10+ Years"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      number: "~35,000",
      label: "Training Beneficiaries",
      description: "Youth & women trained via FSDI in entrepreneurship",
      badge: "Social Impact"
    },
    {
      icon: <Layers className="w-8 h-8 text-gold" />,
      number: "3",
      label: "Business Initiatives",
      description: "Fowzia Food, Fowzia Nom's & FSDI Institute",
      badge: "Integrated Model"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-gold" />,
      number: "19",
      label: "Product Portfolio",
      description: "Healthy soy-based foods, dairy drinks, desserts & spices",
      badge: "ISO Certified"
    }
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-hover border border-burgundy/10 hover:border-gold/50 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy opacity-80" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cream text-burgundy group-hover:scale-110 transition-transform duration-300 border border-gold/30">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-burgundy/5 text-burgundy border border-burgundy/10">
                  {item.badge}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-burgundy-dark tracking-tight">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-darkText mt-0.5">
                  {item.label}
                </div>
              </div>

              <p className="text-xs text-mutedText leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
