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



tailwind.config = { darkMode: 'class' }



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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" style={{}}></div>
</div>

<nav className="w-full z-50 pt-6 relative">
<div className="max-w-7xl mx-auto flex items-center justify-between h-14">

<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 flex items-center justify-center rounded bg-amber-500 text-black" style={{}}>
<svg className="lucide lucide-trending-up stroke-[2.5] w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">
            World Championship of Wealth
          </span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2 text-slate-400">
<a className="transition-colors hover:text-white" href="/dashboard">
            Dashboard
          </a>
<a className="transition-colors hover:text-white" href="/methodology">
            Methodology
          </a>
<a className="transition-colors hover:text-white" href="/about">About</a>
</div>

<div className="flex items-center gap-4">
<button aria-label="Toggle Theme" className="dark:text-slate-400 dark:hover:text-white transition-colors dark:hover:bg-white/10 text-slate-500 rounded-full mr-2 pt-2 pr-2 pb-2 pl-2 hover:text-slate-900 hover:bg-slate-100" onclick="document.documentElement.classList.toggle('dark')">
<svg className="lucide lucide-sun hidden dark:block w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path className="" d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path className="" d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
<svg className="lucide lucide-moon block dark:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
</button>
<button className="hidden sm:block transition-colors text-sm font-medium hover:text-white text-slate-300" onclick="window.location.href='/faq'" role="button">
            FAQ
          </button>
<button className="transition-all text-sm font-semibold bg-amber-500 rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:bg-amber-400 text-black" onclick="window.location.href='/sign-up'" role="button" style={{}}>
            Get Started
          </button>
</div>
</div>
</nav>

<header className="z-10 pt-24 pr-6 pb-32 pl-6 relative">
<div className="flex flex-col text-center max-w-5xl mr-auto ml-auto items-center">

<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium mb-10 hover:bg-white/[0.05] transition-colors cursor-default text-slate-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" style={{}}></span>
</span>
          Season 1 Registration Open
        </div>

<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-4 leading-[0.95] text-white">
          The World Championship
        </h1>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-amber-400 via-orange-400" style={{}}>
          of Wealth
        </h1>

<p className="leading-relaxed text-lg font-light max-w-2xl mb-12 text-slate-400">
          Benchmark your portfolio like a pro. COSY scores synthesize
          performance across
          <span className="font-normal text-amber-400" style={{}}>Cryptos</span>
          ,
          <span className="font-normal text-amber-400" style={{}}>Options</span>
          ,
          <span className="font-normal text-amber-400" style={{}}>Stocks</span>
          , and
          <span className="font-normal text-amber-400" style={{}}>Yield</span>
          into a single, risk-adjusted index. Climb the leaderboard, earn
          recognition, and showcase your edge.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="sm:w-auto transition-all flex text-sm font-semibold bg-gradient-to-b to-amber-500 w-full rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] gap-x-2 gap-y-2 items-center justify-center hover:to-amber-400 text-black from-amber-400" style={{}}>
            See Live Leaderboard
          </button>
<button className="sm:w-auto transition-all text-sm font-medium bg-transparent w-full border rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 hover:bg-white/5 hover:text-white hover:border-white/20 text-slate-300 border-white/10">
            Sign Up to Compete
          </button>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
<div className="w-5 h-8 border rounded-full p-1 border-white">
<div className="w-1 h-2 rounded-full mx-auto animate-bounce bg-amber-400" style={{}}></div>
</div>
</div>
</div>
</header>

<section className="bg-[#050507] z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mr-auto ml-auto space-y-10">

<div className="text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
            How
            <span className="text-amber-500" style={{}}>COSY</span>
            Works
          </h2>
<p className="leading-relaxed text-lg font-light max-w-2xl mr-auto ml-auto text-slate-400">
            Each asset class is scored using normalized metrics — CAGR, Sharpe,
            and Max Drawdown — then combined into a 0–100 COSY Score with
            transparent weights. Equal-weight by default, fully adjustable.
          </p>
</div>
<div className="max-w-3xl mr-auto ml-auto">
<div className="md:p-12 overflow-hidden bg-[#0E1016] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl border-white/10">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[80px] bg-amber-500/5 w-[120%] h-[120%] rounded-full absolute top-1/2 left-1/2" style={{}}></div>
<div className="relative z-10 text-center">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6 block">
                The COSY Formula
              </span>
