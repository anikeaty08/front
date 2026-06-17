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
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg hover:opacity-80 transition-opacity" href="#">
                AT
            </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#stack">Stack</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-neutral-950 bg-white rounded-full hover:bg-neutral-200 transition-colors" href="mailto:hello@alexthorne.design">
                    Get in touch
                </a>
<button className="md:hidden text-white">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden subtle-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 rounded-[100%] blur-[100px] pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight leading-[1.1] mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.1s'}}>
                Crafting digital clarity <br className="hidden md:block"/> from complexity.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10 animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
                I am a Senior Product Designer focused on building design systems, intuitive interfaces, and refined user experiences for technical products.
            </p>
<div className="flex items-center justify-center gap-4 animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
<a className="group flex items-center gap-2 text-white border-b border-transparent hover:border-white transition-all pb-0.5" href="#work">
<span className="text-sm font-medium">Selected Work</span>
<i className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Selected Work</h2>
<span className="text-xs font-medium text-neutral-500">2021 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5 transition-all duration-500 group-hover:border-white/20">

<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">

<div className="w-3/4 h-3/4 bg-neutral-950 rounded-lg border border-white/10 p-4 shadow-2xl shadow-black/50 relative">

<div className="absolute left-4 top-4 bottom-4 w-12 border-r border-white/5 flex flex-col gap-3">
<div className="w-6 h-6 rounded bg-neutral-800"></div>
<div className="w-6 h-6 rounded-full bg-white/10 mt-4"></div>
<div className="w-6 h-6 rounded-full bg-white/5"></div>
<div className="w-6 h-6 rounded-full bg-white/5"></div>
</div>

<div className="ml-16 h-full flex flex-col gap-4">
<div className="flex justify-between items-center">
<div className="w-24 h-3 bg-white/10 rounded-full"></div>
<div className="w-8 h-8 rounded-full bg-white/5"></div>
</div>
<div className="grid grid-cols-2 gap-3 h-full">
<div className="bg-white/5 rounded border border-white/5"></div>
<div className="bg-white/5 rounded border border-white/5"></div>
<div className="col-span-2 h-24 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-10 flex items-end gap-1 px-2">
<div className="w-full bg-blue-500/30 h-4 rounded-t-sm"></div>
<div className="w-full bg-blue-500/50 h-8 rounded-t-sm"></div>
<div className="w-full bg-blue-500/20 h-6 rounded-t-sm"></div>
<div className="w-full bg-blue-500/60 h-10 rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:text-neutral-200 transition-colors">FinScale Dashboard</h3>
<p className="text-sm text-neutral-500">Financial Data Visualization</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400">Figma</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400">React</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5 transition-all duration-500 group-hover:border-white/20">

<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">

<div className="w-[180px] h-[300px] bg-neutral-950 rounded-[2rem] border-4 border-neutral-800 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-800 rounded-b-xl z-10"></div>
<div className="p-4 pt-8 flex flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 mb-2"></div>
<div className="w-24 h-3 bg-white/20 rounded-full"></div>
<div className="w-16 h-2 bg-white/10 rounded-full"></div>
<div className="mt-4 space-y-2">
<div className="h-12 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-3">
<div className="w-6 h-6 rounded-full bg-white/10"></div>
<div className="ml-2 w-20 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="h-12 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-3">
<div className="w-6 h-6 rounded-full bg-white/10"></div>
<div className="ml-2 w-16 h-2 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-[8px] text-white font-medium">Confirm</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:text-neutral-200 transition-colors">Verve Health</h3>
<p className="text-sm text-neutral-500">Wellness &amp; Habit Tracking iOS App</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400">iOS</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400">Prototyping</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5 transition-all duration-500 group-hover:border-white/20">

<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
<div className="w-3/4 h-2/3 flex gap-4">

<div className="w-full bg-neutral-950 rounded-lg border border-white/10 shadow-2xl flex flex-col overflow-hidden">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<i className="w-3 h-3 text-neutral-500" data-lucide="search"></i>
<div className="w-24 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="p-2 space-y-1">
<div className="h-8 w-full bg-white/5 rounded border border-white/5 flex items-center px-3 justify-between">
<span className="w-16 h-2 bg-white/20 rounded-full"></span>
<span className="w-4 h-4 bg-white/10 rounded text-[8px] flex items-center justify-center text-neutral-500">⌘K</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3">
<span className="w-20 h-2 bg-white/10 rounded-full"></span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3">
<span className="w-12 h-2 bg-white/10 rounded-full"></span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:text-neutral-200 transition-colors">Nexus OS</h3>
<p className="text-sm text-neutral-500">Design System for Enterprise Tools</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400">Design Systems</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-5 transition-all duration-500 group-hover:border-white/20">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">

