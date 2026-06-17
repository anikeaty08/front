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



    // Icon stroke width
    (function () {
      const icons = document.querySelectorAll(".iconify");
      icons.forEach(i => i.setAttribute("data-stroke-width", "1.5"));
    })();

    // Sequenced fade animation: ease-in, repeat twice, reverse direction
    (function () {
      const items = Array.from(document.querySelectorAll(".feature-item"));
      const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) return;

      const duration = 560; // ms
      const baseDelay = 90; // ms
      const extraDelayFromAttr = (el) => Number(el.getAttribute("data-delay") || 0);

      items.forEach((el, idx) => {
        el.animate(
          [
            { opacity: 0, transform: "translateY(10px)", filter: "blur(3px)" },
            { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }
          ],
          {
            duration,
            delay: baseDelay + extraDelayFromAttr(el) + idx * 10,
            easing: "ease-in",
            iterations: 2,
            direction: "reverse",
            fill: "both"
          }
        );
      });
    })();
  
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
      
<main className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-14">

<section className="mb-8 sm:mb-10">
<div className="flex flex-col gap-4 sm:gap-5">
<div className="inline-flex items-center gap-3">
<div className="flex items-center gap-2">
<span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/90"></span>
<span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<div className="text-xs text-zinc-400 font-medium" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
            MAC APP • FEATURES LIST
          </div>
</div>
<h1 className="text-5xl sm:text-6xl font-semibold tracking-widest text-zinc-50 leading-[1.02]" style={{fontFamily: '\'Playfair Display\', serif'}}>
          A quieter way to ship
        </h1>
<p className="text-xl sm:text-2xl text-zinc-300/90 max-w-3xl leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
          Dark, focused, and beautifully restrained—each feature is designed to feel native, fluid, and deliberate.
        </p>
</div>
</section>

<section>
<div className="relative rounded-2xl border border-red-800/80 bg-zinc-950/50 backdrop-blur-xl overflow-hidden" style={{boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}}>

<div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-red-800/50 bg-zinc-950/60">
<div className="flex items-center gap-2">
<span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/90"></span>
<span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-red-800/50 bg-zinc-900/60 px-3 py-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500"></span>
<span className="text-xs text-zinc-300/90" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                Features — Overview
              </span>
</div>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-height="18" data-icon="lucide:search" data-width="18"></span>
<span className="iconify" data-height="18" data-icon="lucide:sliders-horizontal" data-width="18"></span>
</div>
</div>

<div className="p-4 sm:p-6 md:p-8">

<div className="mb-5 sm:mb-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-widest text-zinc-50" style={{fontFamily: '\'Playfair Display\', serif'}}>
              The essentials, refined
            </h2>
<p className="mt-2 text-base sm:text-lg text-zinc-300/85 max-w-2xl leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
              A vertically stacked list with just enough structure—soft separators, subtle depth, violet highlights.
            </p>
</div>

<ul className="space-y-3 sm:space-y-4">

<li className="feature-item group rounded-xl border border-red-800/60 bg-zinc-900/40 hover:bg-zinc-900/55 transition-colors" data-delay="0">
<div className="flex items-start gap-4 p-4 sm:p-5">
<div className="relative mt-0.5">
<div className="h-11 w-11 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
<span className="iconify text-violet-400" data-height="22" data-icon="lucide:shield-check" data-width="22"></span>
</div>
<div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-zinc-950 border border-red-800/70 flex items-center justify-center">
<span className="iconify text-violet-400" data-height="14" data-icon="lucide:check" data-width="14"></span>
</div>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Private by default
                    </h3>
<span className="text-xs text-violet-300/90 border border-violet-500/25 bg-violet-500/10 rounded-full px-2.5 py-1" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                      Security
                    </span>
</div>
<p className="mt-2 text-base sm:text-lg text-zinc-300/85 leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                    Sensitive data stays local-first with careful permissioning, transparent controls, and graceful fallbacks.
                  </p>
<div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:lock" data-width="16"></span>
                      Encrypted at rest
                    </span>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:fingerprint" data-width="16"></span>
                      Biometric unlock
                    </span>
</div>
</div>
</div>
</li>

<li className="feature-item group rounded-xl border border-red-800/60 bg-zinc-900/40 hover:bg-zinc-900/55 transition-colors" data-delay="120">
<div className="flex items-start gap-4 p-4 sm:p-5">
<div className="h-11 w-11 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mt-0.5">
<span className="iconify text-violet-400" data-height="22" data-icon="lucide:sparkles" data-width="22"></span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      iOS-feel interactions
                    </h3>
