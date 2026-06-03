import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import EngineeringFocus from '../components/EngineeringFocus';
import SectionDivider from '../components/SectionDivider';
import { siteMeta } from '../data/siteData';
import { fadeUpView } from '../animations/variants';

const stats = [
  { value: '12+', label: 'Projects built' },
  { value: '10+', label: 'APIs developed' },
  { value: '15+', label: 'Open source contributions' },
  { value: '22+', label: 'Technologies worked with' },
];

const About = () => {
  return (
    <section id="about" className="section-panel">
      <SectionDivider />
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] xl:gap-14">
        <motion.div {...fadeUpView} className="max-w-2xl">
          <p className="section-heading">About</p>
          <h2 className="section-title">I build software with care for systems and the people using them.</h2>
          <div className="prose-muted mt-5 space-y-4 text-[15px] leading-snug">
            <p>
              I am a BTech IT student graduating in 2028. My work centers on full stack development,
              backend engineering, and REST APIs for applications that need to grow without falling apart.
            </p>
            <p>
              I think about product alongside code: understanding user problems, prioritizing features,
              and shipping meaningful software instead of overbuilt demos.
            </p>
            <p>
              I explore open source to improve collaboration and engineering discipline. I learn quickly,
              adapt to new tools, and prefer building to understand.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium text-zinc-500">Currently exploring</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {siteMeta.exploring.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-brand/10 bg-brand-dim px-3 py-1.5 text-xs text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          {...fadeUpView}
          transition={{ ...fadeUpView.transition, delay: 0.06 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <EngineeringFocus />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
