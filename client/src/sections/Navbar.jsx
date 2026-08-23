import { useEffect, useState } from 'react';
import { siteMeta } from '../data/siteData';
import { scrollToSection } from '../utils/scrollTo';

const Navbar = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = 'hidden';

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', onResize);
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setMobileOpen(false);
  };

  const sectionFromHref = (href) => href.replace('#', '');

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 py-6 pointer-events-auto">
      <div className="w-full max-w-[90rem] flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-4">
          <div className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 20L8 8l4 8 4-8 4 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-[1px] h-4 bg-zinc-700" />
          <a
            href="#intro"
            onClick={(e) => handleNavClick(e, '#intro')}
            className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            Aubaid Ahmed
          </a>
        </div>

        {/* Right Side: Links */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main"
        >
          {siteMeta.navLinks.map((link) => {
            const id = sectionFromHref(link.href);
            const isActive = activeSection === id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[9px] font-sans font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <a 
            href="https://github.com/AubaidAhmedSaiyed" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors ml-4"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            Github
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-white lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-[80px] inset-x-4 bg-matte-elevated border border-brand/10 rounded-xl overflow-hidden shadow-2xl lg:hidden flex flex-col p-2">
          {siteMeta.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-6 py-4 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 hover:bg-brand/5 hover:text-white transition-colors border-b border-brand/5 last:border-0 rounded-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;