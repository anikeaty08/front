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



document.addEventListener('DOMContentLoaded', () => {
const cards = ['pricing-hobby', 'pricing-pro', 'pricing-ent'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'pricing-pro') {
card.classList.add('border-obsidian');
card.classList.remove('border-border');
}
} else {
card.classList.remove('scale-[1.02]', 'shadow-2xl', 'z-10', 'border-obsidian', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.add('border-border', 'opacity-60', 'scale-[0.98]');
}
});
}
cards.forEach(id => {
const card = document.getElementById(id);
if (card) {
card.addEventListener('click', () => updateState(id));
card.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
updateState(id);
}
});
card.addEventListener('mouseenter', () => {
if (card.classList.contains('opacity-60')) {
card.classList.remove('opacity-60');
card.classList.add('opacity-90');
}
});
card.addEventListener('mouseleave', () => {
const isSelected = card.classList.contains('z-10');
if (!isSelected) {
card.classList.remove('opacity-90');
card.classList.add('opacity-60');
}
});
}
});
updateState('pricing-pro');
});



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#111111',
charcoal: '#333333',
subtle: '#737373',
border: '#E5E5E5',
accent: '#252525',
primary: '#000000',
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
}
}
}
}



      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform vec2 uMouse;
      varying float vNoise;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159
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
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-canvas/90 backdrop-blur-md border-b border-border/50 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-obsidian text-white flex items-center justify-center rounded-sm">
<iconify-icon height="16" icon="solar:grid-outline" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="font-sans text-sm font-semibold tracking-tight text-obsidian">
          AlphaGrid
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#thesis">
          Thesis
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#problem">
          Problem
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#world-model">
          World Model
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#approach">
          Approach
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#evidence">
          Evidence
        </a>
</nav>
<div className="flex items-center gap-5">
<a className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#contact">
          Contact
        </a>
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-1" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
<span className="relative z-20">Request a scientific briefing</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
                AlphaGrid v1.1 — Clinical pilots in progress
              </span>
</div>
<h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
              A computational
              <br/>
<span className="text-subtle">layer for cancer.</span>
</h1>
<p className="max-w-xl font-sans text-base text-subtle leading-relaxed">
              AlphaGrid builds patient‑level digital twins that compile tumor
              biology into a state model, enabling evidence‑linked “what‑if”
              therapy simulation and decision‑ready care pathways.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Request a scientific briefing</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2" onclick="document.getElementById('approach').scrollIntoView({behavior:'smooth'})">
              Explore the approach
            </button>
</div>
<div className="flex flex-wrap gap-6 pt-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[11px] text-subtle font-mono">
                Patient‑level digital twins
              </span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
<span className="text-[11px] text-subtle font-mono">
                Evidence‑linked simulation
              </span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[11px] text-subtle font-mono">
                Decision‑ready pathways
              </span>
</div>
</div>
</div>

<div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-60 blur-3xl"></div>
<div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>
<div className="flex justify-between items-center mb-6 border-b border-border/50 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-subtle">
                  Patient Digital Twin · AG‑DT‑0047
                </span>
</div>
<div className="flex items-center gap-2 text-[10px] text-subtle font-mono">
<span className="px-2 py-0.5 rounded border border-border/80 bg-canvas">
                  Tumor state model
                </span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 h-[70%]">

<div className="col-span-1 flex flex-col gap-3">
<div className="bg-white border border-border rounded-lg p-3 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-obsidian" icon="solar:cpu-bolt-linear" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[10px] font-mono text-subtle uppercase">
                      State layers
                    </span>
</div>
<div className="space-y-1.5">
<div className="h-1.5 rounded bg-obsidian/10 overflow-hidden">
<div className="h-full w-3/4 bg-obsidian/80 animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
<div className="h-1.5 rounded bg-obsidian/10 overflow-hidden">
<div className="h-full w-2/3 bg-emerald-500/80"></div>
</div>
<div className="h-1.5 rounded bg-obsidian/10 overflow-hidden">
<div className="h-full w-1/2 bg-sky-500/80"></div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1">
<span className="px-1.5 py-0.5 rounded bg-canvas border border-border/70 text-[9px] font-mono text-subtle">
                      Genomics
                    </span>
