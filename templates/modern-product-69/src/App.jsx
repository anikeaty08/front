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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component top-0 w-full h-screen absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div></div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
<svg aria-hidden="true" className="" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="font-semibold tracking-tighter">SYSTEM</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Now</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Sign up</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">Open app</a>
</div>
</div>

<div className="absolute inset-0 bg-noise opacity-50 pointer-events-none mix-blend-overlay"></div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 rounded-[100%] blur-[100px] opacity-40 pointer-events-none"></div>
<div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 reveal-up" style={{animationDelay: '0.1s'}}>
                A purpose-built system for<br/>modern product development.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style={{animationDelay: '0.2s'}}>
                Streamlined planning, automated issue tracking, and intelligent roadmaps. Designed for teams who move fast.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up" style={{animationDelay: '0.3s'}}>
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
                    Start building
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-700 transition-colors">
                    Sign up
                </button>
</div>
</div>
</header>

<section className="border-y bg-zinc-900/20 border-white/5 pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Powering the world's best product teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tighter text-white">ACME</span>
<span className="text-xl font-bold tracking-tighter text-white italic">Vertex</span>
<span className="text-xl font-semibold tracking-widest text-white">LUMIERE</span>
<span className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><span className="block w-3 h-3 bg-white rounded-full"></span> ORBIT</span>
<span className="text-xl font-mono font-bold text-white">codex</span>
</div>
</div>
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
</section>

<section className="pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 pattern-dots opacity-20 mask-image-b"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-20">
<svg aria-hidden="true" data-icon="lucide:focus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path></g></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Purpose-built</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Engineered specifically for product development workflows, not generic project management.</p>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-20">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Designed for speed</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Keyboard-first navigation, instant page loads, and real-time sync keep you in flow.</p>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-white/10 transition-colors">
<div className="absolute inset-0 pattern-grid opacity-10"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-20">
<svg aria-hidden="true" data-icon="lucide:gem" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Crafted details</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Every interaction is refined. Subtle animations and clean layouts reduce cognitive load.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl bg-zinc-900/20 overflow-hidden">

<div className="relative min-h-[400px] bg-gradient-to-br from-zinc-800/30 to-black p-12 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-20 w-full h-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none"></div>

<div className="relative mb-6 group">
<div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="relative w-20 h-20 rounded-full bg-zinc-900 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500">

<div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin" style={{animationDuration: '8s'}}></div>
<div className="absolute inset-1 rounded-full border-t border-emerald-400/60 animate-spin" style={{animationDirection: 'reverse', animationDuration: '3s'}}></div>

<svg className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] fill-emerald-400/20" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
<div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/90 border border-emerald-500/20 rounded-full shadow-lg backdrop-blur-md hover:bg-zinc-800/90 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-semibold text-emerald-100 uppercase tracking-wide">Fast Integration</span>
</div>
</div>
</div>

<div className="w-[300px] translate-y-8 bg-zinc-950/80 backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl overflow-hidden relative">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div className="">
<div className="text-[10px] text-zinc-500 font-medium mb-1 uppercase tracking-wider">Live Monitor</div>
<div className="text-xl font-semibold text-white tracking-tight">$12,402<span className="text-zinc-500 text-sm font-normal">.00</span></div>
</div>
<div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded font-medium flex items-center gap-1 border border-emerald-500/20">
<svg className="lucide lucide-arrow-up-right" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    14%
                 </div>
</div>

<div className="h-12 flex items-end gap-1">
<div className="flex-1 bg-zinc-800/50 rounded-sm h-[30%] hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 bg-zinc-800/50 rounded-sm h-[50%] hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 bg-zinc-800/50 rounded-sm h-[40%] hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 bg-zinc-800/50 rounded-sm h-[70%] hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 bg-emerald-500 rounded-sm h-[85%] shadow-[0_0_12px_rgba(16,185,129,0.3)]"></div>
<div className="flex-1 bg-zinc-800/50 rounded-sm h-[60%] hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 bg-zinc-800/50 rounded-sm h-[75%] hover:bg-emerald-500/20 transition-colors"></div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-sm aspect-square">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
<div className="relative z-10 bg-[#0A0A0A] border border-white/10 rounded-xl p-4 shadow-2xl transform rotate-3 translate-y-4">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
<div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
<div className="h-20 w-full bg-zinc-900 border border-zinc-800 rounded mt-4 flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
</div>
</div>
<div className="absolute top-10 -right-4 z-0 bg-zinc-900 border border-white/5 rounded-xl p-4 w-48 opacity-60 transform -rotate-2">
<div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
</div>
</div>
</div>

