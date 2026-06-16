import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple script to handle fade-in on scroll for lower sections
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            // Add initial state classes manually if needed for JS animation, 
            // but CSS sticky handling does most heavy lifting here.
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div className="scanline"></div>

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-10 flex justify-between items-center border-b border-white/5 bg-black/10 backdrop-blur-sm">
<div className="flex items-center gap-4">
<span className="text-xl md:text-2xl font-bold tracking-tighter leading-none text-white">BASIC 3PL</span>
<div className="hidden md:flex items-center gap-2 text-[10px] text-cyan-400 mono-font tracking-widest border border-cyan-900/50 px-2 py-1 rounded-sm bg-cyan-950/20">
<span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                SYSTEM ONLINE
            </div>
</div>
<div className="flex items-center gap-8">
<button className="hidden md:block text-xs font-medium tracking-widest text-slate-300 hover:text-white transition-colors uppercase">Login</button>
<button className="group flex items-center gap-2 text-xs font-medium tracking-widest text-white uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">
                Initialize
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</nav>


<section className="relative h-screen w-full flex flex-col justify-end pb-12 md:pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Automated Warehouse" className="w-full h-full object-cover opacity-40 grayscale brightness-75" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/60 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_120%)]"></div>
</div>

<div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
<div className="absolute top-0 right-1/4 w-px h-full bg-white"></div>
<div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
</div>

<div className="relative z-20 px-6 md:px-10 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-8">
<div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
<span className="iconify text-cyan-400" data-icon="lucide:cpu" data-width="18"></span>
<span className="text-xs tracking-[0.2em] text-cyan-400 uppercase mono-font">Fulfillment Architecture v4.0</span>
</div>
<h1 className="text-5xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tighter text-white mb-6 text-glow opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
                    LOGIC FOR <br/>
<span className="text-slate-400 italic font-light">PHYSICAL</span> SCALE.
                </h1>
<p className="text-sm md:text-lg text-slate-400 max-w-md leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
                    The operating system for modern commerce. Industrial automation meets software precision. No friction. No latency.
                </p>
</div>
<div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
<div className="glass-panel p-4 w-full md:w-64">
<div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
<span className="text-[10px] uppercase tracking-widest text-slate-500">Global Uptime</span>
<span className="text-cyan-400 text-xs mono-font">99.99%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] uppercase tracking-widest text-slate-500">Pick Rate</span>
<span className="text-white text-xs mono-font">&lt; 120ms</span>
</div>
</div>
<button className="w-full md:w-auto bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-cyan-50 transition-colors flex items-center justify-center gap-3">
                    Deploy Infrastructure
                    <span className="iconify" data-icon="lucide:chevron-right"></span>
</button>
</div>
</div>
</section>


<section className="sticky top-0 h-screen w-full bg-[#050A14] border-t border-white/5 flex flex-col md:flex-row overflow-hidden group">

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
<img alt="Inbound Conveyor" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale transition-transform duration-[20s] ease-linear group-hover:scale-110" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050A14] to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-64 h-64 border border-cyan-500/30 rounded-full relative animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 w-full h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent origin-bottom animate-[spin_4s_linear_infinite]"></div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 flex flex-col justify-center px-6 md:px-16 order-2 md:order-1 border-r border-white/5">
<div className="mb-8">
<span className="mono-font text-cyan-500 text-xs tracking-widest block mb-4">01 // INGRESS</span>
<h2 className="text-4xl md:text-7xl tracking-tighter text-white font-medium mb-2 serif-font">Intelligent <br/> Inbound.</h2>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">24<span className="text-lg text-slate-500">hr</span></span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Dock-to-Stock</p>
</div>
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">0<span className="text-lg text-slate-500">%</span></span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Discrepancy</p>
</div>
</div>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed border-l border-white/20 pl-4">
                Automated scanning and dimensional weight capture upon arrival. Your inventory is digitized instantly.
            </p>
</div>
</section>

<section className="sticky top-0 h-screen w-full bg-[#03060C] border-t border-white/5 flex flex-col md:flex-row overflow-hidden group">

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
<img alt="Robotics" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-screen transition-transform duration-[20s] ease-linear group-hover:scale-110" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#03060C] to-transparent"></div>

<div className="absolute bottom-10 right-10 flex gap-2">
<div className="w-2 h-12 bg-cyan-500/50 animate-pulse"></div>
<div className="w-2 h-8 bg-cyan-500/30 animate-pulse delay-75"></div>
<div className="w-2 h-16 bg-cyan-500/70 animate-pulse delay-150"></div>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 flex flex-col justify-center px-6 md:px-16 order-2 md:order-1 border-r border-white/5">
<div className="mb-8">
<span className="mono-font text-cyan-500 text-xs tracking-widest block mb-4">02 // STORAGE</span>
<h2 className="text-4xl md:text-7xl tracking-tighter text-white font-medium mb-2 serif-font">High-Density <br/> Logic.</h2>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">40<span className="text-lg text-slate-500">ft</span></span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Vertical Scale</p>
</div>
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">AI</span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Optimization</p>
</div>
</div>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed border-l border-white/20 pl-4">
                Robotic shuttles navigate high-density racking. Predictive algorithms position inventory closer to picking stations before orders are placed.
            </p>
</div>
</section>

