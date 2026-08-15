'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/config/siteData';
import { mediaStore, getImageUrl } from '@/utils/mediaStore';

export default function VerticalSpotlightCarousel() {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const loadItems = () => {
    const rawItems = siteData.spotlightCarousel || [];
    const active = mediaStore.filterActiveItems(rawItems, 'id', 'image');
    setItems(active);
  };

  useEffect(() => {
    loadItems();
    if (typeof window !== 'undefined') {
      window.addEventListener('meridian_store_change', loadItems);
      return () => window.removeEventListener('meridian_store_change', loadItems);
    }
  }, []);

  // Silent background rotation timer (without visible progress bar or control text)
  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 30;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      className="vertical-convex-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '620px',
        height: '580px',
        perspective: '1400px',
        perspectiveOrigin: '50% 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        transformStyle: 'preserve-3d'
      }}>
        {items.map((item, idx) => {
          const total = items.length;
          let diff = idx - activeIndex;

          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const isBump = diff === 0;

          const R = 300;
          const angleDeg = diff * 42;
          const angleRad = (angleDeg * Math.PI) / 180;

          const translateY = Math.sin(angleRad) * R;
          const translateZ = Math.cos(angleRad) * R - 120;
          const rotateX = -angleDeg;

          let scale = isBump ? 1.0 : 0.86 - Math.abs(diff) * 0.08;
          let opacity = isBump ? 1 : Math.max(0.15, 0.6 - Math.abs(diff) * 0.25);
          let zIndex = isBump ? 30 : 20 - Math.abs(diff) * 5;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`convex-card ${isBump ? 'is-bump-active' : ''}`}
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '580px',
                minHeight: '290px',
                backgroundColor: isBump ? '#FDF8F5' : 'var(--bg-card)',
                borderRadius: '24px',
                border: isBump ? '2.5px solid var(--accent-terracotta)' : '1px solid var(--border-light)',
                padding: '28px 30px',
                boxShadow: isBump
                  ? '0 24px 50px rgba(194, 65, 12, 0.18), 0 10px 24px rgba(38, 35, 34, 0.06)'
                  : '0 6px 16px rgba(0,0,0,0.03)',
                transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                cursor: isBump ? 'default' : 'pointer',
                transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                userSelect: 'none',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px', alignItems: 'center' }}>
                <div style={{
                  position: 'relative',
                  height: '230px',
                  width: '100%',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <Image
                    src={getImageUrl(item.image)}
                    alt={item.alt || item.headline || 'Spotlight photo'}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      imageRendering: 'crisp-edges'
                    }}
                    quality={95}
                    priority={isBump}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.825rem', fontWeight: '700', color: 'var(--accent-forest)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.04em' }}>
                    {item.metric}
                  </div>

                  <h3 style={{
                    fontSize: '1.35rem',
                    color: 'var(--text-main)',
                    margin: '0 0 8px',
                    fontFamily: 'var(--font-lora)',
                    lineHeight: 1.3
                  }}>
                    {item.subheadline}
                  </h3>

                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 16px',
                    lineHeight: 1.55,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {item.description}
                  </p>

                  <div>
                    <Link
                      href="/services"
                      className="btn btn-outline btn-sm"
                      style={{ padding: '8px 18px', fontSize: '0.875rem' }}
                    >
                      {item.linkText || "Explore →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .vertical-convex-carousel-wrapper {
            padding: 10px 0;
          }
          .convex-card > div {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .convex-card {
            padding: 18px !important;
            max-width: 95% !important;
            min-height: auto !important;
          }
          .convex-card div[style*="height: 230px"] {
            height: 180px !important;
          }
        }
      `}</style>
    </div>
  );
}
