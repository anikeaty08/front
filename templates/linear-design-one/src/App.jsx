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
      

<header className="border-b border-white/[0.06] sticky top-0 bg-[#09090b]/80 backdrop-blur-xl z-50">
<div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-sm bg-[#09090b]"></div>
</div>
<span className="text-sm font-semibold">Design System</span>
</div>
<nav className="hidden lg:flex items-center gap-1">
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#colors">Colors</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#hsl">HSL</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#typography">Typography</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#components">Components</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#pricing">Pricing</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#gradients">Gradients</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#shadows">Shadows</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#animations">Animations</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#spacing">Spacing</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#layout">Layout</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#icons">Icons</a>
<a className="text-xs text-white/50 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all" href="#borders">Borders</a>
</nav>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-white/30 hidden md:inline">v2.0</span>
<button className="bg-white text-[#09090b] text-xs font-medium px-3.5 py-1.5 rounded-lg hover:bg-white/90 transition-colors">Get Started</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6">

<div className="py-20 md:py-28 border-b border-white/[0.06]">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 text-xs text-white/40 mb-6 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Updated for 2025
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.1]">Design System<br/><span className="text-white/40">Reference Guide</span></h1>
<p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl">A comprehensive design system documenting every visual decision — colors, typography, components, spacing, and motion.</p>
</div>
</div>



