import React from 'react';
import { Calendar, Users, Layers, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6 text-[#9E1B32]" />,
      number: "2014",
      label: "Established Year",
      description: "Founded by Mrs. Afroza Sultana in Dhaka",
      badge: "10+ Years",
      iconBg: "bg-orange-100"
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-700" />,
      number: "~35,000",
      label: "Training Beneficiaries",
      description: "Youth & women trained via FSDI in entrepreneurship",
      badge: "Social Impact",
      iconBg: "bg-emerald-100"
    },
    {
      icon: <Layers className="w-6 h-6 text-amber-700" />,
      number: "3",
      label: "Business Initiatives",
      description: "Fowzia Food, Fowzia Nom's & FSDI Institute",
      badge: "Integrated Model",
      iconBg: "bg-amber-100"
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#9E1B32]" />,
      number: "19",
      label: "Catalog Products",
      description: "Certified soy, dairy drinks, clay pot curd & spices",
      badge: "ISO 22000:2018",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border-2 border-orange-200/90 hover:border-amber-400 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl ${item.iconBg} shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-50 text-amber-950 border border-orange-200 shadow-2xs">
                  {item.badge}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {item.number}
                </div>
                <div className="text-sm font-extrabold text-slate-800 mt-0.5">
                  {item.label}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
