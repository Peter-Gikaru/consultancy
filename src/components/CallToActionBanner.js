import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, FileSpreadsheet } from 'lucide-react';

export default function CallToActionBanner() {
  return (
    <section style={{
      padding: '6rem 1.5rem',
      backgroundColor: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, rgba(30, 58, 138, 0.08) 50%, rgba(255,255,255,0) 100%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h2 style={{
          fontSize: '2.75rem',
          color: 'var(--text-main)',
          margin: '12px 0 20px',
          fontFamily: 'var(--font-lora)',
          lineHeight: '1.2'
        }}>
          Transform Complex Field Data into Decisive Policy Evidence.
        </h2>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--slate-600)',
          marginBottom: '36px',
          maxWidth: '720px',
          margin: '0 auto 36px',
          lineHeight: '1.6'
        }}>
          Join leading development organizations, donor agencies, and researchers who trust DERAP Consult for rigorous impact analytics across Sub-Saharan Africa.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/contact" className="glow-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={18} /> Schedule Technical Consultation <ArrowRight size={18} />
          </Link>

          <Link href="/expertise" className="btn btn-secondary" style={{ padding: '14px 28px' }}>
            <FileSpreadsheet size={18} /> View Methodology Framework
          </Link>
        </div>
      </div>
    </section>
  );
}
