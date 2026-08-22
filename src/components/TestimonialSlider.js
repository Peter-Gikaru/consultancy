'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Building2, Award } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = [
    {
      quote: "Built on Site has been a game-changer for our ministry. Their deep local knowledge, resident teams, and genuine commitment to partnership made all the difference in delivering national health supply chain reforms.",
      author: "Director of Health Policy & Planning",
      organization: "Ministry of Health, Kenya",
      location: "Nairobi, Kenya",
      badge: "Verified Government Partner",
      rating: 5
    },
    {
      quote: "Their approach is unlike any other international consultancy. They don't just advise from afar; they are physically embedded in our internal team, navigating local political economy nuances alongside us.",
      author: "Permanent Secretary",
      organization: "Ministry of Finance & Economic Planning",
      location: "East Africa Region",
      badge: "Public Financial Reform Partner",
      rating: 5
    },
    {
      quote: "When we needed rigorous, independent evaluation for our 5-year social protection pilot, Built on Site delivered evidence that directly shaped our national cash transfer legislation.",
      author: "Chief Evaluation Officer",
      organization: "State Department for Social Protection",
      location: "Kenya & Regional",
      badge: "Policy Evaluation Lead",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <div style={{ position: 'relative', maxWidth: '840px', margin: '0 auto' }}>
      <div className="card glass-panel" style={{
        padding: '48px 40px',
        borderLeft: '6px solid #E6A817',
        boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
        position: 'relative'
      }}>
        
        <Quote size={56} color="#E6A817" style={{ opacity: 0.15, position: 'absolute', top: '28px', right: '32px' }} />

        <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
          {[...Array(activeTestimonial.rating)].map((_, i) => (
            <Star key={i} size={18} fill="#E6A817" color="#E6A817" />
          ))}
          <span style={{ marginLeft: '10px', fontSize: '0.85rem', fontWeight: '700', color: '#1E7B4A', backgroundColor: 'rgba(30, 123, 74, 0.1)', padding: '2px 10px', borderRadius: '12px' }}>
            {activeTestimonial.badge}
          </span>
        </div>

        <p style={{
          fontFamily: 'var(--font-lora)',
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: '#1E1E1E',
          lineHeight: 1.7,
          marginBottom: '28px'
        }}>
          "{activeTestimonial.quote}"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 2px', fontSize: '1.1rem', color: '#1E1E1E', fontFamily: 'var(--font-inter)', fontWeight: '700' }}>
              {activeTestimonial.author}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E7B4A', fontSize: '0.925rem', fontWeight: '600' }}>
              <Building2 size={16} />
              <span>{activeTestimonial.organization} • {activeTestimonial.location}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                color: '#1E1E1E'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: idx === currentIndex ? '#E6A817' : '#CBD5E1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                color: '#1E1E1E'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
