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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2672&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-50"></div>


<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030712] to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#030712] via-[#030712] to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/40 to-transparent"></div>
<div className="absolute inset-0 noise-overlay pointer-events-none"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/30 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
<div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
</div>
<span className="text-white font-medium tracking-tighter text-lg drop-shadow-lg">AETHER</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors drop-shadow-md" href="#">Archives</a>
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors drop-shadow-md" href="#">Observatory</a>
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors drop-shadow-md" href="#">Phenomena</a>
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors drop-shadow-md" href="#">Deep Field</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide drop-shadow-md">
<i className="w-3 h-3" data-lucide="eye"></i>
                    CLEARANCE: RED
                </button>
<button className="bg-white/10 hover:bg-white hover:text-[#030712] border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all backdrop-blur-md shadow-lg">
                    Request Uplink
                </button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col items-start gap-6 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-md text-xs font-medium text-indigo-200 shadow-lg">
<i className="w-3 h-3 animate-pulse" data-lucide="satellite"></i>
                    Satellite Uplink: Sector 4
                </div>
<h1 className="text-5xl md:text-8xl font-medium text-white tracking-tight leading-[0.95] drop-shadow-2xl">
                    We watch the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">silence between.</span>
</h1>
<p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    Monitoring the edge of known space. What lies beyond the heliosphere isn't empty—it's waiting. We are the first line of observation for the inexplicable.
                </p>
<div className="flex flex-wrap gap-4 mt-4">
<button className="group flex items-center gap-2 bg-white text-[#030712] px-6 py-3 rounded-lg font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Initiate Scan
                        <i className="w-4 h-4 transition-transform group-hover:scale-110" data-lucide="scan-line"></i>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm font-medium text-sm text-white hover:bg-white/10 transition-all">
<i className="w-4 h-4" data-lucide="database"></i>
                        Access Logs
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-6 rounded-xl md:col-span-2 flex flex-col md:flex-row gap-8 relative overflow-hidden group">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.5'}}></div>
<div className="flex-1 z-10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-white font-medium tracking-tight">Array Coherence</h3>
<span className="text-xs text-indigo-300 font-mono bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded">LISTENING</span>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs mb-2 text-slate-400">
<span>Signal-to-Noise Ratio</span>
<span className="font-mono text-white">104.2%</span>
</div>
<div className="w-full bg-white/5 h-px overflow-hidden flex gap-0.5">
<div className="bg-indigo-400 h-full w-1 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="bg-indigo-400 h-full w-1 animate-[pulse_1.2s_ease-in-out_infinite] delay-75"></div>
<div className="bg-indigo-400 h-full w-20 opacity-50"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 text-slate-400">
<span>Dark Matter Density</span>
<span className="font-mono text-white">CRITICAL</span>
</div>
<div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[92%] animate-[pulse_3s_infinite]"></div>
</div>
</div>
<div className="pt-2 flex justify-between items-end">
<div className="text-xs text-slate-500">
                                    Origin Point: <br/>
<span className="text-slate-300 font-mono">KEPLER-186F</span>
</div>
<div className="h-8 w-24 flex items-end gap-1">
<div className="w-1 bg-slate-700 h-[40%]"></div>
<div className="w-1 bg-slate-700 h-[60%]"></div>
<div className="w-1 bg-white h-[90%]"></div>
<div className="w-1 bg-slate-700 h-[50%]"></div>
<div className="w-1 bg-slate-700 h-[30%]"></div>
<div className="w-1 bg-white h-[70%]"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 flex items-center justify-center relative border-l border-white/5 pl-8 hidden md:flex">
<div className="text-center relative">

<div className="absolute inset-0 animate-spin-slow border border-dashed border-white/10 rounded-full w-32 h-32 -top-4 -left-2"></div>
<i className="w-12 h-12 text-white mx-auto mb-3 stroke-[1] relative z-10" data-lucide="aperture"></i>
<div className="text-2xl font-medium text-white tracking-tight">Oculus IV</div>
<div className="text-xs text-slate-500 mt-1">Deep Space Array</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col justify-between group relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20">
<i className="w-24 h-24 text-white" data-lucide="waves"></i>
</div>
<div className="flex items-start justify-between relative z-10">
<div>
<h3 className="text-white font-medium tracking-tight">Background Noise</h3>
<p className="text-xs text-slate-500 mt-1">Cosmic Microwave Background</p>
</div>
<div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
</div>
<div className="mt-8 relative z-10">
<div className="text-4xl font-medium text-white tracking-tight">3.2<span className="text-lg align-top text-slate-400">µK</span></div>
<div className="flex items-center gap-2 mt-2 text-xs text-orange-300">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
                            Deviation detected
                        </div>
</div>
</div>

<div className="glass-panel p-0 rounded-xl relative overflow-hidden group h-64 md:h-auto">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s] ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-white uppercase">
                        Live Feed • Cam 09
                    </div>
<div className="relative z-10 h-full flex flex-col justify-end p-6">
<h3 className="text-white font-medium tracking-tight">Void Sector 7</h3>
<p className="text-xs text-slate-300 mt-1 line-clamp-2">Visual confirmation of localized gravitational distortion. Object is non-reflective.</p>
</div>
</div>

