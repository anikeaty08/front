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
mono: ['Space Mono', 'monospace'],
},
colors: {
farm: {
base: '#F0EEE5', // Off-white/Parchment
dark: '#1A1D18', // Charcoal/Dark Green
green: '#748B68', // Muted Sage
brown: '#8C7A6B', // Muted Earth
panel: '#FFFFFF', // Panel white
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){
          function handleRoute() {
              const hash = window.location.hash;
              const homeView = document.querySelector('main:not(#farm-view)');
              const farmView = document.getElementById('farm-view');
              if (hash === '#farm-app') {
                  if(homeView) homeView.style.display = 'none';
                  if(farmView) farmView.style.display = 'block';
                  window.scrollTo(0,0);
              } else {
                  if(homeView) homeView.style.display = 'block';
                  if(farmView) farmView.style.display = 'none';
              }
          }
          window.addEventListener('hashchange', handleRoute);
          window.addEventListener('load', handleRoute);
          if(document.readyState === 'complete') handleRoute();
      })();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-farm-base/90 backdrop-blur border-b-2 border-farm-dark">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-mono tracking-tighter uppercase font-semibold text-lg flex items-center gap-2 hover:opacity-80 transition-opacity" href="#farm-app">
          Launch App
        </a>
<div className="hidden md:flex gap-6 font-mono text-sm uppercase tracking-tight">
<a className="hover:text-farm-green transition-colors" href="#system">
            System
          </a>
<a className="hover:text-farm-green transition-colors" href="#mechanics">
            Mechanics
          </a>
<a className="hover:text-farm-green transition-colors" href="#risk">
            Risk
          </a>
<a className="hover:text-farm-green transition-colors text-farm-green font-semibold" href="#farm-app">
            Farm App
          </a>
</div>
<a className="hidden md:flex font-mono text-xs uppercase tracking-tight border-2 border-farm-dark px-4 py-2 hover:bg-farm-dark hover:text-farm-base transition-colors" href="#action">
          Initialize
        </a>
</div>
</nav>
<main className="pt-24 pb-32">

<section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 border-2 border-farm-dark px-3 py-1 bg-farm-panel">
<div className="w-2 h-2 bg-green-500 animate-pulse"></div>
<span className="font-mono text-xs uppercase tracking-tight">
                System Online. Soil Ready.
              </span>
</div>
<h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter uppercase leading-none">
              A Productive
              <br/>
              System for
              <br/>
              Digital Capital.
            </h1>
<p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
              Cashcow is an agricultural yield engine. We convert allocated
              resources into sustainable output through structured, managed
              processes. No speculation. Just farming.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center font-mono text-sm uppercase tracking-tight bg-farm-dark text-farm-base border-2 border-farm-dark px-6 py-3 hover:bg-farm-green transition-colors shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] duration-200" href="#farm-app">
                Launch Farm App
              </a>
<a className="inline-flex justify-center items-center font-mono text-sm uppercase tracking-tight bg-farm-panel text-farm-dark border-2 border-farm-dark px-6 py-3 hover:bg-gray-100 transition-colors" href="#docs">
                Read Manual
              </a>
</div>
</div>

<div className="relative w-full aspect-square max-w-md mx-auto border-4 border-farm-dark bg-farm-dark p-2 shadow-[8px_8px_0px_0px_rgba(26,29,24,0.2)]">
<div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-1">

<div className="bg-farm-green opacity-80"></div>
<div className="bg-farm-brown"></div>
<div className="bg-farm-green opacity-90"></div>
<div className="bg-farm-green opacity-70"></div>
<div className="bg-farm-panel opacity-50"></div>

<div className="bg-farm-brown"></div>
<div className="bg-farm-brown"></div>
<div className="bg-farm-brown"></div>
<div className="bg-farm-green"></div>
<div className="bg-farm-green opacity-80"></div>

<div className="bg-farm-green opacity-90"></div>
<div className="bg-farm-brown"></div>
<div className="bg-gray-300 border-2 border-farm-dark relative">
<div className="absolute inset-1 border border-farm-dark"></div>
</div>
<div className="bg-gray-300 border-2 border-farm-dark"></div>
<div className="bg-farm-panel opacity-60"></div>

