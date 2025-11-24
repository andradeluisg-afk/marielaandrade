import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { DOCTOR_NAME, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-medical-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG}
            alt="Quirófano moderno y tecnología médica" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-900/95 to-medical-800/70 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:flex md:items-center w-full">
          <div className="md:w-2/3 lg:w-1/2 space-y-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white border border-white/30 text-sm font-medium tracking-widest backdrop-blur-sm">
              ESPECIALISTA EN CIRUGÍA GENERAL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight shadow-sm tracking-tight">
              Cuidado experto, <br/>
              <span className="text-accent-300">recuperación segura.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed max-w-xl">
              La Dra. Mariela Andrade ofrece diagnósticos precisos y tratamientos quirúrgicos mínimamente invasivos para su bienestar integral.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/contacto" 
                className="bg-accent-600 text-white px-8 py-4 rounded-sm font-semibold hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 tracking-wide"
              >
                Agendar Consulta <ArrowRight size={20} />
              </Link>
              <Link 
                to="/procedimientos" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm font-semibold hover:bg-white/20 transition-all flex items-center justify-center tracking-wide"
              >
                Ver Procedimientos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Reduced width from w-1/2 to w-5/12 (approx 40%) or w-1/3 (33%) for smaller image */}
            <div className="md:w-5/12 lg:w-1/3 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5]">
                 {/* Doctor's Photo */}
                <img 
                  src={IMAGES.DOCTOR_PROFILE}
                  alt={DOCTOR_NAME} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Scaled down badge slightly to match smaller image */}
              <div className="absolute -bottom-5 -right-5 bg-medical-50 p-5 rounded-lg shadow-lg border-l-4 border-accent-500 hidden md:block">
                <p className="text-3xl font-bold text-medical-900 tracking-tight">10+</p>
                <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">Años de Experiencia</p>
              </div>
            </div>
            {/* Increased text width from w-1/2 to w-7/12 or w-2/3 */}
            <div className="md:w-7/12 lg:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 tracking-tight">
                Sobre la {DOCTOR_NAME}
              </h2>
              <div className="w-20 h-1 bg-accent-500 rounded-full"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Comprometida con la excelencia médica y el trato humano, la Dra. Mariela Andrade combina técnica quirúrgica avanzada con una atención cálida y personalizada.
              </p>
              
              {/* Updated background to bg-slate-100 for better contrast */}
              <div className="bg-slate-100 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-medical-900 mb-4 flex items-center gap-2 tracking-wide">
                  <Stethoscope className="text-accent-500" /> Formación Académica
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-medical-500 shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800">Médico Cirujano</p>
                      <p className="text-sm text-slate-500">Universidad Central del Ecuador</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-medical-500 shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800">Especialista en Cirugía General y Laparoscópica</p>
                      <p className="text-sm text-slate-500">Universidad Católica del Ecuador</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link to="/procedimientos" className="text-medical-800 font-semibold hover:text-medical-600 inline-flex items-center gap-2 group tracking-wide">
                  Conoce mis especialidades 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Highlights */}
      <section className="py-20 bg-medical-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="¿Por qué elegirnos?" 
            subtitle="Su salud está en manos de una profesional capacitada con los más altos estándares éticos y científicos."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: ShieldCheck,
                title: "Seguridad y Confianza",
                desc: "Protocolos estrictos de seguridad en cada procedimiento para garantizar su tranquilidad."
              },
              {
                icon: Activity,
                title: "Tecnología Avanzada",
                desc: "Uso de técnicas laparoscópicas mínimamente invasivas para una recuperación más rápida."
              },
              {
                icon: UserCheck,
                title: "Atención Personalizada",
                desc: "Seguimiento cercano desde el diagnóstico hasta su total recuperación post-operatoria."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom - Reduced padding (py-12) but kept bg-medical-900 (lighter than footer) */}
      <section className="py-12 bg-medical-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">Comience su camino hacia una vida saludable</h2>
          <p className="text-medical-100 text-lg mb-8 font-light">
            Agende su cita hoy mismo para una evaluación completa. Estamos listos para atenderle.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-medical-900 px-8 py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-colors tracking-wide"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;