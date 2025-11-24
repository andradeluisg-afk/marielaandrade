import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Ventajas de la Cirugía Laparoscópica',
    excerpt: 'Descubra por qué la cirugía mínimamente invasiva es la mejor opción para reducir el tiempo de recuperación y el dolor postoperatorio.',
    date: '15 Oct 2023',
    author: 'Dra. Mariela Andrade',
    imageUrl: IMAGES.BLOG.LAPAROSCOPY,
    category: 'Educación'
  },
  {
    id: '2',
    title: 'Cálculos en la Vesícula: Síntomas y Tratamiento',
    excerpt: 'Aprenda a identificar los signos de alerta de problemas en la vesícula biliar y cuándo es el momento de acudir al cirujano.',
    date: '28 Sep 2023',
    author: 'Dra. Mariela Andrade',
    imageUrl: IMAGES.BLOG.GALLBLADDER,
    category: 'Salud Digestiva'
  },
  {
    id: '3',
    title: 'Preparación para una Cirugía Programada',
    excerpt: 'Guía completa sobre qué hacer (y qué no hacer) antes de someterse a un procedimiento quirúrgico general.',
    date: '10 Sep 2023',
    author: 'Dra. Mariela Andrade',
    imageUrl: IMAGES.BLOG.PREP,
    category: 'Consejos'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Consistent with other pages */}
      <div className="bg-medical-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Blog Médico</h1>
          <p className="text-medical-100 max-w-2xl mx-auto text-lg">
            Artículos informativos sobre salud, cirugía y bienestar.
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
              <div className="h-56 overflow-hidden bg-gray-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  {/* Darkened background to medical-100 */}
                  <span className="flex items-center gap-1 bg-medical-100 text-medical-700 px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug hover:text-medical-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <User size={12} /> {post.author}
                  </span>
                  <button className="text-accent-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Leer más <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;