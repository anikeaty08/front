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
        let width, height;
        let particles = [];
        const mouse = { x: -1000, y: -1000, radius: 200 };

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            
            const spacing = window.innerWidth > 768 ? 45 : 30; 
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    particles.push({
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                        size: 1.5
                    });
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    
                    const targetX = p.x - Math.cos(angle) * force * 15;
                    const targetY = p.y - Math.sin(angle) * force * 15;
                    
                    p.vx += (targetX - p.x) * 0.1;
                    p.vy += (targetY - p.y) * 0.1;
                }

                p.vx += (p.baseX - p.x) * 0.04;
                p.vy += (p.baseY - p.y) * 0.04;
                p.vx *= 0.85;
                p.vy *= 0.85;

                p.x += p.vx;
                p.y += p.vy;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                
                if (distance < mouse.radius * 1.5) {
                    const intensity = 1 - (distance / (mouse.radius * 1.5));
                    ctx.fillStyle = `rgba(255, 46, 0, ${intensity * 0.9})`;
                    p.size = 1.5 + (intensity * 2);
                } else {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                    p.size = 1.5;
                }
                
                ctx.fill();
            });

            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        
        window.addEventListener('mouseleave', () => { 
            mouse.x = -1000; 
            mouse.y = -1000; 
        });

        initCanvas();
        animateCanvas();

        const distTicker = document.getElementById('dist-ticker');
        let baseDist = 384400.2;
        setInterval(() => {
            const variance = (Math.random() * 0.2 - 0.1);
            baseDist += variance;
            if(distTicker) {
                distTicker.innerText = baseDist.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' KM';
            }
        }, 3000);
    
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
      

<div className="fixed top-0 left-0 w-full z-[60] bg-[#0a0a0c] border-b border-white/5 py-1.5 flex justify-between items-center px-4 md:px-8 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-widest text-[#8a8a93]">
<div className="flex items-center gap-4">
<div className="bg-white/5 p-1 flex items-center justify-center rounded-sm text-white/50">
<iconify-icon icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="flex items-center gap-2">SYS.OP.NORMAL</span>
<span className="hidden sm:inline opacity-30">|</span>
<span className="hidden sm:inline">LAT: 28.5°N LNG: 243.2°E</span>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:inline">ALLOCATION: 3/12</span>
<span className="text-white">DEPARTURE: 2031 Q4</span>
</div>
</div>

<nav className="fixed top-[34px] w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="w-full max-w-[1600px] px-4 md:px-8 mx-auto py-4 flex justify-between items-center">

<a className="flex items-center gap-4 group" href="#">
<svg className="w-6 h-6 text-white group-hover:text-[#ff2e00] transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2L22 12L12 22L2 12L12 2Z"></path>
<path d="M12 8V16M8 12H16"></path>
</svg>
<span className="font-['JetBrains_Mono',monospace] text-sm tracking-[0.2em] font-light text-white">AEON</span>
</a>

<div className="hidden lg:flex items-center gap-12 font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#8a8a93] uppercase">
<a className="hover:text-white transition-colors duration-300 relative group" href="#capability">
                    Capability
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group" href="#infrastructure">
                    Infrastructure
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group" href="#allocation">
                    Asset Allocation
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group" href="#deployment">
                    Deployment
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<a className="group flex items-center gap-3 border border-white/10 bg-[#0a0a0c] px-6 py-2.5 font-['JetBrains_Mono',monospace] text-xs tracking-widest text-white uppercase hover:border-white/30 transition-all duration-300 relative overflow-hidden -[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]" href="#acquire">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10">Initiate Transfer</span>
<iconify-icon className="relative z-10 text-sm group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-[100svh] flex items-center pt-[100px] border-b border-white/5 overflow-hidden">
<canvas className="absolute inset-0 w-full h-full pointer-events-none z-[1]" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0c_100%)] z-[2] pointer-events-none opacity-80"></div>
<div className="relative z-10 w-full max-w-[1600px] px-4 md:px-8 mx-auto flex flex-col justify-center">
<div className="flex items-center gap-3 font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#ff2e00] mb-8 uppercase opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
<iconify-icon className="text-base" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>[ ORBITAL ASSET IDENTIFIED ]</span>
</div>
<div className="max-w-5xl">
<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase mb-8 font-light leading-[0.9]">
<span className="text-white block opacity-0 animate-[translateUp_1s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">Outgrow Earth.</span>
<span className="text-[#333333] block opacity-0 animate-[translateUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">Acquire Lunar<br/>Leverage.</span>
</h1>
<p className="text-[#8a8a93] max-w-2xl mb-12 text-lg md:text-xl font-light leading-relaxed opacity-0 animate-[translateUp_1s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]">
                    Gravity is a constraint. Legacy is not. AEON is the first commercial lunar habitat built strictly for elite human advancement, absolute privacy, and total uncoupling from terrestrial noise.
                </p>
