import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const bokehRef = useRef(null);

  useEffect(() => {
    const b = bokehRef.current;
    if (!b) return;
    const c = ['rgba(255,176,96,', 'rgba(255,130,80,', 'rgba(255,214,140,', 'rgba(210,110,90,'];
    for (let i = 0; i < 26; i++) {
      const e = document.createElement('i');
      const s = 30 + Math.random() * 120;
      e.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;background:${c[i % 4]}${(0.1 + Math.random() * 0.3)});animation-delay:-${Math.random() * 12}s`;
      b.appendChild(e);
    }
  }, []);

  return (
    <>
      <div className="amb" id="amb" style={{ transform: 'translate(0%, 0%) scale(1.08)' }}>
        <img id="ai" alt="" />
        <div className="bk" id="bk" ref={bokehRef}></div>
      </div>
      <div className="grade"></div>
      <div className="warm"></div>
      <div className="grain"></div>
    </>
  );
}