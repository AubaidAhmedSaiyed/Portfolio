import SpotlightCard from './SpotlightCard';
import EngineeringTag from './EngineeringTag';

const ProjectCard = ({ project, onPreview }) => {
  return (
    <SpotlightCard className="h-full">
      <article className="project-card-hover flex h-full flex-col rounded-xl border border-white/[0.07] bg-matte-elevated p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-medium text-zinc-100">{project.title}</h3>
          <button
            type="button"
            onClick={() => onPreview(project)}
            className="btn-ghost shrink-0 text-[11px]"
          >
            Details
          </button>
        </div>

        <p className="mt-2 line-clamp-2 text-[14px] leading-snug text-zinc-400">
          {project.description}
        </p>

        {project.metrics?.length ? (
          <div className="mt-3.5 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-1.5 rounded-md border border-brand/15 bg-brand-dim px-2 py-1"
              >
                <span className="text-[10px] text-zinc-500">{m.label}</span>
                <span className="font-mono text-[11px] text-brand-light">{m.value}</span>
              </span>
            ))}
          </div>
        ) : null}

        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <EngineeringTag key={tag} label={tag} />
            ))}
          </div>
        ) : null}

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((stack) => (
            <span
              key={stack}
              className="rounded border border-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/[0.05] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs link-underline"
          >
            GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs link-underline text-brand-light"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </article>
    </SpotlightCard>
  );
};

export default ProjectCard;
