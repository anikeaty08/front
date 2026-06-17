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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
aether: {
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
300: '#86efac',
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
700: '#15803d',
800: '#166534',
900: '#020617', // Custom dark
950: '#000000',
},
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.08)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with delay (using GSAP for smoothness)
            gsap.to(cursorOutline, {
                x: posX,
                y: posY,
                duration: 0.15,
                ease: "power2.out"
            });
        });

        // Hover effects for cursor
        const interactables = document.querySelectorAll('a, button, input');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorOutline, { scale: 1.5, borderColor: "rgba(255,255,255, 0.8)", duration: 0.2 });
                gsap.to(cursorDot, { scale: 0.5, backgroundColor: "#ffffff", duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorOutline, { scale: 1, borderColor: "rgba(74, 222, 128, 0.5)", duration: 0.2 });
                gsap.to(cursorDot, { scale: 1, backgroundColor: "#4ade80", duration: 0.2 });
            });
        });

        // Hero Animation
        const tl = gsap.timeline();
        
        tl.to(".hero-element", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: 1 },
                        ease: "power2.out"
                    });
                }
            });
        });

        // Cards Fade In
        gsap.utils.toArray('.metric-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        // CTA Parallax/Reveal
        gsap.from(".cta-text", {
            scrollTrigger: {
                trigger: ".cta-text",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Subtle Magnetic Effect for Buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(btn, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "elastic.out(1, 0.3)" });
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-glassBorder bg-aether-900/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="relative w-5 h-5 flex items-center justify-center">
<span className="iconify group-hover:rotate-180 transition-transform duration-700 text-aether-400" data-icon="lucide:aperture" data-width="20"></span>
<div className="absolute inset-0 bg-aether-400/20 blur-md rounded-full"></div>
</div>
                AETHERIS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors nav-link" href="#mission">Mission</a>
<a className="hover:text-white transition-colors nav-link" href="#data">Data</a>
<a className="hover:text-white transition-colors nav-link" href="#technology">Technology</a>
</div>
<button className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm">
<span>Join Network</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</nav>

<main>
<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aether-800/20 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px]"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-aether-500/20 bg-aether-500/5 text-aether-300 text-xs font-medium mb-8 opacity-0 hero-element">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aether-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-aether-500"></span>
</span>
                    Global Systems Online
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1] opacity-0 hero-element">
                    Restoring the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-aether-200 via-aether-400 to-teal-400">Planetary Balance</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 hero-element">
                    Leveraging advanced biosensors and AI-driven sequestration to reverse the atmospheric entropy. The future of ecology is engineered.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 hero-element">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors w-full md:w-auto flex items-center justify-center gap-2 group">
                        Deploy Node
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:plus"></span>
</button>
<button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors w-full md:w-auto backdrop-blur-sm">
                        View Live Map
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 hero-element">
<div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center p-1">
<div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
</div>
</div>
</section>

<section className="py-24 border-t border-glassBorder bg-aether-900/30 relative" id="data">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Real-time Metrics</h2>
<p className="text-slate-400 text-sm">Aggregated from 12,400+ active bio-nodes.</p>
</div>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="text-xs text-slate-500">Last updated: <span className="text-aether-400 font-mono">00:00:01s</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-glass border border-glassBorder hover:border-aether-500/30 transition-all duration-500 hover:bg-white/5 metric-card">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<span className="iconify" data-icon="lucide:leaf" data-width="20"></span>
</div>
<span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +12%
                            </span>
</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1 counter" data-target="429">0</div>
<div className="text-sm text-slate-500">Gigatons CO₂ Sequestered</div>
</div>

<div className="group p-6 rounded-2xl bg-glass border border-glassBorder hover:border-blue-500/30 transition-all duration-500 hover:bg-white/5 metric-card">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
<span className="iconify" data-icon="lucide:droplets" data-width="20"></span>
</div>
<span className="text-xs font-mono text-blue-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:activity" data-width="12"></span> Stable
                            </span>
</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1 counter" data-target="98">0</div>
<div className="text-sm text-slate-500">Ocean pH Balance Level (%)</div>
</div>

<div className="group p-6 rounded-2xl bg-glass border border-glassBorder hover:border-purple-500/30 transition-all duration-500 hover:bg-white/5 metric-card">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
<span className="iconify" data-icon="lucide:wind" data-width="20"></span>
</div>
<span className="text-xs font-mono text-purple-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span> High
                            </span>
</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1 counter" data-target="1540">0</div>
<div className="text-sm text-slate-500">Particulate Matter Filtered (PM2.5)</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="technology">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">The Eco-Algorithm</h2>
<p className="text-slate-400">We don't just plant trees. We deploy self-regulating biomes managed by decentralized intelligence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 relative group rounded-2xl overflow-hidden border border-glassBorder bg-glass p-8 flex flex-col justify-end hover:border-slate-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<div className="absolute inset-0 z-0">

<svg className="w-full h-full opacity-20" height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path className="text-aether-500" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-12 h-12 bg-aether-500 rounded-full flex items-center justify-center mb-4 text-black">
<span className="iconify" data-icon="lucide:cpu" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Mycelial Neural Networks</h3>
<p className="text-slate-300 max-w-md text-sm leading-relaxed">Mimicking nature's underground communication, our sensors optimize nutrient distribution across reforested zones in real-time.</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 group rounded-2xl border border-glassBorder bg-glass p-6 hover:border-slate-600 transition-colors relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:waves" data-width="18"></span>
                            Hydro-Capture
                        </h3>
<p className="text-xs text-slate-400">Atmospheric water generation powered by passive cooling structures.</p>
<div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
</div>
<div className="mt-1 flex justify-between text-[10px] text-slate-500 font-mono">
<span>Efficiency</span>
<span>94%</span>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 group rounded-2xl border border-glassBorder bg-glass p-6 hover:border-slate-600 transition-colors flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:scan-line" data-width="18"></span>
                                Drone Seeding
                            </h3>
<p className="text-xs text-slate-400">Autonomous aerial reforestation units capable of planting 10,000 seeds/day.</p>
</div>

<div className="flex items-center justify-between mt-4 p-2 bg-black/20 rounded-lg border border-white/5">
<span className="text-xs text-slate-400">Auto-Pilot</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-slate-700 appearance-none cursor-pointer transition-all duration-300 checked:right-0 checked:border-aether-500" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-700 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative text-center px-6">
<div className="absolute inset-0 bg-gradient-to-t from-aether-900/80 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8 cta-text">
                    The climate clock<br/>is <span className="text-aether-400 italic">ticking</span>.
                </h2>
<p className="text-slate-400 text-lg mb-10 cta-text">Join the collective effort to engineer a sustainable tomorrow. Open source. Decentralized. Vital.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto cta-text">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-aether-500 transition-colors font-mono" placeholder="enter_your_email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-aether-300 transition-colors" type="button">
                        Initialize
                    </button>
</form>
</div>
</section>
</main>
<footer className="border-t border-glassBorder bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-aether-500" data-icon="lucide:aperture"></span>
<span className="text-sm font-medium text-slate-300 tracking-tight">AETHERIS © 2024</span>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Protocol</a>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Nodes</a>
</div>
</div>
</footer>



    </>
  );
}
