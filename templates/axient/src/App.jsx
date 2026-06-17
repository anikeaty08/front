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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob opacity-40"></div>
<div className="absolute top-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000 opacity-40"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000 opacity-40"></div>
</div>

<div className="max-w-[1280px] mx-auto border-x border-zinc-200 bg-zinc-50/50 min-h-screen flex flex-col relative box-border z-10 backdrop-blur-[2px]">

<nav className="sticky top-0 z-50 bg-zinc-50/70 backdrop-blur-xl border-b border-zinc-200/50 h-20 flex items-center justify-between px-6 md:px-10 transition-all duration-300">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-6 h-6">
<div className="absolute inset-0 bg-zinc-900 rounded-lg group-hover:rotate-90 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
<div className="absolute inset-0 bg-orange-500 rounded-lg rotate-45 scale-0 group-hover:scale-75 transition-transform duration-500 delay-100 opacity-50 blur-sm"></div>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-900">
            Axient
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors relative group" href="#services">
            Capabilities
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors relative group" href="#process">
            Workflow
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors relative group" href="#pricing">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Client Portal
          </button>
<button className="relative px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full overflow-hidden group glass-shine shadow-lg shadow-zinc-900/10">
<span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-block">
              Start Project
            </span>
<div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full opacity-30">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-flow"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent"></div>
</div>
<div className="max-w-4xl mx-auto text-center space-y-8 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-orange-200/50 text-orange-700 text-xs font-medium tracking-wide shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] backdrop-blur-sm animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            AXIENT V2 IS LIVE
          </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] drop-shadow-sm">
            Crafting digital reality for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-500 animate-pulse">
              future brands.
            </span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Axient combines high-fidelity design with robust engineering. We
            build scalable Framer sites and custom web applications.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="group relative w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white rounded-full font-medium shadow-xl shadow-zinc-900/10 overflow-hidden transition-transform hover:-translate-y-1">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
<span className="relative flex items-center gap-2">
                View Case Studies
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="group w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-600 rounded-full font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:shadow-lg hover:shadow-zinc-200/50 relative overflow-hidden">
<span className="relative z-10">Book a strategy call</span>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-200 bg-white/40 backdrop-blur-sm overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
<div className="marquee-container flex overflow-hidden">
<div className="marquee-content flex gap-16 px-8 items-center min-w-full">

<span className="text-xl font-bold tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              ACME
            </span>
<span className="text-xl font-medium tracking-tighter italic text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              morpheus
            </span>
<span className="text-xl font-semibold tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default flex gap-1 items-center">
<div className="w-2 h-2 bg-current rounded-full"></div>
              KINETIC
            </span>
<span className="text-xl font-bold tracking-wide text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              VORTEX
            </span>
<span className="text-xl font-medium tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default border px-1 border-current">
              BOX
            </span>

<span className="text-xl font-bold tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              ACME
            </span>
<span className="text-xl font-medium tracking-tighter italic text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              morpheus
            </span>
<span className="text-xl font-semibold tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default flex gap-1 items-center">
<div className="w-2 h-2 bg-current rounded-full"></div>
              KINETIC
            </span>
<span className="text-xl font-bold tracking-wide text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              VORTEX
            </span>
<span className="text-xl font-medium tracking-tight text-zinc-400/80xl font-bold text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              ACME
            </span>
<span className="text-xl font-medium tracking-tighter italic text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              morpheus
            </span>
<span className="text-xl font-semibold tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default flex gap-1 items-center">
<div className="w-2 h-2 bg-current rounded-full"></div>
              KINETIC
            </span>
<span className="text-xl font-bold tracking-wide text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default">
              VORTEX
            </span>
<span className="text-xl font-medium tracking-tight text-zinc-400/80 hover:text-zinc-900 transition-colors duration-500 cursor-default border px-1 border-current">
              BOX
            </span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-10 bg-zinc-50 border-b border-zinc-200 relative" id="process">
