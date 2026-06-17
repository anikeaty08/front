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
sans: ['"Inter"', 'sans-serif'],
serif: ['"Instrument Serif"', 'serif'],
},
colors: {
page: '#0a0a0a',
card: '#121212',
text: {
DEFAULT: '#EDEDED',
muted: '#888888',
dark: '#444444'
},
brand: {
orange: '#FF3D00',
purple: '#7C3AED',
yellow: '#FFD600'
}
},
animation: {
'spin-slow': 'spin 40s linear infinite',
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Simple Intersection Observer for reveal animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            }, { threshold: 0.1 });

            // Apply to elements you want to animate on scroll
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
                observer.observe(el);
            });

            // Mouse movement for bento hover effect
            document.querySelectorAll('.bento-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute mix-blend-normal" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>
<div className="noise-overlay"></div>
<div className="fixed inset-0 mesh-gradient pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
<nav className="glass-panel rounded-full px-2 py-2 pl-6 flex items-center shadow-2xl shadow-black/40">
<a className="flex items-center gap-2 group mr-8" href="#">
</a><a className="inline-block" href="/">
<img alt="Logo" className="h-10 w-auto object-contain hover:opacity-80 transition-opacity" src="https://res.cloudinary.com/dyoyo7dcd/image/upload/v1767094689/logo_vibje2.png"/>
</a>
<span className="font-serif text-lg tracking-tight font-medium text-white group-hover:text-white/80 transition-colors">Triple Labs</span>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-text-muted hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#philosophy">Philosophy</a>
<a className="px-4 py-2 text-xs font-medium text-text-muted hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#products">Products</a>
<a className="px-4 py-2 text-xs font-medium text-text-muted hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#opensource">Open Source</a>
</div>
<div className="w-px h-4 bg-white/10 mx-2 hidden md:block"></div>
<a className="flex items-center gap-2 px-4 py-2 ml-1 bg-white text-black rounded-full text-xs font-semibold hover:bg-gray-200 transition-all transform hover:scale-105" href="#contact">
                Message Us
                <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
</header>

<section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow opacity-20 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow opacity-20 pointer-events-none" style={{animationDirection: 'reverse'}}></div>
<div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-medium text-brand-yellow mb-8 animate-reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
</span>
                Alpha Release 2025
            </div>
<h1 className="text-6xl font-serif tracking-tight leading-[0.9] mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 lg:text-9xl md:text-7xl">
  Open, Simple<br/>
                and <i className="font-light text-brand-orange">Calm</i> tools<br/>
                for a noisy world.
</h1>
<p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-12 font-light">
                We're building open-source tools that are simple to use, easy to extend, and impossible to get locked into. No bloat. No black boxes. Just software that works the way you think.
            </p>
<div className="flex items-center gap-4">
<div className="inline-block bg-transparent">
<style>
    @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
    @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; }
    
    .shiny-cta {
      --gradient-angle: 0deg;
      --gradient-angle-offset: 0deg;
      --gradient-percent: 20%;
      --gradient-shine: #8484ff;
      --shadow-size: 2px;
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      padding: 1rem 2rem;
      font-size: 0.875rem;
      line-height: 1.2;
      font-weight: 500;
      color: #ffffff;
      background: linear-gradient(#000000, #000000) padding-box,
        conic-gradient(
          from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
          transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100%
        ) border-box;
      border: 2px solid transparent;
      box-shadow: inset 0 0 0 1px #1a1818;
      outline: none;
      transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1),
        --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1),
        --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1),
        box-shadow 0.3s;
      cursor: pointer;
      isolation: isolate;
      outline-offset: 4px;
      z-index: 0;
      animation: border-spin 2.5s linear infinite;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    @keyframes border-spin { to { --gradient-angle: 360deg; } }
    
    .shiny-cta:active { transform: translateY(1px); }
    
    .shiny-cta::before {
      content: '';
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      --size: calc(100% - 6px);
      --position: 2px;
      --space: 4px;
      width: var(--size);
      height: var(--size);
      background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box;
      background-size: var(--space) var(--space);
      background-repeat: space;
      mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
      border-radius: inherit;
      opacity: 0.4;
    }
    
    .shiny-cta::after {
      content: '';
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 100%;
      aspect-ratio: 1;
      background: linear-gradient(-50deg, transparent, #1d4ed8, transparent);
      mask-image: radial-gradient(circle at bottom, transparent 40%, black);
      opacity: 0.6;
      animation: shimmer 4s linear infinite;
    }
    
    .shiny-cta span {
      position: relative;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .shiny-cta span::before {
      content: '';
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      --size: calc(100% + 1rem);
      width: var(--size);
      height: var(--size);
      box-shadow: inset 0 -1ex 2rem 4px #1d4ed8;
      opacity: 0;
      border-radius: inherit;
      transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
      animation: breathe 4.5s linear infinite;
    }
    
    @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg); } }
    @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.20); } }
    
    .shiny-cta:hover svg { transform: translateY(2px); }
    .shiny-cta svg { transition: transform 0.2s ease; }
  </style>
