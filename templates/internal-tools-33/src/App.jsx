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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#2079FF',
hover: '#4aa0ff',
dark: '#0055cc'
},
background: '#080A0F',
surface: '#11141C',
},
backgroundImage: {
'hero-glow': 'radial-gradient(ellipse at 50% -20%, rgba(32, 121, 255, 0.4), rgba(8, 10, 15, 0))',
'card-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">LaunchPad</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="transition-colors hover:text-white" href="#process">Process</a>
<a className="transition-colors hover:text-white" href="#case-studies">Case Studies</a>
<a className="transition-colors hover:text-white" href="#faq">FAQ</a>
</div>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-all border bg-white/10 hover:bg-white/20 text-white border-white/10">
                Book Discovery
            </button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid">
<div className="absolute inset-0 bg-hero-glow pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                Building internal tools 5x faster
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.1] text-white">
                From Idea to Internal Tool <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-blue-400 to-white">Without the Tech Headache</span>
</h1>
<p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-400">
                Trusted by non-technical companies to build tools that save hundreds of hours and millions in value. Launch in weeks, not months.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto bg-brand hover:bg-brand-hover px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-[0_0_20px_-5px_rgba(32,121,255,0.5)] flex items-center justify-center gap-2 text-white">
                    Book a Discovery Call
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-medium transition-all border flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border-white/10">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    How it works
                </button>
</div>

<div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border shadow-2xl bg-surface aspect-video group cursor-pointer border-white/10">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 flex items-center justify-center group-hover:bg-black/60 transition-all from-black/80">
<div className="w-20 h-20 rounded-full backdrop-blur-sm flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 bg-white/10 border-white/20">
<div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-lg text-white">
<svg className="lucide lucide-play fill-current w-[32px] h-[32px] ml-1" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-40 scale-95">
<div className="col-span-1 rounded-lg h-full bg-white/10"></div>
<div className="col-span-2 flex flex-col gap-4">
<div className="rounded-lg h-32 w-full bg-white/10"></div>
<div className="rounded-lg h-full w-full bg-white/10"></div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 z-20 text-left">
<p className="font-semibold text-lg text-white">See how we helped LogisticsCo save 40h/week</p>
<p className="text-sm text-gray-400">2 min video</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Businesses have a software problem</h2>
<p className="text-lg text-gray-400">
                    You're growing, but your processes are stuck in the past. The manual work that used to take minutes now eats up entire days.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl bg-white/[0.02] border hover:border-brand/50 transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors text-red-400">
<svg className="lucide lucide-file-spreadsheet w-6 h-6" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Spreadsheet Hell</h3>
<p className="text-base leading-relaxed text-gray-400">Critical data buried in disconnected sheets that break constantly.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border hover:border-brand/50 transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors text-orange-400">
<svg className="lucide lucide-wallet w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">SaaS Fatigue</h3>
<p className="text-base leading-relaxed text-gray-400">Overpaying for enterprise software where you only use 10% of the features.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border hover:border-brand/50 transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors text-purple-400">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Failed Dev Projects</h3>
<p className="text-base leading-relaxed text-gray-400">Hiring freelancers who ghost you or deliver buggy code that never launches.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border hover:border-brand/50 transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors text-yellow-400">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Manual Grind</h3>
<p className="text-base leading-relaxed text-gray-400">Smart teams stuck doing copy-paste work instead of strategic tasks.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-lg font-medium mb-4 text-white">You don’t need to stay stuck.</p>
<a className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-medium transition-colors" href="#">
                    Let's fix your workflow <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Your Simple 4-Step Process</h2>
