import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sprout, ShieldCheck, Flower2, Recycle, BookOpen } from 'lucide-react';
import tagImg from '../assets/images/verdaviatag1.jpeg';
import TiltCard from './ui/TiltCard';
import MarqueeRibbon from './ui/MarqueeRibbon';
import CircularBadge from './ui/CircularBadge';
import { useSound } from './ui/SoundManager';

const pillars = [
  {
    icon: Recycle,
    title: 'Zero Petroleum Plastic',
    desc: '100% biodegradable post-consumer paper and cotton garment pulp. Zero synthetic binders, microplastics, or toxic glues.'
  },
  {
    icon: Sprout,
    title: 'Native Pollinator Infusion',
    desc: 'Embedded with non-invasive wildflower seeds tested for optimal soil germination and honeybee foraging support.'
  },
  {
    icon: ShieldCheck,
    title: 'Cargo & Flight Resilient',
    desc: 'Reinforced with natural vegetable starches for weather resistance through long-haul international flights.'
  },
  {
    icon: Flower2,
    title: 'Regenerative Mulch',
    desc: 'Leaves no landfill trace. Dissolves into nutrient-rich garden soil mulch within 14 days of watering.'
  }
];

const botanicalSpecies = [
  {
    name: 'Corn Poppy (Papaver rhoeas)',
    badge: 'Nectar Rich',
    germination: '7-12 Days',
    benefit: 'Provides vital pollen for solitary bumblebees.',
    density: '160 seeds / tag'
  },
  {
    name: 'Chamomile (Matricaria chamomilla)',
    badge: 'Soil Enhancer',
    germination: '10-14 Days',
    benefit: 'Enriches topsoil microbes with calming aromatic blooms.',
    density: '140 seeds / tag'
  },
  {
    name: 'Sweet Alyssum (Lobularia maritima)',
    badge: 'Micro Pollinator',
    germination: '6-9 Days',
    benefit: 'Fast-spreading groundcover feeding beneficial butterfly species.',
    density: '180 seeds / tag'
  },
  {
    name: 'Alpine Lavender (Lavandula angustifolia)',
    badge: 'Aromatic Herb',
    germination: '14-21 Days',
    benefit: 'Drought-tolerant perennial with restorative scent.',
    density: '120 seeds / tag'
  }
];

const About = () => {
  const { playInteractionSound } = useSound();

  return (
    <div className="min-h-screen bg-paper text-ink pt-28 pb-20 px-4 md:px-8 font-sans bg-tech-grid">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto mb-16 border-b-2 border-ink pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bottega text-white font-mono text-xs font-bold tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>[ARCHIVE.01] // PHILOSOPHICAL MANIFESTO</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-syne font-black text-ink uppercase tracking-tight leading-[0.9]">
              Why <span className="text-bottega">Verdavia?</span>
            </h1>

            <p className="text-base sm:text-lg font-mono text-ink-muted max-w-2xl font-medium leading-relaxed">
              Why should travel memories end up in airport landfills? Verdavia reimagines essential travel accessories as living botanical monuments.
            </p>
          </div>

          <div className="hidden lg:block">
            <CircularBadge size={140} text="BOTANICAL ARCHITECTURE • 2025 • " className="text-ink" />
          </div>
        </div>
      </section>

      {/* Marquee Ribbon */}
      <div className="my-8">
        <MarqueeRibbon items={["POLLINATOR SEED MATRIX", "POST-CONSUMER COTTON", "ZERO PETRO-CHEMICALS", "BOTTEGA GREEN BIO-FIBERS"]} rotate={-1} />
      </div>

      {/* Core Narrative Bento Grid */}
      <section className="max-w-7xl mx-auto my-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative Card */}
          <div className="lg:col-span-7">
            <TiltCard className="p-8 sm:p-12 space-y-6" cursorBadge="STORY">
              <div className="text-xs font-mono font-bold text-bottega">[01 // MANIFESTO]</div>
              <h2 className="text-3xl sm:text-4xl font-syne font-black text-ink uppercase tracking-tight">
                More Than Luggage Tags — A Statement of Planetary Purpose
              </h2>
              <p className="text-sm font-mono text-ink leading-relaxed">
                Crafted from 100% biodegradable paper pulp embedded with pollinator wildflower seeds, every Verdavia tag is engineered to withstand transatlantic flights and give back to the soil upon your return.
              </p>
              <p className="text-sm font-mono text-ink leading-relaxed">
                When you return home, your trip continues in soil. Submerge the tag in water, plant it in a pot or garden bed, and watch vibrant blooms emerge — a living testament to the sanctuaries you explored.
              </p>

              <div className="pt-4 border-t-2 border-ink flex items-center justify-between text-xs font-mono font-bold text-bottega">
                <span>ESTABLISHED 2025</span>
                <span>CERTIFIED NON-INVASIVE</span>
              </div>
            </TiltCard>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] rounded-2xl p-6 text-center space-y-4">
              <div className="w-52 h-52 mx-auto rounded-xl overflow-hidden bg-paper-dark border-2 border-ink p-2 flex items-center justify-center">
                <img
                  src={tagImg}
                  alt="Verdavia Plantable Tag"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-1 font-mono">
                <h3 className="font-syne font-black text-base text-ink uppercase">Seeded Cotton Pulp</h3>
                <p className="text-xs text-ink-muted">350 GSM post-consumer textile fibers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botanical Species Matrix */}
      <section className="max-w-7xl mx-auto my-20 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-white font-mono text-xs font-bold tracking-widest">
              <Flower2 className="w-3.5 h-3.5 text-bottega" />
              <span>[TAXONOMY.02] // SEED VARIETY MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-syne font-black text-ink uppercase">
              Botanical <span className="text-bottega">Composition</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {botanicalSpecies.map((species, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-bottega text-white rounded-full">
                  {species.badge}
                </span>
                <h4 className="font-syne font-black text-base text-ink uppercase pt-2">
                  {species.name}
                </h4>
                <p className="text-xs font-mono text-ink-muted leading-relaxed">
                  {species.benefit}
                </p>
              </div>
              <div className="text-[10px] font-mono font-bold text-bottega pt-3 border-t border-ink/20">
                Germination: {species.germination}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="max-w-7xl mx-auto my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-paper-dark border-2 border-ink shadow-[3px_3px_0px_#0a0a0a] rounded-2xl p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-bottega text-white border border-ink flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-syne font-black text-base text-ink uppercase">{pillar.title}</h3>
                <p className="text-xs font-mono text-ink-muted leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <div className="bg-ink text-white border-4 border-bottega shadow-[8px_8px_0px_#0a0a0a] rounded-3xl p-8 sm:p-12 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-syne font-black uppercase text-white">
            Ready to Travel With Planetary Purpose?
          </h3>
          <p className="text-xs font-mono text-neutral-300 max-w-lg mx-auto leading-relaxed">
            Equip your next journey with living botanical seed tags and join the zero-plastic movement.
          </p>
          <Link
            to="/contact"
            onClick={() => playInteractionSound('click')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-bottega hover:bg-bottega-dark text-white border-2 border-white font-syne font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_#ffffff] transition-all"
          >
            <span>Order Plantable Tags</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
