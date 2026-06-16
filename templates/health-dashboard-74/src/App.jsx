import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !(function() {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
                i.onload = function() {
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", function() {
                            UnicornStudio.init();
                            window.UnicornStudio.isInitialized = true;
                        });
                    } else {
                        UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                    }
                };
                (document.head || document.body).appendChild(i);
            } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
            }
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<title>Aura Background</title>

<div className="aura-background-component absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="SrJYfPcDUR4StI3maLL6"></div>
</div>
<div className="relative z-10 flex items-center justify-center h-full">
</div>

</div>

<nav className="md:w-64 border-b md:border-b-0 md:border-r z-10 flex-shrink-0 flex flex-col justify-between sticky top-0 md:h-screen border-slate-200 bg-slate-50">
<div className="">
<div className="p-6">
<div className="text-lg tracking-tighter font-medium flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-slate-900 text-white">NM</div>
                    NANOMOLAR
                </div>
</div>
<div className="px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 border shadow-sm rounded-md transition-colors font-medium bg-white border-slate-200 text-slate-900" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-colors hover:text-slate-900 hover:bg-slate-100/50" href="#">
<iconify-icon className="text-lg" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
                    Check-in
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-colors hover:text-slate-900 hover:bg-slate-100/50" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                    Trends
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-colors hover:text-slate-900 hover:bg-slate-100/50" href="#">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                    Insights
                </a>
</div>
</div>
<div className="p-4 border-t border-slate-200">
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-colors hover:text-slate-900 hover:bg-slate-100/50" href="#">
<iconify-icon className="text-lg" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
                Profile
            </a>
</div>
</nav>

<main className="flex-1 overflow-y-auto p-4 md:p-10 lg:px-16 max-w-6xl mx-auto w-full space-y-10 pb-24">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 pt-4 md:pt-0 border-slate-200">
<div className="">
<h1 className="text-2xl md:text-3xl tracking-tight font-medium text-slate-900">Good morning, Gavin.</h1>
<p className="text-slate-500 mt-1">Here is your streamlined daily wellness action plan.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-md font-medium transition-colors border flex items-center gap-2 shadow-sm bg-white hover:bg-slate-50 text-slate-700 border-slate-200">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
                    History
                </button>
<button className="px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 shadow-sm bg-slate-900 text-white hover:bg-slate-800">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                    New Check-in
                </button>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 flex flex-col overflow-hidden group border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm justify-between bg-white border-amber-200/60">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start z-10 mb-2">
<h2 className="text-sm font-medium text-slate-500">Body Rhythm</h2>
<iconify-icon className="text-amber-500/60 text-xl" icon="solar:pulse-2-linear"></iconify-icon>
</div>
<div className="z-10 flex-1 flex flex-col items-center justify-center mt-4 mb-2">

<div className="relative flex items-center justify-center w-20 h-20 mb-4">
<div className="absolute inset-0 rounded-full bg-amber-100/50 animate-subtle-pulse"></div>
<div className="absolute inset-3 rounded-full bg-amber-100/80" style={{animation: 'subtle-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse'}}></div>
<div className="absolute inset-5 rounded-full border border-amber-200 bg-white shadow-sm flex items-center justify-center z-10">
<iconify-icon className="text-xl text-amber-500" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
<h3 className="text-xl tracking-tight font-medium text-amber-900">Recalibrating</h3>
<p className="text-xs text-slate-500 text-center mt-2 leading-relaxed px-2">Your body is processing recent stress. A gentle pace is ideal today.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 border shadow-sm rounded-xl p-6 flex flex-col relative overflow-hidden bg-white border-red-200/60">
<div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
<div className="flex justify-between items-start mb-5 pl-1">
<div>
<h2 className="text-sm font-medium text-slate-500 mb-1.5">Daily Action Plan</h2>
<div className="flex flex-wrap items-center gap-3">
<h3 className="text-xl tracking-tight font-medium text-slate-900">Stress Clearance</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium shadow-sm border-red-200 bg-red-50 text-red-600">
<iconify-icon className="text-red-500" icon="solar:danger-triangle-linear"></iconify-icon>
                                High Priority
                            </span>
</div>
</div>
<span className="text-xs px-2.5 py-1 rounded border text-slate-400 bg-slate-50 border-slate-100">Today, 08:30 AM</span>
</div>

