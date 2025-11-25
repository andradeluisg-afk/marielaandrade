import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Activity, Scissors, AlertCircle, HeartPulse, Search, ShieldCheck } from 'lucide-react';
import { NavItem, SocialLink, Procedure, BlogPost } from './types';

export const DOCTOR_NAME = "Dra. Mariela Andrade Fierro";
export const DOCTOR_SHORT_NAME = "Dra. Mariela Andrade F.";
export const SPECIALTY = "Cirujana General y Laparoscópica";
export const PHONE_NUMBER = "+593 987 100 128";
export const EMAIL_ADDRESS = "contacto@dramarielaandrade.com";
export const ADDRESS = "Torre Médica Vitalis, Consultorio 402, Quito, Ecuador";

// IMÁGENES DEL PROYECTO
export const IMAGES = {
  HERO_BG: "https://i.ibb.co/v6BvcjXn/471684766-18487178419032633-8782377913534470010-n.jpg", 
  DOCTOR_PROFILE: "https://i.ibb.co/RTJX8Y27/dramariela.png",
  // !IMPORTANTE: Reemplaza esta URL con la imagen del logo que subiste
  LOGO: "https://i.ibb.co/TNpNX0G/Logo-Nenita.png", 
  BLOG: {
    LAPAROSCOPY: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    GALLBLADDER: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    PREP: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  PROCEDURES: {
    // Imágenes estables de Unsplash relacionadas con medicina/cirugía
    // Updated broken link for LAPAROSCOPY
    LAPAROSCOPY: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000", 
    GALLBLADDER: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=1000",
    HERNIAS: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1000",
    APPENDIX: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000",
    BIOPSY: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000",
    // Updated broken link for TRAUMA (ER lights/Monitor)
    TRAUMA: "https://images.unsplash.com/photo-1516574187841-69301976e499?auto=format&fit=crop&q=80&w=1000" 
  },
  MAP_BG: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'INICIO', path: '/' },
  { label: 'PROCEDIMIENTOS', path: '/procedimientos' },
  { label: 'BLOG', path: '/blog' },
  { label: 'PREGUNTAS FRECUENTES', path: '/faq' },
  { label: 'CONTACTO', path: '/contacto' },
];

// Custom WhatsApp Icon Component
const WhatsAppIcon = React.forwardRef((props: any, ref: any) => {
  return React.createElement(
    'svg',
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: props.size || 24,
      height: props.size || 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: props.className,
      ref: ref,
      ...props
    },
    React.createElement('path', { d: "M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" }),
    React.createElement('path', { d: "M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" })
  );
});

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    platform: 'WhatsApp', 
    url: 'https://wa.me/593987100128?text=Hola%20Dra.%20Mariela,%20deseo%20agendar%20una%20cita', 
    icon: WhatsAppIcon as any 
  },
  { platform: 'Instagram', url: '#', icon: Instagram },
  { platform: 'Facebook', url: '#', icon: Facebook },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
];

export const CONTACT_DETAILS = [
  { icon: Phone, text: PHONE_NUMBER, label: "Llámanos" },
  { icon: Mail, text: EMAIL_ADDRESS, label: "Escríbenos" },
  { icon: MapPin, text: ADDRESS, label: "Visítanos" },
];

// --- DATOS EXPANDIDOS PARA LAS PÁGINAS DE DETALLE ---

