import { siteMeta } from '../data/siteData';

export default function Hero() {
  return (
    <section id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex-1 w-full order-2 lg:order-1 flex flex-col items-start">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 font-sans text-[11px] font-bold uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Internships
            </div>
          </div>
          
          {/* Blockquote Style Heading */}
          <div className="border-l-[4px] border-themeInk pl-6 md:pl-8 mb-10 py-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-themeInk leading-[1.1] tracking-tight mb-4">
              Some problems are worth sitting with.
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-themeMuted leading-[1.1] italic tracking-tight">
              Understanding them is where building begins.
            </h2>
          </div>
          
          {/* Name Label (No Dashes) */}
          <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-themeMuted mb-6">
            AUBAID AHMED SAIYED
          </div>
          
          <p className="font-sans text-[16px] md:text-[17px] text-themeMuted leading-relaxed max-w-[580px] mb-10 font-medium">
            Full-stack developer focused on <span className="text-themeInk font-bold">web engineering</span>, <span className="text-themeInk font-bold">backend infrastructure</span>, and <span className="text-themeInk font-bold">AI/ML</span> — building systems that scale without losing their human purpose.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="flex items-center gap-3 bg-themeInk text-themeBg px-5 py-3 rounded-lg font-sans text-[13px] font-bold hover:bg-themeAccent transition-colors">
              Selected Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-themeSurface border border-themeBorder text-themeInk px-5 py-3 rounded-lg font-sans text-[13px] font-bold shadow-sm hover:border-themeMuted transition-colors">
              Resume PDF
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
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
