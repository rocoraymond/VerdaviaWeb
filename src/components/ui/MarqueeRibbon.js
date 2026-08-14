import React from 'react';

const MarqueeRibbon = ({
  items = [
    "REGENERATIVE TRAVEL",
    "PLANTABLE SEED PASSPORTS",
    "ZERO SINGLE-USE PLASTIC",
    "350 GSM RECYCLED COTTON",
    "BOTTEGA GREEN BIO-FIBERS",
    "WILDFLOWER GERMINATION 100%"
  ],
  direction = 'normal',
  rotate = 0,
  className = '',
  variant = 'bottega' // 'bottega' | 'ink' | 'outline' | 'paper'
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  const variantStyles = {
    bottega: 'bg-bottega text-white border-y-2 border-ink shadow-[2px_2px_0px_#0a0a0a]',
    ink: 'bg-ink text-white border-y-2 border-bottega',
    outline: 'bg-paper text-ink border-y-2 border-ink',
    paper: 'bg-white text-bottega border-y-2 border-ink'
  };

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3 ${variantStyles[variant] || variantStyles.bottega} ${className}`}
      style={{
        transform: rotate ? `rotate(${rotate}deg) scale(1.03)` : undefined,
        transformOrigin: 'center center'
      }}
    >
      <div
        className={`flex whitespace-nowrap gap-8 items-center ${
          direction === 'reverse' ? 'animate-marqueeReverse' : 'animate-marquee'
        } hover:[animation-play-state:paused]`}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6 text-xs md:text-sm uppercase tracking-[0.2em] font-mono font-bold">
            <span>{item}</span>
            <span className="w-2 h-2 bg-current inline-block transform rotate-45" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeRibbon;
