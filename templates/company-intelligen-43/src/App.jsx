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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="text-white font-medium tracking-tight flex items-center gap-2" href="#">
<svg fill="#fff" height="20" viewbox="0 0 116 100" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" fill-rule="evenodd"></path></svg>
<span className="text-sm tracking-tight">Platform</span>
</a>
<span className="text-zinc-700 text-sm">/</span>
<span className="text-zinc-500 text-sm">Company Intelligence</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-500">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="14"></iconify-icon>
<span>Search companies...</span>
<span className="ml-2 px-1 rounded bg-white/10 text-[10px] text-zinc-400">⌘K</span>
</div>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-6 pt-12">

<header className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 animate-enter">
<div className="flex gap-6">
<div className="h-24 w-24 bg-black rounded-xl border border-white/10 flex items-center justify-center shadow-2xl shadow-black/50">
<svg fill="#fff" height="48" viewbox="0 0 116 100" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" fill-rule="evenodd"></path></svg>
</div>
<div className="pt-1">
<h1 className="text-3xl text-white font-medium tracking-tight mb-2">Vercel</h1>
<p className="text-lg text-zinc-400 font-light mb-4 max-w-2xl">The Frontend Cloud. Build, scale, and secure a faster, personalized web.</p>
<div className="flex flex-wrap gap-3">
<a className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/20 transition-colors flex items-center gap-1.5" href="#">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="12"></iconify-icon> vercel.com
                        </a>
<a className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/20 transition-colors flex items-center gap-1.5" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="12"></iconify-icon> @vercel
                        </a>
<a className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/20 transition-colors flex items-center gap-1.5" href="#">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="12"></iconify-icon> San Francisco, CA
                        </a>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors border border-white/10 rounded-lg hover:bg-white/5">Follow</button>
<button className="px-4 py-2 text-sm bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">Visit Website</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">

<section className="glass-panel rounded-xl p-6 animate-enter delay-100">
<div className="flex items-center justify-between mb-4">
<h2 className="text-white text-sm font-medium tracking-tight">Company Overview</h2>
<iconify-icon className="text-zinc-600" icon="lucide:info" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-zinc-400">
                        Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. Founded by the creators of Next.js, Vercel enables teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has built an ecosystem that handles the difficult parts of deploying and scaling frontend applications, allowing developers to focus purely on code and customer value.
                    </p>
<div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
<div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Founded</div>
<div className="text-white text-sm font-medium">2015</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Employees</div>
<div className="text-white text-sm font-medium">500-1,000</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Type</div>
<div className="text-white text-sm font-medium">Private</div>
</div>
</div>
</section>

<section className="glass-panel rounded-xl p-6 animate-enter delay-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-white text-sm font-medium tracking-tight">Technographics &amp; Stack</h2>
<span className="text-xs text-zinc-500">Detected recently</span>
</div>
<div className="space-y-6">
<div>
<div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Core Frameworks</div>
<div className="flex flex-wrap gap-2">
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-white" icon="lucide:box" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Next.js</span>
</div>
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-blue-400" icon="lucide:code-2" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">React</span>
</div>
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-yellow-400" icon="lucide:file-json" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Node.js</span>
</div>
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-pink-400" icon="lucide:zap" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Turbo</span>
</div>
</div>
</div>
<div>
<div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Infrastructure &amp; Cloud</div>
<div className="flex flex-wrap gap-2">
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-orange-400" icon="lucide:cloud" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">AWS</span>
</div>
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-purple-400" icon="lucide:shield" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Cloudflare</span>
</div>
<div className="px-3 py-1.5 rounded-md bg-[#111] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
<iconify-icon className="text-cyan-400" icon="lucide:server" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Go</span>
</div>
</div>
</div>
</div>
</section>

<section className="glass-panel rounded-xl p-6 animate-enter delay-300">
<div className="flex items-center justify-between mb-6">
<h2 className="text-white text-sm font-medium tracking-tight">Recent News &amp; Mentions</h2>
<button className="text-xs text-zinc-500 hover:text-white transition-colors">View all</button>
</div>
<div className="space-y-4">

<div className="group flex gap-4 items-start cursor-pointer">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="lucide:newspaper" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-200 text-sm font-medium leading-snug group-hover:text-white transition-colors">Vercel Ships v0: Generative UI with Tailwind CSS and React</h3>
<div className="flex items-center gap-2 mt-1.5">
<span className="text-[10px] text-zinc-500">TechCrunch</span>
<span className="text-[10px] text-zinc-600">•</span>
<span className="text-[10px] text-zinc-500">2 weeks ago</span>
</div>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="group flex gap-4 items-start cursor-pointer">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="lucide:trending-up" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-200 text-sm font-medium leading-snug group-hover:text-white transition-colors">Vercel acquires Split to enhance feature flagging capabilities</h3>
<div className="flex items-center gap-2 mt-1.5">
<span className="text-[10px] text-zinc-500">VentureBeat</span>
<span className="text-[10px] text-zinc-600">•</span>
<span className="text-[10px] text-zinc-500">1 month ago</span>
</div>
</div>
</div>
</div>
</section>

