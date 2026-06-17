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
blue: '#2563EB',
dark: '#02040a', /* Darker blue-black */
card: '#060b14', /* Deep space blue */
border: '#111827'
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'twinkle': 'twinkle 4s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
twinkle: {
'0%, 100%': { opacity: 0.2 },
'50%': { opacity: 0.8 },
}
}
}
}
}

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
      

<div className="aura-background-component top-0 w-full h-screen saturate-200 brightness-125 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-[#02040a] to-black"></div>

<div className="absolute inset-0 stars animate-twinkle"></div>

<div className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center bg-[url(default)]" style={{}}></div>
</div>

<header className="fixed z-50 glass-nav transition-all duration-300 w-full top-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex-1 flex justify-start">
<a className="hover:text-blue-400 transition-colors flex items-center gap-2 text-lg font-medium text-white tracking-tighter" href="/#">Nexelevate</a>
</div>
<nav className="hidden md:flex flex-1 justify-center space-x-8">
<a className="text-xs font-medium text-gray-400 hover:text-blue-200 transition-colors duration-200" href="#services">Services</a>
<a className="text-xs font-medium text-gray-400 hover:text-blue-200 transition-colors duration-200" href="#about">About</a>
<a className="hover:text-blue-200 transition-colors duration-200 text-xs font-medium text-gray-400" href="#process">Process</a>
</nav>
<div className="flex-1 flex justify-end items-center gap-4">
<a className="hidden md:inline-flex group relative items-center justify-center px-5 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-600/20 border border-blue-500/50 rounded-full hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]" href="#contact">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
<span className="flex items-center gap-2 uppercase text-xs font-semibold tracking-wider relative">Get In Touch <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</a>
<div className="md:hidden flex items-center">
<button className="text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</header>
<main className="z-10 relative">

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex gap-2 animate-float text-xs text-blue-300 bg-blue-950/30 border-blue-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">Generating lead</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    Navigating the void with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">autonomous precision.</span>
</h1>
<p className="text-lg text-blue-200/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Architecting the neural pathways of the future. We fuse deep space infrastructure with generative AI to unlock infinite scalability.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-blue-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all text-sm font-medium text-black tracking-tight bg-white w-full rounded-2xl pt-3 pr-8 pb-3 pl-8">Schedule a call</button><button className="sm:w-auto hover:bg-blue-900/20 hover:border-blue-400/50 transition-colors flex text-sm font-medium text-white tracking-tight bg-black/50 w-full border-blue-500/30 border rounded-2xl pt-3 pr-8 pb-3 pl-8 backdrop-blur-sm gap-x-2 gap-y-2 items-center justify-center">Case Studies</button>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 border-l-2 border-blue-500/30 pl-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Cosmic Data Entropy</h2>
<p className="text-gray-400 max-w-xl">As data universes expand, traditional navigation fails. We provide the gravitational pull to organize chaos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-xl bg-brand-card/50 border border-blue-500/10 hover:border-blue-400/40 hover:bg-brand-card/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 border border-blue-500/20">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:database-zap" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></path><path d="M3 12a9 3 0 0 0 11.59 2.87"></path></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Dark Data Matter</h3>
<p className="text-sm text-gray-500 leading-relaxed">Unstructured data creates gravitational drag. We illuminate and structure hidden information assets.</p>
</div>
</div>

<div className="group p-8 rounded-xl bg-brand-card/50 border border-blue-500/10 hover:border-blue-400/40 hover:bg-brand-card/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-blue-600/5"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 border bg-blue-900/30 border-blue-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-400" data-icon="lucide:orbit" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85m-6.607-4.334A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Signal Latency</h3>
<p className="text-sm text-gray-500 leading-relaxed">Eliminate transmission delays between decision and action with edge-computed intelligence.</p>
</div>
</div>

<div className="group p-8 rounded-xl bg-brand-card/50 border border-blue-500/10 hover:border-blue-400/40 hover:bg-brand-card/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center mb-6 border border-cyan-500/20">
<svg aria-hidden="true" className="iconify text-cyan-400 iconify--lucide" data-icon="lucide:network" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Scale Horizons</h3>
<p className="text-sm text-gray-500 leading-relaxed">Systems designed for planetary scale. Break free from monolithic architecture limitations.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="services">

