'use client';

import { useState, useEffect } from 'react';

export default function TypewriterHeadline() {
  const prefix = "Building ";
  const highlight = "Methodological Rigour";
  const suffix = " in Impact Evaluation & Policy Analytics.";

  const fullText = prefix + highlight + suffix;
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setDisplayedLength(current);
      if (current >= fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [fullText]);

  const typedPrefix = fullText.slice(0, Math.min(displayedLength, prefix.length));
  
  const highlightStart = prefix.length;
  const highlightEnd = prefix.length + highlight.length;
  
  let typedHighlight = "";
  if (displayedLength > highlightStart) {
    typedHighlight = fullText.slice(highlightStart, Math.min(displayedLength, highlightEnd));
  }

  let typedSuffix = "";
  if (displayedLength > highlightEnd) {
    typedSuffix = fullText.slice(highlightEnd, displayedLength);
  }

  return (
    <h1 className="hero-headline" style={{ marginBottom: '1.25rem', lineHeight: '1.2' }}>
      <span>{typedPrefix}</span>
      {typedHighlight && (
        <span className="hero-highlight-accent">
          {typedHighlight}
        </span>
      )}
      <span>{typedSuffix}</span>
      {!isDone && (
        <span
          style={{
            display: 'inline-block',
            width: '3px',
            height: '1em',
            backgroundColor: 'var(--accent-gold)',
            marginLeft: '4px',
            verticalAlign: 'middle',
            animation: 'blinkCursor 0.7s infinite'
          }}
        />
      )}
      <style jsx>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
}
