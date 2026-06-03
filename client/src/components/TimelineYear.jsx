import { motion } from 'framer-motion';

const TimelineYear = ({ block, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative grid gap-5 border-white/[0.06] pb-11 md:grid-cols-[minmax(7rem,9rem)_1fr] md:gap-10 md:pb-12 lg:grid-cols-[10rem_1fr] lg:gap-14 ${
        isLast ? '' : 'border-b'
      }`}
    >
      <div className="md:sticky md:top-28 md:self-start">
        <time
          dateTime={block.year}
          className="font-display text-3xl font-semibold tracking-tight text-brand-light lg:text-[2rem]"
        >
          {block.year}
        </time>
      </div>

      <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2 xl:gap-x-12">
        {block.milestones.map((milestone) => (
          <li key={milestone} className="flex gap-2.5 text-[15px] leading-snug text-zinc-400">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" aria-hidden />
            <span>{milestone}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimelineYear;
