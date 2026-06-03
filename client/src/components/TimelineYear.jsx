import { motion } from 'framer-motion';

const TimelineYear = ({ block, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`relative grid gap-6 border-brand/10 pb-14 md:grid-cols-[minmax(8rem,11rem)_1fr] md:gap-12 lg:gap-16 ${
        isLast ? '' : 'border-b'
      }`}
    >
      <div className="md:sticky md:top-32 md:self-start">
        <time
          dateTime={block.year}
          className="font-display text-4xl font-semibold tracking-tight text-brand-light lg:text-[2.5rem]"
        >
          {block.year}
        </time>
      </div>

      <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 xl:grid-cols-2">
        {block.milestones.map((milestone) => (
          <li key={milestone} className="flex gap-3 text-[15px] leading-snug text-zinc-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
            <span className="max-w-md">{milestone}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimelineYear;
