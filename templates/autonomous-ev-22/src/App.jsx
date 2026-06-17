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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
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
      
<div className="fixed inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,242,100,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_24%),linear-gradient(180deg,#f8faf7_0%,#f5f6f1_100%)]"></div>
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'linear-gradient(rgba(15,23,42,0.03) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(15,23,42,0.03) 0.0625rem, transparent 0.0625rem)', backgroundSize: '3rem 3rem'}}></div>
</div>
<header className="sticky top-0 z-50">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-4">
<div className="rounded-full border border-slate-200/80 bg-slate-900 text-white shadow-[0_0.75rem_2rem_rgba(15,23,42,0.08)]">
<div className="h-16 flex items-center justify-between px-4 sm:px-5 md:px-6">
<a className="flex items-center gap-3" href="#">
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-slate-900">
<i className="h-4 w-4" data-lucide="zap"></i>
</span>
<span className="text-base sm:text-lg font-semibold tracking-tight">Rollyy</span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
<a className="transition hover:text-white" href="#about">About</a>
<a className="transition hover:text-white" href="#features">Features</a>
<a className="transition hover:text-white" href="#cinema">Autonomy</a>
<a className="transition hover:text-white" href="#industries">Industries</a>
<a className="transition hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2 sm:gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100" href="#contact">
<span>Book Demo</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex lg:hidden items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white">
<i className="h-4 w-4" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</div>
</header>
<main className="relative z-10">
<section className="pt-8 sm:pt-10 md:pt-12 pb-16 md:pb-24" id="top">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
<div className="rounded-[2rem] sm:rounded-[2.5rem] border border-white/70 bg-[#fbfcf8] shadow-[0_1.5rem_4rem_rgba(15,23,42,0.05)] overflow-hidden">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center px-6 sm:px-8 md:px-10 lg:px-14 py-10 sm:py-12 md:py-16">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm">
<span className="inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
                Sustainable autonomous EV charging
              </div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-slate-900">
                Mobile charging,
                <span className="text-slate-400">reimagined</span>
                for modern fleets.
              </h1>
<p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
                Eliminate fixed infrastructure with autonomous charging systems that move to the vehicle, reduce setup cost, and keep operations continuously online.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_0.75rem_2rem_rgba(163,230,53,0.28)] transition hover:brightness-95" href="#contact">
<span>Start Pilot Program</span>
<i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm text-slate-700 transition hover:bg-slate-50" href="#cinema">
<i className="h-4 w-4" data-lucide="play"></i>
<span>Watch Overview</span>
</a>
</div>
<div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-500">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
<i className="h-4 w-4 text-slate-900" data-lucide="badge-check"></i>
                  Smart charging, no setup required
                </div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
<i className="h-4 w-4 text-lime-500" data-lucide="leaf"></i>
                  Lower-emission fleet operations
                </div>
