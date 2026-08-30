import { siteMeta } from '../data/siteData';

export default function HeroAbout() {
  return (
    <section id="about" className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FDFBF7] text-[#1a1c1a] p-8 md:p-16 lg:p-24 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Typography */}
        <div className="flex-1 space-y-8">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#5a605a]">
            {siteMeta.role} · Graduating 2028
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#0f110f]">
            Building systems,<br/>
            <i className="text-[#6d7a6b] font-light">not shortcuts.</i>
          </h1>
          
          <div className="space-y-4 pt-4">
            <p className="font-sans text-lg md:text-xl leading-relaxed max-w-xl text-[#3a3c3a]">
              {siteMeta.intro}
            </p>
            <p className="font-sans text-[15px] leading-relaxed max-w-lg text-[#5a605a] border-l-2 border-[#6d7a6b] pl-4 italic">
              "Systems should be efficient and scalable — but the point of building them is still the people on the other side."
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <a href="#work" className="bg-[#1a1c1a] text-[#FDFBF7] px-8 py-4 rounded-full font-sans text-sm font-semibold hover:bg-black transition-colors">
              Selected Work
            </a>
            <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="border border-[#1a1c1a]/20 text-[#1a1c1a] px-8 py-4 rounded-full font-sans text-sm font-semibold hover:bg-[#1a1c1a]/5 transition-colors">
              Résumé PDF
            </a>
          </div>
        </div>

        {/* Right Photo */}
        <div className="w-full lg:w-[45%] max-w-md mx-auto relative group">
          <div className="absolute inset-0 bg-[#6d7a6b]/10 blur-3xl rounded-full transform group-hover:scale-105 transition-transform duration-700"></div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 transform group-hover:-translate-y-2 transition-transform duration-700">
            <img 
              src={siteMeta.profileImage} 
              alt={siteMeta.name} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop' }} 
            />
          </div>
          
          {/* Decorative floating element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-black/5 backdrop-blur-md hidden md:block">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6d7a6b] mb-1">Status</div>
            <div className="font-serif italic text-lg text-[#1a1c1a]">Open to internships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
