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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-semibold">T</div>
<span className="text-slate-900 font-semibold tracking-tight">Trading Leagues</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#problem">Problem</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#ui">Design</a>
</div>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                Download App
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50rem] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Case Study 2024
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                Trading Leagues
            </h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-2 font-medium">
                Trade. Learn. Compete. Grow.
            </p>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
                Simplified trading combined with immersive learning &amp; gamification for the next generation of investors.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-200">
                    Get Started
                </button>
<button className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all hover:border-slate-300">
                    Read Case Study
                </button>
</div>

<div className="relative max-w-5xl mx-auto mt-12">

<div className="relative z-10 mx-auto w-64 md:w-80 aspect-[9/19] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">

<div className="h-full w-full bg-white flex flex-col relative">

<div className="h-14 bg-white flex items-center justify-between px-6 pt-2">
<span className="iconify text-slate-400" data-icon="lucide:menu" data-width="20"></span>
<span className="text-xs font-semibold tracking-widest text-slate-900 uppercase">EquityX</span>
<span className="iconify text-slate-400" data-icon="lucide:bell" data-width="20"></span>
</div>

<div className="px-6 mt-4">
<div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
<div className="text-xs opacity-80 mb-1">Portfolio Value</div>
<div className="text-2xl font-semibold tracking-tight">$12,450.00</div>
<div className="flex items-center gap-1 mt-2 text-xs text-blue-100">
<span className="iconify" data-icon="lucide:trending-up"></span>
<span>+12.5% today</span>
</div>
</div>
</div>

<div className="px-6 mt-6 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:bitcoin"></span>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Bitcoin</div>
<div className="text-[10px] text-slate-400">BTC/USD</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-900">$42,000</div>
<div className="text-[10px] text-green-500">+2.4%</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:apple"></span>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Apple Inc.</div>
<div className="text-[10px] text-slate-400">AAPL</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-900">$175.40</div>
<div className="text-[10px] text-green-500">+0.8%</div>
</div>
</div>
</div>

<div className="mt-auto h-16 border-t border-slate-100 flex items-center justify-around text-slate-400">
<span className="iconify text-blue-600" data-icon="lucide:home" data-width="20"></span>
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
<div className="w-10 h-10 -mt-8 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</div>
<span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span>
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-violet-100 rounded-full blur-3xl -z-10 opacity-60"></div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">The Challenge</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">Why is investing so intimidating?</h3>
<p className="text-slate-500 leading-relaxed mb-8">
                        Most financial apps are built for experts. The terminology is dense, the interfaces are cluttered, and the risk of losing money paralyzes new users before they even start.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify" data-icon="lucide:x" data-width="14"></span>
</div>
<span className="text-slate-700">Beginners find trading overwhelming &amp; complex</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify" data-icon="lucide:trending-down" data-width="14"></span>
</div>
<span className="text-slate-700">High fear of financial loss halts progress</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
</div>
<span className="text-slate-700">Too many fragmented apps for news, learning, and trading</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify" data-icon="lucide:user-minus" data-width="14"></span>
</div>
<span className="text-slate-700">Low engagement &amp; retention among new users</span>
</div>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<span className="iconify text-slate-300 mb-3" data-icon="lucide:activity" data-width="32"></span>
<div className="text-sm font-medium text-slate-900">Complex Charts</div>
<div className="text-xs text-slate-400 mt-1">"I don't understand this."</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center translate-y-8">
<span className="iconify text-slate-300 mb-3" data-icon="lucide:alert-circle" data-width="32"></span>
<div className="text-sm font-medium text-slate-900">Risk Anxiety</div>
<div className="text-xs text-slate-400 mt-1">"What if I lose it all?"</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<span className="iconify text-slate-300 mb-3" data-icon="lucide:file-question" data-width="32"></span>
<div className="text-sm font-medium text-slate-900">Jargon Overload</div>
<div className="text-xs text-slate-400 mt-1">"What is an ETF?"</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center translate-y-8">
<span className="iconify text-slate-300 mb-3" data-icon="lucide:smartphone-off" data-width="32"></span>
<div className="text-sm font-medium text-slate-900">Cluttered UI</div>
<div className="text-xs text-slate-400 mt-1">"Where do I click?"</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<span className="iconify text-blue-600 mx-auto mb-6" data-icon="lucide:target" data-width="40"></span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                “Empower everyone — from beginners to expert traders — to participate confidently in financial markets.”
            </h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-10 rounded-full"></div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-50 z-0"></div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Core Capabilities</h2>
