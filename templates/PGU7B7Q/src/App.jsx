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
      

<svg className="absolute left-0 top-0 z-0 opacity-30 w-full h-full pointer-events-none" height="100%" width="100%">
<defs>
<lineargradient id="polyGradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#30e2ff"></stop>
<stop offset="100%" stop-color="#ff6f1d"></stop>
</lineargradient>
</defs>
<polygon className="float" fill="url(#polyGradient)" points="100,100 300,80 400,300 200,350"></polygon>
<polygon className="float" fill="#30e2ff44" points="900,150 1200,100 1150,350 950,400" style={{animationDelay: '1.5s'}}></polygon>
<polygon className="float" fill="#ff6f1d33" points="600,600 800,650 750,850 570,900" style={{animationDelay: '3s'}}></polygon>
</svg>

<header className="relative z-10 px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center space-x-4">

<div className="bg-cyan-400 rounded-lg px-3 py-1 shadow-lg font-extrabold text-slate-900 text-lg tracking-widest">PXCB</div>
<span className="text-gray-400 text-sm pl-3 border-l border-gray-800">+1 (555) 123-4567</span>
</div>
<nav className="hidden md:flex items-center space-x-8 text-white font-medium text-base">
<a className="hover:text-cyan-400 transition" href="#">Reputation</a>
<a className="hover:text-cyan-400 transition" href="#">Promotion</a>
<a className="hover:text-cyan-400 transition" href="#">Cases</a>
<a className="hover:text-cyan-400 transition" href="#">Contacts</a>
<button aria-label="Search" className="ml-3 text-cyan-400 hover:text-white transition">
<svg fill="none" height="20" viewbox="0 0 20 20" width="20"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"></circle><path d="M15 15l3.5 3.5" stroke="currentColor" strokeWidth="2"></path></svg>
</button>
</nav>

<button className="md:hidden text-cyan-400 p-2 hover:bg-cyan-400/10 rounded transition">
<svg fill="none" height="26" viewbox="0 0 24 24" width="26"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2"></path></svg>
</button>
</header>

<section className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-12 px-6 py-12 lg:py-24 items-center">

<div className="lg:col-span-7 flex flex-col justify-center relative">
<span className="section-num absolute select-none pointer-events-none text-[7rem] sm:text-[9rem] font-extrabold leading-none text-white opacity-15 -top-8 -left-4 z-0">01.</span>
<h1 className="relative z-10 text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5 drop-shadow">
        Pixels, <span className="text-cyan-400">Code</span> &amp; <span className="text-orange-500">Brainpower</span> – Delivered
      </h1>
<p className="text-lg text-gray-200 opacity-90 mb-8 max-w-2xl font-medium">
        Expert consulting, custom development, and UX/UI that doesn't just look good — it performs.
      </p>
<a className="inline-flex items-center px-7 py-3 rounded-lg bg-cyan-400 text-slate-900 font-bold text-lg shadow-xl glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400" href="#services">
        Build with Us
        <svg className="ml-2 svg-gradient" fill="none" height="22" viewbox="0 0 24 24" width="22"><path d="M5 12h14M13 18l6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="lg:col-span-5 flex flex-col items-center justify-center relative">

<div className="w-[330px] h-[330px] rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-orange-500 opacity-70 blur-2xl absolute -top-12 left-8 svg-gradient"></div>
<svg className="relative z-10 w-72 h-72" fill="none" viewbox="0 0 320 320">
<circle cx="160" cy="160" fill="#121416" opacity="0.14" r="140" stroke="#30e2ff" strokeWidth="2"></circle>
<circle cx="160" cy="160" fill="url(#heroGrad)" r="120"></circle>
<defs>
<radialgradient cx="50%" cy="50%" id="heroGrad" r="80%">
<stop offset="0%" stop-color="#30e2ff"></stop>
<stop offset="90%" stop-color="#0f1216"></stop>
</radialgradient>
</defs>
<text fill="#fff" fontFamily="Inter, sans-serif" fontSize="32" font-weight="bold" opacity="0.9" text-anchor="middle" x="50%" y="54%">PXCB</text>
</svg>
<span className="absolute bottom-6 right-6 text-cyan-400 font-bold text-xl uppercase tracking-widest opacity-70 rotate-6">Digital Experts</span>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24" id="services">
<span className="section-num absolute select-none pointer-events-none text-[7.5rem] sm:text-[10rem] font-extrabold text-orange-500 opacity-10 left-0 -top-12 z-0">02.</span>
<h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white mb-3 relative z-10">
      What We Do Best
    </h2>