<div className="p-12 md:p-16 flex flex-col justify-center relative">
<div className="absolute inset-0 pattern-grid opacity-[0.03]"></div>
<div className="z-10 relative">
<div className="flex items-center gap-2 mb-6">
<span className="px-2 py-1 rounded text-[10px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 uppercase tracking-wide">New Feature</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                            Intelligent workflows powered by AI
                        </h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                            Stop managing tasks and start shipping. Our AI engine automates triage, plans cycles, and surfaces insights so you can focus on building.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                AI-assisted cycle planning and estimation
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Automated issue triage and deduplication
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Real-time predictive product insights
                            </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors" href="#">
                            Learn more about Intelligence
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything you need to build</h2>
<p className="text-zinc-400 max-w-xl">Modular tools that work together seamlessly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:h-[400px] h-auto gap-x-4 gap-y-4">

<div className="lg:col-span-2 bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">

<div className="[mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col h-full relative">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Planning</h3>
</div>
<p className="text-sm text-zinc-400 max-w-sm">Manage projects and roadmaps with automated cycles.</p>
<div className="mt-auto pt-8">

<div className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500 relative">
<div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="h-1.5 w-16 bg-zinc-800 rounded-full"></div>
</div>
<div className="h-1.5 w-8 bg-zinc-800 rounded-full"></div>
</div>

<div className="p-4 space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center group-hover/item:border-emerald-500/50 group-hover/item:text-emerald-400 transition-colors">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="flex flex-col gap-1">
<div className="h-2 w-24 bg-zinc-700 rounded-full group-hover/item:bg-emerald-500/40 transition-colors"></div>
<div className="h-1.5 w-12 bg-zinc-800 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">Q3</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center"></div>
<div className="flex flex-col gap-1">
<div className="h-2 w-32 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-16 bg-zinc-800 rounded-full"></div>
</div>
</div>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div><div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
</div>

<div className="bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-zinc-900/80 border border-white/10">
<svg className="text-zinc-400 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Build</h3>
</div>
<p className="text-sm text-zinc-400">Instant deployments &amp; CI/CD.</p>
</div>
<div className="mt-auto flex justify-center py-6 relative z-10">

<div className="relative w-24 h-24 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-emerald-500/30 scale-100 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
<div className="opacity-10 border-emerald-500/20 border rounded-full absolute top-0 right-0 bottom-0 left-0 scale-150"></div>

<div className="w-16 h-16 rounded-full bg-[#080808] border border-emerald-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all duration-500 relative z-10">
<svg className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>

