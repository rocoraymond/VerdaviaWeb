import React, { useState } from 'react';
import { Plane, Train, Car, Ship, Trees, Sprout, Gauge } from 'lucide-react';
import { useSound } from './SoundManager';

const travelModes = [
  { id: 'plane', label: 'Aviation', icon: Plane, co2PerKm: 0.255 },
  { id: 'train', label: 'High-Speed Rail', icon: Train, co2PerKm: 0.035 },
  { id: 'car', label: 'EV Transit', icon: Car, co2PerKm: 0.053 },
  { id: 'ship', label: 'Maritime Ferry', icon: Ship, co2PerKm: 0.112 },
];

const CarbonCalculator = () => {
  const [distance, setDistance] = useState(1200);
  const [selectedMode, setSelectedMode] = useState(travelModes[0]);
  const { playInteractionSound } = useSound();

  const totalCO2 = Math.round(distance * selectedMode.co2PerKm);
  const trainSavings = Math.max(0, Math.round(distance * (travelModes[0].co2PerKm - selectedMode.co2PerKm)));
  const tagsEquivalent = Math.max(1, Math.ceil(totalCO2 / 18));
  const wildflowerSeeds = tagsEquivalent * 150;

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-white border-2 border-ink shadow-[6px_6px_0px_#0a0a0a] rounded-3xl p-6 sm:p-10 md:p-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-6 mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bottega text-white font-mono text-xs font-bold tracking-widest">
              <Gauge className="w-3.5 h-3.5" />
              <span>[CALC.02] // CARBON & BIOMASS TERMINAL</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-syne font-black text-ink uppercase tracking-tight">
              Transit Impact <span className="text-bottega">Metrics</span>
            </h3>
          </div>
          <div className="text-xs font-mono text-ink-muted">
            EQUIVALENCY: 1 TAG = 18 KG CO₂ OFFSET VIA BOTANICAL MULCH
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                01 // SELECT TRANSIT MODE
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {travelModes.map((mode) => {
                  const Icon = mode.icon;
                  const isSelected = selectedMode.id === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setSelectedMode(mode);
                        playInteractionSound('click');
                      }}
                      className={`p-3 border-2 flex flex-col items-center gap-1.5 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-bottega text-white border-ink shadow-[2px_2px_0px_#0a0a0a]'
                          : 'bg-paper text-ink border-ink hover:bg-paper-dark'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-mono font-bold">{mode.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Distance Slider */}
            <div className="space-y-3 bg-paper p-5 border-2 border-ink rounded-2xl shadow-[2px_2px_0px_#0a0a0a]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-ink font-bold uppercase">02 // EXPEDITION DISTANCE</span>
                <span className="text-bottega font-black text-lg">{distance.toLocaleString()} KM</span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="50"
                value={distance}
                onChange={(e) => {
                  setDistance(Number(e.target.value));
                  playInteractionSound('hover');
                }}
                className="w-full h-2.5 bg-paper-border border border-ink rounded-lg appearance-none cursor-pointer accent-bottega"
              />
              <div className="flex justify-between text-[10px] font-mono text-ink-muted">
                <span>100 KM [REGIONAL]</span>
                <span>5,000 KM [CONTINENTAL]</span>
                <span>10,000 KM [GLOBAL]</span>
              </div>
            </div>
          </div>

          {/* Right Live Impact Readout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-paper p-5 border-2 border-ink rounded-2xl shadow-[3px_3px_0px_#0a0a0a] space-y-1">
              <div className="text-[10px] font-mono text-ink-muted uppercase font-bold">
                ESTIMATED TRANSIT CO₂
              </div>
              <div className="text-4xl font-syne font-black text-ink">
                {totalCO2} <span className="text-xs font-mono text-bottega font-normal">KG</span>
              </div>
              <p className="text-xs font-mono text-ink-muted">
                Calculated for {distance}km transit.
              </p>
            </div>

            <div className="bg-bottega text-white p-5 border-2 border-ink rounded-2xl shadow-[3px_3px_0px_#0a0a0a] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-100">
                  REGENERATIVE OFFSET
                </span>
                <Sprout className="w-4 h-4 text-white" />
              </div>
              <div className="text-4xl font-syne font-black text-white">
                {tagsEquivalent} <span className="text-xs font-mono text-emerald-200 font-normal">TAGS</span>
              </div>
              <p className="text-xs font-mono text-emerald-100">
                Embeds {wildflowerSeeds.toLocaleString()} seeds in soil.
              </p>
            </div>

            <div className="bg-ink text-white p-5 border-2 border-ink rounded-2xl shadow-[3px_3px_0px_#0a0a0a] sm:col-span-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-bottega">
                  CLEAN TRANSIT ADVANTAGE
                </span>
                <Trees className="w-4 h-4 text-bottega" />
              </div>
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-white flex items-center gap-3">
                <span>{trainSavings > 0 ? `-${trainSavings} KG CO₂ AVOIDED` : 'BASE CALCULATION'}</span>
              </div>
              <p className="text-xs font-mono text-ink-light">
                Mindful route choices paired with seeded plantable accessories leave zero plastic waste behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;
