import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Award, 
  Heart, 
  ChevronRight,
  Sparkles,
  FileText,
  Download
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#25060E] to-[#120206] text-white pt-14 pb-8 border-t-2 border-amber-500/40 relative overflow-hidden">
      {/* Background Subtle Warm Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9E1B32]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mb-10 border-b border-white/10 text-slate-100">
          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/5">
            <div className="p-2.5 bg-[#9E1B32] rounded-xl text-amber-300 border border-amber-400/30 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">ISO 22000:2018</h4>
              <p className="text-[11px] text-slate-300">Certified Food Safety System</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/5">
            <div className="p-2.5 bg-[#9E1B32] rounded-xl text-amber-300 border border-amber-400/30 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">World Bank Recognized</h4>
              <p className="text-[11px] text-slate-300">Best Women Entrepreneur 2020</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/5">
            <div className="p-2.5 bg-[#9E1B32] rounded-xl text-amber-300 border border-amber-400/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">Govt & DAM Supervised</h4>
              <p className="text-[11px] text-slate-300">Ministry of Agriculture Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/5">
            <div className="p-2.5 bg-[#9E1B32] rounded-xl text-amber-300 border border-amber-400/30 shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">~35,000 Trained</h4>
              <p className="text-[11px] text-slate-300">FSDI Community Empowerment</p>
            </div>
          </div>
        </div>

        {/* 5-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10 text-left">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#9E1B32] via-amber-400 to-[#9E1B32] shadow-md">
                <img 
                  src="/images/fowzia-logo.jpg" 
                  alt="Fowzia Food Logo" 
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">
                  FOWZIA <span className="text-amber-400">FOOD</span>
                </h3>
                <p className="text-[10px] text-amber-200/80 font-bold tracking-wider uppercase">
                  Healthy Food Products
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed pr-2">
              Women-led agro-processing enterprise specializing in hygienic, protein-rich soy and dairy products. Sourcing directly from marginal farmers to bring wholesome nutrition to every household in Bangladesh.
            </p>

            {/* Official Registration Badges */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span>Trade License:</span>
                <span className="font-mono text-amber-300">{COMPANY_INFO.tradeLicenseNo}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span>TIN Identification:</span>
                <span className="font-mono text-amber-300">{COMPANY_INFO.tin}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Food Safety Standard:</span>
                <span className="text-emerald-400 font-bold">ISO 22000:2018</span>
              </div>
            </div>

            {/* PDF Profile Download Link */}
            <div className="pt-2">
              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia_Food_Company_Profile.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-slate-950 text-xs font-bold transition-colors border border-amber-400/40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Profile (23 Pages PDF)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  About Our Founder
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Certificates & Awards
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products Spectrum (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Products (19)
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/products?category=soy" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Soy Tofu & Protein
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy-drinks" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Special Borhani
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy-desserts" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Clay Pot Curds
                </Link>
              </li>
              <li>
                <Link to="/products?category=cheese" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Mozzarella Cheese
                </Link>
              </li>
              <li>
                <Link to="/products?category=frozen" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Frozen French Fries
                </Link>
              </li>
              <li>
                <Link to="/products?category=spices" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Pure Spice Powders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Initiatives (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Initiatives
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Fowzia Food Core
                </Link>
              </li>
              <li>
                <Link to="/fowzia-noms" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Fowzia Nom's Network
                </Link>
              </li>
              <li>
                <Link to="/fsdi" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  FSDI Institute
                </Link>
              </li>
              <li>
                <Link to="/fsdi" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Entrepreneur Training
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
                  Distributor Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Head Office
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>128/2, Mohammadia Housing Limited, Mohammadpur, Dhaka-1207, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-300 font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-300 break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-amber-300">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Responsive & No-Break) */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Motto: "{COMPANY_INFO.tagline}".</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-300">
            <span>BSTI Compliant</span>
            <span className="text-amber-400/50">•</span>
            <span>DAM & BAU Supervised</span>
            <span className="text-amber-400/50">•</span>
            <span>Solidaridad Linked</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
