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



document.addEventListener('mousemove', (e) => {
document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});



      function updateTime() {
          const now = new Date();
          const utcString = now.toISOString().split('T')[1].split('.')[0];
          const utcEl = document.getElementById('utc-time');
          if(utcEl) utcEl.textContent = utcString + " UTC";

          const istString = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
          const istEl = document.getElementById('ist-time');
          if(istEl) istEl.textContent = istString + " IST";
      }
      setInterval(updateTime, 1000);
      updateTime();
    
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
      

<div className="fixed inset-0 bg-grid z-[-2]"></div>
<div className="ambient-glow"></div>
<div className="cursor-glow"></div>

<header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] animate-pulse"></div>
<span className="text-sm font-semibold tracking-widest text-white uppercase">
            RS TRADING
          </span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 text-xs font-mono-sys text-slate-500">
<iconify-icon icon="solar:server-square-linear" width="14"></iconify-icon>
<span>SYSTEM: ONLINE</span>
</div>
<div className="hidden md:flex items-center gap-2 text-xs font-mono-sys text-slate-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span id="utc-time">00:00:00 UTC</span>
</div>
<div className="hidden md:flex items-center gap-2 text-xs font-mono-sys text-slate-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span id="ist-time">00:00:00 IST</span>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">

<div className="absolute top-1/4 left-10 opacity-20 hidden lg:block">
<div className="font-mono-sys text-xs text-cyan-500 space-y-1">
<p>&gt; INIT_SEQUENCE_START</p>
<p>&gt; LOAD_LIQUIDITY_MAP</p>
<p>&gt; SCANNING_XAUUSD...</p>
</div>
</div>
<div className="max-w-4xl mx-auto text-center z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-wide mb-4">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>INSTITUTIONAL GRADE EXECUTION</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]">
          This Is Not Signals.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-500">
            This Is A System.
          </span>
</h1>
<p className="font-mono-sys text-sm md:text-base text-slate-400 tracking-wide">
          FOREX  |  XAUUSD  |  SMART MONEY LOGIC
           |  RULE-BASED EXECUTION
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
<a className="btn-system group w-full md:w-auto px-8 py-4 rounded-sm flex items-center justify-center gap-3 text-white text-sm font-semibold tracking-widest uppercase" href="#portals">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:login-3-linear" width="20"></iconify-icon>
            Enter The System
          </a>
<a className="w-full md:w-auto px-8 py-4 rounded-sm border border-transparent text-slate-400 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors flex items-center justify-center gap-2" href="#algo">
            Access Algo Engine
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] tracking-[0.2em] uppercase">
          Scroll to initialize
        </span>
<div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-slate-950/50 backdrop-blur-sm py-3 overflow-hidden">
<div className="ticker-wrap">
<div className="ticker-move font-mono-sys text-xs text-slate-500 flex gap-12">
<span>XAUUSD :: 2034.50</span>
<span>EURUSD :: 1.0845</span>
<span>GBPUSD :: 1.2630</span>
<span>US30 :: 38450.00</span>
<span>SYSTEM_STATUS :: OPTIMAL</span>
<span>VOLATILITY :: LOW</span>
<span>SPREAD :: RAW</span>
<span>EXECUTION :: INSTANT</span>

<span>XAUUSD :: 2034.50</span>
<span>EURUSD :: 1.0845</span>
<span>GBPUSD :: 1.2630</span>
<span>US30 :: 38450.00</span>
</div>
</div>
</div>

<section className="py-32 px-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Execution Logic
          </h2>
<div className="h-1 w-20 bg-cyan-500/50 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 text-cyan-900/20 text-6xl font-bold opacity-20 group-hover:text-cyan-500/10 transition-colors">
              01
            </div>
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:radar-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Environment Scan
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Systematic analysis of global market conditions and volatility
              structure before engagement.
            </p>
</div>

