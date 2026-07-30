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
      
  lucide.createIcons();
  // Glow pointer effect
  const setPointer = (e) => {
    const cards = document.querySelectorAll('[data-glow]');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      let x = ((e.clientX - rect.left) / rect.width) * 100;
      let y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--x', x + '%');
      card.style.setProperty('--y', y + '%');
    });
  };
  document.body.addEventListener('pointermove', setPointer);
  // Fade-in on load
  document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      el.style.animationDelay = (0.13 * i + 0.11) + "s";
      el.classList.add('animated');
    });
  });

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

<div className="card-wrapper fade-in">
<article data-glow="" tabindex="0">
<div className="card-header">
<div className="icon">
<i data-lucide="layout-dashboard"></i>
</div>
<div className="card-header-text">
<h2>Website Design</h2>
<div className="company">UI & UX</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
            Modern, responsive, and visually stunning websites built for performance and seamless user experience.
          </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Projects</div>
<div className="stat-value">78+</div>
</div>
<div className="stat">
<div className="stat-label">Avg. Rating</div>
<div className="stat-value">4.9/5</div>
</div>
</div>
</div>
</article>
</div>

<div className="card-wrapper fade-in">
<article data-glow="" tabindex="0">
<div className="card-header">
<div className="icon">
<i data-lucide="search"></i>
</div>
<div className="card-header-text">
<h2>SEO</h2>
<div className="company">Optimization</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
            Enhance your visibility and organic reach with tailored search engine optimization strategies.
          </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Top Rankings</div>
<div className="stat-value">120+</div>
</div>
<div className="stat">
<div className="stat-label">Avg. Growth</div>
<div className="stat-value">+66%</div>
</div>
</div>
</div>
</article>
</div>

<div className="card-wrapper fade-in">
<article data-glow="" tabindex="0">
<div className="card-header">
<div className="icon">
<i data-lucide="bar-chart-4"></i>
</div>
<div className="card-header-text">
<h2>Google Ads</h2>
<div className="company">Paid Media</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
            Drive results with data-driven Google Ads campaigns, maximizing ROI and targeting your ideal audience.
          </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Ad Spend</div>
<div className="stat-value">$1.2M</div>
</div>
<div className="stat">
<div className="stat-label">Avg. ROI</div>
<div className="stat-value">4.5x</div>
</div>
</div>
</div>
</article>
</div>

<div className="card-wrapper fade-in">
<article data-glow="" tabindex="0">
<div className="card-header">
<div className="icon">
<i data-lucide="share-2"></i>
</div>
<div className="card-header-text">
<h2>Social Media</h2>
<div className="company">Brand Growth</div>
</div>
</div>
<div className="card-content">
<div className="divider"></div>
<div className="card-description">
            Grow your brand and engage your community with creative, strategic social media management.
          </div>
<div className="stats">
<div className="stat">
<div className="stat-label">Followers</div>
<div className="stat-value">320k</div>
</div>
<div className="stat">
<div className="stat-label">Engagement</div>
<div className="stat-value">+93%</div>
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
