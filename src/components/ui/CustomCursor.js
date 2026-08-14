import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [badgeText, setBadgeText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor-badge]');
      if (target) {
        setBadgeText(target.getAttribute('data-cursor-badge') || 'VIEW');
        setIsHovered(true);
      } else if (
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('input') ||
        e.target.closest('textarea')
      ) {
        setBadgeText('');
        setIsHovered(true);
      } else {
        setBadgeText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing animation loop
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      requestRef.current = requestAnimationFrame(animateTrailing);
    };
    requestRef.current = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Dot */}
      <div
        className="fixed w-2 h-2 -ml-1 -mt-1 rounded-full bg-emerald-400 pointer-events-none shadow-[0_0_8px_#34d399] transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0 : 1})`
        }}
      />

      {/* Trailing Fluid Ring / Badge Container */}
      <div
        className={`fixed -ml-6 -mt-6 rounded-full flex items-center justify-center pointer-events-none transition-[width,height,background-color,border-color] duration-300 ${
          badgeText
            ? 'w-20 h-20 -ml-10 -mt-10 bg-emerald-500/90 text-verdavia-darker font-syne font-black text-[10px] tracking-widest backdrop-blur-md shadow-[0_0_25px_rgba(52,211,153,0.6)]'
            : isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 bg-emerald-400/20 border border-emerald-400/60 backdrop-blur-[2px] shadow-[0_0_15px_rgba(52,211,153,0.3)]'
            : 'w-10 h-10 -ml-5 -mt-5 border border-emerald-400/40 bg-emerald-400/5'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {badgeText && <span className="animate-pulse">{badgeText}</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
