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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-50/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-cyan-600 text-white p-1 rounded-lg flex items-center justify-center">
<iconify-icon height="20" icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">DEXCI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-cyan-600 transition-colors" href="#">Services</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Case Studies</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Process</a>
<a className="hover:text-cyan-600 transition-colors" href="#">FAQ</a>
</div>
<button className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-cyan-200/50">
                Start Project
            </button>
</div>
</nav>

<header className="relative pt-20 pb-16 px-6 overflow-hidden">

<svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 pointer-events-none opacity-20" fill="none" stroke="#0891b2" strokeWidth="8" viewbox="0 0 1000 1000">
<path d="M100,100 Q400,50 600,300 T900,600" stroke-dasharray="20 20" strokeLinecap="round"></path>
</svg>
<div className="max-w-4xl mx-auto text-center space-y-8">
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                Build 
                <span className="relative inline-block px-2">
                    scalable
                    <svg className="absolute inset-0 w-full h-full -z-10 text-cyan-200" fill="currentColor" preserveaspectratio="none" viewbox="0 0 200 60">
<path d="M10,30 Q100,5 190,30 Q100,55 10,30 Z"></path>
</svg>
</span> 
                digital <br/> products with your own world-class dev team.
            </h1>
<p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Access the engineering talent and design systems powering the fastest growing startups. Ship faster, scale better.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-cyan-600/20 flex items-center gap-2">
                    Start Your Project
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-full text-base font-medium flex items-center gap-2 transition-colors">
<iconify-icon className="text-cyan-600" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    View Showreel
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative group">
<div className="absolute -left-12 top-12 hidden lg:block text-slate-800 -rotate-6 animate-float">
<div className="bg-white p-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3">
<div className="bg-green-100 text-green-600 p-1 rounded">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Revenue</div>
<div className="text-sm font-bold">+124%</div>
</div>
</div>
</div>
<div className="relative bg-slate-900 rounded-2xl aspect-[16/9] md:aspect-[21/9] shadow-2xl overflow-hidden border border-slate-200/50 group">
<img alt="Agency Work" className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 border-t border-white/10 backdrop-blur-sm flex justify-between items-end">
<div>
<div className="text-cyan-400 font-mono text-sm mb-2">LATEST CASE STUDY</div>
<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">FinTech Dashboard Redesign</h3>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-colors border border-white/20">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative bg-white">
<div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                Scaling digital products <br/>
<span className="text-slate-400">is tougher than you think.</span>
</h2>
</div>

<div className="max-w-2xl mx-auto h-80 relative flex items-center justify-center">

<div className="relative z-10">
<iconify-icon className="text-slate-800" height="96" icon="solar:face-scan-square-linear" strokeWidth="1" width="96"></iconify-icon>
<div className="absolute -top-10 left-1/2 -translate-x-1/2">
<iconify-icon className="text-red-500 animate-bounce" height="40" icon="solar:danger-triangle-linear" width="40"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '25s'}}>
<div className="absolute top-10 left-20 transform -rotate-12 bg-slate-50 p-3 shadow-md rounded-lg border border-slate-200">
<span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Technical Debt</span>
</div>
<div className="absolute bottom-20 right-10 transform rotate-12 bg-slate-50 p-3 shadow-md rounded-lg border border-slate-200">
<span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Churn Rate</span>
</div>
<div className="absolute top-1/2 right-0 transform rotate-45">
<iconify-icon className="text-slate-400" height="40" icon="solar:bug-linear" width="40"></iconify-icon>
</div>
<div className="absolute bottom-0 left-32">
<iconify-icon className="text-slate-400" height="40" icon="solar:server-square-linear" width="40"></iconify-icon>
</div>
<div className="absolute top-0 right-32">
<iconify-icon className="text-slate-400" height="40" icon="solar:code-file-linear" width="40"></iconify-icon>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto text-center mt-12 space-y-6">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">
                We handle the heavy lifting. Focus on your vision.
            </h3>
<p className="text-lg text-slate-600 leading-relaxed">
                Partner with expert product managers, designers, and full-stack developers to build software that users love. No more managing freelancers or burning cash on hiring processes.
            </p>
<p className="text-lg font-semibold text-slate-900">Stop worrying about</p>
<div className="flex flex-wrap justify-center gap-4 mt-8 opacity-70">
<span className="px-4 py-2 border border-slate-300 rounded-full text-sm -rotate-2">DevOps</span>
<span className="px-4 py-2 border border-slate-300 rounded-full text-sm rotate-3">QA Testing</span>
<span className="px-4 py-2 border border-slate-800 text-slate-900 font-medium rounded-full text-sm -rotate-1 bg-white">UI Design</span>
<span className="px-4 py-2 border border-slate-300 rounded-full text-sm rotate-6">Legacy Code</span>
</div>
</div>
</section>

