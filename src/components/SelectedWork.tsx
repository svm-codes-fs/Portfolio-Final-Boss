import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { MacbookMockup } from './MacbookMockup';
import { ProjectModal } from './ProjectModal';
import { Github, Link as LinkIcon, Trophy, Sparkles, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SelectedWork: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the floating border beads on scroll
    const beads = document.querySelectorAll('.moving-border-bead');
    beads.forEach((bead, i) => {
      gsap.to(bead, {
        x: i % 2 === 0 ? 40 : -40,
        y: i % 2 === 0 ? -15 : 15,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 bg-[#0a0c10] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Section Header Matching Video / Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 flex flex-col items-center px-2">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#ECE7DE] tracking-tight uppercase mb-2 sm:mb-4 select-none break-words">
            MY PROJECTS
          </h2>
          <p className="font-mono-code text-xs sm:text-sm text-[#9CA3AF] uppercase tracking-[0.2em] leading-relaxed max-w-2xl text-center">
            FROM NATIVE ANDROID WORKFLOWS TO EXPLAINABLE AI PIPELINES — EVERY BUILD HERE SOLVES A REAL-WORLD PROBLEM WITH PRECISION AND SPEED.
          </p>
        </div>

        {/* Project Cards with Alternating Layouts */}
        <div className="space-y-8 sm:space-y-12">
          {PROJECTS.map((project, idx) => {
            const isImageLeft = idx % 2 === 1; // Card 2 has image on left, text on right!

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="relative group w-full"
              >
                {/* Dynamic Moving Element on the Layout Border */}
                <div
                  className={`moving-border-bead absolute z-30 pointer-events-none hidden sm:block ${
                    idx === 0
                      ? 'bottom-[-16px] left-1/2 -translate-x-1/2'
                      : idx === 1
                      ? 'top-1/2 -translate-y-1/2 left-[-16px] hidden lg:block'
                      : 'top-[-16px] right-1/4'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#EBE7DF] shadow-[0_4px_25px_rgba(235,231,223,0.4)] border-2 border-[#161922] flex items-center justify-center animate-pulse">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#161922]" />
                  </div>
                </div>

                {/* Second Floating Accent Pill on Edge */}
                <div
                  className={`moving-border-bead absolute z-30 pointer-events-none hidden sm:block ${
                    idx === 0
                      ? 'top-[-12px] right-16'
                      : idx === 1
                      ? 'bottom-[-14px] right-1/3'
                      : 'bottom-[-14px] left-20'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-[#ECE7DE]/90 shadow-lg border border-white/20" />
                </div>

                {/* Main Dark Slate Card Container */}
                <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-[#161922] border border-white/[0.08] p-5 sm:p-7 lg:p-9 shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                  {/* Grid Container */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
                      isImageLeft ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Content Column (Text + Action Icons + Tags) */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-between min-w-0 ${
                        isImageLeft ? 'lg:col-start-7' : 'lg:col-start-1'
                      }`}
                    >
                      {/* Top Circular Action Buttons (GitHub & Live Link) */}
                      <div
                        className={`flex items-center gap-3.5 mb-6 sm:mb-8 ${
                          isImageLeft ? 'lg:justify-end' : 'justify-start'
                        }`}
                      >
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="link"
                            aria-label="View GitHub Repository"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#C8FF00] transition-all duration-300 shrink-0"
                          >
                            <Github className="w-5 h-5 text-black" />
                          </a>
                        )}

                        <a
                          href={project.liveUrl || project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="link"
                          aria-label="View Project Details or Demo"
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#C8FF00] transition-all duration-300 shrink-0"
                        >
                          <LinkIcon className="w-5 h-5 text-black" />
                        </a>
                      </div>

                      {/* Hackathon Award Badge if applicable */}
                      {project.featuredAward && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] font-mono-code text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-3.5 self-start">
                          <Trophy className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{project.featuredAward}</span>
                        </div>
                      )}

                      {/* Project Title - Sized to fit comfortably on all screens */}
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        data-cursor="project"
                        className="font-headline text-xl sm:text-3xl md:text-4xl font-black text-[#ECE7DE] tracking-tight uppercase cursor-pointer hover:text-[#C8FF00] transition-colors break-words max-w-full"
                      >
                        {project.title}
                      </h3>

                      {/* Subtitle / Description */}
                      <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed mt-3 sm:mt-4 mb-6 sm:mb-8 font-light max-w-xl">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills in Clean All-Caps Monospace */}
                      <div className="flex flex-wrap gap-2.5 sm:gap-4 font-mono-code text-[11px] sm:text-xs tracking-wider uppercase font-medium text-[#ECE7DE]">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/5 hover:text-[#C8FF00] transition-colors"
                          >
                            {tag.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      {/* View Deep-Dive Case Study Button */}
                      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          data-cursor="project"
                          className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#C8FF00] hover:underline"
                        >
                          <span>EXPAND SYSTEM ARCHITECTURE</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>
                        <span className="text-[11px] font-mono-code text-[#9CA3AF]/60 uppercase hidden sm:inline">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Laptop Screen Mockup Column */}
                    <div
                      className={`lg:col-span-6 w-full ${
                        isImageLeft ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'
                      }`}
                    >
                      <MacbookMockup
                        project={project}
                        onClick={() => setActiveModalProject(project)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
