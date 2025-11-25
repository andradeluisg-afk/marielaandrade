
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, ExternalLink, Navigation } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { CONTACT_DETAILS, DOCTOR_SHORT_NAME, IMAGES, GOOGLE_MAPS_URL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form data:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
       {/* Simple Header - Uses medical-900 */}
       <div className="bg-medical-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Contáctenos</h1>
          <p className="text-medical-100 text-lg">Estamos listos para atenderle y responder sus inquietudes.</p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-8">Información de Consultorio</h2>
            
            <div className="space-y-8">
              {CONTACT_DETAILS.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-slate-100 rounded-lg border border-slate-200 hover:border-medical-200 transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-accent-600">
                    <detail.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{detail.label}</h3>
                    <p className="text-slate-600">{detail.text}</p>
                  </div>
                </div>
              ))}
              
               <div className="flex items-start gap-4 p-6 bg-slate-100 rounded-lg border border-slate-200 hover:border-medical-200 transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-accent-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Horario de Atención</h3>
                    <p className="text-slate-600">Lunes a Viernes: 09:00 - 18:00</p>
                    <p className="text-slate-600">Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
            </div>

            {/* Social Proof / Reassurance - Darkened background to medical-100 */}
            <div className="mt-12 bg-medical-100 p-6 rounded-lg border-l-4 border-medical-600">
              <p className="italic text-slate-700">
                "{DOCTOR_SHORT_NAME} y su equipo están comprometidos con brindar una atención de calidad, priorizando siempre la seguridad y bienestar del paciente."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-medical-600 to-accent-500"></div>
            
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">Envíenos un mensaje</h2>
            <p className="text-slate-500 mb-8">Complete el formulario y nos pondremos en contacto con usted a la brevedad posible.</p>

            {isSubmitted ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-lg flex flex-col items-center justify-center text-center h-80">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Nos comunicaremos con usted muy pronto.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold underline text-green-700 hover:text-green-900"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-medical-50 border-transparent focus:bg-white focus:border-medical-200 focus:ring-2 focus:ring-medical-200 text-slate-800 placeholder-slate-400 outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-medical-50 border-transparent focus:bg-white focus:border-medical-200 focus:ring-2 focus:ring-medical-200 text-slate-800 placeholder-slate-400 outline-none transition-all"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-medical-50 border-transparent focus:bg-white focus:border-medical-200 focus:ring-2 focus:ring-medical-200 text-slate-800 placeholder-slate-400 outline-none transition-all"
                      placeholder="+593 987 100 128"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje o Consulta</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-medical-50 border-transparent focus:bg-white focus:border-medical-200 focus:ring-2 focus:ring-medical-200 text-slate-800 placeholder-slate-400 outline-none transition-all resize-none"
                    placeholder="¿En qué podemos ayudarle?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-medical-800 text-white font-bold py-4 rounded-md hover:bg-medical-900 transition-colors shadow-md flex items-center justify-center gap-2 group"
                >
                  Enviar Mensaje 
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* INTERACTIVE MAP SECTION */}
      <div className="h-[500px] w-full relative group border-t border-slate-200 bg-slate-100">
        {/* Interactive Google Map (Query Embed guarantees centering on the POI) */}
        <iframe 
          src="https://maps.google.com/maps?q=Hospital%20Metropolitano%20Quito&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          title="Mapa Hospital Metropolitano"
        ></iframe>

        {/* Floating Action Button (Does NOT block the map) */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
           <a 
            href={GOOGLE_MAPS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-white/50 text-slate-800 px-6 py-3 rounded-full shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-4 cursor-pointer group"
          >
              <div className="bg-green-500 text-white p-2 rounded-full animate-pulse shadow-md group-hover:bg-green-600">
                 <Navigation size={20} fill="currentColor" />
              </div>
              <div className="text-left">
                 <p className="font-bold text-medical-900 leading-none">Abrir Navegación GPS</p>
                 <p className="text-xs text-slate-500 font-medium mt-1">Cómo llegar al Hospital</p>
              </div>
              <ExternalLink size={16} className="text-slate-400 ml-1" />
           </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
