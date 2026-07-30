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



    // Set current time for status bar (optional, fallback to 9:41)
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    if (hh < 10) hh = '0'+hh;
    if (mm < 10) mm = '0'+mm;
    document.getElementById('statusTime').textContent = `${hh}:${mm}`;

    // Animated geometric hero
    const baseSize = 55; // vmin
    const length = 101;
    const half = Math.floor(length / 2);
    const gapDist = baseSize / length;
    const gapSize = baseSize / half;
    const time = 2.5;
    const delay = time / half;
    const ratioA = 0.5;
    const ratioB = 0.25;

    const ul = document.getElementById('orbit-list');
    function setLiStyles(li, index, sign = 1, step = 0) {
      const d = sign * (index * gapDist * 1.75);
      const size = baseSize - gapSize * (index - 1);
      li.style.setProperty('--delay', (delay * index) + 's');
      li.style.setProperty('--dist', d + 'vmin');
      li.style.width = size + 'vmin';
      li.style.height = size + 'vmin';
      li.style.setProperty('--after-size', (size * ratioA) + 'vmin');
      li.style.setProperty('--before-size', (size * ratioB) + 'vmin');
      li.style.zIndex = 10 + (sign * index);
      li.innerHTML = '';
      li.style.setProperty('--li-index', index);
    }
    for(let i=1; i<=half; ++i) {
      let li = document.createElement('li');
      setLiStyles(li, i, 1, 0);
      li.style.position = 'absolute';
      li.style.top = '50%';
      li.style.left = '50%';
      li.style.setProperty('--size', (baseSize - gapSize * (i - 1)) + 'vmin');
      li.style.setProperty('--after-size', ((baseSize - gapSize * (i - 1)) * ratioA) + 'vmin');
      li.style.setProperty('--before-size', ((baseSize - gapSize * (i - 1)) * ratioB) + 'vmin');
      ul.appendChild(li);
    }
    for(let i=1; i<=half; ++i) {
      let li = document.createElement('li');
      setLiStyles(li, i, -1, half);
      li.style.position = 'absolute';
      li.style.top = '50%';
      li.style.left = '50%';
      li.style.setProperty('--size', (baseSize - gapSize * (i - 1)) + 'vmin');
      li.style.setProperty('--after-size', ((baseSize - gapSize * (i - 1)) * ratioA) + 'vmin');
      li.style.setProperty('--before-size', ((baseSize - gapSize * (i - 1)) * ratioB) + 'vmin');
      ul.appendChild(li);
    }
  
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
      
<div className="iphone-mockup">
<div className="iphone-btn side"></div>
<div className="iphone-btn volup"></div>
<div className="iphone-btn voldown"></div>
<div className="iphone-mockup-inner">
<div className="iphone-screen">

<div className="status-bar">
<span className="status-bar-time" id="statusTime">9:41</span>
<div className="status-bar-icons">

<svg fill="none" height="13" viewBox="0 0 22 13" width="22" xmlns="http://www.w3.org/2000/svg">
<rect fill="#fff" fillOpacity="0.90" height="3.5" rx="1" width="3" x="0.5" y="9"></rect>
<rect fill="#fff" fillOpacity="0.90" height="6.5" rx="1" width="3" x="5.5" y="6"></rect>
<rect fill="#fff" fillOpacity="0.90" height="9.5" rx="1" width="3" x="10.5" y="3"></rect>
<rect fill="#fff" fillOpacity="0.90" height="12.5" rx="1" width="3" x="15.5" y="0"></rect>
</svg>

<svg fill="none" height="13" viewBox="0 0 19 13" width="19" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 11.5C10.0523 11.5 10.5 11.0523 10.5 10.5C10.5 9.94772 10.0523 9.5 9.5 9.5C8.94772 9.5 8.5 9.94772 8.5 10.5C8.5 11.0523 8.94772 11.5 9.5 11.5Z" fill="#fff" fillOpacity="0.93"></path>
<path d="M3.07031 7.5C5.38787 5.18342 9.61213 5.18342 11.9297 7.5" stroke="#fff" strokeLinecap="round" strokeOpacity="0.93" strokeWidth="1.2"></path>
<path d="M0.929688 5C4.82493 1.10476 13.1751 1.10476 17.0703 5" stroke="#fff" strokeLinecap="round" strokeOpacity="0.93" strokeWidth="1.2"></path>
</svg>

<svg fill="none" height="13" viewBox="0 0 25 13" width="25" xmlns="http://www.w3.org/2000/svg">
<rect fill="#fff" fillOpacity="0.9" height="9" rx="2" stroke="#fff" strokeWidth="1.2" width="19" x="1" y="2"></rect>
<rect fill="#fff" fillOpacity="0.9" height="3" rx="1" width="2.5" x="21" y="5"></rect>
<rect fill="#fff" fillOpacity="0.93" height="5" rx="1" width="15" x="3" y="4"></rect>
</svg>
</div>
</div>

<div className="hero-bg">
<section aria-hidden="true">
<ul id="orbit-list"></ul>
</section>
</div>

<main className="hero-content">
<h1 className="hero-headline">Inspire with Geometry</h1>
<p className="hero-subtext">
            Dynamic, animated geometric shapes<br />
            for stunning hero sections.<br />
            Elevate your design—make a bold first impression.
          </p>
<button className="hero-button">Get Started</button>
</main>

<div className="home-indicator-wrap">
<div className="home-indicator"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
