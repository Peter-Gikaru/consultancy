'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, delay = 0, distance = '24px', duration = '0.7s', className = '', style = {} }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0) scale(1)' : `translateY(${distance}) scale(0.98)`,
        transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}
