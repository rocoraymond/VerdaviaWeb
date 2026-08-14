import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ShieldCheck,
  Flower2,
  Leaf,
  Globe2,
  Compass,
  ChevronLeft,
  ChevronRight,
  Sprout,
  Cpu
} from 'lucide-react';
import headerImg from '../assets/images/img6.png';
import contentImg from '../assets/images/conimg.png';
import verdaviatag1 from '../assets/images/verdaviatag1.jpeg';
import verdaviatag2 from '../assets/images/verdaviatag2.jpeg';
import verdaviatag3 from '../assets/images/verdaviatag3.jpeg';

import TiltCard from './ui/TiltCard';
import TextScramble from './ui/TextScramble';
import MarqueeRibbon from './ui/MarqueeRibbon';
import TagSimulator from './ui/TagSimulator';
import CarbonCalculator from './ui/CarbonCalculator';
import CircularBadge from './ui/CircularBadge';
import { useSound } from './ui/SoundManager';

const carouselItems = [
  {
    title: 'Eco-Friendly Packing Protocol',
    subtitle: 'STAGE 01 // PREPARATION',
    image: verdaviatag1,
    tag: '350 GSM COTTON PULP',
    text: 'Pack light, eliminate single-use baggage plastics, and equip your luggage with pollinator wildflower seed tags. Durable under heavy international cargo handling.'
  },
  {
    title: 'Sustainable Global Sanctuaries',
    subtitle: 'STAGE 02 // EXPEDITION',
    image: verdaviatag2,
    tag: 'ZERO CARBON BIOSPHERE',
    text: 'Explore protected biosphere destinations prioritizing habitat conservation and community empowerment. Verdavia guides conscious travelers on regenerative sanctuary paths.'
  },
  {
    title: 'Living Wildflower Monuments',
    subtitle: 'STAGE 03 // SOIL RETURN',
    image: verdaviatag3,
    tag: '100% SEED GERMINATION',
    text: 'When your expedition concludes, soak the tag in water and bury it under 3mm of fertile soil. What was once luggage travel waste becomes a living garden for native bees.'
  }
];

const ecoFacts = [
  {
    number: '90%',
    metric: 'EMISSIONS AVOIDED',
    title: 'Rail vs Aviation',
    desc: 'High-speed continental rail transit reduces trip carbon by up to 90% compared to short flights.'
  },
  {
    number: '0%',
    metric: 'PETROLEUM PLASTIC',
    title: 'Pure Plant Pulp',
    desc: 'Verdavia tags dissolve completely into natural topsoil mulch within 14 days of planting.'
  },
  {
    number: '150+',
    metric: 'SEEDS / DECIMETER²',
    title: 'Pollinator Support',
    desc: 'Each tag is cast with over 150 non-invasive bee and butterfly wildflower seeds.'
  },
  {
    number: '100%',
    metric: 'CIRCULAR SOURCING',
    title: 'Post-Consumer Fiber',
    desc: 'Made exclusively from post-consumer cotton garment remnants and recycled agricultural pulp.'
  }
];