export const PROCEDURES_DATA: Procedure[] = [
  {
    id: 'laparoscopia',
    title: 'Cirugía Laparoscópica Avanzada',
    shortDescription: 'Técnica mínimamente invasiva que utiliza pequeñas incisiones, resultando en menos dolor y una recuperación más rápida.',
    fullDescription: 'La cirugía laparoscópica es una técnica moderna que permite realizar intervenciones complejas en la cavidad abdominal sin necesidad de grandes incisiones. Utilizando un laparoscopio (una cámara delgada con luz) e instrumentos de alta precisión, la Dra. Mariela Andrade puede visualizar y tratar patologías con un trauma mínimo para el paciente.',
    icon: Activity,
    benefits: [
      'Incisiones casi invisibles (estética superior).',
      'Dolor postoperatorio mínimo.',
      'Alta hospitalaria el mismo día o al siguiente.',
      'Menor riesgo de complicaciones.',
      'Retorno rápido a la vida normal.'
    ],
    recoveryTime: '1 a 2 semanas',
    image: IMAGES.PROCEDURES.LAPAROSCOPY
  },
  {
    id: 'vesicula',
    title: 'Colecistectomía (Vesícula)',
    shortDescription: 'Extracción de la vesícula biliar por vía laparoscópica. Tratamiento definitivo para cálculos biliares.',
    fullDescription: 'La colecistectomía laparoscópica es el estándar de oro para el tratamiento de los cálculos biliares y la inflamación de la vesícula. Es uno de los procedimientos más frecuentes y seguros en cirugía general. Se extrae la vesícula enferma a través de 3 o 4 pequeñas incisiones, evitando la gran cicatriz de la cirugía abierta tradicional.',
    icon: Scissors,
    benefits: [
      'Elimina el dolor de cólicos biliares para siempre.',
      'Evita pancreatitis y complicaciones graves.',
      'Dieta normal en pocos días.',
      'Cicatrices imperceptibles.'
    ],
    recoveryTime: '5 a 7 días',
    image: IMAGES.PROCEDURES.GALLBLADDER
  },
  {
    id: 'hernias',
    title: 'Cirugía de Hernias',
    shortDescription: 'Reparación de hernias inguinales, umbilicales y de pared abdominal mediante mallas de alta tecnología.',
    fullDescription: 'Las hernias de la pared abdominal (inguinales, umbilicales, epigástricas) no se curan solas y requieren reparación quirúrgica para evitar estrangulamientos. La Dra. Andrade realiza la plastia (reparación) utilizando mallas protésicas de última generación que refuerzan la pared abdominal, reduciendo significativamente la posibilidad de que la hernia vuelva a aparecer.',
    icon: ShieldCheck,
    benefits: [
      'Mallas biocompatibles de última generación.',
      'Técnicas sin tensión para evitar dolor crónico.',
      'Recuperación de la fuerza abdominal.',
      'Riesgo mínimo de que vuelva a aparecer.'
    ],
    recoveryTime: '2 a 4 semanas',
    image: IMAGES.PROCEDURES.HERNIAS
  },
  {
    id: 'apendice',
    title: 'Apendicectomía',
    shortDescription: 'Cirugía de urgencia o programada para la extracción del apéndice inflamado mediante laparoscopia.',
    fullDescription: 'La apendicitis aguda es una de las urgencias quirúrgicas más comunes. La intervención consiste en la extirpación del apéndice cecal. Realizarla por vía laparoscópica permite una exploración completa de la cavidad abdominal, menor dolor y un riesgo mucho menor de infecciones de la herida quirúrgica, especialmente en casos complicados.',
    icon: HeartPulse,
    benefits: [
      'Intervención rápida y segura.',
      'Menos dolor que la cirugía abierta.',
      'Menor riesgo de infección.',
      'Exploración abdominal completa.'
    ],
    recoveryTime: '1 a 2 semanas',
    image: IMAGES.PROCEDURES.APPENDIX
  },
  {
    id: 'biopsias',
    title: 'Biopsias y Masas',
    shortDescription: 'Extracción de tejidos o masas de tejidos blandos para estudio patológico y tratamiento.',
    fullDescription: 'Este servicio abarca la resección de lipomas, quistes sebáceos, ganglios y otras tumoraciones de tejidos blandos. El objetivo no es solo estético o curativo, sino obtener una muestra de tejido adecuada para su análisis patológico y diagnóstico definitivo.',
    icon: Search,
    benefits: [
      'Procedimiento ambulatorio (sin hospitalización).',
      'Resultados estéticos cuidados.',
      'Diagnóstico patológico certero.',
      'Alivio inmediato de molestias.'
    ],
    recoveryTime: '2 a 5 días',
    image: IMAGES.PROCEDURES.BIOPSY
  },
  {
    id: 'trauma',
    title: 'Cirugía de Trauma',
    shortDescription: 'Atención especializada en urgencias quirúrgicas y manejo del paciente politraumatizado.',
    fullDescription: 'Atención integral y de emergencia para pacientes que han sufrido traumatismos abdominales o torácicos. La Dra. Andrade cuenta con entrenamiento especializado para la toma de decisiones críticas y procedimientos quirúrgicos de control de daños en situaciones de riesgo vital.',
    icon: AlertCircle,
    benefits: [
      'Atención inmediata de emergencia.',
      'Manejo experto de daños.',
      'Soporte vital avanzado.',
      'Coordinación con cuidados intensivos.'
    ],
    recoveryTime: 'Variable',
    image: IMAGES.PROCEDURES.TRAUMA
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: '1',
    title: 'Ventajas de la Cirugía Laparoscópica',
    excerpt: 'Descubra por qué la cirugía mínimamente invasiva es la mejor opción para reducir el tiempo de recuperación y el dolor postoperatorio.',
    imageUrl: IMAGES.BLOG.LAPAROSCOPY,
    contentImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Surgery scene
    date: '15 Oct 2023',
    author: 'Dra. Mariela Andrade',
    category: 'Educación',
    content: [
      "La cirugía laparoscópica ha revolucionado el campo de la medicina moderna. A diferencia de la cirugía abierta tradicional, que requiere grandes incisiones para acceder a la cavidad abdominal, la laparoscopia utiliza incisiones de apenas 0.5 a 1 cm.",
      "A través de estos pequeños puertos, se introducen instrumentos especializados y una cámara de alta definición que proyecta imágenes magnificadas en un monitor. Esto permite al cirujano operar con una precisión y detalle visual que a menudo supera a la visión directa.",
      "Entre las principales ventajas para el paciente destacan: significativamente menos dolor postoperatorio, menor necesidad de analgésicos, cicatrices casi imperceptibles y un retorno mucho más rápido a la vida laboral y familiar. Además, al haber menos exposición de los órganos internos al ambiente, el riesgo de infecciones y adherencias postquirúrgicas disminuye considerablemente."
    ]
  },
  {
    id: '2',
    title: 'Cálculos en la Vesícula: Síntomas y Tratamiento',
    excerpt: 'Aprenda a identificar los signos de alerta de problemas en la vesícula biliar y cuándo es el momento de acudir al cirujano.',
    imageUrl: IMAGES.BLOG.GALLBLADDER,
    contentImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000", // Lab/Anatomy
    date: '28 Sep 2023',
    author: 'Dra. Mariela Andrade',
    category: 'Salud Digestiva',
    content: [
      "La litiasis vesicular, conocida comúnmente como cálculos en la vesícula, es una patología muy frecuente. Los síntomas suelen aparecer después de comer alimentos ricos en grasas y se manifiestan como un dolor intenso en la parte superior derecha del abdomen, que puede irradiarse hacia la espalda o el hombro derecho.",
      "Otros síntomas incluyen náuseas, vómitos y distensión abdominal. Si nota coloración amarillenta en los ojos o la piel (ictericia), o si el dolor no cede, podría estar ante una complicación y debe buscar atención médica inmediata.",
      "El tratamiento definitivo es la colecistectomía laparoscópica. No existen medicamentos que disuelvan los cálculos de manera efectiva y segura a largo plazo. Postergar la cirugía puede llevar a complicaciones graves como colecistitis aguda, pancreatitis o coledocolitiasis."
    ]
  },
  {
    id: '3',
    title: 'Preparación para una Cirugía Programada',
    excerpt: 'Guía completa sobre qué hacer (y qué no hacer) antes de someterse a un procedimiento quirúrgico general.',
    imageUrl: IMAGES.BLOG.PREP,
    contentImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000", // Hospital room/Prep
    date: '10 Sep 2023',
    author: 'Dra. Mariela Andrade',
    category: 'Consejos',
    content: [
      "Una buena preparación es clave para el éxito de cualquier cirugía y para una recuperación sin contratiempos. Lo primero y más importante es el ayuno: generalmente se requiere no ingerir alimentos sólidos ni líquidos al menos 8 horas antes del procedimiento para evitar complicaciones con la anestesia.",
      "Informe a su médico sobre todos los medicamentos que toma. Algunos, como los anticoagulantes o la aspirina, deben suspenderse días antes para evitar sangrados. También es vital informar sobre alergias a medicamentos o látex.",
      "Prepare su hogar para el regreso: tenga ropa cómoda y holgada, alimentos ligeros y fáciles de digerir, y organice quién le acompañará y ayudará durante las primeras 24 a 48 horas. Mantener una actitud positiva y confiar en su equipo médico también juega un papel fundamental en su recuperación."
    ]
  }
];