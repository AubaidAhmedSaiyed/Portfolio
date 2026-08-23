import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';
import { fadeUpView } from '../animations/variants';

const About = () => {
  return (
    <section id="about" className="relative w-full py-32 md:py-48 bg-matte border-b border-brand/10 overflow-hidden">
      <div className="layout-wide px-6">
        <div className="grid gap-16 md:gap-24 lg:grid-cols-[0.85fr_1.15fr] items-center">
          
          {/* Left Column: Photo Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Metadata side indicator */}
            <div className="absolute -left-4 md:-left-8 top-12 bottom-12 flex flex-col justify-between">
              <div className="w-[1px] h-16 bg-brand-light/50" />
              <div className="flex flex-col items-center gap-4">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">
                  Based in India
                </p>
                <div className="w-[1px] h-8 bg-brand-light/30" />
                <p className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">
                  Software Engineer
                </p>
              </div>
              <div className="w-[1px] h-16 bg-brand-light/50" />
            </div>

            {/* Editorial Photo */}
            <div className="relative z-10 w-full aspect-[4/5] bg-matte-card border border-brand/20 p-2 md:p-3 -rotate-1 hover:rotate-0 transition-transform duration-700">
              {siteMeta.profileImage ? (
                <img
                  src={siteMeta.profileImage}
                  alt="Aubaid Ahmed"
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-matte-elevated flex items-center justify-center">
                  <span className="font-display text-4xl font-semibold text-brand-light/30">AA</span>
                </div>
              )}
            </div>

            {/* Accent lines */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-brand-light/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-brand-light/30 -z-10" />
          </motion.div>

          {/* Right Column: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-muted mb-6">
              03 / Background
            </p>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Hi, I'm Aubaid.
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[17px] leading-[1.8] text-zinc-300 font-medium max-w-xl">
              <p>
                Software engineer focused on turning complex problems into simple, reliable solutions.
              </p>
              <p>
                I enjoy working across product and engineering — understanding the problem, breaking down complexity, and building systems that are useful, maintainable, and built to last.
              </p>
              <p>
                Whether it's designing a resilient backend architecture, refining a human-centered user interface, or diagnosing a critical performance bottleneck, I approach every challenge with curiosity and technical rigor.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a href="#projects" className="text-[12px] font-sans font-bold uppercase tracking-[0.15em] text-white border-b border-brand-light pb-1 hover:text-brand-light transition-colors">
                View my work
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
