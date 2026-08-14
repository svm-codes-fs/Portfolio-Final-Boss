import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 px-6 sm:px-8 lg:px-16 bg-[#060606] border-t border-[#191919] font-mono-code text-xs text-[#A0A0A0]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="font-headline font-bold text-lg text-[#F5F5F0] tracking-wider block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-[#A0A0A0] uppercase tracking-widest mt-0.5 block">
              COMPUTER ENGINEER · SOFTWARE DEVELOPER · THAPAR INSTITUTE
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"
            >
              GITHUB
            </a>
            <span className="text-[#222222]">/</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"
            >
              LINKEDIN
            </a>
            <span className="text-[#222222]">/</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              data-cursor="link"
              className="text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>

        {/* Bottom Tier & Clock */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-[#141414] text-[11px]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#F5F5F0]">
              2026 © {PERSONAL_INFO.name}
            </span>
            <span className="text-[#262626]">|</span>
            <span className="text-[#A0A0A0]/80 uppercase tracking-widest">
              DESIGNED + ENGINEERED WITH PRECISION.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              <span className="text-[#F5F5F0]">PATIALA, IN [{time || '00:00:00'} IST]</span>
            </div>

            <button
              onClick={scrollToTop}
              data-cursor="link"
              className="p-2 rounded-full border border-[#222222] text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