<a className="shiny-cta" href="#problem">
<span>
      Discover the Philosophy
      <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 max-w-7xl mx-auto" id="problem">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3 block">The Reality</span>
<h2 className="text-4xl md:text-6xl font-serif mb-6">Most software is built for spreadsheets, not people.</h2>
<p className="text-lg text-text-muted">Somewhere along the way, apps got complicated. Features you'll never use. Settings buried in menus. Subscriptions that lock your data behind walls. We think it should be different.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="bento-card col-span-1 md:col-span-2 rounded-3xl p-8 flex flex-col justify-between group">
<div className="relative h-48 w-full bg-white/5 rounded-xl border border-white/5 overflow-hidden mb-6 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-card rounded-lg border border-white/10 shadow-2xl relative flex flex-col p-4 group-hover:scale-105 transition-transform duration-500">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<div className="h-2 bg-white/10 rounded w-2/3"></div>
<div className="h-2 bg-white/10 rounded w-full"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
<div className="absolute bottom-4 right-4 p-2 bg-brand-orange/20 rounded-lg text-brand-orange">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m7.8 16.2-2.9 2.9"></path><path d="M2 12h4"></path><path d="m7.8 7.8-2.9-2.9"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</div>
<div className="">
<h3 className="text-2xl font-serif mb-2">Simple by design</h3>
<p className="text-text-muted text-sm">Every feature earns its place. If it doesn't make your life easier, it doesn't ship. We ruthlessly cut the noise.</p>
</div>
</div>

<div className="bento-card col-span-1 rounded-3xl p-8 flex flex-col justify-between">
<div className="flex items-center justify-center flex-1 py-8">
<div className="relative">
<div className="absolute inset-0 bg-brand-purple blur-[60px] opacity-20"></div>
<svg className="text-white/80" fill="none" height="80" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
<div>
<h3 className="text-2xl font-serif mb-2">Open at the core</h3>
<p className="text-text-muted text-sm">Our code lives in the open. Fork it, audit it, break it, fix it. No secrets here. Data portability is a right, not a feature.</p>
</div>
</div>

<div className="bento-card col-span-1 rounded-3xl p-8 flex flex-col justify-between">
<div className="flex items-center justify-center flex-1 py-8">
<div className="grid grid-cols-2 gap-2">
<div className="w-12 h-12 rounded-lg border border-white/20 bg-white/5"></div>
<div className="w-12 h-12 rounded-lg border border-brand-yellow/50 bg-brand-yellow/10"></div>
<div className="w-12 h-12 rounded-lg border border-white/20 bg-white/5"></div>
<div className="w-12 h-12 rounded-lg border border-white/20 bg-white/5"></div>
</div>
</div>
<div>
<h3 className="text-2xl font-serif mb-2">Modular by default</h3>
<p className="text-text-muted text-sm">Turn features on or off. Plug into your stack. Build on top—or remix entirely.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-2 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 space-y-4">
<h3 className="text-2xl font-serif">Tools for the way you actually work.</h3>
<p className="text-text-muted text-sm">We're making things we'd want to use ourselves. Keyboard-first, fast, and respectful of your attention.</p>
<a className="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors text-sm font-medium mt-4" href="#products">
                        See what's coming
                        <svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="flex-1 w-full h-full min-h-[160px] bg-white/5 rounded-xl border border-white/5 relative overflow-hidden group">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-8">
