import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';
import ProfilePhoto from '../components/ProfilePhoto';
import { fadeUp } from '../animations/variants';

const Hero = () => {
  return (
    <section
      id="home"
      className="section-panel relative overflow-hidden blueprint-grid"
    >
      <div className="organic-blob absolute right-[-8%] top-[10%] -z-10 h-[380px] w-[380px] bg-brand-dim opacity-40 pointer-events-none" />
      <div className="organic-blob absolute left-[-10%] bottom-[-10%] -z-10 h-[280px] w-[280px] bg-brand-glow opacity-50 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="grid w-full max-w-[76rem] items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,360px)] md:gap-16 lg:gap-20 xl:px-0">
          <motion.div {...fadeUp} className="w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
              {siteMeta.role}
            </p>
            <h1 className="font-display mt-4 text-[2.35rem] font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-[2.85rem]">
              {siteMeta.name}
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-zinc-600">{siteMeta.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary px-5 py-2.5 text-sm">
                View projects
              </a>
              <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="btn-secondary px-5 py-2.5 text-sm">
                Download resume
              </a>
              <a href="#contact" className="btn-secondary px-5 py-2.5 text-sm">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="justify-self-center md:justify-self-end"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
