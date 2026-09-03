import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col pt-8 pb-24 overflow-hidden bg-[#161211]">
      
      {/* ── ATMOSPHERE FADE FROM THE ILLUSTRATION ── */}
      <div className="absolute inset-0 top-0 left-0 w-full h-[100vh] z-0 pointer-events-none overflow-hidden">
        {/* Soft gradient extending the illustration's dark brown/warm tones into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161211] via-[#1a1513] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#161211] via-transparent to-transparent z-10"></div>
        
        {/* RIGHT SIDE / BOTTOM: ENVIRONMENTAL ILLUSTRATION */}
        <div 
          className="absolute -right-[10%] top-[30vh] md:top-0 w-[120%] md:w-[85%] lg:w-[75%] h-[70vh] md:h-full opacity-60 md:opacity-95"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, transparent 0%, black 30%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, transparent 0%, black 30%, black 100%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}
        >
          <img 
            src="/hero-desk.jpg" 
            alt="A quiet desk, notebook, and laptop by the window" 
            className="w-full h-full object-cover object-right-bottom md:object-right-bottom transform scale-125 md:scale-105 origin-bottom-right"
          />
        </div>
      </div>

      {/* ── NAVIGATION ── */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center mb-16 md:mb-32 z-20 relative">
        <div className="font-serif text-2xl tracking-tight text-[#EDEDED] italic font-medium drop-shadow-md">
          Aubaid.
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <a href="#about" className="hidden md:block font-sans text-[13px] font-medium text-[#c0b3ad] hover:text-white transition-colors">Thinking</a>
          <a href="#experience" className="hidden md:block font-sans text-[13px] font-medium text-[#c0b3ad] hover:text-white transition-colors">Journey</a>
          <a href="#work" className="font-sans text-[13px] font-medium text-[#c0b3ad] hover:text-white transition-colors">Work</a>
          <a href="#contact" className="font-sans text-[13px] font-medium text-[#c0b3ad] hover:text-white transition-colors">Contact</a>
          <a href="/Resume.pdf" target="_blank" className="font-sans text-[12px] font-bold text-white border border-white/20 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Resume</a>
        </nav>
      </header>

      {/* ── ASYMMETRICAL LEFT-ALIGNED TYPOGRAPHY ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start z-20 relative mt-auto md:mt-24 lg:mt-32">
        
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.02] tracking-tight text-[#EDEDED] mb-4 drop-shadow-xl"
          >
            Some problems are <br className="hidden md:block" />
            <span className="italic text-[#d9c4ba]">worth sitting with.</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] text-[#9c8e87] leading-[1.1] italic tracking-tight mb-8 md:mb-12 drop-shadow-md"
          >
            Understanding them is where building begins.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[16px] md:text-[18px] lg:text-[20px] text-[#8f827c] max-w-xl leading-relaxed mb-16 font-medium"
          >
            Full-stack developer focused on web engineering, backend infrastructure, and AI/ML — building systems that scale without losing their human purpose.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
