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
bg: {
main: '#020202',
surface: '#080808',
hover: '#0D0D0D'
},
line: {
subtle: 'rgba(255, 255, 255, 0.06)',
strong: 'rgba(255, 255, 255, 0.15)',
},
text: {
primary: '#EDEDED',
secondary: '#666666',
tertiary: '#333333'
},
brand: {
DEFAULT: '#00FF94', // Acid Green
dim: 'rgba(0, 255, 148, 0.1)',
accent: '#CDFF50' // Lime Yellow for secondary actions
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
},
animation: {
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
'ticker': 'ticker 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
'glitch': 'glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
},
ticker: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="noise"></div>

<div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>
<div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>
<div className="fixed top-0 left-6 w-[1px] h-screen bg-white/5 hidden xl:block z-40"></div>
<div className="fixed top-0 right-6 w-[1px] h-screen bg-white/5 hidden xl:block z-40"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-bg-main/80 backdrop-blur-md border-b border-line-subtle">
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-brand rounded-sm animate-pulse-fast"></div>
<span className="font-mono font-bold tracking-tighter text-xl">VELOCIS_</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-line-subtle">
<a className="font-mono text-[10px] text-text-secondary hover:text-white transition-colors uppercase tracking-widest" href="#">Platform</a>
<a className="font-mono text-[10px] text-text-secondary hover:text-white transition-colors uppercase tracking-widest" href="#">Network</a>
<a className="font-mono text-[10px] text-text-secondary hover:text-white transition-colors uppercase tracking-widest" href="#">Latency</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end mr-4">
<span className="font-mono text-[9px] text-text-secondary">SYSTEM STATUS</span>
<span className="font-mono text-[9px] text-brand">OPERATIONAL</span>
</div>
<button className="bg-white text-black font-mono font-bold text-xs px-5 py-2 hover:bg-brand transition-colors flex items-center gap-2 group">
                TERMINAL
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center grid-bg">

<div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none animate-pulse-fast"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="inline-flex items-center gap-2 border border-brand/20 bg-brand/5 px-3 py-1 w-fit rounded text-brand font-mono text-[10px] uppercase tracking-wider">
<span className="w-1.5 h-1.5 bg-brand rounded-full animate-blink"></span>
                    v2.4.0 Live on Mainnet
                </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-[0.9]">
                    ALGORITHMIC <br/>
<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">SUPREMACY</span>
</h1>
<p className="font-mono text-sm md:text-base text-text-secondary max-w-xl leading-relaxed border-l border-brand/30 pl-6">
                    Deploy neural execution strategies to 40+ exchanges. <br/>
<span className="text-white">Microsecond latency.</span> Institutional grade infrastructure.
                </p>

<div className="mt-8 w-full max-w-md group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand/0 rounded opacity-30 group-hover:opacity-70 transition duration-500 blur"></div>
<div className="relative flex items-center bg-black border border-line-strong p-1 rounded">
<span className="pl-4 pr-2 font-mono text-brand text-sm">$</span>
<input className="bg-transparent border-none text-white font-mono text-sm w-full focus:ring-0 placeholder-text-tertiary h-10" disabled="" placeholder="pip install velocis-core" type="text"/>
<button className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-4 py-2 rounded transition-colors h-10">
                            COPY
                        </button>
</div>
</div>
</div>

<div className="lg:col-span-5 relative perspective-[2000px] h-[500px] flex items-center justify-center">

<div className="absolute w-full aspect-square max-w-md bg-[#050505] border border-line-strong rounded-xl shadow-2xl overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out group">

<div className="h-10 border-b border-line-subtle bg-white/5 flex items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="font-mono text-[10px] text-text-secondary">monitor.py</div>
</div>

<div className="p-6 font-mono text-xs relative">

<div className="absolute top-0 left-0 w-full h-[2px] bg-brand/50 shadow-[0_0_20px_#00FF94] animate-scan opacity-50 pointer-events-none z-10"></div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/5 p-3 rounded border border-line-subtle">
<div className="text-text-secondary text-[10px] mb-1">LATENCY</div>
<div className="text-brand text-lg">0.4ms</div>
</div>
<div className="bg-white/5 p-3 rounded border border-line-subtle">
<div className="text-text-secondary text-[10px] mb-1">FILL RATE</div>
<div className="text-white text-lg">99.9%</div>
</div>
</div>