<div className="bg-farm-green"></div>
<div className="bg-farm-brown"></div>
<div className="bg-gray-300 border-2 border-farm-dark"></div>
<div className="bg-gray-300 border-2 border-farm-dark relative">
<div className="absolute bottom-0 w-full h-1/2 bg-gray-400"></div>
</div>
<div className="bg-farm-green opacity-90"></div>

<div className="bg-farm-panel opacity-40"></div>
<div className="bg-farm-brown"></div>
<div className="bg-farm-green opacity-80"></div>
<div className="bg-farm-green"></div>
<div className="bg-farm-green opacity-70"></div>
</div>

<div className="absolute top-4 right-4 bg-farm-panel border-2 border-farm-dark p-2 flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-mono text-[10px] uppercase">Yield</span>
<div className="w-16 h-2 bg-gray-200 border border-farm-dark">
<div className="w-2/3 h-full bg-farm-green"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-16">
<div className="bg-farm-panel border-2 border-farm-dark p-8 md:p-12 relative overflow-hidden">
<div className="absolute -right-12 -top-12 opacity-10">
<iconify-icon height="200" icon="solar:danger-triangle-linear" width="200"></iconify-icon>
</div>
<h2 className="font-mono text-2xl md:text-3xl font-semibold tracking-tighter uppercase mb-6 relative z-10">
            Over-fertilization burns the soil.
          </h2>
<div className="grid md:grid-cols-2 gap-8 relative z-10">
<p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Most crypto systems prioritize immediate extraction over long-term
              viability. Unmanaged risk and excessive emissions destroy the
              underlying capital structure.
            </p>
<p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Short-term yield is a parasite if not rotated. We do not
              participate in slash-and-burn economics. The land must be
              preserved to produce.
            </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16" id="system">
<div className="mb-12 border-b-2 border-farm-dark pb-4">
<h2 className="font-mono text-3xl font-semibold tracking-tighter uppercase">
            Managed Agriculture
          </h2>
<p className="text-sm text-gray-600 mt-2 max-w-2xl">
            Controlled exposure. Yield grows because risk is managed.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-farm-panel border-2 border-farm-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] flex flex-col h-full">
<div className="w-10 h-10 bg-farm-brown border-2 border-farm-dark flex items-center justify-center mb-6">
<iconify-icon className="text-farm-panel" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h3 className="font-mono text-lg font-semibold tracking-tight uppercase mb-3">
              Capital = Land
            </h3>
<p className="text-sm text-gray-600 flex-grow">
              Your deposits act as the foundation. Without healthy soil, nothing
              grows. We strictly monitor exposure limits to protect the base
              layer.
            </p>
</div>

<div className="bg-farm-panel border-2 border-farm-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] flex flex-col h-full">
<div className="w-10 h-10 bg-farm-green border-2 border-farm-dark flex items-center justify-center mb-6">
<iconify-icon className="text-farm-panel" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="font-mono text-lg font-semibold tracking-tight uppercase mb-3">
              Strategies = Crops
            </h3>
<p className="text-sm text-gray-600 flex-grow">
              We deploy capital across diversified, battle-tested protocols.
              Crops are rotated based on market conditions to prevent yield
              decay.
            </p>
</div>

<div className="bg-farm-panel border-2 border-farm-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] flex flex-col h-full">
<div className="w-10 h-10 bg-farm-dark border-2 border-farm-dark flex items-center justify-center mb-6">
<iconify-icon className="text-farm-panel" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<h3 className="font-mono text-lg font-semibold tracking-tight uppercase mb-3">
              Yield = Harvest
            </h3>
<p className="text-sm text-gray-600 flex-grow">
              Output is the natural byproduct of a well-maintained system.
              Harvests are collected systematically, minimizing gas and human
              error.
            </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16" id="mechanics">
<div className="bg-farm-dark text-farm-panel p-8 md:p-12 border-4 border-farm-dark shadow-[8px_8px_0px_0px_rgba(116,139,104,0.5)]">
<h2 className="font-mono text-2xl md:text-3xl font-semibold tracking-tighter uppercase mb-10 text-center">
            System Architecture
          </h2>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">

<div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-farm-brown -z-0 -translate-y-1/2 border-y border-farm-dark border-dashed"></div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
<div className="w-16 h-16 bg-farm-base border-2 border-farm-panel flex items-center justify-center mb-4 text-farm-dark transform rotate-3">
<iconify-icon icon="solar:wallet-linear" width="32"></iconify-icon>
</div>
<h4 className="font-mono text-sm uppercase tracking-tight mb-2">
                1. Deposit
              </h4>
