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



    const ctx = document.getElementById('cycleChart');
    if (ctx) {
      const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.00)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'Cycle time (h)',
            data: [9.2, 8.5, 7.1, 7.8, 6.4, 7.0, 6.8],
            tension: 0.35,
            borderColor: 'rgb(99,102,241)',
            backgroundColor: gradient,
            fill: true,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.08)' },
              ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 11 } }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17, 17, 17, 0.95)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#fff',
              bodyColor: 'rgba(255,255,255,0.8)',
              displayColors: false
            }
          }
        }
      });
    }
  
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
      

<header className="sticky top-0 z-30 backdrop-blur-md bg-neutral-950/70 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center gap-2" href="#">
<span className="text-sm sm:text-base font-medium tracking-tight">NovaOps</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#cards">Workflows</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center h-9 px-3 rounded-lg border border-white/10 text-sm text-white/80 hover:text-white hover:border-white/20 transition-colors" href="#">
            Sign in
          </a>
<a className="inline-flex items-center h-9 px-3 rounded-lg bg-white text-neutral-900 text-sm font-medium hover:bg-white/90 transition-colors" href="#">
            Start free
            <svg aria-hidden="true" className="ml-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-[url(/assets/af0a80bd-7501-40ee-990b-69ed1cfcde25_3840w.jpg)] bg-cover">
<div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="absolute -bottom-48 -right-40 w-[520px] h-[520px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="max-w-7xl md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="lg:col-span-6 flex flex-col justify-center">
<div className="inline-flex gap-2 w-max text-xs text-white/80 bg-white/5 border-white/10 border rounded-full mb-4 pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-lg items-center">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Ship faster with fewer meetings
        </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          Built for modern<br className="hidden md:block" /> product teams
        </h1>
<p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          NovaOps is shaped by the habits of elite builders: tight feedback loops, ruthless prioritization, and a commitment to craft.
          Plan roadmaps, track sprints, and ship with confidence—without the overhead.
        </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center h-11 hover:bg-white/90 transition text-sm font-medium text-neutral-900 bg-white rounded-xl pr-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
            Create workspace
            <svg aria-hidden="true" className="ml-1.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center h-11 hover:text-white hover:border-white/20 transition text-sm text-white/90 border-white/10 border rounded-xl pr-4 pl-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-lg" href="#">
            Book a demo
            <svg aria-hidden="true" className="ml-1.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-white/60">
<div className="flex -space-x-2">
<img alt="Customer avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcaefeee-31cd-4c69-9a33-39ee0ad78c30_320w.jpg" style={{}} />
<img alt="Customer avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c3af2bd-32da-4659-8095-1deb5455b9f6_800w.jpg" style={{}} />
<img alt="Customer avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d72eb51-d86e-431b-ad62-97cdf574a592_320w.jpg" style={{}} />
</div>
<span className="">Trusted by 2,400+ teams • 4.9/5 satisfaction</span>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative sm:p-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gradient-to-b from-white/[0.03] to-transparent border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="grid grid-cols-12 gap-3">

<div className="col-span-12 md:col-span-6 space-y-3">
<div className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Product board" className="absolute inset-0 w-full h-full object-cover opacity-60" src="/assets/8d57793a-634a-4c7d-9968-fced612582e1_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-xs text-white/60">Sprint overview</p>
<p className="text-lg font-semibold tracking-tight">Velocity up 18%</p>
</div>
<span className="inline-flex items-center h-8 px-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
<svg aria-hidden="true" className="mr-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M3 3v18h18"></path>
<path d="M19 9l-6 6-4-4-4 4"></path>
</svg>
                    Trend
                  </span>
</div>
</div>
<div className="relative h-28 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
<div className="absolute inset-0 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg aria-hidden="true" className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M3 7h18"></path>
<path d="M6 4h12v16H6z"></path>
<path d="M8 11h8"></path>
<path d="M8 15h5"></path>
</svg>
</span>
<div className="">
<p className="text-sm font-medium tracking-tight">Backlog grooming</p>
<p className="text-xs text-white/60">Reduce carryover by 32%</p>
</div>
</div>
<button className="inline-flex items-center h-8 px-2 rounded-lg bg-white text-neutral-900 text-xs font-medium hover:bg-white/90 transition">
                    Open
                    <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 space-y-3">
