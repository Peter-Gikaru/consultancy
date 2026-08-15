'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { mediaStore } from '@/utils/mediaStore';
import { getImageUrl } from '@/utils/getImageUrl';

export default function HeroFullWidthCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const defaultSlides = [
    {
      id: 'hero-slide-1',
      subheadline: 'Discover how our partnership with local climate committees in Kenya & Ethiopia mobilized over $40M in decentralized adaptation funds.',
      image: '/images/climate-project.jpg',
      ctaText: 'Read our impact story',
      ctaLink: '/services#service-audit'
    },
    {
      id: 'hero-slide-2',
      subheadline: 'Our embedded team deployed to 12 county health executive offices, implementing real-time tracking to cut medicine stock-outs by 40%.',
      image: '/images/kenya-health-case.jpg',
      ctaText: 'Explore recovery framework',
      ctaLink: '/services#service-rescue'
    },
    {
      id: 'hero-slide-3',
      subheadline: 'Working shoulder-to-shoulder with ministry leaders to draft transparent legislative frameworks and de-risk public financial management.',
      image: '/images/policy-meeting.jpg',
      ctaText: 'Learn about our approach',
      ctaLink: '/about'
    },
    {
      id: 'hero-slide-4',
      subheadline: 'We diagnose technical and human friction within 14 days, creating clear 5-page action blueprints that restore psychological safety and speed.',
      image: '/images/team-meeting.jpg',
      ctaText: 'Book a consultation',
      ctaLink: '/contact'
    }
  ];

  const loadSlides = async () => {
    let serverPosts = [];
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      if (data.success) serverPosts = data.posts;
    } catch (e) {
      // static export fallback
    }

    const custom = mediaStore.getCustomPosts();
    const combinedCustomServer = [...custom, ...serverPosts];

    const formattedPosts = combinedCustomServer.map((post) => ({
      id: post.id,
      subheadline: post.summary || post.title,
      image: post.mediaUrl || '/images/policy-meeting.jpg',
      ctaText: 'Read full field post',
      ctaLink: '/contact'
    }));

    const merged = [...formattedPosts, ...defaultSlides];
    const activeSlides = mediaStore.filterActiveItems(merged, 'id', 'image');
    setSlides(activeSlides);
  };

  useEffect(() => {
    loadSlides();
    if (typeof window !== 'undefined') {
      window.addEventListener('meridian_store_change', loadSlides);
      return () => window.removeEventListener('meridian_store_change', loadSlides);
    }
  }, []);

  // Auto slide rotation every 6 seconds
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 40) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="hero-top-fullwidth-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(85vh - 70px)',
        minHeight: '520px',
        maxHeight: '700px',
        backgroundColor: '#1C1917',
        overflow: 'hidden'
      }}
    >
      {/* Background Image with Dark Gradient Overlay */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.9s ease',
              zIndex: isActive ? 1 : 0
            }}
          >
            <Image
              src={getImageUrl(slide.image)}
              alt={slide.subheadline}
              fill
              priority={idx === 0}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                transform: isActive ? 'scale(1.03)' : 'scale(1.0)',
                transition: 'transform 7s ease-out'
              }}
              quality={95}
            />
            {/* Cinematic Gradient Overlays for Maximum Text Legibility */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(15, 13, 12, 0.88) 0%, rgba(15, 13, 12, 0.65) 55%, rgba(15, 13, 12, 0.35) 100%)'
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 13, 12, 0.9) 0%, transparent 40%)'
            }} />
          </div>
        );
      })}

      {/* Main Content Overlay Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '60px'
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontFamily: 'var(--font-lora)',
              fontWeight: '500',
              lineHeight: 1.35,
              margin: '0 0 32px',
              maxWidth: '740px',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              letterSpacing: '-0.01em'
            }}
          >
            {currentSlide.subheadline}
          </h1>

          {/* CTA Button */}
          <div>
            <Link
              href={currentSlide.ctaLink || '/services'}
              className="btn btn-primary"
              style={{
                padding: '16px 32px',
                fontSize: '1.05rem',
                backgroundColor: 'var(--accent-terracotta)',
                color: '#FFFFFF',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '600',
                boxShadow: '0 10px 24px rgba(194, 65, 12, 0.35)'
              }}
            >
              {currentSlide.ctaText || 'Read our impact story'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.0)';
        }}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.0)';
        }}
      >
        <ChevronRight size={28} />
      </button>

      {/* Bottom Horizontal Bar Indicators (Matching Oxford Policy Management Inspo) */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {slides.map((_, i) => {
          const isActive = i === currentIndex;
          return (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: isActive ? '40px' : '16px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s ease'
              }}
            />
          );
        })}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-top-fullwidth-carousel {
            height: 560px !important;
            min-height: 560px !important;
          }
          .hero-top-fullwidth-carousel button[aria-label="Previous Slide"],
          .hero-top-fullwidth-carousel button[aria-label="Next Slide"] {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </div>
  );
}
