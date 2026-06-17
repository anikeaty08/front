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



      // Simple Intersection Observer for Fade-in effects
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    
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
      
<div className="fixed inset-0 z-0 blueprint-grid"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="particle w-1 h-1 top-[40%] left-[20%] animate-[float-particle_8s_infinite]"></div>
<div className="particle w-2 h-2 top-[60%] left-[70%] animate-[float-particle_12s_infinite_1s]"></div>
<div className="particle w-1 h-1 top-[80%] left-[40%] animate-[float-particle_10s_infinite_2s]"></div>
<div className="particle w-3 h-3 top-[30%] left-[80%] animate-[float-particle_15s_infinite_3s]"></div>
<div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/5 to-transparent"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:atom-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413c-2.469-2.47-8.474-.468-13.413 4.47c-4.939 4.94-6.94 10.945-4.471 13.414c2.47 2.47 8.475.468 13.413-4.47" fill="currentColor" opacity=".3"></path><path d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47c4.939 4.94 6.94 10.945 4.471 13.414c-2.47 2.47-8.475.468-13.413-4.47" fill="currentColor" opacity=".3"></path><path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" fill="currentColor"></path></svg>
<span className="text-white font-medium tracking-tight text-sm">
            IPS VANGUARD
            <span className="text-zinc-600">|</span>
            HYSYS 3.0
          </span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">
            CAPABILITIES
          </a>
<a className="hover:text-white transition-colors" href="#roadmap">
            D-E-C-R-A-U KIT
          </a>
<a className="hover:text-white transition-colors" href="#checkout">
            LICENSE
          </a>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-20 text-center">
<div className="fade-in-section is-visible max-w-4xl mx-auto space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[11px] uppercase tracking-wider font-semibold">
<svg aria-hidden="true" data-icon="solar:verified-check-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path></svg>
          Certified Audit Protocol
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
          HYSYS is not a
          <br/>
          drawing tool;
          <br/>
<span className="font-serif-italic text-zinc-500 block mt-2 font-light">
            it is your Capital Decision Engine.
          </span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed blur-in-text" style={{animationDelay: '0.2s'}}>
          Acquire Protocol v3.0 and the executable [CORE]. Certify the integrity
          of your models with the 32-criteria standard.
        </p>

<div className="flex flex-col items-center gap-5 mt-10">

<div className="flex items-center gap-2 text-amber-500 text-xs font-mono bg-amber-500/5 px-3 py-1 rounded border border-amber-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
            Only 5 licenses available this week at a reduced price
          </div>

<a className="relative group inline-flex items-center justify-center" href="#checkout">
<div className="beam-border"></div>
<button className="relative bg-[#0A0A0A] text-white px-10 py-4 rounded-lg font-medium text-sm tracking-wide z-10 transition-transform active:scale-95 border border-white/10 group-hover:bg-[#111]">
              Acquire Protocol + [CORE] (USD $97)
            </button>
