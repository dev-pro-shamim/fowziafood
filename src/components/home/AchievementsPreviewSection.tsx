import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, ArrowRight, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS, Achievement } from '../../data/companyData';

interface AchievementsPreviewSectionProps {
  onSelectAchievement: (ach: Achievement) => void;
}

export const AchievementsPreviewSection: React.FC<AchievementsPreviewSectionProps> = ({ onSelectAchievement }) => {
  // Show top 4 key achievements on the homepage
  const displayList = ACHIEVEMENTS.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Credibility & Honors
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
              Achievements &{' '}
              <span className="text-[#9E1B32]">
                Recognitions
              </span>
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              From World Bank national honors and Ministry of Agriculture matching grants to international technical exchanges and ISO 22000:2018 certifications.
            </p>
          </div>

          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E1B32] hover:text-[#7A0C22] group shrink-0"
          >
            <span>View All Recognitions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid of 4 Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayList.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAchievement(item)}
              className="bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border-2 border-orange-200/90 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Preview */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#9E1B32] font-black text-[10px] px-2.5 py-1 rounded-full shadow-xs border border-orange-200">
                  {item.category}
                </div>
                <div className="absolute bottom-2 left-3 text-white text-xs font-semibold flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-amber-700">
                    {item.organization}
                  </div>
                  <h3 className="font-black text-sm text-slate-900 group-hover:text-[#9E1B32] transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-orange-100 flex items-center justify-between text-[11px] font-bold text-[#9E1B32]">
                  <span>View Documentation</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