<section className="py-20 border-b border-white/[0.06]" id="colors">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">01</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Color Palette</h2>
<p className="text-sm text-white/40 max-w-lg">Core colors defining the visual identity. Each color has defined usage, contrast ratios, and accessibility considerations.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Neutral / Gray Scale</h3>
<div className="grid grid-cols-5 md:grid-cols-10 gap-2">
<div className="space-y-2">
<div className="aspect-square rounded-lg bg-white border border-white/10"></div>
<p className="text-[10px] text-white/30 text-center">50</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#f4f4f5'}}></div>
<p className="text-[10px] text-white/30 text-center">100</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#e4e4e7'}}></div>
<p className="text-[10px] text-white/30 text-center">200</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#d4d4d8'}}></div>
<p className="text-[10px] text-white/30 text-center">300</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#a1a1aa'}}></div>
<p className="text-[10px] text-white/30 text-center">400</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#71717a'}}></div>
<p className="text-[10px] text-white/30 text-center">500</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#52525b'}}></div>
<p className="text-[10px] text-white/30 text-center">600</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#3f3f46'}}></div>
<p className="text-[10px] text-white/30 text-center">700</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#27272a'}}></div>
<p className="text-[10px] text-white/30 text-center">800</p>
</div>
<div className="space-y-2">
<div className="aspect-square rounded-lg" style={{background: '#18181b'}}></div>
<p className="text-[10px] text-white/30 text-center">900</p>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Brand</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="space-y-2.5">
<div className="h-24 rounded-xl" style={{background: '#6366f1'}}></div>
<div>
<p className="text-xs font-medium">Indigo</p>
<p className="text-[10px] text-white/30 font-mono">#6366f1</p>
</div>
</div>
<div className="space-y-2.5">
<div className="h-24 rounded-xl" style={{background: '#8b5cf6'}}></div>
<div>
<p className="text-xs font-medium">Violet</p>
<p className="text-[10px] text-white/30 font-mono">#8b5cf6</p>
</div>
</div>
<div className="space-y-2.5">
<div className="h-24 rounded-xl" style={{background: '#3b82f6'}}></div>
<div>
<p className="text-xs font-medium">Blue</p>
<p className="text-[10px] text-white/30 font-mono">#3b82f6</p>
</div>
</div>
<div className="space-y-2.5">
<div className="h-24 rounded-xl" style={{background: '#06b6d4'}}></div>
<div>
<p className="text-xs font-medium">Cyan</p>
<p className="text-[10px] text-white/30 font-mono">#06b6d4</p>
</div>
</div>
<div className="space-y-2.5">
<div className="h-24 rounded-xl" style={{background: '#10b981'}}></div>
<div>
<p className="text-xs font-medium">Emerald</p>
<p className="text-[10px] text-white/30 font-mono">#10b981</p>
</div>
</div>
<div className="space-y-2.5">
<div className="h-24 rounded-xl" style={{background: '#f59e0b'}}></div>
<div>
<p className="text-xs font-medium">Amber</p>
<p className="text-[10px] text-white/30 font-mono">#f59e0b</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Extended Palette</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#ef4444'}}></div>
<p className="text-[10px] text-white/30 font-mono">#ef4444</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#f97316'}}></div>
<p className="text-[10px] text-white/30 font-mono">#f97316</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#eab308'}}></div>
<p className="text-[10px] text-white/30 font-mono">#eab308</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#22c55e'}}></div>
<p className="text-[10px] text-white/30 font-mono">#22c55e</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#14b8a6'}}></div>
<p className="text-[10px] text-white/30 font-mono">#14b8a6</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#0ea5e9'}}></div>
<p className="text-[10px] text-white/30 font-mono">#0ea5e9</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#a855f7'}}></div>
<p className="text-[10px] text-white/30 font-mono">#a855f7</p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-lg" style={{background: '#ec4899'}}></div>
<p className="text-[10px] text-white/30 font-mono">#ec4899</p>
</div>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="hsl">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">02</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">HSL System</h2>
<p className="text-sm text-white/40 max-w-lg">HSL-based gray scale and semantic color tokens. All colors are defined using HSL for predictable manipulation.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">HSL Gray Scale — Zinc</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] overflow-hidden">
<div className="grid grid-cols-1 divide-y divide-white/[0.04]">
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(0, 0%, 100%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">White</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(0, 0%, 100%)</code>
<code className="text-[10px] text-white/30 font-mono">#ffffff</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 5%, 96%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 100</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 5%, 96%)</code>
<code className="text-[10px] text-white/30 font-mono">#f4f4f5</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 6%, 90%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 200</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 6%, 90%)</code>
<code className="text-[10px] text-white/30 font-mono">#e4e4e7</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 5%, 84%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 300</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 5%, 84%)</code>
<code className="text-[10px] text-white/30 font-mono">#d4d4d8</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 4%, 65%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 400</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 4%, 65%)</code>
<code className="text-[10px] text-white/30 font-mono">#a1a1aa</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 4%, 46%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 500</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 4%, 46%)</code>
<code className="text-[10px] text-white/30 font-mono">#71717a</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 5%, 34%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 600</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 5%, 34%)</code>
<code className="text-[10px] text-white/30 font-mono">#52525b</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 4%, 26%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 700</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 4%, 26%)</code>
<code className="text-[10px] text-white/30 font-mono">#3f3f46</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 4%, 16%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 800</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 4%, 16%)</code>
<code className="text-[10px] text-white/30 font-mono">#27272a</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0" style={{background: 'hsl(240, 6%, 10%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 900</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 6%, 10%)</code>
<code className="text-[10px] text-white/30 font-mono">#18181b</code>
</div>
<div className="flex items-center gap-4 px-6 py-3.5">
<div className="w-10 h-10 rounded-lg flex-shrink-0 border border-white/10" style={{background: 'hsl(240, 10%, 4%)'}}></div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium">Gray 950</p>
</div>
<code className="text-[10px] text-white/30 font-mono hidden md:block">hsl(240, 10%, 4%)</code>
<code className="text-[10px] text-white/30 font-mono">#09090b</code>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Semantic Color Tokens</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-4">
<h4 className="text-xs font-medium text-white/50 uppercase tracking-wider">Foreground</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(0,0%,100%)'}}></div>
<span className="text-xs">--foreground</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(0 0% 100%)</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(240,4%,46%)'}}></div>
<span className="text-xs">--muted-foreground</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(240 4% 46%)</code>
</div>
</div>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-4">
<h4 className="text-xs font-medium text-white/50 uppercase tracking-wider">Background</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border border-white/10" style={{background: 'hsl(240,10%,4%)'}}></div>
<span className="text-xs">--background</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(240 10% 4%)</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border border-white/10" style={{background: 'hsl(240,4%,16%)'}}></div>
<span className="text-xs">--muted</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(240 4% 16%)</code>
</div>
</div>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-4">
<h4 className="text-xs font-medium text-white/50 uppercase tracking-wider">Semantic</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(142,71%,45%)'}}></div>
<span className="text-xs">--success</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(142 71% 45%)</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(38,92%,50%)'}}></div>
<span className="text-xs">--warning</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(38 92% 50%)</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(0,84%,60%)'}}></div>
<span className="text-xs">--destructive</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(0 84% 60%)</code>
</div>
</div>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-4">
<h4 className="text-xs font-medium text-white/50 uppercase tracking-wider">Interactive</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(239,84%,67%)'}}></div>
<span className="text-xs">--primary</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(239 84% 67%)</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded" style={{background: 'hsl(240,4%,16%)'}}></div>
<span className="text-xs">--secondary</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(240 4% 16%)</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border border-white/10" style={{background: 'hsl(240,4%,16%)'}}></div>
<span className="text-xs">--border</span>
</div>
<code className="text-[10px] text-white/30 font-mono">hsl(240 4% 16%)</code>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="typography">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">03</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Type Scale</h2>
<p className="text-sm text-white/40 max-w-lg">Inter typeface across the full scale. Titles above 20px use tracking-tight. Weight hierarchy uses one level thinner than bold.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Display &amp; Headings</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] divide-y divide-white/[0.04]">
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-6xl font-semibold tracking-tight leading-none">Display</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-6xl</code>
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">font-semibold</code>
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">tracking-tight</code>
<span className="text-[10px] text-white/20">60px / 600</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-5xl font-semibold tracking-tight leading-none">Heading 1</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-5xl</code>
<span className="text-[10px] text-white/20">48px / 600</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-4xl font-semibold tracking-tight leading-none">Heading 2</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-4xl</code>
<span className="text-[10px] text-white/20">36px / 600</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-3xl font-semibold tracking-tight leading-none">Heading 3</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-3xl</code>
<span className="text-[10px] text-white/20">30px / 600</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-2xl font-semibold tracking-tight leading-none">Heading 4</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-2xl</code>
<span className="text-[10px] text-white/20">24px / 600</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-xl font-semibold tracking-tight leading-none">Heading 5</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-xl</code>
<span className="text-[10px] text-white/20">20px / 600</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<span className="text-lg font-medium leading-none">Heading 6</span>
<div className="flex items-center gap-4">
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">text-lg</code>
<code className="text-[10px] text-white/25 font-mono bg-white/[0.03] px-2 py-1 rounded">font-medium</code>
<span className="text-[10px] text-white/20">18px / 500</span>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Body &amp; UI Text</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] divide-y divide-white/[0.04]">
<div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
<p className="text-lg text-white/70 leading-relaxed">Large body text for introductions and lead paragraphs.</p>
<span className="text-[10px] text-white/20 whitespace-nowrap">text-lg · 18px · leading-relaxed</span>
</div>
<div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
<p className="text-base text-white/60 leading-relaxed">Default body text for general content and descriptions.</p>
<span className="text-[10px] text-white/20 whitespace-nowrap">text-base · 16px · white/60</span>
</div>
<div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
<p className="text-sm text-white/50">Small text for secondary information and captions.</p>
<span className="text-[10px] text-white/20 whitespace-nowrap">text-sm · 14px · white/50</span>
</div>
<div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
<p className="text-xs text-white/40">Extra small for metadata, labels, timestamps.</p>
<span className="text-[10px] text-white/20 whitespace-nowrap">text-xs · 12px · white/40</span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Font Weights</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-2">
<span className="text-2xl font-light tracking-tight">Aa</span>
<p className="text-xs text-white/40">Light · 300</p>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-2">
<span className="text-2xl font-normal tracking-tight">Aa</span>
<p className="text-xs text-white/40">Regular · 400</p>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-2">
<span className="text-2xl font-medium tracking-tight">Aa</span>
<p className="text-xs text-white/40">Medium · 500</p>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-2">
<span className="text-2xl font-semibold tracking-tight">Aa</span>
<p className="text-xs text-white/40">Semibold · 600</p>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-2">
<span className="text-2xl font-bold tracking-tight">Aa</span>
<p className="text-xs text-white/40">Bold · 700</p>
</div>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="components">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">04</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Component Library</h2>
<p className="text-sm text-white/40 max-w-lg">Production-ready UI components. Buttons, inputs, badges, cards, toggles, and data display elements.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Buttons</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 md:p-8 space-y-6">
<div>
<p className="text-xs text-white/30 mb-3">Primary</p>
<div className="flex flex-wrap items-center gap-3">
<button className="bg-white text-[#09090b] text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-all">Default</button>
<button className="bg-white/90 text-[#09090b] text-sm font-medium px-4 py-2 rounded-lg">Hover</button>
<button className="bg-white/50 text-[#09090b]/60 text-sm font-medium px-4 py-2 rounded-lg cursor-not-allowed">Disabled</button>
<button className="bg-white text-[#09090b] text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2">
<iconify-icon height="16" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                With Icon
                            </button>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Secondary</p>
