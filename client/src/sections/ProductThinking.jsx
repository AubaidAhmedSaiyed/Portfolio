import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import SectionDivider from '../components/SectionDivider';
import { productPoints } from '../data/productThinking';

const ProductThinking = () => {
  return (
    <section id="product-thinking" className="section-panel relative bg-alt">
      <SectionDivider />
      <div className="layout-wide mt-8">
        <SectionHeading
          eyebrow="Product thinking"
          title="How I connect engineering depth with real outcomes."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <SpotlightCard className="h-full rounded-2xl border border-brand/15 bg-matte-card p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-800">{point.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{point.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductThinking;
