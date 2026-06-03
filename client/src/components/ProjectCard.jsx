import SpotlightCard from './SpotlightCard';

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectCard = ({ project, onPreview }) => {
  const featureList = project.features || project.highlights || [];

  return (
    <SpotlightCard className="h-full">
      <article className="project-card-hover flex flex-col overflow-hidden rounded-2xl border border-brand/12 bg-matte-elevated shadow-sm">
        {project.preview ? (
          <button
            type="button"
            onClick={() => onPreview?.(project)}
            className="group relative w-full overflow-hidden border-b border-brand/10 bg-matte text-left"
            aria-label={`View details for ${project.title}`}
          >
            <div className="flex h-6 items-center gap-1.5 border-b border-brand/8 bg-matte-card px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-red-300/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
            </div>
            <div className="relative aspect-[21/9] overflow-hidden sm:aspect-[21/8]">
              <img
                src={project.preview}
                alt={`${project.title} product preview`}
                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </button>
        ) : null}

        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:gap-10 md:p-8 lg:gap-12 lg:p-9">
          <div className="min-w-0 md:w-[38%] md:shrink-0 lg:w-[34%]">
            <h3 className="font-display text-xl font-bold tracking-tight text-zinc-900 lg:text-[1.35rem]">
              {project.title}
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((stack) => (
                <span
                  key={stack}
                  className="rounded-full border border-brand/12 bg-brand-dim px-2.5 py-1 text-[11px] font-medium text-brand"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link inline-flex items-center gap-2 text-sm font-medium text-zinc-600"
              >
                <GitHubIcon />
                GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link inline-flex items-center gap-2 text-sm font-medium text-zinc-600"
                >
                  <ExternalIcon />
                  Live demo
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => onPreview?.(project)}
                className="project-link text-sm font-medium text-zinc-500"
              >
                Full details
              </button>
            </div>
          </div>

          <div className="min-w-0 flex-1 border-t border-brand/8 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-12">
            <ul className="grid gap-2 sm:grid-cols-2">
              {featureList.slice(0, 6).map((feature) => (
                <li key={feature} className="flex gap-2 text-[13px] leading-snug text-zinc-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {(project.metrics?.length || project.impact) ? (
              <div className="mt-5 rounded-xl border border-brand/10 bg-matte-card p-4">
                {project.metrics?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-baseline gap-1.5 rounded-md border border-brand/12 bg-matte-elevated px-2.5 py-1"
                      >
                        <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                          {m.label}
                        </span>
                        <span className="font-mono text-xs font-semibold text-brand">{m.value}</span>
                      </span>
                    ))}
                  </div>
                ) : null}
                {project.impact ? (
                  <p className={`text-[12px] leading-relaxed text-zinc-600 ${project.metrics?.length ? 'mt-3' : ''}`}>
                    {project.impact}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
};

export default ProjectCard;
