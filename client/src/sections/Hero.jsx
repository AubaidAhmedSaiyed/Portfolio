import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';
import ProfilePhoto from '../components/ProfilePhoto';
import { fadeUp } from '../animations/variants';

const Hero = () => {
  return (
    <section id="home" className="section-panel !pb-12 !pt-28">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,320px)] md:gap-14 lg:gap-16">
        <motion.div {...fadeUp} className="max-w-xl">
          <p className="text-sm text-zinc-400">{siteMeta.role}</p>
          <h1 className="font-display mt-2 text-[1.875rem] font-semibold tracking-tight text-zinc-50 sm:text-[2.25rem]">
            {siteMeta.name}
          </h1>
          <p className="prose-muted mt-5 text-[15px] leading-snug">{siteMeta.intro}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="btn-secondary">
              Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="justify-self-center md:justify-self-end"
        >
          <ProfilePhoto />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
