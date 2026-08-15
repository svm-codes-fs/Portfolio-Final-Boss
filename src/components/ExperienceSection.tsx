import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { CheckCircle2, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 bg-[#090909] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-12 sm:mb-16">
          <span className="text-[#C8FF00] font-bold">04</span>
          <span className="text-[#2A2A2A]">/</span>
          <span className="text-[#F5F5F0]">INDUSTRY ENGINEERING EXPERIENCE</span>
          <div className="h-[1px] flex-1 bg-[#1F1F1F] ml-4" />
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F5F5F0] tracking-tight uppercase break-words">
            EXPERIENCE
          </h2>
        </div>

        {/* Editorial Timeline Rows */}
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="border-t border-[#1F1F1F] pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left Year & Duration Monospace */}
              <div className="lg:col-span-3 font-mono-code">
                <span className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] block">
                  {exp.year}
                </span>
                <span className="text-xs text-[#C8FF00] uppercase tracking-wider block mt-1">
                  {exp.period}
                </span>
                <span className="text-[11px] text-[#A0A0A0]/60 uppercase tracking-widest block mt-2">
                  // {exp.locationType}
                </span>
              </div>

              {/* Center Role & Company */}
              <div className="lg:col-span-9 flex flex-col gap-4">
                <div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#F5F5F0] tracking-tight uppercase">
                    {exp.role}
                  </h3>
                  <div className="font-mono-code text-sm text-[#C8FF00] mt-1 uppercase tracking-wider">
                    {exp.company}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                  {exp.description}
                </p>

                {/* Specific bullets */}
                <div className="space-y-3 mt-2">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A0A0A0]">
                      <span className="font-mono-code text-[#C8FF00] font-bold mt-0.5">›</span>
                      <span className="leading-normal">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 font-mono-code text-xs">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#141414] border border-[#222222] text-[#A0A0A0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
