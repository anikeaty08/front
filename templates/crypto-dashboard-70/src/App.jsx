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
      
<style>
        @keyframes fillProgress {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
        }
        @keyframes pulseDot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
    </style>

<nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-900">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="text-xl font-semibold tracking-tighter text-white">BTC</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="text-neutral-200 transition-colors" href="#">Overview</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Transactions</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Hardware</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400">
<div className="w-2 h-2 rounded-full bg-emerald-500" style={{animation: 'pulseDot 2s ease-in-out infinite'}}></div>
                    Node Active
                </div>
<button className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">

<header className="flex flex-col items-center text-center gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-2">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                Earning Rate: +0.00000050 BTC / min
            </div>
<p className="text-sm font-medium text-neutral-500">Current Balance</p>
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white tabular-nums flex items-center gap-3">
<iconify-icon className="text-neutral-700" icon="solar:bitcoin-linear" strokeWidth="1.5"></iconify-icon>
                0.04921000
            </h1>
<p className="text-sm text-neutral-500 mt-2">≈ $3,194.52 USD</p>
</header>

<section className="relative bg-neutral-900/40 border border-neutral-800/60 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col items-center justify-center gap-8 shadow-2xl shadow-black">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)', backgroundSize: '100% 4px', animation: 'scanline 10s linear infinite'}}></div>
<div className="relative z-10 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white flex items-center justify-center gap-2">
                    Processing Block
                </h2>
<p className="text-sm text-neutral-500 mt-1">Next micro-payout arriving shortly</p>
</div>

<div className="relative w-full max-w-sm z-10 flex flex-col gap-3">
<div className="flex justify-between text-xs font-medium text-neutral-400 px-1">
<span>Cycle Start</span>
<span className="text-emerald-400 tabular-nums">00:59</span>
</div>
<div className="h-2 w-full bg-neutral-950 rounded-full border border-neutral-800 overflow-hidden relative">

<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-full origin-left rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" style={{animation: 'fillProgress 60s linear infinite'}}></div>
</div>
</div>
<div className="relative z-10 flex gap-4 mt-2">
<button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Boost Hashrate
                </button>
<button className="px-6 py-2.5 rounded-full bg-transparent border border-neutral-700 text-neutral-300 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-all active:scale-95 flex items-center gap-2">
<iconify-icon icon="solar:pause-linear" strokeWidth="1.5"></iconify-icon>
                    Pause
                </button>
</div>
</section>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-neutral-900/20 border border-neutral-800/50 rounded-2xl p-6 flex flex-col gap-4">
<div className="flex items-center gap-2 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Daily Revenue</span>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white tabular-nums">+0.00072000</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
                        12% from yesterday
                    </div>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-800/50 rounded-2xl p-6 flex flex-col gap-4">
<div className="flex items-center gap-2 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Auto-Withdrawal</span>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white tabular-nums">0.05 BTC</div>
<div className="mt-3 flex items-center gap-3">
<div className="flex-1 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-neutral-300 w-[98%] rounded-full"></div>
</div>
<span className="text-xs text-neutral-500 font-medium">98%</span>
</div>
</div>
</div>
</div>

<section className="flex flex-col gap-4">
<h3 className="text-sm font-medium text-neutral-400 px-1">Recent Micro-Payouts</h3>
<div className="bg-transparent border border-neutral-800/50 rounded-2xl divide-y divide-neutral-800/50 overflow-hidden">

<div className="p-4 flex items-center justify-between hover:bg-neutral-900/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-500">
<iconify-icon className="text-lg" icon="solar:receive-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-200">Mining Reward</p>
<p className="text-xs text-neutral-500 mt-0.5">Just now</p>
</div>
</div>
<div className="text-sm font-medium text-emerald-400 tabular-nums">
                        +0.00000050
                    </div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-neutral-900/20 transition-colors opacity-80">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-500">
<iconify-icon className="text-lg" icon="solar:receive-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-200">Mining Reward</p>
<p className="text-xs text-neutral-500 mt-0.5">1 min ago</p>
</div>
</div>
<div className="text-sm font-medium text-emerald-400 tabular-nums">
                        +0.00000050
                    </div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-neutral-900/20 transition-colors opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-500">
<iconify-icon className="text-lg" icon="solar:receive-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-200">Mining Reward</p>
<p className="text-xs text-neutral-500 mt-0.5">2 mins ago</p>
</div>
</div>
<div className="text-sm font-medium text-emerald-400 tabular-nums">
                        +0.00000050
                    </div>
</div>
</div>
</section>
</main>

    </>
  );
}
