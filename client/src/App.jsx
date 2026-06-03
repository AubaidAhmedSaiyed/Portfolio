import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import ProductThinking from './sections/ProductThinking';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import useActiveSection from './hooks/useActiveSection';
import { siteMeta } from './data/siteData';
import './App.css';

function HomePage() {
  const activeSection = useActiveSection(siteMeta.sectionIds);

  return (
    <div className="app-shell relative">
      <CursorGlow />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <main className="page-container relative z-[1]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <ProductThinking />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0f131c',
            color: '#e4e4e7',
            border: '1px solid rgba(61, 111, 212, 0.2)',
            fontSize: '13px',
          },
          success: { iconTheme: { primary: '#3d6fd4', secondary: '#0f131c' } },
        }}
      />
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
