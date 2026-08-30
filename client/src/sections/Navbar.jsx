import { siteMeta } from '../data/siteData';

export default function Navbar() {
  return (
    <nav className="pt-8 pb-4 bg-themeBg transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md border border-themeBorder flex items-center justify-center font-serif text-lg font-bold bg-themeSurface text-themeInk">
            A
          </div>
          <span className="font-sans font-bold text-[14px] text-themeInk tracking-wide">
            {siteMeta.name}
          </span>
        </div>
        
        {/* Center: Links */}
        <div className="hidden lg:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          <a href="#about" className="font-sans text-[14px] font-semibold text-themeMuted hover:text-themeInk transition-colors">About</a>
          <a href="#work" className="font-sans text-[14px] font-semibold text-themeMuted hover:text-themeInk transition-colors">Projects</a>
          <a href="#journey" className="font-sans text-[14px] font-semibold text-themeMuted hover:text-themeInk transition-colors">Journey</a>
          <a href="#skills" className="font-sans text-[14px] font-semibold text-themeMuted hover:text-themeInk transition-colors">Skills</a>
          <a href="#contact" className="font-sans text-[14px] font-semibold text-themeMuted hover:text-themeInk transition-colors">Contact</a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-themeInk text-themeBg px-5 py-2.5 rounded-lg font-sans text-[13px] font-bold hover:bg-themeAccent transition-colors shadow-sm">
            Résumé PDF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>

      </div>
    </nav>
  );
}