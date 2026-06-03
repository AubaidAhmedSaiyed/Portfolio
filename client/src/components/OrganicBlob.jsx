import React from 'react';

const OrganicBlob = ({ className = '', style = {} }) => {
  return (
    <div
      className={`absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blobFloat ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

export default OrganicBlob;
