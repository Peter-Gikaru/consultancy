'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/config/siteData';

export default function EmotionalStateFilter({ onSelectService }) {
  const pains = siteData.servicesConfig.emotionalPains || [];
  const [selectedPainId, setSelectedPainId] = useState(pains[0]?.id || '');

  const activePain = pains.find((p) => p.id === selectedPainId) || pains[0];

  const handleSelect = (pain) => {
    setSelectedPainId(pain.id);
    if (onSelectService && pain.recommendedServiceId) {
      onSelectService(pain.recommendedServiceId);
    }
  };

  if (pains.length === 0) return null;

  return (
    <div style={{
      backgroundColor: 'var(--bg-blush)',
      borderRadius: 'var(--radius-card)',
      padding: '36px',
      border: '1px solid var(--border-accent)',
      marginBottom: '56px'
    }}>
      <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '12px' }}>
        How is your project making you feel right now?
      </h3>

      <p style={{ color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '700px' }}>
        Select your biggest headache below. We will remove the jargon and direct you immediately to the specific framework designed to solve it.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
        {pains.map((pain) => {
          const isSelected = pain.id === selectedPainId;
          return (
            <button
              key={pain.id}
              onClick={() => handleSelect(pain)}
              style={{
                padding: '14px 22px',
                borderRadius: '30px',
                border: isSelected ? '2px solid var(--accent-terracotta)' : '1px solid var(--border-light)',
                backgroundColor: isSelected ? 'var(--accent-terracotta)' : 'var(--bg-card)',
                color: isSelected ? '#FDF8F5' : 'var(--text-main)',
                fontWeight: isSelected ? '600' : '500',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 6px 18px var(--accent-terracotta-glow)' : 'none'
              }}
            >
              {pain.buttonLabel}
            </button>
          );
        })}
      </div>

      {activePain && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '28px',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }} className="animate-fade-up">
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-forest)', textTransform: 'uppercase' }}>
            Empathetic Diagnosis
          </div>

          <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>
            {activePain.title}
          </h4>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
            {activePain.diagnosisNote}
          </p>

          <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-terracotta)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={18} /> Recommended Solution Framework Ready Below
            </span>
            <a
              href={`#${activePain.recommendedServiceId}`}
              style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-terracotta)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Jump to Service Framework <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
