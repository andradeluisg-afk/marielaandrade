import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Calendar, ArrowRight, Activity } from 'lucide-react';
import { PROCEDURES_DATA } from '../constants';

const ProcedureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const procedure = PROCEDURES_DATA.find(p => p.id === id);

  if (!procedure) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Procedimiento no encontrado</h2>
        <Link to="/procedimientos" className="text-medical-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Volver a Procedimientos
        </Link>
      </div>
    );
  }

  const Icon = procedure.icon;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Visual Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-medical-900/80 z-10"></div>
        <img 
          src={procedure.image} 
          alt={procedure.title}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in-up"
        />
        <div className="relative z-20 h-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Link to="/procedimientos" className="text-white/80 hover:text-white inline-flex items-center gap-2 mb-6 transition-colors font-medium hover:-translate-x-1 duration-300">
            <ArrowLeft size={20} /> Volver a Procedimientos
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent-500 p-3 rounded-full shadow-lg animate-pulse">
              <Icon size={32} className="text-white" />
            </div>
            <span className="text-accent-300 font-bold tracking-widest uppercase text-sm">Procedimiento Especializado</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white shadow-sm leading-tight max-w-4xl">
            {procedure.title}
          </h1>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Activity className="text-accent-500 animate-pulse" />
                ¿En qué consiste?
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                {procedure.fullDescription}
              </p>
            </div>

            {/* Visual Recovery Timeline - Dynamic & Animated */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
               <h2 className="text-2xl font-bold text-slate-800 mb-8">Proceso de Recuperación</h2>
               <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-1 bg-medical-100"></div>
                  
                  <div className="space-y-8">
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-1 w-9 h-9 bg-medical-500 rounded-full flex items-center justify-center border-4 border-white shadow-sm text-white font-bold text-xs z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-medical-600">1</div>
                        <h4 className="font-bold text-medical-900 text-lg group-hover:text-medical-600 transition-colors">Primeras 24 Horas</h4>
                        <p className="text-slate-600">Observación y manejo del dolor. Inicio de dieta líquida y movilización temprana.</p>
                     </div>
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-1 w-9 h-9 bg-medical-300 rounded-full flex items-center justify-center border-4 border-white shadow-sm text-white font-bold text-xs z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-medical-400">2</div>
                        <h4 className="font-bold text-medical-900 text-lg group-hover:text-medical-600 transition-colors">Primera Semana</h4>
                        <p className="text-slate-600">Cuidados de heridas en casa. Actividad ligera permitida. Dieta blanda progresiva.</p>
                     </div>
                     <div className="relative pl-12 group">
                        <div className="absolute left-0 top-1 w-9 h-9 bg-accent-500 rounded-full flex items-center justify-center border-4 border-white shadow-sm text-white font-bold text-xs z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                           <CheckCircle size={16} />
                        </div>
                        <h4 className="font-bold text-medical-900 text-lg group-hover:text-accent-600 transition-colors">Recuperación Total ({procedure.recoveryTime})</h4>
                        <p className="text-slate-600">Retorno a actividades normales, ejercicio y vida laboral sin restricciones.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Animated Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Beneficios del Procedimiento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {procedure.benefits.map((benefit: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-accent-200 transition-all duration-300 animate-fade-in-up group cursor-default hover:-translate-y-1"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                  >
                    <div className="mt-1 bg-accent-50 text-accent-600 p-2 rounded-full shrink-0 transition-all duration-500 group-hover:bg-accent-500 group-hover:text-white group-hover:rotate-[360deg]">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-slate-700 font-medium leading-snug group-hover:text-medical-900 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-32 space-y-6">
                
                {/* Quick Info Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-accent-500 hover:shadow-xl transition-shadow duration-300">
                   <h3 className="text-lg font-bold text-slate-800 mb-4">Resumen</h3>
                   <ul className="space-y-4 text-sm">
                      <li className="flex items-center justify-between border-b border-slate-50 pb-3 group">
                         <span className="text-slate-500 flex items-center gap-2 group-hover:text-accent-600 transition-colors"><Clock size={16} /> Duración aprox.</span>
                         <span className="font-semibold text-slate-800">1 - 2 Horas</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-slate-50 pb-3 group">
                         <span className="text-slate-500 flex items-center gap-2 group-hover:text-accent-600 transition-colors"><Activity size={16} /> Anestesia</span>
                         <span className="font-semibold text-slate-800">General</span>
                      </li>
                      <li className="flex items-center justify-between group">
                         <span className="text-slate-500 flex items-center gap-2 group-hover:text-accent-600 transition-colors"><Calendar size={16} /> Hospitalización</span>
                         <span className="font-semibold text-slate-800">Ambulatoria / 1 día</span>
                      </li>
                   </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-medical-900 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                   
                   <h3 className="text-xl font-bold mb-3 relative z-10">¿Es candidato para esta cirugía?</h3>
                   <p className="text-medical-100 text-sm mb-6 leading-relaxed relative z-10">
                      La Dra. Mariela Andrade evaluará su caso para ofrecerle la mejor solución quirúrgica.
                   </p>
                   <Link 
                      to="/contacto" 
                      className="inline-flex items-center justify-center gap-2 w-full bg-accent-600 text-white font-bold py-3.5 rounded-lg hover:bg-accent-700 transition-all shadow-lg hover:shadow-accent-500/30 relative z-10 hover:scale-105"
                   >
                      Agendar Valoración <ArrowRight size={18} />
                   </Link>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProcedureDetail;