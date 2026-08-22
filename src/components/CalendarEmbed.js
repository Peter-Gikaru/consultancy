'use client';

import { useState } from 'react';
import { Calendar, Clock, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import { siteData } from '@/config/siteData';

export default function CalendarEmbed() {
  const config = siteData.calendarConfig;
  const [selectedDay, setSelectedDay] = useState(config?.availableDays[0] || 'Monday');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [booked, setBooked] = useState(false);

  if (!config) return null;

  const handleBooking = (slot) => {
    setSelectedSlot(slot);
    setBooked(true);
  };

  return (
    <div className="card" style={{
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-card)',
      padding: '40px',
      border: '1px solid var(--border-light)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-forest)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px' }}>
        <Calendar size={18} /> {config.badge}
      </div>

      <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px', fontFamily: 'var(--font-lora)' }}>
        {config.title}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', marginBottom: '28px' }}>
        {config.subtitle}
      </p>

      {booked ? (
        <div style={{
          backgroundColor: 'var(--bg-blush)',
          border: '2px solid var(--accent-terracotta)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
          animation: 'fadeUpStagger 0.3s ease forwards'
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-terracotta)',
            color: '#FDF8F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <CheckCircle2 size={30} />
          </div>

          <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '8px' }}>
            30-Minute Consultation Hold Reserved!
          </h4>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: '0 0 20px' }}>
            You are scheduled for <strong>{selectedDay} at {selectedSlot}</strong>. We've sent a calendar invite to your inbox.
          </p>

          <button
            onClick={() => { setBooked(false); setSelectedSlot(''); }}
            className="btn btn-outline btn-sm"
          >
            Change Time Slot
          </button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '24px' }}>
            {config.availableDays.map((day) => {
              const isSelected = day === selectedDay;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '20px',
                    border: isSelected ? '2px solid var(--accent-terracotta)' : '1px solid var(--border-light)',
                    backgroundColor: isSelected ? 'var(--accent-terracotta)' : 'var(--bg-canvas)',
                    color: isSelected ? '#FDF8F5' : 'var(--text-main)',
                    fontWeight: isSelected ? '600' : '500',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {config.availableTimeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => handleBooking(slot)}
                style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-canvas)',
                  color: 'var(--text-main)',
                  fontWeight: '600',
                  fontSize: '0.975rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-terracotta)';
                  e.currentTarget.style.color = 'var(--accent-terracotta)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <Clock size={16} color="var(--accent-terracotta)" /> {slot}
              </button>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', textAlign: 'center', margin: 0 }}>
            {config.embedNote}
          </p>
        </div>
      )}
    </div>
  );
}