const journeySteps = [
  {
    step: '01',
    title: 'Casting With Seeds',
    tagline: 'Recycled cotton pulp infused with wildflower seeds',
    desc: 'Crafted via artisanal papermaking techniques, safely binding living seeds inside durable, tear-resistant biodegradable fibers.'
  },
  {
    step: '02',
    title: 'Expedition Transit',
    tagline: 'Waterproofed with natural vegetable starch',
    desc: 'Engineered to withstand transatlantic weather, rough conveyor belts, and baggage handling without tearing.'
  },
  {
    step: '03',
    title: 'Soil Submersion',
    tagline: 'From baggage identifier to soil seedling',
    desc: 'Soak the tag for 24 hours post-travel, cover with 3mm of rich soil, and place under direct morning sunlight.'
  },
  {
    step: '04',
    title: 'Botanical Bloom',
    tagline: 'Living memories feeding local pollinators',
    desc: 'Within 7-14 days, vibrant poppies, chamomile, and lavender emerge—turning travel waste into a blooming ecosystem.'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { playInteractionSound } = useSound();

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-hidden font-sans bg-tech-grid">
      {/* Bottega-Inspired High-Fashion Editorial Hero Section */}
      <section className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 md:px-8 flex flex-col justify-between max-w-[1400px] mx-auto">
        {/* Top Editorial Brand Header Row */}
        <div className="flex items-center justify-between border-b-2 border-ink pb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-bottega inline-block" />
            <span className="font-bold text-bottega tracking-widest uppercase">
              VERDAVIA // BOTANICAL ARCHITECTURE
            </span>
          </div>

          <div className="text-center font-bold text-ink text-sm">
            <span>▼</span>
          </div>

          <div className="flex items-center gap-3 font-bold text-ink">
            <span className="hidden sm:inline-block w-8 h-2 bg-ink" />
            <span className="tracking-widest text-[11px]">[VER'DA:VI:A • ARCHIVE]</span>
          </div>
        </div>

        {/* Center Editorial Composition: Structured Bottega Layout */}
        <div className="relative my-8 md:my-12">
          {/* Solid Bottega Green Organic Blob Vector in Background */}
          <div className="absolute right-0 top-0 w-[300px] sm:w-[480px] md:w-[680px] h-[300px] sm:h-[480px] md:h-[620px] bg-bottega bottega-blob -z-10 shadow-[8px_8px_0px_#0a0a0a]" />

          {/* ROW 1: "HISTORY OF" + TOP EDITORIAL PHOTO */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[120px] font-syne font-black tracking-tighter text-ink leading-none uppercase select-none">
              HISTORY OF
            </h1>

            {/* Top Photo: Sits beside the text on the right side without overlapping */}
            <div className="w-48 sm:w-56 md:w-72 h-24 sm:h-32 md:h-36 border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] bg-white rounded-xl overflow-hidden shrink-0 hidden sm:block">
              <img src={verdaviatag1} alt="Baggage Tag Specimen" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* ROW 2: "VERDAVIA" WITH SPEC BADGE */}
          <div className="my-2 sm:my-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-syne font-black tracking-tighter text-ink leading-none uppercase select-none flex flex-wrap items-baseline gap-4">
              <span>VERDAVIA</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white bg-ink px-3 py-1 self-center hidden lg:inline-block shadow-[2px_2px_0px_#008a3d] rounded">
                [SPEC. 350 GSM]
              </span>
            </h1>
          </div>

          {/* ROW 3: CIRCULAR BADGE + "BOTANICALS" + BOTTOM EDITORIAL PHOTO */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Floating Circular Rotating Badge */}
              <div className="shrink-0">
                <CircularBadge size={105} text="VERDAVIA • SEED PASSPORT • 2025 • " className="text-ink" />
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[120px] font-syne font-black tracking-tighter text-ink leading-none uppercase select-none">
                BOTANICALS
              </h1>
            </div>

            {/* Bottom Photo: Positioned neatly to the right without overlapping */}
            <div className="w-48 sm:w-64 md:w-80 h-28 sm:h-36 md:h-44 border-2 border-ink shadow-[5px_5px_0px_#0a0a0a] bg-white rounded-xl overflow-hidden shrink-0 hidden md:flex items-center justify-center p-3">
              <img src={contentImg} alt="Verdavia Travel Luggage" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Bottom Hero Controls & Sub-manifesto */}
        <div className="pt-8 border-t-2 border-ink flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-20">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-mono font-bold text-bottega uppercase tracking-wider">
              [TECHNICAL REGENERATIVE NOMADICS]
            </div>
            <p className="text-sm sm:text-base font-mono text-ink font-medium leading-relaxed">
              100% biodegradable plantable luggage tags made from post-consumer cotton pulp and embedded with living wildflower seeds. Designed to eliminate airport plastic waste and bloom into pollinator habitats.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              onClick={() => playInteractionSound('click')}
              className="px-8 py-4 bg-bottega hover:bg-bottega-dark text-white font-syne font-black text-sm uppercase tracking-wider border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#0a0a0a] transition-all flex items-center gap-2"
            >
              <span>Order Seed Tags</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              onClick={() => playInteractionSound('click')}
              className="px-6 py-4 bg-white hover:bg-paper-dark text-ink font-mono font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-[3px_3px_0px_#0a0a0a] transition-all"
            >
              <TextScramble text="[READ MANIFESTO]" />
            </Link>
          </div>
        </div>
      </section>

      {/* High-Contrast Industrial Tape Marquee Ribbons */}
      <div className="my-6 space-y-2">
        <MarqueeRibbon rotate={-1} variant="bottega" />
        <MarqueeRibbon rotate={1} direction="reverse" variant="ink" />
      </div>

      {/* Neo-Brutalist Bento Matrix */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-6 mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-white font-mono text-xs font-bold tracking-widest">
              <Cpu className="w-3.5 h-3.5 text-bottega" />
              <span>[MATRIX.01] // HARDWARE & BIO-SPECS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-black text-ink tracking-tight uppercase">
              Tactile <span className="text-bottega">Specifications</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-ink-muted text-right">
            ZERO PETRO-CHEMICALS // NON-TOXIC SOY INK
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Main Feature */}
          <div className="md:col-span-8">
            <TiltCard className="p-8 sm:p-10 h-full flex flex-col justify-between" cursorBadge="EXPLORE">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-bottega">[01 // CIRCULAR LIFECYCLE]</span>
                  <span className="bg-ink text-white px-3 py-1 rounded-full text-[10px]">
                    ZERO PLASTIC
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-syne font-black text-ink uppercase tracking-tight">
                  Airport Baggage Tags That Transform Into Wildflowers
                </h3>
                <p className="text-sm font-mono text-ink leading-relaxed max-w-xl">
                  Traditional plastic luggage tags persist in landfills for centuries. Verdavia tags are embedded with non-invasive pollinator seeds. When planted in soil, they decompose into rich mulch and sprout living blossoms.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-ink flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-bottega text-white rounded-full flex items-center justify-center border border-ink shadow-[2px_2px_0px_#0a0a0a]">
                    <Flower2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-syne font-black text-sm text-ink uppercase">100% Seed Germination</div>
                    <div className="text-[11px] font-mono text-ink-muted">Tested for 24-month seed viability</div>
                  </div>
                </div>
                <div className="w-28 h-16 flex items-center justify-center">
                  <img src={headerImg} alt="Tag" className="w-full h-full object-contain" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 2: Genetics */}
          <div className="md:col-span-4">
            <TiltCard className="p-8 h-full flex flex-col justify-between" cursorBadge="SEEDS">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-bottega">[02 // GENETICS]</div>
                <h3 className="text-2xl font-syne font-black text-ink uppercase">Native Seed Blends</h3>
                <p className="text-xs font-mono text-ink leading-relaxed">
                  Certified non-invasive wildflower, alpine lavender, and culinary herb seed infusions.
                </p>
              </div>

              <div className="mt-6 p-4 bg-paper-dark border-2 border-ink rounded-xl space-y-2 font-mono text-xs shadow-[2px_2px_0px_#0a0a0a]">
                <div className="flex justify-between font-bold">
                  <span>SPECIES COUNT:</span>
                  <span className="text-bottega">12+ Varieties</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>DECOMPOSITION:</span>
                  <span className="text-bottega">&lt; 14 Days</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 3: Materials */}
          <div className="md:col-span-4">
            <TiltCard className="p-8 h-full flex flex-col justify-between" cursorBadge="CRAFT">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-bottega">[03 // FIBERS]</div>
                <h3 className="text-2xl font-syne font-black text-ink uppercase">Recycled Cotton Pulp</h3>
                <p className="text-xs font-mono text-ink leading-relaxed">
                  Zero trees felled. Crafted from post-consumer cotton garment remnants and agricultural paper fibers.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono font-bold text-bottega">
                <ShieldCheck className="w-4 h-4 text-bottega" />
                <span>Chemical & Bleach Free</span>
              </div>
            </TiltCard>
          </div>

          {/* Card 4: Impact */}
          <div className="md:col-span-8">
            <TiltCard className="p-8 sm:p-10 h-full flex flex-col justify-between" cursorBadge="IMPACT" dark={true}>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-bottega font-bold">[04 // PLANETARY YIELD]</span>
                  <span className="text-neutral-400 font-bold">EST. 2025</span>
                </div>
                <h3 className="text-3xl font-syne font-black text-white uppercase tracking-tight">
                  The Antidote to 2.4 Billion Single-Use Tags
                </h3>
                <p className="text-xs font-mono text-neutral-300 leading-relaxed">
                  Every year, over 2.4 billion petroleum luggage tags are discarded in global airports. Verdavia replaces plastic waste with regenerative botanicals that turn every traveler into a planetary caretaker.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800 text-center font-mono">
                <div>
                  <div className="text-2xl sm:text-3xl font-syne font-black text-bottega">14.8K+</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Tags Planted</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-syne font-black text-bottega">2.2M+</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Seeds Sown</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-syne font-black text-bottega">0%</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Plastic Waste</div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3D Blueprint Simulator Section */}
      <TagSimulator />

      {/* 4-Stage Industrial Lifecycle Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-6 mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-white font-mono text-xs font-bold tracking-widest">
              <Compass className="w-3.5 h-3.5 text-bottega" />
              <span>[FLOW.03] // 4-STAGE CIRCULAR PROTOCOL</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-black text-ink tracking-tight uppercase">
              Luggage to <span className="text-bottega">Wildflower</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] rounded-2xl p-6 flex flex-col justify-between hover:shadow-[6px_6px_0px_#008a3d] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                  <span className="font-syne font-black text-3xl text-bottega">
                    [{step.step}]
                  </span>
                  <div className="w-8 h-8 rounded-full bg-paper border border-ink flex items-center justify-center text-ink">
                    {idx === 0 && <Sprout className="w-4 h-4" />}
                    {idx === 1 && <Globe2 className="w-4 h-4" />}
                    {idx === 2 && <Leaf className="w-4 h-4" />}
                    {idx === 3 && <Flower2 className="w-4 h-4" />}
                  </div>
                </div>
                <h4 className="font-syne font-black text-lg text-ink uppercase">
                  {step.title}
                </h4>
                <div className="text-xs font-mono text-bottega font-bold uppercase">{step.tagline}</div>
                <p className="text-xs font-mono text-ink-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carbon Terminal Section */}
      <CarbonCalculator />

      {/* Editorial Carousel Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white border-2 border-ink shadow-[6px_6px_0px_#0a0a0a] rounded-3xl p-6 sm:p-10 md:p-12">
          <div className="flex items-center justify-between border-b-2 border-ink pb-6 mb-8">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-bottega">{carouselItems[currentSlide].subtitle}</div>
              <h3 className="text-2xl sm:text-3xl font-syne font-black text-ink uppercase">
                {carouselItems[currentSlide].title}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
                  playInteractionSound('click');
                }}
                className="w-10 h-10 bg-paper hover:bg-paper-dark border-2 border-ink text-ink flex items-center justify-center shadow-[2px_2px_0px_#0a0a0a] transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
                  playInteractionSound('click');
                }}
                className="w-10 h-10 bg-paper hover:bg-paper-dark border-2 border-ink text-ink flex items-center justify-center shadow-[2px_2px_0px_#0a0a0a] transition"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 h-64 border-2 border-ink bg-paper p-4 flex items-center justify-center shadow-[3px_3px_0px_#0a0a0a] rounded-2xl overflow-hidden">
              <img
                src={carouselItems[currentSlide].image}
                alt={carouselItems[currentSlide].title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 bg-bottega text-white font-mono text-xs font-bold border border-ink shadow-[2px_2px_0px_#0a0a0a]">
                {carouselItems[currentSlide].tag}
              </span>
              <p className="text-sm font-mono text-ink leading-relaxed">
                {carouselItems[currentSlide].text}
              </p>
              <div className="flex gap-2 pt-2">
                {carouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      playInteractionSound('click');
                    }}
                    className={`h-2 border border-ink transition-all ${
                      currentSlide === idx ? 'w-8 bg-bottega' : 'w-2 bg-paper-border'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Impact Stats Row */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecoFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] rounded-2xl p-6 space-y-2"
            >
              <div className="font-syne font-black text-5xl text-bottega">
                {fact.number}
              </div>
              <div className="text-[10px] font-mono font-bold text-ink-muted uppercase">
                {fact.metric}
              </div>
              <div className="font-syne font-black text-sm text-ink uppercase">
                {fact.title}
              </div>
              <p className="text-xs font-mono text-ink-muted leading-relaxed">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
