import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const ambientOscsRef = useRef([]);
  const gainNodeRef = useRef(null);

  // Initialize Web Audio API
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Start organic ambient soundscape (warm pentatonic nature drone)
  const startAmbient = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Master gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2); // very gentle background level
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    // Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);
    filter.connect(masterGain);

    // Warm organic chord frequencies (Verdavia botanical drone in F# major pentatonic)
    const freqs = [185.00, 277.18, 369.99, 440.00, 554.37];
    const oscs = freqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      // subtle detune for lush organic chorus
      osc.detune.setValueAtTime((i - 2) * 4, ctx.currentTime);
      
      oscGain.gain.setValueAtTime(0.2 / freqs.length, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start();
      return osc;
    });

    ambientOscsRef.current = oscs;
    setIsPlaying(true);
  };

  // Stop ambient sound
  const stopAmbient = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.8);
      setTimeout(() => {
        ambientOscsRef.current.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
        ambientOscsRef.current = [];
        setIsPlaying(false);
      }, 800);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  // Micro-interaction sound: crisp UI blip
  const playInteractionSound = (type = 'click') => {
    if (!isPlaying) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08); // A5
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'bloom') {
      // Shimmering chime for seed planting
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
        setTimeout(() => {
          const chimeOsc = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          chimeOsc.type = 'sine';
          chimeOsc.frequency.setValueAtTime(freq, ctx.currentTime);
          chimeGain.gain.setValueAtTime(0.05, ctx.currentTime);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
          chimeOsc.connect(chimeGain);
          chimeGain.connect(ctx.destination);
          chimeOsc.start();
          chimeOsc.stop(ctx.currentTime + 0.6);
        }, idx * 60);
      });
    } else {
      // Standard click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <SoundContext.Provider value={{ isPlaying, toggleSound, playInteractionSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
