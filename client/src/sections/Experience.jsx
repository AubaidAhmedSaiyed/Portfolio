import { motion } from 'framer-motion';
import { experienceItems } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-[10vw] bg-themeBg border-t border-themeBorder">
      <div className="layout-wide">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[30px] mb-[60px]">
          <div>
            <div className="flex items-center gap-[14px] mb-[20px]">
              <span className="w-[34px] h-[1px] bg-themeAccent"></span>
              <span className="font-mono text-[11.5px] tracking-[0.18em] text-themeAccent uppercase">
                Experience
              </span>
            </div>
            <h2 className="font-serif font-medium text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.01em] text-themeIvory">
              Professional<br />trajectory.
            </h2>
          </div>
        </div>

        <div className="flex flex-col">
          {experienceItems.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-[20px] md:gap-[40px] py-[40px] border-t border-themeBorder group"
            >
              <div className="flex flex-col">
                <p className="font-mono text-[13px] tracking-[0.1em] text-themeMuted group-hover:text-themeAccent transition-colors">
                  {exp.timeframe}
                </p>
                {exp.label && (
                  <span className="mt-[12px] inline-block w-fit px-[8px] py-[4px] border border-themeAccent/30 text-themeAccent text-[9px] font-mono uppercase tracking-widest rounded-[2px]">
                    {exp.label}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[16px]">
                <div>
                  <h3 className="font-serif text-[1.8rem] md:text-[2.2rem] text-themeIvory mb-[6px] leading-[1.2]">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-[12px] tracking-[0.1em] text-themePale uppercase">
                    {exp.role}
                  </p>
                </div>
                
                <ul className="flex flex-col gap-[12px] mt-[8px]">
                  {exp.highlights.filter(Boolean).map((highlight, i) => (
                    <li key={i} className="font-sans font-light text-[15px] leading-[1.7] text-themeMuted max-w-[60ch]">
                      {highlight}
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
};

export default Experience;
