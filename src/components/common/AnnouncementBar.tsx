import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface AnnouncementBarProps {
  onOpenPDF?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenPDF }) => {
  return (
    <div className="bg-[#540817] text-white text-xs border-b border-amber-500/30 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
          
          {/* Left Trust Badges */}
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-slate-100 font-medium text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Est. {COMPANY_INFO.established}</span>
            </span>

            <span className="hidden sm:inline-block text-amber-200/50">•</span>

            <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ISO 22000:2018 Certified</span>
            </span>

            <span className="hidden sm:inline-block text-amber-200/50">•</span>

            <span className="inline-flex items-center gap-1.5 text-orange-200 font-medium whitespace-nowrap">
              <HeartHandshake className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Women-Led Agro Pioneer & ~35k Beneficiaries</span>
            </span>
          </div>

          {/* Right Actions & Direct Contacts */}
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-slate-200 text-[11px] sm:text-xs">
            {onOpenPDF && (
              <button
                onClick={onOpenPDF}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 hover:bg-amber-400 text-amber-200 hover:text-slate-900 border border-amber-400/40 transition-colors font-semibold whitespace-nowrap"
                title="View Company Profile PDF (23 Pages)"
              >
                <FileText className="w-3 h-3 shrink-0" />
                <span>Profile (PDF)</span>
              </button>
            )}

            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors font-semibold whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <span className="text-white/30 hidden sm:inline-block">|</span>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="hidden lg:inline">{COMPANY_INFO.email}</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