<div className="mb-16 max-w-3xl">
<span className="text-xs font-mono text-orange-600 uppercase tracking-widest border border-orange-200 bg-orange-50 px-2 py-1 rounded mb-4 inline-block">
            The System
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            Precision Workflow
          </h2>
<p className="text-base text-zinc-500">
            We don't rely on guesswork. Our method is a rigorous, six-step
            engineering process designed to eliminate risk and maximize impact.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center font-mono text-sm font-semibold text-zinc-600 border border-zinc-200">
                01
              </div>
<svg className="lucide lucide-microscope w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path d="M9 14h2"></path>
<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Technical Discovery
            </h3>
<p className="text-sm text-zinc-500 mb-4">
              Architecture planning, stack selection, and scalability
              assessment.
            </p>
<div className="flex gap-2 text-[10px] font-mono text-zinc-400 uppercase">
<span className="border border-zinc-100 bg-zinc-50 px-2 py-1 rounded">
                Audit
              </span>
<span className="border border-zinc-100 bg-zinc-50 px-2 py-1 rounded">
                Scope
              </span>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center font-mono text-sm font-semibold text-zinc-600 border border-zinc-200">
                02
              </div>
<svg className="lucide lucide-figma w-5 h-5 text-zinc-400 group-hover:text-pink-500 transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Atomic Design
            </h3>
<p className="text-sm text-zinc-500 mb-4">
              Creating component-based design systems for consistency.
            </p>
<div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 w-0 group-hover:w-2/3 transition-all duration-1000 ease-out"></div>
</div>
</div>

<div className="lg:col-span-2 group p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="flex flex-col md:flex-row gap-8 relative z-10">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-mono text-sm font-semibold text-white border border-zinc-700">
                    03
                  </div>
<span className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                    Development Phase
                  </span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">
                  Hybrid Engineering
                </h3>
<p className="text-sm text-zinc-400 mb-6 max-w-md">
                  Whether it's Framer for speed or Next.js for power, we write
                  clean, semantic code optimized for SEO and performance
                  markers.
                </p>
<div className="flex gap-2">
<div className="px-3 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-white flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                    React
                  </div>
<div className="px-3 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-white flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Framer Motion
                  </div>
</div>
</div>
<div className="flex-1 bg-zinc-950 rounded-xl border border-zinc-800 p-4 font-mono text-xs text-zinc-300 shadow-inner group-hover:scale-[1.02] transition-transform">
<div className="flex gap-1.5 mb-3 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
</div>
<p>
<span className="text-purple-400">export default</span>
<span className="text-blue-400">function</span>
<span className="text-yellow-200">AxientCore</span>
                  () {
                </p>
<p className="pl-4">
<span className="text-zinc-500">// Initialize system</span>
</p>
<p className="pl-4">
<span className="text-purple-400">const</span>
                  [state, setState] =
                  <span className="text-blue-300">useState</span>
                  (
                  <span className="text-green-300">'optimized'</span>
                  );
                </p>
<p className="pl-4">return (</p>
<p className="pl-8">
                  &lt;
                  <span className="text-orange-400">Performance</span>
                  mode={state} /&gt;
                </p>
<p className="pl-4">);</p>
<p>}</p>
</div>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center font-mono text-sm font-semibold text-zinc-600 border border-zinc-200">
                04
              </div>
<svg className="lucide lucide-shield-check w-5 h-5 text-zinc-400 group-hover:text-green-600 transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Quality Assurance
            </h3>
<p className="text-sm text-zinc-500">
              Automated testing, cross-browser verification, and accessibility
              scoring.
            </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center font-mono text-sm font-semibold text-zinc-600 border border-zinc-200">
                05
              </div>
<svg className="lucide lucide-rocket w-5 h-5 text-zinc-400 group-hover:text-orange-500 transition-colors" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Deployment</h3>
<p className="text-sm text-zinc-500">
              Zero-downtime deployment to Vercel or AWS edge networks.
            </p>
