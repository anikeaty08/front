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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-b from-[#0B0F2B] via-[#080a1c] to-[#050714]"></div>

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7B2CBF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00C2FF] rounded-full mix-blend-screen filter blur-[120px] opacity-15"></div>
<div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[300px] h-[300px] bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>

<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<main className="relative z-10 w-full max-w-md h-full min-h-screen flex flex-col justify-between pb-24 sm:h-[850px] sm:min-h-0 sm:border sm:border-white/10 sm:rounded-[3rem] sm:shadow-[0_0_50px_rgba(0,194,255,0.1)] overflow-hidden backdrop-blur-sm bg-white/[0.01]">

<header className="pt-8 pb-4 px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#7B2CBF] flex items-center justify-center shadow-[0_0_15px_rgba(0,194,255,0.4)]">
<span className="iconify text-white" data-icon="lucide:zap" data-width="16"></span>
</div>
<h1 className="font-['Orbitron'] text-lg tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 shadow-cyan-500/50 drop-shadow-[0_0_10px_rgba(0,194,255,0.3)]">
                    THE ARK CRYPTO
                </h1>
</div>
<button className="relative group">
<div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<span className="iconify text-slate-300 group-hover:text-white transition-colors relative z-10" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#FF5722] rounded-full shadow-[0_0_8px_#FF5722]"></span>
</button>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 space-y-8">

<section className="relative w-full aspect-[1.6/1] rounded-3xl p-6 overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group">

<div className="absolute inset-0 bg-gradient-to-br from-[#1A1E3C] via-[#0f1225] to-[#0B0F2B] z-0"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#00C2FF]/10 to-transparent opacity-50 z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-400 tracking-wide uppercase mb-1">Total Balance</p>
<h2 className="text-3xl font-semibold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                $1,245.89
                            </h2>
</div>
<div className="flex items-center gap-1 bg-[#39FF14]/10 px-2 py-1 rounded-lg border border-[#39FF14]/20 shadow-[0_0_10px_rgba(57,255,20,0.1)]">
<span className="iconify text-[#39FF14]" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="12"></span>
<span className="text-[10px] font-medium text-[#39FF14] tracking-wide">+5.4%</span>
</div>
</div>

