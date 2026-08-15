import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#C8FF00]" />;
      case 1:
        return <Award className="w-5 h-5 text-[#C8FF00]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#C8FF00]" />;
    }
  };

  return (
    <section
      id="achievements"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-14 bg-[#0a0c10] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-12 sm:mb-16">
          <span className="text-[#C8FF00] font-bold">05</span>
          <span className="text-white/20">/</span>
          <span className="text-[#ECE7DE]">HONORS & CREDENTIALS</span>
          <div className="h-px flex-1 bg-white/10 ml-4" />
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#ECE7DE] tracking-tight uppercase break-words">
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Clean, Non-Overlapping Structured Achievement Cards */}
        <div className="space-y-8 sm:space-y-10">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={ach.number}
              className="relative rounded-2xl sm:rounded-3xl bg-[#141720]/80 border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-white/25 hover:bg-[#161a24] shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                {/* Left Badge / Rank Header */}
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#C8FF00]/10 border border-[#C8FF00]/20 flex items-center justify-center">
                      {getIcon(idx)}
                    </div>
                    <span className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest font-semibold">
                      RANK // {ach.number}
                    </span>
                  </div>

                  {/* Clean Rank Label with proper wrap and fitting font size */}
                  <div className="mt-1">
                    <div className="inline-block px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="font-headline text-lg sm:text-xl font-bold text-[#F5F5F0] tracking-wide uppercase group-hover:text-[#C8FF00] transition-colors">
                        {ach.place}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono-code text-xs text-[#9CA3AF] uppercase">
                    YEAR: {ach.year}
                  </span>
                </div>

                {/* Right Achievement Details */}
                <div className="lg:col-span-8 flex flex-col gap-3.5">
                  <div>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#ECE7DE] tracking-tight uppercase leading-snug">
                      {ach.title}
                    </h3>
                    <div className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-wider mt-1.5 font-medium">
                      {ach.context}
                    </div>
                    {ach.subcontext && (
                      <div className="font-mono-code text-[11px] text-[#9CA3AF]/80 uppercase tracking-wider mt-1">
                        {ach.subcontext}
                      </div>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-light">
                    {ach.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono-code text-xs">
                    {ach.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#ECE7DE]/90 uppercase text-[11px] tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
