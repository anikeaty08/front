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
      
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
observer.unobserve(e.target);
}
});
}, {threshold:0.4});
document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));
const cards = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll',()=>{
const y=window.scrollY;
cards.forEach(c=>c.style.transform=`translateY(${Math.max(-15,-(y*0.03))}px)`);
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
      

<header className="h-16 flex items-center justify-between px-[6vw] max-w-[1100px] mx-auto" data-animate="" style={{boxShadow: '0 4px 40px rgba(0,0,0,0.02)'}}>
<span className="font-['Instrument_Serif'] font-bold text-[22px] tracking-[0.01em] text-[#353535]">
      Quillworks
    </span>
<a className="inline-flex items-center px-5 py-2 rounded-full border border-[#67705D] text-[#67705D] text-[14px] font-semibold hover:bg-[#F7F8F6] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#67705D]" href="#">
      Join waitlist
    </a>
</header>

<section className="relative overflow-hidden bg-white">
<div className="absolute inset-0 mix-blend-multiply pointer-events-none" style={{backgroundImage: 'url(\'https://grainy.s3.us-east-1.amazonaws.com/noise.png\')', opacity: '0.05'}}></div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center bottom, rgba(103,112,93,0.02) 0%, rgba(103,112,93,0) 70%)'}}></div>
<div className="relative max-w-[980px] mx-auto px-[6vw] pt-12" data-animate="">
<p className="uppercase text-[14px] font-semibold tracking-[1.1px] text-[#67705D]/70 mb-2">
        LET DIGITAL COME TO YOU
      </p>
<h1 className="font-['Instrument_Serif'] font-semibold tracking-tight text-[#353535] leading-[1.1] text-[clamp(48px,8vw,88px)] -tracking-[0.5px] mb-6">
        Technology should adapt to your rhythm — not the other way around.
      </h1>
<a className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg shadow-md transition-all duration-150 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#67705D] focus-visible:outline-offset-3 focus-visible:outline-white" href="#" style={{background: 'linear-gradient(#6F7563, #646B59)'}}>
        Join the waitlist
      </a>
</div>
</section>

<div style={{height: '120px'}}></div>

<hr className="opacity-0 border-t border-[#EDEEEB]/30" data-animate=""/>

<section className="bg-[#FAFAF7]">
<div className="max-w-[1200px] mx-auto px-[6vw] flex flex-wrap justify-center gap-8 pt-[96px] pb-24">

<div className="opacity-0 translate-y-8 blur-sm transition-all duration-700 bg-white rounded-[16px] shadow-[0_4px_16px_rgba(103,112,93,0.08)] border border-[#E4E5E2] w-[300px] pt-8 pb-8 px-6 flex flex-col gap-6" data-animate="" data-parallax="">
<div className="w-14 h-14 rounded-full bg-[#F0F1ED]/90 flex items-center justify-center">

<svg className="w-7 h-7 stroke-[1.5] stroke-[#67705D]/80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M3 12l3-3m3 3l3-3m3 3l3-3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="font-semibold text-[20px] tracking-tight text-[#353535]">The Problem</h3>
<p className="text-[16px] leading-[1.55] max-w-[220px]">
          Digital tools pull us away from natural rhythms —<br/>
          replacing flow with friction.
        </p>
</div>

<div className="opacity-0 translate-y-8 blur-sm transition-all duration-700 bg-white rounded-[16px] shadow-[0_4px_16px_rgba(103,112,93,0.08)] border border-[#E4E5E2] w-[300px] pt-8 pb-8 px-6 flex flex-col gap-6" data-animate="" data-parallax="" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-full bg-[#F0F1ED]/90 flex items-center justify-center">

<svg className="w-7 h-7 stroke-[1.5] stroke-[#67705D]/80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 15c3-3 6 3 10 0s7-3 10 0" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 3l-2 6 6-2-2 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="font-semibold text-[20px] tracking-tight text-[#353535]">Our Approach</h3>
<p className="text-[16px] leading-[1.55] max-w-[220px]">
          Let digital come to you —<br/>
          not as noise, but as a quiet layer that tracks, shares,<br/>
          and preserves what already moves you.
        </p>
</div>

<div className="opacity-0 translate-y-8 blur-sm transition-all duration-700 bg-white rounded-[16px] shadow-[0_4px_16px_rgba(103,112,93,0.08)] border border-[#E4E5E2] w-[300px] pt-8 pb-8 px-6 flex flex-col gap-6" data-animate="" data-parallax="" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-full bg-[#F0F1ED]/90 flex items-center justify-center">

<svg className="w-7 h-7 stroke-[1.5] stroke-[#67705D]/80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17h18" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5 12a7 7 0 0 1 14 0" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 3l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="font-semibold text-[20px] tracking-tight text-[#353535]">The Shift</h3>
<p className="text-[16px] leading-[1.55] max-w-[220px]">
          We’re entering a new era —<br/>
          where tools no longer demand attention,<br/>
          but quietly earn their place.<br/>
          A world where technology whispers,<br/>
          and analog ways lead the way.
        </p>
</div>
</div>
</section>

    </>
  );
}