<div className="flex flex-wrap items-center gap-6 opacity-0 animate-[translateUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
<a className="group relative flex items-center gap-3 bg-[#0a0a0c] border border-white/10 px-8 py-4 font-['JetBrains_Mono',monospace] text-xs tracking-widest text-white uppercase hover:border-[#ff2e00] transition-colors duration-300 -[clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] overflow-hidden" href="#acquire">
<div className="absolute inset-0 bg-[#ff2e00]/10 scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-out"></div>
<span className="relative z-10 group-hover:text-[#ff2e00] transition-colors duration-300">Secure Allocation</span>
<iconify-icon className="relative z-10 text-base group-hover:text-[#ff2e00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="px-8 py-4 font-['JetBrains_Mono',monospace] text-xs tracking-widest uppercase text-[#8a8a93] border border-transparent hover:text-white transition-colors duration-300 flex items-center gap-2 group relative" href="#telemetry">
                        View Telemetry
                        <span className="absolute bottom-2 left-8 w-0 h-px bg-white transition-all duration-300 group-hover:w-[calc(100%-64px)]"></span>
</a>
</div>
</div>

<div className="absolute right-4 md:right-8 bottom-8 md:bottom-12 w-full max-w-[340px] bg-[#0a0a0c]/40 backdrop-blur-md border border-white/5 p-6 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards] hidden lg:block group">
<div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-white/50 transition-colors duration-300 group-hover:border-[#ff2e00]"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-white/50 transition-colors duration-300 group-hover:border-[#ff2e00]"></div>
<div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#8a8a93] uppercase tracking-widest">Current Distance</span>
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#ff2e00] tracking-widest" id="dist-ticker">384,400.2 KM</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center group/item">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#8a8a93] group-hover/item:text-white transition-colors">GRAVITY OFFSET</span>
<span className="font-['JetBrains_Mono',monospace] text-xs text-white">0.166G (OPTIMAL)</span>
</div>
<div className="flex justify-between items-center group/item">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#8a8a93] group-hover/item:text-white transition-colors">ACOUSTIC LEVEL</span>
<span className="font-['JetBrains_Mono',monospace] text-xs text-white">-85dB (ABSOLUTE)</span>
</div>
<div className="w-full h-px bg-white/10 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-[#ff2e00] w-[25%] relative">
<div className="absolute top-0 right-0 w-1 h-full bg-white animate-ping"></div>
</div>
</div>
<div className="font-['JetBrains_Mono',monospace] text-xs text-[#8a8a93] text-right mt-2 tracking-widest opacity-50">CAPACITY: 25% SECURED</div>
</div>
</div>
</div>
</section>

<section className="relative flex items-center py-24 z-20" id="capability">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 text-white">
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16 uppercase">Core Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
<div className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500">
<iconify-icon className="text-4xl text-[#ff2e00] mb-8" icon="solar:shield-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium mb-4 tracking-tight">Absolute Security</h3>
<p className="text-[#8a8a93] font-light leading-relaxed">Encrypted physical and digital perimeters ensuring unmatched privacy and asset protection from terrestrial vectors.</p>
</div>
<div className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500">
<iconify-icon className="text-4xl text-[#ff2e00] mb-8" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium mb-4 tracking-tight">Quantum Infrastructure</h3>
<p className="text-[#8a8a93] font-light leading-relaxed">Next-generation computing facilities isolated from interference, operating in zero-atmosphere thermal conditions.</p>
</div>
<div className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500">
<iconify-icon className="text-4xl text-[#ff2e00] mb-8" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium mb-4 tracking-tight">Closed-Loop Biosphere</h3>
<p className="text-[#8a8a93] font-light leading-relaxed">Self-sustaining atmospheric and agricultural systems designed for indefinite deployment and complete autonomy.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/5" id="infrastructure">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
<div className="w-full md:w-1/2">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#ff2e00] mb-4 uppercase">
                        [ Module 01 ]
                    </div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-white uppercase">Habitat Architecture</h2>
<p className="text-[#8a8a93] font-light leading-relaxed mb-8 text-lg">
                        Constructed using autonomous regolith 3D printing and titanium reinforcement. The habitat provides 14,000 square meters of highly adaptable living and research space. Radiation shielding exceeds multi-planetary baseline requirements by 400%.
                    </p>
<ul className="space-y-4 font-['JetBrains_Mono',monospace] text-sm text-[#8a8a93] tracking-wider">
<li className="flex items-center gap-4">
<iconify-icon className="text-white text-lg" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>VOLUME: 45,000 M³</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-white text-lg" icon="solar:temperature-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>THERMAL REGULATION: 21°C BASELINE</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-white text-lg" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>AI INTEGRATION: AEON.OS V2.4</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 aspect-square relative border border-white/5 bg-[#0a0a0c] overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,0,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#ff2e00]/30 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 w-full h-px bg-white/5 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-px h-full bg-white/5 -translate-x-1/2"></div>
<div className="absolute bottom-6 left-6 font-['JetBrains_Mono',monospace] text-xs text-white/50">TOPOGRAPHIC RENDER / SECTOR 4</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/5" id="allocation">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-white uppercase">Asset Allocation</h2>
<p className="text-[#8a8a93] font-light max-w-2xl mx-auto">Secure your quadrant. Only 12 allocations remain for the preliminary launch window.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="border border-white/5 bg-white/[0.01] p-8 flex flex-col hover:border-white/20 transition-colors duration-300">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#8a8a93] mb-4 uppercase">Tier I</div>
<h3 className="text-2xl font-light text-white mb-2 uppercase tracking-tight">Observer Unit</h3>
<div className="text-3xl font-light text-white mb-8 tracking-tighter">150M<span className="text-lg text-[#8a8a93] ml-2">USDC</span></div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>150 m² Private Quarters</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Standard Earth-Comm Bandwidth</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Base Life Support &amp; Nutritional Allocation</span>
</li>
</ul>
<a className="w-full text-center py-3 border border-white/10 text-xs font-['JetBrains_Mono',monospace] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="#">Select</a>
</div>

<div className="border border-[#ff2e00]/50 bg-[#ff2e00]/[0.02] p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,46,0,0.05)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff2e00] text-black text-[10px] font-['JetBrains_Mono',monospace] px-3 py-1 uppercase tracking-widest font-medium">Optimal Yield</div>
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#ff2e00] mb-4 uppercase">Tier II</div>
<h3 className="text-2xl font-light text-white mb-2 uppercase tracking-tight">Resident Estate</h3>
<div className="text-3xl font-light text-white mb-8 tracking-tighter">450M<span className="text-lg text-[#8a8a93] ml-2">USDC</span></div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-[#ff2e00] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">400 m² Multi-Level Estate</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-[#ff2e00] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Unmetered Quantum Encrypted Comms</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-[#ff2e00] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Premium Biosphere Access &amp; Synthetics</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-[#ff2e00] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Priority Return Vehicle Access</span>
</li>
</ul>
<a className="w-full text-center py-3 bg-[#ff2e00] text-black text-xs font-['JetBrains_Mono',monospace] uppercase tracking-widest hover:bg-white transition-all duration-300" href="#">Initiate Transfer</a>
</div>

<div className="border border-white/5 bg-white/[0.01] p-8 flex flex-col hover:border-white/20 transition-colors duration-300">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#8a8a93] mb-4 uppercase">Tier III</div>
<h3 className="text-2xl font-light text-white mb-2 uppercase tracking-tight">Founder Compound</h3>
<div className="text-3xl font-light text-white mb-8 tracking-tighter">1.2B<span className="text-lg text-[#8a8a93] ml-2">USDC</span></div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>1200 m² Isolated Compound</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Private Server Rack Space (Lunar Data Center)</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Dedicated Life Support Redundancy</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#8a8a93]">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Governance Voting Rights</span>
</li>
</ul>
<a className="w-full text-center py-3 border border-white/10 text-xs font-['JetBrains_Mono',monospace] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="#">Select</a>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/5 bg-[#0a0a0c]" id="deployment">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16 text-white uppercase text-center">Deployment Timeline</h2>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

<div className="space-y-12">
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#0a0a0c] border border-white/30 rounded-full md:-translate-x-1/2 -translate-x-[5px] mt-1.5 md:mt-0 group-hover:border-[#ff2e00] group-hover:bg-[#ff2e00] transition-colors duration-300 z-10"></div>
<div className="md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left md:text-right">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#8a8a93] mb-2">PHASE 01 // 2028 Q2</div>
<h4 className="text-xl font-light text-white tracking-tight uppercase mb-2">Initial Payload</h4>
</div>
<div className="md:w-1/2 pl-12 md:pl-16 mt-2 md:mt-0 text-[#8a8a93] font-light text-sm">
                            Deployment of autonomous rovers and regolith processors. Establishment of the foundational landing pad and core energy grid using solar arrays.
                        </div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#0a0a0c] border border-white/30 rounded-full md:-translate-x-1/2 -translate-x-[5px] mt-1.5 md:mt-0 group-hover:border-[#ff2e00] group-hover:bg-[#ff2e00] transition-colors duration-300 z-10"></div>
<div className="md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left md:text-right md:order-1 order-2 mt-2 md:mt-0 text-[#8a8a93] font-light text-sm">
                            Delivery of primary life support systems, atmospheric generators, and initial architectural modules. System sealing and pressurization tests commence.
                        </div>
<div className="md:w-1/2 pl-12 md:pl-16 md:order-2 order-1 text-left">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#8a8a93] mb-2">PHASE 02 // 2029 Q4</div>
<h4 className="text-xl font-light text-white tracking-tight uppercase mb-2">Structural Assembly</h4>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#0a0a0c] border border-white/30 rounded-full md:-translate-x-1/2 -translate-x-[5px] mt-1.5 md:mt-0 group-hover:border-[#ff2e00] group-hover:bg-[#ff2e00] transition-colors duration-300 z-10"></div>
<div className="md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left md:text-right">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-widest text-[#ff2e00] mb-2">PHASE 03 // 2031 Q4</div>
<h4 className="text-xl font-light text-white tracking-tight uppercase mb-2">Resident Transport</h4>
</div>
<div className="md:w-1/2 pl-12 md:pl-16 mt-2 md:mt-0 text-white font-light text-sm">
                            Boarding of the first 12 asset holders via dedicated heavy-lift shuttles. Final uncoupling from Earth-based regulatory constraints.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-8 bg-[#0a0a0c]">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4 opacity-50">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2L22 12L12 22L2 12L12 2Z"></path>
<path d="M12 8V16M8 12H16"></path>
</svg>
<span className="font-['JetBrains_Mono',monospace] text-xs tracking-widest uppercase text-white">AEON Corporation © 2028</span>
</div>
<div className="flex items-center gap-6 font-['JetBrains_Mono',monospace] text-[10px] tracking-widest text-[#8a8a93] uppercase">
<a className="hover:text-white transition-colors" href="#">Privacy Protocol</a>
<a className="hover:text-white transition-colors" href="#">Terms of Allocation</a>
</div>
</div>
</footer>
<style>
        @keyframes translateUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>


    </>
  );
}
