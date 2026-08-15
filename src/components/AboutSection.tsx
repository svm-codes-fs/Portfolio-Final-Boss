import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ShieldCheck, Sparkles, Cpu, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 bg-[#090909] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-12 sm:mb-16">
          <span className="text-[#C8FF00] font-bold">02</span>
          <span className="text-[#2A2A2A]">/</span>
          <span className="text-[#F5F5F0]">ABOUT & PHILOSOPHY</span>
          <div className="h-[1px] flex-1 bg-[#1F1F1F] ml-4" />
        </div>

        {/* Huge Editorial Statement */}
        <div className="mb-12 sm:mb-20">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F0] leading-snug uppercase break-words">
            {PERSONAL_INFO.statement}
          </h2>
        </div>

        {/* Two-Column Editorial Narrative & Technical Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
            <p className="text-[#F5F5F0] font-normal">
              {PERSONAL_INFO.bio}
            </p>
            <p>
              My engineering approach prioritizes <strong className="text-[#F5F5F0] font-semibold">deterministic logic, offline reliability, and transparent intelligence</strong>. Whether building native Android apps that maintain 100% data integrity without network access, architecting Explainable AI models that demystify algorithmic decisions, or crafting responsive full-stack portals, I focus on what creates real, tangible leverage for users.
            </p>
            <p>
              Currently pursuing a Bachelor of Engineering in Computer Engineering at <span className="text-[#F5F5F0]">Thapar Institute of Engineering and Technology</span> (Patiala), building upon a rigorous 3-year Polytechnic diploma where I led award-winning hackathon teams and engineered production features during industry internships.
            </p>

            {/* Oracle Certification Verification Pill */}
            <div className="mt-4 p-4 rounded-lg bg-[#111111] border border-[#222222] flex items-start gap-4">
              <div className="p-2 rounded bg-[#C8FF00]/10 text-[#C8FF00] mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-xs font-semibold text-[#F5F5F0] uppercase tracking-wider">
                    ORACLE CERTIFIED ASSOCIATE — AGENTIC AI
                  </span>
                  <span className="font-mono-code text-[10px] text-[#C8FF00] px-1.5 py-0.5 rounded bg-[#C8FF00]/15">
                    2026
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#A0A0A0] mt-0.5">
                  Oracle University · Credential ID: 330498011AAI26OFA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Personal Profile Metadata */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="border-t lg:border-t-0 lg:border-l border-[#1F1F1F] pt-8 lg:pt-0 lg:pl-10 flex flex-col gap-6 font-mono-code">
              <span className="text-xs text-[#C8FF00] uppercase tracking-widest">
                // TECHNICAL ATTRIBUTES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { label: 'LOCATION', value: 'PATIALA, INDIA', tag: 'ON-SITE & REMOTE' },
                  { label: 'ACADEMIC', value: 'B.E. COMPUTER ENG.', tag: 'THAPAR INSTITUTE' },
                  { label: 'CORE SPECIALTY', value: 'ANDROID & NATIVE JAVA', tag: 'OFFLINE ARCHITECTURE' },
                  { label: 'WEB ENGINEERING', value: 'FULL STACK (REACT & NODE)', tag: 'TYPE-SAFE' },
                  { label: 'INTELLIGENCE', value: 'AI / ML & XAI', tag: 'EXPLAINABLE SYSTEMS' },
                  { label: 'BACKEND & DATA', value: 'FLASK, REST, SQLITE, SQL', tag: 'ACID INTEGRITY' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3 border-b border-[#1A1A1A] group hover:border-[#C8FF00]/40 transition-colors"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[10px] text-[#A0A0A0]/60 uppercase tracking-widest">
                        {item.label}
                      </span>
                      <span className="text-[9px] text-[#C8FF00] tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#F5F5F0] uppercase tracking-wider group-hover:text-[#C8FF00] transition-colors">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
