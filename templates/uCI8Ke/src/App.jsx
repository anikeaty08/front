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
      
<div className="max-w-md">
<div className="ProductFeatureCard Card">
<div className="ProductFeatureCard__graphic">
<div className="ProductFeatureCard__graphic::after"></div>
<div className="ProductFeatureCard__graphicLayer">
<div className="ProductFeatureCard__graphicWrapper">
<div className="LowCodeNoCode__preIntegratedDomGraphic DomGraphic h-full w-full">
<img alt="Low-code interface" className="LowCodeNoCode__preIntegratedDomGraphic--image object-cover" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
<div className="ProductFeatureCard__graphicOverlay"></div>
</div>
</div>
<div className="ProductFeatureCard__body">
<div className="Copy__title">
          Build without limits
        </div>
<div className="Copy__body">
          Create powerful integrations and workflows with our low-code tools that connect to your existing systems.
        </div>
</div>
<div className="ProductFeatureCard__cta">
<a className="Link flex items-center" href="#">
          Learn more
          <svg aria-hidden="true" className="HoverArrow" height="10" viewbox="0 0 10 10" width="10">
<g fill="none" stroke="currentColor" strokeWidth="2">
<path className="HoverArrow__linePath" d="M0 5h7"></path>
<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
</g>
</svg>
</a>
</div>
</div>
</div>

    </>
  );
}
