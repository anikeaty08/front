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



        document.addEventListener('DOMContentLoaded', () => {
            // Boot sequence logic
            const overlay = document.getElementById('boot-overlay');
            
            setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    startTypewriter();
                }, 1000);
            }, 1200);

            // Typewriter effect for initialization text
            const bootText = "INITIALIZING PERSONNEL DATA STREAM...";
            const el = document.getElementById('typewriter-text');
            let i = 0;
            
            function startTypewriter() {
                if (i < bootText.length) {
                    el.innerHTML += bootText.charAt(i);
                    i++;
                    setTimeout(startTypewriter, 40);
                }
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
      

<div className="fixed inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(42, 47, 58, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 47, 58, 0.15) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="fixed inset-0 pointer-events-none z-0 opacity-30" style={{background: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 255, 0.1) 0%, transparent 60%)'}}></div>
<div className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-20" style={{background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 1) 50%)', backgroundSize: '100% 4px'}}></div>

<header className="sticky top-0 z-40 border-b border-[#2A2F3A] bg-[#0A0B10]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="font-['Orbitron'] font-bold text-lg tracking-tighter text-[#E0E5EC] flex items-center gap-3">
<iconify-icon className="text-[#00FFFF] text-xl animate-[spin_10s_linear_infinite]" icon="solar:galaxy-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-[0.2em]">D.Y.S.O.N // P.U.N.K</span>
</div>
<nav className="hidden md:flex gap-8 text-sm text-[#A9B0C0] font-['Rajdhani'] font-semibold tracking-wide uppercase">
<a className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all flex items-center gap-2" href="#status">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon> Status
                </a>
<a className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all flex items-center gap-2" href="#logs">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5"></iconify-icon> Logs
                </a>
<a className="hover:text-[#00FFFF] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all flex items-center gap-2" href="#schematics">
<iconify-icon icon="solar:blueprint-linear" strokeWidth="1.5"></iconify-icon> Schematics
                </a>
</nav>
<div className="md:hidden flex items-center">
<iconify-icon className="text-2xl text-[#00FFFF]" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="h-[1px] w-full bg-[#2A2F3A] relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-[#00FFFF] w-1/4 animate-pulse shadow-[0_0_10px_#00FFFF]"></div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10 flex flex-col gap-6">

<div className="fixed inset-0 z-50 bg-[#0A0B10] flex flex-col items-center justify-center transition-opacity duration-1000" id="boot-overlay">
<iconify-icon className="text-[#00FFFF] text-6xl animate-ping mb-4" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-['Space_Mono'] text-sm text-[#00FFFF]">ESTABLISHING SECURE UPLINK...</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<section className="col-span-1 lg:col-span-8 bg-[#151820]/90 border border-[#2A2F3A] p-6 sm:p-10 hover:border-[#00FFFF]/50 hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.05)] transition-all duration-500 relative group overflow-hidden" id="status">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#4A4D55] group-hover:border-[#00FFFF] transition-colors"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#4A4D55] group-hover:border-[#00FFFF] transition-colors"></div>
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2 px-3 py-1 bg-[#0A0B10] border border-[#2A2F3A] text-xs text-[#70737C]">
<span className="w-1.5 h-1.5 rounded-full bg-[#90EE90] animate-pulse"></span>
                        SYSTEM ONLINE
                    </div>
<div className="text-xs text-[#4A4D55] font-['Orbitron'] tracking-widest uppercase flex items-center gap-1">
<iconify-icon icon="solar:lock-keyhole-unlocked-linear" strokeWidth="1.5"></iconify-icon> OMEGA CLR
                    </div>
</div>
<h1 className="font-['Rajdhani'] font-semibold text-4xl sm:text-6xl uppercase tracking-tight text-[#E0E5EC] mb-2 drop-shadow-[0_0_12px_rgba(224,229,236,0.1)] leading-none">
                    Eng. <span className="text-[#00FFFF]">A. Vance</span>
</h1>
<h2 className="font-['Space_Mono'] text-sm sm:text-base text-[#A9B0C0] mb-8 flex items-center gap-3">
<iconify-icon className="text-[#FFD700]" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
                    STELLAR INFRASTRUCTURE ARCHITECT // LVL 9
                </h2>
<div className="space-y-4 text-sm sm:text-base text-[#A9B0C0] leading-relaxed max-w-3xl">
<p className="text-[#00FFFF] text-xs mb-2 flex items-center gap-2">
<span className="w-2 h-[2px] bg-[#00FFFF]"></span>
<span id="typewriter-text"></span><span className="animate-pulse">_</span>
</p>
<p>
                        Specializing in the deployment and optimization of hyper-scale web applications and distributed systems. Demonstrated expertise in constructing robust, high-availability digital megastructures capable of handling petawatt-equivalent traffic loads across the decentralized network grid.
                    </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-[#2A2F3A]">
<div className="bg-[#0A0B10] border border-[#2A2F3A] p-3 group-hover:border-[#00FFFF]/30 transition-colors">
<div className="text-xs text-[#70737C] mb-1 flex items-center gap-1"><iconify-icon icon="solar:stopwatch-linear"></iconify-icon> UPTIME</div>
<div className="font-['Rajdhani'] text-2xl text-[#E0E5EC] tracking-tight">99.999%</div>
</div>
<div className="bg-[#0A0B10] border border-[#2A2F3A] p-3 group-hover:border-[#00FFFF]/30 transition-colors">
<div className="text-xs text-[#70737C] mb-1 flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> OUTPUT</div>
<div className="font-['Rajdhani'] text-2xl text-[#E0E5EC] tracking-tight">1.21 <span className="text-xs text-[#A9B0C0] font-['Space_Mono'] tracking-normal">GW/s</span></div>
</div>
<div className="bg-[#0A0B10] border border-[#2A2F3A] p-3 group-hover:border-[#00FFFF]/30 transition-colors">
<div className="text-xs text-[#70737C] mb-1 flex items-center gap-1"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> LATENCY</div>
<div className="font-['Rajdhani'] text-2xl text-[#E0E5EC] tracking-tight">0.003 <span className="text-xs text-[#A9B0C0] font-['Space_Mono'] tracking-normal">ms</span></div>
</div>
<div className="bg-[#0A0B10] border border-[#2A2F3A] p-3 group-hover:border-[#FFD700]/30 transition-colors">
<div className="text-xs text-[#70737C] mb-1 flex items-center gap-1"><iconify-icon icon="solar:shield-warning-linear"></iconify-icon> INTEGRITY</div>
<div className="font-['Rajdhani'] text-2xl text-[#90EE90] tracking-tight">NOMINAL</div>
</div>
</div>
</section>

<section className="col-span-1 lg:col-span-4 bg-[#151820]/90 border border-[#2A2F3A] p-6 hover:border-[#00FFFF]/50 transition-all duration-500 flex flex-col">
<h3 className="font-['Rajdhani'] font-semibold text-xl tracking-tight text-[#E0E5EC] uppercase mb-6 flex items-center gap-2 border-b border-[#2A2F3A] pb-3">
<iconify-icon className="text-[#00FFFF] text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                    Resource Matrices
                </h3>
<div className="space-y-6 flex-grow">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-[#A9B0C0] flex items-center gap-1"><iconify-icon icon="solar:code-square-linear"></iconify-icon> REACT_CORE_ENGINE</span>
<span className="text-[#00FFFF]">94%</span>
</div>
<div className="h-1.5 w-full bg-[#0A0B10] border border-[#2A2F3A]">
<div className="h-full bg-[#00FFFF] w-[94%] shadow-[0_0_8px_rgba(0,255,255,0.6)] relative">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-[#A9B0C0] flex items-center gap-1"><iconify-icon icon="solar:database-linear"></iconify-icon> NODE.JS_CONDUIT</span>
<span className="text-[#00FFFF]">88%</span>
</div>
<div className="h-1.5 w-full bg-[#0A0B10] border border-[#2A2F3A]">
<div className="h-full bg-[#00FFFF] w-[88%] shadow-[0_0_8px_rgba(0,255,255,0.6)] relative">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-[#A9B0C0] flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> TYPESCRIPT_LOGIC</span>
<span className="text-[#00FFFF]">91%</span>
</div>
<div className="h-1.5 w-full bg-[#0A0B10] border border-[#2A2F3A]">
<div className="h-full bg-[#00FFFF] w-[91%] shadow-[0_0_8px_rgba(0,255,255,0.6)] relative">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-[#A9B0C0] flex items-center gap-1"><iconify-icon icon="solar:layers-linear"></iconify-icon> CSS_MESH_NETWORK</span>
<span className="text-[#90EE90]">98%</span>
</div>
<div className="h-1.5 w-full bg-[#0A0B10] border border-[#2A2F3A]">
<div className="h-full bg-[#90EE90] w-[98%] shadow-[0_0_8px_rgba(144,238,144,0.6)] relative">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-[#A9B0C0] flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> CLOUD_INFRASTRUCTURE</span>
<span className="text-[#FFD700]">75%</span>
</div>
<div className="h-1.5 w-full bg-[#0A0B10] border border-[#2A2F3A]">
<div className="h-full bg-[#FFD700] w-[75%] shadow-[0_0_8px_rgba(255,215,0,0.6)] relative">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 p-3 bg-[#0A0B10] border border-[#2A2F3A] flex justify-between items-center text-xs text-[#70737C]">
<span>CAPACITY WARNING</span>
<span className="text-[#90EE90]">NONE DETECTED</span>
</div>
</section>
</div>

<section className="bg-[#151820]/90 border border-[#2A2F3A] p-6 sm:p-10 hover:border-[#00FFFF]/50 transition-all duration-500" id="logs">
<div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2A2F3A] pb-4 mb-8 gap-4">
<h3 className="font-['Rajdhani'] font-semibold text-2xl tracking-tight text-[#E0E5EC] uppercase flex items-center gap-3">
<iconify-icon className="text-[#00FFFF] text-3xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
                    Operational History Logs
                </h3>
<div className="flex gap-2">
<span className="text-xs text-[#E0E5EC] border border-[#00FFFF] px-3 py-1 bg-[#00FFFF]/10 cursor-pointer">ALL</span>
<span className="text-xs text-[#70737C] border border-[#2A2F3A] px-3 py-1 bg-[#0A0B10] cursor-pointer hover:text-[#E0E5EC] transition-colors">CRITICAL</span>
</div>
</div>

<div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[15px] sm:before:left-[23px] before:w-[1px] before:bg-[#2A2F3A]">

<div className="relative pl-12 sm:pl-16 group">

<div className="absolute left-0 sm:left-[8px] top-1 w-[32px] h-[32px] bg-[#0A0B10] border border-[#00FFFF] flex items-center justify-center shadow-[0_0_12px_rgba(0,255,255,0.3)] group-hover:bg-[#00FFFF]/20 transition-all z-10">
<iconify-icon className="text-[#00FFFF] text-sm group-hover:scale-110 transition-transform" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-[#0A0B10] border border-[#2A2F3A] p-5 group-hover:border-[#00FFFF]/40 transition-colors relative overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)'}}></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 border-b border-[#2A2F3A]/50 pb-3">
<h4 className="font-['Rajdhani'] font-semibold text-xl text-[#E0E5EC] uppercase tracking-tight group-hover:text-[#00FFFF] transition-colors flex items-center gap-2">
                                Lead Systems Constructor
                            </h4>
<span className="text-xs text-[#00FFFF] mt-2 sm:mt-0 px-2 py-0.5 border border-[#00FFFF]/30 bg-[#00FFFF]/10">T-MINUS 0.00 <span className="text-[#A9B0C0] opacity-50">(PRESENT)</span></span>
</div>
<div className="text-xs text-[#A9B0C0] mb-4 flex items-center gap-2 font-['Orbitron'] tracking-widest">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon> NEBULA DYNAMICS CORP
                        </div>
<p className="text-sm text-[#A9B0C0] leading-relaxed mb-5">
                            Spearheaded the deployment of a multi-node distributed application framework, increasing data throughput by 400%. Calibrated structural integrity of legacy monolithic systems, facilitating a seamless migration to a microservice architecture capable of withstanding stellar-flare-level traffic anomalies.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[0.65rem] border border-[#2A2F3A] px-2 py-1 text-[#E0E5EC] bg-[#2A2F3A]/30">AWS_LAMBDA</span>
<span className="text-[0.65rem] border border-[#2A2F3A] px-2 py-1 text-[#E0E5EC] bg-[#2A2F3A]/30">KUBERNETES</span>
<span className="text-[0.65rem] border border-[#2A2F3A] px-2 py-1 text-[#E0E5EC] bg-[#2A2F3A]/30">GRAPHQL</span>
</div>
</div>
</div>

<div className="relative pl-12 sm:pl-16 group">

<div className="absolute left-0 sm:left-[8px] top-1 w-[32px] h-[32px] bg-[#0A0B10] border border-[#4A4D55] flex items-center justify-center group-hover:border-[#90EE90] transition-all z-10">
<iconify-icon className="text-[#70737C] text-sm group-hover:text-[#90EE90] transition-colors" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-[#0A0B10] border border-[#2A2F3A] p-5 group-hover:border-[#90EE90]/40 transition-colors">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 border-b border-[#2A2F3A]/50 pb-3">
<h4 className="font-['Rajdhani'] font-semibold text-xl text-[#E0E5EC] uppercase tracking-tight group-hover:text-[#90EE90] transition-colors">
                                Frontend Automation Tech
                            </h4>
<span className="text-xs text-[#70737C] mt-2 sm:mt-0">T-MINUS 2.45 YRS</span>
</div>
<div className="text-xs text-[#A9B0C0] mb-4 flex items-center gap-2 font-['Orbitron'] tracking-widest">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon> VORTEX COMMERCE
                        </div>
<p className="text-sm text-[#A9B0C0] leading-relaxed mb-5">
                            Engineered modular UI components for a high-traffic intergalactic e-commerce portal. Reduced rendering latency by 150ms through meticulous bundle optimization, lazy loading protocols, and implementation of virtualized data grids for vast inventory matrices.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[0.65rem] border border-[#2A2F3A] px-2 py-1 text-[#70737C]">VUE.JS</span>
<span className="text-[0.65rem] border border-[#2A2F3A] px-2 py-1 text-[#70737C]">VUEX</span>
<span className="text-[0.65rem] border border-[#2A2F3A] px-2 py-1 text-[#70737C]">WEBGL</span>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">

<section className="flex flex-col gap-6" id="schematics">
<div className="bg-[#151820]/90 border border-[#2A2F3A] p-6 flex flex-col h-full hover:border-[#00FFFF]/50 transition-colors group">
<div className="flex justify-between items-start mb-4 border-b border-[#2A2F3A] pb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-[#0A0B10] border border-[#2A2F3A] group-hover:border-[#00FFFF]/50 transition-colors">
<iconify-icon className="text-3xl text-[#00FFFF]" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Rajdhani'] font-semibold text-xl tracking-tight uppercase text-[#E0E5EC]">Project Aegis</h4>
<div className="text-[0.65rem] text-[#A9B0C0] mt-1 font-['Orbitron']">MODULE_ID: 884-AX</div>
</div>
</div>
<span className="text-[0.65rem] text-[#90EE90] border border-[#90EE90]/30 bg-[#90EE90]/10 px-2 py-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#90EE90]"></span> DEPLOYED
                        </span>
</div>
<p className="text-sm text-[#A9B0C0] mb-6 flex-grow leading-relaxed">
                        Real-time threat monitoring dashboard utilizing WebSockets and advanced D3.js data visualizations. Tracks localized energy spikes and structural anomalies within the construct grid.
                    </p>
<div className="mt-auto bg-[#0A0B10] p-3 border border-[#2A2F3A] flex justify-between items-center">
<div className="flex gap-4">
<a className="text-[#70737C] hover:text-[#00FFFF] transition-colors flex items-center gap-1 text-xs" href="#">
<iconify-icon className="text-lg" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon> SRC
                             </a>
<a className="text-[#70737C] hover:text-[#00FFFF] transition-colors flex items-center gap-1 text-xs" href="#">
<iconify-icon className="text-lg" icon="solar:link-square-linear" strokeWidth="1.5"></iconify-icon> LIVE
                             </a>
</div>
<span className="text-[0.65rem] text-[#70737C]">BUILD V.2.1.0</span>
</div>
</div>
</section>

<section className="bg-[#151820]/90 border border-[#2A2F3A] p-6 hover:border-[#00FFFF]/50 transition-colors flex flex-col" id="comms">
<h3 className="font-['Rajdhani'] font-semibold text-xl tracking-tight text-[#E0E5EC] uppercase mb-6 flex items-center gap-2 border-b border-[#2A2F3A] pb-3">
<iconify-icon className="text-[#00FFFF] text-2xl" icon="solar:satellite-linear" strokeWidth="1.5"></iconify-icon>
                    Transmission Uplink
                </h3>
<p className="text-sm text-[#A9B0C0] mb-6 leading-relaxed">
                    Establish a secure channel for contract negotiations, schematic sharing, or general telemetry exchange. Connection is heavily encrypted.
                </p>
<form className="space-y-4 flex-grow flex flex-col">
<div className="relative group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2A2F3A] group-focus-within:bg-[#00FFFF] transition-colors"></div>
<input className="w-full bg-[#0A0B10] border-y border-r border-l-0 border-[#2A2F3A] text-[#E0E5EC] text-sm p-3 pl-4 focus:outline-none focus:border-[#00FFFF] focus:bg-[#00FFFF]/5 transition-all placeholder:text-[#4A4D55]" placeholder="IDENTIFIER_TAG [Name]" type="text"/>
</div>
<div className="relative group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2A2F3A] group-focus-within:bg-[#00FFFF] transition-colors"></div>
<input className="w-full bg-[#0A0B10] border-y border-r border-l-0 border-[#2A2F3A] text-[#E0E5EC] text-sm p-3 pl-4 focus:outline-none focus:border-[#00FFFF] focus:bg-[#00FFFF]/5 transition-all placeholder:text-[#4A4D55]" placeholder="FREQUENCY_CHANNEL [Email]" type="email"/>
</div>
<div className="relative group flex-grow flex flex-col">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2A2F3A] group-focus-within:bg-[#00FFFF] transition-colors"></div>
<textarea className="w-full h-full min-h-[100px] bg-[#0A0B10] border-y border-r border-l-0 border-[#2A2F3A] text-[#E0E5EC] text-sm p-3 pl-4 focus:outline-none focus:border-[#00FFFF] focus:bg-[#00FFFF]/5 transition-all placeholder:text-[#4A4D55] resize-none" placeholder="DATA_PAYLOAD [Message]..."></textarea>
</div>
<button className="w-full bg-[#0A0B10] border border-[#00FFFF] text-[#00FFFF] font-['Rajdhani'] font-semibold tracking-wide uppercase px-6 py-3 hover:bg-[#00FFFF] hover:text-[#0A0B10] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group mt-2" type="button">
                        INITIATE TRANSFER
                        <iconify-icon className="text-xl group-hover:-translate-y-1 transition-transform" icon="solar:upload-track-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</section>
</div>
</main>
<footer className="border-t border-[#2A2F3A] py-6 text-center text-[0.65rem] text-[#4A4D55] font-['Orbitron'] bg-[#0A0B10] relative z-10 uppercase tracking-widest">
<p>END OF LOG // DYSONPUNK CONSTRUCT PROTOCOL V1.0</p>
</footer>



    </>
  );
}
