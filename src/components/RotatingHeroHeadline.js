'use client';

import { useState, useEffect } from 'react';

export default function RotatingHeroHeadline() {
  const words = [
    { highlight: "Clarity", suffix: "to Complexity." },
    { highlight: "Confidence", suffix: "to High Risk." },
    { highlight: "Speed", suffix: "to Stalled Projects." },
    { highlight: "Alignment", suffix: "to Burned-Out Teams." }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 350);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  const current = words[index];

  return (
    <h1 className="hero-headline" style={{ marginBottom: '20px', fontSize: '3.1rem', lineHeight: 1.18 }}>
      Project Evaluation &amp; Advisory That Brings{' '}
      <span
        style={{
          display: 'inline-block',
          transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(8px)'
        }}
      >
        <span className="text-gradient-warm">{current.highlight}</span>{' '}
        <span style={{ color: 'var(--text-main)' }}>{current.suffix}</span>
      </span>
    </h1>
  );
}
