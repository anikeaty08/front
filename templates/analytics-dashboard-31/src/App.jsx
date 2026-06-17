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



  // Initialize Lucide icons with specific stroke width
  lucide.createIcons({
    attrs: {
      'stroke-width': 1.5
    }
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
      

<nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
<div className="container mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-gradient flex items-center gap-2 text-xl font-medium tracking-tight font-outfit" href="#">SizoAI</a>
<div className="hidden md:flex items-center gap-6 text-[var(--text-2)]">
<a className="hover:text-[var(--text)] transition-colors" href="#">Launch Products</a>
<a className="text-[var(--text)]" href="#">Analytics</a>
<a className="hover:text-[var(--text)] transition-colors" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="btn btn-primary">Get Started</button>
</div>
</div>
</nav>
<main className="container mr-auto ml-auto pt-8 pr-6 pb-24 pl-6 space-y-6">

<header className="mb-8">
<a className="inline-flex items-center gap-2 text-xs text-[var(--text-3)] hover:text-[var(--text)] transition-colors mb-4 uppercase tracking-wider" href="#">
<i className="w-3 h-3" data-lucide="arrow-left"></i> Back
    </a>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-3xl font-normal tracking-tight mb-1 text-white">The Complete Snowboard</h1>
<p className="text-xs text-[var(--text-3)] uppercase tracking-widest font-mono">Analysis &amp; Velocity</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="btn btn-primary">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
        </button>
<button className="btn btn-ghost border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10">
<i className="w-4 h-4" data-lucide="refresh-cw"></i> Sync Active
        </button>
</div>
</div>
</header>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<section className="glass-panel p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<i className="w-4 h-4 text-blue-400" data-lucide="pie-chart"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight">Restock Mix</h2>
<p className="text-xs text-[var(--text-3)] uppercase tracking-wider">Recommended Order Distribution</p>
</div>
</div>
<div className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="alert-triangle"></i> Building +38% Noise
          </div>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 py-4">

<div className="relative w-32 h-32 rounded-full flex-shrink-0" style={{background: 'conic-gradient(var(--blue) 0% 98%, var(--surface-2) 98% 100%)'}}>
<div className="absolute inset-0 rounded-full border border-[var(--border)]"></div>
<div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-[var(--bg)] -translate-x-1/2 origin-bottom rotate-0"></div>
</div>
<div className="flex-1 w-full space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-blue-500/30 transition-colors">
<div className="flex items-center gap-3 text-sm">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="font-normal">The Complete Snowboard - Sunset</span>
</div>
<div className="font-mono text-sm">
                1.0 <span className="text-xs text-[var(--text-3)] ml-1">(100%)</span>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="p-3 rounded-md bg-amber-500/5 border border-amber-500/10 text-amber-200/70 text-xs flex gap-2">
<i className="w-4 h-4 text-amber-500/70 flex-shrink-0" data-lucide="alert-circle"></i>
<p>The Complete Snowboard - Ice, The Complete Snowboard - Dawn, The Complete Snowboard - Powder, The Complete Snowboard - Electric Excluded</p>
</div>
<div className="p-4 rounded-md bg-[var(--surface)] border border-[var(--border-2)] text-xs flex flex-col gap-2 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
<div className="flex items-center gap-2 font-medium text-[var(--text)]">
<i className="w-4 h-4 text-blue-400" data-lucide="anchor"></i> Anchor: The Complete Snowboard - Sunset — 7 Sales - ±38% Noise
            </div>
<p className="text-[var(--text-3)] ml-6">Use for directional guidance only — the curve is still sensitive to new The Complete Snowboard - Sunset sales</p>
</div>
<p className="text-xs text-[var(--text-3)] flex items-center gap-2 mt-2">
<i className="w-3 h-3" data-lucide="git-merge"></i> General curve: <span className="text-[var(--text-2)] font-mono">±27% noise</span> · 14 total sales across 4 sizes
          </p>
</div>
</section>

<section className="glass-panel p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
<i className="w-4 h-4 text-cyan-400" data-lucide="zap"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight">Velocity &amp; Stockout</h2>
<p className="text-xs text-[var(--text-3)] uppercase tracking-wider">Growth Predictions</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[var(--border)]">
<div>
<div className="text-xs text-[var(--text-3)] uppercase tracking-wider mb-1">Sell Rate</div>
<div className="font-mono text-xl text-[var(--text)]">0.35</div>
<div className="text-xs text-[var(--text-3)]">Units/Day</div>
</div>
<div>
<div className="text-xs text-[var(--text-3)] uppercase tracking-wider mb-1">Days Left</div>
<div className="font-mono text-xl text-emerald-400">134</div>
<div className="text-xs text-[var(--text-3)]">Days</div>
</div>
<div>
<div className="text-xs text-[var(--text-3)] uppercase tracking-wider mb-1">Est. Stockout</div>
<div className="font-mono text-xl text-amber-400">Aug 5</div>
<div className="text-xs text-[var(--text-3)]">2026</div>
</div>
</div>
<div className="space-y-1">

<div className="flex items-center justify-between p-3 rounded hover:bg-[var(--surface)] transition-colors group">
<div className="flex items-center gap-3">
<img alt="Snowboard" className="w-8 h-8 rounded bg-[var(--surface-2)] object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=32&amp;h=32&amp;fit=crop&amp;q=80"/>
<span className="text-sm">The Complete Snowboard - Sunset</span>
</div>
<div className="flex items-center gap-6 text-right font-mono text-sm">
<div><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">STOCK</span>9</div>
<div className="text-blue-400"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">VELOCITY</span>0.17</div>
<div className="text-emerald-400"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">DAYS</span>~51d</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded hover:bg-[var(--surface)] transition-colors group">
<div className="flex items-center gap-3">
<img alt="Snowboard" className="w-8 h-8 rounded bg-[var(--surface-2)] object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=32&amp;h=32&amp;fit=crop&amp;q=80"/>
<span className="text-sm text-[var(--text-2)]">The Complete Snowboard - Ice</span>
</div>
<div className="flex items-center gap-6 text-right font-mono text-sm">
<div className="text-[var(--text-2)]"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">STOCK</span>9</div>
<div className="text-blue-400/80"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">VELOCITY</span>0.10</div>
<div className="text-emerald-400/80"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">DAYS</span>~90d</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded hover:bg-[var(--surface)] transition-colors group">
<div className="flex items-center gap-3">
<img alt="Snowboard" className="w-8 h-8 rounded bg-[var(--surface-2)] object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=32&amp;h=32&amp;fit=crop&amp;q=80"/>
<span className="text-sm text-[var(--text-2)]">The Complete Snowboard - Powder</span>
</div>
<div className="flex items-center gap-6 text-right font-mono text-sm">
<div className="text-[var(--text-2)]"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">STOCK</span>9</div>
<div className="text-blue-400/60"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">VELOCITY</span>0.05</div>
<div className="text-emerald-400/60"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">DAYS</span>~180d</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded hover:bg-[var(--surface)] transition-colors group">
<div className="flex items-center gap-3">
<img alt="Snowboard" className="w-8 h-8 rounded bg-[var(--surface-2)] object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=32&amp;h=32&amp;fit=crop&amp;q=80"/>
<span className="text-sm text-[var(--text-2)]">The Complete Snowboard - Dawn</span>
</div>
<div className="flex items-center gap-6 text-right font-mono text-sm">
<div className="text-[var(--text-2)]"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">STOCK</span>10</div>
<div className="text-blue-400/40"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">VELOCITY</span>0.03</div>
<div className="text-emerald-400/40"><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">DAYS</span>~400d</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded hover:bg-[var(--surface)] transition-colors group">
<div className="flex items-center gap-3">
<img alt="Snowboard" className="w-8 h-8 rounded bg-[var(--surface-2)] object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=32&amp;h=32&amp;fit=crop&amp;q=80"/>
<span className="text-sm text-[var(--text-3)]">The Complete Snowboard - Electric</span>
</div>
<div className="flex items-center gap-6 text-right font-mono text-sm opacity-50">
<div><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">STOCK</span>10</div>
<div><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">VELOCITY</span>0.00</div>
<div><span className="text-[10px] text-[var(--text-3)] block leading-none mb-1">DAYS</span>∞</div>
</div>
</div>
</div>
</section>

<section className="glass-panel p-6 overflow-x-auto">
<div className="flex items-center gap-3 mb-6 min-w-[600px]">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="layout-grid"></i>
</div>
<h2 className="text-base font-normal tracking-tight">Size Performance</h2>
</div>
<div className="min-w-[600px]">

<div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-4 pb-3 border-b border-[var(--border)] text-xs text-[var(--text-3)] font-mono uppercase tracking-widest text-right">
<div className="text-left">Size</div>
<div>In</div>
<div>Sell</div>
<div>Rfd</div>
<div>Avail</div>
<div className="text-left pl-4">ST%</div>
<div>St.</div>
</div>

<div className="divide-y divide-[var(--border-2)]">
<div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-4 py-3 items-center text-sm font-mono hover:bg-[var(--surface)] transition-colors">
<div className="text-left font-sans text-[var(--text)] text-xs font-normal tracking-wide">THE COMPLETE SNOWBOARD - SUNSET</div>
<div className="text-right text-[var(--text-2)]">9</div>
<div className="text-right text-blue-400">7</div>
<div className="text-right text-rose-400">0</div>
<div className="text-right text-[var(--text)]">9</div>
<div className="flex items-center gap-3 pl-4">
<div className="h-1.5 flex-1 bg-[var(--surface-2)] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '44%'}}></div>
</div>
<span className="text-xs text-[var(--text-3)]">44%</span>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">OK</span>
</div>
</div>
<div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-4 py-3 items-center text-sm font-mono hover:bg-[var(--surface)] transition-colors">
<div className="text-left font-sans text-[var(--text-2)] text-xs font-normal tracking-wide">THE COMPLETE SNOWBOARD - ICE</div>
<div className="text-right text-[var(--text-2)]">9</div>
<div className="text-right text-blue-400">4</div>
<div className="text-right text-rose-400">0</div>
<div className="text-right text-[var(--text)]">9</div>
<div className="flex items-center gap-3 pl-4">
<div className="h-1.5 flex-1 bg-[var(--surface-2)] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '31%'}}></div>
</div>
<span className="text-xs text-[var(--text-3)]">31%</span>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">OK</span>
</div>
</div>
<div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-4 py-3 items-center text-sm font-mono hover:bg-[var(--surface)] transition-colors">
<div className="text-left font-sans text-[var(--text-2)] text-xs font-normal tracking-wide">THE COMPLETE SNOWBOARD - POWDER</div>
<div className="text-right text-[var(--text-2)]">9</div>
<div className="text-right text-blue-400">2</div>
<div className="text-right text-rose-400">0</div>
<div className="text-right text-[var(--text)]">9</div>
<div className="flex items-center gap-3 pl-4">
<div className="h-1.5 flex-1 bg-[var(--surface-2)] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '18%'}}></div>
</div>
<span className="text-xs text-[var(--text-3)]">18%</span>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">OK</span>
</div>
</div>
<div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-4 py-3 items-center text-sm font-mono hover:bg-[var(--surface)] transition-colors text-[var(--text-3)]">
<div className="text-left font-sans text-xs font-normal tracking-wide">THE COMPLETE SNOWBOARD - DAWN</div>
<div className="text-right">10</div>
<div className="text-right text-blue-400/50">1</div>
<div className="text-right">0</div>
<div className="text-right text-[var(--text)]">10</div>
<div className="flex items-center gap-3 pl-4">
<div className="h-1.5 flex-1 bg-[var(--surface-2)] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400/50" style={{width: '9%'}}></div>
</div>
<span className="text-xs text-[var(--text-3)]">9%</span>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">OK</span>
</div>
</div>
<div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1.5fr_1fr] gap-4 py-3 items-center text-sm font-mono hover:bg-[var(--surface)] transition-colors text-[var(--text-3)] opacity-50">
<div className="text-left font-sans text-xs font-normal tracking-wide">THE COMPLETE SNOWBOARD - ELECTRIC</div>
<div className="text-right">10</div>
<div className="text-right">0</div>
<div className="text-right">0</div>
<div className="text-right text-[var(--text)]">10</div>
<div className="flex items-center gap-3 pl-4">
<div className="h-1.5 flex-1 bg-[var(--surface-2)] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '0%'}}></div>
</div>
<span className="text-xs text-[var(--text-3)]">0%</span>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">OK</span>
</div>
</div>
</div>
</div>
</section>

<section className="glass-panel p-6">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<i className="w-4 h-4 text-emerald-400" data-lucide="map-pin"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight">Location Inventory</h2>
<p className="text-xs text-[var(--text-3)] uppercase tracking-wider">Stock Distribution</p>
</div>
</div>
<div className="text-right">
<div className="text-xs text-[var(--text-3)] uppercase tracking-wider mb-1">Active Node</div>
<div className="text-sm font-medium">Shop location</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="md:col-start-4 text-right">
<div className="flex justify-end gap-6 font-mono">
<div>
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Stock</div>
<div className="text-lg text-blue-400">35</div>
</div>
<div>
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Days</div>
<div className="text-lg text-emerald-400">100</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
<div className="flex justify-between items-end pb-2 border-b border-[var(--border-2)]">
<div className="text-xs text-[var(--text-2)] tracking-wide">THE COMPLETE SNOWBOARD - ICE</div>
<div className="text-right font-mono text-sm">
<div className="text-emerald-400 text-xs mb-1">411d</div>
<div className="text-[var(--text)]">6</div>
</div>
</div>
<div className="flex justify-between items-end pb-2 border-b border-[var(--border-2)]">
<div className="text-xs text-[var(--text-2)] tracking-wide">THE COMPLETE SNOWBOARD - DAWN</div>
<div className="text-right font-mono text-sm">
<div className="text-emerald-400 text-xs mb-1">548d</div>
<div className="text-[var(--text)]">8</div>
</div>
</div>
<div className="flex justify-between items-end pb-2 border-b border-[var(--border-2)]">
<div className="text-xs text-[var(--text-2)] tracking-wide">THE COMPLETE SNOWBOARD - POWDER</div>
<div className="text-right font-mono text-sm">
<div className="text-emerald-400 text-xs mb-1">548d</div>
<div className="text-[var(--text)]">8</div>
</div>
</div>
<div className="flex justify-between items-end pb-2 border-b border-[var(--border-2)]">
<div className="text-xs text-[var(--text-2)] tracking-wide">THE COMPLETE SNOWBOARD - ELECTRIC</div>
<div className="text-right font-mono text-sm">
<div className="text-emerald-400 text-xs mb-1">685d</div>
<div className="text-[var(--text)]">10</div>
</div>
</div>
<div className="flex justify-between items-end pb-2 border-b border-[var(--border-2)]">
<div className="text-xs text-[var(--text-2)] tracking-wide">THE COMPLETE SNOWBOARD - SUNSET</div>
<div className="text-right font-mono text-sm">
<div className="text-emerald-400 text-xs mb-1">205d</div>
<div className="text-[var(--text)]">3</div>
</div>
</div>
</div>
</section>

<section className="glass-panel p-6">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<i className="w-4 h-4 text-blue-400" data-lucide="history"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight">Period-Based Demand</h2>
<p className="text-xs text-[var(--text-3)] uppercase tracking-wider">Historical Sales Velocity Analysis</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
<div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[var(--surface-2)] border border-[var(--border)] text-xs font-mono mb-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> P1
            </div>
<h3 className="text-sm font-medium">INITIAL LAUNCH</h3>
<p className="text-xs text-[var(--text-3)] mt-1">2/10/2026 → Now (40d)</p>
</div>
<div className="flex gap-6 text-right font-mono">
<div>
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Sold</div>
<div className="text-xl text-[var(--text)]">14</div>
</div>
<div>
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Initial</div>
<div className="text-xl text-[var(--text)]">47</div>
</div>
<div>
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Rate</div>
<div className="text-xl text-blue-400">0.35</div>
</div>
<div>
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Refunds</div>
<div className="text-xl text-rose-400">0</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="text-center p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wide mb-2 truncate">The Complete Snowboard - Dawn</div>
<div className="font-mono text-lg">1</div>
</div>
<div className="text-center p-3 rounded border border-[var(--border)] bg-[var(--surface)] opacity-50">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wide mb-2 truncate">The Complete Snowboard - Electric</div>
<div className="font-mono text-lg">0</div>
</div>
<div className="text-center p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wide mb-2 truncate">The Complete Snowboard - Ice</div>
<div className="font-mono text-lg">4</div>
</div>
<div className="text-center p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wide mb-2 truncate">The Complete Snowboard - Powder</div>
<div className="font-mono text-lg">2</div>
</div>
<div className="text-center p-3 rounded border border-[var(--border)] bg-blue-500/5 border-blue-500/20 md:col-start-1">
<div className="text-[10px] text-blue-400 uppercase tracking-wide mb-2 truncate">The Complete Snowboard - Sunset</div>
<div className="font-mono text-lg text-blue-400">7</div>
</div>
</div>
<div className="pt-6 border-t border-[var(--border)]">
<p className="text-xs text-[var(--text-3)] uppercase tracking-wider mb-6">Recommended Ratio (P1)</p>
<div className="flex items-center gap-8">
<div className="relative w-24 h-24 rounded-full flex-shrink-0" style={{background: 'conic-gradient(var(--blue) 0% 100%)'}}>
<div className="absolute inset-0 rounded-full border border-[var(--border)]"></div>
<div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-[var(--bg)] -translate-x-1/2 origin-bottom rotate-0"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
<div className="flex items-center gap-3 text-sm">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="font-normal text-[var(--text-2)]">The Complete Snowboard - Sunset</span>
</div>
<div className="font-mono text-sm">
                  1.0 <span className="text-xs text-[var(--text-3)] ml-1">(100%)</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="xl:col-span-1 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-5">
<div className="flex items-center gap-2 text-xs text-[var(--text-3)] uppercase tracking-wider mb-2">
<i className="w-3 h-3 text-blue-400" data-lucide="shopping-cart"></i> Total Sold
          </div>
<div className="font-mono text-3xl font-light text-[var(--text)]">14 <span className="text-xs text-[var(--text-3)] uppercase">Units</span></div>
</div>
<div className="glass-panel p-5 relative overflow-hidden">
<div className="absolute right-0 top-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full blur-xl"></div>
<div className="flex items-center gap-2 text-xs text-[var(--text-3)] uppercase tracking-wider mb-2">
<i className="w-3 h-3 text-emerald-400" data-lucide="trending-up"></i> Sell-Through
          </div>
<div className="font-mono text-2xl font-light text-emerald-400 mt-1">23.0%</div>
</div>
<div className="glass-panel p-5">
<div className="flex items-center gap-2 text-xs text-[var(--text-3)] uppercase tracking-wider mb-2">
<i className="w-3 h-3 text-amber-400" data-lucide="calendar"></i> Days Tracked
          </div>
<div className="font-mono text-3xl font-light text-amber-400">40 <span className="text-xs text-[var(--text-3)] uppercase">Days</span></div>
</div>
<div className="glass-panel p-5 relative overflow-hidden">
<div className="absolute right-0 top-0 w-16 h-16 bg-blue-500/10 rounded-bl-full blur-xl"></div>
<div className="flex items-center gap-2 text-xs text-[var(--text-3)] uppercase tracking-wider mb-3">
<i className="w-3 h-3 text-blue-400" data-lucide="star"></i> Best Size
          </div>
<div className="text-sm font-medium text-blue-400 uppercase tracking-wide leading-tight">The Complete Snowboard - Sunset</div>
</div>
</div>

<section className="glass-panel p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
<i className="w-4 h-4 text-rose-400" data-lucide="package-minus"></i>
</div>
<h2 className="text-base font-normal tracking-tight uppercase tracking-wider">Refund Analysis</h2>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-[var(--surface)] border border-rose-500/10 rounded-lg p-4 text-center">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Total Refunded</div>
<div className="font-mono text-2xl text-rose-400">0</div>
</div>
<div className="bg-[var(--surface)] border border-rose-500/10 rounded-lg p-4 text-center">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">Refund Rate</div>
<div className="font-mono text-2xl text-rose-400">0.0%</div>
</div>
</div>
<div className="text-center py-2 text-xs text-[var(--text-3)] bg-[var(--surface-2)] rounded-md border border-[var(--border)]">
          No refunds recorded
        </div>
</section>

<section className="glass-panel p-6 flex flex-col h-[300px]">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] flex items-center justify-center border border-[var(--border)]">
<i className="w-4 h-4 text-[var(--text-2)]" data-lucide="file-text"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight uppercase tracking-wider">Product Notes</h2>
<p className="text-[10px] text-[var(--text-3)] uppercase tracking-wider">Internal Findings &amp; Observations</p>
</div>
</div>
<button className="text-[10px] uppercase tracking-wider bg-[var(--surface)] border border-[var(--border-2)] px-3 py-1.5 rounded hover:bg-[var(--surface-2)] transition-colors text-[var(--text-2)]">
            Save Notes
          </button>
