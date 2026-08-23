import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="intro" className="relative w-full min-h-[100svh] bg-matte overflow-hidden flex flex-col justify-center border-b border-brand/10">
      
      {/* Background Graphic (optional subtle dark hills/waves at bottom as in photo) */}
      <div className="absolute bottom-0 w-full h-48 opacity-10 bg-gradient-to-t from-black to-transparent z-0" style={{ backgroundImage: 'radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.05), transparent 70%)'}} />

      <div className="layout-wide w-full px-6 md:px-12 relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 mt-20 lg:mt-0">
        
        {/* Left Side: Main Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-brand-muted" />
            <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-muted">
              Software Engineer
            </p>
          </div>

          <h2 className="font-display text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6">
            Some problems<br />
            <span className="italic text-brand-light font-medium">are worth sitting with.</span>
          </h2>
          
          <p className="text-[12px] md:text-[13px] font-sans text-white uppercase tracking-[0.2em] font-medium mb-16">
            Understanding them is where building begins.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-white">
              Available for selected opportunities
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#projects" className="flex items-center gap-3 rounded border border-brand/40 px-6 py-3 hover:bg-brand/10 transition-colors">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-brand-light">
                View Selected Work
              </span>
              <svg className="w-3 h-3 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <a href="https://github.com/AubaidAhmedSaiyed" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <svg className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-zinc-300 group-hover:text-white transition-colors">
                Github
              </span>
              <svg className="w-3 h-3 text-zinc-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Technical Decorators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:flex flex-col relative border-l border-zinc-700 pl-6 h-64 justify-center"
        >
          <div className="absolute top-0 -left-[1px] w-[1px] h-12 bg-zinc-700" />
          <div className="absolute top-12 -left-4 w-4 h-[1px] bg-zinc-700" />
          <div className="absolute top-[48px] -left-4 w-[1px] h-4 bg-brand-muted" />
          <div className="absolute top-[64px] -left-4 w-[1px] h-full bg-zinc-700/50" />
          
          <div className="flex flex-col gap-2 relative z-10">
            <p className="text-[13px] font-sans font-medium text-white">Real problems.</p>
            <p className="text-[13px] font-sans font-medium text-white">Thoughtful solutions.</p>
            <p className="text-[13px] font-sans font-medium text-white">Lasting impact.</p>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800/50 transition-colors cursor-pointer" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-500">
          Scroll to explore
        </p>
      </div>

      {/* Far Right Scroll Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6">
        <p className="[writing-mode:vertical-rl] text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-600">
          Scroll
        </p>
        <div className="w-[1px] h-24 bg-zinc-800 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-muted" />
        </div>
        <svg className="w-3 h-3 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>

    </section>
  );
};

export default Philosophy;
