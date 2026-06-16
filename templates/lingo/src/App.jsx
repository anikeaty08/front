import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) window.lucide.createIcons();
    });

    // Charts
    function lineGradient(ctx, colorFrom, colorTo) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 120);
      gradient.addColorStop(0, colorFrom);
      gradient.addColorStop(1, colorTo);
      return gradient;
    }

    // Affect chart (distribution-like)
    const affectCtx = document.getElementById('affectChart')?.getContext('2d');
    if (affectCtx) {
      new Chart(affectCtx, {
        type: 'line',
        data: {
          labels: Array.from({length: 24}, (_, i) => i),
          datasets: [{
            data: [0,0,1,2,4,8,12,16,22,28,34,40,42,40,34,28,22,16,12,9,6,3,1,0],
            borderColor: '#8b5cf6',
            borderWidth: 2,
            fill: true,
            backgroundColor: lineGradient(affectCtx, 'rgba(139,92,246,0.25)','rgba(139,92,246,0.05)'),
            pointRadius: 0,
            tension: 0.35
          }]
        },
        options: {
          animation: { duration: 600 },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } }
          }
        }
      });
    }

    // Load chart
    const loadCtx = document.getElementById('loadChart')?.getContext('2d');
    if (loadCtx) {
      new Chart(loadCtx, {
        type: 'line',
        data: {
          labels: Array.from({length: 30}, (_, i) => i),
          datasets: [{
            data: [40,42,41,39,45,48,52,55,53,50,49,51,54,58,57,55,54,53,52,50,49,51,52,54,56,58,57,56,56,56],
            borderColor: '#ec4899',
            borderWidth: 2,
            fill: true,
            backgroundColor: lineGradient(loadCtx, 'rgba(236,72,153,0.25)','rgba(236,72,153,0.05)'),
            pointRadius: 0,
            tension: 0.35
          }]
        },
        options: {
          animation: { duration: 700 },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full -z-10 h-screen blur-2xl bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/75e3a9df-4eb2-4588-b94a-52add4dded99_3840w.jpg")'}}></div>


<div className="relative backdrop-blur-none">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-indigo-400/20 to-cyan-400/20 blur-3xl"></div>
<div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-gradient-to-tr from-pink-300/20 via-purple-300/20 to-sky-300/20 blur-3xl"></div>
</div>

<header className="sticky top-0 z-30">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex supports-[backdrop-filter]:bg-white/100 bg-slate-50 border-neutral-200 border rounded-2xl mt-5 pt-2 pr-3 pb-2 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-none items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76ef717a-2883-4c6a-bf8d-093181929bd8_320w.jpg)] bg-cover rounded invert" href="#"></a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Product</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Sensors</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Research</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 md:block">Docs</button>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
<span className="">Request Access</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="relative sm:px-6 lg:px-8 max-w-7xl mt-8 mr-auto ml-auto pr-4 pl-4">
<section className="relative overflow-hidden group animate-fade-in bg-neutral-50 border-neutral-200 border rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{animation: 'fadeIn 0.8s ease-out'}}>

<div className="relative grid grid-cols-1 gap-8 sm:p-10 lg:grid-cols-12 lg:gap-10 pt-6 pr-6 pb-6 pl-6">

<div className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-6 animate-slide-in-left" style={{animation: 'slideInLeft 0.8s ease-out 0.2s backwards'}}>
<div className="max-w-xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce" style={{animation: 'gentleBounce 2s ease-in-out infinite'}}>
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white animate-spin" style={{animation: 'pulse 2s ease-in-out infinite'}}>
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
          Live Scan Preview
          <span className="mx-1.5 h-1 w-1 rounded-full bg-neutral-400 animate-pulse"></span>
          See neural rhythms transform into data
        </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 0.4s backwards'}}>
          MAP YOUR MIND IN REAL‑TIME
        </h1>
<p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-700 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 0.6s backwards'}}>
          Slip on the Halo and let your patterns speak. Uncover clarity, fatigue, stress zones, and focus levels — all streamed in the moment.
        </p>
<div className="flex flex-wrap gap-3 mt-8 items-center animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 0.8s backwards'}}>
<button className="flex gap-2 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 w-full max-w-xs rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg items-center justify-center hover:-translate-y-1 active:scale-95" onclick="continueWithSSO()">
<svg className="lucide lucide-scan lucide-shield-check w-[16px] h-[16px] animate-pulse" data-icon-replaced="true" data-lucide="scan" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
<span className="text-sm">Begin Neural Scan</span>
</button>
<button className="inline-flex gap-2 hover:bg-neutral-50 text-sm font-medium text-neutral-900 bg-white border-neutral-300 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-play h-4 w-4 group-hover:animate-pulse" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            Watch Demo
          </button>
</div>
</div>

<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 1s backwards'}}>
<div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="text-sm font-medium text-neutral-600">Latency</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">14 ms</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="text-sm font-medium text-neutral-600">Channels</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-blue-700 transition-colors duration-300">32</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="text-sm font-medium text-neutral-600">Uptime</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-emerald-600 transition-colors duration-300">99.9%</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 lg:col-span-6 animate-slide-in-right" style={{animation: 'slideInRight 0.8s ease-out 0.4s backwards'}}>
<div className="relative">

<div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:border-blue-300/60 group">
<img alt="Immersive headset visualization" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33e2e9f5-556f-41c0-82e8-8880d84c76da_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/60"></div>

<div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/25 via-blue-400/20 to-cyan-400/20 mix-blend-overlay animate-pulse" style={{animation: 'glowPulse 4s ease-in-out infinite'}}></div>
</div>


<div className="absolute -left-2 top-6 sm:-left-4 sm:top-4 animate-float w-[56%]" style={{animation: 'float 6s ease-in-out infinite'}}>
<div className="hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white/80 border-white/60 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Affect State</div>
<svg className="lucide lucide-badge-check h-4 w-4 text-neutral-400 group-hover:text-emerald-500 group-hover:animate-bounce transition-all duration-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="mt-0.5 text-xs text-neutral-600 group-hover:text-emerald-700 transition-colors duration-300">Steady</p>
<div className="mt-3">
<div className="relative h-20 w-full">
<div className="overflow-hidden bg-white w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/43264853-9376-44aa-a398-a62652895fe8_800w.jpg)] bg-cover border-neutral-200 border rounded-lg group-hover:border-emerald-300 transition-all duration-300">
<div className="relative w-full h-full pt-2 pr-2 pb-2 pl-2">
<div className="w-full h-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -left-6 bottom-8 sm:-left-8 sm:bottom-10 animate-float-delayed" style={{animation: 'float 6s ease-in-out infinite 2s'}}>
<div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
<div className="relative h-16 w-16">
<div className="h-16 w-16 rounded-full group-hover:animate-spin transition-all duration-500" id="attentionRing" style={{background: 'conic-gradient(#3b82f6 0% 82%, #e5e7eb 82% 100%)', animation: 'ringPulse 3s ease-in-out infinite'}}></div>
<div className="absolute inset-1 rounded-full bg-white/90 group-hover:bg-white transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-medium text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">82%</span>
</div>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-700 tracking-tight group-hover:text-blue-600 transition-colors duration-300">Attention Index</div>
<p className="text-xs text-neutral-600 group-hover:text-blue-700 transition-colors duration-300">Real‑time focus level</p>
</div>
</div>
</div>

<div className="absolute -right-2 top-3 w-[42%] sm:-right-4 animate-float-reverse" style={{animation: 'floatReverse 6s ease-in-out infinite 1s'}}>
<div className="hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white/80 border-white/60 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700 tracking-tight group-hover:text-cyan-600 transition-colors duration-300">Cortex Regions</div>
<svg className="lucide lucide-target h-4 w-4 text-neutral-400 group-hover:text-cyan-500 group-hover:animate-pulse transition-all duration-300" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="mt-3 flex items-center gap-3">
<img alt="3D brain render" className="h-14 w-14 rounded-xl object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0f45e399-4861-427a-837c-527c307e30e3_800w.jpg"/>
<div className="space-y-1">
<div className="flex items-center justify-between gap-4">
<span className="text-xs text-neutral-600 group-hover:text-cyan-700 transition-colors duration-300">Frontal</span>
<span className="text-sm font-medium text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300">76%</span>
</div>
<div className="flex items-center justify-between gap-4">
<span className="text-xs text-neutral-600 group-hover:text-cyan-700 transition-colors duration-300">Temporal</span>
<span className="text-sm font-medium text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300">52%</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-3 bottom-4 w-[52%] sm:-right-5 sm:bottom-6 animate-float" style={{animation: 'float 6s ease-in-out infinite 3s'}}>
<div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700 tracking-tight group-hover:text-rose-600 transition-colors duration-300">Cognitive Load</div>
<i className="h-4 w-4 text-neutral-400 group-hover:text-rose-500 group-hover:animate-bounce transition-all duration-300" data-lucide="waveform"></i>
</div>
<div className="mt-2">
<div className="relative h-16 w-full">
<div className="overflow-hidden bg-white w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9c7ae0-20fa-44c9-9d55-cc98205e554c_800w.jpg)] bg-cover border-neutral-200 border rounded-lg group-hover:border-rose-300 transition-all duration-300">
<div className="pt-2 pr-2 pb-2 pl-2">
<div className="w-full h-full bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-xs text-neutral-600 group-hover:text-rose-700 transition-colors duration-300">Now</span>
<span className="text-sm font-medium text-neutral-900 group-hover:text-rose-600 transition-colors duration-300">56%</span>
</div>
</div>
</div>
</div>

</div>
</div>

<div className="order-3 lg:col-span-12 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 1.2s backwards'}}>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:p-5 hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-white border-white/60 border rounded-2xl mt-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur items-start justify-between">
<p className="max-w-3xl text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
          Private beta now open for teams in wellness, esports, aviation, and research. Connect APIs, stream securely, and turn cognition into metrics that matter.
        </p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 hover:scale-105 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-file-code-2 h-4 w-4 hover:animate-pulse" data-lucide="file-code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m5 12-3 3 3 3"></path><path d="m9 18 3-3-3-3"></path></svg>
            Get SDK
          </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-calendar h-4 w-4 hover:animate-bounce" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Book a Demo
          </button>
</div>
</div>
</div>
</div>
<style>
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideInLeft {
      from { 
        opacity: 0; 
        transform: translateX(-50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    @keyframes slideInRight {
      from { 
        opacity: 0; 
        transform: translateX(50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes floatReverse {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(10px); }
    }
    
    @keyframes gentleBounce {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes glowPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    
    @keyframes ringPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .animate-fade-in { animation: fadeIn 0.8s ease-out; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
    .animate-slide-in-left { animation: slideInLeft 0.8s ease-out; }
    .animate-slide-in-right { animation: slideInRight 0.8s ease-out; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
    .animate-float-reverse { animation: floatReverse 6s ease-in-out infinite; }
  </style>
</section><section className="sm:p-8 bg-neutral-50 max-w-7xl border-neutral-200 border rounded-3xl mt-20 pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-xl hover:scale-[1.02] transition-all duration-500" id="aura-emfsitxw2" style={{animation: 'slideUp 0.8s ease-out'}}>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent animate-pulse" style={{animation: 'shimmer 3s ease-in-out infinite'}}>
</div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent animate-pulse" style={{animation: 'shimmer 3s ease-in-out infinite 1.5s'}}>
</div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent animate-pulse" style={{animation: 'shimmer 3s ease-in-out infinite 0.75s'}}>
</div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent animate-pulse" style={{animation: 'shimmer 3s ease-in-out infinite 2.25s'}}>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 relative z-10 items-start" id="aura-emfsitrbx">

<div className="flex flex-col justify-between min-h-full" style={{animation: 'fadeInLeft 0.8s ease-out 0.2s both'}}>
<div className="">
<span className="text-sm font-normal text-neutral-500 font-geist hover:text-blue-600 transition-colors duration-300" style={{}}>Neural technology</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 mt-2 tracking-tight font-geist hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-pointer" style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}>
          Advanced brain-computer interfaces for tomorrow's applications.
        </h2>

<div className="mt-8 relative" style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}>
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
<div className="flex items-center gap-2 hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
<svg className="lucide lucide-plus h-4 w-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>EEG Analysis</span>
</div>
<div className="flex items-center gap-2 hover:text-green-600 hover:scale-105 transition-all duration-300 cursor-pointer group" style={{animationDelay: '0.1s'}}>
<svg className="lucide lucide-plus h-4 w-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Real-time Processing</span>
</div>
<div className="flex items-center gap-2 hover:text-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer group" style={{animationDelay: '0.2s'}}>
<svg className="lucide lucide-plus h-4 w-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Neural Mapping</span>
</div>
</div>
</div>
</div>
<div className="w-full mt-10" style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}>
<div className="">
<p className="text-sm font-medium text-neutral-900 tracking-tight font-geist hover:text-blue-600 transition-colors duration-300" style={{}}>Breakthrough applications across industries</p>
<p className="mt-1 text-sm text-neutral-600 font-geist hover:text-neutral-800 transition-colors duration-300" style={{}}>From cognitive assessment to performance optimization, our neural interfaces enable unprecedented insights into brain activity and mental states.</p>
<a className="mt-4 w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-neutral-900 text-white text-sm font-normal hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 font-geist group" href="#applications" style={{}}>
<span>Explore applications</span>
<span className="inline-flex h-2 w-2 rounded-full bg-white group-hover:animate-bounce"></span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative" id="aura-emfsitq0w" style={{animation: 'fadeInRight 0.8s ease-out 0.4s both'}}>

<div className="flex flex-col gap-4" id="aura-emfsitmks">

<article className="relative overflow-hidden aspect-[4/5] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc0fd0a8-46f5-48fa-a1ce-7ddbae8769fd_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 group cursor-pointer" id="aura-emfsitld4" style={{animation: 'slideInUp 0.8s ease-out 0.6s both'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-brain-circuit h-3.5 w-3.5 group-hover:animate-pulse" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 font-geist group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-700 transition-all duration-300" style={{}}>Cognitive</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist group-hover:scale-105 transition-transform duration-300" style={{}}>Focus Training</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-cover border-neutral-200 border rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f367689-4bf1-4d79-ade2-1c33ca7af73a_800w.jpg)] bg-center hover:scale-105 hover:shadow-2xl hover:border-green-300 transition-all duration-500 hover:-translate-y-2 group cursor-pointer" style={{animation: 'slideInUp 0.8s ease-out 0.8s both'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-300 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-heart-pulse h-3.5 w-3.5 group-hover:animate-pulse" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 font-geist group-hover:bg-green-50 group-hover:border-green-300 group-hover:text-green-700 transition-all duration-300" style={{}}>Wellness</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist group-hover:scale-105 transition-transform duration-300" style={{}}>Stress Monitor</p>
</div>
</article>
</div>

<div className="flex flex-col gap-4">

<article className="relative overflow-hidden aspect-[4/3] bg-cover border-neutral-200 border rounded-2xl bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c374d25d-34dc-48f7-9f70-7fbc700c42c8_800w.jpg)] hover:scale-105 hover:shadow-2xl hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 group cursor-pointer" style={{animation: 'slideInUp 0.8s ease-out 0.7s both'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-300 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-scan-line h-3.5 w-3.5 group-hover:animate-pulse" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 font-geist group-hover:bg-purple-50 group-hover:border-purple-300 group-hover:text-purple-700 transition-all duration-300" style={{}}>Research</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist group-hover:scale-105 transition-transform duration-300" style={{}}>Neural Scanning</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/5] bg-cover border-neutral-200 border rounded-2xl bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/baa3a780-3072-461c-a286-62c7df2ed326_800w.jpg)] hover:scale-105 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 group cursor-pointer" style={{animation: 'slideInUp 0.8s ease-out 0.9s both'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-300 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-activity h-3.5 w-3.5 group-hover:animate-pulse" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 font-geist group-hover:bg-orange-50 group-hover:border-orange-300 group-hover:text-orange-700 transition-all duration-300" style={{}}>Gaming</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist group-hover:scale-105 transition-transform duration-300" style={{}}>Mind Control</p>
</div>
</article>
</div>
</div>
</div>
<style>
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(60px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes shimmer {
      0%, 100% {
        opacity: 0.1;
        transform: scaleY(1);
      }
      50% {
        opacity: 0.3;
        transform: scaleY(1.2);
      }
    }
  </style>
</section>

<section className="sm:py-12 max-w-7xl mt-10 mr-auto ml-auto pt-10 pr-0 pb-10 pl-0">
<div className="flex flex-wrap gap-x-10 gap-y-6 text-neutral-500 items-center justify-center">
<span className="text-xs font-medium">Trusted by labs and creative studios</span>
<div className="h-5 w-px bg-neutral-200"></div>
<span className="text-sm font-medium">VantaLab</span>
<span className="text-sm font-medium">HelixWorks</span>
<span className="text-sm font-medium">Orbit Research</span>
<span className="text-sm font-medium">SignalForge</span>
</div>
</section>
</main>
</div>


    </>
  );
}