<p className="text-lg text-gray-300 max-w-xl mb-12 font-medium relative z-10">
      Three services. Infinite possibilities.
    </p>
<div className="grid md:grid-cols-3 gap-8 relative z-10">

<div className="bg-slate-900/80 rounded-xl shadow-lg p-8 border border-slate-800 relative group hover:scale-105 transition">
<svg className="absolute -top-8 left-6 w-14 h-14 opacity-60 svg-gradient" viewbox="0 0 56 56"><circle cx="28" cy="28" fill="none" r="26" stroke="#30e2ff" strokeWidth="4"></circle><path d="M16 28h24" stroke="#30e2ff" strokeLinecap="round" strokeWidth="3"></path></svg>
<h3 className="text-xl font-bold text-cyan-400 mb-3">IT Consulting</h3>
<p className="text-gray-300 opacity-90 mb-4 font-medium">Less jargon. More strategy.<br/>We help you choose the right tech, the right time, and the right way to scale.</p>
</div>

<div className="bg-gradient-to-tr from-cyan-400/80 to-orange-500/80 rounded-xl shadow-2xl p-8 border border-slate-800 relative group hover:scale-105 transition">
<svg className="absolute -top-8 left-6 w-14 h-14 opacity-60 svg-gradient" viewbox="0 0 56 56"><rect fill="none" height="28" rx="6" stroke="#fff" strokeWidth="4" width="40" x="8" y="14"></rect><rect fill="#fff" height="12" opacity="0.25" rx="3" width="24" x="16" y="22"></rect></svg>
<h3 className="text-xl font-bold text-white mb-3">Web &amp; Platform Development</h3>
<p className="text-slate-900/90 mb-4 font-medium">Clean code, mean speed.<br/>Whether it’s a B2B beast or a slick SaaS, we build platforms that move.</p>
</div>

<div className="bg-slate-900/80 rounded-xl shadow-lg p-8 border border-slate-800 relative group hover:scale-105 transition">
<svg className="absolute -top-8 left-6 w-14 h-14 opacity-60 svg-gradient" viewbox="0 0 56 56"><rect fill="none" height="28" rx="7" stroke="#ff6f1d" strokeWidth="4" width="28" x="14" y="14"></rect><circle cx="28" cy="28" fill="#ff6f1d" opacity="0.19" r="9"></circle></svg>
<h3 className="text-xl font-bold text-orange-500 mb-3">UX/UI Design</h3>
<p className="text-gray-300 opacity-90 mb-4 font-medium">Design that behaves as good as it looks.<br/>We make interfaces that feel like second nature — and look like first prize.</p>
</div>
</div>
<div className="flex justify-center mt-14">
<a className="inline-flex items-center px-8 py-3 rounded-lg bg-cyan-400 text-slate-900 font-bold text-lg shadow-xl glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400" href="#howwework">
        Build with Us
        <svg className="ml-2 svg-gradient" fill="none" height="22" viewbox="0 0 24 24" width="22"><path d="M5 12h14M13 18l6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24" id="howwework">
<span className="section-num absolute select-none pointer-events-none text-[7.5rem] sm:text-[10rem] font-extrabold text-white opacity-10 left-0 -top-12 z-0">03.</span>
<h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white mb-3 relative z-10">
      How We Work
    </h2>
<p className="text-lg text-gray-300 max-w-xl mb-12 font-medium relative z-10">
      We Keep It Simple. But Never Basic.
    </p>
