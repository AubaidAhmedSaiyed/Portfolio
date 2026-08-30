import { siteMeta } from '../data/siteData';

const journeyItems = [
  {
    year: '2025',
    title: '1st Place, GCET Hackathon',
    desc: 'Led a team to design a scalable solution for civic complaint reporting and municipal transparency.'
  },
  {
    year: '2025',
    title: 'Hacktoberfest Contributor',
    desc: 'Debugged async state issues in React, improved UI responsiveness, built data-extraction scripts.'
  },
  {
    year: '2026',
    title: 'Social Summer of Code',
    desc: 'Built a file ingestion system and an OCR → Vision → Tagging → Indexing worker pipeline in TypeScript.'
  },
  {
    year: '2025–Now',
    title: 'Personal & Academic Projects',
    desc: 'RESTful APIs, role-based auth, and Python ML services integrated into Node.js backends.'
  }
];

export default function JourneyWarm() {
  return (
    <section id="journey" className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A] text-[#451A03] p-8 md:p-16 lg:p-24 shadow-2xl">
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Journey Timeline */}
        <div className="flex-1">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#D97706] mb-6">
            04 — The Journey
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16 leading-tight">
            Happiness is a practice.<br/>
            <i className="text-[#92400E]">And so is engineering.</i>
          </h2>
          
          <div className="space-y-12">
            {journeyItems.map((item, i) => (
              <div key={i} className="relative pl-8 border-l border-[#F59E0B]/30">
                <div className="absolute w-3 h-3 bg-[#F59E0B] rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#FEF3C7]"></div>
                <div className="font-mono text-xs text-[#D97706] mb-2">{item.year}</div>
                <h4 className="font-display text-lg font-bold text-[#78350F] mb-2">{item.title}</h4>
                <p className="font-sans text-[15px] text-[#92400E] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Card */}
        <div className="w-full lg:w-[40%] flex flex-col justify-end">
          <div className="bg-white/50 backdrop-blur-xl border border-white rounded-[2rem] p-10 shadow-[0_20px_40px_rgba(217,119,6,0.1)]">
            <h3 className="font-display text-2xl font-bold text-[#78350F] mb-4">
              Open to backend & AI internships. Let's talk systems.
            </h3>
            <p className="font-sans text-[15px] text-[#92400E] mb-10 leading-relaxed">
              Currently seeking new opportunities to build scalable products. Whether you have a question or a project idea, my inbox is always open.
            </p>
            
            <a href={`mailto:${siteMeta.email}`} className="inline-block w-full text-center bg-[#78350F] text-white px-8 py-4 rounded-full font-sans text-[15px] font-semibold hover:bg-[#451A03] transition-colors mb-4 shadow-lg shadow-[#78350F]/20">
              {siteMeta.email}
            </a>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <a href={siteMeta.github} target="_blank" rel="noreferrer" className="flex-1 text-center bg-white border border-[#FDE68A] text-[#92400E] px-4 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-[#FFFBEB] transition-colors">
                GitHub
              </a>
              <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="flex-1 text-center bg-white border border-[#FDE68A] text-[#92400E] px-4 py-3 rounded-xl font-sans text-sm font-semibold hover:bg-[#FFFBEB] transition-colors">
                LinkedIn
              </a>
            </div>
            
            <div className="mt-12 pt-6 border-t border-[#FDE68A] flex justify-between items-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#D97706]">
                © {new Date().getFullYear()} {siteMeta.name}
              </div>
              <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-[#D97706] hover:text-[#78350F] transition-colors border-b border-[#D97706]">
                Résumé
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
