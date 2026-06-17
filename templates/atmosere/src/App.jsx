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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Initialize Icons
        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
            }
        });

        // Generate Nanobot Swarm Particles
        const swarmContainer = document.getElementById('swarm-container');
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.classList.add('nano-particle');
            
            // Random positioning and sizing
            const size = Math.random() * 3 + 1 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay to create chaotic swarm feel
            const duration = Math.random() * 5 + 3 + 's';
            particle.style.animation = `float-swarm ${duration} ease-in-out infinite`;
            particle.style.animationDelay = -Math.random() * 5 + 's';
            
            swarmContainer.appendChild(particle);
        }

        // Scroll Animations (Fade In/Out and Unicorn Opacity)
        const unicornBg = document.getElementById('unicorn-bg');
        const reveals = document.querySelectorAll('.reveal');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Fade out Unicorn Background as user scrolls down
            // Starts fading immediately, completely invisible by 800px scroll
            const opacity = Math.max(0, 1 - (scrollY / 800));
            unicornBg.style.opacity = opacity;

            // Reveal Sections
            reveals.forEach(reveal => {
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                } else {
                    // Optional: Fade out when scrolling back up
                    // reveal.classList.remove('active'); 
                }
            });
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
      


<div className="fixed top-0 left-0 w-full h-full -z-20 bg-[#030305] transition-opacity duration-300" id="unicorn-bg">
<div data-us-project="1bY8o6HVTI1oxJxuCJEG" style={{width: '100%', height: '100%'}}></div>
</div>



<div className="fixed inset-0 z-[-1]" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'linear-gradient(to bottom, black, transparent 90%)', pointerEvents: 'none'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#12A4FF] to-[#00796B] flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="aperture"></i>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-[#12A4FF] transition-colors">
                    ATMO<span className="animate-pulse mx-0.5 text-[#12A4FF]">//</span>SERE
                </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#technology">Technology</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#vision">Vision</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all group" onclick="document.getElementById('technology').scrollIntoView({behavior: 'smooth'})">
<span>Deploy System</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#12A4FF]" data-lucide="arrow-right"></i>
</button>
</div>
</nav>
<main>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center z-10 mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 reveal active">
<span className="flex h-2 w-2 rounded-full bg-[#12A4FF] animate-pulse"></span>
<span className="text-xs font-medium text-[#12A4FF] tracking-wide uppercase">Starlink Uplink Active</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[0.9] reveal active transition-delay-100">
                    ATMO<span className="text-[#12A4FF] animate-pulse">//</span>SERE
                </h1>
<p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed reveal active transition-delay-200">
                    The autonomous climate vision system. Shifting humanity from reacting to disasters to <span className="text-white font-medium">anticipating them</span>.
                </p>
<div className="flex justify-center reveal active transition-delay-300">
<button className="px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-[#12A4FF] hover:text-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]" onclick="document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'})">
                        Explore System
                        <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-8 reveal" id="how-it-works">
<div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 overflow-hidden">

<div className="grid md:grid-cols-3 gap-8 relative z-10">