</div>
<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
<p className="text-xs text-slate-500">CAPEX Reduction</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">40%</p>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
<p className="text-xs text-slate-500">Infrastructure</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Zero fixed</p>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
<p className="text-xs text-slate-500">Battery Flow</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">150kW</p>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
<p className="text-xs text-slate-500">Navigation</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">AI guided</p>
</div>
</div>
</div>
<div className="relative">
<div className="relative mx-auto max-w-2xl aspect-[1.05/1]">
<div className="absolute inset-[8%] rounded-full bg-lime-200/60 blur-3xl"></div>
<div className="absolute inset-[18%] rounded-full border border-lime-200/80"></div>
<div className="absolute inset-[28%] rounded-full border border-lime-200/70"></div>
<div className="absolute left-[5%] top-[18%] rounded-[1.25rem] border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
<p className="text-xs text-slate-500">Closest station</p>
<p className="mt-1 text-sm font-medium text-slate-900">Green Town Hub</p>
</div>
<div className="absolute right-[4%] bottom-[18%] rounded-[1.25rem] border border-slate-200 bg-white/95 px-4 py-3 shadow-sm">
<div className="grid grid-cols-2 gap-5">
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-900">8k+</p>
<p className="mt-1 text-xs text-slate-500">Charging stations</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-900">50k+</p>
<p className="mt-1 text-xs text-slate-500">EV drivers</p>
</div>
</div>
</div>
<div className="absolute inset-x-[10%] bottom-[14%] top-[26%]">
<div className="relative h-full w-full">
<div className="absolute left-[5%] bottom-[8%] w-[56%] h-[34%] rounded-[3rem] border border-slate-300 bg-[linear-gradient(180deg,#1f2937,#0f172a)] shadow-[0_2rem_3rem_rgba(15,23,42,0.18)] -rotate-6"></div>
<div className="absolute left-[13%] bottom-[24%] w-[40%] h-[16%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-xl"></div>
<div className="absolute left-[10%] bottom-[12%] h-[4%] w-[18%] rounded-full bg-white/60 blur-md"></div>
<div className="absolute left-[40%] bottom-[16%] h-[5%] w-[8%] rounded-full bg-slate-900"></div>
<div className="absolute left-[16%] bottom-[16%] h-[5%] w-[8%] rounded-full bg-slate-900"></div>
<div className="absolute left-[20%] bottom-[26%] w-[18%] h-[4%] rounded-full bg-white/60 blur-[0.15rem]"></div>
<div className="absolute right-[18%] bottom-[18%] w-[18%] h-[48%] rounded-[1.75rem] border border-slate-300 bg-[linear-gradient(180deg,#1f2937,#111827)] shadow-[0_2rem_3rem_rgba(15,23,42,0.16)]"></div>
<div className="absolute right-[22%] bottom-[42%] w-[10%] h-[14%] rounded-[0.75rem] border border-lime-300/50 bg-lime-300/15 shadow-[0_0_1.5rem_rgba(163,230,53,0.35)]"></div>
<div className="absolute right-[28%] bottom-[55%] w-[6%] h-[6%] rounded-[0.75rem] bg-white/10"></div>
<div className="absolute right-[16%] bottom-[14%] w-[22%] h-[4%] rounded-full bg-slate-900/20 blur-md"></div>
<div className="absolute left-[50%] bottom-[25%] w-[5%] h-[5%] rounded-full border border-slate-300 bg-slate-800"></div>
<div className="absolute right-[19%] bottom-[38%] w-[4%] h-[4%] rounded-full border border-slate-300 bg-slate-800"></div>
<div className="absolute left-[52%] bottom-[27%] w-[24%] h-[24%]">
<svg className="w-full h-full overflow-visible" viewbox="0 0 200 160">
<path d="M10 20 C60 10, 40 90, 90 100 S145 90, 145 140" fill="none" stroke="#84cc16" strokeLinecap="round" strokeWidth="6"></path>
<path d="M10 20 C60 10, 40 90, 90 100 S145 90, 145 140" fill="none" stroke="rgba(163,230,53,0.25)" strokeLinecap="round" strokeWidth="12"></path>
</svg>
</div>
</div>
</div>
<div className="absolute right-[16%] top-[18%] rounded-[1.25rem] border border-lime-200 bg-lime-50 px-4 py-3 shadow-sm">
<p className="text-xs text-lime-700">Charge state</p>
<p className="mt-1 text-sm font-medium text-slate-900">Ready to deploy</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="about">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
<div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500">About Rollyy</p>
<h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Move energy to the vehicle, not the vehicle to energy.
            </h2>
<p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Traditional charging is static, slow to deploy, and expensive to scale. Rollyy introduces a lighter operating model with autonomous charging units that reach vehicles where they already park.
            </p>