<div className="relative h-28 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
<div className="absolute inset-0 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg aria-hidden="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</span>
<div className="">
<p className="text-sm font-medium tracking-tight">Branch previews</p>
<p className="text-xs text-white/60">Auto-link PRs to issues</p>
</div>
</div>
<span className="text-xs text-emerald-400">Synced</span>
</div>
</div>
<div className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Deployment" className="absolute inset-0 w-full h-full object-cover opacity-50" src="/assets/89eb3a29-9852-4008-8865-22926b2c8cb0_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="">
<p className="text-xs text-white/60">Release train</p>
<p className="text-lg font-semibold tracking-tight">0 incidents this week</p>
</div>
<span className="inline-flex items-center h-8 text-xs text-white/80 bg-white/5 border-white/10 border rounded-lg pr-2 pl-2">Rollback</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-lg">
<p className="text-xs text-white/60">Lead time</p>
<p className="text-base font-semibold tracking-tight">2.1d</p>
</div>
<div className="border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-lg">
<p className="text-xs text-white/60">On-time delivery</p>
<p className="text-base font-semibold tracking-tight">96%</p>
</div>
<div className="border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-lg">
<p className="text-xs text-white/60">Cycle time</p>
<p className="text-base font-semibold tracking-tight">7.4h</p>
</div>
<div className="border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-lg">
<p className="text-xs text-white/60">NPS</p>
<p className="text-base font-semibold tracking-tight">72</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-4 md:mt-8" id="cards">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<article className="group relative rounded-3xl overflow-hidden bg-neutral-900 h-80 shadow-xl border border-white/10">
<div className="absolute inset-0 bg-[url(/assets/61b8e1b5-22b1-4280-8ced-ed3ee0678a32_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-0 left-0 right-0 pt-6 pr-6 pb-6 pl-6">
<h3 className="text-white text-xl md:text-2xl font-semibold leading-snug tracking-tight mb-1">
            Purpose-built for product development
          </h3>
<p className="text-white/70 text-sm mb-3">Issues, docs, and sprints in one focused surface.</p>
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 transition group-hover:bg-white/10">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</div>
</article>

<article className="group relative rounded-3xl overflow-hidden bg-neutral-900 h-80 shadow-xl border border-white/10">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/78877756-9e45-410e-b630-78c3dfb8e94c_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-white text-xl md:text-2xl font-semibold leading-snug tracking-tight mb-1">Designed to move fast</h3>
<p className="text-white/70 text-sm mb-3">Keyboard-first, zero-friction navigation and editing.</p>
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 transition group-hover:bg-white/10">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</span>
</div>
</article>

<article className="group relative rounded-3xl overflow-hidden bg-neutral-900 h-80 shadow-xl border border-white/10">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f29f67f-c043-4d68-9a80-d6f2dc0770fd_800w.jpg)] bg-cover"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-white text-xl md:text-2xl font-semibold leading-snug tracking-tight mb-1">Crafted with care</h3>
<p className="text-white/70 text-sm mb-3">Polished UI, predictable workflows, fewer surprises.</p>
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/90 transition group-hover:bg-white/10">
<svg aria-hidden="true" className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</div>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="features">
<div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18M9 21V9"></path>
</svg>
</span>
<div>
<h4 className="text-base font-semibold tracking-tight">Sprint planning</h4>
<p className="text-sm text-white/70">Capacity-aware estimates, drag-and-drop scopes, carryover prevention.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path><path d="M5 5h.01"></path></svg>
</span>
<div>
<h4 className="text-base font-semibold tracking-tight">Keyboard-first</h4>
<p className="text-sm text-white/70">Every action in reach: create, assign, move, and merge in seconds.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 3 7 8l4 5"></path><path d="M17 3l-4 5 4 5"></path><circle cx="5" cy="19" r="2"></circle><circle cx="12" cy="19" r="2"></circle><circle cx="19" cy="19" r="2"></circle></svg>
</span>
<div className="">
<h4 className="text-base font-semibold tracking-tight">Git automations</h4>
<p className="text-sm text-white/70">Branch naming, PR linking, and state changes that just happen.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M12 2v20"></path><path d="M17 7H7a5 5 0 0 0 10 0Z"></path></svg>
</span>
<div>
<h4 className="text-base font-semibold tracking-tight">Outcome roadmaps</h4>
<p className="text-sm text-white/70">Tie initiatives to measurable impact, not just dates.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M9 9h6v6H9z"></path><path d="M3 3h4v4H3zM17 17h4v4h-4zM17 3h4v4h-4zM3 17h4v4H3z"></path></svg>
</span>
<div className="">
<h4 className="text-base font-semibold tracking-tight">Custom fields</h4>
<p className="text-sm text-white/70">Track effort, risk, and dependencies with clarity.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-6"></path></svg>
</span>
<div>
<h4 className="text-base font-semibold tracking-tight">Real-time analytics</h4>
<p className="text-sm text-white/70">Spot blockers early with cycle time and throughput insights.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="insights">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
<h3 className="text-xl font-semibold tracking-tight">Cycle time</h3>
<p className="text-sm text-white/70 mb-4">Median hours from start to done across active teams.</p>

