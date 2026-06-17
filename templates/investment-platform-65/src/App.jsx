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
colors: {
gray: {
850: '#1f1f1f',
900: '#121212',
950: '#0a0a0a',
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple interaction simulation for sliders to show value updates (visual only)
        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            slider.addEventListener('input', (e) => {
                // In a real app, this would adjust weights dynamically
                const valSpan = e.target.parentElement.querySelector('span.text-white');
                if(valSpan) valSpan.textContent = e.target.value + '%';
            });
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
      

<nav className="w-full md:w-64 border-r border-neutral-800 bg-black flex flex-col justify-between h-screen z-20 hidden md:flex">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="h-6 w-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold tracking-tighter">
                    B
                </div>
<span className="text-white font-medium tracking-tight text-sm">BSKT</span>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-neutral-900 rounded-md border border-neutral-800 transition-all" href="#">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
                    My Baskets
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i>
                    Rebalance
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<i className="w-4 h-4" data-lucide="history"></i>
                    History
                </a>
</div>
<div className="mt-8">
<p className="px-3 text-xs font-medium uppercase tracking-wider text-neutral-600 mb-2">Benchmarks</p>
<div className="space-y-1">
<div className="flex items-center justify-between px-3 py-2 text-xs group cursor-pointer">
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                            S&amp;P 500
                        </div>
<span className="text-green-500">+1.2%</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-xs group cursor-pointer">
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                            NASDAQ
                        </div>
<span className="text-green-500">+0.8%</span>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-neutral-800">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                Settings
            </a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-neutral-700"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Alex M.</span>
<span className="text-xs text-neutral-600">Pro Plan</span>
</div>
</div>
</div>
</nav>

<div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-neutral-800 bg-black/80 backdrop-blur-md flex items-center justify-between px-6 z-50">
<span className="text-white font-medium tracking-tight">BSKT</span>
<button className="text-white"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>

<main className="flex-1 h-screen overflow-y-auto pt-20 md:pt-0 bg-neutral-950">

<header className="px-8 py-6 border-b border-white/5 flex justify-between items-end sticky top-0 bg-neutral-950/80 backdrop-blur-lg z-10">
<div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
<span>Overview</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-white">Tech Growth Alpha</span>
</div>
<h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Tech Growth Alpha</h1>
</div>
<div className="flex gap-3">
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white hover:bg-neutral-800 transition-all">
<i className="w-3.5 h-3.5" data-lucide="calendar-clock"></i>
                    Schedule
                </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Invest $500
                </button>
</div>
</header>
<div className="p-6 md:p-8 max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="glass-panel p-5 rounded-xl relative overflow-hidden group">
<p className="text-xs text-neutral-500 mb-1">Total Basket Value</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-medium text-white tracking-tight">$14,230.50</h3>
</div>
<span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-500 font-medium">
<i className="w-3 h-3" data-lucide="trending-up"></i> 4.2%
                    </span>
</div>
<div className="glass-panel p-5 rounded-xl">
<p className="text-xs text-neutral-500 mb-1">Vs. S&amp;P 500</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-medium text-white tracking-tight">+12.4%</h3>
</div>
<p className="text-xs text-neutral-600 mt-2">All time outperformance</p>
</div>
<div className="glass-panel p-5 rounded-xl">
<p className="text-xs text-neutral-500 mb-1">Dividend Yield</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-medium text-white tracking-tight">1.85%</h3>
</div>
<p className="text-xs text-neutral-600 mt-2">Reinvested automatically</p>
</div>
<div className="glass-panel p-5 rounded-xl border-dashed border-neutral-800 bg-transparent hover:border-neutral-700 transition-colors cursor-pointer flex flex-col items-center justify-center text-center group">
<div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</div>
<span className="text-xs font-medium text-white">Create New Basket</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 glass-panel rounded-xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-medium text-white">Performance Projection</h3>
<p className="text-xs text-neutral-500 mt-1">Past performance vs projected future based on momentum.</p>
</div>

<div className="flex bg-neutral-900 rounded-lg p-0.5 border border-neutral-800">
<button className="px-3 py-1 rounded-md text-xs font-medium text-neutral-400 hover:text-white transition-colors">1M</button>
<button className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-800 text-white shadow-sm">6M</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-neutral-400 hover:text-white transition-colors">1Y</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-neutral-400 hover:text-white transition-colors">ALL</button>
</div>
</div>

<div className="relative h-64 w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: '0.1'}}></stop>
<stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: '0'}}></stop>
</lineargradient>
<clippath id="clip">
<rect height="300" width="800" x="0" y="0"></rect>
</clippath>
</defs>

<line stroke="#262626" strokeWidth="1" x1="0" x2="800" y1="250" y2="250"></line>
<line stroke="#262626" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#262626" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>

<path d="M0,250 C100,240 200,230 300,200 C400,180 500,160 550,140" fill="none" stroke="#525252" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M550,140 C600,120 700,110 800,100" fill="none" opacity="0.5" stroke="#525252" stroke-dasharray="2 2" strokeWidth="1.5"></path>

<path d="M0,250 C80,250 150,210 250,210 C350,210 450,150 550,110" fill="none" stroke="#fff" strokeWidth="2"></path>

<path className="chart-gradient" d="M0,250 C80,250 150,210 250,210 C350,210 450,150 550,110 L550,300 L0,300 Z"></path>

