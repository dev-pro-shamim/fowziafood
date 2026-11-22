import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Navbar: React.FC = () => {
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: "Fowzia Nom's", path: '/fowzia-noms' },
    { name: 'FSDI Training', path: '/fsdi' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-premium border-b border-burgundy/10 py-2.5' 
        : 'bg-white border-b border-burgundy/5 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-burgundy to-gold shadow-md group-hover:scale-105 transition-transform duration-300">
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
              <span className="font-bold text-lg sm:text-xl tracking-tight text-burgundy-dark group-hover:text-burgundy transition-colors leading-tight">
                FOWZIA <span className="text-gold-dark font-black">FOOD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-mutedText tracking-wider uppercase hidden sm:block">
                Healthy Food Products
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-burgundy font-semibold bg-burgundy/5'
                      : 'text-darkText hover:text-burgundy hover:bg-cream-dark/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-burgundy to-gold rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-burgundy to-burgundy-dark text-white shadow-md hover:shadow-lg hover:from-burgundy-dark hover:to-burgundy transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gold/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <PhoneCall className="w-3.5 h-3.5 text-gold-light" />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/contact"
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-burgundy text-white"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-darkText hover:text-burgundy hover:bg-cream transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-burgundy" />
              ) : (
                <Menu className="w-6 h-6 text-burgundy-dark" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-burgundy/10 shadow-xl transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="px-3 py-2 mb-2 bg-cream/70 rounded-lg border border-gold/20 flex items-center gap-2 text-xs text-burgundy font-medium">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Nutritious Foods for a Healthier Future</span>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-burgundy text-white font-semibold shadow-sm'
                      : 'text-darkText hover:bg-cream hover:text-burgundy'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                to="/products"
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold border border-burgundy text-burgundy hover:bg-burgundy/5 transition-colors"
              >
                Browse 19 Products Catalog
              </Link>
              <Link
                to="/contact"
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-burgundy to-burgundy-dark text-white shadow-md"
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
