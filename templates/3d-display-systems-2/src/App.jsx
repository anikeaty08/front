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
sans: ['Manrope', 'sans-serif'],
},
backgroundImage: {
'sheen': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
'glow': 'conic-gradient(from 180deg at 50% 50%, #2a2a2a 0deg, #0a0a0a 360deg)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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



    // Reveal on Scroll Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
      observer.observe(el);
    });

    // Mouse movement parallax effect for the hero
    document.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      
      const heroPanel = document.querySelector('.transform-style-3d');
      if(heroPanel) {
        heroPanel.style.transform = `rotateY(${x}deg) rotateX(${12 + y}deg)`;
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-white/20 to-transparent rounded-lg border border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300">
<div className="absolute inset-0 bg-indigo-500/20 blur-sm rounded-lg"></div>
<iconify-icon className="relative text-white text-lg" icon="lucide:layers"></iconify-icon>
</div>
<span className="text-sm font-bold text-white tracking-tight">Prayog Media</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#technology">Technology</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="btn-3d inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold tracking-tight shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] transition-all" href="#contact">
<span>Get in touch</span>
<iconify-icon className="text-sm" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="text-center max-w-3xl mx-auto mb-16 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-semibold text-indigo-300 uppercase tracking-wider">Future Ready Display Systems</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tighter mb-6 leading-[1.1]">
          Display reality<br/>in three dimensions.
        </h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          Premium media infrastructure for retail and institutions. We construct visual experiences that possess depth, stability, and presence.
        </p>
</div>

<div className="perspective-1000 relative h-[400px] md:h-[600px] w-full flex justify-center items-center pointer-events-none">

<div className="absolute transform-style-3d rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out w-full max-w-4xl animate-float">

<div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden aspect-video">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent z-20 pointer-events-none"></div>

<div className="absolute inset-0 bg-slate-900/50 flex flex-col">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-black/20">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="flex-1 p-6 grid grid-cols-3 gap-4">
<div className="col-span-2 space-y-4">
<div className="h-48 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-white/10 group-hover:scale-110 transition-transform duration-700" icon="lucide:bar-chart-3"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4">
<div className="text-xs text-indigo-300 font-mono">ANALYTICS</div>
<div className="text-2xl font-bold text-white">98.4%</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
<div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
</div>
</div>
<div className="col-span-1 h-full rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 p-4">
<div className="w-full h-2 rounded-full bg-white/10 mb-4"></div>
<div className="w-2/3 h-2 rounded-full bg-white/10 mb-4"></div>
<div className="w-3/4 h-2 rounded-full bg-white/10 mb-8"></div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="lucide:activity"></iconify-icon>
</div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="lucide:wifi"></iconify-icon>
</div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-indigo-600/30 rounded-full blur-[80px]"></div>
<div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

<div className="absolute -right-12 top-20 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float" style={{animationDelay: '1s'}}>
<iconify-icon className="text-2xl text-indigo-400 mb-2" icon="lucide:cpu"></iconify-icon>
<div className="text-xs text-slate-400 font-mono">PROCESSOR</div>
<div className="text-sm font-bold text-white">M2 Neural</div>
</div>
<div className="absolute -left-8 bottom-20 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<div className="text-xs text-green-400 font-mono font-bold">ONLINE</div>
</div>
<div className="text-sm font-bold text-white">System Stable</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="solutions">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-item">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Dimensional Solutions</h2>
<p className="text-slate-400 max-w-md">Hardware and software stacks designed for physical impact.</p>
</div>
<a className="text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#contact">View full catalog</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative glass-card rounded-3xl overflow-hidden reveal-item cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 left-8 z-10">
<div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl text-white" icon="lucide:monitor-smartphone"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Interactive Kiosks</h3>
<p className="text-sm text-slate-400 max-w-xs">Self-service touchpoints with haptic feedback and ultra-low latency response times.</p>
</div>

<div className="absolute right-[-10%] bottom-[-20%] w-[80%] h-[80%] perspective-1000 transition-transform duration-700 group-hover:translate-y-[-20px] group-hover:rotate-y-[-10deg]">
<div className="w-full h-full bg-[#111] border border-white/10 rounded-t-3xl shadow-2xl relative">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

<div className="p-8 grid gap-4">
<div className="h-8 w-1/2 bg-white/10 rounded-md"></div>
<div className="h-32 w-full bg-white/5 rounded-md border border-white/5"></div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group reveal-item cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
<iconify-icon className="text-xl text-white" icon="lucide:server"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Display Servers</h3>
<p className="text-sm text-slate-400 mb-8">Centralized control units for synchronized playback across massive video walls.</p>
<div className="mt-auto relative">

<div className="space-y-2 perspective-1000">
<div className="h-12 bg-black/50 border border-white/10 rounded-lg flex items-center px-4 justify-between shadow-lg transform group-hover:translate-z-10 transition-transform duration-500">
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="h-1 w-12 bg-white/20 rounded-full"></div>
</div>
<div className="h-12 bg-black/50 border border-white/10 rounded-lg flex items-center px-4 justify-between shadow-lg transform group-hover:translate-z-20 group-hover:scale-[1.02] transition-transform duration-500 delay-75">
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
</div>
<div className="h-1 w-12 bg-white/20 rounded-full"></div>
</div>
<div className="h-12 bg-black/50 border border-white/10 rounded-lg flex items-center px-4 justify-between shadow-lg transform group-hover:translate-z-10 transition-transform duration-500 delay-100">
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="h-1 w-12 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group reveal-item cursor-pointer">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
<iconify-icon className="text-xl text-white" icon="lucide:presentation"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">IFPD Panels</h3>
<p className="text-sm text-slate-400">Zero-bonding technology for pen-on-paper feel.</p>
</div>
<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-xl"></div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group reveal-item cursor-pointer">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
<iconify-icon className="text-xl text-white" icon="lucide:box"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Custom Enclosures</h3>
<p className="text-sm text-slate-400">CNC machined aluminum housings designed for thermal efficiency.</p>
</div>
<iconify-icon className="absolute bottom-4 right-4 text-6xl text-white/5 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500" icon="lucide:box-select"></iconify-icon>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] py-20 mb-32 relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center reveal-item">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 mb-6 shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] transform rotate-3 hover:rotate-6 transition-transform">
<iconify-icon className="text-3xl text-white" icon="lucide:cuboid"></iconify-icon>
</div>
<h4 className="text-lg font-bold text-white mb-2">Volumetric Design</h4>
<p className="text-sm text-slate-400">Displays that understand spatial context and lighting conditions.</p>
</div>
<div className="text-center reveal-item" style={{transitionDelay: '100ms'}}>
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6 shadow-[0_10px_40px_-10px_rgba(192,38,211,0.5)] transform -rotate-3 hover:-rotate-6 transition-transform">
<iconify-icon className="text-3xl text-white" icon="lucide:zap"></iconify-icon>
</div>
<h4 className="text-lg font-bold text-white mb-2">Instant Response</h4>
<p className="text-sm text-slate-400">High refresh rate hardware for fluid motion and interaction.</p>
</div>
<div className="text-center reveal-item" style={{transitionDelay: '200ms'}}>
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] transform rotate-3 hover:rotate-6 transition-transform">
<iconify-icon className="text-3xl text-white" icon="lucide:shield-check"></iconify-icon>
</div>
<h4 className="text-lg font-bold text-white mb-2">Industrial Grade</h4>
<p className="text-sm text-slate-400">Built to operate 24/7 in demanding physical environments.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-10 md:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-bold text-white mb-6">See the difference in depth.</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<span className="text-indigo-400 font-bold">01</span>
</div>
<div>
<h5 className="text-white font-semibold">Calibration</h5>
<p className="text-sm text-slate-400 mt-1">Every panel is color-calibrated for uniformity across viewing angles.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<span className="text-indigo-400 font-bold">02</span>
</div>
<div>
<h5 className="text-white font-semibold">Longevity</h5>
<p className="text-sm text-slate-400 mt-1">Rated for 50,000+ hours of continuous operation without degradation.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<span className="text-indigo-400 font-bold">03</span>
</div>
<div>
<h5 className="text-white font-semibold">Security</h5>
<p className="text-sm text-slate-400 mt-1">Hardware-level lockouts to prevent unauthorized access.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-white font-semibold group" href="#contact">
<span className="border-b border-indigo-500 pb-0.5">Schedule a demo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div className="relative min-h-[400px] bg-[#050505] overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center perspective-1000">