<div className="glass-panel p-8 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 text-cyan-900/20 text-6xl font-bold opacity-20 group-hover:text-cyan-500/10 transition-colors">
              02
            </div>
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Liquidity Mapping
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Identifying institutional liquidity pools and order block
              structures.
            </p>
</div>

<div className="glass-panel p-8 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 text-cyan-900/20 text-6xl font-bold opacity-20 group-hover:text-cyan-500/10 transition-colors">
              03
            </div>
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Logic Confirmation
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Multi-timeframe alignment validation. If criteria &lt; 100%, trade
              is void.
            </p>
</div>

<div className="glass-panel p-8 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 text-cyan-900/20 text-6xl font-bold opacity-20 group-hover:text-cyan-500/10 transition-colors">
              04
            </div>
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Precision Entry</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Sniper execution at equilibrium price points to minimize drawdown.
            </p>
</div>

<div className="glass-panel p-8 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 text-cyan-900/20 text-6xl font-bold opacity-20 group-hover:text-cyan-500/10 transition-colors">
              05
            </div>
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Protection Protocol
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Stop Loss is defined before Take Profit. Capital preservation is
              priority one.
            </p>
</div>

<div className="glass-panel p-8 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 text-cyan-900/20 text-6xl font-bold opacity-20 group-hover:text-cyan-500/10 transition-colors">
              06
            </div>
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Risk Deployment</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Asymmetric risk-to-reward ratios ensuring mathematical
              profitability.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 relative overflow-hidden" id="algo">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
<div className="lg:w-1/2 space-y-8">
<div className="inline-block text-cyan-500 font-mono-sys text-xs tracking-widest border border-cyan-500/30 px-2 py-1 bg-cyan-950/30">
            // ALGO_ENGINE_V4.2
          </div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Digital Intelligence
            <br/>
<span className="text-slate-500">Filtered Logic.</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed">
            The RS TRADING engine is not based on emotion or reaction. It is a
            filter. It rejects 95% of market noise to isolate the 5% of
            high-probability structural shifts.
          </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-4 group">
<div className="w-1 h-6 bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                Structure-Driven Decision Making
              </span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-1 h-6 bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                Momentum &amp; Velocity Logic
              </span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-1 h-6 bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors"></div>
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                Automated Risk Management
              </span>
</li>
</ul>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-10 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
<div className="absolute inset-20 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="glass-panel w-32 h-32 rounded-full flex items-center justify-center relative">
<div className="scanline"></div>
<span className="font-mono-sys text-2xl text-cyan-400 font-bold tracking-tighter">
                  RS
                </span>
</div>
</div>

<div className="absolute top-0 right-0 bg-black/80 backdrop-blur border border-white/10 p-3 rounded-sm text-xs font-mono-sys">
<div className="text-slate-500">WIN_RATE</div>
<div className="text-green-400">OPTIMIZED</div>
</div>
<div className="absolute bottom-10 left-0 bg-black/80 backdrop-blur border border-white/10 p-3 rounded-sm text-xs font-mono-sys">
<div className="text-slate-500">DRAWDOWN</div>
<div className="text-cyan-400">&lt; 1.5%</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5">
<div className="max-w-5xl mx-auto text-center px-6">
<h2 className="text-sm font-mono-sys text-cyan-500 tracking-widest uppercase mb-4">
          Philosophy
        </h2>
<h3 className="text-3xl md:text-4xl text-white font-medium mb-12 tracking-tight">
          Process Over Profit
        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 border-l border-white/10 text-left hover:border-cyan-500/50 transition-colors duration-500">
<div className="text-4xl text-white font-light mb-2">01</div>
<h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Capital Safety
            </h4>
<p className="text-xs text-slate-500">
              We do not chase markets. We protect capital first. Profit is the
              byproduct of risk management.
            </p>