<div className="relative h-20 w-full mt-4">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00C2FF" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#00C2FF" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,50 L0,35 Q10,30 20,38 T40,25 T60,30 T80,10 L100,5 L100,50 Z" fill="url(#chartGradient)"></path>
<path className="drop-shadow-[0_0_8px_#00C2FF]" d="M0,35 Q10,30 20,38 T40,25 T60,30 T80,10 L100,5" fill="none" stroke="#00C2FF" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="absolute right-0 top-0 translate-y-1 translate-x-2 animate-bounce" style={{animationDuration: '3s'}}>
<span className="iconify text-[#00C2FF] drop-shadow-[0_0_10px_#00C2FF]" data-icon="lucide:rocket" data-strokeWidth="1.5" data-width="20" style={{transform: 'rotate(45deg)'}}></span>
</div>
</div>
</div>

<div className="absolute bottom-[-20px] right-[-20px] opacity-[0.05] z-0">
<span className="iconify text-white" data-icon="lucide:hexagon" data-strokeWidth="1" data-width="150"></span>
</div>
</section>

<div className="flex justify-center py-2">
<button className="relative w-24 h-24 rounded-full flex items-center justify-center group focus:outline-none">

<div className="absolute inset-0 rounded-full border border-[#00C2FF]/30 shadow-[0_0_30px_rgba(0,194,255,0.2)] animate-spin-slow" style={{animation: 'spin 10s linear infinite'}}></div>
<div className="absolute inset-[-4px] rounded-full border border-[#7B2CBF]/30 opacity-50"></div>

<div className="absolute inset-2 bg-gradient-to-b from-[#1A1E3C] to-[#0B0F2B] rounded-full border border-[#00C2FF]/50 shadow-[inset_0_0_20px_rgba(0,194,255,0.3)] z-10 transition-transform transform group-active:scale-95 flex flex-col items-center justify-center">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/50 to-transparent absolute top-1/2 -translate-y-1/2 opacity-30"></div>
<span className="iconify text-[#00E5FF] mb-1 drop-shadow-[0_0_5px_#00E5FF]" data-icon="lucide:power" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-[9px] font-semibold text-white tracking-widest leading-none mt-1">ARK<br/>DRIVE</span>
</div>

<div className="absolute inset-0 rounded-full bg-[#00C2FF] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
</button>
</div>

<div className="grid grid-cols-2 gap-4 pb-20">

<div className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-4 border border-white/[0.08] hover:border-[#7B2CBF]/50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#7B2CBF] filter blur-[50px] opacity-20"></div>
<div className="flex justify-between items-start mb-3">
<div className="p-2 rounded-lg bg-[#7B2CBF]/10 text-[#c084fc]">
<span className="iconify" data-icon="lucide:flag" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Stellar Missions</h3>
<p className="text-[10px] text-slate-400 mb-3">Staking Rewards</p>

<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
<div className="h-full w-2/3 bg-gradient-to-r from-[#7B2CBF] to-[#00C2FF] shadow-[0_0_10px_#7B2CBF]"></div>
</div>
<div className="flex items-center text-[#c084fc] text-[10px] font-medium">
                        Earn Rewards <span className="iconify ml-1" data-icon="lucide:chevron-right" data-width="10"></span>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-4 border border-white/[0.08] hover:border-[#00C2FF]/50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#00C2FF] filter blur-[50px] opacity-20"></div>
<div className="flex justify-between items-start mb-3">
<div className="p-2 rounded-lg bg-[#00C2FF]/10 text-[#00E5FF]">
<span className="iconify" data-icon="lucide:arrow-left-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="iconify text-[#FF5722] opacity-80" data-icon="lucide:globe-2" data-strokeWidth="1.5" data-width="16"></span>
</div>
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Galactic Bridge</h3>
<p className="text-[10px] text-slate-400 mb-3">Cross-Chain</p>
<div className="flex items-center text-[#00E5FF] text-[10px] font-medium">
                        Swap Assets <span className="iconify ml-1" data-icon="lucide:chevron-right" data-width="10"></span>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-4 border border-white/[0.08] hover:border-[#39FF14]/50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-16 h-16 bg-[#39FF14] filter blur-[50px] opacity-10"></div>
<div className="flex justify-between items-start mb-3">
<div className="p-2 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Cosmic Council</h3>
<p className="text-[10px] text-slate-400 mb-3">Governance</p>
<div className="flex items-center text-[#39FF14] text-[10px] font-medium">
                        Vote Now <span className="iconify ml-1" data-icon="lucide:chevron-right" data-width="10"></span>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-4 border border-white/[0.08] hover:border-[#E91E63]/50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute bottom-0 right-0 w-16 h-16 bg-[#E91E63] filter blur-[50px] opacity-10"></div>
<div className="flex justify-between items-start mb-3">
<div className="p-2 rounded-lg bg-[#E91E63]/10 text-[#E91E63]">
<span className="iconify" data-icon="lucide:pie-chart" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Stargazer</h3>
<p className="text-[10px] text-slate-400 mb-3">Portfolio</p>
<div className="flex gap-1.5 mt-auto">
<div className="w-2 h-2 rounded-full bg-[#00C2FF] shadow-[0_0_5px_#00C2FF]"></div>
<div className="w-2 h-2 rounded-full bg-[#E91E63] shadow-[0_0_5px_#E91E63]"></div>
<div className="w-2 h-2 rounded-full bg-[#7B2CBF] shadow-[0_0_5px_#7B2CBF]"></div>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-0 left-0 right-0 z-50">

<div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2B] via-[#0B0F2B]/95 to-transparent backdrop-blur-lg h-24 pt-4"></div>
<div className="relative flex justify-around items-center px-6 pb-6 pt-2 h-full">

<button className="flex flex-col items-center gap-1 group">
<div className="p-2 rounded-xl group-hover:bg-white/5 transition-colors">
<span className="iconify text-slate-400 group-hover:text-[#00C2FF] transition-colors" data-icon="lucide:compass" data-strokeWidth="1.5" data-width="22"></span>
</div>
<span className="text-[10px] font-medium text-slate-500 group-hover:text-[#00C2FF] transition-colors">Explore</span>
</button>

<button className="relative -top-5 group">
<div className="absolute inset-0 bg-[#00C2FF] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative w-14 h-14 rounded-full bg-[#0B0F2B] border border-[#00C2FF]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,194,255,0.3)] group-hover:scale-105 transition-transform">
<span className="iconify text-[#00C2FF]" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="26"></span>
</div>
</button>

<button className="flex flex-col items-center gap-1 group">
<div className="p-2 rounded-xl group-hover:bg-white/5 transition-colors">
<span className="iconify text-slate-400 group-hover:text-[#00C2FF] transition-colors" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="22"></span>
</div>
<span className="text-[10px] font-medium text-slate-500 group-hover:text-[#00C2FF] transition-colors">Security</span>
</button>
</div>

<div className="absolute bottom-1 w-full text-center">
<p className="text-[9px] text-slate-600 font-medium tracking-wide">Secured by Pulsechain Network</p>
</div>
</nav>
</main>
<style>
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin 8s linear infinite;
        }
    </style>

    </>
  );
}