<div className="flex flex-wrap items-center gap-3">
<button className="bg-white/[0.06] text-white text-sm font-medium px-4 py-2 rounded-lg border border-white/[0.08] hover:bg-white/10 transition-all">Default</button>
<button className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg border border-white/[0.08]">Hover</button>
<button className="bg-white/[0.03] text-white/30 text-sm font-medium px-4 py-2 rounded-lg border border-white/[0.04] cursor-not-allowed">Disabled</button>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Ghost</p>
<div className="flex flex-wrap items-center gap-3">
<button className="text-white/60 text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">Default</button>
<button className="text-white text-sm font-medium px-4 py-2 rounded-lg bg-white/5">Hover</button>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Danger / Accent</p>
<div className="flex flex-wrap items-center gap-3">
<button className="bg-[#ef4444] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#ef4444]/90 transition-all">Destructive</button>
<button className="bg-[#6366f1] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#6366f1]/90 transition-all">Accent</button>
<button className="bg-[#10b981] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#10b981]/90 transition-all">Success</button>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Sizes</p>
<div className="flex flex-wrap items-center gap-3">
<button className="bg-white text-[#09090b] text-xs font-medium px-2.5 py-1 rounded-md">XS</button>
<button className="bg-white text-[#09090b] text-xs font-medium px-3 py-1.5 rounded-md">Small</button>
<button className="bg-white text-[#09090b] text-sm font-medium px-4 py-2 rounded-lg">Medium</button>
<button className="bg-white text-[#09090b] text-sm font-medium px-5 py-2.5 rounded-lg">Large</button>
<button className="bg-white text-[#09090b] text-base font-medium px-6 py-3 rounded-xl">XL</button>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Icon Buttons</p>
<div className="flex flex-wrap items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/10 transition-all">
<iconify-icon height="16" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/10 transition-all">
<iconify-icon height="16" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#09090b] hover:bg-white/90 transition-all">
<iconify-icon height="18" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20 transition-all">
<iconify-icon height="16" icon="solar:trash-bin-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Inputs</h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-white/60">Default Input</label>
<input className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all" placeholder="Enter text..." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-white/60">With Icon</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" height="16" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg pl-9 pr-3.5 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all" placeholder="Search..." type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-white/60">Error State</label>
<input className="w-full bg-[#ef4444]/5 border border-[#ef4444]/30 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none transition-all" type="text" value="Invalid value"/>
<p className="text-[10px] text-[#ef4444]">This field is required</p>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-white/30">Disabled</label>
<input className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-3.5 py-2 text-sm text-white/20 placeholder-white/15 cursor-not-allowed" disabled="" placeholder="Disabled..." type="text"/>
</div>
</div>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-white/60">Select</label>
<div className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2 text-sm text-white/40 flex items-center justify-between cursor-pointer hover:border-white/15 transition-all">
<span>Choose option...</span>
<iconify-icon className="text-white/30" height="14" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-white/60">Textarea</label>
<textarea className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all resize-none" placeholder="Enter description..." rows="3"></textarea>
</div>
<div className="space-y-3">
<label className="text-xs font-medium text-white/60">Toggles</label>
<div className="flex items-center gap-3">
<div className="w-10 h-[22px] rounded-full bg-white/10 relative cursor-pointer">
<div className="w-[18px] h-[18px] rounded-full bg-white/50 absolute top-[2px] left-[2px]"></div>
</div>
<span className="text-xs text-white/40">Off</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-[22px] rounded-full bg-[#6366f1] relative cursor-pointer">
<div className="w-[18px] h-[18px] rounded-full bg-white absolute top-[2px] right-[2px]"></div>
</div>
<span className="text-xs text-white/40">On</span>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-medium text-white/60">Checkboxes</label>
<div className="flex items-center gap-3">
<div className="w-4.5 h-4.5 w-[18px] h-[18px] rounded border border-white/15 bg-white/[0.03]"></div>
<span className="text-xs text-white/50">Unchecked</span>
</div>
<div className="flex items-center gap-3">
<div className="w-[18px] h-[18px] rounded bg-[#6366f1] flex items-center justify-center">
<iconify-icon className="text-white" height="12" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-xs text-white/50">Checked</span>
</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Badges &amp; Tags</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 md:p-8 space-y-6">
<div>
<p className="text-xs text-white/30 mb-3">Status</p>
<div className="flex flex-wrap gap-2.5">
<span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.06] text-white/60">
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>Default
                            </span>