<div className="flex flex-col gap-3 flex-1 justify-center pl-1">

<label className="flex items-start gap-4 p-3.5 rounded-lg border cursor-pointer transition-colors group border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-red-200/50">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-md border-2 peer-checked:bg-red-500 peer-checked:border-red-500 transition-colors flex items-center justify-center border-slate-300 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div>
<span className="text-sm font-medium group-hover:text-slate-900 transition-colors text-slate-800">Switch to decaf after 12 PM</span>
<p className="text-xs text-slate-500 mt-0.5">Helps accelerate cortisol clearance before your sleep window.</p>
</div>
</label>

<label className="flex items-start gap-4 p-3.5 rounded-lg border cursor-pointer transition-colors group border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-red-200/50">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-md border-2 peer-checked:bg-red-500 peer-checked:border-red-500 transition-colors flex items-center justify-center border-slate-300 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs transition-opacity text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="">
<span className="text-sm font-medium group-hover:text-slate-900 transition-colors text-slate-800">10-minute zone 2 recovery walk</span>
<p className="text-xs text-slate-500 mt-0.5">Light, consistent activity safely reduces circulating stress hormones.</p>
</div>
</label>
</div>
</div>
</section>

<details className="border shadow-sm rounded-xl overflow-hidden group border-slate-200 bg-white">
<summary className="cursor-pointer outline-none flex transition-colors hover:bg-slate-50 pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full border flex items-center justify-center bg-slate-100 border-slate-200 text-slate-600">
<iconify-icon className="" icon="solar:scanner-linear"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-slate-900">Explore All Biomarkers</h2>
<p className="text-slate-500 text-xs mt-0.5">View your complete morning reading.</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs group-open:opacity-0 transition-opacity text-slate-400">8 metrics tracked</span>
<iconify-icon className="text-lg group-open:rotate-180 transition-transform duration-300 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="p-6 border-t border-slate-100 bg-slate-50/50">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-green-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Energy</span>
<span className="text-[11px] text-slate-500 mt-0.5">Optimal</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-red-200 bg-red-50">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.4)] bg-red-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Stress (Cortisol)</span>
<span className="text-[11px] mt-0.5 text-red-600">Slightly Elevated</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-green-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Hydration</span>
<span className="text-[11px] text-slate-500 mt-0.5">Optimal</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-green-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Electrolytes</span>
<span className="text-[11px] text-slate-500 mt-0.5">Balanced</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)] bg-amber-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Recovery</span>
<span className="text-[11px] mt-0.5 text-amber-600">Suboptimal</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-green-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Vitamin D3</span>
<span className="text-[11px] text-slate-500 mt-0.5">Optimal</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-green-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Sleep Quality</span>
<span className="text-[11px] text-slate-500 mt-0.5">Optimal</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border shadow-sm border-slate-100 bg-white">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] bg-green-500"></div>
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-900">Inflammation</span>
<span className="text-[11px] text-slate-500 mt-0.5">Normal</span>
</div>
</div>
</div>
</div>
</details>

<div className="border shadow-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border-slate-200 bg-white">
<div className="w-48 relative flex flex-col items-center justify-center flex-shrink-0">
<svg className="w-full overflow-visible drop-shadow-sm" viewbox="0 0 100 55">

<path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f1f5f9" strokeLinecap="round" strokeWidth="10"></path>

<path className="animate-gauge" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f59e0b" stroke-dasharray="125.6" strokeLinecap="round" strokeWidth="10"></path>
</svg>
<div className="absolute bottom-0 flex flex-col items-center">
<span className="text-3xl tracking-tighter font-medium text-slate-900">72</span>
<span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mt-0.5">Vitality Index</span>
</div>
</div>
<div className="flex-1 space-y-3">
<h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:lightbulb-bolt-linear"></iconify-icon>
                    Vitality Insights
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    Your foundational metrics are holding steady, but <strong>elevated cortisol</strong> and <strong>suboptimal recovery</strong> are currently suppressing your overall readiness. Completing today's focus actions will accelerate clearance and can recover up to 15 vitality points by tomorrow.
                </p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="inline-flex items-center px-2 py-1 rounded bg-red-50 border border-red-100 text-xs text-red-600 font-medium">