<div className="mt-8 grid sm:grid-cols-2 gap-4">
<div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
<div className="flex items-start gap-3">
<div className="h-11 w-11 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
<i className="h-5 w-5 text-slate-900" data-lucide="construction"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">No site buildout</p>
<p className="mt-1 text-sm text-slate-500">Deploy without trenching, downtime, or disruption.</p>
</div>
</div>
</div>
<div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
<div className="flex items-start gap-3">
<div className="h-11 w-11 rounded-2xl border border-lime-200 bg-lime-50 flex items-center justify-center">
<i className="h-5 w-5 text-lime-600" data-lucide="leaf"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Lower emissions</p>
<p className="mt-1 text-sm text-slate-500">Reduce idle movement with smarter charging orchestration.</p>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs text-slate-500">Sensor Array</p>
<p className="mt-2 text-xl font-medium text-slate-900">LiDAR + vision fusion</p>
</div>
<div className="h-12 w-12 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
<i className="h-5 w-5 text-slate-900" data-lucide="radar"></i>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-500">LiDAR</p>
<div className="mt-4 h-24 rounded-[1rem] border border-slate-200 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.22),transparent_60%)]"></div>
</div>
<div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-500">Camera</p>
<div className="mt-4 h-24 rounded-[1rem] border border-slate-200 bg-white flex items-center justify-center">
<div className="h-10 w-10 rounded-full border border-slate-300 bg-slate-900"></div>
</div>
</div>
<div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-500">Compute</p>
<div className="mt-4 h-24 rounded-[1rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff,#f1f5f9)]"></div>
</div>
</div>
</div>
<div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
<p className="text-xs text-slate-500">Autonomy Stack</p>
<p className="mt-2 text-lg font-medium text-slate-900">Obstacle reasoning</p>
<div className="mt-4 h-28 rounded-[1.25rem] border border-slate-200 bg-[radial-gradient(circle_at_25%_70%,rgba(163,230,53,0.18),transparent_24%),radial-gradient(circle_at_75%_30%,rgba(15,23,42,0.08),transparent_20%),#f8fafc]"></div>
</div>
<div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
<p className="text-xs text-slate-500">Battery Core</p>
<p className="mt-2 text-lg font-medium text-slate-900">Mobile dense power</p>
<div className="mt-4 h-28 rounded-[1.25rem] border border-lime-200 bg-[linear-gradient(135deg,rgba(163,230,53,0.14),rgba(255,255,255,1))]"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="features">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-[0.2em] text-slate-500">Core Capabilities</p>
<h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Precision, autonomy, and scale.
          </h2>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6 auto-rows-[minmax(16rem,auto)]">
