import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 doodle pointer-events-none" />
      
      <div className="layout-wide relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="modern-card max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-8 border border-brand/20">
            <svg className="w-8 h-8 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <h2 className="section-title mb-6 text-white">Let's Connect</h2>
          
          <p className="text-[15px] md:text-[17px] text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
          
          <a
            href="mailto:aubaidsaiyed.47@gmail.com"
            className="btn-primary"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
      
      {/* Wave Divider at the bottom connecting to footer */}
      <div className="absolute bottom-0 left-0 w-full wave-divider opacity-10" />
    </section>
  );
};

export default Contact;
