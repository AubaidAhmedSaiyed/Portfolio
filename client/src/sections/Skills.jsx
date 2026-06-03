import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SectionDivider from '../components/SectionDivider';
import { skillGroups, softSkills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-panel relative bg-alt">
      <SectionDivider />
      <div className="layout-wide mt-8">
        <SectionHeading eyebrow="Skills" title="Tools and concepts I work with regularly." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-brand/12 bg-brand-dim px-3 py-1 text-[13px] text-zinc-700 transition hover:border-brand/30 hover:text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-[15px] text-zinc-600">
          Also: {softSkills.join(', ').toLowerCase()}.
        </p>
      </div>
    </section>
  );
};

export default Skills;
