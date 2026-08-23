import { motion } from 'framer-motion';

const Glimpse = () => {
  return (
    <section className="relative w-full py-32 bg-matte border-b border-brand/10 overflow-hidden flex items-center justify-center">
      <div className="layout-wide px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-[13px] md:text-[15px] font-sans text-zinc-500 italic mb-16">
            "That's how I approach software."
          </p>

          <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-muted mb-8">
            Meet the engineer behind the solutions.
          </p>

          <div className="flex flex-col items-center gap-2 mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
              AUBAID AHMED
            </h3>
            <p className="text-[12px] font-sans font-semibold uppercase tracking-widest text-zinc-500">
              Software Engineer
            </p>
          </div>

          <div className="w-[1px] h-12 bg-brand/20 mx-auto mb-10" />

          <p className="text-[15px] md:text-[17px] leading-relaxed text-zinc-600 font-medium">
            I care about understanding the problem before deciding what to build.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Glimpse;
