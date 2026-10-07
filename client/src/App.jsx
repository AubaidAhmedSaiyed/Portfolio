import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import JourneyContact from './sections/JourneyContact';
import DustCanvas from './components/DustCanvas';
import AmbientBackground from './components/AmbientBackground';

function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const totalSlides = 6;
  const lockRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth <= 900 || Date.now() < lockRef.current || Math.abs(e.deltaY) < 30) return;
      lockRef.current = Date.now() + 1000;
      setActiveIdx((prev) => Math.max(0, Math.min(totalSlides - 1, prev + (e.deltaY > 0 ? 1 : -1))));
    };

    let sx = 0;
    const handleTouchStart = (e) => { sx = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      const d = e.changedTouches[0].clientX - sx;
      if (Math.abs(d) > 60) {
        setActiveIdx((prev) => Math.max(0, Math.min(totalSlides - 1, prev + (d < 0 ? 1 : -1))));
      }
    };

    const handleMouseMove = (e) => {
      const r = document.documentElement.style;
      r.setProperty('--rx', ((e.clientX / window.innerWidth - 0.5) * 7).toFixed(2));
      r.setProperty('--ry', ((e.clientY / window.innerHeight - 0.5) * -5).toFixed(2));
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const slideNames = ['Intro', 'Thinking', 'Journey', 'Work', 'Skills', 'Contact'];

  return (
    <>
      <AmbientBackground />
      <DustCanvas />
      
      <header className="hud top">
        <div className="wm">Aubaid Ahmed</div>
      </header>
      
      <main id="stage">
        <div className={`s ${activeIdx === 0 ? 'on' : ''}`}>
          <Hero />
        </div>
        
        <div className={`s ${activeIdx === 1 ? 'on' : ''}`} style={{ display: 'block', overflowY: 'auto', padding: '80px 5vw' }}>
          <About />
        </div>
        
        <div className={`s ${activeIdx === 2 ? 'on' : ''}`} style={{ display: 'block', overflowY: 'auto', padding: '80px 5vw' }}>
          <Experience />
        </div>
        
        <div className={`s ${activeIdx === 3 ? 'on' : ''}`} style={{ display: 'block', overflowY: 'auto', padding: '80px 5vw' }}>
          <Projects />
        </div>
        
        <div className={`s ${activeIdx === 4 ? 'on' : ''}`} style={{ display: 'block', overflowY: 'auto', padding: '80px 5vw' }}>
          <Skills />
        </div>
        
        <div className={`s ${activeIdx === 5 ? 'on' : ''}`}>
          <JourneyContact />
        </div>
      </main>

      <footer className="hud bot">
        <div className="cnt">{String(activeIdx + 1).padStart(2, '0')} <small>/ {String(totalSlides).padStart(2, '0')}</small></div>
        <div className="tl">
          {slideNames.map((name, i) => (
            <button key={name} className={activeIdx === i ? 'on' : ''} onClick={() => setActiveIdx(i)}>
              <span className="mono">{name}</span>
            </button>
          ))}
        </div>
        <div className="arr">
          <button aria-label="Previous" onClick={() => setActiveIdx(p => Math.max(0, p - 1))}>←</button>
          <button aria-label="Next" onClick={() => setActiveIdx(p => Math.min(totalSlides - 1, p + 1))}>→</button>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
