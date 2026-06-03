import React from 'react';

const WaveDivider = () => {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="h-10 w-full"
        style={{ fill: 'var(--surface-elevated)' }}
      >
        <path
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
