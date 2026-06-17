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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b', // Main background
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
// Optional: Unobserve if you want it to run only once
// observer.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// Trigger hero animations immediately
setTimeout(() => {
document.querySelectorAll("#hero .animate-on-scroll").forEach(el => el.classList.add("animate"));
}, 100);
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;
                
                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-zinc-900/40 via-zinc-950/20 to-transparent -z-10 pointer-events-none"></div>
<div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-50 opacity-50"></div>

<div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-[1200px]">
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden delay-100">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam" style={{animationDuration: '7s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-150 relative overflow-hidden">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '2s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-75"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-100 relative overflow-hidden">
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-400"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-150"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
</div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl shrink-0">
<div className="rounded-full border border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-2xl shadow-black/50 px-4 md:px-3 h-14 flex items-center justify-between gap-4 md:gap-12">

<div className="flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="lucide:box"></iconify-icon>
<span className="text-base font-medium tracking-tight text-white">Nexus</span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                    Product 
                    <iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-down" width="12"></iconify-icon>
</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    Log in
                </a>
<button className="relative rounded-full bg-white px-5 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition-all overflow-hidden group">
<span className="relative z-10">Get Started</span>
</button>
</div>
</div>
</nav>

<main className="relative pt-24">

<section className="flex flex-col w-full max-w-7xl z-10 mt-16 md:mt-32 mx-auto px-6 relative min-h-[80vh] justify-center" id="hero">

<div className="w-full flex justify-start mb-10 spotlight-group relative animate-on-scroll">
<a className="relative z-10 group flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/50 pr-4 pl-1.5 py-1.5 hover:border-white/20 transition-all overflow-hidden" href="#">
<span className="rounded-full bg-zinc-800 border border-white/5 px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide uppercase">
                        v3.0 Beta
                    </span>
<span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">Edge functions are live</span>
<iconify-icon className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="w-full max-w-5xl">
<div className="relative z-20 animate-on-scroll">
<div className="flex flex-col gap-2">
<div className="flex text-xs text-zinc-500 font-mono mb-4 gap-x-2 gap-y-2 items-center tracking-widest uppercase">
                            01_ORCHESTRATION <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<h1 className="text-5xl md:text-8xl lg:text-[100px] leading-[0.95] tracking-tighter font-serif text-white mix-blend-screen">
<span className="block word-mask"><span className="block word-reveal" style={{transitionDelay: '100ms'}}>The control plane</span></span>
<span className="block word-mask"><span className="block word-reveal font-light text-zinc-500 sans-serif" style={{transitionDelay: '250ms'}}>for hybrid cloud.</span></span>
</h1>
</div>
</div>
</div>

<div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end animate-on-scroll" style={{transitionDelay: '400ms'}}>

<div className="group relative rounded-2xl bg-zinc-900/30 border border-white/10 p-6 md:p-8 spotlight-group overflow-hidden hover:bg-zinc-900/50 transition-all duration-500 backdrop-blur-sm">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="absolute left-0 top-8 w-0.5 h-12 bg-white rounded-r-full"></div>
<p className="text-lg md:text-xl text-zinc-300 font-serif italic leading-relaxed z-10 relative max-w-lg">
                        "Sync databases, manage microservices, and orchestrate serverless functions with a single config file. The infrastructure layer for modern DevOps."
                    </p>
<div className="mt-8 flex gap-3 items-center">
<div className="flex -space-x-3">
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-900 bg-zinc-700 flex items-center justify-center text-[10px] text-white">J</div>
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-900 bg-zinc-600 flex items-center justify-center text-[10px] text-white">M</div>
<div className="h-8 w-8 rounded-full ring-2 ring-zinc-900 bg-zinc-500 flex items-center justify-center text-[10px] text-white">K</div>
</div>
<span className="text-[10px] text-zinc-500 font-mono tracking-wider font-semibold uppercase">Joined by 10k+ Engineers</span>
</div>
</div>

<div className="flex flex-col sm:flex-row md:items-center gap-4 z-10 lg:justify-end pb-4">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200">
<span className="mr-2">Start Deploying</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-900 transition-colors" icon="lucide:terminal" width="16"></iconify-icon>
</button>
<button className="group inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 font-medium text-zinc-400 transition-all hover:text-white hover:border-white/30">
<span>Documentation</span>
<iconify-icon className="ml-2 text-zinc-600 group-hover:translate-x-1 group-hover:text-white transition-all" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="z-20 w-full mt-24 relative animate-on-scroll" style={{transitionDelay: '600ms'}}>
<p className="uppercase text-xs font-bold text-zinc-600 tracking-widest font-mono text-center mb-10">Powering next-gen teams</p>
<div className="relative flex overflow-hidden marquee-mask">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-24 items-center opacity-30 hover:opacity-60 transition-opacity grayscale invert">
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="simple-icons:github" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:raycast" width="40"></iconify-icon>

<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="simple-icons:github" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:raycast" width="40"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 mt-32 md:mt-44 relative py-32 border-t border-white/5 bg-zinc-950" id="features">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:100px_50px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight mb-4">
                        Zero-Config <span className="not-italic text-zinc-500 font-normal font-sans">Infrastructure</span>
</h2>
<p className="text-zinc-500 text-lg font-light leading-relaxed">
                        Scale automatically with primitives designed for pixel-perfect backend precision.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group relative rounded-xl bg-zinc-900/40 border border-white/5 p-6 spotlight-group overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden flex flex-col p-4 gap-3 select-none">

<div className="flex items-center justify-between p-2 rounded bg-zinc-800/50 border border-white/10 relative z-10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-500"></div>
<div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
</div>
<div className="h-1.5 w-8 bg-zinc-700/50 rounded"></div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-zinc-800/30 border border-white/5 relative z-10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="h-1.5 w-16 bg-zinc-700/50 rounded"></div>
</div>
<div className="h-1.5 w-6 bg-zinc-700/50 rounded"></div>
</div>
<div className="absolute bottom-4 right-4 bg-zinc-800 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 z-20 shadow-xl">
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:check-circle"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-300 font-medium">SYNCED</span>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">01</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:rotate-ccw" width="18"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Instant Rollbacks</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Immutable deployments allow you to revert to any previous state instantly.
                            </p>
</div>
</div>

<div className="group relative rounded-xl bg-zinc-900/40 border border-white/5 p-6 spotlight-group overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="w-full max-w-[160px] space-y-3 relative z-10">
<div className="flex items-center justify-between px-3 py-2 bg-zinc-800/50 border border-white/10 rounded-lg shadow-sm backdrop-blur-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:activity"></iconify-icon>
<div className="h-1.5 w-12 bg-zinc-600 rounded"></div>
</div>
<div className="text-[10px] text-white font-mono font-medium">99.99%</div>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">02</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:bar-chart-2" width="18"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Real-time Telemetry</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Granular observability built-in. Trace every request across your entire mesh.
                            </p>
</div>
</div>

<div className="group relative rounded-xl bg-zinc-900/40 border border-white/5 p-6 spotlight-group overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-6 select-none">
<div className="relative w-full h-full border border-dashed border-zinc-700/50 rounded-lg flex flex-col justify-between p-3 bg-zinc-900/20">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-300 text-xs font-mono shadow-sm">
                                        us-east-1
                                    </div>
</div>
<div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-zinc-600 rounded-full"></div>
<div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-zinc-600 rounded-full"></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">03</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:globe" width="18"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Global Edge</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Deploy logic to 35+ regions. Smart routing connects users to nearest compute.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 md:mt-40 mx-auto px-6 relative" id="workflow">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">

<div className="flex flex-col justify-center animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white text-xl" icon="lucide:cpu"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-white font-bold">Nexus Engine</span>
</div>
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6 leading-none">
<span className="italic block text-zinc-600 font-light">Infrastructure as Code</span>
<span className="font-medium">without the chaos.</span>
</h2>
<p className="text-lg text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
                        Deterministic, versioned, and instant. Nexus provides the primitive rails for machine-to-machine orchestration.
                    </p>
<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-zinc-950 bg-white p-1 rounded-md">
<iconify-icon icon="lucide:git-branch" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white mb-0.5">Branch Previews</div>
<div className="text-xs text-zinc-500 font-light">Ephemeral environments</div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-zinc-950 bg-white p-1 rounded-md">
<iconify-icon icon="lucide:code-2" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white mb-0.5">SDK Native</div>
<div className="text-xs text-zinc-500 font-light">Typescript &amp; Go support</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8">
<div className="flex gap-16">
<div className="group cursor-default">
<div className="text-3xl font-serif italic text-white mb-1 tracking-tight group-hover:text-emerald-400 transition-colors">&lt; 10ms</div>
<div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Cold Start</div>
</div>
<div className="group cursor-default">
<div className="text-3xl font-serif italic text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">5B+</div>
<div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Requests/Day</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-10 animate-on-scroll" style={{transitionDelay: '200ms'}}>

<div className="w-full rounded-xl bg-zinc-900 border border-white/10 p-1 relative shadow-2xl shadow-black/50">
<div className="flex overflow-hidden bg-black w-full h-[460px] rounded-lg relative">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="flex-1 border-r border-white/5 bg-zinc-900/30 p-4 flex flex-col gap-3 backdrop-blur-md z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
<span className="text-xs font-semibold text-zinc-400">Building</span>
<span className="text-[10px] bg-zinc-800 px-1.5 rounded text-zinc-500 border border-white/5">2</span>
</div>
</div>

<div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5 shadow-sm cursor-default hover:border-white/20 transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">build-84f9</span>
<iconify-icon className="text-zinc-600 text-xs" icon="lucide:git-commit"></iconify-icon>
</div>
<div className="text-xs text-zinc-300 font-medium mb-2">Merge: "Fix API Rate Limit"</div>
<span className="inline-flex px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold bg-orange-400/10 text-orange-400 border border-orange-400/20">Optimizing</span>
</div>
<div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-mono text-zinc-500">build-84e2</span>
<iconify-icon className="text-zinc-600 text-xs" icon="lucide:user"></iconify-icon>
</div>
<div className="text-xs text-zinc-300 font-medium mb-2">Update: Middleware Auth</div>
</div>
</div>

<div className="flex-1 p-4 flex flex-col gap-3 bg-zinc-950/50 z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs font-semibold text-zinc-400">Live</span>
</div>
</div>
<div className="p-3 rounded-lg bg-zinc-900/50 border border-white/5 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-mono text-zinc-500">v3.4.1</span>
</div>
<div className="text-xs text-zinc-600 font-medium mb-2 line-through">Release #9921</div>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
<iconify-icon icon="lucide:check" width="8"></iconify-icon> Propagated
                                    </span>
</div>
</div>
</div>
</div>

<div className="relative pl-6 border-l-2 border-zinc-800">
<blockquote className="text-xl font-serif text-zinc-400 leading-relaxed mb-4 italic">
                            "Nexus is the only platform reliable enough for our heavy workloads. It's not just faster; it's practically instant."
                        </blockquote>
<div className="flex items-center gap-3">
<span className="text-sm text-white font-medium">Marcus Chen</span>
<span className="text-sm text-zinc-600">VP Engineering</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 mt-32 relative pt-32 pb-32 border-t border-white/5 bg-zinc-950" id="pricing">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_50px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-on-scroll">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4 leading-none">
<span className="italic block text-zinc-500 font-light">Predictable costs</span>
<span className="font-medium">for infinite scale.</span>
</h2>
<p className="text-lg text-zinc-400 font-light">
                            Pay only for the compute cycles and bandwidth you actually use.
                        </p>
</div>
</div>
<div className="w-full overflow-x-auto pb-8 animate-on-scroll">
<div className="min-w-[900px]">
<div className="grid grid-cols-4 gap-4 mb-4 items-end">
<div className="p-6">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Core Features</span>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700 to-zinc-900/10 rounded-t-2xl blur opacity-20"></div>
<div className="relative bg-zinc-900 border border-zinc-700 border-b-0 rounded-t-2xl p-6 pb-8 flex flex-col gap-4 shadow-2xl">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-sm font-semibold text-white">Usage</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-serif text-white">$0.0004</span>
<span className="text-xs text-zinc-500 font-mono">/ REQ</span>
</div>
<p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wide">Per function invocation</p>
</div>
<button className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-sm">
                                        Start Building
                                    </button>
<div className="absolute -bottom-4 left-0 w-full h-8 bg-zinc-900 z-10"></div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 border-b-0 rounded-t-2xl p-6 pb-8 flex flex-col gap-4 opacity-50 hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-400">Pro</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-serif text-white">$49</span>
<span className="text-xs text-zinc-500 font-mono">/ MO</span>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-colors">
                                    Enable Access
                                </button>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 border-b-0 rounded-t-2xl p-6 pb-8 flex flex-col gap-4 opacity-50 hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-400">Enterprise</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-serif text-white">$499</span>
<span className="text-xs text-zinc-500 font-mono">/ MO</span>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-colors">
                                    Contact Sales
                                </button>
</div>
</div>

<div className="bg-zinc-900 border-t border-zinc-800 shadow-sm rounded-b-2xl">
<div className="grid grid-cols-4 border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
<div className="p-6 text-sm text-zinc-400 font-medium">Throughput</div>
<div className="p-6 text-sm text-white bg-zinc-800 border-x border-zinc-700 font-mono font-medium">Unlimited</div>
<div className="p-6 text-sm text-zinc-500 font-mono">100k RPM</div>
<div className="p-6 text-sm text-zinc-500 font-mono">Custom</div>
</div>
<div className="grid grid-cols-4 border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
<div className="p-6 text-sm text-zinc-400 font-medium">Duration</div>
<div className="p-6 text-sm text-white bg-zinc-800 border-x border-zinc-700 font-mono font-medium">15 min</div>
<div className="p-6 text-sm text-zinc-500 font-mono">1 min</div>
<div className="p-6 text-sm text-zinc-500 font-mono">Unlimited</div>
</div>
<div className="grid grid-cols-4 hover:bg-zinc-800/50 transition-colors">
<div className="p-6 text-sm text-zinc-400 font-medium">DDoS Protection</div>
<div className="p-6 flex justify-start bg-zinc-800 border-x border-zinc-700 text-white">
<iconify-icon icon="lucide:check-circle" width="18"></iconify-icon>
</div>
<div className="p-6 flex justify-start text-zinc-600">
<iconify-icon icon="lucide:check" width="18"></iconify-icon>
</div>
<div className="p-6 flex justify-start text-zinc-600">
<iconify-icon icon="lucide:check" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 overflow-hidden bg-zinc-950 border-t border-white/10">
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-mono mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Nexus Mainnet is Live
                </div>
<h2 className="text-5xl md:text-[64px] font-serif text-white tracking-tight leading-none mb-6">
                    Start the <span className="italic text-zinc-500">evolution.</span>
</h2>
<p className="text-xl text-zinc-500 font-light max-w-2xl mb-10">
                    Join the platform powering over <span className="text-white font-normal">20,000+</span> microservices.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-14 px-10 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 flex items-center gap-2 w-full sm:w-auto justify-center">
                        Get API Keys
                        <iconify-icon icon="lucide:key" width="18"></iconify-icon>
</button>
<button className="h-14 px-10 rounded-full bg-transparent border border-white/10 text-zinc-400 font-semibold hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                        Read Docs
                        <iconify-icon className="text-zinc-600 group-hover:text-white" icon="lucide:book-open" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="w-full bg-black pt-20 pb-12 relative z-20 border-t border-zinc-900 text-zinc-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20">
<div className="col-span-2 md:col-span-4 flex flex-col gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="lucide:box"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white">Nexus</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-light">
                            The control plane for the modern web. Nexus orchestrates your backend infrastructure with zero configuration.
                        </p>
<div className="flex gap-4 mt-2">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:discord" width="18"></iconify-icon></a>
</div>
</div>
<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-sm font-medium text-white mb-6">Product</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Orchestration</a></li>
<li><a className="hover:text-white transition-colors" href="#">Edge Functions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Databases</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-white mb-6">Resources</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">System Status</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-white mb-6">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-600 font-mono">
                        © 2024 Nexus Systems Inc.
                    </div>
</div>
</div>
</footer>
</main>


    </>
  );
}
