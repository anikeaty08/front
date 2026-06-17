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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0a0a0b]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#5E6AD2] to-[#7C7FE6] flex items-center justify-center">
<span className="text-white text-xs font-semibold leading-none">S</span>
</div>
<span className="text-sm font-medium text-white/90">Design System</span>
<span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-white/[0.06] text-xs text-white/40 font-mono ml-1">v3.0</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-1 overflow-x-auto">
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#colors">Colors</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#hsl">HSL</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#typography">Type</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#components">Components</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#pricing">Pricing</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#gradients">Gradients</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#shadows">Shadows</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#animations">Motion</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#spacing">Spacing</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#layout">Layout</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#icons">Icons</a>
<a className="text-xs text-white/40 hover:text-white/80 transition-colors px-2.5 py-1.5 rounded-md hover:bg-white/[0.04]" href="#borders">Borders</a>
</div>
<button className="lg:hidden text-white/50 hover:text-white/80 p-2 rounded-md hover:bg-white/[0.04] transition-colors">
<iconify-icon height="18" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</nav>
<main className="pt-14">

<section className="relative overflow-hidden border-b border-white/[0.06]">
<div className="absolute inset-0 bg-gradient-to-b from-[#5E6AD2]/[0.06] to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5E6AD2]/[0.08] rounded-full blur-[150px]"></div>
<div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></div>
<span className="text-xs text-white/50 font-medium">12 Sections · Complete Reference</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08] mb-5">
                        Design System<br/>
<span className="bg-gradient-to-r from-[#9da1f5] to-[#5E6AD2] bg-clip-text text-transparent">Style Guide</span>
</h1>
<p className="text-base md:text-lg text-white/40 leading-relaxed max-w-xl font-light">
                        A precise, comprehensive reference of every design token — colors, typography, components, spacing, animations, and patterns.
                    </p>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-6">



<section className="py-16 border-b border-white/[0.06]" id="colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Colors</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Color Palette</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">The complete color system with brand, background, and semantic tokens. All colors use precise hex and rgba values.</p>

<h3 className="text-sm font-medium text-white/60 mb-4">Brand</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#5E6AD2] mb-3 group-hover:scale-[1.03] transition-transform ring-1 ring-inset ring-white/[0.1]"></div>
<p className="text-xs font-medium mb-0.5">Primary</p>
<p className="text-xs text-white/30 font-mono">#5E6AD2</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#6C78E0] mb-3 group-hover:scale-[1.03] transition-transform ring-1 ring-inset ring-white/[0.1]"></div>
<p className="text-xs font-medium mb-0.5">Primary Hover</p>
<p className="text-xs text-white/30 font-mono">#6C78E0</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#7C7FE6] mb-3 group-hover:scale-[1.03] transition-transform ring-1 ring-inset ring-white/[0.1]"></div>
<p className="text-xs font-medium mb-0.5">Primary Light</p>
<p className="text-xs text-white/30 font-mono">#7C7FE6</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#9da1f5] mb-3 group-hover:scale-[1.03] transition-transform ring-1 ring-inset ring-white/[0.1]"></div>
<p className="text-xs font-medium mb-0.5">Primary Muted</p>
<p className="text-xs text-white/30 font-mono">#9DA1F5</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#4850A8] mb-3 group-hover:scale-[1.03] transition-transform ring-1 ring-inset ring-white/[0.1]"></div>
<p className="text-xs font-medium mb-0.5">Primary Dark</p>
<p className="text-xs text-white/30 font-mono">#4850A8</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg mb-3 group-hover:scale-[1.03] transition-transform ring-1 ring-inset ring-white/[0.1]" style={{background: 'rgba(94,106,210,0.12)'}}></div>
<p className="text-xs font-medium mb-0.5">Primary Wash</p>
<p className="text-xs text-white/30 font-mono">12% opacity</p>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Backgrounds</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#000000] mb-3 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors"></div>
<p className="text-xs font-medium mb-0.5">Black</p>
<p className="text-xs text-white/30 font-mono">#000000</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#0a0a0b] mb-3 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors"></div>
<p className="text-xs font-medium mb-0.5">App BG</p>
<p className="text-xs text-white/30 font-mono">#0A0A0B</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#111113] mb-3 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors"></div>
<p className="text-xs font-medium mb-0.5">Surface</p>
<p className="text-xs text-white/30 font-mono">#111113</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg bg-[#191a1f] mb-3 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors"></div>
<p className="text-xs font-medium mb-0.5">Elevated</p>
<p className="text-xs text-white/30 font-mono">#191A1F</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg mb-3 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors" style={{background: 'rgba(255,255,255,0.04)'}}></div>
<p className="text-xs font-medium mb-0.5">Hover</p>
<p className="text-xs text-white/30 font-mono">white/4%</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg mb-3 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors" style={{background: 'rgba(255,255,255,0.06)'}}></div>
<p className="text-xs font-medium mb-0.5">Active</p>
<p className="text-xs text-white/30 font-mono">white/6%</p>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Accent Palette</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 mb-10">
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#4E80EE] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Blue</p>
<p className="text-xs text-white/25 font-mono">#4E80EE</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#0EA5E9] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Cyan</p>
<p className="text-xs text-white/25 font-mono">#0EA5E9</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#3FB950] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Green</p>
<p className="text-xs text-white/25 font-mono">#3FB950</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#E5C07B] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Yellow</p>
<p className="text-xs text-white/25 font-mono">#E5C07B</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#F0883E] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Orange</p>
<p className="text-xs text-white/25 font-mono">#F0883E</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#E5534B] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Red</p>
<p className="text-xs text-white/25 font-mono">#E5534B</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#DB61A2] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Pink</p>
<p className="text-xs text-white/25 font-mono">#DB61A2</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-lg bg-[#A371F7] mb-2 group-hover:scale-[1.05] transition-transform"></div>
<p className="text-xs font-medium">Purple</p>
<p className="text-xs text-white/25 font-mono">#A371F7</p>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Text Opacity Scale</h3>
<div className="rounded-xl border border-white/[0.08] overflow-hidden">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
<div className="p-5">
<p className="text-sm font-medium text-white mb-1">Primary</p>
<div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-3 mb-2"><div className="h-full rounded-full bg-white w-[95%]"></div></div>
<p className="text-xs text-white/30 font-mono">95% · headings</p>
</div>
<div className="p-5">
<p className="text-sm font-medium text-white/70 mb-1">Secondary</p>
<div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-3 mb-2"><div className="h-full rounded-full bg-white/70 w-[70%]"></div></div>
<p className="text-xs text-white/30 font-mono">70% · labels</p>
</div>
<div className="p-5">
<p className="text-sm font-medium text-white/50 mb-1">Tertiary</p>
<div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-3 mb-2"><div className="h-full rounded-full bg-white/50 w-[50%]"></div></div>
<p className="text-xs text-white/30 font-mono">50% · body</p>
</div>
<div className="p-5">
<p className="text-sm font-medium text-white/30 mb-1">Muted</p>
<div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-3 mb-2"><div className="h-full rounded-full bg-white/30 w-[30%]"></div></div>
<p className="text-xs text-white/30 font-mono">30% · captions</p>
</div>
<div className="p-5">
<p className="text-sm font-medium text-white/20 mb-1">Disabled</p>
<div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-3 mb-2"><div className="h-full rounded-full bg-white/20 w-[20%]"></div></div>
<p className="text-xs text-white/30 font-mono">20% · disabled</p>
</div>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="hsl">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:tuning-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">HSL System</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">HSL Gray Scale &amp; Semantic Colors</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Grays use a consistent hue of 240° with low saturation, creating a cool-toned neutral scale. Semantic colors follow specific HSL ranges.</p>

