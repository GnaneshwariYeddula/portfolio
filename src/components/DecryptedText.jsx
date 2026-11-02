import React, { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 12,
  className = '',
  revealSpeed = 60,
  triggerOnHover = false
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startDecryption = () => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, speed);
    };

    startDecryption();

    return () => clearInterval(interval);
  }, [text, speed, isHovered]);

  return (
    <span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={() => triggerOnHover && setIsHovered(!isHovered)}
    >
      {displayText}
    </span>
  );
}