<div className="space-y-1 opacity-80">
<div className="flex gap-4"><span className="text-text-tertiary">1</span> <span className="text-purple-400">def</span> <span className="text-blue-400">execute_strategy</span>(tick):</div>
<div className="flex gap-4"><span className="text-text-tertiary">2</span> <span className="pl-4 text-text-secondary"># Analyze L3 order book</span></div>
<div className="flex gap-4"><span className="text-text-tertiary">3</span> <span className="pl-4 text-white">alpha = model.predict(tick)</span></div>
<div className="flex gap-4"><span className="text-text-tertiary">4</span> <span className="pl-4 text-purple-400">if</span> alpha.confidence &gt; <span className="text-orange-400">0.95</span>:</div>
<div className="flex gap-4"><span className="text-text-tertiary">5</span> <span className="pl-8 text-white">route.optimize(</span></div>
<div className="flex gap-4"><span className="text-text-tertiary">6</span> <span className="pl-12 text-green-400">venue="NASDAQ",</span></div>
<div className="flex gap-4"><span className="text-text-tertiary">7</span> <span className="pl-12 text-green-400">speed="ULTRA"</span></div>
<div className="flex gap-4"><span className="text-text-tertiary">8</span> <span className="pl-8 text-white">)</span></div>
</div>

<div className="absolute bottom-6 right-6 bg-brand text-black px-3 py-1 rounded text-[10px] font-bold animate-bounce">
                            ORDER FILLED
                        </div>
</div>
</div>

<div className="absolute -z-10 w-[120%] h-[120%] border border-line-subtle rounded-full opacity-20 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute -z-10 w-[80%] h-[80%] border border-dashed border-line-subtle rounded-full opacity-20 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-line-subtle bg-bg-main/90 backdrop-blur-sm overflow-hidden py-3">
<div className="flex whitespace-nowrap animate-ticker font-mono text-[10px] text-text-secondary tracking-widest gap-12 items-center">
<span>BTC/USD <span className="text-brand">$64,231.20</span></span>
<span>ETH/USD <span className="text-brand">$3,421.50</span></span>
<span className="text-brand">● SYSTEM OPTIMAL</span>
<span>NODE_US_EAST_1: <span className="text-white">ONLINE</span></span>
<span>NODE_EU_WEST_2: <span className="text-white">ONLINE</span></span>
<span>NODE_AP_NORT_1: <span className="text-white">ONLINE</span></span>
<span>MEMPOOL: <span className="text-white">LOW_CONGESTION</span></span>

<span>BTC/USD <span className="text-brand">$64,231.20</span></span>
<span>ETH/USD <span className="text-brand">$3,421.50</span></span>
<span className="text-brand">● SYSTEM OPTIMAL</span>
<span>NODE_US_EAST_1: <span className="text-white">ONLINE</span></span>
<span>NODE_EU_WEST_2: <span className="text-white">ONLINE</span></span>
<span>NODE_AP_NORT_1: <span className="text-white">ONLINE</span></span>
<span>MEMPOOL: <span className="text-white">LOW_CONGESTION</span></span>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-line-subtle relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="font-sans font-light text-4xl md:text-5xl text-white mb-4">Infrastructure<br/>as an Edge.</h2>
<p className="font-mono text-sm text-text-secondary">Designed for the 0.01% of quantitative firms.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-brand opacity-50" icon="solar:server-square-linear" width="40"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-bg-surface border border-line-subtle p-8 relative overflow-hidden group tech-card rounded-xl">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-full border border-line-strong flex items-center justify-center mb-6 bg-white/5 card-icon transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:global-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-2">Exchange Co-Location</h3>
<p className="text-text-secondary font-mono text-xs leading-relaxed max-w-sm">
                                Physical servers located inside NASDAQ (NY4), CME (Aurora), and Tokyo (TY3) data centers. Zero network hops.
                            </p>
</div>

