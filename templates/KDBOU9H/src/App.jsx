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



    // Animate cards on scroll
    function showProjectsOnScroll() {
      const projects = document.querySelectorAll('.fade-in-up');
      const trigger = window.innerHeight * 0.92;
      projects.forEach(project => {
        const box = project.getBoundingClientRect();
        if (box.top < trigger) {
          project.classList.add('show');
        }
      });
    }
    window.addEventListener('scroll', showProjectsOnScroll);
    window.addEventListener('DOMContentLoaded', showProjectsOnScroll);
  
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
      
<main className="flex flex-col md:flex-row max-w-6xl mx-auto py-20 px-4 gap-12">

<section className="md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
<span className="uppercase tracking-widest font-semibold text-[#ff8b33] text-sm md:text-base mb-3 block">Portfolio</span>
<h2 className="text-4xl md:text-5xl font-gt-walsheim font-bold text-slate-950 mb-5">Selected Work</h2>
<p className="text-gray-600 text-lg md:text-xl max-w-xl mb-8">
        A curated collection of digital products, apps, and websites I've designed for startups, agencies, and global brands.
      </p>

<button className="button mb-3">
<span className="text_button">Download Resume</span>
<svg className="chevron" fill="none" stroke="currentColor" strokeWidth="2.4" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>

<p className="text-xs text-gray-600">Want to work together? <a className="text-[#ff8b33] underline hover:text-[#a259ff]" href="mailto:hello@uxfreelancer.com">Let's connect!</a></p>
</section>

<section className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

<div className="bg-white rounded-2xl shadow-lg flex flex-col fade-in-up">
<div className="h-40 w-full rounded-t-2xl flex items-center justify-center bg-gray-50 overflow-hidden">
<svg className="w-full h-full p-4" fill="none" viewbox="0 0 260 120">
<rect height="100" rx="16" stroke="#d1d5db" strokeWidth="3" width="240" x="10" y="10"></rect>
<rect height="14" rx="6" stroke="#d1d5db" strokeWidth="2" width="120" x="30" y="30"></rect>
<rect height="32" rx="8" stroke="#d1d5db" stroke-dasharray="4 4" strokeWidth="2" width="200" x="30" y="52"></rect>
</svg>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold mb-1 text-slate-900">Fintech Dashboard</h3>
<p className="text-gray-600 mb-3 flex-1 text-sm">UI/UX for a modern banking platform: analytics, transfers, &amp; budgeting in a seamless web app.</p>
<a className="text-[#ff8b33] font-bold hover:underline mt-auto text-sm" href="#">View Case Study →</a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg flex flex-col fade-in-up">
<div className="h-40 w-full rounded-t-2xl flex items-center justify-center bg-gray-50 overflow-hidden">
<svg className="w-full h-full p-4" fill="none" viewbox="0 0 260 120">
<rect height="100" rx="16" stroke="#d1d5db" strokeWidth="3" width="240" x="10" y="10"></rect>
<rect height="14" rx="6" stroke="#d1d5db" strokeWidth="2" width="100" x="30" y="30"></rect>
<rect height="32" rx="8" stroke="#d1d5db" stroke-dasharray="4 4" strokeWidth="2" width="200" x="30" y="52"></rect>
</svg>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold mb-1 text-slate-900">Mobile Health Tracker</h3>
<p className="text-gray-600 mb-3 flex-1 text-sm">iOS &amp; Android app for personal wellness, featuring habit tracking and progress visualization.</p>
<a className="text-[#ff8b33] font-bold hover:underline mt-auto text-sm" href="#">View Case Study →</a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg flex flex-col fade-in-up">
<div className="h-40 w-full rounded-t-2xl flex items-center justify-center bg-gray-50 overflow-hidden">
<svg className="w-full h-full p-4" fill="none" viewbox="0 0 260 120">
<rect height="100" rx="16" stroke="#d1d5db" strokeWidth="3" width="240" x="10" y="10"></rect>
<rect height="14" rx="6" stroke="#d1d5db" strokeWidth="2" width="150" x="30" y="30"></rect>
<rect height="32" rx="8" stroke="#d1d5db" stroke-dasharray="4 4" strokeWidth="2" width="200" x="30" y="52"></rect>
</svg>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold mb-1 text-slate-900">E-commerce Redesign</h3>
<p className="text-gray-600 mb-3 flex-1 text-sm">Boosted conversion for a lifestyle brand with bold visuals and frictionless checkout flows.</p>
<a className="text-[#ff8b33] font-bold hover:underline mt-auto text-sm" href="#">View Case Study →</a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg flex flex-col fade-in-up">
<div className="h-40 w-full rounded-t-2xl flex items-center justify-center bg-gray-50 overflow-hidden">
<svg className="w-full h-full p-4" fill="none" viewbox="0 0 260 120">
<rect height="100" rx="16" stroke="#d1d5db" strokeWidth="3" width="240" x="10" y="10"></rect>
<rect height="14" rx="6" stroke="#d1d5db" strokeWidth="2" width="80" x="30" y="30"></rect>
<rect height="32" rx="8" stroke="#d1d5db" stroke-dasharray="4 4" strokeWidth="2" width="200" x="30" y="52"></rect>
</svg>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold mb-1 text-slate-900">SaaS Marketing Site</h3>
<p className="text-gray-600 mb-3 flex-1 text-sm">Landing and pricing pages for a B2B SaaS app. Conversion-focused design, lightning-fast.</p>
<a className="text-[#ff8b33] font-bold hover:underline mt-auto text-sm" href="#">View Case Study →</a>
</div>
</div>
</section>
</main>


    </>
  );
}
