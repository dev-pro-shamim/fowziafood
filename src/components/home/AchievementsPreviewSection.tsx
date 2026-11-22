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
    <section className="py-20 bg-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-gold-dark" />
              Credibility & Honors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
              Achievements & <span className="text-burgundy">Recognitions</span>
            </h2>
            <p className="text-sm text-mutedText">
              From World Bank honors and Ministry of Agriculture matching grants to international technical exchanges and ISO 22000:2018 certifications.
            </p>
          </div>

          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-dark group shrink-0"
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
              className="bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-burgundy/10 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Preview */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-burgundy font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                  {item.category}
                </div>
                <div className="absolute bottom-2 left-3 text-white text-xs font-semibold flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-gold-dark">
                    {item.organization}
                  </div>
                  <h3 className="font-bold text-sm text-darkText group-hover:text-burgundy transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-mutedText line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-burgundy">
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
