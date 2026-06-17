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



        (function() {
            // Function to wait for Chart.js to load
            function waitForChart(callback) {
                if (typeof Chart !== 'undefined') {
                    callback();
                } else {
                    setTimeout(function() { waitForChart(callback); }, 100);
                }
            }

            waitForChart(function() {
                const canvas = document.getElementById('strykeChart');
                if (!canvas) return;
                
                const ctx = canvas.getContext('2d');
                
                // Realistic OHLC-like data simulation
                const points = 150;
                const data = [];
                let price = 63500;
                let volatility = 50;
                
                // Create a realistic looking trend
                for(let i=0; i<points; i++) {
                    const change = (Math.random() - 0.48) * volatility;
                    price += change;
                    // Add some trend bias
                    if(i > 100) price += 15; 
                    data.push(price);
                    
                    // Vary volatility
                    if(Math.random() > 0.95) volatility = Math.random() * 100 + 20;
                }
                
                // Create gradient fill
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(41, 98, 255, 0.15)');
                gradient.addColorStop(1, 'rgba(41, 98, 255, 0)');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: Array(points).fill(''),
                        datasets: [{
                            label: 'Price',
                            data: data,
                            borderColor: '#2962ff',
                            borderWidth: 1.5,
                            backgroundColor: gradient,
                            fill: true,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#2962ff',
                            tension: 0.1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: { duration: 1000, easing: 'easeOutQuart' },
                        plugins: {
                            legend: { display: false },
                            tooltip: { 
                                mode: 'index', 
                                intersect: false,
                                backgroundColor: '#1e222d',
                                titleColor: '#d1d4dc',
                                bodyColor: '#fff',
                                borderColor: '#2a2e39',
                                borderWidth: 1,
                                padding: 8,
                                displayColors: false,
                                callbacks: {
                                    label: function(context) {
                                        return '$ ' + context.parsed.y.toFixed(2);
                                    }
                                }
                            }
                        },
                        scales: {
                            x: { 
                                display: false,
                                grid: { display: false }
                            },
                            y: { 
                                position: 'right',
                                grid: { 
                                    color: '#2a2e39',
                                    drawBorder: false,
                                    tickLength: 0
                                },
                                ticks: { 
                                    color: '#787b86', 
                                    font: { size: 10, family: 'sans-serif' },
                                    callback: function(value) {
                                        return value.toFixed(1);
                                    },
                                    padding: 8
                                },
                                border: { display: false }
                            }
                        },
                        interaction: {
                            mode: 'nearest',
                            axis: 'x',
                            intersect: false
                        }
                    }
                });
            });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-lg group-hover:opacity-80 transition-opacity">STRYKE MARKETS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#mobile">Mobile</a>
<a className="hover:text-white transition-colors" href="#pro">Pro</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Get started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-500/10 blur-[120px] rounded-full -z-10 opacity-40"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-500 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Next-generation trading platform
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                One Platform. <br className="hidden md:block"/>
<span className="text-zinc-500">Every Market. Any Device.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Stryke Markets delivers a consistent experience across desktop, web, and mobile apps, without sacrificing performance or functionality.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                    Get started
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all">
                    View Demo
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
<div className="relative rounded-t-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-brand-500/10">
<div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="p-8 grid grid-cols-12 gap-6 h-[400px] md:h-[500px] relative">

<div className="col-span-12 md:col-span-9 bg-black/40 rounded-lg border border-white/5 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">BTC/USD</div>
<div className="text-3xl text-white font-medium tracking-tight">$64,231.40</div>
</div>
<div className="text-green-500 text-sm font-medium">+2.4%</div>
</div>

<svg className="w-full h-48 overflow-visible" preserveaspectratio="none">
<path d="M0 100 C 100 80, 200 120, 300 60 S 500 80, 600 20 L 600 150 L 0 150 Z" fill="url(#gradient)" opacity="0.1"></path>
<path d="M0 100 C 100 80, 200 120, 300 60 S 500 80, 600 20" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="col-span-3 hidden md:flex flex-col gap-2 bg-black/40 rounded-lg border border-white/5 p-4">
<div className="h-8 w-full bg-white/5 rounded animate-pulse"></div>
<div className="h-4 w-3/4 bg-white/5 rounded"></div>
<div className="h-4 w-1/2 bg-white/5 rounded"></div>
<div className="mt-auto space-y-2">
<div className="h-10 w-full bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center text-green-500 text-xs font-medium">Buy</div>
<div className="h-10 w-full bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center text-red-500 text-xs font-medium">Sell</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Platform Highlights</h2>
<p className="text-zinc-500">Everything you need to trade efficiently.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-4 border border-white/5">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Professional Web Terminal</h3>
<p className="text-sm font-light leading-relaxed">Full-featured trading environment accessible directly through any modern browser without downloads.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-4 border border-white/5">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Seamless Accounts</h3>
<p className="text-sm font-light leading-relaxed">Switch seamlessly between accounts and strategies without losing your workspace setup.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-4 border border-white/5">
<iconify-icon icon="solar:smartphone-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Native Mobile Apps</h3>
<p className="text-sm font-light leading-relaxed">Fully featured mobile trading app for iOS &amp; Android. Trade with precision on the go.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-4 border border-white/5">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Multi-Currency</h3>
<p className="text-sm font-light leading-relaxed">Hold balances in several currencies simultaneously with instant conversion capabilities.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-colors">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-4 border border-white/5">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Real-time Tracking</h3>
<p className="text-sm font-light leading-relaxed">Monitor your account, open positions, and P&amp;L in real-time with zero latency.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent pointer-events-none"></div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-4 border border-white/5">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">TradingView Integrated</h3>
<p className="text-sm font-light leading-relaxed">Top of the line charting and analytical tools for comprehensive market analysis.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-zinc-950/20 border-white/5 pt-24 pb-24" id="platform">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="text-brand-500 font-medium tracking-wide text-xs uppercase mb-4">Web Terminal</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Designed for active traders.</h2>
<p className="text-zinc-400 mb-6 font-light leading-relaxed">
                    The Stryke Markets web platform delivers a full-featured trading environment accessible directly through any modern browser — without downloads or performance limitations.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                        Integrated strategies access
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                        Advanced order types &amp; portfolio analytics
                    </li>
<li className="flex gap-3 text-sm text-zinc-300 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                        Clean, intuitive interface
                    </li>
</ul>
<a className="text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors text-sm" href="#">Learn more about Web Trading</a>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-xl blur-2xl opacity-20"></div>
<div className="relative bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="absolute inset-0 z-20 flex flex-col bg-[#131722] text-zinc-400 font-sans overflow-hidden rounded-xl">


<div className="h-12 border-b border-[#2a2e39] flex items-center px-4 bg-[#131722] shrink-0 justify-between select-none">
<div className="flex items-center gap-4">

<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-[#2962ff] rounded flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-900/20">S</div>
<span className="text-white font-semibold tracking-tight text-sm hidden sm:block">Stryke Markets</span>
</div>
<div className="h-4 w-px bg-[#2a2e39]"></div>

<div className="flex items-center gap-3 text-sm">
<div className="flex items-center gap-2 text-white hover:bg-[#2a2e39] px-2 py-1 rounded transition-colors cursor-pointer group">
<span className="font-bold">BTCUSD</span>
<span className="text-[10px] text-zinc-500 bg-[#2a2e39] px-1.5 rounded-sm group-hover:bg-[#363a45] transition-colors">CRYPTO</span>
</div>
</div>
<div className="h-4 w-px bg-[#2a2e39] hidden md:block"></div>

<div className="hidden md:flex items-center gap-0.5">
<button className="px-2 py-1 hover:bg-[#2a2e39] hover:text-[#2962ff] rounded transition-colors text-zinc-400 text-xs font-medium">15m</button>
<button className="px-2 py-1 bg-[#2a2e39] text-[#2962ff] font-medium rounded transition-colors text-xs">1H</button>
<button className="px-2 py-1 hover:bg-[#2a2e39] hover:text-[#2962ff] rounded transition-colors text-zinc-400 text-xs font-medium">4H</button>
<button className="px-2 py-1 hover:bg-[#2a2e39] hover:text-[#2962ff] rounded transition-colors text-zinc-400 text-xs font-medium">D</button>
<button className="px-2 py-1 hover:bg-[#2a2e39] hover:text-[#2962ff] rounded transition-colors text-zinc-400 text-xs font-medium">W</button>
</div>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2">
<div className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2e39]/50 rounded text-xs text-zinc-300 border border-[#2a2e39]">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Connected
                 </div>
</div>
<button className="px-4 py-1.5 bg-[#2962ff] hover:bg-[#1e4bd8] text-white text-xs font-semibold rounded transition-colors shadow-lg shadow-blue-900/20">Trade</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden relative">

<div className="w-12 border-r border-[#2a2e39] flex flex-col items-center py-4 gap-6 shrink-0 bg-[#131722] z-10">
<svg className="text-white cursor-pointer hover:text-[#2962ff] transition-colors" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>
<svg className="text-zinc-500 cursor-pointer hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
<svg className="text-zinc-500 cursor-pointer hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
<svg className="text-zinc-500 cursor-pointer hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
<svg className="text-zinc-500 cursor-pointer hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<div className="mt-auto mb-2">
<svg className="text-zinc-500 cursor-pointer hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>
</div>

<div className="flex-1 relative bg-[#131722] overflow-hidden">

<div className="absolute top-4 left-4 z-10 flex flex-col gap-1 pointer-events-none">
<div className="flex items-baseline gap-3">
<span className="text-lg text-white font-semibold tracking-tight">Bitcoin / U.S. Dollar</span>
<span className="text-sm text-[#2962ff] font-mono font-medium">64,231.40</span>
<span className="text-xs text-green-500 font-mono font-medium flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        2.45%
                     </span>
</div>
<div className="flex gap-4 text-[10px] font-mono tracking-tight opacity-80">
<span className="text-zinc-500">Vol<span className="text-zinc-300 ml-1">24.5K</span></span>
<span className="text-zinc-500">O<span className="text-[#ef5350] ml-1">64,150.00</span></span>
<span className="text-zinc-500">H<span className="text-[#26a69a] ml-1">64,500.00</span></span>
<span className="text-zinc-500">L<span className="text-[#ef5350] ml-1">63,800.00</span></span>
</div>
</div>

<div className="absolute inset-0 top-0 bottom-0 left-0 right-0">
<canvas className="" height="249" id="strykeChart" style={{display: 'block', boxSizing: 'border-box', height: '124.5px', width: '249px'}} width="498"></canvas>
</div>

<div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-[40px] md:text-[60px] font-bold text-white/[0.03] pointer-events-none tracking-tighter select-none">
                 STRYKE MARKETS
             </div>

<div className="absolute bottom-6 right-6 flex gap-2 z-10">
<button className="bg-[#2a2e39] text-zinc-300 p-2 rounded hover:bg-[#363a45] hover:text-white transition-colors shadow-lg"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg></button>
<button className="bg-[#2a2e39] text-zinc-300 p-2 rounded hover:bg-[#363a45] hover:text-white transition-colors shadow-lg"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg></button>
<button className="bg-[#2962ff] text-white p-2 rounded hover:bg-[#1e4bd8] transition-colors shadow-lg shadow-blue-900/20"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></button>
</div>
</div>

<div className="w-64 border-l border-[#2a2e39] bg-[#131722] flex flex-col shrink-0">
<div className="h-10 border-b border-[#2a2e39] flex items-center justify-between px-3 text-sm text-zinc-300">
<span className="font-medium text-white tracking-tight">Watchlist</span>
<div className="flex gap-2">
<svg className="cursor-pointer hover:text-white" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M12 5v14M5 12h14"></path></svg>
<svg className="cursor-pointer hover:text-white" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">
<div className="group flex items-center justify-between p-3 hover:bg-[#2a2e39] cursor-pointer bg-[#2a2e39]/30 border-l-2 border-[#2962ff]">
<div>
<div className="text-xs font-bold text-white flex items-center gap-1">BTCUSD <span className="hidden group-hover:inline-block text-[8px] bg-[#2962ff] text-white px-1 rounded">M</span></div>
<div className="text-[10px] text-zinc-500">Bitcoin</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-medium">64,231.40</div>
<div className="text-[10px] text-[#26a69a]">+2.45%</div>
</div>
</div>
<div className="group flex items-center justify-between p-3 hover:bg-[#2a2e39] cursor-pointer border-l-2 border-transparent">
<div>
<div className="text-xs font-bold text-white">ETHUSD</div>
<div className="text-[10px] text-zinc-500">Ethereum</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-medium">3,450.20</div>
<div className="text-[10px] text-[#26a69a]">+1.20%</div>
</div>
</div>
<div className="group flex items-center justify-between p-3 hover:bg-[#2a2e39] cursor-pointer border-l-2 border-transparent">
<div>
<div className="text-xs font-bold text-white">SOLUSD</div>
<div className="text-[10px] text-zinc-500">Solana</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-medium">145.80</div>
<div className="text-[10px] text-[#26a69a]">+5.60%</div>
</div>
</div>
<div className="group flex items-center justify-between p-3 hover:bg-[#2a2e39] cursor-pointer border-l-2 border-transparent">
<div>
<div className="text-xs font-bold text-white">SPX500</div>
<div className="text-[10px] text-zinc-500">S&amp;P 500</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-medium">5,205.10</div>
<div className="text-[10px] text-[#ef5350]">-0.45%</div>
</div>
</div>
<div className="group flex items-center justify-between p-3 hover:bg-[#2a2e39] cursor-pointer border-l-2 border-transparent">
<div>
<div className="text-xs font-bold text-white">NDX100</div>
<div className="text-[10px] text-zinc-500">Nasdaq 100</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-medium">18,100.50</div>
<div className="text-[10px] text-[#ef5350]">-0.82%</div>
</div>
</div>
<div className="group flex items-center justify-between p-3 hover:bg-[#2a2e39] cursor-pointer border-l-2 border-transparent">
<div>
<div className="text-xs font-bold text-white">NVDA</div>
<div className="text-[10px] text-zinc-500">Nvidia Corp</div>
</div>
<div className="text-right">
<div className="text-xs text-white font-medium">880.50</div>
<div className="text-[10px] text-[#26a69a]">+3.40%</div>
</div>
</div>
</div>

<div className="h-1/3 border-t border-[#2a2e39] flex flex-col">
<div className="flex items-center justify-between p-2 border-b border-[#2a2e39] bg-[#1e222d]">
<span className="text-[10px] font-semibold text-white uppercase tracking-wider">Order Book</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
</div>
</div>
<div className="flex-1 p-2 space-y-0.5 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131722]/80 pointer-events-none z-10"></div>

<div className="flex justify-between text-[10px] text-[#ef5350] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,235.00</span> <span>0.4210</span></div>
<div className="flex justify-between text-[10px] text-[#ef5350] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,234.50</span> <span>1.2050</span></div>
<div className="flex justify-between text-[10px] text-[#ef5350] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,233.00</span> <span className="">0.0520</span></div>
<div className="flex justify-between text-[10px] text-[#ef5350] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,232.50</span> <span>0.8800</span></div>

<div className="h-px bg-[#2a2e39] my-1 flex items-center justify-center">
<div className="bg-[#131722] px-2 text-[9px] text-zinc-500">0.50</div>
</div>

<div className="flex justify-between text-[10px] text-[#26a69a] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,231.00</span> <span>2.5040</span></div>
<div className="flex justify-between text-[10px] text-[#26a69a] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,230.50</span> <span>0.8010</span></div>
<div className="flex justify-between text-[10px] text-[#26a69a] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,229.00</span> <span>5.1000</span></div>
<div className="flex justify-between text-[10px] text-[#26a69a] font-mono hover:bg-[#2a2e39] cursor-crosshair"><span className="opacity-90">64,228.50</span> <span>3.2500</span></div>
</div>
</div>
</div>
</div>

</div>

<div className="aspect-video bg-black p-4 flex items-center justify-center relative">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/solar:graph-new-linear.svg?color=%231f2937&amp;width=800')] opacity-20 bg-center bg-no-repeat bg-cover"></div>
<div className="text-center z-10">
<div className="text-2xl font-semibold text-white tracking-tight mb-2">Powered by TradingView</div>
<p className="text-zinc-500 text-sm">Top-tier charting libraries built-in</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="mobile">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Mobile Trading Apps</h2>
<p className="text-zinc-500 max-w-xl mx-auto">Two distinct experiences designed for different trading styles. Available on iOS &amp; Android.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative group">
<div className="absolute inset-0 bg-zinc-800/20 rounded-3xl blur-xl group-hover:bg-zinc-800/30 transition-all duration-500"></div>
<div className="relative h-full bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col">
<div className="mb-8">
<iconify-icon className="text-white text-4xl mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Stryke Markets App</h3>
<p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">For Every Investor</p>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                                Bringing the future of trading to everyone. No complex charting or years of experience needed. Access curated trading ideas, ready-made scenarios, market overviews, and education.
                            </p>
</div>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5">
<iconify-icon className="text-brand-500" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Integrated client/broker chat</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5">
<iconify-icon className="text-brand-500" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Real-time synchronization</span>
</div>
</div>
</div>
</div>

<div className="relative group" id="pro">
<div className="absolute inset-0 bg-brand-900/10 rounded-3xl blur-xl group-hover:bg-brand-900/20 transition-all duration-500"></div>
<div className="relative h-full bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col">
<div className="mb-8">
<iconify-icon className="text-brand-500 text-4xl mb-4" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Stryke Pro App</h3>
<p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">For Active Traders</p>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                                A professional tool with only the essentials. Designed for manual and daily traders who need precision. No investment showcase, just streamlined tools to analyze and act quickly.
                            </p>
</div>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5">
<iconify-icon className="text-brand-500" icon="solar:tuning-2-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Control risk instantly</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5">
<iconify-icon className="text-brand-500" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Streamlined execution tools</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Ready to enter the market?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto" href="#">
                    Create Account
                </a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm px-6 py-3 w-full sm:w-auto" href="#">
                    Contact Support
                </a>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-sm">STRYKE MARKETS</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Risk Disclosure</a>
</div>
<div className="text-xs text-zinc-600">
                © 2023 Stryke Markets. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
