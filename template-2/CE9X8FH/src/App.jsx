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
      {

        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      
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
      
<div className="spline-container absolute top-0 w-full h-[900px] -z-10">
<div data-us-project="5lHoGfe3FLqHAGyFDn3C" style={{width: `100%`, height: `900px`}}></div>

</div>

<header className="fixed top-4 left-4 right-4 z-50 fade-in">
<div className="max-w-7xl mx-auto">
<div className="h-14 flex glass-effect bg-white/5 border-white/10 border rounded-full pr-3 pl-3 items-center justify-between">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
<svg className="h-4 w-4 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-lg font-medium sf-pro-display">PulseForge</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Sign In</button>
<button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
              Get Started
            </button>
</div>
<button className="md:hidden p-2">
<svg className="h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</button>
</div>
</div>
</header>

<div className="max-w-full sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pt-40 pr-4 pl-4">
<div className="max-w-4xl text-left mt-10 mb-10">
<div className="slide-up inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8">
<div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
<span className="text-sm font-medium">Trusted by 2.2M+ developers worldwide</span>
</div>
<h1 className="slide-up stagger-1 text-5xl sm:text-6xl lg:text-7xl sf-pro-display tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-light">
          Build boldly.
          Ship precisely.
        </h1>
<p className="slide-up stagger-2 max-w-2xl leading-relaxed text-lg font-normal text-white/60 mb-12">
          A development platform engineered for teams that won’t settle. From local edit to global edge, every step is tuned for performance.
        </p>
<div className="slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-start">
<button className="glow-btn">
<span className="icon-box">
<svg data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</span>
            Get Started
          </button>
<button className="hover:bg-white/30 transition-all flex gap-2 font-medium bg-[#000000] border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 items-center">
<svg className="h-5 w-5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20"></rect><line></line><line></line>
</svg>
            Watch Demo
          </button>
</div>
</div>

<section className="pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="stagger-2 glass-effect relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 blur-in">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 rounded-full bg-cyan-500"></div>
</div>
<span className="text-sm text-white/50">PulseForge Cloud IDE</span>
</div>
<div className="flex items-center gap-2">
<div className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
<svg className="h-3 w-3 inline mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
                  Live
                </div>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3 space-y-2">
<div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-4">Project Explorer</div>
<div className="space-y-1">
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-sm">pulseforge-app</span>
</div>
<div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-sm">components</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 bg-blue-500/10 border border-blue-500/20 rounded-lg cursor-pointer">
<svg className="h-4 w-4 text-orange-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><path></path>
</svg>
<span className="text-sm text-blue-300">Dashboard.tsx</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-orange-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><path></path>
</svg>
<span className="text-sm">Analytics.tsx</span>
</div>
<div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-sm">api</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-cyan-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20"></rect><rect height="8" rx="2" ry="2" width="20"></rect><line></line><line></line>
</svg>
<span className="text-sm">routes.ts</span>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-purple-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path></path><path></path>
</svg>
<span className="text-sm">database.config</span>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="h-4 w-4 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><circle cx="12" cy="12"></circle>
</svg>
<span className="text-sm">pulseforge.config.json</span>
</div>
</div>
</aside>

<main className="lg:col-span-6">
<div className="bg-gray-950/80 border border-white/10 rounded-2xl overflow-hidden">

<div className="flex items-center gap-1 p-2 border-b border-white/10 bg-gray-900/50">
<div className="flex gap-2 bg-blue-500/20 border-blue-500/30 border rounded-lg pt-2 pr-4 pb-2 pl-4 items-center">
<svg className="h-3 w-3 text-blue-400" data-lucide="code" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
<span className="text-xs text-blue-300">Dashboard.tsx</span>
<svg className="h-3 w-3 text-white/40 hover:text-white cursor-pointer" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</div>
<button className="p-2 hover:bg-white/5 rounded-lg">
<svg className="h-4 w-4 text-white/40" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</button>
</div>

<div className="leading-7 min-h-96 relative text-sm font-mono pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-4 space-y-1">
<div className="flex code-line" style={{animationDelay: `.1s`}}>
<span className="text-white/30 w-8 text-right mr-4">1</span>
<span><span className="text-purple-400">import</span> <span className="text-blue-300">{"{"}</span> <span className="text-blue-300">useEffect</span>, <span className="text-blue-300">useState</span> <span className="text-blue-300">{"}"}</span> <span className="text-purple-400">from</span> <span className="text-cyan-400">'react'</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `.25s`}}>
<span className="text-white/30 w-8 text-right mr-4">2</span>
<span><span className="text-purple-400">import</span> <span className="text-cyan-300">MetricsPanel</span> <span className="text-purple-400">from</span> <span className="text-cyan-400">'@pulseforge/ui'</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `.4s`}}>
<span className="text-white/30 w-8 text-right mr-4">3</span>
<span className="text-orange-300">interface</span> <span className="text-blue-300">DashboardProps</span> <span className="text-white/60">{"{"}</span>
</div>
<div className="flex code-line" style={{animationDelay: `.55s`}}>
<span className="text-white/30 w-8 text-right mr-4">4</span>
<span className="ml-4"><span className="text-blue-300">userId</span><span className="text-white/60">:</span> <span className="text-orange-300">string</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `.7s`}}>
<span className="text-white/30 w-8 text-right mr-4">5</span>
<span className="ml-4"><span className="text-blue-300">theme</span><span className="text-white/60">?:</span> <span className="text-cyan-400">'dark'</span> <span className="text-white/60">|</span> <span className="text-cyan-400">'light'</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `.85s`}}>
<span className="text-white/30 w-8 text-right mr-4">6</span>
<span className="text-white/60">{"}"}</span>
</div>
<div className="flex code-line" style={{animationDelay: `1s`}}>
<span className="text-white/30 w-8 text-right mr-4">7</span>
<span><span className="text-purple-400">export</span> <span className="text-purple-400">const</span> <span className="text-blue-300">Dashboard</span><span className="text-white/60">:</span> <span className="text-orange-300">React.FC</span><span className="text-white/60">{"<"}</span><span className="text-orange-300">DashboardProps</span><span className="text-white/60">{">"}</span> <span className="text-white/60">=</span> <span className="text-white/60">({"{"}</span> <span className="text-blue-300">userId</span>, <span className="text-blue-300">theme</span> <span className="text-white/60">=</span> <span className="text-cyan-400">'dark'</span> <span className="text-white/60">{"}"})</span> <span className="text-purple-400">={">"}</span> <span className="text-white/60">{"{"}</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `1.15s`}}>
<span className="text-white/30 w-8 text-right mr-4">8</span>
<span className="ml-4"><span className="text-purple-400">const</span> <span className="text-white/60">[</span><span className="text-blue-300">metrics</span>, <span className="text-blue-300">setMetrics</span><span className="text-white/60">]</span> <span className="text-white/60">=</span> <span className="text-yellow-300">useState</span><span className="text-white/60">{"<"}</span><span className="text-orange-300">any</span><span className="text-white/60">{">"}(</span><span className="text-purple-400">null</span><span className="text-white/60">)</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `1.3s`}}>
<span className="text-white/30 w-8 text-right mr-4">9</span>
<span className="ml-4"><span className="text-purple-400">const</span> <span className="text-white/60">[</span><span className="text-blue-300">loading</span>, <span className="text-blue-300">setLoading</span><span className="text-white/60">]</span> <span className="text-white/60">=</span> <span className="text-yellow-300">useState</span><span className="text-white/60">(</span><span className="text-purple-400">true</span><span className="text-white/60">)</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `1.45s`}}>
<span className="text-white/30 w-8 text-right mr-4">10</span>
<span className="ml-4"><span className="text-yellow-300">useEffect</span><span className="text-white/60">(()</span> <span className="text-purple-400">={">"}</span> <span className="text-white/60">{"{"}</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `1.6s`}}>
<span className="text-white/30 w-8 text-right mr-4">11</span>
<span className="ml-8"><span className="text-blue-300">fetch</span><span className="text-white/60">(</span><span className="text-cyan-400">`/api/metrics/</span><span className="text-yellow-300">${"{"}</span><span className="text-blue-300">userId</span><span className="text-yellow-300">{"}"}</span><span className="text-cyan-400">`</span><span className="text-white/60">)</span>.<span className="text-yellow-300">then</span><span className="text-white/60">(</span><span className="text-blue-300">r</span> <span className="text-purple-400">={">"}</span> <span className="text-blue-300">r</span>.<span className="text-blue-300">json</span><span className="text-white/60">())</span>.<span className="text-yellow-300">then</span><span className="text-white/60">(</span><span className="text-blue-300">setMetrics</span><span className="text-white/60">)</span>.<span className="text-yellow-300">finally</span><span className="text-white/60">(()</span> <span className="text-purple-400">={">"}</span> <span className="text-blue-300">setLoading</span><span className="text-white/60">(</span><span className="text-purple-400">false</span><span className="text-white/60">))</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `1.75s`}}>
<span className="text-white/30 w-8 text-right mr-4">12</span>
<span className="ml-4"><span className="text-white/60">{"}"}, [</span><span className="text-blue-300">userId</span><span className="text-white/60">])</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `1.9s`}}>
<span className="text-white/30 w-8 text-right mr-4">13</span>
<span className="ml-4"><span className="text-purple-400">return</span> <span className="text-white/60">(</span><span className="text-white/60">{"<"}</span><span className="text-cyan-300">MetricsPanel</span> <span className="text-blue-300">data</span><span className="text-white/60">=</span><span className="text-blue-300">{"{"}</span><span className="text-blue-300">metrics</span><span className="text-blue-300">{"}"}</span> <span className="text-blue-300">loading</span><span className="text-white/60">=</span><span className="text-blue-300">{"{"}</span><span className="text-blue-300">loading</span><span className="text-blue-300">{"}"}</span> <span className="text-blue-300">theme</span><span className="text-white/60">=</span><span className="text-cyan-400">"</span><span className="text-cyan-400">dark</span><span className="text-cyan-400">"</span> <span className="text-white/60">/{">"}</span><span className="text-white/60">)</span></span>
</div>
<div className="flex code-line" style={{animationDelay: `2.05s`}}>
<span className="text-white/30 w-8 text-right mr-4">14</span>
<span className="text-white/60">{"}"}</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold sf-pro-display">Analytics Dashboard Pro</h3>
<p className="text-sm text-white/50">by Core Team • Updated 2 minutes ago</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2">
<svg className="h-3 w-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
                      2.3k
                    </button>
