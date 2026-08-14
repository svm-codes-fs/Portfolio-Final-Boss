import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SelectedWork } from './components/SelectedWork';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { WhatIBuildSection } from './components/WhatIBuildSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ResumeModal } from './components/ResumeModal';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F5F5F0] overflow-x-hidden selection:bg-[#C8FF00] selection:text-[#090909]">
      {/* Subtle Film Grain Noise Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Minimal Sticky Navigation */}
      <Navbar onOpenResume={handleOpenResume} onOpenContact={handleOpenContact} />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col w-full">
        {/* 01 — Cinematic Hero Opening Scene */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 02 — Editorial About & Personal Profile */}
        <AboutSection />

        {/* 03 — Selected Work Case Studies */}
        <SelectedWork />

        {/* 04 — Industry Engineering Experience */}
        <ExperienceSection />

        {/* 05 — Hackathon Honors & Certifications */}
        <AchievementsSection />

        {/* 06 — Academic Education Foundation */}
        <EducationSection />

        {/* 07 — What I Build Capability Rows */}
        <WhatIBuildSection />

        {/* 08 — Editorial Technical Inventory Skills */}
        <SkillsSection />

        {/* 09 — Cinematic Contact Finale */}
        <ContactSection onOpenResume={handleOpenResume} />
      </main>

      {/* 10 — Minimal Footer */}
      <Footer />

      {/* Full Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
