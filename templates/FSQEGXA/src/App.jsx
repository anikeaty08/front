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
      

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a aria-label="Relay Home" className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-gray-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold" style={{letterSpacing: '-0.02em', animation: 'fadeInUp 0.7s both'}}>
            RL
          </div>
<span className="text-base font-medium text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors" style={{animation: 'fadeInUp 0.7s both', animationDelay: '.05s'}}>
            Relay
          </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#story" style={{animation: 'fadeInUp .7s both', animationDelay: '.08s'}}>Journey</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#engine" style={{animation: 'fadeInUp .7s both', animationDelay: '.1s'}}>Engine</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#community" style={{animation: 'fadeInUp .7s both', animationDelay: '.12s'}}>Community</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#cta" style={{animation: 'fadeInUp .7s both', animationDelay: '.14s'}}>Get Started</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-neutral-50 hover:border-neutral-300 transition-colors" style={{animation: 'fadeInUp .7s both', animationDelay: '.16s'}}>
<svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7l4 4h7v10a2 2 0 0 1-2 2H3z"></path>
</svg>
            Partner
          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 active:bg-gray-700 transition-colors" style={{animation: 'fadeInUp .7s both', animationDelay: '.18s'}}>
<svg aria-hidden="true" className="w-4 h-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
            Track order
          </button>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div aria-hidden="true" className="absolute inset-x-0 -top-24 pointer-events-none">
<svg height="120" preserveaspectratio="none" viewbox="0 0 1440 120" width="100%">
<path d="M0,70 C200,110 400,20 720,60 C1040,100 1240,40 1440,80 L1440,0 L0,0Z" fill="#fff"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-16 lg:pb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">

<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-gray-700 mb-5" style={{animation: 'fadeInUp .8s both'}}>
<span aria-hidden="true" className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Live courier route • Urban-optimized
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900" style={{animation: 'fadeInUp .9s both', animationDelay: '.05s'}}>
              Delivery that feels instant
            </h1>
<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl" style={{animation: 'fadeInUp .9s both', animationDelay: '.14s'}}>
              We orchestrate pickups across the city—one seamless route, three restaurants, zero waiting. Warm, reliable, and right on time.
            </p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" style={{animation: 'fadeInUp .9s both', animationDelay: '.22s'}}>
<button className="inline-flex justify-center items-center gap-2 rounded-md bg-amber-500 text-gray-900 px-4 py-2.5 text-sm font-medium hover:bg-amber-400 active:bg-amber-500/90 transition-colors">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14"></path></svg>
                Start an order
              </button>
<button className="inline-flex justify-center items-center gap-2 rounded-md border border-neutral-200 px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
                See the journey
              </button>
</div>

<div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
<div className="flex items-center gap-2.5 rounded-lg border border-neutral-200 px-3 py-2" style={{animation: 'fadeInUp .9s both', animationDelay: '.28s'}}>
<svg className="w-4.5 h-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v22M1 12h22"></path></svg>
<span className="text-xs text-gray-700">Batch smart</span>
</div>
<div className="flex items-center gap-2.5 rounded-lg border border-neutral-200 px-3 py-2" style={{animation: 'fadeInUp .9s both', animationDelay: '.34s'}}>
<svg className="w-4.5 h-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
<span className="text-xs text-gray-700">ETA you trust</span>
</div>
<div className="flex items-center gap-2.5 rounded-lg border border-neutral-200 px-3 py-2" style={{animation: 'fadeInUp .9s both', animationDelay: '.4s'}}>
<svg className="w-4.5 h-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 5 5L20 7"></path></svg>
<span className="text-xs text-gray-700">Warm handoff</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl border border-neutral-200 bg-white shadow-sm p-4 sm:p-5 lg:p-6" style={{animation: 'fadeIn .9s both', animationDelay: '.1s'}}>

<svg aria-label="Courier visiting three restaurants then delivering to a home" className="w-full h-[360px] sm:h-[420px] lg:h-[480px]" fill="none" role="img" viewbox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">

<defs>
<lineargradient id="bgGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#fff8eb"></stop>
<stop offset="100%" stop-color="#ffffff"></stop>
</lineargradient>
<pattern height="30" id="grid" patternunits="userSpaceOnUse" width="30">
<path d="M30 0H0v30" stroke="#e5e7eb" stroke-opacity=".6" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#bgGrad)" height="600" rx="16" width="900" x="0" y="0"></rect>
<rect fill="url(#grid)" height="568" opacity=".4" rx="12" width="868" x="16" y="16"></rect>

