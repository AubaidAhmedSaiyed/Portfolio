import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || coarse) return undefined;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
      aria-hidden
    />
  );
};

export default CursorGlow;
