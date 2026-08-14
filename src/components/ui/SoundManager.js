import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioCtxRef = useRef(null);
  const ambientOscsRef = useRef([]);
  const gainNodeRef = useRef(null);

  // Initialize and unlock Web Audio API across all platforms (Android Chrome, iOS Safari, Desktop)
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }

    return audioCtxRef.current;
  }, []);

  // Explicit Mobile Audio Unlocker (plays a 1-sample silent buffer on first user touch/tap)
  const unlockAudioContext = useCallback(() => {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => {
        setIsUnlocked(true);
      }).catch(() => {});
    } else {
      setIsUnlocked(true);
    }

    // Play instant silent buffer to wake up mobile audio subsystem
    try {
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
    } catch (e) {}
  }, [getAudioContext]);

  useEffect(() => {
    const handleFirstGesture = () => {
      unlockAudioContext();
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('touchend', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
    };

    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('touchend', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture);
    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('touchend', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
    };
  }, [unlockAudioContext]);

  // Start organic ambient soundscape (warm pentatonic nature drone)
  const startAmbient = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    // Master gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.5);
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
      gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.5);
      setTimeout(() => {
        ambientOscsRef.current.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
        ambientOscsRef.current = [];
        setIsPlaying(false);
      }, 500);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    unlockAudioContext();
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  // Micro-interaction sound: crisp UI blip & botanical chimes
  const playInteractionSound = (type = 'click') => {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.06);
      } else if (type === 'bloom') {
        // Shimmering chime for seed planting
        [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
          setTimeout(() => {
            try {
              const chimeOsc = ctx.createOscillator();
              const chimeGain = ctx.createGain();
              chimeOsc.type = 'sine';
              chimeOsc.frequency.setValueAtTime(freq, ctx.currentTime);
              chimeGain.gain.setValueAtTime(0.06, ctx.currentTime);
              chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
              chimeOsc.connect(chimeGain);
              chimeGain.connect(ctx.destination);
              chimeOsc.start();
              chimeOsc.stop(ctx.currentTime + 0.5);
            } catch (e) {}
          }, idx * 55);
        });
      } else {
        // Standard tactile click / tap
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch (err) {
      console.warn('Audio interaction failed:', err);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <SoundContext.Provider value={{ isPlaying, isUnlocked, toggleSound, playInteractionSound, unlockAudioContext }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
