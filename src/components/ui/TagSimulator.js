import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flower2, RotateCcw, ShieldCheck, Check, Compass, Cpu } from 'lucide-react';
import { useSound } from './SoundManager';
import CircularBadge from './CircularBadge';

const seedVarieties = [
  {
    id: 'wildflower',
    name: 'Wildflower Blend',
    germination: '7-14 Days',
    blooms: 'Poppies, Daisies, Chamomile',
    color: '#008a3d',
    badge: 'Bee Friendly',
    seedDensity: '150 seeds / dm²'
  },
  {
    id: 'lavender',
    name: 'Alpine Lavender',
    germination: '14-21 Days',
    blooms: 'Fragrant Purple Lavandula',
    color: '#7c3aed',
    badge: 'Aromatic Herb',
    seedDensity: '120 seeds / dm²'
  },
  {
    id: 'basil',
    name: 'Italian Genovese Basil',
    germination: '5-10 Days',
    blooms: 'Culinary Sweet Basil Leaves',
    color: '#15803d',
    badge: 'Edible Botanical',
    seedDensity: '180 seeds / dm²'
  },
  {
    id: 'mint',
    name: 'Mountain Field Mint',
    germination: '10-15 Days',
    blooms: 'Refreshing Mentha Spearmint',
    color: '#0d9488',
    badge: 'Pollinator Magnet',
    seedDensity: '140 seeds / dm²'
  }
];

