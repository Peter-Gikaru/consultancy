'use client';

import { useState } from 'react';
import { Video, Send, CheckCircle2, Lock } from 'lucide-react';
import { siteData } from '@/config/siteData';

export default function BrainAuditForm() {
  const config = siteData.brainAuditConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.challenge) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (!config) return null;

  return (
    <div className="card" style={{
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-card)',
      padding: '44px',
      border: '2px solid var(--border-accent)',
      boxShadow: '0 12px 36px rgba(0,0,0,0.06)'
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-terracotta)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px' }}>
        <Video size={18} /> {config.badge}
      </div>

      <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '12px', fontFamily: 'var(--font-lora)' }}>
        {config.title}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginBottom: '32px', lineHeight: 1.65 }}>
        {config.subtitle}
      </p>

      {submitted ? (
        <div style={{
          backgroundColor: 'var(--bg-blush)',
          border: '2px solid var(--border-accent)',
          borderRadius: '16px',
          padding: '36px',
          textAlign: 'center',
          animation: 'fadeUpStagger 0.4s ease forwards'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-forest)',
            color: '#FDF8F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <CheckCircle2 size={32} />
          </div>

          <h4 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>
            Diagnosis Request Securely Received!
          </h4>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
            Thank you, {formData.name}. A senior partner is reviewing your challenge details right now. You will receive a private Loom video link sent directly to <strong>{formData.email}</strong> within 24 business hours.
          </p>

          <button
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', challenge: '' }); }}
            className="btn btn-outline btn-sm"
            style={{ marginTop: '24px' }}
          >
            Submit Another Challenge
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="audit-name" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              Your Name <span style={{ color: 'var(--accent-terracotta)' }}>*</span>
            </label>
            <input
              type="text"
              id="audit-name"
              required
              className="glowing-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-canvas)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
                fontFamily: 'var(--font-inter)',
                transition: 'all 0.25s ease'
              }}
            />
          </div>

          <div>
            <label htmlFor="audit-email" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              Work Email <span style={{ color: 'var(--accent-terracotta)' }}>*</span>
            </label>
            <input
              type="email"
              id="audit-email"
              required
              className="glowing-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@company.com"
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-canvas)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
                fontFamily: 'var(--font-inter)',
                transition: 'all 0.25s ease'
              }}
            />
          </div>

          <div>
            <label htmlFor="audit-challenge" style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              Describe Your Project Headache / Challenge <span style={{ color: 'var(--accent-terracotta)' }}>*</span>
            </label>
            <textarea
              id="audit-challenge"
              required
              rows={4}
              className="glowing-input"
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              placeholder="Tell us what is slipping, what you suspect is wrong, or where your team is stuck..."
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-canvas)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'var(--font-inter)',
                transition: 'all 0.25s ease'
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '8px' }}
          >
            {loading ? 'Transmitting Securely...' : config.ctaButtonText} <Send size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '8px' }}>
            <Lock size={14} color="var(--accent-forest)" />
            <span>{config.privacyNote}</span>
          </div>
        </form>
      )}
    </div>
  );
}
