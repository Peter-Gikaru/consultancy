'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export default function EmbeddedVsFlyInInteractive() {
  const [viewMode, setViewMode] = useState('compare'); 

  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 12px 32px rgba(0,0,0,0.05)' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
        <div>
          <span style={{ color: '#1E7B4A', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>
            Interactive Model Visualizer
          </span>
          <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-lora)', fontSize: '1.75rem', color: '#1E1E1E' }}>
            The Embedded Difference
          </h3>
        </div>

        <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '30px' }}>
          <button
            onClick={() => setViewMode('compare')}
            style={{
              padding: '8px 18px',
              borderRadius: '24px',
              border: 'none',
              backgroundColor: viewMode === 'compare' ? '#1E1E1E' : 'transparent',
              color: viewMode === 'compare' ? '#FFFFFF' : '#64748B',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setViewMode('embedded')}
            style={{
              padding: '8px 18px',
              borderRadius: '24px',
              border: 'none',
              backgroundColor: viewMode === 'embedded' ? '#1E7B4A' : 'transparent',
              color: viewMode === 'embedded' ? '#FFFFFF' : '#64748B',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Built on Site Model
          </button>
          <button
            onClick={() => setViewMode('flyin')}
            style={{
              padding: '8px 18px',
              borderRadius: '24px',
              border: 'none',
              backgroundColor: viewMode === 'flyin' ? '#C53030' : 'transparent',
              color: viewMode === 'flyin' ? '#FFFFFF' : '#64748B',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Traditional Fly-In
          </button>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '28px' }}>
        
        {(viewMode === 'compare' || viewMode === 'flyin') && (
          <div style={{
            backgroundColor: '#FFF5F5',
            borderRadius: '12px',
            padding: '32px',
            border: '2px solid #FEB2B2',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FED7D7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C53030' }}>
                  <XCircle size={24} />
                </div>
                <h4 style={{ margin: 0, color: '#9B2C2C', fontSize: '1.25rem', fontFamily: 'var(--font-inter)', fontWeight: '700' }}>
                  Traditional "Fly-In, Fly-Out"
                </h4>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#C53030', backgroundColor: '#FED7D7', padding: '4px 10px', borderRadius: '12px' }}>
                High Cost • Low Sustainability
              </span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#742A2A', fontSize: '0.975rem' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <XCircle size={18} color="#E53E3E" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Short 2-Week Missions:</strong> Consultants fly in, hold brief interviews, and immediately leave.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <XCircle size={18} color="#E53E3E" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Off-the-Shelf Templates:</strong> Standard global reports that ignore local political nuances.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <XCircle size={18} color="#E53E3E" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>PDF Reports on Shelves:</strong> Deliverables end at report presentation without implementation support.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <XCircle size={18} color="#E53E3E" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>No Local Capacity Built:</strong> Civil servants gain zero skills after consultants depart.
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #FEB2B2', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#9B2C2C' }}>
              <span>Average Policy Adoption: <strong>&lt; 25%</strong></span>
              <span>Long-Term Retention: <strong>Poor</strong></span>
            </div>
          </div>
        )}

        {(viewMode === 'compare' || viewMode === 'embedded') && (
          <div style={{
            backgroundColor: '#F0FFF4',
            borderRadius: '12px',
            padding: '32px',
            border: '2px solid #68D391',
            boxShadow: '0 8px 24px rgba(30, 123, 74, 0.12)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#C6F6D5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#276749' }}>
                  <CheckCircle2 size={24} />
                </div>
                <h4 style={{ margin: 0, color: '#22543D', fontSize: '1.25rem', fontFamily: 'var(--font-inter)', fontWeight: '700' }}>
                  &ldquo;Built on Site&rdquo; Embedded TA
                </h4>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#276749', backgroundColor: '#C6F6D5', padding: '4px 10px', borderRadius: '12px' }}>
                Recommended Model
              </span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#22543D', fontSize: '0.975rem' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#38A169" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Resident Local Teams:</strong> Consultants physically based inside ministry offices full-time.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#38A169" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Co-Designed Policies:</strong> Formulated in partnership with resident civil servants and communities.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#38A169" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Hands-on Execution:</strong> We monitor, adapt, and refine policies during live implementation.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#38A169" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Permanent Skill Transfer:</strong> Direct daily mentoring for ministry staff so capacity lasts.
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #9AE6B4', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#22543D' }}>
              <span>Average Policy Adoption: <strong>80%+</strong></span>
              <span>Long-Term Retention: <strong>High (Verified)</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
