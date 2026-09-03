import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      
      {/* ── BACKGROUND UI: SERVER / LOAD METRICS - DARK MODE ── */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-[0.15]">
        <svg width="100%" height="100%" viewBox="0 0 1400 800" fill="none" className="transform scale-150 md:scale-100">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EDEDED" strokeWidth="0.5" strokeOpacity="0.3"/>
          </pattern>
          <rect width="1400" height="800" fill="url(#grid)" />
          
          <path d="M 0 600 L 100 600 L 150 500 L 250 500 L 300 350 L 400 350 L 450 650 L 600 650 L 700 200 L 800 200 L 850 450 L 1000 450 L 1100 550 L 1200 550 L 1300 700 L 1400 700" stroke="#EDEDED" strokeWidth="3" fill="none" />
          
          <circle cx="300" cy="350" r="8" fill="#EDEDED" />
          <text x="320" y="340" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace" letterSpacing="0.1em">CPU_LOAD: 84%</text>
          
          <circle cx="700" cy="200" r="10" fill="none" stroke="#EDEDED" strokeWidth="4" />
          <circle cx="700" cy="200" r="4" fill="#EDEDED" />
          <text x="720" y="190" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace" letterSpacing="0.1em">TRAFFIC_SPIKE // LATENCY: 12ms</text>
          
          <circle cx="1100" cy="550" r="8" fill="#EDEDED" />
          <text x="1120" y="540" fontSize="14" fontWeight="bold" fill="#EDEDED" fontFamily="monospace" letterSpacing="0.1em">QUERY_OPTMZD</text>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-2xl bg-[#111]/80 backdrop-blur-md px-12 py-6 rounded-3xl border border-white/10 shadow-lg">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-[12px] text-[#A0A0A0] uppercase tracking-[0.1em] mb-2 font-bold"
          >
            Archive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-[2.5rem] md:text-[4rem] text-[#EDEDED] leading-[1.05] tracking-tight"
          >
            All <span className="italic text-[#CCC]">Projects.</span>
          </motion.h2>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#111]/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 cursor-pointer hover:bg-[#1A1A1A] transition-colors duration-500 flex flex-col h-full shadow-lg border border-white/10 relative z-20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex-1 flex flex-col">
                <h3 className="font-serif text-[2rem] text-[#EDEDED] mb-2">{project.title}</h3>
                <p className="font-sans text-[14px] text-[#A0A0A0] font-medium mb-8 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-md bg-[#222] mt-auto border border-white/5 flex items-center justify-center">
                  {project.preview ? (
                    <img 
                      src={project.preview} 
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.9] transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="font-sans text-[12px] font-bold text-[#555] uppercase tracking-widest">
                      Backend Service
                    </div>
                  )}
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-sans text-[12px] font-bold tracking-wide text-[#EDEDED] line-clamp-1 mr-4">
                  {project.proofs ? project.proofs[0] : ''}
                </span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-[#888] group-hover:text-white transition-colors whitespace-nowrap">View →</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── IMMERSIVE MODAL - DARK MODE ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#050505]/90 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-w-6xl bg-[#111] rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-md border border-white/20 font-bold"
              >
                ✕
              </button>

              <div className="w-full h-[30vh] md:h-[45vh] relative rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden bg-[#111] border-b border-white/10 flex items-center justify-center">
                {selectedProject.preview ? (
                  <>
                    <img 
                      src={selectedProject.preview} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover object-top opacity-70 mix-blend-lighten"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                  </>
                ) : (
                  <div className="font-sans text-[16px] font-bold text-[#555] uppercase tracking-[0.3em]">
                    Backend Architecture
                  </div>
                )}
              </div>

              <div className="px-6 md:px-16 lg:px-24 py-12 max-w-5xl mx-auto">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#888] mb-6 text-center">
                  {selectedProject.tech.slice(0, 4).join(' • ')}
                </div>
                <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#EDEDED] leading-[1.05] tracking-tight mb-12 text-center">
                  {selectedProject.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                  
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-12">
                    <div>
                      <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-[#888] mb-4">Context</h4>
                      <p className="font-sans text-[17px] md:text-[20px] font-medium leading-relaxed text-[#EDEDED]">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-[#888] mb-4">Engineering Approach</h4>
                      <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-[#A0A0A0]">
                        {selectedProject.summary}
                      </p>
                    </div>
                    
                    {selectedProject.features && (
                      <div>
                        <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-[#888] mb-4">Key Features</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="font-sans text-[15px] font-medium text-[#A0A0A0] leading-relaxed">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Metadata */}
                  <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] h-fit border border-white/10 shadow-inner">
                    <div>
                      <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#888] mb-2">Primary Impact</h4>
                      <p className="font-serif text-[1.2rem] text-[#EDEDED] leading-snug">
                        {selectedProject.proofs ? selectedProject.proofs[0] : 'Delivered successfully.'}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#888] mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="bg-white/10 border border-white/10 px-3 py-1 rounded-full font-sans text-[12px] font-bold text-[#CCC]">{t}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                      {selectedProject.demo && selectedProject.demo !== '#' && (
                        <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="w-full text-center py-3 bg-[#EDEDED] text-[#111] rounded-full font-sans text-[13px] font-bold hover:bg-white transition-colors">
                          View Live Demo
                        </a>
                      )}
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="w-full text-center py-3 bg-transparent border border-white/30 text-[#EDEDED] rounded-full font-sans text-[13px] font-bold hover:bg-white/10 transition-colors">
                          View Source Code
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
