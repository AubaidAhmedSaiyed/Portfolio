import { motion } from 'framer-motion';
import { experienceItems } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 md:py-32 px-6 bg-[#050505] overflow-hidden">
      
      {/* ── BACKGROUND UI: VERSION CONTROL / TIMELINE GRAPH - DARK MODE ── */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none opacity-[0.15]">
        <svg width="100%" height="100%" viewBox="0 0 800 1200" fill="none" className="transform scale-125 md:scale-100">
          <line x1="400" y1="0" x2="400" y2="1200" stroke="#EDEDED" strokeWidth="2" strokeDasharray="8 8" />
          
          <circle cx="400" cy="150" r="10" fill="#EDEDED" />
          <text x="430" y="155" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">INIT_SEQUENCE</text>
          
          <path d="M 400 300 C 500 300, 500 400, 500 450" stroke="#EDEDED" strokeWidth="2" fill="none" />
          <circle cx="500" cy="450" r="8" fill="#EDEDED" />
          <text x="530" y="455" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">FEATURE_BRANCH</text>

          <circle cx="400" cy="600" r="14" fill="none" stroke="#EDEDED" strokeWidth="3" />
          <circle cx="400" cy="600" r="6" fill="#EDEDED" />
          <text x="440" y="605" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">MERGE_DEPLOYMENT</text>
          
          <path d="M 400 800 C 250 800, 250 900, 250 950" stroke="#EDEDED" strokeWidth="2" fill="none" />
          <circle cx="250" cy="950" r="8" fill="#EDEDED" />
          <text x="80" y="955" fontSize="12" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">OPEN_SOURCE_PR</text>
          
          <circle cx="400" cy="1100" r="10" fill="#EDEDED" />
          <text x="430" y="1105" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace">PRODUCTION_LIVE</text>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center bg-[#111]/80 backdrop-blur-md px-12 py-6 rounded-3xl border border-white/10"
        >
          <div className="font-sans text-[12px] text-[#A0A0A0] uppercase tracking-[0.1em] mb-4 font-bold">
            Journey
          </div>
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#EDEDED] leading-[1.05] tracking-tight">
            Professional <span className="italic text-[#CCC]">Experience.</span>
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-12">
          {experienceItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111]/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-lg flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:border-white/20 transition-colors"
            >
              
              {/* Left Column */}
              <div className="w-full md:w-[30%] shrink-0">
                <div className="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[#A0A0A0] mb-2">{item.timeframe}</div>
                <div className="font-serif text-[1.5rem] text-[#EDEDED] leading-tight mb-2">{item.company}</div>
                <div className="font-sans text-[14px] text-[#888] font-bold mb-6">{item.role}</div>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-white/5 px-3 py-1 rounded-full font-sans text-[11px] font-bold text-[#CCC] border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-[70%]">
                <ul className="space-y-4">
                  {item.highlights.filter(Boolean).map((highlight, i) => (
                    <li key={i} className="font-sans text-[15px] md:text-[16px] text-[#A0A0A0] font-medium leading-relaxed flex items-start gap-4">
                      <span className="text-white font-bold mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
