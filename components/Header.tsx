import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS, PHONE_NUMBER, DOCTOR_SHORT_NAME, SPECIALTY, IMAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect slightly after scrolling starts
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 font-sans">
      {/* Top Bar - Always visible, fixed height - NOW DARKER (950) */}
      <div className="bg-medical-950 text-white py-2.5 px-4 md:px-8 text-sm relative z-50 border-b border-medical-900">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
              <Phone size={14} />
              <span>{PHONE_NUMBER}</span>
            </a>
            <span className="hidden sm:inline text-medical-600">|</span>
            <span className="hidden sm:inline opacity-90">Atención personalizada en Quito</span>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-accent-500 transition-colors"
                aria-label={link.platform}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation - Subtle Shrink Effect (100% -> 90%) */}
      {/* Increased shadow intensity for better separation on white backgrounds - APPLIED PERMANENTLY */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-500 ease-in-out shadow-xl shadow-slate-900/20 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo & Brand Area */}
            <Link to="/" className="flex items-center gap-3 md:gap-4 group">
              {/* Logo Image with responsive sizing */}
              <img 
                src={IMAGES.LOGO} 
                alt={`Logo ${DOCTOR_SHORT_NAME}`} 
                className={`transition-all duration-500 ease-in-out object-contain ${isScrolled ? 'h-10 w-auto' : 'h-12 md:h-16 w-auto'}`}
              />
              
              <div className="flex flex-col justify-center">
                {/* Name */}
                <h1 className={`font-serif font-bold text-medical-900 tracking-tight group-hover:text-medical-800 transition-all duration-500 ease-in-out origin-left ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                  {DOCTOR_SHORT_NAME}
                </h1>
                {/* Specialty Subtitle - Stays visible, just slightly compacts */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'mt-0' : 'mt-1'}`}>
                  <span className={`text-medical-600 font-medium tracking-wide uppercase group-hover:text-medical-500 transition-colors block ${isScrolled ? 'text-xs' : 'text-xs md:text-sm'}`}>
                    {SPECIALTY}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu - Pill Style */}
            <nav className="hidden md:flex items-center gap-1 bg-white p-1 rounded-full transition-all duration-500">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'bg-medical-200 text-medical-900 shadow-sm' 
                        : 'text-slate-600 hover:bg-medical-100 hover:text-medical-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button (Desktop) - Subtle resize */}
            <div className="hidden md:block">
              <Link 
                to="/contacto" 
                className={`bg-medical-900 text-white rounded-full font-bold hover:bg-medical-800 transition-all shadow-sm hover:shadow-md tracking-wide transform hover:-translate-y-0.5 flex items-center justify-center ease-in-out duration-500 ${isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-3 text-sm'}`}
              >
                Agendar Cita
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-medical-900 focus:outline-none p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full animate-fade-in-up z-40">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium tracking-wide ${
                    location.pathname === item.path
                      ? 'bg-medical-200 text-medical-900'
                      : 'text-slate-600 hover:bg-medical-100 hover:text-medical-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link 
                  to="/contacto"
                  className="block w-full text-center bg-accent-600 text-white px-4 py-3.5 rounded-full font-bold hover:bg-accent-700 transition-colors tracking-wide shadow-sm"
                >
                  Agendar Cita Ahora
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;