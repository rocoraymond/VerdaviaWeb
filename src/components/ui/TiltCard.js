import React, { useRef, useState } from 'react';
import { useSound } from './SoundManager';

const TiltCard = ({
  children,
  className = '',
  maxTilt = 8,
  onClick,
  cursorBadge = 'VIEW',
  dark = false
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { playInteractionSound } = useSound();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playInteractionSound('hover');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      data-cursor-badge={cursorBadge}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group border-2 ${
        dark
          ? 'bg-ink text-white border-neutral-800 shadow-[4px_4px_0px_#008a3d] hover:border-bottega'
          : 'bg-white text-ink border-ink shadow-[4px_4px_0px_#0a0a0a] hover:shadow-[6px_6px_0px_#008a3d]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;
