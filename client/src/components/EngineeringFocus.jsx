import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { engineeringFocus } from '../data/engineeringFocus';

const EngineeringFocus = () => (
  <div className="grid gap-3 sm:grid-cols-2">
    {engineeringFocus.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.04 }}
      >
        <SpotlightCard className="h-full rounded-xl border border-brand/15 bg-matte-elevated p-4 shadow-sm">
          <p className="text-sm font-semibold text-zinc-800">{item.title}</p>
          <p className="mt-1.5 text-[13px] leading-snug text-zinc-600">{item.description}</p>
        </SpotlightCard>
      </motion.div>
    ))}
  </div>
);

export default EngineeringFocus;