<div className="mt-8 border-t border-line-subtle pt-6">
<div className="flex justify-between font-mono text-[10px] text-text-secondary mb-2">
<span>PACKET ROUTE</span>
<span><span className="text-brand">0.2ms</span> / DIRECT</span>
</div>
<div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/3 bg-brand blur-[2px] animate-[ticker_2s_linear_infinite]"></div>
</div>
<div className="flex justify-between mt-4 gap-2">
<div className="h-16 w-full bg-white/5 border border-line-subtle rounded flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
<span className="font-bold text-white/20 text-4xl">NY4</span>
</div>
<div className="h-16 w-full bg-white/5 border border-line-subtle rounded flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
<span className="font-bold text-white/20 text-4xl">LD4</span>
</div>
<div className="h-16 w-full bg-white/5 border border-line-subtle rounded flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
<span className="font-bold text-white/20 text-4xl">TY3</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-bg-surface border border-line-subtle p-8 relative overflow-hidden group tech-card rounded-xl flex items-center justify-between">
<div className="max-w-xs relative z-10">
<h3 className="text-xl text-white font-medium mb-2">Transformer Engine</h3>
<p className="text-text-secondary font-mono text-xs">Proprietary FPGA-accelerated inference for real-time market prediction.</p>
</div>
<div className="relative w-24 h-24">
<svg className="w-full h-full animate-spin-slow" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#333" strokeWidth="1"></circle>
<circle className="animate-spin" cx="50" cy="50" fill="none" r="40" stroke="#00FF94" stroke-dasharray="60 180" strokeWidth="1"></circle>
<circle cx="50" cy="50" fill="#00FF94" fillOpacity="0.1" r="20"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-brand font-bold">AI</div>
</div>
</div>

<div className="md:col-span-1 bg-bg-surface border border-line-subtle p-6 relative overflow-hidden group tech-card rounded-xl">
<div className="absolute top-4 right-4 text-text-tertiary">
<iconify-icon icon="solar:code-file-linear" width="24"></iconify-icon>
</div>
<div className="mt-8">
<div className="font-mono text-[10px] text-brand mb-1">SDK</div>
<h3 className="text-lg text-white mb-2">Python First</h3>
<div className="bg-black/50 p-2 rounded border border-line-subtle mt-4">
<code className="font-mono text-[10px] text-text-secondary">
                                import velocis<br/>
                                v = velocis.connect()
                            </code>
</div>
</div>
</div>

<div className="md:col-span-1 bg-bg-surface border border-line-subtle p-6 relative overflow-hidden group tech-card rounded-xl">
<div className="absolute top-4 right-4 text-text-tertiary">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="mt-8">
<div className="font-mono text-[10px] text-brand mb-1">SECURITY</div>
<h3 className="text-lg text-white mb-2">Enclave</h3>
<div className="flex items-center gap-2 mt-4">
<div className="w-2 h-2 bg-brand rounded-full"></div>
<span className="font-mono text-[10px] text-white">SOC2 TYPE II</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative overflow-hidden">

<div className="absolute inset-0 flex justify-center gap-[20%] opacity-10 pointer-events-none">
<div className="w-[1px] h-full bg-white"></div>
<div className="w-[1px] h-full bg-white"></div>
<div className="w-[1px] h-full bg-white"></div>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-block mb-4 px-3 py-1 rounded-full border border-line-subtle bg-white/5 backdrop-blur-sm">
<span className="font-mono text-[10px] text-brand tracking-widest uppercase">Real-time Ingestion</span>
</div>
<h2 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-tight">Processing 40TB of <br/>tick data daily.</h2>

<div className="relative w-full h-48 md:h-64 border-x border-line-subtle flex items-center justify-between px-12 group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-line-strong flex items-center justify-center mb-4 mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-brand/50 transition-colors">
<iconify-icon className="text-text-secondary group-hover:text-brand transition-colors" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">Exchange<br/>Feeds</div>
</div>

