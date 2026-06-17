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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
red: '#FF331F',
black: '#030303',
dark: '#0A0A0A',
gray: '#171717'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- ROUTING LOGIC ---
        function switchView(viewName, scrollTargetId) {
            const homeView = document.getElementById('view-home');
            const detailView = document.getElementById('view-detail');
            const body = document.getElementById('body-content');

            // Simple Fade Out
            if(viewName === 'detail') {
                homeView.style.opacity = '0';
                setTimeout(() => {
                    homeView.classList.remove('active-view');
                    detailView.classList.add('active-view');
                    window.scrollTo(0,0);
                    // Fade In
                    setTimeout(() => detailView.style.opacity = '1', 50);
                }, 300);
            } else {
                detailView.style.opacity = '0';
                setTimeout(() => {
                    detailView.classList.remove('active-view');
                    homeView.classList.add('active-view');
                    // Fade In
                    setTimeout(() => {
                        homeView.style.opacity = '1';
                        // Handle anchor scrolling
                        if(scrollTargetId) {
                            const el = document.getElementById(scrollTargetId);
                            if(el) el.scrollIntoView();
                        } else {
                            window.scrollTo(0,0);
                        }
                    }, 50);
                }, 300);
            }
        }

        // --- LOADING & ANIMATION ---
        document.addEventListener('DOMContentLoaded', () => {
            const loader = document.getElementById('loader');
            const percentEl = document.getElementById('loader-percent');
            const barEl = document.getElementById('loader-bar');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += 2;
                percentEl.innerText = (progress > 100 ? 100 : progress) + '%';
                barEl.style.width = progress + '%';
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        loader.classList.add('loaded');
                        loader.style.pointerEvents = 'none';
                        setTimeout(() => {
                           document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
                           typeWriter();
                        }, 500);
                    }, 500);
                }
            }, 20);

            // Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            // Typewriter
            function typeWriter() {
                const text = `const enigma = new Venture({\n  mission: 'Accelerate Innovation',\n  stack: ['Next.js', 'Rust', 'AI'],\n  status: 'Operational'\n});`;
                const el = document.getElementById('typewriter');
                let i = 0;
                function type() {
                    if (i < text.length) {
                        el.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, 30);
                    }
                }
                type();
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
      

<div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6" id="loader">
<div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
<div className="relative z-10 w-full max-w-md">
<div className="flex justify-between items-end mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
<span id="loader-status">Initializing Core</span>
<span id="loader-percent">00%</span>
</div>
<div className="w-full h-[1px] bg-neutral-800 relative overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-brand-red w-0 transition-all duration-100 ease-out" id="loader-bar"></div>
</div>
</div>
</div>

<div className="bg-noise"></div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full opacity-50"></div>
<div className="absolute inset-0 perspective-grid opacity-30"></div>
</div>

<nav className="fixed w-full z-40 top-0 border-b border-white/5 bg-brand-black/50 backdrop-blur-xl transition-transform duration-700 delay-500" id="main-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group relative z-50" href="#" onclick="switchView('home')">
<div className="relative w-6 h-6 transform group-hover:rotate-12 transition-transform duration-500">
<svg className="w-full h-full fill-brand-red" viewbox="0 0 100 100">
<path d="M50 85 C50 85 20 60 20 40 C20 30 25 20 35 20 C42 20 48 25 50 30 C52 25 58 20 65 20 C75 20 80 30 80 40 C80 60 50 85 50 85 Z"></path>
</svg>
</div>
<span className="font-semibold tracking-tight text-sm text-white group-hover:text-brand-red transition-colors">ENIGMA</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#" onclick="switchView('home')">Home</a>
<a className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#work" onclick="switchView('home', 'work')">Work</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors">Start Project</button>
</div>
</div>
</nav>

<div className="view-section active-view relative z-10" id="view-home">

<section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 min-h-screen flex flex-col justify-center">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
</span>
<span className="font-mono text-[10px] text-neutral-300 tracking-wider uppercase">Systems Operational</span>
</div>
<h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1] reveal stagger-1">
                    Constructing the <br/>
<span className="text-shimmer bg-clip-text text-transparent">Digital Unknown</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed reveal stagger-2">
                    Enigma is a strategic engineering partner for high-growth ventures. We build scalable systems, intuitive interfaces, and robust infrastructure.
                </p>
</div>

