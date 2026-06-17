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
      

<div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.75\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\' opacity=\\'0.04\\'/%3E%3C/svg%3E\')', pointerEvents: 'none', zIndex: '9999', opacity: '0.4'}}></div>

<div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>
<div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>
<div className="fixed top-0 left-6 w-[1px] h-screen bg-white/5 hidden xl:block z-40"></div>
<div className="fixed top-0 right-6 w-[1px] h-screen bg-white/5 hidden xl:block z-40"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#020202]/80 backdrop-blur-md border-b border-white/10">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-[#00E5FF] rounded-sm" style={{animation: 'pulse-fast 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
<span className="font-mono font-semibold tracking-tight text-xl">NEURAL.TG_</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
<a className="font-mono text-xs text-[#666666] hover:text-white transition-colors uppercase tracking-widest" href="#">Signals</a>
<a className="font-mono text-xs text-[#666666] hover:text-white transition-colors uppercase tracking-widest" href="#">Performance</a>
<a className="font-mono text-xs text-[#666666] hover:text-white transition-colors uppercase tracking-widest" href="#">Architecture</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end mr-4">
<span className="font-mono text-xs text-[#666666]">AI STATUS</span>
<span className="font-mono text-xs text-[#00E5FF]">SCANNING</span>
</div>
<a className="bg-white text-black font-mono font-semibold text-xs px-5 py-2 hover:bg-[#00E5FF] transition-colors flex items-center gap-2 group" href="#">
                OPEN TELEGRAM
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'}}>

<div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" style={{animation: 'pulse-fast 3s infinite'}}></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="inline-flex items-center gap-2 border border-[#00E5FF]/20 bg-[#00E5FF]/5 px-3 py-1 w-fit rounded text-[#00E5FF] font-mono text-xs uppercase tracking-wider">
<span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" style={{animation: 'pulse-fast 1s infinite'}}></span>
                    v4.2 Model Live on Telegram
                </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-[0.9]">
                    AUTONOMOUS <br/>
<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 tracking-tight">ALPHA</span>
</h1>
<p className="font-mono text-sm md:text-base text-[#666666] max-w-xl leading-relaxed border-l border-[#00E5FF]/30 pl-6">
                    Institutional-grade neural networks analyzing 40+ exchanges. <br/>
<span className="text-white">Real-time execution signals.</span> Delivered directly to your device.
                </p>

<div className="mt-8 w-full max-w-md group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#00E5FF] to-transparent rounded opacity-30 group-hover:opacity-70 transition duration-500 blur"></div>
<div className="relative flex items-center bg-black border border-white/20 p-1 rounded">
<span className="pl-4 pr-2 text-[#00E5FF]">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</span>
<input className="bg-transparent border-none text-white font-mono text-sm w-full focus:ring-0 placeholder-[#444444] h-10" readonly="" type="text" value="t.me/neural_alpha_bot"/>
<a className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-6 py-2 rounded transition-colors h-10 flex items-center justify-center" href="#">
                            JOIN
                        </a>
</div>
</div>
<div className="flex items-center gap-4 mt-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-white/10 border border-[#020202]"></div>
<div className="w-6 h-6 rounded-full bg-white/20 border border-[#020202]"></div>
<div className="w-6 h-6 rounded-full bg-white/30 border border-[#020202]"></div>
</div>
<span className="font-mono text-xs text-[#666666]">Join 14,204 active traders</span>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] flex items-center justify-center" style={{perspective: '2000px'}}>

<div className="absolute w-full aspect-[4/5] max-w-sm bg-[#050505] border border-white/20 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-700 ease-out group" onmouseout="this.style.transform='rotateY(-10deg) rotateX(5deg)'" onmouseover="this.style.transform='rotateY(0deg) rotateX(0deg)'" style={{transform: 'rotateY(-10deg) rotateX(5deg)'}}>

<div className="h-14 border-b border-white/10 bg-white/5 flex items-center px-4 gap-3">
<div className="w-8 h-8 rounded-full bg-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/30">
<iconify-icon className="text-[#00E5FF]" icon="solar:cpu-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-sans text-sm font-semibold text-white tracking-tight flex items-center gap-1">
                                NeuralAlpha_Bot
                                <iconify-icon className="text-[#00E5FF]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="12"></iconify-icon>
</span>
<span className="font-mono text-xs text-[#00E5FF]">bot</span>
</div>
</div>

