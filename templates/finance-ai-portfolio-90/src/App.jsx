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
serif: ['Playfair Display', 'serif'],
cinzel: ['Cinzel', 'serif'],
},
letterSpacing: {
'cinematic': '0.3em',
'editorial': '0.15em',
},
colors: {
accent: {
50: '#F0F9FF',
100: '#E0F2FE',
200: '#BAE6FD',
300: '#7DD3FC',
400: '#38BDF8',
500: '#0EA5E9',
800: '#075985',
900: '#0C4A6E',
},
obsidian: '#020204',
charcoal: '#0A0A0A',
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
},
animation: {
'slow-pan': 'pan 60s linear infinite alternate',
'float': 'float 10s ease-in-out infinite',
'reveal-up': 'revealUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
'hero-enter': 'heroEnter 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
'typing': 'typing 1.4s infinite ease-in-out both',
'spin-slow': 'spin 60s linear infinite',
'aurora': 'aurora 20s ease-in-out infinite alternate',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
pan: { '0%': { transform: 'scale(1.1) translate(0%, 0%)' }, '100%': { transform: 'scale(1.25) translate(-2%, -2%)' } },
float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
revealUp: { '0%': { opacity: '0', transform: 'translateY(60px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
heroEnter: { '0%': { opacity: '0', transform: 'translateY(40px) scale(0.98)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1.02)' } },
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
typing: { '0%, 80%, 100%': { transform: 'scale(0)' }, '40%': { transform: 'scale(1)' } },
aurora: { '0%': { opacity: '0.3', transform: 'scale(1) translate(0,0)' }, '100%': { opacity: '0.6', transform: 'scale(1.2) translate(10%, -10%)' } },
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } }
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
// Navigation Logic
const navWrapper = document.getElementById('nav-wrapper');
const navContainer = document.getElementById('nav-container');
const navLogo = document.getElementById('nav-logo');
window.addEventListener('scroll', () => {
if(window.scrollY > 50) {
navWrapper.classList.remove('pt-6', 'mix-blend-difference');
navWrapper.classList.add('pt-4', 'mix-blend-normal');
navContainer.classList.add('bg-black/80', 'backdrop-blur-xl', 'rounded-full', 'py-2', 'px-8', 'border-white/10');
navContainer.classList.remove('w-full', 'py-6', 'px-12', 'border-transparent');
navLogo.classList.add('scale-90');
} else {
navWrapper.classList.add('pt-6', 'mix-blend-difference');
navWrapper.classList.remove('pt-4', 'mix-blend-normal');
navContainer.classList.remove('bg-black/80', 'backdrop-blur-xl', 'rounded-full', 'py-2', 'px-8', 'border-white/10');
navContainer.classList.add('w-full', 'py-6', 'px-12', 'border-transparent');
navLogo.classList.remove('scale-90');
}
});
// Intersection Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate-reveal-up");
entry.target.classList.remove("opacity-0", "translate-y-12");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
el.classList.add("opacity-0", "translate-y-12", "will-change-transform");
observer.observe(el);
});
window.setServiceImage = (id) => {
document.querySelectorAll('.service-bg-img').forEach(img => {
img.classList.remove('opacity-100', 'scale-105');
img.classList.add('opacity-0', 'scale-100');
});
const active = document.getElementById(`service-img-${id}`);
if(active) {
active.classList.remove('opacity-0', 'scale-100');
active.classList.add('opacity-100', 'scale-105');
}
};
// Chatbot (AI Assistant)
window.toggleChat = () => {
const box = document.getElementById('chat-box');
const indicator = document.getElementById('chat-indicator');
if(box.classList.contains('invisible')) {
box.classList.remove('invisible', 'opacity-0', 'translate-y-4', 'scale-95');
box.classList.add('visible', 'opacity-100', 'translate-y-0', 'scale-100');
if(indicator) indicator.classList.add('hidden');
} else {
box.classList.add('invisible', 'opacity-0', 'translate-y-4', 'scale-95');
box.classList.remove('visible', 'opacity-100', 'translate-y-0', 'scale-100');
}
}
if (window.lucide) lucide.createIcons();
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
      

