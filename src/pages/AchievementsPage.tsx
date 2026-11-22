import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  FileText,
  Globe2,
  ChevronRight
} from 'lucide-react';
import { ACHIEVEMENTS, COMPANY_INFO, Achievement } from '../data/companyData';
import { AchievementModal } from '../components/common/AchievementModal';

export const AchievementsPage: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Award' | 'Certification' | 'Grant' | 'International' | 'Exhibition'>('All');

  const filtered = activeFilter === 'All' 
    ? ACHIEVEMENTS 
    : ACHIEVEMENTS.filter(a => a.category === activeFilter);

  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-burgundy-dark via-burgundy to-[#4A0C1B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span>Honors, Certifications & Delegations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Certifications</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 max-w-3xl leading-relaxed">
            Honored with prestigious awards from the World Bank, special matching grants under the LDDP, international delegations from Belgium, and global technical invitations from US Soy Food.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">Achievements</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Regulatory & Institutional Credentials Strip */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-gold/30">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-burgundy" />
              <h3 className="text-base font-bold text-darkText uppercase tracking-wider">
                Official Regulatory Documents & Statutory Compliance
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs">
              {COMPANY_INFO.graDocuments.map((doc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-cream/70 border border-gold/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0" />
                  <span className="font-semibold text-darkText">{doc}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-mutedText border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-4">
                <span><strong>Trade License:</strong> {COMPANY_INFO.tradeLicenseNo}</span>
                <span>•</span>
                <span><strong>TIN:</strong> {COMPANY_INFO.tin}</span>
                <span>•</span>
                <span><strong>VAT Reg:</strong> {COMPANY_INFO.vatReg}</span>
              </div>
              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia-Food-Company-Profile.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-burgundy text-white font-bold text-xs hover:bg-burgundy-dark transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-gold-light" />
                <span>Download Certified Profile PDF</span>
              </a>
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['All', 'Award', 'Certification', 'Grant', 'International', 'Exhibition'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-burgundy text-white shadow-md'
                  : 'bg-white text-darkText hover:bg-cream border border-gray-200'
              }`}
            >
              {cat === 'All' ? 'All Recognitions' : cat}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-burgundy/10 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-burgundy font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </div>

                <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gold-dark block">
                    {item.organization}
                  </span>
                  <h3 className="text-lg font-bold text-darkText group-hover:text-burgundy transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-mutedText leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-burgundy">
                  <span>Click to Inspect Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </div>
  );
};