<div className="w-3/4 h-3/4 bg-neutral-950 p-6 border border-white/10 shadow-2xl flex flex-col gap-4 relative">
<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/10 to-transparent"></div>
<div className="text-2xl font-serif text-white/20 leading-none">Aa</div>
<div className="h-px w-full bg-white/10"></div>
<div className="flex gap-4">
<div className="flex-1 space-y-2">
<div className="w-full h-2 bg-white/10 rounded-full"></div>
<div className="w-5/6 h-2 bg-white/10 rounded-full"></div>
<div className="w-full h-2 bg-white/10 rounded-full"></div>
<div className="w-4/6 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="w-1/3 bg-white/5 rounded border border-white/5 h-24"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:text-neutral-200 transition-colors">TypeScale</h3>
<p className="text-sm text-neutral-500">Web Typography Tool</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400">Tooling</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/20" id="about">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-3 tracking-tight">Radical Simplification</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                    I believe in stripping away the non-essential. Every pixel should serve a purpose. Complexity is a choice, not a requirement.
                </p>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-3 tracking-tight">Systematic Thinking</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                    Design doesn't happen in isolation. I build scalable design systems that bridge the gap between design files and production code.
                </p>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-3 tracking-tight">Performance First</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                    Aesthetics should never compromise performance. I design with the browser's constraints in mind to ensure snappy interactions.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="stack">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-8">Experience</h2>
<div className="space-y-8 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-600"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
<h4 className="text-white font-medium">Senior Designer</h4>
<span className="text-xs text-neutral-500 font-mono">2022 — Present</span>
</div>
<div className="text-sm text-neutral-400 mb-2">Stripe</div>
<p className="text-sm text-neutral-500 leading-relaxed">Leading design for the Connect onboarding experience and internal design system tooling.</p>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-700"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
<h4 className="text-white font-medium">Product Designer</h4>
<span className="text-xs text-neutral-500 font-mono">2020 — 2022</span>
</div>
<div className="text-sm text-neutral-400 mb-2">Linear</div>
<p className="text-sm text-neutral-500 leading-relaxed">Contributed to the core issue tracking experience and mobile application interface.</p>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-800"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
<h4 className="text-white font-medium">UI Designer</h4>
<span className="text-xs text-neutral-500 font-mono">2018 — 2020</span>
</div>
<div className="text-sm text-neutral-400 mb-2">Agency</div>
<p className="text-sm text-neutral-500 leading-relaxed">Worked with early-stage fintech startups to define their MVP visual language.</p>
</div>
</div>
</div>

<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-8">Stack</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

<div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<div className="text-white">
<i className="w-5 h-5" data-lucide="figma" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Figma</span>
</div>
<div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<div className="text-white">
<i className="w-5 h-5" data-lucide="code-2" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">React</span>
</div>
<div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<div className="text-white">
<i className="w-5 h-5" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Tailwind</span>
</div>
<div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<div className="text-white">
<i className="w-5 h-5" data-lucide="framer" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Framer</span>
</div>
<div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<div className="text-white">
<i className="w-5 h-5" data-lucide="box" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Spline</span>
</div>
<div className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<div className="text-white">
<i className="w-5 h-5" data-lucide="terminal-square" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Git</span>
</div>
</div>
<div className="mt-12 p-6 rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-12 h-12 text-white" data-lucide="quote"></i>
</div>
<p className="text-sm text-neutral-300 italic mb-4 relative z-10">
                        "Good design is obvious. Great design is transparent."
                    </p>
<div className="text-xs text-neutral-500 font-medium">— Joe Sparano</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Let's build something <br/> meaningful together.</h2>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-colors" href="mailto:hello@alexthorne.design">
                        Send an Email
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors" href="#">
                        Copy Link
                    </a>
</div>
</div>
<div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="dribbble" strokeWidth="1.5"></i>
</a>
</div>
<p className="text-xs text-neutral-600">
                    © 2024 Alex Thorne. Crafted with Tailwind.
                </p>
</div>
</div>
</footer>


    </>
  );
}
