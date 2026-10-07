import { useEffect, useRef } from 'react';

export default function DustCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const dc = canvasRef.current;
    if (!dc) return;
    const dx = dc.getContext('2d');
    const dp = [];
    let DW, DH;
    
    function ds() {
      DW = dc.width = window.innerWidth;
      DH = dc.height = window.innerHeight;
    }
    ds();
    window.addEventListener('resize', ds);
    
    for (let i = 0; i < 70; i++) {
      dp.push({
        x: Math.random() * DW,
        y: Math.random() * DH,
        r: 0.6 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.05 - Math.random() * 0.2,
        a: Math.random() * 6
      });
    }
    
    let animationId;
    function loop() {
      dx.clearRect(0, 0, DW, DH);
      dp.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.a += 0.01;
        if (p.y < -10) { p.y = DH + 10; p.x = Math.random() * DW; }
        if (p.x < -10) p.x = DW + 10;
        if (p.x > DW + 10) p.x = -10;
        
        const k = Math.max(0, 1 - Math.hypot(p.x - DW * 0.82, p.y - DH * 0.14) / (DW * 0.7));
        const al = (0.15 + 0.5 * k) * (0.6 + 0.4 * Math.sin(p.a));
        
        dx.fillStyle = `rgba(255,214,160,${al.toFixed(3)})`;
        dx.shadowColor = 'rgba(255,190,120,0.8)';
        dx.shadowBlur = p.r * 4;
        dx.beginPath();
        dx.arc(p.x, p.y, p.r, 0, 7);
        dx.fill();
      });
      animationId = requestAnimationFrame(loop);
    }
    loop();
    
    return () => {
      window.removeEventListener('resize', ds);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="dust" className="fixed inset-0 pointer-events-none w-full h-full z-10" />;
}