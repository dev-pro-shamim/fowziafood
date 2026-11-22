import React from 'react';
import { Calendar, Users, Layers, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Calendar className="w-7 h-7 text-burgundy" />,
      number: "2014",
      label: "Established Year",
      description: "Founded by Mrs. Afroza Sultana in Dhaka",
      badge: "10+ Years",
      borderColor: "border-rose-200",
      bgGradient: "from-rose-50 to-white"
    },
    {
      icon: <Users className="w-7 h-7 text-emerald-600" />,
      number: "~35,000",
      label: "Training Beneficiaries",
      description: "Youth & women trained via FSDI in entrepreneurship",
      badge: "Social Impact",
      borderColor: "border-emerald-200",
      bgGradient: "from-emerald-50 to-white"
    },
    {
      icon: <Layers className="w-7 h-7 text-blue-600" />,
      number: "3",
      label: "Business Initiatives",
      description: "Fowzia Food, Fowzia Nom's & FSDI Institute",
      badge: "Integrated Model",
      borderColor: "border-blue-200",
      bgGradient: "from-blue-50 to-white"
    },
    {
      icon: <ShoppingBag className="w-7 h-7 text-amber-600" />,
      number: "19",
      label: "Catalog Products",
      description: "Healthy soy-based foods, dairy drinks, desserts & spices",
      badge: "ISO 22000:2018",
      borderColor: "border-amber-200",
      bgGradient: "from-amber-50 to-white"
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-b ${item.bgGradient} rounded-2xl p-6 shadow-md hover:shadow-xl border ${item.borderColor} transition-all duration-300 relative group overflow-hidden flex flex-col justify-between`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200">
                  {item.badge}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">
                  {item.label}
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
