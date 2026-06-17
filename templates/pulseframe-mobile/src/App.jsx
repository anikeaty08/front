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
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/435d613f-d4c2-403a-8de6-2807eaadddcb_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="flex items-center justify-center gap-[40px]">

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-neutral-100 ring-1 ring-black/10 p-[10px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-black ring-1 ring-black/70">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-36 rounded-full bg-black ring-1 ring-white/10"></div>

<div className="h-full w-full flex flex-col">

<div className="flex items-center justify-between px-5 pt-7">
<div className="inline-flex items-center gap-2">
<span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles h-4 w-4 text-white/90" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-sm tracking-tight font-semibold">Pulseframe</span>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-menu h-4 w-4 text-white/80" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="px-5 pb-6 pt-5">
<span className="inline-flex items-center gap-1 rounded-full bg-[#FF6B35]/10 px-2 py-1 text-[11px] text-[#FF6B35] ring-1 ring-[#FF6B35]/20 uppercase tracking-tight">
<svg className="lucide lucide-bolt h-3.5 w-3.5" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
              Integrations
            </span>
<h2 className="mt-3 text-[28px] leading-tight tracking-tight font-medium">
              Connect your entire tech stack
            </h2>
<p className="mt-2 text-sm text-white/70">
              One platform, infinite possibilities. Sync with your favorite tools.
            </p>

<div className="mt-5 grid grid-cols-3 gap-3">
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-github h-6 w-6 text-white/90" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-sliders h-6 w-6 text-white/90" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg>
</div>
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bar-chart-3 h-6 w-6 text-white/90" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-figma h-6 w-6 text-white/90" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-database h-6 w-6 text-white/90" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex items-center justify-center h-16 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-cloud h-6 w-6 text-white/90" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
</div>

<div className="mt-5 grid grid-cols-2 gap-2">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs">
<svg className="lucide lucide-link h-3.5 w-3.5 text-[#FF6B35]" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Instant sync
              </div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs">
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6B35]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Enterprise security
              </div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs">
<svg className="lucide lucide-satellite h-3.5 w-3.5 text-[#FF6B35]" data-lucide="satellite" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path><path d="M16.5 7.5 19 5"></path><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path><path d="M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></svg>
                Real-time updates
              </div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 text-xs">
<svg className="lucide lucide-wand-2 h-3.5 w-3.5 text-[#FF6B35]" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                One‑click setup
              </div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-neutral-100 ring-1 ring-black/10 p-[10px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-black ring-1 ring-black/70">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-36 rounded-full bg-black ring-1 ring-white/10"></div>

<div className="relative h-[220px] w-full">
<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e176e0f-b606-41d5-83b8-9fbc9588a6b6_3840w.webp\')', filter: 'saturate(1.1) brightness(0.9)'}}></div>
<div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.9) 100%)'}}></div>

<div className="relative z-10 flex items-center justify-between px-5 pt-7">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-grid h-4 w-4 text-white/90" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</span>
<span className="text-base tracking-tight font-semibold">Pulseframe</span>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-menu h-4 w-4 text-white/85" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="relative -mt-6 px-5 pb-6">

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-black/70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86071fe2-c5b4-4d6d-8cc8-87a7cc2edda1_320w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-black/70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a97544a-e641-4759-a1a7-7dae56e72f14_320w.webp"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-black/70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_320w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-black/70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8b9b639-b54e-46f3-a9e7-d0748a704d73_320w.jpg"/>
</div>
<p className="text-xs text-white/70"><span className="text-white/90 font-medium">48+</span> experts on call</p>
</div>

<h1 className="mt-3 text-[34px] leading-[1.08] tracking-tight font-medium">
            Orchestrate Work at Lightspeed
          </h1>
<p className="mt-2 text-[13px] leading-relaxed text-white/70">
            Equip your team to automate the mundane, align stakeholders, and keep momentum high—without the chaos.
          </p>

