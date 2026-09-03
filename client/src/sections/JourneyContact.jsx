import { siteMeta } from '../data/siteData';
import { motion } from 'framer-motion';

export default function JourneyContact() {
  return (
    <section id="contact" className="relative w-full py-32 md:py-48 px-6 overflow-hidden bg-[#050505]">
      
      {/* ── SOFT DARK SKY BACKGROUND ── */}
      <div className="absolute inset-0 top-0 left-0 w-full h-full -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#050505] to-[#050505]"></div>
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2400&auto=format&fit=crop" 
          alt="Dark sky atmosphere" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.3] mix-blend-screen grayscale"
          style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)' }}
        />
      </div>

      {/* ── BACKGROUND UI: API CONNECTION / NETWORKING - DARK MODE ── */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-[0.25]">
        <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" className="transform scale-150 md:scale-100">
          <rect x="100" y="250" width="800" height="100" rx="20" stroke="#EDEDED" strokeWidth="2" strokeDasharray="4 4"/>
          <path d="M 500 100 L 500 250" stroke="#EDEDED" strokeWidth="3" />
          <path d="M 480 230 L 500 250 L 520 230" stroke="#EDEDED" strokeWidth="3" fill="none"/>
          
          <circle cx="500" cy="100" r="10" fill="#EDEDED" />
          <text x="520" y="105" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">CLIENT_CONNECTION</text>
          
          <text x="120" y="305" fontSize="24" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">POST /api/connect HTTP/2.0</text>
          
          <path d="M 500 350 L 500 500" stroke="#EDEDED" strokeWidth="3" />
          <path d="M 480 480 L 500 500 L 520 480" stroke="#EDEDED" strokeWidth="3" fill="none"/>
          
          <circle cx="500" cy="500" r="10" fill="#EDEDED" />
          <text x="520" y="505" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">SERVER_ACKNOWLEDGED // 200 OK</text>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center bg-[#111]/80 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-sans text-[12px] font-bold text-[#A0A0A0] uppercase tracking-[0.1em] mb-4">
            Initiate
          </div>
          <h2 className="font-serif text-[3.5rem] md:text-[5.5rem] text-[#EDEDED] leading-[1.05] tracking-tight mb-16">
            Let's build <br className="hidden md:block"/>
            <span className="italic text-[#CCC]">something real.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center w-full"
        >
          <a href={`mailto:${siteMeta.email}`} className="group flex flex-col items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/40 transition-colors w-full md:w-auto shadow-lg">
            <span className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-[#A0A0A0] mb-2 group-hover:text-white transition-colors">Email</span>
            <span className="font-sans text-[16px] font-medium text-[#EDEDED]">{siteMeta.email}</span>
          </a>
          
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="group flex flex-col items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/40 transition-colors w-full md:w-auto shadow-lg">
            <span className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-[#A0A0A0] mb-2 group-hover:text-white transition-colors">LinkedIn</span>
            <span className="font-sans text-[16px] font-medium text-[#EDEDED]">/in/aubaid</span>
          </a>
          
          <a href={siteMeta.github} target="_blank" rel="noreferrer" className="group flex flex-col items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/40 transition-colors w-full md:w-auto shadow-lg">
            <span className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-[#A0A0A0] mb-2 group-hover:text-white transition-colors">GitHub</span>
            <span className="font-sans text-[16px] font-medium text-[#EDEDED]">@AubaidAhmed</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
