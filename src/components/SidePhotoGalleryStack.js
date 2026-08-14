'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FileText,
  Heart,
  Trees,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Film,
  ZoomIn,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function SidePhotoGalleryStack({ items = [] }) {
  const defaultItems = [
    {
      id: 'gallery-1',
      title: 'Kenya Health Logistics Transformation',
      category: 'Health Systems',
      icon: Heart,
      color: '#14532D',
      bgLight: 'rgba(20, 83, 45, 0.12)',
      mediaType: 'image',
      image: '/images/health-clinic.jpg',
      tagline: 'Last-Mile Pharmaceutical Distribution',
      description: 'Embedded teams deployed to 12 county health departments, implementing real-time inventory tracking to eliminate clinic medicine stock-outs.',
      impactMetric: '40% Reduction in Stock-Outs',
      highlights: [
        'Real-time inventory tracking connected to 150+ dispensaries',
        'Direct co-design with Ministry of Health leadership',
        '80% recommendation adoption rate by county parliaments'
      ]
    },
    {
      id: 'gallery-2',
      title: 'Climate Adaptation Finance in Pastoral Communities',
      category: 'Climate Resilience',
      icon: Trees,
      color: '#9A3412',
      bgLight: 'rgba(154, 52, 18, 0.12)',
      mediaType: 'image',
      image: '/images/climate-project.jpg',
      tagline: 'Community-Led Adaptation Funds',
      description: 'Channeled international climate adaptation finance directly to community pastoralist groups in Northern Kenya and Ethiopia.',
      impactMetric: '$40M+ Local Adaptation Funds Mobilized',
      highlights: [
        '$40M mobilized directly for arid land resilience',
        '92% direct community pass-through rate',
        'Designed risk transfer mechanisms for drought resilience'
      ]
    },
    {
      id: 'gallery-3',
      title: 'National Social Protection Policy Co-Design',
      category: 'Policy & Governance',
      icon: FileText,
      color: '#C59B27',
      bgLight: 'rgba(197, 155, 39, 0.12)',
      mediaType: 'image',
      image: '/images/policy-meeting.jpg',
      tagline: 'Evidence-Based Public Sector Reform',
      description: 'Working shoulder-to-shoulder with ministry officials to draft legislative frameworks and cash transfer guidelines targeting vulnerable households.',
      impactMetric: '80% Legislative Adoption Rate',
      highlights: [
        'Co-drafted national cash transfer frameworks',
        'De-risked public financial management across 10 counties',
        'Provided legislative drafting technical assistance'
      ]
    },
    {
      id: 'gallery-4',
      title: 'Independent Impact Evaluation & Learning',
      category: 'Project Evaluation',
      icon: BarChart3,
      color: '#1E40AF',
      bgLight: 'rgba(30, 64, 175, 0.12)',
      mediaType: 'image',
      image: '/images/expertise-collage.jpg',
      tagline: 'Rigorous Data Analytics & Dashboard GIS',
      description: 'Conducting baseline and endline evaluations of donor and government programs using mixed-methods research and real-time dashboard analytics.',
      impactMetric: '500+ Programs Evaluated',
      highlights: [
        '500+ donor & government evaluations completed',
        'Built real-time GIS tracking dashboards',
        'Rapid learning feedback loops for adaptive management'
      ]
    }
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItem = galleryItems[selectedIndex] || galleryItems[0];
  const IconComp = activeItem.icon || FileText;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="side-filmstrip-container">
      {/* Filmstrip Main Viewer Stage */}
      <div className="filmstrip-viewer">
        {/* Active Badge */}
        <div className="filmstrip-active-badge">
          ⭐ {activeItem.category || 'Field Dispatch'}
        </div>

        {/* Media Preview */}
        {activeItem.mediaType === 'video' ? (
          <video
            src={activeItem.mediaUrl || activeItem.image}
            controls
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Image
            src={activeItem.image || activeItem.mediaUrl || '/images/policy-meeting.jpg'}
            alt={activeItem.title}
            fill
            style={{ objectFit: 'cover', transition: 'all 0.5s ease' }}
          />
        )}

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(transparent 30%, rgba(15, 23, 42, 0.85))'
        }} />

        {/* Gallery Navigation Controls */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 5,
          color: '#FFFFFF'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#C59B27', fontWeight: '700', textTransform: 'uppercase' }}>
              Photo Gallery Selection {selectedIndex + 1} of {galleryItems.length}
            </span>
            <h4 style={{ margin: '2px 0 0', fontSize: '1.25rem', color: '#FFFFFF', fontFamily: 'var(--font-inter)', fontWeight: '700' }}>
              {activeItem.title}
            </h4>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Photo Gallery Filmstrip Bar */}
      <div className="filmstrip-bar">
        {galleryItems.map((item, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <div
              key={item.id || idx}
              onClick={() => setSelectedIndex(idx)}
              className={`filmstrip-thumb ${isActive ? 'active' : ''}`}
            >
              <Image
                src={item.image || item.mediaUrl || '/images/policy-meeting.jpg'}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              {isActive && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px solid #9A3412',
                  borderRadius: '10px'
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Pop-Up Details Card (Popping Up on Photo Selection / Scroll) */}
      <div key={activeItem.id || selectedIndex} className="pop-up-detail-card" style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: activeItem.bgLight || 'rgba(154, 52, 18, 0.12)',
              color: activeItem.color || '#9A3412',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <IconComp size={20} />
            </div>
            <span style={{ fontWeight: '700', fontSize: '1rem', color: '#0F172A' }}>
              {activeItem.tagline || activeItem.category}
            </span>
          </div>

          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: activeItem.color || '#9A3412',
            backgroundColor: activeItem.bgLight || 'rgba(154, 52, 18, 0.12)',
            padding: '4px 12px',
            borderRadius: '16px'
          }}>
            {activeItem.impactMetric}
          </span>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
          {activeItem.description}
        </p>

        {activeItem.highlights && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {activeItem.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
                <CheckCircle2 size={16} color={activeItem.color || '#9A3412'} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/contact"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', backgroundColor: activeItem.color || '#9A3412', borderColor: activeItem.color || '#9A3412' }}
        >
          Consult Sector Lead <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