<section className="bg-cyan-50/50 py-32 px-6 rounded-[3rem] mx-4 md:mx-8 mb-24 overflow-hidden border border-cyan-100">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-24">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                    The elite product team you've been dreaming about. <br/>
<span className="opacity-40">Without the headcount.</span>
</h2>
<div className="mt-8">
<span className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors cursor-pointer">
                        Book a Discovery Call
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 mb-24">
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Product Strategy</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Building the wrong thing is expensive. We start with deep market research and user analysis to ensure product-market fit before writing a single line of code.
                    </p>
</div>
<div className="w-full md:w-1/2 relative">
<div className="bg-white border-2 border-slate-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_#0f172a] rotate-1">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square bg-cyan-100 rounded-lg flex items-center justify-center border border-slate-200 text-cyan-600">
<iconify-icon height="48" icon="solar:chart-2-linear" width="48"></iconify-icon>
</div>
<div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400">
<iconify-icon height="48" icon="solar:target-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">UX/UI Design</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        We create pixel-perfect, accessible, and intuitive interfaces. Our design systems ensure consistency and speed up future development cycles significantly.
                    </p>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative">
<iconify-icon className="text-slate-900 absolute -top-8 -right-8 rotate-12 z-10" height="80" icon="solar:pen-new-square-linear" width="80"></iconify-icon>
<div className="bg-white w-64 h-80 border-2 border-slate-900 rounded-lg p-6 flex flex-col gap-4 shadow-[8px_8px_0px_0px_#0f172a] -rotate-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="h-32 bg-slate-100 rounded border border-slate-200 border-dashed flex items-center justify-center">
<span className="text-xs text-slate-400">Wireframe</span>
</div>
<div className="h-4 w-full bg-slate-100 rounded"></div>
<div className="h-4 w-2/3 bg-cyan-100 rounded"></div>
<div className="mt-auto flex justify-end">
<iconify-icon className="text-cyan-500" height="32" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 mb-24">
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Full-Stack Development</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        From React to Python, AWS to Vercel. We deploy robust, scalable architecture. Our code is clean, documented, and built to handle scale from day one.
                    </p>
</div>
<div className="w-full md:w-1/2">
<div className="bg-white border-2 border-slate-900 rounded-xl p-6 shadow-[8px_8px_0px_0px_#0f172a] rotate-2">
<div className="aspect-video bg-slate-900 rounded border border-slate-800 p-4 font-mono text-xs text-green-400 overflow-hidden relative">
<div className="absolute top-2 right-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
<p>&gt; npm install dexci-package</p>
<p className="text-slate-500">Installing dependencies...</p>
<p>&gt; 50 packages added.</p>
<p className="mt-2 text-white">function deploy() {</p>
<p className="pl-4 text-cyan-400">return "success";</p>
<p className="text-white">}</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16">
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Growth &amp; Optimization</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Launch is just the beginning. We set up analytics, run A/B tests, and iterate on your product to maximize retention and conversion rates.
                    </p>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative bg-slate-900 w-72 aspect-video rounded-xl shadow-2xl flex items-center justify-center -rotate-3 border-4 border-white">
<iconify-icon className="text-cyan-400" height="64" icon="solar:graph-new-linear" width="64"></iconify-icon>
<div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-3 py-1 text-xs font-bold rounded shadow-lg">Conv +40%</div>
<iconify-icon className="absolute top-4 left-4 text-slate-600" height="24" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 text-center">
<div className="flex justify-center items-center -space-x-4 mb-6">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-800">+50</div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight max-w-2xl mx-auto">
            We've helped over 50 startups <br/> raise Series A funding.
        </h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-400 tracking-tight mt-2">
            Now we build for you.
        </h3>
</section>

<section className="py-16 overflow-hidden">
<div className="px-6 mb-8 flex justify-between items-end max-w-7xl mx-auto">
<div>
<h3 className="text-xl font-semibold text-slate-900">Our Frameworks</h3>
<p className="text-lg text-slate-500">Methodologies for success:</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<button className="p-2 rounded-full bg-cyan-100 hover:bg-cyan-200 text-cyan-600"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto px-6 pb-12 no-scrollbar max-w-7xl mx-auto">

<div className="min-w-[350px] bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-slate-900" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-bold text-slate-900 mb-2">Market Fit Discovery</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                    Our Discovery Framework validates your assumptions against real user data, ensuring we build features that solve actual problems.
                </p>
</div>

<div className="min-w-[350px] bg-[#E0F7FA] p-8 rounded-2xl border border-transparent shadow-xl shadow-cyan-900/10">
<div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center mb-6">
<iconify-icon className="text-cyan-900" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-bold text-slate-900 mb-2">Atomic Design System</h4>
<p className="text-sm text-slate-800 leading-relaxed">
                    We implement a component-based Atomic Design methodology that ensures UI consistency and drastically speeds up development.
                </p>
