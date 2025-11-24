import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { NavItem, SocialLink } from './types';

export const DOCTOR_NAME = "Dra. Mariela Andrade Fierro";
export const DOCTOR_SHORT_NAME = "Dra. Mariela Andrade F.";
export const SPECIALTY = "Cirujana General y Laparoscópica";
export const PHONE_NUMBER = "+593 987 100 128";
export const EMAIL_ADDRESS = "contacto@dramarielaandrade.com";
export const ADDRESS = "Torre Médica Vitalis, Consultorio 402, Quito, Ecuador";

// IMÁGENES DEL PROYECTO
// Aquí centralizamos todas las imágenes. Para usar la foto real de la Dra., 
// reemplaza la URL de 'DOCTOR_PROFILE' con la URL de tu imagen alojada 
// o la ruta local si estás en un entorno de desarrollo local.
export const IMAGES = {
  HERO_BG: "https://i.ibb.co/v6BvcjXn/471684766-18487178419032633-8782377913534470010-n.jpg", // Imagen solicitada por usuario
  DOCTOR_PROFILE: "https://i.ibb.co/RTJX8Y27/dramariela.png",
  // !IMPORTANTE: Reemplaza esta URL con la imagen del logo que subiste
  LOGO: "https://i.ibb.co/TNpNX0G/Logo-Nenita.png", 
  BLOG: {
    LAPAROSCOPY: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    GALLBLADDER: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    PREP: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
// Since this is a .ts file, we must use React.createElement instead of JSX
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