</div>
<div className="p-6 border-l border-white/10 text-left hover:border-cyan-500/50 transition-colors duration-500">
<div className="text-4xl text-white font-light mb-2">02</div>
<h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Consistency
            </h4>
<p className="text-xs text-slate-500">
              Compounding small wins mathematically outperforms seeking volatile
              home runs.
            </p>
</div>
<div className="p-6 border-l border-white/10 text-left hover:border-cyan-500/50 transition-colors duration-500">
<div className="text-4xl text-white font-light mb-2">03</div>
<h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Discipline
            </h4>
<p className="text-xs text-slate-500">
              Emotion is removed. Rules are absolute. The system dictates the
              action.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-slate-950 relative">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-sm font-mono-sys text-cyan-500 tracking-widest uppercase mb-3">
              System Feedback
            </h2>
<h3 className="text-3xl text-white font-medium tracking-tight">
              Educational Impact
            </h3>
</div>
<div className="mt-4 md:mt-0">
<div className="text-xs font-mono-sys text-slate-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              VERIFIED_EDUCATIONAL_LOGS
            </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 border border-white/5 bg-white/[0.02] rounded-sm hover:border-cyan-500/20 transition-all">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600 group-hover:text-cyan-500 transition-colors" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-mono-sys text-slate-500">
                  TRADER_ID_04
                </span>
</div>
<div className="text-[10px] font-mono-sys text-slate-700">
                MINDSET
              </div>
</div>
<p className="text-sm text-slate-400 italic leading-relaxed">
              "This system helped me understand structure and risk control
              better. The focus is exactly where it needs to be."
            </p>
</div>

<div className="group p-6 border border-white/5 bg-white/[0.02] rounded-sm hover:border-cyan-500/20 transition-all">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600 group-hover:text-cyan-500 transition-colors" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-mono-sys text-slate-500">
                  TRADER_ID_12
                </span>
</div>
<div className="text-[10px] font-mono-sys text-slate-700">LOGIC</div>
</div>
<p className="text-sm text-slate-400 italic leading-relaxed">
              "Clean logic, no hype, disciplined approach. It is refreshing to
              see a system that prioritizes safety."
            </p>
</div>

<div className="group p-6 border border-white/5 bg-white/[0.02] rounded-sm hover:border-cyan-500/20 transition-all">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600 group-hover:text-cyan-500 transition-colors" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-mono-sys text-slate-500">
                  TRADER_ID_89
                </span>
</div>
<div className="text-[10px] font-mono-sys text-slate-700">
                PROCESS
              </div>
</div>
<p className="text-sm text-slate-400 italic leading-relaxed">
              "More focus on process than profits. This environment forces you
              to be disciplined."
            </p>
</div>
</div>
</div>
</section>
<section className="py-32 px-6" id="portals">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">
              Control Room
            </h2>
<p className="text-slate-400">
              Initialize official communication channels.
            </p>
