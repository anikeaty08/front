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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="100" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZPruWnhzwuk5Tf6nc1q0"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#050505]/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-white font-semibold text-lg tracking-tighter hover:opacity-80 transition-opacity" href="#">
                XP
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#skills">Capabilities</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>

<button className="group relative inline-flex items-center justify-center rounded-full overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#050505] px-4 py-1.5 text-xs font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-[#0a0a0a]">
                    Book a call
                </span>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="-translate-x-1/2 blur-[120px] pointer-events-none bg-[#6248FF] opacity-10 w-[600px] h-[400px] rounded-full absolute top-0 left-1/2">
</div>
<div className="z-10 flex flex-col md:flex-row gap-12 md:gap-24 max-w-7xl mr-auto ml-auto relative gap-x-12 gap-y-12 items-center">
<div className="flex-1 text-center md:text-left w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300 mb-8 tracking-tight">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF5A30]"></span>
        Available for new projects
      </div>
<h1 className="leading-[0.95] md:text-7xl lg:text-6xl text-5xl font-bold text-white tracking-tighter mb-8">Senior
        Product Designer</h1>
<p className="md:text-xl leading-relaxed md:mx-0 text-lg font-light text-stone-200 max-w-2xl mb-12">A
        multidisciplinary UX/UI Designer bridging the gap between complex SaaS logic and intuitive aesthetics.
        Specializing in end-to-end product design and AI integration.</p>
<div className="flex flex-col sm:flex-row gap-4 md:justify-start gap-x-4 gap-y-4 items-center justify-center">
<button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-black transition-all hover:bg-slate-200">
<span className="mr-2 text-sm tracking-tight">View Projects</span>
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                Read Manifesto <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 w-full max-w-[500px] relative group md:mt-0 mt-8">
<div className="absolute inset-0 bg-gradient-to-tr from-[#FF5A30] via-[#6248FF] to-[#050505] opacity-20 blur-3xl rounded-full -z-10 group-hover:opacity-40 transition-opacity duration-700">
</div>
<div className="overflow-hidden hover:rotate-0 transition-transform duration-500 ease-out border-white/10 border rounded-2xl relative shadow-2xl rotate-2">
<img alt="Profile" className="group-hover:opacity-100 transition-opacity duration-500 opacity-90 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4445ad05-540a-45b5-93ca-e40d2dc39218_1600w.png" style={{}}/>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="skills">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">Expertise &amp; Stack</h2>
<p className="text-slate-400 max-w-xl font-light">Combining technical proficiency with creative strategy to deliver scalable products.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl p-[1px] overflow-hidden h-full">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-[#FF5A30]">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">SaaS &amp; Systems</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Architecting complex, data-heavy dashboards and scalable design systems for enterprise SaaS platforms. Focusing on information architecture and user efficiency.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl p-[1px] overflow-hidden h-full">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-[#6248FF]">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">iOS Mobile Apps</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Designing native iOS experiences adhering to Human Interface Guidelines. Creating fluid interactions and haptic-ready interfaces for mobile users.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl p-[1px] overflow-hidden h-full">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Integration</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Leveraging  to prototype generative UI features. Bridging the gap between LLM capabilities and user-centric product application.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl p-[1px] overflow-hidden h-full lg:col-span-2">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Creative Implementation</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                                From high-fidelity prototyping to production-ready assets and marketing content. Ensuring design intent is maintained through development.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Figma</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Webflow</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Adobe Photoshop</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Adobe Illustrator</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">After Effects</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-video rounded-lg bg-gradient-to-br from-[#FF5A30]/20 to-[#6248FF]/20 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white/80" icon="lucide:pen-tool" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-[1px] overflow-hidden h-full">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors">
<h3 className="text-xl font-medium text-white mb-6 tracking-tight">E2E Process</h3>
<div className="space-y-6 relative before:absolute before:left-[5px] before:top-2 before:h-[85%] before:w-[1px] before:bg-white/10">
<div className="relative pl-6">
<span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#FF5A30]"></span>
<h4 className="text-sm font-medium text-white">Discovery &amp; Research</h4>
</div>
<div className="relative pl-6">
<span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
<h4 className="text-sm font-medium text-white">Wireframing &amp; Logic</h4>
</div>
<div className="relative pl-6">
<span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
<h4 className="text-sm font-medium text-white">High-Fi &amp; Prototyping</h4>
</div>
<div className="relative pl-6">
<span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#6248FF]"></span>
<h4 className="text-sm font-medium text-white">Handoff &amp; Support</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">Selected Work</h2>
<p className="text-slate-400 font-light">Showcase of recent product design and development.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors self-start md:self-auto" href="#">View all projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 p-[1px]">

<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500 z-0"></div>
<div className="relative w-full h-full bg-[#111] rounded-2xl overflow-hidden z-10">

<div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-3/4 h-3/4 bg-[#1a1a1a] rounded shadow-2xl border border-white/5 flex flex-col p-4">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="w-full h-2 bg-slate-800 rounded mb-2 w-1/3"></div>
<div className="flex-1 bg-slate-800/50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#6248FF] transition-colors">Finance SaaS Dashboard</h3>
<p className="text-sm text-slate-500">Fintech, Product Design</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 p-[1px]">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500 z-0"></div>
<div className="relative w-full h-full bg-[#111] rounded-2xl overflow-hidden z-10">
<div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-48 h-full bg-[#050505] border-x border-white/5 flex flex-col pt-12 px-4">
<div className="w-full aspect-square bg-[#222] rounded-xl mb-4"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-[#333] rounded"></div>
<div className="w-2/3 h-2 bg-[#333] rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#FF5A30] transition-colors">Vision Mobile App</h3>
<p className="text-sm text-slate-500">iOS, Health &amp; Wellness</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 p-[1px]">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500 z-0"></div>
<div className="relative w-full h-full bg-[#111] rounded-2xl overflow-hidden z-10">
<div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="relative w-64 h-40 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-4xl font-bold text-white/20">AI</span>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#6248FF] transition-colors">Generative Marketing Suite</h3>
<p className="text-sm text-slate-500">Web App, AI Integration</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 p-[1px]">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF5A30_0%,#050505_50%,#6248FF_100%)] opacity-0 group-hover:opacity-100 animate-border-spin transition-opacity duration-500 z-0"></div>
<div className="relative w-full h-full bg-[#111] rounded-2xl overflow-hidden z-10">
<div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="grid grid-cols-2 gap-4 w-2/3">
<div className="aspect-square bg-[#FF5A30] rounded-lg opacity-80"></div>
<div className="aspect-square bg-[#6248FF] rounded-lg opacity-80"></div>
<div className="aspect-square bg-white rounded-lg opacity-20"></div>
<div className="aspect-square bg-white rounded-lg opacity-50"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#FF5A30] transition-colors">Agency Portfolio</h3>
<p className="text-sm text-slate-500">Webflow, Development</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#020202]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-4">
<a className="text-white font-semibold text-lg tracking-tighter" href="#">XP</a>
<p className="text-xs text-slate-500 max-w-xs">
                    Designed and built with precision. Focusing on user experience, performance, and scalability.
                </p>
</div>
<div className="flex gap-8 text-xs text-slate-400">
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Sitemap</span>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Capabilities</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Socials</span>
<a className="hover:text-white transition-colors" href="#">Twitter / X</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-slate-600">
<span>© 2024 XP. All rights reserved.</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span>Systems Normal</span>
</div>
</div>
</footer>

    </>
  );
}
