import { motion } from 'framer-motion';
import EngineeringFocus from '../components/EngineeringFocus';
import { siteMeta } from '../data/siteData';
import { fadeUpView } from '../animations/variants';
import SectionDivider from '../components/SectionDivider';

const About = () => {
  return (
    <section id="about" className="section-panel relative bg-alt">
      <SectionDivider />
      <div className="relative z-10 flex items-center justify-center w-full h-full mt-8">
        <div className="layout-wide">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
            <motion.div {...fadeUpView}>
              <p className="section-heading">About</p>
              <h2 className="section-title">Building technology that solves real problems and creates meaningful impact.</h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-zinc-600">
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
            </motion.div>

            <motion.div
              {...fadeUpView}
              transition={{ ...fadeUpView.transition, delay: 0.06 }}
              className="flex flex-col gap-8"
            >
              <div>
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-brand/15 bg-matte-card p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
                    Core strengths
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                    <li>Human-centered product design with strong visual clarity.</li>
                    <li>Reliable backend systems built for growth and speed.</li>
                    <li>Accessible, responsive experiences for real users.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-brand/15 bg-matte-card p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
                    Working style
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Collaborative', 'Data-driven', 'Detail-oriented', 'Analytical'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-brand/15 bg-brand-dim px-3 py-1 text-xs font-medium text-brand-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUpView}
            transition={{ ...fadeUpView.transition, delay: 0.12 }}
            className="mt-16 w-full"
          >
            <EngineeringFocus />
          </motion.div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default About;
