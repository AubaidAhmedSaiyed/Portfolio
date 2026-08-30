import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selected]);

  return (
    <section id="work" className="pt-12 pb-16 relative">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#888E84]">
          All Projects ({projects.length})
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div 
            key={project.id} 
            onClick={() => setSelected(project)}
            className="bg-themeSurface border border-themeBorder rounded-2xl p-4 flex flex-col shadow-sm group hover:shadow-md transition-all cursor-pointer hover:-translate-y-1"
          >
            <div className="w-full aspect-[1.6/1] bg-themeCard rounded-xl mb-6 overflow-hidden relative">
               {project.preview ? (
                 <img src={project.preview} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-themeMuted text-xs font-mono">No Preview</div>
               )}
               {/* Click indicator overlay */}
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-themeSurface text-themeInk px-4 py-2 rounded-full font-sans text-xs font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   View Details
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </span>
               </div>
            </div>
            
            <div className="px-2 flex-1 flex flex-col pt-3">
              <h3 className="font-serif text-3xl font-bold text-themeInk mb-3 group-hover:text-themeAccent transition-colors">
                {project.title}
              </h3>
              
              <p className="font-sans text-[16px] md:text-[17px] text-themeMuted leading-relaxed font-semibold mb-6 flex-1 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="bg-themeBg border border-themeBorder text-themeInk px-2.5 py-1 rounded text-[12px] font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-themeBg border border-themeBorder text-themeInk px-2.5 py-1 rounded text-[12px] font-bold uppercase tracking-wider">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Detailed Popup Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-themeInk/40 backdrop-blur-sm" onClick={() => setSelected(null)}></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-themeBg rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header / Sticky Top */}
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-themeBorder bg-themeSurface">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-themeInk">
                {selected.title}
              </h2>
              <button onClick={() => setSelected(null)} className="w-12 h-12 rounded-full bg-themeBg border border-themeBorder flex items-center justify-center text-themeInk hover:bg-themeBorder transition-colors shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10 overflow-y-auto">
              
              {/* Summary */}
              <div className="mb-10">
                <h3 className="font-sans text-[12px] font-bold tracking-[0.2em] uppercase text-themeAccent mb-4">Overview</h3>
                <p className="font-sans text-[18px] md:text-[20px] text-themeInk leading-relaxed font-semibold">
                  {selected.summary || selected.description}
                </p>
              </div>

              {/* Metrics (If available) */}
              {selected.metrics && selected.metrics.length > 0 && (
                <div className="mb-10 p-6 bg-themeCard border border-themeBorder rounded-2xl flex flex-wrap gap-8 md:gap-16">
                  {selected.metrics.map(m => (
                    <div key={m.label}>
                      <div className="font-serif text-3xl font-bold text-themeInk mb-1">{m.value}</div>
                      <div className="font-sans text-[11px] font-bold tracking-[0.1em] uppercase text-themeMuted">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Features Array */}
              {selected.features && selected.features.length > 0 && (
                <div className="mb-10">
                  <h3 className="font-sans text-[12px] font-bold tracking-[0.2em] uppercase text-themeAccent mb-4">Key Features</h3>
                  <ul className="space-y-4">
                    {selected.features.map((feature, i) => (
                      <li key={i} className="flex gap-4 font-sans text-[16px] md:text-[18px] font-medium text-themeMuted leading-relaxed items-start">
                        <span className="text-themeAccent mt-1 flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-10">
                <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-themeAccent mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {selected.tech.map(t => (
                    <span key={t} className="bg-themeSurface border border-themeBorder text-themeInk px-3 py-1.5 rounded-lg font-sans text-[12px] font-bold uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              {selected.impact && (
                <div className="mb-10 p-6 border-l-4 border-themeAccent bg-themeSurface text-themeInk font-sans text-[14px] leading-relaxed italic">
                  "{selected.impact}"
                </div>
              )}
              
            </div>

            {/* Footer / Action Buttons */}
            <div className="p-6 md:p-8 border-t border-themeBorder bg-themeSurface flex flex-wrap gap-4">
              {selected.demo && selected.demo !== '#' && (
                <a href={selected.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-themeInk text-themeBg px-6 py-3 rounded-xl font-sans text-[13px] font-bold hover:bg-themeAccent transition-colors">
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
              {selected.github && (
                <a href={selected.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-themeBg border border-themeBorder text-themeInk px-6 py-3 rounded-xl font-sans text-[13px] font-bold hover:border-themeMuted transition-colors shadow-sm">
                  Source Code
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