<span className="px-1.5 py-0.5 rounded bg-canvas border border-border/70 text-[9px] font-mono text-subtle">
                      Imaging
                    </span>
<span className="px-1.5 py-0.5 rounded bg-canvas border border-border/70 text-[9px] font-mono text-subtle">
                      Labs
                    </span>
</div>
</div>
<div className="bg-white border border-border rounded-lg p-3 shadow-sm">
<span className="text-[10px] font-mono text-subtle uppercase block mb-1.5">
                    Uncertainty
                  </span>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full border border-border flex items-center justify-center relative">
<div className="absolute inset-1 rounded-full bg-emerald-500/10"></div>
<span className="text-[11px] font-semibold text-emerald-600">
                        0.82
                      </span>
</div>
<p className="text-[10px] text-subtle leading-snug">
                      Confidence in progression risk estimate for next 90 days.
                    </p>
</div>
</div>
</div>

<div className="col-span-1 relative flex items-center justify-center">
<div className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full">
<div className="rounded-sm bg-emerald-500/10 border border-emerald-500/40 animate-pulse"></div>
<div className="rounded-sm bg-sky-500/5 border border-sky-500/40"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/40"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/20"></div>
<div className="rounded-sm bg-emerald-500/5 border border-emerald-500/30"></div>
<div className="rounded-sm bg-obsidian/80 border border-obsidian shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/20"></div>
<div className="rounded-sm bg-sky-500/5 border border-sky-500/30"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/20"></div>
<div className="rounded-sm bg-emerald-500/5 border border-emerald-500/30"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/40"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/20"></div>
<div className="rounded-sm bg-sky-500/10 border border-sky-500/40"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/20"></div>
<div className="rounded-sm bg-emerald-500/5 border border-emerald-500/30"></div>
<div className="rounded-sm bg-obsidian/5 border border-obsidian/20"></div>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-obsidian text-white text-[9px] font-mono px-2 py-1 rounded shadow-lg">
                  State(t) compiled · queryable
                </div>
</div>

<div className="col-span-1 flex flex-col justify-between">
<div className="bg-white border border-border rounded-lg p-3 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-subtle uppercase">
                      What‑if simulation
                    </span>
<span className="text-[10px] text-subtle">
                      3 regimens
                    </span>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between gap-2">
<span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 border border-emerald-500/40">
                        Regimen A
                      </span>
<span className="text-subtle font-mono">
                        PFS +6.2 mo
                      </span>
</div>
<div className="flex items-center justify-between gap-2">
<span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 border border-amber-500/40">
                        Regimen B
                      </span>
<span className="text-subtle font-mono">
                        PFS +2.1 mo
                      </span>
</div>
<div className="flex items-center justify-between gap-2">
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-subtle border border-border">
                        Regimen C
                      </span>
<span className="text-subtle font-mono">
                        Insufficient data
                      </span>
</div>
</div>
</div>
<div className="bg-obsidian text-white rounded-lg p-3 shadow-md mt-3">
<div className="flex items-center gap-2 mb-1.5">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-wider">
                      Decision‑ready memo
                    </span>
</div>
<p className="text-[10px] text-white/80 leading-snug">
                    Proposed plan with traceable evidence, assumptions, and
                    rejected alternatives for tumor board review.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-20 bg-white" id="thesis">
<div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12">
<div className="max-w-3xl">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-4">
              The thesis: cancer care needs a computational layer.
            </h2>
<p className="text-base text-subtle leading-relaxed">
              Oncology fails when we treat correlation as causation: the same
              mutation and the same regimen can produce different outcomes
              because the <span className="font-semibold text-obsidian">
                biological state
              </span>
              differs. The missing layer is a model that connects
              <span className="font-mono text-xs bg-canvas px-1.5 py-0.5 rounded border border-border/70">
                state → intervention → outcome
              </span>
              — and improves with every case.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-canvas border border-border rounded-xl p-5 flex flex-col gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-obsidian" icon="solar:dna-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-obsidian tracking-tight">
                    State
                  </span>