</div>
</div>
</section>

<section className="md:px-10 overflow-hidden bg-white border-zinc-200 border-b pt-24 pr-6 pb-24 pl-6 relative" id="services">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
<div className="absolute -right-20 top-20 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="mb-16">
<span className="text-xs font-mono text-blue-600 uppercase tracking-widest border border-blue-200 bg-blue-50 px-2 py-1 rounded mb-4 inline-block">
            Capabilities
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            Holistic Solutions
          </h2>
<p className="text-base text-zinc-500 max-w-2xl">
            End-to-end product ecosystem. From the first pixel to the final
            database query, we engineer sophisticated solutions for modern
            brands.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm ring-1 ring-zinc-200/50 mb-32">

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-layout-template w-5 h-5 text-zinc-500 group-hover:text-blue-600 transition-colors" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              Interface Design
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Atomic design systems and pixel-perfect UI kits built for
              scalability.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-cpu w-5 h-5 text-zinc-500 group-hover:text-purple-600 transition-colors" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              Frontend Engineering
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Performant React &amp; Next.js applications with complex state
              management.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-server w-5 h-5 text-zinc-500 group-hover:text-orange-600 transition-colors" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              Backend Architecture
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Robust API design, database modeling, and serverless
              infrastructure.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-smartphone w-5 h-5 text-zinc-500 group-hover:text-indigo-600 transition-colors" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              Native Mobile
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              React Native development for iOS and Android with shared
              codebases.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-box w-5 h-5 text-zinc-500 group-hover:text-pink-600 transition-colors" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              3D &amp; Motion
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Interactive WebGL experiences and advanced micro-interactions.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-zinc-500 group-hover:text-green-600 transition-colors" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a4 4 0 0 1-8 0"></path>
<path d="M3.103 6.034h17.794"></path>
<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              Headless Commerce
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Shopify Plus and Stripe integration with custom storefronts.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-file-text w-5 h-5 text-zinc-500 group-hover:text-yellow-600 transition-colors" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              CMS Integration
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Sanity or Contentful architecture for effortless content
              management.
            </p>
</div>

<div className="bg-white p-8 group hover:bg-zinc-50 transition-colors relative h-full">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 group-hover:border-zinc-200 transition-all duration-300">
<svg className="lucide lucide-line-chart w-5 h-5 text-zinc-500 group-hover:text-red-600 transition-colors" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">
              Growth Analytics
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Post-launch data analysis, A/B testing, and conversion
              optimization.
            </p>
</div>
</div>

<div className="mt-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Selected Work
              </span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-2">
                Case Studies
              </h2>
</div>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-2 group" href="#">
              View all projects
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-8">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 relative border border-zinc-200">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-zinc-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>

<div className="absolute inset-x-10 bottom-0 h-3/4 bg-white shadow-2xl rounded-t-xl opacity-90 group-hover:translate-y-2 transition-transform duration-500">
<div className="p-6 space-y-3">
<div className="w-1/3 h-2 bg-zinc-100 rounded"></div>
<div className="w-1/2 h-8 bg-zinc-100 rounded"></div>
<div className="flex gap-2 pt-4">
<div className="w-8 h-8 rounded-full bg-zinc-100"></div>
<div className="w-8 h-8 rounded-full bg-zinc-100"></div>
</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      Nova Finance
                    </h3>
<p className="text-sm text-zinc-500 mt-1">
                      DeFi Dashboard &amp; Identity
                    </p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      Fintech
                    </span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      2024
                    </span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden mb-6 relative border border-zinc-800">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-zinc-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<div className="w-24 h-24 border border-zinc-600 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-700">
<div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      Orbital AI
                    </h3>
<p className="text-sm text-zinc-500 mt-1">
                      Generative Model Interface
                    </p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      SaaS
                    </span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      2023
                    </span>
