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
      

<div className="scanline"></div>

<div className="fixed top-0 left-2 bottom-0 w-4 overflow-hidden pointer-events-none opacity-20 hidden lg:block z-0">
<div className="flex flex-col animate-scroll-v font-mono text-[10px] leading-tight text-[#A3A3A3] whitespace-nowrap" style={{writingMode: 'vertical-rl'}}>
            INIT_SEQ_001 // ESTABLISH_CONN // AUTH_BEARER_TOKEN // FETCH_ADR_METRICS // PARSE_JSON_PAYLOAD // RENDER_DOM_TREE // INIT_SEQ_001 // ESTABLISH_CONN // AUTH_BEARER_TOKEN // FETCH_ADR_METRICS // PARSE_JSON_PAYLOAD // RENDER_DOM_TREE //
        </div>
</div>
<div className="fixed top-0 right-2 bottom-0 w-4 overflow-hidden pointer-events-none opacity-20 hidden lg:block z-0">
<div className="flex flex-col animate-scroll-v font-mono text-[10px] leading-tight text-[#FF3366] whitespace-nowrap" style={{writingMode: 'vertical-rl', animationDirection: 'reverse'}}>
            SYS.OP.OPTIMIZED // YIELD_MAX // LATENCY: 12ms // CPU: 4% // MEM: 1.2GB // ACTIVE_NODES: 428 // SYS.OP.OPTIMIZED // YIELD_MAX // LATENCY: 12ms // CPU: 4% // MEM: 1.2GB // ACTIVE_NODES: 428 //
        </div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
                    REVIO
                </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-[#A3A3A3]">
<a className="hover:text-white transition-colors" href="#">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#">Yield Engine</a>
<a className="hover:text-white transition-colors" href="#">Operations</a>
<a className="hover:text-white transition-colors" href="#">API Docs</a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-2 px-2 py-1 border border-white/10 bg-[#0A0A0A] text-xs font-mono text-[#A3A3A3]">
<div className="w-1.5 h-1.5 bg-[#FF3366] rounded-none animate-blink"></div>
                    [SYS.ONLINE]
                </div>
<a className="text-xs font-semibold text-white bg-transparent border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors rounded-none" href="#">
                    LOGIN
                </a>
<a className="text-xs font-semibold text-white bg-[#FF3366] border border-[#FF3366] px-4 py-2 hover:bg-[#e62e5c] transition-colors rounded-none clip-chamfer" href="#">
                    DEPLOY NOW
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24 px-6">
<div className="max-w-7xl mx-auto">

<section className="flex flex-col items-center text-center mt-12 mb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF3366]/5 blur-[120px] rounded-full pointer-events-none"></div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase text-white leading-[0.9] mb-6 relative z-10">
                    Eliminate <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A3A3A3]">Operational</span> Drag.
                </h1>
<p className="text-base md:text-lg text-[#A3A3A3] max-w-2xl font-normal leading-relaxed mb-10 relative z-10">
                    Maximize guest value through ruthless optimization. A high-frequency infrastructure built to process, analyze, and execute hospitality operations with zero latency.
                </p>
<div className="flex flex-col sm:flex-row gap-4 z-10">
<button className="flex items-center justify-center gap-2 bg-[#FF3366] text-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-black transition-all clip-chamfer group">
                        INITIALIZE DEPLOYMENT
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 text-sm font-semibold hover:bg-white/5 transition-colors">
<iconify-icon height="1.2em" icon="solar:code-scan-linear" width="1.2em"></iconify-icon>
                        READ DOCUMENTATION
                    </button>
</div>
</section>

<section className="relative w-full aspect-[16/10] md:aspect-[16/9] max-h-[800px] bg-[#0A0A0A] border border-white/10 p-2 md:p-4 clip-chamfer-tl mb-32 shadow-2xl shadow-[#FF3366]/5 flex flex-col group">

<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2 h-2 bg-white/20 rounded-none"></div>
<div className="w-2 h-2 bg-white/20 rounded-none"></div>
<div className="w-2 h-2 bg-white/20 rounded-none"></div>
</div>
<div className="text-xs font-mono text-[#A3A3A3] flex items-center gap-2">
<iconify-icon icon="solar:folder-open-linear"></iconify-icon>
                            /mnt/revio/dashboard/realtime
                        </div>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-[#A3A3A3]">
<span>NET: <span className="text-white">10Gbit</span></span>
<span>LAT: <span className="text-[#FF3366]">4ms</span></span>
</div>
</div>

<div className="flex-1 flex gap-4 min-h-0">

<div className="w-12 md:w-48 border-r border-white/10 flex flex-col gap-2 pr-4 shrink-0">
<div className="p-2 bg-white/5 text-white flex items-center gap-3 border-l-2 border-[#FF3366] cursor-pointer">
<iconify-icon icon="solar:widget-linear" width="1.2em"></iconify-icon>
<span className="hidden md:block text-xs font-medium">Overview</span>
</div>
<div className="p-2 text-[#A3A3A3] hover:text-white flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="1.2em"></iconify-icon>
<span className="hidden md:block text-xs font-medium">Yield Engine</span>
</div>
<div className="p-2 text-[#A3A3A3] hover:text-white flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:buildings-linear" width="1.2em"></iconify-icon>
<span className="hidden md:block text-xs font-medium">Properties</span>
</div>
<div className="p-2 text-[#A3A3A3] hover:text-white flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="1.2em"></iconify-icon>
<span className="hidden md:block text-xs font-medium">Guest Matrix</span>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 overflow-hidden">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">

<div className="bg-[#030303] border border-white/5 p-4 flex flex-col justify-between">
<span className="text-xs text-[#A3A3A3] font-mono">LIVE_ADR</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-semibold tracking-tighter text-white">$412.50</span>
<span className="text-xs font-mono text-[#FF3366] flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.4%
                                    </span>
</div>
</div>
<div className="bg-[#030303] border border-white/5 p-4 flex flex-col justify-between">
<span className="text-xs text-[#A3A3A3] font-mono">REVPAR_INDEX</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-semibold tracking-tighter text-white">114.2</span>
<span className="text-xs font-mono text-white flex items-center">
<iconify-icon icon="solar:minus-linear"></iconify-icon> 0.0%
                                    </span>
</div>
</div>
<div className="bg-[#030303] border border-white/5 p-4 hidden md:flex flex-col justify-between">
<span className="text-xs text-[#A3A3A3] font-mono">OCCUPANCY_RATE</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-semibold tracking-tighter text-white">92.8%</span>
<span className="text-xs font-mono text-[#FF3366] flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 5.1%
                                    </span>
</div>
</div>
<div className="bg-[#030303] border border-white/5 p-4 hidden lg:flex flex-col justify-between relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF3366]/20 to-transparent pointer-events-none"></div>
<span className="text-xs text-[#A3A3A3] font-mono z-10">SYS_INTEGRITY</span>
<div className="flex items-end justify-between mt-2 z-10">
<span className="text-2xl font-semibold tracking-tighter text-white">OPTIMAL</span>
<div className="w-2 h-2 bg-[#FF3366] rounded-none animate-blink"></div>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

<div className="lg:col-span-2 bg-[#030303] border border-white/5 border-t border-t-white/10 flex flex-col min-h-0">
<div className="p-3 border-b border-white/5 flex justify-between items-center bg-[#0A0A0A]">
<span className="text-xs font-semibold text-white">INCOMING TRANSACTION STREAM</span>
<iconify-icon className="text-[#A3A3A3]" icon="solar:sort-from-bottom-to-top-linear"></iconify-icon>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-2">
<table className="w-full text-left border-collapse">
<thead className="text-[10px] font-mono text-[#A3A3A3] uppercase sticky top-0 bg-[#030303]">
<tr>
<th className="py-2 px-3 font-normal">ID</th>
<th className="py-2 px-3 font-normal">Event</th>
<th className="py-2 px-3 font-normal hidden sm:table-cell">Property</th>
<th className="py-2 px-3 font-normal text-right">Value</th>
</tr>
</thead>
<tbody className="text-xs font-mono text-[#A3A3A3]">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-3">0x8F2A</td>
<td className="py-3 px-3 text-white">RESERVATION_CONFIRM</td>
<td className="py-3 px-3 hidden sm:table-cell">NYC_FLAGSHIP</td>
<td className="py-3 px-3 text-right text-[#FF3366]">+$1,240</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-3">0x8F2B</td>
<td className="py-3 px-3 text-white">UPSELL_TRIGGER</td>
<td className="py-3 px-3 hidden sm:table-cell">MIA_RESORT</td>
<td className="py-3 px-3 text-right text-[#FF3366]">+$185</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-3">0x8F2C</td>
<td className="py-3 px-3 text-white">CLEANING_DISPATCH</td>
<td className="py-3 px-3 hidden sm:table-cell">LDN_BOUTIQUE</td>
<td className="py-3 px-3 text-right">--</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-3">0x8F2D</td>
<td className="py-3 px-3 text-white">RESERVATION_CONFIRM</td>
<td className="py-3 px-3 hidden sm:table-cell">NYC_FLAGSHIP</td>
<td className="py-3 px-3 text-right text-[#FF3366]">+$890</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="py-3 px-3">0x8F2E</td>
<td className="py-3 px-3 text-white">DYNAMIC_PRICING_ADJ</td>
<td className="py-3 px-3 hidden sm:table-cell">GLOBAL_NODE</td>
<td className="py-3 px-3 text-right">SYNC</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden lg:flex bg-[#030303] border border-white/5 flex-col p-4 relative overflow-hidden justify-between">
<span className="text-xs font-semibold text-white mb-4 block z-10">YIELD TRAJECTORY</span>

<div className="absolute inset-0 flex items-end justify-between p-4 opacity-50 z-0">
<div className="w-[2px] bg-white/20 h-[20%]"></div>
<div className="w-[2px] bg-white/20 h-[35%]"></div>
<div className="w-[2px] bg-[#FF3366] h-[60%] shadow-[0_0_10px_#FF3366]"></div>
<div className="w-[2px] bg-white/20 h-[45%]"></div>
<div className="w-[2px] bg-white/20 h-[70%]"></div>
<div className="w-[2px] bg-white/20 h-[50%]"></div>
<div className="w-[2px] bg-[#FF3366] h-[90%] shadow-[0_0_10px_#FF3366]"></div>
</div>
<div className="z-10 mt-auto">
<div className="text-[10px] font-mono text-[#A3A3A3] mb-1">PROJ_DELTA</div>
<div className="text-xl font-semibold tracking-tighter text-[#FF3366]">+18.4%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="mb-12 border-b border-white/10 pb-6">
<h2 className="text-3xl font-semibold tracking-tighter text-white uppercase">Architecture of Advantage</h2>
<p className="text-sm text-[#A3A3A3] mt-2 font-mono">01 // CORE_MODULES</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">

<div className="bg-[#0A0A0A] p-8 group hover:bg-[#0c0c0c] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#FF3366]" icon="solar:arrow-right-up-linear" width="1.5em"></iconify-icon>
</div>
<iconify-icon className="text-white mb-6" icon="solar:database-linear" width="2em"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3 uppercase">Unified Data Lake</h3>
<p className="text-sm text-[#A3A3A3] leading-relaxed">Consolidate PMS, CRM, and POS data into a single source of truth. Eliminate silos, ensure data integrity, and enable sub-second query responses.</p>
</div>

<div className="bg-[#0A0A0A] p-8 group hover:bg-[#0c0c0c] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#FF3366]" icon="solar:arrow-right-up-linear" width="1.5em"></iconify-icon>
</div>
<iconify-icon className="text-white mb-6" icon="solar:cpu-linear" width="2em"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3 uppercase">Algorithmic Pricing</h3>
<p className="text-sm text-[#A3A3A3] leading-relaxed">Dynamic yield management powered by multi-variable regression. Adjust rates in real-time based on local demand, competitor velocity, and historical pacing.</p>
</div>

<div className="bg-[#0A0A0A] p-8 group hover:bg-[#0c0c0c] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#FF3366]" icon="solar:arrow-right-up-linear" width="1.5em"></iconify-icon>
</div>
<iconify-icon className="text-white mb-6" icon="solar:routing-2-linear" width="2em"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3 uppercase">Automated Dispatch</h3>
<p className="text-sm text-[#A3A3A3] leading-relaxed">Intelligent routing for housekeeping and maintenance. Optimize physical pathways, reduce turnaround time by 22%, and maximize room availability.</p>
</div>
</div>
</section>

<section className="mb-32 border-t border-b border-white/10 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="flex flex-col border-l-2 border-transparent md:border-[#FF3366] md:pl-6">
<span className="text-5xl lg:text-7xl font-semibold tracking-tighter text-white">14.2%</span>
<span className="text-xs font-mono text-[#A3A3A3] mt-2 uppercase">Avg. RevPAR Increase</span>
</div>
<div className="flex flex-col border-l-2 border-transparent md:border-[#FF3366] md:pl-6">
<span className="text-5xl lg:text-7xl font-semibold tracking-tighter text-white">Sub-1s</span>
<span className="text-xs font-mono text-[#A3A3A3] mt-2 uppercase">Data Sync Latency</span>
</div>
<div className="flex flex-col border-l-2 border-transparent md:border-[#FF3366] md:pl-6">
<span className="text-5xl lg:text-7xl font-semibold tracking-tighter text-white">2.4M+</span>
<span className="text-xs font-mono text-[#A3A3A3] mt-2 uppercase">Daily Operations Processed</span>
</div>
</div>
</section>

<section className="relative bg-[#0A0A0A] border border-white/10 p-12 md:p-24 flex flex-col items-center text-center clip-chamfer overflow-hidden mb-12">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #FF3366 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white uppercase mb-6 relative z-10">Stop Leaking Revenue.</h2>
<p className="text-base text-[#A3A3A3] max-w-lg mb-10 relative z-10">Integrate Revio into your tech stack in under 48 hours. Require zero downtime.</p>
<button className="bg-white text-black px-10 py-5 text-sm font-semibold hover:bg-[#FF3366] hover:text-white transition-colors uppercase tracking-tight relative z-10 clip-chamfer">
                    Request API Access
                </button>
</section>
</div>
</main>

<footer className="border-t border-white/10 bg-[#030303] pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tighter text-white uppercase mb-4 block" href="#">REVIO</a>
<p className="text-xs text-[#A3A3A3] font-mono leading-relaxed max-w-xs">
                    HIGH-FREQUENCY INFRASTRUCTURE FOR MODERN HOSPITALITY.
                    <br/><br/>
                    SYS_BUILD: v2.4.1-stable<br/>
                    LOC: NYC // LON // SGP
                </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-tight mb-2">Platform</span>
<a className="text-xs text-[#A3A3A3] hover:text-[#FF3366] transition-colors" href="#">Yield Engine</a>
<a className="text-xs text-[#A3A3A3] hover:text-[#FF3366] transition-colors" href="#">Data Lake</a>
<a className="text-xs text-[#A3A3A3] hover:text-[#FF3366] transition-colors" href="#">Automations</a>
<a className="text-xs text-[#A3A3A3] hover:text-[#FF3366] transition-colors" href="#">Integrations</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-tight mb-2">Developers</span>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">Status</a>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-tight mb-2">Company</span>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">About</a>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">Careers</a>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">Security</a>
<a className="text-xs text-[#A3A3A3] hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-mono text-[#A3A3A3]">
<span>© 2024 REVIO SYSTEMS INC. ALL RIGHTS RESERVED.</span>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">TERMS</a>
<a className="hover:text-white" href="#">PRIVACY</a>
<a className="hover:text-white" href="#">COOKIES</a>
</div>
</div>
</footer>

    </>
  );
}
