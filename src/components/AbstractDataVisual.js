'use client';

export default function AbstractDataVisual() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '440px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.85
    }}>
      {/* Background Soft Glow */}
      <div style={{
        position: 'absolute',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 166, 35, 0.22) 0%, rgba(10, 37, 64, 0.08) 60%, rgba(0,0,0,0) 80%)',
        filter: 'blur(50px)',
        zIndex: 1
      }} />

      {/* Abstract Vector SVG Graphic */}
      <svg
        viewBox="0 0 500 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          maxHeight: '420px',
          zIndex: 2,
          opacity: 0.35 // 25-30% opacity overlay requirement
        }}
      >
        <defs>
          <linearGradient id="primaryNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A2540" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1A3A5C" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="goldAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E69512" stopOpacity="0.4" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Radar Grid Rings */}
        <circle cx="250" cy="220" r="190" stroke="#0A2540" strokeWidth="1" strokeDasharray="6 6" opacity="0.4" />
        <circle cx="250" cy="220" r="140" stroke="#0A2540" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="250" cy="220" r="90" stroke="#F5A623" strokeWidth="1.5" opacity="0.6" />

        {/* Axis Crosshair */}
        <line x1="60" y1="220" x2="440" y2="220" stroke="#0A2540" strokeWidth="1" opacity="0.3" />
        <line x1="250" y1="30" x2="250" y2="410" stroke="#0A2540" strokeWidth="1" opacity="0.3" />

        {/* Data Growth Curves */}
        <path
          d="M 70 330 C 130 310, 180 250, 240 220 C 300 190, 360 110, 430 80"
          stroke="url(#primaryNavyGrad)"
          strokeWidth="3.5"
          fill="none"
        />
        
        <path
          d="M 70 360 C 140 330, 190 280, 260 210 C 320 150, 380 130, 440 60"
          stroke="url(#goldAccentGrad)"
          strokeWidth="3"
          strokeDasharray="8 4"
          fill="none"
          filter="url(#glow)"
        />

        {/* Interconnected Network Nodes */}
        {/* Node 1 */}
        <circle cx="140" cy="300" r="7" fill="#0A2540" />
        <circle cx="140" cy="300" r="14" stroke="#0A2540" strokeWidth="1.5" opacity="0.5" />

        {/* Node 2 */}
        <circle cx="240" cy="220" r="9" fill="#F5A623" filter="url(#glow)" />
        <circle cx="240" cy="220" r="18" stroke="#F5A623" strokeWidth="2" opacity="0.6" />

        {/* Node 3 */}
        <circle cx="330" cy="140" r="8" fill="#0A2540" />
        <circle cx="330" cy="140" r="15" stroke="#0A2540" strokeWidth="1.5" opacity="0.5" />

        {/* Node 4 */}
        <circle cx="410" cy="80" r="10" fill="#F5A623" />
        <circle cx="410" cy="80" r="22" stroke="#F5A623" strokeWidth="2" opacity="0.4" />

        {/* Connecting Mesh Triangles */}
        <polygon points="140,300 240,220 200,160" fill="url(#primaryNavyGrad)" opacity="0.15" />
        <polygon points="240,220 330,140 360,240" fill="url(#goldAccentGrad)" opacity="0.18" />

        {/* Sub-Saharan Africa Analytical Map Outline Overlay (Stylized) */}
        <path
          d="M 210 120 Q 230 110, 260 120 T 300 140 T 320 190 T 290 260 T 260 310 T 230 330 T 220 290 T 200 220 Z"
          fill="none"
          stroke="#0A2540"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
        />

        {/* Data Metric Bar Charts */}
        <rect x="90" y="240" width="12" height="40" rx="3" fill="#0A2540" opacity="0.5" />
        <rect x="110" y="210" width="12" height="70" rx="3" fill="#F5A623" opacity="0.7" />
        <rect x="130" y="180" width="12" height="100" rx="3" fill="#0A2540" opacity="0.6" />
        <rect x="150" y="150" width="12" height="130" rx="3" fill="#F5A623" opacity="0.8" />

        {/* Pulse Beacon */}
        <circle cx="260" cy="310" r="4" fill="#F5A623" />
        <circle cx="260" cy="310" r="12" stroke="#F5A623" strokeWidth="1" opacity="0.8">
          <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.1;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating Micro Analytics Card */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        right: '20px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        padding: '12px 18px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
        border: '1px solid #E2E8F0',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          backgroundColor: 'rgba(245, 166, 35, 0.15)',
          color: '#E69512',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '800',
          fontSize: '1rem'
        }}>
          99.8%
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#0A2540' }}>
            Field Data Precision
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
            Real-Time Audit Pipeline
          </div>
        </div>
      </div>
    </div>
  );
}