</div>
<p className="text-sm text-subtle leading-relaxed">
                  Tumor biology compiled into a longitudinal state — not a
                  static report — across genomics, imaging, labs, and
                  clinical context.
                </p>
</div>
<div className="bg-canvas border border-border rounded-xl p-5 flex flex-col gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-obsidian" icon="solar:pill-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-obsidian tracking-tight">
                    Intervention
                  </span>
</div>
<p className="text-sm text-subtle leading-relaxed">
                  Therapies, combinations, dose changes, and supportive care,
                  represented as structured interventions over the state.
                </p>
</div>
<div className="bg-canvas border border-border rounded-xl p-5 flex flex-col gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:graph-up-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-obsidian tracking-tight">
                    Outcome
                  </span>
</div>
<p className="text-sm text-subtle leading-relaxed">
                  Response, progression, toxicity, and survival captured as
                  updates to the state — closing the learning loop.
                </p>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-obsidian text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<p className="relative z-10 text-sm leading-relaxed">
<span className="block font-semibold mb-2">
                    “Biology is observed, but rarely modeled.”
                  </span>
                  Cancer care needs models that learn, not just records that
                  store.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60" id="problem">
<div className="max-w-6xl mx-auto space-y-12">
<div className="max-w-3xl">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-4">
              The problem: personalization breaks at the point of care.
            </h2>
<p className="text-base text-subtle leading-relaxed">
              Clinicians must decide across exploding therapies, biomarkers,
              and lines of treatment — but the patient’s biology is not
              compiled into a single state they can reason over.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
<div className="space-y-6">
<div className="bg-white border border-border rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-obsidian" icon="solar:database-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-obsidian tracking-tight">
                    Hospitals have data, but not a learning loop.
                  </span>
</div>
<p className="text-sm text-subtle leading-relaxed">
                  Outcomes rarely flow back into a model that updates future
                  decisions. Systems record what happened, but they don’t
                  compute how biology and therapy interacted — so the system
                  repeats the same uncertainty and the cost…
                </p>
</div>
<div className="bg-white border border-border rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-obsidian" icon="solar:folder-check-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-obsidian tracking-tight">
                    Fragmented context at tumor board.
                  </span>
</div>
<p className="text-sm text-subtle leading-relaxed">
                  Weeks of scans, notes, and reports sit in different systems.
                  The oncologist has minutes to reconstruct a mental model of
                  the patient’s biology — without a computational substrate.
                </p>
</div>
</div>

<div className="premium-card relative overflow-hidden rounded-xl p-6">
<div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-4">
<span className="text-[11px] font-mono text-subtle uppercase">
                    From records → reasoning
                  </span>
<span className="text-[11px] text-subtle">
                    Today vs AlphaGrid
                  </span>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-3">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 border border-border/80">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] text-subtle font-mono">
                        Status quo
                      </span>
</div>
<ul className="space-y-2 text-sm text-subtle">
<li className="flex gap-2">
<span>•</span>
<span>Scattered PDFs, PACS viewers, EMR notes.</span>
</li>
<li className="flex gap-2">
<span>•</span>
<span>No explicit state model — only clinician memory.</span>
</li>
<li className="flex gap-2">
<span>•</span>
<span>
                          Outcomes stored as text, not as updates to a model.
                        </span>
</li>
</ul>
</div>
<div className="space-y-3">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-emerald-700 font-mono">
                        With AlphaGrid
                      </span>
</div>
<ul className="space-y-2 text-sm text-subtle">
<li className="flex gap-2">
<span>•</span>
<span>
                          Patient‑level digital twin updated as data arrives.
                        </span>
</li>
<li className="flex gap-2">
<span>•</span>
<span>
                          Outcomes feed back into state → intervention →
                          outcome mapping.
                        </span>
