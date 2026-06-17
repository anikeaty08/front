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



    // Initialize Lucide icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

<header className="mb-12 md:mb-16">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-zinc-900 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-indigo-400 font-semibold tracking-tight">e</span>
</div>
<div>
<p className="text-sm text-zinc-400">Smart Eyewear</p>
<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-100">edith — see more, do more</h1>
</div>
</div>
<div className="hidden md:flex items-center gap-3">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-indigo-500/30 hover:text-zinc-100 transition">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="scan"></i> Holographic projection
          </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-indigo-500/30 hover:text-zinc-100 transition">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="video"></i> 4K video
          </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-indigo-500/30 hover:text-zinc-100 transition">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="languages"></i> Live translation
          </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-indigo-500/30 hover:text-zinc-100 transition">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="cpu"></i> On‑device AI
          </span>
</div>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="mt-8 max-w-3xl">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100">What teams and creators say</h2>
<p className="mt-3 text-zinc-400">From field operations and healthcare to film and design, edith helps people work hands‑free with crystal‑clear visuals and real‑time intelligence.</p>
</div>
</header>

<section aria-label="Customer testimonials" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<article className="group relative overflow-hidden rounded-xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)] transition">
<div className="absolute -top-2 -left-2 text-indigo-500/20">
<i className="h-12 w-12" data-lucide="quote"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<span className="sr-only">5 star rating</span>
</div>
<p className="mt-4 text-lg md:text-xl font-medium tracking-tight text-zinc-100">“edith let our field teams overlay holographic work orders hands‑free. Training time dropped 42% in a month.”</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="scan"></i> Holograms
            </span>
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="mic"></i> Voice
            </span>
</div>
<div className="mt-6 border-t border-white/10"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Ava Nguyen portrait" className="h-10 w-10 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=128&amp;h=128&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Ava Nguyen</p>
<p className="text-xs text-zinc-400">Head of Product, NovaSight</p>
</div>
</div>
<span className="text-xs text-zinc-400">Ops • Manufacturing</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)] transition">
<div className="absolute -top-2 -left-2 text-indigo-500/20">
<i className="h-12 w-12" data-lucide="quote"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<span className="sr-only">5 star rating</span>
</div>
<p className="mt-4 text-lg md:text-xl font-medium tracking-tight text-zinc-100">“We captured stabilized 4K POV footage without rigs. Battery held through a 9‑hour run‑and‑gun shoot.”</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="video"></i> 4K video
            </span>
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="zap"></i> Stabilization
            </span>
</div>
<div className="mt-6 border-t border-white/10"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Mateo Alvarez portrait" className="h-10 w-10 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=128&amp;h=128&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Mateo Alvarez</p>
<p className="text-xs text-zinc-400">Filmmaker, Lumen Lab</p>
</div>
</div>
<span className="text-xs text-zinc-400">Film • Content</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)] transition">
<div className="absolute -top-2 -left-2 text-indigo-500/20">
<i className="h-12 w-12" data-lucide="quote"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<span className="sr-only">5 star rating</span>
</div>
<p className="mt-4 text-lg md:text-xl font-medium tracking-tight text-zinc-100">“Live translation let clinicians consult across six languages in real time. Patient throughput rose 31%.”</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="languages"></i> Translation
            </span>
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="shield-check"></i> HIPAA mode
            </span>
</div>
<div className="mt-6 border-t border-white/10"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Priya Shah portrait" className="h-10 w-10 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=128&amp;h=128&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Priya Shah</p>
<p className="text-xs text-zinc-400">Founder, VeloHealth</p>
</div>
</div>
<span className="text-xs text-zinc-400">Healthcare • Clinics</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)] transition">
<div className="absolute -top-2 -left-2 text-indigo-500/20">
<i className="h-12 w-12" data-lucide="quote"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<span className="sr-only">5 star rating</span>
</div>
<p className="mt-4 text-lg md:text-xl font-medium tracking-tight text-zinc-100">“On‑device AI recognized parts and flagged defects. Line errors fell 63% while streaming 4K to our control room.”</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="cpu"></i> Edge AI
            </span>
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="broadcast"></i> 4K stream
            </span>
</div>
<div className="mt-6 border-t border-white/10"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Leo Park portrait" className="h-10 w-10 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=128&amp;h=128&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Leo Park</p>
<p className="text-xs text-zinc-400">CTO, ArcForge Robotics</p>
</div>
</div>
<span className="text-xs text-zinc-400">Robotics • QA</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)] transition">
<div className="absolute -top-2 -left-2 text-indigo-500/20">
<i className="h-12 w-12" data-lucide="quote"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<span className="sr-only">5 star rating</span>
</div>
<p className="mt-4 text-lg md:text-xl font-medium tracking-tight text-zinc-100">“The UI is discreet; voice commands just work. We guided clients through holographic annotations and closed faster.”</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="sparkles"></i> Annotations
            </span>
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="mic"></i> Voice
            </span>
</div>
<div className="mt-6 border-t border-white/10"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Sofia Martins portrait" className="h-10 w-10 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=128&amp;h=128&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Sofia Martins</p>
<p className="text-xs text-zinc-400">Design Lead, Candela Studios</p>
</div>
</div>
<span className="text-xs text-zinc-400">Design • XR</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)] transition">
<div className="absolute -top-2 -left-2 text-indigo-500/20">
<i className="h-12 w-12" data-lucide="quote"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<span className="sr-only">5 star rating</span>
</div>
<p className="mt-4 text-lg md:text-xl font-medium tracking-tight text-zinc-100">“Hands‑free checklists with gaze confirmation sped inspections. Audit issues dropped 54% in two quarters.”</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="eye"></i> Gaze confirm
            </span>
<span className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-indigo-400" data-lucide="clipboard-check"></i> Checklists
            </span>
</div>
<div className="mt-6 border-t border-white/10"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Noah Bennett portrait" className="h-10 w-10 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=128&amp;h=128&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Noah Bennett</p>
<p className="text-xs text-zinc-400">Operations, AeroLink</p>
</div>
</div>
<span className="text-xs text-zinc-400">Aviation • Safety</span>
</div>
</div>
</article>
</section>

<div className="mt-16 md:mt-20 flex flex-col items-center">
<p className="text-sm text-zinc-400">Join teams using edith to work smarter with real‑time vision and AI.</p>
<div className="mt-4 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-indigo-500/50 hover:bg-indigo-500 hover:ring-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 transition" href="#">
<i className="h-4 w-4 text-white" data-lucide="sparkles"></i>
          Start free trial
        </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:text-white hover:ring-indigo-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 transition" href="#">
<i className="h-4 w-4 text-zinc-300 group-hover:text-white" data-lucide="play-circle"></i>
          Watch 90s demo
        </a>
</div>
</div>
</div>


    </>
  );
}
