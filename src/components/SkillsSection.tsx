import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-28 lg:py-36 px-6 sm:px-8 lg:px-16 bg-[#090909] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-16">
          <span className="text-[#C8FF00] font-bold">08</span>
          <span className="text-[#2A2A2A]">/</span>
          <span className="text-[#F5F5F0]">TECHNICAL INVENTORY</span>
          <div className="h-[1px] flex-1 bg-[#1F1F1F] ml-4" />
        </div>

        <div className="mb-20">
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F5F5F0] tracking-tight uppercase">
            SKILLS
          </h2>
          <p className="font-mono-code text-xs sm:text-sm text-[#A0A0A0] mt-3">
            Deterministic competencies, tooling & frameworks.
          </p>
        </div>

        {/* Editorial Inventory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 font-mono-code">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="flex flex-col border-t border-[#1F1F1F] pt-6">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-[#C8FF00] uppercase tracking-wider">
                  {cat.category}
                </span>
                <span className="text-[10px] text-[#A0A0A0]/40">
                  // {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="group flex flex-col pb-3 border-b border-[#141414] hover:border-[#C8FF00]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#F5F5F0] group-hover:text-[#C8FF00] transition-colors font-sans uppercase">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                      )}
                    </div>
                    {skill.level && (
                      <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider mt-0.5">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Footnote */}
        <div className="mt-16 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono-code text-xs text-[#A0A0A0]">
          <div>
            <span className="text-[#C8FF00]">● </span>
            <span>SYSTEM FOCUS: DATA STRUCTURES · OBJECT-ORIENTED DESIGN · CLEAN ARCHITECTURE</span>
          </div>
          <span className="text-[11px] text-[#A0A0A0]/60 uppercase">
            CERTIFIED AGENTIC AI (ORACLE)
          </span>
        </div>
      </div>
    </section>
  );
};
