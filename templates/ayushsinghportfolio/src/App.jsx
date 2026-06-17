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
      

<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>

<nav className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-12 pointer-events-auto">
<a className="text-lg font-display font-medium tracking-tight text-white flex items-center gap-2" href="#">
<span className="text-sm tracking-widest uppercase">Ayush</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
<a className="hover:text-white transition-colors duration-300" href="#about">Profile</a>
<a className="hover:text-white transition-colors duration-300" href="#projects">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#skills">Stack</a>
</div>
<a className="text-white hover:text-zinc-300 transition-colors" href="mailto:singhayush9179@gmail.com">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10 pt-40 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-40 relative">
<div className="flex flex-col items-center text-center space-y-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md animate-float-slow">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-zinc-300 uppercase tracking-[0.2em]">Open to work 2026</span>
</div>

<h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-light tracking-tighter leading-[0.9]">
<span className="text-gradient-silver">Crafting</span><br/>
<span className="text-zinc-700">Experiences</span>
</h1>
<p className="max-w-2xl text-lg text-zinc-500 font-light leading-relaxed tracking-wide">
                    I’m <span className="text-zinc-200">Ayush Singh</span> – I design and build interactive, scalable web systems, blending clean frontend aesthetics with robust backend architecture.
                </p>

<div className="flex flex-wrap justify-center gap-6 pt-8">
<a className="group relative px-8 py-4 rounded-full bg-white text-black font-medium text-xs uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="https://linkedin.com/in/ayush1015" target="_blank">
<span className="relative z-10 flex items-center gap-2">
                            LinkedIn Network
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 rounded-full border border-white/10 bg-transparent text-white font-medium text-xs uppercase tracking-wider hover:bg-white/5 transition-all flex items-center gap-2" href="https://github.com/ayushsingh1524" target="_blank">
<iconify-icon icon="solar:code-circle-linear" width="16"></iconify-icon>
                        GitHub Access
                    </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-8 glass-panel rounded-3xl p-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-white animate-[spin_60s_linear_infinite]" icon="solar:asteroid-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-zinc-200" icon="solar:user-id-linear" width="16"></iconify-icon>
</span>
<h2 className="text-xl font-display font-light text-white tracking-tight">The Profile</h2>
</div>
<p className="text-zinc-400 font-light leading-loose text-sm md:text-base max-w-2xl">
                                Computer Science undergraduate at <span className="text-white">Kanpur Institute of Technology</span> (2026). Specializing in algorithmic optimization and scalable backend architecture. My code bridges the gap between raw data and human experience.
                            </p>
</div>
<div className="flex gap-4 mt-8">
<div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent self-end"></div>
</div>
</div>
</div>

<div className="md:col-span-4 glass-panel rounded-3xl p-10 relative overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-8">Coordinates</h3>
<ul className="space-y-6">
<li>
<a className="group flex items-center justify-between text-zinc-400 hover:text-white transition-colors" href="mailto:singhayush9179@gmail.com">
<span className="text-sm font-light">Email</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="group flex items-center justify-between text-zinc-400 hover:text-white transition-colors" href="https://linkedin.com/in/ayush1015">
<span className="text-sm font-light">LinkedIn</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="group flex items-center justify-between text-zinc-400 hover:text-white transition-colors" href="https://github.com/ayushsingh1524">
<span className="text-sm font-light">GitHub</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>

<div className="md:col-span-12 glass-panel rounded-3xl p-10 relative overflow-hidden" id="skills">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-zinc-200" icon="solar:cpu-linear" width="16"></iconify-icon>
</span>
<h2 className="text-xl font-display font-light text-white tracking-tight">System Core</h2>
</div>
<span className="text-xs text-zinc-600 uppercase tracking-widest font-mono">Technologies &amp; Frameworks</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3" icon="logos:react" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">React</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3" icon="logos:nodejs-icon" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Node</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="text-white opacity-50 group-hover:opacity-100 transition-all duration-500 mb-3" icon="simple-icons:express" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Express</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3" icon="logos:mongodb-icon" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Mongo</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3" icon="logos:docker-icon" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Docker</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3" icon="logos:aws" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">AWS</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3" icon="logos:elasticsearch" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Elastic</span>
</div>
<div className="group flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
<iconify-icon className="text-white opacity-50 group-hover:opacity-100 transition-all duration-500 mb-3" icon="simple-icons:oracle" width="24"></iconify-icon>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Oracle</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2">
<div>
<h2 className="text-4xl md:text-5xl font-display font-light tracking-tighter text-white mb-2">Selected Works</h2>
<p className="text-zinc-500 font-light tracking-wide text-sm">Deployments &amp; case studies.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors" href="https://github.com/ayushsingh1524">
                    Repository
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="glass-panel group relative rounded-2xl overflow-hidden flex flex-col h-full min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>

