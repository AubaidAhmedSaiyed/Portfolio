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
    <section id="projects" className="section-panel">
      <SectionDivider />
      <div className="layout-wide">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across full stack, ML, and systems."
          description="Production-minded builds with clear APIs, structured backends, and interfaces designed to last."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
            >
              <ProjectCard project={project} onPreview={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
