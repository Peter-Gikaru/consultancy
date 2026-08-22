'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Building2, Sparkles, Compass } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function HeroInteractiveSlider() {
  const slides = [
    {
      badge: 'Embedded Technical Assistance',
      headline: 'Policy that Works Where It’s Built.',
      subheadline: 'Technical assistance that’s embedded, politically informed, and built in partnership with local communities. From Nairobi to the region, we deliver lasting government reform.',
      ctaPrimary: 'Explore Smart TA',
      ctaPrimaryHref: '/expertise',
      ctaSecondary: 'View Our Impact',
      ctaSecondaryHref: '/impact',
      stat1Number: '70%',
      stat1Label: 'Locally-Led Projects',
      stat2Number: '100+',
      stat2Label: 'Government Reforms',
      bgImage: '/images/hero-kenya.jpg'
    },
    {
      badge: 'Evidence-Based Public Sector Reform',
      headline: 'Co-Designing Policies for Sustainable Impact.',
      subheadline: 'We reject fly-in consulting templates. Our resident experts work directly inside ministry offices to deliver data-backed governance, health, and climate policies.',
      ctaPrimary: 'Discover Core Sectors',
      ctaPrimaryHref: '/expertise',
      ctaSecondary: 'Meet Our Teams',
      ctaSecondaryHref: '/contact',
      stat1Number: '80%',
      stat1Label: 'Policy Adoption Rate',
      stat2Number: '15',
      stat2Label: 'African Field Hubs',
      bgImage: '/images/policy-meeting.jpg'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(rgba(18, 18, 18, 0.78), rgba(18, 18, 18, 0.88)), url("${slide.bgImage}") center/cover no-repeat`,
      color: '#FFFFFF',
      padding: '110px 24px 80px',
      transition: 'background-image 1s ease-in-out'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid-responsive">
          
          <div>
            
            <div className="glow-badge animate-stagger-1" style={{ marginBottom: '24px', display: 'inline-flex' }}>
              <span className="pulse-dot" />
              <ShieldCheck size={18} /> {slide.badge}
            </div>

            <h1 className="hero-headline animate-stagger-2" style={{ marginBottom: '24px' }}>
              {slide.headline}
            </h1>

            <p className="lead animate-stagger-3" style={{ color: '#F8F9FA', opacity: 0.95, fontSize: '1.25rem', marginBottom: '36px', maxWidth: '720px', lineHeight: 1.7 }}>
              {slide.subheadline}
            </p>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <Link href={slide.ctaPrimaryHref} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                {slide.ctaPrimary} <ArrowRight size={18} />
              </Link>
              <Link href={slide.ctaSecondaryHref} className="btn btn-secondary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                {slide.ctaSecondary}
              </Link>
            </div>

            <div className="glass-panel-dark" style={{
              padding: '24px 32px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              maxWidth: '720px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-playfair)',
                  color: '#D95A2B',
                  lineHeight: 1
                }}>
                  <AnimatedCounter end={slide.stat1Number} />
                </div>
                <div style={{ fontSize: '0.9rem', color: '#E2E8F0', fontWeight: '500' }}>
                  {slide.stat1Label}
                </div>
              </div>

              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-playfair)',
                  color: '#E6A817',
                  lineHeight: 1
                }}>
                  <AnimatedCounter end={slide.stat2Number} />
                </div>
                <div style={{ fontSize: '0.9rem', color: '#E2E8F0', fontWeight: '500' }}>
                  {slide.stat2Label}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: idx === currentSlide ? '28px' : '10px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: idx === currentSlide ? '#E6A817' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-floating-deck desktop-only" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="hero-floating-card" style={{ padding: '24px', color: '#1E1E1E' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(30, 123, 74, 0.15)',
                  color: '#1E7B4A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1E1E1E' }}>Kenya Health Reform</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Verified Impact & Adoption</div>
                </div>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                Embedded team deployed to 12 county health departments, cutting medical stock-outs by 40%.
              </div>
            </div>

            <div className="hero-floating-card" style={{
              padding: '24px',
              color: '#1E1E1E',
              transform: 'translateX(30px) rotate(1.5deg)',
              background: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(217, 90, 43, 0.15)',
                  color: '#D95A2B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1E1E1E' }}>Climate Resilience</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Local Adaptation Finance</div>
                </div>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#D95A2B' }}>
                $40M+ Mobilized for Pastoralist Communities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
