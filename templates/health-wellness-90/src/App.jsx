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



    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      
<footer className="bg-[#3D4A3E] text-[#F5F5F5]">
<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24">

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

<div className="flex-1">
<div className="tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F5F5]">
              PHHW
            </span>
</div>
<p className="mt-4 text-base md:text-lg text-[#E4E4E4] max-w-md" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
            Premier Hormone Health &amp; Wellness. Evidence-based care for metabolic, hormonal, and long-term vitality.
          </p>
</div>

<div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<div className="space-y-1 text-right md:text-right">
<p className="text-sm md:text-base text-[#F5F5F5]/80 font-light">
              Contact us
            </p>
<div className="flex items-center md:justify-end gap-2 text-sm md:text-base text-[#F5F5F5]">
<svg className="h-4 w-4 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H4a1 1 0 0 1-1-1V7c0-.55.45-1 1-1z"></path>
<path d="M5 7l7 5 7-5"></path>
</svg>
<span>support@phhwclinic.com</span>
</div>
</div>
<button className="mt-2 inline-flex items-center justify-center px-6 py-2 border border-[#F5F5F5]/25 rounded-full text-sm md:text-base text-[#F5F5F5] bg-white/5 hover:bg-white/10 transition-opacity duration-150">
            Live Chat
          </button>
</div>
</div>

<div className="mt-16">
<nav className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm md:text-base" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<a className="font-medium tracking-[0.095rem] uppercase text-[#F5F5F5] hover:text-[#FFFFFFCC]" href="#">
            Blog
          </a>
<span className="text-[#F5F5F5]/40">•</span>
<a className="font-medium tracking-[0.095rem] uppercase text-[#F5F5F5] hover:text-[#FFFFFFCC]" href="#">
            GLP-1 Weight Loss
          </a>
<span className="text-[#F5F5F5]/40">•</span>
<a className="font-medium tracking-[0.095rem] uppercase text-[#F5F5F5] hover:text-[#FFFFFFCC]" href="#">
            Longevity
          </a>
<span className="text-[#F5F5F5]/40">•</span>
<a className="font-medium tracking-[0.095rem] uppercase text-[#F5F5F5] hover:text-[#FFFFFFCC]" href="#">
            Hormone Therapy
          </a>
<span className="text-[#F5F5F5]/40">•</span>
<a className="font-medium tracking-[0.095rem] uppercase text-[#F5F5F5] hover:text-[#FFFFFFCC]" href="#">
            Merch
          </a>
<span className="text-[#F5F5F5]/40">•</span>
<a className="font-medium tracking-[0.095rem] uppercase text-[#F5F5F5] hover:text-[#FFFFFFCC]" href="#">
            Contact Us
          </a>
</nav>
</div>

<div className="mt-10 border-t border-[#F5F5F5]/15"></div>

<div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

<div className="flex flex-col sm:flex-row sm:items-center gap-4" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<p className="text-sm md:text-base text-[#F5F5F5]/90">
            Download our app
          </p>
<div className="flex items-center gap-3">

<a className="inline-flex overflow-hidden rounded-md bg-black/90 border border-white/10" href="#">
<img alt="Download on the App Store" className="h-9 sm:h-10 w-auto" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"/>
</a>

<a className="inline-flex overflow-hidden rounded-md bg-black/90 border border-white/10" href="#">
<img alt="Get it on Google Play" className="h-9 sm:h-10 w-auto object-contain" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/>
</a>
</div>
</div>

<div className="flex flex-col items-start lg:items-end gap-6">

<div className="flex items-center gap-4">

<a className="h-9 w-9 rounded-full border border-[#F5F5F5]/40 flex items-center justify-center hover:bg-[#F5F5F5]/10 transition-colors" href="#">
<svg className="h-4 w-4 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="4" width="16" x="4" y="4"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<circle cx="17" cy="7" fill="currentColor" r="0.9"></circle>
</svg>
</a>

<a className="h-9 w-9 rounded-full border border-[#F5F5F5]/40 flex items-center justify-center hover:bg-[#F5F5F5]/10 transition-colors" href="#">
<svg className="h-4 w-4 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5c.3 1.4 1.3 2.4 2.7 2.7L19 8v3.2a5.5 5.5 0 0 1-3.5-1.2v4.1A4.9 4.9 0 1 1 10 9.4v2.2a2.4 2.4 0 1 0 1.7 2.3V5h3.3z"></path>
</svg>
</a>

<a className="h-9 w-9 rounded-full border border-[#F5F5F5]/40 flex items-center justify-center hover:bg-[#F5F5F5]/10 transition-colors" href="#">
<svg className="h-4 w-4 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8h2V4.8A22 22 0 0 0 13.6 4C10.9 4 9 5.7 9 8.8V11H6v4h3v5h4v-5h3l.7-4H13v-2.1C13 8.4 13.3 8 14 8z"></path>
</svg>
</a>

<a className="h-9 w-9 rounded-full border border-[#F5F5F5]/40 flex items-center justify-center hover:bg-[#F5F5F5]/10 transition-colors" href="#">
<svg className="h-4 w-4 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" width="4" x="4" y="4"></rect>
<circle cx="6" cy="7" fill="currentColor" r="1.2"></circle>
<path d="M11 10h3v1.4A3 3 0 0 1 17 10c2 0 3 1.4 3 3.6V20h-4v-5.6c0-.9-.4-1.4-1.1-1.4-.8 0-1.4.5-1.4 1.4V20h-4v-10z"></path>
</svg>
</a>
</div>

<div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#F5F5F5]/80" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<div className="h-7 w-7 rounded-full border border-[#F5F5F5]/40 flex items-center justify-center">
<svg className="h-3.5 w-3.5 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l7 4v7c0 3.3-2.2 6.4-7 7-4.8-.6-7-3.7-7-7V7l7-4z"></path>
<path d="M9 12l2 2 4-4"></path>
</svg>
</div>
<span className="uppercase tracking-[0.11rem]">LegitScript Certified</span>
</div>
<span className="text-[#F5F5F5]/40">•</span>
<div className="flex items-center gap-1.5">
<div className="h-7 w-7 rounded-full border border-[#F5F5F5]/40 flex items-center justify-center">
<svg className="h-3.5 w-3.5 stroke-current text-[#F5F5F5]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="13" rx="2" width="18" x="3" y="7"></rect>
<path d="M7 7V5a5 5 0 0 1 10 0v2"></path>
<path d="M9 13h6"></path>
</svg>
</div>
<span className="uppercase tracking-[0.11rem]">HIPAA Compliant</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-xs md:text-sm text-[#F5F5F5]/60" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<p>© <span id="year"></span> Premier Hormone Health &amp; Wellness. All rights reserved.</p>
<div className="flex flex-wrap gap-4">
<a className="hover:text-[#F5F5F5]/85" href="#">Privacy Policy</a>
<a className="hover:text-[#F5F5F5]/85" href="#">Terms of Service</a>
<a className="hover:text-[#F5F5F5]/85" href="#">Medical Disclaimer</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