<h3 className="text-sm font-medium text-white/60 mb-4">Gray Scale · hsl(240, 6%, L%)</h3>
<div className="rounded-xl border border-white/[0.08] overflow-hidden mb-10">
<div className="grid grid-cols-6 sm:grid-cols-12">
<div className="aspect-square" style={{background: 'hsl(240,6%,4%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,7%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,10%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,13%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,17%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,22%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,28%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,36%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,46%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,58%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,72%)'}}></div>
<div className="aspect-square" style={{background: 'hsl(240,6%,88%)'}}></div>
</div>
<div className="grid grid-cols-6 sm:grid-cols-12 border-t border-white/[0.06]">
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">4</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">7</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">10</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">13</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">17</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">22</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">28</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">36</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">46</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">58</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">72</span></div>
<div className="py-2 text-center"><span className="text-xs text-white/25 font-mono">88</span></div>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Gray Tokens</h3>
<div className="rounded-xl border border-white/[0.08] overflow-hidden mb-10">
<table className="w-full">
<thead>
<tr className="border-b border-white/[0.06] bg-white/[0.02]">
<th className="text-left text-xs text-white/40 font-medium px-5 py-3">Token</th>
<th className="text-left text-xs text-white/40 font-medium px-5 py-3">HSL</th>
<th className="text-left text-xs text-white/40 font-medium px-5 py-3">Hex</th>
<th className="text-left text-xs text-white/40 font-medium px-5 py-3 hidden sm:table-cell">Swatch</th>
<th className="text-left text-xs text-white/40 font-medium px-5 py-3 hidden md:table-cell">Usage</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/[0.04] hover:bg-white/[0.02]">
<td className="px-5 py-3"><code className="text-xs text-[#9da1f5] font-mono">gray-950</code></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">240 6% 4%</span></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">#0A0A0B</span></td>
<td className="px-5 py-3 hidden sm:table-cell"><div className="w-8 h-5 rounded" style={{background: 'hsl(240, 6%, 4%)', border: '1px solid rgba(255,255,255,0.1)'}}></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-white/30">App background</span></td>
</tr>
<tr className="border-b border-white/[0.04] hover:bg-white/[0.02]">
<td className="px-5 py-3"><code className="text-xs text-[#9da1f5] font-mono">gray-900</code></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">240 6% 7%</span></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">#111113</span></td>
<td className="px-5 py-3 hidden sm:table-cell"><div className="w-8 h-5 rounded" style={{background: 'hsl(240, 6%, 7%)', border: '1px solid rgba(255,255,255,0.1)'}}></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-white/30">Card surface</span></td>
</tr>
<tr className="border-b border-white/[0.04] hover:bg-white/[0.02]">
<td className="px-5 py-3"><code className="text-xs text-[#9da1f5] font-mono">gray-800</code></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">240 6% 12%</span></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">#1D1D21</span></td>
<td className="px-5 py-3 hidden sm:table-cell"><div className="w-8 h-5 rounded" style={{background: 'hsl(240,6%,12%)'}}></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-white/30">Elevated panels</span></td>
</tr>
<tr className="border-b border-white/[0.04] hover:bg-white/[0.02]">
<td className="px-5 py-3"><code className="text-xs text-[#9da1f5] font-mono">gray-700</code></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">240 6% 20%</span></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">#303036</span></td>
<td className="px-5 py-3 hidden sm:table-cell"><div className="w-8 h-5 rounded" style={{background: 'hsl(240,6%,20%)'}}></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-white/30">Borders, dividers</span></td>
</tr>
<tr className="border-b border-white/[0.04] hover:bg-white/[0.02]">
<td className="px-5 py-3"><code className="text-xs text-[#9da1f5] font-mono">gray-500</code></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">240 6% 40%</span></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">#61616D</span></td>
<td className="px-5 py-3 hidden sm:table-cell"><div className="w-8 h-5 rounded" style={{background: 'hsl(240,6%,40%)'}}></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-white/30">Placeholder text</span></td>
</tr>
<tr className="hover:bg-white/[0.02]">
<td className="px-5 py-3"><code className="text-xs text-[#9da1f5] font-mono">gray-300</code></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">240 6% 65%</span></td>
<td className="px-5 py-3"><span className="text-xs text-white/40 font-mono">#9E9EAC</span></td>
<td className="px-5 py-3 hidden sm:table-cell"><div className="w-8 h-5 rounded" style={{background: 'hsl(240,6%,65%)'}}></div></td>
<td className="px-5 py-3 hidden md:table-cell"><span className="text-xs text-white/30">Secondary text</span></td>
</tr>
</tbody>
</table>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Semantic HSL Ranges</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-xl border border-[#3FB950]/20 bg-[#3FB950]/[0.06] p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-4 h-4 rounded-full bg-[#3FB950]"></div>
<span className="text-sm font-medium text-[#3FB950]">Success</span>
</div>
<div className="space-y-1.5">
<p className="text-xs text-white/40 font-mono">H: 130° S: 65% L: 50%</p>
<p className="text-xs text-white/40 font-mono">Base: #3FB950</p>
<p className="text-xs text-white/40 font-mono">Wash: 6% opacity</p>
<p className="text-xs text-white/40 font-mono">Border: 20% opacity</p>
</div>
</div>
<div className="rounded-xl border border-[#E5C07B]/20 bg-[#E5C07B]/[0.06] p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-4 h-4 rounded-full bg-[#E5C07B]"></div>
<span className="text-sm font-medium text-[#E5C07B]">Warning</span>
</div>
<div className="space-y-1.5">
<p className="text-xs text-white/40 font-mono">H: 39° S: 70% L: 69%</p>
<p className="text-xs text-white/40 font-mono">Base: #E5C07B</p>
<p className="text-xs text-white/40 font-mono">Wash: 6% opacity</p>
<p className="text-xs text-white/40 font-mono">Border: 20% opacity</p>
</div>
</div>
<div className="rounded-xl border border-[#E5534B]/20 bg-[#E5534B]/[0.06] p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-4 h-4 rounded-full bg-[#E5534B]"></div>
<span className="text-sm font-medium text-[#E5534B]">Error</span>
</div>
<div className="space-y-1.5">
<p className="text-xs text-white/40 font-mono">H: 3° S: 74% L: 60%</p>
<p className="text-xs text-white/40 font-mono">Base: #E5534B</p>
<p className="text-xs text-white/40 font-mono">Wash: 6% opacity</p>
<p className="text-xs text-white/40 font-mono">Border: 40% opacity</p>
</div>
</div>
<div className="rounded-xl border border-[#4E80EE]/20 bg-[#4E80EE]/[0.06] p-5">
<div className="flex items-center gap-3 mb-3">
<div className="w-4 h-4 rounded-full bg-[#4E80EE]"></div>
<span className="text-sm font-medium text-[#4E80EE]">Info</span>
</div>
<div className="space-y-1.5">
<p className="text-xs text-white/40 font-mono">H: 220° S: 82% L: 62%</p>
<p className="text-xs text-white/40 font-mono">Base: #4E80EE</p>
<p className="text-xs text-white/40 font-mono">Wash: 6% opacity</p>
<p className="text-xs text-white/40 font-mono">Border: 20% opacity</p>
</div>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="typography">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:text-bold-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Typography</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Type Scale</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Inter is used as the primary typeface. Headings use medium weight with tight tracking. Body uses light or regular weight at reduced opacity.</p>

<div className="rounded-xl border border-white/[0.08] overflow-hidden mb-8">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
<div className="p-6">
<span className="text-xs text-white/30 font-medium uppercase tracking-wider mb-3 block">Primary</span>
<p className="text-3xl font-medium tracking-tight mb-2">Inter</p>
<div className="bg-white/[0.03] rounded-lg p-3 mt-3">
<code className="text-xs text-[#9da1f5] font-mono">'Inter', -apple-system, sans-serif</code>
</div>
</div>
<div className="p-6">
<span className="text-xs text-white/30 font-medium uppercase tracking-wider mb-3 block">Monospace</span>
<p className="text-3xl font-medium tracking-tight mb-2 font-mono">Mono</p>
<div className="bg-white/[0.03] rounded-lg p-3 mt-3">
<code className="text-xs text-[#9da1f5] font-mono">'SF Mono', 'Fira Code', monospace</code>
</div>
</div>
<div className="p-6">
<span className="text-xs text-white/30 font-medium uppercase tracking-wider mb-3 block">Rendering</span>
<p className="text-3xl font-medium tracking-tight mb-2">Aa Bb</p>
<div className="bg-white/[0.03] rounded-lg p-3 mt-3">
<code className="text-xs text-[#9da1f5] font-mono">antialiased · subpixel</code>
</div>
</div>
</div>
</div>

<div className="space-y-0 rounded-xl border border-white/[0.08] overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] truncate">Display</h1>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">Display</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">60px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">-0.04em</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">1.08</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight truncate">Heading 1</h2>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">H1</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">36px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">-0.03em</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">1.15</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<h3 className="text-2xl font-medium tracking-tight truncate">Heading 2</h3>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">H2</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">24px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">-0.02em</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">1.25</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<h4 className="text-xl font-medium tracking-tight truncate">Heading 3</h4>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">H3</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">20px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">-0.02em</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">1.3</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<h5 className="text-base font-medium truncate">Heading 4</h5>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">H4</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">16px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">0</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">1.5</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<h6 className="text-sm font-medium truncate">Heading 5 / Label</h6>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">H5</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">14px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">0</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">1.5</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<p className="text-base text-white/50 font-light leading-relaxed truncate">Body text with light weight and reduced opacity for readability.</p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">Body</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">16px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">300</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">50% opacity</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<p className="text-sm text-white/40 truncate">Small body text for descriptions and secondary content.</p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">Small</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">14px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">400</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">40% opacity</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<p className="text-xs text-white/30 uppercase tracking-widest font-medium">OVERLINE / SECTION LABEL</p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">Overline</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">12px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">500</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">0.1em</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 hover:bg-white/[0.015] transition-colors">
<div className="flex-1 min-w-0 mb-3 lg:mb-0">
<p className="text-xs text-white/40 font-mono">code · monospace · technical</p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/60 font-mono">Code</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">12px</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">mono</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] text-xs text-white/35 font-mono">#9DA1F5</span>
</div>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mt-10 mb-4">Font Weights</h3>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
<div className="rounded-lg border border-white/[0.08] p-4 text-center">
<p className="text-2xl font-light tracking-tight mb-2">Aa</p>
<p className="text-xs text-white/30">Light · 300</p>
</div>
<div className="rounded-lg border border-white/[0.08] p-4 text-center">
<p className="text-2xl font-normal tracking-tight mb-2">Aa</p>
<p className="text-xs text-white/30">Regular · 400</p>
</div>
<div className="rounded-lg border border-white/[0.08] p-4 text-center bg-white/[0.02]">
<p className="text-2xl font-medium tracking-tight mb-2">Aa</p>
<p className="text-xs text-white/50">Medium · 500 ★</p>
</div>
<div className="rounded-lg border border-white/[0.08] p-4 text-center">
<p className="text-2xl font-semibold tracking-tight mb-2">Aa</p>
<p className="text-xs text-white/30">Semibold · 600</p>
</div>
<div className="rounded-lg border border-white/[0.08] p-4 text-center">
<p className="text-2xl font-bold tracking-tight mb-2">Aa</p>
<p className="text-xs text-white/30">Bold · 700</p>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="components">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Components</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Component Library</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Buttons, inputs, badges, cards, modals, and other reusable UI primitives.</p>

<h3 className="text-sm font-medium text-white/60 mb-4">Buttons</h3>
<div className="rounded-xl border border-white/[0.08] p-6 mb-6">
<div className="flex flex-wrap items-center gap-3 mb-6">
<button className="bg-[#5E6AD2] hover:bg-[#6C78E0] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150 hover:shadow-[0_0_20px_rgba(94,106,210,0.3)]">Primary</button>
<button className="border border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150">Secondary</button>
<button className="hover:bg-white/[0.06] text-white/60 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150">Ghost</button>
<button className="text-[#E5534B] hover:bg-[#E5534B]/[0.08] text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150 border border-[#E5534B]/20">Danger</button>
<button className="bg-[#5E6AD2]/50 text-white/50 text-sm font-medium px-5 py-2.5 rounded-lg cursor-not-allowed">Disabled</button>
</div>
<div className="flex flex-wrap items-center gap-3 mb-6">
<button className="bg-[#5E6AD2] hover:bg-[#6C78E0] text-white text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-150">Small</button>
<button className="bg-[#5E6AD2] hover:bg-[#6C78E0] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150">Medium</button>
<button className="bg-[#5E6AD2] hover:bg-[#6C78E0] text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-150">Large</button>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="bg-[#5E6AD2] hover:bg-[#6C78E0] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150 flex items-center gap-2">
<iconify-icon height="16" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Create issue
                        </button>
<button className="border border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150 flex items-center gap-2">
<iconify-icon height="16" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Export
                        </button>
<button className="border border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 text-sm font-medium p-2.5 rounded-lg transition-all duration-150">
<iconify-icon height="16" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="text-[#5E6AD2] hover:text-[#7C7FE6] text-sm font-medium transition-colors flex items-center gap-1.5">
                            Learn more
                            <iconify-icon height="14" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Inputs</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="rounded-xl border border-white/[0.08] p-6 space-y-4">
<div>
<label className="block text-xs text-white/50 font-medium mb-2">Default</label>
<input className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#5E6AD2]/60 focus:ring-1 focus:ring-[#5E6AD2]/30 transition-all" placeholder="Enter your email" type="text"/>
</div>
<div>
<label className="block text-xs text-white/50 font-medium mb-2">With icon</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" height="16" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#5E6AD2]/60 focus:ring-1 focus:ring-[#5E6AD2]/30 transition-all" placeholder="Search issues..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-[#E5534B] font-medium mb-2">Error</label>
<input className="w-full bg-[#E5534B]/[0.06] border border-[#E5534B]/40 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-all" type="text" value="invalid@"/>
<p className="text-xs text-[#E5534B]/80 mt-1.5">Please enter a valid email</p>
</div>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 space-y-5">

<div>
<label className="block text-xs text-white/50 font-medium mb-3">Toggle</label>
<div className="flex items-center gap-4">
<button className="relative w-11 h-6 bg-[#5E6AD2] rounded-full transition-colors duration-200 cursor-pointer shrink-0" data-on="true" onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.classList.toggle('bg-[#5E6AD2]');this.classList.toggle('bg-white/[0.12]');this.querySelector('span').classList.toggle('translate-x-5')">
<span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 translate-x-5"></span>
</button>
<span className="text-sm text-white/60">Notifications</span>
</div>
</div>

<div>
<label className="block text-xs text-white/50 font-medium mb-3">Checkbox</label>
<div className="space-y-2.5">
<button className="flex items-center gap-3 cursor-pointer group" onclick="this.querySelector('.cb').classList.toggle('bg-[#5E6AD2]');this.querySelector('.cb').classList.toggle('border-[#5E6AD2]');this.querySelector('.cb').classList.toggle('bg-transparent');this.querySelector('.cb').classList.toggle('border-white/20');this.querySelector('iconify-icon').classList.toggle('opacity-0');this.querySelector('iconify-icon').classList.toggle('opacity-100')">
<div className="cb rounded border border-[#5E6AD2] bg-[#5E6AD2] flex items-center justify-center transition-all" style={{width: '18px', height: '18px'}}>
<iconify-icon className="text-white opacity-100 transition-opacity" height="12" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-sm text-white/70 group-hover:text-white/90">Selected</span>
</button>
<button className="flex items-center gap-3 cursor-pointer group" onclick="this.querySelector('.cb').classList.toggle('bg-[#5E6AD2]');this.querySelector('.cb').classList.toggle('border-[#5E6AD2]');this.querySelector('.cb').classList.toggle('bg-transparent');this.querySelector('.cb').classList.toggle('border-white/20');this.querySelector('iconify-icon').classList.toggle('opacity-0');this.querySelector('iconify-icon').classList.toggle('opacity-100')">
<div className="cb rounded border border-white/20 bg-transparent flex items-center justify-center transition-all" style={{width: '18px', height: '18px'}}>
<iconify-icon className="text-white opacity-0 transition-opacity" height="12" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-sm text-white/70 group-hover:text-white/90">Unselected</span>
</button>
</div>
</div>

<div>
<label className="block text-xs text-white/50 font-medium mb-2">Dropdown</label>
<div className="relative" id="dropdown-wrap">
<button className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white/80 outline-none flex items-center justify-between hover:border-white/[0.2] transition-colors" onclick="this.nextElementSibling.classList.toggle('hidden')">
<span>Select priority</span>
<iconify-icon className="text-white/40" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 right-0 mt-1 bg-[#191a1f] border border-white/[0.1] rounded-lg shadow-xl shadow-black/50 z-10 overflow-hidden">
<div className="py-1">
<button className="w-full text-left px-3.5 py-2 text-sm text-[#E5534B] hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"><iconify-icon height="14" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> Urgent</button>
<button className="w-full text-left px-3.5 py-2 text-sm text-[#F0883E] hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"><iconify-icon height="14" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> High</button>
<button className="w-full text-left px-3.5 py-2 text-sm text-[#E5C07B] hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"><iconify-icon height="14" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> Medium</button>
<button className="w-full text-left px-3.5 py-2 text-sm text-white/50 hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"><iconify-icon height="14" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> Low</button>
</div>
</div>
</div>
</div>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Badges &amp; Tags</h3>
<div className="rounded-xl border border-white/[0.08] p-6 mb-6">
<div className="flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#5E6AD2]/[0.12] text-xs text-[#9da1f5] font-medium border border-[#5E6AD2]/20"><div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]"></div> In Progress</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3FB950]/[0.12] text-xs text-[#3FB950] font-medium border border-[#3FB950]/20"><div className="w-1.5 h-1.5 rounded-full bg-[#3FB950]"></div> Done</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5C07B]/[0.12] text-xs text-[#E5C07B] font-medium border border-[#E5C07B]/20"><div className="w-1.5 h-1.5 rounded-full bg-[#E5C07B]"></div> In Review</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] text-xs text-white/50 font-medium border border-white/[0.08]"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Backlog</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5534B]/[0.12] text-xs text-[#E5534B] font-medium border border-[#E5534B]/20"><div className="w-1.5 h-1.5 rounded-full bg-[#E5534B]"></div> Cancelled</span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-white/[0.06] text-xs text-white/50 font-mono">v2.4.1</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/[0.08] text-xs text-white/50 font-medium"><iconify-icon className="text-[#E5C07B]" height="12" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon> Featured</span>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Cards</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-[#5E6AD2]/[0.12] border border-[#5E6AD2]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 group-hover:text-white transition-colors">Analytics</h4>
<p className="text-sm text-white/40 leading-relaxed">Track progress across sprints with real-time insights.</p>
</div>
<div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-[#4E80EE]/[0.12] border border-[#4E80EE]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-[#4E80EE]" height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 group-hover:text-white transition-colors">Cycles</h4>
<p className="text-sm text-white/40 leading-relaxed">Automate sprints and keep your team on schedule.</p>
</div>
<div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-[#E5C07B]/[0.12] border border-[#E5C07B]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-[#E5C07B]" height="20" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 group-hover:text-white transition-colors">Roadmaps</h4>
<p className="text-sm text-white/40 leading-relaxed">Plan ahead with interactive timelines and milestones.</p>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">List Items</h3>
<div className="rounded-xl border border-white/[0.08] overflow-hidden mb-6">
<div className="flex items-center px-5 py-3 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors cursor-pointer group">
<div className="flex items-center gap-3 flex-1 min-w-0">
<div className="w-4 h-4 rounded-full border-2 border-[#5E6AD2] flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]"></div></div>
<span className="text-xs text-white/30 font-mono shrink-0">ENG-128</span>
<span className="text-sm text-white/80 group-hover:text-white truncate transition-colors">Implement roadmap timeline view</span>
</div>
<div className="hidden sm:flex items-center gap-3 shrink-0 ml-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-[#5E6AD2]/[0.12] text-xs text-[#9da1f5]">Feature</span>
<span className="text-xs text-white/30">2d</span>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
</div>
</div>
<div className="flex items-center px-5 py-3 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors cursor-pointer group">
<div className="flex items-center gap-3 flex-1 min-w-0">
<div className="w-4 h-4 rounded-full border-2 border-[#3FB950] flex items-center justify-center shrink-0"><iconify-icon className="text-[#3FB950]" height="10" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="10"></iconify-icon></div>
<span className="text-xs text-white/30 font-mono shrink-0">ENG-127</span>
<span className="text-sm text-white/50 line-through truncate">Fix cycle date picker overflow</span>
</div>
<div className="hidden sm:flex items-center gap-3 shrink-0 ml-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-[#E5534B]/[0.12] text-xs text-[#E5534B]">Bug</span>
<span className="text-xs text-white/30">3d</span>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500"></div>
</div>
</div>
<div className="flex items-center px-5 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer group">
<div className="flex items-center gap-3 flex-1 min-w-0">
<div className="w-4 h-4 rounded-full border-2 border-white/20 shrink-0"></div>
<span className="text-xs text-white/30 font-mono shrink-0">ENG-126</span>
<span className="text-sm text-white/80 group-hover:text-white truncate transition-colors">Add keyboard shortcuts for navigation</span>
</div>
<div className="hidden sm:flex items-center gap-3 shrink-0 ml-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-white/[0.06] text-xs text-white/50">Improvement</span>
<span className="text-xs text-white/30">5d</span>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
</div>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Dialog / Modal</h3>
<div className="rounded-xl border border-white/[0.08] p-6">
<div className="max-w-md mx-auto rounded-xl border border-white/[0.1] bg-[#151518] shadow-2xl shadow-black/60 overflow-hidden">
<div className="px-6 pt-6 pb-4">
<h3 className="text-base font-medium mb-1">Delete project?</h3>
<p className="text-sm text-white/40">This action cannot be undone. All issues and data will be permanently removed.</p>
</div>
<div className="flex justify-end gap-3 px-6 py-4 border-t border-white/[0.06] bg-white/[0.02]">
<button className="hover:bg-white/[0.06] text-white/60 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">Cancel</button>
<button className="bg-[#E5534B] hover:bg-[#d4443c] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">Delete</button>
</div>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="pricing">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Pricing</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Pricing Components</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Pricing cards with feature comparisons, annual/monthly toggle patterns, and visual hierarchy for plan differentiation.</p>

<div className="flex items-center justify-center gap-3 mb-8">
<span className="text-sm text-white/50">Monthly</span>
<button className="relative w-11 h-6 bg-[#5E6AD2] rounded-full transition-colors duration-200 cursor-pointer shrink-0" data-on="true" onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.classList.toggle('bg-[#5E6AD2]');this.classList.toggle('bg-white/[0.12]');this.querySelector('span').classList.toggle('translate-x-5')">
<span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 translate-x-5"></span>
</button>
<span className="text-sm text-white/90 font-medium">Annual</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#3FB950]/[0.12] text-xs text-[#3FB950] font-medium border border-[#3FB950]/20">Save 20%</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 flex flex-col">
<div className="mb-6">
<h3 className="text-base font-medium mb-1">Free</h3>
<p className="text-xs text-white/40">For individuals and small projects</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight">$0</span>
<span className="text-sm text-white/30">/month</span>
</div>
<button className="w-full border border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-150 mb-6">Get started</button>
<div className="space-y-3 flex-1">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">Up to 250 issues</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">Basic integrations</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">1 team member</span>
</div>
</div>
</div>

<div className="rounded-xl border border-[#5E6AD2]/40 bg-[#5E6AD2]/[0.06] p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5E6AD2] to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-medium mb-1">Standard</h3>
<p className="text-xs text-white/40">For growing teams</p>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#5E6AD2]/20 text-xs text-[#9da1f5] font-medium border border-[#5E6AD2]/30">Popular</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight">$8</span>
<span className="text-sm text-white/30">/seat/mo</span>
</div>
<button className="w-full bg-[#5E6AD2] hover:bg-[#6C78E0] text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-150 hover:shadow-[0_0_24px_rgba(94,106,210,0.35)] mb-6">Start free trial</button>
<div className="space-y-3 flex-1">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#5E6AD2] shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/60">Unlimited issues</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#5E6AD2] shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/60">All integrations</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#5E6AD2] shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/60">Unlimited members</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#5E6AD2] shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/60">Roadmaps &amp; cycles</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#5E6AD2] shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/60">Priority support</span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 flex flex-col">
<div className="mb-6">
<h3 className="text-base font-medium mb-1">Plus</h3>
<p className="text-xs text-white/40">For scaling organizations</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight">$14</span>
<span className="text-sm text-white/30">/seat/mo</span>
</div>
<button className="w-full border border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-150 mb-6">Contact sales</button>
<div className="space-y-3 flex-1">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">Everything in Standard</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">SSO &amp; SAML</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">Audit logs</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/30 shrink-0" height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-white/50">Custom roles</span>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl border border-white/[0.08] p-6">
<h3 className="text-sm font-medium mb-4">Pricing Card Anatomy</h3>
<div className="bg-white/[0.03] rounded-lg p-4">
<code className="text-xs text-white/50 font-mono leading-relaxed block whitespace-pre-wrap">Featured card:  border: brand/40% · bg: brand/6% · top-accent: 2px gradient
Default card:   border: white/8% · bg: white/2%
Price:          text-4xl · font-medium · tracking-tight
CTA (featured): bg: brand · hover: shadow 0 0 24px brand/35%
CTA (default):  border: white/12% · bg: white/4%
Features:       14px · white/50–60% · check icon 16px
Popular badge:  bg: brand/20% · text: brand-muted · border: brand/30%</code>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="gradients">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Gradients</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Gradients &amp; Shimmer</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Linear gradients, radial glows, text gradients, and shimmer loading effects used across the interface.</p>

<h3 className="text-sm font-medium text-white/60 mb-4">Linear Gradients</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="group cursor-pointer">
<div className="aspect-[16/10] rounded-xl mb-3 group-hover:scale-[1.02] transition-transform" style={{background: 'linear-gradient(135deg, #5E6AD2, #7C7FE6)'}}></div>
<p className="text-xs font-medium mb-0.5">Brand Primary</p>
<p className="text-xs text-white/30 font-mono">135° · #5E6AD2 → #7C7FE6</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/10] rounded-xl mb-3 group-hover:scale-[1.02] transition-transform" style={{background: 'linear-gradient(135deg, #9da1f5, #5E6AD2)'}}></div>
<p className="text-xs font-medium mb-0.5">Text Gradient</p>
<p className="text-xs text-white/30 font-mono">135° · #9DA1F5 → #5E6AD2</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/10] rounded-xl mb-3 group-hover:scale-[1.02] transition-transform" style={{background: 'linear-gradient(180deg, rgba(94,106,210,0.08), transparent)'}}></div>
<p className="text-xs font-medium mb-0.5">Hero Fade</p>
<p className="text-xs text-white/30 font-mono">180° · brand/8% → transparent</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[16/10] rounded-xl mb-3 group-hover:scale-[1.02] transition-transform border border-white/[0.06]" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))'}}></div>
<p className="text-xs font-medium mb-0.5">Surface Fade</p>
<p className="text-xs text-white/30 font-mono">180° · white/4% → 0%</p>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Radial &amp; Ambient Glows</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
<div className="rounded-xl border border-white/[0.08] p-8 flex items-center justify-center relative overflow-hidden" style={{minHeight: '160px'}}>
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(94,106,210,0.15) 0%, transparent 70%)'}}></div>
<div className="relative text-center">
<p className="text-xs font-medium mb-1">Center Glow</p>
<p className="text-xs text-white/30 font-mono">radial · brand/15%</p>
</div>
</div>
<div className="rounded-xl border border-white/[0.08] p-8 flex items-center justify-center relative overflow-hidden" style={{minHeight: '160px'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[120px] rounded-full blur-[60px]" style={{background: 'rgba(94,106,210,0.2)'}}></div>
<div className="relative text-center">
<p className="text-xs font-medium mb-1">Top Ambient</p>
<p className="text-xs text-white/30 font-mono">blur-[60px] · brand/20%</p>
</div>
</div>
<div className="rounded-xl border border-white/[0.08] p-8 flex items-center justify-center relative overflow-hidden" style={{minHeight: '160px'}}>
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at top, rgba(94,106,210,0.12) 0%, rgba(78,128,238,0.06) 40%, transparent 70%)'}}></div>
<div className="relative text-center">
<p className="text-xs font-medium mb-1">Multi-stop</p>
<p className="text-xs text-white/30 font-mono">brand/12% → blue/6% → 0</p>
</div>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Text Gradients</h3>
<div className="rounded-xl border border-white/[0.08] p-8 mb-10">
<p className="text-3xl md:text-4xl font-medium tracking-tight bg-gradient-to-r from-[#9da1f5] to-[#5E6AD2] bg-clip-text text-transparent mb-4">Build modern software.</p>
<p className="text-3xl md:text-4xl font-medium tracking-tight bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent mb-4">Fade to muted.</p>
<p className="text-3xl md:text-4xl font-medium tracking-tight bg-gradient-to-r from-[#4E80EE] via-[#5E6AD2] to-[#A371F7] bg-clip-text text-transparent">Multi-color shift.</p>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Shimmer / Loading States</h3>
<div className="rounded-xl border border-white/[0.08] p-6">
<div className="space-y-4 max-w-md">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/[0.06] shimmer-bg shrink-0"></div>
<div className="flex-1 space-y-2">
<div className="h-3 rounded bg-white/[0.06] shimmer-bg w-3/4"></div>
<div className="h-3 rounded bg-white/[0.06] shimmer-bg w-1/2"></div>
</div>
</div>
<div className="h-3 rounded bg-white/[0.06] shimmer-bg w-full"></div>
<div className="h-3 rounded bg-white/[0.06] shimmer-bg w-5/6"></div>
<div className="h-3 rounded bg-white/[0.06] shimmer-bg w-2/3"></div>
</div>
<div className="bg-white/[0.03] rounded-lg p-4 mt-6">
<code className="text-xs text-white/50 font-mono leading-relaxed block whitespace-pre-wrap">Shimmer: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)
Background-size: 200% 100%
Animation: shimmer 2.5s ease-in-out infinite
Base: rgba(255,255,255,0.06) · border-radius: 4px</code>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="shadows">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:sun-fog-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Shadows</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Shadows &amp; Depth</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Shadow tokens for elevation, brand glows, and backdrop effects. On dark backgrounds, shadows use near-black with high opacity.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#151518] border border-white/[0.08] mb-4" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.3)'}}></div>
<p className="text-xs font-medium mb-1">Shadow SM</p>
<code className="text-xs text-white/25 font-mono">0 1px 2px black/30%</code>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#151518] border border-white/[0.08] mb-4" style={{boxShadow: '0 4px 12px rgba(0,0,0,0.4)'}}></div>
<p className="text-xs font-medium mb-1">Shadow MD</p>
<code className="text-xs text-white/25 font-mono">0 4px 12px black/40%</code>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#151518] border border-white/[0.08] mb-4" style={{boxShadow: '0 8px 30px rgba(0,0,0,0.5)'}}></div>
<p className="text-xs font-medium mb-1">Shadow LG</p>
<code className="text-xs text-white/25 font-mono">0 8px 30px black/50%</code>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-20 h-20 mx-auto rounded-xl bg-[#151518] border border-white/[0.08] mb-4" style={{boxShadow: '0 16px 50px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0,0,0,0.4)'}}></div>
<p className="text-xs font-medium mb-1">Shadow XL</p>
<code className="text-xs text-white/25 font-mono">Layered composite</code>
</div>
</div>

<h3 className="text-sm font-medium text-white/60 mb-4">Special Effects</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-16 h-16 mx-auto rounded-xl bg-[#5E6AD2] mb-4" style={{boxShadow: '0 0 30px rgba(94,106,210,0.4)'}}></div>
<p className="text-xs font-medium mb-1">Brand Glow</p>
<code className="text-xs text-white/25 font-mono">0 0 30px brand/40%</code>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-16 h-16 mx-auto rounded-xl bg-[#5E6AD2] mb-4 anim-pulse-glow"></div>
<p className="text-xs font-medium mb-1">Pulse Glow</p>
<code className="text-xs text-white/25 font-mono">20→40px · 2s infinite</code>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-16 h-16 mx-auto rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/[0.08] mb-4 flex items-center justify-center">
<span className="text-xs text-white/40">blur</span>
</div>
<p className="text-xs font-medium mb-1">Backdrop Blur</p>
<code className="text-xs text-white/25 font-mono">backdrop-blur-xl</code>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="relative w-16 h-16 mx-auto mb-4">
<div className="absolute inset-0 rounded-full bg-[#5E6AD2]/20 blur-[20px]"></div>
<div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#5E6AD2] to-[#7C7FE6]"></div>
</div>
<p className="text-xs font-medium mb-1">Ambient Glow</p>
<code className="text-xs text-white/25 font-mono">blur-[20px] brand/20%</code>
</div>
</div>

<div className="mt-8 rounded-xl border border-white/[0.08] p-6">
<h3 className="text-sm font-medium mb-4">Elevation Layers</h3>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex-1 rounded-lg p-4 bg-[#0a0a0b] border border-white/[0.06] text-center">
<span className="text-xs text-white/30 font-mono">z-0 · App BG</span>
</div>
<div className="flex-1 rounded-lg p-4 bg-[#111113] border border-white/[0.08] text-center" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
<span className="text-xs text-white/40 font-mono">z-1 · Surface</span>
</div>
<div className="flex-1 rounded-lg p-4 bg-[#191a1f] border border-white/[0.1] text-center" style={{boxShadow: '0 4px 16px rgba(0,0,0,0.4)'}}>
<span className="text-xs text-white/50 font-mono">z-2 · Elevated</span>
</div>
<div className="flex-1 rounded-lg p-4 bg-[#1f2027] border border-white/[0.12] text-center" style={{boxShadow: '0 8px 30px rgba(0,0,0,0.5)'}}>
<span className="text-xs text-white/60 font-mono">z-3 · Overlay</span>
</div>
</div>
</div>
</section>



<section className="py-16 border-b border-white/[0.06]" id="animations">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#5E6AD2]" height="20" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-[#5E6AD2] uppercase tracking-widest">Animations</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Animations &amp; Transitions</h2>
<p className="text-sm text-white/40 mb-10 max-w-xl">Micro-interactions, entrance animations, and transition specifications for consistent motion design.</p>

<h3 className="text-sm font-medium text-white/60 mb-4">Entrance Animations (click to replay)</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
<div className="rounded-xl border border-white/[0.08] p-6 text-center cursor-pointer" onclick="let el=this.querySelector('.demo');el.style.animation='none';el.offsetHeight;el.style.animation=''">
<div className="demo anim-fade-up w-12 h-12 mx-auto rounded-lg bg-[#5E6AD2]/20 border border-[#5E6AD2]/30 mb-4 flex items-center justify-center">
<iconify-icon className="text-[#5E6AD2]" height="18" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-xs font-medium mb-1">Fade Up</p>
<code className="text-xs text-white/25 font-mono">0.5s ease-out</code>
<p className="text-xs text-white/20 mt-1">translateY(12px) → 0</p>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center cursor-pointer" onclick="let el=this.querySelector('.demo');el.style.animation='none';el.offsetHeight;el.style.animation=''">
<div className="demo anim-scale w-12 h-12 mx-auto rounded-lg bg-[#4E80EE]/20 border border-[#4E80EE]/30 mb-4 flex items-center justify-center">
<iconify-icon className="text-[#4E80EE]" height="18" icon="solar:maximize-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-xs font-medium mb-1">Scale In</p>
<code className="text-xs text-white/25 font-mono">0.3s ease-out</code>
<p className="text-xs text-white/20 mt-1">scale(0.95) → 1</p>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center cursor-pointer" onclick="let el=this.querySelector('.demo');el.style.animation='none';el.offsetHeight;el.style.animation=''">
<div className="demo anim-slide-down w-12 h-12 mx-auto rounded-lg bg-[#3FB950]/20 border border-[#3FB950]/30 mb-4 flex items-center justify-center">
<iconify-icon className="text-[#3FB950]" height="18" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-xs font-medium mb-1">Slide Down</p>
<code className="text-xs text-white/25 font-mono">0.3s ease-out</code>
<p className="text-xs text-white/20 mt-1">translateY(-8px) → 0</p>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center cursor-pointer" onclick="let el=this.querySelector('.demo');el.style.animation='none';el.offsetHeight;el.style.animation=''">
<div className="demo anim-slide-right w-12 h-12 mx-auto rounded-lg bg-[#F0883E]/20 border border-[#F0883E]/30 mb-4 flex items-center justify-center">
<iconify-icon className="text-[#F0883E]" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-xs font-medium mb-1">Slide Right</p>
<code className="text-xs text-white/25 font-mono">0.4s ease-out</code>
<p className="text-xs text-white/20 mt-1">translateX(-12px) → 0</p>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center cursor-pointer" onclick="let el=this.querySelector('.demo');el.style.animation='none';el.offsetHeight;el.style.animation=''">
<div className="demo anim-fade w-12 h-12 mx-auto rounded-lg bg-[#A371F7]/20 border border-[#A371F7]/30 mb-4 flex items-center justify-center">
<iconify-icon className="text-[#A371F7]" height="18" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-xs font-medium mb-1">Fade In</p>
<code className="text-xs text-white/25 font-mono">0.4s ease-out</code>
<p className="text-xs text-white/20 mt-1">opacity: 0 → 1</p>
</div>
<div className="rounded-xl border border-white/[0.08] p-6 text-center">
<div className="w-12 h-12 mx-auto rounded-lg bg-[#DB61A2]/20 border border-[#DB61A2]/30 mb-4 flex items-center justify-center anim-bounce">
<iconify-icon className="text-[#DB61A2]" height="18" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<p className="text-xs font-medium mb-1">Bounce</p>
<code className="text-xs text-white/25 font-mono"></code></div></div></section></div></main>
    </>
  );
}