</div>
</div>
</div>
</div>

<div className="space-y-8 md:mt-16">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-orange-50 rounded-2xl overflow-hidden mb-6 relative border border-orange-100">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-orange-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="flex gap-2 mb-2">
<div className="h-2 w-8 bg-orange-200 rounded-full"></div>
<div className="h-2 w-4 bg-orange-200 rounded-full"></div>
</div>
<div className="h-32 bg-white rounded-lg shadow-lg border border-orange-100 p-4 group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-center mb-4">
<div className="h-8 w-8 bg-orange-100 rounded-full"></div>
<div className="h-2 w-12 bg-zinc-100 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-zinc-50 rounded"></div>
<div className="h-2 w-2/3 bg-zinc-50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors">
                      Lumina
                    </h3>
<p className="text-sm text-zinc-500 mt-1">
                      E-commerce Lighting Store
                    </p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      Shopify
                    </span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      2024
                    </span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 relative border border-zinc-200">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-zinc-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
<div className="w-48 h-12 bg-white rounded-lg shadow-md flex items-center px-4 gap-3 group-hover:translate-x-4 transition-transform duration-700 delay-75">
<div className="w-6 h-6 rounded bg-zinc-200"></div>
<div className="h-2 w-24 bg-zinc-100 rounded"></div>
</div>
<div className="w-48 h-12 bg-white rounded-lg shadow-md flex items-center px-4 gap-3 group-hover:-translate-x-4 transition-transform duration-700">
<div className="w-6 h-6 rounded bg-zinc-900"></div>
<div className="h-2 w-20 bg-zinc-100 rounded"></div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      Vanguard
                    </h3>
<p className="text-sm text-zinc-500 mt-1">
                      Logistics Management Platform
                    </p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      Product
                    </span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 border border-zinc-200 rounded">
                      2023
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-10 bg-zinc-50 text-zinc-900 border-t border-zinc-200 relative overflow-hidden" id="pricing">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Transparent investments.
              <span className="text-zinc-400">No hidden fees.</span>
</h2>
<p className="text-lg text-zinc-500 max-w-xl">
              Select the plan that aligns with your growth trajectory. Scale up
              or down as your engineering needs evolve.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

<div className="group bg-white rounded-3xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col h-full relative overflow-hidden shadow-sm">
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Startup</h3>
<p className="text-sm text-zinc-500 min-h-[40px]">
                  Perfect for small businesses and early-stage founders.
                </p>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium text-zinc-900 tracking-tight">
                    $2,900
                  </span>
<span className="text-sm text-zinc-500 font-medium">/mo</span>
</div>
<div className="mt-3 text-sm font-medium text-zinc-500 pb-4 border-b border-zinc-100">
<span className="text-zinc-900">1</span>
                  Active Request
                </div>
</div>

<div className="space-y-8 flex-1 relative z-10 mb-10">

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-purple-500 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Design &amp; Concept
                    </span>
</div>
<ul className="space-y-2.5">
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      UI/UX Design
                    </li>
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Brand Identity System
                    </li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-blue-500 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Development
                    </span>
</div>
<ul className="space-y-2.5">
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      React / Next.js
                    </li>
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Tailwind Implementation
                    </li>
</ul>
</div>
</div>

<div className="mt-auto pt-6 border-t border-zinc-100 space-y-3">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all" placeholder="Enter your company email" type="email"/>
<button className="w-full py-3.5 rounded-xl bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm">
                  Book intro call
                </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col h-full relative overflow-hidden shadow-xl shadow-zinc-200/50">
<div className="mb-8 relative z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-zinc-900">Growth</h3>
<div className="px-2.5 py-1 rounded bg-orange-50 border border-orange-100 text-[10px] font-bold tracking-wider text-orange-600 uppercase">
                    Most Popular
                  </div>
