import { siteMeta } from '../data/siteData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="page-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-200">{siteMeta.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{siteMeta.tagline}</p>
          <p className="mt-3 text-[11px] text-zinc-600">© {year}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-zinc-500">
          <a href={siteMeta.github} target="_blank" rel="noreferrer" className="link-underline hover:text-brand-light">
            GitHub
          </a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-brand-light">
            LinkedIn
          </a>
          <a href={siteMeta.twitter} target="_blank" rel="noreferrer" className="link-underline hover:text-brand-light">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
