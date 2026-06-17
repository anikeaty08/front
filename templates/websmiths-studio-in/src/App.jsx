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
      

<div className="fixed inset-0 bg-grid pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full group-hover:rotate-6 transition-transform duration-500" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="brandGradient" x1="0" x2="32" y1="0" y2="32">
<stop offset="0%" stop-color="#4ade80"></stop>
<stop offset="100%" stop-color="#16a34a"></stop>
</lineargradient>
</defs>

<circle cx="8" cy="10" fill="none" r="1.5" stroke="url(#brandGradient)" strokeWidth="1"></circle>
<path d="M9.5 10H14" stroke="url(#brandGradient)" strokeLinecap="round" strokeWidth="1.5"></path>
<circle cx="6" cy="16" fill="none" r="1.5" stroke="url(#brandGradient)" strokeWidth="1"></circle>
<path d="M7.5 16H13" stroke="url(#brandGradient)" strokeLinecap="round" strokeWidth="1.5"></path>
<circle cx="8" cy="22" fill="none" r="1.5" stroke="url(#brandGradient)" strokeWidth="1"></circle>
<path d="M9.5 22H14" stroke="url(#brandGradient)" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M19 12L24 7" stroke="url(#brandGradient)" strokeLinecap="round" strokeWidth="3"></path> 
<path d="M16 15L22 21" stroke="url(#brandGradient)" strokeLinecap="round" strokeWidth="3"></path> 
<path d="M14 11L18 7L24 13L20 17Z" fill="url(#brandGradient)"></path> 

<rect className="opacity-0 group-hover:opacity-100 transition-opacity" fill="#4ade80" height="2" width="2" x="24" y="5"></rect>
<rect className="opacity-0 group-hover:opacity-100 transition-opacity delay-75" fill="#4ade80" height="2" width="2" x="22" y="3"></rect>
</svg>
</div>

<div className="flex flex-col leading-none justify-center">
<div className="text-lg font-bold tracking-tight">
<span className="text-white">WEB</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">SMITHS</span>
</div>
</div>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-tight">
<a className="hover:text-green-400 transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#method">Method</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-green-400 transition-colors" href="#contact">Log in</a>
<a className="flex items-center gap-2 text-xs font-semibold bg-white text-black px-4 py-2 rounded hover:bg-green-400 transition-colors shadow-lg shadow-green-900/20" href="#contact">
                    Start Project
                </a>
</div>

<button className="md:hidden text-white hover:text-green-400 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/[0.05] rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-900/10 text-xs font-semibold text-green-400 mb-8 hover:bg-green-900/20 transition-colors cursor-default backdrop-blur-md shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Code. Create. Captivate.
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Digital artisans <br/>
                for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-serif italic pr-2">modern web.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg mx-auto leading-relaxed mb-10 font-normal">
                We forge high-performance websites and applications with an obsessive attention to detail and craft.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-sm rounded hover:bg-green-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                    View work
                    <span className="iconify" data-height="14" data-icon="lucide:arrow-down" data-width="14"></span>
</button>
<button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/10 text-white font-medium text-sm rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    Our process
                </button>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-6">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2 group cursor-pointer"><span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:triangle" data-width="20"></span><span className="font-bold text-white tracking-tight text-sm">ACME</span></div>
<div className="flex items-center gap-2 group cursor-pointer"><span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:hexagon" data-width="20"></span><span className="font-bold text-white tracking-tight text-sm">VORTEX</span></div>
<div className="flex items-center gap-2 group cursor-pointer"><span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:circle" data-width="20"></span><span className="font-bold text-white tracking-tight text-sm">ORBIT</span></div>
<div className="flex items-center gap-2 group cursor-pointer"><span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:square" data-width="20"></span><span className="font-bold text-white tracking-tight text-sm">BLOCK</span></div>
<div className="flex items-center gap-2 group cursor-pointer"><span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:diamond" data-width="20"></span><span className="font-bold text-white tracking-tight text-sm">PRISM</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tighter text-white mb-2">Selected Work</h2>
<p className="text-neutral-500">Recent digital artifacts forged in the smithy.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-green-500 hover:text-green-400 transition-colors font-medium" href="#">
                    View all projects <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="glass-card rounded-xl p-6 md:col-span-2 relative overflow-hidden group shine-border">
<div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-bold text-green-400 uppercase tracking-wider">Fintech</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Nova Finance Dashboard</h3>
<p className="text-sm text-neutral-500 mt-1">Full-stack application design &amp; development</p>
</div>

<div className="mt-8 w-full h-full bg-neutral-900/80 border border-white/10 rounded-tl-lg overflow-hidden shadow-2xl translate-y-2 translate-x-2 transition-transform duration-500 group-hover:translate-y-0 group-hover:translate-x-0">

<div className="h-8 border-b border-white/5 flex items-center px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>

<div className="p-4 grid grid-cols-3 gap-3">
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="col-span-2 h-32 bg-white/5 rounded border border-white/5"></div>
<div className="h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded border border-green-500/20 border-dashed"></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 relative overflow-hidden group shine-border">
<div className="absolute inset-0 bg-neutral-900/50"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-green-500/30 transition-colors">
<span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:smartphone" data-width="20"></span>
</span>
<span className="text-xs font-medium text-neutral-500">2024</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Lumina Mobile</h3>
<p className="text-sm text-neutral-500 mt-1 mb-6">iOS Interaction Design</p>

<div className="flex-1 mx-auto w-3/4 bg-black border-x border-t border-white/10 rounded-t-2xl p-2 relative shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-full h-full bg-neutral-800 rounded-t-xl overflow-hidden relative">
<div className="absolute top-4 left-4 right-4 h-24 bg-neutral-700/50 rounded-lg animate-pulse"></div>
<div className="absolute top-32 left-4 right-4 h-8 bg-neutral-700/30 rounded w-2/3"></div>
<div className="absolute top-44 left-4 right-4 bottom-0 bg-neutral-700/20 rounded-t-lg"></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 relative overflow-hidden group shine-border flex flex-col justify-between">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-green-500">
<span className="iconify rotate-45" data-icon="lucide:arrow-up" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Chronos</h3>
<p className="text-sm text-neutral-500">Productivity Tool</p>
</div>

<div className="mt-4 space-y-2">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Performance</span>
<span className="text-green-400">+124%</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[80%] h-full bg-green-500 rounded-full"></div>
</div>
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Retention</span>
<span className="text-white">98%</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 md:col-span-2 relative overflow-hidden group shine-border">
<div className="flex flex-col md:flex-row h-full gap-6">
<div className="flex flex-col justify-center max-w-xs">
<h3 className="text-xl font-medium text-white tracking-tight">Design Systems</h3>
<p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                                We created a comprehensive component library for a Series B startup, reducing dev time by 40%.
                            </p>
<div className="mt-6 flex gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400 uppercase tracking-wide">Figma</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400 uppercase tracking-wide">React</span>
</div>
</div>

<div className="flex-1 bg-neutral-950/50 rounded-lg border border-white/5 p-4 grid grid-cols-2 gap-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>

<div className="h-8 bg-white text-black text-xs font-bold rounded flex items-center justify-center">Primary</div>
<div className="h-8 border border-white/20 text-white text-xs font-bold rounded flex items-center justify-center">Secondary</div>

<div className="col-span-2 h-8 bg-white/5 border border-white/10 rounded"></div>

<div className="col-span-2 h-20 bg-white/5 border border-white/10 rounded flex gap-2 p-2">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="flex-1 space-y-1">
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/10" id="services">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<h2 className="text-2xl font-medium tracking-tighter text-white mb-4">Our Expertise</h2>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Laser-focused on the modern web stack. We don't do everything; we do the web perfectly.
                </p>
</div>
<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="space-y-3 group cursor-default">
<span className="iconify text-neutral-600 group-hover:text-green-500 transition-colors" data-icon="lucide:layout-template" data-width="24"></span>
<h3 className="text-base font-medium text-white">Interface Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Aesthetic precision meets intuitive UX. We design systems that scale.</p>
</div>

<div className="space-y-3 group cursor-default">
<span className="iconify text-neutral-600 group-hover:text-green-500 transition-colors" data-icon="lucide:cpu" data-width="24"></span>
<h3 className="text-base font-medium text-white">Engineering</h3>
<p className="text-sm text-neutral-500 leading-relaxed">React, Next.js, and TypeScript. Clean code that performs under pressure.</p>
</div>

<div className="space-y-3 group cursor-default">
<span className="iconify text-neutral-600 group-hover:text-green-500 transition-colors" data-icon="lucide:rocket" data-width="24"></span>
<h3 className="text-base font-medium text-white">Performance</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Core Web Vitals optimization. If it isn't instant, it's too slow.</p>
</div>

<div className="space-y-3 group cursor-default">
<span className="iconify text-neutral-600 group-hover:text-green-500 transition-colors" data-icon="lucide:database" data-width="24"></span>
<h3 className="text-base font-medium text-white">CMS Integration</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Sanity or Contentful. Empowering your team to edit without breaking things.</p>
</div>

<div className="space-y-3 group cursor-default">
<span className="iconify text-neutral-600 group-hover:text-green-500 transition-colors" data-icon="lucide:activity" data-width="24"></span>
<h3 className="text-base font-medium text-white">Analytics</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Privacy-first analytics setup to understand user behavior clearly.</p>
</div>

<div className="space-y-3 group cursor-default">
<span className="iconify text-neutral-600 group-hover:text-green-500 transition-colors" data-icon="lucide:search" data-width="24"></span>
<h3 className="text-base font-medium text-white">Technical SEO</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Semantic HTML and metadata structure to ensure visibility.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tighter text-white">The Duo</h2>
<p className="text-neutral-500 mt-2">No middle management. You work directly with the smiths.</p>
</div>
<a className="px-4 py-2 border border-white/10 rounded-full text-xs font-medium text-white hover:bg-white/5 transition-colors" href="#contact">
                    Read Manifesto
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group border border-white/5 bg-neutral-900/20 rounded-xl p-1.5 hover:border-green-500/20 transition-colors duration-300">
<div className="flex items-center gap-4 p-4">
<div className="w-16 h-16 rounded-full bg-neutral-800 overflow-hidden relative border border-white/10 group-hover:scale-105 transition-transform group-hover:border-green-500/50">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-600 to-neutral-400"></div>
</div>
<div>
<h3 className="text-lg font-medium text-white">Alex</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-0.5">Design Lead</p>
</div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-green-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                            Formerly Art Director at Major Tech. Obsessed with typography, micro-interactions, and dark mode aesthetics.
                        </p>
</div>
</div>

<div className="group border border-white/5 bg-neutral-900/20 rounded-xl p-1.5 hover:border-green-500/20 transition-colors duration-300">
<div className="flex items-center gap-4 p-4">
<div className="w-16 h-16 rounded-full bg-neutral-800 overflow-hidden relative border border-white/10 group-hover:scale-105 transition-transform group-hover:border-green-500/50">
<div className="absolute inset-0 bg-gradient-to-bl from-neutral-600 to-neutral-800"></div>
</div>
<div>
<h3 className="text-lg font-medium text-white">Jordan</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-0.5">Tech Lead</p>
</div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-green-500" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                            Full-stack engineer with 10+ years experience. Specialist in scalable infrastructure, APIs, and buttery smooth animations.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-950 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-2xl group">
<span className="iconify text-white group-hover:text-green-400 transition-colors" data-icon="lucide:mail" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Let's build something <br/><span className="text-neutral-500">remarkable.</span></h2>
<p className="text-neutral-400 mb-10 text-lg">We are currently accepting 2 new projects for the upcoming quarter.</p>
<form className="text-left bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider ml-1">Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-neutral-700" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider ml-1">Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-neutral-700" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-1 mb-6">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider ml-1">Project Vision</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-neutral-700 resize-none" placeholder="Tell us about what you want to build..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-3.5 rounded-lg hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                    Send Request
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="w-5 h-5 relative">
<svg fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12L24 7" stroke="#4ade80" strokeLinecap="round" strokeWidth="4"></path>
<path d="M16 15L22 21" stroke="#4ade80" strokeLinecap="round" strokeWidth="4"></path>
<path d="M14 11L18 7L24 13L20 17Z" fill="#4ade80"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-white tracking-tight uppercase leading-none">Web<span className="text-green-500">smiths</span></span>
<span className="text-[8px] text-neutral-600 font-medium tracking-wide leading-none mt-0.5">Code. Create. Captivate.</span>
</div>
</div>
<div className="flex items-center gap-8 text-xs text-neutral-500 font-medium">
<a className="hover:text-green-400 transition-colors" href="#">X (Twitter)</a>
<a className="hover:text-green-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-green-400 transition-colors" href="#">Github</a>
<a className="hover:text-green-400 transition-colors" href="#">Read.cv</a>
</div>
<div className="text-[10px] text-neutral-700 uppercase tracking-wider">
                San Francisco, CA • Est. 2024
            </div>
</div>
</footer>

    </>
  );
}
