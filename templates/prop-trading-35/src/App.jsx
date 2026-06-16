import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Satoshi', 'sans-serif'],
},
colors: {
obsidian: '#050505',
charcoal: '#0A0A0A',
glass: 'rgba(255, 255, 255, 0.03)',
'glass-hover': 'rgba(255, 255, 255, 0.06)',
brand: {
50: '#fffbeb',
400: '#fbbf24',
500: '#D97706', // More sophisticated gold
glow: '#F59E0B',
},
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
'subtle-grid': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
},
animation: {
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'reveal': 'reveal 0.8s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
},
},
}



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.fintech-card, .group');
        document.addEventListener('mousemove', e => {
          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<div className="fixed top-0 inset-x-0 z-[60] ticker-wrap">
<div className="ticker">
<div className="ticker-item">
          EURUSD
          <span className="text-emerald-400 ml-1">1.0842</span>
</div>
<div className="ticker-item">
          GBPUSD
          <span className="text-emerald-400 ml-1">1.2650</span>
</div>
<div className="ticker-item">
          USDJPY
          <span className="text-red-400 ml-1">151.20</span>
</div>
<div className="ticker-item">
          XAUUSD
          <span className="text-brand-400 ml-1">2342.50</span>
</div>
<div className="ticker-item">
          BTCUSD
          <span className="text-emerald-400 ml-1">64231.00</span>
</div>
<div className="ticker-item">
          ETHUSD
          <span className="text-emerald-400 ml-1">3450.20</span>
</div>
<div className="ticker-item">
          US30
          <span className="text-red-400 ml-1">38950.00</span>
</div>
<div className="ticker-item">
          NAS100
          <span className="text-emerald-400 ml-1">18120.00</span>
</div>
<div className="ticker-item">
          EURUSD
          <span className="text-emerald-400 ml-1">1.0842</span>
</div>
<div className="ticker-item">
          GBPUSD
          <span className="text-emerald-400 ml-1">1.2650</span>
</div>
<div className="ticker-item">
          USDJPY
          <span className="text-red-400 ml-1">151.20</span>
</div>
<div className="ticker-item">
          XAUUSD
          <span className="text-brand-400 ml-1">2342.50</span>
</div>
</div>
</div>
<div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6">
<nav className="bg-charcoal/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl max-w-4xl w-full">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-brand-500 to-yellow-300 flex items-center justify-center text-[10px] font-bold text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            TP
          </div>
<span className="text-sm font-medium tracking-tight text-white/90">
            Trading Pool
            <span className="text-white/30 px-1">×</span>
            Fundedx
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#spreads">
            Spreads
          </a>
<a className="hover:text-white transition-colors" href="#funding">
            Funding
          </a>
<a className="hover:text-white transition-colors" href="#infrastructure">
            Network
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">
            Login
          </a>
<button className="bg-white text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Get Funded
          </button>
</div>
</nav>
</div>

<main className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-[1000px] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-400 text-[10px] font-semibold tracking-wider uppercase mb-8 animate-reveal">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 glow-point"></span>
          Exclusive Partnership
        </div>

<h1 className="text-7xl md:text-9xl lg:text-[10rem] font-semibold tracking-tighter text-white leading-[0.85] mb-10 animate-reveal [animation-delay:100ms] drop-shadow-2xl">
          Precision
          <br/>
<span className="text-zinc-700">Meets</span>
<span className="text-shimmer">Capital.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto mb-12 leading-relaxed animate-reveal [animation-delay:200ms]">
          The first ecosystem to merge negative spread institutional execution
          with instant, no-evaluation funding.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal [animation-delay:300ms]">
<button className="w-full sm:w-auto bg-[#D97706] hover:bg-[#b45309] text-white/95 text-sm font-medium px-8 py-4 rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(217,119,6,0.4)] border border-white/10 flex items-center justify-center gap-2">
<span>Start Trading</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium px-8 py-4 rounded-xl transition-all backdrop-blur-sm">
            View Live Spreads
          </button>
</div>

<div className="mt-20 relative animate-reveal [animation-delay:500ms]">
<div className="relative rounded-2xl border border-white/10 bg-charcoal/50 backdrop-blur-md p-2 shadow-2xl max-w-4xl mx-auto overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent pointer-events-none"></div>

<div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2 mb-4 rounded-t-xl">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 h-[300px] md:h-[400px]">
<div className="col-span-3 flex flex-col gap-4">
<div className="h-24 bg-charcoal rounded-lg border border-white/5 p-2 flex flex-col gap-1 overflow-hidden shadow-inner">
<div className="flex items-center justify-between px-2 py-1.5 bg-white/5 rounded border border-white/5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[9px] font-bold text-white">
                        EURUSD
                      </span>
</div>
<span className="text-[9px] font-mono text-emerald-400">
                      1.0842
                    </span>
</div>
<div className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 transition-colors">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-[9px] text-zinc-400">GBPUSD</span>
</div>
<span className="text-[9px] font-mono text-emerald-400">
                      1.2650
                    </span>
</div>
<div className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 transition-colors">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-[9px] text-zinc-400">USDJPY</span>
</div>
<span className="text-[9px] font-mono text-red-400">
                      151.20
                    </span>
</div>
</div>
<div className="h-full bg-charcoal rounded-lg border border-white/5 p-3 relative overflow-hidden shadow-inner">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-3">
                    Order Flow
                  </div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="h-1 w-16 bg-gradient-to-r from-red-500/50 to-transparent rounded-full"></div>
<span className="text-[8px] font-mono text-zinc-500">
                        12:42:01
                      </span>
</div>
<div className="flex justify-between items-center">
<div className="h-1 w-24 bg-gradient-to-r from-green-500/50 to-transparent rounded-full"></div>
<span className="text-[8px] font-mono text-zinc-500">
                        12:42:02
                      </span>
</div>
<div className="flex justify-between items-center">
<div className="h-1 w-12 bg-gradient-to-r from-red-500/50 to-transparent rounded-full"></div>
<span className="text-[8px] font-mono text-zinc-500">
                        12:42:04
                      </span>
</div>
<div className="flex justify-between items-center">
<div className="h-1 w-20 bg-gradient-to-r from-green-500/50 to-transparent rounded-full"></div>
<span className="text-[8px] font-mono text-zinc-500">
                        12:42:05
                      </span>
</div>
<div className="flex justify-between items-center">
<div className="h-1 w-8 bg-gradient-to-r from-green-500/50 to-transparent rounded-full"></div>
<span className="text-[8px] font-mono text-zinc-500">
                        12:42:06
                      </span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-charcoal to-transparent"></div>
</div>
</div>
<div className="col-span-6 flex flex-col gap-4">
<div className="h-full bg-zinc-900/80 rounded-lg border border-white/5 flex items-end p-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="absolute top-4 left-4 flex gap-4 z-10">
<div className="flex flex-col">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">
                        Symbol
                      </span>
<span className="text-xs font-bold text-white tracking-wide">
                        BTCUSD
                      </span>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">
                        Price
                      </span>
<span className="text-xs font-mono text-brand-400">
                        64,231.50
                      </span>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">
                        24h
                      </span>
<span className="text-xs font-mono text-emerald-400">
                        +1.24%
                      </span>
</div>
</div>
<svg className="absolute inset-0 w-full h-full pt-16 px-6 pb-6" preserveaspectratio="none" viewbox="0 0 400 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F59E0B" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="transparent" stop-opacity="0"></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="1.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path d="M0 50 H400 M0 100 H400 M0 150 H400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" vector-effect="non-scaling-stroke"></path>

<path d="M0 130 C 40 120, 80 150, 120 110 S 180 50, 240 90 S 320 130, 360 70 L 400 60" fill="none" filter="url(#glow)" stroke="#F59E0B" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M0 130 C 40 120, 80 150, 120 110 S 180 50, 240 90 S 320 130, 360 70 L 400 60 V 200 H 0 Z" fill="url(#chartGradient)"></path>

<line stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 2" x1="300" x2="300" y1="0" y2="200">
<animate attributename="x1" dur="12s" repeatcount="indefinite" values="0;400;0"></animate>
<animate attributename="x2" dur="12s" repeatcount="indefinite" values="0;400;0"></animate>
</line>

<circle cx="300" cy="75" fill="white" r="2.5" stroke="#F59E0B" strokeWidth="1">
<animate attributename="cx" dur="12s" repeatcount="indefinite" values="0;400;0"></animate>
<animate attributename="cy" dur="12s" repeatcount="indefinite" values="130;110;90;70;60;70;90;110;130"></animate>
</circle>
</svg>
</div>
</div>
<div className="col-span-3 flex flex-col gap-4">
<div className="h-1/2 bg-charcoal rounded-lg border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute right-2 top-2">
<div className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-[pulse_2s_infinite]"></span>
<span className="text-[8px] text-emerald-500 font-bold uppercase tracking-wider">
                        Live
                      </span>
</div>
</div>
<div className="text-[9px] text-zinc-500 uppercase tracking-widest">
                    Latency
                  </div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-mono text-white">12</span>
<span className="text-xs text-zinc-500">ms</span>
</div>
<svg className="w-full h-8 text-emerald-500/40 opacity-50 group-hover:opacity-100 transition-opacity" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 10 L 10 12 L 20 8 L 30 11 L 40 10 L 50 14 L 60 9 L 70 11 L 80 10 L 90 12 L 100 10" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="h-1/2 bg-charcoal rounded-lg border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden group">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest">
                    Spread
                  </div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-mono text-brand-400">0.0</span>
<span className="text-xs text-zinc-500">pips</span>
</div>
<svg className="w-full h-8 text-brand-500/40 opacity-50 group-hover:opacity-100 transition-opacity" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 18 L 10 18 L 20 18 L 30 18 L 40 16 L 50 18 L 60 18 L 70 17 L 80 18 L 90 18 L 100 18" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-brand-500/20 blur-3xl -z-10 rounded-[3rem] opacity-30"></div>
</div>
</div>
</main>
<section className="border-y border-white/5 bg-black/40 backdrop-blur-md py-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="group">
<div className="text-3xl font-mono font-medium text-white group-hover:text-brand-400 transition-colors">
            $42M+
          </div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">
            Total Payouts
          </div>
</div>
<div className="group">
<div className="text-3xl font-mono font-medium text-white group-hover:text-brand-400 transition-colors">
            4h
          </div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">
            Avg Processing
          </div>
</div>
<div className="group">
<div className="text-3xl font-mono font-medium text-white group-hover:text-brand-400 transition-colors">
            12,400+
          </div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">
            Active Traders
          </div>
</div>
<div className="group">
<div className="text-3xl font-mono font-medium text-white group-hover:text-brand-400 transition-colors">
            142
          </div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">
            Countries
          </div>
</div>
</div>
</section>
<div className="border-y border-white/5 bg-black/50 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-medium">
          Liquidity sourced from Tier-1 Pools
        </p>
<div className="flex items-center justify-center gap-12 md:gap-24 opacity-30 grayscale mix-blend-screen overflow-x-auto no-scrollbar whitespace-nowrap px-4">
<span className="text-xl font-bold font-serif tracking-tight text-white">
            J.P. MORGAN
          </span>
<span className="text-xl font-bold font-serif tracking-tight text-white">
            GOLDMAN SACHS
          </span>
<span className="text-xl font-bold font-serif tracking-tight text-white">
            BARCLAYS
          </span>
<span className="text-xl font-bold font-serif tracking-tight text-white">
            UBS
          </span>
<span className="text-xl font-bold font-serif tracking-tight text-white">
            CITADEL
          </span>
<span className="text-xl font-bold font-serif tracking-tight text-white">
            XTX
          </span>
</div>
</div>
</div>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
            The
            <span className="text-brand-500">Path</span>
            to Pro.
          </h2>
<p className="text-zinc-400 text-lg font-light">
            A streamlined journey from retail to institutional status. No hidden
            rules, just performance.
          </p>
</div>
<button className="px-6 py-3 rounded-full border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Documentation
        </button>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent -translate-y-1/2 hidden md:block"></div>
<div className="relative bg-black border border-white/10 p-8 rounded-2xl z-10 hover:border-brand-500/50 transition-colors group">
<div className="w-12 h-12 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-zinc-500 group-hover:text-white group-hover:bg-brand-500 group-hover:border-brand-400 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            01
          </div>
<h3 className="text-xl font-medium text-white mb-3">Select Tier</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
            Choose your capital allocation from $10k to $200k. Instant
            credentials delivered via email.
          </p>
</div>
<div className="relative bg-black border border-white/10 p-8 rounded-2xl z-10 hover:border-brand-500/50 transition-colors group">
<div className="w-12 h-12 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-zinc-500 group-hover:text-white group-hover:bg-brand-500 group-hover:border-brand-400 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            02
          </div>
<h3 className="text-xl font-medium text-white mb-3">Trade</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
            Access raw spreads on MT5, cTrader, or Match-Trader. No time limits,
            no consistency rules.
          </p>
</div>
<div className="relative bg-black border border-white/10 p-8 rounded-2xl z-10 hover:border-brand-500/50 transition-colors group">
<div className="w-12 h-12 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-zinc-500 group-hover:text-white group-hover:bg-brand-500 group-hover:border-brand-400 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            03
          </div>
<h3 className="text-xl font-medium text-white mb-3">Scale &amp; Earn</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
            Request your first payout after 24 hours. Consistent traders get
            capital doubled every 3 months.
          </p>
</div>
</div>
</section>
<section className="py-32 px-6 max-w-7xl mx-auto" id="spreads">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">
          Infrastructure
          <span className="text-zinc-600">Grade.</span>
</h2>
<p className="text-zinc-400 max-w-2xl text-lg">
          We don't just offer accounts. We offer an unfair advantage built on
          institutional rails.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 grid-rows-[auto_auto_auto]">

<div className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 fintech-card bg-glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="spotlight-overlay"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-400">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">
              Raw Spread Ecology
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Experience true DMA (Direct Market Access). Bids and asks streamed
              directly from Tier-1 liquidity providers with zero markup.
            </p>
<div className="mt-12 flex gap-8">
<div>
<div className="text-4xl font-mono text-white tracking-tighter">
                  -0.4
                </div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                  Min Pip
                </div>
</div>
<div>
<div className="text-4xl font-mono text-white tracking-tighter">
                  $0
                </div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                  Commission
                </div>
</div>
</div>
</div>

<div className="absolute right-0 bottom-0 w-[60%] h-full opacity-30 pointer-events-none mix-blend-screen">
<svg className="text-brand-500" height="100%" preserveaspectratio="none" viewbox="0 0 400 200" width="100%">

<path d="M0 200 L 0 150 Q 50 150 100 140 T 180 100 L 200 80 L 220 100 Q 250 120 300 140 T 400 150 L 400 200 Z" fill="url(#depthGradient)" stroke="none"></path>
<path d="M0 150 Q 50 150 100 140 T 180 100 L 200 80 L 220 100 Q 250 120 300 140 T 400 150" fill="none" stroke="url(#lineGradient)" strokeWidth="1"></path>
<defs>
<lineargradient id="depthGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.2"></stop>
<stop offset="45%" stop-color="#10B981" stop-opacity="0.4"></stop>
<stop offset="50%" stop-color="transparent" stop-opacity="0"></stop>
<stop offset="55%" stop-color="#EF4444" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#EF4444" stop-opacity="0.2"></stop>
</lineargradient>
<lineargradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#10B981"></stop>
<stop offset="45%" stop-color="#10B981"></stop>
<stop offset="50%" stop-color="white"></stop>
<stop offset="55%" stop-color="#EF4444"></stop>
<stop offset="100%" stop-color="#EF4444"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 row-span-2 fintech-card bg-glass rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Equinix NY4</h3>
<p className="text-zinc-400 text-sm">
              Co-located servers ensure sub-30ms execution speed.
            </p>
</div>
<div className="mt-auto relative w-full h-32 flex items-end justify-between px-2 gap-2">

<div className="w-full h-16 bg-white/5 rounded-t border border-white/10 relative overflow-hidden group shadow-[0_-5px_20px_-5px_rgba(0,255,100,0.1)]">
<div className="absolute top-1 left-1.5 flex gap-1">
<div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse"></div>
<div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse delay-75"></div>
</div>
<div className="absolute bottom-0 w-full h-full bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_3px)] bg-[size:100%_4px]"></div>
</div>
<div className="w-full h-24 bg-white/5 rounded-t border border-white/10 relative overflow-hidden shadow-[0_-5px_20px_-5px_rgba(0,255,100,0.15)]">
<div className="absolute top-1 left-1.5 flex gap-1">
<div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse delay-100"></div>
<div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse delay-150"></div>
<div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse delay-200"></div>
</div>
<div className="absolute bottom-0 w-full h-full bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_3px)] bg-[size:100%_4px]"></div>
</div>
<div className="w-full h-20 bg-white/5 rounded-t border border-white/10 relative overflow-hidden shadow-[0_-5px_20px_-5px_rgba(0,255,100,0.1)]">
<div className="absolute top-1 left-1.5 flex gap-1">
<div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse delay-300"></div>
</div>
<div className="absolute bottom-0 w-full h-full bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_3px)] bg-[size:100%_4px]"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-7 row-span-1 fintech-card bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 relative overflow-hidden">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-brand-500/10 text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                Instant Access
              </div>
<h3 className="text-2xl font-medium text-white">Fundedx Capital</h3>
<p className="text-zinc-400 text-sm mt-2 max-w-md">
                Skip the challenge. Get instant capital allocation up to
                $200,000.
              </p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs text-zinc-500">Starting at</div>
<div className="text-xl font-mono text-white">$50</div>
</div>
<button className="bg-white text-black rounded-lg p-3 hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-1 fintech-card bg-glass rounded-3xl p-8 flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-white">Leverage</h3>
<p className="text-zinc-500 text-xs mt-1">Maximum efficiency</p>
</div>
<div className="text-4xl font-mono text-white tracking-tighter">
            1:100
          </div>
</div>
</div>
</section>
<section className="py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-900/10 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
            Professional
            <span className="text-zinc-600">Suite.</span>
</h2>
<p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Choose the weapon that fits your style. All platforms connected to
            our raw ECN liquidity aggregation.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="group relative bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all h-[500px] flex flex-col">
<div className="p-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-3xl font-medium text-white">cTrader</h3>
<div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                  Algorithmic
                </div>
</div>
<p className="text-zinc-400 max-w-md">
                The gold standard for manual and automated trading. Advanced
                order protection, DOM, and C# automation.
              </p>
</div>
<div className="mt-auto relative w-full h-[300px] bg-zinc-900/50 border-t border-white/5">
<div className="absolute inset-0 bg-[url('https://api.placeholder.com/800/400')] opacity-50 mix-blend-overlay"></div>

<div className="absolute top-10 left-10 right-0 bottom-0 bg-[#1a1a1a] rounded-tl-2xl border-l border-t border-white/10 shadow-2xl p-4">
<div className="flex gap-4 mb-4">
<div className="w-20 h-6 bg-white/5 rounded"></div>
<div className="w-20 h-6 bg-white/5 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-4 h-full">
<div className="col-span-2 bg-black/40 rounded border border-white/5"></div>
<div className="bg-black/40 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>

<div className="group relative bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all h-[500px] flex flex-col">
<div className="p-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-3xl font-medium text-white">Match-Trader</h3>
<div className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-[10px] font-bold uppercase tracking-widest border border-brand-500/20">
                  Modern
                </div>
</div>
<p className="text-zinc-400 max-w-md">
                Built for the modern trader. Progressive Web App technology
                ensures seamless performance across all devices.
              </p>
</div>
<div className="mt-auto relative w-full h-[300px] bg-zinc-900/50 border-t border-white/5">
<div className="absolute inset-0 bg-[url('https://api.placeholder.com/800/400')] opacity-50 mix-blend-overlay"></div>
<div className="absolute top-10 left-0 right-10 bottom-0 bg-[#1a1a1a] rounded-tr-2xl border-r border-t border-white/10 shadow-2xl p-4">
<div className="flex justify-between mb-4">
<div className="w-32 h-8 bg-white/5 rounded"></div>
<div className="w-8 h-8 rounded-full bg-brand-500"></div>
</div>
<div className="w-full h-32 bg-gradient-to-t from-brand-500/10 to-transparent rounded border border-white/5 mb-4"></div>
<div className="flex gap-2">
<div className="flex-1 h-12 bg-green-500/10 border border-green-500/20 rounded"></div>
<div className="flex-1 h-12 bg-red-500/10 border border-red-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden bg-black" id="infrastructure">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-semibold tracking-wider uppercase mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Systems Operational
          </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
            Global
            <span className="text-brand-500">Latency</span>
            Network.
          </h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Direct fiber connections to major liquidity hubs. We've shaved off
            every millisecond so you don't have to.
          </p>
</div>
<div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group perspective-1000 bg-black/30 backdrop-blur-md">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-black to-black"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="w-64 h-64 md:w-96 md:h-96 relative transform-style-3d animate-spin-slow z-10">
<div className="absolute inset-0 border border-brand-500/40 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_40px_rgba(217,119,6,0.15)]"></div>
<div className="absolute inset-[12%] border border-brand-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-[24%] border border-dashed border-brand-500/50 rounded-full animate-[spin_40s_linear_infinite]"></div>
<div className="absolute inset-[30%] bg-gradient-to-br from-brand-500/10 to-transparent rounded-full blur-md animate-pulse"></div>
<div className="absolute inset-[35%] bg-black/60 rounded-full border border-brand-500/20 backdrop-blur-sm z-10 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.2)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
</div>
<div className="absolute inset-[-10%] animate-[spin_8s_linear_infinite] z-30">
<div className="absolute top-1/2 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white,0_0_30px_#F59E0B]"></div>
</div>
<div className="absolute inset-[-20%] animate-[spin_12s_linear_infinite_reverse] z-30">
<div className="absolute top-1/2 -left-1 w-1.5 h-1.5 bg-brand-400 rounded-full shadow-[0_0_15px_#F59E0B]"></div>
</div>
</div>

<div className="absolute inset-0 z-20 pointer-events-none">

<div className="absolute top-[30%] left-[20%] md:left-[30%] flex items-center gap-3">
<div className="relative">
<div className="w-3 h-3 bg-brand-500 rounded-full shadow-[0_0_20px_#F59E0B] animate-pulse"></div>
<div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-50"></div>
</div>
<div className="bg-black/80 backdrop-blur border border-brand-500/30 px-3 py-1.5 rounded-lg">
<div className="text-xs font-semibold text-white tracking-wider">
                  NY4
                  <span className="text-brand-500">CORE</span>
</div>
<div className="text-[10px] text-zinc-400 font-mono">
                  Latency: 0.8ms
                </div>
</div>
</div>

<div className="absolute bottom-[30%] right-[20%] md:right-[30%] flex flex-row-reverse items-center gap-3">
<div className="w-2 h-2 bg-zinc-400 rounded-full shadow-[0_0_10px_white]"></div>
<div className="bg-black/60 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg">
<div className="text-xs font-semibold text-white tracking-wider">
                  LD4
                </div>
<div className="text-[10px] text-zinc-400 font-mono">14ms</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-brand-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Segregated Funds</h3>
<p className="text-sm text-zinc-500 max-w-xs">
            Client funds are held in segregated Tier-1 bank accounts, entirely
            separate from company operations.
          </p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-brand-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
            Regulated Liquidity
          </h3>
<p className="text-sm text-zinc-500 max-w-xs">
            All trade execution occurs via regulated counterparties under FCA
            and ASIC jurisdictions.
          </p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-brand-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
            Guaranteed Payouts
          </h3>
<p className="text-sm text-zinc-500 max-w-xs">
            Contractually binding payout agreements. If you profit, you get
            paid. Simple as that.
          </p>
</div>
</div>
</section>
<section className="py-32 px-6 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white text-center mb-16">
        The
        <span className="text-brand-500">Advantage.</span>
</h2>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="p-6 text-xs uppercase tracking-widest text-zinc-500 font-medium w-1/3">
                Feature
              </th>
<th className="p-6 text-xs uppercase tracking-widest text-zinc-500 font-medium w-1/3 text-center bg-zinc-900/50">
                Competitors
              </th>
<th className="p-6 text-xs uppercase tracking-widest text-brand-500 font-bold w-1/3 text-center bg-brand-900/10">
                Trading Pool
              </th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-6 text-sm font-medium text-white">
                Raw Spreads (EURUSD)
              </td>
<td className="p-6 text-sm text-zinc-400 text-center bg-zinc-900/30">
                0.8 - 1.5 pips
              </td>
<td className="p-6 text-sm text-white font-bold text-center bg-brand-900/5 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
                0.0 - 0.2 pips
              </td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-6 text-sm font-medium text-white">
                Commission / Lot
              </td>
<td className="p-6 text-sm text-zinc-400 text-center bg-zinc-900/30">
                $7.00
              </td>
<td className="p-6 text-sm text-white font-bold text-center bg-brand-900/5 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
                $0.00
              </td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-6 text-sm font-medium text-white">
                HFT / Arbitrage
              </td>
<td className="p-6 text-sm text-zinc-400 text-center bg-zinc-900/30">
<span className="text-red-500">Banned</span>
</td>
<td className="p-6 text-sm text-white font-bold text-center bg-brand-900/5 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
<span className="text-emerald-400">Allowed</span>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-6 text-sm font-medium text-white">Payout Speed</td>
<td className="p-6 text-sm text-zinc-400 text-center bg-zinc-900/30">
                14 Days
              </td>
<td className="p-6 text-sm text-white font-bold text-center bg-brand-900/5 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
                Instant
              </td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-6 text-sm font-medium text-white">Drawdown Type</td>
<td className="p-6 text-sm text-zinc-400 text-center bg-zinc-900/30">
                Trailing Equity
              </td>
<td className="p-6 text-sm text-white font-bold text-center bg-brand-900/5 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
                Static Balance
              </td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="py-24 bg-charcoal border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-[10px] font-semibold tracking-wider uppercase mb-6">
<i className="w-3 h-3" data-lucide="cpu"></i>
              Powerful Engines
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
              Engineered for
              <br/>
<span className="text-zinc-600">Alpha.</span>
</h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
              Whether you prefer the precision of cTrader or the familiarity of
              Match-Trader, our infrastructure adapts to your style. Full DOM
              visibility, one-click execution, and advanced charting.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-white text-lg font-medium">
                    Deep Market Depth
                  </h4>
<p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                    See the full order book. Know exactly where the liquidity
                    lies before you strike.
                  </p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="smartphone"></i>
</div>
<div>
<h4 className="text-white text-lg font-medium">Mobile Native</h4>
<p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                    Full functionality on iOS and Android. Manage positions from
                    anywhere with zero compromise.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="relative z-10 bg-obsidian border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black"></div>

<div className="relative z-20 border-b border-white/5 p-4 flex items-center justify-between bg-white/5 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-500">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<div>
<div className="text-xs font-bold text-white tracking-wide">
                      XAUUSD
                    </div>
<div className="text-[10px] text-zinc-400">
                      Gold vs US Dollar
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono text-white">2,342.50</div>
<div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    +0.42%
                  </div>
</div>
</div>

<div className="relative z-10 h-48 w-full p-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F59E0B" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="transparent" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0 25 H200 M0 50 H200 M0 75 H200" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>

<rect fill="#10B981" height="20" opacity="0.6" rx="0.5" width="4" x="10" y="60"></rect>
<rect fill="#EF4444" height="30" opacity="0.6" rx="0.5" width="4" x="30" y="50"></rect>
<rect fill="#10B981" height="15" opacity="0.6" rx="0.5" width="4" x="50" y="55"></rect>
<rect fill="#10B981" height="25" opacity="0.6" rx="0.5" width="4" x="70" y="40"></rect>
<rect fill="#EF4444" height="20" opacity="0.6" rx="0.5" width="4" x="90" y="45"></rect>

<path d="M0 80 Q 30 70, 50 60 T 100 40 T 150 50 T 200 20" fill="none" filter="drop-shadow(0 0 4px rgba(245,158,11,0.5))" stroke="#F59E0B" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0 80 Q 30 70, 50 60 T 100 40 T 150 50 T 200 20 V 100 H 0 Z" fill="url(#chartFill)"></path>

<circle className="animate-pulse" cx="200" cy="20" fill="white" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="3;5;3"></animate>
</circle>
</svg>
</div>

<div className="relative z-20 px-4 pb-4 flex gap-3">
<button className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-500 py-3 rounded-xl text-[10px] font-bold tracking-widest transition-all hover:-translate-y-0.5">
                  BUY
                </button>
<button className="flex-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-500 py-3 rounded-xl text-[10px] font-bold tracking-widest transition-all hover:-translate-y-0.5">
                  SELL
                </button>
</div>
</div>
<div className="absolute -inset-10 bg-brand-500/10 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-black/50" id="funding">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">
              Instant
              <span className="text-brand-500">Funding</span>
</h2>
<p className="text-zinc-400">
              Pure capital. No evaluation phase. Keep your profits.
            </p>
</div>

<div className="bg-white/5 p-1 rounded-lg flex text-xs font-medium">
<button className="px-4 py-2 rounded-md bg-white/10 text-white shadow-sm">
              Instant
            </button>
<button className="px-4 py-2 rounded-md text-zinc-500 hover:text-white transition-colors">
              Evaluation
            </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-obsidian border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all hover:-translate-y-1">
<div className="spotlight-overlay"></div>
<div className="mb-8">
<span className="text-zinc-500 text-xs font-mono uppercase">
                Starter
              </span>
<div className="text-3xl font-medium text-white mt-2">$10,000</div>
<div className="text-brand-500 font-mono text-lg mt-1">
                $50
                <span className="text-zinc-600 text-xs">one-time</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-400">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
                Instant Credentials
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
                10% Max Drawdown
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
                Bi-weekly Payouts
              </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm hover:bg-white hover:text-black transition-colors">
              Select Plan
            </button>
</div>

<div className="group relative bg-zinc-900 border border-brand-500/30 rounded-2xl p-8 transition-all hover:-translate-y-1 shadow-[0_0_30px_-15px_rgba(245,158,11,0.15)]">
<div className="absolute top-0 right-0 p-4">
<i className="w-5 h-5 text-brand-500 fill-brand-500" data-lucide="star"></i>
</div>
<div className="mb-8">
<span className="text-brand-500 text-xs font-mono uppercase">
                Pro
              </span>
<div className="text-3xl font-medium text-white mt-2">$50,000</div>
<div className="text-brand-500 font-mono text-lg mt-1">
                $300
                <span className="text-zinc-600 text-xs">one-time</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-500" data-lucide="check"></i>
                Instant Credentials
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-500" data-lucide="check"></i>
                10% Max Drawdown
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-500" data-lucide="check"></i>
                Weekly Payouts
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-500" data-lucide="check"></i>
                Account Manager
              </li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#D97706] text-white text-sm hover:bg-[#b45309] transition-colors font-medium">
              Select Plan
            </button>
</div>

<div className="group relative bg-obsidian border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all hover:-translate-y-1">
<div className="mb-8">
<span className="text-zinc-500 text-xs font-mono uppercase">
                Elite
              </span>
<div className="text-3xl font-medium text-white mt-2">$100,000</div>
<div className="text-brand-500 font-mono text-lg mt-1">
                $500
                <span className="text-zinc-600 text-xs">one-time</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-400">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
                Instant Credentials
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
                10% Max Drawdown
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
                Bi-weekly Payouts
              </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm hover:bg-white hover:text-black transition-colors">
              Select Plan
            </button>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 overflow-hidden bg-black">
<div className="flex items-center gap-12 w-max animate-marquee">

<div className="w-[400px] border-l border-white/10 pl-8">
<div className="flex gap-1 mb-4 text-brand-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-lg font-light leading-relaxed">
            "The execution is indistinguishable from my institutional accounts.
            Fundedx is the real deal."
          </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
<span className="text-xs font-medium text-zinc-500">
              Marcus L. — London
            </span>
</div>
</div>

<div className="w-[400px] border-l border-white/10 pl-8">
<div className="flex gap-1 mb-4 text-brand-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-lg font-light leading-relaxed">
            "Instant funding means instant. I was trading my $100k account
            within 20 minutes of purchase."
          </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
<span className="text-xs font-medium text-zinc-500">
              Sarah J. — Dubai
            </span>
</div>
</div>

<div className="w-[400px] border-l border-white/10 pl-8">
<div className="flex gap-1 mb-4 text-brand-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-lg font-light leading-relaxed">
            "Finally, a prop firm that understands raw spreads. Perfect for my
            scalping EAs."
          </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
<span className="text-xs font-medium text-zinc-500">
              David K. — Singapore
            </span>
</div>
</div>

<div className="w-[400px] border-l border-white/10 pl-8">
<div className="flex gap-1 mb-4 text-brand-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-lg font-light leading-relaxed">
            "Withdrawals are processed same day. No hidden rules. Highly
            recommend."
          </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
<span className="text-xs font-medium text-zinc-500">
              Alex R. — New York
            </span>
</div>
</div>

<div className="w-[400px] border-l border-white/10 pl-8">
<div className="flex gap-1 mb-4 text-brand-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-lg font-light leading-relaxed">
            "The execution is indistinguishable from my institutional accounts.
            Fundedx is the real deal."
          </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
<span className="text-xs font-medium text-zinc-500">
              Marcus L. — London
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-black to-zinc-900/20">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tighter">
            Ready to
            <span className="text-brand-500">Scale?</span>
</h2>
<p className="text-zinc-400 text-lg">Join the elite ecosystem today.</p>
</div>
<div className="space-y-4 mb-20">
<details className="group bg-glass border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-zinc-900/50">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="text-base font-medium text-zinc-200">
                Is this a regulated broker?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
              Trading Pool provides technology and educational services.
              Liquidity is sourced from regulated institutional providers.
              Fundedx accounts are simulated trading environments where
              successful traders can earn real performance fees.
            </div>
</details>
<details className="group bg-glass border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-zinc-900/50">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="text-base font-medium text-zinc-200">
                How fast are payouts?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
              Payouts are reviewed within 24 hours. Once approved, funds are
              sent instantly via Crypto or Bank Wire (1-3 days).
            </div>
</details>
<details className="group bg-glass border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-zinc-900/50">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="text-base font-medium text-zinc-200">
                Can I hold over the weekend?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
              Yes, weekend holding is permitted on all Swing accounts. Scalper
              accounts require flat positions on Fridays.
            </div>
</details>
</div>
<div className="text-center">
<button className="group relative inline-flex items-center justify-center bg-brand-500 hover:bg-brand-400 text-black font-semibold px-12 py-5 rounded-full text-lg shadow-[0_0_50px_-10px_rgba(245,158,11,0.4)] transition-all hover:scale-105">
<span className="mr-2">Get Instant Funding</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="mt-6 text-xs text-zinc-600 font-medium tracking-wide">
            NO CREDIT CARD REQUIRED FOR DEMO
          </p>
</div>
</div>
</section>
<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-500/5"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<div className="inline-block mb-6">
<div className="flex items-center gap-[-10px] justify-center">
<div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800"></div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-700 -ml-4"></div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-600 -ml-4"></div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-brand-500 flex items-center justify-center text-xs font-bold -ml-4 z-10">
              9k+
            </div>
</div>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
          Join the
          <span className="text-brand-500">Cartel.</span>
</h2>
<p className="text-xl text-zinc-400 font-light mb-12">
          Connect with over 9,000 active traders sharing setups, EA strategies,
          and payout proof daily.
        </p>
<button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_30px_-5px_rgba(88,101,242,0.4)] flex items-center gap-3 mx-auto">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"></path>
</svg>
          Join Discord Server
        </button>
</div>
</section>
<footer className="bg-obsidian pt-32 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded bg-brand-500 flex items-center justify-center text-[10px] font-bold text-black">
                TP
              </div>
<span className="font-medium text-white">Trading Pool</span>
</div>
<p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Redefining the prop trading landscape by bridging the gap between
              retail funding and institutional execution.
            </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Raw Spreads
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Instant Funding
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Match-Trader
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  cTrader
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Risk Disclosure
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-12 gap-6">
<div className="text-[10px] text-zinc-600 max-w-2xl leading-relaxed">
<p className="mb-2">
              RISK WARNING: Trading involves substantial risk of loss and is not
              suitable for every investor. Valuation of assets may fluctuate and
              as a result, clients may lose more than their original investment.
            </p>
<p>
              © 2024 Fundedx Ltd. All rights reserved. Registered in St. Lucia.
            </p>
</div>
<div className="flex gap-4">
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="discord"></i>
</div>
</div>
</div>
</footer>



    </>
  );
}
