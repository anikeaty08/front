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



      const map = {
        peak: 'layer-top',
        core: 'layer-3',
        filter: 'layer-2',
        base: 'layer-base'
      };

      const highlight = (id, on) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (on) {
          el.setAttribute('filter', 'url(#glow)');
          el.style.stroke = 'rgba(255,255,255,0.6)';
          el.style.strokeWidth = '2';
        } else {
          el.removeAttribute('filter');
          el.style.stroke = 'rgba(255,255,255,0.12)';
          el.style.strokeWidth = '1.25';
        }
      };

      // Card hover -> layer highlight
      document.querySelectorAll('[data-layer]').forEach(card => {
        const layerId = card.getAttribute('data-layer');
        card.addEventListener('mouseenter', () => highlight(layerId, true));
        card.addEventListener('mouseleave', () => highlight(layerId, false));
        // Click card -> scroll into view for smaller devices
        card.addEventListener('click', () => {
          const cardRect = card.getBoundingClientRect();
          if (window.innerWidth < 1024 && (cardRect.top < 0 || cardRect.bottom > window.innerHeight)) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      });

      // Layer click -> focus card
      document.querySelectorAll('#pyramid [id^="layer-"]').forEach(layer => {
        const key = layer.getAttribute('data-key');
        const card = document.getElementById('card-' + key);
        layer.addEventListener('click', () => {
          if (!card) return;
          card.classList.add('ring-2', 'ring-white/40');
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => card.classList.remove('ring-2', 'ring-white/40'), 800);
        });
        layer.addEventListener('mouseenter', () => highlight(layer.id, true));
        layer.addEventListener('mouseleave', () => highlight(layer.id, false));
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
      
<main className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:py-16">

<header className="flex items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="rounded-md bg-slate-900/70 ring-1 ring-white/10 px-2.5 py-1.5">
<span className="text-sm font-medium tracking-tight" style={{letterSpacing: '-0.04em'}}>IE</span>
</div>
<div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">The Institute of Excellence Growth Model</h1>
<p className="text-sm md:text-base text-slate-400">The Visual Blueprint — The Dent Global / Ascending Transaction Model</p>
</div>
</div>

<div className="hidden md:flex items-center gap-3 rounded-lg bg-slate-900/50 ring-1 ring-white/10 px-3.5 py-2">
<span className="text-xs text-slate-400">Flow</span>
<div className="flex items-center gap-2">
<span className="text-xs text-cyan-300">Attention</span>
<svg className="text-slate-500" height="16" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs text-sky-300">Qualification</span>
<svg className="text-slate-500" height="16" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs text-indigo-300">Profit</span>
<svg className="text-slate-500" height="16" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs text-violet-300">Scale</span>
</div>
</div>
</header>

<section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

<div className="relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(59,130,246,0.15),rgba(0,0,0,0))]"></div>
<svg className="w-full h-auto" id="pyramid" viewbox="0 0 600 520">
<defs>

<lineargradient id="grad-top" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.9"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.45"></stop>
</lineargradient>
<lineargradient id="grad-3" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.85"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0.35"></stop>
</lineargradient>
<lineargradient id="grad-2" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85"></stop>
<stop offset="100%" stop-color="#38bdf8" stop-opacity="0.35"></stop>
</lineargradient>
<lineargradient id="grad-base" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0.3"></stop>
</lineargradient>

<filter id="glow">
<fedropshadow dx="0" dy="0" flood-color="#a5b4fc" flood-opacity="0.45" stddeviation="6"></fedropshadow>
</filter>

<lineargradient id="grid-line" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#ffffff" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"></stop>
</lineargradient>
</defs>

<polygon points="300,20 50,480 550,480" style={{fill: 'none', stroke: 'rgba(148,163,184,0.25)', strokeWidth: '1.5'}}></polygon>



<polygon data-key="peak" id="layer-top" points="300,20 245.65,120 354.35,120" style={{fill: 'url(#grad-top)', stroke: 'rgba(255,255,255,0.14)', strokeWidth: '1.25', cursor: 'pointer'}}></polygon>

<polygon data-key="core" id="layer-3" points="180.44,240 419.56,240 354.35,120 245.65,120" style={{fill: 'url(#grad-3)', stroke: 'rgba(255,255,255,0.12)', strokeWidth: '1.25', cursor: 'pointer'}}></polygon>

<polygon data-key="filter" id="layer-2" points="115.22,360 484.78,360 419.56,240 180.44,240" style={{fill: 'url(#grad-2)', stroke: 'rgba(255,255,255,0.10)', strokeWidth: '1.25', cursor: 'pointer'}}></polygon>

<polygon data-key="base" id="layer-base" points="50,480 550,480 484.78,360 115.22,360" style={{fill: 'url(#grad-base)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.25', cursor: 'pointer'}}></polygon>

<line style={{stroke: 'url(#grid-line)', strokeWidth: '1'}} x1="245.65" x2="354.35" y1="120" y2="120"></line>
<line style={{stroke: 'url(#grid-line)', strokeWidth: '1'}} x1="180.44" x2="419.56" y1="240" y2="240"></line>
<line style={{stroke: 'url(#grid-line)', strokeWidth: '1'}} x1="115.22" x2="484.78" y1="360" y2="360"></line>

<g text-anchor="middle" transform="translate(300,85)">
<text className="select-none" style={{fontSize: '0.75rem', fill: '#e9d5ff', fontWeight: '500'}}>The Partnership</text>
<text className="select-none" style={{fontSize: '0.625rem', fill: '#c4b5fd', fontWeight: '400'}} y="16">Peak</text>
</g>
<g text-anchor="middle" transform="translate(300,200)">
<text className="select-none" style={{fontSize: '0.75rem', fill: '#c7d2fe', fontWeight: '500'}}>Core Product</text>
<text className="select-none" style={{fontSize: '0.625rem', fill: '#a5b4fc', fontWeight: '400'}} y="16">High Value</text>
</g>
<g text-anchor="middle" transform="translate(300,320)">
<text className="select-none" style={{fontSize: '0.75rem', fill: '#bae6fd', fontWeight: '500'}}>Product for Prospects</text>
<text className="select-none" style={{fontSize: '0.625rem', fill: '#7dd3fc', fontWeight: '400'}} y="16">The Filter</text>
</g>
<g text-anchor="middle" transform="translate(300,430)">
<text className="select-none" style={{fontSize: '0.75rem', fill: '#a5f3fc', fontWeight: '500'}}>Free Content</text>
<text className="select-none" style={{fontSize: '0.625rem', fill: '#67e8f9', fontWeight: '400'}} y="16">Base</text>
</g>
</svg>

<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-slate-400">Hover a card to highlight a tier. Click a tier to focus its details.</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<svg className="text-emerald-300" height="16" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16"><path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-emerald-300">Value ↑</span>
<span className="text-slate-500">|</span>
<svg className="text-cyan-300" height="16" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16"><path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-cyan-300">Volume ↓</span>
</div>
</div>
</div>

<div className="space-y-4">

<article className="group rounded-xl bg-slate-900/60 ring-1 ring-white/10 hover:ring-violet-400/40 transition-colors" data-layer="layer-top" id="card-peak">
<div className="flex gap-4 p-4 md:p-5">
<div className="h-full">
<div className="h-full w-1 rounded-full bg-violet-400/70"></div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="rounded-md bg-violet-500/15 ring-1 ring-violet-400/30 px-2 py-1">
<span className="text-xs text-violet-300">Peak</span>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">The Partnership</h3>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-violet-300">
<svg height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18"><path d="M20 7h-9a4 4 0 0 0-4 4v9" strokeLinecap="round"></path><path d="M8 11l-5 5" strokeLinecap="round"></path><path d="M17 17l4-4" strokeLinecap="round"></path></svg>
<span>Scale &amp; Stability</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M12 3l8 4-8 4-8-4 8-4z"></path><path d="M4 7v10l8 4 8-4V7"></path><path d="M12 11v10"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Product</div>
<div className="text-sm text-slate-200">“Future-Ready Region” Series</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M12 6a6 6 0 1 0 6 6"></path><path d="M12 2v2M2 12h2M12 20v2M20 12h2"></path><circle cx="12" cy="12" r="1.5"></circle>
</svg>
<div>
<div className="text-xs text-slate-400">Target</div>
<div className="text-sm text-slate-200">Local Councils / Government</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-violet-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<rect height="12" rx="2" width="18" x="3" y="6"></rect><circle cx="12" cy="12" r="2.5"></circle>
</svg>
<div>
<div className="text-xs text-slate-400">Price</div>
<div className="text-sm text-slate-200">$12,500+</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-violet-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M4 15V5a2 2 0 0 1 2-2h0l1 .5 1-.5h7l1 .5 1-.5v9H8l-2 1-2-1z"></path><path d="M4 22v-7"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Goal</div>
<div className="text-sm text-slate-200">SCALE &amp; STABILITY <span className="text-slate-400">(10 Deals/Year)</span></div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group rounded-xl bg-slate-900/60 ring-1 ring-white/10 hover:ring-indigo-400/40 transition-colors" data-layer="layer-3" id="card-core">
<div className="flex gap-4 p-4 md:p-5">
<div className="h-full">
<div className="h-full w-1 rounded-full bg-indigo-400/70"></div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-500/15 ring-1 ring-indigo-400/30 px-2 py-1">
<span className="text-xs text-indigo-300">High Value</span>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Core Product</h3>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-indigo-300">
<svg height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"></path></svg>
<span>Profit &amp; Cash Flow</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M12 3l8 4-8 4-8-4 8-4z"></path><path d="M4 7v10l8 4 8-4V7"></path><path d="M12 11v10"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Product</div>
<div className="text-sm text-slate-200">“The Excellence Accelerator” / Corporate Offsites</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Target</div>
<div className="text-sm text-slate-200">Hotel GMs &amp; SME Owners</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-indigo-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<rect height="12" rx="2" width="18" x="3" y="6"></rect><circle cx="12" cy="12" r="2.5"></circle>
</svg>
<div>
<div className="text-xs text-slate-400">Price</div>
<div className="text-sm text-slate-200">$3,500 – $6,500</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-indigo-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M3 3v18h18"></path><rect height="7" rx="1" width="3" x="7" y="10"></rect><rect height="10" rx="1" width="3" x="12" y="7"></rect><rect height="5" rx="1" width="3" x="17" y="12"></rect>
</svg>
<div>
<div className="text-xs text-slate-400">Goal</div>
<div className="text-sm text-slate-200">PROFIT &amp; CASH FLOW <span className="text-slate-400">(Bread &amp; Butter)</span></div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group rounded-xl bg-slate-900/60 ring-1 ring-white/10 hover:ring-sky-400/40 transition-colors" data-layer="layer-2" id="card-filter">
<div className="flex gap-4 p-4 md:p-5">
<div className="h-full">
<div className="h-full w-1 rounded-full bg-sky-400/70"></div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="rounded-md bg-sky-500/15 ring-1 ring-sky-400/30 px-2 py-1">
<span className="text-xs text-sky-300">The Filter</span>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Product for Prospects</h3>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-sky-300">
<svg height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18"><path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" strokeLinejoin="round"></path></svg>
<span>Lead Qualification</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<circle cx="12" cy="12" r="9"></circle><path d="M10 8l6 4-6 4" strokeLinejoin="round"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Product</div>
<div className="text-sm text-slate-200">Online Courses (Self-Paced)</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M16 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Target</div>
<div className="text-sm text-slate-200">The “Do It Yourself” Crowd</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-sky-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M20.59 13.41L12 22l-8.59-8.59A2 2 0 0 1 3 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.41.59l7.18 7.18a2 2 0 0 1 0 2.82z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>
</svg>
<div>
<div className="text-xs text-slate-400">Price</div>
<div className="text-sm text-slate-200">From $47 <span className="text-slate-400">+ product bundles</span></div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-sky-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" strokeLinejoin="round"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Goal</div>
<div className="text-sm text-slate-200">LEAD QUALIFICATION <span className="text-slate-400">(Liquidate Ad Spend / Filter leads for the Accelerator)</span></div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group rounded-xl bg-slate-900/60 ring-1 ring-white/10 hover:ring-cyan-400/40 transition-colors" data-layer="layer-base" id="card-base">
<div className="flex gap-4 p-4 md:p-5">
<div className="h-full">
<div className="h-full w-1 rounded-full bg-cyan-400/70"></div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="rounded-md bg-cyan-500/15 ring-1 ring-cyan-400/30 px-2 py-1">
<span className="text-xs text-cyan-300">Base</span>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Free Content</h3>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-cyan-300">
<svg height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18"><path d="M3 10v4M7 7v10M11 4v16M15 9v6M19 6v12" strokeLinecap="round"></path></svg>
<span>Attention &amp; Authority</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<rect height="12" rx="3" width="6" x="9" y="2"></rect><path d="M12 14v6"></path><path d="M8 20h8"></path><path d="M5 10a7 7 0 0 0 14 0"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Product</div>
<div className="text-sm text-slate-200">Social Media / “Ignite” Lead Magnet / Podcast</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-slate-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Target</div>
<div className="text-sm text-slate-200">Everyone</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-cyan-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<ellipse cx="12" cy="6" rx="6" ry="3"></ellipse><path d="M6 6v6c0 1.66 2.69 3 6 3s6-1.34 6-3V6"></path><path d="M6 12v6c0 1.66 2.69 3 6 3s6-1.34 6-3v-6"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Price</div>
<div className="text-sm text-slate-200">$0</div>
</div>
</div>
<div className="flex items-start gap-2">

<svg className="mt-0.5 text-cyan-300" height="18" style={{stroke: 'currentColor', fill: 'none', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18">
<path d="M3 11l18-5v12L3 13v-2z"></path><path d="M7 14v7l4-3"></path>
</svg>
<div>
<div className="text-xs text-slate-400">Goal</div>
<div className="text-sm text-slate-200">ATTENTION &amp; AUTHORITY</div>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="mt-8 md:mt-10">
<div className="rounded-xl bg-slate-900/50 ring-1 ring-white/10 p-4 md:p-5">
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-cyan-400"></div>
<span className="text-xs text-slate-300">Base fuels reach</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-sky-400"></div>
<span className="text-xs text-slate-300">Filter qualifies buyers</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-400"></div>
<span className="text-xs text-slate-300">Core drives profit</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-violet-400"></div>
<span className="text-xs text-slate-300">Partnership scales</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
