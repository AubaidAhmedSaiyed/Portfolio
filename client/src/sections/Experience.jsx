import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import EngineeringTag from '../components/EngineeringTag';
import SectionDivider from '../components/SectionDivider';
import { experienceItems } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-panel">
      <SectionDivider />
      <SectionHeading
        eyebrow="Experience"
        title="Open source and project work."
      />
      <div className="space-y-4">
        {experienceItems.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <SpotlightCard className="rounded-xl border border-white/[0.06] bg-matte-elevated p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="rounded-md border border-brand/15 bg-brand-dim px-2 py-0.5 text-[10px] font-medium text-brand">
                    {exp.label}
                  </span>
                  <h3 className="mt-2 text-base font-medium text-zinc-100">{exp.role}</h3>
                  <p className="text-sm text-zinc-500">{exp.company}</p>
                </div>
                <time className="font-mono text-xs text-zinc-600">{exp.timeframe}</time>
              </div>
              {exp.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <EngineeringTag key={tag} label={tag} />
                  ))}
                </div>
              ) : null}
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((point) => (
                  <li key={point} className="text-sm text-zinc-500">
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
