import { motion } from 'framer-motion';
import { fadeUpView } from '../animations/variants';

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <motion.div {...fadeUpView} className="mb-8 max-w-lg">
      <p className="section-heading">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">{description}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
