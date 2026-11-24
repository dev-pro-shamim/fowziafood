import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#641126] text-white text-xs sm:text-sm border-b border-orange-300/40 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Left Corporate Credentials (Clean, Realistic, No Emojis) */}
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-slate-100 font-medium text-xs sm:text-sm">
            <span className="font-semibold text-amber-300 whitespace-nowrap">
              Established {COMPANY_INFO.established}
            </span>

            <span className="text-white/40 hidden sm:inline">•</span>

            <span className="text-white/90 whitespace-nowrap">
              ISO 22000:2018 Certified Food Safety
            </span>

            <span className="text-white/40 hidden sm:inline">•</span>

            <span className="text-white/90 whitespace-nowrap">
              Women-Led Enterprise & ~35,000 Trained Beneficiaries
            </span>
          </div>

          {/* Right Direct Contacts (No PDF Button in Header as requested) */}
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-slate-100 text-xs sm:text-sm">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors font-semibold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <span className="text-white/40 hidden sm:inline">|</span>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden lg:inline">{COMPANY_INFO.email}</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
