'use client';

import { useState, useEffect, useRef } from 'react';

export default function RadialGaugeMetric({ percentage = 94, label = "Recovery Rate", prefix = "", suffix = "%", color = "var(--accent-forest)" }) {
  const [animatedVal, setAnimatedVal] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimatedVal(percentage);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  const radius = 32;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedVal / 100) * circumference;

  return (
    <div ref={containerRef} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div style={{ position: 'relative', width: '72px', height: '72px', flexShrink: 0 }}>
        <svg width="72" height="72" viewBox="0 0 72 72" style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="var(--border-light)"
            strokeWidth={strokeWidth}
          />
          {/* Animated Foreground Arc */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </svg>

        {/* Center Percentage Display */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-playfair)',
          fontSize: '1.05rem',
          fontWeight: '700',
          color: 'var(--text-main)'
        }}>
          {prefix}{animatedVal}{suffix}
        </div>
      </div>

      <div>
        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: 1.2 }}>
          {label}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: '500', marginTop: '2px' }}>
          Independent Verification
        </div>
      </div>
    </div>
  );
}
