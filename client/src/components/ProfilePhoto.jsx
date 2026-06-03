import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';

const GRID_SIZE = 6;

const pillPositions = [
  { label: 'Problem Solving', className: 'left-[-10%] top-[16%] animate-pill-float' },
  { label: 'Product Thinking', className: 'right-0 top-[18%] animate-pill-float', delay: '0.8s' },
  { label: 'System Design', className: 'left-[-4%] bottom-[14%] animate-pill-float', delay: '1.2s' },
  { label: 'Software Engineering', className: 'right-[-2%] bottom-[6%] animate-pill-float', delay: '0.4s' },
];

const ProfilePhoto = () => {
  const initials = siteMeta.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="relative mx-auto w-full max-w-[290px] p-2">
      {/* Organic blob outline behind photo */}
      <div 
        className="absolute -inset-2 -z-10 rounded-[30%_70%_70%_30%_/_50%_60%_30%_60%] border border-brand/35 bg-brand-dim/40 opacity-70 animate-pill-float"
        aria-hidden
      />

      {pillPositions.map((pill) => (
        <span
          key={pill.label}
          className={`absolute z-10 rounded-md border border-brand/25 bg-matte-elevated/95 px-2.5 py-1 font-mono text-[10px] font-semibold text-brand-light shadow-sm ${pill.className}`}
          style={{ animationDelay: pill.delay }}
        >
          {pill.label}
        </span>
      ))}

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="profile-photo-frame relative z-[1] mx-auto aspect-square w-[min(100%,260px)] overflow-hidden rounded-2xl border-4 border-matte-card bg-matte-card p-1.5"
      >
        {siteMeta.profileImage ? (
          <div className="h-full w-full overflow-hidden rounded-xl border border-brand/10 bg-matte">
            <img
              src={siteMeta.profileImage}
              alt={siteMeta.name}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-matte-elevated rounded-xl">
            <span className="font-display text-4xl font-semibold text-brand-light/60">{initials}</span>
            <span className="mt-2 text-[10px] tracking-wide text-zinc-500">Your photo here</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;
