import React, { useState, useRef } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

interface AvatarCardProps {
  onOpenContact?: () => void;
}

export const AvatarCard: React.FC<AvatarCardProps> = ({ onOpenContact }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenContact}
      data-cursor="cta"
      className="relative z-30 group cursor-pointer select-none transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(800px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
      }}
    >
      {/* Interactive Tooltip Speech Bubble */}
      <div
        className={`absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-[#161a24]/95 border border-white/20 backdrop-blur-md text-[11px] font-mono-code text-[#ECE7DE] shadow-2xl flex items-center gap-2 transition-all duration-300 pointer-events-none z-40 ${
          isHovered ? 'opacity-100 -translate-y-2 scale-100' : 'opacity-0 translate-y-2 scale-95'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
        <span>I'm open to work! DM or Book a Call Now...</span>
      </div>

      {/* Main Avatar Container */}
      <div
        className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 ${
          isHovered
            ? 'border-[#C8FF00]/80 shadow-[0_0_30px_rgba(200,255,0,0.25)] scale-105'
            : 'border-white/15 bg-[#181a20]/90 hover:border-white/40'
        }`}
      >
        {/* SVG Anime Boy Avatar */}
        <div
          className={`w-full h-full transition-all duration-500 ${
            isHovered ? 'grayscale-0 filter-none' : 'grayscale contrast-110 opacity-90'
          }`}
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full block"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width="400" height="400" fill="#7965B2" rx="36" />

            {/* Subtle backdrop circle gradient */}
            <circle cx="200" cy="200" r="160" fill="#8873C4" opacity="0.6" />

            {/* Shoulders / Black T-shirt */}
            <path
              d="M 80 400 C 85 320, 130 290, 200 290 C 270 290, 315 320, 320 400 Z"
              fill="#101114"
            />
            {/* T-shirt Collar */}
            <path
              d="M 160 290 C 175 315, 225 315, 240 290 Z"
              fill="#1E2026"
            />

            {/* Neck */}
            <rect x="175" y="240" width="50" height="60" rx="10" fill="#E6BCA8" />
            {/* Neck shadow */}
            <path d="M 175 240 L 225 240 L 225 262 C 200 272, 185 260, 175 255 Z" fill="#D3A591" />

            {/* Ears */}
            {/* Left Ear */}
            <ellipse cx="118" cy="205" rx="20" ry="26" fill="#F3CDB8" stroke="#121316" strokeWidth="9" />
            <path d="M 115 195 C 122 202, 122 215, 112 218" fill="none" stroke="#D3A591" strokeWidth="6" strokeLinecap="round" />

            {/* Right Ear */}
            <ellipse cx="282" cy="205" rx="20" ry="26" fill="#F3CDB8" stroke="#121316" strokeWidth="9" />
            <path d="M 285 195 C 278 202, 278 215, 288 218" fill="none" stroke="#D3A591" strokeWidth="6" strokeLinecap="round" />

            {/* Face / Head Base */}
            <path
              d="M 125 155 C 125 120, 150 120, 200 120 C 250 120, 275 120, 275 155 C 275 225, 260 265, 200 265 C 140 265, 125 225, 125 155 Z"
              fill="#F3CDB8"
              stroke="#121316"
              strokeWidth="9"
              strokeLinejoin="round"
            />

            {/* Eyes & Eyebrows (Relaxed hooded anime gaze) */}
            {/* Left Eyebrow */}
            <path d="M 135 155 Q 160 142 182 155" fill="none" stroke="#121316" strokeWidth="8" strokeLinecap="round" />
            {/* Right Eyebrow */}
            <path d="M 218 155 Q 240 142 265 155" fill="none" stroke="#121316" strokeWidth="8" strokeLinecap="round" />

            {/* Left Eye */}
            <path
              d="M 136 174 C 144 165, 172 165, 180 174 L 180 188 C 172 198, 144 198, 136 188 Z"
              fill="#FFFFFF"
              stroke="#121316"
              strokeWidth="7"
            />
            {/* Left Pupil */}
            <ellipse cx="160" cy="180" rx="14" ry="12" fill="#121316" />
            <ellipse cx="157" cy="177" rx="4" ry="3" fill="#FFFFFF" opacity="0.8" />
            {/* Left Eyelid Fold */}
            <path d="M 136 172 L 180 172" stroke="#121316" strokeWidth="8" strokeLinecap="round" />

            {/* Right Eye */}
            <path
              d="M 220 174 C 228 165, 256 165, 264 174 L 264 188 C 256 198, 228 198, 220 188 Z"
              fill="#FFFFFF"
              stroke="#121316"
              strokeWidth="7"
            />
            {/* Right Pupil */}
            <ellipse cx="240" cy="180" rx="14" ry="12" fill="#121316" />
            <ellipse cx="237" cy="177" rx="4" ry="3" fill="#FFFFFF" opacity="0.8" />
            {/* Right Eyelid Fold */}
            <path d="M 220 172 L 264 172" stroke="#121316" strokeWidth="8" strokeLinecap="round" />

            {/* Hair - Back & Sides (Wavy Messy Black Anime Hair) */}
            {/* Hair base top */}
            <path
              d="M 100 150 C 90 85, 130 50, 200 50 C 270 50, 310 85, 300 150 C 315 165, 310 195, 290 195 C 290 175, 280 150, 275 140 C 265 140, 255 160, 250 165 C 240 150, 235 140, 225 140 C 215 150, 210 160, 200 165 C 190 160, 185 150, 175 140 C 165 140, 160 150, 150 165 C 145 160, 135 140, 125 140 C 120 150, 110 175, 110 195 C 90 195, 85 165, 100 150 Z"
              fill="#141519"
              stroke="#121316"
              strokeWidth="9"
              strokeLinejoin="round"
            />

            {/* Detailed Bangs & Layering */}
            <path
              d="M 130 115 L 142 145 L 155 125 L 175 150 L 190 125 L 205 150 L 225 125 L 245 150 L 258 125 L 270 145"
              fill="#18191E"
              stroke="#121316"
              strokeWidth="8"
              strokeLinejoin="round"
            />

            {/* Hair texture strands */}
            <path d="M 150 75 Q 165 95 160 115" stroke="#2D303A" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 200 70 Q 200 95 200 115" stroke="#2D303A" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 250 75 Q 235 95 240 115" stroke="#2D303A" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Hair top tufts */}
            <path
              d="M 140 70 Q 150 45 170 55 Q 185 40 200 52 Q 215 40 230 55 Q 250 45 260 70"
              fill="none"
              stroke="#121316"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Live Glow Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#C8FF00]/10 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Floating status dot at corner of avatar */}
      <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#090909] p-0.5 shadow-lg">
        <div className="w-full h-full rounded-full bg-[#C8FF00] animate-pulse" />
      </div>
    </div>
  );
};
