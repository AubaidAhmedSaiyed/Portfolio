import { siteMeta } from '../data/siteData';

export default function Hero() {
  return (
    <section id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex-1 w-full order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 font-sans text-[11px] font-bold uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Internships
            </div>
            
            <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-themeMuted flex items-center gap-3">
              <span>{siteMeta.role}</span>
              <span className="w-1.5 h-1.5 bg-themeMuted rounded-full"></span>
              <span>2028</span>
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] text-themeInk leading-[1.05] mb-8">
            Some problems<br/>
            are worth sitting with.
          </h1>
          
          <div className="inline-block bg-themeCard border border-themeBorder px-5 py-2.5 rounded-lg font-sans text-[12px] font-bold tracking-[0.15em] uppercase text-themeAccent mb-8 shadow-sm">
            Understanding them is where building begins.
          </div>
          
          <p className="font-sans text-[17px] md:text-[18px] text-themeMuted leading-relaxed max-w-[540px] mb-10 font-medium">
            I am a B.Tech IT student graduating in 2028, exploring how technology can solve <span className="text-themeInk font-semibold">real-world problems</span> through user-centric solutions with a growing focus on <span className="text-themeInk font-semibold">web engineering</span>, <span className="text-themeInk font-semibold">backend infrastructure</span>, <span className="text-themeInk font-semibold">AI/ML</span>, and systems that scale without losing their human purpose.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="flex items-center gap-3 bg-themeInk text-themeBg px-6 py-3.5 rounded-lg font-sans text-[14px] font-bold hover:bg-themeAccent transition-colors">
              Selected Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-themeSurface border border-themeBorder text-themeInk px-6 py-3.5 rounded-lg font-sans text-[14px] font-bold shadow-sm hover:border-themeMuted transition-colors">
              Résumé PDF
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full order-1 lg:order-2 flex justify-center lg:justify-end">
           <div className="w-full max-w-[540px] aspect-square rounded-[2rem] overflow-hidden shadow-sm border border-themeBorder bg-themeCard">
             <img 
               src={siteMeta.profileImage} 
               alt={siteMeta.name} 
               className="w-full h-full object-cover filter contrast-[0.95]"
               onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop' }} 
             />
           </div>
        </div>

      </div>
    </section>
  );
}
