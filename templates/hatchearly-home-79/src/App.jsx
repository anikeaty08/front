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


window.addEventListener('DOMContentLoaded',function(){function setSpineTab(tab){var liveTab=document.getElementById('spine-tab-live');var volTab=document.getElementById('spine-tab-volume');var livePanel=document.getElementById('spine-panel-live');var volPanel=document.getElementById('spine-panel-volume');if(!liveTab||!volTab||!livePanel||!volPanel)return;if(tab==='live'){liveTab.classList.add('spine-tab-active');liveTab.classList.remove('spine-tab-inactive');volTab.classList.add('spine-tab-inactive');volTab.classList.remove('spine-tab-active');livePanel.setAttribute('data-state','active');volPanel.setAttribute('data-state','inactive');}else{volTab.classList.add('spine-tab-active');volTab.classList.remove('spine-tab-inactive');liveTab.classList.add('spine-tab-inactive');liveTab.classList.remove('spine-tab-active');volPanel.setAttribute('data-state','active');livePanel.setAttribute('data-state','inactive');}}var liveTab=document.getElementById('spine-tab-live');var volTab=document.getElementById('spine-tab-volume');if(liveTab){liveTab.addEventListener('click',function(){setSpineTab('live');});}if(volTab){volTab.addEventListener('click',function(){setSpineTab('volume');});}});


      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons();
        }
 var yearEl = document.getElementById('year');
        if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
        }
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200/80 bg-[#faf7f3]/80 backdrop-blur-sm sticky top-0 z-30">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-md bg-slate-900 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-slate-50">H</span>
</div>
<span className="text-sm font-medium tracking-tight text-slate-900">
                Hatchearly
              </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#problem">Problem</a>
<a className="hover:text-slate-900 transition-colors" href="#guarantee">Infrastructure</a>
<a className="hover:text-slate-900 transition-colors" href="#guarantee-timeline">Timeline</a>
<a className="hover:text-slate-900 transition-colors" href="#integrations">Integrations</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Results</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-300 hover:shadow-sm transition">
                View case studies
              </button>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-50 hover:bg-slate-800 transition shadow-sm" href="#book-call">
<span className="">Book strategy call</span>
</a>
<button className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"></path>
</svg>
</button>
</div>
</div>
</div>
</header>


<footer className="border-t border-slate-200 bg-[#faf7f3]">
<div className="max-w-5xl-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-900 flex items-center justify-center">
              &lt; className="text-xs font-semibold tracking-tight text-slate-50"&gt;H
            </div>
<div className="text-[11px] text-slate-500">
<p className="font-medium text-slate-800">Hatchearly
              </p><p>Inbox-first outbound infrastructure.</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#book-call">Book a calla&gt;
            </a><a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
<span className="text-slate-400">© <span id="year">2025</span> Hatchearly. All rights reserved.</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
