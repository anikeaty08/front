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
night: '#0a0a0c',
charcoal: '#121214',
cyan: {
400: '#22d3ee',
500: '#06b6d4',
DEFAULT: '#00f0ff',
},
glass: 'rgba(255, 255, 255, 0.03)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
pixel: ['Silkscreen', 'cursive'],
},
animation: {
'radar-spin': 'spin 4s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'flicker': 'flicker 2s infinite',
'scanline': 'scanline 8s linear infinite',
},
keyframes: {
flicker: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0.4' },
'52%': { opacity: '0.1' },
'54%': { opacity: '1' },
},
scanline: {
'0%': { backgroundPosition: '0% 0%' },
'100%': { backgroundPosition: '0% 100%' },
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
      

<div className="noise-overlay"></div>
<div className="scanline-overlay"></div>

<div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/10 bg-night/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-cyan-DEFAULT w-5 h-5" data-lucide="shield-check"></i>
<span className="font-pixel text-lg tracking-widest text-white mt-1">SENTINEL</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-cyan-DEFAULT transition-colors" href="#">Intelligence</a>
<a className="hover:text-cyan-DEFAULT transition-colors" href="#">Audits</a>
<a className="hover:text-cyan-DEFAULT transition-colors" href="#">Network</a>
<a className="hover:text-cyan-DEFAULT transition-colors" href="#">Pricing</a>
</div>
<button className="group relative px-4 py-2 text-xs font-mono uppercase tracking-widest border border-cyan-500/30 text-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 transition-all">
<span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-500"></span>
<span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-500"></span>
                System Login
            </button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-950/30 border border-cyan-900/50">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">System Operational</span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                    Defense-grade <br/>
                    security for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-700">decentralized</span> economy.
                </h1>
<p className="text-lg text-zinc-400 max-w-lg font-light leading-relaxed">
                    Automated auditing and real-time threat detection for smart contracts. We watch the perimeter 24/7 so you can build without fear.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="relative px-8 py-3 bg-cyan-600 text-black text-sm font-semibold tracking-wide hover:bg-cyan-500 transition-all group overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
                            INITIALIZE SCAN <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-3 border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-cyan-500/50 hover:text-white transition-all bg-zinc-900/50">
                        VIEW LIVE DEMO
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-xs font-mono text-zinc-500">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-cyan-500" data-lucide="check"></i> SOLIDITY
                    </div>
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-cyan-500" data-lucide="check"></i> RUST
                    </div>
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-cyan-500" data-lucide="check"></i> VYPER
                    </div>
</div>
</div>

<div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">

<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-800 z-20"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-800 z-20"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-800 z-20"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-800 z-20"></div>

<div className="relative w-full h-full bg-charcoal/80 border border-zinc-800 rounded-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-cyan-900/10">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>

<div className="absolute w-[80%] h-[80%] border border-cyan-900/30 rounded-full"></div>
<div className="absolute w-[60%] h-[60%] border border-cyan-900/30 rounded-full"></div>
<div className="absolute w-[40%] h-[40%] border border-cyan-900/30 rounded-full"></div>
<div className="absolute w-[20%] h-[20%] border border-cyan-900/30 rounded-full"></div>

<div className="absolute w-full h-[1px] bg-cyan-900/30"></div>
<div className="absolute h-full w-[1px] bg-cyan-900/30"></div>

<div className="absolute w-full h-full animate-radar-spin rounded-full overflow-hidden">
<div className="w-1/2 h-1/2 absolute top-0 right-0 radar-sweep origin-bottom-left"></div>
</div>


<div className="absolute top-[25%] left-[65%] flex flex-col items-center group cursor-crosshair">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
<div className="mt-1 px-1 py-0.5 bg-red-950/80 border border-red-800 text-[10px] font-pixel text-red-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            HIGH RISK
                        </div>
</div>

<div className="absolute bottom-[30%] left-[25%] flex flex-col items-center group cursor-crosshair">
<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-flicker shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
</div>

<div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-60"></div>
<div className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-60"></div>

<div className="absolute w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_#22d3ee]"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur border border-zinc-800 p-3 flex justify-between items-end font-mono text-[10px]">
<div className="flex flex-col gap-1 text-cyan-400">
<span className="opacity-50">TARGET_HASH</span>
<span className="tracking-wider">0x71...3A9F</span>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="text-zinc-500">STATUS</span>
<span className="text-emerald-400 animate-pulse">MONITORING</span>
</div>
</div>

<div className="absolute top-4 right-4 text-[9px] font-mono text-cyan-700 leading-tight text-right opacity-70">
<p>X: 49.2031</p>
<p>Y: 12.0049</p>
<p>Z: 00.0001</p>
</div>
</div>
</div>
</main>

<section className="border-t border-zinc-800 bg-charcoal relative">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-12">
<h2 className="font-pixel text-2xl text-white mb-2">SYSTEM CAPABILITIES</h2>
<div className="h-0.5 w-12 bg-cyan-500"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-6 bg-night border border-zinc-800 hover:border-cyan-800 transition-colors duration-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-4 group-hover:text-cyan-400 text-zinc-400 transition-colors">
<i className="w-5 h-5" data-lucide="scan-line"></i>
</div>
<h3 className="text-zinc-100 font-medium mb-2 tracking-tight">Smart Contract Auditing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Static and dynamic analysis pipelines that deconstruct bytecode to find reentrancy vulnerabilities before deployment.
                    </p>
</div>

<div className="group relative p-6 bg-night border border-zinc-800 hover:border-cyan-800 transition-colors duration-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-4 group-hover:text-cyan-400 text-zinc-400 transition-colors">
<i className="w-5 h-5" data-lucide="radar"></i>
</div>
<h3 className="text-zinc-100 font-medium mb-2 tracking-tight">Mempool Monitoring</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Scanning the mempool for malicious transactions targeting your protocol. Intercept threats in block-time.
                    </p>
</div>

<div className="group relative p-6 bg-night border border-zinc-800 hover:border-cyan-800 transition-colors duration-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-4 group-hover:text-cyan-400 text-zinc-400 transition-colors">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<h3 className="text-zinc-100 font-medium mb-2 tracking-tight">Auto-Pause Triggers</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Programmatic emergency brakes. If a critical anomaly is detected, Sentinel pauses contracts automatically.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-800 bg-black py-20">
<div className="max-w-4xl mx-auto px-6">
<div className="rounded-sm border border-zinc-800 bg-[#0a0a0c] p-1 shadow-2xl">

<div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono">sentinel-cli — v2.4.0</div>
<div className="w-10"></div>
</div>

<div className="p-6 font-mono text-xs md:text-sm overflow-hidden h-64 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c] pointer-events-none z-10"></div>
<div className="space-y-2 text-zinc-400">
<div className="flex gap-2">
<span className="text-cyan-500">➜</span>
<span>sentinel watch --target 0x8a...4b12</span>
</div>
<div className="text-zinc-500 italic pb-2">Initializing websocket connection... Connected.</div>
<div className="grid grid-cols-[80px_1fr] gap-2">
<span className="text-zinc-600">10:42:01</span>
<span className="text-emerald-500">Block 18239402 scanned. No threats found.</span>
</div>
<div className="grid grid-cols-[80px_1fr] gap-2">
<span className="text-zinc-600">10:42:13</span>
<span className="text-emerald-500">Block 18239403 scanned. No threats found.</span>
</div>
<div className="grid grid-cols-[80px_1fr] gap-2">
<span className="text-zinc-600">10:42:25</span>
<span className="text-yellow-500">WARNING: Flash loan detected in pool. Analyzing...</span>
</div>
<div className="grid grid-cols-[80px_1fr] gap-2">
<span className="text-zinc-600">10:42:26</span>
<span className="text-cyan-400">ANALYSIS: Arbitrage opportunity. Safe.</span>
</div>
<div className="grid grid-cols-[80px_1fr] gap-2 opacity-50">
<span className="text-zinc-600">10:42:38</span>
<span className="text-emerald-500">Block 18239405 scanned. No threats found.</span>
</div>
<div className="grid grid-cols-[80px_1fr] gap-2 opacity-30">
<span className="text-zinc-600">10:42:50</span>
<span className="text-emerald-500">Block 18239406 scanned. No threats found.</span>
</div>

<div className="flex gap-2 pt-2">
<span className="text-cyan-500">➜</span>
<span className="w-2 h-4 bg-cyan-500 animate-pulse"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 bg-night py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="text-zinc-600 w-4 h-4" data-lucide="shield"></i>
<span className="font-pixel text-zinc-500 text-sm tracking-widest">SENTINEL SYSTEMS</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500 font-mono">
<a className="hover:text-cyan-400 transition-colors" href="#">DOCUMENTATION</a>
<a className="hover:text-cyan-400 transition-colors" href="#">API STATUS</a>
<a className="hover:text-cyan-400 transition-colors" href="#">SECURITY POLICY</a>
</div>
<div className="text-xs text-zinc-700">
                © 2024 SENTINEL INC.
            </div>
</div>
</footer>


    </>
  );
}
