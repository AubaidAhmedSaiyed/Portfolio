import { siteMeta } from '../data/siteData';

export default function JourneyContact() {
  return (
    <section id="contact" className="pt-12 pb-16">
      <div className="bg-white rounded-[2rem] p-10 md:p-16 flex flex-col relative overflow-hidden shadow-lg border border-[#0F172A]/10 min-h-[460px]">
        
        {/* Layered SVG Blue Waves Matching the Attached UI */}
        <div className="absolute bottom-0 left-0 w-full h-[70%] z-0 pointer-events-none opacity-90">
          {/* Back Wave (Lightest) */}
          <svg className="absolute bottom-0 left-0 w-full h-full object-cover text-blue-100" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fillOpacity="0.8" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,176C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          {/* Middle Wave */}
          <svg className="absolute bottom-0 left-0 w-full h-[85%] object-cover text-blue-200" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fillOpacity="0.7" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          {/* Front Wave (Darkest) */}
          <svg className="absolute bottom-0 left-0 w-full h-[70%] object-cover text-[#93C5FD]" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fillOpacity="0.8" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 w-full flex flex-col pt-24 pb-4 min-h-[50vh] justify-between">
          
          {/* Main CTA */}
          <div className="flex flex-col items-center text-center px-4 mb-20 max-w-4xl mx-auto">
            <div className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-6 bg-white/40 px-4 py-2 rounded-full border border-slate-200/40 shadow-sm backdrop-blur-sm">
              Ready to collaborate?
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05] mb-6 drop-shadow-sm tracking-tight">
              Let's build something<br />meaningful together.
            </h2>
            <p className="font-sans text-[14px] md:text-[15px] text-slate-600 max-w-xl mx-auto mb-10 drop-shadow-sm font-semibold">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${siteMeta.email}`} className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-slate-900 px-5 py-3 rounded-xl font-sans text-[13px] font-bold shadow-sm hover:border-blue-400 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Email
              </a>
              <a href={siteMeta.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-slate-900 px-5 py-3 rounded-xl font-sans text-[13px] font-bold shadow-sm hover:border-blue-400 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
              <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-slate-900 px-5 py-3 rounded-xl font-sans text-[13px] font-bold shadow-sm hover:border-blue-400 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a href={siteMeta.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-slate-900 px-5 py-3 rounded-xl font-sans text-[13px] font-bold shadow-sm hover:border-blue-400 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                X / Twitter
              </a>
              <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl font-sans text-[13px] font-bold shadow-sm hover:bg-slate-800 transition-colors">
                Resume PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 pt-8 border-t border-slate-900/10 mt-auto">
            <div className="flex items-center gap-2 font-serif text-[18px] font-bold text-slate-900">
              {siteMeta.name} <span className="font-sans text-[12px] text-slate-500 ml-2 font-normal">© {new Date().getFullYear()}</span>
            </div>
            <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Built with React & Tailwind
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