<div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
<div className="w-20 h-2 bg-white/20 rounded"></div>
<div className="w-4 h-4 rounded-full border border-white/20"></div>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
<div className="w-32 h-2 bg-white/20 rounded"></div>
<div className="w-4 h-4 rounded-full border border-brand-orange bg-brand-orange/20"></div>
</div>
<div className="flex items-center justify-between">
<div className="w-24 h-2 bg-white/20 rounded"></div>
<div className="w-4 h-4 rounded-full border border-white/20"></div>
</div>
</div>

<svg className="absolute bottom-4 right-1/3 w-6 h-6 text-white drop-shadow-lg group-hover:translate-x-4 group-hover:-translate-y-8 transition-transform duration-700 ease-in-out" fill="currentColor" viewbox="0 0 24 24"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19177L11.4841 12.3673H5.65376Z"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-y border-white/5 bg-white/[0.01]" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 block animate-pulse">Coming Soon</span>
<h2 className="text-5xl font-serif mb-6">Tools for the way you actually work.</h2>
<p className="text-text-muted text-lg max-w-2xl mx-auto">We're heads-down building our first wave of apps—small, sharp tools that solve real daily frustrations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="group relative">
<div className="absolute inset-0 bg-brand-orange/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
<div className="glass-panel h-[420px] rounded-2xl p-6 relative overflow-hidden flex flex-col hover:border-brand-orange/30 transition-colors duration-500">

<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<div className="text-sm font-medium">Editor</div>
</div>

<div className="flex-1 bg-page rounded-xl border border-white/5 p-4 relative overflow-hidden">
<div className="flex gap-1 mb-4 border-b border-white/5 pb-2">
<div className="h-2 w-2 rounded-full bg-white/20"></div>
<div className="h-2 w-2 rounded-full bg-white/20"></div>
</div>
<div className="space-y-3">
<div className="h-4 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-full bg-white/5 rounded"></div>
<div className="h-2 w-5/6 bg-white/5 rounded"></div>
<div className="h-2 w-4/6 bg-white/5 rounded"></div>
</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-orange/10 to-transparent"></div>
</div>
</div>
</div>

<div className="group relative md:-mt-8">
<div className="absolute inset-0 bg-brand-purple/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
<div className="glass-panel h-[420px] rounded-2xl p-6 relative overflow-hidden flex flex-col hover:border-brand-purple/30 transition-colors duration-500 shadow-2xl">

<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple border border-brand-purple/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M21 12H3"></path><path d="M12 3v18"></path></svg>
</div>
<div className="text-sm font-medium">Layouts</div>
</div>

<div className="flex-1 bg-page rounded-xl border border-white/5 p-4 relative overflow-hidden grid grid-cols-2 gap-2">
<div className="bg-white/5 rounded h-full border border-white/5"></div>
<div className="flex flex-col gap-2">
<div className="bg-white/5 rounded h-12 border border-white/5"></div>
<div className="bg-white/5 rounded flex-1 border border-white/5"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">
<span className="px-3 py-1 rounded-full bg-brand-purple text-white text-[10px] uppercase font-bold tracking-wider">Preview</span>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute inset-0 bg-brand-yellow/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
<div className="glass-panel h-[420px] rounded-2xl p-6 relative overflow-hidden flex flex-col hover:border-brand-yellow/30 transition-colors duration-500">

<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-brand-yellow border border-brand-yellow/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<div className="text-sm font-medium">Automate</div>
</div>

<div className="flex-1 bg-page rounded-xl border border-white/5 p-4 relative overflow-hidden flex flex-col justify-center items-center">
<div className="w-24 h-24 rounded-full border border-dashed border-white/20 flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000">
<svg className="text-white/20" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a9 9 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-text-muted">Running task...</span>
</div>
</div>
</div>
</div>
</div>
<p className="mt-12 text-sm text-text-muted italic text-center">We're making things we'd want to use ourselves.</p>
</div>
</section>

