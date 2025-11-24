import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    question: "¿Qué es la cirugía laparoscópica?",
    answer: "Es una técnica quirúrgica mínimamente invasiva que permite realizar intervenciones complejas a través de incisiones muy pequeñas (generalmente de 0.5 a 1.5 cm) utilizando una cámara de video (laparoscopio). Esto resulta en menos dolor, menor riesgo de infección y una recuperación más rápida."
  },
  {
    question: "¿Cuánto tiempo de recuperación necesito después de una cirugía de vesícula?",
    answer: "Al ser un procedimiento laparoscópico, la recuperación es bastante rápida. La mayoría de los pacientes regresan a casa el mismo día o al día siguiente de la cirugía. Puede retomar actividades ligeras en 3-5 días y actividad física normal en 2-3 semanas, dependiendo de cada caso."
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Sí, trabajamos con la mayoría de aseguradoras privadas nacionales y ofrecemos facilidades para el proceso de reembolso. Le recomendamos contactarnos directamente para verificar la cobertura específica de su plan."
  },
  {
    question: "¿Cómo sé si tengo una hernia?",
    answer: "Los síntomas comunes incluyen un bulto o protuberancia visible en el abdomen o ingle que puede aumentar de tamaño al estar de pie o hacer esfuerzo, dolor o molestia en la zona (especialmente al toser o levantar peso). Sin embargo, solo un examen médico puede confirmar el diagnóstico."
  },
  {
    question: "¿Necesito una referencia médica para agendar una cita?",
    answer: "No es estrictamente necesaria una referencia de otro médico. Puede agendar su cita directamente con nosotros si presenta síntomas o si desea una evaluación quirúrgica especializada."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Consistent with other pages */}
      <div className="bg-medical-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-medical-100 max-w-2xl mx-auto text-lg">
            Respuestas claras a las inquietudes más comunes de nuestros pacientes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg border transition-all duration-300 ${
                openIndex === index 
                ? 'border-accent-500 shadow-md' 
                : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-medical-800' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-accent-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Darkened background to medical-100 */}
        <div className="mt-16 bg-medical-100 rounded-2xl p-8 text-center border border-medical-200">
          <MessageCircle size={48} className="mx-auto text-medical-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">¿No encontró su respuesta?</h3>
          <p className="text-slate-600 mb-6">Estamos aquí para ayudarle con cualquier duda adicional que tenga.</p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-medical-700 font-semibold px-6 py-3 rounded-md border border-medical-200 hover:bg-medical-600 hover:text-white transition-colors shadow-sm"
          >
            Contáctenos Directamente
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;