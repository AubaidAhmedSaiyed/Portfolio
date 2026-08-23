import { siteMeta } from '../data/siteData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 py-12 mt-16 bg-black/[0.01]">
      <div className="layout-wide grid gap-10 sm:grid-cols-3">
        <div>
          <p className="text-sm font-bold text-zinc-900">{siteMeta.name}</p>
          <p className="mt-3 text-xs leading-relaxed text-zinc-500">
            {siteMeta.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-4">Navigation</p>
          <div className="flex flex-col gap-2 text-sm text-zinc-500">
            <a href="#about" className="hover:text-brand-light transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-light transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-light transition-colors">Projects</a>
            <a href="#contact" className="hover:text-brand-light transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-4">Connect</p>
          <div className="flex flex-col gap-2 text-sm text-zinc-500">
            <a href={siteMeta.github} target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">GitHub</a>
            <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">LinkedIn</a>
            <a href={siteMeta.twitter} target="_blank" rel="noreferrer" className="hover:text-brand-light transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      <div className="layout-wide mt-12 pt-6 border-t border-brand/5">
         <p className="text-[11px] text-zinc-400">© {year} {siteMeta.name}. Built with purpose.</p>
      </div>
    </footer>
  );
};

export default Footer;