<div className="font-mono text-xs md:text-sm space-y-4 leading-relaxed">
<div className="text-amber-400" style={{}}>
                  AssetScore
                  <span className="text-white">=</span>
                  0.4
                  <span className="text-white">·</span>
                  CAGR_norm
                  <span className="text-white">+</span>
                  0.4
                  <span className="text-white">·</span>
                  Sharpe_norm
                  <span className="text-white">+</span>
                  0.2
                  <span className="text-white">·</span>
                  (1
                  <span className="text-white">-</span>
                  MDD_norm)
                </div>
<div className="text-emerald-400">
                  COSY
                  <span className="text-emerald-400">=</span>
                  Σ AssetWeight
                  <span className="text-emerald-400">·</span>
                  AssetScore
                  <span className="text-emerald-400">·</span>
                  100
                </div>
</div>
</div>
</div>
</div>

<div className="mb-24">
<div className="text-center mb-12">
<h3 className="text-2xl font-semibold tracking-tight mb-2 text-white">
              The COSY Quadrant
            </h3>
<p className="text-slate-500 text-sm">
              Four engines of compounding. One championship standard.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="hover:bg-white/[0.04] transition-colors group border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-white/10">
<div className="w-10 h-10 rounded-lg border border-amber-500/20 bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:text-amber-400 transition-colors" style={{}}>
<svg className="lucide lucide-bitcoin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.279 5.343m-4.22 5.37L2 10.343m6.279 5.071L7.932 17.385"></path>
</svg>
</div>
<h4 className="text-base font-medium mb-2 text-white">Cryptos</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Digital assets and DeFi exposures with institutional risk
                controls.
              </p>
</div>

<div className="p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-10 h-10 rounded-lg border border-amber-500/20 bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:text-amber-400 transition-colors" style={{}}>
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<h4 className="text-base font-medium mb-2 text-white">Options</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Systematic options overlays and volatility harvesting.
              </p>
</div>

<div className="p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-10 h-10 rounded-lg border border-amber-500/20 bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:text-amber-400 transition-colors" style={{}}>
<svg className="lucide lucide-bar-chart-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h4 className="text-base font-medium mb-2 text-white">Stocks</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Alpha from factor, fundamental, or event-driven equities.
              </p>
</div>

<div className="p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-10 h-10 rounded-lg border border-amber-500/20 bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:text-amber-400 transition-colors" style={{}}>
<svg className="lucide lucide-percent" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="19" x2="5" y1="5" y2="19"></line>
<circle cx="6.5" cy="6.5" r="2.5"></circle>
<circle cx="17.5" cy="17.5" r="2.5"></circle>
</svg>
</div>
<h4 className="text-base font-medium mb-2 text-white">Yield</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Income from treasuries, credit, real yield, and cash-like
                strategies.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050507] z-10 border-t pt-24 pr-6 pb-24 pl-6 relative border-white/5">
<div className="max-w-6xl mr-auto ml-auto">

<div className="flex flex-col md:flex-row md:items-end mb-10 gap-x-4 gap-y-4 justify-between">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2 text-white">
              Market Leaders
            </h2>
<p className="text-slate-500 text-sm md:text-base font-medium">
              Top performers by COSY Score (1Y).
            </p>
</div>
<button className="text-xs font-medium text-amber-500 flex items-center gap-1 hover:text-amber-400" style={{}}>
            View Methodology
            <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">

<div className="glass-card overflow-hidden flex flex-col h-[420px] rounded-2xl shadow-2xl shadow-black/40">
<div className="bg-gradient-to-b from-blue-500/5 to-transparent border-b px-5 py-5 border-white/5">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold text-blue-400">
                  Spiking Elite 10
                </h3>
<svg className="lucide lucide-trophy w-4 h-4 text-blue-500" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<p className="text-[10px] mt-0.5 text-slate-400">
                YTD Performance • 2025
              </p>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">
<div className="divide-y divide-white/5">

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      1
                    </span>
<div className="flex flex-shrink-0 text-xs w-8 h-8 border rounded-full items-center justify-center text-slate-400 bg-slate-800 border-white/5">
                      PC
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Cas Investment Partners, LLC
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Clifford Sosin
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +97.43%
                    </span>
