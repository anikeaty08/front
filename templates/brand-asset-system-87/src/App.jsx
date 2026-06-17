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
colors: {
brand: {
DEFAULT: '#2563eb', // Updated to match the blue star
dark: '#1d4ed8'
},
accent: {
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
},
primary: {
900: '#020617', // Deeper neutral
800: '#0f172a', // Light mode text primary
},
dark: {
bg: '#0B1120',
card: '#151e32',
border: '#1e293b',
text: '#f8fafc',
muted: '#94a3b8'
},
light: {
bg: '#ffffff',
bgalt: '#f8fafc',
card: '#ffffff',
border: '#e2e8f0',
text: '#64748b'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
fontSize: {
'2xs': '0.625rem',
}
}
}
}



        lucide.createIcons();

        // Download functionality
        const downloadBtn = document.getElementById('downloadBtn');
        const toast = document.getElementById('toast');
        let toastTimeout;

        downloadBtn.addEventListener('click', () => {
            // Show toast
            toast.classList.remove('translate-y-24', 'opacity-0');
            
            // Icon change to checkmark logic could go here
            
            // Clear existing timeout if multiple clicks
            if (toastTimeout) clearTimeout(toastTimeout);

            // Hide after 3 seconds
            toastTimeout = setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3500);
            
            // Simulate download action
            console.log('Initiating download...');
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
      

<header className="fixed top-0 w-full backdrop-blur-md border-b border-light-border z-50 bg-white/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<svg className="text-accent-600" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="font-display font-semibold text-lg tracking-tight text-primary-900">
                    SMS<span className="text-accent-600">Yard</span>
</span>
<span className="ml-3 px-2 py-0.5 rounded-md border text-slate-500 text-[10px] font-semibold uppercase tracking-wide bg-slate-100 border-slate-200">v2.0 System</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-light-text">
<a className="transition-colors hover:text-primary-900" href="#logo">Logo</a>
<a className="transition-colors hover:text-primary-900" href="#typography">Typography</a>
<a className="transition-colors hover:text-primary-900" href="#colors">Colors</a>
<a className="transition-colors hover:text-primary-900" href="#icons">Icons</a>
</nav>
<button className="px-4 py-2 rounded-lg text-xs font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0 active:shadow-sm bg-primary-900 text-white hover:bg-slate-800" id="downloadBtn">
                Download Assets
            </button>
</div>
</header>
<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 space-y-24">

<section className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-blue-50 border-blue-100 text-accent-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600"></span>
</span>
                New Brand Identity
            </div>
<h1 className="font-display font-semibold text-5xl tracking-tight mb-6 text-primary-900">Brand Asset System</h1>
<p className="text-xl text-light-text leading-relaxed font-normal">
                Visual identity guidelines for <strong className="font-medium text-primary-900">SMSYard</strong> — the enterprise messaging infrastructure. 
                Our brand reflects precision, connectivity, and speed.
            </p>
</section>

<section className="space-y-8" id="logo">
<div className="flex items-end justify-between border-b border-light-border pb-4">
<h2 className="font-display font-semibold text-2xl tracking-tight text-primary-900">Logo System</h2>
<span className="text-xs font-mono text-light-text">assets/brand/core/*</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="border border-light-border rounded-xl p-12 flex flex-col justify-between h-80 relative overflow-hidden group hover:shadow-md transition-shadow bg-white">
<div className="absolute inset-0 grid-bg opacity-40"></div>
<span className="absolute top-5 left-5 text-[10px] font-mono uppercase tracking-widest border px-2 py-1 rounded text-slate-400 border-slate-200 bg-white/50">Light Variant</span>
<div className="flex-1 flex items-center justify-center relative z-10">
<div className="flex items-center gap-4 scale-125 transform group-hover:scale-130 transition-transform duration-500">
<svg className="text-accent-600" fill="none" height="32" viewbox="0 0 24 24" width="32">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1"></path>
</svg>
<span className="text-primary-900 text-3xl font-bold tracking-tight font-display">
                                SMS<span className="text-accent-600">Yard</span>
</span>
</div>
</div>
<div className="flex justify-between items-center text-xs text-light-text border-t border-light-border pt-5 mt-4 relative z-10">
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-black"></div>
<span>Black</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-accent-600"></div>
<span className="">Blue 600</span>
</div>
</div>
<span className="font-mono text-[10px] text-slate-400">logo-light.svg</span>
</div>
</div>

<div className="bg-dark-bg border border-dark-border rounded-xl p-12 flex flex-col justify-between h-80 relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute inset-0 grid-bg-dark opacity-30"></div>
<span className="absolute top-5 left-5 text-[10px] font-mono uppercase tracking-widest border border-dark-border px-2 py-1 rounded bg-dark-card/50 text-slate-600">Dark Variant</span>
<div className="flex-1 flex items-center justify-center relative z-10">
<div className="flex items-center gap-4 scale-125 transform group-hover:scale-130 transition-transform duration-500">
<svg className="text-white" fill="none" height="32" viewbox="0 0 24 24" width="32">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1"></path>
</svg>
<span className="font-display font-bold text-3xl tracking-tight text-white">
                                SMS<span className="text-accent-600">Yard</span>
</span>
</div>
</div>
<div className="flex justify-between items-center text-xs text-dark-muted border-t border-dark-border pt-5 mt-4 relative z-10">
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<span>White</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-accent-600"></div>
<span>Blue 600</span>
</div>
</div>
<span className="font-mono text-[10px] text-slate-600">logo-dark.svg</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-1 border border-light-border rounded-xl p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden bg-white">
<span className="text-[10px] font-mono absolute top-4 left-4 uppercase tracking-widest text-slate-400">Mark Only</span>
<div className="relative group cursor-crosshair">

<div className="absolute inset-0 border border-accent-500/0 group-hover:border-accent-500/30 transition-all rounded-full scale-150"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-accent-500/0 group-hover:bg-accent-500/30 transition-all"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-accent-500/0 group-hover:bg-accent-500/30 transition-all"></div>
<svg className="drop-shadow-xl shadow-accent-500/20 text-accent-600" fill="none" height="80" viewbox="0 0 24 24" width="80">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" stroke="none"></path>
</svg>
</div>
<p className="text-xs text-light-text text-center px-4 leading-relaxed">The "Spark" represents instant delivery and a central hub.</p>
</div>
<div className="md:col-span-2 border border-light-border rounded-xl p-8 flex flex-col justify-center relative overflow-hidden bg-white">
<div className="absolute inset-0 grid-bg opacity-20"></div>
<span className="text-[10px] font-mono absolute top-4 left-4 uppercase tracking-widest text-slate-400">Safety Margin</span>
<div className="flex items-center justify-center h-full relative z-10">

<div className="absolute border border-dashed border-accent-500/30 bg-accent-500/5 -inset-8 rounded-lg flex items-start justify-start">
<span className="text-[10px] font-mono p-1 text-accent-600">x</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-accent-600" fill="none" height="32" viewbox="0 0 24 24" width="32">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"></path>
</svg>
<span className="font-display font-bold text-3xl tracking-tight text-primary-900">
                                SMS<span className="text-accent-600">Yard</span>
</span>
</div>
</div>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400">x = Height of Mark</div>
</div>
</div>
</section>

<section className="space-y-8" id="typography">
<div className="flex items-end justify-between border-b border-light-border pb-4">
<h2 className="font-display font-semibold text-2xl tracking-tight text-primary-900">Typography</h2>
<span className="text-xs font-mono text-light-text">Config</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 border border-light-border rounded-lg flex items-center justify-center text-xl font-display font-bold shadow-sm bg-white text-primary-900">Aa</div>
<div className="">
<h3 className="font-display font-semibold text-lg text-primary-900">Manrope</h3>
<p className="text-sm text-light-text">Headlines, Branding</p>
</div>
</div>
<div className="space-y-6 border-l border-light-border pl-6">
<div className="space-y-1">
<p className="text-[10px] font-mono mb-1 uppercase tracking-wider text-slate-400">Display / Semibold</p>
<p className="font-display font-semibold text-4xl tracking-tight text-primary-900">Enterprise Messaging</p>
</div>
<div className="space-y-1">
<p className="text-[10px] font-mono mb-1 uppercase tracking-wider text-slate-400">Heading / Medium</p>
<p className="font-display font-medium text-2xl tracking-tight text-primary-900">Reliable delivery at scale.</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 border border-light-border rounded-lg flex items-center justify-center text-xl font-sans font-medium shadow-sm bg-white text-primary-900">Aa</div>
<div>
<h3 className="font-sans font-medium text-lg text-primary-900">Inter</h3>
<p className="text-sm text-light-text">Interface, Body, Data</p>
</div>
</div>
<div className="space-y-6 border-l border-light-border pl-6">
<div className="space-y-1">
<p className="text-[10px] font-mono mb-1 uppercase tracking-wider text-slate-400">Body / Regular</p>
<p className="font-sans text-base text-light-text leading-relaxed">
                                Engineered for high-throughput SMS campaigns. We provide direct carrier connections and real-time analytics for your messaging stack.
                            </p>
</div>
<div className="space-y-1">
<p className="text-[10px] font-mono mb-1 uppercase tracking-wider text-slate-400">Tabular / Mono-style</p>
<div className="flex gap-2">
<span className="border border-light-border w-9 h-10 rounded shadow-sm flex items-center justify-center font-sans font-medium text-base bg-white text-primary-900">1</span>
<span className="border border-light-border w-9 h-10 rounded shadow-sm flex items-center justify-center font-sans font-medium text-base bg-white text-primary-900">5</span>
<span className="border border-light-border w-9 h-10 rounded shadow-sm flex items-center justify-center font-sans font-medium text-base bg-white text-primary-900">9</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="colors">
<div className="flex items-end justify-between border-b border-light-border pb-4">
<h2 className="font-display font-semibold text-2xl tracking-tight text-primary-900">Color Palette</h2>
<span className="text-xs font-mono text-light-text">Tailwind Palette</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="space-y-2 group">
<div className="h-20 rounded-lg shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform bg-accent-600 ring-black/5"></div>
<div className="">
<p className="text-sm font-semibold text-primary-900">Blue 600</p>
<p className="text-[10px] font-mono text-light-text">#2563EB (Brand)</p>
</div>
</div>

<div className="space-y-2 group">
<div className="h-20 rounded-lg shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform bg-accent-700 ring-black/5"></div>
<div className="">
<p className="text-sm font-semibold text-primary-900">Blue 700</p>
<p className="text-[10px] font-mono text-light-text">#1D4ED8</p>
</div>
</div>

<div className="space-y-2 group">
<div className="h-20 rounded-lg bg-accent-500 shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform ring-black/5"></div>
<div>
<p className="text-sm font-semibold text-primary-900">Blue 500</p>
<p className="text-[10px] font-mono text-light-text">#3B82F6</p>
</div>
</div>

<div className="space-y-2 group">
<div className="h-20 rounded-lg shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform bg-primary-900 ring-white/10"></div>
<div className="">
<p className="text-sm font-semibold text-primary-900">Slate 950</p>
<p className="text-[10px] font-mono text-light-text">#020617</p>
</div>
</div>

<div className="space-y-2 group">
<div className="h-20 rounded-lg shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform bg-white ring-slate-200"></div>
<div>
<p className="text-sm font-semibold text-primary-900">White</p>
<p className="text-[10px] font-mono text-light-text">#FFFFFF</p>
</div>
</div>

<div className="space-y-2 group">
<div className="h-20 rounded-lg shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform bg-slate-50 ring-slate-200"></div>
<div>
<p className="text-sm font-semibold text-primary-900">Slate 50</p>
<p className="text-[10px] font-mono text-light-text">#F8FAFC</p>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="icons">
<div className="flex items-end justify-between border-b border-light-border pb-4">
<h2 className="font-display font-semibold text-2xl tracking-tight text-primary-900">Iconography</h2>
<span className="text-xs font-mono text-light-text">Lucide (1.5px)</span>
</div>
<p className="text-sm text-light-text max-w-2xl">
                Icons should use a 1.5px stroke width for consistency. Active states use brand color.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="flex flex-col gap-3 border-light-border hover:border-accent-500 hover:shadow-sm transition-all group cursor-default border rounded-xl pt-6 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 items-center justify-center bg-white">
<svg className="lucide lucide-message-square w-6 h-6 group-hover:text-accent-600 transition-colors text-slate-700" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-[10px] font-mono text-light-text">message</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 border border-light-border rounded-xl hover:border-accent-500 hover:shadow-sm transition-all group cursor-default bg-white">
<svg className="lucide lucide-signal w-6 h-6 group-hover:text-accent-600 transition-colors text-slate-700" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<span className="text-[10px] font-mono text-light-text">signal</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 border border-light-border rounded-xl hover:border-accent-500 hover:shadow-sm transition-all group cursor-default bg-white">
<svg className="lucide lucide-activity w-6 h-6 group-hover:text-accent-600 transition-colors text-slate-700" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-[10px] font-mono text-light-text">activity</span>
</div>
<div className="flex flex-col gap-3 border-light-border hover:border-accent-500 hover:shadow-sm transition-all group cursor-default border rounded-xl pt-6 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 items-center justify-center bg-white">
<svg className="lucide lucide-lock w-6 h-6 group-hover:text-accent-600 transition-colors text-slate-700" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-[10px] font-mono text-light-text">secure</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 border border-light-border rounded-xl hover:border-accent-500 hover:shadow-sm transition-all group cursor-default bg-white">
<svg className="lucide lucide-users w-6 h-6 group-hover:text-accent-600 transition-colors text-slate-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-mono text-light-text">audience</span>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 border border-light-border rounded-xl hover:border-accent-500 hover:shadow-sm transition-all group cursor-default bg-white">
<svg className="lucide lucide-zap w-6 h-6 group-hover:text-accent-600 transition-colors text-slate-700" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-[10px] font-mono text-light-text">instant</span>
</div>
</div>
</section>

<section className="space-y-8" id="favicons">
<div className="flex items-end justify-between border-b border-light-border pb-4">
<h2 className="font-display font-semibold text-2xl tracking-tight text-primary-900">Favicons &amp; Assets</h2>
<span className="text-xs font-mono text-light-text">Webclip &amp; Favicon</span>
</div>
<div className="border border-light-border rounded-xl p-10 bg-white">
<div className="flex flex-wrap gap-x-16 gap-y-16 items-end">

<div className="flex flex-col items-center gap-4">
<div className="w-32 h-32 rounded-[2rem] shadow-xl shadow-blue-500/20 flex items-center justify-center relative group bg-accent-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity bg-white/10"></div>
<svg className="text-white" fill="none" height="64" viewbox="0 0 24 24" width="64">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"></path>
</svg>
</div>
<div className="text-center">
<p className="text-xs font-semibold text-primary-900">App Icon</p>
<span className="text-[10px] font-mono text-light-text">192x192</span>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-xl border border-light-border flex items-center justify-center shadow-sm bg-white">
<svg className="text-accent-600" fill="none" height="32" viewbox="0 0 24 24" width="32">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"></path>
</svg>
</div>
<div className="text-center">
<p className="text-xs font-semibold text-primary-900">Favicon</p>
<span className="text-[10px] font-mono text-light-text">32x32</span>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-lg border border-light-border flex items-center justify-center shadow-sm bg-white">
<svg className="text-accent-600" fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"></path>
</svg>
</div>
<div className="text-center">
<p className="text-xs font-semibold text-primary-900">Small</p>
<span className="text-[10px] font-mono text-light-text">16x16</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-light-border mt-12 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg className="text-accent-600" fill="none" height="16" viewbox="0 0 24 24" width="16">
<path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"></path>
</svg>
<span className="font-display font-bold text-primary-900">SMSYard</span>
<span className="text-light-text text-sm">© 2024</span>
</div>
<div className="flex gap-6 text-sm text-light-text">
<a className="transition-colors hover:text-primary-900" href="#">Internal Wiki</a>
<a className="transition-colors hover:text-primary-900" href="#">Figma UI Kit</a>
<span className="opacity-50">Confidential</span>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 pl-3 pr-4 py-3 rounded-lg shadow-xl text-sm font-medium transform transition-all duration-500 translate-y-24 opacity-0 flex items-center gap-3 z-50 bg-primary-900 text-white shadow-slate-900/10" id="toast">
<div className="p-1 rounded-full bg-white/10">
<svg className="lucide lucide-download w-3.5 h-3.5 text-white" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<div>
<p className="font-semibold text-white">Downloading Assets</p>
<p className="text-xs text-slate-400">smsyard-brand-kit-v2.zip</p>
</div>
</div>


    </>
  );
}
