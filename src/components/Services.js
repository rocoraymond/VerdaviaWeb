import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Package, Building2, Gift, Leaf, Award } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import MarqueeRibbon from './ui/MarqueeRibbon';
import CircularBadge from './ui/CircularBadge';
import { useSound } from './ui/SoundManager';

const serviceOfferings = [
  {
    icon: Leaf,
    badge: 'FLAGSHIP PRODUCT',
    title: 'Plantable Botanical Luggage Tags',
    desc: 'Crafted from 100% biodegradable post-consumer cotton pulp and embedded with pollinator-friendly wildflowers. Custom shaped, waterproofed with natural starch, and designed for heavy international travel.',
    features: ['Wildflower or culinary herb seed blends', 'Organic jute or recycled ribbon cords', 'Custom destination engraving available', 'Full soil dissolution in 14 days']
  },
  {
    icon: Building2,
    badge: 'ENTERPRISE & B2B',
    title: 'Custom Brand & Corporate Giveaways',
    desc: 'Empower your corporate events, travel agencies, luxury eco-resorts, and airline campaigns with bespoke branded plantable tags printed with non-toxic soy inks.',
    features: ['Custom logo & QR code embedding', 'Eco-friendly bulk packaging options', 'Verified carbon-offset impact documentation', 'Global white-label shipping']
  },
  {
    icon: Gift,
    badge: 'EVENT PACKS',
    title: 'Sustainable Conferences & Weddings',
    desc: 'Replace plastic name badges, party favors, and gift tags with living memories that guests can plant in their home gardens long after the event concludes.',
    features: ['Custom guest name personalization', 'Specialized botanical seed selections', 'Recycled cotton envelope sleeves', 'Low minimum order quantities']
  },
  {
    icon: Award,
    badge: 'REGENERATIVE PROGRAM',
    title: 'Circular Travel Impact Consulting',
    desc: 'We assist hospitality brands and tour operators in eliminating single-use plastic touchpoints across traveler journeys, replacing them with circular botanical alternatives.',
    features: ['Zero plastic audit & replacement roadmap', 'Guest engagement & planting workshops', 'Custom botanical storytelling assets', 'B-Corp aligned sustainability metrics']
  }
];

const tiers = [
  {
    name: 'Explorer Nomad',
    subtitle: 'SOLO EXPEDITIONS',
    tags: '3 Plantable Tags',
    price: '₱350',
    description: 'Essential for individual journeys across global trails.',
    seedCount: '450+ Seeds',
    features: ['Wildflower blend infusion', 'Weather-resistant starch coat', 'Organic jute tie cords', 'Step-by-step planting guide']
  },
  {
    name: 'Expedition Pack',
    subtitle: 'GROUPS & FAMILIES',
    tags: '10 Plantable Tags',
    price: '₱980',
    popular: true,
    description: 'Ideal for eco-conscious travel groups and extended expeditions.',
    seedCount: '1,500+ Seeds',
    features: ['Choice of 3 botanical blends', 'Custom luggage ID cards', 'Recycled cotton carry pouch', 'Priority eco-dispatch shipping']
  },
  {
    name: 'Bespoke Enterprise',
    subtitle: 'CORPORATE & BRANDS',
    tags: '100+ Custom Tags',
    price: 'Custom Quote',
    description: 'Bespoke branding and custom seed blends for sustainable organizations.',
    seedCount: '15,000+ Seeds',
    features: ['Custom logo & soy-ink print', 'Custom die-cut tag shapes', 'Dedicated sustainability impact report', 'Volume tiered enterprise pricing']
  }
];

