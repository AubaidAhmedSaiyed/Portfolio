import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="w-full max-w-[90rem] mx-auto px-4 md:px-8 py-12 md:py-24">
      
      {/* ── MASSIVE CLOUD/ENVIRONMENT BLOCK - DARK MODE ── */}
      <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#1a1513] py-24 md:py-48 px-6 flex flex-col items-center text-center shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] border border-[#2c2421]">
        
        {/* Ocean / Atmospheric Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2400&auto=format&fit=crop" 
          alt="Ocean Atmosphere" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none sepia-[0.3]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#161211]/95 via-[#161211]/40 to-[#161211]/95 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,18,17,0.85)_0%,transparent_50%)] pointer-events-none z-0"></div>

        {/* ── PROBLEM SOLVING / ARCHITECTURE BACKGROUND GRAPHIC ── */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="transform scale-150 md:scale-100">
            <rect x="200" y="200" width="800" height="400" rx="40" stroke="#e8e3e1" strokeWidth="2" strokeDasharray="10 10"/>
            <text x="230" y="240" fontSize="14" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace" letterSpacing="0.2em">SYSTEM_ARCHITECTURE_V2</text>
            
            <circle cx="200" cy="400" r="10" fill="#e8e3e1" />
            <text x="80" y="405" fontSize="12" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">CLIENT_REQ</text>
            
            <circle cx="1000" cy="400" r="10" fill="#e8e3e1" />
            <text x="1030" y="405" fontSize="12" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">DB_WRITE</text>
            
            <path d="M 200 400 L 400 400 L 400 250 L 600 250" stroke="#e8e3e1" strokeWidth="2" />
            <text x="250" y="390" fontSize="11" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">API_GATEWAY</text>
            
            <path d="M 600 250 L 800 250 L 800 400 L 1000 400" stroke="#e8e3e1" strokeWidth="2" />
            <text x="650" y="240" fontSize="11" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">ML_INFERENCE_ENGINE</text>
            
            <path d="M 200 400 L 400 400 L 400 550 L 600 550" stroke="#e8e3e1" strokeWidth="2" />
            <path d="M 600 550 L 800 550 L 800 400 L 1000 400" stroke="#e8e3e1" strokeWidth="2" />
            <text x="650" y="540" fontSize="11" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">DATA_LAKE_SYNC</text>
            
            <rect x="550" y="200" width="100" height="100" rx="20" stroke="#e8e3e1" strokeWidth="2"/>
            <rect x="550" y="500" width="100" height="100" rx="20" stroke="#e8e3e1" strokeWidth="2"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[12px] uppercase tracking-[0.15em] text-[#bdaea7] mb-6 drop-shadow-md"
          >
            About Me
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.5rem] md:text-[4rem] text-[#e8e3e1] leading-[1.1] tracking-tight mb-8 drop-shadow-lg"
          >
            Curious by nature. <br className="hidden md:block"/>
            <span className="italic text-[#d9c4ba]">Consistent by choice.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[16px] md:text-[20px] text-[#c0b3ad] leading-relaxed max-w-2xl mb-16 font-medium drop-shadow-md"
          >
            I am a B.Tech IT student graduating in 2028, exploring how technology can solve real-world problems through user-centric solutions with a growing focus on web engineering, backend infrastructure, AI/ML, and systems that scale without losing their human purpose.
          </motion.p>

          {/* User's Real Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[340px] md:w-[320px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-[#362e2a]"
          >
            <img 
              src="/photo.jpg" 
              alt="Aubaid Ahmed" 
              className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9]"
            />
          </motion.div>

        </div>
      </div>

      {/* ── BENTO GRID: WORKING STYLE & STRENGTHS ── */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        
        {/* Card 1: Currently Exploring */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-[#1e1917]/80 backdrop-blur-xl border border-[#362e2a] rounded-[2rem] p-8 flex flex-col shadow-lg hover:border-[#4d423c] transition-colors"
        >
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#9c8e87] mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2c2421]/500"></div>
            Currently Exploring
          </div>
          <ul className="space-y-4 flex-1">
            {siteMeta.exploring.map(item => (
              <li key={item} className="flex items-start gap-3 font-sans text-[14px] md:text-[15px] font-medium text-[#e8e3e1]">
                <span className="text-white/40 mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 2: Working Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1e1917]/80 backdrop-blur-xl border border-[#362e2a] rounded-[2rem] p-8 flex flex-col shadow-lg hover:border-[#4d423c] transition-colors"
        >
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#9c8e87] mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2c2421]/500"></div>
            Working Style
          </div>
          <div className="flex flex-wrap gap-2 mt-auto mb-auto">
            {['Analytical', 'Product Thinking', 'Data-driven', 'Collaborative', 'Detail-oriented'].map(item => (
              <span key={item} className="bg-[#2c2421]/50 border border-[#362e2a] px-4 py-2 rounded-xl font-sans text-[13px] font-bold text-[#d9c4ba]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Always Learning */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-[#1e1917]/80 to-[#1a1513]/90 backdrop-blur-xl border border-[#362e2a] rounded-[2rem] p-8 flex flex-col shadow-lg hover:border-[#4d423c] transition-colors md:col-span-2 lg:col-span-1"
        >
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#9c8e87] mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2c2421]/500"></div>
            Always Learning
          </div>
          <div className="font-serif text-[1.5rem] md:text-[1.8rem] text-[#e8e3e1] leading-relaxed mt-auto mb-auto">
            Curious by nature.<br/>
            Consistent by choice.<br/>
            <span className="italic text-[#d9c4ba]">Building with purpose.</span>
          </div>
        </motion.div>

        {/* Card 4: Core Strengths */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#1e1917]/80 backdrop-blur-xl border border-[#362e2a] rounded-[2rem] p-8 flex flex-col shadow-lg hover:border-[#4d423c] transition-colors md:col-span-2 lg:col-span-3"
        >
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#9c8e87] mb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2c2421]/500"></div>
            Core Strengths
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-center">
            <li className="flex gap-4 font-sans text-[15px] md:text-[17px] font-medium text-[#e8e3e1] items-start">
              <span className="font-mono text-[12px] text-[#555] font-bold mt-1">01</span>
              <span>Reliable backend systems built for growth and speed.</span>
            </li>
            <li className="flex gap-4 font-sans text-[15px] md:text-[17px] font-medium text-[#e8e3e1] items-start">
              <span className="font-mono text-[12px] text-[#555] font-bold mt-1">02</span>
              <span>Practical AI integration, used exactly where it adds real value.</span>
            </li>
            <li className="flex gap-4 font-sans text-[15px] md:text-[17px] font-medium text-[#e8e3e1] items-start">
              <span className="font-mono text-[12px] text-[#555] font-bold mt-1">03</span>
              <span>Clear system design and structured problem-solving.</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