</div>
<textarea className="flex-1 w-full bg-[var(--bg)] border border-[var(--border-2)] rounded-lg p-4 text-sm text-[var(--text)] resize-none focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-[var(--text-3)]" placeholder="Add notes here...">Launched on 3/2/2026</textarea>
</section>

<section className="glass-panel p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] flex items-center justify-center border border-[var(--border)]">
<i className="w-4 h-4 text-blue-400" data-lucide="activity"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight uppercase tracking-wider">Product Timeline</h2>
<p className="text-[10px] text-[var(--text-3)] uppercase tracking-wider">Lifecycle Milestones</p>
</div>
</div>
<div className="relative flex justify-between items-start pt-2">

<div className="absolute top-6 left-6 right-6 h-[2px] bg-[var(--border-2)] -z-10"></div>

<div className="flex flex-col items-center gap-2 text-center w-1/3">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-[var(--bg)] shadow-[0_0_12px_rgba(16,185,129,0.4)]">
<i className="w-4 h-4" data-lucide="rocket"></i>
</div>
<div>
<div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text)]">Launch</div>
<div className="text-[10px] text-[var(--text-3)] font-mono">2/10/2026</div>
<div className="text-[9px] text-emerald-400 font-mono mt-0.5">Day 0</div>
</div>
</div>