<div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Core Modules</h2>
<p className="text-gray-400 max-w-xl">Deploying neural architectures to rewrite business physics.</p>
</div>
<a className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 transition-colors" href="#">
                        View all capabilities
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-[#060b14]/80 border border-blue-500/10 p-10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-all"></div>
<div className="relative z-10">
<svg aria-hidden="true" className="iconify text-blue-400 mb-6 iconify--lucide" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Hyper-Intelligence</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Custom LLMs trained on your galaxy of data. Automate content, code, and communication at lightspeed.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-300/80 transition-colors">
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Fine-tuned Models
                                </li>
<li className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-300/80 transition-colors">
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Neural Search
                                </li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#060b14]/80 border border-blue-500/10 p-10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 rounded-full blur-2xl transition-all bg-blue-500/20 group-hover:bg-blue-400/30"></div>
<div className="relative z-10">
<svg aria-hidden="true" className="iconify mb-6 iconify--lucide text-blue-400" data-icon="lucide:radar" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></path><path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59l5.66-5.66"></path></g></svg>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Predictive Horizons</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Forecasting engines that see beyond the curve. Utilize historical starlight to predict future market trends.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 transition-colors group-hover:text-blue-300/80">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-500" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Event Horizon Analysis
                                </li>
<li className="flex items-center gap-2 text-xs text-gray-500 transition-colors group-hover:text-blue-300/80">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-500" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Risk Vectors
                                </li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#060b14]/80 border border-blue-500/10 p-10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all"></div>
<div className="relative z-10">
<svg aria-hidden="true" className="iconify text-cyan-400 mb-6 iconify--lucide" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Autonomous Drones</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Self-governing software agents capable of executing complex multi-step workflows in zero-gravity environments.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-cyan-300/80 transition-colors">
<svg aria-hidden="true" className="iconify text-cyan-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Auto-Pilot Logic
                                </li>
<li className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-cyan-300/80 transition-colors">
<svg aria-hidden="true" className="iconify text-cyan-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Swarm Intelligence
                                </li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#060b14]/80 border border-blue-500/10 p-10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-400/30 transition-all"></div>
<div className="relative z-10">
<svg aria-hidden="true" className="iconify text-purple-400 mb-6 iconify--lucide" data-icon="lucide:container" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path><path d="M10 21.9V14L2.1 9.1M10 14l11.9-6.9M14 19.8v-8.1m4 5.8V9.4"></path></g></svg>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Inference Infrastructure</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Robust MLOps pipelines. Ensure your models are scalable, version-controlled, and mission-ready.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-purple-300/80 transition-colors">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Dockerized Deployment
                                </li>
<li className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-purple-300/80 transition-colors">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Latency Monitoring
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#02040a]/50 border-blue-900/20 border-t pt-22 pb-22 backdrop-blur-sm" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">The Protocol</h2>
<p className="text-gray-400">Deterministic sequence for non-deterministic outcomes.</p>
</div>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent md:-ml-px opacity-30 box-shadow-[0_0_10px_#3b82f6] via-blue-500"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1 pl-16 md:pl-0 md:pr-10">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Signal Detection</h3>
<p className="text-sm text-gray-500">We scan your data nebula to identify high-energy vectors for algorithmic intervention.</p>
</div>
<div className="absolute left-6 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full border-4 border-[#02040a] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-10 order-1 md:order-2"></div>
<div className="md:w-5/12 order-3 pl-16 md:pl-10 hidden md:block">
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="md:w-5/12 order-2 md:order-1 hidden md:block text-right pr-10">
</div>
<div className="absolute left-6 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full border-4 border-[#02040a] transition-colors z-10 order-1 md:order-2 box-shadow-[0_0_15px_rgba(99,102,241,0.5)] bg-blue-900 group-hover:bg-blue-500"></div>
<div className="md:w-5/12 text-left order-3 pl-16 md:pl-10">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Neural Architecting</h3>
<p className="text-sm text-gray-500">Constructing the mesh. Designing bespoke networks for specific constraints.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1 pl-16 md:pl-0 md:pr-10">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Model Training</h3>
<p className="text-sm text-gray-500">Iterative learning cycles. Rigorous validation against ground-truth constellations.</p>
</div>
<div className="absolute left-6 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full border-4 border-[#02040a] transition-colors z-10 order-1 md:order-2 box-shadow-[0_0_15px_rgba(99,102,241,0.5)] bg-blue-900 group-hover:bg-blue-500"></div>
<div className="md:w-5/12 order-3 pl-16 md:pl-10 hidden md:block">
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-5/12 order-2 md:order-1 hidden md:block text-right pr-10">
</div>
<div className="absolute left-6 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full border-4 border-[#02040a] bg-cyan-900 group-hover:bg-cyan-500 transition-colors z-10 order-1 md:order-2 box-shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
<div className="md:w-5/12 text-left order-3 pl-16 md:pl-10">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Orbital Deployment</h3>
<p className="text-sm text-gray-500">Seamless launch into production with continuous telemetry monitoring.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#02040a] to-[#000000] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-6 drop-shadow-xl">Ready To Transform</h2>
<p className="text-lg text-blue-200/60 mb-10 font-light">Join the enterprises navigating the future with AETHER's guidance systems.</p>
<div className="flex justify-center">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] font-medium text-white bg-blue-600 border-blue-400/20 border rounded-full pt-3 pr-8 pb-3 pl-8 relative items-center justify-center">Ready To Transform</button>
</div>
</div>
</section>
</main>
<footer className="py-12 border-t border-blue-900/20 bg-[#02040a] relative z-10">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="mb-4 md:mb-0 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-lg font-medium text-white tracking-tighter">Nexelevate</span>
</div>
<div className="flex space-x-6">
<a className="text-gray-500 hover:text-blue-400 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-icon="lucide:twitter" data-icon-replaced="true" data-icon-set="lucide" data-lucide="youtube" data-width="18" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(96, 165, 250)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="text-gray-500 hover:text-blue-400 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-icon="lucide:github" data-icon-replaced="true" data-icon-set="lucide" data-lucide="instagram" data-width="18" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(96, 165, 250)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-500 hover:text-blue-400 transition-colors" href="#"></a>
</div>
</div>
</footer>

    </>
  );
}