<path className="animate-dash" d="M550,110 C650,70 720,50 800,20" fill="none" stroke="#fff" stroke-dasharray="4 4" stroke-opacity="0.5" strokeWidth="2"></path>

<circle cx="550" cy="110" fill="#000" r="4" stroke="#fff" strokeWidth="2"></circle>

<circle cx="800" cy="20" fill="#000" opacity="0.5" r="4" stroke="#fff" strokeWidth="2"></circle>

<g transform="translate(530, 60)">
<rect fill="#1f1f1f" height="34" rx="6" stroke="#333" width="90" x="0" y="0"></rect>
<text fill="#fff" fontFamily="Inter" fontSize="10" font-weight="500" text-anchor="middle" x="45" y="16">Current</text>
<text fill="#a3a3a3" fontFamily="Inter" fontSize="9" text-anchor="middle" x="45" y="28">+24.5%</text>
</g>
</svg>
</div>
<div className="flex justify-between mt-4 text-xs text-neutral-600 font-medium uppercase tracking-wider">
<span>Jan</span>
<span>Mar</span>
<span>Jun</span>
<span>Sep</span>
<span>Now</span>
<span className="text-neutral-500/50">2025 (Est)</span>
</div>
</div>

<div className="space-y-4">
<div className="glass-panel rounded-xl p-6 border border-white/5 h-full flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Composition</h3>
<button className="text-xs text-neutral-500 hover:text-white transition-colors">Edit</button>
</div>

<div className="flex-1 space-y-5 overflow-y-auto pr-2">

<div className="group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px] tracking-tighter">NVDA</div>
<div>
<p className="text-xs font-medium text-white">NVIDIA</p>
<p className="text-[10px] text-neutral-500">AI Hardware</p>
</div>
</div>
<span className="text-xs font-medium text-white">35%</span>
</div>
<input className="h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white" max="100" min="0" type="range" value="35"/>
</div>

<div className="group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-[10px] tracking-tighter text-white">MSFT</div>
<div>
<p className="text-xs font-medium text-white">Microsoft</p>
<p className="text-[10px] text-neutral-500">Cloud &amp; AI</p>
</div>
</div>
<span className="text-xs font-medium text-white">25%</span>
</div>
<input className="h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white" max="100" min="0" type="range" value="25"/>
</div>

<div className="group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-[10px] tracking-tighter text-white">AAPL</div>
<div>
<p className="text-xs font-medium text-white">Apple</p>
<p className="text-[10px] text-neutral-500">Consumer</p>
</div>
</div>
<span className="text-xs font-medium text-white">20%</span>
</div>
<input className="h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white" max="100" min="0" type="range" value="20"/>
</div>

<button className="w-full py-3 border border-dashed border-neutral-800 rounded-lg text-xs text-neutral-500 hover:text-white hover:border-neutral-600 transition-all flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="plus"></i>
                                Add Asset
                            </button>
</div>

<div className="mt-6 pt-6 border-t border-neutral-800">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-white">Recurring Investment</p>
<p className="text-[10px] text-neutral-500">Invest $200 every Monday</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-900 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer border border-neutral-700" htmlFor="toggle"></label>
</input></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-sm font-medium text-white mb-4">Recent Transactions</h3>
<div className="border border-neutral-800 rounded-xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-neutral-900/50 border-b border-neutral-800">
<tr>
<th className="p-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
<th className="p-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Asset</th>
<th className="p-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
<th className="p-4 text-xs font-medium text-neutral-500 uppercase tracking-wider text-right">Amount</th>
<th className="p-4 text-xs font-medium text-neutral-500 uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50 bg-neutral-900/20">
<tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="p-4">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-green-500/10 text-green-500">
<i className="w-3 h-3" data-lucide="arrow-down-left"></i>
</div>
<span className="text-xs font-medium text-white">Buy</span>
</div>
</td>
<td className="p-4 text-xs text-white">Tech Growth Alpha</td>
<td className="p-4 text-xs text-neutral-500">Today, 10:23 AM</td>
<td className="p-4 text-xs font-medium text-white text-right">$500.00</td>
<td className="p-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                                        Executing
                                    </span>
</td>
</tr>
<tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="p-4">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-neutral-800 text-neutral-400">
<i className="w-3 h-3" data-lucide="repeat"></i>
</div>
<span className="text-xs font-medium text-white">Rebalance</span>
</div>
</td>
<td className="p-4 text-xs text-white">Dividend Kings</td>
<td className="p-4 text-xs text-neutral-500">Oct 24, 2023</td>
<td className="p-4 text-xs font-medium text-white text-right">-</td>
<td className="p-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                                        Completed
                                    </span>
</td>
</tr>
<tr className="group hover:bg-neutral-900/40 transition-colors">
<td className="p-4">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-green-500/10 text-green-500">
<i className="w-3 h-3" data-lucide="arrow-down-left"></i>
</div>
<span className="text-xs font-medium text-white">Auto-Invest</span>
</div>
</td>
<td className="p-4 text-xs text-white">Tech Growth Alpha</td>
<td className="p-4 text-xs text-neutral-500">Oct 20, 2023</td>
<td className="p-4 text-xs font-medium text-white text-right">$200.00</td>
<td className="p-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                                        Completed
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


    </>
  );
}
