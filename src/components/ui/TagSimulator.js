import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Flower2,
  RotateCcw,
  ShieldCheck,
  Check,
  Compass,
  Cpu,
  Mountain,
  Utensils,
  Wind,
  Sparkles,
  QrCode,
  Droplets,
  Sun
} from 'lucide-react';
import { useSound } from './SoundManager';
import CircularBadge from './CircularBadge';

const seedVarieties = [
  {
    id: 'wildflower',
    code: '01',
    name: 'Wildflower Blend',
    germination: '7-14 Days',
    blooms: 'Poppies, Daisies, Chamomile',
    badge: 'Bee Friendly',
    seedDensity: '150 seeds / dm²',
    desc: 'Native pollinator blend supporting wild bees & butterflies.',
    theme: {
      tagType: 'BOTANICAL PASSPORT',
      serialPrefix: 'WLD-2025',
      accentColor: '#008a3d',
      frontBg: 'bg-[#fafaf7]',
      frontBorder: 'border-ink',
      frontShadow: 'shadow-[6px_6px_0px_#0a0a0a]',
      headerBg: 'bg-bottega text-white',
      badgeBg: 'bg-bottega text-white',
      accentText: 'text-bottega',
      cardStyle: 'editorial',
      cordColor: 'bg-amber-800',
      eyeletBorder: 'border-ink',
      eyeletDot: 'bg-bottega',
      sealText: '100% BIODEGRADABLE',
      backBg: 'bg-bottega text-white',
      backBorder: 'border-ink',
      backAccentBg: 'bg-bottega-dark',
      backStepNumBg: 'bg-white text-bottega',
      backHeader: 'Return to Earth',
      backSubheader: '[PLANTING PROTOCOL]',
      tagPill: 'POLLINATOR SEED INFUSED'
    }
  },
  {
    id: 'lavender',
    code: '02',
    name: 'Alpine Lavender',
    germination: '14-21 Days',
    blooms: 'Fragrant Purple Lavandula',
    badge: 'Aromatic Herb',
    seedDensity: '120 seeds / dm²',
    desc: 'Calming alpine perennial with soothing herbal aroma.',
    theme: {
      tagType: 'ALTITUDE SANCTUARY PASS',
      serialPrefix: 'LAV-8848',
      accentColor: '#7c3aed',
      frontBg: 'bg-[#faf5ff]',
      frontBorder: 'border-purple-950',
      frontShadow: 'shadow-[6px_6px_0px_#4c1d95]',
      headerBg: 'bg-purple-900 text-purple-100',
      badgeBg: 'bg-purple-800 text-white',
      accentText: 'text-purple-700',
      cardStyle: 'alpine',
      cordColor: 'bg-purple-900',
      eyeletBorder: 'border-purple-950',
      eyeletDot: 'bg-purple-600',
      sealText: 'AROMATIC BIO-FIBER',
      backBg: 'bg-purple-900 text-white',
      backBorder: 'border-purple-950',
      backAccentBg: 'bg-purple-950',
      backStepNumBg: 'bg-purple-200 text-purple-950',
      backHeader: 'Alpine Soil Sowing',
      backSubheader: '[HIGH-ALTITUDE GERMINATION]',
      tagPill: 'COLD-STRATIFIED SEEDS'
    }
  },
  {
    id: 'basil',
    code: '03',
    name: 'Italian Genovese Basil',
    germination: '5-10 Days',
    blooms: 'Culinary Sweet Basil Leaves',
    badge: 'Edible Botanical',
    seedDensity: '180 seeds / dm²',
    desc: 'Fast-germinating culinary herb for kitchen garden pots.',
    theme: {
      tagType: 'CULINARY HERB REGISTER',
      serialPrefix: 'BSL-1904',
      accentColor: '#15803d',
      frontBg: 'bg-[#f0fdf4]',
      frontBorder: 'border-emerald-950',
      frontShadow: 'shadow-[6px_6px_0px_#14532d]',
      headerBg: 'bg-emerald-900 text-emerald-100',
      badgeBg: 'bg-emerald-800 text-white',
      accentText: 'text-emerald-700',
      cardStyle: 'culinary',
      cordColor: 'bg-amber-900',
      eyeletBorder: 'border-emerald-950',
      eyeletDot: 'bg-emerald-600',
      sealText: 'CULINARY NON-GMO',
      backBg: 'bg-emerald-900 text-white',
      backBorder: 'border-emerald-950',
      backAccentBg: 'bg-emerald-950',
      backStepNumBg: 'bg-emerald-200 text-emerald-950',
      backHeader: 'Kitchen Pot Planting',
      backSubheader: '[CULINARY SPROUT TIMETABLE]',
      tagPill: 'GENOVESE HEIRLOOM'
    }
  },
  {
    id: 'mint',
    code: '04',
    name: 'Mountain Field Mint',
    germination: '10-15 Days',
    blooms: 'Refreshing Mentha Spearmint',
    badge: 'Pollinator Magnet',
    seedDensity: '140 seeds / dm²',
    desc: 'Hardy restorative groundcover with crisp aromatic scent.',
    theme: {
      tagType: 'ARCTIC EXPEDITION PASS',
      serialPrefix: 'MNT-7720',
      accentColor: '#0f766e',
      frontBg: 'bg-[#f0fdfa]',
      frontBorder: 'border-teal-950',
      frontShadow: 'shadow-[6px_6px_0px_#134e4a]',
      headerBg: 'bg-teal-900 text-teal-100',
      badgeBg: 'bg-teal-800 text-white',
      accentText: 'text-teal-700',
      cardStyle: 'arctic',
      cordColor: 'bg-slate-800',
      eyeletBorder: 'border-teal-950',
      eyeletDot: 'bg-teal-500',
      sealText: 'FROST-HARDY REGEN',
      backBg: 'bg-teal-900 text-white',
      backBorder: 'border-teal-950',
      backAccentBg: 'bg-teal-950',
      backStepNumBg: 'bg-teal-200 text-teal-950',
      backHeader: 'Perennial Groundcover',
      backSubheader: '[WILD HABITAT RESTORATION]',
      tagPill: 'FAST REGENERATIVE SPROUT'
    }
  }
];

