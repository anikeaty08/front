import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed grid-lines pointer-events-none z-0 top-0 right-0 bottom-0 left-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(14, 165, 233, 0)', stopOpacity: 0 }}></stop>
            <stop offset="50%" style={{ stopColor: 'rgba(14, 165, 233, 0.5)', stopOpacity: 1 }}></stop>
            <stop offset="100%" style={{ stopColor: 'rgba(14, 165, 233, 0)', stopOpacity: 0 }}></stop>
          </linearGradient>
          <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(14, 165, 233, 0)', stopOpacity: 0 }}></stop>
            <stop offset="50%" style={{ stopColor: 'rgba(14, 165, 233, 0.5)', stopOpacity: 1 }}></stop>
            <stop offset="100%" style={{ stopColor: 'rgba(14, 165, 233, 0)', stopOpacity: 0 }}></stop>
          </linearGradient>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated Lines */}
        <line x1="-200" y1="25%" x2="0" y2="25%" stroke="url(#neonGradient1)" strokeWidth="1" filter="url(#neonGlow)">
          <animate attributeName="x1" values="-200;100%" dur="15s" repeatCount="indefinite"></animate>
          <animate attributeName="x2" values="0;120%" dur="15s" repeatCount="indefinite"></animate>
        </line>
        
        <line x1="75%" y1="-200" x2="75%" y2="0" stroke="url(#neonGradient2)" strokeWidth="1" filter="url(#neonGlow)">
          <animate attributeName="y1" values="-200;100%" dur="12s" repeatCount="indefinite"></animate>
          <animate attributeName="y2" values="0;120%" dur="12s" repeatCount="indefinite"></animate>
        </line>
      </svg>
    </div>
  );
}