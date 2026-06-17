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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
obsidian: '#050505',     // Main Background
panel: '#0a0a0a',        // Card Background
surface: '#111111',      // Input/Inner Background
border: '#222222',       // Border Color
acid: '#ccff00',         // Primary Brand Color
text: '#e5e5e5',         // Main Text
muted: '#737373',        // Secondary Text
success: '#00cc66',
error: '#ff3300',
},
fontSize: {
xxs: '0.625rem',
},
letterSpacing: {
tightest: '-0.05em',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'dash': 'dash 1.5s linear infinite',
},
keyframes: {
dash: {
'0%': { strokeDasharray: '1, 150', strokeDashoffset: '0' },
'50%': { strokeDasharray: '90, 150', strokeDashoffset: '-35' },
'100%': { strokeDasharray: '90, 150', strokeDashoffset: '-124' },
}
}
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
      

<aside className="w-16 md:w-64 border-r border-border bg-panel flex flex-col justify-between shrink-0 z-20">
<div>

<div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b border-border">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-mono rounded-sm">A</div>
<span className="hidden md:block ml-3 font-mono font-bold tracking-tight text-sm">AD.NEXUS</span>
</div>

<nav className="flex flex-col p-2 space-y-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 text-white border border-white/10" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden md:block text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:megaphone" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden md:block text-sm font-medium">Campaigns</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden md:block text-sm font-medium">Geo-Fencing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden md:block text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-muted hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden md:block text-sm font-medium">Billing</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-border">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-muted">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
<div className="hidden md:block overflow-hidden">
<div className="text-xs font-medium text-white truncate">Enterprise Admin</div>
<div className="text-xxs font-mono text-muted">admin@nexus.com</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 border-b border-border bg-obsidian/80 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0">
<div>
<nav className="flex items-center text-xs font-mono text-muted space-x-2">
<span className="hover:text-white cursor-pointer transition-colors">CAMPAIGNS</span>
<span className="text-border">/</span>
<span className="text-acid">CREATE NEW</span>
</nav>
<h1 className="text-xl font-semibold tracking-tight text-white mt-1">Targeted Activation</h1>
</div>
<div className="flex items-center gap-4">

<button className="relative w-9 h-9 flex items-center justify-center text-muted hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-acid rounded-full border border-black"></span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded text-xs font-mono text-white hover:border-muted transition-colors">
<iconify-icon icon="lucide:help-circle" width="14"></iconify-icon>
<span>Support</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-panel border border-border p-5 rounded-sm relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-muted uppercase tracking-wider">Total Spend</span>
<iconify-icon className="text-muted group-hover:text-acid transition-colors" icon="lucide:dollar-sign" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">£12,450.00</div>
<div className="w-full bg-surface h-1 rounded-full overflow-hidden mt-2">
<div className="bg-acid h-full w-[65%]"></div>
</div>
<div className="flex justify-between mt-2 text-xxs font-mono text-muted">
<span>Allocated: £20k</span>
<span>65%</span>
</div>
</div>

<div className="bg-panel border border-border p-5 rounded-sm group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-muted uppercase tracking-wider">Impressions</span>
<iconify-icon className="text-muted group-hover:text-white transition-colors" icon="lucide:eye" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">2.4M</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-success flex items-center font-mono">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon> 12%
                            </span>
<span className="text-xxs text-muted">vs last month</span>
</div>
</div>

<div className="bg-panel border border-border p-5 rounded-sm group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-muted uppercase tracking-wider">CTR</span>
<iconify-icon className="text-muted group-hover:text-acid transition-colors" icon="lucide:mouse-pointer-2" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">1.8%</div>

