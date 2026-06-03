import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';

const GRID_SIZE = 6;

const pillPositions = [
  { label: 'MERN', className: 'left-0 top-[8%] animate-pill-float' },
  { label: 'Python', className: 'right-0 top-[18%] animate-pill-float', delay: '0.8s' },
  { label: 'REST', className: 'left-[-4%] bottom-[22%] animate-pill-float', delay: '1.2s' },
  { label: 'Express', className: 'right-[-2%] bottom-[12%] animate-pill-float', delay: '0.4s' },
];

const ProfilePhoto = () => {
  const initials = siteMeta.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="hero-blue-wash relative mx-auto w-full max-w-[300px]">
      <div className="absolute -inset-8 overflow-hidden rounded-2xl opacity-50" aria-hidden>
        <div
          className="grid h-full w-full gap-[2px]"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
            <div
              key={i}
              className="hero-grid-cell animate-grid-pulse rounded-[1px]"
              style={{ animationDelay: `${(i % GRID_SIZE) * 0.18}s` }}
            />
          ))}
        </div>
      </div>

      {pillPositions.map((pill) => (
        <span
          key={pill.label}
          className={`absolute z-10 rounded-md border border-brand/20 bg-matte-card/90 px-2.5 py-1 font-mono text-[10px] text-brand-light ${pill.className}`}
          style={{ animationDelay: pill.delay }}
        >
          {pill.label}
        </span>
      ))}

      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="profile-photo-frame relative z-[1] mx-auto aspect-square w-[min(100%,272px)] overflow-hidden rounded-2xl border border-brand/20 bg-matte-card"
      >
        {siteMeta.profileImage ? (
          <img
            src={siteMeta.profileImage}
            alt={siteMeta.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-matte-elevated">
            <span className="font-display text-4xl font-semibold text-zinc-500">{initials}</span>
            <span className="mt-2 text-[10px] tracking-wide text-zinc-600">Your photo here</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;
