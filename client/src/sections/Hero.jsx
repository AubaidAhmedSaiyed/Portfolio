import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center pt-8 pb-24 overflow-hidden">
      
      {/* ── MOODY DARK SKY BACKGROUND ── */}
      <div className="absolute inset-0 top-0 left-0 w-full h-[100vh] -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#050505] to-[#050505]"></div>
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2400&auto=format&fit=crop" 
          alt="Dark atmosphere" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.25] mix-blend-screen grayscale"
          style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}
        />
      </div>

      {/* ── THEMATIC UI BACKGROUND LAYER (Backend, AI, Product, Systems) - DARK MODE ── */}
      <div className="absolute inset-0 top-32 left-0 w-full h-[80vh] flex justify-center items-center -z-10 overflow-hidden">
        
        {/* Problem Solving / Pipeline Connections */}
        <svg className="absolute w-[900px] h-[500px] opacity-100" viewBox="0 0 900 500" fill="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            d="M 180 250 C 350 250, 350 150, 500 150 C 650 150, 650 350, 800 350" 
            stroke="#EDEDED" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4"
          />
          <text x="250" y="240" fontSize="10" fontWeight="bold" fill="#EDEDED" opacity="0.8" fontFamily="monospace" letterSpacing="0.1em">RAW_DATA_INGESTION</text>
          <text x="550" y="250" fontSize="10" fontWeight="bold" fill="#EDEDED" opacity="0.8" fontFamily="monospace" letterSpacing="0.1em">TENSOR_PROCESSING</text>
        </svg>

        {/* 1. BACKEND & SYSTEMS NODE */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] md:left-[15%] top-[35%] w-[180px] p-5 bg-[#111]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col gap-3"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#EDEDED]">Systems</span>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
          <div className="flex flex-col gap-1 opacity-80">
            <div className="w-10 h-3 border border-[#EDEDED] rounded-[40%] flex items-center justify-center">
              <div className="w-6 h-[1px] bg-[#EDEDED]"></div>
            </div>
            <div className="w-10 h-3 border border-[#EDEDED] rounded-[40%]"></div>
            <div className="w-10 h-3 border border-[#EDEDED] rounded-[40%]"></div>
          </div>
          <div className="font-mono text-[8px] text-white/70 font-bold tracking-widest mt-2 uppercase">PostgreSQL // Redis</div>
        </motion.div>

        {/* 2. AI & MACHINE LEARNING NODE */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[30%] md:right-[40%] top-[10%] w-[200px] p-6 bg-[#111]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center"
        >
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#EDEDED] w-full text-left mb-3">AI Engine</span>
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="opacity-80 mb-3">
            <circle cx="10" cy="10" r="4" fill="#EDEDED"/>
            <circle cx="10" cy="30" r="4" fill="#EDEDED"/>
            <circle cx="30" cy="20" r="4" fill="#EDEDED"/>
            <circle cx="50" cy="10" r="4" fill="#EDEDED"/>
            <circle cx="50" cy="30" r="4" fill="#EDEDED"/>
            <path d="M 10 10 L 30 20 L 50 10" stroke="#EDEDED" strokeWidth="1.5"/>
            <path d="M 10 30 L 30 20 L 50 30" stroke="#EDEDED" strokeWidth="1.5"/>
          </svg>
          <div className="font-mono text-[8px] text-white/70 font-bold tracking-widest uppercase">XGBoost Pipeline // Model</div>
        </motion.div>

        {/* 3. PRODUCT & INTERFACE NODE */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-[5%] md:right-[15%] bottom-[25%] w-[160px] p-5 bg-[#111]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col gap-2"
        >
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#EDEDED] mb-1">Product</span>
          <div className="w-full h-[40px] border border-white/30 rounded-lg p-2 flex flex-col gap-1">
            <div className="w-[80%] h-2 bg-white/20 rounded-sm"></div>
            <div className="w-[50%] h-2 bg-white/20 rounded-sm"></div>
            <div className="w-full h-8 bg-white/10 rounded-sm mt-1"></div>
          </div>
          <div className="font-mono text-[8px] text-white/70 font-bold tracking-widest uppercase mt-1">UI / UX Execution</div>
        </motion.div>

      </div>

      {/* ── NAVIGATION ── */}
      <header className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center mb-24 md:mb-32 z-20">
        <div className="font-serif text-2xl tracking-tight text-[#EDEDED] italic font-medium">
          Aubaid.
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <a href="#about" className="hidden md:block font-sans text-[13px] font-medium text-[#999] hover:text-white transition-colors">Thinking</a>
          <a href="#experience" className="hidden md:block font-sans text-[13px] font-medium text-[#999] hover:text-white transition-colors">Journey</a>
          <a href="#work" className="font-sans text-[13px] font-medium text-[#999] hover:text-white transition-colors">Work</a>
          <a href="#contact" className="font-sans text-[13px] font-medium text-[#999] hover:text-white transition-colors">Contact</a>
          <a href="/Resume.pdf" target="_blank" className="font-sans text-[12px] font-bold text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Resume</a>
        </nav>
      </header>

      {/* ── CENTERED EDITORIAL TYPOGRAPHY ── */}
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-20">
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] tracking-tight text-[#EDEDED] mb-4 drop-shadow-lg"
        >
          Some problems are <br className="hidden md:block" />
          <span className="italic text-[#CCC]">worth sitting with.</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#888] leading-[1.1] italic tracking-tight mb-8"
        >
          Understanding them is where building begins.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[16px] md:text-[20px] text-[#A0A0A0] max-w-2xl leading-relaxed mb-16"
        >
          Full-stack developer focused on web engineering, backend infrastructure, and AI/ML — building systems that scale without losing their human purpose.
        </motion.p>

      </div>
    </section>
  );
}
