import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { useSound } from './SoundManager';
import TextScramble from './TextScramble';
import logo from '../../assets/images/logo.png';

const navLinks = [
  { id: '01', name: 'Home', path: '/home' },
  { id: '02', name: 'About', path: '/about' },
  { id: '03', name: 'Services', path: '/services' },
  { id: '04', name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isPlaying, toggleSound, playInteractionSound } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Floating Brutalist Ribbon Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 max-w-6xl w-full border-2 border-ink ${
            isScrolled
              ? 'bg-paper/95 backdrop-blur-md shadow-[4px_4px_0px_#0a0a0a]'
              : 'bg-white shadow-[3px_3px_0px_#0a0a0a]'
          }`}
        >
          {/* Brand Logo + Phonetic Tag */}
          <Link
            to="/home"
            className="flex items-center gap-3 group"
            onClick={() => playInteractionSound('click')}
          >
            <div className="w-8 h-8 rounded-full bg-bottega text-white flex items-center justify-center p-1 border border-ink shadow-[1.5px_1.5px_0px_#0a0a0a] transition-transform group-hover:scale-105">
              <img src={logo} alt="Verdavia Logo" className="w-full h-full object-contain filter invert" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-syne font-black tracking-tight text-base text-ink uppercase">
                VERDAVIA
              </span>
              <span className="text-[10px] font-mono text-bottega font-bold tracking-wider hidden sm:inline-block">
                [VER'DA:VI:A]
              </span>
            </div>
          </Link>

          {/* Geometric Down Marker */}
          <div className="hidden xl:flex items-center text-ink text-xs font-mono font-bold tracking-widest gap-1">
            <span>▼</span>
            <span className="text-[9px] text-ink-muted">ARCHIVE // 2025</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-paper-dark p-1 rounded-full border border-ink/20">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/home' && location.pathname === '/');
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => playInteractionSound('click')}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-ink text-white font-bold shadow-[2px_2px_0px_#008a3d]'
                      : 'text-ink hover:text-bottega font-medium'
                  }`}
                >
                  <span className="text-[9px] opacity-60 mr-1.5">[{link.id}]</span>
                  <TextScramble text={link.name.toUpperCase()} triggerOnHover={!isActive} />
                </Link>
              );
            })}
          </div>

          {/* Right Controls: Audio + Brutalist Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleSound();
                playInteractionSound('click');
              }}
              data-cursor-badge="AUDIO"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink text-xs font-mono transition-all ${
                isPlaying
                  ? 'bg-bottega text-white shadow-[2px_2px_0px_#0a0a0a]'
                  : 'bg-paper text-ink hover:bg-paper-dark'
              }`}
              title={isPlaying ? 'Mute Audio' : 'Enable Audio'}
            >
              {isPlaying ? (
                <>
                  <div className="flex items-end gap-[2px] h-3 w-3">
                    <span className="w-[2px] bg-white rounded-full animate-soundBar1" />
                    <span className="w-[2px] bg-white rounded-full animate-soundBar2" />
                    <span className="w-[2px] bg-white rounded-full animate-soundBar3" />
                    <span className="w-[2px] bg-white rounded-full animate-soundBar4" />
                  </div>
                  <span className="hidden sm:inline text-[10px] font-bold">ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3 text-ink" />
                  <span className="hidden sm:inline text-[10px]">OFF</span>
                </>
              )}
            </button>

            {/* Brutalist Action Button */}
            <Link
              to="/contact"
              onClick={() => playInteractionSound('click')}
              data-cursor-badge="START"
              className="hidden sm:flex items-center gap-1 px-4 py-1.5 rounded-full bg-bottega text-white border border-ink font-syne font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#0a0a0a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#0a0a0a] transition-all"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                playInteractionSound('click');
              }}
              className="lg:hidden p-2 rounded-full bg-paper border border-ink text-ink hover:bg-bottega hover:text-white transition"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-paper border-b-4 border-ink px-6 pt-24 pb-10 transition-all">
          <div className="flex flex-col gap-5">
            <div className="text-xs font-mono text-bottega font-bold tracking-widest uppercase">
              {"// INDEX DIRECTORY [VER'DA:VI:A]"}
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/home' && location.pathname === '/');
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    playInteractionSound('click');
                  }}
                  className={`flex items-center justify-between text-3xl font-syne font-black tracking-tight py-3 border-b-2 border-ink ${
                    isActive ? 'text-bottega pl-2' : 'text-ink hover:text-bottega'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-ink-muted">[{link.id}]</span>
                    <span>{link.name.toUpperCase()}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t-2 border-ink">
            <div className="flex justify-between text-xs font-mono font-bold text-ink">
              <span>CIRCULAR POLICY</span>
              <span className="text-bottega">100% COTTON PULP</span>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-bottega text-white border-2 border-ink font-syne font-black text-center text-sm uppercase tracking-wider shadow-[4px_4px_0px_#0a0a0a]"
            >
              Order Seed Tags
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
