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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-2xl font-black italic tracking-tighter">
                VANMAN<span className="text-yellow-400">MEDIA</span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs font-semibold uppercase tracking-widest text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors text-yellow-400" href="#">Join the Artists</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-40 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-8 leading-tight">
                GET THE MOVES YOU DESERVE,<br/>
                ON <span className="underline decoration-yellow-400 decoration-8 underline-offset-8">AUTOPILOT!</span>
</h1>
<div className="flex justify-center mb-16">
<button className="bg-yellow-400 text-black px-12 py-5 rounded-full font-black italic text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                    SHOW MORE
                </button>
</div>

<div className="relative max-w-5xl mx-auto p-4 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl">
<div className="rounded-xl overflow-hidden border border-white/5 dashboard-gradient p-6 md:p-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
<div className="text-left p-4 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-zinc-500 font-semibold uppercase mb-1">Total Revenue</p>
<p className="text-3xl font-black italic">$142,850.00</p>
<div className="flex items-center gap-2 text-green-400 text-xs mt-2">
<iconify-icon icon="solar:round-alt-arrow-up-linear"></iconify-icon>
<span>+24% from last month</span>
</div>
</div>
<div className="text-left p-4 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-zinc-500 font-semibold uppercase mb-1">Total Customers</p>
<p className="text-3xl font-black italic">1,204</p>
<div className="flex items-center gap-2 text-green-400 text-xs mt-2">
<iconify-icon icon="solar:round-alt-arrow-up-linear"></iconify-icon>
<span>+12% conversion rate</span>
</div>
</div>
<div className="text-left p-4 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-zinc-500 font-semibold uppercase mb-1">Roofing Season ROI</p>
<p className="text-3xl font-black italic">8.4x</p>
<div className="flex items-center gap-2 text-yellow-400 text-xs mt-2">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>Peak Performance</span>
</div>
</div>
</div>
<div className="h-64 flex items-end gap-2 md:gap-4 px-2">
<div className="w-full bg-zinc-800 rounded-t h-1/3"></div>
<div className="w-full bg-zinc-800 rounded-t h-1/2"></div>
<div className="w-full bg-zinc-800 rounded-t h-2/3"></div>
<div className="w-full bg-yellow-400 rounded-t h-5/6"></div>
<div className="w-full bg-zinc-800 rounded-t h-3/4"></div>
<div className="w-full bg-zinc-800 rounded-t h-full"></div>
<div className="w-full bg-yellow-400 rounded-t h-4/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-yellow-400 font-semibold text-xs uppercase tracking-widest block mb-4">Our Process</span>
<h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">How We Work<span className="text-yellow-400">!</span></h2>
</div>
<button className="border border-white/20 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                    Join the Artists
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="step-card group p-8 rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-500">
<div className="relative w-32 h-32 mb-8 mx-auto flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-800" cx="64" cy="64" fill="transparent" r="60" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-yellow-400 shadow-glow" cx="64" cy="64" fill="transparent" r="60" stroke="currentColor" stroke-dasharray="376.99" stroke-dashoffset="105.5" strokeWidth="4"></circle>
</svg>
<span className="absolute text-2xl font-black italic">72%</span>
</div>
<h3 className="text-xl font-extrabold italic mb-4 text-center">Watch Video On How We Work</h3>
<p className="text-sm text-zinc-400 text-center leading-relaxed">Loom-based onboarding and instant analytics platform access to track every move.</p>
</div>

<div className="step-card group p-8 rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-500">
<div className="w-full h-32 mb-8 bg-zinc-800 rounded-xl flex items-center justify-center">
<iconify-icon className="text-yellow-400" height="48" icon="solar:calendar-date-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-extrabold italic mb-4 text-center">Book your free growth call</h3>
<p className="text-sm text-zinc-400 text-center leading-relaxed">Strategy session tailored to your needs. We review your last 30 days and build a roadmap.</p>
</div>