<iconify-icon className="mr-1" icon="solar:arrow-right-down-linear"></iconify-icon> Cortisol Drag (-12)
                    </span>
<span className="inline-flex items-center px-2 py-1 rounded bg-amber-50 border border-amber-100 text-xs text-amber-600 font-medium">
<iconify-icon className="mr-1" icon="solar:arrow-right-down-linear"></iconify-icon> Recovery Load (-8)
                    </span>
</div>
</div>
</div>

<details className="border rounded-xl shadow-sm overflow-hidden group border-slate-200 bg-white">
<summary className="p-5 cursor-pointer outline-none flex justify-between items-center transition-colors hover:bg-slate-50">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded border flex items-center justify-center text-green-600 bg-green-50 border-green-100">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-slate-900">Deep Dive Intelligence</h2>
<p className="text-slate-500 text-xs mt-0.5">Expand to read your personalized daily analysis.</p>
</div>
</div>
<iconify-icon className="text-lg group-open:rotate-180 transition-transform duration-300 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-5 border-t relative border-slate-100 bg-white">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-transparent via-green-200"></div>
<p className="leading-relaxed mb-6 text-sm text-slate-700">
                    Your morning reading shows optimal hydration, but slightly elevated cortisol levels alongside suboptimal recovery indicators. This combination often points to lingering stress from poor sleep architecture. Let's adjust today's routine for a smoother, more restorative day.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 rounded-lg border flex items-start gap-4 border-slate-100 bg-slate-50">
<div className="text-red-500 mt-1"><iconify-icon className="text-xl" icon="solar:apple-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-sm mb-1 text-slate-900">Nutrition Protocol</h4>
<p className="text-xs leading-relaxed text-slate-600">Focus on magnesium-rich foods today (spinach, almonds). Reduce caffeine intake after 2 PM to support cortisol clearance tonight.</p>
</div>
</div>
<div className="p-4 rounded-lg border flex items-start gap-4 border-slate-100 bg-slate-50">
<div className="text-green-500 mt-1"><iconify-icon className="text-xl" icon="solar:cup-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-sm mb-1 text-slate-900">Hydration Goal</h4>
<p className="text-xs leading-relaxed text-slate-600">Your hydration baseline is excellent. Maintain this rhythm by aiming for your regular 2.8 liters of water throughout the day.</p>
</div>
</div>
<div className="p-4 rounded-lg border flex items-start gap-4 border-slate-100 bg-slate-50">
<div className="text-amber-500 mt-1"><iconify-icon className="text-xl" icon="solar:moon-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-sm mb-1 text-slate-900">Recovery &amp; Sleep</h4>
<p className="text-xs leading-relaxed text-slate-600">Prioritize wind-down tonight. Aim to be in bed by 10:15 PM to ensure a full 8-hour sleep opportunity to reset your baseline.</p>
</div>
</div>
<div className="p-4 rounded-lg border flex items-start gap-4 border-slate-100 bg-slate-50">
<div className="text-red-500 mt-1"><iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-sm mb-1 text-slate-900">Activity Constraint</h4>
<p className="text-xs leading-relaxed text-slate-600">Avoid high-intensity endurance training today due to elevated stress markers. Opt for zone 2 cardio, yoga, or active recovery.</p>
</div>
</div>
</div>
</div>
</details>

<section className="border shadow-sm rounded-xl overflow-hidden mt-6 border-slate-200 bg-white">
<div className="p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 border-slate-100">
<div>
<h2 className="text-lg tracking-tight font-medium flex items-center gap-2 text-slate-900">
<iconify-icon className="text-slate-400" icon="solar:devices-linear"></iconify-icon>
                        Bio-Sync Scanner
                    </h2>
<p className="text-slate-500 mt-1 text-xs">Pair your NanoMolar device to log a new reading.</p>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium border-green-200 bg-green-50 text-green-700">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Connected to BioScan X1
                </div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

