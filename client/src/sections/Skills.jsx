import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import SectionDivider from '../components/SectionDivider';
import { skillGroups, softSkills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-panel">
      <SectionDivider />
      <SectionHeading
        eyebrow="Skills"
        title="Tools and concepts I use regularly."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
          >
            <SpotlightCard className="rounded-xl border border-white/[0.06] bg-matte-elevated p-4">
              <h3 className="text-xs font-medium text-zinc-400">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/[0.05] bg-matte-card px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:border-brand/20 hover:text-zinc-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-xs text-zinc-500">
        Also: {softSkills.join(', ').toLowerCase()}.
      </p>
    </section>
  );
};

export default Skills;