</div>
<div className="flex items-center gap-2 text-cyan-500 text-sm font-mono-sys mt-4 md:mt-0">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
</span>
            SECURE_CONNECTION
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative bg-slate-900/40 border border-white/10 p-6 rounded-sm overflow-hidden hover:bg-slate-900/60 transition-all hover:border-[#229ED9]/50" href="https://t.me/rstrading0009" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-[#229ED9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
<iconify-icon className="text-slate-400 group-hover:text-[#229ED9] transition-colors" icon="cib:telegram-plane" width="32"></iconify-icon>
<div>
<div className="text-xs font-mono-sys text-slate-500 mb-1">
                  CHANNEL_01
                </div>
<h3 className="text-xl text-white font-medium">Telegram</h3>
<div className="mt-4 flex items-center gap-2 text-xs text-[#229ED9] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
<span>JOIN CHANNEL</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative bg-slate-900/40 border border-white/10 p-6 rounded-sm overflow-hidden hover:bg-slate-900/60 transition-all hover:border-[#25D366]/50" href="https://whatsapp.com/channel/0029VbBaytw9MF9ATP9H0i17" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
<iconify-icon className="text-slate-400 group-hover:text-[#25D366] transition-colors" icon="cib:whatsapp" width="32"></iconify-icon>
<div>
<div className="text-xs font-mono-sys text-slate-500 mb-1">
                  CHANNEL_02
                </div>
<h3 className="text-xl text-white font-medium">WhatsApp</h3>
<div className="mt-4 flex items-center gap-2 text-xs text-[#25D366] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
<span>ACCESS FEED</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative bg-slate-900/40 border border-white/10 p-6 rounded-sm overflow-hidden hover:bg-slate-900/60 transition-all hover:border-[#1877F2]/50" href="https://www.facebook.com/share/17tgcZgScA/" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
<iconify-icon className="text-slate-400 group-hover:text-[#1877F2] transition-colors" icon="cib:facebook" width="32"></iconify-icon>
<div>
<div className="text-xs font-mono-sys text-slate-500 mb-1">
                  PAGE_03
                </div>
<h3 className="text-xl text-white font-medium">Facebook</h3>
<div className="mt-4 flex items-center gap-2 text-xs text-[#1877F2] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
<span>VIEW UPDATES</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative bg-slate-900/40 border border-white/10 p-6 rounded-sm overflow-hidden hover:bg-slate-900/60 transition-all hover:border-[#43E660]/50" href="https://linktr.ee/tradingwithrs0009" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-[#43E660]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
<iconify-icon className="text-slate-400 group-hover:text-[#43E660] transition-colors" icon="simple-icons:linktree" width="30"></iconify-icon>
<div>
<div className="text-xs font-mono-sys text-slate-500 mb-1">
                  HUB_CENTRAL
                </div>
<h3 className="text-xl text-white font-medium">Linktree</h3>
<div className="mt-4 flex items-center gap-2 text-xs text-[#43E660] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
<span>ALL LINKS</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
<div>
<h3 className="text-xl font-semibold text-white tracking-widest uppercase mb-4">
              RS Trading
            </h3>
<p className="text-sm text-slate-500 max-w-sm">
              Owned and operated by Mr. RISHABH SHARMA JI.
              <br/>
<span className="block mt-2 opacity-70">
                Building a rule-based, disciplined and system-driven trading
                environment for educational purposes.
              </span>
</p>
</div>
<div className="text-right flex flex-col items-start md:items-end">
<div className="text-xs font-mono-sys text-slate-600 mb-2">
              SYSTEM_ID: RS_0009
            </div>
<div className="flex gap-4">

<a className="text-slate-500 hover:text-white transition-colors" href="https://t.me/rstrading0009">
<iconify-icon icon="cib:telegram-plane"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="https://whatsapp.com/channel/0029VbBaytw9MF9ATP9H0i17">
<iconify-icon icon="cib:whatsapp"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border border-red-500/10 bg-red-950/5 p-6 rounded-sm">
<div className="flex items-center gap-2 mb-3 text-red-500/80 text-xs font-bold tracking-widest uppercase">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
            Risk &amp; Legal Disclaimer
          </div>
<div className="grid md:grid-cols-2 gap-6 text-[10px] md:text-xs text-slate-500 leading-relaxed text-justify">
<p>
              I am not SEBI registered. This platform is strictly for
              educational purposes only. No investment advice. No guaranteed
              returns.
            </p>
<p>
              Trading in financial markets (Forex, Commodities, Indices)
              involves substantial risk and may not be suitable for all
              investors. There are no guaranteed returns. Past performance of
              any system does not predict future results. Users are solely
              responsible for their own trading decisions and capital
              management.
            </p>
</div>
</div>
<div className="mt-12 text-center text-[10px] text-slate-700 font-mono-sys uppercase tracking-widest">
          © 2024 RS Trading. All Systems Operational.
        </div>
</div>
</footer>


    </>
  );
}
