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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center text-zinc-950">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">Flow.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Product</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Method</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Customers</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white hidden sm:block" href="#">Log in</a>
<button className="bg-white text-zinc-950 text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5734c15c-5c69-4ff7-94ea-72a3079d57f8_3840w.jpg)] bg-cover bg-center pt-48 pb-32 relative">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.15] -z-10 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">Flow 2.0 is now available</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                    Orchestrate your <br className="hidden md:block"/> <span className="text-zinc-500">entire workflow.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl mx-auto mb-10">
                    The operating system for high-performance teams. Manage projects, docs, and sprints in one unified, beautiful workspace.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-zinc-950 h-12 px-8 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5">
                        Start for free
                        <svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(9, 9, 11)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full sm:w-auto bg-zinc-900 text-zinc-300 border border-zinc-800 h-12 px-8 rounded-full font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                        View Changelog
                    </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto animate-float">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] blur-3xl opacity-50"></div>

<div className="relative bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[400px] md:h-[600px]">

<div className="hidden md:flex flex-col w-64 bg-zinc-900/50 border-r border-zinc-800 p-4">
<div className="flex items-center gap-2 mb-6 px-2">
<div className="w-6 h-6 rounded bg-zinc-800"></div>
<div className="w-24 h-4 rounded bg-zinc-800/50"></div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700/50 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="inbox"></i>
<span className="text-xs font-medium text-white">Inbox</span>
<span className="ml-auto text-[10px] font-semibold text-zinc-400 bg-zinc-700 px-1.5 py-0.5 rounded">4</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<i className="w-4 h-4 text-zinc-500" data-lucide="calendar"></i>
<span className="text-xs font-medium text-zinc-400">Today</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<i className="w-4 h-4 text-zinc-500" data-lucide="layout"></i>
<span className="text-xs font-medium text-zinc-400">Projects</span>
</div>
</div>
<div className="mt-8 px-3">
<span className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase">Favorites</span>
<div className="mt-3 space-y-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<div className="w-20 h-2 rounded bg-zinc-800/50"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<div className="w-16 h-2 rounded bg-zinc-800/50"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-zinc-900 flex flex-col">

<div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-zinc-200">Product Roadmap Q4</span>
<span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px] border border-zinc-700">Planning</span>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border-2 border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border-2 border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-500 border-2 border-zinc-900"></div>
</div>
<div className="w-px h-4 bg-zinc-800 mx-2"></div>
<i className="w-4 h-4 text-zinc-500" data-lucide="sliders-horizontal"></i>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden bg-zinc-900/50 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">To Do</span>
<span className="text-xs text-zinc-600">3</span>
</div>

<div className="p-3 bg-zinc-800 rounded border border-zinc-700/50 shadow-sm hover:border-zinc-600 transition-colors">
<div className="w-8 h-1 rounded-full bg-red-500/20 mb-3"></div>
<div className="h-2 w-3/4 bg-zinc-600 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-zinc-700 rounded"></div>
</div>

<div className="p-3 bg-zinc-800 rounded border border-zinc-700/50 shadow-sm hover:border-zinc-600 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-1 rounded-full bg-blue-500/20"></div>
<i className="w-3 h-3 text-zinc-600" data-lucide="more-horizontal"></i>
</div>
<div className="h-2 w-full bg-zinc-600 rounded mb-2"></div>
<div className="h-2 w-1/3 bg-zinc-700 rounded mb-3"></div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-zinc-700"></div>
<div className="text-[9px] text-zinc-500">Due tomorrow</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col gap-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">In Progress</span>
<span className="text-xs text-zinc-600">2</span>
</div>

<div className="p-3 bg-zinc-800 rounded border border-zinc-700/50 shadow-sm hover:border-zinc-600 transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
<div className="ml-2">
<div className="h-2 w-2/3 bg-zinc-600 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-700/50 rounded mb-1"></div>
<div className="h-2 w-5/6 bg-zinc-700/50 rounded mb-3"></div>

