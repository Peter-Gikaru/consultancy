import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-12" style={{ gap: '40px', marginBottom: '48px' }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 4' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#E6A817',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E1E1E'
              }}>
                <Compass size={20} />
              </div>
              <span style={{
                fontFamily: 'var(--font-lora)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#FFFFFF'
              }}>
                Built on Site
              </span>
            </Link>
            <p style={{ color: '#A0AEC0', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Smart technical assistance and project evaluation consultancy driving sustainable government reform across Africa. Embedded teams, politically informed, locally led.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '20px', fontSize: '1.1rem', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/expertise">Our Expertise</Link></li>
              <li><Link href="/impact">Our Impact</Link></li>
              <li><Link href="/contact">Work With Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '20px', fontSize: '1.1rem', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
              Nairobi Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="#E6A817" />
                <span>Nairobi, Kenya</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#E6A817" />
                <a href="mailto:info@builton.site">info@builton.site</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#E6A817" />
                <a href="tel:+254700000000">+254 (0) 700 000 000</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ color: '#FFFFFF', marginBottom: '20px', fontSize: '1.1rem', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#2D3748',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#2D3748',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid #2D3748',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.875rem',
          color: '#718096'
        }}>
          <p style={{ margin: 0, color: '#718096' }}>
            © 2026 Built on Site. All rights reserved.
          </p>
          <p style={{ margin: 0, color: '#718096' }}>
            Smart Technical Assistance for Government Reform in Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
