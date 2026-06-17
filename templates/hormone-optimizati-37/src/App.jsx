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



import "https://cdn.jsdelivr.net/npm/lucide@0.472.0/dist/esm/lucide.js";



        import { createIcons } from "https://cdn.jsdelivr.net/npm/lucide@0.472.0/dist/esm/lucide.js";
        createIcons();

        const carousel = document.getElementById('product-carousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (carousel && prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: 340, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -340, behavior: 'smooth' });
            });
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
      

<section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-10">
<div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
<div className="flex-1">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    A hormone optimization journey that feels like PHHW
                </p>
<h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
                    A comprehensive path to feeling like yourself again.
                </h1>
<p className="mt-4 text-sm md:text-base text-zinc-600 max-w-xl">
                    From GLP‑1 weight management to Testosterone &amp; HRT, PHHW offers personalized, medically‑supervised programs built around your goals, lifestyle, and long‑term health.
                </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white text-sm font-medium py-2.5 px-5 hover:bg-black transition-colors">
                        Start your evaluation
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-900 py-2.5 px-5 hover:bg-zinc-50 transition-colors">
                        Explore all programs
                    </button>
</div>
<div className="mt-6 flex flex-wrap gap-4 text-[0.7rem] text-zinc-500">
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Board‑certified clinicians
                    </div>
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                        At‑home labs &amp; diagnostics
                    </div>
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                        Medically‑supervised medications
                    </div>
</div>
</div>
<div className="flex-1 w-full">
<div className="grid grid-cols-2 gap-4 sm:gap-5">
<div className="rounded-2xl bg-white shadow-sm border border-zinc-100 p-4 flex flex-col justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">GLP‑1 Program</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">Body composition</p>
<p className="mt-1 text-xs text-zinc-500">Average member sees 7% optimization in month one.</p>
</div>
<div className="mt-4 flex items-center justify-between text-[0.7rem] text-zinc-600">
<span>GLP‑1, coaching, nutrition</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                Active
                            </span>
</div>
</div>
<div className="rounded-2xl bg-zinc-900 text-white p-4 flex flex-col justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">Testosterone &amp; HRT</p>
<p className="mt-2 text-lg font-semibold tracking-tight">Energy &amp; drive</p>
<p className="mt-1 text-xs text-white/70">Support for low T, mood, strength &amp; libido.</p>
</div>
<div className="mt-4 flex items-center justify-between text-[0.7rem] text-white/70">
<span>Injectables, labs, follow‑ups</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                                Personalized
                            </span>
