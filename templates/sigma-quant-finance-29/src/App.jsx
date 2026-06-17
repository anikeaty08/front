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
void: '#050505',
carbon: '#0F1112',
ash: '#EAEAEA',
steel: '#666666',
terminal: '#00FF94', // Green
danger: '#FF3333',
grid: 'rgba(255, 255, 255, 0.15)',
glass: 'rgba(15, 17, 18, 0.6)'
},
fontFamily: {
sans: ['Space Grotesk', 'sans-serif'],
body: ['Inter Tight', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-0.02em',
widest: '0.1em',
},
animation: {
'scan': 'scan 8s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'glitch': 'glitch 1s linear infinite',
},
keyframes: {
scan: {
'0%': { backgroundPosition: '0% 0%' },
'100%': { backgroundPosition: '0% 100%' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
glitch: {
'2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
'4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
'62%': { transform: 'translate(0,0) skew(5deg)' },
}
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 scanlines opacity-10 h-full w-full pointer-events-none mix-blend-overlay"></div>

<nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-[90%] md:max-w-[600px]">
<div className="glass-hud rounded-full px-2 py-2 flex items-center justify-between shadow-2xl">

<button className="md:hidden p-2 text-ash hover:text-terminal transition-colors">
<i className="w-5 h-5" data-lucide="terminal" strokeWidth="1.5"></i>
</button>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-steel hover:text-ash hover:bg-white/5 transition-all duration-300" href="#methodology">Methodology</a>
<a className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-steel hover:text-ash hover:bg-white/5 transition-all duration-300" href="#performance">Performance</a>
<a className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-steel hover:text-ash hover:bg-white/5 transition-all duration-300" href="#risk">Risk Model</a>
</div>

<a className="bg-terminal hover:bg-white transition-colors text-void px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2" href="#">
                Deploy Capital
                <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-void">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
<div className="bars-container">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
</div>

<div className="absolute inset-0 z-0 bg-gradient-to-r from-void via-void/80 to-transparent pointer-events-none"></div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none z-0"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-terminal"></span>
</span>
<span className="font-mono text-xs text-terminal tracking-widest uppercase shadow-black drop-shadow-md">System Operational</span>
</div>
<h1 className="font-sans font-semibold text-5xl md:text-7xl lg:text-[84px] leading-[0.9] tracking-tightest text-ash drop-shadow-lg">
                        REMOVE EMOTION.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-steel to-ash">INSERT ALPHA.</span>
</h1>
<p className="font-body text-steel text-lg md:text-xl leading-relaxed max-w-xl drop-shadow-md">
                        SIGMA replaces human intuition with institutional-grade quantitative modeling. We simulate 10,000 market scenarios per second to optimize your Sharpe ratio.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
<button className="group relative px-8 py-4 bg-void border border-terminal/30 hover:border-terminal transition-colors backdrop-blur-md">
<div className="absolute inset-0 bg-terminal/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<span className="relative font-mono text-sm uppercase tracking-widest flex items-center gap-3 text-ash group-hover:text-terminal">
                                Initialize Portfolio
                                <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</button>
<button className="text-terminal font-mono text-sm uppercase tracking-widest border-b border-terminal/30 pb-1 hover:border-terminal transition-colors drop-shadow-md">
                            View Live Performance
                        </button>
</div>
</div>

<div className="lg:col-span-5 relative perspective-[1000px]">
<div className="relative transform transition-transform duration-700 hover:scale-[1.02]">

<div className="glass-panel p-1 rounded-sm bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-10px_rgba(0,255,148,0.1)]">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<span className="font-mono text-[10px] text-steel ml-2">TERM_01 // SIGMA_CORE</span>
</div>
<div className="font-mono text-[10px] text-terminal animate-pulse">LIVE_FEED ●</div>
</div>

<div className="p-5 space-y-5">

<div className="grid grid-cols-2 gap-4">
<div className="border border-white/5 bg-white/[0.02] p-3">
<div className="text-[10px] font-mono text-steel uppercase mb-1">Portfolio Delta</div>
<div className="text-xl font-sans text-ash flex items-baseline gap-2">
                                            +1.24% 
                                            <span className="text-xs font-mono text-terminal">▲</span>
</div>
</div>
<div className="border border-white/5 bg-white/[0.02] p-3">
<div className="text-[10px] font-mono text-steel uppercase mb-1">Vol (30d)</div>
<div className="text-xl font-sans text-ash flex items-baseline gap-2">
                                            14.2 
                                            <span className="text-xs font-mono text-terminal">LOW</span>
</div>
</div>
</div>

<div className="relative h-48 w-full border border-white/5 bg-void/50 overflow-hidden group">

<div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
<div className="border-r border-t border-white/5"></div>
</div>

<div className="absolute top-0 bottom-0 w-px bg-terminal/50 z-20 animate-marquee left-[80%] shadow-[0_0_10px_#00FF94]"></div>

<svg className="absolute inset-0 w-full h-full z-10 p-2" preserveaspectratio="none">
<defs>
<lineargradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(0, 255, 148, 0.2)"></stop>
<stop offset="100%" stop-color="rgba(0, 255, 148, 0)"></stop>
</lineargradient>
</defs>

<path d="M0,120 L20,110 L40,115 L60,90 L80,95 L100,60 L120,70 L140,50 L160,55 L180,30 L200,40 L220,20 L240,25 L260,10 L280,15 L300,5 L320,120 Z" fill="url(#chartGrad)"></path>

<path d="M0,120 L20,110 L40,115 L60,90 L80,95 L100,60 L120,70 L140,50 L160,55 L180,30 L200,40 L220,20 L240,25 L260,10 L280,15 L300,5" fill="none" stroke="#00FF94" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-carbon border border-terminal/30 px-2 py-1 flex items-center gap-2 shadow-lg">
<span className="w-1.5 h-1.5 bg-terminal rounded-full animate-pulse"></span>
<span className="text-[8px] font-mono text-terminal uppercase tracking-wider">Pattern Detected: Bull Flag</span>
</div>
</div>

<div className="font-mono text-[9px] text-steel/60 space-y-1 h-20 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent z-10"></div>
<div className="flex justify-between"><span className="text-terminal">EXEC</span> <span>BTC/USD LIMIT BUY</span> <span>200ms</span></div>
<div className="flex justify-between"><span className="text-terminal">EXEC</span> <span>ETH/USD MARKET</span> <span>15ms</span></div>
<div className="flex justify-between"><span className="text-blue-400">INFO</span> <span>REBALANCING POOL A</span> <span>102ms</span></div>
<div className="flex justify-between"><span className="text-terminal">EXEC</span> <span>SOL/USDC HEDGE</span> <span>45ms</span></div>
<div className="flex justify-between"><span className="text-danger">WARN</span> <span>SLIPPAGE &gt; 0.1%</span> <span>01ms</span></div>
<div className="flex justify-between"><span className="text-terminal">EXEC</span> <span>NVDA ARB</span> <span>08ms</span></div>
</div>
</div>

<div className="absolute -right-3 top-10 flex flex-col gap-2">
<div className="w-1 h-8 bg-white/10 rounded-full"></div>
<div className="w-1 h-4 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="absolute -inset-4 bg-terminal/20 blur-[60px] -z-10 rounded-full opacity-40"></div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/10 bg-carbon overflow-hidden py-4 z-20 relative">
<div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
<span className="font-mono text-xs text-steel uppercase tracking-widest pl-4">DATA INGESTION PIPELINES:</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">NASDAQ</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">BLOOMBERG TERMINAL</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">COINBASE PRIME</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">CBOE VOLATILITY</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">NYSE ARCA</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">CHICAGO MERCANTILE</span>
<span className="text-steel/50 select-none mx-2">|</span>

<span className="font-sans font-semibold text-lg text-ash opacity-60">NASDAQ</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">BLOOMBERG TERMINAL</span>
<span className="text-steel/50 select-none mx-2">|</span>
<span className="font-sans font-semibold text-lg text-ash opacity-60">COINBASE PRIME</span>
</div>
</div>

<section className="py-24 container mx-auto px-6 z-20 relative bg-[#050505]">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<h2 className="font-sans font-medium text-4xl md:text-5xl text-ash tracking-tight">THE INFRASTRUCTURE<br/>OF WEALTH.</h2>
<p className="font-mono text-xs text-steel uppercase tracking-widest mt-4 md:mt-0">[ SYSTEM ARCHITECTURE v2.0 ]</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">

<div className="col-span-1 md:col-span-2 glass-panel p-8 flex flex-col justify-between group hover:border-terminal/50 transition-colors duration-300">
<div className="flex justify-between items-start">
<div>
<i className="text-terminal w-6 h-6 mb-4 stroke-1" data-lucide="zap"></i>
<h3 className="font-mono text-lg uppercase tracking-wider text-ash mb-2">Zero-Latency Routing</h3>
<p className="font-body text-steel text-sm max-w-sm">Trades executed in &lt;40ms across 12 exchanges using proprietary direct memory access.</p>
</div>
<div className="bg-carbon border border-white/10 p-1 rounded-sm">
<span className="block w-2 h-2 bg-terminal rounded-full animate-pulse"></span>
</div>
</div>

<div className="mt-8 bg-void border border-white/5 p-4 font-mono text-xs h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void z-10"></div>
<div className="space-y-1 opacity-70">
<div className="flex justify-between"><span className="text-terminal">BUY BTC-PERP</span> <span>$64,231.50</span> <span className="text-steel">12ms</span></div>
<div className="flex justify-between"><span className="text-danger">SELL ETH-USD</span> <span>$3,420.10</span> <span className="text-steel">08ms</span></div>
<div className="flex justify-between"><span className="text-terminal">BUY SOL-USDC</span> <span>$145.20</span> <span className="text-steel">15ms</span></div>
<div className="flex justify-between"><span className="text-terminal">BUY NVDA</span> <span>$890.00</span> <span className="text-steel">32ms</span></div>
<div className="flex justify-between"><span className="text-danger">HEDGE SPX</span> <span>5100.25</span> <span className="text-steel">11ms</span></div>
<div className="flex justify-between"><span className="text-terminal">ARB USDT</span> <span>1.0001</span> <span className="text-steel">04ms</span></div>
<div className="flex justify-between"><span className="text-terminal">BUY BTC-PERP</span> <span>$64,232.00</span> <span className="text-steel">12ms</span></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 flex flex-col gap-4">

<div className="flex-1 glass-panel p-6 relative group hover:border-terminal/50 transition-colors duration-300">
<i className="text-terminal w-6 h-6 mb-4 stroke-1" data-lucide="shield-alert"></i>
<h3 className="font-mono text-sm uppercase tracking-wider text-ash mb-2">Tail Risk Hedging</h3>
<p className="font-body text-steel text-xs leading-relaxed">Automated stop-losses triggered by macro-events.</p>

<div className="absolute bottom-4 right-4 w-16 h-8 border-t-2 border-l-2 border-r-2 border-terminal rounded-t-full opacity-50"></div>
</div>

<div className="flex-1 glass-panel p-6 relative group hover:border-terminal/50 transition-colors duration-300">
<i className="text-terminal w-6 h-6 mb-4 stroke-1" data-lucide="network"></i>
<h3 className="font-mono text-sm uppercase tracking-wider text-ash mb-2">Uncorrelated Assets</h3>
<p className="font-body text-steel text-xs leading-relaxed">Crypto, FX, and Equities blended for stability.</p>

<div className="absolute bottom-4 right-4">
<svg height="32" viewbox="0 0 32 32" width="32">
<circle cx="16" cy="16" fill="none" r="10" stroke="#333" strokeWidth="4"></circle>
<circle cx="16" cy="16" fill="none" r="10" stroke="#00FF94" stroke-dasharray="20 60" strokeWidth="4" transform="rotate(-90 16 16)"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-carbon/50 backdrop-blur-sm z-20 relative" id="performance">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="py-12 md:px-8 text-center md:text-left">
<div className="font-sans font-semibold text-6xl md:text-7xl text-ash tabular-nums tracking-tighter mb-2">34.2%</div>
<div className="font-mono text-xs text-terminal uppercase tracking-widest">Year to Date Return</div>
</div>
<div className="py-12 md:px-8 text-center md:text-left">
<div className="font-sans font-semibold text-6xl md:text-7xl text-ash tabular-nums tracking-tighter mb-2">$1.2B</div>
<div className="font-mono text-xs text-steel uppercase tracking-widest">Liquidity Provided</div>
</div>
<div className="py-12 md:px-8 text-center md:text-left">
<div className="font-sans font-semibold text-6xl md:text-7xl text-ash tabular-nums tracking-tighter mb-2">0.00s</div>
<div className="font-mono text-xs text-steel uppercase tracking-widest">Downtime Record</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050505] z-20" id="methodology">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-terminal to-transparent animate-pulse-slow"></div>
</div>
<div className="container mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 relative">
<div className="md:text-right pr-0 md:pr-12">
<h4 className="font-mono text-terminal text-sm mb-2">01_INPUT</h4>
<h3 className="font-sans text-3xl font-medium text-ash mb-4">API Integration</h3>
<p className="font-body text-steel text-lg">You connect your brokerage or wallet via API keys. Read-only access ensures absolute security while allowing instant data ingestion.</p>
</div>
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-void border border-terminal rounded-full z-10"></div>
<div className="pl-0 md:pl-12 opacity-20">

<div className="h-2 w-32 bg-steel rounded-full mb-2"></div>
<div className="h-2 w-24 bg-steel rounded-full"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 relative">
<div className="order-2 md:order-1 text-right opacity-20 hidden md:block">
<div className="h-2 w-32 bg-steel rounded-full ml-auto mb-2"></div>
<div className="h-2 w-24 bg-steel rounded-full ml-auto"></div>
</div>
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-void border border-terminal rounded-full z-10"></div>
<div className="order-1 md:order-2 pl-0 md:pl-12">
<h4 className="font-mono text-terminal text-sm mb-2">02_CALCULATION</h4>
<h3 className="font-sans text-3xl font-medium text-ash mb-4">Regression Analysis</h3>
<p className="font-body text-steel text-lg">SIGMA analyzes your holdings against 50+ macro-economic indicators to identify drag and calculate variance.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
<div className="md:text-right pr-0 md:pr-12">
<h4 className="font-mono text-terminal text-sm mb-2">03_REBALANCE</h4>
<h3 className="font-sans text-3xl font-medium text-ash mb-4">Auto-Execution</h3>
<p className="font-body text-steel text-lg">The engine automatically re-weights your portfolio to the optimal efficient frontier, minimizing fee impact.</p>
</div>
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-void border border-terminal rounded-full z-10 shadow-[0_0_10px_#00FF94]"></div>
<div className="pl-0 md:pl-12 opacity-20 hidden md:block">
<div className="h-2 w-32 bg-steel rounded-full mb-2"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-carbon border-y border-white/10 z-20 relative">
<div className="container mx-auto px-6 max-w-4xl">
<h2 className="font-sans font-medium text-4xl text-center mb-16">WHY MATH BEATS MANAGEMENT.</h2>
<div className="border border-white/10 bg-void">

<div className="grid grid-cols-3 border-b border-white/10">
<div className="p-6 font-mono text-xs text-steel uppercase tracking-widest">Metric</div>
<div className="p-6 font-mono text-xs text-steel uppercase tracking-widest border-l border-white/10">Traditional</div>
<div className="p-6 font-mono text-xs text-terminal uppercase tracking-widest border-l border-white/10 bg-terminal/5">SIGMA</div>
</div>

<div className="grid grid-cols-3 border-b border-white/10 group hover:bg-white/5 transition-colors">
<div className="p-6 font-body text-ash text-sm">Fee Structure</div>
<div className="p-6 font-body text-steel text-sm border-l border-white/10">2% Mgmt + 20% Perf</div>
<div className="p-6 font-body text-ash text-sm font-semibold border-l border-white/10 bg-terminal/5 group-hover:bg-terminal/10 transition-colors">0.5% Flat</div>
</div>

<div className="grid grid-cols-3 border-b border-white/10 group hover:bg-white/5 transition-colors">
<div className="p-6 font-body text-ash text-sm">Decision Time</div>
<div className="p-6 font-body text-steel text-sm border-l border-white/10">3-5 Business Days</div>
<div className="p-6 font-body text-ash text-sm font-semibold border-l border-white/10 bg-terminal/5 group-hover:bg-terminal/10 transition-colors">Instant (&lt;40ms)</div>
</div>

<div className="grid grid-cols-3 border-b border-white/10 group hover:bg-white/5 transition-colors">
<div className="p-6 font-body text-ash text-sm">Emotional Bias</div>
<div className="p-6 font-body text-steel text-sm border-l border-white/10">High (Human Error)</div>
<div className="p-6 font-body text-ash text-sm font-semibold border-l border-white/10 bg-terminal/5 group-hover:bg-terminal/10 transition-colors">None (Algorithmic)</div>
</div>

<div className="grid grid-cols-3 group hover:bg-white/5 transition-colors">
<div className="p-6 font-body text-ash text-sm">Transparency</div>
<div className="p-6 font-body text-steel text-sm border-l border-white/10">Quarterly PDF</div>
<div className="p-6 font-body text-ash text-sm font-semibold border-l border-white/10 bg-terminal/5 group-hover:bg-terminal/10 transition-colors">Real-time Dashboard</div>
</div>
</div>
</div>
</section>

<section className="py-24 container mx-auto px-6 z-20 relative bg-[#050505]" id="risk">
<div className="flex justify-center mb-12">
<div className="bg-carbon border border-white/10 p-1 rounded-full flex gap-1">
<button className="px-6 py-2 rounded-full text-xs font-mono uppercase bg-white/10 text-ash">Personal</button>
<button className="px-6 py-2 rounded-full text-xs font-mono uppercase text-steel hover:text-ash">Institutional</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-panel p-8 md:p-12 flex flex-col hover:border-white/30 transition-colors">
<h3 className="font-mono text-xl uppercase tracking-widest text-ash mb-2">VALIDATOR</h3>
<div className="text-4xl font-sans font-medium text-ash mb-8">0.5% <span className="text-lg text-steel">/ yr</span></div>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3 text-steel text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> Automated Rebalancing
                    </li>
<li className="flex items-center gap-3 text-steel text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> Tax-Loss Harvesting
                    </li>
<li className="flex items-center gap-3 text-steel text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> Weekly Reports
                    </li>
</ul>
<button className="w-full py-4 border border-white/20 text-xs font-mono uppercase tracking-widest hover:bg-ash hover:text-void transition-all">Start Validation</button>
</div>

<div className="glass-panel p-8 md:p-12 flex flex-col border-terminal relative overflow-hidden">
<div className="absolute top-0 right-0 bg-terminal text-void text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider">Recommended</div>
<h3 className="font-mono text-xl uppercase tracking-widest text-terminal mb-2">MARKET MAKER</h3>
<div className="text-4xl font-sans font-medium text-ash mb-8">0.8% <span className="text-lg text-steel">/ yr</span></div>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3 text-steel text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> All Validator features
                    </li>
<li className="flex items-center gap-3 text-steel text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> Direct Indexing
                    </li>
<li className="flex items-center gap-3 text-steel text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> Private API Access
                    </li>
<li className="flex items-center gap-3 text-ash text-sm font-body">
<i className="w-4 h-4 text-terminal" data-lucide="check"></i> Dedicated Quant Advisor
                    </li>
</ul>
<button className="w-full py-4 bg-terminal text-void text-xs font-mono uppercase tracking-widest font-bold hover:bg-white transition-colors">Initialize</button>
</div>
</div>
</section>

<footer className="bg-void border-t border-white/10 pt-20 pb-12 z-20 relative">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<h2 className="font-sans font-bold text-2xl tracking-tighter text-ash mb-6">SIGMA</h2>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-terminal animate-pulse"></span>
<span className="font-mono text-[10px] uppercase text-steel">All Systems Operational. Latency: 12ms.</span>
</div>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-steel mb-6 tracking-widest">Platform</h4>
<ul className="space-y-3 font-body text-sm text-ash/80">
<li><a className="hover:text-terminal transition-colors" href="#">Login</a></li>
<li><a className="hover:text-terminal transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-terminal transition-colors" href="#">API Status</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-steel mb-6 tracking-widest">Legal</h4>
<ul className="space-y-3 font-body text-sm text-ash/80">
<li><a className="hover:text-terminal transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-terminal transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-terminal transition-colors" href="#">Form ADV</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-steel mb-6 tracking-widest">Social</h4>
<ul className="space-y-3 font-body text-sm text-ash/80">
<li><a className="hover:text-terminal transition-colors" href="#">Twitter/X</a></li>
<li><a className="hover:text-terminal transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-terminal transition-colors" href="#">Discord</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center md:text-left">
<p className="font-mono text-[10px] uppercase text-steel">© 2026 SIGMA TECHNOLOGIES INC. NOT FINANCIAL ADVICE.</p>
</div>
</div>
</footer>


    </>
  );
}
