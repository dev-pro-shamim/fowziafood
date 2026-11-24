import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Store, GraduationCap, Sparkles } from 'lucide-react';
import { INITIATIVES } from '../../data/companyData';

export const InitiativesSection: React.FC = () => {
  const icons = [
    <Factory className="w-5 h-5 text-amber-300" />,
    <Store className="w-5 h-5 text-amber-300" />,
    <GraduationCap className="w-5 h-5 text-amber-300" />
  ];

  const cardStyles = [
    {
      gradient: 'from-[#7A0C22] via-[#9E1B32] to-[#B91C1C]',
      border: 'border-orange-200',
      badge: 'bg-amber-400 text-slate-950',
      btnHover: 'hover:bg-[#7A0C22]'
    },
    {
      gradient: 'from-[#C2410C] via-[#EA580C] to-[#F97316]',
      border: 'border-orange-200',
      badge: 'bg-white text-orange-950',
      btnHover: 'hover:bg-[#C2410C]'
    },
    {
      gradient: 'from-[#064E3B] via-[#059669] to-[#10B981]',
      border: 'border-orange-200',
      badge: 'bg-amber-300 text-slate-950',
      btnHover: 'hover:bg-[#064E3B]'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] relative border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            Integrated Agro Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
            Our Three Strategic{' '}
            <span className="text-[#9E1B32]">
              Business Initiatives
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From certified food manufacturing and nationwide market distribution to grassroots skill building for ~35,000 youth and women.
          </p>
        </div>

        {/* 3 Strategic Distinct Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INITIATIVES.map((init, idx) => {
            const style = cardStyles[idx];
            return (
              <div
                key={init.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border-2 border-orange-200/90 hover:border-amber-400 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Image Banner with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={init.image}
                    alt={init.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-85 group-hover:opacity-80 transition-opacity`} />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${style.badge}`}>
                      {init.badge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-black/40 text-white backdrop-blur-md border border-white/20">
                        {icons[idx]}
                      </div>
                      <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                        {init.tagline}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">
                      {init.name}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {init.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-orange-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                        Strategic Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {init.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-orange-100">
                    <Link
                      to={init.link}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-100 hover:bg-[#9E1B32] text-amber-950 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xs"
                    >
                      <span>Explore Initiative</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