<div className="relative flex justify-center items-center h-56 border rounded-2xl overflow-hidden border-slate-100 bg-slate-50/50">
<div className="absolute w-48 h-48 rounded-full border animate-subtle-pulse border-slate-200"></div>
<div className="absolute w-32 h-32 rounded-full border animate-subtle-pulse border-slate-200" style={{animationDelay: '0.5s'}}></div>
<div className="relative z-10 w-16 h-32 rounded-lg border shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center justify-start pt-2 gap-1 border-slate-200 bg-white">
<div className="w-12 h-2 rounded-full shadow-inner bg-slate-100"></div>
<div className="mt-4 w-6 h-12 border-2 rounded flex items-center justify-center border-green-400/50 bg-green-50">
<iconify-icon className="text-green-500 text-sm" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div className="w-full h-full mt-2 bg-gradient-to-t to-transparent rounded-b-lg from-slate-100/50"></div>
</div>
</div>

<div className="space-y-6">
<div className="space-y-4">
<div className="flex items-start gap-4 text-slate-600">
<div className="w-6 h-6 rounded-full border flex items-center justify-center text-xs flex-shrink-0 mt-0.5 border-green-200 bg-green-50 text-green-600">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm text-slate-900">Device Paired</h3>
<p className="text-xs text-slate-500 mt-0.5">Ready to sync via Bluetooth.</p>
</div>
</div>
<div className="flex items-start gap-4 text-slate-400">
<div className="w-6 h-6 rounded-full border flex items-center justify-center text-xs flex-shrink-0 mt-0.5 text-slate-500 border-slate-200 bg-white">2</div>
<div>
<h3 className="font-medium text-sm text-slate-900">Prepare Sample</h3>
<p className="text-xs text-slate-500 mt-0.5">Insert a fresh daily wellness cartridge.</p>
</div>
</div>
<div className="flex items-start gap-4 text-slate-400">
<div className="w-6 h-6 rounded-full border flex items-center justify-center text-xs flex-shrink-0 mt-0.5 text-slate-500 border-slate-200 bg-white">3</div>
<div>
<h3 className="font-medium text-sm text-slate-900">Log Vitality</h3>
<p className="text-xs text-slate-500 mt-0.5">Data will sync directly to your dashboard.</p>
</div>
</div>
</div>
<button className="w-full py-2.5 px-4 font-medium rounded-md transition-colors flex justify-center items-center gap-2 shadow-sm bg-slate-900 text-white hover:bg-slate-800">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Start Check-in
                    </button>
</div>
</div>
</section>

