import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronRight, Sparkles, FileText, Download } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface NavbarProps {
  onOpenPDF?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPDF }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products (19)', path: '/products' },
    { name: "Fowzia Nom's", path: '/fowzia-noms' },
    { name: 'FSDI Training', path: '/fsdi' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-2.5' 
        : 'bg-white border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-burgundy via-gold to-burgundy shadow-md group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/fowzia-logo.jpg" 
                  alt="Fowzia Food Logo" 
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gold text-burgundy-dark font-extrabold text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider border border-white shadow-sm">
                2014
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-burgundy transition-colors leading-tight">
                FOWZIA <span className="text-burgundy font-black">FOOD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase hidden sm:block">
                Healthy Food Products
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-burgundy bg-rose-50 font-bold'
                      : 'text-slate-700 hover:text-burgundy hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-burgundy to-gold rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* PDF Profile Button */}
            {onOpenPDF && (
              <button
                onClick={onOpenPDF}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-gold/40 transition-colors shadow-sm"
                title="View Company Profile PDF"
              >
                <FileText className="w-3.5 h-3.5 text-gold-dark" />
                <span>Profile (PDF)</span>
              </button>
            )}

            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-burgundy to-burgundy-dark text-white shadow-md hover:shadow-lg hover:from-burgundy-dark hover:to-burgundy transition-all duration-300 overflow-hidden"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-light" />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {onOpenPDF && (
              <button
                onClick={onOpenPDF}
                className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-gold/40"
              >
                PDF
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-burgundy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-burgundy" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 shadow-xl transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="px-3 py-2 mb-2 bg-rose-50 rounded-lg border border-rose-100 flex items-center justify-between text-xs text-burgundy font-bold">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                Nutritious Foods for a Healthier Future
              </span>
              <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-rose-200">Since 2014</span>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-burgundy text-white shadow-sm'
                      : 'text-slate-800 hover:bg-slate-50 hover:text-burgundy'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}

            <div className="pt-4 pb-2 border-t border-slate-100 flex flex-col gap-2">
              {onOpenPDF && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPDF();
                  }}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-bold border border-gold bg-amber-50 text-amber-900 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-gold-dark" />
                  <span>View Official Company Profile PDF (23 Pages)</span>
                </button>
              )}
              <Link
                to="/contact"
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-burgundy to-burgundy-dark text-white shadow-md"
              >
                Wholesale & Partnership Inquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
