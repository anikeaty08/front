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



      function toggleService(index) {
        for (let i = 1; i <= 3; i++) {
          const isSelected = i === index;

          const desktopImg = document.getElementById(`service-desktop-img-${i}`);
          if (desktopImg) desktopImg.style.opacity = isSelected ? '1' : '0';

          const content = document.getElementById(`service-content-${i}`);
          if (content) content.className = isSelected
            ? 'grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out'
            : 'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out';

          const inner = document.getElementById(`service-inner-${i}`);
          if (inner) {
            inner.className = isSelected
              ? 'pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100'
              : 'pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100';
          }

          const title = document.getElementById(`service-title-${i}`);
          if (title) {
            title.className = isSelected
              ? 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 transition-colors mb-4'
              : 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4';
          }

          const num = document.getElementById(`service-num-${i}`);
          if (num) {
            num.className = isSelected
              ? 'text-xl font-mono text-neutral-900 transition-colors pt-2'
              : 'text-xl font-mono text-neutral-400 transition-colors pt-2';
          }

          const icon = document.getElementById(`service-icon-${i}`);
          if (icon) {
            icon.className = isSelected
              ? 'w-10 h-10 rounded-full border border-neutral-900 bg-neutral-900 text-white flex items-center justify-center transition-all ml-4 shrink-0'
              : 'w-10 h-10 rounded-full border border-neutral-200 bg-transparent text-neutral-400 flex items-center justify-center transition-all ml-4 shrink-0';
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-widest uppercase" href="#">Aura.Build</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#features">How it works</a>
<a className="transition-colors hover:text-neutral-900" href="#analysis">Pricing</a>
<a className="transition-colors hover:text-neutral-900" href="#pricing">Start</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800" href="#pricing">
        Request Media Plan
        <iconify-icon className="text-neutral-50" height="14" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="14"></iconify-icon>
</a>
<button aria-label="Open menu" className="md:hidden p-2 text-neutral-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{'--iconify-stroke-width': '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
<div className="space-y-2 lg:space-y-4">
<h1 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
              Reachy
            </h1>
<div className="flex items-center gap-4 lg:gap-6 flex-wrap">
<div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-neutral-100">
<img alt="Short-form content" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h1 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                — Seeding
              </h1>
</div>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
<p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed">
              Aura.Build presents Reachy — a seeding &amp; distribution service built to scale reach, not guess it.
            </p>
<a className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20" href="#pricing">
              Start your campaign
            </a>
</div>
<div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">100%</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[110px] font-medium">Verified creators only</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">Geo</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[120px] font-medium">Vertical &amp; geo targeting</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">Clean</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[120px] font-medium">No fake traffic</span>
</div>
</div>
<div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100">
<img alt="Performance reporting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
<button aria-label="Scroll" className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
<iconify-icon height="16" icon="solar:arrow-up-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</button>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-neutral-900/10"></div>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
<img alt="Creator ecosystem" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 flex gap-3 z-20">
<a aria-label="Request media plan" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" href="#pricing">
<iconify-icon height="18" icon="solar:paper-plane-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white">
<div className="h-24 rounded-xl overflow-hidden mb-3 relative">
<img alt="Media plan preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs font-medium mb-3 leading-snug text-neutral-600">
              Controlled distribution: verified creator reposts that generate real views and unlock organic uplift.
            </p>
<button aria-label="More" className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<iconify-icon height="14" icon="solar:arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="14"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20 from-black/80 via-black/40">
<p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90">
              One Reel. Multiple entry points. Compounding reach across Reels and Stories.
            </p>
<button className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100">
              How it works
            </button>
</div>
</div>
</div>
</div>
</header>

<div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
<img alt="Team collaboration" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/10"></div>
</div>

<section className="py-24 px-6 bg-white" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">How it works</h2>
<p className="text-neutral-500 max-w-md">
            We purchase placements from vetted creators in specific verticals and geographies. Creators repost your original Reel directly from your official account.
          </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">
<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon height="20" icon="solar:user-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Verified creator ecosystems</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
            Only vetted creators. Choose verticals and geographies for controlled distribution.
          </p>
</div>
<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon height="20" icon="solar:copy-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Clean repost mechanics</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
            Creators repost your original Reel from your official account. You keep full ownership.
          </p>
</div>
<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon height="20" icon="solar:graph-up-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Algorithmic uplift</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
            Engagement signals (saves, shares, visits) trigger organic discovery and secondary traffic.
          </p>
</div>
<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon height="20" icon="solar:camera-minimalistic-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Reels + Stories distribution</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
            Each placement delivers Reel views and Story reposts that add reach and social proof.
          </p>
</div>
<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">No fake traffic</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
            Real creator placements, real audiences, and clean execution built for performance teams.
          </p>
</div>
<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon height="20" icon="solar:document-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Clear reporting</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
            Transparent execution and performance-driven distribution with actionable, clean reporting.
          </p>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pr-6 pb-24 pl-6 bg-white border-neutral-200" id="analysis">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20">Pricing models</span>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
<div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-neutral-100">
<div className="relative w-full h-full">
<img alt="Pay per integration" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 z-10" id="service-desktop-img-1" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2160&amp;q=80"/>
<img alt="Pay per views" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-2" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=2160&amp;q=80"/>
<img alt="Why Reachy" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-3" src="https://images.unsplash.com/photo-1552581234-26160f608093?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-20 pointer-events-none from-neutral-900/20"></div>
</div>
</div>
<div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">
<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(1)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-900" id="service-num-1">01</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-900" id="service-title-1">Option 1 — Pay per Integration</h3>
<div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-900 bg-neutral-900 text-white" id="service-icon-1">
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-1">
<div className="overflow-hidden">
<div className="pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100" id="service-inner-1">
<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Pay per integration" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2160&amp;q=80"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                        You choose the creators you want to work with. We execute placements exactly where you decide.
                        Best for brand awareness, controlled positioning, and strategic influencer selection.
                      </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Controlled placement selection</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Vertical and geo matching</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Transparent execution</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="cursor-pointer border-b pt-8 pb-8 border-neutral-200" onclick="toggleService(2)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-2">02</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="md:text-3xl transition-colors text-2xl font-medium text-neutral-500 tracking-tight mb-4" id="service-title-2">Option 2 — Pay per Views</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-2">
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5', transform: 'rotate(-45deg)'}} width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-2">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-2">
<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Pay per views" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=2160&amp;q=80"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                        You pay for guaranteed views. We prepare and send a detailed media plan including creator selection,
                        placement formats, projected reach, and CPI-optimized distribution.
                      </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Guaranteed view delivery</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> CPI-optimized plan</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Creator + format breakdown</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(3)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-3">03</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4" id="service-title-3">Why Reachy</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-3">
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5', transform: 'rotate(-45deg)'}} width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-3">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-3">
<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Why Reachy" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?w=2160&amp;q=80"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                        Built for founders, growth marketers, and performance teams. Amplification, not replacement.
                      </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Verified creators only</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Vertical and geo targeting</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> No fake traffic</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Clean repost mechanics</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Scalable budgets</li>
<li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Clear reporting</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Start your campaign</h2>
<p className="text-neutral-400">Tell us about your product, target geography, and budget. We’ll build a custom media plan and distribution strategy.</p>
</div>
<a className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white" href="#contact">Request Media Plan</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">REACH</span>
<h3 className="text-3xl font-medium mb-1 text-white">One Reel</h3>
<p className="text-sm font-medium mb-3 text-neutral-300">Multiple entry points</p>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">Each repost adds views, Story reach, social proof, and compounding organic discovery.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800 bg-neutral-800/20 rounded-r-lg">
<span className="font-mono text-xs mb-4 block text-neutral-300">TRUSTED BY</span>
<h3 className="text-lg font-medium mb-3 text-white">Brands across verticals</h3>
<p className="text-sm leading-relaxed text-neutral-400">
            From early-stage startups to large-scale campaigns across fintech, iGaming, apps, marketplaces, Web3, and consumer products.
          </p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">GUARDRAILS</span>
<h3 className="text-lg font-medium mb-3 text-white">Clean distribution</h3>
<p className="text-sm leading-relaxed text-neutral-400">
            Verified creators only, no fake traffic, transparent execution, clear reporting.
          </p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">OWNERSHIP</span>
<h3 className="text-lg font-medium mb-3 text-white">Your content stays yours</h3>
<p className="text-sm leading-relaxed text-neutral-400">
            We focus on amplification, not replacement — your official Reel is the center of distribution.
          </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-neutral-50" id="contact">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-neutral-900">Request a media plan</h2>
<p className="text-neutral-500 text-base md:text-lg mb-10 max-w-lg mx-auto">
        Tell us about your product, target geography, and budget. We’ll build a custom media plan and distribution strategy tailored to your goals.
      </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="name" placeholder="Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="company">Company</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="company" placeholder="Company" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="email" placeholder="Email" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="budget">Budget Range</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="budget" placeholder="Budget Range" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="message" placeholder="Message" rows="4"></textarea>
</div>
<button className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800" type="button">
          Request Media Plan
          <iconify-icon height="16" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</button>
<p className="text-xs text-center mt-4 text-neutral-400">We’ll respond with a tailored plan and creator placement strategy.</p>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-widest uppercase block mb-6" href="#">Aura.Build</a>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
            Reachy helps brands amplify short-form content through controlled distribution — scalable, clean, and performance-driven.
          </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#features">How it works</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#analysis">Pricing models</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#contact">Request media plan</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon height="14" icon="solar:mailbox-linear" style={{'--iconify-stroke-width': '1.5'}} width="14"></iconify-icon>
              hello@aura.build
            </li>
<li className="flex items-center gap-2">
<iconify-icon height="14" icon="solar:paper-plane-linear" style={{'--iconify-stroke-width': '1.5'}} width="14"></iconify-icon>
              @AuraBuild
            </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs text-neutral-400">© 2026 Aura.Build. All rights reserved.</p>
<div className="flex gap-4">
<a aria-label="X" className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<iconify-icon height="18" icon="solar:share-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<a aria-label="Request media plan" className="transition-colors text-neutral-400 hover:text-neutral-900" href="#contact">
<iconify-icon height="18" icon="solar:document-add-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