<svg className="w-full h-8 mt-2 text-muted" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 15 L10 12 L20 16 L30 10 L40 14 L50 8 L60 12 L70 5 L80 10 L90 6 L100 4" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="bg-panel border border-border p-5 rounded-sm relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-muted uppercase tracking-wider">Active Campaigns</span>
<div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
</div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">8</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 py-1 bg-surface border border-border text-xxs font-mono hover:border-muted transition-colors text-center rounded-sm">PAUSE ALL</button>
<button className="flex-1 py-1 bg-white text-black border border-white text-xxs font-mono hover:bg-gray-200 transition-colors text-center rounded-sm font-bold">NEW +</button>
</div>
</div>
</section>
<div className="h-px w-full bg-border"></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<div className="bg-panel border border-border rounded-sm overflow-hidden">
<div className="p-4 border-b border-border flex justify-between items-center bg-surface/50">
<h3 className="text-sm font-medium flex items-center gap-2">
<iconify-icon className="text-acid" icon="lucide:globe"></iconify-icon>
                                    Geographic Targeting
                                </h3>
<div className="flex items-center gap-2">
<span className="text-xs text-muted font-mono">RADIUS: 30 MILES</span>
</div>
</div>
<div className="relative h-96 w-full map-bg overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<svg height="100%" width="100%">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
<div className="w-4 h-4 bg-acid rounded-full z-10 shadow-[0_0_20px_#ccff00]"></div>

<div className="absolute w-64 h-64 border border-acid/30 rounded-full bg-acid/5 backdrop-blur-[1px]"></div>
<div className="absolute w-64 h-64 border border-acid/10 rounded-full radar-pulse"></div>
</div>

<div className="absolute top-4 left-4 bg-obsidian/90 border border-border p-4 rounded-sm w-72 backdrop-blur-md shadow-2xl">
<label className="block text-xs font-mono text-muted mb-2 uppercase">Target Location / Postcode</label>
<div className="flex gap-2">
<input className="flex-1 bg-surface border border-border text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-acid font-mono uppercase" type="text" value="SW1A 1AA"/>
<button className="p-2 bg-surface border border-border hover:text-acid hover:border-acid transition-colors rounded-sm">
<iconify-icon icon="lucide:search" width="16"></iconify-icon>
</button>
</div>
<div className="mt-4">
<div className="flex justify-between text-xs font-mono text-muted mb-2">
<span>RADIUS</span>
<span className="text-white">30 MILES</span>
</div>
<input className="accent-acid" max="50" min="1" type="range" value="30"/>
<div className="flex justify-between mt-1 text-[10px] text-muted font-mono">
<span>1mi</span>
<span>50mi</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-border">
<div className="flex items-center gap-2 text-xs text-white">
<iconify-icon className="text-acid" icon="lucide:users"></iconify-icon>
<span className="font-mono">Est. Audience: 1.2M</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-panel border border-border rounded-sm">
<div className="p-4 border-b border-border flex justify-between items-center bg-surface/50">
<h3 className="text-sm font-medium flex items-center gap-2">
<iconify-icon className="text-acid" icon="lucide:image"></iconify-icon>
                                    Ad Creative &amp; Formats
                                </h3>
<div className="flex gap-1 bg-surface p-0.5 rounded-sm border border-border">
<button className="px-3 py-1 text-xs font-mono bg-white text-black rounded-sm shadow-sm">DESKTOP</button>
<button className="px-3 py-1 text-xs font-mono text-muted hover:text-white transition-colors">MOBILE</button>
<button className="px-3 py-1 text-xs font-mono text-muted hover:text-white transition-colors">EMAIL</button>
</div>
</div>
<div className="p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-3">
<div className="flex justify-between items-baseline">
<label className="text-xs font-mono text-muted uppercase">Leaderboard (728x90)</label>
<span className="text-xxs text-acid border border-acid/20 px-1 py-0.5">GIF / HTML5 / JPG</span>
</div>
<div className="w-full h-24 border border-dashed border-border bg-surface hover:border-acid hover:bg-acid/5 transition-all cursor-pointer flex flex-col items-center justify-center group relative overflow-hidden">
<div className="flex flex-col items-center z-10">
<iconify-icon className="text-muted group-hover:text-acid mb-2 transition-colors" icon="lucide:upload-cloud" width="24"></iconify-icon>
<span className="text-xs text-muted group-hover:text-white font-mono">DRAG &amp; DROP</span>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-acid/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out"></div>
</div>