<div className="cinema-grain"></div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] mix-blend-difference" id="nav-wrapper">
<div className="pointer-events-auto transition-all duration-500 flex items-center gap-12 border border-transparent bg-transparent w-full max-w-[1920px] px-12 py-6 backdrop-blur-none justify-between md:justify-center" id="nav-container">
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#skills">Expertise</a>
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#projects">Work</a>
</div>
<div className="flex items-center gap-3 group cursor-pointer relative z-10 px-4">
<span className="font-cinzel font-semibold text-2xl text-white tracking-widest transition-all duration-500 drop-shadow-[0_0_15px_rgba(125,211,252,0.5)]" id="nav-logo">HEMANTH</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#experience">Experience</a>
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#certifications">Certs</a>
<a className="bg-white/10 hover:bg-accent-300/10 border border-white/20 hover:border-accent-300/30 text-white hover:text-accent-300 rounded-full px-5 py-2 transition-all duration-500 group backdrop-blur-md" href="mailto:hemanthkumar.connect.now@gmail.com">
<span className="text-[10px] font-semibold tracking-editorial uppercase">Contact</span>
</a>
</div>
<button className="md:hidden text-white"><span className="iconify" data-icon="lucide:menu" width="24"></span></button>
</div>
</nav>

<main className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden z-10">

<div className="absolute inset-0 w-full h-full bg-[#020204]">
<div className="absolute inset-0 animate-slow-pan transform-gpu">
<img className="w-full h-full object-cover filter brightness-[0.4] contrast-125 grayscale-[80%] blur-[2px]" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[30%] -left-[10%] w-[80vw] h-[80vw] bg-accent-500/10 rounded-full blur-[120px] animate-aurora mix-blend-screen opacity-40"></div>
<div className="absolute -bottom-[30%] -right-[10%] w-[70vw] h-[70vw] bg-neutral-700/20 rounded-full blur-[100px] animate-float opacity-30" style={{animationDelay: '-5s'}}></div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020204_85%)] opacity-90"></div>
<div className="absolute inset-0 bg-noise opacity-[0.05] animate-pulse-slow mix-blend-overlay"></div>
</div>

<div className="relative z-30 flex flex-col items-center px-6 text-center w-full max-w-[1920px]">
<div className="mb-6 md:mb-12 animate-hero-enter opacity-0" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-4">
<span className="h-px w-8 bg-accent-300/60"></span>
<span className="text-[10px] font-semibold text-accent-200 tracking-[0.4em] uppercase text-shadow-sm">Open to Work</span>
<span className="h-px w-8 bg-accent-300/60"></span>
</div>
</div>
<h1 className="font-cinzel leading-[0.85] relative group cursor-default mix-blend-screen animate-hero-enter opacity-0" style={{animationDelay: '0.4s'}}>
<span className="block text-[14vw] md:text-[10rem] lg:text-[11rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 transform scale-y-105">FINANCE</span>
<div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 mix-blend-normal">
<span className="font-serif italic text-[5vw] md:text-[4rem] text-accent-100 font-light tracking-wide drop-shadow-[0_0_25px_rgba(125,211,252,0.4)] opacity-90">&amp; <span className="text-white/60 text-[0.7em] not-italic font-cinzel mx-2">AI</span> Automation</span>
</div>
</h1>
<p className="mt-8 md:mt-12 text-sm md:text-lg text-neutral-300 font-light text-center max-w-lg leading-relaxed animate-hero-enter opacity-0" style={{animationDelay: '0.6s'}}>
                Bridging financial analysis with data-driven efficiency. <br/>
<span className="text-accent-200/80">Power BI, Alteryx, and n8n Expert.</span>
</p>
<div className="mt-10 animate-hero-enter opacity-0" style={{animationDelay: '0.8s'}}>
<a className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(125,211,252,0.5)] focus:outline-none text-xs font-semibold text-white tracking-widest font-sans rounded-full pt-4 pr-10 pb-4 pl-10 relative items-center justify-center w-fit mx-auto" href="#projects">
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#7DD3FC_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#020204]"></div>
</div>
<span className="relative z-10 text-neutral-200 transition-colors group-hover:text-white">View Portfolio</span>
<span className="iconify relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-accent-300" data-icon="lucide:arrow-right" width="16"></span>
</a>
</div>
</div>
</main>