<button className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2">
<svg className="h-3 w-3" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line></line><circle cx="18" cy="6"></circle><circle cx="6" cy="18"></circle><path></path>
</svg>
                      Fork
                    </button>
</div>
</div>
</main>

<aside className="lg:col-span-3 space-y-4">

<div className="bg-gray-950/80 border border-white/10 rounded-xl">
<div className="flex items-center justify-between p-3 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
<span className="text-sm font-medium">Terminal</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
<span className="text-xs text-cyan-400">Live</span>
</div>
</div>
<div className="p-3 font-mono text-xs space-y-2 h-48 overflow-y-auto">
<div className="text-cyan-400">→ pulseforge dev --hot-reload</div>
<div className="text-white/60">🚀 Starting PulseForge development server...</div>
<div className="text-blue-400">✓ TypeScript compiler ready</div>
<div className="text-blue-400">✓ Hot module replacement enabled</div>
<div className="text-cyan-400">✓ Server running on https://localhost:3000</div>
<div className="text-purple-400">✓ GraphQL playground available</div>
<div className="text-yellow-400">⚡ Watching for file changes...</div>
<div className="text-white/40">Dashboard.tsx compiled in 792ms</div>
<div className="text-cyan-400">→ pulseforge test --watch</div>
<div className="text-cyan-400">✅ 52 tests passed</div>
<div className="text-white/40">Code coverage: 94.8%</div>
<div className="text-blue-400">→ Ready for production deployment</div>
</div>
</div>