<div className="flex items-center gap-2 bg-surface border border-border p-2 rounded-sm">
<iconify-icon className="text-muted" icon="lucide:type" width="14"></iconify-icon>
<input className="bg-transparent border-none text-xs text-white w-full focus:outline-none placeholder-muted/50 font-mono" placeholder="Headline text override..." type="text"/>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-baseline">
<label className="text-xs font-mono text-muted uppercase">Med. Rectangle (300x250)</label>
<span className="text-xxs text-muted border border-border px-1 py-0.5">PENDING</span>
</div>
<div className="w-full h-48 border border-dashed border-border bg-surface hover:border-white transition-all cursor-pointer flex flex-col items-center justify-center">
<iconify-icon className="text-muted" icon="lucide:plus" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-panel border border-border p-6 rounded-sm">
<h3 className="text-sm font-medium mb-6">Duration &amp; Pricing</h3>

<div className="space-y-3 mb-6">
<label className="cursor-pointer block relative">
<input className="custom-radio sr-only" name="duration" type="radio"/>
<div className="border border-border bg-surface p-3 rounded-sm hover:border-muted transition-colors flex justify-between items-center group">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-muted flex items-center justify-center radio-dot transition-all">
<div className="w-2 h-2 rounded-full transform scale-0 transition-transform"></div>
</div>
<span className="text-sm font-medium">3 Months</span>
</div>
<span className="text-xs font-mono text-muted">Standard</span>
</div>
</label>
<label className="cursor-pointer block relative">
<input checked="" className="custom-radio sr-only" name="duration" type="radio"/>
<div className="border border-acid bg-acid/5 p-3 rounded-sm flex justify-between items-center relative overflow-hidden">
<div className="flex items-center gap-3 relative z-10">
<div className="w-4 h-4 rounded-full border border-acid flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-acid"></div>
</div>
<span className="text-sm font-medium text-white">6 Months</span>
</div>
<div className="text-right relative z-10">
<span className="block text-xs font-mono text-acid">-15% OFF</span>
</div>
</div>
</label>
<label className="cursor-pointer block relative">
<input className="custom-radio sr-only" name="duration" type="radio"/>
<div className="border border-border bg-surface p-3 rounded-sm hover:border-muted transition-colors flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-muted flex items-center justify-center radio-dot transition-all">
<div className="w-2 h-2 rounded-full transform scale-0 transition-transform"></div>
</div>
<span className="text-sm font-medium">12 Months</span>
</div>
<span className="text-xs font-mono text-acid">-25% OFF</span>
</div>
</label>
</div>

<div className="bg-surface rounded-sm p-4 border border-border space-y-2 mb-6">
<div className="flex justify-between text-xs text-muted">
<span>Base Rate (30mi radius)</span>
<span className="font-mono">£450.00/mo</span>
</div>
<div className="flex justify-between text-xs text-muted">
<span>Duration Discount</span>
<span className="font-mono text-acid">-£405.00</span>
</div>
<div className="h-px bg-border my-2"></div>
<div className="flex justify-between text-sm font-medium text-white">
<span>Total Due</span>
<span className="font-mono">£2,295.00</span>
</div>
<div className="text-xxs text-muted text-right mt-1">Includes TAX &amp; Fees</div>
</div>

<form className="space-y-4">
<div>
<label className="text-xs font-mono text-muted mb-1 block">CARD NUMBER</label>
<div className="relative">
<input className="w-full bg-surface border border-border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-white font-mono placeholder-border" placeholder="0000 0000 0000 0000" type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-muted" icon="lucide:credit-card" width="16"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs font-mono text-muted mb-1 block">EXPIRY</label>
<input className="w-full bg-surface border border-border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-white font-mono placeholder-border" placeholder="MM/YY" type="text"/>
</div>
<div>
<label className="text-xs font-mono text-muted mb-1 block">CVC</label>
<input className="w-full bg-surface border border-border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-white font-mono placeholder-border" placeholder="123" type="text"/>
</div>
</div>
<button className="w-full bg-white text-black font-semibold py-3 rounded-sm hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 group mt-4" type="button">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
<span>PAY £2,295.00</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<div className="text-center">
<a className="text-xxs text-muted hover:text-white underline" href="#">Download Invoice Preview</a>
</div>
</form>
</div>
</div>
</div>

