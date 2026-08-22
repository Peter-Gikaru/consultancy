'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  delay = 0,
  distance = '28px',
  duration = '0.75s',
  direction = 'up',
  threshold = 0.1,
  className = '',
  style = {}
}) {
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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'down':
        return `translateY(-${distance}) scale(0.98)`;
      case 'left':
        return `translateX(${distance}) scale(0.98)`;
      case 'right':
        return `translateX(-${distance}) scale(0.98)`;
      case 'zoom':
        return 'scale(0.92)';
      case 'up':
      default:
        return `translateY(${distance}) scale(0.98)`;
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translate3d(0,0,0) scale(1)' : getInitialTransform(),
        transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}
