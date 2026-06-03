import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import SectionDivider from '../components/SectionDivider';
import { productPoints } from '../data/productThinking';

const ProductThinking = () => {
  return (
    <section id="product-thinking" className="section-panel">
      <SectionDivider />
      <SectionHeading eyebrow="Product thinking" title="How I approach building software." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {productPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <SpotlightCard className="h-full rounded-xl border border-white/[0.06] bg-matte-elevated p-4">
              <h3 className="text-sm font-medium text-zinc-300">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{point.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductThinking;