<div className="absolute inset-0 bg-[#050505]">
<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] group-hover:bg-indigo-500/30 transition-colors"></div>
</div>
<div className="relative z-20 p-8 flex flex-col h-full justify-between">
<div className="flex justify-between w-full">
<span className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded bg-black/50 backdrop-blur">01</span>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-2">Search Engine</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                                High-performance indexing system handling 10k+ documents. Utilizing inverted indexing algorithms to achieve 35% greater relevance accuracy.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-500">Node.js</span>
<span className="w-1 h-1 rounded-full bg-zinc-700 self-center"></span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500">Elastic</span>
</div>
</div>
</div>
</article>

<article className="glass-panel group relative rounded-2xl overflow-hidden flex flex-col h-full min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
<div className="absolute inset-0 bg-[#050505]">
<div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] duration-[1500ms]"></div>
</div>
<div className="relative z-20 p-8 flex flex-col h-full justify-between">
<div className="flex justify-between w-full">
<span className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded bg-black/50 backdrop-blur">02</span>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-2">Compiler Core</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                                Secure code execution environment using Docker containerization. Sub-2s latency for concurrent C++/Python processing requests.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-500">Docker</span>
<span className="w-1 h-1 rounded-full bg-zinc-700 self-center"></span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500">System</span>
</div>
</div>
</div>
</article>

<article className="glass-panel group relative rounded-2xl overflow-hidden flex flex-col h-full min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
<div className="absolute inset-0 bg-[#050505]">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-50"></div>
</div>
<div className="relative z-20 p-8 flex flex-col h-full justify-between">
<div className="flex justify-between w-full">
<span className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded bg-black/50 backdrop-blur">03</span>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-2">MEAN Stack App</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                                Full-stack enterprise application with robust REST API architecture and secure authentication protocols. 
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-500">MongoDB</span>
<span className="w-1 h-1 rounded-full bg-zinc-700 self-center"></span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500">Angular</span>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-40">
<div className="flex items-center gap-4 mb-10 justify-center">
<div className="h-px w-12 bg-zinc-800"></div>
<h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Credentials</h2>
<div className="h-px w-12 bg-zinc-800"></div>
</div>
<div className="space-y-3">

<div className="group relative px-6 py-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-center gap-6">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white shadow-lg">
<iconify-icon icon="simple-icons:oracle" width="14"></iconify-icon>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
<h4 className="text-zinc-200 font-light text-sm tracking-wide">Oracle Cloud Infrastructure 2025 Gen AI Professional</h4>
<span className="text-zinc-600 text-xs font-mono">ORACLE</span>
</div>
</div>
<div className="group relative px-6 py-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-center gap-6">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white shadow-lg">
<iconify-icon icon="simple-icons:googlecloud" width="14"></iconify-icon>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
<h4 className="text-zinc-200 font-light text-sm tracking-wide">Generative AI Fundamentals</h4>
<span className="text-zinc-600 text-xs font-mono">GOOGLE</span>
</div>
</div>
<div className="group relative px-6 py-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-center gap-6">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white shadow-lg">
<iconify-icon icon="simple-icons:amazonaws" width="14"></iconify-icon>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
<h4 className="text-zinc-200 font-light text-sm tracking-wide">AWS Cloud Practitioner Essentials</h4>
<span className="text-zinc-600 text-xs font-mono">AMAZON</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black/50 backdrop-blur-xl py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left">
<p className="text-white font-display font-medium text-lg tracking-tight">Ayush Singh</p>
<p className="text-zinc-600 text-xs mt-2 uppercase tracking-widest">Engineering the Future</p>
</div>
<div className="flex gap-8">
<a className="text-zinc-600 hover:text-white transition-colors duration-300" href="https://linkedin.com/in/ayush1015">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors duration-300" href="https://github.com/ayushsingh1524">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors duration-300" href="mailto:singhayush9179@gmail.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="text-center mt-12">
<p className="text-[10px] text-zinc-800 uppercase tracking-widest">© 2026 Ayush Singh. All rights reserved.</p>
</div>
</footer>
</main>

    </>
  );
}