<g stroke="#d4d4d8" strokeWidth="2">
<path d="M60 520 H840"></path>
<path d="M140 80 V520"></path>
<path d="M360 80 V520"></path>
<path d="M580 80 V520"></path>
</g>

<g id="r1" transform="translate(110,170)">
<rect fill="#fff" height="90" rx="8" stroke="#e5e7eb" width="130" x="0" y="0"></rect>
<rect fill="#f97316" height="24" opacity=".12" rx="6" width="130" x="0" y="-14"></rect>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '600', letterSpacing: '-.02em'}} x="12" y="20">KATSU KITCHEN</text>
<g transform="translate(8,46)">
<rect fill="#fde68a" height="18" rx="3" stroke="#fbbf24" width="28" x="0" y="0"></rect>
<text fill="#1f2937" fontFamily="Inter, system-ui" fontSize="10" x="6" y="13">R1</text>
</g>
</g>
<g id="r2" transform="translate(330,280)">
<rect fill="#fff" height="90" rx="8" stroke="#e5e7eb" width="130" x="0" y="0"></rect>
<rect fill="#f97316" height="24" opacity=".12" rx="6" width="130" x="0" y="-14"></rect>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '600', letterSpacing: '-.02em'}} x="12" y="20">PIZZA LANE</text>
<g transform="translate(8,46)">
<rect fill="#fde68a" height="18" rx="3" stroke="#fbbf24" width="28" x="0" y="0"></rect>
<text fill="#1f2937" fontFamily="Inter, system-ui" fontSize="10" x="6" y="13">R2</text>
</g>
</g>
<g id="r3" transform="translate(550,160)">
<rect fill="#fff" height="90" rx="8" stroke="#e5e7eb" width="130" x="0" y="0"></rect>
<rect fill="#f97316" height="24" opacity=".12" rx="6" width="130" x="0" y="-14"></rect>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '600', letterSpacing: '-.02em'}} x="12" y="20">BOWLS &amp; CO</text>
<g transform="translate(8,46)">
<rect fill="#fde68a" height="18" rx="3" stroke="#fbbf24" width="28" x="0" y="0"></rect>
<text fill="#1f2937" fontFamily="Inter, system-ui" fontSize="10" x="6" y="13">R3</text>
</g>
</g>

<g id="home" transform="translate(720,380)">
<rect fill="#fff" height="80" rx="8" stroke="#e5e7eb" width="120" x="0" y="30"></rect>
<polygon fill="#fde68a" points="60,0 0,40 120,40" stroke="#fbbf24"></polygon>
<rect fill="#fef3c7" height="50" rx="4" stroke="#fbbf24" width="26" x="20" y="60"></rect>
<rect fill="#f3f4f6" height="22" rx="4" stroke="#e5e7eb" width="36" x="64" y="60"></rect>

<g transform="translate(88,70)">
<circle cx="16" cy="16" fill="#fff" r="12" stroke="#e5e7eb"></circle>
<circle cx="12" cy="14" fill="#111827" r="1.5"></circle>
<circle cx="20" cy="14" fill="#111827" r="1.5"></circle>
<path d="M12 20 q4 4 8 0" fill="none" stroke="#111827" strokeWidth="1.5"></path>

<g transform="translate(30,6)">
<circle cx="0" cy="8" fill="#fde68a" r="6" stroke="#fbbf24"></circle>
<animatetransform additive="sum" attributename="transform" dur="1.4s" from="-10 0 8" repeatcount="indefinite" to="10 0 8" type="rotate"></animatetransform>
</g>

<g opacity="0">
<path d="M16 0c1.2-2.2 5-1.5 5 1.6 0 3-5 6.4-5 6.4S11 4.6 11 1.6c0-3.1 3.8-3.8 5-1.6Z" fill="#ef4444" transform="translate(-6,-8)">
<animate attributename="opacity" begin="route.end-3s" dur="1.2s" fill="freeze" keytimes="0;0.2;1" values="0;1;0.2"></animate>
<animatetransform attributename="transform" begin="route.end-3s" dur="0.6s" fill="freeze" from="1" to="1.4" type="scale"></animatetransform>
</path>
</g>
</g>
</g>

