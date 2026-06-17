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



      document.addEventListener('DOMContentLoaded', () => { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); });
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="20" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
<span className="text-white font-semibold tracking-tight text-sm">
            Canonical3
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#problem">
            Problem
          </a>
<a className="hover:text-white transition-colors" href="#architecture">
            Architecture
          </a>
<a className="hover:text-white transition-colors" href="#vision">
            Vision
          </a>
<a className="hover:text-white transition-colors" href="#whitepaper">
            Whitepaper
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#">
            Log in
          </a>
<a className="bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-200 transition-colors" href="#">
            Get Started
          </a>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden border-white/5 border-b pt-32 pb-24 relative">
<div className="absolute inset-0 grid-bg pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none animate-float"></div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 reveal visible">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-gray-300">
            Whitepaper 1.0 Released
          </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter mb-6 reveal delay-100 visible" style={{}}>
          The Canonical3 Layer
          <br/>
<span className="text-gray-500">for AI Data</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light reveal delay-200 visible">
          Transform raw, fragmented inputs into canonical, agent-ready
          intelligence. The missing primitive for the AI agent economy.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300 visible">
<a className="h-10 px-6 rounded-lg bg-white text-black text-sm font-medium flex items-center justify-center hover:bg-gray-200 transition-colors w-full sm:w-auto" href="#whitepaper">
            Read the Whitepaper
          </a>
<a className="h-10 px-6 rounded-lg border border-white/10 bg-transparent text-white text-sm font-medium flex items-center justify-center hover:bg-white/5 transition-colors w-full sm:w-auto" href="#">
            Explore Documentation
            <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</header>

<section className="bg-[#020202] pt-32 pb-32" id="whitepaper">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col gap-2 mb-16 text-center reveal visible">
<span className="uppercase text-xs text-purple-500 tracking-widest font-mono">Executive Layer</span>
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight">Canonical Schema</h2>
</div>
<div className="space-y-24">

<div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-2xl overflow-hidden reveal">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full animate-float"></div>
<div className="relative z-10">
<h3 className="uppercase flex items-center gap-2 text-xs text-gray-400 tracking-wider font-mono mb-4">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
                Abstract
              </h3>
<p className="text-base text-gray-200 leading-7 font-light">
                The AI agent economy requires a universal data foundation.
                Today’s data is unstructured, inconsistent, and incompatible
                across systems. Canonical3 introduces the
                <strong>Canonical Layer</strong>
                : a normalization framework for transforming documents,
                datasets, and sensor signals into canonical, queryable,
                interoperable intelligence.
              </p>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="flex items-center gap-3 mb-4">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono text-white">
                  1
                </span>
<h3 className="text-xl text-white font-semibold tracking-tight">
                  The Reality of AI Failure
                </h3>
</div>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                AI agents depend entirely on the data they consume. While models
                have advanced rapidly, the data feeding them has not. There is
                no universal schema, no consistent normalization, no canonical
                layer.
              </p>
<div className="mt-8 flex items-center gap-4">
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs font-mono text-gray-500">
                  SYSTEM STATUS
                </span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="flex justify-between items-end mb-6">
<div>
<div className="text-4xl font-semibold text-white tracking-tighter">
                    91%
                  </div>
<div className="text-xs text-red-400 mt-1 font-medium">
                    Deployment Failure Rate
                  </div>
</div>
<div className="text-right">
<div className="text-xs text-gray-500 mb-1">Primary Cause</div>
<div className="text-sm text-gray-300 font-medium bg-white/5 px-2 py-1 rounded border border-white/5">
                    Incoherent Input Data
                  </div>
</div>
</div>

<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-400">Model Capability</span>
<span className="text-green-400">High</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-900 to-green-500 w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-400">Data Reliability</span>
<span className="text-red-400">Critical</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-900 to-red-500 w-[15%]"></div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-8 reveal">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono text-white">
                2
              </span>
<h3 className="text-xl text-white font-semibold tracking-tight">
                The Canonical Gap
              </h3>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent reveal">
<div className="h-full bg-[#050505] rounded-xl p-6 border border-white/5 relative overflow-hidden">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:file-question" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2zm6-5h.01"></path>
<path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>
</g>
</svg>
</div>
<span className="text-[10px] font-mono border border-red-500/20 text-red-400 px-2 py-1 rounded bg-red-500/5">
                      UNSTRUCTURED
                    </span>
</div>
<h4 className="text-white font-medium mb-2">
                    Fragmented Knowledge
                  </h4>
<p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    Operational knowledge lives in PDFs, slides, and emails
                    without typed attributes or lineage.
                  </p>

<div className="bg-black/50 rounded border border-white/5 p-3 font-mono text-[10px] text-gray-400 leading-loose">
<div className="opacity-50 select-none">
                      File: manual_v2.pdf Type: application/pdf Content:
                      &lt;binary_blob&gt;...
                    </div>
<div className="text-red-400 mt-2 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x-circle" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9l-6 6m0-6l6 6"></path>
</g>
</svg>
                      Parsing Failed: No Schema
                    </div>
</div>
</div>
</div>

<div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent reveal delay-100">
<div className="h-full bg-[#050505] rounded-xl p-6 border border-white/5 relative overflow-hidden">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:radio" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478"></path>
<circle cx="12" cy="12" r="2"></circle>
</g>
</svg>
</div>
<span className="text-[10px] font-mono border border-red-500/20 text-red-400 px-2 py-1 rounded bg-red-500/5">
                      NOISY
                    </span>
</div>
<h4 className="text-white font-medium mb-2">Sensor Chaos</h4>
<p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    GPS and IoT feeds produce raw signals lacking canonical
                    semantics or context.
                  </p>

