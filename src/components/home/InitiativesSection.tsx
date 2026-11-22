import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Store, GraduationCap } from 'lucide-react';
import { INITIATIVES } from '../../data/companyData';

export const InitiativesSection: React.FC = () => {
  const icons = [
    <Factory className="w-5 h-5 text-amber-300" />,
    <Store className="w-5 h-5 text-cyan-300" />,
    <GraduationCap className="w-5 h-5 text-emerald-300" />
  ];

  const cardStyles = [
    {
      gradient: 'from-[#7A0C22] via-[#9E1B32] to-[#B91C1C]',
      border: 'border-rose-300/30',
      badge: 'bg-amber-400 text-burgundy-dark',
      btnHover: 'hover:bg-burgundy',
      glow: 'rgba(158, 27, 50, 0.25)'
    },
    {
      gradient: 'from-[#0F2B5C] via-[#1E40AF] to-[#2563EB]',
      border: 'border-blue-300/30',
      badge: 'bg-cyan-400 text-slate-900',
      btnHover: 'hover:bg-blue-700',
      glow: 'rgba(37, 99, 235, 0.25)'
    },
    {
      gradient: 'from-[#064E3B] via-[#059669] to-[#10B981]',
      border: 'border-emerald-300/30',
      badge: 'bg-yellow-300 text-emerald-950',
      btnHover: 'hover:bg-emerald-700',
      glow: 'rgba(5, 150, 105, 0.25)'
    }
  ];

  return (
    <section className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            Integrated Agro Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Three Strategic <span className="text-burgundy">Business Initiatives</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From certified food manufacturing and nationwide market distribution to grassroots skill building for 35,000+ youth and women.
          </p>
        </div>

        {/* 3 Strategic Distinct Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INITIATIVES.map((init, idx) => {
            const style = cardStyles[idx];
            return (
              <div
                key={init.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Image Banner with Vibrant Gradient Overlay */}
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
                  <div className="absolute bottom-4 left-4 right-4 text-white">
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
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {init.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                        Strategic Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {init.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={init.link}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 group-hover:bg-burgundy text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
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