<div className="flex flex-col items-center gap-2 text-center w-1/3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[var(--bg)] shadow-[0_0_12px_rgba(59,130,246,0.4)]">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<div>
<div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text)]">Added to App</div>
<div className="text-[10px] text-[var(--text-3)] font-mono">3/2/2026</div>
<div className="text-[9px] text-blue-400 font-mono mt-0.5">Day 20</div>
</div>
</div>

<div className="flex flex-col items-center gap-2 text-center w-1/3">
<div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<div>
<div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text)]">Today</div>
<div className="text-[10px] text-[var(--text-3)] font-mono">3/23/2026</div>
<div className="text-[9px] text-blue-400 font-mono mt-0.5">Day 40</div>
</div>
</div>
</div>
</section>
</div>
</div>


<section className="glass-panel p-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--border)]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="scales"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight uppercase tracking-wider">Order Planner</h2>
<p className="text-[10px] text-[var(--text-3)] uppercase tracking-wider">Compare your order vs recommendation</p>
</div>
</div>

<div className="flex p-1 bg-[var(--bg)] border border-[var(--border)] rounded-lg">
<button className="px-4 py-1.5 text-xs font-medium rounded-md bg-[var(--surface-2)] text-[var(--text)] shadow-sm">Quantities</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-md text-[var(--text-3)] hover:text-[var(--text)] transition-colors">Ratio</button>
</div>
</div>
<div className="text-center mb-4">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-2">The Complete Snowboard - Sunset</div>
<div className="font-mono text-sm">0</div>
</div>
<div className="h-32 rounded-xl bg-[var(--surface)] border border-dashed border-[var(--border-2)] flex flex-col items-center justify-center text-[var(--text-3)]">
<i className="w-6 h-6 mb-3 opacity-50" data-lucide="edit-3"></i>
<p className="text-xs max-w-sm text-center">Enter your planned order quantities per size to see how your mix compares to the recommendation</p>
</div>
</section>