<path d="M140 230 C 220 210, 280 240, 336 310
                                        S 560 160, 614 210
                                        S 730 420, 760 420" fill="none" id="routePath" opacity=".7" stroke="#fb923c" stroke-dasharray="6 8" strokeLinecap="round" strokeWidth="4"></path>

<g id="scooter">

<g id="rider" transform="translate(0,0)">

<ellipse cx="0" cy="0" fill="#000" opacity=".08" rx="22" ry="6" transform="translate(0,26)"></ellipse>

<g>
<circle cx="-16" cy="20" fill="#fff" r="10" stroke="#cbd5e1"></circle>
<circle cx="16" cy="20" fill="#fff" r="10" stroke="#cbd5e1"></circle>
<rect fill="#111827" height="14" rx="4" width="30" x="-10" y="2"></rect>
<rect fill="#111827" height="6" rx="1" width="10" x="10" y="-4"></rect>
<path d="M-14 2 q-14-4 -10 -12" fill="none" stroke="#111827" strokeWidth="2"></path>
</g>

<g transform="translate(-2,-8)">
<circle cx="0" cy="-6" fill="#fef3c7" r="6" stroke="#fbbf24"></circle>
<rect fill="#f59e0b" height="16" rx="3" width="10" x="-4" y="-4"></rect>
</g>

<g id="pkgStack" transform="translate(-2,0)">
<g id="pkg1" opacity="0">
<rect fill="#fde68a" height="14" rx="2" stroke="#f59e0b" width="18" x="-28" y="-8"></rect>
<set attributename="opacity" begin="route.begin+3.5s" dur=".1s" fill="freeze" to="1"></set>
<set attributename="opacity" begin="route.end-3.2s" dur=".1s" fill="freeze" to="0"></set>
</g>
<g id="pkg2" opacity="0">
<rect fill="#fde68a" height="14" rx="2" stroke="#f59e0b" width="18" x="-8" y="-12"></rect>
<set attributename="opacity" begin="route.begin+7.3s" dur=".1s" fill="freeze" to="1"></set>
<set attributename="opacity" begin="route.end-3.2s" dur=".1s" fill="freeze" to="0"></set>
</g>
<g id="pkg3" opacity="0">
<rect fill="#fde68a" height="14" rx="2" stroke="#f59e0b" width="18" x="12" y="-10"></rect>
<set attributename="opacity" begin="route.begin+11s" dur=".1s" fill="freeze" to="1"></set>
<set attributename="opacity" begin="route.end-3.2s" dur=".1s" fill="freeze" to="0"></set>
</g>
</g>
</g>

<animatemotion dur="18s" id="route" repeatcount="indefinite" rotate="auto">
<mpath xlink:href="#routePath"></mpath>

<animate attributename="keyPoints" dur="18s" repeatcount="indefinite" values="0;0.25;0.25;0.5;0.5;0.75;0.75;1"></animate>
<animate attributename="keyTimes" dur="18s" repeatcount="indefinite" values="0;0.18;0.28;0.46;0.56;0.74;0.84;1"></animate>
</animatemotion>
</g>

<g>
<g opacity="1">
<rect fill="#fff" height="26" rx="6" stroke="#e5e7eb" width="74" x="140" y="210"></rect>
<g transform="translate(148,223)">
<circle fill="#fef3c7" r="6" stroke="#f59e0b"></circle>
<path d="M-2 0h4" stroke="#111827" strokeWidth="1.5"></path>
<path d="M-3 -3h6" stroke="#111827" strokeWidth="1.5"></path>
</g>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '500'}} x="168" y="227">Pickup</text>
<animate attributename="opacity" begin="route.begin+3.4s" dur="0.4s" fill="freeze" to="0"></animate>
</g>
<g opacity="1">
<rect fill="#fff" height="26" rx="6" stroke="#e5e7eb" width="74" x="330" y="300"></rect>
<g transform="translate(338,313)">
<circle fill="#fef3c7" r="6" stroke="#f59e0b"></circle>
<path d="M-2 0h4" stroke="#111827" strokeWidth="1.5"></path>
<path d="M-3 -3h6" stroke="#111827" strokeWidth="1.5"></path>
</g>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '500'}} x="358" y="317">Pickup</text>
<animate attributename="opacity" begin="route.begin+7.2s" dur="0.4s" fill="freeze" to="0"></animate>
</g>
<g opacity="1">
<rect fill="#fff" height="26" rx="6" stroke="#e5e7eb" width="74" x="550" y="180"></rect>
<g transform="translate(558,193)">
<circle fill="#fef3c7" r="6" stroke="#f59e0b"></circle>
<path d="M-2 0h4" stroke="#111827" strokeWidth="1.5"></path>
<path d="M-3 -3h6" stroke="#111827" strokeWidth="1.5"></path>
</g>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '500'}} x="578" y="197">Pickup</text>
<animate attributename="opacity" begin="route.begin+10.8s" dur="0.4s" fill="freeze" to="0"></animate>
</g>
</g>

