import { motion } from 'framer-motion';

const WorkTransition = () => {
  return (
    <section className="relative w-full py-40 md:py-56 bg-matte border-b border-brand/10 overflow-hidden flex items-center justify-center">
      <div className="layout-wide px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-brand/30 mb-12" />
          
          <h2 className="font-display text-[2.5rem] md:text-[4rem] font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Here are the problems<br />
            <span className="italic text-zinc-600">I've actually worked on.</span>
          </h2>
          
          <div className="w-[1px] h-24 bg-brand/30 mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkTransition;