<section className="glass-panel p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
<i className="w-4 h-4 text-cyan-400" data-lucide="flask-conical"></i>
</div>
<div>
<h2 className="text-base font-normal tracking-tight uppercase tracking-wider">Sales Simulator</h2>
<p className="text-[10px] text-[var(--text-3)] uppercase tracking-wider">Simulate ratio from any sales scenario</p>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-64 space-y-4 flex-shrink-0">
<div className="flex items-center justify-between gap-4">
<label className="text-[10px] text-[var(--text-2)] uppercase tracking-wider leading-tight w-24">The Complete Snowboard - Dawn</label>
<input className="w-16 bg-[var(--bg)] border border-[var(--border-2)] rounded p-2 text-center font-mono text-sm focus:outline-none focus:border-cyan-500" type="text" value="1"/>
</div>
<div className="flex items-center justify-between gap-4">
<label className="text-[10px] text-[var(--text-2)] uppercase tracking-wider leading-tight w-24">The Complete Snowboard - Ice</label>
<input className="w-16 bg-[var(--bg)] border border-[var(--border-2)] rounded p-2 text-center font-mono text-sm focus:outline-none focus:border-cyan-500" type="text" value="4"/>
</div>
<div className="flex items-center justify-between gap-4">
<label className="text-[10px] text-[var(--text-2)] uppercase tracking-wider leading-tight w-24">The Complete Snowboard - Powder</label>
<input className="w-16 bg-[var(--bg)] border border-[var(--border-2)] rounded p-2 text-center font-mono text-sm focus:outline-none focus:border-cyan-500" type="text" value="2"/>
</div>
<div className="flex items-center justify-between gap-4">
<label className="text-[10px] text-[var(--text-2)] uppercase tracking-wider leading-tight w-24">The Complete Snowboard - Sunset</label>
<input className="w-16 bg-[var(--bg)] border border-[var(--border-2)] rounded p-2 text-center font-mono text-sm focus:outline-none focus:border-cyan-500" type="text" value="7"/>
</div>
</div>

