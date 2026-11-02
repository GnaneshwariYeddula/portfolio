import React, { useState } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import AuroraBackground from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import AIStudio from './components/AIStudio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#06080F] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Backgrounds (React Bits & Dribbble inspired) */}
      <AuroraBackground />
      <ParticlesBackground particleCount={50} speed={0.5} />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        
        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <StatsBar />
          <About />
          <AIStudio />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