</div>

<div className="min-w-[350px] bg-indigo-50 p-8 rounded-2xl border border-indigo-100 shadow-xl shadow-slate-200/50">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-bold text-slate-900 mb-2">Agile Deployment</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                    Continuous integration and deployment pipelines mean you see progress daily. We ship updates seamlessly and frequently.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-slate-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/2 mb-12 md:mb-0">
<h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-none mb-6">
                    From MVP <br/>
                    to Global <br/>
                    Enterprise <br/>
                    Scale
                </h2>
<p className="text-xl text-slate-600 font-medium max-w-md">
                    We build infrastructure that grows with you, handling millions of requests without breaking a sweat.
                </p>
</div>
<div className="w-full md:w-1/2 flex justify-center relative">

<svg className="absolute top-0 left-0 w-full h-full -z-10" viewbox="0 0 400 400">
<path d="M50,50 Q150,150 200,300" fill="none" stroke="#06b6d4" stroke-dasharray="8 8" strokeWidth="3"></path>
</svg>

<div className="bg-white border-4 border-slate-200 rounded-[2.5rem] p-4 shadow-2xl max-w-xs w-full">
<div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 h-[500px] relative flex flex-col">

<div className="p-6 pt-12 space-y-4">
<div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-cyan-600" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div className="h-4 bg-slate-200 rounded w-3/4 mx-auto"></div>
<div className="h-4 bg-slate-100 rounded w-1/2 mx-auto"></div>
<div className="mt-8 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="h-3 bg-slate-200 rounded w-20"></div>
</div>
<div className="mt-3 h-20 bg-cyan-50/50 rounded-lg border border-cyan-100"></div>
</div>
</div>

<div className="mt-auto bg-white border-t border-slate-100 p-4 flex justify-around">
<iconify-icon className="text-slate-400" icon="solar:home-angle-linear" width="24"></iconify-icon>
<iconify-icon className="text-cyan-600" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-32 px-6 rounded-t-[3rem] mt-12">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                    Your dedicated product team <br/> starting at $4,999/mo
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

<div className="bg-white text-slate-900 rounded-2xl p-8 flex flex-col">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-2xl font-bold">MVP Package</h3>
<span className="text-xl font-bold text-slate-500">$4,999/mo</span>
</div>
<p className="text-lg font-semibold mb-6">Perfect for early stage startups</p>
<p className="text-sm text-slate-500 mb-8">Access to a senior developer and designer for 20 hours per week. Iterate fast on core features.</p>
<ul className="space-y-3 mb-8 text-sm font-medium text-slate-700">
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Frontend Development</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> UI/UX Design Support</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Slack Access</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> No Contracts</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Weekly Sprints</li>
</ul>
<div className="mt-auto">
<button className="w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-700 py-3 rounded-lg font-medium text-sm transition-colors border border-cyan-200">Get Started</button>
</div>
</div>

<div className="bg-white text-slate-900 rounded-2xl p-8 flex flex-col border-4 border-cyan-500/20 relative">
<div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">POPULAR</div>
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-2xl font-bold">Growth Package</h3>
<span className="text-xl font-bold text-slate-500">$9,999/mo</span>
</div>
<p className="text-lg font-semibold mb-6">Full product development</p>
<p className="text-sm text-slate-500 mb-8">Full-stack capabilities. We handle backend, frontend, and design to ship major features monthly.</p>
<ul className="space-y-3 mb-8 text-sm font-medium text-slate-700 grid grid-cols-2 gap-x-4">
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:add-circle-linear"></iconify-icon> Full-Stack Dev</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:add-circle-linear"></iconify-icon> Database Design</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:add-circle-linear"></iconify-icon> API Integration</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:add-circle-linear"></iconify-icon> QA Testing</li>
<li className="flex gap-2 col-span-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:add-circle-linear"></iconify-icon> Project Manager Included</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Source Code Ownership</li>
</ul>
<div className="mt-auto">
<button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-medium text-sm transition-colors shadow-lg shadow-cyan-600/20">Get Started</button>
</div>
</div>
</div>

<div className="bg-slate-800 text-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center border border-slate-700">
<div className="flex-1">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-2xl font-bold">Enterprise</h3>
<span className="text-xl font-bold text-slate-400">Custom Pricing</span>
</div>
<p className="text-lg font-semibold mb-4">A complete CTO Office</p>
<p className="text-sm text-slate-400 mb-6 max-w-lg">For established companies. We act as your engineering department, managing infrastructure, security, and long-term roadmap.</p>
<div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-300 mb-8">
<span className="flex gap-2 items-center"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> DevOps &amp; CI/CD</span>
<span className="flex gap-2 items-center"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> 24/7 SLA Support</span>
<span className="flex gap-2 items-center"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Security Audits</span>
<span className="flex gap-2 items-center"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated Pod</span>
</div>
<button className="bg-white hover:bg-slate-100 text-slate-900 py-3 px-8 rounded-lg font-medium text-sm transition-colors">Contact Sales</button>
</div>
<div className="flex-1 flex justify-center">