const TagSimulator = () => {
  const [selectedSeed, setSelectedSeed] = useState(seedVarieties[0]);
  const [travelerName, setTravelerName] = useState('ALEX RIVERA');
  const [destination, setDestination] = useState('KYOTO // ZERO CARBON');
  const [isFlipped, setIsFlipped] = useState(false);
  const [isBloomed, setIsBloomed] = useState(false);
  const { playInteractionSound } = useSound();

  const currentTheme = selectedSeed.theme;

  const handlePlant = () => {
    playInteractionSound('bloom');
    setIsBloomed(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: [currentTheme.accentColor, '#0a0a0a', '#ffffff', '#16a34a'],
      ticks: 180,
      gravity: 0.9
    });
  };

  const handleReset = () => {
    setIsBloomed(false);
    playInteractionSound('click');
  };

  return (
    <section className="relative py-12 sm:py-20 px-4 max-w-7xl mx-auto">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-4 sm:pb-8 mb-8 sm:mb-12 gap-4 sm:gap-6">
        <div className="space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-ink text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-bottega" />
            <span>[LAB.01] // BOTANICAL CAD SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-syne font-black text-ink tracking-tight uppercase leading-tight">
            3D Seed Tag <span className="text-bottega">Blueprint</span>
          </h2>
        </div>
        <div className="text-[10px] sm:text-xs font-mono text-ink-muted sm:text-right space-y-0.5 sm:space-y-1">
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

          {/* Seed Selection Specimen Matrix */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                03 // EMBEDDED SEED GENETICS
              </label>
              <span className="text-[10px] font-mono text-bottega font-bold">
                [CUSTOM PASSPORT THEME]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {seedVarieties.map((seed) => {
                const isSelected = selectedSeed.id === seed.id;
                return (
                  <button
                    key={seed.id}
                    type="button"
                    onClick={() => {
                      setSelectedSeed(seed);
                      playInteractionSound('click');
                    }}
                    className={`p-3.5 border-2 text-left transition-all rounded-xl relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-bottega text-white border-ink shadow-[3px_3px_0px_#0a0a0a] translate-x-[-1px] translate-y-[-1px]'
                        : 'bg-paper text-ink border-ink hover:bg-paper-dark hover:border-bottega hover:shadow-[2px_2px_0px_#0a0a0a]'
                    }`}
                  >
                    {/* Top Row: Index code & Badge */}
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-emerald-200' : 'text-bottega'}`}>
                        [{seed.code}]
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white text-bottega'
                            : 'bg-paper-border text-ink'
                        }`}
                      >
                        {seed.badge}
                      </span>
                    </div>

                    {/* Middle: Specimen Title */}
                    <div className="mb-2">
                      <h4 className="font-syne font-black text-xs uppercase tracking-tight leading-snug">
                        {seed.name}
                      </h4>
                    </div>

                    {/* Bottom Row: Density Pill & Checkmark */}
                    <div className="flex items-center justify-between pt-1.5 border-t border-current/20">
                      <span className={`text-[10px] font-mono font-bold tracking-tight ${isSelected ? 'text-white' : 'text-ink-muted'}`}>
                        {seed.seedDensity}
                      </span>
                      {isSelected ? (
                        <div className="w-4 h-4 rounded-full bg-white text-bottega flex items-center justify-center shrink-0 shadow-sm">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-ink/40" />
                      )}
                    </div>
                  </button>
                );
              })}
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
            <CircularBadge size={100} text={`VERDAVIA • ${selectedSeed.code} • 350 GSM • `} />
          </div>

          {/* 3D Flippable Tag Container */}
          <div
            className="w-full max-w-[290px] xs:max-w-[320px] sm:max-w-[340px] h-[440px] sm:h-[460px] relative cursor-pointer my-4 transform-style-3d"
            style={{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={() => {
              setIsFlipped(!isFlipped);
              playInteractionSound('click');
            }}
          >
            {/* ========================================================================= */}
            {/* FRONT OF TAG: DYNAMIC BY SPECIMEN THEME                                    */}
            {/* ========================================================================= */}
            <div
              className={`absolute inset-0 rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-2 ${currentTheme.frontBorder} ${currentTheme.frontShadow} ${currentTheme.frontBg} backface-hidden`}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)',
                zIndex: isFlipped ? 0 : 10
              }}
            >
              {/* Top Eyelet & Cord */}
              <div className="flex flex-col items-center -mt-8 sm:-mt-9">
                <div className={`w-3.5 h-8 sm:h-10 ${currentTheme.cordColor} rounded-full border ${currentTheme.frontBorder}`} />
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${currentTheme.frontBg} border-2 ${currentTheme.eyeletBorder} flex items-center justify-center`}>
                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${currentTheme.eyeletDot}`} />
                </div>
              </div>

              {/* SPECIMEN 01: BOTTEGA EDITORIAL WILDFLOWER LAYOUT */}
              {currentTheme.cardStyle === 'editorial' && (
                <div className="space-y-3 sm:space-y-4 text-left mt-1 sm:mt-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-ink-muted border-b border-ink/20 pb-1">
                    <span>[VER'DA:VI:A // ARCHIVE]</span>
                    <span className="font-bold text-bottega">{currentTheme.serialPrefix}</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-bottega font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-bottega" />
                      <span>{currentTheme.tagType}</span>
                    </div>
                    <div className="font-syne font-black text-xl sm:text-2xl text-ink tracking-tight uppercase mt-0.5 break-words">
                      {travelerName || 'TRAVELER NAME'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-ink">
                    <Compass className="w-4 h-4 text-bottega shrink-0" />
                    <span className="font-bold truncate">{destination || 'GLOBAL EXPEDITION'}</span>
                  </div>

                  {/* Seed Spec Box */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white border-2 border-ink space-y-1 text-left font-mono text-xs shadow-[2px_2px_0px_#0a0a0a]">
                    <div className="flex justify-between text-[10px] text-ink-muted font-bold">
                      <span>GENETICS:</span>
                      <span className="text-bottega uppercase font-bold">{selectedSeed.badge}</span>
                    </div>
                    <div className="font-bold text-ink text-xs sm:text-sm font-syne flex items-center justify-between gap-1">
                      <span className="truncate">{selectedSeed.name}</span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-bottega bg-paper px-1.5 py-0.5 rounded border border-ink/20 font-bold shrink-0">
                        {selectedSeed.seedDensity}
                      </span>
                    </div>
                    <div className="text-[10px] text-ink-muted leading-tight">
                      Germination: {selectedSeed.germination} • {selectedSeed.blooms}
                    </div>
                  </div>
                </div>
              )}

              {/* SPECIMEN 02: ALPINE ALTITUDE SANCTUARY PASS (LAVENDER) */}
              {currentTheme.cardStyle === 'alpine' && (
                <div className="space-y-2.5 sm:space-y-3.5 text-left mt-1 sm:mt-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-purple-900 border-b border-purple-300 pb-1">
                    <span className="flex items-center gap-1 font-bold">
                      <Mountain className="w-3 h-3 text-purple-700" />
                      <span>ALPINE SECTOR // 2,400M</span>
                    </span>
                    <span className="font-bold text-purple-700">{currentTheme.serialPrefix}</span>
                  </div>

                  <div className="p-2.5 bg-purple-900 text-white rounded-xl shadow-[2px_2px_0px_#4c1d95]">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-purple-200">
                      EXPEDITIONARY NOMAD
                    </div>
                    <div className="font-syne font-black text-lg sm:text-xl text-white tracking-tight uppercase break-words">
                      {travelerName || 'TRAVELER NAME'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-purple-950 font-bold">
                    <Compass className="w-4 h-4 text-purple-700 shrink-0" />
                    <span className="truncate">{destination || 'HIGH-ALTITUDE SANCTUARY'}</span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-purple-100 border border-purple-300 space-y-1 font-mono text-xs">
                    <div className="flex justify-between text-[10px] text-purple-800 font-bold">
                      <span>FLORA TAXONOMY:</span>
                      <span className="text-purple-700 uppercase font-bold">{selectedSeed.badge}</span>
                    </div>
                    <div className="font-bold text-purple-950 text-xs sm:text-sm font-syne truncate">
                      {selectedSeed.name}
                    </div>
                    <div className="text-[10px] text-purple-700 font-bold">
                      Density: {selectedSeed.seedDensity} • {selectedSeed.germination}
                    </div>
                  </div>
                </div>
              )}

              {/* SPECIMEN 03: CULINARY HERB REGISTER (GENOVESE BASIL) */}
              {currentTheme.cardStyle === 'culinary' && (
                <div className="space-y-2.5 sm:space-y-3.5 text-left mt-1 sm:mt-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-emerald-900 border-b-2 border-emerald-300 pb-1">
                    <span className="flex items-center gap-1 font-bold">
                      <Utensils className="w-3 h-3 text-emerald-700" />
                      <span>HEIRLOOM HERB REGISTER</span>
                    </span>
                    <span className="font-bold text-emerald-800">{currentTheme.serialPrefix}</span>
                  </div>

                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-emerald-800 font-bold">
                      REGISTERED PLANTER
                    </div>
                    <div className="font-syne font-black text-xl sm:text-2xl text-emerald-950 tracking-tight uppercase break-words">
                      {travelerName || 'TRAVELER NAME'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-900 font-bold">
                    <Sun className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="truncate">{destination || 'MEDITERRANEAN EXPEDITION'}</span>
                  </div>

                  {/* Dual Grid Kitchen Spec */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300">
                      <div className="text-emerald-700 font-bold text-[9px]">GERMINATION</div>
                      <div className="font-bold text-emerald-950 font-syne text-xs">{selectedSeed.germination}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300">
                      <div className="text-emerald-700 font-bold text-[9px]">DENSITY</div>
                      <div className="font-bold text-emerald-950 font-syne text-xs">{selectedSeed.seedDensity}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SPECIMEN 04: ARCTIC RECOVERY BLUEPRINT (MINT) */}
              {currentTheme.cardStyle === 'arctic' && (
                <div className="space-y-2.5 sm:space-y-3.5 text-left mt-1 sm:mt-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-teal-900 border-b border-teal-300 pb-1">
                    <span className="flex items-center gap-1 font-bold">
                      <Wind className="w-3 h-3 text-teal-600" />
                      <span>[POLAR BIO-TELEMETRY]</span>
                    </span>
                    <span className="font-bold text-teal-700">{currentTheme.serialPrefix}</span>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-teal-950 text-white rounded-xl border border-teal-800 space-y-0.5">
                    <div className="text-[9px] font-mono text-teal-400">OPERATOR DESIGNATION:</div>
                    <div className="font-syne font-black text-lg sm:text-xl text-teal-100 tracking-tight uppercase break-words">
                      {travelerName || 'TRAVELER NAME'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-teal-950 font-bold">
                    <Droplets className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="truncate">{destination || 'GLACIAL SANCTUARY ZONE'}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-teal-100 border border-teal-300 space-y-1 font-mono text-xs">
                    <div className="flex justify-between text-[10px] text-teal-800 font-bold">
                      <span>BIO-SPECS:</span>
                      <span className="text-teal-700 font-bold uppercase">{selectedSeed.badge}</span>
                    </div>
                    <div className="font-bold text-teal-950 text-xs sm:text-sm font-syne truncate">
                      {selectedSeed.name}
                    </div>
                    <div className="text-[10px] text-teal-700">
                      Density: {selectedSeed.seedDensity} • Hardy Soil Mulch
                    </div>
                  </div>
                </div>
              )}

              {/* Tag Footer Barcode */}
              <div className={`flex items-center justify-between pt-2 border-t-2 ${currentTheme.frontBorder} text-[9px] font-mono`}>
                <span className={`flex items-center gap-1 font-bold ${currentTheme.accentText}`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentTheme.sealText}
                </span>
                <span className="font-bold">{currentTheme.serialPrefix}</span>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* BACK OF TAG: RESPONSIVE DYNAMIC ACCENT BACK                                */}
            {/* ========================================================================= */}
            <div
              className={`absolute inset-0 rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-2 ${currentTheme.backBorder} ${currentTheme.frontShadow} ${currentTheme.backBg} backface-hidden overflow-hidden`}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                zIndex: isFlipped ? 10 : 0
              }}
            >
              <div className="text-left space-y-1 pt-1 sm:pt-2 border-b border-white/20 pb-2">
                <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase opacity-80">
                  {currentTheme.backSubheader}
                </div>
                <h4 className="font-syne font-black text-sm xs:text-base sm:text-lg md:text-xl text-white uppercase tracking-tight leading-snug break-words">
                  {currentTheme.backHeader}
                </h4>
              </div>

              {/* 3 Step Planting Guide */}
              <div className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-xs font-mono text-white">
                <div className="flex gap-2 sm:gap-2.5 items-start">
                  <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentTheme.backStepNumBg} flex items-center justify-center font-bold text-[9px] sm:text-[10px] shrink-0 mt-0.5`}>1</span>
                  <span className="leading-snug">Submerge tag in water for 24h post-journey.</span>
                </div>
                <div className="flex gap-2 sm:gap-2.5 items-start">
                  <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentTheme.backStepNumBg} flex items-center justify-center font-bold text-[9px] sm:text-[10px] shrink-0 mt-0.5`}>2</span>
                  <span className="leading-snug">Cover with 3mm fertile soil in sunlight.</span>
                </div>
                <div className="flex gap-2 sm:gap-2.5 items-start">
                  <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentTheme.backStepNumBg} flex items-center justify-center font-bold text-[9px] sm:text-[10px] shrink-0 mt-0.5`}>3</span>
                  <span className="leading-snug">Water daily. Sprout begins in {selectedSeed.germination}.</span>
                </div>
              </div>

              <div className={`p-2.5 sm:p-3 ${currentTheme.backAccentBg} border border-white/30 rounded-xl text-left font-mono`}>
                <span className="text-[9px] block opacity-80 font-bold uppercase">EXPECTED BLOOMS:</span>
                <span className="text-xs font-syne font-bold leading-tight block">{selectedSeed.blooms}</span>
              </div>

              <div className="text-center text-[9px] font-mono opacity-75 flex items-center justify-center gap-1.5 pt-0.5">
                <QrCode className="w-3 h-3" />
                <span className="tracking-tight">CLICK TO FLIP BACK TO PASSPORT</span>
              </div>
            </div>
          </div>

          {/* Interactive Result Card */}
          {isBloomed && (
            <div
              className="mt-4 p-4 rounded-xl bg-white border-2 border-ink shadow-[4px_4px_0px_#008a3d] flex items-center gap-4 text-left animate-fadeIn max-w-sm"
              style={{ borderLeftColor: currentTheme.accentColor, borderLeftWidth: '6px' }}
            >
              <div
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: currentTheme.accentColor }}
              >
                <Flower2 className="w-5 h-5 animate-spinSlow" />
              </div>
              <div className="space-y-0.5">
                <div className="font-syne font-bold text-xs text-ink uppercase flex items-center gap-2">
                  <span>{selectedSeed.name} Planted</span>
                  <span
                    className="text-[9px] font-mono text-white px-1.5 py-0.5 rounded font-bold"
                    style={{ backgroundColor: currentTheme.accentColor }}
                  >
                    ACTIVE
                  </span>
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
