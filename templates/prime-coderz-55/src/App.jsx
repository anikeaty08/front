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
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
gold: {
100: '#F9F1D8',
200: '#F0DEAA',
300: '#E6CB7D',
400: '#DDB753',
500: '#D4AF37', // Base
600: '#AA8C2C',
700: '#806921',
800: '#554616',
900: '#2B230B',
}
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
shimmer: {
'100%': { transform: 'translateX(100%)' },
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 glass-gold border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<div className="relative w-10 h-10 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-gold-400 transition-colors duration-500 rounded-sm bg-black">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="text-gold-metallic font-bold text-sm tracking-widest relative z-10">PC</span>
</div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-gold-300 transition-colors">Prime Coderz</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors" href="#projects">Work</a>
<a className="text-xs font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors" href="#about">Company</a>
</div>
<a className="hidden md:flex relative overflow-hidden group px-6 py-2.5 bg-gold-500 text-black text-sm font-bold tracking-tight hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                    Start Project 
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/10 animate-spin-slow pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full blur-md shadow-[0_0_20px_#D4AF37]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full border border-gold-500/30 bg-gold-900/10 backdrop-blur-md animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-gold-200 font-semibold">Engineering Excellence</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1] mb-8">
                    Forging <br/>
<span className="text-gold-metallic">Digital Gold</span>
</h1>
<p className="text-lg text-gray-400 max-w-xl mb-10 font-light leading-relaxed border-l border-gold-500/30 pl-6">
                    We architect premium digital ecosystems with pixel-perfect precision and metallic-grade resilience.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-5">
<a className="group relative px-8 py-4 bg-gradient-to-b from-gold-400 to-gold-600 text-black text-sm font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300" href="#contact">
<span className="flex items-center gap-2">
                            Initiate Sequence
                            <iconify-icon icon="solar:cpu-bolt-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
</a>
<a className="px-8 py-4 bg-black/50 border border-white/10 text-white text-sm font-medium hover:border-gold-500/50 hover:text-gold-300 transition-all duration-300 backdrop-blur-sm" href="#projects">
                        Explore Works
                    </a>
</div>
</div>

<div className="hidden lg:block perspective-container h-[500px] flex items-center justify-center">
<div className="card-3d relative w-full h-full max-h-[400px] bg-black/80 border border-gold-500/20 backdrop-blur-xl p-6 rounded-xl overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="text-[10px] text-gray-600 font-mono">system_main.tsx</div>
</div>

<div className="space-y-3 font-mono text-xs opacity-60">
<div className="flex gap-4">
<span className="text-gray-600">01</span>
<span className="text-purple-400">import</span> <span className="text-gold-300">{ Future }</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@prime/core'</span>;
                        </div>
<div className="flex gap-4">
<span className="text-gray-600">02</span>
<span className="text-blue-400">const</span> <span className="text-yellow-200">experience</span> = <span className="text-blue-400">new</span> <span className="text-gold-300">GoldStandard</span>();
                        </div>
<div className="flex gap-4">
<span className="text-gray-600">03</span>
<span className="text-gray-500">// Initializing visual rendering engine...</span>
</div>
<div className="flex gap-4">
<span className="text-gray-600">04</span>
<span className="text-blue-400">await</span> <span className="text-yellow-200">experience</span>.<span className="text-blue-300">transcend</span>({
                        </div>
<div className="flex gap-4 pl-12">
<span className="text-white">quality:</span> <span className="text-green-400">'MAXIMUM'</span>,
                        </div>
<div className="flex gap-4 pl-12">
<span className="text-white">mode:</span> <span className="text-green-400">'LEGENDARY'</span>
</div>
<div className="flex gap-4">
<span className="text-gray-600">07</span>
                            });
                        </div>
</div>

<div className="absolute bottom-8 right-8 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl animate-pulse"></div>
<div className="absolute top-1/2 right-10 p-4 bg-[#111] border border-gold-500/30 rounded shadow-2xl transform translate-x-12 translate-y-12 group-hover:translate-y-8 transition-transform duration-700">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold text-xs"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<div className="text-xs">
<p className="text-white font-semibold">Deployment</p>
<p className="text-green-400">Successful</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#080808] py-8 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10"></div>
<div className="flex animate-marquee whitespace-nowrap gap-20 items-center">

<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:atom-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">NUCLEUS</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:crown-line-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">ROYALTY</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:infinite-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">ETERNAL</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:shield-star-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">VANGUARD</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:gloves-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">FORCE</span>
</div>

<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:atom-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">NUCLEUS</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:crown-line-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">ROYALTY</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:infinite-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">ETERNAL</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:shield-star-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">VANGUARD</span>
</div>
<div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-gold-400" icon="solar:gloves-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest text-white">FORCE</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Arsenal</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Digital <span className="text-gold-metallic">Capabilities</span></h2>
</div>
<p className="text-gray-400 text-sm max-w-sm mt-6 md:mt-0 text-right">
                    Deploying high-performance infrastructure for the modern web economy.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container">

<div className="group card-3d relative p-8 bg-[#0A0A0A] border border-white/5 hover:border-gold-500/30 overflow-hidden transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-6 text-gold-400 group-hover:scale-110 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_#D4AF37] transition-all duration-300">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">Elite Engineering</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Full-stack architecture utilizing React, Node.js and Rust for minimal latency and maximum throughput.</p>
<div className="w-full h-[1px] bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>
</div>

<div className="group card-3d relative p-8 bg-[#0A0A0A] border border-white/5 hover:border-gold-500/30 overflow-hidden transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-6 text-gold-400 group-hover:scale-110 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_#D4AF37] transition-all duration-300">
<iconify-icon icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">Luxury UX/UI</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Interfaces designed with mathematical precision and aesthetic mastery to command user attention.</p>
<div className="w-full h-[1px] bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>
</div>

<div className="group card-3d relative p-8 bg-[#0A0A0A] border border-white/5 hover:border-gold-500/30 overflow-hidden transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-6 text-gold-400 group-hover:scale-110 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_#D4AF37] transition-all duration-300">
<iconify-icon icon="solar:server-path-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">Scalable Cloud</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">Serverless infrastructure and edge computing ensuring 99.99% uptime for global operations.</p>
<div className="w-full h-[1px] bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808]" id="projects">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-5xl font-semibold text-white tracking-tight mb-24 text-center">Selected <span className="text-gold-metallic">Masterpieces</span></h2>
<div className="space-y-32">

<div className="group grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 space-y-6">
<div className="flex items-center gap-4 mb-4">
<span className="px-3 py-1 border border-gold-500/50 text-gold-400 text-[10px] uppercase tracking-widest font-bold">FinTech</span>
<div className="h-[1px] w-12 bg-gray-800"></div>
</div>
<h3 className="text-4xl font-bold text-white group-hover:text-gold-300 transition-colors">Aurum Trading</h3>
<p className="text-gray-400 text-lg font-light leading-relaxed">A high-frequency trading dashboard featuring real-time WebSockets, gold-standard security protocols, and sub-millisecond data visualization.</p>
<div className="flex gap-4 pt-4">
<span className="text-xs text-gray-500 border border-white/10 px-3 py-1">React</span>
<span className="text-xs text-gray-500 border border-white/10 px-3 py-1">D3.js</span>
<span className="text-xs text-gray-500 border border-white/10 px-3 py-1">AWS</span>
</div>
<a className="inline-flex items-center gap-2 text-white border-b border-gold-500 pb-1 mt-6 hover:gap-4 transition-all" href="#">
                            View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-2 perspective-container">
<div className="card-3d relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-sm overflow-hidden shimmer-bg">

<div className="absolute inset-4 border border-white/5 flex flex-col">
<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
</div>
<div className="flex-1 p-4 grid grid-cols-3 gap-4">
<div className="col-span-2 h-32 bg-gold-500/10 rounded animate-pulse"></div>
<div className="col-span-1 h-32 bg-white/5 rounded"></div>
<div className="col-span-3 h-20 bg-white/5 rounded"></div>
</div>
</div>

<div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
</div>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-16 items-center">
<div className="perspective-container">
<div className="card-3d relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-sm overflow-hidden shimmer-bg">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-gold-500/30 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-gold-500/20 blur-xl"></div>
</div>
</div>

<div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 mb-4">
<span className="px-3 py-1 border border-gold-500/50 text-gold-400 text-[10px] uppercase tracking-widest font-bold">E-Commerce</span>
<div className="h-[1px] w-12 bg-gray-800"></div>
</div>
<h3 className="text-4xl font-bold text-white group-hover:text-gold-300 transition-colors">Velvet &amp; Steel</h3>
<p className="text-gray-400 text-lg font-light leading-relaxed">Headless commerce solution for a luxury fashion house. Integrated 3D product previews and AI-driven sizing recommendations.</p>
<div className="flex gap-4 pt-4">
<span className="text-xs text-gray-500 border border-white/10 px-3 py-1">Shopify Plus</span>
<span className="text-xs text-gray-500 border border-white/10 px-3 py-1">WebGL</span>
<span className="text-xs text-gray-500 border border-white/10 px-3 py-1">Next.js</span>
</div>
<a className="inline-flex items-center gap-2 text-white border-b border-gold-500 pb-1 mt-6 hover:gap-4 transition-all" href="#">
                            View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-4xl font-semibold text-white text-center mb-16">Client <span className="italic text-gold-400">Verdicts</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="flex text-gold-400 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">"The level of precision Prime Coderz brought to our platform is unmatched. It feels less like software and more like a crafted asset."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-800 rounded-full border border-gold-500/30"></div>
<div>
<p className="text-white text-xs font-bold">Jonathan K.</p>
<p className="text-gray-600 text-[10px] uppercase">CEO, Nexus AI</p>
</div>
</div>
</div>

<div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="flex text-gold-400 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">"They took our scattered vision and forged it into a cohesive, high-speed application. The metallic design language sets us apart."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-800 rounded-full border border-gold-500/30"></div>
<div>
<p className="text-white text-xs font-bold">Sarah V.</p>
<p className="text-gray-600 text-[10px] uppercase">Founder, Luxe Estate</p>
</div>
</div>
</div>

<div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="flex text-gold-400 mb-6 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">"Scalable, secure, and stunning. The 3D integration they built into our landing page increased conversion by 40%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-800 rounded-full border border-gold-500/30"></div>
<div>
<p className="text-white text-xs font-bold">Marcus T.</p>
<p className="text-gray-600 text-[10px] uppercase">CTO, BlockFlow</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808]" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Initialization</span>
<h2 className="text-5xl font-semibold text-white tracking-tight">Begin Your <span className="text-gold-metallic">Transformation</span></h2>
</div>
<form className="bg-[#0A0A0A] p-10 border border-white/5 shadow-2xl relative overflow-hidden group">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-8 mb-8">
<div className="space-y-2">
<label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Identity</label>
<input className="w-full bg-[#111] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-gray-700" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Communication</label>
<input className="w-full bg-[#111] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-gray-700" placeholder="Email Address" type="email"/>
</div>
</div>
<div className="space-y-2 mb-8">
<label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Objective</label>
<textarea className="w-full bg-[#111] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-gray-700 resize-none" placeholder="Describe your project requirements..." rows="4"></textarea>
</div>
<button className="w-full py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300" type="button">
                    Execute Project
                </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="mb-8">
<div className="w-12 h-12 flex items-center justify-center border border-gold-500/30 text-gold-400 font-bold bg-[#0A0A0A]">PC</div>
</div>
<div className="flex gap-8 mb-12 text-xs text-gray-500 font-medium tracking-wide">
<a className="hover:text-gold-400 transition-colors" href="#">SERVICES</a>
<a className="hover:text-gold-400 transition-colors" href="#">PROJECTS</a>
<a className="hover:text-gold-400 transition-colors" href="#">CAREERS</a>
<a className="hover:text-gold-400 transition-colors" href="#">CONTACT</a>
</div>
<p className="text-[10px] text-gray-700 uppercase tracking-widest">© 2024 Prime Coderz. All Systems Operational.</p>
</div>
</footer>

    </>
  );
}
