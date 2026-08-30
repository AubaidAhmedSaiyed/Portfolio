import { Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import JourneyContact from './sections/JourneyContact';
import Skills from './sections/Skills';
import Experience from './sections/Experience';

function HomePage() {
  return (
    <div className="bg-themeBg min-h-screen text-themeInk font-sans relative overflow-x-hidden">
      
      {/* Bluish Thin Wave Background (Below Hero) */}
      <div className="absolute top-[60vh] md:top-[80vh] left-0 w-full h-[800px] z-0 pointer-events-none opacity-40 flex flex-col justify-start">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[1200px]">
          <path d="M0 200 C 300 0, 600 400, 900 200 C 1200 0, 1440 200, 1440 200" stroke="#93C5FD" strokeWidth="3" />
          <path d="M0 250 C 400 50, 800 450, 1440 250" stroke="#BFDBFE" strokeWidth="2" />
          <path d="M0 150 C 500 350, 1000 -50, 1440 150" stroke="#60A5FA" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-24 flex flex-col gap-24 md:gap-32">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <JourneyContact />
        </main>
      </div>
    </div>
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
