import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ["Inter", "sans-serif"]
},
colors: {
pitch: {
50: "#e6f7ee",
100: "#b3e8cf",
200: "#80d9b0",
300: "#4dc991",
400: "#26be7a",
500: "#07A751",
600: "#069647",
700: "#05793a",
800: "#045c2c",
900: "#023f1e",
},
accent: {
50: "#fef8e6",
100: "#fdeab3",
200: "#fcdc80",
300: "#fbce4d",
400: "#fac426",
500: "#F9B800",
600: "#e0a600",
},
},
},
},
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none absolute inset-0 flex justify-center z-0 overflow-hidden">
<div className="w-full max-w-[1360px] relative h-full">

<div className="absolute left-6 lg:left-8 top-0 bottom-0 w-[1px] bg-slate-200/70"></div>

<div className="absolute right-6 lg:right-8 top-0 bottom-0 w-[1px] bg-slate-200/70"></div>
</div>
</div>

<header className="relative z-10 w-full">
<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200/60"></div>
<div className="max-w-[1360px] mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="absolute -bottom-[3px] left-6 lg:left-8 w-1.5 h-1.5 rounded-full bg-slate-300 -translate-x-1/2"></div>
<div className="absolute -bottom-[3px] right-6 lg:right-8 w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-1/2"></div>
<div className="flex items-center gap-8">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-pitch-600 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:radar-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg text-slate-900">SCOUT</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Analytics</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Customers</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<button className="inline-flex items-center gap-2 rounded-lg bg-pitch-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-pitch-500 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]">
                        Get Started
                    </button>
</div>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pitch-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative">
<div className="max-w-3xl mx-auto text-center animate-fade-in-up">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md px-3 py-1 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-pitch-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600">Scout Platform 2.0 is now live</span>
<div className="h-3 w-px bg-slate-300 mx-1"></div>
<a className="text-xs font-medium text-pitch-600 hover:text-pitch-700 inline-flex items-center gap-1" href="#">
                            Read update <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Data-driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-pitch-600 to-pitch-400">player analytics</span> for modern teams.
                    </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Identify, evaluate, and acquire top talent with precision. Our platform aggregates millions of data points into actionable intelligence for professional scouting departments.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-pitch-600 px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(7,167,81,0.25)] transition-all duration-200 hover:bg-pitch-500 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(7,167,81,0.23)] active:scale-[0.97]">
                            Start Free Trial
                        </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 active:scale-[0.97]">
<iconify-icon className="text-lg text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
                            Book a Demo
                        </button>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-200">

<div className="rounded-[2rem] border border-slate-200/60 bg-white/40 p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
<div className="h-full w-full rounded-[1.5rem] border border-white bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-[inset_0_0_20px_rgb(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-slate-500" icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-900">M. Silva</div>
<div className="text-[10px] text-slate-500">Midfielder • 24y</div>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600 border border-emerald-100">
                                    Top Target
                                </span>
</div>
<div className="mb-2 text-xs font-medium text-slate-500">Match Rating Trend</div>
<div className="flex items-end gap-1.5 h-16 mt-4">
<div className="w-full bg-pitch-100 rounded-t-sm h-[40%] hover:bg-pitch-200 transition-colors"></div>
<div className="w-full bg-pitch-200 rounded-t-sm h-[60%] hover:bg-pitch-300 transition-colors"></div>
<div className="w-full bg-pitch-300 rounded-t-sm h-[45%] hover:bg-pitch-400 transition-colors"></div>
<div className="w-full bg-pitch-400 rounded-t-sm h-[80%] hover:bg-pitch-500 transition-colors"></div>
<div className="w-full bg-pitch-500 rounded-t-sm h-[70%] hover:bg-pitch-600 transition-colors relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-pitch-700 bg-white px-1.5 rounded shadow-sm border border-slate-100">8.4</div>
</div>
<div className="w-full bg-pitch-300 rounded-t-sm h-[55%] hover:bg-pitch-400 transition-colors"></div>
</div>
</div>
</div>

