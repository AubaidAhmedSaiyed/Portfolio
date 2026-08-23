import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-32 md:py-40 bg-alt border-b border-brand/10">
      <div className="layout-wide px-6">
        
        <div className="mb-24">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-muted mb-4">
            07 / Engineering Depth
          </p>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-white">
            Technical capabilities.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-y-24">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 border-b border-brand/10 pb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px] font-sans text-zinc-300 font-medium tracking-wide">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
