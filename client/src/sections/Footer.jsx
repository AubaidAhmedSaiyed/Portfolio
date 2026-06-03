import { siteMeta } from '../data/siteData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 py-8 mt-12 bg-black/[0.01]">
      <div className="page-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-zinc-800">{siteMeta.name}</p>
          <p className="mt-1 text-xs text-zinc-500 font-medium">{siteMeta.tagline}</p>
          <p className="mt-3 text-[11px] text-brand-muted">© {year}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-zinc-500">
          <a href={siteMeta.github} target="_blank" rel="noreferrer" className="link-underline hover:text-brand-light font-semibold">
            GitHub
          </a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-brand-light font-semibold">
            LinkedIn
          </a>
          <a href={siteMeta.twitter} target="_blank" rel="noreferrer" className="link-underline hover:text-brand-light font-semibold">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
