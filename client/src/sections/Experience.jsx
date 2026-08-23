import { motion } from 'framer-motion';
import { experienceItems } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-32 md:py-48 bg-matte border-b border-brand/10">
      <div className="layout-wide px-6">
        
        <div className="mb-24">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-muted mb-4">
            06 / Experience
          </p>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-white">
            Professional trajectory.
          </h2>
        </div>

        <div className="flex flex-col">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-t border-brand/10 group"
            >
              <div className="flex flex-col">
                <p className="text-[13px] font-sans font-bold text-zinc-500 group-hover:text-brand transition-colors">
                  {item.timeframe}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
                  {item.company}
                </h3>
                <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.15em] text-zinc-400">
                  {item.role}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {item.highlights.filter(Boolean).map((highlight, i) => (
                    <p key={i} className="text-[14px] md:text-[15px] leading-relaxed text-zinc-300 font-medium">
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