<div className="bg-gray-950/80 border border-white/10 rounded-xl">
<div className="flex items-center justify-between p-3 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-blue-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><circle cx="12" cy="12"></circle>
</svg>
<span className="text-sm font-medium">Live Preview</span>
</div>
<button className="p-1 hover:bg-white/10 rounded">
<svg className="h-3 w-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</button>
</div>
<div className="p-3 space-y-3">
<div className="bg-blue-500/20 rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium">Performance</span>
<span className="text-xs text-cyan-400">98/100</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="h-1 rounded-full bg-cyan-400" style={{width: `98%`}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Bundle Size</span>
<span className="text-cyan-400">2.3MB ↓14%</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Load Time</span>
<span className="text-blue-400">1.1s</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Lighthouse</span>
<span className="text-purple-400">A+</span>
</div>
</div>
</div>
</div>
</aside>
</div>

<div className="absolute bottom-4 right-4 flex gap-2">
<button className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3">
<svg className="text-neutral-50" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</button>
<button className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3">
<svg data-lucide="share" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</button>
</div>
</div>
</div>
</section>
</div>

<section className="pt-32 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-20">
<h2 className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">Trusted by industry leaders.</h2>
<p className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto">
            See how forward-thinking teams use PulseForge to deliver remarkable digital experiences at scale.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="fade-in stagger-3 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
<div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
<img alt="Modern office space with developers" className="w-full h-full object-cover card-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7c582f0-2e26-487e-ae18-fee9da10561d_800w.jpg" />
<div className="absolute top-4 left-4">
<div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">Case Study</div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="h-5 w-5 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</div>
<div>
<h3 className="font-semibold sf-pro-display">ApexOne</h3>
<p className="text-sm text-white/70">Global Tech Enterprise</p>
</div>
</div>
</div>
</div>
<div className="p-8 card-content">
<h4 className="text-xl font-semibold sf-pro-display mb-4">280% faster deployments</h4>
<p className="text-white/60 mb-6 leading-relaxed">
                "PulseForge streamlined our entire pipeline. We ship multiple times a day with zero downtime and complete confidence."
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg)] bg-cover rounded-full"></div>
<div>
<p className="text-sm font-medium">Sarah Chen</p>
<p className="text-xs text-white/50">VP of Engineering</p>
</div>
</div>
<svg className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</div>
</div>
</div>