<div className="mt-24 max-w-3xl mx-auto w-full relative group reveal stagger-3">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-red/20 via-white/5 to-brand-red/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
<div className="ml-auto font-mono text-[10px] text-neutral-500">server.ts</div>
</div>
<div className="p-6 font-mono text-xs md:text-sm text-neutral-400 overflow-x-auto min-h-[140px]">
<div className="whitespace-pre-wrap leading-relaxed" id="typewriter"></div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-brand-dark overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
<div className="flex w-max animate-marquee gap-20 opacity-50 grayscale">
<div className="flex items-center gap-2 text-white"><iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon> <span className="font-semibold text-lg tracking-tight">Vercel</span></div>
<div className="flex items-center gap-2 text-white"><iconify-icon icon="solar:globe-linear" width="24"></iconify-icon> <span className="font-semibold text-lg tracking-tight">Stripe</span></div>
<div className="flex items-center gap-2 text-white"><iconify-icon icon="solar:database-linear" width="24"></iconify-icon> <span className="font-semibold text-lg tracking-tight">Supabase</span></div>
<div className="flex items-center gap-2 text-white"><iconify-icon icon="solar:layers-linear" width="24"></iconify-icon> <span className="font-semibold text-lg tracking-tight">React</span></div>
<div className="flex items-center gap-2 text-white"><iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon> <span className="font-semibold text-lg tracking-tight">Vercel</span></div>
<div className="flex items-center gap-2 text-white"><iconify-icon icon="solar:globe-linear" width="24"></iconify-icon> <span className="font-semibold text-lg tracking-tight">Stripe</span></div>
</div>
</section>

<section className="py-32 px-6 bg-brand-black relative border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Selected Works</h2>
<p className="text-lg text-neutral-400 max-w-xl font-light">Digital experiences engineered for high-impact results.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-white/10 reveal stagger-1 cursor-pointer transition-transform hover:-translate-y-2 duration-500" onclick="switchView('detail')">
<div className="h-80 bg-neutral-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black z-0"></div>
<div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(255, 51, 31, 0.2), transparent 60%)'}}></div>

<div className="absolute top-12 left-12 right-0 bottom-0 bg-[#0A0A0A] rounded-tl-xl border-l border-t border-white/10 shadow-2xl flex flex-col p-4 transform transition-transform duration-700 group-hover:translate-x-2">
<div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
<div className="w-20 h-6 bg-white/5 rounded"></div>
<div className="ml-auto flex gap-2"><div className="w-6 h-6 rounded-full bg-brand-red/20"></div></div>
</div>
<div className="flex gap-4 h-full">
<div className="w-1/4 h-3/4 bg-white/5 rounded"></div>
<div className="w-3/4 space-y-3"><div className="w-full h-32 bg-white/5 rounded"></div><div className="w-2/3 h-4 bg-white/5 rounded"></div></div>
</div>
</div>
</div>
<div className="p-8 relative z-10 bg-neutral-900 border-t border-white/5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-red transition-colors">Nova Protocol</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">DeFi dashboard enabling real-time asset tracking.</p>
</div>
<div className="p-2 rounded-full border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></div>
</div>
<div className="flex gap-2 flex-wrap">
<span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded-full text-neutral-500 bg-white/5">React</span>
<span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded-full text-neutral-500 bg-white/5">Web3</span>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-white/10 reveal stagger-2 cursor-pointer transition-transform hover:-translate-y-2 duration-500" onclick="switchView('detail')">
<div className="h-80 bg-neutral-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black z-0"></div>
<div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(50, 100, 255, 0.1), transparent 60%)'}}></div>
<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
<div className="relative w-64 h-full bg-[#050505] border-x border-white/5 p-4 flex flex-col gap-3 transform transition-transform duration-700 group-hover:scale-105">
<div className="w-full h-40 bg-white/5 rounded border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="w-8 h-8 rounded-full border border-brand-red/50 flex items-center justify-center"><div className="w-2 h-2 bg-brand-red rounded-full"></div></div>
</div>
<div className="space-y-2"><div className="w-full h-2 bg-white/10 rounded-full"></div><div className="w-2/3 h-2 bg-white/10 rounded-full"></div></div>
</div>
</div>
</div>
<div className="p-8 relative z-10 bg-neutral-900 border-t border-white/5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-red transition-colors">Vortex Analytics</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">AI-driven market intelligence platform.</p>
</div>
<div className="p-2 rounded-full border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></div>
</div>
<div className="flex gap-2 flex-wrap">
<span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded-full text-neutral-500 bg-white/5">Python</span>
<span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded-full text-neutral-500 bg-white/5">AI</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600 font-mono">© 2024 Enigma Venture. All rights reserved.</p>
</div>
</footer>
</div>

<div className="view-section relative z-20 min-h-screen bg-brand-black" id="view-detail">