<p className="text-slate-500">Built to bridge the gap between education and execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Demo Sandbox</h3>
<p className="text-sm text-slate-500 leading-relaxed">Practice with virtual currency in real-time market conditions without any financial risk.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:book-open" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Learn Hub</h3>
<p className="text-sm text-slate-500 leading-relaxed">Bite-sized videos, articles, and interactive quizzes tailored to your skill level.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:activity" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Real-time Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Live charts and market data powered by top-tier financial APIs for accurate decisions.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:sliders" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dual Trade Modes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Toggle between 'Simple' for beginners and 'Advanced' for technical traders.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:trophy" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Leagues &amp; Rewards</h3>
<p className="text-sm text-slate-500 leading-relaxed">Compete in trading leagues, climb leaderboards, and earn badges for milestones.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:accessibility" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">WCAG 3.0 Ready</h3>
<p className="text-sm text-slate-500 leading-relaxed">Designed for inclusivity with high contrast, scaling text, and screen reader support.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16 text-center">The 6D Process</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

<div className="relative flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-bold shadow-sm mb-4 relative z-10">01</div>
<h4 className="font-semibold text-slate-900">Discover</h4>
<p className="text-xs text-slate-500 mt-2">Market research &amp; user needs</p>
<div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-slate-200 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-bold shadow-sm mb-4 relative z-10">02</div>
<h4 className="font-semibold text-slate-900">Define</h4>
<p className="text-xs text-slate-500 mt-2">Core features &amp; scope</p>
<div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-slate-200 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-bold shadow-sm mb-4 relative z-10">03</div>
<h4 className="font-semibold text-slate-900">Dream</h4>
<p className="text-xs text-slate-500 mt-2">Ideation &amp; storyboarding</p>
<div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-slate-200 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-bold shadow-sm mb-4 relative z-10">04</div>
<h4 className="font-semibold text-slate-900">Design</h4>
<p className="text-xs text-slate-500 mt-2">Wireframing &amp; UI High-fi</p>
<div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-slate-200 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-bold shadow-sm mb-4 relative z-10">05</div>
<h4 className="font-semibold text-slate-900">Develop</h4>
<p className="text-xs text-slate-500 mt-2">Implementation &amp; testing</p>
<div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-slate-200 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shadow-lg shadow-slate-200 mb-4 relative z-10">06</div>
<h4 className="font-semibold text-slate-900">Deploy</h4>
<p className="text-xs text-slate-500 mt-2">Launch &amp; iteration</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">User Personas</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="w-16 h-16 rounded-full bg-blue-100 mb-6 flex items-center justify-center text-2xl">🎓</div>
<h3 className="text-xl font-semibold text-slate-900">Beginner Student</h3>
<p className="text-sm text-slate-400 mb-6">Age 21 • Economics Major</p>
<div className="space-y-4 text-sm">
<div className="flex flex-col gap-1">
<span className="font-medium text-slate-900">Goal:</span>
<span className="text-slate-600">Learn basics without losing savings.</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-medium text-slate-900">Frustration:</span>
<span className="text-slate-600">Overwhelmed by charts and jargon.</span>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="w-16 h-16 rounded-full bg-violet-100 mb-6 flex items-center justify-center text-2xl">💼</div>
<h3 className="text-xl font-semibold text-slate-900">Working Professional</h3>
<p className="text-sm text-slate-400 mb-6">Age 32 • Tech Manager</p>
<div className="space-y-4 text-sm">
<div className="flex flex-col gap-1">
<span className="font-medium text-slate-900">Goal:</span>
<span className="text-slate-600">Passive investing and quick market checks.</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-medium text-slate-900">Frustration:</span>
<span className="text-slate-600">Lack of time to research stocks deeply.</span>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="w-16 h-16 rounded-full bg-emerald-100 mb-6 flex items-center justify-center text-2xl">⚡</div>
<h3 className="text-xl font-semibold text-slate-900">Expert Trader</h3>
<p className="text-sm text-slate-400 mb-6">Age 40 • Day Trader</p>
<div className="space-y-4 text-sm">
<div className="flex flex-col gap-1">
<span className="font-medium text-slate-900">Goal:</span>
<span className="text-slate-600">Advanced tools and competitive leagues.</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-medium text-slate-900">Frustration:</span>
<span className="text-slate-600">Simplistic apps that lack detailed data.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">User Journey Map</h2>
<div className="relative">
<div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10">

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:search" data-width="20"></span>
<div className="font-semibold text-sm">Discover</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:book-open" data-width="20"></span>
<div className="font-semibold text-sm">Learn</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:gamepad-2" data-width="20"></span>
<div className="font-semibold text-sm">Demo Trade</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:trophy" data-width="20"></span>
<div className="font-semibold text-sm">League</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:briefcase" data-width="20"></span>
<div className="font-semibold text-sm">Real Trade</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:heart" data-width="20"></span>
<div className="font-semibold text-sm">Retain</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16 text-center">Information Architecture</h2>
<div className="flex flex-col items-center">

