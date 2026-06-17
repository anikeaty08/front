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
      

<div className="w-full max-w-7xl h-[90vh] sm:h-[85vh] bg-white rounded-2xl shadow-2xl shadow-zinc-300/50 border border-zinc-200 flex overflow-hidden relative ring-1 ring-zinc-900/5">

<aside className="w-16 sm:w-64 bg-zinc-50/80 border-r border-zinc-200 flex flex-col justify-between shrink-0 z-20 backdrop-blur-md">
<div>

<div className="h-14 flex items-center px-6 gap-2 group">
<div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20 group-hover:bg-red-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/20 group-hover:bg-amber-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20 group-hover:bg-green-500 transition-colors"></div>
</div>

<nav className="mt-4 px-3 space-y-1">
<div className="px-3 mb-2 hidden sm:block">
<span className="text-xs font-medium text-zinc-400 tracking-wider">WORKSPACE</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white border border-zinc-200 shadow-sm transition-all group" href="#">
<iconify-icon className="text-zinc-800" icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden sm:block text-sm font-medium text-zinc-800">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-all group text-zinc-500 hover:text-zinc-800" href="#">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden sm:block text-sm font-medium">Game Dev</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-all group text-zinc-500 hover:text-zinc-800" href="#">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden sm:block text-sm font-medium">Web Stack</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-all group text-zinc-500 hover:text-zinc-800" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden sm:block text-sm font-medium">Assets</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-zinc-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400 flex items-center justify-center text-xs font-semibold text-white tracking-tight">
                        AD
                    </div>
<div className="hidden sm:block">
<p className="text-sm font-medium text-zinc-800">Alex Dev</p>
<p className="text-xs text-zinc-500">Pro Account</p>
</div>
<iconify-icon className="ml-auto text-zinc-400 hover:text-zinc-800 cursor-pointer hidden sm:block" icon="solar:settings-linear" width="18"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-white overflow-hidden relative">

<header className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 shrink-0 bg-white/90 backdrop-blur z-10">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="16"></iconify-icon>
<span>/</span>
<span className="text-zinc-800 font-medium">Portfolio</span>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:plain-linear" width="14"></iconify-icon>
                        Contact
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12 pb-24">

<section className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Open to work</span>
</div>
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-4 leading-[1.1]">
                        Architecting digital worlds <br/>
<span className="text-zinc-400">and scalable systems.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-xl font-light">
                        I bridge the gap between interactive game mechanics and robust web infrastructure. Building immersive experiences with Unity, Unreal, React, and Node.js.
                    </p>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight text-zinc-900">Featured Projects</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:list-linear" width="20"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-zinc-900 bg-zinc-100 transition-colors">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-zinc-300">
<div className="aspect-video w-full bg-zinc-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" icon="solar:gamepad-minimalistic-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-white uppercase tracking-wider">
                                    Unity 3D
                                </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Neon Horizon</h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">Cyberpunk racing game with procedural generation and real-time multiplayer networking.</p>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-zinc-300">
<div className="aspect-video w-full bg-zinc-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-zinc-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-3/4 h-3/4 bg-white rounded-lg shadow-sm opacity-50 border border-zinc-200"></div>
</div>
<div className="absolute top-3 left-3 bg-white/60 backdrop-blur-md border border-zinc-200 px-2 py-1 rounded text-[10px] font-medium text-zinc-800 uppercase tracking-wider">
                                    Next.js
                                </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Vantage Analytics</h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">SaaS dashboard for tracking player metrics and server load in real-time.</p>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-zinc-300">
<div className="aspect-video w-full bg-zinc-200 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-zinc-100 to-zinc-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-zinc-400" icon="solar:layers-minimalistic-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-white/60 backdrop-blur-md border border-zinc-200 px-2 py-1 rounded text-[10px] font-medium text-zinc-800 uppercase tracking-wider">
                                    Electron
                                </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Asset Forge</h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">Desktop application for optimizing 3D models and textures pipeline.</p>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-white border border-zinc-200 rounded-lg shadow-sm">
<iconify-icon className="text-zinc-700" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900">Technical Arsenal</h3>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Game Engine</span>
<span className="text-zinc-900 font-medium">Unity / C#</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Frontend</span>
<span className="text-zinc-900 font-medium">React / TypeScript</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Backend</span>
<span className="text-zinc-900 font-medium">Node.js / PostgreSQL</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-6 text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-60 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-center justify-between mb-8">
<div className="p-2 bg-white/10 border border-white/5 rounded-lg">
<iconify-icon className="text-white" icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">Stats</span>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-3xl font-light tracking-tight mb-1">4+</p>
<p className="text-xs text-zinc-400">Years Experience</p>
</div>
<div>
<p className="text-3xl font-light tracking-tight mb-1">12</p>
<p className="text-xs text-zinc-400">Shipped Titles</p>
</div>
<div>
<p className="text-3xl font-light tracking-tight mb-1">100%</p>
<p className="text-xs text-zinc-400">Job Success</p>
</div>
<div>
<p className="text-3xl font-light tracking-tight mb-1">24h</p>
<p className="text-xs text-zinc-400">Avg. Response</p>
</div>
</div>
</div>
</div>
</section>

<div className="pt-8 border-t border-zinc-100 flex items-center justify-between">
<p className="text-xs text-zinc-400">© 2023 Alex Dev. Built with <span className="text-zinc-600">Tailwind</span>.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-800 transition-colors" href="#">
<iconify-icon icon="brandico:github-text" width="20"></iconify-icon> 
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon> 
</a>
<a className="text-zinc-400 hover:text-zinc-800 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