<section className="sticky top-0 h-screen w-full bg-[#080C14] border-t border-white/5 flex flex-col md:flex-row overflow-hidden group">

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
<img alt="Conveyor Motion" className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale transition-transform duration-[20s] ease-linear group-hover:scale-110" src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&amp;w=3009&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#080C14] to-transparent"></div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/20 overflow-hidden">
<div className="w-32 h-full bg-cyan-400 blur-[4px] absolute top-0 animate-[shimmer_2s_infinite]"></div>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 flex flex-col justify-center px-6 md:px-16 order-2 md:order-1 border-r border-white/5">
<div className="mb-8">
<span className="mono-font text-cyan-500 text-xs tracking-widest block mb-4">03 // PROCESSING</span>
<h2 className="text-4xl md:text-7xl tracking-tighter text-white font-medium mb-2 serif-font">Precision <br/> Velocity.</h2>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">99.8<span className="text-lg text-slate-500">%</span></span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Accuracy Rate</p>
</div>
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">2<span className="text-lg text-slate-500">pm</span></span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Cutoff Time</p>
</div>
</div>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed border-l border-white/20 pl-4">
                Lights-out automation for standard parcels. White-glove customization stations for premium unboxing experiences.
            </p>
</div>
</section>

<section className="sticky top-0 h-screen w-full bg-[#020408] border-t border-white/5 flex flex-col md:flex-row overflow-hidden group">

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
<img alt="Global Network" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-transform duration-[20s] ease-linear group-hover:scale-110" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#020408] to-transparent"></div>

<div className="absolute inset-0 p-10 grid grid-cols-4 grid-rows-4 gap-4 opacity-30">
<div className="border-t border-l border-white/20 w-4 h-4"></div>
<div className="col-start-4 border-t border-r border-white/20 w-4 h-4 justify-self-end"></div>
<div className="row-start-4 border-b border-l border-white/20 w-4 h-4 self-end"></div>
<div className="col-start-4 row-start-4 border-b border-r border-white/20 w-4 h-4 self-end justify-self-end"></div>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 flex flex-col justify-center px-6 md:px-16 order-2 md:order-1 border-r border-white/5">
<div className="mb-8">
<span className="mono-font text-cyan-500 text-xs tracking-widest block mb-4">04 // DISPATCH</span>
<h2 className="text-4xl md:text-7xl tracking-tighter text-white font-medium mb-2 serif-font">Global <br/> Injection.</h2>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">2<span className="text-lg text-slate-500">Day</span></span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">US Coverage</p>
</div>
<div>
<span className="block text-4xl md:text-5xl font-light text-white mb-1 mono-font">API</span>
<p className="text-[10px] uppercase tracking-widest text-slate-400">Real-time Sync</p>
</div>
</div>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed border-l border-white/20 pl-4">
                Algorithmically selected carriers for speed and cost. Tracking data pushed instantly to your ERP.
            </p>
<div className="mt-8">
<button className="group flex items-center gap-3 text-xs tracking-widest text-white uppercase hover:text-cyan-400 transition-colors">
                    View Network Map
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="relative min-h-[80vh] w-full bg-[#020408] border-t border-white/10 flex flex-col items-center justify-center py-24 px-6">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full"></div>
</div>
<div className="z-10 text-center max-w-4xl mx-auto">
<div className="inline-flex items-center justify-center border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md mb-8">
<span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
<span className="text-[10px] md:text-xs tracking-widest uppercase text-slate-300 mono-font">Capacity Available: Q4 2024</span>
</div>
<h2 className="text-5xl md:text-8xl tracking-tight text-white serif-font mb-8">
                Scale your machine.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full text-left md:text-center max-w-2xl mx-auto">
<div className="p-6 border border-white/5 hover:border-cyan-500/30 transition-colors bg-white/[0.02]">
<span className="iconify text-slate-400 mb-4 mx-auto" data-icon="lucide:box" data-width="24"></span>
<h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">DTC</h3>
<p className="text-xs text-slate-500">High volume, unit-level precision.</p>
</div>
<div className="p-6 border border-white/5 hover:border-cyan-500/30 transition-colors bg-white/[0.02]">
<span className="iconify text-slate-400 mb-4 mx-auto" data-icon="lucide:container" data-width="24"></span>
<h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">B2B</h3>
<p className="text-xs text-slate-500">Compliant retail routing guides.</p>
</div>
<div className="p-6 border border-white/5 hover:border-cyan-500/30 transition-colors bg-white/[0.02]">
<span className="iconify text-slate-400 mb-4 mx-auto" data-icon="lucide:refresh-cw" data-width="24"></span>
<h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Returns</h3>
<p className="text-xs text-slate-500">Grading, refurb, and restock.</p>
</div>
</div>
<button className="bg-white text-black px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-cyan-50 hover:scale-105 transition-all duration-300 accent-glow">
                Initialize Partnership
            </button>
</div>
<footer className="absolute bottom-0 w-full border-t border-white/5 py-8 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest">
<div className="flex gap-6">
<span>© 2024 Basic 3PL</span>
<span>System Status: Normal</span>
</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Terms</a>
<a className="hover:text-cyan-400 transition-colors" href="#">API Docs</a>
</div>
</footer>
</section>

<style>
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100vw); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
