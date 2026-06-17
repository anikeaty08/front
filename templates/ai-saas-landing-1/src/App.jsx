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



        // Initialize Icons
        lucide.createIcons();

        // Reveal Animation on Scroll
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
<video autoplay="" className="w-full h-full object-cover opacity-30 saturate-150" loop="" muted="" playsinline="">

<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-and-purple-curved-lines-9954-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-rocket text-white w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="font-semibold text-lg tracking-tight text-white">AstraLaunch</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#testimonials">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition" href="#">Login</a>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/10 transition backdrop-blur-md">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto text-center z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-enter">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Trusted by 3,000+ SaaS founders
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 animate-enter delay-100 text-glow">
            Launch SaaS pages <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300">with AI precision</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-enter delay-200">
            AstraLaunch builds, designs, and optimizes your pages using AI and live behavioral insights. Faster launches. Higher conversions.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-300">
<button className="button group">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">
                    Generate My Page
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition text-sm font-medium">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch Demo
            </button>
</div>

<div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-500 animate-enter delay-300">
<span className="flex items-center gap-1.5"><svg className="lucide lucide-check w-3 h-3 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No-code required</span>
<span className="flex items-center gap-1.5"><svg className="lucide lucide-check w-3 h-3 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Free to try</span>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-10 overflow-hidden">
<p className="text-center text-xs font-medium text-zinc-500 mb-6 uppercase tracking-widest">Used by founders who move fast</p>
<div className="marquee-container opacity-60">
<div className="marquee-content gap-12 pr-6 pl-6 gap-x-12 gap-y-12">

<div className="flex items-center gap-2"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> <span className="font-bold">Vercel</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> <span className="font-bold">Dropbox</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> <span className="font-bold">Linear</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> <span className="font-bold">Salesforce</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="font-bold">Raycast</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> <span className="font-bold">Loom</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-slack w-5 h-5" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg> <span className="font-bold">Slack</span></div>

<div className="flex items-center gap-2"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> <span className="font-bold">Vercel</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> <span className="font-bold">Dropbox</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> <span className="font-bold">Linear</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> <span className="font-bold">Salesforce</span></div>
</div>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center mt-12">
<div className="reveal">
<h3 className="text-3xl font-semibold text-white">+48%</h3>
<p className="text-xs text-zinc-500 mt-1">Avg. conversion lift</p>
</div>
<div className="reveal delay-100">
<h3 className="text-3xl font-semibold text-white">10k+</h3>
<p className="text-xs text-zinc-500 mt-1">A/B tests generated</p>
</div>
<div className="reveal delay-200 col-span-2 md:col-span-1">
<h3 className="text-3xl font-semibold text-white">1,200</h3>
<p className="text-xs text-zinc-500 mt-1">SaaS pages launched</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Building landing pages is  <span className="text-zinc-500">slowing founders down</span></h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-panel rounded-3xl p-8 border border-red-500/10 bg-gradient-to-b from-red-500/5 to-transparent reveal">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-red-500/10 text-red-400"><svg className="lucide lucide-x-circle w-5 h-5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div>
<h3 className="text-xl font-medium text-red-200">The Old Way</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400">
<svg className="lucide lucide-clock w-5 h-5 text-zinc-600 mt-0.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div><span className="text-zinc-300 block mb-1">Design takes too long</span>Wasted weeks iterating in Figma.</div>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<svg className="lucide lucide-dollar-sign w-5 h-5 text-zinc-600 mt-0.5" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<div><span className="text-zinc-300 block mb-1">Agencies cost too much</span>$5k+ for a static page with no data.</div>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<svg className="lucide lucide-pen-tool w-5 h-5 text-zinc-600 mt-0.5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<div><span className="text-zinc-300 block mb-1">Copywriting feels impossible</span>Staring at a blank cursor for hours.</div>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 text-zinc-600 mt-0.5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<div><span className="text-zinc-300 block mb-1">No data insights</span>Guesswork instead of conversion science.</div>
</li>
</ul>
</div>

<div className="glass-panel rounded-3xl p-8 border border-indigo-500/20 bg-gradient-to-b from-indigo-500/10 to-transparent reveal delay-100 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="p-2 rounded-lg bg-indigo-500 text-white"><svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></div>
<h3 className="text-xl font-medium text-white">The AstraLaunch Way</h3>
</div>
<p className="text-lg text-indigo-100 mb-8 leading-relaxed relative z-10">
                    AstraLaunch removes every bottleneck with AI-generation, instant copywriting, built-in analytics, and one-click publishing — all in one place.
                </p>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4 flex items-center gap-3">
