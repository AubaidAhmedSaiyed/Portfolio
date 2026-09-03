import { siteMeta } from '../data/siteData';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="pt-10 pb-4 relative z-50 mix-blend-multiply"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className="font-serif text-[22px] text-[#1A1918] tracking-tight italic">
            Aubaid.
          </span>
        </div>
        
        {/* Right: Links */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="#work" className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5651] hover:text-[#1A1918] transition-colors">Work</a>
          <a href="#about" className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5651] hover:text-[#1A1918] transition-colors">Thinking</a>
          <a href="#skills" className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5651] hover:text-[#1A1918] transition-colors">Capabilities</a>
          <a href="#contact" className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5651] hover:text-[#1A1918] transition-colors">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
}