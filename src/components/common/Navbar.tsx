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
      if (window.scrollY > 15) {
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
    { name: 'Products', path: '/products' },
    { name: "Fowzia Nom's", path: '/fowzia-noms' },
    { name: 'FSDI Training', path: '/fsdi' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-orange-100/80 py-2.5' 
        : 'bg-white border-b border-orange-100/50 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity (No Break) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative shrink-0">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#9E1B32] via-[#F59E0B] to-[#9E1B32] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/fowzia-logo.jpg" 
                  alt="Fowzia Food Logo" 
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white font-extrabold text-[8px] px-1.5 py-0.2 rounded-full uppercase tracking-wider border border-white shadow-xs whitespace-nowrap">
                2014
              </div>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-[#9E1B32] transition-colors leading-none">
                FOWZIA <span className="text-[#9E1B32] font-black">FOOD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-amber-800/80 tracking-wider uppercase mt-0.5">
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
                  `px-3 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#9E1B32] bg-orange-50/80 font-bold'
                      : 'text-slate-700 hover:text-[#9E1B32] hover:bg-orange-50/40'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-[#9E1B32] to-[#F59E0B] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / CTAs (Responsive & No-Break) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* PDF Profile Button */}
            {onOpenPDF && (
              <button
                onClick={onOpenPDF}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 transition-colors shadow-xs whitespace-nowrap"
                title="View Company Profile PDF (23 Pages)"
              >
                <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Profile (PDF)</span>
              </button>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] hover:from-[#7A0C22] hover:to-[#9E1B32] text-white shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu & PDF Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            {onOpenPDF && (
              <button
                onClick={onOpenPDF}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-300 whitespace-nowrap"
              >
                <FileText className="w-3 h-3 text-amber-600" />
                <span>PDF</span>
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#9E1B32] hover:bg-orange-50 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#9E1B32]" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-lg border-t border-orange-100 shadow-xl transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="px-3.5 py-2.5 mb-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200/60 flex items-center justify-between text-xs text-slate-800 font-semibold">
              <span className="flex items-center gap-2 text-[#9E1B32] font-bold">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Nutritious Foods for a Healthier Future
              </span>
              <span className="text-[10px] bg-white px-2 py-0.5 rounded-md border border-orange-200 font-bold text-amber-800">
                Est. 2014
              </span>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#9E1B32] text-white shadow-sm'
                      : 'text-slate-800 hover:bg-orange-50/60 hover:text-[#9E1B32]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}

            <div className="pt-3 pb-1 border-t border-orange-100 flex flex-col gap-2">
              {onOpenPDF && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPDF();
                  }}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-bold border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>View Official Company Profile PDF (23 Pages)</span>
                </button>
              )}
              <Link
                to="/contact"
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] text-white shadow-sm"
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
