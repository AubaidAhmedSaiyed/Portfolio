import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="intro" className="relative min-h-[100vh] flex flex-col overflow-hidden">
      {/* Background Ambience from Snippet */}
      <div className="grain"></div>
      <div className="ambient a1"></div>
      <div className="ambient a2"></div>

      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-[1.5fr_0.9fr] items-center px-[5vw] pt-[20vh] md:pt-[10vh] pb-[6vw] gap-[4vw]">
        
        {/* Left Column: Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-[14px] mb-[30px]">
            <span className="w-[34px] h-[1px] bg-themeAccent"></span>
            <span className="font-mono text-[11.5px] tracking-[0.18em] text-themeAccent uppercase">
              Software Engineer
            </span>
          </div>

          <h1 className="font-serif font-medium text-[clamp(2.6rem,5.2vw,4.6rem)] leading-[1.08] tracking-[-0.01em] text-themeIvory mb-[8px]">
            Some problems
            <em className="block not-italic font-serif italic font-normal text-themeAccent mt-[2px]">
              are worth sitting with.
            </em>
          </h1>

          <p className="font-sans font-light text-[15px] tracking-[0.02em] text-themeMuted uppercase my-[26px] mb-[34px] max-w-[44ch]">
            Understanding them is where building begins.
          </p>

          <div className="flex items-center gap-[10px] mb-[32px]">
            <span className="w-[6px] h-[6px] rounded-full bg-themeAccent shadow-[0_0_8px_var(--accent)]"></span>
            <span className="font-mono text-[11px] tracking-[0.08em] text-themeMuted uppercase">
              Available for selected opportunities
            </span>
          </div>

          <div className="flex flex-wrap gap-[16px]">
            <a href="#projects" className="btn-primary">
              View selected work →
            </a>
            <a href="https://github.com/AubaidAhmedSaiyed" target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub →
            </a>
          </div>
        </motion.div>

        {/* Right Column: Index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="md:border-l border-themeBorder md:pl-[32px] pt-[28px] md:pt-0 mt-[40px] md:mt-0 border-t md:border-t-0"
        >
          <div className="flex items-baseline gap-[14px] py-[14px] pt-0 border-b border-themeBorder">
            <span className="font-mono text-[11px] text-themeMuted">01</span>
            <span className="font-serif italic text-[1rem] text-themePale">Real problems.</span>
          </div>
          <div className="flex items-baseline gap-[14px] py-[14px] border-b border-themeBorder">
            <span className="font-mono text-[11px] text-themeMuted">02</span>
            <span className="font-serif italic text-[1rem] text-themePale">Thoughtful solutions.</span>
          </div>
          <div className="flex items-baseline gap-[14px] py-[14px] border-b-0 border-themeBorder">
            <span className="font-mono text-[11px] text-themeMuted">03</span>
            <span className="font-serif italic text-[1rem] text-themePale">Lasting impact.</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-[5vw] bottom-[110px] z-[3] hidden md:flex flex-col items-center gap-[12px]"
      >
        <div className="w-[38px] h-[38px] border border-themeBorder rounded-full flex items-center justify-center text-themeMuted text-[14px]">
          ↓
        </div>
        <span className="font-mono text-[10px] tracking-[0.14em] text-themeMuted [writing-mode:vertical-rl]">
          SCROLL TO EXPLORE
        </span>
      </motion.div>

      {/* Silhouette SVG */}
      <div className="relative z-[2] h-[120px] mt-auto">
        <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="w-full h-full block">
          <path d="M0,140 C220,90 380,150 560,110 C760,65 900,130 1100,90 C1300,52 1450,110 1600,80 L1600,200 L0,200 Z" fill="#121722"/>
          <path d="M0,170 C260,120 460,160 680,130 C900,100 1080,150 1300,120 C1420,105 1520,135 1600,125 L1600,200 L0,200 Z" fill="#0D1119"/>
        </svg>
      </div>

    </section>
  );
};

export default Philosophy;
