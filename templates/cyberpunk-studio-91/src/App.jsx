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
colors: {
crimson: {
500: '#EF4444',
600: '#DC2626', // Primary Accent
700: '#B91C1C',
900: '#7F1D1D',
},
void: {
900: '#050505', // Deep Black
800: '#0A0A0A',
700: '#121212',
}
},
fontFamily: {
display: ['Orbitron', 'sans-serif'],
body: ['Rajdhani', 'sans-serif'],
},
backgroundImage: {
'cyber-grid': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
'vignette': 'radial-gradient(circle at center, transparent 0%, #000000 100%)'
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-cyber-grid bg-[length:40px_40px]"></div>
<div className="fixed inset-0 z-0 bg-gradient-to-b from-void-900 via-transparent to-void-900 pointer-events-none"></div>
<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-overlay scanlines opacity-20"></div>

<main className="relative z-10 w-full flex flex-col items-center gap-32 py-24 px-4 md:px-8">

<section className="w-full max-w-7xl relative">

<div className="mb-16 border-l-4 border-crimson-600 pl-6 py-2">
<div className="flex items-center gap-2 mb-2 text-crimson-600 text-xs font-bold tracking-[0.2em] uppercase">
<i className="w-4 h-4" data-lucide="cpu"></i>
<span>System Interface v.9.0</span>
</div>
<h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase mb-2">
                    Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-600 to-crimson-900">Protocols</span>
</h2>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl font-medium tracking-wide">
                    Advanced systems engineered for next-generation digital experiences.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 w-full">


<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl">

<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>

<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">AI / ML Dev</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">01</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Neural networks and predictive models designed to automate complex decision trees.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">AR / VR Dev</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">02</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Immersive realities blurring the line between digital and physical space.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Game Dev</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">03</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">High-fidelity interactive experiences built on Unreal and Unity architectures.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Mobile Ops</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">04</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Performance-critical iOS and Android applications with encrypted data layers.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">2D / 3D Art</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">05</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Industrial design and artistic rendering for next-generation visual fidelity.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">IT Strategy</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">06</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Scalable infrastructure planning and server-side optimization for enterprise.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">UI / UX Design</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">07</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Human-machine interfaces designed for rapid data consumption and control.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-void-800 -skew-x-12 border border-neutral-800 hover:border-crimson-600 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-hard-light transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 mb-3 group-hover:border-crimson-600 transition-colors">
<h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase">Cyber Security</h3>
<span className="text-3xl font-display font-bold text-neutral-800 group-hover:text-crimson-600 transition-colors">08</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Hardened protocols and defensive countermeasures against intrusion.</p>
<div className="flex items-center gap-2 text-crimson-600 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl relative pt-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-6">
<div>
<h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter uppercase mb-2">
                        Execution <span className="text-crimson-600">Protocol</span>
</h2>
<p className="text-neutral-500 font-medium tracking-wide">Precision-driven workflow designed for elite digital outcomes.</p>
</div>

<button className="mt-4 md:mt-0 bg-transparent -skew-x-12 border border-crimson-600 text-crimson-600 hover:bg-crimson-600 hover:text-white transition-all duration-300 px-8 py-3 group">
<span className="block skew-x-12 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                        Full Brief <i className="w-4 h-4" data-lucide="file-code"></i>
</span>
</button>
</div>

<div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-4">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -z-10"></div>

<div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between">
<div className="skew-x-12 flex justify-between items-start">
<span className="text-xs font-mono text-crimson-600 tracking-widest">PHASE_01</span>
<i className="text-neutral-600 group-hover:text-white transition-colors" data-lucide="search"></i>
</div>
<div className="skew-x-12">
<h4 className="text-xl font-display font-bold text-white uppercase mb-1">Discovery</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Reconnaissance of user needs and technical constraints.</p>
</div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between md:translate-y-8">
<div className="skew-x-12 flex justify-between items-start">
<span className="text-xs font-mono text-crimson-600 tracking-widest">PHASE_02</span>
<i className="text-neutral-600 group-hover:text-white transition-colors" data-lucide="crosshair"></i>
</div>
<div className="skew-x-12">
<h4 className="text-xl font-display font-bold text-white uppercase mb-1">Strategy</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Formulation of tactical architecture and design systems.</p>
</div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between">
<div className="skew-x-12 flex justify-between items-start">
<span className="text-xs font-mono text-crimson-600 tracking-widest">PHASE_03</span>
<i className="text-neutral-600 group-hover:text-white transition-colors" data-lucide="code-2"></i>
</div>
<div className="skew-x-12">
<h4 className="text-xl font-display font-bold text-white uppercase mb-1">Execution</h4>
<p className="text-xs text-neutral-500 leading-relaxed">High-velocity development cycles and rigorous testing.</p>
</div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative w-full md:w-1/4 h-48 -skew-x-12 bg-void-800 border-t border-b border-neutral-800 hover:border-crimson-600 hover:bg-void-700 transition-all duration-300 p-6 flex flex-col justify-between md:translate-y-8">
<div className="skew-x-12 flex justify-between items-start">
<span className="text-xs font-mono text-crimson-600 tracking-widest">PHASE_04</span>
<i className="text-neutral-600 group-hover:text-white transition-colors" data-lucide="rocket"></i>
</div>
<div className="skew-x-12">
<h4 className="text-xl font-display font-bold text-white uppercase mb-1">Launch</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Deployment to live servers and monitoring initiation.</p>
</div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</section>

<section className="w-full max-w-7xl relative pt-12">
<div className="flex justify-between items-end mb-8">
<h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase">
                    Project <span className="text-neutral-700">Archive</span>
</h2>
<div className="hidden md:flex items-center gap-4 text-xs font-mono text-crimson-600">
<span>REC ●</span>
<span>[4K_HDR]</span>
</div>
</div>


<div className="relative w-full aspect-video md:aspect-[21/9] -skew-x-12 border border-crimson-900/50 bg-void-800 p-2 md:p-4 shadow-[0_0_30px_rgba(220,38,38,0.1)] mb-12 group">

<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson-600 -translate-x-1 -translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson-600 translate-x-1 translate-y-1"></div>

<div className="w-full h-full skew-x-12 overflow-hidden relative bg-black border border-neutral-800">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535136029863-4a381391a971?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

<div className="absolute inset-0 z-20 flex items-center justify-center">
<button className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-crimson-600 hover:border-crimson-600 transition-all duration-300 group-btn">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</button>
</div>

<div className="absolute bottom-8 left-8 z-20">
<h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider mb-1">Project: Obsidian</h3>
<p className="text-sm text-crimson-500 font-mono">SECTOR_7 // CLASSIFIED</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-6 flex items-center transition-all cursor-pointer">
<div className="skew-x-12">
<span className="text-[10px] font-mono text-neutral-500 block mb-1">CLIENT: AEROSPACE_CORP</span>
<h4 className="text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">Flight Sim X</h4>
</div>
</div>

<div className="group h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-6 flex items-center transition-all cursor-pointer">
<div className="skew-x-12">
<span className="text-[10px] font-mono text-neutral-500 block mb-1">CLIENT: NEURAL_LINK</span>
<h4 className="text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">Brain Interface</h4>
</div>
</div>

<div className="group h-32 -skew-x-12 bg-gradient-to-r from-void-800 to-void-900 border-l-2 border-neutral-700 hover:border-crimson-600 pl-6 flex items-center transition-all cursor-pointer">
<div className="skew-x-12">
<span className="text-[10px] font-mono text-neutral-500 block mb-1">CLIENT: DEFENSE_SYS</span>
<h4 className="text-xl font-bold font-display text-white group-hover:text-crimson-500 transition-colors uppercase">Drone Swarm UI</h4>
</div>
</div>
</div>

<div className="mt-24 flex justify-center">
<button className="bg-crimson-600 -skew-x-12 text-black hover:bg-white transition-colors duration-300 px-12 py-5 group shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<span className="block skew-x-12 font-display font-bold uppercase tracking-widest text-lg flex items-center gap-3">
                        Initiate Collaboration <i className="w-5 h-5" data-lucide="chevron-right"></i>
</span>
</button>
</div>
</section>
</main>

<div className="fixed bottom-8 left-8 z-50 mix-blend-difference hidden lg:block">
<div className="flex flex-col gap-1">
<div className="w-1 h-1 bg-crimson-600"></div>
<div className="w-1 h-1 bg-crimson-600"></div>
<div className="w-1 h-1 bg-crimson-600"></div>
<div className="w-1 h-12 bg-crimson-600 mt-2"></div>
</div>
</div>


    </>
  );
}
