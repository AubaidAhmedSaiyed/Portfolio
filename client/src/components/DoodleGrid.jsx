import React from 'react';

const DoodleGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none doodle" aria-hidden="true">
      {/* A few ambient dots */}
      <div className="dot-ambient top-[20%] left-[15%]"></div>
      <div className="dot-ambient top-[60%] left-[80%]"></div>
      <div className="dot-ambient top-[80%] left-[30%]"></div>
      <div className="dot-ambient top-[10%] left-[70%]"></div>
    </div>
  );
};

export default DoodleGrid;
