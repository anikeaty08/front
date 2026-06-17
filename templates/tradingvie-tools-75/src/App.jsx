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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neon: {
DEFAULT: '#36FD5A',
400: '#36FD5A',
500: '#2Bd949',
dim: 'rgba(54, 253, 90, 0.1)',
glow: 'rgba(54, 253, 90, 0.5)',
},
neutral: {
850: '#121212',
900: '#0A0A0A',
950: '#050505',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee-ltr': 'marquee-ltr 45s linear infinite',
'marquee-rtl': 'marquee-rtl 45s linear infinite',
'beam': 'beam 8s ease-in-out infinite',
'flow-northeast': 'flow-northeast 15s ease-in-out infinite alternate',
},
keyframes: {
'marquee-ltr': {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0)' },
},
'marquee-rtl': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
'beam': {
'0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
'50%': { opacity: '0.6', transform: 'scaleY(1.5)' },
},
'flow-northeast': {
'0%': { transform: 'translate(-20%, 20%) scale(1)' },
'100%': { transform: 'translate(20%, -20%) scale(1.1)' },
}
}
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                      observer.unobserve(entry.target);
                  }
              });
          }, { rootMargin: '0px 0px -5% 0px', threshold: 0.1 });

          document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
      });
    
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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="bg-flow-container">
<div className="bg-flow-glow"></div>
</div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGgwdjYwaDYwVjBIMHptMSAxaDU4djU4SDFWMXoiIGZpbGw9IiMzNmZkNWEiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-20"></div>
</div>

<nav className="sticky top-0 w-full nav-liquid-glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">

<span className="text-white font-semibold tracking-tight text-lg">
            Toodegrees
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#tools">
            Tools
          </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#reviews">
            Reviews
          </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#integrations">
            Integrations
          </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#development">
            Development
          </a>
</div>
<div className="flex items-center gap-4"></div>
</div>
</nav>
<main className="relative overflow-hidden flex flex-col items-center w-full">

<section className="flex flex-col items-center w-full pt-20 pb-0 relative z-10" id="hero">
<div className="w-full max-w-7xl px-6 flex flex-col items-center text-center relative z-20">


<h1 className="animate-on-scroll delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-tight pb-4 mb-4 relative bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
<span className="block">Save Time</span>
<span className="block">Focus on Trading</span>
</h1>
<p className="animate-on-scroll delay-200 text-neutral-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light mb-10">
            Institutional-grade TradingView infrastructure.
            <br className="hidden md:block"/>
            Precision indicators, automated signals, and proprietary strategies.
          </p>

<div className="animate-on-scroll delay-300 flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="btn-neon-3d px-8 py-3.5 text-base min-w-[180px] group">
<span className="flex justify-center w-full items-center gap-2">
                Get Access Now
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
</button>
<button className="btn-secondary-3d px-8 py-3.5 text-base font-medium flex items-center gap-2 min-w-[180px] justify-center">
              View Library
            </button>
</div>
</div>

<div className="perspective-container w-full max-w-6xl mx-auto px-4 -mb-32 relative z-10 animate-on-scroll delay-300">
<div className="tilted-chart rounded-t-xl overflow-hidden bg-[#0A0A0A] border border-white/10 relative">

<div className="h-10 bg-neutral-900 border-b border-white/5 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700/50"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700/50"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                BTCUSD • 15M • QUANT_ZONES
              </div>
<div className="w-16"></div>
</div>

<div className="relative h-[400px] w-full bg-[#050505] overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>


<div className="absolute top-[20%] w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex items-center justify-end pr-10">
<span className="text-[10px] text-neutral-400 font-mono bg-[#050505] px-2 border border-white/10 rounded">
                  +2σ DEVIATION
                </span>
</div>
<div className="absolute top-[20%] w-full h-16 bg-gradient-to-b from-white/5 to-transparent opacity-30 border-t border-dashed border-white/20"></div>

<div className="absolute bottom-[25%] w-full h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent flex items-center justify-end pr-10">
<span className="text-[10px] text-neon font-mono bg-[#050505] px-2 border border-neon/20 rounded">
                  -2σ ALGO_FLOOR
                </span>
</div>
<div className="absolute bottom-[25%] w-full h-16 bg-gradient-to-t from-neon/5 to-transparent opacity-30 border-b border-dashed border-neon/30"></div>

