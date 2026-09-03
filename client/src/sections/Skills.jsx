import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 md:py-32 px-6 bg-[#050505] overflow-hidden">
      
      {/* ── BACKGROUND UI: CAPABILITY MATRIX / LOGIC TREE - DARK MODE ── */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-[0.2]">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" fill="none" className="transform scale-150 md:scale-100">
          <circle cx="500" cy="400" r="300" stroke="#EDEDED" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="400" r="200" stroke="#EDEDED" strokeWidth="1" />
          
          <path d="M 500 400 L 250 250" stroke="#EDEDED" strokeWidth="2" />
          <circle cx="250" cy="250" r="6" fill="#EDEDED" />
          <text x="210" y="235" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">CORE_ENGINE</text>

          <path d="M 500 400 L 750 250" stroke="#EDEDED" strokeWidth="2" />
          <circle cx="750" cy="250" r="6" fill="#EDEDED" />
          <text x="730" y="235" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">DATA_MODEL</text>

          <path d="M 500 400 L 250 600" stroke="#EDEDED" strokeWidth="2" />
          <circle cx="250" cy="600" r="6" fill="#EDEDED" />
          <text x="210" y="625" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">EXECUTION_RUNTIME</text>

          <path d="M 500 400 L 750 600" stroke="#EDEDED" strokeWidth="2" />
          <circle cx="750" cy="600" r="6" fill="#EDEDED" />
          <text x="730" y="625" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">UI_RENDERER</text>
          
          <circle cx="500" cy="400" r="12" fill="none" stroke="#EDEDED" strokeWidth="4" />
          <text x="520" y="395" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">CAPABILITY_MATRIX</text>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center bg-[#111]/80 backdrop-blur-md p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="font-sans text-[12px] text-[#A0A0A0] font-bold uppercase tracking-[0.1em] mb-4">
            02
          </div>
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#EDEDED] leading-[1.05] tracking-tight mb-8">
            Skills & <span className="italic text-[#CCC]">Coursework.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16 w-full">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/5 border border-white/10 py-6 px-8 rounded-3xl shadow-sm hover:border-white/20 transition-colors"
            >
              <h3 className="font-sans text-[14px] font-bold tracking-[0.1em] uppercase text-[#EDEDED] mb-6">{group.title}</h3>
              <div className="font-sans text-[16px] md:text-[18px] text-[#A0A0A0] font-medium tracking-wide flex justify-center gap-4 md:gap-8 flex-wrap max-w-2xl mx-auto leading-relaxed">
                {group.items.map(item => (
                  <span key={item} className="bg-white/5 px-4 py-2 rounded-xl border border-white/5">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