<section className="mt-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<h2 className="text-xl tracking-tight font-medium text-slate-900">Wellness Trends</h2>
<p className="text-slate-500 mt-1">Visualize your lifestyle metrics over time.</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="flex items-center gap-2 px-3 py-1.5 border rounded-md shadow-sm cursor-pointer transition-colors border-slate-200 bg-white hover:border-slate-300">
<span className="text-xs font-medium text-slate-900">Stress (Cortisol)</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center rounded-md p-1 border bg-slate-100 border-slate-200">
<button className="px-3 py-1 text-xs rounded-sm shadow-sm font-medium bg-white text-slate-900">7D</button>
<button className="px-3 py-1 text-xs text-slate-500 rounded-sm transition-colors hover:text-slate-900">14D</button>
<button className="px-3 py-1 text-xs text-slate-500 rounded-sm transition-colors hover:text-slate-900">30D</button>
</div>
</div>
</div>
<div className="border rounded-xl shadow-sm p-6 pt-10 h-72 relative flex flex-col justify-end border-slate-200 bg-white">
<div className="absolute inset-0 p-6 pt-10 flex flex-col justify-between pointer-events-none z-0">
<div className="border-b w-full h-0 relative border-slate-100"><span className="absolute -top-2 -left-2 text-[10px] font-medium text-slate-400">High</span></div>
<div className="border-b w-full h-0 relative border-slate-100"><span className="absolute -top-2 -left-2 text-[10px] font-medium text-slate-400">Avg</span></div>
<div className="border-b w-full h-0 relative border-slate-100"><span className="absolute -top-2 -left-2 text-[10px] font-medium text-slate-400">Low</span></div>
</div>
<div className="flex items-end justify-between gap-4 h-full z-10 w-full pl-6">
<div className="w-full max-w-[60px] hover:bg-green-500 transition-all rounded-t-sm relative group cursor-crosshair bg-green-400/80" style={{height: '45%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg bg-slate-900 text-white">Optimal</div>
</div>
<div className="w-full max-w-[60px] hover:bg-green-500 transition-all rounded-t-sm bg-green-400/80" style={{height: '35%'}}></div>
<div className="w-full max-w-[60px] hover:bg-green-500 transition-all rounded-t-sm bg-green-400/80" style={{height: '40%'}}></div>
<div className="w-full max-w-[60px] hover:bg-amber-500 transition-all rounded-t-sm relative group cursor-crosshair bg-amber-400/80" style={{height: '60%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg bg-slate-900 text-white">Slightly Elevated</div>
</div>
<div className="w-full max-w-[60px] hover:bg-green-500 transition-all rounded-t-sm bg-green-400/80" style={{height: '48%'}}></div>
<div className="w-full max-w-[60px] hover:bg-green-500 transition-all rounded-t-sm bg-green-400/80" style={{height: '55%'}}></div>
<div className="w-full max-w-[60px] hover:bg-red-500 transition-all rounded-t-sm relative group cursor-crosshair bg-red-400/80" style={{height: '85%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg bg-slate-900 text-white">Elevated</div>
</div>
</div>
<div className="flex justify-between w-full pl-6 mt-4 text-[11px] font-medium text-slate-400">
<span>6 Days Ago</span>
<span>3 Days Ago</span>
<span>Today</span>
</div>
</div>
</section>

<section className="border rounded-xl shadow-sm overflow-hidden mt-10 border-slate-200 bg-white">
<div className="p-6 border-b border-slate-100">
<h2 className="text-xl tracking-tight font-medium text-slate-900">Lifestyle Profile</h2>
<p className="text-slate-500 mt-1 text-xs">Keep your routine updated to calibrate your daily insights.</p>
</div>
<div className="p-6 md:p-8 space-y-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="block text-xs text-slate-500 font-medium">Display Name</label>
<input className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-shadow placeholder:text-slate-400 shadow-sm bg-white border-slate-200 text-slate-900" type="text" value="Gavin Koon"/>
</div>
<div className="space-y-2">
<label className="block text-xs text-slate-500 font-medium">Age</label>
<input className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-shadow shadow-sm bg-white border-slate-200 text-slate-900" type="number" value="40"/>
</div>
<div className="space-y-2">
<label className="block text-xs text-slate-500 font-medium">Activity Level</label>
<div className="relative">
<div className="flex justify-between items-center w-full border rounded-md px-3 py-2 text-sm cursor-pointer transition-colors shadow-sm bg-white border-slate-200 text-slate-900 hover:border-slate-300">
                                Moderately Active
                                <iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="border-t pt-8 border-slate-100">
<label className="block text-sm font-medium mb-3 text-slate-900">Current Wellness Focus</label>
<div className="flex flex-wrap gap-2">
<div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-colors border-slate-900 bg-slate-900 text-white">
                            Stress Reduction
                        </div>
<div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs cursor-pointer transition-all shadow-sm border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300">
                            Better Sleep
                        </div>
<div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs cursor-pointer transition-all shadow-sm border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300">
                            Morning Energy
                        </div>
<div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-colors border-slate-900 bg-slate-900 text-white">
                            Mental Clarity
                        </div>
<div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-colors border-slate-900 bg-slate-900 text-white">
                            Longevity
                        </div>
<div className="inline-flex items-center px-4 py-1.5 rounded-full border border-dashed text-slate-500 text-xs cursor-pointer transition-all border-slate-300 hover:text-slate-700 hover:border-slate-400">
<iconify-icon className="mr-1" icon="solar:add-circle-linear"></iconify-icon> Add Focus
                        </div>
</div>
</div>
<div className="flex items-center justify-between border-t pt-8 border-slate-100">
<div>
<h4 className="text-sm font-medium text-slate-900">Wearable Data Sync</h4>
<p className="text-xs text-slate-500 mt-0.5">Automatically pull sleep &amp; activity data from Apple Health.</p>
</div>
<div className="w-10 h-5 rounded-full relative cursor-pointer transition-colors bg-slate-900">
<div className="absolute left-1 top-1 w-3 h-3 rounded-full transition-transform translate-x-5 shadow-sm bg-white"></div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="text-xs px-4 py-2 rounded-md font-medium transition-colors border shadow-sm bg-white hover:bg-slate-50 text-slate-900 border-slate-200">
                        Save Preferences
                    </button>
</div>
</div>
</section>
</main>

    </>
  );
}
