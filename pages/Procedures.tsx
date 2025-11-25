import React from 'react';
import { Link } from 'react-router-dom';
import { PROCEDURES_DATA } from '../constants';
import SectionTitle from '../components/SectionTitle';

const Procedures: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-medical-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Procedimientos Quirúrgicos</h1>
          <p className="text-medical-100 max-w-2xl mx-auto text-lg">
            Soluciones integrales con la más alta tecnología y seguridad para el paciente.
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Realizamos una amplia gama de procedimientos quirúrgicos enfocados en la mínima invasión." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCEDURES_DATA.map((proc) => (
            <Link 
              to={`/procedimientos/${proc.id}`}
              key={proc.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-medical-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mb-6 text-medical-700 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                  <proc.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-medical-700 transition-colors">
                  {proc.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {proc.shortDescription}
                </p>
              </div>
              <div className="px-8 pb-8 mt-auto">
                 <span className="text-accent-600 font-semibold text-sm group-hover:underline">Ver detalles &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-8 border-accent-500 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">¿Tiene dudas sobre un procedimiento?</h3>
            <p className="text-slate-600">
              Cada paciente es único. Agende una cita para evaluar su caso específico.
            </p>
          </div>
          <Link 
            to="/contacto" 
            className="whitespace-nowrap bg-medical-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-medical-800 transition-colors shadow-md"
          >
            Consultar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Procedures;