<section className="py-32 px-6" id="opensource">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1">
<h2 className="text-5xl font-serif mb-6 leading-tight">We grew up on <br/><span className="text-brand-orange">open source</span>.</h2>
<div className="space-y-6 text-lg text-text-muted font-light">
<p>Free code and coffee-shop Wi-Fi got us here. It only feels right to build in the open.</p>
<p>Open source means you own your tools—not the other way around. No lock-in. No "what happens if they shut down?" No surprises.</p>
<p>We're building for the long run, and we want you to be able to come along—or fork off and do your own thing. Both are cool.</p>
</div>
</div>
<div className="order-1 md:order-2">
<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-brand-purple/30 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

<div className="relative bg-[#0D0D0D] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">

<div className="bg-[#1a1a1a] px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors"></div>
</div>
<div className="text-[10px] text-white/30 font-sans">bash — 80x24</div>
</div>

<div className="p-6 text-gray-300">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-purple">➜</span>
<span className="text-blue-400">~</span>
<span>git clone triple-labs/core</span>
</div>
<div className="text-gray-500 mb-4">
                                Cloning into 'triple-labs'...
                                remote: Enumerating objects: 1042, done.
                                Receiving objects: 100% (1042/1042), 2.41 MiB | 4.20 MiB/s, done.
                            </div>
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-purple">➜</span>
<span className="text-blue-400">~/triple-labs</span>
<span>npm install</span>
</div>
<div className="text-gray-500 mb-4">
                                added 842 packages in 2s
                                <span className="text-green-500">found 0 vulnerabilities</span>
</div>
<div className="flex items-center gap-2">
<span className="text-brand-purple">➜</span>
<span className="text-blue-400">~/triple-labs</span>
<span className="animate-pulse bg-gray-500 w-2 h-4 block"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-white/[0.01]">
<div className="text-center mb-16 px-6">
<h2 className="text-4xl font-serif mb-4">The people behind the pixels.</h2>
<p className="text-text-muted max-w-lg mx-auto">A small crew of designers, developers, and obsessive tinkerers.</p>
</div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="group cursor-pointer">
<div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border border-white/10 group-hover:border-brand-orange/50 transition-colors">
<img alt="Abstract Team Member" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-110" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl mb-1 group-hover:text-brand-orange transition-colors">Alex Chen</h4>
<p className="text-xs text-brand-yellow uppercase tracking-widest mb-1">Building things</p>
<p className="text-xs text-text-muted">Lead Engineer</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border border-white/10 group-hover:border-brand-purple/50 transition-colors">
<img alt="Abstract Team Member" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl mb-1 group-hover:text-brand-purple transition-colors">Sarah Vance</h4>
<p className="text-xs text-brand-yellow uppercase tracking-widest mb-1">Making it pretty</p>
<p className="text-xs text-text-muted">Product Designer</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
<img alt="Abstract Team Member" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-110" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl mb-1 group-hover:text-brand-yellow transition-colors">David Park</h4>
<p className="text-xs text-brand-yellow uppercase tracking-widest mb-1">Keeping lights on</p>
<p className="text-xs text-text-muted">Operations</p>
</div>
</div>
</section>

<section className="py-32 max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<a className="group relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-end p-10 border border-white/10" href="#">

<div className="absolute inset-0">
<img alt="Blog background" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-6 border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-white transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="text-3xl font-serif mb-2">From the Lab</h3>
<p className="text-text-muted mb-6">Essays, build logs, and lessons learned. Deep dives into how we think.</p>
<div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/50 cursor-not-allowed">
                        Coming Soon
                    </div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-end p-10 border border-white/10" href="#">

