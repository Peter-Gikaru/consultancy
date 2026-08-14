'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, X, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '@/config/siteData';

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
      {/* Floating Greeting Tooltip Teaser */}
      {showTooltip && !open && (
        <div className="glass-card animate-fade-up" style={{
          position: 'absolute',
          bottom: '64px',
          right: '0',
          width: '240px',
          padding: '12px 14px',
          borderRadius: '16px',
          fontSize: '0.85rem',
          color: 'var(--text-main)',
          boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}
        onClick={() => setOpen(true)}
        >
          <Sparkles size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0 }} />
          <span>Have a quick project question? Speak with a partner.</span>
          <button
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
            style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-subtle)', padding: 0 }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Quick contact widget"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 22px',
          borderRadius: '30px',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-on-dark)',
          border: '1px solid var(--accent-terracotta)',
          boxShadow: '0 10px 28px rgba(38, 35, 34, 0.25), 0 0 0 4px var(--accent-terracotta-glow)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '600',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <span className="pulse-dot-warm" />
        <MessageSquare size={18} />
        <span>Senior Advisory Desk</span>
      </button>

      {/* Quick Drawer Popup */}
      {open && (
        <div className="glass-card animate-fade-up" style={{
          position: 'absolute',
          bottom: '72px',
          right: '0',
          width: '350px',
          borderRadius: '20px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
          overflow: 'hidden',
          zIndex: 1000
        }}>
          {/* Drawer Header */}
          <div style={{
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-on-dark)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                <span className="pulse-dot-warm" /> Senior Partner Desk
              </div>
              <h4 style={{ color: '#FDF8F5', margin: '4px 0 0', fontSize: '1.1rem', fontFamily: 'var(--font-lora)', fontWeight: '600' }}>
                {siteData.siteInfo.brandName}
              </h4>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FDF8F5',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Body */}
          <div style={{ padding: '24px', backgroundColor: 'var(--bg-card)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
              Speak directly with our senior evaluation team. High confidentiality, zero sales pitches.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <a
                href={`mailto:${siteData.siteInfo.contactEmail}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                <Mail size={18} color="var(--accent-terracotta)" />
                <span>{siteData.siteInfo.contactEmail}</span>
              </a>

              <a
                href={`tel:${siteData.siteInfo.contactPhone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                <Phone size={18} color="var(--accent-forest)" />
                <span>{siteData.siteInfo.contactPhone}</span>
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Book 30-Min Confidential Slot <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

