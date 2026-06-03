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

  return (
    <div className="app-shell relative">
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
            background: '#ffffff',
            color: '#1c1b18',
            border: '1px solid rgba(26, 61, 47, 0.2)',
            fontSize: '13px',
            fontFamily: 'Geist Sans, sans-serif',
          },
          success: {
            iconTheme: {
              primary: '#1a3d2f',
              secondary: '#ffffff',
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