</div>
</div>
<div className="col-span-2 rounded-2xl bg-gradient-to-r from-emerald-50 via-sky-50 to-rose-50 border border-zinc-100 p-4 flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Your PHHW journey</p>
<p className="mt-1 text-sm text-zinc-700">One integrated care team across weight, hormones, and long‑term health.</p>
</div>
<div className="flex items-center gap-4 text-[0.7rem] text-zinc-600">
<div className="flex flex-col items-center">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mb-1"></span>
<span>GLP‑1</span>
</div>
<div className="flex flex-col items-center">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500 mb-1"></span>
<span>HRT</span>
</div>
<div className="flex flex-col items-center">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500 mb-1"></span>
<span>Labs</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[1400px] mx-auto bg-[#688365] text-white px-6 py-16 lg:py-20 lg:px-12 rounded-[2.5rem] my-8 relative overflow-hidden">
<div className="flex flex-col items-center text-center mb-12">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">Optimize your body composition.</h2>
<a className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-white/90 hover:text-white transition-colors group" href="#">
                Learn more about PHHW GLP-1 treatments
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
<div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-1">
<ul className="space-y-6">
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-xl">Dietitians</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5" data-lucide="video" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-xl">Live virtual coaching</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-xl">Mental health support</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-xl">Personalized meal plans</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
<i className="w-5 h-5" data-lucide="messages-square" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-xl">Community groups</span>
</li>
</ul>
</div>
<div className="lg:col-span-6 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-white/5 rounded-full blur-3xl -z-10"></div>
<div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
<img alt="Healthy individual looking confident" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#688365]/30 to-transparent"></div>
</div>
</div>
<div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end order-3">
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 max-w-xs border border-white/10 shadow-lg">
<p className="text-white/80 text-base font-medium mb-4 leading-relaxed">
                        The average PHHW member optimizes their body composition by:
                    </p>
<div className="flex items-baseline gap-1">
<span className="text-6xl font-semibold tracking-tighter">7%</span>
</div>
<p className="text-white/60 text-xs mt-2 font-medium uppercase tracking-wide">In the first month</p>
</div>
</div>
</div>
<div className="relative">
<div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4" id="product-carousel">
<div className="glass-card min-w-[300px] md:min-w-[340px] flex-1 rounded-[2rem] p-6 lg:p-8 relative group flex flex-col snap-center">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Compounded Tirzepatide</h3>
<p className="text-sm text-white/70 mt-1">Contains Tirzepatide</p>
</div>
</div>
<div className="h-48 w-full flex items-center justify-center my-2 vial-float">
<svg className="drop-shadow-2xl" fill="none" height="180" viewbox="0 0 100 200" width="100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="glassGradient" x1="0" x2="100" y1="0" y2="0">
<stop offset="0" stop-color="rgba(255,255,255,0.4)"></stop>
<stop offset="0.2" stop-color="rgba(255,255,255,0.1)"></stop>
<stop offset="0.8" stop-color="rgba(255,255,255,0.1)"></stop>
<stop offset="1" stop-color="rgba(255,255,255,0.4)"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="liquidGreen" x1="0" x2="100" y1="0" y2="0">
<stop offset="0" stop-color="#4d664a"></stop>
<stop offset="0.5" stop-color="#688365"></stop>
<stop offset="1" stop-color="#4d664a"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="capSilver" x1="0" x2="100" y1="0" y2="0">
<stop offset="0" stop-color="#9ca3af"></stop>
<stop offset="0.5" stop-color="#f3f4f6"></stop>
<stop offset="1" stop-color="#9ca3af"></stop>
</lineargradient>
</defs>
<path d="M30 10H70V30H30V10Z" fill="url(#capSilver)"></path>
<rect fill="#cbd5e1" height="10" width="20" x="40" y="30"></rect>
<path d="M25 40H75V150C75 155 71 159 66 159H34C29 159 25 155 25 150V40Z" fill="url(#glassGradient)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></path>
<path d="M27 80H73V148C73 152 70 155 66 155H34C30 155 27 152 27 148V80Z" fill="url(#liquidGreen)"></path>
<rect fill="white" height="30" rx="1" width="46" x="27" y="55"></rect>
<rect fill="#688365" height="4" width="30" x="32" y="62"></rect>
<rect fill="#d4d4d8" height="2" width="20" x="32" y="70"></rect>
</svg>
</div>
<button className="mt-auto w-full bg-[#18181b] hover:bg-black text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                        Get started
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="glass-card min-w-[300px] md:min-w-[340px] flex-1 rounded-[2rem] p-6 lg:p-8 relative group flex flex-col snap-center">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Compounded Semaglutide</h3>
<p className="text-sm text-white/70 mt-1">Contains Semaglutide</p>
</div>
</div>
<div className="h-48 w-full flex items-center justify-center my-2 vial-float" style={{animationDelay: '1s'}}>
<svg className="drop-shadow-2xl" fill="none" height="180" viewbox="0 0 100 200" width="100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="liquidTeal" x1="0" x2="100" y1="0" y2="0">
<stop offset="0" stop-color="#3d5a55"></stop>
<stop offset="0.5" stop-color="#557c74"></stop>
<stop offset="1" stop-color="#3d5a55"></stop>
</lineargradient>
</defs>
<path d="M30 10H70V30H30V10Z" fill="url(#capSilver)"></path>
<rect fill="#cbd5e1" height="10" width="20" x="40" y="30"></rect>
<path d="M25 40H75V150C75 155 71 159 66 159H34C29 159 25 155 25 150V40Z" fill="url(#glassGradient)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></path>
<path d="M27 60H73V148C73 152 70 155 66 155H34C30 155 27 152 27 148V60Z" fill="url(#liquidTeal)"></path>
<rect fill="white" height="30" rx="1" width="46" x="27" y="100"></rect>
<rect fill="#557c74" height="4" width="30" x="32" y="107"></rect>
<rect fill="#d4d4d8" height="2" width="20" x="32" y="115"></rect>
</svg>
</div>
<button className="mt-auto w-full bg-[#18181b] hover:bg-black text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                        Get started
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="glass-card min-w-[300px] md:min-w-[340px] flex-1 rounded-[2rem] p-6 lg:p-8 relative group flex flex-col snap-center">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Advanced Therapy Option</h3>
<p className="text-sm text-white/70 mt-1">Customized Liposomal Liquid</p>
</div>
</div>
<div className="h-48 w-full flex items-center justify-center my-2 vial-float" style={{animationDelay: '2s'}}>
<svg className="drop-shadow-2xl" fill="none" height="180" viewbox="0 0 100 200" width="100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="bottleDark" x1="0" x2="100" y1="0" y2="0">
<stop offset="0" stop-color="#4b5563"></stop>
<stop offset="0.5" stop-color="#6b7280"></stop>
<stop offset="1" stop-color="#374151"></stop>
</lineargradient>
</defs>
<path d="M40 5H60V25H40V5Z" fill="#1f2937"></path>
<path d="M35 25H65V35H35V25Z" fill="url(#capSilver)"></path>
<path d="M35 35L25 50H75L65 35H35Z" fill="url(#bottleDark)"></path>
<path d="M25 50H75V145C75 150 71 155 66 155H34C29 155 25 150 25 145V50Z" fill="url(#bottleDark)"></path>
<rect fill="#f3f4f6" height="50" opacity="0.9" rx="1" width="50" x="25" y="70"></rect>
<rect fill="#688365" height="4" width="36" x="32" y="85"></rect>
<rect fill="#9ca3af" height="2" width="20" x="32" y="95"></rect>
</svg>
</div>
<button className="mt-auto w-full bg-[#18181b] hover:bg-black text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                        Get started
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="mt-6 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
<p className="text-[0.625rem] md:text-xs text-white/60 max-w-lg leading-relaxed">
                    *Medications only issued when clinically appropriate after provider evaluation. Results may vary. Prescriptions are compounded by licensed pharmacies.
                </p>
<div className="flex gap-2 shrink-0">
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white disabled:opacity-30 disabled:cursor-not-allowed" id="prevBtn">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white" id="nextBtn">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[1400px] mx-auto my-8 rounded-[2.5rem] overflow-hidden">
<div className="relative bg-gradient-to-b from-[#f2c1c3] via-[#d6646d] to-[#9d2834] px-6 py-12 lg:py-16 lg:px-12">
<div className="absolute inset-x-0 bottom-0 pointer-events-none">
<div className="h-40 md:h-56 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-40"></div>
</div>

<div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-end gap-10">
<div className="flex-1">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-800/80 text-center lg:text-left">Testosterone &amp; HRT Current Therapy</p>
<h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 text-center lg:text-left">
                        Optimize your Testosterone.
                    </h2>

<div className="mt-8 flex flex-col gap-2 max-w-xs mx-auto lg:mx-0">
<button className="inline-flex items-center justify-between rounded-full border border-white/50 bg-white/60 backdrop-blur px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white">
<span className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                Low daily energy
                            </span>
<span className="text-[0.625rem] uppercase tracking-[0.14em] text-zinc-600">Common</span>
</button>
<button className="inline-flex items-center justify-between rounded-full border border-white/40 bg-white/40 backdrop-blur px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white">
<span className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-orange-400"></span>
                                Reduced strength
                            </span>
<span className="text-[0.625rem] uppercase tracking-[0.14em] text-zinc-600">Fitness</span>
</button>
<button className="inline-flex items-center justify-between rounded-full border border-white/40 bg-white/40 backdrop-blur px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white">
<span className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-rose-400"></span>
                                Mood &amp; focus changes
                            </span>
<span className="text-[0.625rem] uppercase tracking-[0.14em] text-zinc-600">Cognitive</span>
</button>
<button className="inline-flex items-center justify-between rounded-full border border-white/40 bg-white/40 backdrop-blur px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white">
<span className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-amber-300"></span>
                                Decreased libido
                            </span>
<span className="text-[0.625rem] uppercase tracking-[0.14em] text-zinc-600">Wellbeing</span>
</button>
</div>
</div>

<div className="flex-1 flex justify-center lg:justify-end">
<div className="relative w-full max-w-sm">
<div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent)] opacity-60"></div>
<img alt="Male torso fitness representing testosterone optimization" className="relative z-10 w-full rounded-[2rem] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.35)]" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="relative max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="rounded-[1.75rem] bg-gradient-to-br from-[#f7c7c8] via-[#de747d] to-[#b73340] shadow-[0_18px_50px_rgba(0,0,0,0.25)] p-6 md:p-8 flex flex-col">
<header className="flex items-baseline justify-between gap-2">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Testosterone Cypionate</h3>
<p className="mt-1 text-base text-zinc-900/70">Injectable TRT</p>
</div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-900/60 bg-white/40 rounded-full px-3 py-1">
                            Weekly
                        </span>
</header>
<div className="mt-6 flex-1 flex items-center justify-center">
<img alt="Vial representing Testosterone Cypionate" className="max-h-40 object-contain vial-float drop-shadow-[0_16px_40px_rgba(0,0,0,0.45)] rounded-xl" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<div className="h-2 w-full rounded-full bg-zinc-900/20 overflow-hidden">
<div className="h-full w-3/4 bg-zinc-900/70 rounded-full"></div>
</div>
<button className="mt-4 w-full rounded-full border border-zinc-900/20 bg-zinc-900/80 text-sm font-medium text-white py-3 hover:bg-zinc-900">
                            Get started
                        </button>
</div>
</article>

<article className="rounded-[1.75rem] bg-gradient-to-br from-[#f7c7c8] via-[#e0777f] to-[#b42f3d] shadow-[0_18px_50px_rgba(0,0,0,0.25)] p-6 md:p-8 flex flex-col">
<header className="flex items-baseline justify-between gap-2">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Testosterone Enanthate</h3>
<p className="mt-1 text-base text-zinc-900/70">Injectable TRT</p>
</div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-900/60 bg-white/40 rounded-full px-3 py-1">
                            Bi-weekly
                        </span>
</header>
<div className="mt-6 flex-1 flex items-center justify-center">
<img alt="Vial representing Testosterone Enanthate" className="max-h-40 object-contain vial-float drop-shadow-[0_16px_40px_rgba(0,0,0,0.45)] rounded-xl" src="https://images.unsplash.com/photo-1582719478250-cc9a1a7a09b3?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<div className="h-2 w-full rounded-full bg-zinc-900/20 overflow-hidden">
<div className="h-full w-2/3 bg-zinc-900/70 rounded-full"></div>
</div>
<button className="mt-4 w-full rounded-full border border-zinc-900/20 bg-zinc-900/80 text-sm font-medium text-white py-3 hover:bg-zinc-900">
                            Get started
                        </button>
</div>
</article>
</div>
<p className="relative max-w-5xl mx-auto mt-4 text-[0.625rem] text-center text-zinc-900/70">
                *Medications are only issued when clinically appropriate after provider evaluation. Individual results and protocols may vary.
            </p>

<div className="relative max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="rounded-[1.75rem] bg-gradient-to-br from-[#f5cbce] via-[#e47e86] to-[#b63440] shadow-[0_18px_50px_rgba(0,0,0,0.25)] p-6 md:p-8 flex flex-col">
<header>
<p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-900/75">Biomarker test</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">Check your testosterone levels</h3>
</header>
<div className="mt-6 flex flex-col sm:flex-row gap-6 items-center">
<div className="flex-1">
<div className="rounded-2xl bg-gradient-to-br from-[#c8343f] to-[#7f141e] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">At‑home test kit</p>
<p className="mt-3 text-lg font-semibold tracking-tight">Male Hormone Assessment</p>
<div className="mt-4 flex items-end justify-between gap-3">
<div className="space-y-1">
<p className="text-xs text-white/80">Total &amp; Free Testosterone</p>
<p className="text-xs text-white/80">SHBG, LH/FSH, Estradiol</p>
</div>
<img alt="Hormone assessment vial" className="h-20 object-contain rounded-lg" src="https://images.unsplash.com/photo-1612277795421-9bc0d577ce12?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="w-full sm:w-40 flex flex-col items-center justify-center">
<div className="h-14 w-14 rounded-full border-2 border-white/70 flex items-center justify-center bg-white/30">
<i className="w-6 h-6 text-zinc-900" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<p className="mt-3 text-xs text-zinc-900/80 text-center">Simple finger‑stick kit with physician‑reviewed results.</p>
</div>
</div>
<div className="mt-6">
<div className="flex items-center justify-between text-xs text-zinc-900/80 mb-2">
<span>Turnaround time</span>
<span className="font-medium">3–5 business days</span>
</div>
<div className="h-2 w-full rounded-full bg-zinc-900/20 overflow-hidden">
<div className="h-full w-4/5 bg-zinc-900/80 rounded-full"></div>
</div>
<button className="mt-4 w-full rounded-full border border-zinc-900/15 bg-white/80 text-sm font-medium text-zinc-900 py-3 hover:bg-white">
                            Get started
                        </button>
</div>
</article>

<article className="rounded-[1.75rem] bg-gradient-to-br from-[#f6c7c8] via-[#e0777f] to-[#b42f3d] shadow-[0_18px_50px_rgba(0,0,0,0.25)] p-6 md:p-8 flex flex-col">
<header>
<p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-900/75">The TRT progress</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">How levels improve over time</h3>
<p className="mt-2 text-sm text-zinc-900/80 max-w-md">
                            From baseline through month 6, optimized protocols can raise total testosterone into a healthy range.
                        </p>
</header>
<div className="mt-6 flex-1 rounded-2xl bg-white/70 p-4 md:p-5">

<div className="relative h-56">
<div className="absolute inset-6 border border-zinc-300 rounded-lg"></div>

<div className="absolute left-0 top-6 bottom-6 flex flex-col justify-between text-[0.65rem] text-zinc-500">
<span>1000</span>
<span>800</span>
<span>600</span>
<span>400</span>
<span>200</span>
</div>

<div className="absolute left-10 right-6 bottom-3 flex justify-between text-[0.65rem] text-zinc-500">
<span>Baseline</span>
<span>Month 1</span>
<span>Month 3</span>
<span>Month 6</span>
</div>

<svg className="absolute inset-6" preserveaspectratio="none" viewbox="0 0 100 60">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="trtLine" x1="0" x2="100" y1="0" y2="0">
<stop offset="0" stop-color="#b72837"></stop>
<stop offset="1" stop-color="#ef7f86"></stop>
</lineargradient>
</defs>
<polyline fill="none" points="5,50 30,35 60,25 95,15" stroke="url(#trtLine)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></polyline>
<g fill="#b72837">
<circle cx="5" cy="50" r="2.4"></circle>
<circle cx="30" cy="35" r="2.4"></circle>
<circle cx="60" cy="25" r="2.4"></circle>
<circle cx="95" cy="15" r="2.4"></circle>
</g>
</svg>
</div>
<div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-700">
<div className="inline-flex items-center gap-2">
<span className="h-1.5 w-6 rounded-full bg-[#b72837]"></span>
<span>Optimized protocol</span>
</div>
<div className="inline-flex items-center gap-2">
<span className="h-1.5 w-6 rounded-full bg-zinc-400"></span>
<span>Untreated baseline</span>
</div>
</div>
</div>
<button className="mt-4 w-full rounded-full border border-zinc-900/15 bg-zinc-900/85 text-sm font-medium text-white py-3 hover:bg-zinc-900">
                        Talk to a provider
                    </button>
</article>
</div>
</div>
</section>



    </>
  );
}
