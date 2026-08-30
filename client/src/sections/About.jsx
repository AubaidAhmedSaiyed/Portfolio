import { siteMeta } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="pt-12 pb-16">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-16">
        <div className="flex-1">
          <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-themeMuted mb-6">
            About Me
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-themeInk leading-[1.1] max-w-lg">
            A software engineering enthusiast, still early, building on purpose anyway.
          </h2>
          {/* Tech/Command decorative element */}
          <div className="mt-8 text-themeMuted opacity-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path></svg>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="font-sans text-[15px] md:text-[16px] font-medium text-themeMuted leading-relaxed space-y-6 max-w-lg pt-8 md:pt-0">
            <p>
              I'm deeply interested in exploring how technology can solve real-world problems through <span className="text-themeInk font-semibold">user-centric solutions</span>, and I aspire to build products that create meaningful impact.
            </p>
            <p>
              My journey includes growing my skills in web engineering and problem-solving with DSA. I'm particularly fascinated by <span className="text-themeInk font-semibold">backend infrastructure systems</span> and AI/ML.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Currently Exploring */}
        <div className="bg-themeCard rounded-2xl p-8 flex flex-col border border-themeBorder/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-themeAccent text-white flex items-center justify-center shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <span className="font-serif text-[16px] md:text-[17px] text-themeInk font-semibold">Currently Exploring</span>
          </div>
          <ul className="space-y-4 flex-1">
            {siteMeta.exploring.map(item => (
              <li key={item} className="flex items-center gap-3 font-sans text-[13px] md:text-[14px] font-semibold text-themeInk">
                <span className="w-1.5 h-1.5 rounded-full bg-themeAccent"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Core Strengths */}
        <div className="bg-themeSurface border border-themeBorder rounded-2xl p-8 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-themeAccent text-white flex items-center justify-center shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span className="font-serif text-[16px] md:text-[17px] text-themeInk font-semibold">Core Strengths</span>
          </div>
          <ul className="space-y-6 flex-1">
            <li className="flex gap-4 font-sans text-[13px] md:text-[14px] font-semibold text-themeInk">
              <span className="text-themeMuted font-mono text-[11px] mt-0.5">01</span>
              <span>Reliable backend systems built for growth and speed.</span>
            </li>
            <li className="flex gap-4 font-sans text-[13px] md:text-[14px] font-semibold text-themeInk">
              <span className="text-themeMuted font-mono text-[11px] mt-0.5">02</span>
              <span>Practical AI integration, used where it adds real value.</span>
            </li>
            <li className="flex gap-4 font-sans text-[13px] md:text-[14px] font-semibold text-themeInk">
              <span className="text-themeMuted font-mono text-[11px] mt-0.5">03</span>
              <span>Clear system design and structured problem-solving.</span>
            </li>
          </ul>
        </div>

        {/* Card 3: Working Style */}
        <div className="bg-themeSurface border border-themeBorder rounded-2xl p-8 flex flex-col shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-themeAccent text-white flex items-center justify-center shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <span className="font-serif text-[16px] md:text-[17px] text-themeInk font-semibold">Working Style</span>
          </div>
          <ul className="space-y-4 flex-1">
            {['Collaborative', 'Data-driven', 'Detail-oriented', 'Analytical'].map(item => (
              <li key={item} className="flex items-center gap-3 font-sans text-[13px] md:text-[14px] font-semibold text-themeInk">
                <span className="w-1.5 h-1.5 rounded-full bg-themeAccent"></span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 4: Always Learning */}
        <div className="bg-gradient-to-br from-themeCard to-themeBg rounded-2xl p-8 flex flex-col relative overflow-hidden border border-themeBorder/50">
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-8 h-8 rounded-full bg-themeSurface border border-themeBorder flex items-center justify-center text-themeAccent shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            </div>
            <span className="font-serif text-[16px] md:text-[17px] text-themeInk font-semibold">Always Learning</span>
          </div>
          <div className="font-sans text-[14px] md:text-[15px] font-semibold text-themeInk leading-relaxed relative z-10">
            Curious by nature.<br/>Consistent by choice.<br/>Building with purpose.
          </div>
          {/* Decorative tech/product grid logic */}
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #334155 0%, transparent 70%)' }}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        </div>

      </div>
    </section>
  );
}
