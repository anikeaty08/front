import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const syncPointer = ({ x, y }) => {
      document.documentElement.style.setProperty('--px', x.toFixed(2));
      document.documentElement.style.setProperty('--py', y.toFixed(2));
      const posX = x;
      const posY = y;
      document.documentElement.style.setProperty('--x', `${posX}px`);
      document.documentElement.style.setProperty('--y', `${posY}px`);
    };
    document.body.addEventListener('pointermove', syncPointer);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<section>
<div className="grid-container">
<div className="card-wrapper">
<article data-glow="">
<div className="card-header">
<div className="icon">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
</svg>
</div>
<div className="card-header-text">
<h2>Component Library</h2>
<div className="company">Design System</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
              Reusable UI components built with accessibility and customization in mind, supporting light and dark mode.
            </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Components</div>
<div className="stat-value">187</div>
</div>
<div className="stat">
<div className="stat-label">Version</div>
<div className="stat-value">v2.4.0</div>
</div>
</div>
</div>
</article>
</div>
<div className="card-wrapper">
<article data-glow="">
<div className="card-header">
<div className="icon">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z"></path>
</svg>
</div>
<div className="card-header-text">
<h2>Color System</h2>
<div className="company">Design Tokens</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
              Comprehensive color palette with semantic tokens for UI states, supporting WCAG AA accessibility standards.
            </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Colors</div>
<div className="stat-value">64</div>
</div>
<div className="stat">
<div className="stat-label">Themes</div>
<div className="stat-value">3</div>
</div>
</div>
</div>
</article>
</div>
<div className="card-wrapper">
<article data-glow="">
<div className="card-header">
<div className="icon">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
</svg>
</div>
<div className="card-header-text">
<h2>Typography</h2>
<div className="company">Font System</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
              Modular type scale with responsive text styles. Optimized for readability across desktop and mobile interfaces.
            </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Font Families</div>
<div className="stat-value">2</div>
</div>
<div className="stat">
<div className="stat-label">Text Styles</div>
<div className="stat-value">12</div>
</div>
</div>
</div>
</article>
</div>
<div className="card-wrapper">
<article data-glow="">
<div className="card-header">
<div className="icon">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
</svg>
</div>
<div className="card-header-text">
<h2>Spacing System</h2>
<div className="company">Layout Grid</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
              Consistent spacing scale with predefined values for margins, padding, and layout. Based on 4px increments.
            </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Space Units</div>
<div className="stat-value">16</div>
</div>
<div className="stat">
<div className="stat-label">Grid Columns</div>
<div className="stat-value">12</div>
</div>
</div>
</div>
</article>
</div>
</div>
</section>


    </>
  );
}
