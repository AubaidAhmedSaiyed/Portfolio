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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <div
  className={`nav-shell pointer-events-auto top-0 w-full max-w-5xl border overflow-hidden flex flex-col ${
    mobileOpen ? 'rounded-2xl' : 'rounded-full'
  }`}
  data-scrolled={isScrolled}
>
        <div className="flex h-10 items-center justify-between px-4 sm:px-5">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-sm font-semibold text-zinc-800"
          >
            {siteMeta.shortName}
          </a>

          <nav
            className="hidden items-center justify-center md:flex"
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
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'nav-link-active'
                      : 'text-zinc-600 hover:text-zinc-900'
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-black/[0.04] md:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="
              md:hidden
              w-full
              border-t
              border-brand/10
              bg-[var(--surface-elevated)]
              px-3
              py-2
            "
            aria-label="Mobile"
          >
            {siteMeta.navLinks.map((link) => {
              const id = sectionFromHref(link.href);
              const isActive = activeSection === id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-black/[0.04] text-brand-light font-semibold'
                      : 'text-zinc-600 hover:bg-black/[0.03]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;