const Services = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const { playInteractionSound } = useSound();

  return (
    <div className="min-h-screen bg-paper text-ink pt-28 pb-20 px-4 md:px-8 font-sans bg-tech-grid">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto mb-16 border-b-2 border-ink pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bottega text-white font-mono text-xs font-bold tracking-widest">
              <Package className="w-3.5 h-3.5" />
              <span>[CATALOG.01] // SOLUTIONS & HARDWARE</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-syne font-black text-ink uppercase tracking-tight leading-[0.9]">
              Botanical <span className="text-bottega">Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-mono text-ink-muted max-w-2xl font-medium leading-relaxed">
              From solo traveler tag packs to custom corporate branding, we engineer zero-plastic biodegradable accessories for conscious voyages.
            </p>
          </div>

          <div className="hidden lg:block">
            <CircularBadge size={140} text="TECHNICAL BOTANICALS • 2025 • " className="text-ink" />
          </div>
        </div>
      </section>

      {/* Ribbon */}
      <div className="my-8">
        <MarqueeRibbon items={["CUSTOM CORPORATE BRANDING", "SOLO EXPLORER PACKS", "NON-TOXIC SOY INK", "100% RECYCLED COTTON", "POLLINATOR SEEDS"]} rotate={1} />
      </div>

      {/* Main Service Offerings Bento Grid */}
      <section className="max-w-7xl mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceOfferings.map((service, idx) => {
            const Icon = service.icon;
            return (
              <TiltCard key={idx} className="p-8 sm:p-10 flex flex-col justify-between" cursorBadge="SERVICE">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                    <span className="text-xs font-mono font-bold text-bottega">
                      [{service.badge}]
                    </span>
                    <div className="w-9 h-9 rounded-full bg-bottega text-white flex items-center justify-center border border-ink shadow-[2px_2px_0px_#0a0a0a]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-syne font-black text-ink uppercase">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-ink leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-ink/20">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-ink">
                        <Check className="w-3.5 h-3.5 text-bottega shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    onClick={() => playInteractionSound('click')}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-bottega hover:text-ink group"
                  >
                    <span>INQUIRE ABOUT THIS SPECIFICATION</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Tier Matrix */}
      <section className="max-w-7xl mx-auto my-24 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-ink pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-white font-mono text-xs font-bold tracking-widest">
              <Package className="w-3.5 h-3.5 text-bottega" />
              <span>[TIERS.02] // PACKAGE MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-syne font-black text-ink uppercase">
              Packaging <span className="text-bottega">Tiers</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const isSelected = selectedTier === idx;
            return (
              <div
                key={idx}
                onClick={() => {
                  setSelectedTier(idx);
                  playInteractionSound('click');
                }}
                className={`bg-white border-2 border-ink rounded-2xl p-8 flex flex-col justify-between cursor-pointer transition-all ${
                  isSelected
                    ? 'shadow-[6px_6px_0px_#008a3d] border-ink scale-[1.02]'
                    : 'shadow-[4px_4px_0px_#0a0a0a] hover:shadow-[6px_6px_0px_#0a0a0a]'
                }`}
              >
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono font-bold text-bottega uppercase tracking-widest">
                      [{tier.subtitle}]
                    </div>
                    <h3 className="text-2xl font-syne font-black text-ink uppercase">{tier.name}</h3>
                    <p className="text-xs font-mono text-ink-muted leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="py-4 border-y-2 border-ink flex items-baseline justify-between">
                    <span className="text-3xl font-syne font-black text-ink">{tier.price}</span>
                    <span className="text-xs font-mono font-bold text-bottega">{tier.tags}</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono font-bold text-ink uppercase tracking-wider">
                      INCLUDED IN SPEC:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-ink">
                        <Check className="w-3.5 h-3.5 text-bottega shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    onClick={() => playInteractionSound('click')}
                    className={`w-full py-3.5 rounded-full font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-ink transition ${
                      tier.popular
                        ? 'bg-bottega text-white shadow-[3px_3px_0px_#0a0a0a] hover:bg-bottega-dark'
                        : 'bg-paper text-ink hover:bg-paper-dark'
                    }`}
                  >
                    <span>Select Tier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