<div className="p-4 font-mono text-xs relative h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 100 Q 50 0 100 100 Z\' fill=\'none\' stroke=\'rgba(255,255,255,0.02)\' strokeWidth=\'1\'/%3E%3C/svg%3E')] bg-cover">

<div className="absolute top-0 left-0 w-full h-[2px] bg-[#00E5FF]/50 shadow-[0_0_20px_#00E5FF] opacity-50 pointer-events-none z-10" style={{animation: 'scan 4s linear infinite'}}></div>

<div className="flex justify-center mb-4">
<span className="bg-white/5 px-2 py-1 rounded text-xs text-[#666666]">Today</span>
</div>

<div className="bg-[#111111] border border-white/10 rounded-xl rounded-tl-none p-4 max-w-[90%] relative shadow-lg" style={{animation: 'float 6s ease-in-out infinite'}}>
<div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
<span className="w-2 h-2 rounded-full bg-[#00E5FF]" style={{animation: 'pulse-fast 1.5s infinite'}}></span>
<span className="text-white font-semibold tracking-tight text-sm">AI SIGNAL DETECTED</span>
</div>
<div className="space-y-2 opacity-90 text-sm">
<div className="flex justify-between"><span className="text-[#666666]">Pair:</span> <span className="text-white font-semibold">BTC/USDT</span></div>
<div className="flex justify-between"><span className="text-[#666666]">Direction:</span> <span className="text-[#00E5FF] font-semibold">LONG ↗</span></div>
<div className="flex justify-between"><span className="text-[#666666]">Entry Zone:</span> <span className="text-white">$64,230 - $64,250</span></div>
<div className="flex justify-between"><span className="text-[#666666]">Take Profit:</span> <span className="text-green-400">$65,800</span></div>
<div className="flex justify-between"><span className="text-[#666666]">Stop Loss:</span> <span className="text-red-400">$63,500</span></div>
<div className="flex justify-between mt-2 pt-2 border-t border-white/5"><span className="text-[#666666]">Confidence:</span> <span className="text-white">98.4%</span></div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 rounded transition-colors text-xs">Acknowledge</button>
</div>
<span className="absolute bottom-2 right-3 text-xs text-[#444444]">14:02</span>
</div>
</div>
</div>

<div className="absolute -z-10 w-[120%] h-[120%] border border-white/10 rounded-full opacity-20" style={{animation: 'spin-slow 20s linear infinite'}}></div>
<div className="absolute -z-10 w-[80%] h-[80%] border border-dashed border-white/10 rounded-full opacity-20" style={{animation: 'spin-slow 15s linear infinite reverse'}}></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#020202]/90 backdrop-blur-sm overflow-hidden py-3">
<div className="flex whitespace-nowrap font-mono text-xs text-[#666666] tracking-widest gap-12 items-center w-[200%]" style={{animation: 'ticker 40s linear infinite'}}>
<span>🟢 LONG BTC/USDT <span className="text-green-400">+14.2%</span></span>
<span>🔴 SHORT ETH/USDT <span className="text-green-400">+8.5%</span></span>
<span className="text-[#00E5FF]">● NEURAL ENGINE: OPTIMAL</span>
<span>LATENCY: <span className="text-white">1.2ms</span></span>
<span>🟢 LONG SOL/USDT <span className="text-green-400">+22.1%</span></span>
<span>WIN RATE (24H): <span className="text-white">87.4%</span></span>
<span>MEMPOOL: <span className="text-white">CLEAR</span></span>

