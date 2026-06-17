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
serif: ['Playfair Display', 'serif'],
mono: ['Space Grotesk', 'monospace'],
},
animation: {
'spin-slow': 'spin 20s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'grid-flow': 'gridFlow 20s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
gridFlow: {
'0%': { backgroundPosition: '0% 0%' },
'100%': { backgroundPosition: '0% 100%' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Spotlight Effect Script
        const cards = document.querySelectorAll('.spotlight-card');
        
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
        });

        // 3D Card Tilt Effect for Hero
        const cardWrapper = document.querySelector('.card-3d-wrapper');
        const card3d = document.querySelector('.card-3d'); // Make sure to add this class to the hero card if implementing tilt

        if(cardWrapper) {
            cardWrapper.addEventListener('mousemove', (e) => {
                const rect = cardWrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg
                const rotateY = ((x - centerX) / centerX) * 5;

                // Targeting specific floating elements for parallax
                const floater1 = document.querySelector('.animate-float');
                const floater2 = document.querySelector('.animate-float-delayed');
                
                if(floater1) floater1.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
                if(floater2) floater2.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            cardWrapper.addEventListener('mouseleave', () => {
                 const floater1 = document.querySelector('.animate-float');
                 if(floater1) floater1.style.transform = '';
            });
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
      
<div className="grain"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
<div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center justify-between transition-all hover:scale-[1.01] duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-full group-hover:rotate-180 transition-transform duration-700 ease-in-out">
<span className="iconify" data-icon="lucide:aperture" data-width="18"></span>
</div>
<span className="text-sm font-bold tracking-tight uppercase text-slate-900">Legacy<span className="text-rose-600">.</span></span>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" href="#methodology">Method</a>
<a className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" href="#curriculum">System</a>
<a className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" href="#council">Council</a>
</div>

<a className="group relative overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 transition-all hover:bg-slate-800" href="#apply">
<span className="relative z-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white">
                    Access Network
                    <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</a>
</div>
</nav>

<section className="relative min-h-[100vh] pt-32 lg:pt-0 flex items-center justify-center overflow-hidden bg-[#FDFDFD]">

<div className="perspective-grid"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-rose-100/40 via-blue-50/40 to-slate-100/40 rounded-full blur-[100px] animate-pulse-slow"></div>
<div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="text-center lg:text-left pt-12 lg:pt-0">
<div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm mb-8 animate-float-delayed backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">System V.4.0 Live</span>
</div>
<h1 className="text-5xl lg:text-8xl font-semibold leading-[0.9] text-slate-900 kerning-tighter mb-8 text-balance">
                    Standardize <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Excellence.</span>
</h1>
<p className="text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed mb-10 text-balance font-medium">
                    The operational playbook for the modern aristocrat. We audit, restructure, and scale executive performance with forensic precision.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="group h-14 px-8 bg-slate-900 text-white rounded-full flex items-center gap-3 hover:bg-rose-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-rose-600/20 hover:-translate-y-1">
<span className="text-sm font-semibold uppercase tracking-wide">Initiate Protocol</span>
<div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-rose-600 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
</div>
</button>
<button className="group h-14 px-8 bg-white border border-slate-200 text-slate-600 rounded-full flex items-center gap-3 hover:border-slate-400 transition-all duration-300 hover:-translate-y-1">
<span className="iconify" data-icon="lucide:play-circle" data-width="20"></span>
<span className="text-sm font-semibold uppercase tracking-wide">Watch Briefing</span>
</button>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:flex items-center justify-center card-3d-wrapper">

<div className="relative w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 animate-float z-20 overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>

<div className="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<span className="iconify text-slate-900" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Metric</div>
<div className="text-sm font-semibold text-slate-900">Efficiency Score</div>
</div>
</div>
<div className="text-2xl font-mono font-bold text-slate-900">98.4<span className="text-sm text-slate-400">%</span></div>
</div>

<div className="flex items-end gap-2 h-40 mb-6">
<div className="w-full bg-slate-50 rounded-sm relative overflow-hidden group-hover:bg-slate-100 transition-colors">
<div className="absolute bottom-0 w-full bg-slate-900 transition-all duration-1000 ease-out h-[40%] group-hover:h-[55%]"></div>
</div>
<div className="w-full bg-slate-50 rounded-sm relative overflow-hidden group-hover:bg-slate-100 transition-colors">
<div className="absolute bottom-0 w-full bg-slate-900 transition-all duration-1000 ease-out delay-75 h-[60%] group-hover:h-[72%]"></div>
</div>
<div className="w-full bg-slate-50 rounded-sm relative overflow-hidden group-hover:bg-slate-100 transition-colors">
<div className="absolute bottom-0 w-full bg-rose-500 transition-all duration-1000 ease-out delay-150 h-[85%] group-hover:h-[94%] shadow-[0_0_20px_rgba(225,29,72,0.4)]"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-slate-50 rounded-lg">
<div className="text-[10px] uppercase text-slate-400 font-bold mb-1">Velocity</div>
<div className="text-sm font-mono font-bold text-slate-900">+240 bps</div>
</div>
<div className="p-3 bg-slate-50 rounded-lg">
<div className="text-[10px] uppercase text-slate-400 font-bold mb-1">Status</div>
<div className="flex items-center gap-1 text-sm font-bold text-green-600">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Optimal
                            </div>
</div>
</div>
</div>

<div className="absolute top-20 right-10 w-64 p-4 bg-white/80 backdrop-blur-md border border-white/50 shadow-xl rounded-xl animate-float-delayed z-10 transform rotate-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<div className="text-xs font-bold text-slate-900">Audit Complete</div>
<div className="text-[10px] text-slate-500">Authorized by Board</div>
</div>
</div>
</div>
<div className="absolute bottom-32 -left-12 w-56 p-4 bg-slate-900 text-white shadow-2xl rounded-xl animate-float z-30 transform -rotate-3 border border-slate-700">
<div className="flex justify-between items-start mb-2">
<span className="iconify text-rose-500" data-icon="lucide:trending-up" data-width="20"></span>
<span className="text-[10px] font-mono text-slate-400">Q4 PROJ</span>
</div>
<div className="text-2xl font-bold tracking-tight">$4.2M</div>
<div className="text-[10px] text-slate-400 mt-1">Revenue Surplus Detected</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#FDFDFD] to-transparent z-10"></div>
</section>

<section className="py-10 border-y border-slate-100 bg-white/50 backdrop-blur-sm overflow-hidden">
<div className="flex w-full whitespace-nowrap">
<div className="animate-[gridFlow_30s_linear_infinite] flex items-center gap-16 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter">LINEAR</span>
<span className="text-xl font-bold tracking-tighter">STRIPE</span>
<span className="text-xl font-bold tracking-tighter">VERCEL</span>
<span className="text-xl font-bold tracking-tighter">ACME CORP</span>
<span className="text-xl font-bold tracking-tighter">RAYCAST</span>
<span className="text-xl font-bold tracking-tighter">OPENAI</span>
<span className="text-xl font-bold tracking-tighter">LINEAR</span>
<span className="text-xl font-bold tracking-tighter">STRIPE</span>
<span className="text-xl font-bold tracking-tighter">VERCEL</span>
<span className="text-xl font-bold tracking-tighter">ACME CORP</span>
<span className="text-xl font-bold tracking-tighter">RAYCAST</span>
<span className="text-xl font-bold tracking-tighter">OPENAI</span>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#FDFDFD]" id="methodology">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 kerning-tighter mb-6">Engineered for Scale.</h2>
<p className="text-lg text-slate-600 font-light leading-relaxed">We replace founder intuition with robust infrastructure. Our methodology is a closed-loop system designed to remove you from the critical path.</p>
</div>
<div className="hidden md:block">
<div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center animate-spin-slow">
<span className="iconify text-slate-400" data-icon="lucide:asterisk" data-width="32"></span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[340px]" id="bento-grid">

<div className="spotlight-card md:col-span-2 group rounded-3xl border border-slate-200 p-1">
<div className="h-full w-full bg-slate-50/50 rounded-[20px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden transition-all hover:bg-white">
<div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-slate-200/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center border border-slate-100 z-10 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-900" data-icon="lucide:workflow" data-width="28"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-slate-900 mb-3">Operational Systemization</h3>
<p className="text-slate-500 max-w-md">Documenting tribal knowledge into executable SOPs. We transition your organization from "people-dependent" to "process-dependent."</p>
</div>
</div>
</div>

<div className="spotlight-card md:col-span-1 group rounded-3xl border border-slate-200 p-1">
<div className="h-full w-full bg-slate-50/50 rounded-[20px] p-8 flex flex-col justify-between transition-all hover:bg-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center border border-slate-100 z-10 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-900" data-icon="lucide:users" data-width="28"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-slate-900 mb-3">The Network</h3>
<p className="text-slate-500 text-sm">Access to 500+ titans of industry in a closed environment.</p>
</div>
</div>
</div>

<div className="spotlight-card md:col-span-1 group rounded-3xl border border-slate-200 p-1">
<div className="h-full w-full bg-slate-900 rounded-[20px] p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-white/5 rotate-12 transform scale-150 transition-transform duration-700 group-hover:rotate-0">
<span className="iconify" data-icon="lucide:fingerprint" data-width="200"></span>
</div>
<div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 z-10">
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="28"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-3">Forensic Audit</h3>
<p className="text-slate-400 text-sm">Identifying bottlenecks invisible to the internal eye.</p>
</div>
</div>
</div>

<div className="spotlight-card md:col-span-2 group rounded-3xl border border-slate-200 p-1">
<div className="h-full w-full bg-slate-50/50 rounded-[20px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden transition-all hover:bg-white">

<div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-32 flex items-end gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-1/4 bg-slate-900 h-1/3 rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]"></div>
<div className="w-1/4 bg-slate-900 h-2/3 rounded-t-sm animate-[pulse_2s_ease-in-out_0.2s_infinite]"></div>
<div className="w-1/4 bg-slate-900 h-1/2 rounded-t-sm animate-[pulse_2s_ease-in-out_0.4s_infinite]"></div>
<div className="w-1/4 bg-rose-500 h-full rounded-t-sm animate-[pulse_2s_ease-in-out_0.6s_infinite]"></div>
</div>
<div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center border border-slate-100 z-10 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-900" data-icon="lucide:bar-chart-2" data-width="28"></span>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-slate-900 mb-3">Capital Velocity</h3>
<p className="text-slate-500 max-w-md">Optimizing cash flow cycles to fund growth without dilution. We treat capital allocation as an art form.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">

<div className="absolute left-[27px] lg:left-1/2 top-0 bottom-0 w-px bg-slate-100"></div>
<div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-24">
<span className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-4 block">The Process</span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 kerning-tighter">Linear Progression.</h2>
</div>
<div className="space-y-24">

<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="lg:text-right order-2 lg:order-1">
<h3 className="text-2xl font-medium text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">The Audit</h3>
<p className="text-slate-500 leading-relaxed">We dismantle your P&amp;L and Org Chart. We look for "fake work," margin leaks, and redundant roles. A painful but necessary extraction.</p>
</div>
<div className="absolute left-0 lg:left-1/2 -translate-x-[5px] lg:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-rose-600 group-hover:scale-125 transition-all duration-300 z-20"></div>
<div className="order-1 lg:order-2 pl-12 lg:pl-0">
<div className="text-7xl font-mono font-bold text-slate-100 group-hover:text-slate-900 transition-colors duration-500">01</div>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="lg:text-right order-2 lg:order-1 pl-12 lg:pl-0">
<div className="text-7xl font-mono font-bold text-slate-100 group-hover:text-slate-900 transition-colors duration-500">02</div>
</div>
<div className="absolute left-0 lg:left-1/2 -translate-x-[5px] lg:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-rose-600 group-hover:scale-125 transition-all duration-300 z-20"></div>
<div className="order-1 lg:order-2">
<h3 className="text-2xl font-medium text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">The Install</h3>
<p className="text-slate-500 leading-relaxed">Deployment of the "Ruler's OS". We insert interim COOs to enforce governance. Weekly sprints, monthly reviews, quarterly kills.</p>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="lg:text-right order-2 lg:order-1">
<h3 className="text-2xl font-medium text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">The Exit</h3>
<p className="text-slate-500 leading-relaxed">The machine runs without the operator. We prepare for the next S-Curve: Acquisition, IPO, or Generational Transfer.</p>
</div>
<div className="absolute left-0 lg:left-1/2 -translate-x-[5px] lg:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-rose-600 group-hover:scale-125 transition-all duration-300 z-20"></div>
<div className="order-1 lg:order-2 pl-12 lg:pl-0">
<div className="text-7xl font-mono font-bold text-slate-100 group-hover:text-slate-900 transition-colors duration-500">03</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#F8FAFC]" id="council">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 kerning-tighter">The Council Reports.</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden ring-2 ring-white ring-offset-2">
<img alt="CEO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">James Sterling</div>
<div className="text-xs text-slate-500 font-medium">CEO, Sterling Motors</div>
</div>
</div>
<p className="text-lg text-slate-600 font-serif italic leading-relaxed">"The audit revealed $4M in bleed. LEGACY didn't just advise; they performed surgery. We are leaner, faster, and finally scalable."</p>
<div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center">
<span className="text-xs font-bold text-green-600 uppercase">+210% Growth</span>
<span className="iconify text-slate-300" data-icon="lucide:quote" data-width="20"></span>
</div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden ring-2 ring-white ring-offset-2">
<img alt="CEO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Elena Vance</div>
<div className="text-xs text-slate-500 font-medium">Founder, Vance Capital</div>
</div>
</div>
<p className="text-lg text-slate-600 font-serif italic leading-relaxed">"I was a founder trapped in operations. Now, I am a chairman. The transition was brutal but necessary for our IPO."</p>
<div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center">
<span className="text-xs font-bold text-green-600 uppercase">IPO Successful</span>
<span className="iconify text-slate-300" data-icon="lucide:quote" data-width="20"></span>
</div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden ring-2 ring-white ring-offset-2">
<img alt="CEO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Marcus Thorn</div>
<div className="text-xs text-slate-500 font-medium">Director, Apex Logistics</div>
</div>
</div>
<p className="text-lg text-slate-600 font-serif italic leading-relaxed">"Swiss precision applied to human capital. The result is a culture that self-corrects without my input."</p>
<div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center">
<span className="text-xs font-bold text-green-600 uppercase">Automated</span>
<span className="iconify text-slate-300" data-icon="lucide:quote" data-width="20"></span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-24 pb-12 px-6 lg:px-12 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rose-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Ready to standardise?</h3>
<p className="text-slate-400 text-lg max-w-md mb-8">Join the ranks of the industrial elite. Applications for the Q4 Cohort are closing.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 bg-white text-slate-950 font-bold uppercase tracking-wide rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300">
                            Apply Now
                        </button>
<button className="h-12 px-8 border border-white/20 text-white font-bold uppercase tracking-wide rounded-full hover:bg-white/10 transition-colors duration-300">
                            Book Audit
                        </button>
</div>
</div>
<div className="grid grid-cols-2 gap-8 lg:pl-20">
<div>
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Sitemap</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Methodology</a></li>
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Fellows</a></li>
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Login</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Terms</a></li>
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Cookies</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="20"></span>
<span className="text-sm font-bold tracking-tight">LEGACY INC.</span>
</div>
<p className="text-xs text-slate-500">© 2024 Legacy Institute. NYC • LDN • ZRH</p>
</div>
</div>
</footer>


    </>
  );
}