</li>
<li className="flex gap-2">
<span>•</span>
<span>
                          Simulation and decision support over a queryable
                          graph.
                        </span>
</li>
</ul>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-subtle">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Learning loop closed</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-subtle">
<iconify-icon icon="solar:infinity-linear" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></iconify-icon>
<span>Each case improves the model</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-border/60" id="world-model">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4 leading-[1.1]">
                A patient‑level world model for cancer.
              </h2>
<p className="text-base text-subtle leading-relaxed">
                AlphaGrid builds a digital twin that evolves as new data
                arrives and can be queried to simulate therapy response and
                operationalize the chosen plan.
              </p>
</div>
<div className="text-xs text-subtle max-w-sm">
<span className="font-mono uppercase tracking-wider">
                Not a report — a model.
              </span>
<p className="mt-2">
                State, interventions, and outcomes live in a computational
                substrate designed for reasoning, not static documentation.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-5 group relative bg-canvas border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-white border border-border rounded flex items-center justify-center mb-5 text-obsidian shadow-sm">
<iconify-icon icon="solar:cpu-bolt-linear" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-2">
                    Compiles multimodal tumor biology into a state
                    representation.
                  </h3>
<p className="text-sm text-subtle leading-relaxed">
                    Not a PDF, not a static note. A structured representation
                    of biological state that can be updated, queried, and
                    simulated over time.
                  </p>
</div>
<div className="mt-6">
<div className="flex items-center gap-2 text-[11px] text-subtle">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Genomics · Imaging · Labs · Clinical notes</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="p-8 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-5 text-obsidian shadow-sm">
<iconify-icon icon="solar:hierarchy-3-linear" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-2">
                  Builds a patient context graph.
                </h3>
<p className="text-sm text-subtle leading-relaxed mb-6">
                  Entities and relations that link biological state,
                  interventions, and outcomes — enabling causality‑aligned
                  reasoning instead of surface similarity.
                </p>
<div className="mt-auto">
<div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-subtle">
<span className="px-2 py-0.5 rounded bg-canvas border border-border">
                      Biomarkers
                    </span>
<span className="px-2 py-0.5 rounded bg-canvas border border-border">
                      Lesions
                    </span>
<span className="px-2 py-0.5 rounded bg-canvas border border-border">
                      Therapies
                    </span>
<span className="px-2 py-0.5 rounded bg-canvas border border-border">
                      Events
                    </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 group relative bg-obsidian text-white rounded-xl overflow-hidden transition-all duration-500">
<div className="p-8 flex flex-col h-full">
<div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-5 text-white shadow-sm">
<iconify-icon icon="solar:radar-2-linear" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">
                  Runs ‘what‑if’ exploration and outputs decision artifacts.
                </h3>
<p className="text-sm text-white/70 leading-relaxed mb-6">
                  Evidence‑linked simulations and pathway primitives that can
                  be executed across the care team.
                </p>
<div className="mt-auto space-y-3 text-[11px]">
<div className="flex items-center justify-between">
<span className="text-white/70">Therapy candidates</span>
<span className="font-mono">3</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/70">Evidence sources</span>
<span className="font-mono">27</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/70">Plan artifacts</span>
<span className="font-mono">Pathway · Orders · Memo</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60" id="approach">
<div className="max-w-7xl mx-auto space-y-20">

<div className="max-w-3xl">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
              Approach: from biology to decision.
            </h2>
<p className="text-base text-subtle leading-relaxed">
              AlphaGrid is structured as three coordinated layers: a biological
              state model (the “twin”), a patient context graph (the
              “compiler”), and multi‑agent orchestration (the “decision”
              layer).
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border border-border rounded-xl p-7 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-canvas border border-border/80 w-max">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-mono text-subtle uppercase">
                  5.1 · Twin layer
                </span>
</div>
<h3 className="text-lg font-semibold text-obsidian">
                Biological state modeling.
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                State is not a snapshot; it is a timeline of observations +
                inferred latent factors. As new tests arrive (scan, biopsy,
                markers, adverse events), the model updates the patient state
                and its uncertainty.
              </p>