<div className="mt-4 flex flex-col gap-2">
<button className="inline-flex items-center justify-between gap-3 text-sm font-medium text-white tracking-tight rounded-full px-[2px] py-[2px] shadow-[0_0_48px_rgba(255,107,53,0.45)]" style={{background: 'linear-gradient(90deg,#FF6B35 0%, #F7931E 50%, #FFA500 100%)'}}>
<span className="inline-flex items-center justify-between w-full rounded-full px-4 py-2.5 relative" style={{background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #FFA500 100%)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0,0,0,0.25)'}}>
<span className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlendMode: 'screen'}}></span>
<span className="relative z-10">Start free</span>
<span className="relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/15 ring-1 ring-white/10">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</span>
</button>
<button className="inline-flex items-center justify-center gap-2 text-sm text-white/90 rounded-full px-4 py-2.5 bg-white/10 hover:bg-white/15 transition backdrop-blur ring-1 ring-white/10">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              How it works
            </button>
<div className="text-[11px] text-white/50 text-center">No credit card needed</div>
</div>

<div className="mt-5 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
<span className="h-2.5 w-2.5 rounded-full bg-white/15"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/15"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/15"></span>
<div className="ml-2 h-2 w-20 rounded bg-white/10"></div>
</div>
<div className="p-3">
<div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca446c1b-d6e1-4316-9864-4d6306b13cf4_800w.jpg"/>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">Active Projects</div>
<span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-300/30 px-2 py-0.5 rounded-full">
<svg className="lucide lucide-check-circle-2 h-3.5 w-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  On track
                </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-neutral-100 ring-1 ring-black/10 p-[10px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-black ring-1 ring-black/70">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-36 rounded-full bg-black ring-1 ring-white/10"></div>

<div className="h-full w-full flex flex-col">

<div className="flex items-center justify-between px-5 pt-7">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-box h-4 w-4 text-white/90" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</span>
<span className="text-base tracking-tight font-semibold">Pulseframe</span>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-more-horizontal h-4 w-4 text-white/85" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="px-5 pb-6 pt-5">
<h2 className="text-[28px] leading-tight tracking-tight font-medium">
              Turn bold ideas into products — <span className="font-normal italic opacity-80">growth without the noise</span>
</h2>
<p className="mt-3 text-sm text-white/70">
              We partner with ambitious teams to craft delightful interfaces, validate quickly, and scale with data‑backed decisions.
            </p>
<div className="mt-5 flex items-center gap-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-full px-4 py-2.5 hover:bg-white/90 transition" href="#">
                Get started
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white rounded-full px-4 py-2.5 border border-white/20 hover:bg-white/10 transition" href="#">
                See our work
              </a>
</div>

<article className="mt-6 overflow-hidden bg-neutral-900/60 backdrop-blur rounded-2xl border border-white/10">
<div className="p-4">
<div className="relative h-40 rounded-xl bg-black/40 ring-1 ring-inset ring-white/10 overflow-hidden">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full text-white/5">
<defs>
<pattern height="24" id="grid-m" patternunits="userSpaceOnUse" width="24">
<path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid-m)" height="100%" width="100%"></rect>
</svg>
<span className="absolute left-5 top-4 h-0.5 w-10 rounded bg-[#FF6B35]"></span>
<div className="absolute right-5 top-6 w-[78%] rounded-xl border border-white/10 bg-black/60 backdrop-blur">
<div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
<div className="ml-2 h-2 w-16 rounded bg-white/10"></div>
</div>
<div className="grid grid-cols-3 gap-2 p-3">
<div className="col-span-2 rounded-lg border border-white/10 overflow-hidden">
<img alt="" className="h-20 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca446c1b-d6e1-4316-9864-4d6306b13cf4_800w.jpg"/>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<img alt="" className="h-20 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e430a8d-376b-4aba-8993-1350529e5946_800w.jpg"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 h-16"></div>
<div className="rounded-lg border border-white/10 bg-white/5 h-16"></div>
<div className="rounded-lg border border-white/10 bg-white/5 h-16"></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<svg className="lucide lucide-gauge h-5 w-5 text-white/60" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<h3 className="text-lg tracking-tight font-medium text-white/90">Data‑Driven Growth Engine</h3>
</div>
<p className="mt-2 text-xs text-white/60">
                  Transform your product metrics with our design systems and growth framework that scales with your team.
                </p>
</div>
</article>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
