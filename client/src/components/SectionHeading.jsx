import { motion } from 'framer-motion';
import { fadeUpView } from '../animations/variants';

const SectionHeading = ({ eyebrow, title, description, wide = false }) => {
  return (
    <motion.div {...fadeUpView} className={`mb-10 ${wide ? 'max-w-3xl' : 'max-w-2xl'}`}>
      <p className="section-heading">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-4 text-[16px] leading-relaxed text-zinc-600">{description}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