<p className="text-sm text-subtle leading-relaxed">
                The twin stores
                <span className="font-semibold text-obsidian">why</span>
                something is believed (traceable evidence) and
                <span className="font-semibold text-obsidian">
                  what would change the belief
                </span>
                (missing tests / next best information).
              </p>
</div>

<div className="bg-white border border-border rounded-xl p-7 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-canvas border border-border/80 w-max">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
<span className="text-[10px] font-mono text-subtle uppercase">
                  5.2 · Compiler layer
                </span>
</div>
<h3 className="text-lg font-semibold text-obsidian">
                Context graph — making the patient queryable.
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                The graph exposes nodes (findings, biomarkers, lesions,
                therapies, events) and edges (causal/clinical relations,
                temporal dependencies).
              </p>
<p className="text-sm text-subtle leading-relaxed">
                Reasoning happens over the graph:
                <span className="italic">
                  which changes explain progression? which therapy constraints
                  apply? what evidence supports a pivot?
                </span>
                Messy charts become a structured substrate for simulation and
                decision support.
              </p>
</div>

<div className="bg-white border border-border rounded-xl p-7 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-canvas border border-border/80 w-max">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] font-mono text-subtle uppercase">
                  5.3 · Decision layer
                </span>
</div>
<h3 className="text-lg font-semibold text-obsidian">
                Multi‑agent orchestration.
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                Specialized agents handle data extraction/normalization, cohort
                matching, guideline parsing, evidence retrieval, toxicity &amp;
                interaction checks, and plan synthesis.
              </p>
<p className="text-sm text-subtle leading-relaxed">
                A final “clinician‑in‑the‑loop” agent produces a decision memo
                with traceability: what evidence was used, what assumptions
                were made, and what alternatives were rejected.
              </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
<div className="lg:col-span-1">
<h3 className="font-sans text-xl font-semibold text-obsidian tracking-tight mb-3">
                Why now.
              </h3>
</div>
<div className="lg:col-span-2 space-y-6">
<div className="flex gap-3">
<div className="mt-1.5 w-1 h-10 bg-obsidian rounded-full"></div>
<p className="text-sm text-subtle leading-relaxed">
                  Therapy space is expanding faster than human cognition and
                  clinic time: combinations, biomarkers, and sequential lines
                  increase decision complexity far beyond what manual mental
                  models can track.
                </p>
</div>
<div className="flex gap-3">
<div className="mt-1.5 w-1 h-10 bg-obsidian rounded-full"></div>
<p className="text-sm text-subtle leading-relaxed">
                  Tooling in most hospitals is a
                  <span className="font-semibold text-obsidian">
                    system of record, not a system of reasoning
                  </span>
                  — it stores documents, but cannot compute over biology.
                </p>
</div>
<div className="flex gap-3">
<div className="mt-1.5 w-1 h-10 bg-obsidian rounded-full"></div>
<p className="text-sm text-subtle leading-relaxed">
                  Foundation models and multimodal representation learning make
                  it newly feasible to represent complex tumor
                  microenvironments and map them to outcomes — the same shift
                  that enabled modern digital biology.
                </p>
</div>
</div>
</div>

<div className="space-y-10">
<div className="flex flex-col md:flex-row justify-between gap-8 items-end">
<div>
<h3 className="font-sans text-xl font-semibold text-obsidian tracking-tight mb-2">
                  Who AlphaGrid is for.
                </h3>
<p className="text-sm text-subtle max-w-xl">
                  Designed for teams building learning cancer systems across
                  care delivery, research, and therapeutics.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-border rounded-xl p-6 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-obsidian" icon="solar:hospital-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-obsidian tracking-tight">
                    Cancer centers &amp; hospital oncology programs
                  </span>