</div>
<p className="text-sm text-zinc-500 min-h-[40px]">
                  Ideal for mid-size teams ready to scale their sales
                  operations.
                </p>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium text-zinc-900 tracking-tight">
                    $5,800
                  </span>
<span className="text-sm text-zinc-500 font-medium">/mo</span>
</div>
<div className="mt-3 text-sm font-medium text-zinc-500 pb-4 border-b border-zinc-100">
<span className="text-zinc-900">2</span>
                  Active Requests
                </div>
</div>

<div className="space-y-8 flex-1 relative z-10 mb-10">

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-purple-500 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Everything in Startup
                    </span>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-orange-500 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Advanced Tech
                    </span>
</div>
<ul className="space-y-2.5">
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Headless CMS Integration
                    </li>
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Motion &amp; WebGL
                    </li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-yellow-500 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Strategy
                    </span>
</div>
<ul className="space-y-2.5">
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      SEO Technical Audit
                    </li>
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Analytics Setup
                    </li>
</ul>
</div>
</div>

<div className="mt-auto pt-6 border-t border-zinc-100 space-y-3">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all" placeholder="Enter your company email" type="email"/>
<button className="w-full py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10">
                  Start 14-day trial
                </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col h-full relative overflow-hidden shadow-sm">
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Elite</h3>
<p className="text-sm text-zinc-500 min-h-[40px]">
                  The ultimate all-in-one growth engine for larger enterprise
                  teams.
                </p>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium text-zinc-900 tracking-tight">
                    Custom
                  </span>
</div>
<div className="mt-3 text-sm font-medium text-zinc-500 pb-4 border-b border-zinc-100">
<span className="text-zinc-900">Multiple</span>
                  Active Requests
                </div>
</div>

<div className="space-y-8 flex-1 relative z-10 mb-10">

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-blue-400 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Enterprise Scale
                    </span>
</div>
<ul className="space-y-2.5">
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Dedicated Squad
                    </li>
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      SLA Guarantees
                    </li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-sm bg-red-500 rotate-45"></div>
<span className="text-sm font-medium text-zinc-700">
                      Security
                    </span>
</div>
<ul className="space-y-2.5">
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      SOC2 Compliance
                    </li>
<li className="flex items-center gap-2.5 text-sm text-zinc-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Priority Support
                    </li>
</ul>
</div>
</div>

<div className="mt-auto pt-6 border-t border-zinc-100 space-y-3">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all" placeholder="Enter your company email" type="email"/>
<button className="w-full py-3.5 rounded-xl bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm">
                  Contact Sales
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-10 relative z-10">
<div className="bg-zinc-900 rounded-[2.5rem] px-8 py-20 md:py-24 text-center relative overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all">

<div className="absolute top-0 left-0 w-80 h-80 bg-orange-600 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 translate-x-1/2 translate-y-1/2 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Ready to build the
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                extraordinary?
              </span>
</h2>
<p className="text-lg text-zinc-400 font-medium">
              Join forward-thinking companies building their future with Axient.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold hover:bg-orange-50 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Start your project
              </button>
<button className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all hover:border-zinc-500">
                Contact sales
              </button>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50/80 backdrop-blur-md pt-20 pb-10 px-6 md:px-10 border-t border-zinc-200 mt-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6 group cursor-pointer">
<div className="w-5 h-5 bg-zinc-900 rounded-md group-hover:rotate-180 transition-transform duration-700"></div>
<span className="text-base font-semibold tracking-tight">Axient</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs">
              Designing the interface of the future, one pixel at a time.
            </p>
</div>

<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Studio</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Work
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Services
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Framer Templates
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Terms
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Twitter
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors hover:translate-x-1 inline-block" href="#">
                  Instagram
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200">
<p className="text-xs text-zinc-400">
            © 2024 Axient Inc. All rights reserved.
          </p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-zinc-500 font-medium">
              Systems Nominal
            </span>
</div>
</div>
</footer>
</div>


    </>
  );
}
