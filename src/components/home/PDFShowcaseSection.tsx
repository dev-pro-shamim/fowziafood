import React from 'react';
import { FileText, Download, Eye, ShieldCheck, Award, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface PDFShowcaseSectionProps {
  onOpenPDF: () => void;
}

export const PDFShowcaseSection: React.FC<PDFShowcaseSectionProps> = ({ onOpenPDF }) => {
  const documentHighlights = [
    { page: 'Page 1-3', title: 'Company Introduction & Founder Vision', desc: 'Origins, Mrs. Afroza Sultana journey & DAM supervision' },
    { page: 'Page 4-6', title: 'Fowzia Nom\'s & FSDI Training Model', desc: 'Market distribution network & ~35,000 beneficiaries trained' },
    { page: 'Page 7-9', title: 'Governance, SWOT & Financial Outlook', desc: 'Transparent org structure & future expansion roadmap' },
    { page: 'Page 10-13', title: 'Official 19 Products List & Packaging', desc: 'Soy, dairy drinks, clay pot curd, cheese & spices' },
    { page: 'Page 14-17', title: 'ISO 22000:2018 & World Bank Awards', desc: 'Official certificates of registration & awards' },
    { page: 'Page 18-21', title: 'Belgium Delegation & Global Summits', desc: 'International inspection and Thailand US Soy summit' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-burgundy-dark text-white relative overflow-hidden">
      {/* Decorative Golden Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-burgundy/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Breakdown (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold-light border border-gold/40 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-gold" />
                Verified Corporate Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Official Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-yellow-200">Profile & Portfolio</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore the complete, authentic 23-page corporate profile of <strong>Fowzia Healthy Food Products</strong>. Featuring our operational history, ISO 22000:2018 food safety certification, World Bank recognition, Belgian inspection tour, and complete 19-product catalogue.
            </p>

            {/* Document Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {documentHighlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white line-clamp-1">{item.title}</span>
                    <span className="text-[10px] text-gold font-mono shrink-0 ml-1">{item.page}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPDF}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-amber-400 to-yellow-400 hover:from-yellow-300 hover:to-gold text-burgundy-dark font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-glow hover:scale-105 transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Read Profile Online (Interactive Reader)</span>
              </button>

              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia-Food-Company-Profile.pdf"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-gold-light" />
                <span>Download PDF (952 KB)</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Source of Truth Document
              </span>
              <span>•</span>
              <span>23 Pages Full Publication</span>
              <span>•</span>
              <span>Updated & Audited</span>
            </div>
          </div>

          {/* Right Visual 3D PDF Document Mockup (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div 
              onClick={onOpenPDF}
              className="relative w-full max-w-sm rounded-3xl p-4 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border-2 border-gold/40 shadow-2xl group cursor-pointer hover:border-gold hover:scale-105 transition-all duration-500"
            >
              {/* Document Cover Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden bg-white aspect-[3/4] shadow-inner p-3 flex flex-col justify-between border border-slate-200">
                
                {/* Header of Mock Document */}
                <div className="flex flex-col items-center text-center space-y-2 pt-4">
                  <img src="/images/fowzia-logo.jpg" alt="Logo" className="w-14 h-14 object-contain" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Company Profile</span>
                    <h3 className="font-black text-base text-slate-900 leading-tight">Fowzia Healthy Food Products</h3>
                    <p className="text-[10px] text-burgundy font-semibold">Agro-processing & Food Manufacturing</p>
                  </div>
                </div>

                {/* Middle Mock Text Lines */}
                <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-[10px] text-slate-600 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="font-bold">Founder:</span>
                    <span>Mrs. Afroza Sultana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Established:</span>
                    <span>2014</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Certification:</span>
                    <span className="text-emerald-700 font-bold">ISO 22000:2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">World Bank:</span>
                    <span>Best Woman Entrepreneur</span>
                  </div>
                </div>

                {/* Bottom of Mock Document */}
                <div className="text-center pt-2 border-t border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy text-white text-[10px] font-bold">
                    <BookOpen className="w-3 h-3 text-gold" />
                    <span>Click to Open Flipbook</span>
                  </div>
                </div>

              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold to-amber-500 text-burgundy-dark p-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-burgundy-dark" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold tracking-wider">Official Document</div>
                  <div className="text-xs font-black">23 Pages PDF</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
