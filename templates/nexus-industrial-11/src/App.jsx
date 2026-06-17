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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.05),rgba(255,255,255,0))]"></div>
<div className="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<header className="fixed top-0 w-full border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="text-zinc-50 font-semibold tracking-tighter text-base flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                NEXUS
            </div>
<nav className="hidden md:flex gap-8 text-xs font-medium">
<a className="hover:text-zinc-50 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-zinc-50 transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-zinc-50 transition-colors" href="#impact">Impact</a>
</nav>
<button className="bg-zinc-50 text-zinc-900 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors duration-200">
                Engage Team
            </button>
</div>
</header>

<main className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative">
<span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
</span>
            Pioneering the Industrial Energy Transition
        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-50 tracking-tighter max-w-4xl leading-[1.1] mb-6">
            Decarbonizing heavy industry through <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">renewable intelligence.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
            We are a specialized consortium of energy consultants engineering high-yield, low-emission frameworks for the global industrial sector. Data-driven strategy meets scalable execution.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-zinc-50 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 group">
                Explore Solutions 
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full text-sm font-medium border border-white/10 hover:bg-white/5 transition-all duration-200 text-zinc-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                View Operations
            </button>
</div>
</main>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative" id="expertise">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-xl">
<h2 className="text-3xl font-medium text-zinc-50 tracking-tight mb-4">Strategic Domains</h2>
<p className="text-sm leading-relaxed">Targeted consulting methodologies engineered for high-energy consumption environments transitioning to sustainable, resilient frameworks.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors" href="#">
                View all services <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300">
<iconify-icon className="text-zinc-50 group-hover:text-emerald-400 transition-colors" icon="solar:solar-panel-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 mb-3 tracking-tight">Utility-Scale Integration</h3>
<p className="text-sm leading-relaxed mb-8 flex-grow text-zinc-500">Seamlessly weaving large-scale solar, wind, and storage assets into existing industrial microgrids and heavy manufacturing processes.</p>
<div className="w-full h-px bg-white/5 mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 group-hover:text-zinc-50 transition-colors w-max" href="#">
                    Explore capability <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300">
<iconify-icon className="text-zinc-50 group-hover:text-emerald-400 transition-colors" icon="solar:factory-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 mb-3 tracking-tight">Industrial Decarbonization</h3>
<p className="text-sm leading-relaxed mb-8 flex-grow text-zinc-500">Comprehensive carbon auditing, Scope 1-3 reduction roadmaps, and structural implementation of carbon capture technologies.</p>
<div className="w-full h-px bg-white/5 mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 group-hover:text-zinc-50 transition-colors w-max" href="#">
                    Explore capability <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300">
<iconify-icon className="text-zinc-50 group-hover:text-emerald-400 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 mb-3 tracking-tight">Energy Economics</h3>
<p className="text-sm leading-relaxed mb-8 flex-grow text-zinc-500">Advanced financial modeling, PPA structuring, and ROI forecasting for complex, capital-intensive renewable retrofits.</p>
<div className="w-full h-px bg-white/5 mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 group-hover:text-zinc-50 transition-colors w-max" href="#">
                    Explore capability <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-white/[0.005]" id="methodology">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-zinc-50 tracking-tight mb-16 text-center">Consulting Lifecycle</h2>
<div className="relative">

<div className="absolute top-6 left-12 right-12 h-px bg-white/5 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-50 mb-6 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors relative z-10 mx-auto md:mx-0">
                            01
                        </div>
<h4 className="text-base font-medium text-zinc-50 mb-2 text-center md:text-left tracking-tight">Audit &amp; Baseline</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Granular analysis of current energy loads, thermal profiles, and infrastructure constraints.</p>
</div>

<div className="relative group">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-50 mb-6 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors relative z-10 mx-auto md:mx-0">
                            02
                        </div>
<h4 className="text-base font-medium text-zinc-50 mb-2 text-center md:text-left tracking-tight">System Design</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Engineering customized renewable matrixes tailored for specific continuous-process operations.</p>
</div>