<div className="flex-1 border border-[var(--border)] bg-[var(--bg)] rounded-xl p-6 relative flex flex-col justify-end min-h-[300px]">

<div className="absolute top-4 left-6 flex items-center gap-6 text-[10px] text-[var(--text-3)] uppercase tracking-wider">
<div className="flex items-center gap-2"><span className="w-3 h-1 bg-blue-500 rounded-full"></span> Sim Ratio</div>
<div className="flex items-center gap-2"><span className="w-3 h-0 border-t border-dashed border-[var(--text-3)]"></span> Target</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Drift &gt; 5%</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Drift &gt; 15%</div>
</div>

<div className="flex items-end justify-around h-48 border-b border-[var(--border-2)] pb-2 relative z-10 w-full mt-10">

<div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[var(--border-2)] w-full -z-10"></div>

<div className="flex flex-col items-center gap-2 w-16">
<span className="font-mono text-[10px] text-amber-400">1.0</span>
<div className="w-full bg-gradient-to-t from-amber-500/20 to-amber-500/80 rounded-t-sm" style={{height: '30px'}}></div>
</div>

<div className="flex flex-col items-center gap-2 w-16">
<span className="font-mono text-[10px] text-rose-400">4.0</span>
<div className="w-full bg-gradient-to-t from-rose-500/20 to-rose-500/80 rounded-t-sm" style={{height: '120px'}}></div>
</div>