<g opacity="0">
<rect fill="#fff" height="26" rx="6" stroke="#e5e7eb" width="86" x="740" y="360"></rect>
<g transform="translate(748,373)">
<circle fill="#fef3c7" r="6" stroke="#f59e0b"></circle>
<path d="M-4 0l2 2 4-4" fill="none" stroke="#111827" strokeWidth="1.5"></path>
</g>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="12" style={{fontWeight: '500'}} x="768" y="377">Delivered</text>
<animate attributename="opacity" begin="route.end-3s" dur="0.5s" fill="freeze" to="1"></animate>
</g>
</svg>

<div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-600">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-500 animate-[pulseSoft_2s_ease-in-out_infinite]" style={{animation: 'pulseSoft 2s ease-in-out infinite'}}></span>
<span>Live route</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-yellow-300 ring-1 ring-yellow-400/40"></span>
<span>Restaurant</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-gray-900"></span>
<span>Courier</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="absolute inset-x-0 -bottom-24 pointer-events-none">
<svg height="120" preserveaspectratio="none" viewbox="0 0 1440 120" width="100%">
<path d="M0,40 C260,100 400,0 720,60 C1040,120 1180,10 1440,80 L1440,120 L0,120Z" fill="#fafafa"></path>
</svg>
</div>
</section>

<section className="relative bg-[#fafafa] border-t border-neutral-200" id="story">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900" style={{animation: 'fadeInUp .9s both'}}>A city-sized story in four beats</h2>
<p className="mt-3 text-gray-600" style={{animation: 'fadeInUp .9s both', animationDelay: '.08s'}}>From craving to door—our couriers chart the smartest line through kitchens you love.</p>
</div>
<div className="mt-10 grid md:grid-cols-4 gap-5">

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp .9s both', animationDelay: '.12s'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<svg className="h-4.5 w-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 7-7 5 7 5V7Z"></path><path d="M4 5h12M4 12h6M4 19h8"></path></svg>
                Plan
              </div>
<span className="text-xs text-gray-500">T-0</span>
</div>
<p className="mt-3 text-sm text-gray-600">Our engine batches nearby orders and maps a single fluid route.</p>
</div>

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp .9s both', animationDelay: '.18s'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<svg className="h-4.5 w-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
                Pickups
              </div>
<span className="text-xs text-gray-500">T+5</span>
</div>
<p className="mt-3 text-sm text-gray-600">Three kitchens, zero backtracking. Packaging stays warm and tidy.</p>
</div>

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp .9s both', animationDelay: '.24s'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<svg className="h-4.5 w-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 5 5L20 7"></path></svg>
                Hand-off
              </div>
<span className="text-xs text-gray-500">T+12</span>
</div>
<p className="mt-3 text-sm text-gray-600">Couriers confirm names and notes for a friendly, accurate handoff.</p>
</div>

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp .9s both', animationDelay: '.30s'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<svg className="h-4.5 w-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 2-9 9 3 3 9-9-3-3ZM16 7l-5-5L2 11v5h5L16 7Z"></path></svg>
                Smile
              </div>
