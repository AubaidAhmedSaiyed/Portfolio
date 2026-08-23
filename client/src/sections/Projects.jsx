import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SectionDivider from '../components/SectionDivider';
import { projects } from '../data/projects';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-panel relative">
      <SectionDivider />
      <div className="layout-wide mt-8">
        <SectionHeading
          wide
          eyebrow="Selected Work"
          title="A curated gallery of projects I have engineered and shipped."
          description="An overview of my technical contributions, problem-solving approaches, and the resulting impact of each build."
        />
        <div className="mx-auto w-full max-w-4xl">
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