<div className="flex-1 h-[1px] bg-line-strong relative mx-4">
<div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-[2px] bg-brand shadow-[0_0_10px_#00FF94] animate-[ticker_2s_linear_infinite_reverse]"></div>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-brand/30 flex items-center justify-center mb-4 mx-auto shadow-[0_0_50px_rgba(0,255,148,0.1)] relative">
<div className="absolute inset-0 border border-brand rounded-full animate-ping opacity-20"></div>
<iconify-icon className="text-brand" icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
<div className="font-mono text-[10px] text-white uppercase tracking-wider font-bold">Velocis Core</div>
</div>

<div className="flex-1 h-[1px] bg-line-strong relative mx-4">
<div className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-[2px] bg-white shadow-[0_0_10px_white] animate-[ticker_2s_linear_infinite]"></div>
</div>

<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-line-strong flex items-center justify-center mb-4 mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-white/50 transition-colors">
<iconify-icon className="text-text-secondary group-hover:text-white transition-colors" icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">Smart<br/>Settlement</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-line-subtle pt-12">
<div>
<div className="font-mono text-3xl text-white mb-1">1.2<span className="text-brand text-lg">ms</span></div>
<div className="font-mono text-[10px] text-text-secondary uppercase">Mean Latency</div>
</div>
<div>
<div className="font-mono text-3xl text-white mb-1">99.9<span className="text-brand text-lg">%</span></div>
<div className="font-mono text-[10px] text-text-secondary uppercase">Uptime</div>
</div>
<div>
<div className="font-mono text-3xl text-white mb-1">$4B<span className="text-brand text-lg">+</span></div>
<div className="font-mono text-[10px] text-text-secondary uppercase">Daily Volume</div>
</div>
<div>
<div className="font-mono text-3xl text-white mb-1">42</div>
<div className="font-mono text-[10px] text-text-secondary uppercase">Connectors</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-line-subtle bg-bg-surface overflow-hidden">
<div className="flex w-[200%] animate-ticker hover:[animation-play-state:paused]">
<div className="flex justify-around w-1/2 items-center px-12 gap-12">
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Coinbase Prime</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Binance Institutional</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Wintermute</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Jump Trading</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Alameda Research</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">FalconX</span>
</div>
<div className="flex justify-around w-1/2 items-center px-12 gap-12">
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Coinbase Prime</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Binance Institutional</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Wintermute</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Jump Trading</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">Alameda Research</span>
<span className="text-2xl font-bold text-line-strong uppercase font-sans tracking-tighter">FalconX</span>
</div>
</div>
</section>

<footer className="pt-24 pb-12 bg-bg-main relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
<div>
<h2 className="text-5xl md:text-6xl font-sans font-medium text-white tracking-tight mb-6">
                        Start <span className="text-brand">Execution.</span>
</h2>
<div className="flex gap-4">
<button className="bg-white hover:bg-brand text-black font-mono text-xs px-8 py-4 uppercase tracking-wide transition-all duration-300">
                            Request Access
                        </button>
<button className="bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs px-8 py-4 uppercase tracking-wide transition-all duration-300">
                            Read Docs
                        </button>
</div>
</div>
<div className="flex items-end justify-start md:justify-end">
<div className="text-right">
<div className="font-mono text-[10px] text-text-secondary mb-2">LAST UPDATE</div>
<div className="font-mono text-xl text-white">2023.10.24 <span className="text-brand">v2.4</span></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line-subtle pt-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-1 mb-4">
<div className="w-2 h-2 bg-white rounded-sm"></div>
<span className="font-mono font-bold tracking-tighter text-sm">VELOCIS_</span>
</div>
<p className="font-mono text-[10px] text-text-secondary leading-relaxed max-w-[200px]">
                        The execution layer for the next generation of quantitative finance.
                    </p>
</div>
<div className="flex flex-col gap-4">
<a className="font-mono text-[11px] text-text-secondary hover:text-white uppercase tracking-wider" href="#">Platform</a>
<a className="font-mono text-[11px] text-text-secondary hover:text-white uppercase tracking-wider" href="#">Features</a>
<a className="font-mono text-[11px] text-text-secondary hover:text-white uppercase tracking-wider" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<a className="font-mono text-[11px] text-text-secondary hover:text-white uppercase tracking-wider" href="#">Company</a>
<a className="font-mono text-[11px] text-text-secondary hover:text-white uppercase tracking-wider" href="#">Careers</a>
<a className="font-mono text-[11px] text-text-secondary hover:text-white uppercase tracking-wider" href="#">Legal</a>
</div>
<div className="col-span-2 md:col-span-1 flex flex-col justify-between h-full">
<div className="w-full bg-white/5 rounded border border-line-subtle p-4">
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-[9px] text-text-secondary">SERVER LOAD</span>
<span className="font-mono text-[9px] text-brand">12%</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[12%] h-full bg-brand"></div>
</div>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-line-subtle flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-mono text-[10px] text-text-tertiary">© 2026 VELOCIS SYSTEMS INC. ALL RIGHTS RESERVED.</p>
<div className="flex gap-4">
<iconify-icon className="text-text-tertiary hover:text-white transition-colors cursor-pointer" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="text-text-tertiary hover:text-white transition-colors cursor-pointer" icon="solar:brand-x-linear"></iconify-icon>
<iconify-icon className="text-text-tertiary hover:text-white transition-colors cursor-pointer" icon="solar:link-linear"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
