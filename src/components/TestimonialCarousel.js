'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "DERAP Consult brought exceptional methodological clarity to our multi-country agricultural endline evaluation. Their real-time data audit eliminated field bias completely.",
      author: "Omar Rosser",
      role: "Lead Evaluation Specialist, NadlyTech Policy Lab",
      stars: 5,
      avatar: "OR"
    },
    {
      quote: "DERAP Consult brought exceptional methodological clarity to our multi-country agricultural endline evaluation. Their real-time data audit eliminated field bias completely.",
      author: "Omar Rosser",
      role: "Lead Evaluation Specialist, NadlyTech Policy Lab",
      stars: 5,
      avatar: "OR"
    },
    {
      quote: "In a sector filled with rushed field reports, DERAP's rigorous quantitative sampling and transparent econometric modeling was a game-changer for our donor steering committee.",
      author: "Flores Juanta",
      role: "Senior Program Manager & Serial Evaluator",
      stars: 5,
      avatar: "FJ"
    },
    {
      quote: "Their team deployed bilingual field enumerators across 8 counties within 10 days. The GIS mapping and field data integrity exceeded our expectations.",
      author: "Dr. Amina Hassan",
      role: "Director of Research, Pan-African Development Initiative",
      stars: 5,
      avatar: "AH"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ padding: '6rem 1.5rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--slate-200)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '8px 0', fontFamily: 'var(--font-lora)' }}>
            Trusted by International Development Leaders
          </h2>
          <p style={{ color: 'var(--text-subtle)', fontSize: '1.05rem' }}>
            Hear directly from researchers, program directors, and donor evaluators who rely on DERAP&apos;s empirical findings.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '2.5rem'
          }}>
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="glass-card-hover"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: idx === activeIndex ? '2px solid var(--accent-amber)' : '1px solid var(--slate-200)',
                  boxShadow: idx === activeIndex ? '0 20px 40px rgba(217, 119, 6, 0.12)' : 'var(--shadow-soft)'
                }}
              >
                <div>
                  
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', color: '#F59E0B' }}>
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" />
                    ))}
                  </div>

                  <Quote size={28} color="var(--slate-300)" style={{ marginBottom: '12px' }} />

                  <p style={{ fontSize: '1.025rem', color: 'var(--slate-700)', lineHeight: '1.65', marginBottom: '24px', fontStyle: 'italic' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--slate-100)', paddingTop: '18px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.95rem'
                  }}>
                    {item.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '1rem' }}>{item.author}</div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-subtle)' }}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid var(--slate-200)'
          }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', maxWidth: '300px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                {activeIndex + 1} / {testimonials.length}
              </span>
              <div style={{ height: '4px', flex: '1', backgroundColor: 'var(--slate-200)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  backgroundColor: 'var(--accent-amber)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: '1px solid var(--slate-200)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: '1px solid var(--slate-200)',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
