import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroVisual } from './HeroVisual';
import { AvatarCard } from './AvatarCard';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Terminal, Cpu, Sparkles } from 'lucide-react';

const FLOATING_SKILLS = [
  { text: 'ANDROID SDK', x: '8%', y: '20%', delay: 0.2, scale: 0.9, speed: 1.2 },
  { text: 'JAVA / OOP', x: '80%', y: '16%', delay: 0.4, scale: 0.85, speed: 0.9 },
  { text: 'PYTHON', x: '84%', y: '65%', delay: 0.3, scale: 0.9, speed: 1.1 },
  { text: 'REACT & TS', x: '10%', y: '72%', delay: 0.5, scale: 0.85, speed: 0.8 },
  { text: 'FLASK & REST', x: '74%', y: '38%', delay: 0.6, scale: 0.8, speed: 1.3 },
  { text: 'AI / ML (XAI)', x: '16%', y: '45%', delay: 0.7, scale: 0.8, speed: 1.0 },
  { text: 'SQLITE & SQL', x: '60%', y: '82%', delay: 0.8, scale: 0.85, speed: 0.7 },
  { text: 'FULL-STACK', x: '26%', y: '84%', delay: 0.9, scale: 0.8, speed: 1.15 },
];

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const metaTopRef = useRef<HTMLDivElement>(null);
  const avatarWrapperRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const footerMetaRef = useRef<HTMLDivElement>(null);
  const visualContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial state
      gsap.set([title1Ref.current, title2Ref.current], { y: 100, opacity: 0 });
      gsap.set(metaTopRef.current, { opacity: 0, y: -20 });
      gsap.set(avatarWrapperRef.current, { opacity: 0, scale: 0.8, y: 30 });
      gsap.set(footerMetaRef.current, { opacity: 0, y: 20 });
      gsap.set(visualContainerRef.current, { opacity: 0, scale: 0.85 });

      if (badgesRef.current) {
        gsap.set(badgesRef.current.children, { opacity: 0, scale: 0.7 });
      }

      // Entrance Sequence
      tl.to(metaTopRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
        .to(visualContainerRef.current, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' }, '-=0.6')
        .to(title1Ref.current, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' }, '-=1.0')
        .to(title2Ref.current, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' }, '-=0.9')
        .to(avatarWrapperRef.current, { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'back.out(1.6)' }, '-=0.7')
        .to(
          badgesRef.current ? badgesRef.current.children : [],
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: 'back.out(1.4)'
          },
          '-=0.5'
        )
        .to(footerMetaRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');

      // Continuous floating physics for badges
      if (badgesRef.current) {
        Array.from(badgesRef.current.children).forEach((badge, i) => {
          const config = FLOATING_SKILLS[i] || { speed: 1 };
          gsap.to(badge as HTMLElement, {
            y: `+=${14 * config.speed}`,
            x: `+=${(i % 2 === 0 ? 8 : -8) * config.speed}`,
            duration: 3 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2
          });
        });
      }

      // Subtle float for the avatar card
      if (avatarWrapperRef.current) {
        gsap.to(avatarWrapperRef.current, {
          y: '+=10',
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }, heroRef);

    // Mouse parallax for floating tags
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;

      if (badgesRef.current) {
        Array.from(badgesRef.current.children).forEach((badge, idx) => {
          const depth = 15 + (idx % 4) * 8;
          gsap.to(badge as HTMLElement, {
            xPercent: nx * depth,
            yPercent: ny * depth,
            duration: 1.2,
            ease: 'power1.out',
            overwrite: 'auto'
          });
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about') || document.getElementById('work');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0a0c10] bg-grid-pattern selection:bg-[#C8FF00] selection:text-black"
    >
      {/* Background Reticle Blueprint Diagram */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] lg:w-[720px] lg:h-[720px] opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 4" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.05" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.05" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.1" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* Background Central 3D Visual */}
      <div
        ref={visualContainerRef}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-70"
      >
        <div className="w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] lg:w-[620px] lg:h-[620px] translate-y-4 sm:translate-y-0 translate-x-0 sm:translate-x-32 lg:translate-x-48">
          <HeroVisual />
        </div>
      </div>

      {/* Floating Editorial Skill Badges */}
      <div ref={badgesRef} className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        {FLOATING_SKILLS.map((skill, index) => (
          <div
            key={index}
            style={{
              left: skill.x,
              top: skill.y,
              transform: `scale(${skill.scale})`,
            }}
            className="absolute pointer-events-auto select-none"
            data-cursor="link"
          >
            <div className={`group px-3 py-1 rounded-full bg-[#141720]/90 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-[#C8FF00] hover:text-[#C8FF00] flex items-center gap-1.5 ${
              index === 2 ? 'rotate-12 border-white/40' : index === 0 ? '-rotate-6 border-[#C8FF00] text-[#C8FF00]' : index === 4 ? '-rotate-12' : index === 5 ? 'rotate-6' : ''
            }`}>
              <span className="font-mono-code text-[10px] tracking-widest text-[#A0A0A0] group-hover:text-[#C8FF00] uppercase font-medium">
                {skill.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Top Editorial Metadata Header */}
      <div
        ref={metaTopRef}
        className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono-code text-[11px] sm:text-xs text-[#A0A0A0]"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[#C8FF00] font-semibold tracking-wider">01</span>
          <span className="text-white/20">/</span>
          <span className="text-[#F5F5F0] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            COMPUTER ENGINEERING
          </span>
          <span className="w-8 sm:w-12 h-px bg-white/20 hidden sm:inline-block" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          <span className="hidden md:inline-flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span>SOFTWARE DEVELOPER</span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[#ECE7DE]">THAPAR [BATCH 2028]</span>
        </div>
      </div>

      {/* Center Cinematic Main Typography + Floating Avatar Composition */}
      <div className="relative z-20 my-auto pt-6 sm:pt-10 pb-6 sm:pb-8 max-w-6xl w-full mx-auto flex flex-col items-center">
        {/* Giant Monolithic Name */}
        <div className="relative w-full flex flex-col items-center select-none">
          <div className="overflow-hidden w-full text-center">
            <h1
              ref={title1Ref}
              className="font-headline text-3xl sm:text-6xl md:text-8xl lg:text-[7.2rem] xl:text-[8.2rem] font-black tracking-tight text-[#ECE7DE] leading-[0.9] uppercase"
            >
              SHIVAM
            </h1>
          </div>

          <div className="overflow-hidden w-full text-center mt-1 sm:mt-2">
            <h1
              ref={title2Ref}
              className="font-headline text-3xl sm:text-6xl md:text-8xl lg:text-[7.2rem] xl:text-[8.2rem] font-black tracking-tight text-outline-white leading-[0.9] uppercase"
            >
              RAJ
            </h1>
          </div>

          {/* Centered Floating Avatar Card positioned neatly below the name so RAJ is completely visible */}
          <div
            ref={avatarWrapperRef}
            className="mt-6 sm:mt-8 z-30 flex justify-center w-full max-w-sm"
          >
            <AvatarCard onOpenContact={onOpenContact} />
          </div>
        </div>

        {/* Dual Flanking Contextual Statements (as in video/screenshot) */}
        <div className="w-full mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center text-xs sm:text-sm font-light text-[#9CA3AF]">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] mt-1.5 shrink-0 animate-pulse" />
            <p className="leading-relaxed">
              I currently study Computer Engineering at <span className="text-[#ECE7DE] font-medium">Thapar Institute</span> (Batch of 2028), currently available for high-impact software internships and developer roles.
            </p>
          </div>

          <div className="flex items-start md:justify-end gap-3 text-left md:text-right">
            <p className="leading-relaxed">
              Focused on <span className="text-[#ECE7DE] font-medium">Android engineering, full-stack systems</span>, and <span className="text-[#ECE7DE] font-medium">machine learning pipelines</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Technical Metadata & Scroll Action */}
      <div
        ref={footerMetaRef}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-white/10 pt-6 font-mono-code text-xs"
      >
        {/* Coordinates & Status */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-[#A0A0A0]">
          <div>
            <span className="text-[#A0A0A0]/60 block text-[9px] uppercase tracking-widest">
              LOCATION
            </span>
            <span className="text-[#F5F5F0] uppercase tracking-wider">
              PATIALA, INDIA
            </span>
          </div>
          <div>
            <span className="text-[#A0A0A0]/60 block text-[9px] uppercase tracking-widest">
              GRADUATION
            </span>
            <span className="text-[#F5F5F0] uppercase tracking-wider">
              BATCH OF 2028
            </span>
          </div>
          <div>
            <span className="text-[#A0A0A0]/60 block text-[9px] uppercase tracking-widest">
              STATUS
            </span>
            <span className="text-[#C8FF00] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
              AVAILABLE FOR INTERNSHIPS
            </span>
          </div>
        </div>

        {/* Scroll CTA Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToNext}
            data-cursor="link"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#A0A0A0] hover:text-[#C8FF00] transition-colors py-2"
          >
            <span className="font-mono-code">SCROLL TO EXPLORE ↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};