<svg className="lucide lucide-zap text-indigo-400 w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium">Instant AI Copy</span>
</div>
<div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4 flex items-center gap-3">
<svg className="lucide lucide-layout text-indigo-400 w-5 h-5" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span className="text-sm font-medium">Auto-Layouts</span>
</div>
<div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4 flex items-center gap-3">
<svg className="lucide lucide-upload-cloud text-indigo-400 w-5 h-5" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
<span className="text-sm font-medium">1-Click Publish</span>
</div>
<div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4 flex items-center gap-3">
<svg className="lucide lucide-pie-chart text-indigo-400 w-5 h-5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="text-sm font-medium">Built-in Analytics</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Go from idea → fully launched <br/> in under 10 minutes</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

<div className="relative flex flex-col items-center text-center reveal delay-100 group">
<div className="w-24 h-24 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-6 relative z-10 shadow-xl group-hover:border-indigo-500/50 transition duration-500">
<div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<svg className="lucide lucide-message-square w-8 h-8 text-zinc-400 group-hover:text-indigo-400 transition" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-sm font-bold">1</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Describe your product</h3>
<p className="text-sm text-zinc-400">AI maps your value prop and target audience from a simple prompt.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-200 group">
<div className="w-24 h-24 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-6 relative z-10 shadow-xl group-hover:border-purple-500/50 transition duration-500">
<div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<svg className="lucide lucide-wand-2 w-8 h-8 text-zinc-400 group-hover:text-purple-400 transition" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-sm font-bold">2</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Generate page</h3>
<p className="text-sm text-zinc-400">AI creates layout, design, copy, and visuals instantly tailored to you.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-300 group">
<div className="w-24 h-24 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-6 relative z-10 shadow-xl group-hover:border-emerald-500/50 transition duration-500">
<div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<svg className="lucide lucide-rocket w-8 h-8 text-zinc-400 group-hover:text-emerald-400 transition" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-sm font-bold">3</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Launch with one click</h3>
<p className="text-sm text-zinc-400">Publish to your domain or export to Webflow/Framer instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">See AstraLaunch generate  a landing page in real time</h2>
</div>
<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl reveal aspect-video bg-zinc-900 group cursor-pointer">

