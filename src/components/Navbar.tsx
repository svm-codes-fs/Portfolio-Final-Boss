import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'about', 'work', 'experience', 'achievements', 'what-i-build', 'skills', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#090909]/85 backdrop-blur-md border-b border-[#1F1F1F]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Left Brand Identity */}
          <div
            onClick={() => scrollTo('hero')}
            className="cursor-pointer group flex flex-col items-start select-none"
            data-cursor="link"
          >
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#F5F5F0] group-hover:text-[#C8FF00] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse"></span>
              <span className="font-mono-code text-[10px] tracking-widest text-[#A0A0A0] uppercase group-hover:text-[#F5F5F0] transition-colors">
                AVAILABLE FOR ROLES
              </span>
            </div>
          </div>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-mono-code tracking-widest uppercase pt-1">
            {[
              { id: 'work', label: 'WORK' },
              { id: 'about', label: 'ABOUT' },
              { id: 'experience', label: 'EXPERIENCE' },
              { id: 'skills', label: 'SKILLS' },
              { id: 'contact', label: 'CONTACT' },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  data-cursor="link"
                  className={`transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#C8FF00] font-medium'
                      : 'text-[#A0A0A0] hover:text-[#C8FF00]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8FF00]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: RESUME */}
          <div className="hidden md:flex items-center gap-4 pt-1">
            <button
              onClick={onOpenResume}
              data-cursor="link"
              className="text-[11px] font-mono-code uppercase tracking-widest border border-white/20 px-4 py-2 text-[#F5F5F0] hover:bg-[#F5F5F0] hover:text-[#090909] transition-all flex items-center gap-1.5"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-[11px] font-mono-code tracking-wider text-[#C8FF00] border border-[#C8FF00]/30 rounded-full"
            >
              RESUME ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F0] hover:text-[#C8FF00] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090909]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28">
          <div className="flex flex-col gap-6">
            <div className="font-mono-code text-[11px] text-[#A0A0A0] tracking-widest uppercase border-b border-[#1F1F1F] pb-3">
              // NAVIGATION DIRECTORY
            </div>
            {[
              { id: 'work', label: '01 / WORK', desc: 'Selected Engineering Projects' },
              { id: 'about', label: '02 / ABOUT', desc: 'Background & Philosophy' },
              { id: 'experience', label: '03 / EXPERIENCE', desc: 'Industry & Engineering Timeline' },
              { id: 'what-i-build', label: '04 / DOMAINS', desc: 'Android, Full-Stack, AI/ML' },
              { id: 'skills', label: '05 / SKILLS', desc: 'Languages, Frameworks, Systems' },
              { id: 'contact', label: '06 / CONTACT', desc: 'Get in Touch' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left group flex flex-col py-1"
              >
                <span className="font-display text-2xl font-bold text-[#F5F5F0] group-hover:text-[#C8FF00] transition-colors">
                  {item.label}
                </span>
                <span className="font-mono-code text-xs text-[#A0A0A0] group-hover:text-[#A0A0A0]/80">
                  {item.desc}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1F1F1F] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 bg-[#C8FF00] text-[#090909] font-mono-code font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded"
            >
              <span>VIEW FULL RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex justify-between items-center text-[10px] font-mono-code text-[#A0A0A0] pt-2">
              <span>SHIVAM RAJ</span>
              <span>PATIALA, INDIA</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
