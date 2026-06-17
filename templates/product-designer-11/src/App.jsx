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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '48px 48px', backgroundPosition: '16px 16px'}}></div>

<div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen transform rotate-12"></div>
<div className="absolute top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-purple-700/15 blur-[140px] mix-blend-screen transform -rotate-12"></div>
<div className="absolute top-[60%] left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 bg-radial-gradient from-transparent via-[#020617]/50 to-[#020617] z-0 pointer-events-none" style={{background: 'radial-gradient(circle at center, transparent 0%, #020617 100%)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/40 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tighter hover:text-indigo-300 transition-colors" href="#">DR.</a>
<div className="hidden md:flex gap-8 text-sm tracking-wide">
<a className="text-slate-300 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#case-studies">Case Studies</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors" href="mailto:hello@example.com">
                Contact
                <iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-slate-400 hover:text-white transition-colors flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 relative z-10 w-full max-w-6xl mx-auto px-6">

<section className="md:pt-52 md:pb-32 flex flex-col min-h-[80vh] pt-40 pb-24 items-start justify-center" id="home">
<div className="inline-flex text-xs font-medium text-indigo-300 bg-indigo-500/10 border-indigo-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                Available for new opportunities
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                Designing <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300" style={{backgroundSize: '200% auto', animation: 'shine 5s linear infinite'}}>interfaces</span> for <br className="hidden md:block"/>
                the future.
            </h1>
<style>
                @keyframes shine {
                    to {
                        background-position: 200% center;
                    }
                }
            </style>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
                I translate complex systemic problems into elegant, functional, and visually compelling digital experiences. Specialized in SaaS and platform design.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-5 py-2.5 rounded-lg bg-white text-slate-950 font-medium text-sm hover:bg-slate-200 transition-colors flex items-center gap-2" href="#case-studies">
                    View Case Studies
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm" href="#about">
                    Read More
                </a>
</div>
</section>

<section className="py-24 border-t border-white/5" id="case-studies">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">Selected Work</h2>
<p className="text-sm text-slate-400 font-light max-w-md">A deep dive into my recent projects, focusing on problem-solving, user research, and interface execution.</p>
</div>
<a className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-indigo-200 transition-colors font-medium" href="#">
                    View archive 
                    <iconify-icon icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<a className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-2 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300" href="#">
<div className="aspect-[4/3] rounded-xl bg-slate-900 mb-6 overflow-hidden relative border border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-950/80 group-hover:opacity-80 transition-opacity duration-500"></div>

<div className="w-3/4 h-3/4 bg-[#0a0f25] rounded-lg border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10 transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500">

<div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="h-1.5 w-16 bg-white/5 rounded-full"></div>
</div>

<div className="flex-1 p-4 flex gap-4">

<div className="w-1/4 h-full border-r border-white/5 flex flex-col gap-2 pr-4">
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
<div className="h-2 w-4/5 bg-white/5 rounded-full mt-4"></div>
</div>

<div className="flex-1 flex flex-col gap-4 pt-1">
<div className="h-3 w-1/3 bg-indigo-500/20 rounded-full"></div>

<div className="flex-1 border border-indigo-500/10 rounded bg-gradient-to-b from-indigo-500/5 to-transparent relative overflow-hidden">
<svg className="absolute bottom-0 w-full h-2/3" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L0 60 Q 25 40, 50 60 T 100 30 L 100 100 Z" fill="rgba(99, 102, 241, 0.1)"></path>
<path d="M0 60 Q 25 40, 50 60 T 100 30" fill="none" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-indigo-300 transition-colors">Nexus Analytics</h3>
<iconify-icon className="text-slate-500 group-hover:text-indigo-300 transition-colors" icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-400 mb-5 font-light line-clamp-2">Redesigning the core data visualization experience for a leading enterprise data platform, resulting in a 40% increase in user engagement.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 text-xs font-light">Web App</span>
<span className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 text-xs font-light">Design Systems</span>
<span className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 text-xs font-light">2023</span>
</div>
</div>
</a>

<a className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-2 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 md:mt-16" href="#">
<div className="aspect-[4/3] rounded-xl bg-slate-900 mb-6 overflow-hidden relative border border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-slate-950/80 group-hover:opacity-80 transition-opacity duration-500"></div>

<div className="flex gap-4 relative z-10 transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500">

<div className="w-32 h-56 bg-[#0a0f25] rounded-2xl border border-white/10 shadow-2xl flex flex-col p-3 mt-8">
<div className="w-1/2 h-1.5 bg-white/10 rounded-full mx-auto mb-4"></div>
<div className="w-full h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-3 flex items-center px-3">
<div className="w-6 h-6 rounded-full bg-purple-500/20"></div>
<div className="ml-2 flex-1 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-2 flex flex-col gap-2">
<div className="w-full h-1.5 bg-white/10 rounded-full"></div>
<div className="w-3/4 h-1.5 bg-white/5 rounded-full"></div>
</div>
</div>

<div className="w-32 h-56 bg-[#0a0f25] rounded-2xl border border-white/10 shadow-2xl flex flex-col p-3 -mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-1/2 h-1.5 bg-white/10 rounded-full mx-auto mb-4"></div>
<div className="grid grid-cols-2 gap-2 mb-3">
<div className="h-10 rounded-lg bg-white/5 border border-white/5"></div>
<div className="h-10 rounded-lg bg-white/5 border border-white/5"></div>
</div>
<div className="flex-1 rounded-xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/10 p-2 relative overflow-hidden">
<div className="absolute bottom-2 left-2 w-16 h-16 rounded-full border border-purple-500/30"></div>
<div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-purple-500/20"></div>
</div>
</div>
</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors">Aura Finance</h3>
<iconify-icon className="text-slate-500 group-hover:text-purple-300 transition-colors" icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-400 mb-5 font-light line-clamp-2">A conceptual mobile banking application focused on mindful spending and intuitive wealth management.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 text-xs font-light">iOS App</span>
<span className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 text-xs font-light">Prototyping</span>
<span className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 text-xs font-light">2023</span>
</div>
</div>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020617]/80 backdrop-blur-md relative z-10 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-sm text-slate-400 font-light">
<iconify-icon icon="solar:copyright-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>2024 Designer. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:map-arrow-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="Dribbble" className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
