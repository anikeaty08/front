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



    lucide.createIcons();

    // Intersection reveal
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='none';observer.unobserve(e.target)}}),{threshold:.35});
    document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));

    // Mobile menu
    const btn=document.getElementById('mobileToggle'),panel=document.getElementById('mobileMenu');
    btn?.addEventListener('click',()=>{const open=!panel.hasAttribute('hidden');btn.setAttribute('aria-expanded',!open);panel.toggleAttribute('hidden')});
  
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
      

<div className="fixed top-0 w-full h-screen -z-10">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/349c53fd-c486-4c6a-967c-26c51833e4a6/1.mp4"></video>
</div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-10" style={{backgroundSize: '64px 64px', backgroundImage: 'linear-gradient(to right, #0001 1px, transparent 1px), linear-gradient(to bottom,#0001 1px,transparent 1px)'}}></div>

<div className="relative lg:mx-0 w-full max-w-4xl bg-black/80 border-slate-800 border rounded-3xl mr-4 ml-4 shadow-md backdrop-blur-sm">

<nav className="flex items-center justify-between px-8 py-6">
<a className="flex items-center gap-2 text-lg text-slate-100 font-sans tracking-tight font-light" href="#" style={{}}>
        
        EngagePro
      </a>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li className=""><a className="flex items-center gap-1 text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Features</a></li>
<li className=""><a className="flex items-center gap-1 text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="flex items-center gap-1 text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Resources</a></li>
<li className=""><a className="flex items-center gap-1 text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Contact</a></li>
<li className=""><a className="inline-flex items-center gap-1 py-2 px-4 rounded-md bg-slate-100 text-black hover:bg-slate-200 transition font-sans tracking-tight font-light" href="#" style={{}}>Sign in</a></li>
</ul>

<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden p-2 rounded-md hover:bg-slate-800/60 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-slate-700 transition" id="mobileToggle">
<svg className="lucide lucide-menu w-6 h-6 text-gray-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>

<div className="absolute top-full inset-x-0 backdrop-blur-sm border-t shadow-md md:hidden bg-black/90 border-slate-800" hidden="" id="mobileMenu">
<ul className="flex flex-col py-4 px-6 text-sm font-medium space-y-4">
<li><a className="block text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Features</a></li>
<li><a className="block text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Pricing</a></li>
<li><a className="block text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Resources</a></li>
<li><a className="block text-slate-300 hover:text-slate-100 transition font-sans tracking-tight font-light" href="#" style={{}}>Contact</a></li>
<li><a className="inline-flex items-center gap-1 py-2 px-4 rounded-md bg-slate-100 text-black hover:bg-slate-200 w-max transition font-sans tracking-tight font-light" href="#" style={{}}>Sign in</a></li>
</ul>
</div>
</nav>
<div className="border-t border-slate-800/60"></div>

<header className="relative md:py-16 flex flex-col md:flex-row md:items-center gap-10 pt-14 pr-8 pb-14 pl-8">

<div className="flex-1">
<div className="w-full aspect-video rounded-xl border-2 border-dashed border-cyan-500/50 p-4 flex flex-col gap-3 bg-cyan-950/20">
<div className="h-4 w-1/3 rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="flex-1 grid grid-cols-2 gap-3">
<div className="rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="col-span-2 rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
</div>
</div>
</div>

<div className="flex-1 text-center md:text-left">
<h1 className="text-[34px] md:text-[40px] mb-4 leading-tight text-slate-100 font-manrope font-light tracking-tight" style={{}}>Smarter Outreach, Zero Guesswork</h1>
<p className="text-[17px] leading-7 max-w-md mx-auto md:mx-0 mb-10 text-slate-300 font-sans tracking-tight font-light" style={{}}>EngagePro AI orchestrates personalized, multi-channel touchpoints—email, voice, social, SMS—adapting on the fly to every lead’s behavior.</p>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
<button className="inline-flex items-center gap-2 text-sm py-3 px-6 rounded-md bg-cyan-400 text-black hover:bg-cyan-300 shadow-sm hover:shadow-md focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-cyan-500 transition font-sans tracking-tight font-light" style={{}}>
            
            Start Free Trial
          </button>
<button className="inline-flex items-center gap-2 border text-sm py-3 px-6 rounded-md border-cyan-400/70 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 bg-black shadow-sm hover:shadow-md transition font-sans tracking-tight font-light" style={{}}>
            
            Book a Demo
          </button>
</div>
</div>
</header>

<section className="relative bg-slate-900/80 border-slate-800/70 rounded-3xl border-t pt-14 pr-8 pb-14 pl-8">
<div className="grid md:grid-cols-3 gap-8 items-center">

<div className="md:col-span-2">
<div className="aspect-[3/2] rounded-xl border-2 border-dashed border-cyan-500/50 p-6 flex flex-col gap-4 bg-cyan-950/20">
<div className="h-4 w-1/4 rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="flex-1 grid grid-cols-3 gap-4">
<div className="rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="col-span-2 rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
<div className="rounded border border-dashed border-cyan-600/70 bg-cyan-900/20"></div>
</div>
</div>
</div>

<div className="md:pl-6">
<h3 className="text-[20px] mb-2 text-slate-100 font-sans tracking-tight font-light" style={{}}>Blueprint Your Sequences</h3>
<p className="text-sm leading-6 mb-6 text-slate-300 font-sans tracking-tight font-light" style={{}}>Map every step visually. Drag &amp; connect blocks, set goals, and let EngagePro AI handle the execution.</p>

<button className="group relative inline-flex items-center justify-center gap-2 text-sm font-light tracking-tight px-5 py-3 rounded-md border border-cyan-400/40 hover:border-cyan-300 bg-black/40 overflow-hidden transition">
<span className="absolute inset-0 group-hover:bg-cyan-400/10 transition"></span>
<span className="relative flex items-center gap-3 text-cyan-400 group-hover:text-cyan-300">
<span className="font-sans tracking-tight font-light" style={{}}>Explore builder</span>
</span>
<span className="absolute -right-14 translate-x-0 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-transform duration-300">
<svg className="lucide lucide-chevron-right w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
</span>
</button>
</div>
</div>
</section>
</div>




    </>
  );
}
