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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons({ attrs: { width: 24, height: 24, 'stroke-width': 1.5 } });
        }

        const open = document.getElementById('mobile-open');
        const menu = document.getElementById('mobile-menu');
        open?.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });

        // FAQ accordion
        document.querySelectorAll('[data-acc="item"]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const panel = btn.parentElement.querySelector('[data-acc="panel"]');
            if (!panel) return;
            const isHidden = panel.classList.contains('hidden');
            document.querySelectorAll('[data-acc="panel"]').forEach((p) => p.classList.add('hidden'));
            if (isHidden) panel.classList.remove('hidden');
          });
        });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs" width="100%"></iframe></div>

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40" style={{background: `radial-gradient(closest-side, rgba(139,92,246,0.55), rgba(10,10,18,0))`}}></div>
<div className="absolute bottom-0 right-0 w-[720px] h-[720px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30" style={{background: `radial-gradient(closest-side, rgba(99,102,241,0.45), rgba(10,10,18,0))`}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-amber-600 shadow-inner ring-1 ring-white/15">
<svg className="lucide lucide-asterisk h-4 w-4" data-lucide="asterisk" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Nova</span>
</a>
<nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 px-2">
<a className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white" href="#features">Features</a>
<a className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white" href="#reviews">Reviews</a>
<a className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white" href="#pricing">Pricing</a>
<a className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white" href="#download">Download</a>
</nav>
<div className="hidden md:flex items-center gap-2">
<a className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md" href="#">Log in</a>
<a className="group relative inline-flex items-center justify-center rounded-md text-white text-sm font-semibold shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition select-none" href="#download" style={{backgroundImage: `linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)`, padding: `1px`}}>
<span className="flex items-center gap-2 bg-[#0A0F17] rounded-md px-4 py-2 h-full w-full transition-colors">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Get the app
              </span>
</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10" id="mobile-open" type="button">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-black/60 backdrop-blur" id="mobile-menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex flex-col gap-1">
<a className="px-3 py-2 rounded-md text-sm text-slate-200 hover:bg-white/5" href="#features">Features</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-200 hover:bg-white/5" href="#reviews">Reviews</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-200 hover:bg-white/5" href="#pricing">Pricing</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-200 hover:bg-white/5" href="#download">Download</a>
<div className="h-px bg-white/10 my-1"></div>
<a className="px-3 py-2 rounded-md text-sm text-slate-200 hover:bg-white/5" href="#">Log in</a>
<a className="mt-1 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-br from-cyan-500 to-amber-600" href="#download">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Get the app
            </a>
</div>
</div>
</div>
</header>

<section className="relative bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20" id="home">
<div className="flex flex-col text-center items-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-violet-300" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            New: Realtime graph sync just landed
          </span>
<h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
            Think clearly. Capture instantly.
          </h1>
<p className="max-w-2xl sm:text-lg text-base text-slate-300 mt-4">
            Capture ideas, connect them with backlinks, and recall anything in milliseconds — offline‑first and private by default.
          </p>

<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
<a className="inline-flex items-center gap-3 rounded-xl bg-white text-neutral-900 px-4 py-2 shadow-sm hover:bg-neutral-100 transition" href="#download">
<svg className="lucide lucide-apple h-4 w-4" data-lucide="apple" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<span className="text-sm font-medium">Download on App Store</span>
</a>
<a className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition" href="#download">
<svg className="lucide lucide-smartphone h-4 w-4" data-lucide="smartphone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-sm font-medium text-slate-100">Get it on Android</span>
</a>
</div>

<div className="relative w-full mt-12 sm:mt-16">
<div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/20 to-amber-500/30 blur-2xl"></div>
<div className="relative mx-auto max-w-5xl ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Your day at a glance</h3>
<span className="text-xs text-slate-400 inline-flex items-center gap-1">
<svg className="lucide lucide-calendar-days h-4 w-4" data-lucide="calendar-days" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                      Today
                    </span>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center justify-between rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-600 ring-1 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-lightbulb h-4 w-4 text-white" data-lucide="lightbulb" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</span>
<div>
<p className="text-sm font-medium">Onboarding ideas v1.3</p>
<p className="text-xs text-slate-400">Linked to 8 notes</p>
</div>
</div>
<span className="text-xs text-slate-300">9:30 AM</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 ring-1 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-users h-4 w-4 text-white" data-lucide="users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<div>
<p className="text-sm font-medium">Sync with Lina</p>
<p className="text-xs text-slate-400">Zoom • Agenda auto‑generated</p>
</div>
</div>
<span className="text-xs text-slate-300">11:00 AM</span>
</div>
</div>
<div className="mt-5 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-purple-400/10 px-2 py-1 text-xs text-purple-300 ring-1 ring-purple-400/20">
<svg className="lucide lucide-lock h-3.5 w-3.5" data-lucide="lock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      Private
                    </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-indigo400/10 px-2 py-1 text-xs text-amber-300 ring-1 ring-amber-400/20">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                      On‑device
                    </span>
</div>
</div>

<div className="relative p-8 lg:p-10 border-t lg:border-l border-white/10">
<div className="relative mx-auto max-w-sm">
<div className="absolute -left-6 -top-6 h-40 w-40 rounded-full blur-2xl opacity-30" style={{background: `radial-gradient(closest-side, rgba(168,85,247,0.5), transparent)`}}></div>
<div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full blur-2xl opacity-30" style={{background: `radial-gradient(closest-side, rgba(99,102,241,0.5), transparent)`}}></div>

<div className="translate-y-6 translate-x-6">
</div>

<div className="relative">
<div className="rounded-[28px] ring-1 ring-white/10 bg-white/5 backdrop-blur p-4 shadow-2xl">
<div className="aspect-[9/19] ring-1 ring-white/10 overflow-hidden bg-black rounded-2xl">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="h-6 w-24 rounded-md bg-white/5 ring-1 ring-white/10"></div>
<div className="inline-flex items-center gap-2 text-[11px] text-slate-300">
<svg className="lucide lucide-search h-3.5 w-3.5" data-lucide="search" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                                Quick Find
                              </div>
</div>
<div className="mt-4 space-y-2">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<p className="text-[13px] text-slate-200">“Turn standup notes into action items.”</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<p className="text-[13px] text-slate-200">“Link insights across projects automatically.”</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<p className="text-[13px] text-slate-200">“Recall any meeting in milliseconds.”</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
<svg className="lucide lucide-badge-check h-3.5 w-3.5 text-emerald-300" data-lucide="badge-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                E2E encrypted
                              </span>
<span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-yellow-300" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Blazing fast
                              </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300">
<span className="inline-flex -space-x-2">
<span className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-white/10"></span>
<span className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-white/10"></span>
<span className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-white/10"></span>
</span>
<span className="">4.9/5 average from 1,200+ users</span>
</div>
</div>
</div>
</div>
</div>
<div className="h-2" id="demo"></div>
</div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-b from-black to-[#0A0A11]" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why teams love Nova</h2>
<p className="mt-2 text-slate-300">
            Local‑first. Private by default. Effortless across devices.
          </p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bolt h-5 w-5 text-violet-300" data-lucide="bolt" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Instant capture</h3>
<p className="mt-1 text-sm text-slate-300">Open anywhere. Works offline and syncs when you’re back.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-network w-[20px] h-[20px]" data-lucide="network" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(165, 180, 252)`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-4">Backlinks & graph</h3>
<p className="text-sm text-slate-300 mt-1">Type to connect ideas. Visualize relationships instantly.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-shield-check h-5 w-5 text-emerald-300" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">End‑to‑end encryption</h3>
<p className="mt-1 text-sm text-slate-300">Keys stay on your devices. Zero‑knowledge sync.</p>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-mic h-5 w-5 text-sky-300" data-lucide="mic" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Voice to notes</h3>
<p className="mt-1 text-sm text-slate-300">Transcribe and summarize in seconds.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-message-square h-5 w-5 text-pink-300" data-lucide="message-square" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Chat with notes</h3>
<p className="mt-1 text-sm text-slate-300">Ask anything. Get precise context.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-wand-2 h-5 w-5 text-amber-300" data-lucide="wand-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Custom prompts</h3>
<p className="mt-1 text-sm text-slate-300">Save, reuse, and share with your team.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by fast‑moving teams</h2>
<p className="mt-2 text-slate-300">What users say after switching to Nova</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15"></span>
<div>
<p className="text-sm font-medium">Maya R.</p>
<p className="text-xs text-slate-400">Product Lead</p>
</div>
</div>
<p className="mt-3 text-sm text-slate-200">“Backlinks + search = magic. I can find any decision in seconds.”</p>
<div className="mt-3 text-amber-300 text-sm">★★★★★</div>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15"></span>
<div>
<p className="text-sm font-medium">Leo V.</p>
<p className="text-xs text-slate-400">Founder</p>
</div>
</div>
<p className="mt-3 text-sm text-slate-200">“Security I can trust, speed I can feel. Nova replaced three tools.”</p>
<div className="mt-3 text-amber-300 text-sm">★★★★★</div>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15"></span>
<div>
<p className="text-sm font-medium">Sofia K.</p>
<p className="text-xs text-slate-400">Designer</p>
</div>
</div>
<p className="mt-3 text-sm text-slate-200">“Voice to notes is unreal. Meetings turn into tasks automatically.”</p>
<div className="mt-3 text-amber-300 text-sm">★★★★★</div>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, fair pricing</h2>
<p className="mt-2 text-slate-300">Start free. Upgrade when you’re ready.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Free</h3>
<span className="text-xs rounded-full px-2 py-1 bg-white/10 text-slate-300 ring-1 ring-white/10">Get started</span>
</div>
<p className="mt-2 text-slate-300 text-sm">For individuals capturing ideas everywhere.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$0</span>
<span className="text-sm text-slate-400">/ forever</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited notes
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Local‑first sync
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Backlinks & basic graph
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition" href="#download">
              Start free
            </a>
</div>

<div className="ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] rounded-3xl p-6 backdrop-blur flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Pro</h3>
<span className="text-xs rounded-full px-2 py-1 bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-400/30">Most popular</span>
</div>
<p className="mt-2 text-slate-300 text-sm">For teams who need speed, security, and AI assistance.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$8</span>
<span className="text-sm text-slate-400">/ user / mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                End‑to‑end encrypted sync
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Advanced graph + filters
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                AI summaries & chat
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Priority support
              </li>
</ul>
<a className="inline-flex items-center justify-center gap-2 hover:opacity-95 transition text-sm font-semibold text-white bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl mt-6 pt-2 pr-4 pb-2 pl-4 shadow-lg" href="#download">
              Try Pro
            </a>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently asked</h2>
<p className="mt-2 text-slate-300">Everything you need to know to get started</p>
</div>
<div className="mt-8 space-y-3">

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<button className="w-full flex items-center justify-between px-5 py-4 text-left" data-acc="item" type="button">
<span className="text-sm font-medium">How does Nova store my data?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-300" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-5 pb-4 hidden" data-acc="panel">
<p className="text-sm text-slate-300">
                Your notes are encrypted end‑to‑end. Keys never leave your devices. We can’t read your content.
              </p>
</div>
</div>
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<button className="w-full flex items-center justify-between px-5 py-4 text-left" data-acc="item" type="button">
<span className="text-sm font-medium">Is there an offline mode?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-300" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-5 pb-4 hidden" data-acc="panel">
<p className="text-sm text-slate-300">
                Yes. Nova is local‑first and works without internet. It syncs when a connection is available.
              </p>
</div>
</div>
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<button className="w-full flex items-center justify-between px-5 py-4 text-left" data-acc="item" type="button">
<span className="text-sm font-medium">Which platforms are supported?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-300" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-5 pb-4 hidden" data-acc="panel">
<p className="text-sm text-slate-300">
                iOS, Android, macOS, Windows, and Web. Your workspace stays in sync across devices.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="download">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-8 text-center backdrop-blur">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Start organizing your ideas today</h2>
<p className="mt-2 text-slate-300">Free for individuals. Upgrade when you’re ready.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 transform-gpu transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] text-sm font-semibold text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-300 via-pink-400 to-purple-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="#">
              Create your workspace
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5" href="#pricing">
              Compare plans
              <svg className="lucide lucide-credit-card h-4 w-4" data-lucide="credit-card" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-amber-600">
<svg className="lucide lucide-asterisk h-4 w-4 text-white" data-lucide="asterisk" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-sm font-medium text-slate-300">© 2025 Nova Labs</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-400">
<a className="hover:text-slate-200" href="#">Privacy</a>
<a className="hover:text-slate-200" href="#">Terms</a>
<a className="hover:text-slate-200" href="#">Status</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