<div className="md:row-span-2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs text-slate-500">Real-time Telemetry</p>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">Live fleet awareness</h3>
<p className="mt-3 text-base text-slate-500 leading-relaxed">Unit location, queue logic, and charging progress in one calm command layer.</p>
</div>
<div className="h-12 w-12 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0">
<i className="h-5 w-5 text-slate-900" data-lucide="map-pinned"></i>
</div>
</div>
<div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 h-[28rem] relative overflow-hidden">
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'linear-gradient(rgba(15,23,42,0.04) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(15,23,42,0.04) 0.0625rem, transparent 0.0625rem)', backgroundSize: '2.5rem 2.5rem'}}></div>
<div className="absolute top-[18%] left-[22%] h-4 w-4 rounded-full bg-lime-400 shadow-[0_0_1.25rem_rgba(163,230,53,0.75)]"></div>
<div className="absolute top-[38%] left-[62%] h-3 w-3 rounded-full bg-slate-900"></div>
<div className="absolute top-[58%] left-[40%] h-4 w-4 rounded-full bg-lime-400 shadow-[0_0_1.25rem_rgba(163,230,53,0.75)]"></div>
<div className="absolute top-[70%] left-[70%] h-3 w-3 rounded-full bg-slate-400"></div>
<div className="absolute top-[22%] left-[24%] w-[38%] h-[24%] border-l border-t border-lime-400/50 rounded-tl-[2rem]"></div>
<div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Unit R-07</span>
<span className="text-lime-600">En route</span>
</div>
<div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,#a3e635,#84cc16)]"></div>
</div>
</div>
</div>
</div>
<div className="md:col-span-2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="grid lg:grid-cols-2 gap-6 items-center">
<div>
<p className="text-xs text-slate-500">Eco Intelligence</p>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">Adaptive energy orchestration</h3>
<p className="mt-3 text-base text-slate-500 leading-relaxed">Battery routing and charging decisions optimize uptime, power use, and sustainability across every site.</p>
</div>
<div className="relative h-64 rounded-[1.75rem] border border-slate-200 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18),rgba(255,255,255,1)_42%,#f8fafc_100%)] overflow-hidden">
<div className="absolute inset-[12%] rounded-full border border-lime-200"></div>
<div className="absolute inset-[24%] rounded-full border border-lime-200"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-28 rounded-[1.75rem] border border-slate-300 bg-[linear-gradient(180deg,#1f2937,#111827)] shadow-[0_1.5rem_2.5rem_rgba(15,23,42,0.14)]"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] h-24 w-12 rounded-[0.75rem] border border-lime-300/50 bg-lime-300/15 shadow-[0_0_1.25rem_rgba(163,230,53,0.35)]"></div>
<div className="absolute top-[18%] left-[26%] h-3 w-3 rounded-full bg-lime-400"></div>
<div className="absolute top-[64%] left-[22%] h-2.5 w-2.5 rounded-full bg-lime-400"></div>
<div className="absolute top-[36%] right-[24%] h-3 w-3 rounded-full bg-lime-400"></div>
<div className="absolute top-[72%] right-[28%] h-2.5 w-2.5 rounded-full bg-lime-400"></div>
</div>
</div>
</div>
<div className="md:col-span-2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs text-slate-500">Cloud Management</p>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">Deploy globally, control centrally</h3>
<p className="mt-3 text-base text-slate-500 leading-relaxed">Scheduling, diagnostics, analytics, and policy controls across distributed charging fleets.</p>
</div>
<div className="h-12 w-12 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0">
<i className="h-5 w-5 text-slate-900" data-lucide="cloud"></i>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-500">Sites</p>
<p className="mt-2 text-xl font-medium text-slate-900">128</p>
</div>
<div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-500">Units Active</p>
<p className="mt-2 text-xl font-medium text-slate-900">314</p>
</div>
<div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-500">Availability</p>
<p className="mt-2 text-xl font-medium text-slate-900">99.2%</p>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-xs text-slate-500">System Sync</p>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">Always-on resilience</h3>
<div className="mt-6 h-40 rounded-[1.25rem] border border-slate-200 bg-slate-50 flex items-center justify-center">
<div className="h-20 w-20 rounded-full border border-lime-200 flex items-center justify-center shadow-[0_0_1.5rem_rgba(163,230,53,0.15)]">
<i className="h-7 w-7 text-slate-900" data-lucide="server-cog"></i>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="cinema">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs uppercase tracking-[0.2em] text-slate-500">See Rollyy in Action</p>
<h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Autonomous navigation, visualized simply.
          </h2>
</div>
<div className="mt-10 max-w-[75rem] mx-auto">
<div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 sm:p-4 shadow-sm">
<div className="relative aspect-video rounded-[1.75rem] overflow-hidden border border-slate-200 bg-[linear-gradient(180deg,#f8fafc,#f1f5f9)]">
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'linear-gradient(rgba(15,23,42,0.04) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(15,23,42,0.04) 0.0625rem, transparent 0.0625rem)', backgroundSize: '4rem 4rem'}}></div>
<div className="absolute inset-[18%] rounded-full bg-lime-100 blur-3xl"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="group h-20 w-20 rounded-full border border-lime-200 bg-white shadow-[0_1rem_2rem_rgba(15,23,42,0.08)] flex items-center justify-center transition hover:scale-105">
<i className="h-7 w-7 text-slate-900" data-lucide="play"></i>
</button>
</div>
<div className="absolute top-5 left-5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
                Obstacle detected: 2.4m
              </div>