<div className="flex flex-col items-center gap-2 w-16">
<span className="font-mono text-[10px] text-amber-400">2.0</span>
<div className="w-full bg-gradient-to-t from-amber-500/20 to-amber-500/80 rounded-t-sm" style={{height: '60px'}}></div>
</div>

<div className="flex flex-col items-center gap-2 w-16">
<span className="font-mono text-[10px] text-rose-400">7.0</span>
<div className="w-full bg-gradient-to-t from-rose-500/20 to-rose-500/80 rounded-t-sm" style={{height: '180px'}}></div>
</div>
</div>

<div className="flex justify-around mt-3 text-[9px] text-[var(--text-3)] uppercase tracking-widest text-center w-full">
<div className="w-20">Dawn</div>
<div className="w-20">Ice</div>
<div className="w-20">Powder</div>
<div className="w-20">Sunset</div>
</div>

<div className="mt-6 pt-4 border-t border-[var(--border-2)] flex flex-wrap items-center gap-4 text-[10px] font-mono">
<div className="text-[var(--text-2)]">Dawn <span className="text-amber-400">▲7%</span></div>
<div className="text-[var(--text-2)]">Ice <span className="text-rose-400">▲29%</span></div>
<div className="text-[var(--text-2)]">Powder <span className="text-amber-400">▲14%</span></div>
<div className="text-[var(--text-2)]">Sunset <span className="text-rose-400">▼50%</span></div>
<div className="text-[var(--text-3)] ml-auto font-sans">vs target</div>
</div>
<div className="mt-3 p-2 rounded bg-[var(--surface-2)] border border-[var(--border-2)] text-[10px] flex items-center gap-2 w-fit">
<i className="w-3 h-3 text-[var(--text-3)]" data-lucide="anchor"></i>
<span className="text-[var(--text-2)]">Anchor noise <strong className="text-[var(--text)]">±38%</strong> → <span className="text-rose-400">±100% - noisy</span> <span className="text-[var(--text-3)] ml-1">The Complete Snowboard - Dawn (1 sales)</span></span>
</div>
</div>
</div>
</section>

