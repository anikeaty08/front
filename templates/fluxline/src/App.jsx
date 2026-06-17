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
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      const ease = 'cubic-bezier(0.4,0,0.2,1)';
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            el.style.animation = `slide-up 800ms ${ease} ${delay}ms both`;
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('[data-animate]').forEach((el, idx) => {
        el.dataset.delay = (idx * 80).toString();
        observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" width="100%"></iframe></div></div>

<div className="pointer-events-none fixed inset-0 grid-bg"></div>
<div className="pointer-events-none fixed inset-x-0 top-0 h-40 opacity-50" style={{background: 'radial-gradient(60% 30% at 50% -10%, rgba(255,255,255,0.08), transparent 60%)'}}></div>

<header className="sticky top-0 z-50">
<nav className="lg:px-8 mr-auto ml-auto pt-5 pr-6 pb-5 pl-6">
<div className="flex ios-glass max-w-7xl rounded-2xl mx-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.2)]"></span>
<span className="text-sm font-medium text-zinc-300" style={{fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, Roboto, Helvetica, Arial'}}>Fluxline</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-zinc-200 transition-colors" href="#">Product</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Templates</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Pricing</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl ios-glass px-3.5 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Sign in
            </button>
<button className="inline-flex gap-2 hover:bg-indigo-500 shadow-indigo-500/25 transition-colors text-sm text-white bg-indigo-500/90 rounded-xl pt-2 pr-3.5 pb-2 pl-3.5 shadow-lg items-center">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Get started
            </button>
</div>
</div>
</nav>
</header>

<section className="lg:px-8 mr-auto ml-auto pt-8 pr-6 pb-16 pl-6 relative">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex gap-2 ios-glass text-[12px] text-zinc-300 rounded-full pt-1 pr-3 pb-1 pl-3 items-center" style={{animation: 'slide-up 800ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '80ms'}}>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          Beta — Orchestrate with AI nodes
        </div>
<h1 className="sm:text-6xl lg:text-7xl text-5xl font-medium text-white tracking-tight-override mt-6" style={{fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, Roboto, Helvetica, Arial', animation: 'slide-up 820ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '160ms'}}>The AI automation
platform built for everyone</h1>
<p className="sm:text-xl leading-relaxed text-lg text-zinc-400 mt-5" style={{animation: 'slide-up 820ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '240ms'}}>Everything you need – data, apps, and AI in an intuitive drag and drop interface to automate your workflows.</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3" style={{animation: 'slide-up 820ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '320ms'}}>
<a className="inline-flex items-center gap-2 hover:bg-indigo-500 shadow-indigo-500/25 transition-colors text-sm text-white bg-indigo-500/90 rounded-2xl pt-3 pr-5 pb-3 pl-5 shadow-xl" href="#">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Create free account
          </a>
<a className="inline-flex items-center gap-2 ios-glass hover:text-white transition-colors text-sm text-zinc-200 bg-zinc-50/5 rounded-2xl pt-3 pr-5 pb-3 pl-5" href="#">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> View demo
          </a>
</div>
<div className="mt-2 text-[12px] text-zinc-400" style={{animation: 'slide-up 820ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '380ms'}}>No credit card required • 14‑day Pro trial</div>
</div>

<div className="relative ios-glass overflow-hidden max-w-7xl border-white/10 border rounded-3xl mt-14 mr-auto ml-auto top-0 right-0 bottom-0 left-0">

<div className="h-[420px] relative top-0 right-0 bottom-0 left-0">

<svg className="absolute inset-0 w-[24px] h-[24px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(228, 228, 231)'}} viewbox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
<defs>
</defs>
<path d="M230,180 C340,180 340,260 450,260" filter="url(#soft)" stroke="url(#glow)" strokeWidth="2.5"></path>
<path d="M450,260 C560,260 560,200 670,200" filter="url(#soft)" stroke="url(#glow)" strokeWidth="2.5"></path>
<path d="M670,200 C820,200 820,120 980,120" filter="url(#soft)" stroke="url(#glow)" strokeWidth="2.5"></path>
<path d="M670,200 C820,200 820,320 980,320" filter="url(#soft)" stroke="url(#glow)" strokeWidth="2.5"></path>
</svg>

<div className="absolute left-10 top-24 w-56 rounded-2xl ios-glass p-3 shadow-2xl" style={{animation: 'slide-right 900ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '180ms'}}>
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Ingest</span>
<span className="text-[10px] text-zinc-400">v1.0</span>
</div>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 px-3 py-2">
<div className="text-sm text-white/90">API Ingest</div>
<div className="text-[12px] text-zinc-400">POST /run</div>
</div>
</div>
<div className="absolute left-80 top-56 w-64 rounded-2xl ios-glass p-3 shadow-2xl" style={{animation: 'slide-up 900ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '260ms'}}>
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Compute</span>
<span className="text-[10px] text-zinc-400">Auto</span>
</div>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 px-3 py-2">
<div className="text-sm text-white/90">Reason</div>
<div className="text-[12px] text-zinc-400">Model: Orion‑mini</div>
</div>
</div>
<div className="absolute left-[680px] top-40 w-64 rounded-2xl ios-glass p-3 shadow-2xl" style={{animation: 'slide-left 900ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '340ms'}}>
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Refine</span>
<span className="text-[10px] text-zinc-400">AI</span>
</div>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 px-3 py-2">
<div className="text-sm text-white/90">Summarize</div>
<div className="text-[12px] text-zinc-400">Rules: short • key points</div>
</div>
</div>
<div className="absolute right-10 top-16 w-64 rounded-2xl ios-glass p-3 shadow-2xl" style={{animation: 'slide-left 900ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '420ms'}}>
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Notify</span>
<span className="text-[10px] text-zinc-400">Chat</span>
</div>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 px-3 py-2">
<div className="text-sm text-white/90">#system-events</div>
<div className="text-[12px] text-zinc-400">On success + failure</div>
</div>
</div>
<div className="absolute right-10 bottom-10 w-64 rounded-2xl ios-glass p-3 shadow-2xl" style={{animation: 'slide-left 900ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '500ms'}}>
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Store</span>
<span className="text-[10px] text-zinc-400">DB</span>
</div>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 px-3 py-2">
<div className="text-sm text-white/90">Postgres</div>
<div className="text-[12px] text-zinc-400">Insert row</div>
</div>
</div>
</div>
</div>
<p className="mx-auto mt-10 max-w-2xl text-center text-zinc-400 text-base" style={{animation: 'slide-up 820ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '380ms'}}>
        Build exactly what you need—every connection feels natural, every result traceable.
      </p>
</section>

<section className="lg:px-8 relative bg-zinc-950 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
<div className="rounded-3xl ios-glass p-8">
<span className="inline-flex items-center gap-2 text-[12px] text-zinc-300">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Realtime collaboration
          </span>
<h2 className="mt-3 text-4xl sm:text-5xl tracking-tight-override text-white font-medium" style={{fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, Roboto, Helvetica, Arial'}}>
            Collaborate with your team in one visual workspace.
          </h2>
<p className="mt-3 text-zinc-400 text-[15px] leading-relaxed">
            See changes live, comment in context, and build together—no deploys required.
          </p>
<div className="flex gap-4 mt-6 items-center">
<img alt="" className="w-9 h-9 object-cover border-zinc-50 border-2 ring-0 rounded-full" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=800&amp;q=80"/>
<img alt="" className="-ml-3 -translate-x-3 w-9 h-9 object-cover border-zinc-50 border-2 ring-0 rounded-full" src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=320&amp;q=80"/>
<img alt="" className="-ml-3 -translate-x-6 w-9 h-9 object-cover border-zinc-50 border-2 ring-0 rounded-full" src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=320&amp;q=80" style={{}}/>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 px-4 py-2.5 text-sm text-white transition-colors" href="#">
<svg className="lucide lucide-brain-circuit h-4 w-4" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg> Explore features
            </a>
</div>
</div>
<div className="rounded-3xl overflow-hidden ios-glass p-4">
<div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c355df0f-ebda-4fba-8104-001bece7cae7_1600w.jpg" style={{}}/>
<div className="pt-5 pr-5 pb-5 pl-5 absolute top-0 right-0 bottom-0 left-0">

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
</div>
</div>
</div>
<div className="absolute text-[12px] text-zinc-300 bg-black/50 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 right-3 bottom-3 backdrop-blur-md">
              Live cursors • Comments
            </div>
</div>
</div>
</section>

<section className="lg:px-8 bg-zinc-950 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
<div className="rounded-2xl ios-glass p-5">
<div className="text-[12px] text-zinc-400">01</div>
<h3 className="mt-1 text-xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Start on a canvas</h3>
<p className="mt-2 text-sm text-zinc-400">Create a visual workspace where everyone can contribute in real time.</p>
</div>
<div className="rounded-2xl ios-glass p-5">
<div className="text-[12px] text-zinc-400">02</div>
<h3 className="mt-1 text-xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Add AI + logic</h3>
<p className="mt-2 text-sm text-zinc-400">Drag nodes for models, APIs, and data syncs—no code needed.</p>
</div>
<div className="rounded-2xl ios-glass p-5">
<div className="text-[12px] text-zinc-400">03</div>
<h3 className="mt-1 text-xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Publish instantly</h3>
<p className="mt-2 text-sm text-zinc-400">Tag teammates, assign roles, and ship flows without friction.</p>
</div>
<div className="rounded-2xl ios-glass p-5">
<div className="text-[12px] text-zinc-400">04</div>
<h3 className="mt-1 text-xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Scale securely</h3>
<p className="mt-2 text-sm text-zinc-400">Observability, keys, and SSO baked in from day one.</p>
</div>
</div>
</section>

<section className="lg:px-8 bg-zinc-950 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">
<div className="text-center max-w-7xl mx-auto">
<h2 className="text-4xl sm:text-5xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Build, ship, and scale without friction.</h2>
<p className="mt-3 text-zinc-400 text-base">Designed for modern teams that value speed and precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mt-10 mr-auto ml-auto">
<div className="rounded-3xl ios-glass p-6">
<div className="flex items-center justify-between">
<div className="h-12 w-12 rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20 flex items-center justify-center">
<svg className="lucide lucide-brain-circuit w-[20px] h-[20px]" data-lucide="brain-circuit" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<span className="text-[12px] text-zinc-400">API‑first</span>
</div>
<h3 className="mt-4 text-2xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>AI‑native architecture</h3>
<p className="mt-2 text-sm text-zinc-400">Stream results with server events and reliable throughput controls.</p>
</div>
<div className="rounded-3xl ios-glass p-6">
<div className="flex items-center justify-between">
<div className="h-12 w-12 rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20 flex items-center justify-center">
<svg className="lucide lucide-layers h-5 w-5 text-indigo-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-[12px] text-zinc-400">Plug‑ins</span>
</div>
<h3 className="mt-4 text-2xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Modular and extensible</h3>
<p className="mt-2 text-sm text-zinc-400">Add nodes for any provider—bring your own models, vectors, and tools.</p>
</div>
<div className="rounded-3xl ios-glass p-6">
<div className="flex items-center justify-between">
<div className="h-12 w-12 rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20 flex items-center justify-center">
<svg className="lucide lucide-shield-check h-5 w-5 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-[12px] text-zinc-400">Security</span>
</div>
<h3 className="mt-4 text-2xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Enterprise ready</h3>
<p className="mt-2 text-sm text-zinc-400">SOC2 controls, secret vaults, and granular permissions out of the box.</p>
</div>
</div>
</section>

<section className="relative lg:px-8 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="relative overflow-hidden ios-glass max-w-7xl rounded-3xl mx-auto pt-10 pr-10 pb-10 pl-10 top-0 right-0 bottom-0 left-0">
<div className="absolute max-w-7xl top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<h3 className="text-4xl sm:text-5xl tracking-tight-override font-medium text-white" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Move faster with autonomous automation.</h3>
<p className="mt-3 text-zinc-300 text-base">Launch in minutes—no setup, no code.</p>
<p className="mt-1 text-zinc-500 text-[13px]">Includes SSO, SOC2, and audit logs.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 px-5 py-3 text-sm text-white shadow-lg shadow-indigo-500/25 transition-colors" href="#">
<svg className="lucide lucide-flashlight h-4 w-4" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg> Get started free
            </a>
<a className="inline-flex items-center gap-2 rounded-xl ios-glass px-5 py-3 text-sm text-zinc-200 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-blocks h-4 w-4" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg> Browse templates
            </a>
</div>
</div>
</div>
</section>

<footer className="relative bg-zinc-950/5 backdrop-blur">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
<span className="text-sm font-medium text-zinc-300" style={{fontFamily: 'Geist, ui-sans-serif, system-ui'}}>Fluxline</span>
</div>
<p className="mt-3 text-sm text-zinc-400 max-w-xs">Design, automate, and collaborate on AI‑driven processes in one intuitive platform.</p>
</div>
<div className="text-sm">
<div className="text-zinc-50 mb-2">Product</div>
<ul className="text-zinc-400 space-y-2">
<li className=""><a className="hover:text-zinc-200 text-zinc-300" href="#">Features</a></li>
<li className="text-zinc-300"><a className="hover:text-zinc-200" href="#">Templates</a></li>
<li className="text-zinc-300"><a className="hover:text-zinc-200" href="#">Pricing</a></li>
</ul>
</div>
<div className="text-sm">
<div className="text-zinc-50 mb-2">Company</div>
<ul className="space-y-2 text-zinc-400">
<li className=""><a className="hover:text-zinc-200 text-zinc-300" href="#">About</a></li>
<li className=""><a className="hover:text-zinc-200 text-zinc-300" href="#">Careers</a></li>
<li className=""><a className="hover:text-zinc-200 text-zinc-300" href="#">Blog</a></li>
</ul>
</div>
<div className="text-sm">
<div className="text-zinc-300 mb-2">Subscribe</div>
<form className="mt-2 flex items-center gap-2">
<input className="w-full rounded-xl ios-glass px-3 py-2 text-sm placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Enter your email" type="email"/>
<button className="rounded-xl bg-indigo-500/90 hover:bg-indigo-500 px-3 py-2 text-white">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="text-[12px] text-zinc-300 mt-2">No spam. Unsubscribe anytime.</p>
</div>
</div>
<div className="mt-10 flex items-center justify-between text-[12px] text-zinc-500">
<p>© 2025 Fluxline Inc.</p>
<div className="flex items-center gap-4">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<a className="hover:text-zinc-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