<span className="text-xs text-gray-500">T+14</span>
</div>
<p className="mt-3 text-sm text-gray-600">You open the door. Hot food, right timing, happy evening.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-white" id="engine">
<div aria-hidden="true" className="absolute inset-x-0 -top-24 pointer-events-none">
<svg height="120" preserveaspectratio="none" viewbox="0 0 1440 120" width="100%">
<path d="M0,70 C200,110 400,20 720,60 C1040,100 1240,40 1440,80 L1440,0 L0,0Z" fill="#fff"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{animation: 'fadeInUp .9s both'}}>The routing engine behind the smile</h3>
<p className="mt-3 text-gray-600 max-w-xl" style={{animation: 'fadeInUp .9s both', animationDelay: '.08s'}}>
              Our urban-aware engine models kitchen prep times, rider velocity, and traffic patterns to minimize idle minutes and keep everything warm.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3" style={{animation: 'slideInX .8s both', animationDelay: '.12s'}}>
<svg className="h-5 w-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5L20 7"></path></svg>
<div>
<div className="text-sm font-medium text-gray-900">Prep-time prediction</div>
<p className="text-sm text-gray-600">Orders are sequenced to be ready at the exact pickup moment.</p>
</div>
</div>
<div className="flex items-start gap-3" style={{animation: 'slideInX .8s both', animationDelay: '.18s'}}>
<svg className="h-5 w-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18"></path></svg>
<div>
<div className="text-sm font-medium text-gray-900">Batching that respects heat</div>
<p className="text-sm text-gray-600">Thermal-aware routing protects soups, fries, and ice cream alike.</p>
</div>
</div>
<div className="flex items-start gap-3" style={{animation: 'slideInX .8s both', animationDelay: '.24s'}}>
<svg className="h-5 w-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<div>
<div className="text-sm font-medium text-gray-900">Adaptive ETAs</div>
<p className="text-sm text-gray-600">Your clock updates in real time—no guesswork, no refresh required.</p>
</div>
</div>
</div>
</div>
<div>

<div className="rounded-xl border border-neutral-200 p-5 bg-white hover:shadow-sm transition-shadow" style={{animation: 'fadeIn .9s both', animationDelay: '.12s'}}>
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-medium text-gray-900">Batch simulation</div>
<div className="text-xs text-gray-600">Live</div>
</div>
<div className="relative h-64 sm:h-72 rounded-lg overflow-hidden bg-[#fff8eb]">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 600 300">
<rect fill="#fff8eb" height="300" width="600"></rect>
<g stroke="#e5e7eb" strokeWidth="2">
<path d="M30 260 H570"></path>
<path d="M110 40 V260"></path>
<path d="M300 40 V260"></path>
<path d="M490 40 V260"></path>
</g>
<path d="M110 140 C210 120 260 140 300 180 S 480 120 520 180" fill="none" stroke="#fb923c" stroke-dasharray="6 8" strokeLinecap="round" strokeWidth="4"></path>
<g transform="translate(110,140)">
<rect fill="#fff" height="24" rx="6" stroke="#e5e7eb" width="48" x="-16" y="-12"></rect>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="10" style={{fontWeight: '600'}} x="8" y="6">R1</text>
</g>
<g transform="translate(300,180)">
<rect fill="#fff" height="24" rx="6" stroke="#e5e7eb" width="48" x="-16" y="-12"></rect>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="10" style={{fontWeight: '600'}} x="8" y="6">R2</text>
</g>
<g transform="translate(520,180)">
<rect fill="#fff" height="24" rx="6" stroke="#e5e7eb" width="48" x="-16" y="-12"></rect>
<text fill="#111827" fontFamily="Inter, system-ui" fontSize="10" style={{fontWeight: '600'}} x="8" y="6">HOME</text>
</g>

