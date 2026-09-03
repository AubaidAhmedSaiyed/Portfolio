import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full max-w-[90rem] mx-auto px-4 md:px-8 py-12 md:py-24">
      
      {/* ── MASSIVE CLOUD/ENVIRONMENT BLOCK - DARK MODE ── */}
      <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#0A0A0A] py-24 md:py-48 px-6 flex flex-col items-center text-center shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] border border-white/5">
        
        {/* Soft Background Image spanning the entire block */}
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2400&auto=format&fit=crop" 
          alt="Dark Clouds" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none grayscale"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/90 pointer-events-none z-0"></div>

        {/* ── PROBLEM SOLVING / ARCHITECTURE BACKGROUND GRAPHIC ── */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.25] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="transform scale-150 md:scale-100">
            <rect x="200" y="200" width="800" height="400" rx="40" stroke="#EDEDED" strokeWidth="2" strokeDasharray="10 10"/>
            <text x="230" y="240" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace" letterSpacing="0.2em">SYSTEM_ARCHITECTURE_V2</text>
            
            <circle cx="200" cy="400" r="10" fill="#EDEDED" />
            <text x="80" y="405" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">CLIENT_REQ</text>
            
            <circle cx="1000" cy="400" r="10" fill="#EDEDED" />
            <text x="1030" y="405" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">DB_WRITE</text>
            
            <path d="M 200 400 L 400 400 L 400 250 L 600 250" stroke="#EDEDED" strokeWidth="2" />
            <text x="250" y="390" fontSize="11" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">API_GATEWAY</text>
            
            <path d="M 600 250 L 800 250 L 800 400 L 1000 400" stroke="#EDEDED" strokeWidth="2" />
            <text x="650" y="240" fontSize="11" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">ML_INFERENCE_ENGINE</text>
            
            <path d="M 200 400 L 400 400 L 400 550 L 600 550" stroke="#EDEDED" strokeWidth="2" />
            <path d="M 600 550 L 800 550 L 800 400 L 1000 400" stroke="#EDEDED" strokeWidth="2" />
            <text x="650" y="540" fontSize="11" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">DATA_LAKE_SYNC</text>
            
            <rect x="550" y="200" width="100" height="100" rx="20" stroke="#EDEDED" strokeWidth="2"/>
            <rect x="550" y="500" width="100" height="100" rx="20" stroke="#EDEDED" strokeWidth="2"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[12px] uppercase tracking-[0.15em] text-[#A0A0A0] mb-6"
          >
            About Me
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.5rem] md:text-[4rem] text-[#EDEDED] leading-[1.1] tracking-tight mb-8"
          >
            Curious by nature. <br className="hidden md:block"/>
            <span className="italic text-[#CCC]">Consistent by choice.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[16px] md:text-[20px] text-[#A0A0A0] leading-relaxed max-w-2xl mb-16 font-medium"
          >
            I am a B.Tech IT student graduating in 2028, exploring how technology can solve real-world problems through user-centric solutions with a growing focus on web engineering, backend infrastructure, AI/ML, and systems that scale without losing their human purpose.
          </motion.p>

          {/* User's Real Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[340px] md:w-[320px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="/photo.jpg" 
              alt="Aubaid Ahmed" 
              className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