<div className="absolute top-5 right-5 rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs text-lime-700 shadow-sm">
                Battery flow: 150kW
              </div>
<div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 shadow-sm">
<div>
<p className="text-xs text-slate-500">Autonomous mode</p>
<p className="mt-1 text-sm font-medium text-slate-900">Navigation confidence: 99.1%</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-xs text-slate-500">Live replay</span>
<div className="h-2 w-24 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-2/3 rounded-full bg-lime-400"></div>
</div>
</div>
</div>
<div className="absolute left-[18%] top-[34%] h-3 w-3 rounded-full bg-lime-400"></div>
<div className="absolute left-[32%] top-[52%] h-3 w-3 rounded-full bg-lime-400"></div>
<div className="absolute right-[24%] top-[38%] h-3 w-3 rounded-full bg-slate-900"></div>
<div className="absolute right-[30%] bottom-[28%] h-3 w-3 rounded-full bg-lime-400"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="industries">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-[0.2em] text-slate-500">Industries</p>
<h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Tailored for complex operations.
          </h2>
</div>
<div className="mt-10 grid lg:grid-cols-4 gap-6 auto-rows-[minmax(14rem,auto)]">
<div className="lg:row-span-2 rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
<div className="h-40 rounded-[1.5rem] border border-slate-200 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18),transparent_50%),linear-gradient(180deg,#f8fafc,#eef2f7)] flex items-center justify-center">
<div className="w-3/4 h-[0.18rem] bg-slate-800 rounded-full rotate-[-10deg]"></div>
</div>
<div className="mt-6">
<p className="text-xs text-slate-500">Airports</p>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">High-pressure turnaround charging</h3>
<p className="mt-3 text-base text-slate-500">Airport turnaround efficiency improved by 15% with mobile dispatch.</p>
</div>
</div>
<div className="lg:col-span-2 rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs text-slate-500">Fleets</p>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-slate-900">Power for dense vehicle operations</h3>
<p className="mt-3 text-base text-slate-500">Delivery uptime improves with mobile charging lanes and dynamic scheduling.</p>
</div>
<i className="h-6 w-6 text-slate-900" data-lucide="bus"></i>
</div>
<div className="mt-6 grid grid-cols-4 gap-3">
<div className="h-24 rounded-[1.25rem] border border-slate-200 bg-slate-50"></div>
<div className="h-24 rounded-[1.25rem] border border-slate-200 bg-slate-50"></div>
<div className="h-24 rounded-[1.25rem] border border-lime-200 bg-lime-50"></div>
<div className="h-24 rounded-[1.25rem] border border-slate-200 bg-slate-50"></div>
</div>
</div>
<div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Cities</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-slate-900">Flexible curbside energy</h3>
</div>
<i className="h-5 w-5 text-slate-900" data-lucide="map"></i>
</div>
<div className="mt-6 h-36 rounded-[1.25rem] border border-slate-200 bg-slate-50 relative overflow-hidden">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'linear-gradient(rgba(15,23,42,0.04) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(15,23,42,0.04) 0.0625rem, transparent 0.0625rem)', backgroundSize: '2rem 2rem'}}></div>
<div className="absolute left-[28%] top-[22%] h-3 w-3 rounded-full bg-lime-400"></div>
<div className="absolute left-[62%] top-[58%] h-3 w-3 rounded-full bg-lime-400"></div>
</div>
</div>
<div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Parking</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-slate-900">Blueprint-ready deployments</h3>
</div>
<i className="h-5 w-5 text-slate-900" data-lucide="square-parking"></i>
</div>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="h-16 rounded-[1rem] border border-lime-200 bg-lime-50"></div>
<div className="h-16 rounded-[1rem] border border-slate-200 bg-slate-50"></div>
<div className="h-16 rounded-[1rem] border border-slate-200 bg-slate-50"></div>
<div className="h-16 rounded-[1rem] border border-slate-200 bg-slate-50"></div>
<div className="h-16 rounded-[1rem] border border-lime-200 bg-lime-50"></div>
<div className="h-16 rounded-[1rem] border border-slate-200 bg-slate-50"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="contact">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
<div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-900 shadow-[0_2rem_4rem_rgba(15,23,42,0.12)]">
<div className="relative grid lg:grid-cols-2 gap-8 px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 items-center">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Pilot Access</p>
<h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Lead the next charging rollout.
              </h2>