<section className="mt-12">
<div className="mb-6">
<h2 className="text-base font-normal tracking-tight uppercase tracking-wider">Selling Curve — Rolling Windows</h2>
<p className="text-xs text-[var(--text-3)] mt-1">Recommended restock ratio based on recent net sales only</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6">
<div className="mb-6 border-b border-[var(--border)] pb-4">
<h3 className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-1">Last 30 Days</h3>
<p className="text-sm font-mono"><span className="text-[var(--text)] text-lg">13</span> <span className="text-[var(--text-3)]">net units sold</span></p>
</div>
<div className="space-y-4">
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Dawn</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">1.0</div>
<div className="text-[10px] text-[var(--text-3)]">1 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Ice</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">4.0</div>
<div className="text-[10px] text-[var(--text-3)]">4 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Powder</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">1.0</div>
<div className="text-[10px] text-[var(--text-3)]">1 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Sunset</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">7.0</div>
<div className="text-[10px] text-[var(--text-3)]">7 sold</div>
</div>
</div>
</div>

<div className="glass-panel p-6">
<div className="mb-6 border-b border-[var(--border)] pb-4">
<h3 className="text-xs font-medium text-[var(--text-2)] uppercase tracking-widest mb-1">Last 60 Days</h3>
<p className="text-sm font-mono"><span className="text-[var(--text)] text-lg">14</span> <span className="text-[var(--text-3)]">net units sold</span></p>
</div>
<div className="space-y-4">
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Dawn</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">1.0</div>
<div className="text-[10px] text-[var(--text-3)]">1 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Ice</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">4.0</div>
<div className="text-[10px] text-[var(--text-3)]">4 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Powder</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">2.0</div>
<div className="text-[10px] text-[var(--text-3)]">2 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Sunset</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">7.0</div>
<div className="text-[10px] text-[var(--text-3)]">7 sold</div>
</div>
</div>
</div>