<div className="glass-panel p-6 rounded-xl md:col-span-2">
<div className="flex items-center justify-between mb-6">
<h3 className="text-white font-medium tracking-tight">Intercept Log</h3>
<button className="text-xs text-slate-400 hover:text-white transition-colors">Decryption Keys</button>
</div>
<div className="space-y-0 divide-y divide-white/5">

<div className="grid grid-cols-12 gap-4 py-3 items-center hover:bg-white/5 transition-colors rounded px-2 -mx-2 cursor-pointer group">
<div className="col-span-2 text-xs font-mono text-slate-500">04:22</div>
<div className="col-span-4 text-sm font-medium text-white">Unknown Signature</div>
<div className="col-span-3">
<span className="text-[10px] border border-white/10 bg-white/5 text-indigo-200 px-1.5 py-0.5 rounded">TRANSIENT</span>
</div>
<div className="col-span-3 text-right text-[10px] font-mono text-slate-500">
                                -140 dB
                            </div>
</div>

<div className="grid grid-cols-12 gap-4 py-3 items-center hover:bg-white/5 transition-colors rounded px-2 -mx-2 cursor-pointer group">
<div className="col-span-2 text-xs font-mono text-slate-500">03:15</div>
<div className="col-span-4 text-sm font-medium text-white">Echo Pattern IV</div>
<div className="col-span-3">
<span className="text-[10px] border border-white/10 bg-white/5 text-slate-300 px-1.5 py-0.5 rounded">REPEATING</span>
</div>
<div className="col-span-3 text-right text-[10px] font-mono text-slate-500">
                                MATCH FOUND
                            </div>
</div>

<div className="grid grid-cols-12 gap-4 py-3 items-center hover:bg-white/5 transition-colors rounded px-2 -mx-2 cursor-pointer group">
<div className="col-span-2 text-xs font-mono text-slate-500">01:00</div>
<div className="col-span-4 text-sm font-medium text-white">Oort Cloud Object</div>
<div className="col-span-3">
<span className="text-[10px] border border-white/10 bg-white/5 text-orange-200 px-1.5 py-0.5 rounded">APPROACHING</span>
</div>
<div className="col-span-3 text-right text-[10px] font-mono text-slate-500">
                                12km/s
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="border-t border-white/10 pt-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">The Resonator</h2>
<p className="text-slate-400 text-sm max-w-md">
                            We don't just listen. We project. The Resonator creates a localized field for quantum entanglement communication across vast distances.
                        </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative h-[400px] bg-black rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8bcbf6d9436?q=80&amp;w=1955&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-1000"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<i className="w-6 h-6 text-white/50" data-lucide="crosshair"></i>
<div className="text-[10px] font-mono text-white/50 text-right">
                                     SYNC: 99.9%<br/>
                                     FLUX: STABLE
                                 </div>
</div>
<div className="w-full h-px bg-white/20 relative">
<div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-1 h-3 bg-white"></div>
<div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-1 h-3 bg-white/50"></div>
</div>
</div>
<div className="relative z-10 w-48 h-48 border border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-32 h-32 border border-white/20 rounded-full border-dashed"></div>
</div>
</div>
<div className="space-y-8">
<div className="group cursor-pointer">
<div className="flex items-center justify-between mb-2">
<h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors">Quantum Entanglement</h4>
<i className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 transition-colors" data-lucide="plus"></i>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                                Utilizing paired particles to transmit data instantaneously, bypassing the speed of light limitations inherent in traditional radio.
                            </p>
<div className="h-px w-full bg-white/10 mt-4"></div>
</div>
<div className="group cursor-pointer">
<div className="flex items-center justify-between mb-2">
<h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors">Temporal Shielding</h4>
<i className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 transition-colors" data-lucide="plus"></i>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                                Protecting sensitive instrumentation from high-energy cosmic ray degradation through localized time-dilation fields.
                            </p>
<div className="h-px w-full bg-white/10 mt-4"></div>
</div>
<div className="group cursor-pointer">
<div className="flex items-center justify-between mb-2">
<h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors">Void Sensors</h4>
<i className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 transition-colors" data-lucide="plus"></i>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                                Detection arrays capable of identifying gravitational waves from non-baryonic matter sources.
                            </p>
<div className="h-px w-full bg-white/10 mt-4"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 text-center mb-20">
<div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-4">The signal is getting stronger.</h2>
<p className="text-slate-400 text-sm mb-8">We need more eyes on the dark. Clearance is granted on a need-to-know basis.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-indigo-500/50 transition-colors placeholder:text-slate-600" placeholder="Encrypted channel address" type="email"/>
<button className="bg-white text-[#030712] px-6 py-3 rounded-lg font-medium text-sm hover:bg-slate-200 transition-colors" type="button">
                    Connect
                </button>
</form>
</section>
</main>

<footer className="border-t border-white/5 bg-[#030712] py-12 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-4 h-4 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<span className="text-slate-500 font-medium tracking-tighter text-sm">AETHER</span>
</div>
<div className="flex flex-wrap gap-8 text-xs text-slate-600 font-mono uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#">Protocol 9</a>
<a className="hover:text-white transition-colors" href="#">Redacted</a>
<a className="hover:text-white transition-colors" href="#">Site Map</a>
</div>
<div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="signal"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="globe"></i></a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 text-[10px] text-slate-700 font-mono">
            ID: 892-ALPHA // TERMINAL ACTIVE
        </div>
</footer>


    </>
  );
}