<span>🟢 LONG BTC/USDT <span className="text-green-400">+14.2%</span></span>
<span>🔴 SHORT ETH/USDT <span className="text-green-400">+8.5%</span></span>
<span className="text-[#00E5FF]">● NEURAL ENGINE: OPTIMAL</span>
<span>LATENCY: <span className="text-white">1.2ms</span></span>
<span>🟢 LONG SOL/USDT <span className="text-green-400">+22.1%</span></span>
<span>WIN RATE (24H): <span className="text-white">87.4%</span></span>
<span>MEMPOOL: <span className="text-white">CLEAR</span></span>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-white/10 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="font-sans font-light text-4xl md:text-5xl text-white mb-4 tracking-tight">Intelligence<br/>as an Edge.</h2>
<p className="font-mono text-sm text-[#666666]">Designed for traders who demand absolute precision.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-[#00E5FF] opacity-50" icon="solar:server-square-linear" style={{strokeWidth: '1.5px'}} width="40"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-[#080808] border border-white/10 p-8 relative overflow-hidden group tech-card rounded-xl">
<div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 card-icon transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:bell-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-normal mb-2 tracking-tight">Real-Time Telegram Push</h3>
<p className="text-[#666666] font-mono text-xs leading-relaxed max-w-sm">
                                Millisecond-latency webhooks bridge our trading core directly to your device. No apps to install, no complex setups.
                            </p>
</div>

<div className="mt-8 border-t border-white/10 pt-6">
<div className="flex justify-between font-mono text-xs text-[#666666] mb-2">
<span>DELIVERY ROUTE</span>
<span><span className="text-[#00E5FF]">Instant</span> / API</span>
</div>
<div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/3 bg-[#00E5FF] blur-[2px]" style={{animation: 'ticker 2s linear infinite'}}></div>
</div>
<div className="flex justify-between mt-4 gap-2">
<div className="h-16 w-full bg-white/5 border border-white/10 rounded flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/30" icon="solar:database-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="h-16 w-full bg-white/5 border border-white/10 rounded flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/30" icon="solar:cpu-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="h-16 w-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded flex items-center justify-center relative overflow-hidden transition-colors shadow-[0_0_15px_rgba(0,229,255,0.1)]">
<iconify-icon className="text-[#00E5FF]" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#080808] border border-white/10 p-8 relative overflow-hidden group tech-card rounded-xl flex items-center justify-between">
<div className="max-w-xs relative z-10">
<h3 className="text-xl text-white font-normal mb-2 tracking-tight">Deep Learning Core</h3>
<p className="text-[#666666] font-mono text-xs">Predictive L3 order book analysis powered by proprietary transformer models.</p>
</div>
<div className="relative w-24 h-24">
<svg className="w-full h-full" style={{animation: 'spin-slow 10s linear infinite'}} viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#333" strokeWidth="1"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="#00E5FF" stroke-dasharray="60 180" strokeWidth="1.5" style={{animation: 'spin-slow 3s linear infinite'}}></circle>
<circle cx="50" cy="50" fill="#00E5FF" fillOpacity="0.1" r="20"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-[#00E5FF] font-semibold tracking-tight">AI</div>
</div>
</div>

<div className="md:col-span-1 bg-[#080808] border border-white/10 p-6 relative overflow-hidden group tech-card rounded-xl">
<div className="absolute top-4 right-4 text-[#444444]">
<iconify-icon icon="solar:smartphone-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="mt-8">
<div className="font-mono text-xs text-[#00E5FF] mb-1">ONBOARDING</div>
<h3 className="text-lg text-white mb-2 tracking-tight">Zero Setup</h3>
<p className="text-[#666666] font-mono text-xs mt-4">
                            No coding. No servers. Just tap join and start receiving actionable insights instantly.
                        </p>
</div>
</div>

<div className="md:col-span-1 bg-[#080808] border border-white/10 p-6 relative overflow-hidden group tech-card rounded-xl">
<div className="absolute top-4 right-4 text-[#444444]">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="mt-8">
<div className="font-mono text-xs text-[#00E5FF] mb-1">PERFORMANCE</div>
<h3 className="text-lg text-white mb-2 tracking-tight">Verified Alpha</h3>
<div className="flex items-center gap-2 mt-4 bg-black/50 p-2 rounded border border-white/10 w-fit">
<div className="w-2 h-2 bg-[#00E5FF] rounded-full" style={{animation: 'pulse-fast 1s infinite'}}></div>
<span className="font-mono text-xs text-white">87.4% WIN RATE</span>
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
<div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">Signal Generation</span>
</div>
<h2 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-tight">From market noise to <br/>Telegram alpha.</h2>

<div className="relative w-full h-48 md:h-64 border-x border-white/10 flex items-center justify-between px-12 group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-white/20 flex items-center justify-center mb-4 mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-[#00E5FF]/50 transition-colors">
<iconify-icon className="text-[#666666] group-hover:text-[#00E5FF] transition-colors" icon="solar:graph-up-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="font-mono text-xs text-[#666666] uppercase tracking-wider">Exchange<br/>Data</div>
</div>

<div className="flex-1 h-[1px] bg-white/20 relative mx-4">
<div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" style={{animation: 'ticker 2s linear infinite reverse'}}></div>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-[#00E5FF]/30 flex items-center justify-center mb-4 mx-auto shadow-[0_0_50px_rgba(0,229,255,0.1)] relative">
<div className="absolute inset-0 border border-[#00E5FF] rounded-full opacity-20" style={{animation: 'pulse-fast 1s infinite'}}></div>
<iconify-icon className="text-[#00E5FF]" icon="solar:cpu-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<div className="font-mono text-xs text-white uppercase tracking-wider font-semibold">Neural Core</div>
</div>

<div className="flex-1 h-[1px] bg-white/20 relative mx-4">
<div className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-[2px] bg-white shadow-[0_0_10px_white]" style={{animation: 'ticker 2s linear infinite'}}></div>
</div>

<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-white/20 flex items-center justify-center mb-4 mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-white/50 transition-colors">
<iconify-icon className="text-[#666666] group-hover:text-white transition-colors" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="font-mono text-xs text-[#666666] uppercase tracking-wider">Telegram<br/>Alert</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/10 pt-12">
<div>
<div className="font-mono text-3xl text-white mb-1 tracking-tight">0.1<span className="text-[#00E5FF] text-lg">s</span></div>
<div className="font-mono text-xs text-[#666666] uppercase">Signal Delivery</div>
</div>
<div>
<div className="font-mono text-3xl text-white mb-1 tracking-tight">99.9<span className="text-[#00E5FF] text-lg">%</span></div>
<div className="font-mono text-xs text-[#666666] uppercase">Bot Uptime</div>
</div>
<div>
<div className="font-mono text-3xl text-white mb-1 tracking-tight">14<span className="text-[#00E5FF] text-lg">k+</span></div>
<div className="font-mono text-xs text-[#666666] uppercase">Active Traders</div>
</div>
<div>
<div className="font-mono text-3xl text-white mb-1 tracking-tight">24<span className="text-[#00E5FF] text-lg">/7</span></div>
<div className="font-mono text-xs text-[#666666] uppercase">Market Coverage</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 bg-[#020202] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
<div>
<h2 className="text-5xl md:text-6xl font-sans font-normal text-white tracking-tight mb-6">
                        Trade <span className="text-[#00E5FF]">Smarter.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-white hover:bg-[#00E5FF] text-black font-mono text-xs px-8 py-4 uppercase tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                            Join Free Channel
                        </a>
<a className="bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs px-8 py-4 uppercase tracking-wide transition-all duration-300 text-center" href="#">
                            View Premium
                        </a>
</div>
</div>
<div className="flex items-end justify-start md:justify-end">
<div className="text-right">
<div className="font-mono text-xs text-[#666666] mb-2">MODEL VERSION</div>
<div className="font-mono text-xl tracking-tight text-white">2024.11.02 <span className="text-[#00E5FF]">v4.2</span></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-1 mb-4">
<div className="w-2 h-2 bg-white rounded-sm"></div>
<span className="font-mono font-semibold tracking-tight text-sm">NEURAL.TG_</span>
</div>
<p className="font-mono text-xs text-[#666666] leading-relaxed max-w-[200px]">
                        The execution layer for the next generation of algorithmic retail traders.
                    </p>
</div>
<div className="flex flex-col gap-4">
<a className="font-mono text-xs text-[#666666] hover:text-white uppercase tracking-wider" href="#">Signals</a>
<a className="font-mono text-xs text-[#666666] hover:text-white uppercase tracking-wider" href="#">Results</a>
<a className="font-mono text-xs text-[#666666] hover:text-white uppercase tracking-wider" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<a className="font-mono text-xs text-[#666666] hover:text-white uppercase tracking-wider" href="#">Support</a>
<a className="font-mono text-xs text-[#666666] hover:text-white uppercase tracking-wider" href="#">FAQ</a>
<a className="font-mono text-xs text-[#666666] hover:text-white uppercase tracking-wider" href="#">Terms</a>
</div>
<div className="col-span-2 md:col-span-1 flex flex-col justify-between h-full">
<div className="w-full bg-white/5 rounded border border-white/10 p-4">
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-xs text-[#666666]">SYSTEM STATUS</span>
<span className="font-mono text-xs text-[#00E5FF]">ONLINE</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-full h-full bg-[#00E5FF] opacity-80" style={{animation: 'pulse-fast 2s infinite'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-mono text-xs text-[#444444]">© 2024 NEURAL ALPHA SYSTEMS. ALL RIGHTS RESERVED.</p>
<div className="flex gap-4">
<a className="text-[#444444] hover:text-white transition-colors cursor-pointer" href="#"><iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon></a>
<a className="text-[#444444] hover:text-white transition-colors cursor-pointer" href="#"><iconify-icon icon="solar:brand-x-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
