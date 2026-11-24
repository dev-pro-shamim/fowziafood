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
    <footer className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F1] to-[#FFF3E6] text-slate-800 pt-14 pb-8 border-t-2 border-orange-300 relative overflow-hidden">
      {/* Decorative Soft Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Pillars Banner (Clean White Cards with Soft Orange Borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mb-10 border-b border-orange-200/80">
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-orange-200/80 shadow-xs">
            <div className="p-2.5 bg-orange-100 rounded-xl text-amber-900 border border-orange-200 shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">ISO 22000:2018</h4>
              <p className="text-[11px] text-slate-600">Certified Food Safety System</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-orange-200/80 shadow-xs">
            <div className="p-2.5 bg-orange-100 rounded-xl text-amber-900 border border-orange-200 shrink-0">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">World Bank Awardee</h4>
              <p className="text-[11px] text-slate-600">Best Women Entrepreneur 2020</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-orange-200/80 shadow-xs">
            <div className="p-2.5 bg-orange-100 rounded-xl text-amber-900 border border-orange-200 shrink-0">
              <Sparkles className="w-5 h-5 text-[#9E1B32]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">Govt & DAM Supervised</h4>
              <p className="text-[11px] text-slate-600">Ministry of Agriculture Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-orange-200/80 shadow-xs">
            <div className="p-2.5 bg-orange-100 rounded-xl text-amber-900 border border-orange-200 shrink-0">
              <Heart className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">~35,000 Trained</h4>
              <p className="text-[11px] text-slate-600">FSDI Community Empowerment</p>
            </div>
          </div>

        </div>

        {/* 5-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-orange-200/80 text-left">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img 
                src="/images/fowzia-logo-clean.png" 
                alt="Fowzia Food Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-2xs"
              />
              <div>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                  FOWZIA <span className="text-[#9E1B32]">FOOD</span>
                </h3>
                <p className="text-[10px] text-amber-700 font-bold tracking-wider uppercase mt-1">
                  Healthy Food Products • Est. 2014
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed pr-2 font-normal">
              Women-led agro-processing enterprise specializing in hygienic, protein-rich soy and dairy products. Sourcing directly from marginal farmers under the technical guidance of DAM, BAU Gazipur, and Solidaridad to bring wholesome nutrition to every household in Bangladesh.
            </p>

            {/* Official Registration Badges */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-orange-200/80">
              <div className="flex items-center justify-between border-b border-orange-100 pb-1">
                <span className="font-medium text-slate-500">Trade License:</span>
                <span className="font-mono text-slate-900 font-bold">{COMPANY_INFO.tradeLicenseNo}</span>
              </div>
              <div className="flex items-center justify-between border-b border-orange-100 pb-1">
                <span className="font-medium text-slate-500">TIN Identification:</span>
                <span className="font-mono text-slate-900 font-bold">{COMPANY_INFO.tin}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-500">Food Safety Standard:</span>
                <span className="text-emerald-700 font-bold">ISO 22000:2018 Certified</span>
              </div>
            </div>

            {/* PDF Profile Download Link */}
            <div className="pt-1">
              <a
                href="/fowzia-food-company-profile.pdf"
                download="Fowzia_Food_Company_Profile.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-100 hover:bg-[#9E1B32] text-amber-950 hover:text-white text-xs font-bold transition-colors border border-orange-300"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Download Official Profile (23 Pages PDF)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Company Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  About Leadership
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  19 Products Catalog
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Certificates & Awards
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Factory & Activities Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products Spectrum (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Product Spectrum
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/products?category=soy" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Tofu & Soy Protein
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy-drinks" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Special Borhani
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy-desserts" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Clay Pot Curds
                </Link>
              </li>
              <li>
                <Link to="/products?category=cheese" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Mozzarella Cheese
                </Link>
              </li>
              <li>
                <Link to="/products?category=frozen" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  French Fries
                </Link>
              </li>
              <li>
                <Link to="/products?category=spices" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Pure Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Strategic Initiatives (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Strategic Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/about" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Fowzia Food Core
                </Link>
              </li>
              <li>
                <Link to="/fowzia-noms" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Fowzia Nom's Network
                </Link>
              </li>
              <li>
                <Link to="/fsdi" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  FSDI Institute
                </Link>
              </li>
              <li>
                <Link to="/fsdi" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  ~35,000 Trained
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#9E1B32] transition-colors flex items-center gap-1 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  Business Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Head Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>128/2, Mohammadia Housing Limited, Mohammadpur, Dhaka-1207</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#9E1B32] font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#9E1B32] break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-[#9E1B32]">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Tagline: "{COMPANY_INFO.tagline}".</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-600 font-medium">
            <span>BSTI Compliant</span>
            <span className="text-amber-400">•</span>
            <span>DAM & BAU Supervised</span>
            <span className="text-amber-400">•</span>
            <span>Solidaridad Linked</span>
            <span className="text-amber-400">•</span>
            <span>ISO 22000:2018</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
