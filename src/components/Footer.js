'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { siteSettingsStore } from '@/utils/siteSettingsStore';

function LinkedInIcon({ size = 18, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const [settings, setSettings] = useState(siteSettingsStore.getSettings());
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      setSettings(siteSettingsStore.getSettings());
    };
    window.addEventListener('derap_settings_updated', handleUpdate);
    return () => window.removeEventListener('derap_settings_updated', handleUpdate);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#0F172A',
      color: 'var(--text-on-dark)',
      padding: '72px 0 40px',
      borderTop: '1px solid #1E293B',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div className="footer-watermark">
        DERAP CONSULT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '48px'
        }} className="footer-grid">
          
          <div>
            <h3 style={{
              fontFamily: 'var(--font-lora)',
              fontSize: '1.5rem',
              color: '#FFFFFF',
              marginBottom: '12px'
            }}>
              {siteData.siteInfo.brandName}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '340px' }}>
              Building clarity-driven digital foundations and empirical evaluation pipelines across Africa.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.825rem', color: '#64748B' }}>
              {siteData.siteInfo.registrationInfo}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/" style={{ color: '#94A3B8', fontSize: '0.925rem' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: '#94A3B8', fontSize: '0.925rem' }}>About Us</Link></li>
              <li><Link href="/services" style={{ color: '#94A3B8', fontSize: '0.925rem' }}>Services</Link></li>
              <li><Link href="/track-record" style={{ color: '#94A3B8', fontSize: '0.925rem' }}>Track Record</Link></li>
              <li><Link href="/insights" style={{ color: '#94A3B8', fontSize: '0.925rem' }}>Methods &amp; Blog</Link></li>
              <li><Link href="/contact" style={{ color: '#94A3B8', fontSize: '0.925rem' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
              Contact Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.925rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-amber)" />
                <a href={`mailto:${settings.email}`} style={{ color: '#94A3B8' }}>{settings.email}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--accent-amber)" />
                <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} style={{ color: '#94A3B8' }}>{settings.phone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--accent-amber)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{settings.address}</span>
              </div>
              {settings.linkedIn && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <LinkedInIcon size={16} color="var(--accent-amber)" />
                  <a href={settings.linkedIn} target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8' }}>
                    LinkedIn Page
                  </a>
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
              Our Newsletter
            </h4>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '14px', lineHeight: '1.5' }}>
              Get informed of new evaluation methods notes, policy briefs, and insights.
            </p>

            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                required
                placeholder="info@gmail.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  flex: '1',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  backgroundColor: '#1E293B',
                  color: '#FFFFFF',
                  fontSize: '0.875rem'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#EF4444',
                  color: '#FFFFFF',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Submit
              </button>
            </form>

            {newsletterSubmitted && (
              <div role="status" aria-live="polite" style={{ color: '#10B981', fontSize: '0.825rem', marginTop: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> Subscribed to DERAP Policy Insights!
              </div>
            )}
          </div>

        </div>

        <div style={{
          borderTop: '1px solid #1E293B',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.875rem',
          color: '#64748B'
        }}>
          <div>
            © 2026 DERAP Consult Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy-policy" style={{ color: '#64748B' }}>Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" style={{ color: '#64748B' }}>Privacy Policy</Link>
            <Link href="/admin" style={{ color: '#475569' }}>Admin Portal</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
