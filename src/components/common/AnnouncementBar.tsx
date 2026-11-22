import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-burgundy-dark text-white text-xs border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left Badges */}
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-cream/90 font-medium">
            <span className="flex items-center gap-1.5 text-gold-light">
              <Award className="w-3.5 h-3.5 text-gold" />
              Established {COMPANY_INFO.established}
            </span>
            <span className="hidden md:inline-block text-gold/40">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              ISO 22000:2018 Certified Processing
            </span>
            <span className="hidden md:inline-block text-gold/40">•</span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-gold" />
              Women-Led Enterprise & 35k+ Trained
            </span>
          </div>

          {/* Right Direct Contacts */}
          <div className="flex items-center gap-4 text-cream/80 text-[11px] sm:text-xs">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-gold/40">|</span>
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