</a>
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            Includes [CORE] Installation Kit
          </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative bg-[#050505]" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="font-serif-italic text-4xl text-white mb-16 text-center">
          The Value of the [CORE]
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 rounded-xl bg-[#080808] border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" data-icon="solar:clipboard-check-broken" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 13.4l1.714 1.6L15 11" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9" strokeLinecap="round"></path><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></path></g></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded bg-blue-900/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<svg aria-hidden="true" data-icon="solar:checklist-minimalistic-broken" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" strokeLinejoin="round"></path><path d="M13 9h5m-5 7h5m4-4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></path></g></svg>
</div>
<h3 className="text-xl text-white font-serif-italic mb-2">
                  32-Criteria Matrix
                </h3>
<p className="text-zinc-500 text-sm max-w-sm blur-in-text">
                  Automated checklists for D-E-C-R-A-U Kits. Ensure instant
                  regulatory compliance before human review.
                </p>
</div>
<div className="mt-8 flex gap-2 font-mono text-[10px] text-zinc-600">
<div className="border border-blue-900/30 px-2 py-1 rounded bg-blue-900/10 text-blue-400">
                  Auto-Check: ON
                </div>
<div className="border border-zinc-800 px-2 py-1 rounded bg-black">
                  32/32 Passed
                </div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-xl bg-[#080808] border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-emerald-900/20 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<svg aria-hidden="true" data-icon="solar:calculator-minimalistic-broken" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0l-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl text-white font-serif-italic mb-2">
                SRL Calculator
              </h3>
<p className="text-zinc-500 text-sm blur-in-text">
                Tool to assign the Simulation Readiness Level (1-9).
              </p>
<div className="mt-8 font-mono text-3xl text-emerald-500 font-bold tracking-tighter flex items-center gap-2">
                SRL-9
                <span className="text-[10px] text-emerald-800 font-normal uppercase border border-emerald-900 px-1 rounded">
                  Ready
                </span>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-xl bg-[#080808] border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-indigo-900/20 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
<svg aria-hidden="true" data-icon="solar:code-circle-broken" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></path><path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path></g></svg>
</div>
<h3 className="text-xl text-white font-serif-italic mb-2">
                Python/API Scripts
              </h3>
<p className="text-zinc-500 text-sm blur-in-text">
                Automation to audit residuals and extract data without opening
                HYSYS.
              </p>
<div className="mt-6 bg-black p-2 rounded border border-white/5 font-mono text-[8px] text-zinc-500">
                import hysys.api as hys
                
                model.audit(tol=1e-4)
              </div>
</div>
</div>

<div className="md:col-span-2 rounded-xl bg-[#080808] border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors flex items-center justify-between">
<div>
<h3 className="text-xl text-white font-serif-italic mb-1">
                Legal Shield (Kit U)
              </h3>
<p className="text-zinc-500 text-sm blur-in-text">
                Humility Module to protect the engineer's liability.
              </p>
</div>
<div className="opacity-80">
<svg aria-hidden="true" data-icon="solar:shield-user-broken" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="9" r="2"></circle><path d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"></path><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994" strokeLinecap="round"></path></g></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="roadmap">

<svg className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-32 h-full hidden md:block z-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 800">
<path className="noodle-line" d="M50 0 C 50 150, 80 250, 50 400 C 20 550, 50 650, 50 800" fill="none" opacity="0.5" stroke="url(#grad1)" strokeWidth="1.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="font-serif-italic text-4xl text-white mb-20 text-center">
          The D-E-C-R-A-U Methodology
        </h2>
<div className="space-y-24">

<div className="relative flex flex-col md:flex-row items-center gap-12 group">
<div className="md:w-1/2 text-right order-2 md:order-1">
<h3 className="text-2xl text-white font-medium mb-2">
<span className="text-blue-500">D</span>
                efinition of Basis
              </h3>
<p className="text-zinc-500 leading-relaxed">
                Configuration of fluid properties environment. Hypothetical
                component selection and validation of TBP/D86 distillation
                curves.
              </p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-blue-500 flex items-center justify-center text-blue-500 font-mono text-xs z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              01
            </div>
<div className="md:w-1/2 order-3 md:order-3 pl-8 md:pl-0">
<div className="bg-zinc-900/50 p-4 rounded border border-white/5 font-mono text-[10px] text-zinc-400">
                &gt; KIT_D: Import Assays
                
                &gt; Status:
                <span className="text-emerald-500">Normalized</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-12 group">
<div className="md:w-1/2 order-2 md:order-3">

<h3 className="text-2xl text-white font-medium mb-2">
<span className="text-blue-500">E</span>
                quipment Specification
              </h3>
<p className="text-zinc-500 leading-relaxed">
                Preliminary heuristic sizing. Assignment of pressure drops and
                real, non-ideal adiabatic efficiencies.
              </p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center text-zinc-500 font-mono text-xs z-20 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
              02
            </div>
<div className="md:w-1/2 order-3 md:order-1 text-right pr-8 md:pr-0">
<div className="inline-block bg-zinc-900/50 p-4 rounded border border-white/5 font-mono text-[10px] text-zinc-400 text-left">
                &gt; HE-100: DeltaP Check
                
                &gt; U-Value:
                <span className="text-amber-500">Calculated</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-12 group">
<div className="md:w-1/2 text-right order-2 md:order-1">
<h3 className="text-2xl text-white font-medium mb-2">
<span className="text-blue-500">C</span>
                onvergence Logic
              </h3>
<p className="text-zinc-500 leading-relaxed">
                Closing recycle loops. Adjustment of solver tolerances and
                manipulation of Tear Variables.
              </p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center text-zinc-500 font-mono text-xs z-20 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
              03
            </div>
<div className="md:w-1/2 order-3 md:order-3 pl-8 md:pl-0">
<div className="bg-zinc-900/50 p-4 rounded border border-white/5 font-mono text-[10px] text-zinc-400">
                &gt; SOLVER: Active
                
                &gt; Iterations: 12 [Converged]
              </div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-12 group">
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-2xl text-white font-medium mb-2">
<span className="text-blue-500">R</span>
                eporting Data
              </h3>
<p className="text-zinc-500 leading-relaxed">
                Generation of Process Data Sheets (PDS) and formatted stream
                tables for detailed engineering.
              </p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center text-zinc-500 font-mono text-xs z-20 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
              04
            </div>
<div className="md:w-1/2 order-3 md:order-1 text-right pr-8 md:pr-0">
<svg aria-hidden="true" data-icon="solar:document-text-broken" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 12h1m7 0h-4m4-4h-1m-3 0H8m0 8h5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="relative flex flex-col items-center gap-4 text-center mt-12">
<div className="h-12 w-px bg-zinc-800"></div>
<p className="text-zinc-600 text-sm">
              ...Followed by
              <span className="text-white">Audit (05)</span>
              and
              <span className="text-white">Utility (06)</span>
</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-[#080808] border-t border-white/5 relative overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="font-serif-italic text-4xl text-white mb-4">
              Real-Time Technical Training
            </h2>
<p className="text-zinc-400 text-sm max-w-lg">
              5-day money-back guarantee if the protocol fails to detect
              inconsistencies in your current models.
            </p>
</div>
<a className="flex items-center gap-2 text-white bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full hover:bg-red-600/20 transition-colors text-xs tracking-wide" href="https://www.youtube.com/@IPSVanguard" target="_blank">
<svg aria-hidden="true" data-icon="solar:play-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" fill="currentColor" fill-rule="evenodd"></path></svg>
            @IPSVanguard
          </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="aspect-[9/16] bg-zinc-900/50 rounded-xl border border-white/10 relative group hover:border-white/30 transition-colors cursor-pointer overflow-hidden block" href="https://youtube.com/shorts/L3HKkmtriM4?si=jmScjI2AtYO9uwz4" target="_blank">
<img alt="Short Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex group-hover:opacity-100 transition-opacity z-10 cursor-pointer opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="event.preventDefault();event.stopPropagation();window.open('https://youtube.com/shorts/L3HKkmtriM4?si=f6SnaveHT2T303f1', '_blank');" role="button">
<svg aria-hidden="true" className="" data-icon="solar:play-stream-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" fill="currentColor" fill-rule="evenodd"></path><path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" fill="currentColor"></path></svg>
</div><div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-2 rounded-full bg-zinc-900/60 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800/80 hover:border-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg hover:shadow-blue-900/20" onclick="event.preventDefault();event.stopPropagation();window.open('https://youtube.com/shorts/L3HKkmtriM4?si=f6SnaveHT2T303f1', '_blank');" role="button" title="Open Video in New Tab">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[9px] uppercase font-bold text-red-500 mb-1">
                SHORTS
              </div>
<p className="text-white text-xs leading-tight font-medium">
                Peng-Robinson vs SRK
              </p>
</div>
</a>
<a className="aspect-[9/16] bg-zinc-900/50 rounded-xl border border-white/10 relative group hover:border-white/30 transition-colors cursor-pointer overflow-hidden block" href="https://youtube.com/shorts/0ozq5vEfKW4?si=tt1hu7GdrwkAJFu2" target="_blank">
<img alt="Short Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<svg aria-hidden="true" data-icon="solar:play-stream-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" fill="currentColor" fill-rule="evenodd"></path><path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[9px] text-red-500 font-bold uppercase mb-1">
                SHORTS
              </div>
<p className="text-white text-xs leading-tight font-medium">
                Equation of State Check
              </p>
</div>
</a>
<a className="aspect-[9/16] bg-zinc-900/50 rounded-xl border border-white/10 relative group hover:border-white/30 transition-colors cursor-pointer overflow-hidden block" href="https://youtube.com/shorts/9yVXedUc6AY?si=RzhaSM9s224jexsA" target="_blank">
<img alt="Short Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<svg aria-hidden="true" data-icon="solar:play-stream-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" fill="currentColor" fill-rule="evenodd"></path><path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[9px] text-red-500 font-bold uppercase mb-1">
                SHORTS
              </div>
<p className="text-white text-xs leading-tight font-medium">
                Audit in 15 Minutes
              </p>
</div>
</a>
<a className="aspect-[9/16] bg-zinc-900/50 rounded-xl border border-white/10 relative group hover:border-white/30 transition-colors cursor-pointer overflow-hidden block" href="https://youtube.com/shorts/EdIQqG6V3-I?si=AOUhtMq-I6olk5uN" target="_blank">
<img alt="Short Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<svg aria-hidden="true" data-icon="solar:play-stream-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" fill="currentColor" fill-rule="evenodd"></path><path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[9px] text-red-500 font-bold uppercase mb-1">
                SHORTS
              </div>
<p className="text-white text-xs leading-tight font-medium">
                False Positives in HYSYS
              </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#080808] border-y border-white/5">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="bg-[#050505] p-8 rounded-xl border border-white/5 relative">
<span className="iconify absolute top-6 right-6 text-zinc-800 w-8 h-8" data-icon="solar:quote-up-bold"></span>
<p className="font-serif-italic text-xl text-zinc-200 mb-6 leading-relaxed">
            "The HYSYS Protocol 3.0 is the gold standard for simulation audits.
            We have reduced engineering review time by 40%."
          </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-zinc-600 to-zinc-800"></div>
</div>
<div>
<div className="text-white font-medium text-sm">
                Dr. Elena Petrova
              </div>
<div className="text-zinc-500 text-xs">
                Senior Process Lead, Shell
              </div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 flex items-center justify-center text-blue-500">
<svg aria-hidden="true" data-icon="solar:shield-check-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082" fill="currentColor" opacity=".5"></path><path d="M15.06 10.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" fill="currentColor"></path></svg>
</div>
<div>
<h3 className="text-2xl text-white font-serif-italic mb-2">
              Findings Guarantee
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              5-day full refund if the protocol fails to detect at least 3
              serious inconsistencies in your current simulation models. No
              questions asked.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto space-y-4">
<h3 className="text-white font-medium text-lg mb-8">
          Frequently Asked Questions
        </h3>
<details className="group bg-[#0A0A0A] border border-white/5 rounded-lg open:border-blue-900/30 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-5 text-zinc-300 font-medium">
            What is the difference with the Amazon version?
            <svg aria-hidden="true" data-icon="solar:alt-arrow-down-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m19 9l-7 6l-7-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-white/5 pt-4">
            The [CORE] is the practical tool that accompanies the theory. It
            includes an executable kit with the 32-Criteria Matrix, SRL
            Calculator, and Python scripts for immediate implementation,
            allowing model audits without manual intervention.
          </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/5 rounded-lg">
<summary className="flex justify-between items-center cursor-pointer p-5 text-zinc-300 font-medium">
            Does it work with older versions of HYSYS?
            <svg aria-hidden="true" data-icon="solar:alt-arrow-down-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m19 9l-7 6l-7-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-white/5 pt-4">
            Yes, the principles are universal. Source files are saved in XML
            format compatible from v8.8 onwards.
          </div>
</details>
</div>
</section>

<section className="py-24 px-6 relative bg-gradient-to-t from-blue-900/5 to-transparent" id="checkout">
<div className="max-w-lg mx-auto bg-[#080808] border border-white/10 rounded-2xl p-8 shadow-2xl relative">

<div className="mb-8 border-b border-white/5 pb-6">
<div className="flex justify-between items-end mb-2">
<h2 className="text-white text-xl font-medium">Secure Checkout</h2>
<span className="text-blue-400 font-mono text-lg font-bold">
              USD $97
            </span>
</div>
<p className="text-xs text-zinc-500">
            Lifetime License • Protocol v3.0 • Single User
          </p>
</div>

<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
              Full Name
            </label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Eng. John Doe" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
              Corporate Email
            </label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="john.doe@company.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
                Company
              </label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
                Job Title
              </label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" type="text"/>
</div>
</div>
<div className="pt-4">
<a className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded transition-colors flex items-center justify-center gap-2" href="#">
<svg aria-hidden="true" data-icon="solar:card-send-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" fill="currentColor" fill-rule="evenodd"></path><path d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4" fill="currentColor"></path><path clip-rule="evenodd" d="M10 20h4c1.056 0 1.964 0 2.75-.026v-1.738a2.25 2.25 0 0 1-1.341-3.827l2-2a2.25 2.25 0 0 1 3.182 0l1.403 1.403Q22 12.988 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4.75-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z" fill="currentColor" fill-rule="evenodd"></path></svg>
              Proceed to Payment
            </a>
</div>
</form>
<div className="mt-6 flex items-center justify-center gap-2 text-zinc-600 text-xs border-t border-white/5 pt-4">
<svg aria-hidden="true" data-icon="solar:lock-keyhole-minimalistic-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM12 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
          Secure Payment via Stripe (256-bit SSL)
        </div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center">
<div className="flex items-center justify-center gap-2 mb-4 opacity-50">
<svg aria-hidden="true" data-icon="solar:copyright-outline" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"><path d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5"></path><path d="M12.286 8.75c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278"></path></g></svg>
<span className="text-zinc-500 text-sm">
          2023 IPS Vanguard. Engineering Intelligence.
        </span>
</div>
<div className="flex justify-center gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Data Privacy</a>
<a className="hover:text-zinc-400" href="#">License Terms</a>
<a className="hover:text-zinc-400" href="#">Technical Support</a>
<a className="hover:text-zinc-400" href="mailto:sales@ipsvanguard.com">
          sales@ipsvanguard.com
        </a>
</div>
</footer>


    </>
  );
}