<g>
<circle cx="0" cy="0" fill="#111827" r="4"></circle>
<animatemotion dur="6s" repeatcount="indefinite" rotate="auto">
<mpath xlink:href="#miniPath"></mpath>
</animatemotion>
</g>
<path d="M110 140 C210 120 260 140 300 180 S 480 120 520 180" fill="none" id="miniPath"></path>
</svg>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div className="rounded-md border border-neutral-200 px-3 py-2">
<div className="text-gray-500">Stops</div>
<div className="text-gray-900 font-medium">3</div>
</div>
<div className="rounded-md border border-neutral-200 px-3 py-2">
<div className="text-gray-500">ETA</div>
<div className="text-gray-900 font-medium">14m</div>
</div>
<div className="rounded-md border border-neutral-200 px-3 py-2">
<div className="text-gray-500">Warm score</div>
<div className="text-gray-900 font-medium">98%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#fafafa] border-t border-neutral-200" id="community">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-2">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl overflow-hidden border border-neutral-200">
<img alt="Courier in urban street" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" style={{animation: 'slightFloat 6s ease-in-out infinite'}}/>
</div>
<div className="rounded-xl overflow-hidden border border-neutral-200">
<img alt="Smiling customer receiving delivery" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" style={{animation: 'slightFloat 6s ease-in-out infinite', animationDelay: '1.5s'}}/>
</div>
<div className="rounded-xl overflow-hidden border border-neutral-200 sm:col-span-2">
<img alt="Warm packaging and friendly handoff" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{animation: 'slightFloat 6s ease-in-out infinite', animationDelay: '.8s'}}/>
</div>
</div>
</div>
<div>
<h3 className="text-3xl font-semibold tracking-tight" style={{animation: 'fadeInUp .9s both'}}>Warm people, better delivery</h3>
<p className="mt-3 text-gray-600" style={{animation: 'fadeInUp .9s both', animationDelay: '.08s'}}>We train couriers for hospitality, not just speed. Clear notes, careful handling, and a quick hello on arrival.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3" style={{animation: 'slideInX .8s both', animationDelay: '.12s'}}>
<svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-sm text-gray-700">Respectful, quick communication</span>
</div>
<div className="flex items-center gap-3" style={{animation: 'slideInX .8s both', animationDelay: '.18s'}}>
<svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-sm text-gray-700">Identity-verified handoffs</span>
</div>
<div className="flex items-center gap-3" style={{animation: 'slideInX .8s both', animationDelay: '.24s'}}>
<svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 5 5L20 7"></path></svg>
<span className="text-sm text-gray-700">Tamper-evident seals</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white" id="cta">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="rounded-2xl border border-neutral-200 overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-8 sm:p-10">
<h4 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{animation: 'fadeInUp .9s both'}}>Bring Relay to your neighborhood</h4>
<p className="mt-3 text-gray-600" style={{animation: 'fadeInUp .9s both', animationDelay: '.08s'}}>We’re partnering with great local kitchens. Tell us where to go next.</p>
<form className="mt-6 flex flex-col sm:flex-row gap-3" onsubmit="return false;">
<input className="w-full sm:flex-1 rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition" placeholder="you@example.com" required="" style={{animation: 'fadeInUp .9s both', animationDelay: '.14s'}} type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-gray-800 active:bg-gray-700 transition" style={{animation: 'fadeInUp .9s both', animationDelay: '.2s'}}>
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4 20-7Z"></path></svg>
                  Notify me
                </button>
</form>
<p className="mt-3 text-xs text-gray-500">We’ll only email when we launch nearby.</p>
</div>
<div className="bg-[#fff8eb] p-8 sm:p-10">
<div className="h-full rounded-xl border border-amber-200/60 p-6 bg-white/70">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18"></path></svg>
<div className="text-sm font-medium text-gray-900">Partner with us</div>
</div>
<p className="mt-2 text-sm text-gray-600">Operate a kitchen or storefront? Join the network.</p>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-md border border-neutral-200 px-3 py-2">
<div className="text-gray-500">Avg. prep-to-pickup</div>
<div className="text-gray-900 font-medium">6m</div>
</div>
<div className="rounded-md border border-neutral-200 px-3 py-2">
<div className="text-gray-500">On-time rate</div>
<div className="text-gray-900 font-medium">99.2%</div>
</div>
</div>
<button className="mt-6 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-neutral-50 active:bg-neutral-100 transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V3H6a2 2 0 0 0-2 2v2h4Zm0 0h8m0 0V3h2a2 2 0 0 1 2 2v2h-4Zm0 0v10m0 0H8m8 0v4h2a2 2 0 0 0 2-2v-2h-4ZM8 17H4v2a2 2 0 0 0 2 2h2v-4Z"></path></svg>
                  Become a partner
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-gray-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold" style={{letterSpacing: '-0.02em'}}>RL</div>
<div className="text-sm text-gray-600">© 2025 Relay. All rights reserved.</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-gray-600 hover:text-gray-900" href="#">Privacy</a>
<a className="text-gray-600 hover:text-gray-900" href="#">Terms</a>
<a className="text-gray-600 hover:text-gray-900" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