<p className="text-xs text-gray-400 font-mono">Seed the land</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
<div className="w-16 h-16 bg-farm-brown border-2 border-farm-panel flex items-center justify-center mb-4 text-farm-panel transform -rotate-2">
<iconify-icon icon="solar:routing-2-linear" width="32"></iconify-icon>
</div>
<h4 className="font-mono text-sm uppercase tracking-tight mb-2">
                2. Allocate
              </h4>
<p className="text-xs text-gray-400 font-mono">Plant via rules</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
<div className="w-16 h-16 bg-farm-green border-2 border-farm-panel flex items-center justify-center mb-4 text-farm-panel transform rotate-1">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h4 className="font-mono text-sm uppercase tracking-tight mb-2">
                3. Accrue
              </h4>
<p className="text-xs text-gray-400 font-mono">Allow to grow</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
<div className="w-16 h-16 bg-farm-base border-2 border-farm-panel flex items-center justify-center mb-4 text-farm-dark transform -rotate-3">
<iconify-icon icon="solar:refresh-linear" width="32"></iconify-icon>
</div>
<h4 className="font-mono text-sm uppercase tracking-tight mb-2">
                4. Reinvest
              </h4>
<p className="text-xs text-gray-400 font-mono">Harvest &amp; loop</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
<div className="text-center mb-12">
<h2 className="font-mono text-3xl font-semibold tracking-tighter uppercase">
            Built for all weather
          </h2>
<p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">
            Markets operate in cycles. The system adapts to survive winter and
            maximize summer, rather than breaking under pressure.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-farm-dark bg-farm-panel">

<div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-farm-dark flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="font-mono text-base font-semibold tracking-tight uppercase">
                Expansion
              </h3>
<iconify-icon className="text-yellow-600" icon="solar:sun-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between border-b border-gray-200 pb-1">
<span className="text-gray-500">Risk Limit</span>
<span className="text-farm-dark">Elevated</span>
</div>
<div className="flex justify-between border-b border-gray-200 pb-1">
<span className="text-gray-500">Crop Focus</span>
<span className="text-farm-dark">Growth Assets</span>
</div>
</div>
<p className="text-sm text-gray-600 mt-6 mt-auto">
              Capitalizing on volume and liquidity to maximize output during
              peak conditions.
            </p>
</div>

<div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-farm-dark flex flex-col bg-gray-50">
<div className="flex items-center justify-between mb-4">
<h3 className="font-mono text-base font-semibold tracking-tight uppercase">
                Contraction
              </h3>
<iconify-icon className="text-farm-brown" icon="solar:leaf-line-duotone" width="24"></iconify-icon>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between border-b border-gray-200 pb-1">
<span className="text-gray-500">Risk Limit</span>
<span className="text-farm-dark">Moderate</span>
</div>
<div className="flex justify-between border-b border-gray-200 pb-1">
<span className="text-gray-500">Crop Focus</span>
<span className="text-farm-dark">Stable Pairs</span>
</div>
</div>
<p className="text-sm text-gray-600 mt-6 mt-auto">
              Trimming positions and securing reserves as liquidity begins to
              dry up.
            </p>
</div>

<div className="p-8 flex flex-col bg-gray-100">
<div className="flex items-center justify-between mb-4">
<h3 className="font-mono text-base font-semibold tracking-tight uppercase">
                Preservation
              </h3>
<iconify-icon className="text-blue-400" icon="solar:snowflake-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between border-b border-gray-200 pb-1">
<span className="text-gray-500">Risk Limit</span>
<span className="text-farm-dark">Minimal</span>
</div>
<div className="flex justify-between border-b border-gray-200 pb-1">
<span className="text-gray-500">Crop Focus</span>
<span className="text-farm-dark">Deep Stables</span>
</div>
</div>
<p className="text-sm text-gray-600 mt-6 mt-auto">
              Protecting the principal. Yield is secondary to survival. The land
              rests.
            </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-16" id="risk">
<div className="bg-[#111] text-[#D2CEBD] p-6 border-2 border-[#333] font-mono text-sm relative">

<div className="absolute top-0 left-0 w-full h-8 bg-[#333] flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-4 text-[10px] text-gray-400 tracking-widest uppercase">
              sys_disclosure.log
            </span>