<div className="relative group">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-50 mb-6 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors relative z-10 mx-auto md:mx-0">
                            03
                        </div>
<h4 className="text-base font-medium text-zinc-50 mb-2 text-center md:text-left tracking-tight">Capital Strategy</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Securing green financing, negotiating power agreements, and optimizing tax equities.</p>
</div>

<div className="relative group">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-50 mb-6 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors relative z-10 mx-auto md:mx-0">
                            04
                        </div>
<h4 className="text-base font-medium text-zinc-50 mb-2 text-center md:text-left tracking-tight">Execution &amp; M&amp;V</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">Project oversight and persistent Measurement &amp; Verification to guarantee modeled yields.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="impact">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<h2 className="text-3xl font-medium text-zinc-50 tracking-tight mb-6">Quantifiable Climate Action</h2>
<p className="text-sm leading-relaxed mb-8 text-zinc-400">
                    We transcend theoretical reporting to engineer tangible outcomes. Our strategic deployments are actively managing gigawatts of clean energy infrastructure and removing millions of metric tons of CO2e from global industrial supply chains.
                </p>
<div className="inline-flex items-center gap-3 text-xs font-medium text-zinc-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Methodologies aligned with SBTi standards
                </div>
</div>
<div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-zinc-50 tracking-tighter mb-1">4.2<span className="text-xl text-zinc-500 font-medium ml-1">GW</span></div>
<div className="text-xs font-medium text-zinc-500">Renewable Capacity Modeled</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-zinc-50 tracking-tighter mb-1">12<span className="text-xl text-zinc-500 font-medium ml-1">M</span></div>
<div className="text-xs font-medium text-zinc-500">Tons CO2e Reduction Planned</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-zinc-50 tracking-tighter mb-1">$8<span className="text-xl text-zinc-500 font-medium ml-1">B+</span></div>
<div className="text-xs font-medium text-zinc-500">Capital Deployment Structured</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-zinc-50 tracking-tighter mb-1">45<span className="text-xl text-emerald-400 font-medium ml-1">+</span></div>
<div className="text-xs font-medium text-zinc-500">Heavy Industrial Partners</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-zinc-50 tracking-tight mb-3">Initiate a Dialogue</h2>
<p className="text-sm text-zinc-400">Connect with our senior partners to evaluate your facility's operational transition pathway.</p>
</div>
<form className="space-y-5 bg-zinc-950/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300 ml-1">Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-600" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300 ml-1">Organization</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-600" placeholder="Acme Industrials" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300 ml-1">Primary Objective</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none cursor-pointer outline-none">
<option className="bg-zinc-900">Utility-Scale Renewable Integration</option>
<option className="bg-zinc-900">Scope 1-3 Emissions Auditing</option>
<option className="bg-zinc-900">Energy Market Economics &amp; PPAs</option>
<option className="bg-zinc-900">General Consultation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300 ml-1">Current Energy Load Profile (Optional)</label>
<div className="flex items-center gap-4 bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-2">
<span className="text-xs text-zinc-500 w-12">&lt; 10MW</span>
<input className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" max="100" min="1" type="range" value="50"/>
<span className="text-xs text-zinc-500 w-12 text-right">&gt; 100MW</span>
</div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-white/20 bg-zinc-900 group-hover:border-emerald-500/50 mt-0.5 transition-colors shrink-0">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="text-emerald-400 opacity-0 peer-checked:opacity-100 transition-opacity absolute" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                            I consent to Nexus processing my data to respond to this inquiry in accordance with the Privacy Policy.
                        </span>
</label>
</div>
<button className="w-full bg-zinc-50 text-zinc-900 py-2.5 mt-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2" type="button">
                    Submit Inquiry
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-8 px-6 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-zinc-50 font-semibold tracking-tighter text-sm flex items-center gap-2 opacity-80">
<iconify-icon className="text-zinc-500" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                NEXUS
            </div>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Insights</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Careers</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Nexus Consulting Group.
            </div>
</div>
</footer>

    </>
  );
}
