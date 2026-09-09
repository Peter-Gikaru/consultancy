'use client';

import React from 'react';
import { getImageUrl } from '@/utils/getImageUrl';

export default function AbstractDataVisual() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '540px',
      margin: '0 auto',
      minHeight: '420px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Soft Ambient Glow */}
      <div style={{
        position: 'absolute',
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, rgba(10, 37, 64, 0.06) 60%, rgba(0,0,0,0) 80%)',
        filter: 'blur(50px)',
        zIndex: 1
      }} />

      {/* Subtle Background SVG Concentric Radar Grid */}
      <svg
        viewBox="0 0 500 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.25,
          pointerEvents: 'none'
        }}
      >
        <circle cx="250" cy="220" r="190" stroke="#0A2540" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="250" cy="220" r="140" stroke="#0A2540" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="250" cy="220" r="90" stroke="#F5A623" strokeWidth="1.5" />
        <line x1="60" y1="220" x2="440" y2="220" stroke="#0A2540" strokeWidth="1" opacity="0.3" />
        <line x1="250" y1="30" x2="250" y2="410" stroke="#0A2540" strokeWidth="1" opacity="0.3" />
      </svg>

      {/* Clean Authentic Field Photo Card */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 45px -15px rgba(10, 37, 64, 0.18), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        backgroundColor: '#FFFFFF'
      }}>
        <img
          src={getImageUrl('/images/hero-kenya.jpg')}
          alt="Kenyan field evaluation protocol review with agricultural leads in Gilgil, Kenya"
          style={{
            width: '100%',
            height: '380px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}