<section className="bg-panel border border-border rounded-sm p-6 mb-12">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium">Performance Analytics</h3>
<div className="flex gap-2 text-xs font-mono">
<button className="text-white border-b border-acid px-2 pb-1">CLICKS</button>
<button className="text-muted hover:text-white px-2 pb-1">IMPRESSIONS</button>
<button className="text-muted hover:text-white px-2 pb-1">SPEND</button>
</div>
</div>

<div className="relative h-64 w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">

<line stroke="#222" strokeWidth="1" x1="0" x2="1000" y1="0" y2="0"></line>
<line stroke="#222" strokeWidth="1" x1="0" x2="1000" y1="75" y2="75"></line>
<line stroke="#222" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
<line stroke="#222" strokeWidth="1" x1="0" x2="1000" y1="225" y2="225"></line>
<line stroke="#222" strokeWidth="1" x1="0" x2="1000" y1="300" y2="300"></line>

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ccff00" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#ccff00" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,250 C100,240 150,150 250,180 S350,280 450,200 S550,100 650,120 S750,50 850,80 S950,20 1000,50 V300 H0 Z" fill="url(#chartGradient)"></path>

<path className="draw-path" d="M0,250 C100,240 150,150 250,180 S350,280 450,200 S550,100 650,120 S750,50 850,80 S950,20 1000,50" fill="none" stroke="#ccff00" strokeWidth="2"></path>

<circle className="hover:scale-150 transition-transform cursor-pointer origin-center" cx="250" cy="180" fill="#050505" r="4" stroke="#ccff00" strokeWidth="2"></circle>
<circle className="hover:scale-150 transition-transform cursor-pointer origin-center" cx="450" cy="200" fill="#050505" r="4" stroke="#ccff00" strokeWidth="2"></circle>
<circle className="hover:scale-150 transition-transform cursor-pointer origin-center" cx="650" cy="120" fill="#050505" r="4" stroke="#ccff00" strokeWidth="2"></circle>
<circle className="hover:scale-150 transition-transform cursor-pointer origin-center" cx="850" cy="80" fill="#050505" r="4" stroke="#ccff00" strokeWidth="2"></circle>
</svg>

<div className="absolute top-1/3 left-2/3 bg-obsidian/90 border border-border p-2 rounded-sm backdrop-blur text-xs font-mono shadow-xl">
<div className="text-muted">FEB 24</div>
<div className="text-white font-bold">2,450 Clicks</div>
</div>
</div>
</section>
</div>

<footer className="mt-8 border-t border-border pt-8 text-center text-xs text-muted font-mono pb-8">
<p>© 2024 Enterprise Ad Manager. 11 Countries / 9 Languages.</p>
<div className="flex justify-center gap-4 mt-2 opacity-50">
<span>STATUS: OPERATIONAL</span>
<span>BUILD v2.4.1</span>
</div>
</footer>
</div>
</main>

<div className="fixed bottom-6 right-6 z-50">
<div className="bg-surface border border-border p-4 rounded-sm shadow-2xl flex items-start gap-3 w-80 transform transition-all hover:-translate-y-1">
<div className="text-acid mt-0.5">
<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-0.5">Campaign Approved</h4>
<p className="text-xs text-muted">Your 'Winter Sale' creative passed review and is scheduled to run.</p>
<button className="text-xs font-mono text-white mt-2 border-b border-white/20 hover:border-white">VIEW DETAILS</button>
</div>
<button className="text-muted hover:text-white">
<iconify-icon icon="lucide:x" width="14"></iconify-icon>
</button>
</div>
</div>

    </>
  );
}
