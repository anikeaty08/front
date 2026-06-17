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
if (window.lucide) {
window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="fixed inset-0 flex flex-col">

<header className="flex md:px-6 bg-[#12100F]/90 h-16 border-white/10 border-b pr-4 pl-4 backdrop-blur-sm gap-x-4 gap-y-4 items-center">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-[#1464FF] grid place-items-center ring-1 ring-blue-500/40 shadow-[0_0_0_2px_rgba(20,100,255,0.15)]">
<span className="text-xs tracking-tight font-medium" style={{fontFamily: 'var(--font-display)'}}>OE</span>
</div>
<div className="flex flex-col -space-y-0.5">
<span className="text-[18px] tracking-tight leading-none" style={{fontFamily: 'var(--font-display)'}}>Orbital</span>
<span className="text-[12px] text-neutral-400 leading-none" style={{fontFamily: 'var(--font-body)'}}>Editor</span>
</div>
</div>

<nav className="hidden md:flex flex-1 items-center justify-center">
<div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] p-1">
<button className="px-3.5 py-1.5 rounded-full text-[13px] leading-none transition-all duration-200 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50" style={{fontFamily: 'var(--font-body)'}}>
              Orbital Social
            </button>
<button className="px-3.5 py-1.5 rounded-full text-[13px] leading-none transition-all duration-200 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50" style={{fontFamily: 'var(--font-body)'}}>
              Orbital Branding
            </button>
<button className="px-3.5 py-1.5 rounded-full text-[13px] leading-none text-white bg-[#1464FF] shadow-[0_0_0_1px_rgba(20,100,255,0.6)_inset,0_4px_12px_-2px_rgba(20,100,255,0.35)] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/60" style={{fontFamily: 'var(--font-body)'}}>
              Orbital Shadcn
            </button>
</div>
</nav>

<div className="ml-auto flex items-center gap-1.5">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-neutral-300 transition-all duration-200 hover:text-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50">
<svg className="lucide lucide-graduation-cap h-4.5 w-4.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-neutral-300 transition-all duration-200 hover:text-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50">
<svg className="lucide lucide-settings h-4.5 w-4.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md border border-blue-500/50 bg-[#1464FF] px-3 text-[13px] font-medium text-white shadow-[0_6px_20px_-6px_rgba(20,100,255,0.55)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/60" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-square-arrow-out-up-right h-4.5 w-4.5" data-lucide="square-arrow-out-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><path d="m21 3-9 9"></path><path d="M15 3h6v6"></path></svg>
            Export
          </button>
<button className="ml-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] ring-1 ring-white/5 transition-all duration-200 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50">
<svg className="lucide lucide-user h-4.5 w-4.5 text-neutral-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</header>

<main className="flex-1 overflow-hidden">
<div className="h-full w-full flex">

<section className="flex-1 min-w-0 flex flex-col">

<div className="h-14 border-b border-white/10 bg-white/[0.02] backdrop-blur-sm px-4 md:px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-[18px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>Preview</span>
<span className="text-xs text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Dynamic Components · Update in Real-time</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-neutral-300 transition transform duration-200 hover:text-white hover:bg-white/10 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50">
<svg className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<div className="px-2.5 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-[13px] text-neutral-200" style={{fontFamily: 'var(--font-body)'}}>100%</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-neutral-300 transition transform duration-200 hover:text-white hover:bg-white/10 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-auto p-4 md:p-6">
<div className="md:p-6 bg-gradient-to-b from-white/[0.02] to-white/[0.01] w-full h-full border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4">

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 md:p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-[16px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>SHADCN:</span>
<span className="text-xs text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Buttons, Cards, Tabs, Charts</span>
</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>Components change based on product</span>
</div>

<div className="flex flex-wrap items-center gap-2.5 mb-4">
<button className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/40 bg-[#1464FF] px-3 py-1.5 text-[13px] text-white transition transform duration-200 hover:brightness-110 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/50" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Primary
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[13px] text-neutral-200 transition transform duration-200 hover:bg-white/10 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Secondary
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-transparent px-3 py-1.5 text-[13px] text-neutral-300 transition transform duration-200 hover:bg-white/5 hover:text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/30" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-circle h-4 w-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Ghost
                      </button>
</div>

<div className="grid sm:grid-cols-2 gap-3">

<div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Tabs</label>
<div className="mt-1.5">
<div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] p-1">
<button className="px-3 py-1.5 rounded-md text-[13px] text-white bg-white/10 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Overview</button>
<button className="px-3 py-1.5 rounded-md text-[13px] text-neutral-300 border border-transparent transition hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Analytics</button>
<button className="px-3 py-1.5 rounded-md text-[13px] text-neutral-300 border border-transparent transition hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Settings</button>
</div>
<div className="mt-2 rounded-md border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-layout-dashboard h-4.5 w-4.5 text-neutral-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-[13px] text-neutral-200" style={{fontFamily: 'var(--font-body)'}}>Overview content area</span>
</div>
</div>
</div>
</div>

<div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Card</label>
<div className="mt-1.5 rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[13px] text-neutral-300" style={{fontFamily: 'var(--font-body)'}}>Active Users</div>
<div className="text-[18px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>2,384</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="20" stroke="currentColor" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                              +4.2%
                            </span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5">
<div className="h-2 w-3/4 rounded-full bg-[#1464FF]"></div>
</div>
</div>
</div>
</div>

<div className="mt-3 grid sm:grid-cols-2 gap-3">

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<span className="text-[13px] text-neutral-300" style={{fontFamily: 'var(--font-body)'}}>Profile Card</span>
<span className="inline-flex items-center gap-1 rounded-full border border-blue-500/40 bg-blue-500/15 px-2 py-0.5 text-[11px] text-blue-300" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-badge-check h-3.5 w-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Pro
                          </span>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-white/10 grid place-items-center ring-1 ring-white/10">
<svg className="lucide lucide-user h-4 w-4 text-neutral-300" data-lucide="user" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-[13px] text-white/90" style={{fontFamily: 'var(--font-body)'}}>Alex Johnson</div>
<div className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Interface Designer</div>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<span className="text-[13px] text-neutral-300" style={{fontFamily: 'var(--font-body)'}}>Bar Chart</span>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>Last 7 days</span>
</div>
<div className="mt-3 h-36 rounded-md border border-white/10 bg-white/[0.02] p-3">
<div className="h-full w-full flex items-end justify-between gap-2">
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-6 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-14 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-10 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-20 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-12 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-24 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
<div className="flex-1 grid place-items-end">
<div className="w-full max-w-[18px] bg-white/10 rounded-sm">
<div className="h-16 bg-[#1464FF] rounded-sm"></div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 md:p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-[16px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>SOCIAL:</span>
<span className="text-xs text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Instagram Post, Twitter Card, LinkedIn Post</span>
</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>Clean • Spacious • Uncluttered</span>
</div>
<div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-3">

<div className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
<div className="aspect-square overflow-hidden">
<img alt="Instagram mock" className="h-full w-full object-cover scale-[1.02]" src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-instagram h-4.5 w-4.5 text-neutral-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="text-[13px]" style={{fontFamily: 'var(--font-body)'}}>Instagram Post</span>
</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>1080×1080</span>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Twitter mock" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-twitter h-4.5 w-4.5 text-neutral-400" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span className="text-[13px]" style={{fontFamily: 'var(--font-body)'}}>Twitter Card</span>
</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>1200×675</span>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden sm:col-span-2">
<div className="aspect-[3/1] overflow-hidden">
<img alt="LinkedIn mock" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-linkedin h-4.5 w-4.5 text-neutral-400" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="text-[13px]" style={{fontFamily: 'var(--font-body)'}}>LinkedIn Post</span>
</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>1128×376</span>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 md:p-5 xl:col-span-2">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-[16px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>BRANDING:</span>
<span className="text-xs text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Logo Showcase, Color Palette, Typography Scale, Spacing System</span>
</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>Scroll for more</span>
</div>
<div className="grid md:grid-cols-3 gap-4">

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-[13px] text-neutral-300 mb-3" style={{fontFamily: 'var(--font-body)'}}>Logo Showcase</div>
<div className="h-28 rounded-md bg-gradient-to-br from-white/[0.04] to-white/[0.02] grid place-items-center ring-1 ring-white/10">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-lg bg-[#1464FF] grid place-items-center ring-1 ring-blue-500/40">
<span className="text-sm tracking-tight font-medium text-white" style={{fontFamily: 'var(--font-display)'}}>OE</span>
</div>
<span className="text-[18px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>Orbital</span>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-[13px] text-neutral-300 mb-3" style={{fontFamily: 'var(--font-body)'}}>Color Palette</div>
<div className="grid grid-cols-5 gap-2">
<div className="h-10 rounded-md bg-[#1464FF] ring-1 ring-blue-500/40"></div>
<div className="h-10 rounded-md bg-[#4ECDC4] ring-1 ring-teal-400/40"></div>
<div className="h-10 rounded-md bg-[#12100F] ring-1 ring-white/10"></div>
<div className="h-10 rounded-md bg-[#FAFAFA] ring-1 ring-white/10"></div>
<div className="h-10 rounded-md bg-white ring-1 ring-white/10"></div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-[13px] text-neutral-300 mb-3" style={{fontFamily: 'var(--font-body)'}}>Typography &amp; Spacing</div>
<div className="space-y-2">
<div className="text-[18px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>Heading Font — Questrial</div>
<div className="text-[13px] text-neutral-300" style={{fontFamily: 'var(--font-body)'}}>Body Font — Overused Grotesk</div>
<div className="mt-2 flex items-center gap-2">
<div className="h-2 w-12 rounded-md bg-white/10"></div>
<div className="h-2 w-20 rounded-md bg-white/10"></div>
<div className="h-2 w-28 rounded-md bg-white/10"></div>
</div>
<div className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>8px base grid</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="hidden md:flex md:w-[320px] lg:w-[360px] flex-col border-l border-white/10 bg-white/[0.02] backdrop-blur-sm">

<div className="h-14 flex items-center px-3 border-b border-white/10">
<div className="flex items-center gap-2 overflow-x-auto pr-1">
<button className="px-3 py-1.5 rounded-full text-[12px] border border-blue-500/50 bg-[#1464FF] text-white shadow-[0_0_0_1px_rgba(20,100,255,0.6)_inset] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/60" style={{fontFamily: 'var(--font-body)'}}>Colors</button>
<button className="px-3 py-1.5 rounded-full text-[12px] border border-white/10 bg-white/[0.03] text-neutral-200 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Typography</button>
<button className="px-3 py-1.5 rounded-full text-[12px] border border-white/10 bg-white/[0.03] text-neutral-200 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Spacing</button>
<button className="px-3 py-1.5 rounded-full text-[12px] border border-white/10 bg-white/[0.03] text-neutral-200 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Shadows</button>
<button className="px-3 py-1.5 rounded-full text-[12px] border border-white/10 bg-white/[0.03] text-neutral-200 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Borders</button>
<button className="px-3 py-1.5 rounded-full text-[12px] border border-white/10 bg-white/[0.03] text-neutral-200 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>Strings</button>
</div>
</div>

<div className="px-4 py-3 border-b border-white/10">
<div className="text-[18px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>Colors</div>
<div className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Adjust brand and UI palette</div>
</div>

<div className="flex-1 overflow-auto p-4 space-y-5">

<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Primary Color</label>
<div className="mt-2 flex items-center gap-2">
<div className="h-9 w-9 rounded-md border border-blue-500/50 bg-[#1464FF] shadow-[inset_0_0_0_1px_rgba(20,100,255,0.6)]"></div>
<div className="flex-1 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2 transition hover:border-white/20 focus-within:ring-2 focus-within:ring-[#1464FF]/40">
<svg className="lucide lucide-hash h-4 w-4 text-neutral-400" data-lucide="hash" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
<input className="w-full bg-transparent text-[13px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none" style={{fontFamily: 'var(--font-body)'}} value="#1464FF"/>
</div>
</div>
</div>
<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Secondary Color</label>
<div className="mt-2 flex items-center gap-2">
<div className="h-9 w-9 rounded-md border border-teal-400/40 bg-[#4ECDC4]"></div>
<div className="flex-1 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2 transition hover:border-white/20 focus-within:ring-2 focus-within:ring-[#1464FF]/40">
<svg className="lucide lucide-hash h-4 w-4 text-neutral-400" data-lucide="hash" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
<input className="w-full bg-transparent text-[13px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none" style={{fontFamily: 'var(--font-body)'}} value="#4ECDC4"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-5">
<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Background Dark</label>
<div className="mt-2 flex items-center gap-2">
<div className="h-9 w-9 rounded-md border border-white/15 bg-[#12100F]"></div>
<div className="flex-1 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2 transition hover:border-white/20 focus-within:ring-2 focus-within:ring-[#1464FF]/40">
<svg className="lucide lucide-hash h-4 w-4 text-neutral-400" data-lucide="hash" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
<input className="w-full bg-transparent text-[13px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none" style={{fontFamily: 'var(--font-body)'}} value="#12100F"/>
</div>
</div>
</div>
<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Background Light</label>
<div className="mt-2 flex items-center gap-2">
<div className="h-9 w-9 rounded-md border border-white/20 bg-[#FAFAFA]"></div>
<div className="flex-1 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2 transition hover:border-white/20 focus-within:ring-2 focus-within:ring-[#1464FF]/40">
<svg className="lucide lucide-hash h-4 w-4 text-neutral-400" data-lucide="hash" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
<input className="w-full bg-transparent text-[13px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none" style={{fontFamily: 'var(--font-body)'}} value="#FAFAFA"/>
</div>
</div>
</div>
<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Text Primary</label>
<div className="mt-2 flex items-center gap-2">
<div className="h-9 w-9 rounded-md border border-white/20 bg-white"></div>
<div className="flex-1 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2 transition hover:border-white/20 focus-within:ring-2 focus-within:ring-[#1464FF]/40">
<svg className="lucide lucide-hash h-4 w-4 text-neutral-400" data-lucide="hash" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
<input className="w-full bg-transparent text-[13px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none" style={{fontFamily: 'var(--font-body)'}} value="#FFFFFF"/>
</div>
</div>
</div>
</div>

<div className="h-px bg-white/10 my-1"></div>

<div className="opacity-60">
<div className="flex items-center justify-between">
<div className="text-[14px] text-neutral-300" style={{fontFamily: 'var(--font-body)'}}>Typography</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>Inactive</span>
</div>
<div className="mt-2 grid grid-cols-1 gap-3">
<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Heading Font</label>
<div className="mt-1.5 flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
<span className="text-[13px]" style={{fontFamily: 'var(--font-body)'}}>Questrial</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Body Font</label>
<div className="mt-1.5 flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
<span className="text-[13px]" style={{fontFamily: 'var(--font-body)'}}>Overused Grotesk</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="opacity-60">
<div className="flex items-center justify-between">
<div className="text-[14px] text-neutral-300" style={{fontFamily: 'var(--font-body)'}}>Spacing</div>
<span className="text-[11px] text-neutral-500" style={{fontFamily: 'var(--font-body)'}}>Inactive</span>
</div>
<div className="mt-2">
<label className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Base Spacing</label>
<div className="mt-1.5">
<div className="flex items-center gap-3">
<div className="relative flex-1 h-2 rounded-full bg-white/10">
<div className="absolute left-0 top-0 h-2 w-1/2 rounded-full bg-[#1464FF]"></div>
</div>
<div className="min-w-[72px] text-[13px] text-neutral-200 px-2 py-1 rounded-md border border-white/10 bg-white/[0.02]" style={{fontFamily: 'var(--font-body)'}}>16px</div>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>

<footer className="h-14 border-t border-white/10 bg-[#12100F]/90 backdrop-blur-sm px-4 md:px-6 flex items-center">

<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-[13px] text-neutral-400 cursor-not-allowed opacity-50" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-undo-2 h-4 w-4" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg> Undo
          </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-[13px] text-neutral-400 cursor-not-allowed opacity-50" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-redo-2 h-4 w-4" data-lucide="redo-2" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 14 5-5-5-5"></path><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg> Redo
          </button>
</div>

<div className="mx-auto text-[12px] text-neutral-400 flex items-center gap-2" style={{fontFamily: 'var(--font-body)'}}>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]"></span>
            Auto-saved 2s ago
          </span>
</div>

<div className="ml-auto flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/50 bg-[#1464FF] px-3 py-1.5 text-[13px] text-white transition transform duration-200 hover:brightness-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/60" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-save h-4 w-4" data-lucide="save" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save
          </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.02] px-3 py-1.5 text-[13px] text-neutral-200 transition transform duration-200 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1464FF]/40" style={{fontFamily: 'var(--font-body)'}}>
<svg className="lucide lucide-link-2 h-4 w-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg> Share URL
          </button>
</div>
</footer>
</div>

<div className="pointer-events-none fixed top-4 right-4 z-50 space-y-2">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-opacity duration-500">
<svg className="lucide lucide-check-circle-2 h-4.5 w-4.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-[13px]" style={{fontFamily: 'var(--font-body)'}}>Design auto-saved</div>
</div>
</div>

<div className="md:hidden fixed bottom-0 inset-x-0 z-40 rounded-t-2xl border-t border-white/10 bg-[#0F0E0D]/95 backdrop-blur-sm">
<div className="py-2">
<div className="mx-auto h-1 w-10 rounded-full bg-white/15"></div>
</div>
<div className="px-4 pb-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[16px] tracking-tight text-white" style={{fontFamily: 'var(--font-display)'}}>Editor</div>
<div className="text-[12px] text-neutral-400" style={{fontFamily: 'var(--font-body)'}}>Colors · Typography · Spacing</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-full text-[12px] border border-blue-500/50 bg-[#1464FF] text-white shadow-[0_0_0_1px_rgba(20,100,255,0.6)_inset]" style={{fontFamily: 'var(--font-body)'}}>Colors</button>
<button className="px-3 py-1.5 rounded-full text-[12px] border border-white/10 bg-white/[0.03] text-neutral-200" style={{fontFamily: 'var(--font-body)'}}>Typography</button>
</div></div></div></div>
    </>
  );
}
