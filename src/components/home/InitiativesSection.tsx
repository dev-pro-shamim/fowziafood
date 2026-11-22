import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Store, GraduationCap } from 'lucide-react';
import { INITIATIVES } from '../../data/companyData';

export const InitiativesSection: React.FC = () => {
  const icons = [
    <Factory className="w-6 h-6 text-gold" />,
    <Store className="w-6 h-6 text-gold" />,
    <GraduationCap className="w-6 h-6 text-gold" />
  ];

  return (
    <section className="py-20 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider">
            Integrated Agro Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Our Three Strategic <span className="text-burgundy">Business Initiatives</span>
          </h2>
          <p className="text-sm sm:text-base text-mutedText">
            From high-tech food manufacturing and nationwide market distribution to grassroots skill building for 35,000+ youth and women.
          </p>
        </div>

        {/* 3 Strategic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INITIATIVES.map((init, idx) => (
            <div
              key={init.id}
              className="bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-burgundy/10 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image Banner */}
              <div className="relative h-60 overflow-hidden bg-cream">
                <img
                  src={init.image}
                  alt={init.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-burgundy-dark font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {init.badge}
                  </span>
                </div>

                {/* Bottom Image Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-burgundy/80 text-gold border border-gold/30">
                      {icons[idx]}
                    </div>
                    <span className="text-xs font-semibold text-gold-light uppercase tracking-wider">
                      {init.tagline}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {init.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                    {init.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-burgundy">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5">
                      {init.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-darkText/90">
                          <CheckCircle className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={init.link}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-burgundy/5 group-hover:bg-burgundy text-burgundy group-hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    <span>Explore Initiative</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
