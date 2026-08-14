import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSound } from './SoundManager';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*#_~+';

const TextScramble = ({
  text,
  className = '',
  triggerOnHover = true,
  autoPlay = false,
  as: Component = 'span',
  speed = 30
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const { playInteractionSound } = useSound();

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);
    playInteractionSound('hover');

    let iteration = 0;
    const targetLength = text.length;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= targetLength) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / 2;
    }, speed);
  }, [text, speed, isScrambling, playInteractionSound]);

  useEffect(() => {
    if (autoPlay) {
      scramble();
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, scramble]);

  return (
    <Component
      className={`${className} inline-block transition-colors duration-200`}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {displayText}
    </Component>
  );
};

export default TextScramble;
