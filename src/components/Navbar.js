'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, BookOpen, ShieldCheck, Mail, Phone, Globe, BarChart3, Award } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { siteSettingsStore } from '@/utils/siteSettingsStore';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState(siteSettingsStore.getSettings());
  const pathname = usePathname();

  const announcements = [
    "Registered Kenyan Research & Evaluation Firm (2019)",
    "12 Sub-Saharan African Nations Covered | 250+ Verified Mandates",
    "Senior M&E Leadership for OECD, African Union & World Bank",
    `${settings.email} | Nairobi, Kenya`
  ];

  const [noticeIndex, setNoticeIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const handleUpdate = () => {
      setSettings(siteSettingsStore.getSettings());
    };
    window.addEventListener('derap_settings_updated', handleUpdate);

    const timer = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setNoticeIndex((prev) => (prev + 1) % announcements.length);
        setFadeState(true);
      }, 300);
    }, 4000);

    return () => {
      window.removeEventListener('derap_settings_updated', handleUpdate);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Track Record', href: '/track-record' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      
      <div style={{
        backgroundColor: '#0F172A',
        color: '#94A3B8',
        padding: '0 16px',
        fontSize: '0.825rem',
        fontWeight: '600',
        borderBottom: '1px solid #1E293B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '36px',
        overflow: 'hidden'
      }}>
        <div style={{
          opacity: fadeState ? 1 : 0,
          transform: fadeState ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'all 0.3s ease-in-out',
          color: '#E2E8F0',
          whiteSpace: 'nowrap'
        }}>
          <span>{announcements[noticeIndex]}</span>
        </div>
      </div>

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--slate-200)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px'
        }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1.5px solid var(--slate-200)',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF'
            }}>
              <img
                src="/images/logo.jpg"
                alt="DERAP Consult Limited Logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span style={{
                fontFamily: 'var(--font-lora)',
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--slate-900)',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                display: 'block'
              }}>
                DERAP <span style={{ color: 'var(--accent-amber-hover)' }}>Consult</span>
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--slate-500)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Research &amp; Evaluation
              </span>
            </div>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-only">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '700' : '600',
                    color: isActive ? 'var(--accent-amber-hover)' : 'var(--slate-700)',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(217, 119, 6, 0.08)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="/contact" className="glow-cta-btn desktop-only" style={{ fontSize: '0.875rem', padding: '9px 18px' }}>
              Request Proposal <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--slate-900)',
                cursor: 'pointer',
                padding: '8px'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--slate-200)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: pathname === link.href ? 'var(--accent-amber-hover)' : 'var(--slate-900)',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '12px' }}
            >
              Request Proposal <ArrowRight size={18} />
            </Link>
          </div>
        )}

        <style jsx global>{`
          @media (max-width: 880px) {
            .desktop-only { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}</style>
      </header>
    </>
  );
}