<div className="absolute -bottom-3 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md z-20">
<span className="text-[9px] font-semibold text-emerald-400 uppercase tracking-wider">Ready</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="flex-1 bg-[#050505] border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-lg font-medium text-white tracking-tight">Insights</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-2xl font-semibold text-white tracking-tight">98.5%</span>
<span className="text-xs text-emerald-400 font-medium">+2.4%</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-16 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="emeraldGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(16,185,129,0.2)"></stop>
<stop offset="100%" stop-color="rgba(16,185,129,0)"></stop>
</lineargradient>
</defs>
<path className="" d="M0,80 Q30,70 50,50 T100,40 T150,30 T200,10 V100 H0 Z" fill="url(#emeraldGradient)"></path>
<path d="M0,80 Q30,70 50,50 T100,40 T150,30 T200,10" fill="none" stroke="#34d399" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex-1 bg-[#050505] border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<h3 className="group-hover:text-emerald-400 transition-colors text-lg font-medium text-white tracking-tight">API</h3>
<div className="flex items-center gap-2 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<p className="text-xs text-zinc-400 font-mono">v2.4.0 stable</p>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 mb-5 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/10 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Automated Triage</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">AI that categorizes, prioritizes, and assigns incoming issues instantly.</p>

<div className="mt-auto w-full border border-white/5 bg-black/40 rounded-lg p-3 relative overflow-hidden flex flex-col gap-2">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 to-transparent"></div>

<div className="flex items-center gap-3 p-2 rounded bg-zinc-900/80 border border-white/5">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div className="flex-1 space-y-1">
<div className="h-1.5 w-24 bg-zinc-700 rounded-full"></div>
<div className="h-1 w-16 bg-zinc-800 rounded-full"></div>
</div>
<div className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 rounded">AI</div>
</div>

<div className="flex items-center gap-3 p-2 rounded bg-zinc-900/40 border border-white/5 opacity-60">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="flex-1 space-y-1">
<div className="h-1.5 w-20 bg-zinc-800 rounded-full"></div>
<div className="h-1 w-12 bg-zinc-800/50 rounded-full"></div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded bg-zinc-900/40 border border-white/5 opacity-40">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="flex-1 space-y-1">
<div className="h-1.5 w-16 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 via-transparent to-transparent opacity-100"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 mb-5 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/10 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM12 8v6m-3-3h6"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Feedback Loop</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Connect customer feedback directly to projects and close the loop.</p>

<div className="overflow-hidden bg-zinc-950/30 w-full border-white/5 border rounded-lg mt-auto pt-4 pr-4 pb-4 pl-4 relative">

<div className="absolute top-1/2 left-4 w-full h-px bg-zinc-800"></div>
<div className="flex justify-between items-center relative z-10">

<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-zinc-600"></div>
</div>
<div className="h-1 w-10 bg-zinc-800 rounded-full"></div>
</div>

<div className="bg-zinc-900 border border-zinc-700 rounded-full px-2 py-1 z-10 group-hover:border-emerald-500/50 transition-colors">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[9px] font-medium text-zinc-300">Syncing</span>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline className="" points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="h-1 w-12 bg-emerald-500/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10 flex flex-col h-full relative">
<div className="w-10 h-10 mb-5 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/10 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Real-time Velocity</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Visualize team performance with zero-config dashboards.</p>

<div className="mt-auto w-full border border-white/5 bg-[#09090b] rounded-lg relative overflow-hidden flex flex-col group/chart shadow-inner shadow-black/50">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest">Live</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-500 font-mono">SPRINT 24</span>
<div className="w-px h-3 bg-white/10"></div>
<span className="text-[10px] text-white font-mono font-medium">42 PTS</span>
</div>
</div>

<div className="relative h-28 w-full">

<div className="absolute inset-0 flex flex-col justify-between py-4 px-4 pointer-events-none opacity-20">
<div className="w-full h-px border-t border-dashed border-zinc-500"></div>
<div className="w-full h-px border-t border-dashed border-zinc-500"></div>
<div className="w-full h-px border-t border-dashed border-zinc-500"></div>
</div>

<svg className="w-full h-full overflow-visible px-4 pt-4 pb-0" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="velocityGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
<clippath id="chartClip">
<rect height="50" width="100"></rect>
</clippath>
</defs>

<path className="opacity-50" d="M0 35 Q 25 42, 50 30 T 100 25" fill="none" stroke="#3f3f46" stroke-dasharray="2 2" strokeWidth="1"></path>

<g className="" clipPath="url(#chartClip)">
<path className="" d="M0 45 Q 20 40, 35 25 T 65 15 T 100 5 V 50 H 0 Z" fill="url(#velocityGradient)"></path>
<path className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" d="M0 45 Q 20 40, 35 25 T 65 15 T 100 5" fill="none" stroke="#10b981" strokeWidth="1.5"></path>
</g>

<g className="transition-opacity duration-300">

<line stroke="white" stroke-dasharray="2 2" stroke-opacity="0.1" strokeWidth="1" x1="65" x2="65" y1="0" y2="50"></line>

<circle className="group-hover/chart:scale-150 transition-transform duration-300 origin-center shadow-[0_0_10px_rgba(16,185,129,0.5)]" cx="65" cy="15" fill="#09090b" r="2.5" stroke="#10b981" strokeWidth="1.5"></circle>
<circle className="scale-0 group-hover/chart:scale-100 transition-transform duration-300 origin-center" cx="65" cy="15" fill="transparent" r="6" stroke="#10b981" stroke-opacity="0.2" strokeWidth="1"></circle>
</g>
</svg>

<div className="absolute top-2 left-[65%] -translate-x-1/2 -translate-y-2 bg-zinc-900 border border-white/10 rounded-md shadow-xl px-2.5 py-1.5 backdrop-blur-md opacity-0 group-hover/chart:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/chart:translate-y-0 z-20">
<div className="flex flex-col items-center gap-0.5 min-w-[60px]">
<span className="text-[9px] text-zinc-500 font-medium uppercase tracking-wide">Velocity</span>
<div className="flex items-center gap-1.5">
<span className="text-xs font-bold text-white tabular-nums tracking-tight">42.5</span>
<span className="text-[9px] text-emerald-400 font-medium bg-emerald-500/10 px-1 rounded flex items-center">
<svg className="mr-0.5" fill="none" height="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="6"><polyline points="18 15 12 9 6 15"></polyline></svg>
                            12%
                        </span>
</div>
</div>

<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-white/10 rotate-45"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 mb-5 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/10 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Mobile Ready</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Native iOS and Android apps to keep you moving, wherever you are.</p>

<div className="mt-auto flex justify-center">
<div className="w-32 h-32 border-x border-t border-zinc-700 bg-[#020202] rounded-t-xl border-b-0 p-3 relative shadow-2xl overflow-hidden group-hover:-translate-y-1 transition-transform duration-500">

<div className="w-10 h-2 bg-black rounded-full mx-auto mb-4 border border-zinc-800"></div>

<div className="flex justify-between items-center mb-3">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
</div>

<div className="space-y-2">
<div className="h-8 w-full bg-zinc-900 rounded border border-white/5 flex items-center px-2 gap-2">
<div className="w-3 h-3 rounded-full border border-emerald-500/50 flex items-center justify-center">
<div className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100"></div>
</div>
<div className="h-1 w-12 bg-zinc-700 rounded-full"></div>
</div>
<div className="h-8 w-full bg-zinc-900 rounded border border-white/5 flex items-center px-2 gap-2 opacity-50">
<div className="w-3 h-3 rounded-full border border-zinc-700"></div>
<div className="h-1 w-8 bg-zinc-700 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 mb-5 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/10 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Enterprise Grade</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">SSO, audit logs, and SOC2 compliance. Secure by default.</p>

<div className="mt-auto flex justify-center items-center py-4 relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-px bg-zinc-800"></div>
</div>
<div className="relative flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded-full border border-white/10 shadow-xl z-10">
<div className="w-6 h-8 border border-emerald-500/30 rounded bg-black flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<svg className="text-emerald-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="flex flex-col gap-1">
<div className="h-1 w-12 bg-zinc-700 rounded-full"></div>
<div className="h-1 w-8 bg-zinc-800 rounded-full"></div>
</div>
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<svg className="text-emerald-400" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</div>

<div className="absolute inset-x-0 h-px bg-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.8)] top-0 animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800/30 via-transparent to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 mb-5 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/10 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Connected Ecosystem</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Seamless two-way sync with GitHub, Slack, Figma, and Sentry.</p>

<div className="mt-auto h-24 relative flex items-center justify-center">

<div className="w-10 h-10 bg-black border border-emerald-500/50 rounded-lg flex items-center justify-center relative z-20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<div className="w-4 h-4 bg-emerald-500 rounded-sm"></div>
</div>

<div className="absolute w-full h-full inset-0 flex items-center justify-center">
<div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent rotate-45 absolute"></div>
<div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -rotate-45 absolute"></div>
</div>

<div className="absolute top-2 left-8 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
</div>
<div className="absolute bottom-2 right-8 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center z-10 group-hover:scale-110 transition-transform delay-75">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
</div>
<div className="absolute top-2 right-8 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center z-10 group-hover:scale-110 transition-transform delay-100">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
</div>
<div className="absolute bottom-2 left-8 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center z-10 group-hover:scale-110 transition-transform delay-150">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 relative bg-[#070707]">
<div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12">Made for modern product teams</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-50">
<div className="flex items-center justify-center gap-2"><span className="w-4 h-4 rounded-full bg-zinc-600"></span><span className="font-semibold tracking-tight text-lg">Acme Corp</span></div>
<div className="flex items-center justify-center gap-2"><span className="w-4 h-4 rounded-sm bg-zinc-600"></span><span className="font-semibold tracking-tight text-lg">GlobalTech</span></div>
<div className="flex items-center justify-center gap-2"><span className="w-4 h-4 rotate-45 bg-zinc-600"></span><span className="font-semibold tracking-tight text-lg">Nebula</span></div>
<div className="flex items-center justify-center gap-2"><span className="w-4 h-4 rounded-full border-2 border-zinc-600"></span><span className="font-semibold tracking-tight text-lg">Zenith</span></div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Loved by product teams</h2>
<p className="text-zinc-400 max-w-xl mx-auto">See what high-performing teams have to say about System.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-6">

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<p className="text-zinc-300 mb-6 leading-relaxed">"System has completely transformed how we ship. The automated cycles and AI triage alone save us 20 hours a week. It feels like it was built by people who actually understand product."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">CTO at Vertex</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<p className="text-zinc-300 mb-6 leading-relaxed">"The speed is unmatched. I've used every tool out there, but System is the only one that keeps up with my thought process. Keyboard shortcuts for everything."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium border border-indigo-500/30">MK</div>
<div>
<div className="text-sm font-medium text-white">Marcus Klein</div>
<div className="text-xs text-zinc-500">Staff Engineer at Orbit</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<p className="text-zinc-300 mb-6 leading-relaxed">"Finally, a tool that bridges the gap between engineering and design. The Figma integration is flawless, and the feedback loops are actually useful."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-zinc-500">Head of Product at Lumiere</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-1 mb-4 text-emerald-400">
<svg className="lucide lucide-star" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">"We switched from Jira and haven't looked back. The clarity we have now is insane."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026703d"/>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-zinc-500">VP Eng at Acme</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<p className="text-zinc-300 mb-6 leading-relaxed">"The insights dashboard is my homepage. Seeing real-time velocity without configuring complex reports is a game changer for our sprint planning."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium border border-emerald-500/30">AL</div>
<div>
<div className="text-sm font-medium text-white">Alex Lewis</div>
<div className="text-xs text-zinc-500">Product Lead at Codex</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<p className="text-zinc-300 mb-6 leading-relaxed">"It's rare to find software that feels this crafted. Every interaction, every animation... it's just a joy to use every day."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026702d"/>
<div>
<div className="text-sm font-medium text-white">Sophie Turner</div>
<div className="text-xs text-zinc-500">Designer at Zenith</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-center pt-32 pb-32 relative"><div className="bg-center bg-[url(https://images.unsplash.com/photo-1707430393809-784967fe6fee?w=3840&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="md:p-20 overflow-hidden text-center bg-gradient-to-b from-zinc-800/40 to-black border-white/10 border rounded-3xl px-12 py-12 relative shadow-2xl backdrop-blur-sm">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                Get started with a better way to build products.
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Start building
                    </button>
<button className="h-12 px-8 rounded-full text-zinc-400 text-sm font-medium hover:text-white transition-colors">
                        Contact sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 relative">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="font-semibold tracking-tighter">SYSTEM</span>
</a>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li className=""><a className="hover:text-zinc-300 transition-colors" href="#">Features</a></li>
<li className=""><a className="hover:text-zinc-300 transition-colors" href="#">Integrations</a></li>
<li className=""><a className="hover:text-zinc-300 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Connect</h4>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 System Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
