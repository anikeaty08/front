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
      <?xml version="1.0" encoding="UTF-8"?>
<svg height="600" version="1.1" viewbox="0 0 800 600" width="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Design Prototype by Duc Huynh</title>

<g id="Artboard" inkscape:label="Artboard">
<rect fill="#F6F6FA" height="600" width="800" x="0" y="0"></rect>
</g>

<g id="Header" inkscape:label="Header">
<rect fill="#254081" height="80" width="800" x="0" y="0"></rect>

<g id="Logo" inkscape:label="Logo">
<circle cx="48" cy="40" fill="#fff" r="30"></circle>
<text fill="#254081" fontFamily="Poppins, Arial, sans-serif" fontSize="28" font-weight="bold" text-anchor="middle" x="48" y="50">
        DH
      </text>
</g>

<g id="Navigation" inkscape:label="Navigation">
<text fill="#fff" fontFamily="Poppins, Arial, sans-serif" fontSize="20" style={{letterSpacing: '0.03em'}} x="140" y="48">
        Home
      </text>
<text fill="#fff" fontFamily="Poppins, Arial, sans-serif" fontSize="20" x="210" y="48">
        Features
      </text>
<text fill="#fff" fontFamily="Poppins, Arial, sans-serif" fontSize="20" x="320" y="48">
        Contact
      </text>
</g>
</g>

<g id="MainContent" inkscape:label="Main Content">
<rect fill="#fff" height="430" rx="24" width="700" x="50" y="120"></rect>

<text fill="#254081" fontFamily="Poppins, Arial, sans-serif" fontSize="32" font-weight="600" x="90" y="170">
      Welcome to the Prototype!
    </text>

<text fill="#333" fontFamily="Poppins, Arial, sans-serif" fontSize="18" font-weight="400" x="90" y="215">
      This SVG demonstrates layer structure, vector elements, text metadata, and an embedded image.
    </text>

<g id="PrimaryButton" inkscape:label="Button">
<rect fill="#254081" height="50" rx="12" width="180" x="90" y="260"></rect>
<text fill="#fff" fontFamily="Poppins, Arial, sans-serif" fontSize="22" font-weight="600" text-anchor="middle" x="180" y="293">
        Get Started
      </text>
</g>

<g id="IconStar" inkscape:label="Star Icon">
<polygon fill="#FFBE3B" points="370,290 380,310 403,313 386,328 392,350 370,338 348,350 354,328 337,313 360,310" stroke="#F7B100" strokeWidth="1"></polygon>
</g>

<g id="ImageSample" inkscape:label="Sample Image">
<image height="64" preserveaspectratio="xMidYMid" width="64" x="550" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABM0lEQVR4nO2VUQqDMBBFf8IeOCdUFqFQg/VWhCcQGlDFZcxyRU2KRw2SzgznmksNkO7Wy5QtsaLC+e25E/xDE5rFs5AEM+6IvBK8J2B8066vgQfLw6Lp0u74GQhiBNh7wIXKP514NNWkJfR3TIQxWIKIHnHFQ/gr3P/G9I1MBBL6ivAL80v0AZvKja3oFeKrbjX0KwOK4MqUOqrABRlxDGyd0Tu2TS4P4eQPtRAg6tSoBVvB5fb1CdqiWxCC62rL3mNd5MsAHzvQakwtc5ZDtWgBf3CZHPeZNBwLUW4nWEjicfFY5E5yHgxN7l3XUHuZgAAAABJRU5ErkJggg==" y="180"/>
<text fill="#888" fontFamily="Poppins, Arial, sans-serif" fontSize="14" x="550" y="260">
        (Embedded PNG)
      </text>
</g>
</g>
</svg>

    </>
  );
}
