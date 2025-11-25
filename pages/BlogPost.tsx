import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Linkedin, Twitter, AlertCircle, Bookmark, Activity } from 'lucide-react';
import { BLOG_DATA, DOCTOR_SHORT_NAME, SPECIALTY, IMAGES } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_DATA.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Artículo no encontrado</h2>
        <Link to="/blog" className="text-medical-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Volver al Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Editorial Hero */}
      <div className="w-full h-[450px] relative overflow-hidden bg-medical-900 group">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-950 via-medical-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="max-w-screen-2xl mx-auto">
            <Link to="/blog" className="text-white/80 hover:text-white inline-flex items-center gap-2 mb-6 transition-colors text-sm font-bold tracking-widest uppercase hover:-translate-x-1 duration-300">
              <ArrowLeft size={16} /> Blog Médico
            </Link>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl drop-shadow-lg">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
              <span className="bg-accent-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider animate-pulse">
                 {post.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-accent-400" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={18} className="text-accent-400" /> Por {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100">
              <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                {/* Intro Excerpt */}
                <p className="lead text-2xl text-medical-900 font-serif leading-relaxed mb-10 pl-6 border-l-4 border-accent-500 italic bg-slate-50 py-4 pr-4 rounded-r-lg">
                  "{post.excerpt}"
                </p>
                
                {/* Dynamic Content Rendering: Mixing Text with Visuals */}
                {post.content.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    
                    {/* Visual Break after First Paragraph - Uses SPECIFIC post image if available */}
                    {index === 1 && post.contentImage && (
                      <div className="my-8 rounded-lg overflow-hidden shadow-lg h-64 md:h-80 w-full relative group">
                        <img 
                          src={post.contentImage}
                          alt="Medical detail" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent flex items-end p-6">
                           <span className="text-white font-medium flex items-center gap-2">
                              <Activity className="text-accent-400" /> Excelencia Médica
                           </span>
                        </div>
                      </div>
                    )}

                    {/* Paragraph with decorative side icon instead of drop cap */}
                    <div className="flex gap-4 mb-8 group">
                       <div className="hidden md:block mt-1 text-accent-200 group-hover:text-accent-500 transition-colors">
                          <Bookmark size={20} fill="currentColor" className="opacity-50" />
                       </div>
                       <p className="leading-8 text-lg text-justify text-slate-700">
                         {paragraph}
                       </p>
                    </div>

                    {/* "Did you know" box after Second Paragraph */}
                    {index === 2 && (
                       <div className="bg-medical-50 border border-medical-100 p-6 rounded-lg my-8 flex items-start gap-4">
                          <AlertCircle className="text-medical-600 shrink-0 mt-1 animate-bounce" size={24} />
                          <div>
                             <h4 className="font-bold text-medical-900 mb-1">Dato Importante</h4>
                             <p className="text-sm text-slate-600">La prevención y el diagnóstico temprano son las herramientas más efectivas para mantener una buena salud.</p>
                          </div>
                       </div>
                    )}

                  </React.Fragment>
                ))}
              </div>

              {/* Tags & Share */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                 <div className="flex items-center gap-3">
                   <Tag size={18} className="text-accent-500" />
                   <div className="flex gap-2">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-slate-200 cursor-pointer transition-colors">Cirugía</span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-slate-200 cursor-pointer transition-colors">Salud</span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-slate-200 cursor-pointer transition-colors">Bienestar</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-3 text-slate-400">
                    <span className="text-sm font-medium uppercase tracking-wide mr-2">Compartir:</span>
                    <button className="hover:text-blue-600 transition-colors hover:scale-110 duration-300"><Facebook size={20} /></button>
                    <button className="hover:text-blue-400 transition-colors hover:scale-110 duration-300"><Twitter size={20} /></button>
                    <button className="hover:text-blue-700 transition-colors hover:scale-110 duration-300"><Linkedin size={20} /></button>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Author & CTA) */}
          <div className="lg:col-span-4">
             
             {/* Sticky Wrapper for BOTH cards */}
             <div className="sticky top-32 space-y-8">
                
                {/* Author Card */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-24 bg-medical-900 relative">
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 group">
                          <img 
                            src={IMAGES.DOCTOR_PROFILE} 
                            alt={DOCTOR_SHORT_NAME} 
                            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                          />
                      </div>
                    </div>
                    <div className="pt-12 pb-8 px-6 text-center">
                      <h3 className="font-bold text-lg text-slate-800">{DOCTOR_SHORT_NAME}</h3>
                      <p className="text-accent-600 text-xs font-bold uppercase tracking-widest mb-4">{SPECIALTY}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          Especialista en cirugía mínimamente invasiva comprometida con la recuperación rápida y segura de sus pacientes.
                      </p>
                      <Link 
                          to="/contacto"
                          className="block w-full bg-slate-100 text-medical-900 font-semibold py-2 rounded-lg hover:bg-medical-100 transition-colors text-sm hover:text-accent-600"
                      >
                          Ver Perfil Profesional
                      </Link>
                    </div>
                </div>

                {/* Newsletter / CTA */}
                <div className="bg-accent-50 rounded-xl p-8 border border-accent-100 text-center hover:border-accent-300 transition-colors duration-300">
                    <h4 className="font-bold text-medical-900 mb-2">¿Tiene dudas médicas?</h4>
                    <p className="text-slate-600 text-sm mb-6">
                      Si experimenta síntomas relacionados, no espere más. La prevención es la mejor medicina.
                    </p>
                    <Link 
                      to="/contacto"
                      className="inline-block bg-accent-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-700 transition-colors shadow-lg shadow-accent-500/30 w-full hover:-translate-y-1 transform duration-300"
                    >
                      Agendar Cita Ahora
                    </Link>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost;