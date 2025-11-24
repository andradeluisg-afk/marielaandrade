import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';
import { DOCTOR_NAME, DOCTOR_SHORT_NAME, SPECIALTY, SOCIAL_LINKS, NAV_ITEMS, ADDRESS, PHONE_NUMBER, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    // Updated container: removed outer vertical padding to control it precisely inside
    <footer className="bg-medical-950 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Area - DRASTICALLY Reduced vertical padding (pt-4 pb-4) */}
        <div className="pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              {/* Logo added to the left of the name - Smaller size (h-12), tighter padding (p-0.5) */}
              <img 
                src={IMAGES.LOGO} 
                alt="Logo Footer" 
                className="h-12 w-auto object-contain bg-white rounded-full p-0.5 shrink-0"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight whitespace-nowrap">{DOCTOR_SHORT_NAME}</h2>
                <p className="text-medical-200 text-xs font-medium tracking-wide uppercase mt-0.5">
                  {SPECIALTY}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Comprometidos con su salud y bienestar a través de procedimientos quirúrgicos seguros y de vanguardia.
            </p>
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  className="bg-medical-800 p-2 rounded-full hover:bg-accent-600 transition-colors"
                  aria-label={link.platform}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-medical-800 pb-2 inline-block">Menú</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center text-sm">
                    <ChevronRight size={14} className="mr-2 text-accent-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Snippet */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-medical-800 pb-2 inline-block">Procedimientos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Cirugía Laparoscópica</li>
              <li>Cirugía de Vesícula</li>
              <li>Hernias Abdominales</li>
              <li>Apendicectomía</li>
              <li>Cirugía de Trauma</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-medical-800 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-white">Dirección:</span>
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-white">Teléfono:</span>
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-white">Horario:</span>
                <span>Lun - Vie: 9:00 - 18:00<br/>Sáb: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Perfectly matched height to Top Bar (py-2.5) */}
        <div className="border-t border-medical-900 py-2.5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} {DOCTOR_NAME}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 mt-1 md:mt-0">
            <span>Hecho con</span>
            <Heart size={12} className="text-red-500 fill-current" />
            <span>para el cuidado de la vida.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;