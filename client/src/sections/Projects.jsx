import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SectionWave from '../components/SectionWave';
import { projects } from '../data/projects';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-panel relative">
      <SectionWave />
      <div className="layout-wide">
        <SectionHeading
          wide
          eyebrow="Selected Work"
          title="A curated gallery of systems I have engineered and shipped."
          description="Real product previews, backend architecture, and the engineering decisions behind each build."
        />
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex flex-col gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} onPreview={setSelected} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
