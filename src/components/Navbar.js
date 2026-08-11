'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Expertise', href: '/expertise' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Work With Us', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header-nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#E6A817',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1E1E1E',
            fontWeight: 'bold'
          }}>
            <Compass size={24} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-lora)',
              fontSize: '1.4rem',
              fontWeight: '700',
              color: '#1E1E1E',
              letterSpacing: '-0.02em',
              display: 'block',
              lineHeight: 1
            }}>
              Built on Site
            </span>
            <span style={{
              fontSize: '0.75rem',
              color: '#1E7B4A',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}>
              Technical Assistance
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary btn-sm" style={{ marginLeft: '12px' }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#1E1E1E'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              style={{ fontSize: '1.1rem', padding: '12px' }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '8px', width: '100%', justifyContent: 'center' }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 769px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