<svg className="lucide lucide-trending-up w-3 h-3 text-emerald-500/50 mt-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      2
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      CI
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Paulson &amp; Co Inc
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        John Paulson
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +96.38%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      3
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      SH
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Sachem Head Capital Management LP
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Scott Ferguson
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +60.50%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      4
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      BB
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Baker Bros. Advisors LP
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Felix Baker
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +58.08%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      5
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      DF
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Peconic Partners LLC
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        William Harnisch
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +53.06%
                    </span>
</div>
</div>

<div className="flex hover:bg-white/[0.02] transition-colors group pt-3 pr-5 pb-3 pl-5 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      6
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      TC
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Duquesne Family Office LLC
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Stanley F. Druckenmiller
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +45.24%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      7
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      AP
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Spiking US Blue Whale Fund
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Sir Dr. Clemen Chiang
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +44.47%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      8
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      TP
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Elliott Investment Management L.p.
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Paul Elliott Singer
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +43.91%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      9
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      PS
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Venbio Select Advisor LLC
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Behzad Aghazadeh
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +43.60%
                    </span>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      10
                    </span>
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs bg-slate-800 border-white/5 text-slate-400">
                      BW
                    </div>
<div className="min-w-0">
<div className="truncate group-hover:text-blue-400 transition-colors text-xs font-medium text-slate-200">
                        Ark Investment Management LLC
                      </div>
<div className="text-[10px] truncate text-slate-500">
                        Cathie Wood
                      </div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="text-xs font-medium font-mono text-emerald-400">
                      +36.22%
                    </span>
</div>
</div>
</div>
</div>
<div className="flex-shrink-0 text-center border-t pt-3 pr-3 pb-3 pl-3 border-white/5">
<span className="text-[10px] font-medium text-slate-500 transition-colors cursor-pointer hover:text-white">
                View All Top 100
              </span>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden flex flex-col shadow-2xl h-[420px] shadow-black/40">

<div className="flex-shrink-0 bg-gradient-to-br from-[#f97316]/5 to-transparent border-b px-5 py-5 border-white/5">
<h3 className="text-sm font-semibold text-orange-400">
                Spiking Pension Leaders
              </h3>
<p className="text-[10px] mt-0.5 text-slate-400">YTD Performance</p>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar relative">
<div className="divide-y divide-white/5">

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      1
                    </span>
<div className="flex flex-shrink-0 w-8 h-8 border rounded-full items-center justify-center text-slate-900 bg-slate-100 border-white/10">
<span className="text-[10px] font-bold">SI</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Alecta Pensionsforsakring, Omsesidigt
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    23.29%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      2
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">KR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Provida Pension Fund Administrator
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +20.84%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      3
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">TR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Elo Mutual Pension Insurance Co
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +17.74%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      4
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AM</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Public Sector Pension Investment Board
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +17.67%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      5
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">UR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Healthcare Of Ontario Pension Plan Trust Fund
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +17.14%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      6
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">OH</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        National Pension Service
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +16.50%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      7
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">CA</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Varma Mutual Pension Insurance Co
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +16.36%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      8
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AL</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        AMF Pensionsforsakring AB
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.53%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      9
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">FL</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        State Of New Jersey Common Pension Fund D
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +14.65%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      10
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AZ</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Fjarde Ap-fonden /fourth Swedish National Pension Fund
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +13.68%
                  </span>
</div>
</div>
</div>

<div className="flex-shrink-0 text-center border-t pt-3 pr-3 pb-3 pl-3 border-white/5">
<span className="text-[10px] font-medium text-slate-500 transition-colors cursor-pointer hover:text-white">
                View All Top 100
              </span>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden flex flex-col shadow-2xl h-[420px] shadow-black/40">

<div className="flex-shrink-0 bg-gradient-to-b from-blue-500/10 to-transparent border-b px-5 py-5 border-white/5">
<h3 className="text-sm font-semibold text-blue-400">
                Spiking Retirement Index
              </h3>
<p className="text-[10px] mt-0.5 text-slate-400">YTD Performance</p>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar relative">
<div className="divide-y divide-white/5">

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      1
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">SI</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Shelter Ins Retirement Plan
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +18.75%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      2
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">KR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        Kentucky Retirement Systems
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +16.29%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      3
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">TR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        Teachers Retirement System Of The State Of Kentucky
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +16.14%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      4
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AM</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        Amica Retiree Medical Trust
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.79%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      5
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">UR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Utah Retirement Systems
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.71%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      6
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">OH</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        Public Employees Retirement System Of Ohio
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.46%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      7
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">CA</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        California State Teachers Retirement System
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.37%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      8
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AL</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        Retirement Systems Of Alabama
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.35%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      9
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">FL</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        State Board Of Administration Of Florida Retirement
                        System
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.33%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      10
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AZ</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="text-xs font-medium truncate text-slate-200">
                        Arizona State Retirement System
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +15.29%
                  </span>
