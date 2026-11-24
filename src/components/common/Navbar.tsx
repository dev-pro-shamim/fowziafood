import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
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
    <header className={`sticky top-0 z-40 w-full overflow-x-clip transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-orange-200/80 py-2.5' 
        : 'bg-white border-b border-orange-100 py-3'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-3 2xl:gap-4">
          
          {/* Prominent Clear Logo & Brand Identity (100% Transparent PNG, No White Box) */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <img 
              src="/images/fowzia-logo-clean.png" 
              alt="Fowzia Food Official Logo" 
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain group-hover:scale-102 transition-transform duration-300 drop-shadow-2xs"
            />
            <div className="flex flex-col whitespace-nowrap text-left">
              <span className="font-black text-lg sm:text-xl lg:text-2xl tracking-tight text-slate-900 group-hover:text-[#9E1B32] transition-colors leading-none">
                FOWZIA <span className="text-[#9E1B32]">FOOD</span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-amber-800 tracking-wider uppercase mt-1">
                Healthy Food Products • Est. 2014
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Properly Scaled to Never Overflow Container) */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-2.5 2xl:px-3 py-1.5 rounded-xl text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#9E1B32] bg-orange-100/80 font-bold shadow-2xs'
                      : 'text-slate-700 hover:text-[#9E1B32] hover:bg-orange-50/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-2.5 right-2.5 2xl:left-3 2xl:right-3 h-0.5 bg-[#9E1B32] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / Contact CTA (Protected against boundary overflow) */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 2xl:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-xs 2xl:text-sm font-bold uppercase tracking-wider bg-[#9E1B32] hover:bg-[#7A0C22] text-white shadow-xs hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-800 hover:text-[#9E1B32] hover:bg-orange-50 transition-colors focus:outline-none border border-orange-200/80"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#9E1B32]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-orange-200 shadow-xl transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="px-4 py-2.5 mb-2 bg-orange-50/80 rounded-xl border border-orange-200 flex items-center justify-between text-xs sm:text-sm text-slate-800 font-semibold">
              <span className="text-[#9E1B32] font-bold">
                Nutritious Foods for a Healthier Future
              </span>
              <span className="bg-white px-2.5 py-0.5 rounded-md border border-orange-200 font-bold text-amber-800">
                Est. 2014
              </span>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#9E1B32] text-white shadow-sm font-bold'
                      : 'text-slate-800 hover:bg-orange-50/60 hover:text-[#9E1B32]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}

            <div className="pt-3 pb-1 border-t border-orange-100 flex flex-col gap-2">
              <Link
                to="/contact"
                className="w-full text-center py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#9E1B32] text-white shadow-sm"
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
