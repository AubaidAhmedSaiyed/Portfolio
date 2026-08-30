import { experienceItems } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-12 border-b border-themeBorder relative overflow-hidden">
      
      <div className="relative z-10 flex justify-between items-baseline mb-16">
        <span className="font-serif text-4xl md:text-5xl font-bold text-themeInk tracking-tight">Experience & Growth</span>
        <span className="font-mono text-[11px] text-themeMuted">03</span>
      </div>
      
      <div className="relative z-10 flex flex-col gap-8">
        {experienceItems.map((exp, index) => (
          <div key={index} className="bg-themeSurface border border-themeBorder rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8">
            
            {/* Left Column (Meta) */}
            <div className="md:w-64 flex-shrink-0 flex flex-col items-start">
              <div className="font-sans text-[12px] font-bold tracking-[0.15em] uppercase text-themeAccent mb-3">
                {exp.timeframe}
              </div>
              {exp.label && (
                <span className="bg-themeBg border border-themeBorder text-themeInk px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider mb-4">
                  {exp.label}
                </span>
              )}
            </div>
            
            {/* Right Column (Content) */}
            <div className="flex-1 flex flex-col">
              <h3 className="font-serif text-3xl font-bold text-themeInk mb-2 leading-tight">
                {exp.role}
              </h3>
              <div className="font-sans text-[16px] font-bold text-themeMuted mb-6">
                @ {exp.company}
              </div>
              
              <ul className="space-y-4 mb-8">
                {exp.highlights.filter(Boolean).map((highlight, i) => (
                  <li key={i} className="flex gap-4 font-sans text-[16px] font-medium text-themeInk leading-relaxed">
                    <span className="text-themeAccent mt-1 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-themeBorder/50">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-themeMuted font-sans text-[12px] font-semibold bg-themeBg px-3 py-1 rounded-full border border-themeBorder">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