<div className="relative z-20 w-full py-12 bg-[#020204] border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#020204] via-transparent to-[#020204] z-10 pointer-events-none"></div>
<div className="flex gap-24 items-center animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500 marquee-mask">
<span className="text-3xl font-serif text-white/80">Power BI</span>
<span className="text-2xl font-sans font-light tracking-widest text-white/80">ALTERYX</span>
<span className="text-3xl font-serif italic text-white/80">Python</span>
<span className="text-2xl font-sans font-bold text-white/80">n8n</span>
<span className="text-3xl font-serif text-white/80">Excel</span>
<span className="text-2xl font-sans tracking-widest text-white/80">SQL</span>
<span className="text-3xl font-serif italic text-white/80">Financial Modeling</span>
<span className="text-3xl font-serif text-white/80">Power BI</span>
<span className="text-2xl font-sans font-light tracking-widest text-white/80">ALTERYX</span>
<span className="text-3xl font-serif italic text-white/80">Python</span>
<span className="text-2xl font-sans font-bold text-white/80">n8n</span>
<span className="text-3xl font-serif text-white/80">Excel</span>
<span className="text-2xl font-sans tracking-widest text-white/80">SQL</span>
<span className="text-3xl font-serif italic text-white/80">Financial Modeling</span>
</div>
</div>

<section className="relative z-20 w-full py-32 bg-[#020204]" id="skills">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-24 reveal-on-scroll">
<div className="relative">
<div className="absolute inset-0 bg-accent-400/20 blur-[60px] rounded-full opacity-40"></div>
<h2 className="relative text-4xl md:text-7xl font-serif text-white mb-4 tracking-tight z-10">
                        Technical <span className="text-accent-300 italic font-light">Expertise</span>
</h2>
</div>
<div className="flex items-center gap-4 mt-2 opacity-80">
<span className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
<span className="text-[11px] uppercase tracking-cinematic text-neutral-400">Structured Data – Automated Growth</span>
<span className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
<div className="hidden lg:block sticky top-32 h-[700px] w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl reveal-on-scroll">
<div className="absolute inset-0 bg-neutral-900">
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-100 scale-105 filter saturate-0 contrast-125" id="service-img-1" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-0 scale-100 filter brightness-50" id="service-img-2" src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-0 scale-100 filter brightness-50" id="service-img-3" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
</div>
</div>
<div className="space-y-6">
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-accent-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(1)">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest mb-1 block">Analysis</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-accent-100 transition-colors">Financial Modeling</h3>
</div>
<i className="text-white w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Constructing robust equity research models and valuation frameworks. Expertise in forecasting and scenario analysis.
                        </p>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-accent-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(2)" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest mb-1 block">Efficiency</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-accent-100 transition-colors">AI Automation</h3>
</div>
<i className="text-white w-6 h-6" data-lucide="cpu"></i>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Building autonomous workflows using n8n and LLMs. Streamlining repetitive tasks to optimize business operations.
                        </p>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-accent-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(3)" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest mb-1 block">Insight</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-accent-100 transition-colors">Data Analytics</h3>