<div className="absolute inset-0 bg-zinc-900 flex flex-col">
<div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/20"></div><div className="w-3 h-3 rounded-full bg-yellow-500/20"></div><div className="w-3 h-3 rounded-full bg-green-500/20"></div></div>
<div className="ml-4 h-6 w-64 bg-zinc-800/50 rounded-md"></div>
</div>
<div className="flex-1 flex">
<div className="w-64 border-r border-white/5 bg-zinc-900/50 p-4 space-y-3">
<div className="h-4 w-20 bg-zinc-800 rounded"></div>
<div className="h-3 w-full bg-zinc-800/50 rounded"></div>
<div className="h-3 w-3/4 bg-zinc-800/50 rounded"></div>
</div>
<div className="flex-1 p-8 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover opacity-20 group-hover:scale-105 transition duration-[2s]"></div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition backdrop-blur-sm group-hover:backdrop-blur-none">
<button className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition transform group-hover:scale-110">
<svg className="lucide lucide-play w-8 h-8 text-black fill-black" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel reveal border-gradient hover:border-indigo-500/30 transition rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-layout-template text-indigo-400 w-6 h-6" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-xl font-semibold mb-2">AI Layout Engine</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Instant layouts trained on top-converting SaaS pages. Never start from scratch again.</p>
<div className="mt-8 h-32 bg-indigo-900/10 rounded-xl border border-indigo-500/10 relative overflow-hidden">
<div className="absolute top-4 left-4 right-4 h-2 bg-indigo-500/20 rounded-full w-1/2"></div>
<div className="absolute top-8 left-4 right-4 h-20 bg-zinc-900/50 rounded border border-white/5"></div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl reveal delay-100 border-gradient hover:border-purple-500/30 transition">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-pen-line text-purple-400 w-6 h-6" data-lucide="pen-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Smart Copywriter</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Writes headlines, benefit sections, CTAs, and tonal variations tailored to your niche.</p>
<div className="mt-8 space-y-2">
<div className="flex items-center gap-2">
<span className="text-xs text-purple-400 font-mono">AI:</span>
<div className="h-2 w-full bg-purple-500/10 rounded animate-pulse"></div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-purple-400 font-mono">AI:</span>
<div className="h-2 w-3/4 bg-purple-500/10 rounded animate-pulse delay-100"></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl reveal delay-200 border-gradient hover:border-emerald-500/30 transition">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-activity text-emerald-400 w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Conversion Analytics</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Heatmaps, scroll-depth, and user behavior insights built right into the dashboard.</p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal delay-300 border-gradient hover:border-pink-500/30 transition">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-split text-pink-400 w-6 h-6" data-lucide="split" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">A/B Variants</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Deploy multiple versions instantly. Let AI route traffic to the winning page automatically.</p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-8">Built for SaaS teams that care about results</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center gap-3 reveal">
<svg className="lucide lucide-book-open text-zinc-500 w-6 h-6" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="text-sm text-zinc-400">Backed by research</span>
</div>
<div className="flex flex-col items-center gap-3 reveal delay-100">
<svg className="lucide lucide-database text-zinc-500 w-6 h-6" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="text-sm text-zinc-400">Trained on 10k+ pages</span>
</div>
<div className="flex flex-col items-center gap-3 reveal delay-200">
<svg className="lucide lucide-users text-zinc-500 w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-zinc-400">Designed by UX experts</span>
</div>
<div className="flex flex-col items-center gap-3 reveal delay-300">
<svg className="lucide lucide-server text-zinc-500 w-6 h-6" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-sm text-zinc-400">Infra-grade performance</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight">AI that adapts to any SaaS business</h2>
</div>
<div className="flex overflow-x-auto no-scrollbar snap-x pb-8 gap-x-6 gap-y-6">

<div className="min-w-[280px] glass-panel p-6 rounded-2xl snap-center hover:-translate-y-2 transition duration-300">
<div className="h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center">
<svg className="lucide lucide-app-window text-blue-300 w-10 h-10" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<h3 className="font-medium text-white">SaaS App</h3>
<p className="text-sm text-zinc-500 mt-2">Showcase features and drive free trials.</p>
</div>
<div className="min-w-[280px] glass-panel p-6 rounded-2xl snap-center hover:-translate-y-2 transition duration-300">
<div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
<svg className="lucide lucide-terminal text-purple-300 w-10 h-10" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<h3 className="font-medium text-white">Dev Tool</h3>
<p className="text-sm text-zinc-500 mt-2">Highlight code snippets and documentation.</p>
</div>
<div className="min-w-[280px] glass-panel p-6 rounded-2xl snap-center hover:-translate-y-2 transition duration-300">
<div className="h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-4 flex items-center justify-center">
<svg className="lucide lucide-globe text-orange-300 w-10 h-10" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="font-medium text-white">Marketplace</h3>
<p className="text-sm text-zinc-500 mt-2">Connect buyers and sellers with trust.</p>
</div>
<div className="min-w-[280px] glass-panel p-6 rounded-2xl snap-center hover:-translate-y-2 transition duration-300">
<div className="h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl mb-4 flex items-center justify-center">
<svg className="lucide lucide-cpu text-emerald-300 w-10 h-10" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="font-medium text-white">AI Startup</h3>
<p className="text-sm text-zinc-500 mt-2">Explain complex models simply.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl font-semibold tracking-tight">From blank page → <span className="text-emerald-400">high-converting funnel</span></h2>
</div>
<div className="grid md:grid-cols-2 gap-8 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-full items-center justify-center border border-zinc-700 z-10">
<svg className="lucide lucide-arrow-right text-white w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="glass-panel p-8 rounded-3xl border-red-500/10 reveal">
<h3 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-6 border-b border-red-500/20 pb-4">Before AstraLaunch</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-400 opacity-60">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Hours of writing copy
                        </li>
<li className="flex items-center gap-3 text-zinc-400 opacity-60">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Designer needed ($$$)
                        </li>
<li className="flex items-center gap-3 text-zinc-400 opacity-60">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> No analytics setup
                        </li>
