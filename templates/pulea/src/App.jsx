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



(function () {
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  lucide.createIcons({ strokeWidth: 1.5 });

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
      

<header className="sticky z-50 top-0 bg-black/60 backdrop-blur [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex bg-slate-950 w-8 h-8 rounded items-center justify-center">
<span className="text-xl font-semibold text-slate-50 tracking-tight text-left bg-slate-50/0 translate-x-4 scale-110" style={{}}>Pulea</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
<a className="transition hover:text-white" href="#">Blog</a>
<a className="transition hover:text-white" href="#">Updates</a>
<a className="transition hover:text-white" href="#">Pricing</a>
<a className="transition hover:text-white" href="#">About</a>
<a className="transition hover:text-white" href="#">Careers</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg border border-white/50 transition hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" href="#">Contact</a>
</div>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative pb-24">
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-hidden border border-dashed border-white/20 xl:bg-neutral-950/60 mt-6">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>

<div className="flex min-h-[68vh] md:min-h-[76vh] flex-col sm:py-28 text-center pt-24 pr-6 pb-24 pl-6 relative items-center justify-center">
<a className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-emerald-300 bg-emerald-400/10 rounded-full ring-1 ring-emerald-300/25 transition hover:bg-emerald-400/15 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both]" href="#">
<span className="uppercase tracking-widest text-[11px] text-emerald-200/90">New</span>
<span className="tabular-nums">2025 October Release</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<h1 className="sm:text-5xl md:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] text-4xl font-light text-white tracking-tighter font-geist max-w-4xl mt-6" style={{}}>Deploy at warp speed. One command. Zero worry.</h1>
<p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-300 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
          No configs or servers to babysit. Pulse ships your app globally and keeps it fast 24/7.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-3 mt-8 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both]">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg border border-white/50 transition hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" href="#">
            Join waitlist
          </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-lg transition hover:bg-zinc-100" href="#">
            Learn more
          </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative mb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative overflow-hidden border border-dashed border-white/20 xl:bg-neutral-950/60 mt-6">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>
<div className="relative px-8 py-16 md:px-8 md:py-16 text-center">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-emerald-300 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-2xl font-light text-emerald-300/80 tabular-nums">01</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">DEPLOYMENT PLATFORM</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight font-geist mb-4 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            Everything you need to deploy faster
          </h2>
<p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
            Lightning-fast deployment tools that accelerate your workflow and get your code live in seconds.
          </p>
</div>

