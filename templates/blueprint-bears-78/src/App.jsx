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



      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      document.getElementById('y').textContent = new Date().getFullYear();
    
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 80% -10%, rgba(59, 130, 246, 0.20), rgba(59, 130, 246, 0) 60%), radial-gradient(900px 700px at -10% 10%, rgba(14, 165, 233, 0.20), rgba(14, 165, 233, 0) 55%), linear-gradient(180deg, #0b1220 0%, #0b1220 40%, #0a1020 100%)'}}></div>

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(800px 400px at 50% -10%, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%)'}}></div>

<div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen" style="
        background-image:
          radial-gradient(1px 1px at 8% 15%, rgba(255,255,255,0.65) 50%, transparent 51%),
          radial-gradient(1.2px 1.2px at 22% 75%, rgba(255,255,255,0.5) 50%, transparent 51%),
          radial-gradient(1px 1px at 42% 35%, rgba(255,255,255,0.42) 50%, transparent 51%),
          radial-gradient(1.4px 1.4px at 65% 20%, rgba(255,255,255,0.55) 50%, transparent 51%),
          radial-gradient(1.1px 1.1px at 78% 70%, rgba(255,255,255,0.5) 50%, transparent 51%),
          radial-gradient(1.2px 1.2px at 90% 30%, rgba(255,255,255,0.45) 50%, transparent 51%),
          radial-gradient(1px 1px at 15% 55%, rgba(255,255,255,0.45) 50%, transparent 51%),
          radial-gradient(1px 1px at 55% 82%, rgba(255,255,255,0.5) 50%, transparent 51%);
        background-size: cover;"></div>

<div className="absolute right-[-10%] top-[20%] h-72 w-72 rounded-xl blur-3xl opacity-25" style={{background: 'conic-gradient(from 30deg, rgba(59,130,246,0.25), rgba(14,165,233,0.15), transparent 60%)'}}></div>
</div>

<div className="relative z-10">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-center gap-2 px-4 py-2">
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
<span className="text-xs text-white/70">New</span>
<span className="mx-2 h-3 w-px inline-block bg-white/15 align-middle"></span>
<span className="text-xs text-white/90">Watch our 3‑minute VSL</span>
</div>
</div>
</div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3 mt-3">
<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-lg border border-white/15 bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-semibold tracking-tight">
<span>BB</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-white font-semibold tracking-tight">Blueprint Bears</span>
<span className="text-[11px] text-white/60 -mt-0.5">Polar Web Design</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-7">
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-white/80 hover:text-white transition-colors" href="#about">About</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all px-3 py-2 text-sm" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-500/20 hover:bg-blue-500/25 hover:border-blue-400/50 text-blue-100 transition-all px-3 py-2 text-sm" href="#vsl">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span>Watch VSL</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative z-10 pt-10 sm:pt-16 lg:pt-20" id="vsl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 mb-4">
<svg className="lucide lucide-snowflake w-4 h-4" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
<span className="text-xs text-white/80">Polar‑grade performance</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Crystal‑clear web design.
              <span className="text-white/70">Blueprinted to convert.</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-white/75">
              We craft fast, glassy, conversion‑focused websites that feel like fresh snow and perform like ice. Watch the 3‑minute VSL to see how we design and ship in days, not months.
            </p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/20 hover:bg-blue-500/25 hover:border-blue-400/60 text-blue-100 transition-all px-5 py-3" href="#contact">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-medium">Start Your Blueprint</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all px-5 py-3" href="#vsl-video">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium">Watch the VSL</span>
</a>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 sm:gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm">Lighthouse 95+ Scores</span>
</div>
<div className="mt-2 text-[13px] text-white/60">Performance, SEO, Accessibility</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="text-sm">Glassy Micro‑interactions</span>
</div>
<div className="mt-2 text-[13px] text-white/60">No heavy scripts, smooth by default</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm">Design in 7‑14 Days</span>
</div>
<div className="mt-2 text-[13px] text-white/60">Rapid sprints, clear milestones</div>
</div>
</div>
</div>

<div className="relative" id="vsl-video">
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(600px 200px at 50% -20%, rgba(255,255,255,0.08), transparent 60%)'}}></div>
<div className="aspect-video">
<video className="w-full h-full object-cover" controls="" playsinline="" poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1920&amp;auto=format&amp;fit=crop">
<source src="https://cdn.coverr.co/videos/coverr-fog-in-the-forest-1610/1080p.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-t from-[#0b1220]/80 to-transparent">
<div className="flex items-center gap-2">
<svg className="lucide lucide-snowflake w-4 h-4 text-white/90" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
<span className="text-xs sm:text-sm text-white/90">Blueprint Bears — 3:07 VSL</span>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500/20 hover:bg-blue-500/25 hover:border-blue-400/60 text-blue-100 transition-all px-3 py-1.5 text-xs" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Book a Call</span>
</a>
</div>
</div>

<div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl px-3 py-2 shadow-lg">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-white/90">14‑Day Launch Guarantee</span>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 sm:px-6 py-4">
<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
<span className="text-xs sm:text-sm text-white/60">Trusted by founders and teams at</span>
<div className="flex items-center gap-6 sm:gap-8 text-white/50">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-white/10 border border-white/10 flex items-center justify-center text-[10px] tracking-tight">AL</div>
<span className="text-sm">Arctic Labs</span>
</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-white/10 border border-white/10 flex items-center justify-center text-[10px] tracking-tight">NP</div>
<span className="text-sm">NorthPeak</span>
</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-white/10 border border-white/10 flex items-center justify-center text-[10px] tracking-tight">GL</div>
<span className="text-sm">Glacier.io</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="h-6 w-6 rounded bg-white/10 border border-white/10 flex items-center justify-center text-[10px] tracking-tight">SN</div>
<span className="text-sm">Snowline</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Glassy precision. Polar speed.</h2>
<p className="mt-2 text-white/70">Everything you need to launch a high‑performing site that feels light and flows.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all px-3 py-2 text-sm" href="#pricing">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span>Compare Packages</span>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium">Blueprint Sprint</span>
</div>
<p className="mt-2 text-sm text-white/70">Strategy, site map, wireframes. Clarity in days, not months.</p>
<div className="mt-3 text-xs text-white/60">Deliverables: brief, lo‑fi flows, timeline</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-layout w-5 h-5" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span className="font-medium">Icy UI Design</span>
</div>
<p className="mt-2 text-sm text-white/70">Crystal‑clean visuals with subtle glass and motion.</p>
<div className="mt-3 text-xs text-white/60">Deliverables: hi‑fi screens, design system</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="font-medium">Frost‑Fast Build</span>
</div>
<p className="mt-2 text-sm text-white/70">SEO‑friendly, accessible, and blazing fast.</p>
<div className="mt-3 text-xs text-white/60">Tech: modern stack, clean handoff</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-chart-line w-5 h-5" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="font-medium">Conversion Ops</span>
</div>
<p className="mt-2 text-sm text-white/70">Optimize funnels, messaging, and speed post‑launch.</p>
<div className="mt-3 text-xs text-white/60">A/B tests, heatmaps, analytics</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected work</h2>
<p className="mt-2 text-white/70">A few frosty snapshots. More on request.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all px-3 py-2 text-sm" href="#contact">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Request Full Portfolio</span>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-4 sm:gap-6">

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="SaaS dashboard screen" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-white font-medium">Glacier Analytics</div>
<div className="text-[11px] text-white/60">SaaS</div>
</div>
<p className="mt-1 text-sm text-white/70">Conversion‑first marketing site and product screens.</p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Elegant product" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-white font-medium">NorthPeak Gear</div>
<div className="text-[11px] text-white/60">E‑commerce</div>
</div>
<p className="mt-1 text-sm text-white/70">Icy‑clean brand site with frictionless checkout.</p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="3D blue render" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-white font-medium">PolarPay</div>
<div className="text-[11px] text-white/60">Fintech</div>
</div>
<p className="mt-1 text-sm text-white/70">Glassmorphic UI with enterprise trust signals.</p>
</div>
</a>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">A frictionless, frosty process</h2>
<div className="mt-8 grid lg:grid-cols-4 gap-4 sm:gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/10 flex items-center justify-center text-xs">1</div>
<div className="font-medium text-white">Discovery</div>
</div>
<p className="mt-2 text-sm text-white/70">30‑min Blueprint Call to align goals and scope.</p>
<div className="mt-3 text-xs text-white/60 flex items-center gap-2">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 1 day
            </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/10 flex items-center justify-center text-xs">2</div>
<div className="font-medium text-white">Blueprint</div>
</div>
<p className="mt-2 text-sm text-white/70">Sitemap, wireframes, and success metrics.</p>
<div className="mt-3 text-xs text-white/60 flex items-center gap-2">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg> 2–3 days
            </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/10 flex items-center justify-center text-xs">3</div>
<div className="font-medium text-white">Design</div>
</div>
<p className="mt-2 text-sm text-white/70">Icy UI with conversion‑focused messaging.</p>
<div className="mt-3 text-xs text-white/60 flex items-center gap-2">
<svg className="lucide lucide-palette w-4 h-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> 3–5 days
            </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md border border-white/15 bg-white/10 flex items-center justify-center text-xs">4</div>
<div className="font-medium text-white">Build &amp; Ship</div>
</div>
<p className="mt-2 text-sm text-white/70">Fast, accessible hand‑coded implementation.</p>
<div className="mt-3 text-xs text-white/60 flex items-center gap-2">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> 3–5 days
            </div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Transparent, icy‑clear pricing</h2>
<p className="mt-2 text-white/70">Pick a plan to match your momentum. All include our 14‑day launch guarantee.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<div className="font-medium text-white">Polar Starter</div>
<svg className="lucide lucide-feather w-4 h-4 text-white/70" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-white">$3,900</div>
<p className="mt-2 text-sm text-white/70">Up to 4 pages, blueprint sprint, basic SEO.</p>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Wireframes &amp; UI</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mobile‑first build</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic analytics</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all px-4 py-2" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Book Call
            </a>
</div>

<div className="relative rounded-2xl border border-blue-400/40 bg-blue-500/15 backdrop-blur-xl p-6 flex flex-col shadow-xl">
<div className="absolute -top-3 right-4 rounded-full border border-blue-300/40 bg-blue-400/20 px-3 py-1 text-xs text-blue-100 backdrop-blur-md">Most popular</div>
<div className="flex items-center justify-between">
<div className="font-medium text-white">Glacier Growth</div>
<svg className="lucide lucide-ice-cream-2 w-4 h-4 text-blue-100" data-lucide="ice-cream-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"></path><path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"></path><path d="M15.5 6.5a3.5 3.5 0 1 0-7 0"></path></svg>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-white">$7,900</div>
<p className="mt-2 text-sm text-white/80">6–10 pages, advanced SEO, CRO setup, animations.</p>
<ul className="mt-4 space-y-2 text-sm text-white/85">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Component system</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Performance pass (95+)</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> On‑page SEO &amp; schema</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-200" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> A/B tools integration</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/50 bg-blue-500/25 hover:bg-blue-500/30 hover:border-blue-300/60 text-blue-100 transition-all px-4 py-2" href="#contact">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Reserve Slot
            </a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<div className="font-medium text-white">Arctic Custom</div>
<svg className="lucide lucide-asterisk w-4 h-4 text-white/70" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-white">From $15k</div>
<p className="mt-2 text-sm text-white/70">Complex flows, CMS, web app surfaces, multi‑locale.</p>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Product design partnership</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Design system library</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all px-4 py-2" href="#contact">
<svg className="lucide lucide-messages-square w-4 h-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg> Discuss Scope
            </a>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Ava North</div>
<div className="text-xs text-white/60">Founder, Glacier Analytics</div>
</div>
</div>
<p className="mt-3 text-sm text-white/80">“Our traffic doubled and demo requests grew 38% after launch. The site feels weightless but it’s insanely fast.”</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Jonas Kent</div>
<div className="text-xs text-white/60">CEO, NorthPeak</div>
</div>
</div>
<p className="mt-3 text-sm text-white/80">“Blueprint Bears delivered in 10 days. Clean, glassy, and ready to scale. Best design partner we’ve used.”</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Sora Lane</div>
<div className="text-xs text-white/60">Head of Product, PolarPay</div>
</div>
</div>
<p className="mt-3 text-sm text-white/80">“They obsess over details and performance. Our pages fly and conversions followed.”</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">FAQ</h2>
<div className="mt-6 grid md:grid-cols-2 gap-4 sm:gap-6">
<details className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 open:border-white/20 transition-all">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium">How fast can we launch?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70">Most projects launch within 7–14 days after the Blueprint Sprint, depending on scope.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 open:border-white/20 transition-all">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium">Do you work with existing brand guidelines?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70">Yes. We can extend your system or create a lightweight, icy‑clean design language.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 open:border-white/20 transition-all">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium">What does the guarantee include?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70">If we miss agreed launch dates, we add extra scope or reduce fees—your choice.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 open:border-white/20 transition-all">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium">Can you maintain and optimize post‑launch?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70">We offer monthly optimization sprints for content, CRO, and performance.</p>
</details>
</div>
</div>
</section>

<section className="relative z-10 pt-16 sm:pt-20 pb-20" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<h3 className="text-xl font-semibold tracking-tight">Book your Blueprint Call</h3>
</div>
<p className="mt-2 text-white/70 text-sm">Tell us about your project. We’ll reply same day with a fit check and next steps.</p>
<form className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="sm:col-span-1">
<label className="text-xs text-white/70">Name</label>
<input className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-300/40" placeholder="Your name" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-white/70">Email</label>
<input className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-300/40" placeholder="you@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-white/70">Company</label>
<input className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-300/40" placeholder="Company or project" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-white/70">What are you building?</label>
<textarea className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-300/40" placeholder="A few sentences on goals, timeline, scope..." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<div className="text-[11px] text-white/50">By submitting, you agree to our terms.</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-blue-400/50 bg-blue-500/25 hover:bg-blue-500/30 hover:border-blue-300/60 text-blue-100 transition-all px-4 py-2" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Send Request
                </button>
</div>
</form>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<h3 className="text-xl font-semibold tracking-tight">What you get</h3>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-200" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 30‑min strategy call</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-200" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Project blueprint &amp; timeline</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-200" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Transparent pricing &amp; scope</li>
</ul>
<div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<img alt="Founder" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Maya Verr</div>
<div className="text-xs text-white/60">Design Lead, Blueprint Bears</div>
</div>
</div>
<p className="mt-2 text-sm text-white/70">“We combine glassy aesthetics with cold‑start performance so your story lands and your metrics move.”</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg border border-white/15 bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-semibold tracking-tight">
              BB
            </div>
<div className="text-white font-medium">Blueprint Bears</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-white/70 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-white/70 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="text-xs text-white/50">© <span id="y">2025</span> Blueprint Bears. All rights reserved.</div>
</div>
</div>
</footer>




    </>
  );
}