const TagSimulator = () => {
  const [selectedSeed, setSelectedSeed] = useState(seedVarieties[0]);
  const [travelerName, setTravelerName] = useState('ALEX RIVERA');
  const [destination, setDestination] = useState('KYOTO // ZERO CARBON');
  const [isFlipped, setIsFlipped] = useState(false);
  const [isBloomed, setIsBloomed] = useState(false);
  const { playInteractionSound } = useSound();

  const handlePlant = () => {
    playInteractionSound('bloom');
    setIsBloomed(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#008a3d', '#0a0a0a', '#ffffff', '#16a34a'],
      ticks: 180,
      gravity: 0.9
    });
  };

  const handleReset = () => {
    setIsBloomed(false);
    playInteractionSound('click');
  };

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-8 mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-white font-mono text-xs font-bold tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-bottega" />
            <span>[LAB.01] // BOTANICAL CAD SIMULATOR</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-black text-ink tracking-tight uppercase leading-none">
            3D Seed Tag <span className="text-bottega">Blueprint</span>
          </h2>
        </div>
        <div className="text-xs font-mono text-ink-muted text-right space-y-1">
          <div>SPECIFICATION: 350 GSM COTTON PULP</div>
          <div>BIODEGRADATION CYCLE: &lt; 14 DAYS</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Customizer Terminal */}
        <div className="lg:col-span-5 space-y-6 bg-white border-2 border-ink p-6 sm:p-8 shadow-[4px_4px_0px_#0a0a0a] rounded-2xl">
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center justify-between">
              <span>01 // TRAVELER PASSPORT ID</span>
              <span className="text-bottega">[ASCII]</span>
            </label>
            <input
              type="text"
              value={travelerName}
              onChange={(e) => setTravelerName(e.target.value.toUpperCase())}
              maxLength={22}
              className="w-full px-4 py-2.5 bg-paper border-2 border-ink text-ink font-mono text-sm font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
              placeholder="YOUR NAME"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center justify-between">
              <span>02 // DESTINATION FLIGHT PATH</span>
              <span className="text-bottega">[GEO-TARGET]</span>
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value.toUpperCase())}
              maxLength={28}
              className="w-full px-4 py-2.5 bg-paper border-2 border-ink text-ink font-mono text-sm font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
              placeholder="DESTINATION"
            />
          </div>

          {/* Seed Variety Selection */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
              03 // EMBEDDED SEED GENETICS
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {seedVarieties.map((seed) => (
                <button
                  key={seed.id}
                  onClick={() => {
                    setSelectedSeed(seed);
                    playInteractionSound('click');
                  }}
                  className={`p-3 border-2 text-left transition-all rounded-xl flex flex-col justify-between ${
                    selectedSeed.id === seed.id
                      ? 'bg-bottega text-white border-ink shadow-[2px_2px_0px_#0a0a0a]'
                      : 'bg-paper text-ink border-ink hover:bg-paper-dark'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-syne font-bold">{seed.name}</span>
                    {selectedSeed.id === seed.id && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className={`text-[10px] font-mono ${selectedSeed.id === seed.id ? 'text-emerald-100' : 'text-bottega'}`}>
                    {seed.seedDensity}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setIsFlipped(!isFlipped);
                playInteractionSound('click');
              }}
              className="flex-1 py-3 px-4 border-2 border-ink bg-paper hover:bg-paper-dark text-ink font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0a0a0a] transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>FLIP SIDE ({isFlipped ? 'FRONT' : 'BACK'})</span>
            </button>

            {!isBloomed ? (
              <button
                onClick={handlePlant}
                data-cursor-badge="PLANT"
                className="flex-1 py-3 px-4 bg-bottega hover:bg-bottega-dark text-white border-2 border-ink font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#0a0a0a] transition hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                <Flower2 className="w-4 h-4" />
                <span>Simulate Planting</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-4 bg-ink text-white border-2 border-ink font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0a0a0a] transition"
              >
                <span>RESET LAB</span>
              </button>
            )}
          </div>
        </div>

        {/* Right 3D Visualizer Container */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[480px] bg-paper-dark border-2 border-ink p-8 rounded-2xl shadow-[4px_4px_0px_#0a0a0a] perspective-1000">
          {/* Orbital Badge Accent */}
          <div className="absolute top-4 right-4 hidden sm:block">
            <CircularBadge size={100} text="VERDAVIA • SEED TAG • 350 GSM • " />
          </div>

          {/* 3D Flippable Tag Container */}
          <div
            className="w-72 sm:w-80 h-[430px] relative cursor-pointer my-4 transform-style-3d"
            style={{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={() => {
              setIsFlipped(!isFlipped);
              playInteractionSound('click');
            }}
          >
            {/* FRONT OF TAG */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border-2 border-ink shadow-[6px_6px_0px_#0a0a0a] bg-white backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)',
                zIndex: isFlipped ? 0 : 10
              }}
            >
              {/* Top Eyelet */}
              <div className="flex flex-col items-center -mt-9">
                <div className="w-3.5 h-10 bg-amber-800 rounded-full border border-ink" />
                <div className="w-7 h-7 rounded-full bg-paper border-2 border-ink flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-bottega" />
                </div>
              </div>

              {/* Tag Body */}
              <div className="space-y-4 text-left mt-2">
                <div className="flex items-center justify-between text-[9px] font-mono text-ink-muted border-b border-ink/20 pb-1">
                  <span>[VER'DA:VI:A]</span>
                  <span>REF // 2025</span>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-bottega font-bold">
                    TRAVELER PASSPORT
                  </div>
                  <div className="font-syne font-black text-2xl text-ink tracking-tight uppercase">
                    {travelerName || 'TRAVELER NAME'}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-ink">
                  <Compass className="w-4 h-4 text-bottega" />
                  <span className="font-bold">{destination || 'GLOBAL EXPEDITION'}</span>
                </div>
              </div>

              {/* Seed Spec Box */}
              <div className="p-3.5 rounded-xl bg-paper-dark border border-ink space-y-1 text-left font-mono text-xs">
                <div className="flex justify-between text-[10px] text-ink-muted font-bold">
                  <span>GENETICS:</span>
                  <span className="text-bottega uppercase">{selectedSeed.badge}</span>
                </div>
                <div className="font-bold text-ink text-sm font-syne">
                  {selectedSeed.name}
                </div>
                <div className="text-[10px] text-ink-muted">
                  Germination: {selectedSeed.germination}
                </div>
              </div>

              {/* Tag Footer Barcode */}
              <div className="flex items-center justify-between pt-2 border-t-2 border-ink text-[9px] font-mono text-ink">
                <span className="flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3 h-3 text-bottega" />
                  100% BIODEGRADABLE
                </span>
                <span className="font-bold">VERD-2025</span>
              </div>
            </div>

            {/* BACK OF TAG */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border-2 border-ink shadow-[6px_6px_0px_#0a0a0a] bg-bottega text-white backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                zIndex: isFlipped ? 10 : 0
              }}
            >
              <div className="text-left space-y-1 pt-2 border-b border-white/20 pb-2">
                <div className="text-[10px] font-mono tracking-widest uppercase opacity-80">
                  [PLANTING PROTOCOL]
                </div>
                <h4 className="font-syne font-black text-xl text-white uppercase">
                  Return to Earth
                </h4>
              </div>

              {/* 3 Step Planting Guide */}
              <div className="space-y-3 text-xs font-mono text-white">
                <div className="flex gap-2 items-start">
                  <span className="w-5 h-5 rounded-full bg-white text-bottega flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span>Submerge tag in water for 24h post-journey.</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="w-5 h-5 rounded-full bg-white text-bottega flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span>Cover with 3mm fertile soil in sunlight.</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="w-5 h-5 rounded-full bg-white text-bottega flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                  <span>Water daily. Sprout begins in 7-14 days.</span>
                </div>
              </div>

              <div className="p-3 bg-bottega-dark border border-white/30 rounded-xl text-left font-mono">
                <span className="text-[9px] block opacity-80">EXPECTED BLOOMS:</span>
                <span className="text-xs font-syne font-bold">{selectedSeed.blooms}</span>
              </div>

              <div className="text-center text-[9px] font-mono opacity-60">
                Click anywhere to flip back
              </div>
            </div>
          </div>

          {/* Interactive Result Card */}
          {isBloomed && (
            <div className="mt-4 p-4 rounded-xl bg-white border-2 border-ink shadow-[4px_4px_0px_#008a3d] flex items-center gap-4 text-left animate-fadeIn max-w-sm">
              <div className="w-10 h-10 rounded-full bg-bottega text-white flex items-center justify-center shrink-0">
                <Flower2 className="w-5 h-5 animate-spinSlow" />
              </div>
              <div className="space-y-0.5">
                <div className="font-syne font-bold text-xs text-ink uppercase flex items-center gap-2">
                  <span>Tag Planted into Soil</span>
                  <span className="text-[9px] font-mono text-white bg-bottega px-1.5 py-0.5 rounded">ACTIVE</span>
                </div>
                <p className="text-[11px] font-mono text-ink-muted">
                  Sprouts active in {selectedSeed.germination}. Your travels have yielded a living habitat.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TagSimulator;
