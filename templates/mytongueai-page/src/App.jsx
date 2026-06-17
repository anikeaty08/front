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



    lucide.createIcons();

    (function () {
      const ctx = document.getElementById('wellnessChart');
      if (!ctx) return;

      const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
          {
            label: 'Hydration Score',
            data: [65, 70, 68, 82, 85, 88],
            borderColor: 'rgba(52, 211, 153, 1)', // Emerald
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: '#000',
            pointBorderColor: 'rgba(52, 211, 153, 1)',
          },
          {
            label: 'Stress Markers',
            data: [80, 75, 78, 60, 55, 45], // Lower is better
            borderColor: 'rgba(167, 139, 250, 0.8)', // Violet
            borderDash: [5, 5],
            tension: 0.4,
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
          }
        ],
      };

      new Chart(ctx, {
        type: 'line',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { 
               display: true, 
               grid: { display: false, color: 'rgba(255,255,255,0.05)' },
               ticks: { color: 'rgba(255,255,255,0.4)', font: { size: 10 } }
            },
            y: { 
               display: true, 
               grid: { color: 'rgba(255,255,255,0.05)' },
               ticks: { display: false },
               border: { display: false } 
            },
          },
          plugins: {
            legend: { 
               display: true,
               labels: { color: 'rgba(255,255,255,0.6)', font: { size: 11 }, boxWidth: 10 }
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(20,20,20,0.9)',
              titleColor: '#fff',
              bodyColor: '#ccc',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 10,
              displayColors: true,
            },
          },
        },
      });
    })();

    // Cursor ring logic
    const c = document.getElementById('cursor');
    window.addEventListener('pointermove', (e)=>{ c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; });

    // Mobile nav logic
    const menuBtn = document.getElementById('menuBtn');
    // Simple toggle for demo
    menuBtn.addEventListener('click', () => {
       alert("Mobile menu would open here.");
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
      
<div className="" id="wrapper">

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-900/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
</div>
<div className="gradient-blur" style={{}}>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur { position: fixed; z-index: 5; inset: 0 0 auto 0; height: 12%; pointer-events: none; }
    .gradient-blur>div, .gradient-blur::before, .gradient-blur::after { position: absolute; inset: 0; }
    .gradient-blur::before { content: ""; z-index: 1; backdrop-filter: blur(0.5px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%); }
    .gradient-blur>div:nth-of-type(1) { z-index: 2; backdrop-filter: blur(1px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%); }
    .gradient-blur>div:nth-of-type(2) { z-index: 3; backdrop-filter: blur(2px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%); }
    .gradient-blur>div:nth-of-type(3) { z-index: 4; backdrop-filter: blur(4px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%); }
    .gradient-blur>div:nth-of-type(4) { z-index: 5; backdrop-filter: blur(8px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%); }
    .gradient-blur>div:nth-of-type(5) { z-index: 6; backdrop-filter: blur(16px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%); }
    .gradient-blur>div:nth-of-type(6) { z-index: 7; backdrop-filter: blur(32px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%); }
    .gradient-blur::after { content: ""; z-index: 8; backdrop-filter: blur(64px); mask: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%); }
  </style>
</div>

<div className="cursor-ring hidden md:block" id="cursor"></div>

<header className="fixed z-40 top-0 right-0 left-0">
<div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
<a className="font-bold tracking-tight text-xl flex items-center gap-2" href="#top">
<i className="w-6 h-6 text-white/80" data-lucide="scan-face"></i>
<span>MyTongue<span className="text-white/50">AI</span></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="transition hover:text-white" href="#how-it-works">How it Works</a>
<a className="transition hover:text-white" href="#benefits">Membership</a>
<a className="transition hover:text-white" href="#founder">Founders</a>
<a className="transition hover:text-white" href="#faq">FAQ</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium transition bg-white text-black hover:bg-white/90" href="#scan">Start Free Scan</a>
</nav>
<button className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition border-white/15 hover:border-white/30 text-xs" id="menuBtn">Menu</button>
</div>
</header>

<section className="min-h-[100svh] flex md:items-center bg-center bg-[url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop)] bg-cover pt-32 pb-20 relative items-end" id="top" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'}}>

<div className="absolute inset-0 bg-black/70"></div>
<div className="grid md:grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-6 relative z-10 items-center">
<div className="md:col-span-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs font-medium text-white/80 tracking-wide">Signal Literacy for Real Life</span>
</div>
<h1 className="hero-word md:text-8xl leading-[0.9] text-5xl font-extrabold tracking-tight text-balance">
<span className="block text-white">Stop Guessing.</span>
<span className="block text-white/50 stroke-ghost">Start Observing.</span>
</h1>
<p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed text-balance">
          A non-diagnostic tongue scan that organizes visible signals into a simple summary — so you can notice patterns early and make better daily choices.
        </p>

<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
<a className="group rounded-full px-8 py-4 font-semibold transition bg-white text-black hover:bg-white/90 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#scan">
<i className="w-5 h-5" data-lucide="camera"></i>
            Start Free Scan
          </a>
<a className="rounded-full px-6 py-4 border transition border-white/20 hover:border-white/40 hover:bg-white/5 text-white/80 flex items-center gap-2" href="#benefits">
            See Membership Benefits
            <i className="w-4 h-4 opacity-50" data-lucide="arrow-down"></i>
</a>
</div>
<p className="mt-6 text-xs text-white/40 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="shield-check"></i>
          Non-diagnostic. Educational. Designed for clarity.
        </p>
</div>

<div className="hidden md:block md:col-span-4 relative h-full min-h-[400px]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 glass-high rounded-3xl p-4 floating rotate-[-6deg]">
<div className="w-full h-40 bg-white/5 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-indigo-500/20"></div>
<div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-emerald-400"></div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 w-2/3 bg-white/20 rounded"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="flex gap-2 mt-4">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs">💧</div>
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs">💤</div>
</div>
</div>

<div className="absolute -right-6 -bottom-6 glass rounded-full h-16 w-16 flex items-center justify-center text-xs font-bold text-center leading-none border-white/20">
              Free<br/>Scan
            </div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-white/[0.02]">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="px-4 py-2 text-center md:text-left">
<p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Hydration Signals</p>
<p className="text-sm text-white/70">Texture and coating changes often reflect your fluid balance before you feel thirsty.</p>
</div>
<div className="px-4 py-2 text-center md:text-left pt-8 md:pt-2">
<p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">Stress Load</p>
<p className="text-sm text-white/70">Tension marks on the sides can hint at clenching or accumulated systemic stress.</p>
</div>
<div className="px-4 py-2 text-center md:text-left pt-8 md:pt-2">
<p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">Digestion Rhythm</p>
<p className="text-sm text-white/70">Surface variations may correlate with how well you're metabolizing your meals.</p>
</div>
</div>
<div className="mt-10 text-center border-t border-white/10 pt-8">
<p className="text-white/50 text-sm">You’re not getting a diagnosis. You’re getting a clearer conversation with your body.</p>
</div>
</div>
</section>

<section className="pin-section md:py-32 pt-24 pb-24" id="scan">
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-5">
<h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Instant <span className="stroke-ghost">Clarity</span></h2>
<p className="mt-6 text-lg text-white/70">Take a photo, get a mirror. Within seconds, our AI highlights visible markers you might miss in the bathroom mirror.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="p-1 rounded bg-white/10 mt-1"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<div>
<strong className="block text-white text-sm">Visual Summary</strong>
<span className="text-sm text-white/50">A clean, annotated map of your tongue's topography.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="p-1 rounded bg-white/10 mt-1"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<div>
<strong className="block text-white text-sm">Key Signals</strong>
<span className="text-sm text-white/50">Objective observations on color, coating, and shape.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="p-1 rounded bg-white/10 mt-1"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<div>
<strong className="block text-white text-sm">Suggested Self-Check</strong>
<span className="text-sm text-white/50">Prompts to reflect on your sleep, water, or stress today.</span>
</div>
</li>
</ul>
<div className="mt-10">
<button className="w-full md:w-auto rounded-full px-8 py-3 font-medium transition bg-white text-black hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.15)]">Start Free Scan Now</button>
<p className="text-xs text-white/30 mt-3 text-center md:text-left">No credit card required for initial scan.</p>
</div>
</div>
<div className="md:col-span-7 relative">

<div className="glass rounded-3xl p-1 md:p-2 relative z-10 rotate-1 transition hover:rotate-0 duration-500">
<div className="bg-[#050505] rounded-2xl overflow-hidden border border-white/5">

<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-mono text-white/50">SCAN_ID: 8829_X</span>
<span className="text-xs font-mono text-emerald-400">COMPLETED</span>
</div>

<div className="p-6 grid gap-6">
<div className="flex gap-4">
<div className="w-24 h-24 rounded-xl bg-white/5 shrink-0 flex items-center justify-center overflow-hidden">
<i className="w-8 h-8 text-white/20" data-lucide="user"></i>
</div>
<div className="space-y-2 w-full">
<div className="h-3 w-3/4 bg-white/10 rounded"></div>
<div className="h-3 w-1/2 bg-white/10 rounded"></div>
<div className="flex gap-2 mt-2">
<span className="text-[10px] border border-white/10 rounded px-2 py-1 text-white/60">Coating</span>
<span className="text-[10px] border border-white/10 rounded px-2 py-1 text-white/60">Color</span>
</div>
</div>
</div>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-blue-400" data-lucide="droplets"></i>
<span className="text-xs font-bold text-white/80">Hydration Indicator</span>
</div>
<p className="text-xs text-white/50">Surface texture suggests adequate fluid intake, though slight dryness at edges.</p>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-rose-400" data-lucide="activity"></i>
<span className="text-xs font-bold text-white/80">Rest Patterns</span>
</div>
<p className="text-xs text-white/50">Midline definition may correlate with recent sleep disruption.</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]" id="how-it-works">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
</div>
<div className="grid md:grid-cols-3 gap-10">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-white/80">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
<h3 className="font-medium text-lg">1. Take a Photo</h3>
<p className="text-sm text-white/50 mt-2 max-w-xs">Use good lighting. Stick your tongue out naturally. Snap via our secure web app.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-white/80">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="font-medium text-lg">2. Get Summary</h3>
<p className="text-sm text-white/50 mt-2 max-w-xs">AI analyzes texture, color, and shape instantly to provide visible feedback.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-white/80">
<i className="w-6 h-6" data-lucide="repeat"></i>
</div>
<h3 className="font-medium text-lg">3. Repeat for Trends</h3>
<p className="text-sm text-white/50 mt-2 max-w-xs">The single scan is a snapshot. Tracking over time reveals the story.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="benefits">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
<div className="max-w-2xl">
<p className="uppercase tracking-widest text-xs text-emerald-400 mb-2">Membership Benefits</p>
<h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">The real power isn't one scan. <br/><span className="stroke-ghost">It's the trendline.</span></h2>
<p className="mt-4 max-w-xl text-white/70">Our body changes daily. Membership unlocks the tools to see what's improving or drifting over weeks and months.</p>
</div>
<div className="flex gap-4">
<a className="rounded-full px-6 py-3 bg-white text-black font-medium hover:bg-white/90 transition text-sm" href="#plans">Start Membership</a>
</div>
</div>
<div className="grid gap-8 lg:grid-cols-3">

