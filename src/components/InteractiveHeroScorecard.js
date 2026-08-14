'use client';

import { useState } from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck, Zap, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function InteractiveHeroScorecard() {
  const [activeTab, setActiveTab] = useState('after');

  const isAfter = activeTab === 'after';

  return (
    <div className="glass-card animate-float" style={{
      borderRadius: '24px',
      padding: '28px 24px',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '480px',
      margin: '0 auto',
      boxShadow: '0 24px 50px rgba(38, 35, 34, 0.09), 0 8px 16px rgba(194, 65, 12, 0.08)'
    }}>
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        background: isAfter ? 'rgba(20, 83, 45, 0.12)' : 'rgba(194, 65, 12, 0.15)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
        transition: 'all 0.5s ease'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={18} color="var(--accent-terracotta)" />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
            Live Diagnostic Model
          </span>
        </div>

        <div style={{
          display: 'inline-flex',
          backgroundColor: 'var(--bg-canvas)',
          borderRadius: '20px',
          padding: '3px',
          border: '1px solid var(--border-light)'
        }}>
          <button
            onClick={() => setActiveTab('before')}
            style={{
              padding: '6px 12px',
              fontSize: '0.78rem',
              fontWeight: '600',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backgroundColor: !isAfter ? '#262322' : 'transparent',
              color: !isAfter ? '#FDF8F5' : 'var(--text-subtle)'
            }}
          >
            Friction State
          </button>
          <button
            onClick={() => setActiveTab('after')}
            style={{
              padding: '6px 12px',
              fontSize: '0.78rem',
              fontWeight: '600',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backgroundColor: isAfter ? 'var(--accent-terracotta)' : 'transparent',
              color: isAfter ? '#FDF8F5' : 'var(--text-subtle)'
            }}
          >
            With Meridian
          </button>
        </div>
      </div>

      <div style={{
        backgroundColor: isAfter ? '#F0FDF4' : '#FFF7ED',
        border: `1px solid ${isAfter ? '#BBF7D0' : '#FFEDD5'}`,
        borderRadius: '18px',
        padding: '20px',
        marginBottom: '20px',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: '600', marginBottom: '4px' }}>
              Project Health Index
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '2.5rem',
                fontWeight: '700',
                lineHeight: 1,
                color: isAfter ? 'var(--accent-forest)' : 'var(--accent-terracotta)',
                transition: 'all 0.3s ease'
              }}>
                {isAfter ? '94/100' : '42/100'}
              </span>
              <span style={{ fontSize: '0.825rem', fontWeight: '700', color: isAfter ? '#166534' : '#C2410C', display: 'flex', alignItems: 'center', gap: '3px' }}>
                {isAfter ? <TrendingUp size={14} /> : <AlertTriangle size={14} />}
                {isAfter ? '+52 pts recovery' : 'High Delivery Risk'}
              </span>
            </div>
          </div>

          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: isAfter ? 'rgba(20, 83, 45, 0.15)' : 'rgba(194, 65, 12, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isAfter ? 'var(--accent-forest)' : 'var(--accent-terracotta)',
            transition: 'all 0.3s ease'
          }}>
            {isAfter ? <CheckCircle2 size={28} /> : <AlertTriangle size={28} />}
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: isAfter ? '#DCFCE7' : '#FFEDD5',
          borderRadius: '4px',
          marginTop: '16px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: isAfter ? '94%' : '42%',
            height: '100%',
            backgroundColor: isAfter ? 'var(--accent-forest)' : 'var(--accent-terracotta)',
            borderRadius: '4px',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          border: '1px solid var(--border-light)'
        }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={15} color="var(--accent-terracotta)" /> Team Velocity & Morale
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isAfter ? 'var(--accent-forest)' : '#B45309' }}>
            {isAfter ? 'High (Clear Scope)' : 'Stalled (Burnout)'}
          </span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          border: '1px solid var(--border-light)'
        }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={15} color="var(--accent-forest)" /> Vendor Deliverable Alignment
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isAfter ? 'var(--accent-forest)' : 'var(--accent-terracotta)' }}>
            {isAfter ? 'Verified (100%)' : 'Unchecked Claims'}
          </span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        borderTop: '1px dashed var(--border-light)'
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
          Want a 15-min diagnostic on your project?
        </span>
        <Link href="/contact" style={{
          fontSize: '0.85rem',
          fontWeight: '700',
          color: 'var(--accent-terracotta)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2px'
        }}>
          Run Audit <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
