'use client';

import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const targetNumber = parseInt(end.toString().replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = targetNumber / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  return (
    <span ref={ref} className="stat-number-animated">
      {prefix}
      {hasAnimated ? count : 0}
      {suffix || (end.toString().includes('%') ? '%' : end.toString().includes('+') ? '+' : end.toString().includes('M') ? 'M+' : '')}
    </span>
  );
}
