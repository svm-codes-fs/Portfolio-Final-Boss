import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'project' | 'cta' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Detect cursor context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'project') {
          setCursorType('project');
          setCursorText('VIEW PROJECT ↗');
          return;
        } else if (type === 'cta') {
          setCursorType('cta');
          setCursorText("LET'S TALK ↗");
          return;
        } else if (type === 'link') {
          setCursorType('link');
          setCursorText('');
          return;
        } else if (type === 'view') {
          setCursorType('project');
          setCursorText('EXPLORE ↗');
          return;
        }
      }

      // Check if general interactive
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
      if (isInteractive) {
        setCursorType('link');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // RAF Loop for smooth cursor interpolation
    let rafId: number;
    const updatePosition = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.22;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(updatePosition);
    };
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      {cursorType === 'default' && (
        <div className="w-3 h-3 bg-[#F5F5F0] rounded-full ring-2 ring-[#C8FF00]/40 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150" />
      )}

      {cursorType === 'link' && (
        <div className="w-8 h-8 rounded-full border border-[#C8FF00] bg-[#C8FF00]/15 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] transition-all duration-200 animate-pulse" />
      )}

      {(cursorType === 'project' || cursorType === 'cta') && (
        <div className="px-4 py-2 bg-[#C8FF00] text-[#090909] font-mono-code font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 whitespace-nowrap scale-100 transition-transform duration-200">
          <span>{cursorText}</span>
        </div>
      )}
    </div>
  );
};
