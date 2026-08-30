import { projects } from '../data/projects';

export default function ProjectsTech() {
  return (
    <section id="work" className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0D1117] text-[#E6EDF3] p-8 md:p-16 lg:p-24 shadow-2xl border border-[#30363D]">
      
      {/* High Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#7EE787 1px, transparent 1px), linear-gradient(90deg, #7EE787 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#7EE787]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-20 max-w-2xl">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#7EE787] mb-6">
            03 — Selected Work
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            See the unseen.<br/>
            <span className="text-[#8B949E]">Know the system.</span>
          </h2>
          <p className="font-sans text-[#8B949E] text-lg leading-relaxed">
            Built for the most demanding workflows. A collection of systems engineered for scale, reliability, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-[#161B22]/80 backdrop-blur-sm border border-[#30363D] rounded-[2rem] p-8 md:p-12 flex flex-col group hover:border-[#7EE787]/30 transition-colors">
              
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <h3 className="font-display text-3xl font-bold text-white group-hover:text-[#7EE787] transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#C9D1D9] border border-[#30363D] px-4 py-2 rounded-full hover:bg-[#30363D] transition-colors">
                      Source
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#0D1117] bg-[#7EE787] px-4 py-2 rounded-full hover:bg-white transition-colors">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <p className="font-sans text-[#8B949E] text-base leading-relaxed">
                  {project.description}
                </p>
                {project.summary && (
                  <p className="font-sans text-[#C9D1D9] text-[15px] leading-relaxed bg-[#0D1117] p-5 rounded-2xl border border-[#30363D]">
                    {project.summary}
                  </p>
                )}
              </div>

              {project.features?.length > 0 && (
                <div className="mb-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#7EE787] mb-4">Architecture & Features</div>
                  <ul className="space-y-3">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-4 text-[14px] text-[#8B949E] leading-relaxed items-start">
                        <span className="text-[#7EE787] mt-1 font-mono">▹</span> 
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-10">
                 {project.tech.map(t => (
                   <span key={t} className="text-[10px] uppercase font-mono tracking-wider bg-[#21262D] text-[#C9D1D9] px-3 py-1.5 rounded-lg border border-[#30363D]">
                     {t}
                   </span>
                 ))}
              </div>

              {(project.metrics?.length > 0 || project.impact) && (
                <div className="mt-auto pt-8 border-t border-[#30363D]">
                  {project.metrics?.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      {project.metrics.map(m => (
                        <div key={m.label}>
                          <div className="font-display font-bold text-white text-2xl mb-1 group-hover:text-[#7EE787] transition-colors">{m.value}</div>
                          <div className="font-mono text-[9px] uppercase text-[#8B949E] tracking-widest">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {project.impact && (
                    <div className="text-xs text-[#58A6FF] font-mono leading-relaxed bg-[#58A6FF]/10 p-4 rounded-xl border border-[#58A6FF]/20">
                      {project.impact}
                    </div>
                  )}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