<div className="step-card group p-8 rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-500">
<div className="w-full h-32 mb-8 bg-zinc-800 rounded-xl flex items-center justify-center">
<iconify-icon className="text-yellow-400" height="48" icon="solar:chart-square-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-extrabold italic mb-4 text-center">Quick 2-7 day onboarding</h3>
<p className="text-sm text-zinc-400 text-center leading-relaxed">Our team builds your systems, sets up automation, and starts driving high-intent traffic.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="relative mb-16">
<h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">Before and After</h2>
<p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
<span className="text-yellow-400 font-bold">VanMan Media</span> — See the powered brain of analytics! We ramp your traffic, produce clients, and simplifies daily money management.
                </p>
<div className="absolute -top-10 -right-4 md:right-10 opacity-50 md:opacity-100">
<iconify-icon className="text-yellow-400" height="80" icon="solar:mask-hmd-linear" width="80"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="space-y-6">
<div className="p-8 rounded-3xl bg-zinc-900/50 border border-red-500/10">
<div className="flex items-center gap-3 mb-8 text-red-500">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="font-black italic text-lg uppercase">The Struggle</span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-500 line-through text-sm">
<iconify-icon className="mt-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Struggling to get high-quality clients consistently
                            </li>
<li className="flex items-start gap-3 text-zinc-500 line-through text-sm">
<iconify-icon className="mt-1" icon="solar:arrow-right-linear"></iconify-icon>
                                No predictable marketing system in place
                            </li>
<li className="flex items-start gap-3 text-zinc-500 line-through text-sm">
<iconify-icon className="mt-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Zero analytics or data to back up decisions
                            </li>
<li className="flex items-start gap-3 text-zinc-500 line-through text-sm">
<iconify-icon className="mt-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Manual follow-ups leading to missed opportunities
                            </li>
</ul>
</div>
<p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-600">Before working with VanMan Media</p>
</div>

<div className="space-y-6">
<div className="p-8 rounded-3xl bg-zinc-900 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.05)]">
<div className="flex items-center gap-3 mb-8 text-green-500">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="font-black italic text-lg uppercase">The Result</span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="mt-1 text-green-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
                                Consistent flow of pre-qualified leads daily
                            </li>
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="mt-1 text-green-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
                                Fully automated sales pipeline and CRM
                            </li>
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="mt-1 text-green-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
                                Real-time revenue and performance dashboard
                            </li>
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="mt-1 text-green-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
                                Booking system working for you on autopilot
                            </li>
</ul>
</div>
<p className="text-center text-xs font-semibold uppercase tracking-widest text-green-500">After working with VanMan Media</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-yellow-400 text-black">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none uppercase">
                YOU DO THE JOBS, <span className="bg-black text-yellow-400 px-4">FINDING THEM IS ON US!</span>
</h2>
<p className="text-lg font-semibold italic mb-10 max-w-2xl mx-auto">
                What are you waiting for? whilst you have read anything above, you could have just watched the presentation of us telling you what you have just read. And also what you have GET NOW click button down there to work it!
            </p>
<button className="bg-black text-white px-12 py-5 rounded-full font-black italic text-xl hover:scale-105 transition-transform">
                CLAIM YOUR GROWTH PLAN
            </button>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-center mb-20">What our Partners Have to Say</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">


<div className="aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-yellow-400" icon="solar:play-circle-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Partner #01</p>
</div>
</div>
<div className="aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-yellow-400" icon="solar:play-circle-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 text-xs">Partner #02</div>
</div>

<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
<div className="aspect-[9/16] bg-zinc-800/40 rounded-2xl border border-white/5"></div>
</div>
</div>
</section>

<footer className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-12">
<button className="bg-yellow-400 text-black px-12 py-5 rounded-full font-black italic text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                    SHOW MORE
                </button>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
<div className="text-xl font-black italic tracking-tighter">
                    VANMAN<span className="text-yellow-400">MEDIA</span>
</div>
<p className="text-xs text-zinc-500 font-medium">
                    © 2024 VANMAN MEDIA. ALL RIGHTS RESERVED. RESULTS ARE NOT TYPICAL BUT POSSIBLE.
                </p>
<div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