<div className="px-8 py-3 bg-slate-900 text-white rounded-lg shadow-lg font-medium mb-8 relative">
                    Home
                    <div className="absolute top-full left-1/2 w-px h-8 bg-slate-300 -translate-x-1/2"></div>
</div>

<div className="w-full max-w-4xl h-px bg-slate-300 mb-8 relative">
<div className="absolute -top-3 left-0 w-px h-3 bg-slate-300"></div>
<div className="absolute -top-3 left-[20%] w-px h-3 bg-slate-300"></div>
<div className="absolute -top-3 left-[40%] w-px h-3 bg-slate-300"></div>
<div className="absolute -top-3 left-[60%] w-px h-3 bg-slate-300"></div>
<div className="absolute -top-3 left-[80%] w-px h-3 bg-slate-300"></div>
<div className="absolute -top-3 right-0 w-px h-3 bg-slate-300"></div>
</div>

<div className="flex justify-between w-full max-w-4xl text-sm font-medium text-slate-600 gap-2 flex-wrap md:flex-nowrap">
<div className="px-4 py-2 bg-white border border-slate-200 rounded shadow-sm text-center w-full">Market</div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded shadow-sm text-center w-full">Trade</div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded shadow-sm text-center w-full">Portfolio</div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded shadow-sm text-center w-full">Learn</div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded shadow-sm text-center w-full">Leagues</div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded shadow-sm text-center w-full">Profile</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="ui">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Interface Design</h2>
<p className="text-slate-500">Clean, focused, and data-driven.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">


<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">

<div className="absolute inset-4 bg-white rounded shadow-sm flex flex-col items-center justify-center p-4">
<div className="w-10 h-10 rounded bg-blue-100 mb-2"></div>
<div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
<div className="h-2 w-12 bg-slate-100 rounded"></div>
<div className="mt-auto w-full h-8 bg-slate-900 rounded-lg"></div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Onboarding</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-3 flex flex-col gap-2">
<div className="h-4 w-full bg-white rounded shadow-sm"></div>
<div className="h-24 w-full bg-blue-600 rounded-lg shadow-sm"></div>
<div className="h-12 w-full bg-white rounded shadow-sm"></div>
<div className="h-12 w-full bg-white rounded shadow-sm"></div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Home Dashboard</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-3 flex flex-col gap-2">
<div className="h-8 w-full bg-white rounded shadow-sm flex items-center px-2"><div className="w-4 h-4 rounded-full bg-slate-200"></div></div>
<div className="grid grid-cols-2 gap-2">
<div className="h-20 bg-white rounded shadow-sm"></div>
<div className="h-20 bg-white rounded shadow-sm"></div>
</div>
<div className="flex-1 bg-white rounded shadow-sm"></div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Market Overview</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-3 flex flex-col">
<div className="h-6 w-1/2 bg-slate-300 rounded mb-4"></div>
<div className="h-32 w-full bg-white rounded shadow-sm mb-4 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-20 text-green-500" fill="none" stroke="currentColor" strokeWidth="2">
<path d="M0 60 L10 55 L20 58 L30 40 L40 45 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="flex gap-2 mt-auto">
<div className="h-8 flex-1 bg-red-100 rounded"></div>
<div className="h-8 flex-1 bg-green-100 rounded"></div>
</div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Stock Details</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-4 flex flex-col justify-end bg-white">
<div className="absolute top-0 left-0 w-full h-full bg-slate-900/5 z-0"></div>
<div className="bg-white rounded-t-xl h-2/3 w-full shadow-lg p-3 z-10 flex flex-col gap-2">
<div className="h-4 w-1/3 bg-slate-200 rounded mx-auto"></div>
<div className="h-12 w-full border border-slate-200 rounded mt-4"></div>
<div className="h-10 w-full bg-blue-600 rounded mt-auto"></div>
</div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Order Sheet</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-3 flex flex-col gap-2">
<div className="h-32 w-full bg-violet-200 rounded-lg shadow-sm"></div>
<div className="h-16 w-full bg-white rounded shadow-sm"></div>
<div className="h-16 w-full bg-white rounded shadow-sm"></div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Learn Hub</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-3 flex flex-col gap-2">
<div className="h-10 w-full bg-amber-100 rounded shadow-sm flex items-center justify-center text-amber-500">
<span className="iconify" data-icon="lucide:trophy" data-width="16"></span>
</div>
<div className="flex-1 bg-white rounded shadow-sm flex flex-col gap-2 p-2">
<div className="h-8 w-full bg-slate-50 rounded"></div>
<div className="h-8 w-full bg-slate-50 rounded"></div>
<div className="h-8 w-full bg-slate-50 rounded"></div>
</div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Leagues</span>
</div>