</div>
</div>
</div>

<div className="flex-shrink-0 text-center border-t pt-3 pr-3 pb-3 pl-3 border-white/5">
<span className="text-[10px] font-medium text-slate-500 transition-colors cursor-pointer hover:text-white">
                View All Top 100
              </span>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden flex flex-col shadow-2xl h-[420px] shadow-black/40">

<div className="flex-shrink-0 bg-gradient-to-br from-[#a855f7]/5 border-b pt-5 pr-5 pb-5 pl-5 to-purple-50/0 border-white/5">
<h3 className="text-sm font-semibold text-purple-400">
                Spiking Sovereign Index
              </h3>
<p className="text-[10px] mt-0.5 text-slate-400">YTD Performance</p>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar relative">
<div className="divide-y divide-white/5">

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex min-w-0 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      1
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">SI</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Alaska Permanent Fund Corp
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +20.11%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex gap-3 min-w-0 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      2
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">KR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Public Sector Pension Investment Board
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +17.67%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      3
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">TR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Korea Investment Corp
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +17.28%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      4
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AM</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Her Majesty The Queen In Right Of The Province Of
                        Alberta As Represented By Alberta Investment Management
                        Corp
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +17.07%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      5
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">UR</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Temasek Holdings (Private) Limited
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +16.64%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      6
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">OH</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Norges Bank
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +16.19%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      7
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">CA</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Caisse De Depot Et Placement Du Quebec
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +13.27%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      8
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AL</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Alaska Permanent Capital Management
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +12.70%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      9
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">FL</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        University Of Texas Investment Managment Co
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +12.22%
                  </span>
</div>

<div className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3 min-w-0">
<span className="text-sm font-mono text-slate-500 w-4 flex-shrink-0">
                      10
                    </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border bg-slate-100 text-slate-900 border-white/10">
<span className="text-[10px] font-bold">AZ</span>
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="truncate text-xs font-medium text-slate-200">
                        Canada Pension Plan Investment Board
                      </span>
<svg className="text-blue-500 w-3 h-3 flex-shrink-0" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"></path>
</svg>
</div>
</div>
<span className="flex-shrink-0 text-xs font-medium font-mono ml-4 text-emerald-400">
                    +12.05%
                  </span>
</div>
</div>
</div>

<div className="flex-shrink-0 text-center border-t pt-3 pr-3 pb-3 pl-3 border-white/5">
<span className="text-[10px] font-medium text-slate-500 transition-colors cursor-pointer hover:text-white">
                View All Top 100
              </span>
</div>
</div>
</div>
</div>
</section>


<footer className="bg-[#030304] z-10 border-t pt-16 pb-12 relative border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 flex items-center justify-center rounded bg-amber-500 text-black" style={{}}>
<svg className="lucide lucide-trending-up w-4 h-4 stroke-[2.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h4 className="text-sm font-medium text-white">
                World Championship of Wealth
              </h4>
</div>
<p className="leading-relaxed text-xs text-slate-500 mb-6">
              A leaderboard showcasing multi-asset performance across Cryptos,
              Options, Stocks, and Yield — the COSY standard. Disclaimer: Not
              investment advice. Past performance is not indicative of future
              results.
            </p>
<div className="flex gap-4">
<a className="text-slate-500 transition-colors hover:text-white" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-500 transition-colors hover:text-white" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-500 transition-colors hover:text-white" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium mb-4 text-white">Explore</h4>
<ul className="text-xs space-y-2 text-slate-400">
<li className="">Dashboard</li>
<li className="">Methodology</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium mb-4 text-white">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li className="">About</li>
<li className="">
<a className="transition-colors hover:text-white" href="#">FAQ</a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 text-white">Contact</h4>
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-message-circle w-3 h-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="">WhatsApp: (815) 8-WEALTH</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="">Presented by Wealth Management System Inc.</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-[10px] border-white/5 text-slate-600">
<p className="">© 2026 Spiking Performance Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
