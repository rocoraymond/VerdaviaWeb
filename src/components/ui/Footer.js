import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { useSound } from './SoundManager';
import logo from '../../assets/images/logo.png';
import CircularBadge from './CircularBadge';

const Footer = () => {
  const { playInteractionSound } = useSound();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [time, setTime] = useState({
    manila: '',
    tokyo: '',
    london: '',
    nyc: ''
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTime({
        manila: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: false }),
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };
    updateClocks();
    const timer = setInterval(updateClocks, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      playInteractionSound('bloom');
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-ink text-white border-t-4 border-bottega pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden font-sans">
      {/* Global Clocks Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="bg-ink-charcoal border-2 border-neutral-800 p-3 sm:p-4 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-bottega inline-block" />
            <span className="font-bold tracking-wider text-white uppercase text-[11px] sm:text-xs">
              [GLOBAL ECO DISPATCH]
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-neutral-400 text-[11px] sm:text-xs">
            <div>MNL <span className="text-bottega font-bold ml-1">{time.manila || '12:00'}</span></div>
            <div>TYO <span className="text-bottega font-bold ml-1">{time.tokyo || '13:00'}</span></div>
            <div>LON <span className="text-bottega font-bold ml-1">{time.london || '05:00'}</span></div>
            <div>NYC <span className="text-bottega font-bold ml-1">{time.nyc || '00:00'}</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-14">
        {/* Brand & Manifesto */}
        <div className="md:col-span-5 space-y-4 sm:space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-bottega text-white flex items-center justify-center p-1 border border-white shrink-0">
                <img src={logo} alt="Verdavia" className="w-full h-full object-contain filter invert" />
              </div>
              <span className="font-syne font-black text-2xl tracking-tight text-white uppercase">
                VERDAVIA
              </span>
            </div>
            <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed max-w-sm">
              Technical regenerative travel accessories embedded with pollinator wildflower seeds. Crafted from 100% post-consumer cotton pulp.
            </p>
          </div>

          <div className="text-[11px] font-mono text-bottega font-bold tracking-wide">
            © {new Date().getFullYear()} VERDAVIA INC. // ALL ZERO-PLASTIC PROTOCOLS ACTIVE
          </div>
        </div>

        {/* Directory Navigation */}
        <div className="md:col-span-3 space-y-3 sm:space-y-4">
          <h4 className="font-syne font-bold text-xs tracking-widest text-bottega uppercase">
            [01 // DIRECTORY]
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-sans">
            {[
              { id: '01', name: 'Home Experience', path: '/home' },
              { id: '02', name: 'About & Botanical Story', path: '/about' },
              { id: '03', name: 'Services & B2B Solutions', path: '/services' },
              { id: '04', name: 'Contact & Dispatch', path: '/contact' },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => playInteractionSound('click')}
                  className="flex items-center justify-between text-neutral-300 hover:text-bottega transition-colors py-1 group font-medium"
                >
                  <span className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-neutral-500 font-bold">[{item.id}]</span>
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-bottega" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-4 space-y-3 sm:space-y-4">
          <h4 className="font-syne font-bold text-xs tracking-widest text-bottega uppercase">
            [02 // DISPATCH FEED]
          </h4>
          <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed">
            Subscribe for biological carbon offset bulletins and private seed drops.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2.5">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 font-sans text-xs focus:outline-none focus:border-bottega transition rounded-lg"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-bottega hover:bg-bottega-dark text-white font-syne font-black text-xs flex items-center gap-1.5 transition rounded-md shadow-sm"
              >
                <span>JOIN</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
            {subscribed && (
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-bottega animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-bottega" />
                <span>Registered to the botanical dispatch.</span>
              </div>
            )}
          </form>

          {/* Floating Orbital Badge */}
          <div className="pt-2">
            <CircularBadge size={85} text="VERDAVIA • 100% COTTON PULP • " className="text-white" />
          </div>
        </div>
      </div>

      {/* Giant Architectural Bottom Monolith Typography (Fully Responsive, No Clipping) */}
      <div className="border-t border-neutral-900 pt-6 px-4 overflow-hidden select-none opacity-30">
        <div className="font-syne font-black text-3xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[125px] leading-none text-center uppercase tracking-tighter text-white break-words">
          VERDAVIA REGENERATIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