<p className="mt-5 max-w-xl text-lg text-slate-300 leading-relaxed">
                Limited pilot slots available for Q3 2026.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-medium text-slate-900 transition hover:brightness-95" href="#">
<span>Start Pilot Program</span>
<i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10" href="#">
                  Speak with Sales
                </a>
</div>
</div>
<div className="relative min-h-[20rem] flex items-center justify-center">
<div className="absolute h-64 w-64 rounded-full bg-lime-300/20 blur-3xl"></div>
<div className="absolute h-72 w-72 rounded-full border border-lime-300/20"></div>
<div className="absolute h-96 w-96 rounded-full border border-white/10"></div>
<div className="relative w-48 h-64 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#1f2937,#111827)] shadow-2xl">
<div className="absolute inset-x-5 top-5 h-10 rounded-[1rem] bg-white/10"></div>
<div className="absolute inset-x-8 top-20 bottom-20 rounded-[1.25rem] border border-lime-300/40 bg-[linear-gradient(180deg,rgba(163,230,53,0.24),rgba(255,255,255,0.04))] shadow-[0_0_2rem_rgba(163,230,53,0.2)]"></div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative z-10 border-t border-slate-200">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-14">
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
<div>
<a className="text-lg font-semibold tracking-tight text-slate-900" href="#">Rollyy</a>
<p className="mt-4 text-sm text-slate-500 max-w-xs">
            Mobile autonomous EV charging for fleets, airports, cities, and next-generation infrastructure.
          </p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Company</p>
<div className="mt-4 space-y-3 text-sm text-slate-500">
<a className="block hover:text-slate-900 transition" href="#">About</a>
<a className="block hover:text-slate-900 transition" href="#">Careers</a>
<a className="block hover:text-slate-900 transition" href="#">Press</a>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Product</p>
<div className="mt-4 space-y-3 text-sm text-slate-500">
<a className="block hover:text-slate-900 transition" href="#">Autonomy</a>
<a className="block hover:text-slate-900 transition" href="#">Telemetry</a>
<a className="block hover:text-slate-900 transition" href="#">Cloud</a>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Resources</p>
<div className="mt-4 space-y-3 text-sm text-slate-500">
<a className="block hover:text-slate-900 transition" href="#">Case Studies</a>
<a className="block hover:text-slate-900 transition" href="#">Documentation</a>
<a className="block hover:text-slate-900 transition" href="#">Contact</a>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Terminal</p>
<div className="mt-4 rounded-[1.25rem] border border-slate-200 bg-white p-4">
<div className="flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400"></span>
</span>
<span className="text-sm text-slate-600">System Status: Nominal</span>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2026 Rollyy. All rights reserved.</p>
<div className="flex items-center gap-5 text-xs text-slate-400">
<a className="hover:text-slate-900 transition" href="#">Privacy</a>
<a className="hover:text-slate-900 transition" href="#">Terms</a>
<a className="hover:text-slate-900 transition" href="#">Cookies</a>
</div>
</div>
</div>
<a className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full border border-slate-200 bg-white shadow-[0_1rem_2rem_rgba(15,23,42,0.08)] flex items-center justify-center text-slate-900 hover:bg-slate-50 transition" href="#top">
<i className="h-5 w-5" data-lucide="arrow-up"></i>
</a>
</footer>


    </>
  );
}
