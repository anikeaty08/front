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
      

<div className="relative w-full max-w-[1400px] mx-auto border-x border-white/5 bg-[#000000]">
<div className="absolute inset-0 vertical-lines pointer-events-none z-0 h-full"></div>

<header className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 backdrop-blur-sm sticky top-0 bg-black/80">
<a className="text-lg font-bold tracking-tighter uppercase flex items-center gap-2" href="#">
<svg aria-hidden="true" className="iconify text-[#3F48E9] iconify--lucide" data-icon="lucide:aperture" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
<span>DroneDeploy</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white hover:text-gray-300" href="#">Sign in</a>
<a className="text-sm font-medium bg-[#3F48E9] hover:bg-[#3F48E9]/90 text-white px-4 py-2 rounded-lg transition-all btn-glow" href="#">Book a demo</a>
</div>
</header>

<section className="z-10 md:pt-32 md:pb-32 md:px-12 text-center border-white/5 border-b pt-24 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto space-y-8">
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] bg-clip-text text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white to-white/60">
                    Power your field teams with robotics and AI
                </h1>
<div className="max-w-2xl mx-auto space-y-4">
<p className="text-xl md:text-2xl text-white font-medium tracking-tight">Leave no site unseen.</p>
<p className="leading-relaxed text-lg text-gray-400">
                        Automate reality capture to understand progress, quality and safety across your entire portfolio.
                    </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-[#3F48E9] hover:bg-[#3F48E9]/90 text-white rounded-lg font-medium transition-all btn-glow flex items-center justify-center gap-2">
                        Book a demo
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                        Start a trial
                    </button>
</div>
</div>
</section>

<section className="z-10 md:px-12 border-white/5 border-b pt-12 pr-6 pb-12 pl-6 relative">
<p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by the people who build, power, and feed our world</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">

<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="font-bold tracking-tighter">CONSTRUCT</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="font-bold tracking-tighter">ENERGYCO</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="font-bold tracking-tighter">AGRIFIELD</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> <span className="font-bold tracking-tighter">SOLARIS</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg> <span className="font-bold tracking-tighter">MINECORP</span></div>
</div>
</section>

<section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/5">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">What DroneDeploy does</h2>
<p className="text-lg text-gray-400">Capture, Process, Analyze. The complete reality platform.</p>
</div>

<div className="relative aspect-video w-full bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<div className="flex z-20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:play" data-width="32" height="32" role="img" style={{marginLeft: '4px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40"></div>
<div className="absolute bottom-6 left-6 z-20 text-left">
<p className="text-sm font-mono text-[#3F48E9] mb-1">PLATFORM OVERVIEW</p>
<p className="text-xl font-medium">See the world in 3D</p>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-[#030303] z-10 border-white/5 border-b pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Understand progress, quality and safety across all your sites</h2>
<p className="text-lg text-gray-400">Turn site data into defensible decisions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="gradient-border-card p-6 flex flex-col h-full group">
<div className="h-48 w-full bg-black/50 rounded-lg mb-6 relative overflow-hidden border border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(45deg,#1a1a1a_25%,transparent_25%,transparent_75%,#1a1a1a_75%,#1a1a1a),linear-gradient(45deg,#1a1a1a_25%,transparent_25%,transparent_75%,#1a1a1a_75%,#1a1a1a)] bg-[length:20px_20px] opacity-20"></div>
<div className="absolute bottom-0 left-0 h-1 bg-[#3F48E9] progress-bar-anim z-20"></div>
<div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-mono border border-white/10 text-[#3F48E9]">
                                Progress: <span className="text-white">85%</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#3F48E9] iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                            Track evolution in real-time
                        </h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Move beyond static photos. Utilize AI-driven earthworks analysis, schedule tracking, and automated quantification.
                        </p>
</div>

<div className="gradient-border-card p-6 flex flex-col h-full group">
<div className="h-48 w-full bg-black/50 rounded-lg mb-6 relative overflow-hidden border border-white/5">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-50"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay bim-fade"></div>
<div className="absolute top-3 right-3 bg-red-500/10 border border-red-500/50 text-red-500 px-2 py-1 rounded text-xs font-mono flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg> Variance Detected
                            </div>
</div>
<h3 className="text-xl font-medium mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#3F48E9] iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
                            Verify reality against design
                        </h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Instantly overlay BIM models onto site reality capture. Detect deviations early and ensure every millimeter matches the plan.
                        </p>
</div>

<div className="gradient-border-card p-6 flex flex-col h-full group">
<div className="h-48 w-full bg-black/50 rounded-lg mb-6 relative overflow-hidden border border-white/5">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40"></div>
<div className="absolute top-1/4 left-1/4 w-16 h-24 border-2 border-red-500/70 rounded-sm"></div>
<div className="absolute top-1/4 left-1/4 -mt-5 bg-red-500 text-white text-[9px] px-1 py-0.5">HAZARD DETECTED</div>
<div className="absolute inset-x-0 h-0.5 bg-[#3F48E9]/50 scan-line shadow-[0_0_10px_#3F48E9]"></div>

<div className="absolute right-2 top-2 bottom-2 w-1/4 bg-black/80 border-l border-white/10 p-2 flex flex-col gap-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-2/3 bg-white/20 rounded"></div>
<div className="h-1 w-full bg-red-500/50 rounded mt-2"></div>
</div>
</div>
<h3 className="text-xl font-medium mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#3F48E9] iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                            Proactive automated risk detection
                        </h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Leverage computer vision to automatically identify hazards. Spot risks before they become incidents.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight">How leaders build</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
<div className="md:w-1/2 h-64 md:h-auto bg-gray-900 relative">

<div className="absolute inset-0 flex items-center justify-center text-white/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:image" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
<img alt="Construction site" className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-1/2 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 text-[#3F48E9]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hard-hat" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></g></svg>
<span className="text-xs font-bold uppercase tracking-wider">Construction</span>
</div>
<blockquote className="text-lg font-medium leading-snug mb-6">
                                    "We reduced our rework costs by 25% in the first quarter alone using visual documentation."
                                </blockquote>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-sm text-gray-400">
<span className="block text-white font-medium">BuildCorp</span>
<span>Global Construction</span>
</div>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
<div className="md:w-1/2 h-64 md:h-auto bg-gray-900 relative">

<div className="absolute inset-0 flex items-center justify-center text-white/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:video" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
<img alt="Solar Farm" className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-1/2 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 text-[#3F48E9]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-bold uppercase tracking-wider">Energy</span>
</div>
<blockquote className="text-lg font-medium leading-snug mb-6">
                                    "DroneDeploy gives us a unified view of asset health across 50 solar sites nationwide."
                                </blockquote>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-sm text-gray-400">
<span className="block text-white font-medium">SunPower</span>
<span>Renewable Energy</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-6 md:px-12 border-b border-white/5 bg-[#030303]">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Don’t get left behind.</h2>
<p className="text-lg text-gray-400">See how your industry is deploying robotics and AI.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group p-6 rounded-lg border border-white/10 hover:border-[#3F48E9] hover:bg-white/5 transition-all text-center" href="#">
<svg aria-hidden="true" className="iconify mx-auto mb-3 text-gray-400 group-hover:text-white iconify--lucide" data-icon="lucide:hammer" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
<span className="block font-medium">Construction</span>
</a>
<a className="group p-6 rounded-lg border border-white/10 hover:border-[#3F48E9] hover:bg-white/5 transition-all text-center" href="#">
<svg aria-hidden="true" className="iconify mx-auto mb-3 text-gray-400 group-hover:text-white iconify--lucide" data-icon="lucide:flame" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="block font-medium">Oil &amp; Gas</span>
</a>
<a className="group p-6 rounded-lg border border-white/10 hover:border-[#3F48E9] hover:bg-white/5 transition-all text-center" href="#">
<svg aria-hidden="true" className="iconify mx-auto mb-3 text-gray-400 group-hover:text-white iconify--lucide" data-icon="lucide:sprout" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="block font-medium">Agriculture</span>
</a>
<a className="group p-6 rounded-lg border border-white/10 hover:border-[#3F48E9] hover:bg-white/5 transition-all text-center" href="#">
<svg aria-hidden="true" className="iconify mx-auto mb-3 text-gray-400 group-hover:text-white iconify--lucide" data-icon="lucide:pickaxe" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m14 13l-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999m4.973-5.972A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024m4 4.001a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path><path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path></g></svg>
<span className="block font-medium">Mining</span>
</a>
</div>
</section>

<section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/5 space-y-32">

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<span className="text-[#3F48E9] font-mono text-sm tracking-wider uppercase mb-2 block">How it works</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Every site, fully captured</h3>
<div className="prose prose-invert text-gray-400">
<p className="mb-4">
                            Robotic automation or capture services, we've got you covered.
                        </p>
<p>
                            Hundreds of workers. Thousands of tasks. How do you capture utilities before they're buried, in-slab plumbing before you pour, and in-wall electrical before you close up? DroneDeploy lets you see it all, from the air to the ground.
                        </p>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="aspect-square bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#3F48E9]/20 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white/10 iconify--lucide" data-icon="lucide:scan" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-lg">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-mono uppercase text-gray-400">Live Feed</span>
</div>
<div className="h-2 bg-white/10 rounded w-full overflow-hidden">
<div className="h-full bg-[#3F48E9] w-2/3"></div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
<div className="md:w-1/2">
<span className="text-[#3F48E9] font-mono text-sm tracking-wider uppercase mb-2 block">How it works</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Real AI that understands your site</h3>
<div className="prose prose-invert text-gray-400">
<p className="mb-4">
                            From AI models trained on the largest collection of geolocated imagery on the planet.
                        </p>
<p>
                            Supercharge your staff with quality, safety, and progress tracking processes powered by DroneDeploy's domain-specific AI.
                        </p>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="aspect-square bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden relative group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,72,233,0.15),transparent_70%)]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white/10 group-hover:text-[#3F48E9]/40 transition-colors duration-700 iconify--lucide" data-icon="lucide:brain-circuit" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>

<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#3F48E9] rounded-full blur-[2px]"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#3F48E9] rounded-full blur-[1px]"></div>
<div className="absolute top-1/2 right-1/3 w-4 h-4 bg-[#3F48E9]/50 rounded-full blur-[4px]"></div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<span className="text-[#3F48E9] font-mono text-sm tracking-wider uppercase mb-2 block">How it works</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">One login for 360, drone, site cam and design data</h3>
<div className="prose prose-invert text-gray-400">
<p className="mb-4">
                            Unified reality capture for full lifecycle visibility.
                        </p>
<p>
                            View your sites and assets from every angle, over time. DroneDeploy lets you compare your designs with 2D maps, 3D models, meshes and pointclouds.
                        </p>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="aspect-square bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden relative flex items-center justify-center">
<div className="relative w-64 h-48 bg-white/5 border border-white/10 rounded-lg shadow-2xl rotate-3 scale-95 origin-bottom-right transition-transform hover:rotate-0">
<div className="p-3 border-b border-white/10 flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 grid grid-cols-2 gap-2">
<div className="h-12 bg-white/5 rounded"></div>
<div className="h-12 bg-white/5 rounded"></div>
<div className="h-12 bg-white/5 rounded col-span-2"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/5 bg-[#030303]">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<span className="text-[#3F48E9] font-mono text-sm tracking-wider uppercase mb-2 block">Education and entertainment</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Learn how the best are using DroneDeploy</h2>
<p className="text-gray-400 mt-2 max-w-2xl">Discover use cases. Watch virtual events. Download playbooks. And get to know our team through our content.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#3F48E9] hover:text-white transition-colors font-medium" href="#">
                        Start streaming <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group block" href="#">
<div className="aspect-[4/3] bg-gray-900 rounded-lg mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-xs font-mono uppercase backdrop-blur border border-white/10">Playbook</div>
</div>
<h4 className="text-lg font-medium group-hover:text-[#3F48E9] transition-colors mb-2">The Ultimate Guide to Reality Capture</h4>
<p className="text-sm text-gray-500">Read time: 8 min</p>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] bg-gray-900 rounded-lg mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-xs font-mono uppercase backdrop-blur border border-white/10">Webinar</div>
</div>
<h4 className="text-lg font-medium group-hover:text-[#3F48E9] transition-colors mb-2">AI in Construction: 2024 Outlook</h4>
<p className="text-sm text-gray-500">Duration: 45 min</p>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] bg-gray-900 rounded-lg mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-xs font-mono uppercase backdrop-blur border border-white/10">Case Study</div>
</div>
<h4 className="text-lg font-medium group-hover:text-[#3F48E9] transition-colors mb-2">How Shell Scales Robotics</h4>
<p className="text-sm text-gray-500">Read time: 5 min</p>
</a>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 md:px-12 border-b border-white/5 text-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,72,233,0.1),transparent_70%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-20">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[0.9]">
                    Getting startedis simple.
                </h2>
<p className="text-xl text-gray-400 mb-10">Request a demo today.</p>
<button className="px-10 py-4 bg-[#3F48E9] hover:bg-[#3F48E9]/90 text-white rounded-lg text-lg font-medium transition-all btn-glow inline-flex items-center gap-2">
                    Book a demo
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<footer className="relative z-10 py-16 px-6 md:px-12 bg-[#020202]">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
<div className="col-span-2 md:col-span-2">
<a className="text-lg font-bold tracking-tighter uppercase flex items-center gap-2 mb-6" href="#">
<svg aria-hidden="true" className="iconify text-[#3F48E9] iconify--lucide" data-icon="lucide:aperture" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
<span>DroneDeploy</span>
</a>
<p className="text-gray-500 text-sm max-w-xs">
                        The leading enterprise-grade reality capture platform. Trusted by companies in over 180 countries.
                    </p>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Platform</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Robotics</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Industry</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Construction</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Energy</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Agriculture</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Mining</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#3F48E9] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
<p>© 2024 DroneDeploy. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Cookie Settings</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