<span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-[#6366f1]/15 text-[#818cf8]">
<span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"></span>In Progress
                            </span>
<span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399]">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>Complete
                            </span>
<span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-[#f59e0b]/15 text-[#fbbf24]">
<span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>Warning
                            </span>
<span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-[#ef4444]/15 text-[#f87171]">
<span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>Error
                            </span>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Priority</p>
<div className="flex flex-wrap gap-2.5">
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#ef4444]/15 text-[#f87171] border border-[#ef4444]/20">Urgent</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#f59e0b]/15 text-[#fbbf24] border border-[#f59e0b]/20">High</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/20">Medium</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.06] text-white/50 border border-white/[0.08]">Low</span>
</div>
</div>
<div>
<p className="text-xs text-white/30 mb-3">Labels</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#8b5cf6]/15 text-[#a78bfa]">Feature</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#06b6d4]/15 text-[#22d3ee]">Bug</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#10b981]/15 text-[#34d399]">Enhancement</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#ec4899]/15 text-[#f472b6]">Design</span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#f59e0b]/15 text-[#fbbf24]">Docs</span>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Cards</h3>
<div className="grid md:grid-cols-3 gap-4">
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-3">
<div className="w-9 h-9 rounded-lg bg-[#6366f1]/15 flex items-center justify-center">
<iconify-icon className="text-[#818cf8]" height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h4 className="text-sm font-medium">Default Card</h4>
<p className="text-xs text-white/40 leading-relaxed">Subtle background with border. Standard container for content.</p>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-3 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer group">
<div className="w-9 h-9 rounded-lg bg-[#10b981]/15 flex items-center justify-center">
<iconify-icon className="text-[#34d399]" height="18" icon="solar:cursor-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h4 className="text-sm font-medium group-hover:text-[#34d399] transition-colors">Interactive Card</h4>
<p className="text-xs text-white/40 leading-relaxed">Hover to see the transition effect on background and border.</p>
</div>
<div className="rounded-xl p-5 space-y-3 relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))'}}>
<div className="absolute inset-0 rounded-xl border border-white/[0.08]"></div>
<div className="relative">
<div className="w-9 h-9 rounded-lg bg-[#8b5cf6]/15 flex items-center justify-center">
<iconify-icon className="text-[#a78bfa]" height="18" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h4 className="text-sm font-medium mt-3">Gradient Card</h4>
<p className="text-xs text-white/40 leading-relaxed mt-1">Subtle gradient background for featured content.</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Data Table</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] overflow-hidden">
<table className="w-full">
<thead>
<tr className="border-b border-white/[0.06]">
<th className="text-left text-[10px] font-medium text-white/30 uppercase tracking-wider px-5 py-3">Issue</th>
<th className="text-left text-[10px] font-medium text-white/30 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Status</th>
<th className="text-left text-[10px] font-medium text-white/30 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Priority</th>
<th className="text-left text-[10px] font-medium text-white/30 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Assignee</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3"><div className="flex items-center gap-2.5"><span className="text-[10px] text-white/25 font-mono">ENG-401</span><span className="text-xs">Fix auth token refresh</span></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#6366f1]/15 text-[#818cf8]"><span className="w-1 h-1 rounded-full bg-[#6366f1]"></span>In Progress</span></td>
<td className="px-5 py-3 hidden lg:table-cell"><span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#ef4444]/15 text-[#f87171]">Urgent</span></td>
<td className="px-5 py-3 hidden lg:table-cell"><div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-[10px] font-medium">J</div></td>
</tr>
<tr className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3"><div className="flex items-center gap-2.5"><span className="text-[10px] text-white/25 font-mono">ENG-402</span><span className="text-xs">Update sidebar nav</span></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#10b981]/15 text-[#34d399]"><span className="w-1 h-1 rounded-full bg-[#10b981]"></span>Done</span></td>
<td className="px-5 py-3 hidden lg:table-cell"><span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/[0.06] text-white/40">Low</span></td>
<td className="px-5 py-3 hidden lg:table-cell"><div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#10b981] to-[#06b6d4] flex items-center justify-center text-[10px] font-medium">M</div></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3"><div className="flex items-center gap-2.5"><span className="text-[10px] text-white/25 font-mono">ENG-403</span><span className="text-xs">Add CSV export</span></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-white/50"><span className="w-1 h-1 rounded-full bg-white/30"></span>Backlog</span></td>
<td className="px-5 py-3 hidden lg:table-cell"><span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#6366f1]/15 text-[#818cf8]">Medium</span></td>
<td className="px-5 py-3 hidden lg:table-cell"><div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center text-[10px] font-medium">A</div></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="pricing">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">05</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Pricing Components</h2>
<p className="text-sm text-white/40 max-w-lg">Pricing card patterns with tier differentiation, feature lists, and call-to-action hierarchy.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 flex flex-col">
<div className="mb-6">
<p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Free</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">$0</span>
<span className="text-sm text-white/30">/month</span>
</div>
<p className="text-xs text-white/40 mt-2">For individuals and small projects</p>
</div>
<div className="flex-1 space-y-3 mb-6">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Up to 3 projects</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Basic analytics</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Community support</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/15" height="16" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/25">Custom domains</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/15" height="16" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/25">Priority support</span>
</div>
</div>
<button className="w-full bg-white/[0.06] text-white text-sm font-medium py-2.5 rounded-lg border border-white/[0.08] hover:bg-white/10 transition-all">Get Started</button>
</div>

<div className="rounded-2xl p-6 flex flex-col relative overflow-hidden" style={{background: 'linear-gradient(180deg, rgba(99,102,241,0.08) 0%, rgba(9,9,11,1) 100%)'}}>
<div className="absolute inset-0 rounded-2xl border border-[#6366f1]/30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px" style={{background: 'linear-gradient(90deg, transparent, #6366f1, transparent)'}}></div>
<div className="relative flex-1 flex flex-col">
<div className="mb-6">
<div className="flex items-center gap-2 mb-4">
<p className="text-xs font-medium text-[#818cf8] uppercase tracking-wider">Pro</p>
<span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#6366f1]/20 text-[#818cf8]">Popular</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">$19</span>
<span className="text-sm text-white/30">/month</span>
</div>
<p className="text-xs text-white/40 mt-2">For growing teams and businesses</p>
</div>
<div className="flex-1 space-y-3 mb-6">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#818cf8]" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/60">Unlimited projects</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#818cf8]" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/60">Advanced analytics</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#818cf8]" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/60">Custom domains</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#818cf8]" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/60">Priority support</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/15" height="16" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/25">SSO &amp; SAML</span>
</div>
</div>
<button className="w-full bg-white text-[#09090b] text-sm font-medium py-2.5 rounded-lg hover:bg-white/90 transition-all">Upgrade to Pro</button>
</div>
</div>

<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 flex flex-col">
<div className="mb-6">
<p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Enterprise</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">Custom</span>
</div>
<p className="text-xs text-white/40 mt-2">For large organizations at scale</p>
</div>
<div className="flex-1 space-y-3 mb-6">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Everything in Pro</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">SSO &amp; SAML</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Dedicated support</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Custom SLA</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-white/50">Audit logs</span>
</div>
</div>
<button className="w-full bg-white/[0.06] text-white text-sm font-medium py-2.5 rounded-lg border border-white/[0.08] hover:bg-white/10 transition-all">Contact Sales</button>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="gradients">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">06</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Gradients &amp; Shimmer</h2>
<p className="text-sm text-white/40 max-w-lg">Linear, radial, and animated gradient patterns. Includes shimmer loading states and glow effects.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Linear Gradients</h3>
<div className="grid md:grid-cols-3 gap-4">
<div className="space-y-2.5">
<div className="h-28 rounded-xl" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}></div>
<p className="text-xs font-medium">Indigo → Violet</p>
<code className="text-[10px] text-white/25 font-mono">135deg · #6366f1 → #8b5cf6</code>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl" style={{background: 'linear-gradient(135deg, #3b82f6, #06b6d4)'}}></div>
<p className="text-xs font-medium">Blue → Cyan</p>
<code className="text-[10px] text-white/25 font-mono">135deg · #3b82f6 → #06b6d4</code>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl" style={{background: 'linear-gradient(135deg, #10b981, #06b6d4)'}}></div>
<p className="text-xs font-medium">Emerald → Cyan</p>
<code className="text-[10px] text-white/25 font-mono">135deg · #10b981 → #06b6d4</code>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl" style={{background: 'linear-gradient(135deg, #f59e0b, #ef4444)'}}></div>
<p className="text-xs font-medium">Amber → Red</p>
<code className="text-[10px] text-white/25 font-mono">135deg · #f59e0b → #ef4444</code>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl" style={{background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'}}></div>
<p className="text-xs font-medium">Pink → Violet</p>
<code className="text-[10px] text-white/25 font-mono">135deg · #ec4899 → #8b5cf6</code>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl" style={{background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)'}}></div>
<p className="text-xs font-medium">Surface Gradient</p>
<code className="text-[10px] text-white/25 font-mono">Subtle elevation</code>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Radial &amp; Glow</h3>
<div className="grid md:grid-cols-3 gap-4">
<div className="space-y-2.5">
<div className="h-28 rounded-xl border border-white/[0.06]" style={{background: 'radial-gradient(ellipse at top, rgba(99,102,241,0.2) 0%, transparent 60%)'}}></div>
<p className="text-xs font-medium">Top Glow — Indigo</p>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl border border-white/[0.06]" style={{background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 60%)'}}></div>
<p className="text-xs font-medium">Center Glow — Emerald</p>
</div>
<div className="space-y-2.5">
<div className="h-28 rounded-xl border border-white/[0.06]" style={{background: 'radial-gradient(circle at bottom right, rgba(236,72,153,0.15) 0%, transparent 60%)'}}></div>
<p className="text-xs font-medium">Corner Glow — Pink</p>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Shimmer &amp; Loading</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/[0.04] shimmer-bg"></div>
<div className="flex-1 space-y-2">
<div className="h-3 w-1/3 rounded bg-white/[0.04] shimmer-bg"></div>
<div className="h-2.5 w-2/3 rounded bg-white/[0.04] shimmer-bg"></div>
</div>
</div>
<div className="h-3 w-full rounded bg-white/[0.04] shimmer-bg"></div>
<div className="h-3 w-5/6 rounded bg-white/[0.04] shimmer-bg"></div>
<div className="h-3 w-4/6 rounded bg-white/[0.04] shimmer-bg"></div>
<p className="text-[10px] text-white/25 mt-2">Animated shimmer skeleton — 200% background-size, 2s ease-in-out infinite</p>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Gradient Text</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 space-y-6">
<p className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)'}}>Beautiful gradient text</p>
<p className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}>Flowing color transition</p>
<p className="text-lg font-medium bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #f59e0b, #ef4444)'}}>Warm accent gradient</p>
<code className="text-[10px] text-white/25 font-mono block">bg-clip-text · text-transparent · background-image: linear-gradient</code>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="shadows">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">07</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Shadows &amp; Depth</h2>
<p className="text-sm text-white/40 max-w-lg">Elevation system using box-shadows. On dark backgrounds, borders and subtle fills create depth more effectively than shadows alone.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Box Shadows</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8 rounded-2xl" style={{background: '#0f0f11'}}>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#18181b] border border-white/[0.06]" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.3)'}}></div>
<div>
<p className="text-xs text-white/50">sm</p>
<code className="text-[10px] text-white/20 font-mono">0 1px 2px</code>
</div>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#18181b] border border-white/[0.06]" style={{boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)'}}></div>
<div>
<p className="text-xs text-white/50">md</p>
<code className="text-[10px] text-white/20 font-mono">0 4px 6px</code>
</div>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#18181b] border border-white/[0.06]" style={{boxShadow: '0 10px 15px -3px rgba(0,0,0,0.4)'}}></div>
<div>
<p className="text-xs text-white/50">lg</p>
<code className="text-[10px] text-white/20 font-mono">0 10px 15px</code>
</div>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#18181b] border border-white/[0.06]" style={{boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'}}></div>
<div>
<p className="text-xs text-white/50">xl</p>
<code className="text-[10px] text-white/20 font-mono">0 20px 25px</code>
</div>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#18181b] border border-white/[0.06]" style={{boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)'}}></div>
<div>
<p className="text-xs text-white/50">2xl</p>
<code className="text-[10px] text-white/20 font-mono">0 25px 50px</code>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Colored Glow Shadows</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl" style={{background: '#0f0f11'}}>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#6366f1]" style={{boxShadow: '0 8px 32px rgba(99,102,241,0.4)'}}></div>
<p className="text-xs text-white/40">Indigo Glow</p>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#10b981]" style={{boxShadow: '0 8px 32px rgba(16,185,129,0.4)'}}></div>
<p className="text-xs text-white/40">Emerald Glow</p>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#ef4444]" style={{boxShadow: '0 8px 32px rgba(239,68,68,0.4)'}}></div>
<p className="text-xs text-white/40">Red Glow</p>
</div>
<div className="text-center space-y-4">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#f59e0b]" style={{boxShadow: '0 8px 32px rgba(245,158,11,0.4)'}}></div>
<p className="text-xs text-white/40">Amber Glow</p>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Elevation Layers</h3>
<div className="relative p-8 rounded-2xl" style={{background: '#0c0c0e'}}>
<div className="flex items-end justify-center gap-6">
<div className="text-center space-y-3">
<div className="w-24 h-16 rounded-lg border border-white/[0.04]" style={{background: '#09090b'}}></div>
<p className="text-[10px] text-white/30">Level 0<br/>Base</p>
</div>
<div className="text-center space-y-3">
<div className="w-24 h-20 rounded-lg border border-white/[0.06]" style={{background: '#111113'}}></div>
<p className="text-[10px] text-white/30">Level 1<br/>Surface</p>
</div>
<div className="text-center space-y-3">
<div className="w-24 h-24 rounded-lg border border-white/[0.08]" style={{background: '#18181b'}}></div>
<p className="text-[10px] text-white/30">Level 2<br/>Elevated</p>
</div>
<div className="text-center space-y-3">
<div className="w-24 h-28 rounded-lg border border-white/10" style={{background: '#1f1f23', boxShadow: '0 8px 32px rgba(0,0,0,0.5)'}}></div>
<p className="text-[10px] text-white/30">Level 3<br/>Overlay</p>
</div>
</div>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="animations">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">08</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Animations &amp; Transitions</h2>
<p className="text-sm text-white/40 max-w-lg">Motion primitives for entrances, emphasis, and state transitions. All animations use ease-out for natural deceleration.</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Entrance Animations</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#6366f1]/20 flex items-center justify-center anim-fade-up" id="demo1">
<iconify-icon className="text-[#818cf8]" height="18" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Fade Up</p>
<code className="text-[10px] text-white/20 font-mono block">0.5s ease-out</code>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#10b981]/20 flex items-center justify-center anim-fade-in">
<iconify-icon className="text-[#34d399]" height="18" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Fade In</p>
<code className="text-[10px] text-white/20 font-mono block">0.4s ease-out</code>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#f59e0b]/20 flex items-center justify-center anim-scale-in">
<iconify-icon className="text-[#fbbf24]" height="18" icon="solar:maximize-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Scale In</p>
<code className="text-[10px] text-white/20 font-mono block">0.3s ease-out</code>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#3b82f6]/20 flex items-center justify-center anim-slide-right">
<iconify-icon className="text-[#60a5fa]" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Slide Right</p>
<code className="text-[10px] text-white/20 font-mono block">0.4s ease-out</code>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#ec4899]/20 flex items-center justify-center anim-slide-left">
<iconify-icon className="text-[#f472b6]" height="18" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Slide Left</p>
<code className="text-[10px] text-white/20 font-mono block">0.4s ease-out</code>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Looping / Emphasis</h3>
<div className="grid grid-cols-3 md:grid-cols-3 gap-4">
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#6366f1]/20 flex items-center justify-center anim-pulse">
<iconify-icon className="text-[#818cf8]" height="18" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Pulse</p>
<code className="text-[10px] text-white/20 font-mono block">2s ease-in-out infinite</code>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#10b981]/20 flex items-center justify-center">
<iconify-icon className="text-[#34d399] anim-spin" height="18" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Spin</p>
<code className="text-[10px] text-white/20 font-mono block">3s linear infinite</code>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 text-center space-y-4">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#f59e0b]/20 flex items-center justify-center anim-bounce">
<iconify-icon className="text-[#fbbf24]" height="18" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40">Bounce</p>
<code className="text-[10px] text-white/20 font-mono block">2s ease-in-out infinite</code>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Transition Properties</h3>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] divide-y divide-white/[0.04]">
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center">
<div className="w-3 h-3 rounded-sm bg-white/30"></div>
</div>
<span className="text-xs">transition-colors</span>
</div>
<code className="text-[10px] text-white/25 font-mono">color, background-color, border-color · 150ms</code>
</div>
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-md bg-white/5 hover:opacity-50 transition-opacity cursor-pointer flex items-center justify-center">
<div className="w-3 h-3 rounded-sm bg-white/30"></div>
</div>
<span className="text-xs">transition-opacity</span>
</div>
<code className="text-[10px] text-white/25 font-mono">opacity · 150ms</code>
</div>
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-md bg-white/5 hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
<div className="w-3 h-3 rounded-sm bg-white/30"></div>
</div>
<span className="text-xs">transition-transform</span>
</div>
<code className="text-[10px] text-white/25 font-mono">transform · 150ms</code>
</div>
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer flex items-center justify-center">
<div className="w-3 h-3 rounded-sm bg-white/30"></div>
</div>
<span className="text-xs">transition-all</span>
</div>
<code className="text-[10px] text-white/25 font-mono">all properties · 150ms</code>
</div>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="spacing">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">09</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Spacing Scale</h2>
<p className="text-sm text-white/40 max-w-lg">4px base unit spacing system. Used for padding, margin, gap, and all spatial relationships.</p>
</div>
<div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] divide-y divide-white/[0.04]">
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">0.5</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/40" style={{width: '2px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">2px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">1</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/40" style={{width: '4px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">4px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">1.5</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/40" style={{width: '6px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">6px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">2</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/50" style={{width: '8px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">8px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">3</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/50" style={{width: '12px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">12px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">4</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/60" style={{width: '16px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">16px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">5</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/60" style={{width: '20px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">20px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">6</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/70" style={{width: '24px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">24px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">8</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/70" style={{width: '32px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">32px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">10</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/80" style={{width: '40px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">40px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">12</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/80" style={{width: '48px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">48px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">16</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]/90" style={{width: '64px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">64px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">20</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]" style={{width: '80px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">80px</span>
</div>
<div className="flex items-center gap-6 px-6 py-3">
<code className="text-[10px] text-white/30 font-mono w-12">24</code>
<div className="flex-1"><div className="h-3 rounded-sm bg-[#6366f1]" style={{width: '96px'}}></div></div>
<span className="text-[10px] text-white/20 w-12 text-right">96px</span>
</div>
</div>
</section>



<section className="py-20 border-b border-white/[0.06]" id="layout">
<div className="mb-12">
<p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">10</p>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Grid &amp; Flex Systems</h2>
<p className="text-sm text-white/40 max-w-lg">Layout primitives using CSS Grid and Flexbox. Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px).</p>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Grid Columns</h3>
<div className="space-y-4">
<div>
<p className="text-[10px] text-white/25 mb-2">1 Column</p>
<div className="grid grid-cols-1 gap-2">
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
</div>
</div>
<div>
<p className="text-[10px] text-white/25 mb-2">2 Columns</p>
<div className="grid grid-cols-2 gap-2">
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
</div>
</div>
<div>
<p className="text-[10px] text-white/25 mb-2">3 Columns</p>
<div className="grid grid-cols-3 gap-2">
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
</div>
</div>
<div>
<p className="text-[10px] text-white/25 mb-2">4 Columns</p>
<div className="grid grid-cols-4 gap-2">
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
</div>
</div>
<div>
<p className="text-[10px] text-white/25 mb-2">6 Columns</p>
<div className="grid grid-cols-6 gap-2">
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-md bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
</div>
</div>
<div>
<p className="text-[10px] text-white/25 mb-2">12 Columns</p>
<div className="grid grid-cols-12 gap-1">
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
<div className="h-8 rounded-sm bg-[#6366f1]/20 border border-[#6366f1]/20"></div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-5">Flex Patterns</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-3">
<p className="text-[10px] text-white/30 font-mono">flex items-center justify-between</p>
<div className="flex items-center justify-between bg-white/[0.03] rounded-lg p-3">
<div className="w-8 h-8 rounded bg-[#10b981]/20 border border-[#10b981]/20"></div>
<div className="w-8 h-8 rounded bg-[#10b981]/20 border border-[#10b981]/20"></div>
<div className="w-8 h-8 rounded bg-[#10b981]/20 border border-[#10b981]/20"></div>
</div>
</div>
<div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-5 space-y-3">
<p className="text-[10px] text-white/30 font-mono">flex items-center gap-3</p></div></div></div></section></main>
    </>
  );
}
