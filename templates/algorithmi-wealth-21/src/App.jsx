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



        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, particles;

        function init() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            // Particle density
            const numParticles = Math.floor((width * height) / 12000);
            
            for(let i=0; i<numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    size: Math.random() * 1.5 + 0.5
                });
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, width, height);
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 0.5;
            
            particles.forEach(p => {
                p.x += p.vx; 
                p.y += p.vy;
                
                // Wrap around edges
                if(p.x < 0) p.x = width;
                if(p.x > width) p.x = 0;
                if(p.y < 0) p.y = height;
                if(p.y > height) p.y = 0;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Connect nearby particles
            for(let i=0; i<particles.length; i++) {
                for(let j=i+1; j<particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        window.addEventListener('resize', init);
        init();
        animate();
    
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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-40" id="hero-canvas"></canvas>
<div className="fixed inset-0 bg-tech-grid z-0 pointer-events-none"></div>

<nav className="fixed top-0 left-0 w-full z-50 tech-panel border-t-0 border-l-0 border-r-0 backdrop-blur-md bg-[#030303]/80">
<div className="w-full max-w-[1600px] mx-auto flex items-stretch justify-between h-16 px-6">
<div className="flex items-center gap-4 tech-border-r pr-6">

<svg className="w-6 h-6 shrink-0" viewbox="0 0 100 100">
<path d="M10 10 L40 10 L40 40 L70 40 L70 10 L90 10 L90 90 L70 90 L70 60 L40 60 L40 90 L10 90 Z" fill="white"></path>
</svg>
<span className="text-white font-semibold text-xl tracking-tight uppercase">KOR</span>
</div>
<div className="hidden md:flex items-stretch flex-1 px-8 gap-8">
<a className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest flex items-center border-b-2 border-transparent hover:border-white" href="#algorithms">Architecture</a>
<a className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest flex items-center border-b-2 border-transparent hover:border-white" href="#performance">Alpha Data</a>
<a className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest flex items-center border-b-2 border-transparent hover:border-white" href="#terminal">Live Terminal</a>
</div>
<div className="flex items-center pl-6 tech-border-l">
<a className="btn-cut bg-white text-black px-6 py-2 text-xs uppercase tracking-widest font-semibold" href="#apply">
                    Initialize
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden z-10">
<div className="max-w-[1600px] w-full px-6 flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-2 tech-border bg-[#030303] mb-12">
<div className="w-2 h-2 bg-[#00E676] rounded-none animate-pulse"></div>
<span className="text-xs font-mono uppercase tracking-widest text-zinc-300">System Nominal. Market Active.</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-white leading-none max-w-6xl mb-8 uppercase">
                Compound Wealth.<br/>
<span className="text-zinc-700">Ruthlessly.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-16 tracking-tight leading-relaxed">
                Humans hesitate. Algorithms don't. KOR deploys pure mathematical certainty to multiply your capital with zero emotional interference. Secure your legacy through unfeeling execution.
            </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="btn-cut bg-white text-black px-10 py-4 text-sm uppercase tracking-widest font-semibold flex items-center gap-3" href="#apply">
                    Deploy Capital <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="btn-cut-outline text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold bg-transparent border border-white/20" href="#performance">
                    View Execution Logic
                </a>
</div>
</div>
</section>

<section className="relative z-20 px-6 pb-32" id="terminal">
<div className="max-w-[1400px] mx-auto">
<div className="tech-panel p-1">
<div className="bg-[#030303] w-full h-full flex flex-col md:flex-row border border-white/5">

<div className="w-full md:w-64 tech-border-r p-4 flex flex-col gap-4 font-mono text-xs">
<div className="text-zinc-500 uppercase tracking-widest mb-2 border-b border-white/10 pb-2 flex justify-between">
<span>Asset</span><span>Delta</span>
</div>
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-white">SYS.EQT</span>
<span className="text-[#00E676]">+14.2%</span>
</div>
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-white">SYS.DEBT</span>
<span className="text-[#00E676]">+8.9%</span>
</div>
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-zinc-500">SYS.HEDGE</span>
<span className="text-zinc-500">-1.2%</span>
</div>
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-white">SYS.QNT</span>
<span className="text-[#00E676]">+22.1%</span>
</div>
<div className="mt-auto pt-4 border-t border-white/10 text-zinc-600">
                            &gt; PING: 12ms<br/>
                            &gt; NODE: NYC_04
                        </div>
</div>

<div className="flex-1 p-6 relative flex flex-col">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-3xl font-semibold text-white tracking-tight uppercase">Net Capital</h3>
<p className="text-xs font-mono text-zinc-500 mt-1">AGGREGATED YIELD CURVE</p>
</div>
<div className="text-right">
<span className="block text-4xl font-semibold text-[#00E676] tracking-tight">$42.8M</span>
<span className="text-xs font-mono text-white/50 bg-white/10 px-2 py-1 mt-2 inline-block">LIVE AUM</span>
</div>
</div>

<div className="flex-1 w-full min-h-[300px] relative border-b border-l border-white/10">

<div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
</div>
<svg className="absolute inset-0 w-full h-full overflow-visible terminal-glow" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00E676" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#00E676" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 80 Q 20 70, 40 40 T 70 30 L 100 10 L 100 100 L 0 100 Z" fill="url(#chart-grad)"></path>
<path d="M0 80 Q 20 70, 40 40 T 70 30 L 100 10" fill="none" stroke="#00E676" strokeWidth="0.5" vector-effect="non-scaling-stroke"></path>

<line className="opacity-30" stroke="white" stroke-dasharray="2 2" strokeWidth="0.5" vector-effect="non-scaling-stroke" x1="70" x2="70" y1="0" y2="100"></line>
<circle cx="70" cy="30" fill="black" r="1.5" stroke="#00E676" strokeWidth="0.5" vector-effect="non-scaling-stroke"></circle>
</svg>

<div className="absolute top-[20%] left-[72%] bg-white text-black font-mono text-xs px-2 py-1 z-10 clip-path-poly">
                                VOL: +3.4%
                            </div>
</div>
</div>

<div className="w-full md:w-80 tech-border-l bg-[#050505] p-4 font-mono text-xs flex flex-col">
<div className="text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-white"></div> Execution Feed
                        </div>
<div className="flex-1 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="space-y-3 opacity-80 animate-[slideUp_10s_linear_infinite]">
<div><span className="text-zinc-600">14:02:01</span> <span className="text-white">SELL 400 TSLA</span> <span className="text-[#00E676]">FILLED</span></div>
<div><span className="text-zinc-600">14:02:05</span> <span className="text-zinc-400">REBALANCING EQ MATRIX</span></div>
<div><span className="text-zinc-600">14:03:12</span> <span className="text-white">BUY 1200 JPM</span> <span className="text-[#00E676]">FILLED</span></div>
<div><span className="text-zinc-600">14:04:00</span> <span className="text-zinc-400">SCANNING ARB OPPS</span></div>
<div><span className="text-zinc-600">14:04:45</span> <span className="text-white">EXEC HARVEST_0x9A</span> <span className="text-[#00E676]">SAVED $4k</span></div>
<div><span className="text-zinc-600">14:05:01</span> <span className="text-zinc-400">AWAITING MACRO TICK</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/10 relative z-20 bg-black">
<div className="max-w-[1600px] mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-10 font-mono text-xs uppercase tracking-widest">
<div className="text-zinc-500">Infrastructure integrated with:</div>
<div className="flex flex-wrap justify-center gap-12 text-zinc-400">
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><iconify-icon icon="solar:server-square-linear" width="18"></iconify-icon> AWS KMS</span>
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><iconify-icon icon="solar:banknotes-linear" width="18"></iconify-icon> PLAID NET</span>
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon> BBG DATA</span>
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><iconify-icon icon="solar:shield-keyhole-linear" width="18"></iconify-icon> SOC2 T-II</span>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] tech-border-b relative z-20">
<div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
<div className="p-12 tech-border-b md:tech-border-b-0 md:tech-border-r group relative overflow-hidden bg-[#0A0A0A]">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
<div className="relative z-10">
<div className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">Metric.01 // Managed</div>
<div className="text-6xl md:text-7xl font-semibold text-white tracking-tighter mb-2">$2.4B</div>
<p className="text-sm text-zinc-400">Capital deployed autonomously across global markets.</p>
</div>
</div>
<div className="p-12 tech-border-b md:tech-border-b-0 md:tech-border-r group relative overflow-hidden bg-[#0A0A0A]">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
<div className="relative z-10">
<div className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">Metric.02 // Speed</div>
<div className="text-6xl md:text-7xl font-semibold text-[#00E676] tracking-tighter mb-2">12ms</div>
<p className="text-sm text-zinc-400">Average execution latency from macro signal to trade.</p>
</div>
</div>
<div className="p-12 group relative overflow-hidden bg-[#0A0A0A]">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
<div className="relative z-10">
<div className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">Metric.03 // Uptime</div>
<div className="text-6xl md:text-7xl font-semibold text-white tracking-tighter mb-2">99.9%</div>
<p className="text-sm text-zinc-400">Fault-tolerant structural reliability.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-20" id="algorithms">
<div className="max-w-[1600px] mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 uppercase">System Architecture</h2>
<p className="text-lg text-zinc-400 max-w-xl">Flawless execution driven by proprietary logic structures. No fluff. Just math.</p>
</div>
<div className="text-xs font-mono text-zinc-500 border border-white/10 px-4 py-2 bg-[#050505]">
                    VERSION: CORE_OS_2.4
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#0A0A0A]">

<div className="md:col-span-2 p-10 tech-border-b md:tech-border-r relative overflow-hidden group">
<div className="relative z-10 w-full max-w-lg mb-12">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:cpu-linear" width="24"></iconify-icon>
<h3 className="text-2xl font-semibold text-white tracking-tight uppercase">Algorithmic Rebalancing</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Continuous asset weight optimization based on real-time volatility indices and predictive macro models. Drifting allocations are corrected instantly.</p>
</div>

<div className="flex flex-col gap-1 w-full max-w-md font-mono text-xs">
<div className="flex justify-between text-zinc-500 border-b border-white/10 pb-1 mb-2">
<span>ASSET CLASS</span><span>TARGET</span><span>ACTUAL</span>
</div>
<div className="flex justify-between text-white">
<span className="w-1/3">EQUITIES</span><span className="w-1/3 text-center">60.0%</span><span className="w-1/3 text-right text-[#00E676]">60.1%</span>
</div>
<div className="w-full bg-[#030303] h-2 mt-1 mb-3 border border-white/10"><div className="bg-white h-full w-[60%]"></div></div>
<div className="flex justify-between text-white">
<span className="w-1/3">FIXED_INC</span><span className="w-1/3 text-center">30.0%</span><span className="w-1/3 text-right text-[#00E676]">29.9%</span>
</div>
<div className="w-full bg-[#030303] h-2 mt-1 mb-3 border border-white/10"><div className="bg-white h-full w-[30%]"></div></div>
</div>
</div>

<div className="p-10 tech-border-b relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<h3 className="text-2xl font-semibold text-white tracking-tight uppercase">Risk Barrier</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">Dynamic stop-losses and volatility scaling. Capital preservation is mathematically prioritized.</p>
<div className="w-full aspect-video bg-[#030303] border border-white/10 relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 flex items-end gap-1 p-2 opacity-50">
<div className="w-full bg-white h-[20%]"></div>
<div className="w-full bg-white h-[40%]"></div>
<div className="w-full bg-white h-[30%]"></div>
<div className="w-full bg-white h-[60%]"></div>
<div className="w-full bg-[#FF1744] h-[80%]"></div>
<div className="w-full bg-white h-[40%]"></div>
<div className="w-full bg-white h-[50%]"></div>
</div>
<div className="absolute top-2 left-2 text-[10px] font-mono text-[#FF1744] bg-[#FF1744]/10 px-1 border border-[#FF1744]/20">VOL. BREACH DETECTED -&gt; HALT</div>
</div>
</div>
</div>

<div className="p-10 md:tech-border-r relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="24"></iconify-icon>
<h3 className="text-2xl font-semibold text-white tracking-tight uppercase">Tax Harvest</h3>
</div>
<p className="text-sm text-zinc-400 mb-6">Automated realization of capital losses to offset gains, scanning every lot across all accounts instantly.</p>
</div>
<div className="text-4xl font-semibold text-white tracking-tight border-t border-white/10 pt-4">
                        +1.8% <span className="text-xs font-mono text-zinc-500 uppercase block mt-1">Avg Annual Alpha</span>
</div>
</div>

<div className="md:col-span-2 p-10 flex items-center justify-between bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.02))]">
<div className="max-w-md">
<h3 className="text-2xl font-semibold text-white tracking-tight uppercase mb-2">Custom Parameters</h3>
<p className="text-sm text-zinc-400">Define your structural limits. Let the engine handle the execution latency. Override manually via terminal if necessary.</p>
</div>
<a className="hidden sm:inline-flex btn-cut-outline px-6 py-3 border border-white text-white text-xs uppercase font-semibold tracking-widest hover:bg-white hover:text-black" href="#apply">
                        View Docs
                     </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20" id="performance">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8 uppercase">Proven Alpha Strategies</h2>
<div className="border-t border-white/10">

<div className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors -mx-6 px-6">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-auto mb-4 sm:mb-0">
<h4 className="text-xl font-semibold text-white tracking-tight uppercase w-48 group-hover:pl-2 transition-all">Quantum Yield</h4>
<p className="text-sm text-zinc-500 md:max-w-md">Autonomous dividend harvesting across global large-cap equities. Pure cashflow optimization.</p>
</div>
<div className="flex items-center gap-8 self-start sm:self-auto font-mono text-xs">
<div className="text-right">
<span className="block text-zinc-500 mb-1">TRG_APY</span>
<span className="text-base text-white">11.4%</span>
</div>
<div className="text-right w-24">
<span className="block text-zinc-500 mb-1">VOLATILITY</span>
<span className="text-[#00E676]">MODERATE</span>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors -mx-6 px-6">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-auto mb-4 sm:mb-0">
<h4 className="text-xl font-semibold text-white tracking-tight uppercase w-48 group-hover:pl-2 transition-all">Neural Credit</h4>
<p className="text-sm text-zinc-500 md:max-w-md">Algorithmic allocation in over-collateralized private debt structures. High predictability.</p>
</div>
<div className="flex items-center gap-8 self-start sm:self-auto font-mono text-xs">
<div className="text-right">
<span className="block text-zinc-500 mb-1">TRG_APY</span>
<span className="text-base text-white">8.9%</span>
</div>
<div className="text-right w-24">
<span className="block text-zinc-500 mb-1">VOLATILITY</span>
<span className="text-white">LOW</span>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors -mx-6 px-6">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-auto mb-4 sm:mb-0">
<h4 className="text-xl font-semibold text-white tracking-tight uppercase w-48 group-hover:pl-2 transition-all">Arb Vertex</h4>
<p className="text-sm text-zinc-500 md:max-w-md">High-frequency exploitation of cross-border ETF latency. Aggressive capital multiplication.</p>
</div>
<div className="flex items-center gap-8 self-start sm:self-auto font-mono text-xs">
<div className="text-right">
<span className="block text-zinc-500 mb-1">TRG_APY</span>
<span className="text-base text-white">22.1%</span>
</div>
<div className="text-right w-24">
<span className="block text-zinc-500 mb-1">VOLATILITY</span>
<span className="text-[#FF1744]">HIGH</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-20 bg-black tech-border-y">
<div className="max-w-[1600px] mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 uppercase">Deployment Tiers</h2>
<p className="text-lg text-zinc-400">Institutional infrastructure, scaled to your capital weight.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 max-w-6xl mx-auto">

<div className="p-10 tech-border-b md:tech-border-b-0 md:tech-border-r flex flex-col h-[32rem] bg-[#050505]">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2 uppercase">Professional</h3>
<p className="text-sm text-zinc-500 mb-8">For individual quants and elite retail.</p>
<div className="mb-8 flex-1">
<span className="text-5xl font-semibold text-white tracking-tighter">$2k</span>
<span className="text-xs font-mono text-zinc-500">/MO</span>
</div>
<ul className="space-y-4 mb-10 text-xs font-mono text-zinc-400">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span> UP TO $5M DEPLOYMENT</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span> STANDARD API LIMITS</li>
<li className="flex items-center gap-3 text-zinc-600"><span className="w-1 h-1 bg-zinc-600"></span> NO CUSTOM LOGIC</li>
</ul>
<a className="btn-cut-outline w-full py-4 text-center text-xs uppercase tracking-widest text-white font-semibold block" href="#apply">Initialize</a>
</div>

<div className="p-10 tech-border-b md:tech-border-b-0 md:tech-border-r flex flex-col h-[32rem] bg-white text-black relative">
<div className="absolute top-0 right-0 bg-black text-white text-[10px] uppercase font-mono px-3 py-1">Standard Issue</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 uppercase">Family Office</h3>
<p className="text-sm text-zinc-600 mb-8">Full autonomous capacity with direct engineering support.</p>
<div className="mb-8 flex-1">
<span className="text-6xl font-semibold tracking-tighter">$14k</span>
<span className="text-xs font-mono text-zinc-500">/MO</span>
</div>
<ul className="space-y-4 mb-10 text-xs font-mono font-semibold">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-black"></span> UP TO $50M DEPLOYMENT</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-black"></span> UNLIMITED WEBSOCKETS</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-black"></span> CUSTOM NEURAL LOGIC</li>
</ul>
<a className="btn-cut bg-black text-white w-full py-4 text-center text-xs uppercase tracking-widest font-semibold block hover:bg-zinc-800" href="#apply">Deploy Protocol</a>
</div>

<div className="p-10 flex flex-col h-[32rem] bg-[#050505]">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2 uppercase">Institutional</h3>
<p className="text-sm text-zinc-500 mb-8">For hedge funds and corporate treasuries.</p>
<div className="mb-8 flex-1">
<span className="text-4xl font-semibold text-white tracking-tighter uppercase">Contact</span>
</div>
<ul className="space-y-4 mb-10 text-xs font-mono text-zinc-400">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span> UNLIMITED DEPLOYMENT</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span> ON-PREMISE ENGINE</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span> DEDICATED QUANT DEV</li>
</ul>
<a className="btn-cut-outline w-full py-4 text-center text-xs uppercase tracking-widest text-white font-semibold block" href="#apply">Commence Dialogue</a>
</div>
</div>
</div>
</section>

<section className="py-16 relative z-20">
<div className="max-w-[1200px] mx-auto px-6 text-center">
<h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-12">Security Fabric</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 bg-[#0A0A0A]">
<div className="aspect-square tech-border-r tech-border-b md:tech-border-b-0 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-zinc-400 tracking-tight">SIPC INSURED</span>
</div>
<div className="aspect-square tech-border-r tech-border-b md:tech-border-b-0 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:lock-password-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-zinc-400 tracking-tight">AES-256 CRYPTO</span>
</div>
<div className="aspect-square tech-border-r flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:banknotes-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-zinc-400 tracking-tight">FINRA MEMBER</span>
</div>
<div className="aspect-square flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors">
<iconify-icon className="text-white" icon="solar:server-minimalistic-linear" width="32"></iconify-icon>
<span className="text-xs font-mono text-zinc-400 tracking-tight">AIRGAPPED KEYS</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20 bg-black">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 uppercase">Operational Parameters</h2>
<div className="border-t border-white/10">
<details className="group border-b border-white/10 py-6" open="">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-zinc-300 group-open:text-white transition-colors text-lg tracking-tight uppercase">
                        Wash-Sale Rule Handling
                        <iconify-icon className="group-open:hidden" icon="solar:add-square-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-square-linear" width="24"></iconify-icon>
</summary>
<div className="pt-4 text-zinc-400 text-sm leading-relaxed overflow-hidden font-mono">
                        &gt; KOR'S ENGINE NATIVELY IDENTIFIES PROXY ASSETS THAT MIRROR THE RISK/RETURN PROFILE OF THE HARVESTED ASSET WITHOUT VIOLATING THE 30-DAY WASH-SALE RULE. CAPITAL IS TEMPORARILY PARKED IN HIGHLY CORRELATED ETFS BEFORE SWEEPING BACK TO TARGET ALLOCATIONS.
                    </div>
</details>
<details className="group border-b border-white/10 py-6">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-zinc-300 group-open:text-white transition-colors text-lg tracking-tight uppercase">
                        Manual Overrides
                        <iconify-icon className="group-open:hidden" icon="solar:add-square-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-square-linear" width="24"></iconify-icon>
</summary>
<div className="pt-4 text-zinc-400 text-sm leading-relaxed overflow-hidden font-mono">
                        &gt; WHILE DESIGNED FOR AUTONOMY, FAMILY OFFICE AND INSTITUTIONAL TIERS GRANT MANUAL OVERRIDE CAPABILITIES VIA API OR TERMINAL DASHBOARD, ALLOWING FOR EXACT ALLOCATION LOCKS.
                    </div>
</details>
<details className="group border-b border-white/10 py-6">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-zinc-300 group-open:text-white transition-colors text-lg tracking-tight uppercase">
                        Custodial Structure
                        <iconify-icon className="group-open:hidden" icon="solar:add-square-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-square-linear" width="24"></iconify-icon>
</summary>
<div className="pt-4 text-zinc-400 text-sm leading-relaxed overflow-hidden font-mono">
                        &gt; KOR IS STRICTLY NON-CUSTODIAL. WE EXECUTE LOGIC LAYER API CALLS TO YOUR EXISTING PRIME BROKERAGE USING RESTRICTED, IP-WHITELISTED EXECUTION-ONLY KEYS. YOUR CAPITAL NEVER LEAVES YOUR ACCOUNTS.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative z-20 flex justify-center tech-border-t" id="apply">
<div className="max-w-[800px] w-full px-6">
<div className="tech-panel p-1 border border-white/20">
<div className="bg-[#030303] p-10 md:p-16 relative">
<div className="absolute top-4 left-4 crosshair"></div>
<div className="absolute bottom-4 right-4 crosshair-b"></div>
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2 uppercase">Terminal Access Request</h2>
<p className="text-xs font-mono text-zinc-500">INITIATE ONBOARDING PROTOCOL. ENTER ENTITY DATA.</p>
</div>
<form className="space-y-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<label className="block text-xs font-mono text-zinc-500 mb-2" htmlFor="name">&gt; ENTITY_NAME</label>
<input className="w-full bg-[#0A0A0A] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-white transition-colors rounded-none" id="name" required="" type="text"/>
</div>
<div className="relative">
<label className="block text-xs font-mono text-zinc-500 mb-2" htmlFor="email">&gt; SECURE_COMMS (EMAIL)</label>
<input className="w-full bg-[#0A0A0A] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-white transition-colors rounded-none" id="email" required="" type="email"/>
</div>
</div>
<div className="relative">
<label className="block text-xs font-mono text-zinc-500 mb-2" htmlFor="aum">&gt; EST_AUM_DEPLOYMENT</label>
<div className="relative">
<select className="w-full bg-[#0A0A0A] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-white transition-colors rounded-none appearance-none cursor-pointer" id="aum">
<option disabled="" hidden="" selected="" value="">SELECT_RANGE</option>
<option className="bg-[#0A0A0A] text-white" value="tier1">UNDER $5M</option>
<option className="bg-[#0A0A0A] text-white" value="tier2">$5M - $50M</option>
<option className="bg-[#0A0A0A] text-white" value="tier3">$50M+</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="btn-cut bg-white text-black w-full py-4 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 mt-4" type="submit">
                            Execute Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative w-full border-t border-white/10 bg-black pt-20 pb-12 z-20 overflow-hidden">

<div className="absolute bottom-0 left-0 w-full flex justify-center z-0 select-none pointer-events-none">
<h1 className="text-[25vw] font-bold text-white/[0.02] leading-[0.75] tracking-tighter m-0 p-0 uppercase">KOR</h1>
</div>
<div className="max-w-[1600px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div>
<div className="flex items-center gap-2 mb-6 text-white">
<svg className="w-6 h-6 shrink-0" viewbox="0 0 100 100"><path d="M10 10 L40 10 L40 40 L70 40 L70 10 L90 10 L90 90 L70 90 L70 60 L40 60 L40 90 L10 90 Z" fill="currentColor"></path></svg>
<span className="font-semibold text-xl tracking-tight uppercase">KOR</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed font-mono uppercase">
                        SYS_STATUS: ONLINE<br/>
                        NODE: GLOBAL_EDGE
                    </p>
</div>
<div>
<h4 className="text-xs font-mono tracking-widest text-white mb-6 uppercase">Engine</h4>
<ul className="space-y-4 text-xs text-zinc-500 uppercase font-semibold">
<li><a className="hover:text-white transition-colors" href="#">Yield Architecture</a></li>
<li><a className="hover:text-white transition-colors" href="#">Neural Strategies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Risk Parameters</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono tracking-widest text-white mb-6 uppercase">Infrastructure</h4>
<ul className="space-y-4 text-xs text-zinc-500 uppercase font-semibold">
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Socket Feeds</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono tracking-widest text-white mb-6 uppercase">Entity</h4>
<ul className="space-y-4 text-xs text-zinc-500 uppercase font-semibold">
<li><a className="hover:text-white transition-colors" href="#">Protocol Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-mono uppercase">© 2024 KOR Algorithmic Systems. All execution rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
