import React from 'react';
import { EDUCATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full py-24 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 bg-[#090909] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-12 sm:mb-16">
          <span className="text-[#C8FF00] font-bold">06</span>
          <span className="text-[#2A2A2A]">/</span>
          <span className="text-[#F5F5F0]">ACADEMIC FOUNDATION</span>
          <div className="h-[1px] flex-1 bg-[#1F1F1F] ml-4" />
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F5F5F0] tracking-tight uppercase break-words">
            EDUCATION
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="space-y-16">
          {EDUCATIONS.map((edu, idx) => (
            <div
              key={idx}
              className="border-t border-[#1F1F1F] pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left Timeline Monospace */}
              <div className="lg:col-span-4 font-mono-code">
                <span className="text-xl sm:text-2xl font-bold text-[#F5F5F0] block">
                  {edu.period}
                </span>
                <span className="text-xs text-[#C8FF00] uppercase tracking-widest block mt-1">
                  STATUS: {edu.status}
                </span>
                <span className="text-[11px] text-[#A0A0A0]/60 uppercase tracking-wider block mt-2">
                  // {edu.location}
                </span>
              </div>

              {/* Right Degree and Institution */}
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#F5F5F0] tracking-tight uppercase">
                    {edu.degree}
                  </h3>
                  <div className="font-mono-code text-sm text-[#C8FF00] uppercase tracking-wider mt-1">
                    {edu.institution}
                  </div>
                </div>

                {edu.details && (
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
