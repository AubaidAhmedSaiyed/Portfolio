import { experienceItems } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-12 border-b border-themeBorder relative overflow-hidden">
      
      {/* Subtle Vertical Background Wave */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-40">
        <svg viewBox="0 0 800 1440" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto min-h-[1440px]">
          <path d="M200 0 C 0 300, 400 600, 200 900 C 0 1200, 200 1440, 200 1440" stroke="#93C5FD" strokeWidth="2.5" />
          <path d="M250 0 C 50 400, 450 800, 250 1440" stroke="#BFDBFE" strokeWidth="1.5" />
          <path d="M150 0 C 350 500, -50 1000, 150 1440" stroke="#60A5FA" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="relative z-10 flex justify-between items-baseline mb-20">
        <span className="font-serif text-3xl md:text-4xl font-bold text-themeInk tracking-tight">Experience & Growth</span>
        <span className="font-mono text-[10px] text-themeMuted">03</span>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="relative border-l border-themeBorder/60 ml-[80px] md:ml-[140px]">
          
          {experienceItems.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-16 mb-20 last:mb-0">
              
              {/* Timeline Dot */}
              <span className="absolute top-2 -left-[5px] w-[9px] h-[9px] rounded-full bg-themeBorder border-2 border-themeBg"></span>
              
              {/* Date (Left of timeline) */}
              <div className="absolute top-0.5 -left-[96px] md:-left-[164px] w-[70px] md:w-[100px] text-right font-sans text-[13px] md:text-[14px] font-semibold text-themeMuted">
                {exp.timeframe}
              </div>
              
              {/* Pill / Label */}
              {exp.label && (
                <div className="inline-block border border-themeBorder/80 rounded-full px-3 py-1 mb-4 shadow-sm bg-themeSurface">
                  <span className="font-sans text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-themeInk">
                    {exp.label}
                  </span>
                </div>
              )}
              
              {/* Role & Company */}
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-themeInk mb-2 leading-tight">
                {exp.role}
              </h3>
              <div className="font-sans text-[15px] md:text-[16px] font-semibold text-themeMuted mb-6">
                @ {exp.company}
              </div>
              
              {/* Highlights List */}
              <ul className="space-y-4 mb-6 max-w-[650px]">
                {exp.highlights.filter(Boolean).map((highlight, i) => (
                  <li key={i} className="flex gap-4 font-sans text-[15px] md:text-[16px] font-medium text-themeInk leading-relaxed">
                    <span className="text-themeMuted mt-1.5 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {/* Tags/Pills at bottom */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2.5">
                  {exp.tags.map(tag => (
                    <span key={tag} className="border border-themeBorder/60 bg-themeSurface rounded-full px-3 py-1 font-sans text-[11px] md:text-[12px] font-semibold text-themeMuted hover:text-themeInk hover:border-themeBorder transition-colors shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
