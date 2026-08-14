'use client';

export default function WaveRibbonBackground({ className = '', style = {} }) {
  return (
    <div
      className={`wave-ribbon-wrapper ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        ...style
      }}
    >
      <svg
        className="wave-ribbon-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity: 0.55 }}
      >
        {/* Layer 1: Terracotta Clay Ribbon Wave */}
        <path
          d="M-100,200 C300,100 600,450 1000,250 C1300,100 1500,300 1600,350 L1600,600 L-100,600 Z"
          fill="url(#terracottaClayGradient)"
        />
        {/* Layer 2: Acacia Forest Green Wave */}
        <path
          d="M-100,350 C250,450 650,200 1100,400 C1350,500 1550,250 1600,200 L1600,600 L-100,600 Z"
          fill="url(#acaciaForestGradient)"
          style={{ opacity: 0.75 }}
        />
        {/* Layer 3: Warm Brass Accent Flow */}
        <path
          d="M-50,120 C400,280 750,80 1200,220 C1400,300 1550,150 1600,180"
          stroke="url(#brassStrokeGradient)"
          strokeWidth="3"
          strokeDasharray="8 6"
          style={{ opacity: 0.75 }}
        />

        <defs>
          <linearGradient id="terracottaClayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9A3412" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#9A3412" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="acaciaForestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14532D" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#14532D" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="brassStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C59B27" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#9A3412" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C59B27" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