<div className="rounded-xl border border-white/10 bg-neutral-950/40 p-3">
<div className="h-56">
<canvas aria-label="Cycle time trend" className="" height="448" id="cycleChart" role="img" style={{display: `block`, boxSizing: `border-box`, height: `224px`, width: `616px`}} width="1233"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
<p className="text-xs text-white/60">This week</p>
<p className="text-base font-semibold tracking-tight">7.4h</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
<p className="text-xs text-white/60">Change</p>
<p className="text-base font-semibold tracking-tight text-emerald-400">-11%</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
<p className="text-xs text-white/60">P90</p>
<p className="text-base font-semibold tracking-tight">18.2h</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
<p className="text-xs text-white/60">Throughput</p>
<p className="text-base font-semibold tracking-tight">142/wk</p>
</div>
</div>
</div>

<div className="lg:col-span-5 md:p-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4dcbc3ae-9030-4976-b771-f70080b92f09_1600w.jpg)] bg-cover border-white/10 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xl font-semibold tracking-tight">Where time goes</h3>
<p className="text-sm text-white/70">Understand the bottlenecks and fix them with intention.</p>
<div className="mt-4 space-y-3">
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium tracking-tight">Handoffs</p>
<p className="text-xs text-white/60">Reduce idle time with auto-assign and single-owner tasks.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium tracking-tight">Waiting on review</p>
<p className="text-xs text-white/60">Set SLAs for PR reviews and auto-remind owners.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18"><path d="M3 3h18v7H3z"></path><path d="M8 21h8"></path><path d="M12 10v11"></path></svg>
</span>
<div>
<p className="text-sm font-medium tracking-tight">QA and validation</p>
<p className="text-xs text-white/60">Environments spin up automatically for each branch.</p>
</div>
</div>
<a className="inline-flex items-center text-sm text-white/80 hover:text-white mt-1" href="#">
            Explore analytics
            <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="customers">
<div className="md:p-8 bg-[url(/assets/530253a4-3b35-4eb5-8783-d351361683ca_1600w.jpg)] bg-cover border-white/10 rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="grid md:grid-cols-3 gap-6 items-center mb-16">
<div>
<p className="text-sm text-white/70">What teams say</p>
<p className="text-lg font-semibold tracking-tight mt-1">"NovaOps cut our cycle time by 35% in a month."</p>
<div className="flex items-center gap-2 mt-3">
<img alt="Customer" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46c1c487-d923-41a3-b3e4-6c293d89f0fe_320w.jpg" style={{}} />
<div className="text-xs">
<p className="text-white/90">Riya Sharma</p>
<p className="text-white/50">VP Engineering, Orbitly</p>
</div>
</div>
</div>
<div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">

<div className="h-16 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center">
<span className="text-white/80 font-semibold tracking-tight">ALFA</span>
</div>
<div className="h-16 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center">
<span className="text-white/80 font-semibold tracking-tight">NOVA</span>
</div>
<div className="h-16 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center">
<span className="text-white/80 font-semibold tracking-tight">LYRA</span>
</div>
<div className="h-16 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center">
<span className="text-white/80 font-semibold tracking-tight">KITE</span>
</div>
</div>
</div>

