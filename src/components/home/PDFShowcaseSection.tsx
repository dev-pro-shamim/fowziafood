import React from 'react';
import { FileText, Download, Eye, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface PDFShowcaseSectionProps {
  onOpenPDF: () => void;
}

export const PDFShowcaseSection: React.FC<PDFShowcaseSectionProps> = ({ onOpenPDF }) => {
  const documentHighlights = [
    { page: 'Pages 1–3', title: 'Company Introduction & Founder Vision', desc: 'Origins, Mrs. Afroza Sultana journey & DAM supervision' },
    { page: 'Pages 4–6', title: 'Fowzia Nom\'s & FSDI Training Model', desc: 'Market distribution network & ~35,000 beneficiaries trained' },
    { page: 'Pages 7–9', title: 'Governance, SWOT & Financial Outlook', desc: 'Transparent org structure & future expansion roadmap' },
    { page: 'Pages 10–13', title: 'Official 19 Products List & Packaging', desc: 'Soy, dairy drinks, clay pot curd, cheese & spices' },
    { page: 'Pages 14–17', title: 'ISO 22000:2018 & World Bank Awards', desc: 'Official certificates of registration & awards' },
    { page: 'Pages 18–21', title: 'Belgium Delegation & Global Summits', desc: 'International inspection and Thailand US Soy summit' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF6EB] to-[#FFF0DC] text-slate-900 relative overflow-hidden border-b border-orange-200">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text & Breakdown (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4 text-amber-700" />
                Verified Corporate Documentation
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
                Official Company{' '}
                <span className="text-[#9E1B32]">
                  Profile & Portfolio
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Explore the complete, authentic 23-page corporate profile of <strong className="font-semibold text-slate-950">Fowzia Healthy Food Products</strong>. 
              Featuring our operational history since 2014, ISO 22000:2018 food safety certification, 
              World Bank recognition, Belgian inspection tour, and the complete 19-product catalogue.
            </p>

            {/* Document Highlights Grid (Larger font size) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {documentHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-orange-200 shadow-2xs hover:border-amber-400 hover:shadow-sm transition-all space-y-1 text-left">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 line-clamp-1">{item.title}</span>
                    <span className="text-xs font-bold text-amber-800 font-mono shrink-0 ml-1 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">{item.page}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-1 font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenPDF}
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#9E1B32] hover:bg-[#7A0C22] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Eye className="w-4 h-4" />
                <span>Read Profile Online (Reader)</span>
              </button>

              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia_Food_Company_Profile.pdf"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-slate-900 font-bold text-xs sm:text-sm border border-orange-300 hover:border-orange-400 shadow-2xs transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-amber-700" />
                <span>Download PDF (952 KB)</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Primary Source of Truth
              </span>
              <span className="text-orange-300">•</span>
              <span className="whitespace-nowrap">23 Pages Full Publication</span>
              <span className="text-orange-300">•</span>
              <span className="whitespace-nowrap">Audited Corporate Documentation</span>
            </div>
          </div>

          {/* Right Visual PDF Document Mockup (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div 
              onClick={onOpenPDF}
              className="relative w-full max-w-sm rounded-3xl p-5 bg-white border-2 border-orange-300 shadow-lg group cursor-pointer hover:border-amber-500 hover:shadow-xl transition-all duration-500"
            >
              {/* Document Cover Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white to-orange-50 aspect-[3/4] shadow-inner p-4 flex flex-col justify-between border border-orange-100">
                
                {/* Header of Mock Document */}
                <div className="flex flex-col items-center text-center space-y-2 pt-2">
                  <img src="/images/fowzia-logo-clean.png" alt="Logo" className="h-12 w-auto object-contain" />
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">Official Document</span>
                    <h3 className="font-black text-lg text-slate-900 leading-tight">Fowzia Healthy Food Products</h3>
                    <p className="text-xs text-[#9E1B32] font-bold">Agro-processing & Food Manufacturing</p>
                  </div>
                </div>

                {/* Middle Mock Text Lines */}
                <div className="p-3 bg-white rounded-xl space-y-2 text-xs text-slate-700 border border-orange-100 shadow-2xs text-left">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Founder:</span>
                    <span className="font-bold text-slate-900">Mrs. Afroza Sultana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Chief Executive:</span>
                    <span className="font-bold text-slate-900">Md Forman Ali Bhuiyan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Established:</span>
                    <span className="font-bold text-slate-900">2014</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Food Safety:</span>
                    <span className="text-emerald-700 font-bold">ISO 22000:2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Recognition:</span>
                    <span className="text-[#9E1B32] font-bold">World Bank (Feb 2020)</span>
                  </div>
                </div>

                {/* Bottom of Mock Document */}
                <div className="text-center pt-2 border-t border-orange-200">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9E1B32] text-white text-xs font-bold shadow-xs">
                    <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                    <span>Click to Open Live Reader</span>
                  </div>
                </div>

              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-slate-950 p-3 rounded-2xl shadow-md border-2 border-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-slate-950 shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider leading-none">Complete Profile</div>
                  <div className="text-xs font-black leading-tight">23 Pages PDF</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
