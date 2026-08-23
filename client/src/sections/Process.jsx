import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-alt border-b border-brand/10 overflow-hidden">
      <div className="layout-wide px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 py-8"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
            Professional Problem Solver
          </h3>
          
          <div className="hidden md:flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-brand-light/70" />
          </div>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
            Product Thinker
          </h3>
          
          <div className="hidden md:flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-brand-light/70" />
          </div>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
            Software Engineer
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