<div className="flex flex-col gap-3">
<div className="aspect-[9/18] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute inset-0 p-3 flex flex-col items-center pt-8">
<div className="w-16 h-16 rounded-full bg-slate-300 mb-2"></div>
<div className="h-3 w-24 bg-slate-200 rounded mb-6"></div>
<div className="w-full h-8 bg-white rounded mb-2"></div>
<div className="w-full h-8 bg-white rounded mb-2"></div>
</div>
</div>
<span className="text-xs text-center font-medium text-slate-500">Settings</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">Engagement Strategy</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Gamified Growth</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Trading Leagues transforms financial education into a competitive sport. Users earn XP, climb leaderboards, and unlock badges for smart investing behaviors, not just profits.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<span className="iconify text-yellow-400" data-icon="lucide:crown" data-width="24"></span>
<span>Weekly Leaderboards with Prizes</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-purple-400" data-icon="lucide:medal" data-width="24"></span>
<span>Achievement Badges (e.g., "Diversification Pro")</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-green-400" data-icon="lucide:coins" data-width="24"></span>
<span>Virtual Currency Rewards</span>
</li>
</ul>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-6">

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
<span className="iconify text-white" data-icon="lucide:zap" data-width="32"></span>
</div>
<h3 className="font-semibold">Fast Starter</h3>
<p className="text-xs text-slate-400 mt-1">Complete 5 tutorials</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center mt-8">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="32"></span>
</div>
<h3 className="font-semibold">Risk Manager</h3>
<p className="text-xs text-slate-400 mt-1">Maintain diverse portfolio</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/20">
<span className="iconify text-white" data-icon="lucide:gem" data-width="32"></span>
</div>
<h3 className="font-semibold">Diamond Hands</h3>
<p className="text-xs text-slate-400 mt-1">Hold asset for 30+ days</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center mt-8">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
<span className="iconify text-white" data-icon="lucide:users" data-width="32"></span>
</div>
<h3 className="font-semibold">Social Trader</h3>
<p className="text-xs text-slate-400 mt-1">Join 3 Leagues</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Accessibility (WCAG 3.0)</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-900 mb-4" data-icon="lucide:contrast" data-width="28"></span>
<h3 className="font-medium text-slate-900">High Contrast</h3>
<p className="text-xs text-slate-500 mt-1">AA+ Compliant colors</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-900 mb-4" data-icon="lucide:type" data-width="28"></span>
<h3 className="font-medium text-slate-900">Dynamic Type</h3>
<p className="text-xs text-slate-500 mt-1">Scalable font sizes</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-900 mb-4" data-icon="lucide:move-horizontal" data-width="28"></span>
<h3 className="font-medium text-slate-900">Reduced Motion</h3>
<p className="text-xs text-slate-500 mt-1">Optional animation toggle</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
<span className="iconify text-slate-900 mb-4" data-icon="lucide:mic" data-width="28"></span>
<h3 className="font-medium text-slate-900">Screen Readers</h3>
<p className="text-xs text-slate-500 mt-1">Full ARIA label support</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 to-violet-700 overflow-hidden relative text-center px-6 py-24 shadow-2xl shadow-blue-900/20">
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Experience EquityX</h2>
<p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Explore the interactive prototype to see how we are changing the way the world learns to trade.
                </p>
<button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg">
                    View Full Prototype
                </button>
</div>

<div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white text-xs font-bold">T</div>
<span className="font-semibold text-slate-900">Trading Leagues</span>
</div>
<div className="text-sm text-slate-400">
                © 2024 EquityX Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
