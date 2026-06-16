import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 bg-white/80 backdrop-blur-2xl border-r border-white flex-col py-8 px-6 z-20 hidden md:flex shadow-[4px_0_24px_rgba(0,0,0,0.02)]">

<div className="flex items-center gap-3 mb-12 px-2">
<i className="text-blue-600 w-7 h-7" data-lucide="fish" strokeWidth="1.5"></i>
<span className="font-semibold text-xl tracking-tight text-slate-800">FishSpot</span>
</div>

<nav className="flex flex-col gap-2 flex-1 w-full">
<a className="flex items-center gap-4 px-4 py-3.5 bg-[#EEF4FA] text-blue-700 rounded-2xl transition-colors font-medium text-base" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
                Dashboard
            </a>
<a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors font-medium text-base" href="#">
<i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i>
                Radar &amp; Map
            </a>
<a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors font-medium text-base" href="#">
<i className="w-5 h-5" data-lucide="fish-symbol" strokeWidth="1.5"></i>
                Catches
            </a>
<a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors font-medium text-base" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
                Analytics
            </a>
</nav>

<div className="mt-auto flex flex-col gap-2">
<a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors font-medium text-base" href="#">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
                Settings
            </a>
<a className="flex items-center gap-4 px-4 py-3.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors font-medium text-base" href="#">
<div className="relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border-2 border-white"></span>
</span>
</div>
                Notifications
            </a>
<a className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-2xl transition-colors font-medium text-base mt-4" href="#">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
                Logout
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-full relative">

<header className="h-28 flex items-center justify-between px-8 lg:px-10 shrink-0 z-10">
<h1 className="font-semibold text-3xl tracking-tight text-slate-800">Dashboard</h1>

<div className="hidden md:flex items-center bg-white/60 backdrop-blur-md rounded-full px-5 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white w-full max-w-lg transition-all focus-within:bg-white focus-within:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
<div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full p-1.5 mr-4 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<input className="bg-transparent border-none outline-none w-full text-base text-slate-700 placeholder-slate-400 font-medium" placeholder="Ask FishBot about conditions..." type="text"/>
<div className="flex items-center gap-2 ml-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition-colors">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
<i className="w-4 h-4" data-lucide="mic" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex items-center gap-8">

<div className="hidden lg:flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="bg-white p-2.5 rounded-2xl shadow-sm border border-gray-50 text-slate-500">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Location</span>
<span className="text-sm font-semibold text-slate-700">Baía da Ilha Grande</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="bg-white p-2.5 rounded-2xl shadow-sm border border-gray-50 text-slate-500">
<i className="w-5 h-5" data-lucide="cloud-sun" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Weather</span>
<span className="text-sm font-semibold text-slate-700">26°C, Clear</span>
</div>
</div>
</div>

<button className="w-12 h-12 rounded-full border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden shrink-0 transition-transform hover:scale-105">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 lg:px-10 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.03)] border border-white flex flex-col relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="bg-[#EEF4FA] p-3 rounded-2xl text-blue-600 border border-blue-50">
<i className="w-6 h-6" data-lucide="fish" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="1.5"></i> 12.4%
                        </span>