<div className="rounded-[2rem] border border-slate-200/60 bg-white/40 p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 mt-0 md:mt-8">
<div className="h-full w-full rounded-[1.5rem] border border-white bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-[inset_0_0_20px_rgb(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">Expected Goals (xG)</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">14.2</div>
</div>
<div className="h-8 w-8 rounded-lg bg-accent-50 flex items-center justify-center border border-accent-100 text-accent-600">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] text-slate-500 mb-1">
<span>Left Foot</span>
<span className="font-medium text-slate-700">6.8</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 rounded-full" style={{width: '48%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-slate-500 mb-1">
<span>Right Foot</span>
<span className="font-medium text-slate-700">5.1</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-pitch-500 rounded-full" style={{width: '36%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-slate-500 mb-1">
<span>Header</span>
<span className="font-medium text-slate-700">2.3</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-accent-400 rounded-full" style={{width: '16%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-[2rem] border border-slate-200/60 bg-white/40 p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 mt-0 md:mt-4">
<div className="h-full w-full rounded-[1.5rem] border border-white bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-[inset_0_0_20px_rgb(0,0,0,0.02)]">
<div className="text-xs font-medium text-slate-500 mb-4">Market Value Projection</div>
<div className="relative h-24 w-full flex items-end">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#07A751" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#07A751" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,100 L0,70 Q20,60 40,80 T80,30 L100,20 L100,100 Z" fill="url(#lineGrad)"></path>
<path d="M0,70 Q20,60 40,80 T80,30 L100,20" fill="none" stroke="#07A751" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>

<circle cx="80" cy="30" fill="white" r="3" stroke="#07A751" strokeWidth="2"></circle>
</svg>

<div className="absolute right-[10%] top-0 -translate-y-full translate-x-1/2 pb-2">
<div className="bg-slate-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                        €45.2M
                                    </div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-slate-900"></div>
</div>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
<span className="text-[10px] text-slate-500">Current Valuation</span>
<span className="text-sm font-semibold text-slate-900">€38.5M</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-white">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/60"></div>
<div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative">

<div className="absolute top-0 left-6 lg:left-8 w-1.5 h-1.5 rounded-full bg-slate-300 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-0 right-6 lg:right-8 w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-1/2 -translate-y-1/2"></div>
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Command center for your scouting network</h2>
<p className="text-base text-slate-500">Everything you need to evaluate targets, track performance pipelines, and make data-backed acquisition decisions.</p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row h-[600px] w-full max-w-5xl mx-auto">

<div className="w-64 bg-slate-50 border-r border-slate-200 hidden md:flex flex-col p-4">
<div className="flex items-center gap-2 px-2 mb-8">
<div className="w-5 h-5 rounded bg-pitch-600 flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:radar-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-sm text-slate-900">SCOUT</span>
</div>
<div className="space-y-1 mb-8">
<div className="text-[10px] font-medium uppercase tracking-wider text-slate-400 px-2 mb-2">Platform</div>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-pitch-700 shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:widget-2-linear"></iconify-icon> Dashboard
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:users-group-two-linear"></iconify-icon> Shortlists
                            </a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-sm" icon="solar:chart-square-linear"></iconify-icon> Analytics
                                </div>
<span className="bg-pitch-100 text-pitch-700 text-[9px] px-1.5 rounded font-semibold">NEW</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Assignments
                            </a>
</div>
<div className="mt-auto">
<div className="p-3 rounded-xl bg-gradient-to-br from-pitch-50 to-white border border-pitch-100">
<div className="text-xs font-medium text-slate-900 mb-1">Pro Plan</div>
<div className="text-[10px] text-slate-500 mb-3">45/50 scout reports used</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
<div className="h-full bg-pitch-500 rounded-full" style={{width: '90%'}}></div>
</div>
<button className="w-full text-[10px] font-medium text-pitch-700 bg-white border border-pitch-200 rounded py-1 hover:bg-pitch-50 transition-colors">Upgrade</button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0 bg-white">

<div className="h-14 border-b border-slate-200 flex items-center justify-between px-6">
<div className="relative w-64">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifier-linear"></iconify-icon>
<input className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pitch-500/20 focus:border-pitch-500 transition-colors" placeholder="Search players, clubs..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="relative text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-accent-500 rounded-full border border-white"></span>
</button>
<div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>
</div>