<div className="mb-16">
<div className="text-center mb-8">
<h3 className="md:text-3xl text-2xl font-semibold tracking-tight">Simple, transparent pricing</h3>
<p className="text-white/70 mt-2">Start free, scale as you grow</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h4 className="text-lg font-semibold tracking-tight">Free</h4>
<p className="text-white/70 text-sm mt-1">Perfect for small teams getting started</p>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold tracking-tight">$0</span>
<span className="text-white/60 text-sm">/month</span>
</div>
<ul className="space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Up to 5 team members
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Unlimited issues
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Basic analytics
          </li>
</ul>
<button className="w-full mt-6 h-10 rounded-lg border border-white/10 text-white/90 hover:bg-white/5 transition text-sm">
          Get started
        </button>
</div>

<div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 relative">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="bg-white text-neutral-900 text-xs font-medium px-3 py-1 rounded-full">Most popular</span>
</div>
<h4 className="text-lg font-semibold tracking-tight">Pro</h4>
<p className="text-white/70 text-sm mt-1">For growing teams that ship fast</p>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold tracking-tight">$12</span>
<span className="text-white/60 text-sm">/user/month</span>
</div>
<ul className="space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Everything in Free
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Advanced analytics
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Git integrations
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Custom fields
          </li>
</ul>
<button className="w-full mt-6 h-10 rounded-lg bg-white text-neutral-900 font-medium hover:bg-white/90 transition text-sm">
          Start free trial
        </button>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<h4 className="text-lg font-semibold tracking-tight">Enterprise</h4>
<p className="text-white/70 text-sm mt-1">For large organizations with specific needs</p>
<div className="mt-4 mb-6">
<span className="text-2xl font-semibold tracking-tight">Custom</span>
</div>
<ul className="space-y-3 text-sm text-white/80">
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Everything in Pro
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            SSO & security controls
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Priority support
          </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M20 6L9 17l-5-5"></path>
</svg>
            Custom integrations
          </li>
</ul>
<button className="w-full mt-6 h-10 rounded-lg border border-white/10 text-white/90 hover:bg-white/5 transition text-sm">
          Contact sales
        </button>
</div>
</div>
</div>

<div className="">
<div className="text-center mb-8">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently asked questions</h3>
<p className="text-white/70 mt-2">Everything you need to know about NovaOps</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<h4 className="font-medium tracking-tight mb-2">How long does setup take?</h4>
<p className="text-sm text-white/70">Most teams are up and running in under 30 minutes. Import existing issues, connect your Git repos, and invite your team.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<h4 className="font-medium tracking-tight mb-2">Can I migrate from other tools?</h4>
<p className="text-sm text-white/70">Yes, we support imports from Jira, Linear, GitHub Issues, and most other project management tools.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<h4 className="font-medium tracking-tight mb-2">What Git providers do you support?</h4>
<p className="text-sm text-white/70">GitHub, GitLab, Bitbucket, and Azure DevOps. We sync branch names, PR status, and deployment info automatically.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<h4 className="font-medium tracking-tight mb-2">Is there a mobile app?</h4>
<p className="text-sm text-white/70">Our web app works great on mobile, and we're working on native iOS and Android apps for 2025.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<h4 className="font-medium tracking-tight mb-2">How does billing work?</h4>
<p className="text-sm text-white/70">Monthly or annual billing per active user. Free plan includes up to 5 team members with no time limit.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<h4 className="font-medium tracking-tight mb-2">Do you offer customer support?</h4>
<p className="text-sm text-white/70">Email support for all plans, with priority support and dedicated success managers for Enterprise customers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16 mb-20">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 md:p-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Make the switch in an afternoon</h3>
<p className="text-sm text-white/70 mt-1">Import issues, sync branches, and start shipping with fewer blockers.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center h-11 px-4 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-white/90 transition" href="#">
            Get started
            <svg className="ml-1.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center h-11 px-4 rounded-xl border border-white/10 text-sm text-white/90 hover:text-white hover:border-white/20 transition" href="#">
            View docs
            <svg className="ml-1.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18"><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H14l6 6v11.5A2.5 2.5 0 0 1 17.5 22h-11A2.5 2.5 0 0 1 4 19.5Z"></path><path d="M14 2v6h6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-sm text-white/70">© 2025 NovaOps Inc.</span>
</div>
<div className="flex items-center gap-4 text-sm text-white/60">
<a className="hover:text-white" href="#">Status</a>
<a className="hover:text-white" href="#">Security</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Changelog</a>
</div>
</div>
</footer>



    </>
  );
}