<div className="lg:bg-black rounded-2xl ring-1 ring-white/10 overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-center justify-between bg-black/30 border-b border-white/10 px-4 sm:px-6 py-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<span className="text-white">Pulse Analytics</span>
<span className="opacity-60">/</span>
<span className="text-white">Performance</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 px-2 py-0.5 text-[11px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 342 active
              </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 lg:col-span-2 bg-black/20 border-r border-white/10 min-h-[520px] p-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm text-zinc-200 hover:bg-white/10 px-3 py-2 mb-4">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                New Report
              </button>
<nav className="space-y-6">
<div>
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Analytics</div>
<ul className="space-y-1">
<li><a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#"><svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard</a></li>
<li><a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10" href="#"><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Performance</a></li>
<li><a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-zinc-300 hover:bg-white/5" href="#"><svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Users</a></li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-9 lg:col-span-10 min-h-[520px]">
<div className="px-4 sm:px-6 py-3 border-b border-white/10">
<div className="flex items-center gap-6">
<button className="text-sm text-white">Overview</button>
<button className="text-sm text-zinc-400 hover:text-white transition">Real-time</button>
<button className="text-sm text-zinc-400 hover:text-white transition">Historical</button>
</div>
</div>
<div className="px-4 sm:px-6 py-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-white font-geist font-light text-2xl tracking-tight">System Performance</h3>
<span className="text-[11px] rounded-md bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2 py-0.5">Excellent</span>
</div>
<div className="text-xs text-zinc-400">Updated 15s ago</div>
</div>
</div>
<div className="px-4 sm:px-6 py-4 space-y-3">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-activity w-5 h-5 text-emerald-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<div>
<div className="text-sm text-white">Response Time Improved</div>
<div className="text-xs text-zinc-500">Average latency 127ms • -23% from last week</div>
</div>
</div>
<span className="text-[11px] rounded-md bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2 py-0.5">OPTIMAL</span>
</div>
<div className="mt-3 bg-black/40 rounded-lg ring-1 ring-white/10 p-3">
<code className="text-xs font-mono text-zinc-300">
<span className="text-zinc-500">→</span> API Requests: <span className="text-emerald-400">1.2M</span>
<span className="text-zinc-500">→</span> Cache Hit Rate: <span className="text-emerald-400">94.3%</span>
</code>
</div>
</div>
<div className="rounded-xl ring-1 ring-emerald-300/25 bg-black/40 p-4">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-loader w-5 h-5 text-emerald-400 animate-spin" data-lucide="loader" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
<div>
<div className="text-sm text-white">Processing Analytics Report</div>
<div className="text-xs text-zinc-500">Dataset #847 • 2.4TB analyzed</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-400">Progress</span>
<div className="flex-1 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[67%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
</div>
<span className="text-xs text-zinc-400">67%</span>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative overflow-hidden border border-dashed border-white/20 xl:bg-neutral-950/60 mt-6">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>
<div className="relative px-8 py-16 md:px-8 md:py-16 text-center">
<div className="mb-16 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-emerald-300 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="tabular-nums text-2xl font-light text-emerald-300/80">02</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">HOW IT WORKS</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight font-geist mb-4 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            Deploy in three simple steps
          </h2>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
            From code to production in seconds. Our streamlined workflow makes deployment effortless.
          </p>
</div>
<div className="grid lg:grid-cols-3 border border-dashed border-white/10 lg:bg-neutral-950 lg:px-4 lg:py-4 p-4 gap-8 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center p-6 relative">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 ring-1 ring-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
<span className="text-3xl font-light text-emerald-300 font-geist">01</span>
</div>
<div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist tracking-tight">Write Your Code</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
              Build your application using your favorite framework and tools. No special configuration needed.
            </p>
</div>
<div className="flex flex-col items-center text-center p-6 relative">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 ring-1 ring-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
<span className="text-3xl font-light text-emerald-300 font-geist">02</span>
</div>
<div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist tracking-tight">Push to Deploy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
              Run a single command or push to Git. Our platform automatically builds and optimizes your app.
            </p>
</div>
<div className="flex flex-col items-center text-center p-6 relative">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 ring-1 ring-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
<span className="text-3xl font-light text-emerald-300 font-geist">03</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist tracking-tight">Go Live Instantly</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
              Your app is deployed globally across 200+ edge locations. Live in seconds, not minutes.
            </p>
</div>
</div>

<div className="mt-16 w-full max-w-3xl mx-auto [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="overflow-hidden bg-black/40 ring-1 ring-white/10 rounded-2xl relative">
<div className="bg-[#1C1C1E] border-b border-white/10">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<span className="text-xs text-zinc-400 font-medium">bash — pulse deploy</span>
<div className="w-12"></div>
</div>
</div>
<div className="bg-[#0F0F11] p-6">
<div className="font-mono text-sm space-y-2">
<div className="flex items-center gap-2">
<span className="text-emerald-400">user@macbook</span>
<span className="text-zinc-500">:</span>
<span className="text-blue-400">~/projects</span>
<span className="text-zinc-500">$</span>
<span className="text-white">pulse deploy</span>
</div>
<div className="h-2"></div>
<div className="space-y-2">
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check w-2 h-2 text-emerald-400 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-zinc-400">Building your application...</div>
<div className="text-zinc-600 text-xs mt-1">Analyzing dependencies and optimizing build</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check w-2 h-2 text-emerald-400 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-zinc-400">Build complete in <span className="text-emerald-400">1.2s</span></div>
<div className="text-zinc-600 text-xs mt-1">Generated 847KB optimized bundle</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 animate-pulse">
<svg className="lucide lucide-check w-2 h-2 text-white stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-white font-medium">Live at <a className="text-emerald-400 hover:underline" href="#">https://your-app.pulse.dev</a></div>
<div className="text-zinc-600 text-xs mt-1">Ready to receive traffic</div>
</div>
</div>
</div>
<div className="h-2"></div>
<div className="flex items-center gap-2">
<span className="text-emerald-400">user@macbook</span>
<span className="text-zinc-500">:</span>
<span className="text-blue-400">~/projects</span>
<span className="text-zinc-500">$</span>
<span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1"></span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg border border-white/50 transition hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" href="#">
            Start Deployment Now
          </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative overflow-hidden border border-dashed border-white/20 xl:bg-neutral-950/60 mt-6">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>
<div className="relative px-8 py-16 md:px-8 md:py-16">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-emerald-300 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="tabular-nums text-2xl font-light text-emerald-300/80">03</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">GLOBAL SCALE</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight font-geist mb-4 lg:text-left [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              Lightning-fast deployments at scale
            </h2>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 sm:text-left [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
              Experience the next generation of cloud infrastructure. Deploy your applications globally in seconds with our edge-optimized platform.
            </p>
<ul className="space-y-4 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400 stroke-[2.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white xl:text-left">Global CDN network</p>
<p className="text-sm text-zinc-500 xl:text-left">Serve content from 200+ edge locations worldwide</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400 stroke-[2.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white xl:text-left">Automatic SSL certificates</p>
<p className="text-sm text-zinc-500 xl:text-left">Secure connections with zero configuration</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400 stroke-[2.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white xl:text-left">Instant rollbacks</p>
<p className="text-sm text-zinc-500 xl:text-left">Revert to any previous version in one click</p>
</div>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-3 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg border border-white/50 transition hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]" href="#">
                Get Started
              </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-lg transition hover:bg-zinc-100" href="#">
                View Documentation
              </a>
</div>
</div>
<div className="relative [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll" style={{animation: 'gentleFloat 6s ease-in-out infinite'}}>
<div className="relative max-w-lg mx-auto">
<div className="rounded-2xl ring-1 ring-white/10 bg-[#0F0F11] overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:ring-emerald-500/30 relative group">
<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="p-6 relative">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-1 ring-white/10 rounded-lg px-2.5 py-1">
<div className="h-1.5 w-1.5 animate-pulse bg-emerald-400 rounded-full"></div>
                      Building
                    </span>
<span className="text-xs text-zinc-400">2m 14s</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Global Deployment</h3>
<p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    Your app is being deployed to 200+ edge locations worldwide. Lightning-fast performance guaranteed.
                  </p>
<div className="bg-[#1C1C1E] rounded-xl p-4 mb-4 ring-1 ring-white/10">
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-check w-3 h-3 text-white stroke-[2.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Build completed</span>
<span className="text-xs text-zinc-400">1m 20s</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">All dependencies installed and optimized</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 ring-2 ring-emerald-500 flex items-center justify-center mt-0.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Deploying to edge</span>
<span className="text-xs text-emerald-400">In progress</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Pushing to global CDN network</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center mt-0.5"></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">SSL certificates</span>
<span className="text-xs text-zinc-500">Pending</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Automatic HTTPS provisioning</p>
</div>
</div>
</div>
</div>
<div className="mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-400">Overall Progress</span>
<span className="text-xs text-emerald-400 font-medium">68%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center justify-center gap-2">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                      View Live
                    </button>
<button className="bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium w-10 h-10 rounded-lg flex items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative overflow-hidden border border-dashed border-white/20 xl:bg-neutral-950/60 mt-6">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>
<div className="relative px-8 py-16 md:px-8 md:py-16">
<div className="text-left max-w-3xl mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-emerald-300 mb-6">
<span className="tabular-nums text-2xl font-light text-emerald-300/80">04</span>
<span className="text-emerald-300/40">/</span>
<span className="uppercase text-[11px] text-emerald-200/90 tracking-widest">TESTIMONIALS</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-geist font-light tracking-tight text-white mb-4">
            Trusted by developers worldwide
          </h2>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            See what teams are building with Pulse and how we've helped them ship faster.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-6 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="overflow-hidden min-h-[320px] bg-white/5 ring-1 ring-white/10 relative">
<img alt="Customer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&amp;h=800&amp;fit=crop"/>
</div>
<div className="flex flex-col sm:bg-neutral-950 bg-black/40 ring-1 ring-white/10 p-8 sm:p-10 justify-center">
<div className="mb-4">
<svg className="lucide lucide-quote w-8 h-8 text-emerald-400 stroke-[1.5]" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-white font-geist tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug">
              "We saved on hosting and boosted conversions just by running Pulse."
            </p>
<div className="mt-8">
<div className="text-white text-base font-medium">Tom Sullivan</div>
<div className="text-zinc-400 text-sm mt-1">Agency Lead</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex flex-col xl:bg-neutral-950 bg-white/5 ring-1 ring-white/10 p-6 justify-between overflow-hidden relative">
<div style={{animation: 'smoothSlideInUp 6s ease-in-out 0s infinite'}}>
<p className="text-zinc-300 text-base leading-relaxed">
                "Switching to Pulse was a game-changer. Our deployment time dropped from hours to seconds, and the developer experience is incredible."
              </p>
<div className="flex items-center gap-3 mt-6">
<img alt="Michael Chen" className="h-8 w-8 object-cover ring-1 ring-white/10 rounded" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-white text-sm font-medium">Michael Chen</div>
<div className="text-zinc-500 text-xs">CTO @ TechFlow</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col xl:bg-neutral-950 bg-white/5 ring-1 ring-white/10 p-6 justify-between overflow-hidden relative">
<div style={{animation: 'smoothSlideInUp 6s ease-in-out 1s infinite'}}>
<p className="text-zinc-300 text-base leading-relaxed">
                "The automatic scaling and zero-config SSL saved us countless hours. Our team can now focus on building features instead of managing infrastructure."
              </p>
<div className="flex items-center gap-3 mt-6">
<img alt="Emily Roberts" className="h-8 w-8 object-cover ring-1 ring-white/10 rounded" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-white text-sm font-medium">Emily Roberts</div>
<div className="text-zinc-500 text-xs">Lead Engineer @ DataSync</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col xl:bg-neutral-950 bg-white/5 ring-1 ring-white/10 p-6 justify-between overflow-hidden relative">
<div style={{animation: 'smoothSlideInUp 6s ease-in-out 2s infinite'}}>
<p className="text-zinc-300 text-base leading-relaxed">
                "We migrated 50+ client projects to Pulse. The performance improvements were immediate, and our clients noticed the difference right away."
              </p>
<div className="flex items-center gap-3 mt-6">
<img alt="David Park" className="h-8 w-8 object-cover ring-1 ring-white/10 rounded" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="text-white text-sm font-medium">David Park</div>
<div className="text-zinc-500 text-xs">Creative Director @ Studio X</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative overflow-hidden border border-dashed border-white/20 xl:bg-neutral-950/60 mt-6">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)] bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
</div>
<div className="relative px-8 py-16 sm:py-16 md:px-8">
<div className="w-full max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
<div className="lg:col-span-2">
<div className="flex flex-col items-start">
<div className="w-8 h-8 bg-white rounded flex items-center justify-center mb-4">
<span className="text-black font-semibold text-sm tracking-tighter">PU</span>
</div>
<p className="text-sm text-zinc-400 text-left leading-relaxed mb-6">
                  Deploy at warp speed. The fastest way to ship your applications globally with zero configuration.
                </p>
<div className="flex items-center gap-3">
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 text-zinc-300" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 text-zinc-300" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 text-zinc-300" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<div className="text-left">
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Features</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Pricing</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Enterprise</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Changelog</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Documentation</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Guides</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">API Reference</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Community</a></li>
</ul>
</div>
<div className="text-left">
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">About</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
<p className="text-sm text-zinc-500">
              © 2025 Pulse. All rights reserved.
            </p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Privacy</a>
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Terms</a>
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Security</a>
<a className="text-sm text-zinc-500 hover:text-white transition" href="#">Status</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
