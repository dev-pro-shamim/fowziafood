import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Sparkles, FileText, Download } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#641126] via-[#9E1B32] to-[#7A0C22] text-white">
      {/* Background Decorative Rings & Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-amber-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Collaborate for Healthy Growth</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Let's Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-white">Healthier Future</span> Together.
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
          Partner with Fowzia Food to bring nutritious food products and sustainable business opportunities to more communities across Bangladesh.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-yellow-400 hover:from-yellow-300 hover:to-gold text-burgundy-dark font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact Our Team</span>
          </Link>

          <a
            href="/fowzia-food-company-profile.pdf"
            download="Fowzia-Food-Company-Profile.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Download className="w-4 h-4 text-gold-light" />
            <span>Download Company Profile (PDF)</span>
          </a>

          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/30 hover:bg-black/50 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Direct Contacts Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200">
          <div>
            Direct Sales Hotline: <strong className="text-amber-300">{COMPANY_INFO.phone}</strong>
          </div>
          <span className="hidden sm:inline text-white/40">•</span>
          <div>
            Corporate Office: <strong>Mohammadpur, Dhaka-1207</strong>
          </div>
          <span className="hidden sm:inline text-white/40">•</span>
          <div>
            Official Portal: <strong className="text-amber-300">{COMPANY_INFO.website}</strong>
          </div>
        </div>

      </div>
    </section>
  );
};