<div className="bg-black/50 rounded border border-white/5 p-3 font-mono text-[10px] text-gray-400 leading-loose">
<div className="opacity-50 select-none">
                      Stream: gps_001 34.0522, -118.2437, 12m 34.0523,
                      -118.2438, null
                    </div>
<div className="text-red-400 mt-2 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-triangle" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                      Alert: Context Missing
                    </div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-8 reveal">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono text-white">
                3
              </span>
<h3 className="text-xl text-white font-semibold tracking-tight">
                Applications
              </h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal delay-100">

<div className="group p-4 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-default">
<div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:stethoscope" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
<path d="M8 15a6 6 0 0 0 12 0v-3"></path>
<circle cx="20" cy="10" r="2"></circle>
</g>
</svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">
                  Healthcare Triage
                </h4>
<p className="text-xs text-gray-500">
                  Normalizing patient history documents.
                </p>
</div>

<div className="group p-4 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-default">
<div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
</g>
</svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">Robotics</h4>
<p className="text-xs text-gray-500">
                  Standardizing SLAM and spatial data.
                </p>
</div>

<div className="group p-4 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-default">
<div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:scale" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
</g>
</svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">Compliance</h4>
<p className="text-xs text-gray-500">
                  Automating policy verification rules.
                </p>
</div>

<div className="group p-4 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-default">
<div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:truck" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</g>
</svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">
                  Supply Chain
                </h4>
<p className="text-xs text-gray-500">
                  Unifying logistics manifests.
                </p>
</div>

<div className="group p-4 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-default">
<div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:brain-circuit" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</g>
</svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">
                  Enterprise Brain
                </h4>
<p className="text-xs text-gray-500">
                  Vectorizing internal knowledge bases.
                </p>
</div>

<div className="group p-4 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-default">
<div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-pink-400 iconify--lucide" data-icon="lucide:globe-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">Spatial Ops</h4>
<p className="text-xs text-gray-500">
                  Merging satellite and drone telemetry.
                </p>
</div>
</div>
</div>

<div id="vision">
<div className="flex items-center gap-3 mb-8 reveal">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono text-white">
                4
              </span>
<h3 className="text-xl text-white font-semibold tracking-tight">
                The AI Infrastructure Stack
              </h3>
</div>
<div className="border border-white/10 rounded-2xl overflow-hidden bg-[#050505] reveal delay-100">

<div className="p-6 border-b border-white/5 bg-white/[0.02]">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
<span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    Layer 3: Orchestration
                  </span>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[10px] text-white font-bold" title="Virtuals">
                      V
                    </div>
<div className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[10px] text-white font-bold" title="Other">
                      A
                    </div>
</div>
</div>
<div className="flex justify-between items-center">
<h4 className="text-white font-medium">Agents &amp; Models</h4>
<span className="text-xs text-gray-500">
                    Consumes Intelligence
                  </span>
</div>
</div>

<div className="h-4 bg-[#050505] relative flex justify-center">
<div className="w-px h-full bg-white/10"></div>
</div>

<div className="p-6 border-y border-white/5 bg-white/[0.02]">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
<span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    Layer 2: Infrastructure
                  </span>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[10px] text-white font-bold" title="Render">
                      R
                    </div>
<div className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[10px] text-white font-bold" title="Bittensor">
                      B
                    </div>
</div>
</div>
<div className="flex justify-between items-center">
<h4 className="text-white font-medium">
                    Compute &amp; Transport
                  </h4>
<span className="text-xs text-gray-500">
                    Processes &amp; Moves Bits
                  </span>
</div>
</div>

<div className="h-4 bg-[#050505] relative flex justify-center">
<div className="w-px h-full bg-purple-500/50"></div>
</div>

<div className="p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-purple-900/10 pointer-events-none"></div>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
<span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
                      Layer 1: The Canonical Layer
                    </span>
<div className="w-8 h-8 rounded-full bg-white text-black border border-white flex items-center justify-center text-[10px] font-bold">
                      C3
                    </div>
</div>
<div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
<div>
<h4 className="text-white text-lg font-semibold tracking-tight">
                        Canonical3
                      </h4>
<p className="text-sm text-gray-400 mt-1 max-w-md">
                        The universal primitive. Normalizes inputs before they
                        touch compute or models.
                      </p>
</div>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition-colors border border-white/5">
                      View Integration Specs
                    </button>
</div>
</div>
</div>
</div>
<p className="mt-8 text-sm text-center text-gray-500">
              Canonical3 unifies the stack by providing the trusted memory layer
              for all upstream agents.
            </p>
</div>

<div className="border-t border-white/10 pt-16 reveal">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:coins" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path>
<path d="m16.71 13.88l.7.71l-2.82 2.82"></path>
</g>
</svg>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">
                  Tokenized Incentive Layer
                </h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  Creators of canonical datasets receive perpetual reward flows.
                  Each query generates token-based yield routed to canonical
                  data owners, creating a self-sustaining economy of
                  high-quality intelligence.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 border-t border-white/10 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 reveal">
          Power the Agent Economy
        </h2>
<p className="text-gray-400 mb-10 max-w-xl mx-auto reveal delay-100">
          Without canonical data, agents remain unreliable. Canonical3 is to AI
          data what normalization is to relational databases.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 reveal delay-200">
<button className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors">
            Start Canonicalizing
          </button>
<button className="h-12 px-8 rounded-lg border border-white/10 bg-transparent text-white font-medium hover:bg-white/5 transition-colors">
            Contact Sales
          </button>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
<span>© 2024 Canonical3. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
