import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4 relative inline-block tracking-tight">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-500 rounded-full opacity-30"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;