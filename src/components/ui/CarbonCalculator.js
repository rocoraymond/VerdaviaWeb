import React, { useState } from 'react';
import { Plane, Train, Car, Ship, Trees, Sprout, Gauge, AlertTriangle, ArrowDownRight, CheckCircle2 } from 'lucide-react';
import { useSound } from './SoundManager';

const travelModes = [
  { id: 'plane', label: 'Aviation', icon: Plane, co2PerKm: 0.255, reductionPercent: 0 },
  { id: 'train', label: 'High-Speed Rail', icon: Train, co2PerKm: 0.035, reductionPercent: 86 },
  { id: 'car', label: 'EV Transit', icon: Car, co2PerKm: 0.053, reductionPercent: 79 },
  { id: 'ship', label: 'Maritime Ferry', icon: Ship, co2PerKm: 0.112, reductionPercent: 56 },
];

const CarbonCalculator = () => {
  const [distance, setDistance] = useState(1200);
  const [selectedMode, setSelectedMode] = useState(travelModes[0]);
  const { playInteractionSound } = useSound();

  const totalCO2 = Math.round(distance * selectedMode.co2PerKm);
  const flightBaselineCO2 = Math.round(distance * travelModes[0].co2PerKm);
  const co2Savings = Math.max(0, flightBaselineCO2 - totalCO2);
  const tagsEquivalent = Math.max(1, Math.ceil(totalCO2 / 18));
  const wildflowerSeeds = tagsEquivalent * 150;

  return (
    <section className="relative py-12 sm:py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-white border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] sm:shadow-[6px_6px_0px_#0a0a0a] rounded-3xl p-5 sm:p-10 md:p-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-4 sm:pb-6 mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-bottega text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest">
              <Gauge className="w-3.5 h-3.5" />
              <span>[CALC.02] // CARBON & BIOMASS TERMINAL</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-syne font-black text-ink uppercase tracking-tight leading-tight">
              Transit Impact <span className="text-bottega">Metrics</span>
            </h3>
          </div>
          <div className="text-[10px] sm:text-xs font-mono text-ink-muted">
            EQUIVALENCY: 1 TAG = 18 KG CO₂ OFFSET VIA BOTANICAL MULCH
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center justify-between">
                <span>01 // SELECT TRANSIT MODE</span>
                <span className="text-bottega font-mono font-bold text-[10px]">
                  [{selectedMode.label.toUpperCase()}]
                </span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {travelModes.map((mode) => {
                  const Icon = mode.icon;
                  const isSelected = selectedMode.id === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
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
            {/* Box 1: Calculated CO2 */}
            <div className="bg-paper p-5 border-2 border-ink rounded-2xl shadow-[3px_3px_0px_#0a0a0a] space-y-1">
              <div className="text-[10px] font-mono text-ink-muted uppercase font-bold">
                ESTIMATED TRANSIT CO₂
              </div>
              <div className="text-4xl font-syne font-black text-ink">
                {totalCO2.toLocaleString()} <span className="text-xs font-mono text-bottega font-normal">KG</span>
              </div>
              <p className="text-xs font-mono text-ink-muted">
                Calculated for {distance.toLocaleString()} km via {selectedMode.label}.
              </p>
            </div>

            {/* Box 2: Regenerative Tag Offset */}
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
                Embeds {wildflowerSeeds.toLocaleString()} wildflower seeds into topsoil.
              </p>
            </div>

            {/* Box 3: Dynamic Transit Analysis (Fixed String & Logic) */}
            <div className="bg-ink text-white p-6 border-2 border-ink rounded-2xl shadow-[3px_3px_0px_#0a0a0a] sm:col-span-2 space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                <span className="text-[10px] font-mono uppercase font-bold text-bottega flex items-center gap-1.5">
                  {selectedMode.id === 'plane' ? (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      <span>[AVIATION BASELINE ANALYSIS]</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-bottega" />
                      <span>[CLEAN TRANSIT ADVANTAGE]</span>
                    </>
                  )}
                </span>
                <Trees className="w-4 h-4 text-bottega" />
              </div>

              <div>
                {selectedMode.id === 'plane' ? (
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-syne font-black text-amber-400">
                      +{totalCO2.toLocaleString()} KG CO₂ FOOTPRINT
                    </div>
                    <div className="inline-block px-2.5 py-0.5 bg-neutral-800 text-amber-300 font-mono text-[10px] font-bold rounded">
                      HIGH-EMISSION TRANSIT BENCHMARK
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-syne font-black text-bottega flex items-center gap-2">
                      <ArrowDownRight className="w-6 h-6 shrink-0" />
                      <span>-{co2Savings.toLocaleString()} KG CO₂ SAVED</span>
                    </div>
                    <div className="inline-block px-2.5 py-0.5 bg-neutral-800 text-bottega font-mono text-[10px] font-bold rounded">
                      {selectedMode.reductionPercent}% REDUCTION VS FLIGHT BASELINE
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs font-mono text-neutral-300 leading-relaxed">
                {selectedMode.id === 'plane'
                  ? `Commercial aviation is the highest-emission transit method (0.255 kg CO₂/km). Planting ${tagsEquivalent} Verdavia seed tags restores native topsoil with ${wildflowerSeeds.toLocaleString()} wildflower blooms, neutralizing single-use luggage plastics.`
                  : `Choosing ${selectedMode.label} saves ${co2Savings.toLocaleString()} kg of CO₂ for this ${distance.toLocaleString()} km journey compared to flying. Pairing low-carbon transit with ${tagsEquivalent} plantable tags delivers a net-positive regenerative expedition.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;
