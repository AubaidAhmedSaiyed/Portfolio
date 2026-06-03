import { motion } from 'framer-motion';
import EngineeringFocus from '../components/EngineeringFocus';
import SectionWave from '../components/SectionWave';
import { siteMeta } from '../data/siteData';
import { fadeUpView } from '../animations/variants';

const About = () => {
  return (
    <section id="about" className="section-panel section-chapter relative">
      <SectionWave variant="cream" />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="layout-wide">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:gap-16">
            <motion.div {...fadeUpView} className="max-w-2xl">
              <p className="section-heading">About</p>
              <h2 className="section-title">Building technology that solves real problems and creates meaningful impact.</h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-zinc-600">
                <p>
                  I&apos;m a software engineering enthusiast. I&apos;m deeply interested in exploring how
                  technology can solve real-world problems through user-centric solutions, and I aspire to
                  build products that create meaningful impact.
                </p>
                <p>
                  My journey includes growing my skills in web engineering and problem-solving with DSA.
                  I&apos;m particularly fascinated by backend infrastructure systems and AI/ML.
                </p>
                <p>
                  I aim to contribute in building systems that are not only efficient and scalable but also
                  meaningful in the way they touch people&apos;s lives.
                </p>
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Currently exploring
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {siteMeta.exploring.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand/20 bg-brand-dim px-4 py-1.5 text-xs font-medium text-brand-light"
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
            >
              <EngineeringFocus />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

export default About;
