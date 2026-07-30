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
      
    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    window.addEventListener('load', () => {
      const logo  = document.getElementById('logoImage');
      const nav   = document.querySelector('.fade-nav');
      const rest  = document.querySelectorAll('.fade-after-logo');

      // 0–0.2 s : keep card blank
      setTimeout(() => logo.style.opacity = 1, 200);            // fade logo for 1.2 s (0.2→1.4 s)
      setTimeout(() => {
        nav.style.opacity = 1;                                  // fade all remaining elements together
        rest.forEach(el => el.style.opacity = 1);
      }, 1400);                                                 // 1.4→2.6 s
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
      

<div style={{width: `100%`, maxWidth: `48rem`, background: `linear-gradient(to bottom,#f7f1ee,#f7f7ee)`, borderRadius: `1rem`, boxShadow: `0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)`, display: `flex`, flexDirection: `column`, position: `relative`}}>

<div className="fade-after-logo" style={{position: `absolute`, top: `1rem`, right: `1.25rem`, textAlign: `right`, lineHeight: `1.25`, opacity: `0`, transition: `opacity 1.2s ease`}}>
<div style={{fontSize: `1rem`, fontWeight: `500`}}>ROSE CITY FILM TRUCKS LLC</div>
<div style={{fontSize: `0.875rem`, color: `#6b7280`}}>6500 NE Portland Hwy, Portland, OR 97218</div>
<div style={{fontSize: `0.875rem`, color: `#6b7280`}}>(323) 829-0080</div>
</div>

<main style={{flex: `1`, padding: `1.5rem`}}>

<div style={{display: `flex`, justifyContent: `center`, marginBottom: `1.5rem`}}>
<img alt="Rose City Film Trucks Logo" className="pt-14 pb-0" id="logoImage" src="https://rosecity.b-cdn.net/logo_wide_transparent00.png" style={{maxWidth: `100%`, height: `auto`, objectFit: `contain`, opacity: `0`, transition: `opacity 1.2s ease`}} />
</div>

<header className="fade-nav" style={{marginBottom: `2rem`, position: `relative`, opacity: `0`, transition: `opacity 1.2s ease`}}>
<nav style={{display: `flex`, justifyContent: `center`, gap: `2rem`, fontSize: `0.875rem`, padding: `0.5rem 0`, margin: `0 auto`, width: `fit-content`}}>
<a className="text-lg font-bold" href="#" style={{textDecoration: `none`, color: `inherit`}}>Fleet & Rates</a>
<a className="text-lg font-bold" href="#" style={{textDecoration: `none`, color: `inherit`}}>Policies</a>
<a className="text-lg font-bold" href="#" style={{textDecoration: `none`, color: `inherit`}}>About</a>
<a className="text-lg font-bold" href="#" style={{textDecoration: `none`, color: `inherit`}}>Contact</a>
</nav>

<button onMouseOut={(e) => { e.currentTarget.style.background='#111827' }} onMouseOver={(e) => { e.currentTarget.style.background='#1f2937' }} style={{position: `absolute`, right: `0px`, top: `50%`, transform: `translateY(-50%)`, fontSize: `0.875rem`, fontWeight: `500`, color: `#fff`, background: `#111827`, padding: `0.65rem 1.25rem`, border: `0`, borderRadius: `9999px`, cursor: `pointer`}}>
          Book NOW
        </button>
</header>

<section className="fade-after-logo" style={{display: `grid`, gap: `1.5rem`, gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`, maxWidth: `64rem`, margin: `0 auto`, opacity: `0`, transition: `opacity 1.2s ease`}}>

</section>
</main>

<div className="fade-after-logo" style={{height: `1px`, background: `rgba(0,0,0,0.08)`, opacity: `0`, transition: `opacity 1.2s ease`}}></div>

<footer className="fade-after-logo" style={{padding: `1.25rem`, textAlign: `center`, fontSize: `0.875rem`, color: `#6b7280`, opacity: `0`, transition: `opacity 1.2s ease`}}>© 2025 ROSE CITY FILM TRUCKS LLC. All rights reserved.</footer>
</div>


    </>
  );
}
