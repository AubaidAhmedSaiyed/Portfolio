const SectionWave = ({ variant = 'cream' }) => {
  const fill = variant === 'cream' ? '#ffffff' : '#fdfcf9';

  return (
    <div className="relative -mt-1 mb-6 h-10 w-full overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          fill={fill}
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
          opacity="0.85"
        />
        <path
          fill="none"
          stroke="rgba(26,61,47,0.1)"
          strokeWidth="1"
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24"
        />
      </svg>
    </div>
  );
};

export default SectionWave;
