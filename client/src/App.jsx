import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import JourneyContact from './sections/JourneyContact';

// Premium Dark Theme. 
// Deep charcoal background, stark white/gray text.
function HomePage() {
  return (
    <div className="bg-[#161211] min-h-screen text-[#e8e3e1] font-sans selection:bg-white/20 selection:text-white antialiased">
      <main className="w-full flex flex-col items-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <JourneyContact />
      </main>
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