<li className="flex items-center gap-3 text-zinc-400 opacity-60">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Total guesswork
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-3xl border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent reveal delay-100">
<h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-6 border-b border-emerald-500/20 pb-4">After AstraLaunch</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Full page in minutes
                        </li>
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> AI design + copy included
                        </li>
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Live behavior insights
                        </li>
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Proven conversion frameworks
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Simple pricing, <br/> powerful growth</h2>
<div className="flex items-center justify-center gap-6 text-sm text-zinc-400 mt-6">
<span className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 14-day free trial</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cancel anytime</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No credit card required</span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-3xl reveal hover:bg-zinc-900/50 transition">
<h3 className="text-xl font-medium text-white">Launch</h3>
<p className="text-sm text-zinc-500 mt-2 h-10">For early-stage founders</p>
<div className="my-6">
<span className="text-4xl font-semibold text-white">$29</span><span className="text-zinc-500">/mo</span>
</div>
<button className="w-full py-3 rounded-xl bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition mb-8 text-sm">Start Trial</button>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Project</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> AI Copywriting</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic Analytics</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-3xl reveal delay-100 border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-transparent relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 rounded-full text-xs font-medium text-white">Most Popular</div>
<h3 className="text-xl font-medium text-white">Growth</h3>
<p className="text-sm text-indigo-200 mt-2 h-10">For scaling teams</p>
<div className="my-6">
<span className="text-4xl font-semibold text-white">$99</span><span className="text-zinc-500">/mo</span>
</div>
<button className="button w-full mb-8">
<span className="inner w-full justify-center">Get Started</span>
</button>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Projects</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced AI Models</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Heatmaps &amp; A/B Testing</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom Domains</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-3xl reveal delay-200 hover:bg-zinc-900/50 transition">
<h3 className="text-xl font-medium text-white">Scale</h3>
<p className="text-sm text-zinc-500 mt-2 h-10">Established SaaS needing infrastructure</p>
<div className="my-6">
<span className="text-4xl font-semibold text-white">Custom</span>
</div>
<button className="w-full py-3 rounded-xl bg-transparent border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition mb-8 text-sm">Contact Sales</button>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SSO / SAML</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Support</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom Integrations</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="glass-panel rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-white">
                    How fast can I generate a landing page?
                    <svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                    Most users generate a fully designed, copy-written page in under 60 seconds. Customizing usually takes another 5-10 minutes.
                </div>
</details>

<details className="glass-panel rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-white">
                    Can I export to Webflow or Framer?
                    <svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                    Yes! We have direct 1-click exports to both platforms, or you can host directly with AstraLaunch for built-in analytics.
                </div>
</details>

<details className="glass-panel rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-white">
                    Is the AI trained on SaaS-specific data?
                    <svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                    Absolutely. Our models are fine-tuned on 10,000+ high-converting SaaS landing pages to ensure industry-best copy and layouts.
                </div>
</details>

<details className="glass-panel rounded-2xl group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-white">
                    How does the free trial work?
                    <svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                    You get full access to the Growth plan features for 14 days. No credit card is required to sign up.
                </div>
</details>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-4xl mx-auto glass-panel p-12 rounded-[3rem] border-gradient relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 relative z-10">
                Ready to launch your  highest converting page yet?
            </h2>
<div className="flex flex-col items-center gap-4 relative z-10">
<button className="button scale-110">
<div className="points_wrapper"><i className="point"></i><i className="point"></i><i className="point"></i></div>
<span className="inner text-lg px-4">Start Free <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
<p className="text-zinc-500 text-sm mt-4">No credit card required.</p>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-rocket text-white w-3 h-3" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="font-semibold text-white">AstraLaunch</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                    AstraLaunch helps SaaS teams ship pages faster with AI-powered design, analytics, and instant publishing.
                </p>
<div className="flex gap-4 mt-6">
<a className="text-zinc-500 hover:text-white" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-500 hover:text-white" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-zinc-500 hover:text-white" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white" href="#">Templates</a></li>
<li><a className="hover:text-white" href="#">Features</a></li>
<li><a className="hover:text-white" href="#">Integrations</a></li>
<li><a className="hover:text-white" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white" href="#">Docs</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Changelog</a></li>
<li><a className="hover:text-white" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
<li><a className="hover:text-white" href="#">Privacy</a></li>
<li><a className="hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
            © 2024 AstraLaunch Inc. All rights reserved.
        </div>
</footer>


    </>
  );
}