<svg className="absolute inset-0 w-full h-full preserve-3d" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#36FD5A" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#36FD5A" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path d="M0,200 L100,220 L200,300 L300,280 L400,120 L500,80 L600,100 L700,200 L1200,180" fill="none" filter="url(#glow)" stroke="#36FD5A" strokeLinejoin="round" strokeWidth="2"></path>

<path d="M0,200 L100,220 L200,300 L300,280 L400,120 L500,80 L600,100 L700,200 L1200,180 L1200,400 L0,400 Z" fill="url(#chartGradient)" opacity="0.5"></path>
</svg>


<div className="absolute bottom-[25%] left-[25%] w-3 h-3 border border-neon rounded-full animate-ping"></div>
<div className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 bg-neon rounded-full shadow-[0_0_10px_#36FD5A]"></div>

<div className="absolute top-[20%] left-[42%] w-3 h-3 border border-white/50 rounded-full animate-ping delay-300"></div>
<div className="absolute top-[20%] left-[42%] w-1.5 h-1.5 bg-white rounded-full"></div>

<div className="absolute top-4 right-4 flex flex-col items-end">
<span className="text-sm font-mono text-neon font-bold">
                  42,892.50
                </span>
<span className="text-xs font-mono text-neutral-500">
                  Live Feed •
                  <span className="text-neon">●</span>
</span>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<section className="w-full relative z-20 animate-on-scroll border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm mt-10">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto">
<div className="flex items-center gap-3">
<span className="text-3xl font-semibold text-white tracking-tighter">
                15k+
              </span>
<span className="text-xs uppercase text-neutral-500 leading-tight">
                Active
                <br/>
                Traders
              </span>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-3">
<span className="text-3xl font-semibold text-white tracking-tighter">
                4.8/5
              </span>
<span className="text-xs uppercase text-neutral-500 leading-tight">
                Trust
                <br/>
                Score
              </span>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-3">
<span className="text-3xl font-semibold text-white tracking-tighter">
                260
              </span>
<span className="text-xs uppercase text-neutral-500 leading-tight">
                Reviews on
                <br/>
                Whop
              </span>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-3">
<span className="text-3xl font-semibold text-white tracking-tighter">
                30+
              </span>
<span className="text-xs uppercase text-neutral-500 leading-tight">
                Premium
                <br/>
                Tools
              </span>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 pt-24 pb-16 mx-auto px-6" id="tools">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-on-scroll">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              The Ecosystem
            </h2>
<p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              A complete suite of tools designed to provide clarity in chaos.
            </p>
</div>
<a className="text-sm text-neon font-medium hover:text-white transition-colors flex items-center gap-2" href="#">
            View Full Library
            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="feature-card rounded-xl p-8 flex flex-col h-full animate-on-scroll group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<span className="iconify" data-icon="lucide:layers" data-width="80"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-inner">
<span className="iconify stroke-[1.5]" data-icon="lucide:book-open" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">
              Premium Manuals
            </h3>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Proprietary concepts translated into high-precision indicators.
            </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center justify-between group/item">
<span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">
                  HTF Power of Three°
                </span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-500 border border-white/5">
                  PRO+
                </span>
</li>
<li className="flex items-center justify-between group/item">
<span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">
                  Seasonal Tendency°
                </span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-500 border border-white/5">
                  PRO+
                </span>
</li>
</ul>
</div>

<div className="feature-card rounded-xl p-8 flex flex-col h-full animate-on-scroll delay-100 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<span className="iconify" data-icon="lucide:users" data-width="80"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-inner">
<span className="iconify stroke-[1.5]" data-icon="lucide:share-2" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">
              Collaborator Tools
            </h3>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Tools developed in partnership with industry leaders.
            </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center justify-between group/item">
<span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">
                  Fractal Model
                </span>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-600">TTrades</span>
</div>
</li>
<li className="flex items-center justify-between group/item">
<span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">
                  Dynamic RTH Gap
                </span>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-600">The Engineer</span>
</div>
</li>
</ul>
</div>

<div className="feature-card rounded-xl p-8 flex flex-col h-full animate-on-scroll delay-200 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="80"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-inner">
<span className="iconify stroke-[1.5]" data-icon="lucide:terminal" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">
              Scripts &amp; Community
            </h3>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
              Earn rewards, request scripts, and level up.
            </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center justify-between group/item">
<span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">
                  Toodegrees XP System
                </span>
<span className="iconify text-neon" data-icon="lucide:zap" data-width="14"></span>
</li>
<li className="flex items-center justify-between group/item">
<span className="text-sm text-neutral-300 group-hover/item:text-white transition-colors">
                  Content Rewards
                </span>
<span className="iconify text-neutral-600" data-icon="lucide:gift" data-width="14"></span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-7xl z-20 py-16 mx-auto px-6 border-t border-white/5" id="reviews">
<div className="flex items-center justify-between mb-8">
<div className="space-y-1">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Traders love us
            </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<span className="iconify stroke-[1.5]" data-icon="lucide:message-square" data-width="18"></span>
<span className="text-base">Real reviews from Whop</span>
</div>
</div>
<div className="relative mt-8 overflow-hidden rounded-2xl border border-white/5 bg-[#050505]">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-ltr hover:[animation-play-state:paused]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-white/5 bg-neutral-900/40 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold text-white">
                    DK
                  </div>
<div>
<div className="flex items-center gap-1">
<span className="text-base font-medium text-white">
                        DKTrades
                      </span>
<span className="iconify text-neon" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-neon" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-neon" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-xs text-neutral-400">Verified Member</p>
</div>
</div>
<p className="mt-4 text-base text-neutral-300">
                  "The
                  <span className="text-white font-medium">Seasonal Tendency</span>
                  script is a cheat code. My bias has been spot on for 3 weeks
                  straight."
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-white/5 bg-neutral-900/40 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold text-white">
                    JA
                  </div>
<div>
<div className="flex items-center gap-1">
<span className="text-base font-medium text-white">
                        Jason A.
                      </span>
<span className="iconify text-neon stroke-[1.5]" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-xs text-neutral-400">Custom Script Client</p>
</div>
</div>
<p className="mt-4 text-base text-neutral-300">
                  "I needed a complex alert system for my prop firm challenges.
                  The dev team delivered in 48 hours."
                </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-white/5 bg-neutral-900/40 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold text-white">
                    SZ
                  </div>
<div>
<div className="flex items-center gap-1">
<span className="text-base font-medium text-white">
                        Suarez_Fx
                      </span>
<span className="iconify text-neon" data-icon="lucide:star" data-width="14"></span>
</div>
</div>
</div>
<p className="mt-4 text-base text-neutral-300">
                  "The Fractal Model by TTrades is worth the subscription alone.
                  Best TradingView community."
                </p>
</article>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10 border-t border-white/5" id="integrations">
<div className="animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Connect your world
          </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="rounded-xl border border-white/10 bg-neutral-900/30 p-8 backdrop-blur-sm">
<p className="text-base text-neutral-400 mb-8">
                Seamlessly integrate your strategies with your favorite
                platforms via webhooks and API alerts.
              </p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
<span className="iconify text-white" data-icon="simple-icons:discord" data-width="28"></span>
<span className="text-xs text-neutral-400">Discord</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
<span className="iconify text-white" data-icon="simple-icons:telegram" data-width="28"></span>
<span className="text-xs text-neutral-400">Telegram</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
<span className="iconify text-white" data-icon="simple-icons:binance" data-width="28"></span>
<span className="text-xs text-neutral-400">Binance</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
<span className="iconify text-white stroke-[1.5]" data-icon="lucide:webhook" data-width="28"></span>
<span className="text-xs text-neutral-400">Custom</span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-[#080808] p-1 overflow-hidden">
<div className="h-full bg-[#0A0A0A] rounded-lg p-6 font-mono text-xs text-neutral-400 leading-loose">
<div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
<span className="text-neutral-500">alert_config.json</span>
<span className="text-neon flex items-center gap-1">● Live</span>
</div>
<p>
<span className="text-purple-400">"webhook_url"</span>
                  :
                  <span className="text-green-400">
                    "https://discord.com/api/webhooks/..."
                  </span>
                  ,
                </p>
<p>
<span className="text-purple-400">"message"</span>
                  : {
                </p>
<p className="pl-4">
<span className="text-purple-400">"content"</span>
                  :
                  <span className="text-green-400">
                    "Strategy {{strategy.name}} Triggered"
                  </span>
                  ,
                </p>
<p className="pl-4">
<span className="text-purple-400">"embeds"</span>
                  : [{
                </p>
<p className="pl-8">
<span className="text-purple-400">"title"</span>
                  :
                  <span className="text-green-400">"LONG ENTRY"</span>
                  ,
                </p>
<p className="pl-8">
<span className="text-purple-400">"color"</span>
                  :
                  <span className="text-neon">3594586</span>
                  ,
                </p>
<p className="pl-8">
<span className="text-purple-400">"timestamp"</span>
                  :
                  <span className="text-blue-400">"{{timenow}}"</span>
</p>
<p className="pl-4">}]</p>
<p>}</p>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 py-20 mx-auto px-6 border-t border-white/5" id="development">
<div className="relative rounded-2xl bg-neutral-900/30 border border-white/10 overflow-hidden p-8 md:p-16 animate-on-scroll">
<div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
<div className="flex-1 space-y-8">
<div>
<div className="inline-flex items-center gap-2 px-2 py-1 bg-neon/10 border border-neon/20 rounded text-xs text-neon font-mono mb-4">
                  CUSTOM PINE SCRIPT
                </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                  Need a custom strategy?
                </h2>
<p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                  We guide you through the proposal, coding, and optimization of
                  your proprietary indicators.
                </p>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 rounded bg-white/5 border border-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white font-mono text-sm border border-white/5">
                    01
                  </div>
<div className="flex-1">
<div className="text-base font-medium text-white">
                      Proposal &amp; Quote
                    </div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded bg-white/5 border border-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
<div className="w-8 h-8 rounded bg-neon text-black flex items-center justify-center font-bold font-mono text-sm shadow-[0_0_10px_rgba(54,253,90,0.5)]">
                    02
                  </div>
<div className="flex-1">
<div className="text-base font-medium text-white">
                      Rapid Development
                    </div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded bg-white/5 border border-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white font-mono text-sm border border-white/5">
                    03
                  </div>
<div className="flex-1">
<div className="text-base font-medium text-white">
                      Source Code Delivery
                    </div>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="absolute -inset-1 bg-neon/20 blur-xl opacity-20"></div>
<div className="rounded-lg bg-[#050505] border border-white/10 p-1 shadow-2xl relative">
<div className="p-6 font-mono text-xs text-neutral-400 overflow-hidden leading-loose">
<p>
<span className="text-purple-400">study</span>
                    (
                    <span className="text-green-400">"Institutional Bias"</span>
                    )
                  </p>
<p>
<span className="text-neon">if</span>
                    (barstate.isconfirmed)
                  </p>
<p className="pl-4">float _bias = ta.ema(src, len)</p>
<p className="pl-4">
<span className="text-neon">if</span>
                    (close &gt; _bias)
                  </p>
<p className="pl-8">
                    label.new(bar_index, high,
                    <span className="text-green-400">"LONG"</span>
                    )
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative z-20 py-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-6xl md:text-8xl font-semibold text-white tracking-tighter mb-8">
            Ready to
            <span className="text-neon">Ascend?</span>
</h2>
<a className="btn-neon-3d px-10 py-4 text-base font-semibold inline-flex" href="https://whop.com/toodegrees">
<span className="flex items-center gap-2">
              Get Access Now
              <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</span>
</a>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-[#020202]/80 backdrop-blur-xl pt-16 pb-8 relative z-20 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4">

<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tight">
                Toodegrees
              </span>
</div>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Providing the highest quality TradingView tools and community
              education.
            </p>
<div className="flex gap-4 pt-2">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="simple-icons:discord" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="simple-icons:twitter" data-width="20"></span>
</a>
</div>
</div>
<div className="flex flex-wrap gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-white uppercase tracking-wider">
                Legal
              </span>
<a className="text-neutral-500 hover:text-neon transition-colors" href="#">
                Terms
              </a>
<a className="text-neutral-500 hover:text-neon transition-colors" href="#">
                Privacy
              </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-neutral-700">
            © 2024 Toodegrees. Not financial advice.
          </span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
<span className="text-xs text-neutral-500">
              All systems operational
            </span>
</div>
</div>
</footer>
</main>



    </>
  );
}
