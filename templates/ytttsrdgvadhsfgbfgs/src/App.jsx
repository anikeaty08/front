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
obsidian: '#050505',
charcoal: '#0a0a0a',
glass: 'rgba(255, 255, 255, 0.03)',
neon: {
purple: '#b026ff',
blue: '#3b82f6',
cyan: '#06b6d4'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mouse Spotlight for Cards
        const cards = document.querySelectorAll('.group');
        const container = document.getElementById('cards-container');

        if(container) {
            container.onmousemove = e => {
                for(const card of document.querySelectorAll('.card-spotlight')) {
                    const rect = card.parentElement.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;

                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            };
        }

        // Global Cursor Glow
        const cursorGlow = document.getElementById('cursor-glow');
        window.addEventListener('mousemove', e => {
            const x = e.clientX;
            const y = e.clientY;
            
            cursorGlow.style.setProperty('--x', x + 'px');
            cursorGlow.style.setProperty('--y', y + 'px');
        });

        // 3D Tilt Effect logic (Simplified)
        const tiltCards = document.querySelectorAll('.perspective-container');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation based on cursor position relative to center
                const xPct = x / rect.width - 0.5;
                const yPct = y / rect.height - 0.5;
                
                const rotateX = yPct * -10; // Invert Y for correct tilt feel
                const rotateY = xPct * 10;
                
                // Apply to the specific interactive child or the card itself if constructed so
                // Ideally targeting a specific inner div class 'tilt-target' if added, 
                // but applying subtle effect to card children for demo:
                // Note: In this code structure, I am keeping it CSS hover based for performance 
                // in the 'Showreel' box, but this JS block is ready for extension.
            });
            
            card.addEventListener('mouseleave', () => {
                // Reset logic would go here
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
      

<div className="pointer-events-none fixed inset-0 w-full h-full transition-opacity duration-300 cursor-glow" id="cursor-glow"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-obsidian/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 overflow-hidden group-hover:border-indigo-500/50 transition-colors duration-500">
<div className="absolute inset-0 bg-indigo-500/20 blur-md group-hover:bg-indigo-500/40 transition-all"></div>
<span className="relative font-bold text-white tracking-tighter">L</span>
</div>
<span className="font-bold text-lg tracking-tight text-white group-hover:text-glow transition-all">LIVCOM</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#agency">Agency</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/30 text-xs font-medium text-white transition-all group">
<span>Start Project</span>
<i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Reimagining Digital Experiences
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
                We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient bg-300%">cinematic</span><br/>
                digital realities.
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                LIVCOM is a premium digital agency blending 3D aesthetics with high-performance engineering to build brands that define the future.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Explore Work
                </button>
<button className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 group">
<i className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" data-lucide="play-circle"></i>
                    Showreel
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
</div>
</section>

<div className="border-y border-white/5 bg-charcoal/50 py-10 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-obsidian to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-obsidian to-transparent z-10"></div>
<div className="flex gap-20 items-center animate-scroll whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500 justify-center">

<span className="text-xl font-bold tracking-tighter font-mono">ACME CORP</span>
<span className="text-xl font-bold tracking-tighter font-mono">VERTEX</span>
<span className="text-xl font-bold tracking-tighter font-mono">NEXUS</span>
<span className="text-xl font-bold tracking-tighter font-mono">HYPERION</span>
<span className="text-xl font-bold tracking-tighter font-mono">STRATOS</span>
<span className="text-xl font-bold tracking-tighter font-mono">ACME CORP</span>
<span className="text-xl font-bold tracking-tighter font-mono">VERTEX</span>
</div>
</div>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Our Expertise</h2>
<div className="h-1 w-20 bg-indigo-500"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="cards-container">

<div className="group relative rounded-2xl border border-white/10 bg-charcoal/50 p-8 hover:border-white/20 transition-colors overflow-hidden h-[400px] flex flex-col justify-between perspective-container">
<div className="absolute inset-0 card-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400">
<i className="w-6 h-6" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Design</h3>
<p className="text-sm text-slate-400 leading-relaxed">Immersive interfaces crafted with WebGL and modern frameworks to tell your brand story.</p>
</div>
<div className="relative z-10 mt-auto">

<div className="w-full h-32 rounded bg-gradient-to-br from-indigo-900/20 to-transparent border border-white/5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
<div className="absolute top-4 left-4 right-4 h-1 bg-white/10 rounded-full"></div>
<div className="absolute top-8 left-4 w-1/2 h-1 bg-white/5 rounded-full"></div>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-2xl border border-white/10 bg-charcoal/50 p-8 hover:border-white/20 transition-colors overflow-hidden h-[400px] flex flex-col md:flex-row items-center gap-8 perspective-container">
<div className="absolute inset-0 card-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex-1">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400">
<i className="w-6 h-6" data-lucide="box" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">3D &amp; Motion</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-sm">Bring your products to life with cinema-grade 3D rendering and fluid motion graphics that captivate audiences instantly.</p>
<div className="mt-8 flex gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-slate-500">Blender</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-slate-500">Spline</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-slate-500">Three.js</span>
</div>
</div>

<div className="relative z-10 w-full md:w-1/2 h-full flex items-center justify-center perspective-container">
<div className="w-32 h-32 relative preserve-3d animate-spin-slow group-hover:pause">
<div className="absolute inset-0 border border-pink-500/30 bg-pink-500/5 backdrop-blur-sm transform translate-z-16"></div>
<div className="absolute inset-0 border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-sm transform rotate-y-90 translate-z-16"></div>
<div className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm transform rotate-x-90 translate-z-16"></div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-charcoal/50 p-8 hover:border-white/20 transition-colors overflow-hidden h-[400px] perspective-container">
<div className="absolute inset-0 card-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400">
<i className="w-6 h-6" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Growth Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed">Data-driven marketing campaigns optimizing for conversion and brand loyalty.</p>

<div className="mt-12 flex items-end gap-2 h-24">
<div className="w-1/5 bg-teal-500/20 h-[40%] rounded-t group-hover:bg-teal-500/40 transition-colors"></div>
<div className="w-1/5 bg-teal-500/20 h-[60%] rounded-t group-hover:bg-teal-500/40 transition-colors delay-75"></div>
<div className="w-1/5 bg-teal-500/20 h-[50%] rounded-t group-hover:bg-teal-500/40 transition-colors delay-100"></div>
<div className="w-1/5 bg-teal-500/20 h-[80%] rounded-t group-hover:bg-teal-500/40 transition-colors delay-150"></div>
<div className="w-1/5 bg-gradient-to-t from-teal-500 to-teal-200 h-[95%] rounded-t shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-2xl border border-white/10 bg-charcoal/50 p-8 hover:border-white/20 transition-colors overflow-hidden h-[400px] flex flex-col md:flex-row-reverse items-center gap-8 perspective-container">
<div className="absolute inset-0 card-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex-1 text-right md:text-left">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 ml-auto md:ml-0">
<i className="w-6 h-6" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">App Development</h3>
<p className="text-sm text-slate-400 leading-relaxed">Native and cross-platform mobile applications engineered for performance and scalability.</p>
</div>
<div className="relative z-10 w-full md:w-1/2 flex justify-center">
<div className="w-48 h-64 rounded-2xl border-4 border-slate-800 bg-obsidian relative overflow-hidden shadow-2xl transform rotate-y-12 group-hover:rotate-y-0 transition-transform duration-700">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-lg z-20"></div>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black p-4 flex flex-col gap-3">
<div className="w-full h-24 rounded bg-white/5 animate-pulse"></div>
<div className="w-full h-8 rounded bg-white/5"></div>
<div className="w-2/3 h-8 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="work">
<div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-obsidian to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-20">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-indigo-500 font-mono text-xs mb-2 block">SELECTED PROJECTS</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Recent Works</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" href="#">
                    View Archive <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="space-y-32">

<div className="group flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden relative border border-white/5">
<div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-slate-800 rounded-lg shadow-2xl border border-white/5 p-4 flex flex-col gap-4">
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div><div className="w-2 h-2 rounded-full bg-yellow-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
</div>
<div className="flex-1 bg-gradient-to-br from-indigo-500/10 to-transparent rounded"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="w-full md:w-2/5 space-y-6">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded">FINTECH</span>
<span className="text-xs text-slate-500">2023</span>
</div>
<h3 className="text-3xl font-medium text-white group-hover:text-indigo-400 transition-colors">Novus Finance</h3>
<p className="text-slate-400 leading-relaxed">A complete rebrand and digital product overhaul for the next generation banking platform. Included 3D asset creation and a WebGL landing page.</p>
<ul className="text-sm text-slate-500 space-y-2 border-l border-white/10 pl-4">
<li>UI/UX Design</li>
<li>Frontend Development</li>
<li>Brand Identity</li>
</ul>
</div>
</div>

<div className="group flex flex-col md:flex-row-reverse items-center gap-12">
<div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden relative border border-white/5">
<div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-black"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
<div className="absolute center w-full h-full flex items-center justify-center">
<div className="w-32 h-32 rounded-full border-2 border-purple-500/30 animate-pulse"></div>
</div>
</div>
</div>
<div className="w-full md:w-2/5 space-y-6 text-right md:text-left">
<div className="flex items-center gap-4 md:justify-start justify-end">
<span className="text-xs font-mono text-purple-400 border border-purple-500/20 px-2 py-1 rounded">ECOMMERCE</span>
<span className="text-xs text-slate-500">2024</span>
</div>
<h3 className="text-3xl font-medium text-white group-hover:text-purple-400 transition-colors">Lumina Fashion</h3>
<p className="text-slate-400 leading-relaxed">High-fidelity ecommerce experience featuring real-time 3D cloth simulation and virtual try-on technology.</p>
<div className="flex flex-col md:items-start items-end">
<ul className="text-sm text-slate-500 space-y-2 border-r md:border-r-0 md:border-l border-white/10 pr-4 md:pr-0 md:pl-4">
<li>Shopify Plus</li>
<li>3D Modelling</li>
<li>Motion Design</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-charcoal">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="space-y-2 group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white group-hover:text-glow transition-all">40+</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Awards Won</div>
</div>
<div className="space-y-2 group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white group-hover:text-glow transition-all">120+</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Projects Shipped</div>
</div>
<div className="space-y-2 group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white group-hover:text-glow transition-all">500m</div>
<div className="text-xs uppercase tracking-widest text-slate-500">User Reach</div>
</div>
<div className="space-y-2 group cursor-default">
<div className="text-4xl md:text-5xl font-semibold text-white group-hover:text-glow transition-all">98%</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Client Retention</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-obsidian via-indigo-950/20 to-obsidian"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">Ready to define the <br/> <span className="text-indigo-400">digital future?</span></h2>
<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">We are selective with our partners. If you are ready to push boundaries and build something extraordinary, let's talk.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all" placeholder="enter your email" type="email"/>
</div>
<button className="w-full bg-white text-black font-semibold rounded-lg px-4 py-4 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group" type="submit">
                    Schedule Consultation
                    <i className="w-4 h-4 group-hover:text-indigo-600 transition-colors" data-lucide="calendar"></i>
</button>
</form>
<div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="shield-check"></i><span className="text-xs">Secure</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="zap"></i><span className="text-xs">Fast</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="award"></i><span className="text-xs">Premium</span></div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white text-xs font-bold">L</div>
<span className="font-bold text-white tracking-tight">LIVCOM</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Architecture for the digital age.<br/>
                        Based in San Francisco,<br/>
                        Operating Globally.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Sitemap</h4>
<ul className="space-y-4 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Work</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Agency</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Socials</h4>
<ul className="space-y-4 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
<ul className="space-y-4 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cookie Settings</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-[10px] text-slate-600">© 2024 LIVCOM Agency. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-slate-400">All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
