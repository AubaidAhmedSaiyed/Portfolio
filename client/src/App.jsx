import { useEffect, useState } from 'react';
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
import useActiveSection from './hooks/useActiveSection';
import { siteMeta } from './data/siteData';
import './App.css';

function HomePage() {
  const activeSection = useActiveSection(siteMeta.sectionIds);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const defaultTheme =
      savedTheme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(defaultTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-shell relative">
      <ScrollProgress />
      <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} />
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
            background: theme === 'dark' ? '#0f172a' : '#ffffff',
            color: theme === 'dark' ? '#e2e8f0' : '#1c1b18',
            border: theme === 'dark' ? '1px solid rgba(148, 163, 184, 0.15)' : '1px solid rgba(26, 61, 47, 0.2)',
            fontSize: '13px',
            fontFamily: 'Geist Sans, sans-serif',
          },
          success: {
            iconTheme: {
              primary: theme === 'dark' ? '#7dd3fc' : '#1a3d2f',
              secondary: theme === 'dark' ? '#0f172a' : '#ffffff',
            },
          },
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
