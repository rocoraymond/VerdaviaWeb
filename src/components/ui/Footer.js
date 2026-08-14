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
    <footer className="relative bg-ink text-white border-t-4 border-bottega pt-16 pb-12 overflow-hidden font-sans">
      {/* Global Clocks Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-ink-charcoal border-2 border-neutral-800 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-bottega inline-block" />
            <span className="font-bold tracking-widest text-white uppercase">[GLOBAL ECO DISPATCH]</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-neutral-400">
            <div>MNL <span className="text-bottega font-bold ml-1">{time.manila || '12:00'}</span></div>
            <div>TYO <span className="text-bottega font-bold ml-1">{time.tokyo || '13:00'}</span></div>
            <div>LON <span className="text-bottega font-bold ml-1">{time.london || '05:00'}</span></div>
            <div>NYC <span className="text-bottega font-bold ml-1">{time.nyc || '00:00'}</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
        {/* Brand & Manifesto */}
        <div className="md:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-bottega text-white flex items-center justify-center p-1 border border-white">
                <img src={logo} alt="Verdavia" className="w-full h-full object-contain filter invert" />
              </div>
              <span className="font-syne font-black text-2xl tracking-tight text-white uppercase">
                VERDAVIA
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed max-w-sm">
              TECHNICAL REGENERATIVE TRAVEL ACCESSORIES EMBEDDED WITH POLLINATOR WILDFLOWER SEEDS. CRAFTED FROM 100% POST-CONSUMER COTTON PULP.
            </p>
          </div>

          <div className="text-[10px] font-mono text-bottega font-bold">
            © {new Date().getFullYear()} VERDAVIA INC. // ALL ZERO-PLASTIC PROTOCOLS ACTIVE
          </div>
        </div>

        {/* Directory Navigation */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-mono font-bold text-xs tracking-widest text-bottega uppercase">
            {"[01 // DIRECTORY]"}
          </h4>
          <ul className="space-y-2 text-xs font-mono">
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
                  className="flex items-center justify-between text-neutral-300 hover:text-bottega transition-colors py-1 group"
                >
                  <span>[{item.id}] {item.name.toUpperCase()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-mono font-bold text-xs tracking-widest text-bottega uppercase">
            {"[02 // DISPATCH FEED]"}
          </h4>
          <p className="text-xs font-mono text-neutral-400 leading-relaxed">
            SUBSCRIBE FOR BIOLOGICAL CARBON OFFSET BULLETINS AND PRIVATE SEED DROPS.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2.5">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:border-bottega transition"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-bottega hover:bg-bottega-dark text-white font-syne font-bold text-xs flex items-center gap-1.5 transition"
              >
                <span>JOIN</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
            {subscribed && (
              <div className="flex items-center gap-2 text-xs font-mono text-bottega animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-bottega" />
                <span>REGISTERED TO THE BOTANICAL DISPATCH.</span>
              </div>
            )}
          </form>

          {/* Floating Orbital Badge */}
          <div className="pt-2">
            <CircularBadge size={90} text="VERDAVIA • 100% COTTON PULP • " className="text-white" />
          </div>
        </div>
      </div>

      {/* Giant Architectural Monolith Typography */}
      <div className="border-t border-neutral-900 pt-6 overflow-hidden select-none opacity-40">
        <div className="font-syne font-black text-6xl sm:text-8xl md:text-[140px] leading-none text-center whitespace-nowrap tracking-tighter text-white">
          VERDAVIA REGENERATIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
