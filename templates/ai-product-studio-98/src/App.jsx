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
display: ['Inter', 'sans-serif'],
},
colors: {
frame: {
bg: '#FBFBF8',
border: '#EAEAEA',
dark: '#0B0B0C',
muted: '#6B6B6B',
accent: '#F05A28',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<header className="fixed w-full top-0 z-50 border-b border-frame-border bg-frame-bg/80 backdrop-blur-md">
<div className="flex h-16 max-w-[1600px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="w-32">
<a className="text-lg font-bold tracking-tighter uppercase" href="#">Frame</a>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-frame-muted hover:text-frame-dark transition-colors" href="#">Work</a>
<a className="text-sm font-medium text-frame-muted hover:text-frame-dark transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-frame-muted hover:text-frame-dark transition-colors" href="#">Studio</a>
<a className="text-sm font-medium text-frame-muted hover:text-frame-dark transition-colors" href="#">Insights</a>
</nav>
<div className="flex items-center gap-6 w-32 justify-end">
<a className="hidden md:block text-sm font-medium text-frame-dark" href="#">Contact</a>
<a className="bg-frame-accent hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2.5 transition-colors tracking-wide uppercase" href="#">
                    Start Project
                </a>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-frame-border">

<div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none">
<img alt="texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-0 right-0 w-1/2 h-full opacity-60 pointer-events-none z-0">
<div className="absolute inset-0 bg-gradient-to-l from-[#fff0eb] to-transparent"></div>
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-[120px] mix-blend-multiply opacity-40"></div>
<div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-200 rounded-full blur-[100px] mix-blend-multiply opacity-40"></div>
<svg className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full h-full opacity-40" viewbox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
<path d="M600,100 Q750,400 600,700 T600,100" fill="none" stroke="#F05A28" strokeWidth="2"></path>
<path d="M650,150 Q780,420 650,750 T650,150" fill="none" stroke="#F05A28" strokeWidth="1"></path>
<path d="M550,50 Q700,350 550,650 T550,50" fill="none" stroke="#F05A28" strokeWidth="0.5"></path>
</svg>
</div>
<div className="max-w-[1600px] mx-auto px-6 w-full pt-20 pb-16 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-24">
<div className="md:col-span-8">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-frame-dark mb-8">
                            DESIGNING INTELLIGENT<br/>
<span className="text-frame-muted/80">DIGITAL PRODUCTS</span>
</h1>
</div>
<div className="md:col-span-4 pb-2">
<p className="text-frame-muted text-lg leading-relaxed mb-8 max-w-md">
                            FRAME is a multidisciplinary design studio helping teams design, build, and scale AI-assisted products with clarity and intent.
                        </p>
<button className="group flex items-center gap-3 bg-frame-dark text-white px-6 py-3.5 text-sm font-medium hover:bg-gray-800 transition-all">
                            START A PROJECT
                            <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="w-full relative">
<div className="flex justify-center mb-6">
<span className="text-[10px] uppercase tracking-widest text-frame-muted font-medium bg-white/50 px-3 py-1 border border-frame-border rounded-full backdrop-blur-sm">
                            Powering Next-Generation Teams
                        </span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto opacity-90">
<div className="bg-white border border-frame-border p-6 flex flex-col justify-between h-48 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-5xl font-semibold tracking-tighter text-frame-dark mb-2">AaGg</h3>
<p className="text-xs text-frame-muted">System Interface Design</p>
</div>
<div className="absolute right-[-20px] bottom-[-20px] opacity-10">
<svg aria-hidden="true" className="iconify w-32 h-32 iconify--lucide" data-icon="lucide:type" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex flex-col gap-4 h-48">
<div className="bg-white border border-frame-border p-4 flex-1 hover:-translate-y-1 transition-transform duration-300 shadow-sm flex flex-col justify-center gap-2">
<div className="h-8 bg-frame-dark w-full rounded-sm flex items-center justify-center text-white text-[10px]">Primary</div>
<div className="flex gap-2">
<div className="h-8 border border-frame-border w-1/2 rounded-sm flex items-center justify-center text-frame-muted text-[10px]">Ghost</div>
<div className="h-8 bg-gray-100 w-1/2 rounded-sm flex items-center justify-center text-frame-dark text-[10px]">Secondary</div>
</div>
</div>
<div className="bg-white border border-frame-border p-3 flex-none hover:-translate-y-1 transition-transform duration-300 shadow-sm flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-frame-muted iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<div className="h-1.5 bg-gray-100 w-full rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-4 h-48">
<div className="bg-white border border-frame-border p-4 flex-1 hover:-translate-y-1 transition-transform duration-300 shadow-sm grid grid-cols-4 gap-2 content-center relative">
<img alt="palette" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 aspect-square bg-frame-dark rounded-sm"></div>
<div className="relative z-10 aspect-square bg-frame-accent rounded-sm"></div>
<div className="relative z-10 aspect-square bg-gray-400 rounded-sm"></div>
<div className="relative z-10 aspect-square bg-gray-200 rounded-sm"></div>
</div>
<div className="bg-white border border-frame-border p-4 flex-none hover:-translate-y-1 transition-transform duration-300 shadow-sm flex justify-between items-center text-frame-muted">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
</div>
<div className="bg-white border border-frame-border p-4 flex flex-col h-48 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="flex justify-between items-center mb-4 border-b border-frame-border pb-2">
<span className="text-[10px] font-mono text-frame-muted">Properties</span>
<svg aria-hidden="true" className="iconify text-frame-muted iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-2">
<div className="flex justify-between">
<div className="w-8 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-12 h-2 bg-gray-200 rounded-sm"></div>
</div>
<div className="flex justify-between">
<div className="w-10 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-8 h-2 bg-gray-200 rounded-sm"></div>
</div>
<div className="mt-4 p-2 bg-gray-50 border border-gray-100 rounded text-[9px] font-mono text-frame-muted">
                                    &lt;Component /&gt;
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-frame-border bg-white">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> tailwindcss</span>
<span className="text-lg font-bold flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:figma" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path></g></svg> Figma</span>
<span className="text-lg font-bold flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Linear</span>
<span className="text-lg font-bold flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:a-large-small" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 16l2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16m-6.303-2h5.606M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Adobe</span>
<span className="text-lg font-bold flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg> LinkedIn</span>
</div>
</div>
</section>

<section className="bg-frame-border">
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-[1px] gap-y-[1px]">

<div className="md:col-span-4 bg-black p-0 flex flex-col justify-between h-[400px] relative group overflow-hidden cursor-pointer">
<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">

<video autoplay="" className="w-full h-full object-cover opacity-80" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4" type="video/mp4"/>

<img alt="Abstract Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</video>
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/327cf9a7-4b33-4bf1-a03b-25db6eb2714f_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 flex justify-between items-start p-8">
</div>
<div className="relative z-10 self-center">
</div>
</div>

<div className="md:col-span-5 bg-frame-bg p-10 md:p-14 flex flex-col justify-center">
<span className="text-frame-accent text-xs font-mono mb-4">001 — STUDIO</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-8">
                        We are a multidisciplinary team bridging the gap between <span className="text-frame-muted">artificial intelligence</span> and <span className="text-frame-muted">human experience</span>. We design interfaces that make complex models accessible.
                    </h2>
<div className="flex items-center gap-4 border-t border-frame-border pt-6">
<div className="w-1 h-8 bg-frame-accent"></div>
<div>
<span className="text-xs uppercase tracking-widest text-frame-muted block mb-1">Philosophy</span>
<span className="text-sm font-medium flex items-center gap-1">Human-in-the-loop <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>
</div>
</div>

<div className="md:col-span-3 grid grid-rows-2 gap-[1px]">

<div className="bg-frame-bg p-8 flex flex-col justify-center relative overflow-hidden">
<img alt="tech bg" className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-6 block">AI Focused</span>
<div className="space-y-6">
<div>
<div className="text-4xl md:text-5xl font-bold tracking-tighter text-frame-dark">150+</div>
<div className="text-xs text-frame-muted mt-1">Products Shipped</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-bold tracking-tighter text-frame-dark">20+</div>
<div className="text-xs text-frame-muted mt-1">Awards Earned</div>
</div>
</div>
</div>
</div>

<div className="bg-frame-bg p-8 flex flex-col justify-center">
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-4">Leadership</span>
<div className="space-y-4">
<div className="flex items-center gap-3">
<img alt="Sarah Voss" className="w-8 h-8 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs font-semibold uppercase">Sarah Voss</div>
<div className="text-[10px] text-frame-muted">Architect</div>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="Maria Lee" className="w-8 h-8 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs font-semibold uppercase">Maria Lee</div>
<div className="text-[10px] text-frame-muted">Creative Director</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-frame-border">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 border-l border-r border-frame-border bg-frame-border gap-[1px]">

<div className="md:col-span-4 bg-frame-bg p-10 flex flex-col justify-between">
<span className="text-[10px] uppercase tracking-widest text-frame-muted">002 Why Choose Us?</span>
<div className="">
<h2 className="text-7xl font-bold tracking-tighter mb-4 text-frame-dark">WORK</h2>
<p className="text-frame-muted text-lg leading-relaxed">Where technical feasibility meets exceptional user experience.</p>
</div>
</div>

<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[1px]">

<div className="bg-frame-bg p-8 hover:bg-white transition-colors group">
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-4 block group-hover:text-frame-accent">Strategy</span>
<p className="text-sm text-frame-dark leading-relaxed">Identifying high-value use cases and roadmapping your AI product journey from zero to one.</p>
</div>

<div className="bg-frame-bg p-8 hover:bg-white transition-colors group">
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-4 block group-hover:text-frame-accent">Design</span>
<p className="text-sm text-frame-dark leading-relaxed">Crafting adaptive interfaces that evolve with user intent and context using generative UI patterns.</p>
</div>

<div className="bg-frame-bg p-8 hover:bg-white transition-colors group">
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-4 block group-hover:text-frame-accent">Engineering</span>
<p className="text-sm text-frame-dark leading-relaxed">Scalable frontend architectures for real-time generative experiences using React and Edge computing.</p>
</div>

<div className="bg-frame-bg p-8 hover:bg-white transition-colors group">
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-4 block group-hover:text-frame-accent">Scale</span>
<p className="text-sm text-frame-dark leading-relaxed">Optimizing models and interfaces for production-grade performance and accessibility compliance.</p>
</div>
</div>

<div className="md:col-span-12 bg-frame-bg grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-frame-border">
<div className="bg-frame-bg p-6 text-center">
<div className="text-3xl font-bold tracking-tight">4</div>
<div className="text-[10px] uppercase tracking-widest text-frame-muted mt-1">Years R&amp;D</div>
</div>
<div className="bg-frame-bg p-6 text-center">
<div className="text-3xl font-bold tracking-tight">4</div>
<div className="text-[10px] uppercase tracking-widest text-frame-muted mt-1">Week Sprints</div>
</div>
<div className="bg-frame-bg p-6 text-center">
<div className="text-3xl font-bold tracking-tight">3x</div>
<div className="text-[10px] uppercase tracking-widest text-frame-muted mt-1">Throughput</div>
</div>
<div className="bg-frame-bg p-6 text-center">
<div className="text-3xl font-bold tracking-tight">25+</div>
<div className="text-[10px] uppercase tracking-widest text-frame-muted mt-1">Partners</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-frame-bg border-b border-frame-border">
<div className="max-w-[1600px] mx-auto border-l border-r border-frame-border">
<div className="p-6 border-b border-frame-border">
<span className="text-[10px] uppercase tracking-widest text-frame-muted">003 Reviews</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-frame-border">

<div className="md:col-span-4 bg-frame-bg p-0 flex flex-col justify-between">
<div className="h-64 md:h-full bg-neutral-100 relative overflow-hidden group">

<img alt="Office Space" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
<button className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide flex items-center gap-2 hover:bg-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down-to-line" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V3m-6 8l6 6l6-6m1 10H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Case Study
                             </button>
</div>

<div className="grid grid-cols-2 border-t border-frame-border">
<div className="bg-frame-bg p-4 border-r border-frame-border">
<svg aria-hidden="true" className="iconify text-frame-accent mb-2 iconify--lucide" data-icon="lucide:quote" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-frame-muted">"Incredible velocity."</p>
</div>
<div className="bg-frame-bg p-4">
<svg aria-hidden="true" className="iconify text-frame-accent mb-2 iconify--lucide" data-icon="lucide:quote" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-frame-muted">"Pixel perfect."</p>
</div>
</div>
</div>

<div className="md:col-span-8 bg-frame-bg">
<div className="p-10 md:p-16 border-b border-frame-border">
<blockquote className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                                "Frame transformed our engineering culture. The design system they built didn’t just look good—it became the scalable engine for our entire product roadmap."
                            </blockquote>
<div className="mt-8 flex items-center gap-4">
<img alt="Elena Rodriguez" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold uppercase">Elena Rodriguez</div>
<div className="text-xs text-frame-muted">Product Lead, Nexus AI</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-frame-border h-full">
<div className="bg-frame-bg p-8 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
<span className="text-sm font-bold text-frame-dark mb-4 flex items-center gap-2">VIEW REPORT <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
<p className="text-xs text-frame-muted">Q3 Performance Analysis</p>
</div>
<div className="bg-frame-bg p-8 flex flex-col justify-center text-center">
<span className="text-3xl font-bold tracking-tighter text-frame-dark">98%</span>
<span className="text-[10px] uppercase tracking-widest text-frame-muted mt-1">Retention Rate</span>
</div>
<div className="bg-frame-bg p-8 flex flex-col justify-center text-center">
<span className="text-3xl font-bold tracking-tighter text-frame-dark">85+</span>
<span className="text-[10px] uppercase tracking-widest text-frame-muted mt-1">NPS Score</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-[1600px] mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-[10px] uppercase tracking-widest text-frame-muted mb-2 block">004 Models</span>
<h2 className="text-4xl font-bold tracking-tighter text-frame-dark">Engagement Models</h2>
</div>

<div className="bg-gray-100 p-1 rounded-lg inline-flex">
<button className="bg-white shadow-sm text-xs font-semibold px-4 py-2 rounded-md text-frame-dark">MONTHLY</button>
<button className="text-xs font-medium px-4 py-2 rounded-md text-frame-muted hover:text-frame-dark">ANNUAL</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-4 bg-white border border-frame-border p-8 rounded-none hover:border-gray-300 transition-colors">
<h3 className="text-xl font-bold mb-2">Fixed</h3>
<p className="text-sm text-frame-muted mb-6 h-10">Perfect for MVPs, proof of concepts, and specific feature sprints.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Patient health dashboard
                            </li>
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Appointment tracking
                            </li>
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Recent activity updates
                            </li>
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Up to 500 patients
                            </li>
</ul>
<button className="w-full border border-frame-border py-3 text-sm font-semibold hover:bg-gray-50 transition-colors">GET STARTED</button>
<p className="text-center text-[10px] text-frame-muted mt-3">30-DAY GUARANTEE</p>
</div>

<div className="lg:col-span-4 bg-white border border-frame-accent/30 shadow-lg shadow-orange-500/5 p-8 relative">
<div className="absolute top-0 right-0 bg-frame-accent text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Popular Choice</div>
<h3 className="text-xl font-bold mb-2">Custom</h3>
<p className="text-sm text-frame-muted mb-6 h-10">For scaling teams requiring dedicated design system architecture.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-frame-accent rounded-full"></span> Everything in Starter
                            </li>
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-frame-accent rounded-full"></span> Rapid sprint cycles
                            </li>
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-frame-accent rounded-full"></span> Doctor-to-patient messaging
                            </li>
<li className="flex items-center gap-3 text-sm text-frame-dark">
<span className="w-1.5 h-1.5 bg-frame-accent rounded-full"></span> Up to 2,000 patients
                            </li>
</ul>
<button className="w-full bg-frame-accent text-white py-3 text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm">CONTACT SALES</button>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-frame-bg border border-frame-border p-6 relative overflow-hidden">
<img alt="server" className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<h4 className="text-sm font-bold uppercase tracking-wide mb-2 relative z-10">Enterprise</h4>
<p className="text-xs text-frame-muted leading-relaxed relative z-10">Dedicated engineering team, SLA guarantees, and on-premise model deployment options.</p>
</div>
<div className="bg-frame-bg border border-frame-border p-6 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h4 className="text-sm font-bold uppercase tracking-wide">Support</h4>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border border-white object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img className="w-6 h-6 rounded-full border border-white object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-6 h-6 rounded-full bg-gray-200 border border-white text-[8px] flex items-center justify-center font-bold text-frame-dark">+3</div>
</div>
</div>
<p className="text-xs text-frame-muted leading-relaxed">24/7 Priority support channel and dedicated Slack workspace for direct team access.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<img alt="Abstract Background" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1620641788421-7f1c91ade630?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 opacity-90 mix-blend-multiply"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">Ready to build the future?</h2>
<p className="text-white/80 text-lg md:text-xl font-light mb-10">Join the innovative teams defining the next era of software with Frame.</p>
<button className="bg-frame-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors inline-flex items-center gap-2">
                    Start Your Project
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>
</main>

<footer className="bg-frame-bg border-t border-frame-border pt-20 pb-10">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-4">
<a className="text-lg font-bold tracking-tighter uppercase block mb-6" href="#">Frame</a>
<p className="text-sm text-frame-muted leading-relaxed max-w-xs mb-8">
                        Designing the interface layer for artificial intelligence. Based in San Francisco, working globally.
                    </p>
<div className="flex items-center border border-frame-border bg-white p-1 max-w-xs">
<input className="flex-1 bg-transparent border-none text-xs px-3 py-2 outline-none text-frame-dark placeholder:text-gray-400" placeholder="Email address" type="email"/>
<button className="bg-frame-accent hover:bg-orange-600 text-white p-2 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="md:col-span-2"></div>

<div className="md:col-span-2">
<h4 className="text-[10px] uppercase tracking-widest text-frame-muted mb-6">Navigation</h4>
<ul className="space-y-3">
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Solutions</a></li>
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Product</a></li>
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Features</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-[10px] uppercase tracking-widest text-frame-muted mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">About</a></li>
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-[10px] uppercase tracking-widest text-frame-muted mb-6">Social</h4>
<ul className="space-y-3">
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Twitter</a></li>
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-sm text-frame-dark hover:text-frame-accent transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>
<div className="border-t border-frame-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-frame-muted uppercase tracking-widest">© 2026 Frame Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-frame-muted hover:text-frame-dark uppercase tracking-widest" href="#">Privacy</a>
<a className="text-[10px] text-frame-muted hover:text-frame-dark uppercase tracking-widest" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