</div>
<i className="text-white w-6 h-6" data-lucide="pie-chart"></i>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Transforming raw data into actionable dashboards. Proficient in cleaning, transforming, and visualizing complex datasets.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-32 bg-[#020204] border-t border-white/5" id="projects">
<div className="max-w-[1800px] mx-auto px-6">

<div className="flex flex-col items-center text-center mb-24 reveal-on-scroll">
<div className="relative inline-block">
<div className="absolute inset-0 bg-accent-300/30 blur-[60px] rounded-full opacity-40"></div>
<h2 className="relative text-4xl md:text-7xl font-serif text-white mb-4 tracking-tight z-10 leading-[1.1]">
                        Financial <span className="italic text-accent-300 font-light">Intelligence</span> Engines
                    </h2>
</div>
<p className="mt-4 text-neutral-400 text-sm font-light max-w-lg mx-auto">
                    Advanced builds combining financial theory with modern data infrastructure.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 reveal-on-scroll">

<div className="relative w-full aspect-video overflow-hidden bg-[#0A0A0A] border-b border-white/5">
<img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter saturate-[0.8]" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">Pre-IPO Analysis</span>
</div>
</div>

<div className="p-8 flex flex-col flex-1">
<h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent-300 transition-colors">Pre-IPO Strategic Dashboard (Zepto)</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 flex-1">
                            A DRHP-based valuation model analyzing Zepto's $7-8B target valuation. Features automated visualizations of fresh issue structure, runway analysis, and dark-store unit economics.
                        </p>

<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#IPOAnalysis</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#ValuationModeling</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#StrategicFinance</span>
</div>

<button className="mt-auto w-full py-4 border border-white/10 rounded-lg text-[11px] font-semibold uppercase tracking-widest text-white relative overflow-hidden group/btn hover:border-accent-300/50 transition-colors">
<div className="absolute inset-0 bg-accent-300/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:drop-shadow-[0_0_8px_rgba(125,211,252,0.8)]">
                                View Analysis <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>

<div className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 reveal-on-scroll" style={{animationDelay: '0.1s'}}>

<div className="relative w-full aspect-video overflow-hidden bg-[#0A0A0A] border-b border-white/5">

<img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-accent-500/10 text-accent-300 border border-accent-500/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">FY25 Monitor</span>
</div>
</div>

<div className="p-8 flex flex-col flex-1">
<h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent-300 transition-colors">Corporate Performance Monitor (FY25)</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 flex-1">
                            An automated equity research dashboard tracking key performance indicators (KPIs) for firms like Motilal Oswal &amp; Tata Power. visualizes Operating PAT, Net Worth, and YoY growth trends extracted from annual reports.
                        </p>

<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#EquityResearch</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#FinancialReporting</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#DataViz</span>
</div>

<button className="mt-auto w-full py-4 border border-white/10 rounded-lg text-[11px] font-semibold uppercase tracking-widest text-white relative overflow-hidden group/btn hover:border-accent-300/50 transition-colors">
<div className="absolute inset-0 bg-accent-300/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:drop-shadow-[0_0_8px_rgba(125,211,252,0.8)]">
                                View Analysis <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>

<div className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 reveal-on-scroll" style={{animationDelay: '0.2s'}}>

<div className="relative w-full aspect-video overflow-hidden bg-[#0A0A0A] border-b border-white/5">
<img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125" src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">FinSearch Engine</span>
</div>
</div>

<div className="p-8 flex flex-col flex-1">
<h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent-300 transition-colors">"FinSearch" Market Intelligence</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 flex-1">
                            A Universal Bloomberg-Terminal style analysis engine designed for Indian listed companies. Features a search-query interface to aggregate real-time stock data and peer comparisons.
                        </p>

<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#FintechProduct</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#UXDesign</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">#MarketAnalytics</span>
</div>

<button className="mt-auto w-full py-4 border border-white/10 rounded-lg text-[11px] font-semibold uppercase tracking-widest text-white relative overflow-hidden group/btn hover:border-accent-300/50 transition-colors">
<div className="absolute inset-0 bg-accent-300/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:drop-shadow-[0_0_8px_rgba(125,211,252,0.8)]">
                                View Analysis <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-32 bg-[#020204]" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
<div>
<span className="text-[10px] text-accent-400 font-semibold uppercase tracking-cinematic block mb-3">Career Path</span>
<h2 className="text-4xl md:text-6xl font-serif text-white">Work <span className="text-neutral-700 italic">Experience</span></h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group relative reveal-on-scroll cursor-default">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 text-8xl font-serif text-white/10 group-hover:scale-110 transition-transform duration-1000">01</div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-0.5 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider backdrop-blur-sm">Nov '25 - Present</span>
</div>
<h3 className="text-2xl font-cinzel text-white mb-1">BuyMore</h3>
<p className="text-xs text-accent-300 tracking-widest uppercase opacity-80">Market Research Intern</p>
<p className="mt-4 text-xs text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Conducting competitor analysis and identifying e-commerce trends.
                            </p>
</div>
</div>
</div>
<div className="group relative reveal-on-scroll delay-100 cursor-default">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 text-8xl font-serif text-white/10 group-hover:scale-110 transition-transform duration-1000">02</div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-0.5 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider backdrop-blur-sm">Aug - Nov '25</span>
</div>
<h3 className="text-2xl font-cinzel text-white mb-1">StartGenie</h3>
<p className="text-xs text-neutral-400 tracking-widest uppercase opacity-80">Content Intern</p>
<p className="mt-4 text-xs text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Pitched AI-based digital marketing solutions and managed client content.
                            </p>
</div>
</div>
</div>
<div className="group relative reveal-on-scroll delay-200 cursor-default">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 text-8xl font-serif text-white/10 group-hover:scale-110 transition-transform duration-1000">03</div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-0.5 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider backdrop-blur-sm">Jul - Aug '25</span>
</div>
<h3 className="text-2xl font-cinzel text-white mb-1">NorthStar</h3>
<p className="text-xs text-neutral-400 tracking-widest uppercase opacity-80">Growth Intern</p>
<p className="mt-4 text-xs text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Utilized Gemini Pro &amp; Notebook LM for curriculum design.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto px-6 py-32 reveal-on-scroll" id="certifications">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Certifications <span className="italic text-neutral-600 font-light">&amp; Sims</span></h2>
<div className="w-px h-8 bg-accent-300/30 mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
<div className="space-y-6">
<h3 className="text-accent-300 text-xs uppercase tracking-cinematic border-b border-white/10 pb-2 mb-4">Official</h3>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">NISM V-A</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Mutual Fund Distributors</span>
</div>
<span className="text-white font-medium text-sm"><i className="w-4 h-4 text-accent-300" data-lucide="award"></i></span>
</div>
</div>
<div className="space-y-6">
<h3 className="text-accent-300 text-xs uppercase tracking-cinematic border-b border-white/10 pb-2 mb-4">Job Simulations</h3>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">PwC Power BI</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Visualizing Data</span>
</div>
<span className="text-neutral-500 font-medium text-sm">Forage</span>
</div>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">BCG Strategy</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Market Analysis</span>
</div>
<span className="text-neutral-500 font-medium text-sm">Forage</span>
</div>
</div>
</div>
</section>

<div className="bg-[#050505] border-t border-white/5 relative">
<section className="w-full max-w-7xl mx-auto px-6 py-24 reveal-on-scroll z-20 relative" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-center">
<span className="text-[10px] text-accent-400 font-semibold uppercase tracking-cinematic block mb-3">Connect</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to <span className="text-accent-300 italic">Collaborate?</span></h2>
<div className="space-y-8 mt-4">
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent-300">
<span className="iconify" data-icon="lucide:map-pin"></span>
</div>
<div>
<h4 className="text-white font-cinzel text-lg mb-1">Location</h4>
<p className="text-neutral-400 text-sm font-light">Bengaluru, India<br/>Open to Remote</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent-300">
<span className="iconify" data-icon="lucide:linkedin"></span>
</div>
<div>
<h4 className="text-white font-cinzel text-lg mb-1">Social</h4>
<a className="text-white hover:text-accent-300 transition-colors block font-medium" href="https://www.linkedin.com/in/hemanth-kumar-5bla75257" target="_blank">LinkedIn Profile</a>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 md:p-12 relative backdrop-blur-sm">
<h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
<form action="mailto:hemanthkumar.connect.now@gmail.com" className="space-y-6" enctype="text/plain" method="post">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Name</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-accent-300 transition-colors placeholder-white/20" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Company</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-accent-300 transition-colors placeholder-white/20" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Email</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-accent-300 transition-colors placeholder-white/20" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Message</label>
<textarea className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-accent-300 transition-colors placeholder-white/20 resize-none" placeholder="Let's discuss..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-4 mt-4 hover:bg-accent-100 transition-colors uppercase tracking-editorial text-xs rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(125,211,252,0.4)]">Send Inquiry</button>
</form>
</div>
</div>
</section>
<footer className="w-full pt-32 pb-16 bg-[#020204] border-t border-white/10 relative overflow-hidden">
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
<span className="text-[18vw] font-cinzel font-bold text-white/[0.02] leading-none tracking-tight block">HEMANTH</span>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-4 space-y-8">
<div>
<span className="font-cinzel text-3xl text-white block mb-6">HEMANTH</span>
<p className="text-neutral-400 text-sm font-light leading-relaxed max-w-xs">
                                Finance &amp; Accountancy Student. Integrating data analytics and automation to solve structured business problems.
                            </p>
</div>
</div>
<div className="md:col-span-2 md:col-start-6">
<h4 className="text-white font-cinzel text-sm mb-6">Menu</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-accent-300 transition-colors" href="#skills">Skills</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-accent-300 transition-colors" href="#projects">Projects</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-accent-300 transition-colors" href="#experience">Experience</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-cinzel text-sm mb-6">Tools</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-accent-300 transition-colors">Power BI</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-accent-300 transition-colors">Alteryx</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-accent-300 transition-colors">n8n</a></li>
</ul>
</div>
<div className="md:col-span-3">
<h4 className="text-white font-cinzel text-sm mb-6">Get in Touch</h4>
<p className="text-neutral-400 text-xs mb-4 leading-relaxed">Open for opportunities in Finance, Analytics, and AI Automation.</p>
<a className="inline-flex items-center gap-2 text-accent-300 hover:text-white transition-colors" href="mailto:hemanthkumar.connect.now@gmail.com">
<span className="text-xs uppercase tracking-widest">Email Me</span>
<span className="iconify" data-icon="lucide:arrow-right" width="14"></span>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-[10px] uppercase tracking-widest">© 2025 Hemanth Kumar.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-neutral-500 text-[10px] uppercase tracking-wide">Available for Hire</span>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed bottom-6 right-6 z-[60] hidden md:block font-sans">
<div className="relative group">
<button className="relative w-14 h-14 bg-white hover:bg-accent-100 text-black rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 z-50" onclick="toggleChat()">
<span className="iconify" data-icon="lucide:bot" width="24"></span>
<span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#020204] rounded-full" id="chat-indicator"></span>
</button>
<div className="absolute bottom-[calc(100%+16px)] right-0 w-[360px] bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl invisible opacity-0 translate-y-4 scale-95 origin-bottom-right transition-all duration-300 overflow-hidden flex flex-col" id="chat-box">
<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-accent-300/20 flex items-center justify-center border border-accent-300/30 overflow-hidden">
<span className="iconify text-accent-300" data-icon="lucide:sparkles"></span>
</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></span>
</div>
<div>
<span className="block text-white text-sm font-medium">Hemanth AI</span>
<span className="block text-[10px] text-neutral-400">Online</span>
</div>
</div>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="toggleChat()">
<span className="iconify" data-icon="lucide:x" width="18"></span>
</button>
</div>
<div className="p-5 space-y-4 min-h-[280px] max-h-[400px] overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent">
<div className="text-center text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Today</div>
<div className="flex gap-3 items-start">
<div className="w-6 h-6 rounded-full bg-accent-300/20 flex-shrink-0 flex items-center justify-center border border-accent-300/10 mt-1">
<span className="iconify text-accent-300" data-icon="lucide:bot" width="12"></span>
</div>
<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
<p className="text-neutral-200 text-xs leading-relaxed">
                                Hi there! I'm Hemanth's portfolio assistant. How can I help you?
                            </p>
</div>
</div>
</div>
<div className="p-3 border-t border-white/5 bg-neutral-900/50">
<form className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-full px-4 py-2" onsubmit="event.preventDefault(); window.location.href='#contact'; toggleChat();">
<input className="bg-transparent border-none focus:outline-none text-xs text-white w-full placeholder-neutral-500" placeholder="Type a message..." type="text"/>
<button className="text-accent-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:send" width="14"></span>
</button>
</form>
</div>
</div>
</div>
</div>

    </>
  );
}
