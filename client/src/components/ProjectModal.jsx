import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EngineeringTag from './EngineeringTag';

const ExpenseGlassPreview = () => (
  <div className="mt-5 grid grid-cols-3 gap-2">
    {['Spending', 'Categories', 'FX Rate'].map((label) => (
      <div key={label} className="glass-panel rounded-lg p-3">
        <p className="text-[10px] text-zinc-500">{label}</p>
        <p className="mt-1 font-mono text-sm text-zinc-200">—</p>
      </div>
    ))}
  </div>
);

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
            className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-xl border border-brand/20 bg-matte-elevated p-6 shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="project-modal-title" className="font-display text-lg font-semibold text-zinc-50">
                {project.title}
              </h2>
              <button type="button" onClick={onClose} className="btn-ghost shrink-0" aria-label="Close">
                Close
              </button>
            </div>

            <p className="mt-3 text-[14px] leading-snug text-zinc-400">{project.summary}</p>

            {project.glassPreview ? <ExpenseGlassPreview /> : null}

            {project.metrics?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((m) => (
                  <span
                    key={m.label}
                    className="rounded-md border border-brand/15 bg-brand-dim px-2.5 py-1"
                  >
                    <span className="text-[10px] text-zinc-500">{m.label}</span>
                    <span className="ml-1.5 font-mono text-xs text-brand-light">{m.value}</span>
                  </span>
                ))}
              </div>
            ) : null}

            {project.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <EngineeringTag key={tag} label={tag} />
                ))}
              </div>
            ) : null}

            <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
              {project.highlights.map((item) => (
                <li key={item} className="text-[14px] text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs link-underline"
              >
                GitHub
              </a>
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                  Live demo
                </a>
              ) : null}
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ProjectModal;
