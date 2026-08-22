'use client';

import { useState } from 'react';
import { ShieldCheck, X, Check, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteData } from '@/config/siteData';

export default function NoBsPricingAnchor() {
  const [isOpen, setIsOpen] = useState(false);
  const config = siteData.pricingAnchorConfig;

  if (!config) return null;

  return (
    <>
      
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Pricing transparency widget"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'var(--accent-terracotta)',
            color: '#FDF8F5',
            padding: '12px 22px',
            borderRadius: '40px',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 24px var(--accent-terracotta-glow)',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="pulse-dot-warm" style={{ backgroundColor: '#FDF8F5' }} />
          <ShieldCheck size={18} />
          <span>{config.badge}</span>
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              bottom: '64px',
              right: '0',
              width: '360px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-card)',
              border: '2px solid var(--border-accent)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              padding: '24px',
              zIndex: 1000,
              animation: 'fadeUpStagger 0.3s ease forwards'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <span className="badge-warm">
                <ShieldCheck size={14} /> {config.badge}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-subtle)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: '0 0 8px', fontFamily: 'var(--font-lora)' }}>
              {config.headline}
            </h4>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
              {config.subtext}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {config.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'var(--bg-blush)', color: 'var(--accent-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={12} />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'var(--bg-blush)', padding: '14px', borderRadius: '12px', marginBottom: '16px', fontSize: '0.875rem', color: 'var(--accent-terracotta)', fontWeight: '600', textAlign: 'center' }}>
              "{config.liveCtaText}"
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Ask Us About Pricing <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