<div className="glass rounded-3xl p-8 lg:col-span-2 flex flex-col justify-between group hover:border-white/20 transition">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold">Wellness Trends</h3>
<p className="text-sm text-white/60 mt-2 max-w-md">Visualize how your signals change in response to diet, sleep, and stress.</p>
</div>
<div className="p-2 bg-white/5 rounded-full"><i className="w-5 h-5 text-emerald-400" data-lucide="trending-up"></i></div>
</div>
<div className="mt-4 rounded-2xl border px-4 py-4 bg-black/40 border-white/5 relative overflow-hidden">

<canvas className="w-full h-48 md:h-64" id="wellnessChart" style={{display: 'block', boxSizing: 'border-box'}}></canvas>
</div>
</div>

<div className="space-y-6">
<div className="glass rounded-3xl p-6 hover:border-white/20 transition h-full">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="infinity"></i>
</div>
<h3 className="text-lg font-bold">Unlimited Scans</h3>
<p className="text-sm text-white/60 mt-2">Scan every morning if you like. Track changes week to week without limits.</p>
</div>
<div className="glass rounded-3xl p-6 hover:border-white/20 transition h-full">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="columns"></i>
</div>
<h3 className="text-lg font-bold">Compare Scans</h3>
<p className="text-sm text-white/60 mt-2">Side-by-side view. Compare "Vacation You" vs "Work Week You".</p>
</div>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="glass rounded-3xl p-6 flex items-center gap-6 hover:border-white/20 transition">
<div className="p-4 bg-white/5 rounded-2xl"><i className="w-6 h-6 text-white/80" data-lucide="calendar-check"></i></div>
<div>
<h3 className="font-bold text-lg">Monthly Signal Check-In</h3>
<p className="text-sm text-white/60">A consolidated one-page recap of your month's patterns.</p>
</div>
</div>
<div className="glass rounded-3xl p-6 flex items-center gap-6 hover:border-white/20 transition">
<div className="p-4 bg-white/5 rounded-2xl"><i className="w-6 h-6 text-white/80" data-lucide="share-2"></i></div>
<div>
<h3 className="font-bold text-lg">Clinician Share</h3>
<p className="text-sm text-white/60">Export a professional report if you choose to show a provider.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-4 border-t border-b border-white/10 bg-gradient-to-r from-emerald-900/20 to-black relative overflow-hidden" id="founder">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
<i className="w-4 h-4" data-lucide="lock"></i>
</div>
<div className="text-center md:text-left">
<p className="text-sm font-semibold text-white">Founder Lifetime Access closes soon</p>
<p className="text-xs text-white/60">Lock in once. Keep access forever.</p>
</div>
</div>
<div className="flex items-center gap-6">

