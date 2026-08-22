'use client';

import SidePhotoGalleryStack from '@/components/SidePhotoGalleryStack';
import Link from 'next/link';
import { Layers, ArrowRight, FileText, Heart, Trees, BarChart3 } from 'lucide-react';

export default function InteractiveServices() {
  const services = [
    {
      id: 'gallery-1',
      title: 'Health Systems Strengthening',
      category: 'Health Logistics',
      icon: Heart,
      color: '#14532D',
      bgLight: 'rgba(20, 83, 45, 0.12)',
      mediaType: 'image',
      image: '/images/health-clinic.jpg',
      tagline: 'Last-Mile Pharmaceutical Logistics',
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
      title: 'Climate & Resilience Adaptation',
      category: 'Climate Finance',
      icon: Trees,
      color: '#9A3412',
      bgLight: 'rgba(154, 52, 18, 0.12)',
      mediaType: 'image',
      image: '/images/climate-project.jpg',
      tagline: 'Community Adaptation Funds',
      description: 'Channeled international climate adaptation finance directly to community pastoralist groups in Northern Kenya and Ethiopia.',
      impactMetric: '$40M+ Adaptation Funds Mobilized',
      highlights: [
        '$40M mobilized directly for arid land resilience',
        '92% direct community pass-through rate',
        'Designed risk transfer mechanisms for drought resilience'
      ]
    },
    {
      id: 'gallery-3',
      title: 'Policy & Governance Reform',
      category: 'Public Administration',
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
      title: 'Project Evaluation & Learning',
      category: 'Data & Analytics',
      icon: BarChart3,
      color: '#1E40AF',
      bgLight: 'rgba(30, 64, 175, 0.12)',
      mediaType: 'image',
      image: '/images/expertise-collage.jpg',
      tagline: 'Rigorous Impact Evaluation',
      description: 'Conducting baseline and endline evaluations of donor and government programs using mixed-methods research and real-time dashboard analytics.',
      impactMetric: '500+ Programs Evaluated',
      highlights: [
        '500+ donor & government evaluations completed',
        'Built real-time GIS tracking dashboards',
        'Rapid learning feedback loops for adaptive management'
      ]
    }
  ];

  return (
    <div className="sticky-split-container" style={{ marginTop: '24px' }}>
      
      <div className="sticky-left-col">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(154, 52, 18, 0.12)',
          color: '#9A3412',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '700',
          marginBottom: '16px'
        }}>
          <Layers size={16} /> INTERACTIVE PRACTICE GALLERY
        </div>

        <h2 style={{ fontSize: '2.5rem', marginTop: '8px', marginBottom: '16px', color: '#0F172A', lineHeight: 1.2, fontFamily: 'var(--font-lora)' }}>
          Our Expertise. Your Transformation.
        </h2>

        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
          Use the side photo gallery filmstrip to explore our embedded practices. Select any photo or video clip to pop up detailed field highlights and verified metrics.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
          <div style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#9A3412', fontFamily: 'var(--font-playfair)' }}>70%</div>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '600' }}>Locally-Led Projects Built on Site</div>
          </div>

          <div style={{ padding: '16px 20px', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#14532D', fontFamily: 'var(--font-playfair)' }}>80%</div>
            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '600' }}>Verified Policy Recommendation Adoption</div>
          </div>
        </div>

        <Link href="/expertise" className="btn btn-primary" style={{ padding: '14px 28px', backgroundColor: '#9A3412', borderColor: '#9A3412' }}>
          View Practice Framework <ArrowRight size={18} />
        </Link>
      </div>

      <div>
        <SidePhotoGalleryStack items={services} />
      </div>
    </div>
  );
}