<div className="absolute inset-0">
<img alt="Community background" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple flex items-center justify-center mb-6 border border-brand-purple/20 group-hover:bg-brand-purple group-hover:text-white transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-3xl font-serif mb-2">Join the conversation</h3>
<p className="text-text-muted mb-6">A place to share ideas, get help, and shape what we build together.</p>
<div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/50 cursor-not-allowed">
                        Coming Soon
                    </div>
</div>
</a>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="glass-panel max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden border border-white/10">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-4xl font-serif mb-4">First to know.</h2>
<p className="text-text-muted mb-10 max-w-lg mx-auto">We're not big on spam. Just occasional updates when something good is ready.</p>
<form className="max-w-md mx-auto flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-colors" placeholder="you@example.com" type="email"/>
<button className="bg-white text-black hover:bg-gray-200 font-bold px-6 py-3 rounded-xl transition-all transform hover:scale-105 active:scale-95" type="button">Notify me</button>
</form>
<div className="flex items-center justify-center gap-2 mt-6 text-xs text-text-muted opacity-60">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>No spam. Ever.</span>
</div>
</div>
</div>
</section>

<section className="py-20 text-center" id="contact">
<div className="group inline-block">
<h2 className="text-3xl font-serif mb-4 text-text-muted group-hover:text-white transition-colors">Got questions? Ideas? Just want to say hi?</h2>
<p className="text-text-muted mb-8">We're always happy to chat.</p>
<a className="text-6xl md:text-8xl font-serif tracking-tighter hover:text-brand-orange transition-colors duration-300 flex items-center justify-center gap-4" href="mailto:hello@triplelabs.com">
                Message us 
                <svg className="group-hover:rotate-45 transition-transform duration-500" fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<footer className="relative z-10 mt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="glass-panel relative overflow-hidden rounded-3xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-purple/10 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
<div className="relative px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

<div className="flex flex-col lg:flex-row items-start justify-between gap-12">
<div className="max-w-md">

<a className="flex items-center gap-3 group" href="#">
<img alt="Logo" className="hover:opacity-80 transition-opacity w-auto h-10 object-contain" src="https://res.cloudinary.com/dyoyo7dcd/image/upload/v1767094689/logo_vibje2.png"/>
<span className="font-serif text-2xl tracking-tight text-white group-hover:text-white/80 transition-colors">Triple Labs</span>
</a>
<p className="mt-5 text-sm text-text-muted leading-relaxed font-light">
                            Open-source tools built for clarity, not complexity. We make software that respects your time, your data, and the way you actually work.
                        </p>

<form className="mt-8 flex items-center gap-2">
<div className="flex-1">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-colors" id="footer-email" placeholder="you@example.com" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-semibold px-5 py-3 rounded-xl text-sm transition-all transform hover:scale-105 active:scale-95" type="submit">
                                Notify me
                                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
<div className="flex items-center gap-2 mt-3 text-xs text-text-muted opacity-60">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>No spam. Just the good stuff.</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full lg:w-auto">
<div className="">
<p className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-4">Explore</p>
<ul className="space-y-3 text-sm text-text-muted">
<li>
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#products">Products</a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#opensource">Open Source</a>
</li>
</ul>
</div>
<div>
<p className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-4">Connect</p>
<ul className="space-y-3 text-sm text-text-muted">
<li>
<a className="hover:text-white transition-colors" href="#">About Us</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">From the Lab</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#contact">Say Hello</a>
</li>
</ul>
</div>
<div className="">
<p className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-4">Legal</p>
<ul className="space-y-3 text-sm text-text-muted">
<li className="">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Licenses</a>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
<p className="text-xs text-text-dark">
                            © 2025 Triple Labs. Crafted with intention.
                        </p>
<span className="hidden sm:block text-text-dark">·</span>
<p className="text-[10px] text-text-dark uppercase tracking-widest">
                            Open source, open heart
                        </p>
</div>

<div className="flex items-center gap-2">
<a className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/30 transition-colors group" href="#">
<svg className="text-text-muted group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-purple/30 transition-colors group" href="#">
<svg className="text-text-muted group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-yellow/30 transition-colors group" href="#">
<svg className="text-text-muted group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors group" href="#">
<svg className="text-text-muted group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
