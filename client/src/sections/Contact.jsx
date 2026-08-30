import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full pt-[10vw] pb-[5vw] bg-themeBg border-t border-themeBorder overflow-hidden">
      
      <div className="layout-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-[14px] mb-[30px]">
            <span className="w-[34px] h-[1px] bg-themeAccent"></span>
            <span className="font-mono text-[11.5px] tracking-[0.18em] text-themeAccent uppercase">
              Connect
            </span>
          </div>
          
          <h2 className="font-serif font-medium text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.08] tracking-[-0.01em] text-themeIvory mb-[24px]">
            Let's build<br />
            <em className="block not-italic font-serif italic font-normal text-themeAccent mt-[4px]">
              something together.
            </em>
          </h2>
          
          <p className="font-sans font-light text-[16px] text-themeMuted max-w-[44ch] mb-[60px] leading-[1.6]">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
          
          {/* CLEARLY DISPLAYED LINKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] pt-[40px] border-t border-themeBorder">
            
            {/* Email Block */}
            <div>
              <span className="block font-mono text-[11px] tracking-[0.14em] text-themeMuted uppercase mb-[16px]">
                Direct Email
              </span>
              <a href={`mailto:${siteMeta.email}`} className="font-serif text-[1.5rem] md:text-[1.8rem] text-themeIvory hover:text-themeAccent transition-colors">
                {siteMeta.email}
              </a>
            </div>

            {/* Socials & Resume Block */}
            <div>
              <span className="block font-mono text-[11px] tracking-[0.14em] text-themeMuted uppercase mb-[16px]">
                Profiles & Resume
              </span>
              <div className="flex flex-wrap gap-[16px]">
                <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="btn-primary">
                  Resume PDF ↓
                </a>
                <a href={siteMeta.github} target="_blank" rel="noreferrer" className="btn-ghost">
                  GitHub ↗
                </a>
                <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                  LinkedIn ↗
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;
