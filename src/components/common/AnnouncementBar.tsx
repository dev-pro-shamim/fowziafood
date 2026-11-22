import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface AnnouncementBarProps {
  onOpenPDF?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenPDF }) => {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-[#7A0C22] to-slate-950 text-white text-xs border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left Badges */}
          <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-5 text-slate-100 font-medium text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-gold-light font-bold">
              <Award className="w-3.5 h-3.5 text-gold" />
              Established {COMPANY_INFO.established}
            </span>
            <span className="hidden md:inline-block text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 22000:2018 Certified
            </span>
            <span className="hidden md:inline-block text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
              Women-Led Enterprise & ~35,000 Trained
            </span>
          </div>

          {/* Right Direct Contacts & PDF trigger */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-200 text-[11px] sm:text-xs">
            {onOpenPDF && (
              <button
                onClick={onOpenPDF}
                className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold/20 hover:bg-gold text-gold-light hover:text-slate-900 border border-gold/40 transition-colors font-bold"
              >
                <FileText className="w-3 h-3" />
                <span>Profile (PDF)</span>
              </button>
            )}

            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1 hover:text-gold transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Mail className="w-3 h-3 text-gold" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