<div className="absolute w-64 h-80 bg-slate-800 rounded-xl transform translate-x-12 translate-y-4 rotate-y-[-10deg] opacity-40 transition-transform duration-700 group-hover:translate-x-16 group-hover:rotate-y-[-15deg]"></div>

<div className="absolute w-64 h-80 bg-slate-700 rounded-xl transform translate-x-6 translate-y-2 rotate-y-[-10deg] opacity-70 transition-transform duration-700 group-hover:translate-x-8 group-hover:rotate-y-[-15deg]"></div>

<div className="relative w-64 h-80 bg-gradient-to-b from-indigo-900 to-black border border-white/20 rounded-xl shadow-2xl transform rotate-y-[-10deg] transition-transform duration-700 group-hover:rotate-y-[-15deg] group-hover:scale-105 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent">
<div className="text-xs font-mono text-indigo-300">MODEL X-24</div>
<div className="text-lg font-bold text-white">Crystal Clear</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-20" id="contact">
<div className="text-center mb-10">
<h2 className="text-3xl font-bold text-white mb-4">Start your project.</h2>
<p className="text-slate-400">Tell us about your space. We'll design the dimension.</p>
</div>
<form className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 hover:bg-black/60" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Company</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 hover:bg-black/60" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 hover:bg-black/60" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Requirement</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 hover:bg-black/60" placeholder="Describe your display needs..." rows="4"></textarea>
</div>
<button className="btn-3d w-full mt-4 bg-white text-black font-bold py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center gap-2 group" type="submit">
<span>Send Enquiry</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="lucide:send"></iconify-icon>
</button>
</form>
</section>
</main>
<footer className="border-t border-white/10 bg-[#020202] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xs" icon="lucide:layers"></iconify-icon>
</div>
<span className="text-white font-bold tracking-tight">Prayog Media</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
<div className="mt-8 text-center md:text-left text-xs text-slate-700">
        © 2024 Prayog Media Solutions. All rights reserved.
      </div>
</div>
</footer>


    </>
  );
}
