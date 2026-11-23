import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Sparkles, FileText, Download, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-r from-[#641126] via-[#9E1B32] to-[#7A0C22] text-white">
      {/* Background Decorative Rings & Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Collaborate for Healthy Growth</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight text-balance-header">
          Let's Build a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-white">
            Healthier Future
          </span>{' '}
          Together.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
          Partner with Fowzia Food to bring nutritious food products and sustainable business opportunities to more communities across Bangladesh.
        </p>

        {/* Action Buttons (Responsive & No-Break) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F59E0B] via-amber-400 to-yellow-400 hover:from-yellow-300 hover:to-[#F59E0B] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>Contact Our Team</span>
          </Link>

          <a
            href="/fowzia-food-company-profile.pdf"
            download="Fowzia_Food_Company_Profile.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-sm transition-all duration-300 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Download Company Profile (PDF)</span>
          </a>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/30 hover:bg-black/50 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-all duration-300 group whitespace-nowrap"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>

        {/* Direct Contacts Bar (No Break) */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-200">
          <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Hotline: <strong className="text-amber-300">{COMPANY_INFO.phone}</strong></span>
          </div>

          <span className="hidden sm:inline text-white/40">•</span>

          <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Corporate Office: <strong>Mohammadpur, Dhaka-1207</strong></span>
          </div>

          <span className="hidden sm:inline text-white/40">•</span>

          <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Email: <strong className="text-amber-300">{COMPANY_INFO.email}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