</div>
<div className="relative z-10 mb-8">
<h3 className="text-base text-slate-500 font-medium mb-1">Total System Captures</h3>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-slate-800 tracking-tight">1,248</span>
<span className="text-base font-medium text-slate-400">/ week</span>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex justify-between text-sm font-medium mb-4">
<span className="text-slate-500">By top species:</span>
</div>
<div className="flex justify-between items-end mb-3 px-1">
<div className="flex flex-col">
<span className="text-sm text-slate-400 mb-1">Robalo</span>
<span className="text-base font-semibold text-slate-700">600</span>
</div>
<div className="flex flex-col text-center">
<span className="text-sm text-slate-400 mb-1">Tucunaré</span>
<span className="text-base font-semibold text-slate-700">450</span>
</div>
<div className="flex flex-col text-right">
<span className="text-sm text-slate-400 mb-1">Others</span>
<span className="text-base font-semibold text-slate-700">198</span>
</div>
</div>
<div className="w-full h-2 flex rounded-full overflow-hidden bg-slate-100">
<div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]" style={{width: '48%'}}></div>
<div className="h-full bg-indigo-300 rounded-full mx-1" style={{width: '36%'}}></div>
<div className="h-full bg-slate-300 rounded-full" style={{width: '16%'}}></div>
</div>
</div>
<div className="mt-8 flex justify-center relative z-10 border-t border-slate-50 pt-4">
<a className="text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors flex items-center gap-1" href="#">
                            View Detailed Report <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:col-span-3 bg-gradient-to-b from-[#F4F9FD] to-[#E8F1F9] rounded-[2rem] p-8 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.03)] border border-white flex flex-col items-center text-center relative overflow-hidden">

<div className="w-full flex justify-between items-center mb-6">
<div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white">
<div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full p-1 text-white">
<i className="w-3 h-3" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">AI Insight</span>
</div>
<button className="w-8 h-8 rounded-full bg-white/60 hover:bg-white text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="maximize-2" strokeWidth="1.5"></i>
</button>
</div>

<div className="mb-4 w-full h-32 relative flex items-center justify-center">
<div className="absolute bottom-4 w-2/3 h-4 bg-blue-900/10 blur-xl rounded-[100%]"></div>
<div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-[#F4F9FD] flex items-center justify-center relative z-10">
<i className="w-12 h-12 text-blue-500 drop-shadow-sm" data-lucide="fish-symbol" strokeWidth="1.5"></i>
</div>
</div>
<h2 className="text-2xl font-semibold text-slate-800 tracking-tight">Robalo-Flecha</h2>
<span className="text-sm font-medium text-blue-600 bg-blue-100/50 px-4 py-1.5 rounded-full mt-3 mb-8 border border-blue-200/50">Rank #1 Target</span>
<div className="flex gap-4 w-full justify-between mb-8 px-2">
<div className="flex flex-col text-left gap-3">
<span className="text-sm font-medium text-slate-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Surface Lures
                            </span>
<span className="text-sm font-medium text-slate-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> High Tide
                            </span>
</div>
<div className="flex flex-col text-left gap-3">
<span className="text-sm font-medium text-slate-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active Now
                            </span>
<span className="text-sm font-medium text-slate-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> +50 XP Bonus
                            </span>
</div>
</div>

<div className="mt-auto w-full pt-6 border-t border-blue-900/5 relative">
<p className="text-sm text-slate-500 font-medium mb-4">Current Activity Index</p>
<div className="relative w-40 h-20 mx-auto overflow-hidden">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 50">
<path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#D1E3F3" strokeLinecap="round" strokeWidth="8"></path>
<path className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" d="M 10 50 A 40 40 0 0 1 70 20" fill="none" stroke="#3B82F6" stroke-dasharray="125" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-800 tracking-tight">78<span className="text-base text-slate-400 font-medium">/100</span></span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.03)] border border-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-center mb-8 relative z-10">
<div className="flex items-center gap-3 bg-amber-50 pr-4 pl-1 py-1 rounded-full border border-amber-100">
<div className="bg-amber-100 p-2 rounded-full text-amber-600">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-amber-700 text-sm">System Alerts <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full ml-2 shadow-sm">2</span></span>
</div>
<button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition-colors shadow-md flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i> Log Catch
                        </button>
</div>
<div className="mb-8 relative z-10 flex gap-12">
<div>
<p className="text-base font-medium text-slate-500 mb-2">Active Hotspots</p>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-slate-800 tracking-tight">12</span>
<span className="text-base font-medium text-slate-400">/ 50 capacity</span>
</div>
</div>
<div className="hidden sm:block w-[1px] bg-slate-100 self-stretch"></div>
<div className="hidden sm:block">
<p className="text-base font-medium text-slate-500 mb-2">Your Captures</p>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-blue-600 tracking-tight">43</span>
<span className="text-sm font-medium text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">+3 this week</span>
</div>
</div>
</div>

<div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 relative z-10">
<div className="flex justify-between items-center mb-5">
<h4 className="text-base font-medium text-slate-700">Database Overview</h4>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Live</span>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-semibold text-slate-800 tracking-tight">87</span>
<span className="text-sm font-medium text-slate-500 mb-1">mapped</span>
</div>
<div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
<span>Species coverage</span>
<span>65%</span>
</div>
<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
<div className="bg-indigo-400 h-full rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-semibold text-slate-800 tracking-tight">2.4k</span>
<span className="text-sm font-medium text-slate-500 mb-1">users</span>
</div>
<div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
<span>Active community</span>
<span>88%</span>
</div>
<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
<div className="bg-teal-400 h-full rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-[#EAF2F8] rounded-[2rem] p-6 shadow-[inset_0_0_40px_rgba(255,255,255,0.6),0_8px_30px_-4px_rgba(0,0,0,0.03)] border border-white relative overflow-hidden flex flex-col min-h-[400px]">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center z-10 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-2xl w-full mx-auto shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white gap-4">
<div className="flex items-center gap-4">
<div className="bg-white p-2 rounded-xl shadow-sm text-blue-600 border border-slate-50">
<i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-800">Live Radar</span>
<span className="text-xs font-medium text-slate-500">Real-time tracking</span>
</div>
</div>

<div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-sm font-medium text-slate-500 border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors whitespace-nowrap">
                                Species: <span className="text-slate-800 font-semibold">Salmon</span> <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-sm font-medium text-slate-500 border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors whitespace-nowrap">
                                Time: <span className="text-slate-800 font-semibold">Last 30 d</span> <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</div>
<button className="w-10 h-10 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-600 border border-slate-100 transition-colors">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem]">

<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/50 rounded-full blur-3xl mix-blend-overlay"></div>
<div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#C1DDF1]/40 rounded-full blur-3xl mix-blend-overlay"></div>

<svg className="opacity-40 absolute inset-0" height="100%" width="100%">
<path d="M -100 200 Q 200 100 400 300 T 800 150 T 1200 300" fill="none" stroke="#A8CDE8" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M 0 350 Q 250 250 450 450 T 850 350 T 1300 550" fill="none" stroke="#A8CDE8" stroke-opacity="0.6" strokeWidth="3"></path>
<path d="M 100 100 Q 300 200 600 50 T 1000 250" fill="none" stroke="#A8CDE8" strokeWidth="1"></path>
</svg>

<div className="absolute top-[45%] left-[35%] z-10 flex flex-col items-center group pointer-events-auto cursor-pointer">
<div className="w-14 h-14 rounded-full bg-white/40 backdrop-blur-md border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center relative transition-transform group-hover:scale-110">
<div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
<div className="w-6 h-6 rounded-full bg-blue-500 shadow-inner flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
</div>

<div className="absolute top-full mt-4 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-white w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-20">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Status: Normal</span>
<i className="w-4 h-4 text-slate-400" data-lucide="info"></i>
</div>
<h5 className="text-base font-semibold text-slate-800 mb-1">Pacific NW-Area 3</h5>
<div className="space-y-1 mb-4">
<p className="text-sm text-slate-500 flex justify-between">Vessels: <span className="font-medium text-slate-700">04</span></p>
<p className="text-sm text-slate-500 flex justify-between">Target: <span className="font-medium text-slate-700">Salmon</span></p>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-slate-500 mb-1.5">
<span>Capacity</span>
<span className="text-slate-700">320/1200 t</span>
</div>
<div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full rounded-full relative overflow-hidden" style={{width: '28%'}}>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, white 4px, white 8px)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[30%] right-[25%] w-4 h-4 rounded-full bg-white shadow-md border-2 border-indigo-400 z-10"></div>
<div className="absolute bottom-[20%] left-[60%] w-4 h-4 rounded-full bg-white shadow-md border-2 border-teal-400 z-10"></div>
</div>

<div className="absolute right-6 bottom-6 flex flex-col gap-3 z-10">
<button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-white text-slate-600 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-white text-slate-600 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="minus" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="lg:col-span-5 bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.03)] border border-white flex flex-col h-full">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="bg-indigo-50 p-2.5 rounded-2xl text-indigo-500 border border-indigo-100">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-slate-800 text-base">Bite Chart Activity</span>
</div>
<div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors">
                            Today <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-3 mt-4 min-h-[160px] relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-[1px] bg-slate-50"></div>
<div className="w-full h-[1px] bg-slate-50"></div>
<div className="w-full h-[1px] bg-slate-50"></div>
<div className="w-full h-[1px] bg-slate-50"></div>
</div>

<div className="w-full flex flex-col items-center gap-3 group relative z-10 h-full justify-end">
<div className="w-full bg-[#EAF2F8] h-[30%] rounded-xl group-hover:bg-blue-100 transition-colors relative"></div>
<span className="text-xs font-medium text-slate-400">00h</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative z-10 h-full justify-end">
<div className="w-full bg-[#EAF2F8] h-[40%] rounded-xl group-hover:bg-blue-100 transition-colors"></div>
<span className="text-xs font-medium text-slate-400">04h</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative z-10 h-full justify-end">

<div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 h-[85%] rounded-xl relative shadow-[0_4px_15px_rgba(59,130,246,0.3)]">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-slate-800 shadow-lg">Peak Time</div>
</div>
<span className="text-xs font-semibold text-slate-800">08h</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative z-10 h-full justify-end">
<div className="w-full bg-[#EAF2F8] h-[60%] rounded-xl group-hover:bg-blue-100 transition-colors"></div>
<span className="text-xs font-medium text-slate-400">12h</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative z-10 h-full justify-end">
<div className="w-full bg-[#EAF2F8] h-[45%] rounded-xl group-hover:bg-blue-100 transition-colors"></div>
<span className="text-xs font-medium text-slate-400">16h</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative z-10 h-full justify-end">
<div className="w-full bg-[#EAF2F8] h-[70%] rounded-xl group-hover:bg-blue-100 transition-colors"></div>
<span className="text-xs font-medium text-slate-400">20h</span>
</div>
</div>

<div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 -mx-8 -mb-8 px-8 py-5 rounded-b-[2rem]">
<div className="flex items-center gap-2 bg-blue-50/80 text-blue-600 px-4 py-2 rounded-full border border-blue-100">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-sm font-semibold tracking-wide">Peak: 06h–09h</span>
</div>
<span className="text-sm font-medium text-slate-400 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="moon"></i> Tidal based
                        </span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