</div>
<ul className="space-y-2 text-sm text-subtle leading-relaxed">
<li>• Tumor board preparation and decision support: compress weeks of scattered context into a single, evidence‑linked state model.</li>
<li>• High‑risk patient triage: identify progression risk and regimen mismatch earlier.</li>
<li>• Execution reliability: translate decisions into pathway primitives that reduce drop‑offs, delays, and avoidable toxicities.</li>
</ul>
</div>

<div className="bg-white border border-border rounded-xl p-6 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-obsidian" icon="solar:atom-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-obsidian tracking-tight">
                    Research institutes
                  </span>
</div>
<ul className="space-y-2 text-sm text-subtle leading-relaxed">
<li>• Bridge wet‑lab signal to clinical scale: use digital twins to generalize ex‑vivo findings and design validation cohorts.</li>
<li>• Prioritize hypotheses by simulating state trajectories under different interventions.</li>
<li>• Create learning systems: every case updates the state → intervention → outcome mapping.</li>
</ul>
</div>

<div className="bg-white border border-border rounded-xl p-6 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-obsidian" icon="solar:flask-linear" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-obsidian tracking-tight">
                    Pharma, biotech &amp; CROs
                  </span>
</div>
<ul className="space-y-2 text-sm text-subtle leading-relaxed">
<li>• Responder enrichment: identify patients likely to respond beyond coarse biomarkers.</li>
<li>• Virtual arms / external controls: generate comparable cohorts with clear assumptions and traceability.</li>
<li>• Translational insight: connect microenvironment patterns to outcomes to surface new targets.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-white" id="evidence">
<div className="max-w-6xl mx-auto space-y-12">
<div className="max-w-3xl">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-4">
              Evidence of momentum.
            </h2>
<p className="text-base text-subtle leading-relaxed">
              Built alongside clinicians and researchers, with early deployments
              grounded in real workflows and real data.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-canvas border border-border rounded-xl p-6">
<span className="text-[11px] font-mono text-subtle uppercase">
                Clinical pilots
              </span>
<h3 className="text-sm font-semibold text-obsidian mt-2 mb-2">
                v1.1 live in pilot.
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                Longitudinal patient intelligence layer unifying multimodal
                cancer data into a single clinical view: timeline, patient
                state, biomarkers, and evidence‑linked reasoning.
              </p>
</div>
<div className="bg-canvas border border-border rounded-xl p-6">
<span className="text-[11px] font-mono text-subtle uppercase">
                Design partners
              </span>
<h3 className="text-sm font-semibold text-obsidian mt-2 mb-2">
                Active clinical feedback loop.
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                Oncologists and radiologists serving as design partners to
                shape the twin, graph, and memo outputs around real tumor board
                and clinic constraints.
              </p>
</div>
<div className="bg-canvas border border-border rounded-xl p-6">
<span className="text-[11px] font-mono text-subtle uppercase">
                Research collaboration
              </span>
<h3 className="text-sm font-semibold text-obsidian mt-2 mb-2">
                Digital‑twin validation track.
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                Working with a leading cancer research institute on a digital
                twin approach that ties pre‑treatment biological profiles to
                post‑treatment outcomes for in‑silico “what‑if” validation.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-obsidian text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

<div className="space-y-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                What makes AlphaGrid different.
              </h2>
<ul className="space-y-3 text-sm text-white/80 leading-relaxed">
<li>
<span className="font-semibold">Not “better documentation”.</span>
                  We model patient state and uncertainty so decisions can be
                  computed, compared, and updated.
                </li>
<li>
<span className="font-semibold">
                    Not single‑modality automation.
                  </span>
                  The twin is multimodal and longitudinal by design.
                </li>
<li>
<span className="font-semibold">Not just evidence retrieval.</span>
                  Evidence is grounded in the patient state and translated into
                  actionable trade‑offs.
                </li>
<li>
<span className="font-semibold">Learning loop by default.</span>
                  Outcomes update the state → intervention → outcome mapping,
                  compounding into a defensible data + model moat.
                </li>
</ul>
</div>

<div className="space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
<h3 className="text-xl font-semibold tracking-tight">
                Trust, safety, and scientific rigor.
              </h3>