<div className="p-6 flex-1 overflow-y-auto no-scrollbar">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Global Overview</h3>
<p className="text-xs text-slate-500 mt-0.5">Performance metrics for the current season</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-white border border-slate-200 rounded-md shadow-sm p-0.5">
<button className="px-2.5 py-1 text-[10px] font-medium bg-slate-100 text-slate-900 rounded shadow-sm">12M</button>
<button className="px-2.5 py-1 text-[10px] font-medium text-slate-500 hover:text-slate-900">30D</button>
<button className="px-2.5 py-1 text-[10px] font-medium text-slate-500 hover:text-slate-900">7D</button>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Filter
                                    </button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="text-[11px] font-medium text-slate-500 mb-2">Tracked Players</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-semibold text-slate-900">12,405</span>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 8.2%
                                        </span>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="text-[11px] font-medium text-slate-500 mb-2">Reports Generated</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-semibold text-slate-900">842</span>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 12%
                                        </span>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="text-[11px] font-medium text-slate-500 mb-2">Avg Potential Rating</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-semibold text-slate-900">82.4</span>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon> 0.0%
                                        </span>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="text-[11px] font-medium text-slate-500 mb-2">Active Assignments</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-semibold text-slate-900">34</span>
<span className="text-[10px] font-medium text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon> 2.1%
                                        </span>
</div>
</div>
</div>

<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm mb-6">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-medium text-slate-900">Pipeline Growth (Value)</div>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="h-48 w-full relative">

<div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[9px] text-slate-400 text-right pr-2">
<span>$50M</span>
<span>$25M</span>
<span>$0</span>
</div>

<div className="absolute left-8 right-0 top-1 h-px bg-slate-100"></div>
<div className="absolute left-8 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-100"></div>
<div className="absolute left-8 right-0 bottom-6 h-px bg-slate-100"></div>

<div className="absolute left-8 right-0 top-1 bottom-6">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="mainGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#07A751" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#07A751" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 L10,75 L20,60 L30,65 L40,40 L50,45 L60,20 L70,30 L80,10 L90,15 L100,5 L100,100 L0,100 Z" fill="url(#mainGrad)"></path>
<path d="M0,80 L10,75 L20,60 L30,65 L40,40 L50,45 L60,20 L70,30 L80,10 L90,15 L100,5" fill="none" stroke="#07A751" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute left-8 right-0 bottom-0 h-6 flex justify-between items-end text-[9px] text-slate-400 px-2">
<span>Jan</span>
<span>Mar</span>
<span>May</span>
<span>Jul</span>
<span>Sep</span>
<span>Nov</span>
</div>
</div>
</div>

<div>
<div className="text-xs font-medium text-slate-900 mb-3">Recent Evaluations</div>
<div className="border border-slate-200 rounded-lg divide-y divide-slate-100">
<div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">LR</div>
<div>
<div className="text-xs font-medium text-slate-900">Lucas Romero</div>
<div className="text-[10px] text-slate-500">Defensive Midfielder</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<div className="text-[10px] font-medium text-slate-500">Match Rating</div>
<div className="text-xs font-semibold text-pitch-600">8.1</div>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">AV</div>
<div>
<div className="text-xs font-medium text-slate-900">Alex Valera</div>
<div className="text-[10px] text-slate-500">Striker</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<div className="text-[10px] font-medium text-slate-500">Match Rating</div>
<div className="text-xs font-semibold text-pitch-600">7.4</div>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-50">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/60"></div>
<div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative">

<div className="absolute top-0 left-6 lg:left-8 w-1.5 h-1.5 rounded-full bg-slate-300 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-0 right-6 lg:right-8 w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-1/2 -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-pitch-300 transition-colors">
<iconify-icon className="text-2xl text-pitch-600" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Unified Data Lake</h3>
<p className="text-sm text-slate-500 leading-relaxed">Consolidate physical, tactical, and medical data into a single source of truth. No more scattered spreadsheets or siloed information.</p>
</div>
<div className="group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-pitch-300 transition-colors">
<iconify-icon className="text-2xl text-pitch-600" icon="solar:video-frame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Video Integration</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sync analytical event data directly with match footage. Click on a pass metric to instantly view the corresponding video clip.</p>
</div>
<div className="group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-pitch-300 transition-colors">
<iconify-icon className="text-2xl text-pitch-600" icon="solar:graph-new-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Predictive Modeling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leverage machine learning to forecast player development trajectories and adaptation success probability across different leagues.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/60"></div>
<div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative">

