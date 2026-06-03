import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import EngineeringTag from '../components/EngineeringTag';
import SectionWave from '../components/SectionWave';
import { experienceItems } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-panel relative">
      <SectionWave />
      <div className="layout-wide">
        <SectionHeading eyebrow="Experience" title="Open source and project work in the field." />
        <div className="space-y-5">
          {experienceItems.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <SpotlightCard className="rounded-2xl border border-brand/12 bg-matte-elevated p-6 shadow-sm md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full border border-brand/20 bg-brand-dim px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-light">
                      {exp.label}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-zinc-900">{exp.role}</h3>
                    <p className="text-sm text-zinc-600">{exp.company}</p>
                  </div>
                  <time className="font-mono text-xs text-zinc-500">{exp.timeframe}</time>
                </div>
                {exp.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <EngineeringTag key={tag} label={tag} />
                    ))}
                  </div>
                ) : null}
                <ul className="mt-5 space-y-2">
                  {exp.highlights.map((point) => (
                    <li key={point} className="text-[15px] leading-relaxed text-zinc-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
