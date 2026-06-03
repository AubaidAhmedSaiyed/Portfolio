import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  const features = project?.features || project?.highlights || [];

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="modal-backdrop fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-brand/15 bg-matte-elevated shadow-card"
          >
            {project.preview ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-brand/10">
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ) : null}

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="project-modal-title" className="font-display text-2xl font-bold text-zinc-900">
                    {project.title}
                  </h2>
                </div>
                <button type="button" onClick={onClose} className="btn-ghost shrink-0 text-sm" aria-label="Close">
                  Close
                </button>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">{project.summary || project.description}</p>

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

              {(project.metrics?.length || project.impact) ? (
                <div className="mt-6 rounded-xl border border-brand/10 bg-matte-card p-4">
                  {project.metrics?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((m) => (
                        <span
                          key={m.label}
                          className="inline-flex items-baseline gap-1.5 rounded-md border border-brand/12 bg-matte-elevated px-2.5 py-1"
                        >
                          <span className="text-[10px] font-medium text-zinc-500">{m.label}</span>
                          <span className="font-mono text-xs font-semibold text-brand">{m.value}</span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {project.impact ? (
                    <p className={`text-sm text-zinc-600 ${project.metrics?.length ? 'mt-3' : ''}`}>
                      {project.impact}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <ul className="mt-6 space-y-2.5 border-t border-brand/8 pt-6">
                {features.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary text-sm">
                  GitHub
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                    Live demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ProjectModal;