<div className="absolute top-0 left-6 lg:left-8 w-1.5 h-1.5 rounded-full bg-slate-300 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-0 right-6 lg:right-8 w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-1/2 -translate-y-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5">
<div className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 mb-6">
                            Workflow Automation
                        </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Standardize your scouting methodology.</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                            Create custom evaluation frameworks tailored to your club's philosophy. Ensure every scout grades players on the same metrics, reducing bias and creating comparable data across your entire network.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-pitch-500 text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700">Customizable grading scales (e.g., 1-10, A-F, or percentiles)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-pitch-500 text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700">Position-specific attribute weighting</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-pitch-500 text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700">Automated aggregate reporting for the Director of Football</span>
</li>
</ul>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-pitch-600 hover:text-pitch-700 transition-colors" href="#">
                            Explore methodology tools <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 relative">

<div className="absolute inset-0 bg-slate-50 rounded-[2rem] transform rotate-1 scale-105 border border-slate-100"></div>
<div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<div>
<div className="text-sm font-medium text-slate-900">Evaluation Template: Fullback (Attacking)</div>
<div className="text-xs text-slate-500">Weighting: 40% Technical, 30% Physical, 30% Tactical</div>
</div>

<div className="flex items-center gap-2">
<span className="text-[10px] font-medium text-slate-500">Active</span>
<div className="w-8 h-4 bg-pitch-500 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-700">Crossing Accuracy</span>
<span className="text-[10px] font-medium text-slate-400">Required: &gt;25%</span>
</div>

<div className="relative w-full h-1.5 bg-slate-100 rounded-full">
<div className="absolute left-0 top-0 h-full bg-slate-300 rounded-full" style={{width: '100%'}}></div>
<div className="absolute left-0 top-0 h-full bg-pitch-500 rounded-full" style={{width: '75%'}}></div>
<div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-slate-200 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute left-[75%] -top-6 -translate-x-1/2 text-[9px] font-medium bg-slate-800 text-white px-1.5 py-0.5 rounded">8/10</div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-700">Recovery Speed</span>
<span className="text-[10px] font-medium text-slate-400">Required: &gt;32 km/h</span>
</div>
<div className="relative w-full h-1.5 bg-slate-100 rounded-full">
<div className="absolute left-0 top-0 h-full bg-pitch-500 rounded-full" style={{width: '85%'}}></div>
<div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-slate-200 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute left-[85%] -top-6 -translate-x-1/2 text-[9px] font-medium bg-slate-800 text-white px-1.5 py-0.5 rounded">9/10</div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-700">Defensive Positioning</span>
</div>
<div className="relative w-full h-1.5 bg-slate-100 rounded-full">
<div className="absolute left-0 top-0 h-full bg-accent-400 rounded-full" style={{width: '55%'}}></div>
<div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-slate-200 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute left-[55%] -top-6 -translate-x-1/2 text-[9px] font-medium bg-slate-800 text-white px-1.5 py-0.5 rounded">6/10</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex justify-end gap-3">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-md transition-colors border border-transparent hover:border-slate-200">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md shadow-sm hover:bg-slate-800 transition-colors">Save Framework</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-pitch-50/50">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-pitch-100"></div>
<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-pitch-100"></div>
<div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative">

<div className="absolute top-0 left-6 lg:left-8 w-1.5 h-1.5 rounded-full bg-pitch-200 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-0 right-6 lg:right-8 w-1.5 h-1.5 rounded-full bg-pitch-200 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Ready to upgrade your scouting?</h2>
<p className="text-base text-slate-600 mb-8">Join top-tier clubs using Scout to find value in the market before the competition does.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-pitch-600 px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(7,167,81,0.25)] transition-all duration-200 hover:bg-pitch-500 hover:-translate-y-0.5 active:scale-[0.97]">
                            Start Free Trial
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.97]">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="relative bg-white pt-16 pb-8 z-10">
<div className="max-w-[1360px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-pitch-600 flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:radar-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-base text-slate-900">SCOUT</span>
</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">The premier data analytics platform built exclusively for professional football scouting departments.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-bold"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-bold"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4 tracking-wider uppercase">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-pitch-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4 tracking-wider uppercase">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-pitch-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4 tracking-wider uppercase">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-pitch-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-pitch-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2024 Scout Intelligence Platform. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