<div className="relative w-full max-w-sm aspect-video bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-sm flex items-center justify-center">
<div className="text-slate-500 flex flex-col items-center gap-2">
<iconify-icon height="64" icon="solar:server-square-linear" width="64"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Enterprise Infrastructure</span>
</div>
</div>
</div>
</div>

<div className="mt-32 max-w-2xl mx-auto space-y-16 relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-slate-700 -z-10"></div>

<div className="flex gap-8 relative">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center text-lg font-mono text-cyan-400">1</div>
<div className="pt-2">
<h4 className="text-xl font-semibold mb-2">Discovery &amp; Roadmap.</h4>
<p className="text-slate-400 text-lg leading-relaxed">
                            We analyze your business goals and technical requirements. We define the tech stack and create a detailed product roadmap.
                        </p>
</div>
</div>

<div className="flex gap-8 relative">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center text-lg font-mono text-cyan-400">2</div>
<div className="pt-2">
<h4 className="text-xl font-semibold mb-2">Design &amp; Prototyping.</h4>
<p className="text-slate-400 text-lg leading-relaxed">
                            Our designers create high-fidelity mockups and interactive prototypes. We iterate until the user experience is frictionless.
                        </p>
</div>
</div>

<div className="flex gap-8 relative">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center text-lg font-mono text-cyan-400">3</div>
<div className="pt-2">
<h4 className="text-xl font-semibold mb-2">Agile Development.</h4>
<p className="text-slate-400 text-lg leading-relaxed">
                            Our devs start shipping code in weekly sprints. You get access to a staging environment to view progress in real-time.
                        </p>
</div>
</div>

<div className="flex gap-8 relative">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center text-lg font-mono text-cyan-400">4</div>
<div className="pt-2">
<h4 className="text-xl font-semibold mb-2">Launch &amp; Scale.</h4>
<p className="text-slate-400 text-lg leading-relaxed">
                            We handle the deployment to production servers, set up monitoring tools, and ensure your product can handle the traffic.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/2">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">Have questions?</h2>
<div className="space-y-4">
<details className="group bg-transparent">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-b border-slate-200">
<span>Do I own the code?</span>
<span className="transition group-open:rotate-45">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 mb-4 group-open:animate-fadeIn">
                            Yes, absolutely. Once paid for, all intellectual property and code belong 100% to you. We are work-for-hire.
                        </div>
</details>
<details className="group bg-transparent">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-b border-slate-200">
<span>What tech stacks do you use?</span>
<span className="transition group-open:rotate-45">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 mb-4 group-open:animate-fadeIn">
                             We specialize in modern stacks: React, Next.js, Node.js, Python, PostgreSQL, and AWS/Google Cloud.
                        </div>
</details>
<details className="group bg-transparent">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-b border-slate-200">
<span>How fast can we start?</span>
<span className="transition group-open:rotate-45">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 mb-4 group-open:animate-fadeIn">
                             Typically we can onboard a new client and kick off the discovery phase within 48 hours of contract signing.
                        </div>
</details>
<details className="group bg-transparent">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 border-b border-slate-200">
<span>Do you provide maintenance?</span>
<span className="transition group-open:rotate-45">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 mb-4 group-open:animate-fadeIn">
                             Yes, we have ongoing maintenance packages to ensure security updates and uptime monitoring after launch.
                        </div>
</details>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-center items-center">
<div className="bg-cyan-100/50 p-8 rounded-2xl text-center w-full max-w-sm border border-cyan-100">
<img alt="Support" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<h3 className="text-xl font-bold text-slate-900 mb-2">Ready to transform your business?</h3>
<p className="text-slate-600 text-sm mb-6">Let's discuss your product vision.</p>
<button className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg">
                        Book Intro Call
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-slate-500">
                © 2024 DEXCI. Terms of Service.
            </div>
<div className="flex items-center gap-2">
<div className="bg-cyan-600 text-white p-1 rounded-md scale-75 flex items-center justify-center">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900">DEXCI</span>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="ri:linkedin-line" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="ri:github-line" width="20"></iconify-icon></a>
</div>
</div>
<div className="text-center mt-8 text-[10px] text-slate-400 uppercase tracking-widest">
            San Francisco • London • Tokyo
        </div>
</footer>

    </>
  );
}
