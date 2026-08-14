import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteData } from '@/config/siteData';

export default function Footer() {
  const info = siteData.siteInfo;

  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-on-dark)',
      paddingTop: '80px',
      paddingBottom: '40px',
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '60px', gap: '48px' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(194, 65, 12, 0.2)',
                color: 'var(--accent-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Compass size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-lora)', fontSize: '1.35rem', fontWeight: '700', color: '#FDF8F5' }}>
                {info.brandName}
              </span>
            </div>

            <p style={{ color: '#D6D3D1', fontSize: '1.025rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {info.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--accent-terracotta)', fontWeight: '600' }}>
              <ShieldCheck size={16} /> 100% Unbiased & Independent Evaluation
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <h4 style={{ color: '#FDF8F5', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-inter)' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1rem' }}>
              <Link href="/" style={{ color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
              <Link href="/services" style={{ color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s' }}>Services & Methodology</Link>
              <Link href="/about" style={{ color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s' }}>About Our Story</Link>
              <Link href="/contact" style={{ color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s' }}>Contact & Booking</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FDF8F5', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-inter)' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.975rem', color: '#D6D3D1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--accent-terracotta)" />
                <a href={`mailto:${info.contactEmail}`} style={{ color: '#FDF8F5' }}>{info.contactEmail}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--accent-terracotta)" />
                <a href={`tel:${info.contactPhone}`} style={{ color: '#FDF8F5' }}>{info.contactPhone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-terracotta)" />
                <span>{info.mainOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #44403C',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.875rem',
          color: '#78716C'
        }}>
          <div>{info.copyright}</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Built with quiet authority</span>
            <span>•</span>
            <span>No tracking ads or high-pressure bots</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
