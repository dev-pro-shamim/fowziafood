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
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#25060E] to-[#140207] text-white pt-16 pb-8 border-t-2 border-gold/40 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10 text-cream/90">
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="p-3 bg-burgundy/80 rounded-lg text-gold border border-gold/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">ISO 22000:2018</h4>
              <p className="text-xs text-cream/70">Certified Food Safety System</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="p-3 bg-burgundy/80 rounded-lg text-gold border border-gold/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">World Bank Recognized</h4>
              <p className="text-xs text-cream/70">Best Women Entrepreneur 2020</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="p-3 bg-burgundy/80 rounded-lg text-gold border border-gold/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Govt & DAM Supervised</h4>
              <p className="text-xs text-cream/70">Ministry of Agriculture Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="p-3 bg-burgundy/80 rounded-lg text-gold border border-gold/30">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">35,000+ Trained</h4>
              <p className="text-xs text-cream/70">FSDI Community Empowerment</p>
            </div>
          </div>
        </div>

        {/* 5-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-burgundy to-gold shadow-md">
                <img 
                  src="/images/fowzia-logo.jpg" 
                  alt="Fowzia Food Logo" 
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight">
                  FOWZIA <span className="text-gold">FOOD</span>
                </h3>
                <p className="text-xs text-gold-light/80 font-medium tracking-wide">
                  Healthy Food Products
                </p>
              </div>
            </Link>

            <p className="text-sm text-cream/80 leading-relaxed pr-2">
              Women-led agro-processing enterprise specializing in hygienic, protein-rich soy and dairy products. Sourcing directly from marginal farmers to bring wholesome nutrition to every household in Bangladesh.
            </p>

            {/* Official Registration Badges */}
            <div className="pt-2 space-y-1.5 text-xs text-cream/70">
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span>Trade License:</span>
                <span className="font-mono text-gold-light">{COMPANY_INFO.tradeLicenseNo}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span>TIN Identification:</span>
                <span className="font-mono text-gold-light">{COMPANY_INFO.tin}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span>VAT Registration:</span>
                <span className="font-mono text-gold-light">{COMPANY_INFO.vatReg}</span>
              </div>
            </div>

            {/* Social Media Link */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={COMPANY_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-burgundy/80 hover:bg-burgundy text-white text-xs font-medium border border-gold/30 hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-gold-light" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              Company
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  About Our Story
                </Link>
              </li>
              <li>
                <Link to="/about#founder" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Founder's Journey
                </Link>
              </li>
              <li>
                <a 
                  href="/fowzia-food-company-profile.pdf" 
                  download="Fowzia-Food-Company-Profile.pdf" 
                  className="text-amber-300 font-bold hover:underline flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Company Profile (PDF)</span>
                </a>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Achievements & ISO
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Corporate Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              Our Products
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link to="/products?category=soy" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Soy-Based Foods
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy-drinks" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Special Borhani & Matha
                </Link>
              </li>
              <li>
                <Link to="/products?category=dairy-desserts" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Sweet & Sour Curds
                </Link>
              </li>
              <li>
                <Link to="/products?category=cheese" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Mozzarella Cheese
                </Link>
              </li>
              <li>
                <Link to="/products?category=frozen" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Frozen French Fries
                </Link>
              </li>
              <li>
                <Link to="/products?category=spices" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Pure Spice Powders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Initiatives (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              Initiatives
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Fowzia Food Core
                </Link>
              </li>
              <li>
                <Link to="/fowzia-noms" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Fowzia Nom's Network
                </Link>
              </li>
              <li>
                <Link to="/fsdi" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  FSDI Institute
                </Link>
              </li>
              <li>
                <Link to="/fsdi#programs" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Entrepreneur Training
                </Link>
              </li>
              <li>
                <Link to="/contact?type=wholesale" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                  Distributor Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-cream/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>128/2, Mohammadia Housing Limited, Mohammadpur, Dhaka-1207, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-gold font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold shrink-0" />
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-gold">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Motto: "{COMPANY_INFO.tagline}".</p>
          <div className="flex items-center gap-4 text-cream/70">
            <span>BSTI Compliant</span>
            <span>•</span>
            <span>DAM & BAU Supervised</span>
            <span>•</span>
            <span>Solidaridad Linked</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
