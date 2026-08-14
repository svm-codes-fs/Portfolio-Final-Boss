import React, { useState } from 'react';
import { WHAT_I_BUILD } from '../data/portfolioData';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

export const WhatIBuildSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleRow = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="what-i-build"
      className="relative w-full py-28 lg:py-36 px-6 sm:px-8 lg:px-16 bg-[#090909] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-16">
          <span className="text-[#C8FF00] font-bold">07</span>
          <span className="text-[#2A2A2A]">/</span>
          <span className="text-[#F5F5F0]">ENGINEERING CAPABILITIES</span>
          <div className="h-[1px] flex-1 bg-[#1F1F1F] ml-4" />
        </div>

        <div className="mb-20">
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F5F5F0] tracking-tight uppercase">
            WHAT I BUILD
          </h2>
          <p className="font-mono-code text-xs sm:text-sm text-[#A0A0A0] mt-3">
            Core architectural disciplines & system capabilities.
          </p>
        </div>

        {/* Editorial Rows */}
        <div className="border-t border-[#1F1F1F]">
          {WHAT_I_BUILD.map((domain, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={domain.number}
                className={`border-b border-[#1F1F1F] transition-colors duration-300 ${
                  isExpanded ? 'bg-[#0E0E0E]' : 'hover:bg-[#0D0D0D]'
                }`}
              >
                <div
                  onClick={() => toggleRow(idx)}
                  data-cursor="link"
                  className="py-8 sm:py-10 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group select-none"
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="font-mono-code text-sm sm:text-base font-bold text-[#C8FF00] tracking-widest">
                      {domain.number}
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F0] tracking-tight uppercase group-hover:text-[#C8FF00] transition-colors">
                        {domain.title}
                      </h3>
                      <p className="font-mono-code text-xs text-[#A0A0A0] mt-1">
                        {domain.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Arrow & Expand Indicator */}
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className="w-10 h-10 rounded-full border border-[#262626] group-hover:border-[#C8FF00] flex items-center justify-center transition-colors">
                      <ArrowUpRight
                        className={`w-5 h-5 text-[#A0A0A0] group-hover:text-[#C8FF00] transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-[#C8FF00]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Capabilities Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn font-mono-code">
                    <div className="lg:col-span-3 text-xs text-[#C8FF00] uppercase tracking-widest">
                      // CORE SPECIFICATION
                    </div>
                    <div className="lg:col-span-9 flex flex-col gap-4 font-sans">
                      <p className="text-sm sm:text-base text-[#F5F5F0] leading-relaxed">
                        {domain.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2 font-mono-code">
                        {domain.capabilities.map((cap, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-3 py-1 rounded bg-[#161616] border border-[#2A2A2A] text-xs text-[#A0A0A0]"
                          >
                            + {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