<div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col gap-3 opacity-50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Done</span>
<span className="text-xs text-zinc-600">5</span>
</div>

<div className="p-3 bg-zinc-900 rounded border border-zinc-800 border-dashed">
<div className="h-2 w-1/2 bg-zinc-800 rounded mb-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-800 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-600 mb-8">TRUSTED BY TEAMS AT</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale invert">

<h3 className="text-lg font-bold tracking-tight text-black">ACME<span className="font-light">CORP</span></h3>
<h3 className="text-lg font-semibold tracking-tighter text-black italic">vertex</h3>
<h3 className="text-lg font-bold tracking-tight text-black flex items-center gap-1"><div className="w-3 h-3 bg-black rounded-full"></div> Global</h3>
<h3 className="text-lg font-extrabold tracking-tight text-black">STRATO</h3>
<h3 className="text-lg font-medium tracking-widest text-black uppercase">Nebula</h3>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Designed for focus.</h2>
<p className="text-zinc-400 leading-relaxed">Every interaction is crafted to keep you in the flow state. Remove distractions and manage complexity with ease.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-zinc-900 rounded-2xl border border-zinc-800 p-8 relative overflow-hidden group shadow-sm hover:border-zinc-700 transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Instant Synchronization</h3>
<p className="text-sm text-zinc-400 max-w-sm">Updates happen in real-time across all devices. No spinners, no loading bars. Just pure speed.</p>
</div>

<div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/4 md:translate-x-0 md:-translate-y-1/2 w-64 h-64 bg-zinc-800/50 rounded-full border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-40 h-40 bg-zinc-900 rounded-full border border-zinc-700 shadow-lg flex items-center justify-center relative">
<div className="absolute w-full h-full rounded-full border border-zinc-700 animate-ping opacity-20"></div>
<i className="w-8 h-8 text-zinc-500" data-lucide="refresh-cw"></i>
</div>
</div>
</div>

<div className="md:row-span-2 bg-zinc-900 rounded-2xl border border-zinc-800 p-8 relative overflow-hidden group shadow-sm hover:border-zinc-700 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Insights</h3>
<p className="text-sm text-zinc-400 mb-8">Track velocity and team performance automatically.</p>
<div className="flex-1 bg-zinc-800/50 rounded-t-xl border-t border-x border-zinc-800 p-4 relative translate-y-2 group-hover:translate-y-0 transition-transform">

<div className="flex items-end justify-between h-full gap-2 pb-2">
<div className="w-full bg-zinc-700 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-zinc-600 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-white rounded-t-sm h-[85%] relative group-hover:bg-zinc-200 transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-zinc-950 text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">+24%</div>
</div>
<div className="w-full bg-zinc-700 rounded-t-sm h-[55%]"></div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 relative overflow-hidden group shadow-sm hover:border-zinc-700 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>

<div className="w-10 h-6 bg-white rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-zinc-950 rounded-full absolute top-1 right-1 shadow-sm"></div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Secure by Default</h3>
<p className="text-sm text-zinc-400">Enterprise-grade encryption for all your data.</p>
</div>

<div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 relative overflow-hidden group shadow-sm hover:border-zinc-700 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="command"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Keyboard First</h3>
<p className="text-sm text-zinc-400">Navigate the entire interface without touching your mouse.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-800">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to regain your focus?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">Join 10,000+ teams building the future with Flow. Free for individuals, powerful for teams.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<input className="w-full sm:w-80 h-12 px-5 rounded-full border border-zinc-800 bg-zinc-900 focus:bg-zinc-800 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all text-sm text-white placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                    Get Started
                </button>
</div>
<p className="mt-6 text-xs text-zinc-600">No credit card required. 14-day free trial.</p>
</div>
</section>

<footer className="py-12 bg-zinc-900/30 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center text-zinc-950">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Flow.</span>
</div>
<div className="flex flex-wrap gap-8">
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Discord</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Flow Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