<div className="glass-panel p-6">
<div className="mb-6 border-b border-[var(--border)] pb-4">
<h3 className="text-xs font-medium text-[var(--text-2)] uppercase tracking-widest mb-1">Last 90 Days</h3>
<p className="text-sm font-mono"><span className="text-[var(--text)] text-lg">14</span> <span className="text-[var(--text-3)]">net units sold</span></p>
</div>
<div className="space-y-4">
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Dawn</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">1.0</div>
<div className="text-[10px] text-[var(--text-3)]">1 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Ice</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">4.0</div>
<div className="text-[10px] text-[var(--text-3)]">4 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Powder</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">2.0</div>
<div className="text-[10px] text-[var(--text-3)]">2 sold</div>
</div>
<div className="text-center p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
<div className="text-[10px] text-[var(--text-3)] uppercase tracking-widest mb-1 truncate">The Complete Snowboard - Sunset</div>
<div className="font-mono text-xl text-blue-400 mb-0.5">7.0</div>
<div className="text-[10px] text-[var(--text-3)]">7 sold</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-[var(--border)] border-t mt-12 pt-8 pb-8">
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-3)]">
<p className="">© 2026 SizoAI. All rights reserved.</p>
<div className="flex gap-2 md:mt-0 text-[var(--text)] text-sm font-medium font-outfit mt-4 gap-x-2 gap-y-2 items-center">SizoAI</div>
</div>
</footer>


    </>
  );
}
