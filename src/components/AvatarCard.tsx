import React, { useState, useRef } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

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
        {/* Image Avatar */}
        <div
          className={`w-full h-full transition-all duration-500 ${
            isHovered ? 'grayscale-0 filter-none' : 'grayscale contrast-110 opacity-90'
          }`}
        >
          <img src={avatarImg} alt="Profile" className="w-full h-full object-cover block" />
        </div>

        {/* Live Glow Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#C8FF00]/10 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Floating status dot at corner of avatar */}
      <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#090909] p-0.5 shadow-lg transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        <div className="w-full h-full rounded-full bg-[#C8FF00] animate-pulse" />
      </div>
    </div>
  );
};