<ul className="space-y-3 text-sm text-white/80 leading-relaxed">
<li>
<span className="font-semibold">Traceability by default.</span>
                  Every recommendation links back to peer‑reviewed sources and
                  patient data provenance.
                </li>
<li>
<span className="font-semibold">Human‑in‑the‑loop.</span>
                  Clinicians remain the decision maker; AlphaGrid is a
                  reasoning layer, not an autonomous prescriber.
                </li>
<li>
<span className="font-semibold">Privacy &amp; compliance.</span>
                  De‑identification, access controls, audit logs, and
                  deployment aligned to local regulatory requirements.
                </li>
</ul>
</div>

<div className="space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
<h3 className="text-xl font-semibold tracking-tight">
                Team: research‑forward and bilingual.
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                Bilingual builders with deep AI systems engineering and
                clinical grounding (family of doctors), focused on bridging
                biology and deployment reality.
              </p>
<p className="text-sm text-white/80 leading-relaxed">
                Interdisciplinary by design: computational modeling, multimodal
                ML, and oncology workflows working together as a single
                product surface.
              </p>
<p className="text-sm text-white/80 leading-relaxed">
                Advisors include practicing clinicians and researchers to keep
                the platform anchored to real constraints, practice patterns,
                and evidence standards.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border bg-white" id="contact">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-4">
              Talk to the AlphaGrid team.
            </h2>
<p className="text-base text-subtle max-w-2xl mx-auto">
              We work directly with cancer centers, research institutes, and
              therapeutic companies to design pilots and studies grounded in
              scientific rigor.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative p-6 rounded-xl border border-border bg-canvas flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold text-obsidian mb-2">
                  For cancer centers
                </h3>
<p className="text-sm text-subtle mb-4">
                  Request a pilot briefing focused on tumor board workflows and
                  high‑risk patient triage.
                </p>
</div>
<button className="w-full py-2.5 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:border-obsidian group-hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100">
                Request pilot briefing
              </button>
</div>
<div className="group relative p-6 rounded-xl border border-border bg-canvas flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold text-obsidian mb-2">
                  For research institutes
                </h3>
<p className="text-sm text-subtle mb-4">
                  Propose a co‑authored study on digital twins, multimodal
                  state modeling, or in‑silico validation.
                </p>
</div>
<button className="w-full py-2.5 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:border-obsidian group-hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100">
                Propose a study
              </button>
</div>
<div className="group relative p-6 rounded-xl border border-border bg-canvas flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold text-obsidian mb-2">
                  For pharma, biotech &amp; CROs
                </h3>
<p className="text-sm text-subtle mb-4">
                  Discuss responder enrichment, virtual arms, and external
                  controls grounded in patient‑level world models.
                </p>
</div>
<button className="w-full py-2.5 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:border-obsidian group-hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100">
                Start a conversation
              </button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-16 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-obsidian rounded-sm"></div>
<span className="font-semibold text-sm tracking-tight text-obsidian">
                AlphaGrid
              </span>
</div>
<p className="text-xs text-subtle leading-relaxed">
              A computational layer for cancer: patient‑level world models,
              evidence‑linked simulation, and decision‑ready care pathways.
            </p>
<div className="text-[10px] text-border">
              © 2024 AlphaGrid Systems Inc.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-semibold text-obsidian">Product</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#world-model">World model</a></li>
<li><a className="hover:text-obsidian" href="#approach">Approach</a></li>
<li><a className="hover:text-obsidian" href="#evidence">Evidence</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-obsidian">For teams</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#contact">Cancer centers</a></li>
<li><a className="hover:text-obsidian" href="#contact">Research institutes</a></li>
<li><a className="hover:text-obsidian" href="#contact">Pharma &amp; biotech</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-obsidian">Connect</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Email</a></li>
<li><a className="hover:text-obsidian" href="#">LinkedIn</a></li>
<li><a className="hover:text-obsidian" href="#">Preprint / arXiv (soon)</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
