import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, Github, CheckCircle2, ShieldAlert, Database, Cpu, Layers } from 'lucide-react';
import { ProjectMockupVisual } from './ProjectMockupVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#090909]/90 backdrop-blur-xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F0F0F] border border-[#262626] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between">
        {/* Modal Top Header */}
        <div className="flex items-start justify-between border-b border-[#222222] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-2">
              <span className="text-[#C8FF00] font-bold">{project.number}</span>
              <span>/</span>
              <span>{project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F0] tracking-tight">
              {project.title}
            </h2>
            <p className="font-mono-code text-xs sm:text-sm text-[#C8FF00] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            data-cursor="link"
            className="p-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#A0A0A0] hover:text-[#F5F5F0] hover:border-[#C8FF00] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Award Highlight Banner if present */}
        {project.featuredAward && (
          <div className="mb-8 p-4 rounded-xl bg-[#C8FF00]/10 border border-[#C8FF00]/30 flex items-center justify-between font-mono-code text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] animate-pulse" />
              <span className="text-[#F5F5F0] font-bold tracking-wider uppercase">
                {project.featuredAward}
              </span>
            </div>
            <span className="text-[#C8FF00]">{project.featuredAwardYear}</span>
          </div>
        )}

        {/* Visual Mockup Preview */}
        <div className="mb-8">
          <ProjectMockupVisual type={project.visualType} />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 font-mono-code">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-[#141414] border border-[#222222]">
              <span className="text-[10px] text-[#A0A0A0] uppercase block tracking-wider mb-1">
                {m.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-[#F5F5F0]">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Narrative & Architecture */}
        <div className="space-y-6 text-[#A0A0A0] leading-relaxed text-sm sm:text-base border-b border-[#222222] pb-8 mb-8">
          <div>
            <h3 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-2">
              // ARCHITECTURAL OVERVIEW
            </h3>
            <p className="text-[#F5F5F0]">{project.description}</p>
          </div>

          <div>
            <h3 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-3">
              // KEY ENGINEERING HIGHLIGHTS
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-2">
            <h3 className="font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-2">
              // APPLIED TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-mono-code text-[#F5F5F0]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs">
          <div className="text-[#A0A0A0]">
            ROLE: <span className="text-[#F5F5F0] font-semibold">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F0] text-[#090909] font-bold hover:bg-[#C8FF00] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
