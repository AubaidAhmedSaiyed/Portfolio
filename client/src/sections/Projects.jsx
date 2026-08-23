import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { fadeUpView } from '../animations/variants';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-32 md:py-40 bg-alt border-b border-brand/10">
      <div className="layout-wide px-6">
        
        <div className="mb-24 flex flex-col items-start md:items-center text-left md:text-center">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-muted mb-4">
            05 / Selected Work
          </p>
          <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1]">
            Here are the problems<br className="hidden md:block" />
            <span className="italic text-zinc-300"> I've actually solved.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-start"
            >
              {/* Left Column: Number & Title */}
              <div className="md:col-span-4 flex flex-col pt-2">
                <p className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-brand-muted mb-4">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-white leading-[1.1] mb-6">
                  {project.title}
                </h3>

                <div className="hidden md:block w-full h-[1px] bg-brand/20 my-8" />
                
                <div className="hidden md:block">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                    Technology
                  </p>
                  <p className="text-[13px] font-sans text-zinc-300 font-medium leading-relaxed">
                    {project.tech.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Right Column: Story */}
              <div className="md:col-span-8 flex flex-col gap-12">
                
                {/* Problem */}
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                    The Problem
                  </p>
                  <p className="text-[15px] md:text-[17px] leading-[1.8] text-white font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                    The Solution
                  </p>
                  <p className="text-[15px] md:text-[17px] leading-[1.8] text-white font-medium mb-4">
                    {project.summary}
                  </p>
                  <ul className="flex flex-col gap-3 mt-4 pl-4 border-l border-brand/20">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-[14px] leading-relaxed text-zinc-300 font-medium relative">
                        <span className="absolute -left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-brand-light/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                {(project.impact || project.metrics) && (
                  <div>
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                      The Impact
                    </p>
                    {project.impact && (
                      <p className="text-[15px] md:text-[17px] leading-[1.8] text-white font-medium mb-6">
                        {project.impact}
                      </p>
                    )}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                        {project.metrics.map(metric => (
                          <div key={metric.label} className="flex flex-col">
                            <span className="text-[20px] font-display font-bold text-white">{metric.value}</span>
                            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-zinc-400">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Mobile Tech */}
                <div className="md:hidden pt-8 border-t border-brand/10">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                    Technology
                  </p>
                  <p className="text-[13px] font-sans text-zinc-300 font-medium leading-relaxed">
                    {project.tech.join(' · ')}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-8 border-t border-brand/10">
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-primary text-[12px] shadow-none hover:shadow-none"
                    >
                      View Live Project
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-secondary text-[12px] shadow-none hover:shadow-none"
                    >
                      Source Code
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