<div className="flex flex-col items-center text-center relative group">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-1 h-1 bg-[#12A4FF] rounded-full absolute animate-[ping_1s_infinite]"></div>
<div className="w-1 h-1 bg-[#12A4FF] rounded-full absolute translate-x-3 translate-y-2 opacity-60"></div>
<div className="w-1 h-1 bg-[#12A4FF] rounded-full absolute -translate-x-2 -translate-y-3 opacity-60"></div>
</div>
<i className="w-6 h-6 text-white relative z-10" data-lucide="bot"></i>
</div>
<h3 className="text-white font-medium text-sm">1. Nanobot Swarm</h3>
<p className="text-xs text-white/40 mt-1 max-w-[150px]">Autonomous sensors collect molecular air/soil data.</p>

<div className="hidden md:block absolute top-8 -right-4 w-full h-[2px] bg-gradient-to-r from-transparent via-[#12A4FF]/50 to-transparent"></div>
<div className="md:hidden absolute -bottom-8 left-1/2 w-[1px] h-8 bg-gradient-to-b from-[#12A4FF]/50 to-transparent"></div>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-12 beam-line-up"></div>
<div className="w-20 h-20 rounded-full bg-[#12A4FF]/10 border border-[#12A4FF]/30 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(18,164,255,0.2)]">
<i className="w-8 h-8 text-[#12A4FF]" data-lucide="satellite"></i>
</div>
<h3 className="text-white font-medium text-sm">2. Starlink Uplink</h3>
<p className="text-xs text-white/40 mt-1 max-w-[150px]">Low-latency transmission from remote zones.</p>
<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-12 beam-line-down"></div>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#6ECF7F]" data-lucide="server"></i>
</div>
<h3 className="text-white font-medium text-sm">3. Insight Engine</h3>
<p className="text-xs text-white/40 mt-1 max-w-[150px]">AI fusion creates predictive climate models.</p>

<div className="hidden md:block absolute top-8 -left-4 w-full h-[2px] bg-gradient-to-l from-transparent via-[#6ECF7F]/50 to-transparent"></div>
</div>
</div>

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(#12A4FF 0.5px, transparent 0.5px), linear-gradient(90deg, #12A4FF 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-20" id="problem">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center reveal">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        We still react to climate.<br/>
<span className="text-white/40">We don't anticipate it.</span>
</h2>
<p className="text-white/60 text-lg mb-8 leading-relaxed">
                        Satellite data is low-resolution. Static weather stations are sparse. We are flying blind into a volatile future.
                    </p>
<div className="space-y-4">
<div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-start gap-4">
<div className="p-2 rounded-lg bg-red-500/10 text-red-400">
<i className="w-5 h-5" data-lucide="thermometer-sun"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">Invisible Heatwaves</h4>
<p className="text-white/50 text-xs mt-1">Urban heat islands go undetected until emergency rooms overflow.</p>
</div>
</div>
</div>
</div>

<div className="relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-white/80">Global Climate Risk Index</h3>
<span className="text-xs text-red-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +142%
                        </span>
</div>
<div className="h-64 flex items-end justify-between gap-2 px-2">

<div className="w-full bg-white/5 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[48%]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-white/20 rounded-t-sm h-[65%]"></div>
<div className="w-full bg-gradient-to-t from-red-900/50 to-red-500 rounded-t-sm h-[85%] relative shadow-[0_0_20px_rgba(239,68,68,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-black text-[10px] font-bold px-2 py-0.5 rounded">2024</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black/60 backdrop-blur-sm relative z-20" id="technology">
<div className="max-w-3xl mx-auto text-center mb-24 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">The 3-Layer Architecture</h2>
<p className="text-white/60 text-lg">A fully integrated stack combining autonomous hardware, cloud fusion, and predictive intelligence.</p>
</div>
<div className="max-w-7xl mx-auto space-y-32">

<div className="grid lg:grid-cols-12 gap-12 items-center reveal">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="text-[#12A4FF] font-mono text-xs mb-4 tracking-widest uppercase">Layer 01 // Hardware</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Nano-Sentinel Swarms</h3>
<p className="text-white/60 mb-6 leading-relaxed">
                            Millions of autonomous nano-sensors released into target environments. They function as a distributed neural network, physically moving to smell, taste, and scan via molecular analysis.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="text-[#12A4FF] w-4 h-4" data-lucide="scan-line"></i> Distributed Sensing
                            </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="text-[#12A4FF] w-4 h-4" data-lucide="wind"></i> Aerodynamic Drift Control
                            </li>
</ul>
</div>
<div className="lg:col-span-7 order-1 lg:order-2">

<div className="relative aspect-video rounded-3xl border border-white/10 bg-black overflow-hidden group">

<div className="absolute inset-0 w-full h-full opacity-70" id="swarm-container"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-10"></div>
<div className="absolute bottom-6 left-6 z-20">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-[#12A4FF] animate-pulse"></div>
<span className="font-mono text-xs text-[#12A4FF] uppercase tracking-widest">Swarm Active</span>
</div>
<div className="font-mono text-xs text-white/50">Density: 10,000 units/m³</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-12 items-center reveal">
<div className="lg:col-span-7 relative">

<div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black h-[400px]">

<div className="w-full h-full bg-[#050505] animate-dash-zoom origin-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<svg className="absolute inset-0 w-full h-full stroke-white/10" fill="none">
<path d="M100 200 Q 250 100 400 200 T 700 200" strokeWidth="2"></path>
<path d="M50 300 Q 300 350 550 250" strokeWidth="2"></path>
</svg>

<div className="absolute top-[40%] left-[30%] w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>

<div className="absolute top-6 left-6 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-lg">
<div className="text-xs text-white/40 uppercase mb-1">Sector 4 Analysis</div>
<div className="text-2xl font-mono text-white font-bold">AQI 142</div>
<div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[70%]"></div>
</div>
</div>
</div>

<div className="absolute w-6 h-6 pointer-events-none z-50 animate-cursor">
<svg className="drop-shadow-lg" fill="white" viewbox="0 0 24 24">
<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="black" strokeLinejoin="round" strokeWidth="2"></path>
</svg>

<div className="absolute -top-4 -left-4 w-12 h-12 border border-[#12A4FF] rounded-full opacity-0 animate-[ping_1s_infinite_1s]"></div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="text-[#12A4FF] font-mono text-xs mb-4 tracking-widest uppercase">Layer 02 // Software</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Live Fusion Core</h3>
<p className="text-white/60 mb-6 leading-relaxed">
                            A centralized platform where raw sensory data meets satellite imagery. Watch as the system identifies hotspots in real-time, zooming in on molecular anomalies before they become disasters.
                        </p>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-12 items-center reveal">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="text-[#12A4FF] font-mono text-xs mb-4 tracking-widest uppercase">Layer 03 // Intelligence</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Insight Engine</h3>
<p className="text-white/60 mb-6 leading-relaxed">
                            Predictive AI that calculates risk probability. It doesn't just show you the data; it tells you what to do next.
                        </p>

<div className="p-4 rounded-xl border-l-4 border-[#12A4FF] bg-gradient-to-r from-[#12A4FF]/10 to-transparent">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-mono text-[#12A4FF] uppercase">Alert Prediction</span>
<span className="text-xs font-bold text-white">82% Probability</span>
</div>
<h4 className="text-white font-medium mb-1">Heatwave Inbound</h4>
<p className="text-white/50 text-xs">Action: Shift outdoor school activities to AM hours.</p>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">

<div className="relative w-64 h-64">
<div className="absolute inset-0 bg-[#00796B]/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
<div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute bottom-10 right-10 w-2 h-2 bg-[#6ECF7F] rounded-full"></div>
<div className="absolute top-10 left-10 w-2 h-2 bg-[#12A4FF] rounded-full"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black border border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl z-10">
<i className="w-10 h-10 text-white" data-lucide="brain-circuit"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden relative bg-black/40 backdrop-blur-sm z-20" id="vision">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 reveal">
<div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/20 relative animate-[spin_60s_linear_infinite]">
<div className="absolute inset-0 rounded-full border border-white/10" style={{transform: 'rotateX(60deg)'}}></div>
<div className="absolute inset-0 rounded-full border border-white/10" style={{transform: 'rotateX(-60deg)'}}></div>
<div className="absolute inset-0 rounded-full border border-white/10" style={{transform: 'rotateY(60deg)'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#12A4FF] opacity-20 blur-3xl rounded-full"></div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Climate intelligence for every country.</h2>
<p className="text-white/60 text-lg mb-8">
                        Democratizing access to high-fidelity environmental data. From developing nations to major metropolises.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-mono font-semibold text-white mb-1">100+</div>
<div className="text-xs text-white/40 uppercase">Cities Targeted</div>
</div>
<div>
<div className="text-3xl font-mono font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-white/40 uppercase">Autonomous Patrol</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black/40 backdrop-blur-sm z-20" id="founder">
<div className="max-w-3xl mx-auto reveal">
<div className="glass-panel p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8">
<div className="w-24 h-24 shrink-0 rounded-full overflow-hidden bg-white/10 border-2 border-white/10">
<img alt="Yousef" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://picsum.photos/seed/yousef/200"/>
</div>
<div className="text-center md:text-left">
<h3 className="text-xl font-semibold text-white mb-1">Yousef</h3>
<p className="text-[#12A4FF] text-sm font-medium mb-3">Founder &amp; Lead Engineer</p>
<p className="text-white/60 text-sm leading-relaxed mb-4">
                            15-year-old developer and innovator. Founder of Chart//Swipe. AWS Certified Solutions Architect. Winner of the Global Climate Hackathon.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6 relative z-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#12A4FF] to-[#00796B]"></div>
<span className="font-display font-bold text-white tracking-tight">ATMO//SERE</span>
</div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
<div className="text-xs text-white/40">
                © 2024 ATMO//SERE Systems.
            </div>
</div>
</footer>



    </>
  );
}