<div className="fade-in stagger-4 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
<div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
<img alt="Collaborative team meeting" className="w-full h-full object-cover card-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36460156-d7ce-43aa-89af-e013fb87ccfc_800w.jpg" />
<div className="absolute top-4 left-4">
<div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">Case Study</div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="w-5 h-5 text-white" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><circle cx="9" cy="7"></circle>
</svg>
</div>
<div>
<h3 className="font-semibold sf-pro-display">Orbitly</h3>
<p className="text-sm text-white/70">High-Growth Startup</p>
</div>
</div>
</div>
</div>
<div className="p-8 card-content">
<h4 className="text-xl font-semibold sf-pro-display mb-4">10x team productivity</h4>
<p className="text-white/60 mb-6 leading-relaxed">
                "PulseForge gives us enterprise power without enterprise overhead. We focus on product, not plumbing."
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg)] bg-cover rounded-full"></div>
<div>
<p className="text-sm font-medium">Alex Rodriguez</p>
<p className="text-xs text-white/50">CTO & Co-founder</p>
</div>
</div>
<svg className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</div>
</div>
</div>

<div className="fade-in stagger-5 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
<div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
<img alt="Data visualization dashboard" className="w-full h-full object-cover card-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_800w.jpg" />
<div className="absolute top-4 left-4">
<div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">Case Study</div>
</div></div></div></div></div></section>
    </>
  );
}