<div className="flex gap-2 text-center font-mono text-sm tracking-widest text-emerald-400/80">
<div className="bg-black/30 rounded px-2 py-1">03</div>:
              <div className="bg-black/30 rounded px-2 py-1">12</div>:
              <div className="bg-black/30 rounded px-2 py-1">44</div>
</div>
<a className="text-xs font-bold uppercase tracking-wide border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition" href="#founder-page">
              View Founder Offer →
           </a>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl font-bold mb-10 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group glass rounded-2xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Is this a medical diagnosis?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-white/60 px-6 pb-6 pt-0 text-sm">
               No. MyTongueAI is a self-care tool for pattern recognition and education. We provide observations based on traditional wellness concepts, not medical advice. Always consult a doctor for concerns.
            </div>
</details>
<details className="group glass rounded-2xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>How accurate is the scan?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-white/60 px-6 pb-6 pt-0 text-sm">
               We use advanced computer vision to analyze color and texture. Lighting matters—we'll guide you to take a clear photo for the best results.
            </div>
</details>
<details className="group glass rounded-2xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Is my photo private?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-white/60 px-6 pb-6 pt-0 text-sm">
               Yes. Your photos are encrypted and used solely for your analysis. We do not sell your biometric data.
            </div>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/10 bg-black">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white/50" data-lucide="scan-face"></i>
<p className="text-sm text-white/50">© 2025 MyTongueAI</p>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="transition text-white/50 hover:text-white" href="#">Terms</a>
<a className="transition text-white/50 hover:text-white" href="#">Privacy</a>
<a className="transition text-white/50 hover:text-white" href="#contact">Contact Support</a>
</div>
</div>
</footer>





    </>
  );
}