<span className="text-xs text-violet-300/90 border border-violet-500/25 bg-violet-500/10 rounded-full px-2.5 py-1" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                      UX
                    </span>
</div>
<p className="mt-2 text-base sm:text-lg text-zinc-300/85 leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                    Soft translucency, precise spacing, and lightweight motion—so the interface stays present, never loud.
                  </p>
<div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:layers" data-width="16"></span>
                      Depth &amp; blur
                    </span>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:mouse-pointer-2" data-width="16"></span>
                      Precise affordances
                    </span>
</div>
</div>
</div>
</li>

<li className="feature-item group rounded-xl border border-red-800/60 bg-zinc-900/40 hover:bg-zinc-900/55 transition-colors" data-delay="240">
<div className="flex items-start gap-4 p-4 sm:p-5">
<div className="h-11 w-11 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mt-0.5">
<span className="iconify text-violet-400" data-height="22" data-icon="lucide:rocket" data-width="22"></span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Fast, even under load
                    </h3>
<span className="text-xs text-violet-300/90 border border-violet-500/25 bg-violet-500/10 rounded-full px-2.5 py-1" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                      Performance
                    </span>
</div>
<p className="mt-2 text-base sm:text-lg text-zinc-300/85 leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                    Optimized rendering and predictable state keep scrolling, searching, and syncing consistently smooth.
                  </p>
<div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:gauge" data-width="16"></span>
                      Stable frame pacing
                    </span>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:refresh-cw" data-width="16"></span>
                      Incremental sync
                    </span>
</div>
</div>
</div>
</li>

<li className="feature-item group rounded-xl border border-red-800/60 bg-zinc-900/40 hover:bg-zinc-900/55 transition-colors" data-delay="360">
<div className="flex items-start gap-4 p-4 sm:p-5">
<div className="h-11 w-11 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mt-0.5">
<span className="iconify text-violet-400" data-height="22" data-icon="lucide:wand-2" data-width="22"></span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Thoughtful automation
                    </h3>
<span className="text-xs text-violet-300/90 border border-violet-500/25 bg-violet-500/10 rounded-full px-2.5 py-1" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                      Workflow
                    </span>
</div>
<p className="mt-2 text-base sm:text-lg text-zinc-300/85 leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                    Small shortcuts that compound: smart defaults, quick actions, and clean summaries when you need them.
                  </p>
<div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:zap" data-width="16"></span>
                      Quick actions
                    </span>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:calendar-clock" data-width="16"></span>
                      Scheduled runs
                    </span>
</div>
</div>
</div>
</li>

<li className="feature-item group rounded-xl border border-red-800/60 bg-zinc-900/40 hover:bg-zinc-900/55 transition-colors" data-delay="480">
<div className="flex items-start gap-4 p-4 sm:p-5">
<div className="h-11 w-11 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mt-0.5">
<span className="iconify text-violet-400" data-height="22" data-icon="lucide:share-2" data-width="22"></span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Share without noise
                    </h3>
<span className="text-xs text-violet-300/90 border border-violet-500/25 bg-violet-500/10 rounded-full px-2.5 py-1" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                      Collaboration
                    </span>
</div>
<p className="mt-2 text-base sm:text-lg text-zinc-300/85 leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
                    Generate clean exports and links with sensible permissions—so handoffs stay elegant and controlled.
                  </p>
<div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:file-down" data-width="16"></span>
                      Export presets
                    </span>
<span className="inline-flex items-center gap-2">
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:user-round-check" data-width="16"></span>
                      Role-based access
                    </span>
</div>
</div>
</div>
</li>
</ul>

<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-xs text-zinc-400 leading-relaxed" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
              Tip: the list animates in sequence and reverses direction, repeating twice with ease-in timing.
            </div>
<button className="inline-flex items-center gap-2 rounded-xl border border-red-800/70 bg-zinc-950/40 hover:bg-zinc-950/60 transition-colors px-4 py-2.5 text-sm text-zinc-100" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
<span classiconify="" data-height="18" data-icon="lucide:arrow-right" data-width="18" text-violet-400"=""></span>
              Explore details
            </button>
</div>
</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/40"></div>
<div className="absolute -top-24 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full blur-3xl bg-violet-500/10"></div>
</div>
</div>
</section>
</main>


    </>
  );
}