</div>
<div className="pt-8 space-y-4">
<p className="text-farm-panel font-semibold">
              &gt; WEATHER EXISTS. LOSSES ARE POSSIBLE.
            </p>
<p className="text-gray-400">Loading risk parameters...</p>
<ul className="list-none space-y-2 text-xs md:text-sm pl-4 border-l border-[#333]">
<li>
<span className="text-farm-brown">ERR_01:</span>
                Smart contract vulnerabilities are inherent.
              </li>
<li>
<span className="text-farm-brown">ERR_02:</span>
                Underlying protocol failure can cause total loss.
              </li>
<li>
<span className="text-farm-brown">ERR_03:</span>
                We do not guarantee outcomes or fixed APYs.
              </li>
</ul>
<p className="text-gray-400">
              By establishing clear rules and maintaining absolute transparency,
              we reduce surprises and manage exposure. Read the documentation
              before proceeding.
            </p>
<div className="flex items-center gap-2 mt-4">
<span className="w-2 h-4 bg-[#D2CEBD] animate-pulse"></span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="action">
<div className="bg-farm-green border-4 border-farm-dark p-8 md:p-16 text-center shadow-[8px_8px_0px_0px_rgba(26,29,24,1)]">
<iconify-icon className="text-farm-dark mb-6" icon="solar:flag-linear" width="48"></iconify-icon>
<h2 className="font-mono text-3xl md:text-5xl font-semibold tracking-tighter uppercase text-farm-dark mb-4">
            Ready the land.
          </h2>
<p className="text-sm md:text-base text-farm-dark/80 max-w-lg mx-auto mb-10">
            The farm is active. Review the system parameters and allocate
            responsibly.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="inline-flex justify-center items-center font-mono text-sm uppercase tracking-tight bg-farm-dark text-farm-base border-2 border-farm-dark px-8 py-4 hover:bg-farm-panel hover:text-farm-dark transition-colors">
              View System Status
            </button>
<button className="inline-flex justify-center items-center font-mono text-sm uppercase tracking-tight bg-transparent text-farm-dark border-2 border-farm-dark px-8 py-4 hover:bg-farm-dark hover:text-farm-base transition-colors">
              Read Documentation
            </button>
</div>
</div>
</section>
</main>
<main className="pt-24 pb-32" id="farm-view" style={{display: 'none'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-center justify-between mb-8 border-b-2 border-farm-dark pb-4">
<div>
<h1 className="font-mono text-3xl font-semibold tracking-tighter uppercase">
              The Farm
            </h1>
<p className="text-sm text-gray-600 mt-1 font-mono">
              System Terminal Active
            </p>
</div>
<div className="font-mono text-sm border-2 border-farm-dark px-4 py-2 bg-farm-panel shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
            0x1234...ABCD
          </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-farm-panel border-2 border-farm-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)]">
<div className="font-mono text-xs uppercase text-gray-500 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:safe-2-linear" width="16"></iconify-icon>
              Total Value Locked
            </div>
<div className="font-mono text-2xl font-semibold">$12,450,000.00</div>
</div>
<div className="bg-farm-panel border-2 border-farm-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)]">
<div className="font-mono text-xs uppercase text-gray-500 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
              Your Deposits
            </div>
<div className="font-mono text-2xl font-semibold">$0.00</div>
</div>
<div className="bg-farm-panel border-2 border-farm-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)]">
<div className="font-mono text-xs uppercase text-gray-500 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
              Pending Harvest
            </div>
<div className="font-mono text-2xl font-semibold text-farm-green">
              0.00 COW
            </div>
<button className="mt-4 w-full bg-farm-dark text-farm-base font-mono text-xs uppercase py-2 border-2 border-farm-dark hover:bg-farm-green transition-colors">
              Harvest All
            </button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h2 className="font-mono text-xl font-semibold tracking-tighter uppercase">
            Active Crops
          </h2>
<div className="flex gap-2">
<button className="font-mono text-xs border-2 border-farm-dark px-3 py-1 bg-farm-dark text-farm-base">
              All
            </button>
<button className="font-mono text-xs border-2 border-farm-dark px-3 py-1 bg-farm-panel hover:bg-gray-100 transition-colors">
              Stables
            </button>