<ol className="grid gap-8 md:grid-cols-4 relative z-10">
<li className="bg-slate-900/80 rounded-xl shadow-lg p-6 border border-slate-800 flex flex-col items-start group hover:scale-105 transition">
<span className="text-cyan-400 font-extrabold text-2xl mb-2">1</span>
<span className="font-bold text-white mb-1">Listen Hard</span>
<span className="text-gray-300 opacity-90 font-medium">We ask, poke, prod — and actually listen.</span>
</li>
<li className="bg-slate-900/80 rounded-xl shadow-lg p-6 border border-slate-800 flex flex-col items-start group hover:scale-105 transition">
<span className="text-cyan-400 font-extrabold text-2xl mb-2">2</span>
<span className="font-bold text-white mb-1">Sketch &amp; Stretch</span>
<span className="text-gray-300 opacity-90 font-medium">Wireframes, flowcharts, prototypes — we get creative with logic.</span>
</li>
<li className="bg-slate-900/80 rounded-xl shadow-lg p-6 border border-slate-800 flex flex-col items-start group hover:scale-105 transition">
<span className="text-cyan-400 font-extrabold text-2xl mb-2">3</span>
<span className="font-bold text-white mb-1">Build &amp; Break Stuff (Gently)</span>
<span className="text-gray-300 opacity-90 font-medium">We code, test, test again, then stress-test. You’ll thank us later.</span>
</li>
<li className="bg-slate-900/80 rounded-xl shadow-lg p-6 border border-slate-800 flex flex-col items-start group hover:scale-105 transition">
<span className="text-cyan-400 font-extrabold text-2xl mb-2">4</span>
<span className="font-bold text-white mb-1">Launch &amp; Glow</span>
<span className="text-gray-300 opacity-90 font-medium">We go live. You get all the glory.</span>
</li>
</ol>
</section>

<section className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
<span className="section-num absolute select-none pointer-events-none text-[7.5rem] sm:text-[10rem] font-extrabold text-cyan-400 opacity-10 left-0 -top-12 z-0">04.</span>
<h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white mb-3 relative z-10">
      Got a Vision? Let’s Bring It to Life
    </h2>
<p className="text-lg text-gray-300 max-w-2xl mb-8 font-medium relative z-10">
      Whether you need a full platform, a pixel-perfect UI, or just someone to tell you what the heck to build — we’ve got you.
    </p>
<a className="inline-flex items-center px-8 py-3 rounded-lg bg-orange-500 text-white font-bold text-lg shadow-xl glow hover:bg-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400" href="#">
      Let’s Co-Create
      <svg className="ml-2 svg-gradient" fill="none" height="22" viewbox="0 0 24 24" width="22"><path d="M5 12h14M13 18l6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</section>

<footer className="relative z-10 max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm border-t border-slate-800 pt-8">
<div className="flex items-center space-x-3 mb-4 md:mb-0">
<span className="font-bold text-cyan-400">PXCB</span>
<span className="text-gray-700">|</span>
<span>Pixels, Code &amp; Brainpower</span>
<span className="text-gray-700">|</span>
<a className="hover:text-cyan-400 transition" href="mailto:hello@pxcb.com">hello@pxcb.com</a>
</div>
<div className="flex space-x-4">
<a aria-label="Facebook" className="text-cyan-400 hover:text-white transition" href="#">
<svg fill="currentColor" height="22" viewbox="0 0 24 24" width="22"><path d="M17 2a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10zm0 2H7v16h10V4zm-3 2v2h2v2h-2v5h-2v-5h-2v-2h2V6h2z"></path></svg>
</a>
<a aria-label="Instagram" className="text-cyan-400 hover:text-white transition" href="#">
<svg fill="currentColor" height="22" viewbox="0 0 24 24" width="22"><rect height="18" rx="5" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17" cy="7" r="1.5"></circle></svg>
</a>
<a aria-label="Telegram" className="text-cyan-400 hover:text-white transition" href="#">
<svg fill="currentColor" height="22" viewbox="0 0 24 24" width="22"><path d="M9.04 17.73l-2.61.8c-.34.1-.7-.03-.89-.33-.2-.3-.13-.7.16-.92l12.53-9.36c.3-.22.71-.17.97.11.26.27.23.7-.06.94l-10.1 8.16 3.5 2.09z"></path></svg>
</a>
</div>
</footer>

    </>
  );
}