<p className="text-lg text-gray-400">From chaotic idea to polished product in weeks.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border border-brand text-brand flex items-center justify-center text-xl font-semibold mb-6 shadow-[0_0_15px_-3px_rgba(32,121,255,0.3)]">1</div>
<h3 className="text-xl font-medium mb-2 text-white">Idea &amp; Concept</h3>
<p className="text-base text-gray-400">We map your messy workflows into a clear logic flow.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border flex items-center justify-center text-xl font-semibold mb-6 border-white/20 text-white">2</div>
<h3 className="text-xl font-medium mb-2 text-white">Prototype</h3>
<p className="text-base text-gray-400">Visual feedback loops to ensure we build exactly what you need.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border flex items-center justify-center text-xl font-semibold mb-6 border-white/20 text-white">3</div>
<h3 className="text-xl font-medium mb-2 text-white">Development</h3>
<p className="text-base text-gray-400">Combining AI &amp; No-Code for rapid, bug-free execution.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border flex items-center justify-center text-xl font-semibold mb-6 border-white/20 text-white">4</div>
<h3 className="text-xl font-medium mb-2 text-white">Iterate</h3>
<p className="text-base text-gray-400">We don't just ship and leave. We refine based on real usage.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                    This is what your business looks like after we build your tool.
                </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-medium text-lg text-white">Unified Dashboards</h4>