<button className="font-mono text-xs border-2 border-farm-dark px-3 py-1 bg-farm-panel hover:bg-gray-100 transition-colors">
              LSTs
            </button>
</div>
</div>
<div className="space-y-4">

<div className="bg-farm-panel border-2 border-farm-dark p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(26,29,24,1)] transition-all">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-12 h-12 bg-gray-100 border-2 border-farm-dark rounded-full flex items-center justify-center -space-x-4 relative shrink-0">
<div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-farm-dark z-10"></div>
<div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-farm-dark z-0"></div>
</div>
<div>
<h3 className="font-mono text-lg font-semibold tracking-tight uppercase">
                  USDC - USDT
                </h3>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="font-mono text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 border border-blue-200">
                    Stable
                  </span>
<span className="font-mono text-[10px] text-gray-500">
                    Minimal Risk
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end font-mono">
<div className="text-right">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  APY
                </div>
<div className="font-semibold text-farm-green text-lg">12.4%</div>
</div>
<div className="text-right hidden sm:block">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  Liquidity
                </div>
<div className="font-semibold text-lg">$4.2M</div>
</div>
<button className="bg-farm-panel text-farm-dark border-2 border-farm-dark px-6 py-2 text-sm uppercase hover:bg-farm-dark hover:text-farm-base transition-colors md:ml-4 shrink-0">
                Manage
              </button>
</div>
</div>

<div className="bg-farm-panel border-2 border-farm-dark p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(26,29,24,1)] transition-all">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-12 h-12 bg-gray-100 border-2 border-farm-dark rounded-full flex items-center justify-center -space-x-4 relative shrink-0">
<div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-farm-dark z-10"></div>
<div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-farm-dark z-0"></div>
</div>
<div>
<h3 className="font-mono text-lg font-semibold tracking-tight uppercase">
                  ETH - wstETH
                </h3>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="font-mono text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 border border-purple-200">
                    LST
                  </span>
<span className="font-mono text-[10px] text-gray-500">
                    Moderate Risk
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end font-mono">
<div className="text-right">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  APY
                </div>
<div className="font-semibold text-farm-green text-lg">8.7%</div>
</div>
<div className="text-right hidden sm:block">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  Liquidity
                </div>
<div className="font-semibold text-lg">$8.1M</div>
</div>
<button className="bg-farm-panel text-farm-dark border-2 border-farm-dark px-6 py-2 text-sm uppercase hover:bg-farm-dark hover:text-farm-base transition-colors md:ml-4 shrink-0">
                Manage
              </button>
</div>
</div>

<div className="bg-farm-panel border-2 border-farm-dark p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_0px_rgba(26,29,24,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(26,29,24,1)] transition-all">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-12 h-12 bg-gray-100 border-2 border-farm-dark rounded-full flex items-center justify-center -space-x-4 relative shrink-0">
<div className="w-8 h-8 bg-farm-green rounded-full border-2 border-farm-dark z-10"></div>
<div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-farm-dark z-0"></div>
</div>
<div>
<h3 className="font-mono text-lg font-semibold tracking-tight uppercase">
                  COW - ETH
                </h3>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="font-mono text-[10px] bg-green-100 text-green-800 px-2 py-0.5 border border-green-200">
                    Volatile
                  </span>
<span className="font-mono text-[10px] text-gray-500">
                    High Risk
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end font-mono">
<div className="text-right">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  APY
                </div>
<div className="font-semibold text-farm-green text-lg">42.1%</div>
</div>
<div className="text-right hidden sm:block">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  Liquidity
                </div>
<div className="font-semibold text-lg">$1.2M</div>
</div>
<button className="bg-farm-panel text-farm-dark border-2 border-farm-dark px-6 py-2 text-sm uppercase hover:bg-farm-dark hover:text-farm-base transition-colors md:ml-4 shrink-0">
                Manage
              </button>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t-2 border-farm-dark bg-farm-panel py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono tracking-tighter uppercase font-semibold text-sm">
          CASHCOW © 2024
        </div>
<div className="flex gap-6 font-mono text-xs text-gray-500 uppercase">
<a className="hover:text-farm-dark" href="#">Github</a>
<a className="hover:text-farm-dark" href="#">Twitter</a>
<a className="hover:text-farm-dark" href="#">Discord</a>
</div>
</div>
</footer>


    </>
  );
}