<section className="glass-panel rounded-xl p-6 animate-enter delay-400">
<div className="flex items-center justify-between mb-6">
<h2 className="text-white text-sm font-medium tracking-tight">Available Roles</h2>
<span className="text-xs bg-white/10 px-2 py-0.5 rounded text-zinc-300">12 open</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">Engineering</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Senior Software Engineer, Platform</h3>
<p className="text-xs text-zinc-500 mt-1">Remote • US</p>
</div>
<div className="group p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Design</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Product Designer, Core</h3>
<p className="text-xs text-zinc-500 mt-1">San Francisco • Hybrid</p>
</div>
<div className="group p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Sales</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Enterprise Account Executive</h3>
<p className="text-xs text-zinc-500 mt-1">New York • Hybrid</p>
</div>
<div className="group p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-pink-400 bg-pink-400/10 px-2 py-0.5 rounded">DX</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Developer Advocate</h3>
<p className="text-xs text-zinc-500 mt-1">London • Remote</p>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="glass-panel rounded-xl p-6 animate-enter delay-200">
<h2 className="text-white text-sm font-medium tracking-tight mb-5 flex items-center gap-2">
<iconify-icon className="text-green-500" icon="lucide:banknote" strokeWidth="1.5" width="16"></iconify-icon>
                        Financials
                    </h2>
<div className="space-y-5">
<div className="relative">
<div className="text-[10px] uppercase text-zinc-500 tracking-wider mb-1">Company Status</div>
<div className="flex items-center gap-2">
<span className="text-white font-medium text-base">Private</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300">Series D</span>
</div>
</div>
<div className="relative">
<div className="text-[10px] uppercase text-zinc-500 tracking-wider mb-1">Last Valuation</div>
<div className="flex items-baseline gap-1">
<span className="text-white font-semibold text-2xl tracking-tight">$3.25B</span>
<span className="text-xs text-zinc-500">Post-money</span>
</div>
</div>
<div className="relative">
<div className="text-[10px] uppercase text-zinc-500 tracking-wider mb-1">Total Funding</div>
<div className="text-zinc-200 text-sm">$484M</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="text-[10px] uppercase text-zinc-500 tracking-wider mb-2">Key Investors</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-zinc-300 bg-white/5 px-2 py-1 rounded border border-white/5">Accel</span>
<span className="text-xs text-zinc-300 bg-white/5 px-2 py-1 rounded border border-white/5">GV</span>
<span className="text-xs text-zinc-300 bg-white/5 px-2 py-1 rounded border border-white/5">Bedrock</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 animate-enter delay-300">
<h2 className="text-white text-sm font-medium tracking-tight mb-5">Leadership</h2>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xs text-white">GR</div>
</div>
<div className="flex-1">
<h3 className="text-white text-sm font-medium">Guillermo Rauch</h3>
<p className="text-xs text-zinc-500">CEO &amp; Founder</p>
</div>
<div className="flex gap-2">
<a className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<a className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 space-y-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] text-zinc-300">KL</div>
<div>
<h3 className="text-zinc-300 text-xs font-medium">Kevin Lewis</h3>
<p className="text-[10px] text-zinc-500">Chief Revenue Officer</p>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 animate-enter delay-400">
<h2 className="text-white text-sm font-medium tracking-tight mb-4">Similar Companies</h2>
<ul className="space-y-3">
<li className="flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded bg-white/5 border border-white/5 flex items-center justify-center text-white text-[10px]">N</div>
<div className="flex-1">
<div className="text-xs text-zinc-300 group-hover:text-white transition-colors">Netlify</div>
<div className="text-[10px] text-zinc-600">Web Development</div>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400" icon="lucide:chevron-right" strokeWidth="1.5" width="12"></iconify-icon>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded bg-white/5 border border-white/5 flex items-center justify-center text-white text-[10px]">H</div>
<div className="flex-1">
<div className="text-xs text-zinc-300 group-hover:text-white transition-colors">Heroku</div>
<div className="text-[10px] text-zinc-600">Cloud Platform</div>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400" icon="lucide:chevron-right" strokeWidth="1.5" width="12"></iconify-icon>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded bg-white/5 border border-white/5 flex items-center justify-center text-white text-[10px]">R</div>
<div className="flex-1">
<div className="text-xs text-zinc-300 group-hover:text-white transition-colors">Railway</div>
<div className="text-[10px] text-zinc-600">Infrastructure</div>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400" icon="lucide:chevron-right" strokeWidth="1.5" width="12"></iconify-icon>
</li>
</ul>
</div>
</div>
</div>
</main>

    </>
  );
}
