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
zinc: {
850: '#1f1f22',
950: '#09090b', // Custom dark
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'subtle-grid': 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)',
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
      

<div className="noise-bg"></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 group" href="#">
<span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform duration-300">V</span>
                VEYORA STUDIO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all hover:scale-[1.02]" href="#contact">
                Start a project
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="flex flex-col items-center text-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.1] mb-8 max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                    Crafting digital <br/>
<span className="text-white">excellence.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    Veyora Studio partners with ambitious brands to design and build scalable, high-performance web experiences that drive growth.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="px-8 py-3.5 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
                        View our work
                        <span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
<button className="px-8 py-3.5 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-sm w-full sm:w-auto justify-center">
                        Book a call
                    </button>
</div>
</div>

<div className="mt-20 relative rounded-xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-indigo-500/10 group">
<div className="absolute inset-0 bg-subtle-grid bg-[length:40px_40px] opacity-[0.05]"></div>

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="p-8 md:p-12 flex justify-center items-center h-full">
<div className="w-full max-w-3xl space-y-4 opacity-50 group-hover:opacity-80 transition-opacity duration-700 transform group-hover:scale-[1.01]">

<div className="flex items-center justify-between mb-8">
<div className="w-32 h-4 bg-zinc-700/50 rounded-full"></div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800/50"></div>
<div className="w-8 h-8 rounded-full bg-zinc-800/50"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="col-span-2 h-40 bg-zinc-800/30 rounded-lg border border-white/5"></div>
<div className="col-span-1 h-40 bg-zinc-800/30 rounded-lg border border-white/5"></div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="h-24 bg-zinc-800/30 rounded-lg border border-white/5"></div>
<div className="h-24 bg-zinc-800/30 rounded-lg border border-white/5"></div>
<div className="col-span-2 h-24 bg-zinc-800/30 rounded-lg border border-white/5"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 border-y border-white/5 py-10">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by innovators</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon" data-width="24"></span> <span className="font-bold tracking-tight text-lg text-white">Acme</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle" data-width="24"></span> <span className="font-bold tracking-tight text-lg text-white">Vertex</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:circle" data-width="24"></span> <span className="font-bold tracking-tight text-lg text-white">Sphere</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:box" data-width="24"></span> <span className="font-bold tracking-tight text-lg text-white">Cube</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:layers" data-width="24"></span> <span className="font-bold tracking-tight text-lg text-white">Stack</span></div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-zinc-400 max-w-xl">We don't just build websites; we build digital infrastructures that scale with your business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:layout-template" data-width="120"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-white">
<span className="iconify" data-icon="lucide:pen-tool" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">UI/UX Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                                User-centric interfaces that blend aesthetics with functionality. We design systems, not just pages, ensuring consistency across every touchpoint.
                            </p>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-white">
<span className="iconify" data-icon="lucide:code-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Clean, semantic code using modern frameworks like React and Tailwind. Performance optimized and SEO ready.
                    </p>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-white">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Branding</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Visual identity design that tells your story. From logos to comprehensive style guides and assets.
                    </p>
</div>

<div className="md:col-span-2 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex items-center">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-white">
<span className="iconify" data-icon="lucide:gauge" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Performance Optimization</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                We fine-tune every aspect of your site to ensure lightning-fast load times and smooth interactions.
                            </p>
</div>
<div className="flex items-center gap-4 pr-8">
<div className="text-right">
<div className="text-3xl font-medium text-white">100</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Performance</div>
</div>
<div className="h-12 w-px bg-white/10"></div>
<div className="text-right">
<div className="text-3xl font-medium text-white">0.1s</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">LCP</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="work">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Selected Work</h2>
<p className="text-zinc-400">Recent projects we've shipped.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-white hover:text-zinc-300 transition-colors" href="#">
                    View all projects <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="space-y-20">

<div className="group cursor-pointer">
<div className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden aspect-[16/9] mb-8 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#111] rounded-lg shadow-2xl border border-white/5 flex flex-col overflow-hidden">
<div className="h-8 border-b border-white/5 bg-zinc-900 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 bg-zinc-950 p-8 flex items-center justify-center">
<span className="text-2xl font-light tracking-widest text-white/20">FINANCE DASHBOARD</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium text-white mb-2">Novus Finance</h3>
<p className="text-zinc-400 text-sm">Fintech • Web App • Design System</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden aspect-[16/9] mb-8 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute bottom-0 right-0 w-[85%] h-[85%] bg-[#0a0a0a] rounded-tl-xl shadow-2xl border-l border-t border-white/5 p-6">
<div className="grid grid-cols-2 gap-4 h-full">
<div className="bg-zinc-800/20 rounded-lg"></div>
<div className="bg-zinc-800/20 rounded-lg"></div>
<div className="col-span-2 bg-zinc-800/20 rounded-lg h-1/2"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium text-white mb-2">Chronos Architecture</h3>
<p className="text-zinc-400 text-sm">Portfolio • Brand Identity</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="process">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">How we work</h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                        We believe in transparency and collaboration. Our process is designed to keep you involved at key stages while we handle the heavy lifting.
                    </p>
<a className="text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors inline-flex items-center gap-1" href="#">
                        Download Capabilities Deck <span className="iconify" data-icon="lucide:download" data-width="14"></span>
</a>
</div>
<div className="space-y-8">

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">1</div>
<div className="w-px h-full bg-zinc-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium text-lg mb-2">Discovery &amp; Strategy</h4>
<p className="text-sm text-zinc-400">We dive deep into your business goals, target audience, and competitive landscape.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center text-sm font-bold">2</div>
<div className="w-px h-full bg-zinc-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium text-lg mb-2">Design &amp; Prototype</h4>
<p className="text-sm text-zinc-400">Crafting high-fidelity mockups and interactive prototypes to visualize the end product.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center text-sm font-bold">3</div>
</div>
<div>
<h4 className="text-white font-medium text-lg mb-2">Build &amp; Launch</h4>
<p className="text-sm text-zinc-400">Developing pixel-perfect code, testing across devices, and deploying to the world.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-6 pb-12" id="contact">
<div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 relative z-10">Ready to elevate your brand?</h2>
<p className="text-zinc-400 max-w-lg mx-auto mb-10 relative z-10">
                    Currently booking projects for the upcoming quarter. Let's create something extraordinary together.
                </p>

<form className="max-w-md mx-auto relative z-10 space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-zinc-500" data-icon="lucide:mail" data-width="16"></span>
</div>
<input className="block w-full pl-10 pr-3 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-sm" id="email" placeholder="enter@your.email" type="email"/>
</div>
</div>
<div className="flex gap-3">
<div className="relative flex items-start">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-900" id="branding" name="interest" type="checkbox"/>
</div>
<div className="ml-2 text-sm">
<label className="text-zinc-400 font-medium" htmlFor="branding">Branding</label>
</div>
</div>
<div className="relative flex items-start">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-900" id="web" name="interest" type="checkbox"/>
</div>
<div className="ml-2 text-sm">
<label className="text-zinc-400 font-medium" htmlFor="web">Web Design</label>
</div>
</div>
</div>
<button className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors" type="button">
                        Get Started
                    </button>
</form>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
<p>© 2024 Veyora Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
