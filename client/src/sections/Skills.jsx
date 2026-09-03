import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 md:py-32 px-6 bg-[#161211] overflow-hidden">
      
      {/* ── BACKGROUND UI: CAPABILITY MATRIX / LOGIC TREE - DARK MODE ── */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-[0.2]">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" fill="none" className="transform scale-150 md:scale-100">
          <circle cx="500" cy="400" r="300" stroke="#e8e3e1" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="400" r="200" stroke="#e8e3e1" strokeWidth="1" />
          
          <path d="M 500 400 L 250 250" stroke="#e8e3e1" strokeWidth="2" />
          <circle cx="250" cy="250" r="6" fill="#e8e3e1" />
          <text x="210" y="235" fontSize="12" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">CORE_ENGINE</text>

          <path d="M 500 400 L 750 250" stroke="#e8e3e1" strokeWidth="2" />
          <circle cx="750" cy="250" r="6" fill="#e8e3e1" />
          <text x="730" y="235" fontSize="12" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">DATA_MODEL</text>

          <path d="M 500 400 L 250 600" stroke="#e8e3e1" strokeWidth="2" />
          <circle cx="250" cy="600" r="6" fill="#e8e3e1" />
          <text x="210" y="625" fontSize="12" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">EXECUTION_RUNTIME</text>

          <path d="M 500 400 L 750 600" stroke="#e8e3e1" strokeWidth="2" />
          <circle cx="750" cy="600" r="6" fill="#e8e3e1" />
          <text x="730" y="625" fontSize="12" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">UI_RENDERER</text>
          
          <circle cx="500" cy="400" r="12" fill="none" stroke="#e8e3e1" strokeWidth="4" />
          <text x="520" y="395" fontSize="14" fontWeight="bold" fill="#e8e3e1" fontFamily="monospace">CAPABILITY_MATRIX</text>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center bg-[#1e1917]/80 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-[#362e2a] shadow-2xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="font-sans text-[12px] text-[#bdaea7] font-bold uppercase tracking-[0.1em] mb-4">
            02
          </div>
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#e8e3e1] leading-[1.05] tracking-tight mb-8">
            Skills & <span className="italic text-[#d9c4ba]">Coursework.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#2c2421]/50 border border-[#362e2a] py-8 px-6 rounded-3xl shadow-sm hover:border-[#4d423c] transition-colors flex flex-col"
            >
              <h3 className="font-sans text-[15px] font-bold tracking-[0.1em] uppercase text-[#e8e3e1] mb-6">{group.title}</h3>
              <div className="font-sans text-[14px] md:text-[15px] text-[#bdaea7] font-medium flex justify-center gap-3 flex-wrap leading-relaxed mt-auto mb-auto">
                {group.items.map(item => (
                  <span key={item} className="bg-[#2c2421]/50 px-3 py-1.5 rounded-xl border border-[#362e2a] shadow-sm">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
