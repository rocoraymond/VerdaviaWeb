import React from 'react';
import { Sprout } from 'lucide-react';

const CircularBadge = ({
  text = 'VERDAVIA • BOTANICAL ARCHITECTURE • REGENERATIVE • ',
  size = 140,
  className = '',
  icon: CenterIcon = Sprout
}) => {
  const radius = 40;
  const viewBoxSize = 100;
  const center = viewBoxSize / 2;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Rotating Circular Text SVG */}
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full animate-spinSlow"
      >
        <defs>
          <path
            id="circularPath"
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="text-[7.5px] font-mono font-bold uppercase fill-current tracking-[0.22em]">
          <textPath href="#circularPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Static Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-8 h-8 rounded-full bg-bottega text-white flex items-center justify-center shadow-md">
          <CenterIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default CircularBadge;
