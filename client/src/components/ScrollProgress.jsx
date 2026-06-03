import useScrollProgress from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full origin-left bg-brand transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