<header className="pt-32 pb-16 px-6 border-b border-white/5 bg-gradient-to-b from-brand-black to-neutral-900/50">
<div className="max-w-7xl mx-auto">
<button className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors mb-8 group" onclick="switchView('home', 'work')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                    BACK TO PROJECTS
                </button>
<div className="flex flex-col md:flex-row gap-8 justify-between items-end animate-fade-in">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white">Nova Protocol</h1>
<a className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center gap-2 text-sm" href="#">
                        Visit Live Site
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-24 animate-fade-in" style={{animationDelay: '100ms'}}>
<div>
<h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Client</h3>
<p className="text-white text-lg">Nova Foundation</p>
</div>
<div>
<h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Services</h3>
<ul className="text-neutral-300 space-y-1">
<li>UI/UX Design</li>
<li>Frontend Architecture</li>
<li>Smart Contract Integration</li>
</ul>
</div>
<div>
<h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Tech Stack</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400">Next.js</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400">TypeScript</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400">Ethers.js</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400">Tailwind</span>
</div>
</div>
</div>

<div className="lg:col-span-8 animate-fade-in" style={{animationDelay: '200ms'}}>

<div className="w-full aspect-video bg-[#0A0A0A] rounded-xl border border-white/10 mb-16 relative overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-[#050505] to-[#050505]"></div>
<div className="absolute inset-4 rounded-lg border border-white/5 bg-black/50 backdrop-blur-sm p-6 flex flex-col gap-4">

<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="flex gap-4">
<div className="w-24 h-4 bg-white/10 rounded"></div>
<div className="w-16 h-4 bg-white/5 rounded"></div>
</div>
<div className="w-8 h-8 rounded-full bg-brand-red/20"></div>
</div>

<div className="grid grid-cols-3 gap-4 h-full">
<div className="col-span-2 space-y-4">
<div className="h-48 rounded bg-gradient-to-t from-brand-red/10 to-transparent border border-white/5 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-24 stroke-brand-red fill-none" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L10 15 L20 18 L30 10 L40 12 L50 5 L60 8 L70 2 L80 10 L90 5 L100 0" strokeWidth="0.5"></path>
</svg>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 rounded bg-white/5 border border-white/5"></div>
<div className="h-24 rounded bg-white/5 border border-white/5"></div>
</div>
</div>
<div className="col-span-1 h-full rounded bg-white/5 border border-white/5"></div>
</div>
</div>
</div>
<div className="prose prose-invert prose-lg max-w-none text-neutral-400">
<h2 className="text-2xl font-medium text-white mb-6">The Challenge</h2>
<p className="mb-8 font-light leading-relaxed">
                            DeFi platforms often suffer from complexity overload. Users are presented with dense tables of data, unintuitive transaction flows, and sluggish performance. Nova Foundation approached us to redesign their core trading protocol interface. The goal was simple but ambitious: make institutional-grade trading accessible, transparent, and incredibly fast.
                        </p>
<h2 className="text-2xl font-medium text-white mb-6">Our Approach</h2>
<p className="mb-8 font-light leading-relaxed">
                            We began by deconstructing the typical user journey for liquidity provision. Identifying friction points, we architected a new frontend using Next.js 14 to leverage Server Components for rapid data fetching.
                        </p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 not-prose">
<li className="bg-neutral-900/50 p-6 rounded-lg border border-white/5">
<iconify-icon className="text-brand-red text-2xl mb-3" icon="solar:bolt-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">Real-time Data</h4>
<p className="text-sm text-neutral-500">WebSockets implementation for sub-second price updates.</p>
</li>
<li className="bg-neutral-900/50 p-6 rounded-lg border border-white/5">
<iconify-icon className="text-brand-red text-2xl mb-3" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">Type Safety</h4>
<p className="text-sm text-neutral-500">End-to-end type safety from smart contract ABI to UI.</p>
</li>
</ul>
<h2 className="text-2xl font-medium text-white mb-6">The Outcome</h2>
<p className="mb-10 font-light leading-relaxed">
                            Since launch, the platform has processed over $500M in volume. The new interface reduced the average time-to-transaction by 40%, significantly improving trader efficiency.
                        </p>
<div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 not-prose">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1">0.4s</div>
<div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Load Time</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1">$500M+</div>
<div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Volume</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white mb-1">100%</div>
<div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Uptime</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 bg-neutral-900/30 py-20 text-center cursor-pointer hover:bg-neutral-900/50 transition-colors group" onclick="switchView('detail')"> 
<p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Next Case Study</p>
<h2 className="text-4xl md:text-6xl font-medium text-white group-hover:text-brand-red transition-colors">Vortex Analytics</h2>
</div>
</div>


    </>
  );
}
