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
        <SpotlightCard className="h-full rounded-xl border border-white/[0.07] bg-matte-elevated p-4">
          <p className="text-sm font-medium text-zinc-200">{item.title}</p>
          <p className="mt-1.5 text-[13px] leading-snug text-zinc-400">{item.description}</p>
        </SpotlightCard>
      </motion.div>
    ))}
  </div>
);

export default EngineeringFocus;
