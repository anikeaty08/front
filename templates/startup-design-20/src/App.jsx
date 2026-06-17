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



        // Trigger path animation on hover for charts
        const paths = document.querySelectorAll('.path-anim');
        paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            // Simple intersection observer to trigger animation
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        path.style.strokeDashoffset = '0';
                    }
                });
            });
            observer.observe(path);
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-black/10 bg-[#f3f4ef]/90 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#0f1f12]" icon="solar:asteroid-bold" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-[#0f1f12]">Celestials</span>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-[#0f1f12] hover:opacity-70 transition-opacity" href="#">
                Start Project
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="absolute top-0 bottom-0 left-[25%] w-px bg-black/5 hidden xl:block pointer-events-none"></div>
<div className="absolute top-0 bottom-0 left-[50%] w-px bg-black/5 hidden xl:block pointer-events-none"></div>
<div className="absolute top-0 bottom-0 left-[75%] w-px bg-black/5 hidden xl:block pointer-events-none"></div>
</nav>

<main className="pt-16 border-l border-r border-black/10 max-w-screen-2xl mx-auto relative bg-[#f3f4ef]">

<section className="relative z-10">
<div className="border-b border-black/10">
<div className="px-4 md:px-8 py-12 md:py-20">
<h1 className="text-[14vw] md:text-[11rem] leading-[0.8] font-semibold tracking-tighter-custom text-[#0f1f12]">
                        Design
                    </h1>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/10 min-h-[240px]">
<div className="col-span-1 md:col-span-5 relative border-b md:border-b-0 md:border-r border-black/10 h-64 md:h-auto overflow-hidden bg-white/40">
<div className="grid-lines absolute inset-0 opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative w-16 h-16">
<div className="absolute inset-0 bg-lime-400 rounded-full opacity-20 animate-sonar"></div>
<div className="absolute inset-0 bg-lime-400 rounded-full opacity-20 animate-sonar" style={{animationDelay: '0.5s'}}></div>
<iconify-icon className="relative z-10 text-[#0f1f12]" icon="solar:cursor-square-linear" width="64"></iconify-icon>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-3 border-b md:border-b-0 md:border-r border-black/10 flex items-center justify-center p-8 bg-[#f3f4ef]">
<div className="flex gap-1 h-32">
<div className="w-12 h-full bg-[#ffb8d0] sausage-shape animate-[pulse_4s_ease-in-out_infinite]"></div>
<div className="w-12 h-full bg-[#ffb8d0] sausage-shape animate-[pulse_4s_ease-in-out_infinite_0.5s]"></div>
<div className="w-12 h-full bg-[#ffb8d0] sausage-shape animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex items-center px-4 md:px-8 py-8 md:py-0">
<h2 className="text-[12vw] md:text-[7rem] leading-none font-semibold tracking-tighter-custom text-[#0f1f12]">
                        &amp; Code
                    </h2>
</div>
</div>
<div className="border-b border-black/10">
<div className="px-4 md:px-8 py-10 md:py-16">
<h2 className="text-[10vw] md:text-[8rem] leading-[0.9] font-semibold tracking-tighter-custom text-[#0f1f12]">
                        for Startups
                    </h2>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/10">
<div className="col-span-1 md:col-span-2 border-grid p-8 md:p-12 flex flex-col justify-center bg-white">
<span className="text-xs font-mono uppercase tracking-widest text-[#4ade80] mb-2">01. Consistency</span>
<h3 className="text-4xl font-semibold tracking-tighter-custom mb-4">The Foundation</h3>
<p className="text-lg text-black/60 max-w-md">We build living design systems, not just screens. Change a color token once, see it ripple through your entire product.</p>
</div>
<div className="col-span-1 border-grid p-8 bg-[#f3f4ef] flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
<div className="bg-[#d4ff33] group-hover:bg-[#ffb8d0] transition-colors duration-500"></div>
<div className="bg-[#ffb8d0] group-hover:bg-[#4ade80] transition-colors duration-500"></div>
<div className="bg-[#4ade80] group-hover:bg-[#0f1f12] transition-colors duration-500"></div>
<div className="bg-[#0f1f12] group-hover:bg-[#d4ff33] transition-colors duration-500"></div>
</div>
<div className="z-10 bg-white p-4 rounded-full shadow-lg">
<iconify-icon icon="solar:pallete-2-bold" width="32"></iconify-icon>
</div>
</div>
<div className="col-span-1 border-grid p-8 bg-[#0f1f12] text-white flex flex-col justify-between group">
<div className="space-y-2">
<div className="h-2 w-12 bg-[#333] rounded"></div>
<div className="h-2 w-20 bg-[#333] rounded"></div>
</div>
<div className="flex gap-2 justify-center">
<div className="w-12 h-12 rounded-lg border-2 border-dashed border-white/20 group-hover:border-[#d4ff33] group-hover:rotate-12 transition-all duration-300"></div>
<div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 group-hover:border-[#ffb8d0] group-hover:-rotate-12 transition-all duration-300"></div>
</div>
<div className="text-right text-xs font-mono opacity-50">FIGMA_SYNC_ACTIVE</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/10 bg-white">
<div className="col-span-1 md:col-span-2 border-grid p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
<div>
<span className="text-xs font-mono uppercase tracking-widest text-[#ffb8d0] mb-2">02. Workflow</span>
<h3 className="text-4xl font-semibold tracking-tighter-custom mb-4">Atomic Workflow</h3>
<p className="text-lg text-black/60 max-w-md">Iteration cycles measured in hours. We sprint alongside your engineering team.</p>
</div>
<div className="flex gap-4 mt-8">
<div className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium">Sprint 1</div>
<div className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium bg-[#f3f4ef]">Sprint 2</div>
<div className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium">Launch</div>
</div>
</div>
<div className="col-span-1 border-grid p-8 relative overflow-hidden flex items-center justify-center bg-[#f3f4ef]">
<div className="relative w-48 h-48">
<svg className="absolute inset-0 w-full h-full animate-spin-slow text-[#0f1f12]" viewbox="0 0 100 100">
<path d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="none" id="curve"></path>
<text fontSize="8" font-weight="bold" letter-spacing="2">
<textpath className="fill-current opacity-30" href="#curve">
                                DESIGN • BUILD • SHIP • REPEAT • DESIGN • BUILD • SHIP • REPEAT •
                            </textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 bg-[#d4ff33] rounded-full flex items-center justify-center relative z-10">
<iconify-icon icon="solar:refresh-bold" width="32"></iconify-icon>
</div>
<div className="absolute w-32 h-32 animate-spin-slow" style={{animationDirection: 'reverse'}}>
<div className="w-4 h-4 bg-[#ffb8d0] rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
<div className="w-4 h-4 bg-[#4ade80] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>
</div>
<div className="col-span-1 border-grid p-8 relative overflow-hidden flex flex-col justify-end bg-[#0f1f12] text-[#f3f4ef]">
<div className="absolute top-8 right-8 text-right">
<div className="text-3xl font-mono font-bold text-[#d4ff33]">2.4x</div>
<div className="text-xs uppercase tracking-widest opacity-60">Velocity</div>
</div>
<div className="flex items-end justify-between gap-2 h-40">
<div className="w-full bg-[#333] rounded-t h-[30%]"></div>
<div className="w-full bg-[#333] rounded-t h-[45%]"></div>
<div className="w-full bg-[#333] rounded-t h-[60%]"></div>
<div className="w-full bg-[#4ade80] rounded-t h-[85%] animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.3)]"></div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10">
<div className="col-span-1 border-grid p-8 flex flex-col justify-center bg-[#d4ff33]">
<iconify-icon className="mb-4 text-[#0f1f12]" icon="solar:devices-bold" width="40"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight">Fluid Layouts</h3>
<p className="text-sm mt-2 opacity-80">From 320px to 4k. We design logic that adapts to the glass it lives on.</p>
</div>
<div className="col-span-1 md:col-span-2 border-grid p-8 bg-white relative overflow-hidden flex items-center justify-center">
<div className="grid-lines absolute inset-0 opacity-20"></div>
<div className="flex items-end gap-4">

<div className="w-16 h-24 border-2 border-[#0f1f12] rounded-lg bg-white relative shadow-lg group hover:-translate-y-2 transition-transform">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/10 rounded-full"></div>
<div className="absolute inset-x-2 top-6 bottom-2 bg-[#f3f4ef] rounded-sm"></div>
</div>

<div className="w-24 h-32 border-2 border-[#0f1f12] rounded-lg bg-white relative shadow-lg group hover:-translate-y-2 transition-transform delay-75">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/10 rounded-full"></div>
<div className="absolute inset-x-2 top-6 bottom-4 bg-[#ffb8d0]/20 rounded-sm"></div>
</div>

<div className="w-48 h-40 border-2 border-[#0f1f12] rounded-lg bg-white relative shadow-lg group hover:-translate-y-2 transition-transform delay-150">
<div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-2 bg-[#0f1f12] rounded-full"></div>
<div className="absolute inset-x-2 top-2 bottom-4 bg-[#d4ff33]/20 rounded-sm grid grid-cols-3 gap-2 p-2">
<div className="bg-white/50 rounded"></div>
<div className="bg-white/50 rounded col-span-2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 border-b border-black/10">
<div className="col-span-1 border-grid p-8 bg-[#0f1f12] text-white flex flex-col justify-center">
<span className="text-xs font-mono uppercase tracking-widest text-[#4ade80] mb-2">03. Performance</span>
<h3 className="text-2xl font-semibold tracking-tight">Vitals</h3>
<p className="text-sm text-white/60 mt-2">Green scores across the board.</p>
</div>

<div className="col-span-1 border-grid p-8 bg-white flex flex-col items-center justify-center group hover:bg-[#f3f4ef] transition-colors">
<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90">
<circle cx="48" cy="48" fill="transparent" r="40" stroke="#eee" strokeWidth="8"></circle>
<circle className="transition-all duration-1000" cx="48" cy="48" fill="transparent" r="40" stroke="#4ade80" stroke-dasharray="251.2" stroke-dashoffset="20" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-2xl font-bold">0.8s</span>
<span className="text-[10px] font-mono uppercase tracking-wider opacity-50">LCP</span>
</div>
</div>
</div>

<div className="col-span-1 border-grid p-8 bg-white flex flex-col items-center justify-center group hover:bg-[#f3f4ef] transition-colors">
<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90">
<circle cx="48" cy="48" fill="transparent" r="40" stroke="#eee" strokeWidth="8"></circle>
<circle className="transition-all duration-1000" cx="48" cy="48" fill="transparent" r="40" stroke="#d4ff33" stroke-dasharray="251.2" stroke-dashoffset="10" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-2xl font-bold">12ms</span>
<span className="text-[10px] font-mono uppercase tracking-wider opacity-50">FID</span>
</div>
</div>
</div>

<div className="col-span-1 border-grid p-8 bg-white flex flex-col items-center justify-center group hover:bg-[#f3f4ef] transition-colors">
<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90">
<circle cx="48" cy="48" fill="transparent" r="40" stroke="#eee" strokeWidth="8"></circle>
<circle className="transition-all duration-1000" cx="48" cy="48" fill="transparent" r="40" stroke="#ffb8d0" stroke-dasharray="251.2" stroke-dashoffset="0" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-2xl font-bold">0.00</span>
<span className="text-[10px] font-mono uppercase tracking-wider opacity-50">CLS</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/10">
<div className="col-span-1 border-grid p-8 flex flex-col justify-center bg-[#f3f4ef]">
<iconify-icon className="mb-4" icon="solar:box-minimalistic-bold" width="40"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight">The Stack</h3>
<p className="text-sm mt-2 opacity-80">Pre-configured scaling tools.</p>
</div>
<div className="col-span-1 border-grid p-8 flex items-center justify-center bg-white group hover:bg-gray-50 transition-colors">
<div className="w-64 bg-white border border-black/10 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium">Dark Mode</span>
<div className="w-10 h-6 bg-[#0f1f12] rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all group-hover:right-5"></div>
</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-[#4ade80] w-3/4"></div>
</div>
</div>
</div>
<div className="col-span-1 border-grid p-8 relative overflow-hidden bg-[#f3f4ef] group">
<div className="absolute inset-0 dot-matrix opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-lg shadow-sm border border-black/5 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded text-[10px] font-mono shadow-sm border border-black/5">
                    User_Session_01
                </div>
</div>
<div className="col-span-1 border-grid p-8 bg-[#0f1f12] text-xs font-mono text-[#4ade80] relative overflow-hidden">
<div className="absolute top-4 left-4 flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
</div>
<div className="mt-8 opacity-80 leading-relaxed">
<span className="text-[#ffb8d0]">const</span> scale = <span className="text-[#d4ff33]">()</span> =&gt; {<br/>
                      <span className="text-[#ffb8d0]">return</span> {<br/>
                        speed: <span className="text-white">"max"</span>,<br/>
                        debt: <span className="text-white">0</span><br/>
                      }<br/>
                    }
                </div>
<div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#4ade80]/20 to-transparent"></div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 border-b border-black/10">
<div className="col-span-1 border-grid p-12 bg-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-4xl text-[#ffb8d0]" icon="solar:users-group-two-rounded-bold"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tighter-custom mb-4">Deep Sync</h3>
<p className="text-black/60 mb-8">Your team + our team. One Slack channel, weekly sprints, total transparency.</p>
<div className="relative h-32 w-full bg-[#f3f4ef] rounded-xl border border-black/5 p-4 flex items-center justify-center">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-4 border-white bg-[#0f1f12] text-white flex items-center justify-center z-10 animate-bounce">
<span className="text-xs font-bold">You</span>
</div>
<div className="w-12 h-12 rounded-full border-4 border-white bg-[#d4ff33] flex items-center justify-center z-0 animate-bounce" style={{animationDelay: '0.1s'}}>
<span className="text-xs font-bold">Us</span>
</div>
</div>
<div className="absolute right-4 bottom-4 bg-white px-2 py-1 rounded text-[10px] shadow-sm border border-black/5 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span> 5 active
                    </div>
</div>
</div>
<div className="col-span-1 border-grid p-12 bg-[#f3f4ef] relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-4xl text-[#4ade80]" icon="solar:document-add-bold"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tighter-custom mb-4">Documentation</h3>
<p className="text-black/60 mb-8">We don't just hand over code. We hand over the manual, the storybook, and the map.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-black/5 hover:-rotate-2 transition-transform duration-300">
<div className="w-8 h-8 bg-[#ffb8d0] rounded mb-2"></div>
<div className="h-2 w-16 bg-gray-100 rounded mb-1"></div>
<div className="h-2 w-10 bg-gray-100 rounded"></div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-black/5 hover:rotate-2 transition-transform duration-300 translate-y-4">
<div className="w-8 h-8 bg-[#d4ff33] rounded mb-2"></div>
<div className="h-2 w-16 bg-gray-100 rounded mb-1"></div>
<div className="h-2 w-10 bg-gray-100 rounded"></div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 border-b border-black/10">
<div className="col-span-1 md:col-span-2 border-grid p-12 bg-[#0f1f12] text-white flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}}></div>
<span className="text-xs font-mono uppercase tracking-widest text-[#d4ff33] mb-2">04. Delivery</span>
<h3 className="text-4xl font-semibold tracking-tighter-custom mb-4">Zero Debt Handoff</h3>
<p className="text-white/60 text-lg max-w-sm relative z-10">Clean, commented, typed code. We use strict ESLint rules so your future engineers will love you.</p>
</div>
<div className="col-span-1 border-grid bg-[#122212] p-8 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent animate-scan opacity-50"></div>
<div className="font-mono text-sm text-[#4ade80] opacity-80 group-hover:opacity-100 transition-opacity">
                    git commit -m<br/>
                    "feat: launch"<br/>
<br/>
                    git push origin<br/>
                    main
                 </div>
</div>
<div className="col-span-1 border-grid bg-white p-8 flex flex-col items-center justify-center gap-4">
<div className="w-16 h-16 bg-[#f3f4ef] rounded-xl flex items-center justify-center text-4xl group cursor-pointer hover:bg-[#d4ff33] transition-colors duration-300">
<iconify-icon className="group-hover:hidden text-[#0f1f12]" icon="solar:folder-with-files-bold"></iconify-icon>
<iconify-icon className="hidden group-hover:block text-[#0f1f12]" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-xs font-bold uppercase tracking-widest text-black/40">Download Assets</span>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10">
<div className="col-span-1 border-grid p-10 bg-white group hover:bg-[#f3f4ef] transition-colors relative overflow-hidden">
<div className="relative z-10">
<h4 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-2">Retention</h4>
<div className="text-5xl font-semibold tracking-tighter mb-4">84%</div>
<div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-[#0f1f12] w-0 group-hover:w-[84%] transition-all duration-1000 ease-out"></div>
</div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-9xl text-black/5 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="col-span-1 border-grid p-10 bg-white group hover:bg-[#f3f4ef] transition-colors relative overflow-hidden">
<div className="relative z-10">
<h4 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-2">Funding Raised</h4>
<div className="text-5xl font-semibold tracking-tighter mb-4">$120M</div>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-[#4ade80] opacity-0 group-hover:opacity-100 transition delay-100"></div>
<div className="h-2 w-2 rounded-full bg-[#4ade80] opacity-0 group-hover:opacity-100 transition delay-200"></div>
<div className="h-2 w-2 rounded-full bg-[#4ade80] opacity-0 group-hover:opacity-100 transition delay-300"></div>
</div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-9xl text-black/5 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="col-span-1 border-grid p-10 bg-white group hover:bg-[#f3f4ef] transition-colors relative overflow-hidden">
<div className="relative z-10">
<h4 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-2">Avg. LTV</h4>
<div className="text-5xl font-semibold tracking-tighter mb-4">+3.2x</div>
<svg className="w-24 h-12 text-[#ffb8d0] stroke-current stroke-2 fill-none overflow-visible">
<path className="path-anim" d="M0 12 Q 12 12, 24 8 T 48 4 T 72 0" stroke-dasharray="100" stroke-dashoffset="100" style={{transition: 'stroke-dashoffset 1s ease-in-out'}}></path>
</svg>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-9xl text-black/5 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500" icon="solar:chart-square-linear"></iconify-icon>
</div>
</section>

<section className="border-b border-black/10 bg-[#0f1f12] text-[#f3f4ef] overflow-hidden py-12 md:py-0">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
<div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
<iconify-icon className="text-[#d4ff33] text-4xl mb-4" icon="solar:stars-minimalistic-bold"></iconify-icon>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Loved by Founders</h3>
<p className="text-white/60">We partner with YC alumni and Series A pioneers.</p>
</div>
<div className="col-span-1 md:col-span-8 relative overflow-hidden flex items-center bg-[#122212]">
<div className="flex animate-ticker whitespace-nowrap gap-8 p-8">
<div className="w-80 bg-white/5 border border-white/10 p-6 rounded-2xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80">"Celestials delivered a system that scaled with us from 10k to 1M users without breaking a sweat."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#ffb8d0]"></div>
<span className="text-xs font-mono">CTO, FinFlow</span>
</div>
</div>
<div className="w-80 bg-white/5 border border-white/10 p-6 rounded-2xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80">"The design precision is unmatched. They treat UI like engineering problems."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#4ade80]"></div>
<span className="text-xs font-mono">Founder, Stacked</span>
</div>
</div>
<div className="w-80 bg-white/5 border border-white/10 p-6 rounded-2xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80">"A rare combination of aesthetic taste and technical rigor. Highly recommended."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#d4ff33]"></div>
<span className="text-xs font-mono">CEO, Orbit</span>
</div>
</div>
<div className="w-80 bg-white/5 border border-white/10 p-6 rounded-2xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80">"Celestials delivered a system that scaled with us from 10k to 1M users without breaking a sweat."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#ffb8d0]"></div>
<span className="text-xs font-mono">CTO, FinFlow</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/10 bg-[#f3f4ef]">
<div className="grid grid-cols-1 md:grid-cols-3">

<div className="col-span-1 border-grid p-8 flex flex-col relative group bg-white">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-[#f3f4ef] flex items-center justify-center mb-4">
<iconify-icon icon="solar:bolt-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Sprint</h3>
<p className="text-sm text-black/60 mt-2">For MVP launches</p>
</div>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-black/20" icon="solar:check-circle-bold"></iconify-icon>
<span>2-week turnaround</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-black/20" icon="solar:check-circle-bold"></iconify-icon>
<span>Key screens &amp; flows</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-black/20" icon="solar:check-circle-bold"></iconify-icon>
<span>Design System lite</span>
</div>
</div>
<button className="w-full py-3 border border-black/10 rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition-colors">Start Sprint</button>
<div className="absolute inset-x-0 bottom-0 h-1 bg-[#d4ff33] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</div>

<div className="col-span-1 border-grid p-8 flex flex-col relative group bg-[#f3f4ef]">
<div className="absolute top-0 right-0 bg-[#d4ff33] text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Popular</div>
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-[#0f1f12] text-white flex items-center justify-center mb-4">
<iconify-icon icon="solar:rocket-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Launch</h3>
<p className="text-sm text-black/60 mt-2">Full product build</p>
</div>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-[#4ade80]" icon="solar:check-circle-bold"></iconify-icon>
<span>End-to-end Design</span>
</div>
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-[#4ade80]" icon="solar:check-circle-bold"></iconify-icon>
<span>React/Next.js Frontend</span>
</div>
<div className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-[#4ade80]" icon="solar:check-circle-bold"></iconify-icon>
<span>Interactive Prototypes</span>
</div>
</div>
<button className="w-full py-3 bg-[#0f1f12] text-white rounded-lg text-sm font-semibold shadow-lg hover:translate-y-[-2px] transition-transform">Get Started</button>
</div>

<div className="col-span-1 border-grid p-8 flex flex-col relative group bg-white">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-[#f3f4ef] flex items-center justify-center mb-4">
<iconify-icon icon="solar:infinity-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Scale</h3>
<p className="text-sm text-black/60 mt-2">Embedded team</p>
</div>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-black/20" icon="solar:check-circle-bold"></iconify-icon>
<span>Dedicated Designers</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-black/20" icon="solar:check-circle-bold"></iconify-icon>
<span>Monthly Iterations</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-black/20" icon="solar:check-circle-bold"></iconify-icon>
<span>A/B Testing</span>
</div>
</div>
<button className="w-full py-3 border border-black/10 rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition-colors">Contact Us</button>
<div className="absolute inset-x-0 bottom-0 h-1 bg-[#ffb8d0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#0f1f12] text-[#f3f4ef] py-24 px-4 md:px-8 overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4ff33] rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-wider mb-8">
<span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
                    OPENINGS FOR Q3
                </span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter-custom mb-6">
                    Ready to build the<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff33] to-[#4ade80]">next unicorn?</span>
</h2>
<div className="flex justify-center mt-12">
<button className="group relative inline-flex items-center gap-3 bg-white text-[#0f1f12] px-8 py-4 rounded-full font-semibold text-lg transition-transform active:scale-95 hover:-translate-y-1">
<span>Book a Discovery Call</span>
<div className="w-8 h-8 rounded-full bg-[#0f1f12] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</button>
</div>
</div>
<div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div>© 2024 Celestials Studio.</div>
</div>
</section>
</main>


    </>
  );
}