<p className="mt-1 text-gray-400">No more tab switching. See all your metrics in one clean view.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-medium text-lg text-white">Real-time Collaboration</h4>
<p className="mt-1 text-gray-400">Teams work on the same data instantly. No version control nightmares.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-medium text-lg text-white">Automated Reporting</h4>
<p className="mt-1 text-gray-400">Decisions made faster with data that updates itself.</p>
</div>
</li>
</ul>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative rounded-xl bg-[#0B0F19] border shadow-2xl p-4 border-white/10">

<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="flex gap-4">

<div className="w-16 flex flex-col gap-3 items-center pt-2 border-r pr-4 border-white/5">
<div className="w-8 h-8 rounded-md bg-brand/20 mb-4"></div>
<div className="w-8 h-8 rounded-md bg-white/5"></div>
<div className="w-8 h-8 rounded-md bg-white/5"></div>
<div className="w-8 h-8 rounded-md bg-white/5"></div>
</div>

<div className="flex-1">
<div className="flex justify-between mb-6">
<div className="h-8 w-32 rounded bg-white/10"></div>
<div className="h-8 w-8 bg-brand rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="h-24 rounded border p-3 bg-white/5 border-white/5">
<div className="h-2 w-12 mb-2 rounded bg-white/20"></div>
<div className="h-6 w-16 bg-brand/20 rounded"></div>
</div>
<div className="h-24 rounded border p-3 bg-white/5 border-white/5">
<div className="h-2 w-12 mb-2 rounded bg-white/20"></div>
<div className="h-6 w-16 bg-green-500/20 rounded"></div>
</div>
<div className="h-24 rounded border p-3 bg-white/5 border-white/5">
<div className="h-2 w-12 mb-2 rounded bg-white/20"></div>
<div className="h-6 w-16 bg-purple-500/20 rounded"></div>
</div>
</div>
<div className="h-40 rounded border w-full bg-white/5 border-white/5"></div>
</div>
</div>

<div className="absolute -inset-0.5 bg-gradient-to-br from-brand/20 to-transparent opacity-50 blur-2xl -z-10 rounded-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Real Impact. Real Numbers.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="text-center p-6">
<p className="text-5xl font-semibold mb-2 tracking-tight text-white">1000+</p>
<p className="text-lg text-gray-400">Hours Saved Annually</p>
</div>
<div className="text-center p-6 border-x border-white/5">
<p className="text-5xl font-semibold mb-2 tracking-tight text-white">300%</p>
<p className="text-lg text-gray-400">ROI in First 6 Months</p>
</div>
<div className="text-center p-6">
<p className="text-5xl font-semibold mb-2 tracking-tight text-white">0</p>
<p className="text-lg text-gray-400">Technical Hires Needed</p>
</div>
</div>

<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale mb-20">

<svg className="fill-current text-white" height="30" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 h10 v20 h-10 Z M60,5 h20 v5 h-15 v2 h15 v5 h-20 Z"></path></svg>
<svg className="fill-current text-white" height="30" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" width="50" x="35" y="5"></rect></svg>
<svg className="fill-current text-white" height="30" viewbox="0 0 100 30"><rect height="20" width="20" x="5" y="5"></rect> <rect height="20" width="50" x="35" y="5"></rect></svg>
<svg className="fill-current text-white" height="30" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 Z M40,5 h40 v5 h-40 Z M40,20 h40 v5 h-40 Z"></path></svg>
</div>

<div className="bg-gradient-to-br to-transparent border rounded-2xl p-10 md:p-14 text-center relative overflow-hidden from-white/5 border-white/10">
<svg className="lucide lucide-quote w-12 h-12 text-brand/20 absolute top-8 left-8" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-2xl md:text-3xl font-medium leading-relaxed relative z-10 max-w-4xl mx-auto text-white">
                    "We were drowning in spreadsheets. The tool LaunchPad built didn't just save us time; it completely changed how we operate. We're scalable now."
                </p>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-600"></div>
<div className="text-left">
<p className="font-medium text-white">Sarah Jenkins</p>
<p className="text-brand text-sm">COO, FinTech Flow</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-brand font-medium tracking-widest uppercase text-xs mb-4 block">About Us</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">The Team Behind Your Tool</h2>
<p className="text-lg mb-10 leading-relaxed text-gray-400">
                We started this agency to help non-technical companies stop struggling with spreadsheets and finally get the tools they deserve. We aren't just coders; we are product builders who love whiteboards, strong coffee, and shipping fast.
            </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl flex items-center justify-center bg-white/5"><svg className="lucide lucide-smile w-8 h-8 text-gray-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-white/5"><svg className="lucide lucide-smile w-8 h-8 text-gray-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-white/5"><svg className="lucide lucide-smile w-8 h-8 text-gray-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
<div className="aspect-square rounded-xl flex items-center justify-center bg-white/5"><svg className="lucide lucide-smile w-8 h-8 text-gray-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center text-white">Questions on your mind?</h2>
<div className="space-y-4">

<details className="group bg-white/[0.02] border rounded-xl overflow-hidden open:border-brand/30 transition-all border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-white">
<span>We’re not technical — how will this work?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base leading-relaxed text-gray-400">
                        That's exactly why we're here. We speak plain English, not code. We handle 100% of the technical lifting, translating your business needs directly into software. You just tell us what you need the tool to do.
                    </div>
</details>

<details className="group bg-white/[0.02] border rounded-xl overflow-hidden open:border-brand/30 transition-all border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-white">
<span>What if it’s too expensive?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base leading-relaxed text-gray-400">
                        Most custom software fails because of scope creep. We use a fixed-price model for our MVP builds, often costing less than 3 months of a senior developer's salary. Plus, think about the cost of <i>not</i> building it—how much time is your team wasting right now?
                    </div>
</details>

<details className="group bg-white/[0.02] border rounded-xl overflow-hidden open:border-brand/30 transition-all border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-white">
<span>What if my team doesn’t adopt it?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base leading-relaxed text-gray-400">
                        Adoption is part of our process. We involve your key team members during the 'Prototype' phase so they feel ownership before we even write a line of code. The result is a tool they actually want to use.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden text-center py-20 px-6 border border-white/10">

<div className="absolute inset-0 bg-gradient-to-b from-brand/20 to-brand/5 -z-10"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                The easiest way to bring your tool to life — <span className="text-blue-200">without the stress.</span>
</h2>
<p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100/80">
                Book a free 30-min discovery call and we’ll map your idea into a solution blueprint.
            </p>
<button className="text-brand px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-xl inline-flex items-center gap-2 transform hover:-translate-y-1 bg-white hover:bg-blue-50">
                Book My Call
                <svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
</div>
</section>

<footer className="border-t bg-[#05070a] pt-16 pb-8 border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-white">
<svg className="lucide lucide-rocket w-3 h-3" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">LaunchPad</span>
</div>
<p className="text-gray-500 text-sm max-w-xs">
                        Helping non-technical companies build world-class internal tools without the enterprise price tag.
                    </p>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Process</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-sm text-gray-600">© 2023 LaunchPad Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors text-gray-600 hover:text-white" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors text-gray-600 hover:text-white" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="transition-colors text-gray-600 hover:text-white" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
