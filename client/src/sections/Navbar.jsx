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
    if (!mobileOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onResize = () => setMobileOpen(false);
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`nav-shell pointer-events-auto w-full max-w-4xl border px-2 sm:px-4 ${
          mobileOpen ? 'rounded-2xl' : 'rounded-full'
        }`}
        data-scrolled={isScrolled}
      >
        <div className="flex h-11 items-center justify-between gap-2 sm:h-12 sm:gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="link-underline shrink-0 px-3 text-sm font-medium text-zinc-200"
          >
            {siteMeta.shortName}
          </a>

          <nav className="hidden items-center md:flex" aria-label="Main">
            {siteMeta.navLinks.map((link) => {
              const id = sectionFromHref(link.href);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive ? 'nav-link-active text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/[0.04] hover:text-zinc-200 md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <nav
            className="border-t border-white/[0.06] px-2 py-3 md:hidden"
            aria-label="Mobile"
          >
            {siteMeta.navLinks.map((link) => {
              const id = sectionFromHref(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    activeSection === id ? 'bg-white/[0.04] text-zinc-100' : 'text-zinc-500'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
