import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
page: '#050505',
panel: '#0A0A0A',
surface: '#121212',
electric: {
blue: '#3b82f6',
cyan: '#06b6d4',
purple: '#8b5cf6',
},
neon: {
green: '#22c55e',
red: '#ef4444',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
'cursor-move': 'cursorPath 8s infinite',
'appear': 'appear 0.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scan: {
'0%': { left: '0%' },
'100%': { left: '100%' },
},
cursorPath: {
'0%': { transform: 'translate(0, 0)', opacity: 1 },
'20%': { transform: 'translate(140px, 80px)' }, /* Move to Ask */
'25%': { transform: 'translate(140px, 80px) scale(0.9)' }, /* Click */
'30%': { transform: 'translate(140px, 80px) scale(1)' },
'40%': { transform: 'translate(140px, 80px)', opacity: 1 },
'100%': { transform: 'translate(140px, 80px)', opacity: 1 }
},
appear: {
'0%': { opacity: 0, transform: 'scale(0.95)' },
'100%': { opacity: 1, transform: 'scale(1)' }
}
}
}
}
}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      function switchView(viewId) {
          // Hide all views
          const views = document.querySelectorAll('.view-section');
          views.forEach(view => {
              view.classList.remove('active');
              setTimeout(() => {
                  if(!view.classList.contains('active')) view.style.display = 'none';
              }, 300); // fade out duration
          });

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });

          // Show target view
          const target = document.getElementById('view-' + viewId);
          if (target) {
              target.style.display = 'block';
              // Small delay to allow display:block to render before opacity transition
              setTimeout(() => {
                  target.classList.add('active');
              }, 10);
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>

</div>

<div className="fixed inset-0 bg-grid z-[-1] pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 blur-[100px] rounded-full z-[-1] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-page/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="switchView('home')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-black border border-white/10 flex items-center justify-center text-electric-blue shadow-lg">
<svg className="iconify" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<span className="font-medium text-sm tracking-tight text-white group-hover:text-electric-cyan transition-colors">
            Options Demystified
          </span>
</a>
<div className="hidden md:flex items-center gap-8">
<button className="hover:text-white transition-colors text-xs font-medium text-slate-400 cursor-pointer" onclick="switchView('home');window.location.href='/learn'" role="button">
            Home
          </button>
<button className="hover:text-white transition-colors text-xs font-medium text-slate-400" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('platform-demo').scrollIntoView({behavior: 'smooth'}), 100);;window.location.href='/platform-guides'" role="button">
            Platform Guides
          </button>
<button className="hover:text-white transition-colors text-xs font-medium text-slate-400" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('platform-demo').scrollIntoView({behavior: 'smooth'}), 100);;window.location.href='/learn'" role="button">
            Learn
          </button>
<button className="text-xs font-medium text-slate-400 hover:text-white transition-colors" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'}), 100);">
            Waitlist
          </button>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="iconify" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18M3 6h18M3 18h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-all" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('strategies').scrollIntoView({behavior: 'smooth'}), 100);">
<span>Start Learning</span>
<svg className="iconify" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
<div className="hidden md:hidden absolute top-16 left-0 w-full bg-page/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-2 shadow-2xl z-40" id="mobile-menu">
<button className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-left transition-all" onclick="switchView('home'); document.getElementById('mobile-menu').classList.add('hidden')">
          Home
        </button>
<button className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-left transition-all" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('platform-demo').scrollIntoView({behavior: 'smooth'}), 100); document.getElementById('mobile-menu').classList.add('hidden')">
          Platform Guides
        </button>
<button className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-left transition-all" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'}), 100); document.getElementById('mobile-menu').classList.add('hidden')">
          Waitlist
        </button>
</div>
</nav>

<main className="pt-16 flex-grow" id="main-content">

<div className="view-section active" id="view-home">

<section className="md:pt-32 md:pb-32 overflow-hidden pt-20 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-electric-blue">
                  No Finance Degree Required
                </span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white title-tight leading-[1.1] mb-6">
                Options, finally explained in
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-electric-blue text-glow">
                  Plain English.
                </span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mb-10">
                Stop treating the market like a casino. Visualize your risk,
                understand your probability, and trade with confidence.
              </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-4 rounded-full bg-white text-black text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors" onclick="document.getElementById('strategies').scrollIntoView({behavior: 'smooth'})">
                  Explore Strategies
                </button>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center">
<div className="animate-float overflow-hidden bg-gradient-to-br from-black/10 via-black/0 to-black/10 opacity-100 w-full max-w-md border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<svg className="iconify text-electric-blue" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-mono text-slate-400">
                      PAYOFF_SIMULATOR
                    </span>
</div>
<div className="flex gap-2">
<div className="text-[10px] font-mono text-neon-green bg-neon-green/10 px-2 py-0.5 rounded">
                      PROFIT ZONE
                    </div>
</div>
</div>

<div className="relative h-56 w-full border-l border-b border-white/10">

<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 opacity-[0.05]">
<div className="border-r border-white h-full"></div>
<div className="border-r border-white h-full"></div>
<div className="border-r border-white h-full"></div>
<div className="border-r border-white h-full"></div>
<div className="border-r border-white h-full"></div>
<div className="border-r border-white h-full"></div>
</div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 border-t border-dashed border-white/30"></div>

<svg className="absolute inset-0 w-full h-full overflow-visible">
<defs>
<lineargradient id="profitGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#22c55e" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M 200 112 L 380 20 L 380 112 Z" fill="url(#profitGrad)"></path>

<path className="graph-line drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" d="M 0 150 L 200 150 L 380 20" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

<circle cx="250" cy="112" fill="#050505" r="4" stroke="#fff" strokeWidth="2"></circle>
<text fill="#94a3b8" fontFamily="monospace" fontSize="10" x="260" y="108">
                      Break Even
                    </text>
</svg>

<div className="absolute top-0 bottom-0 w-[1px] bg-white/30 animate-scan">
<div className="absolute top-0 -translate-x-1/2 bg-surface border border-white/20 text-[9px] font-mono text-white px-1 rounded shadow-lg">
                      EXP: FRI
                    </div>
</div>

<div className="absolute bottom-4 left-4 text-[10px] font-mono text-neon-red">
                    MAX RISK: $200
                  </div>
<div className="absolute top-4 right-4 text-[10px] font-mono text-neon-green">
                    UPSIDE: ∞
                  </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-panel/30">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white title-tight mb-4">
                Why is this so hard?
              </h2>
<p className="text-slate-400 font-light text-lg">
                The industry benefits when you don't understand the rules.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-surface border border-white/5 p-8 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-electric-purple/10 flex items-center justify-center text-electric-purple mb-6">
<svg className="iconify" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v19m-9-9h18M5 16l4-4M5 8l4 4m10-4l-4 4m4 4l-4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  The Jargon Barrier
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Delta, Gamma, Theta, Vega. Financial educators throw Greek
                  letters at you to sound smart. We replace them with simple
                  concepts like "Time Decay" and "Speed".
                </p>
</div>

<div className="bg-surface border border-white/5 p-8 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6">
<svg className="iconify" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h18v18H3zM9 9h6v6H9z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Interface Overload
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Brokerage apps look like airplane cockpits designed in 1995.
                  One wrong click on "Sell to Open" vs "Buy to Open" can cost
                  you thousands.
                </p>
</div>

<div className="bg-surface border border-white/5 p-8 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-electric-cyan/10 flex items-center justify-center text-electric-cyan mb-6">
<svg className="iconify" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Invisible Risk
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Buying stocks is linear. Options are non-linear. You can be
                  right about the direction but still lose money because you got
                  the timing wrong.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="platform-demo">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="lg:order-2">
<div className="relative w-full rounded-xl bg-[#0f1115] border border-white/10 shadow-2xl overflow-hidden group">

<div className="bg-[#1a1d24] px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex gap-4 items-center">
<div className="font-mono font-bold text-white tracking-wider">
                        SCHWAB
                      </div>
<div className="h-4 w-[1px] bg-white/10"></div>
<span className="text-xs text-electric-blue font-mono">
                        AMZN $152.40
                        <span className="text-neon-green">+1.2%</span>
</span>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
</div>

<div className="p-6 font-mono text-xs relative min-h-[300px] overflow-x-auto">

<div className="grid grid-cols-5 text-slate-500 mb-4 pb-2 border-b border-white/5">
<div className="col-span-1">CALLS</div>
<div className="text-right">BID</div>
<div className="text-right text-white font-bold">ASK</div>
<div className="text-center text-electric-blue">STRIKE</div>
<div className="text-right">PUTS</div>
</div>

<div className="space-y-1">

<div className="grid grid-cols-5 items-center py-2 hover:bg-white/5 rounded transition-colors opacity-50">
<div className="col-span-1 text-slate-400">Sep 15</div>
<div className="text-right text-neon-green">4.20</div>
<div className="text-right text-red-400">4.35</div>
<div className="text-center bg-white/5 rounded py-0.5 mx-2">
                          150.0
                        </div>
<div className="text-right text-slate-600">--</div>
</div>

<div className="grid grid-cols-5 items-center py-2 bg-electric-blue/10 border border-electric-blue/20 rounded relative">
<div className="col-span-1 text-white">Sep 15</div>
<div className="text-right text-neon-green">2.10</div>
<div className="text-right text-red-400 font-bold bg-white/5 px-1 rounded">
                          2.15
                        </div>
<div className="text-center font-bold text-white bg-electric-blue/20 rounded py-0.5 mx-2">
                          155.0
                        </div>
<div className="text-right text-slate-600">--</div>

<div className="absolute top-10 left-32 z-20 w-48 bg-panel border border-electric-blue p-3 rounded shadow-xl animate-appear" style={{animationDelay: '2.2s'}}>
<div className="text-electric-blue font-bold mb-1">
                            Step 1: Click Ask
                          </div>
<p className="text-[10px] text-slate-300">
                            Never click "Bid" when buying. Click the Ask price
                            on the Call side.
                          </p>
<div className="absolute -top-1 left-4 w-2 h-2 bg-panel border-t border-l border-electric-blue rotate-45"></div>
</div>
</div>

<div className="grid grid-cols-5 items-center py-2 hover:bg-white/5 rounded transition-colors opacity-50">
<div className="col-span-1 text-slate-400">Sep 15</div>
<div className="text-right text-neon-green">0.85</div>
<div className="text-right text-red-400">0.90</div>
<div className="text-center bg-white/5 rounded py-0.5 mx-2">
                          160.0
                        </div>
<div className="text-right text-slate-600">--</div>
</div>
</div>

<svg className="absolute top-0 left-0 w-6 h-6 text-white drop-shadow-md z-30 animate-cursor-move" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="lg:order-1">
<h2 className="text-3xl font-medium text-white mb-6">
                  Stop guessing where to click.
                </h2>
<p className="text-slate-400 font-light text-lg mb-8">
                  Brokerage interfaces look like airplane cockpits. We provide
                  interactive, step-by-step simulations so you execute trades
                  correctly without risking real money on a "fat finger" error.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-panel">
<div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue font-mono text-sm">
                      1
                    </div>
<div className="text-sm text-slate-300">
                      Select Expiration Date
                    </div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-panel">
<div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue font-mono text-sm">
                      2
                    </div>
<div className="text-sm text-slate-300">
                      Choose Strike Price
                    </div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-panel">
<div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue font-mono text-sm">
                      3
                    </div>
<div className="text-sm text-slate-300">
                      Select Order Type (Limit vs Market)
                    </div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5">
<h3 className="text-sm font-mono text-slate-500 mb-6 uppercase tracking-widest">
                    Available Guides
                  </h3>
<div className="feature-card group flex cursor-pointer hover:border-electric-blue/30 transition-all border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-center" onclick="window.location.href='/platform-guides'" role="button">
<div className="w-12 h-12 shrink-0 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:bg-electric-blue group-hover:text-black transition-colors">
<svg className="iconify" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<h3 className="group-hover:text-electric-blue transition-colors font-medium text-white mb-1" onclick="window.location.href='/platform-guides'" role="button">
                        How to Place an Options Trade on Charles Schwab
                      </h3>
<p className="text-xs text-slate-400" onclick="window.location.href='/platform-guides'" role="button">
                        Launch the interactive walkthrough module.
                      </p>
</div>
<div className="shrink-0 flex group-hover:border-electric-blue group-hover:text-electric-blue transition-colors text-slate-400 w-8 h-8 border-white/10 border rounded-full items-center justify-center" onclick="window.location.href='/platform-guides'" role="button">
<svg className="iconify w-[16px] h-[16px]" data-icon-replaced="true" height="16" strokeWidth="2" style={{color: 'rgb(59, 130, 246)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="opacity-80 pt-24 pr-6 pb-24 pl-6" id="strategies">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white title-tight mb-4">
                Choose your path
              </h2>
<p className="text-slate-400 font-light text-lg">
                Click a strategy to enter the learning module.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="feature-card cursor-pointer group bg-panel border border-white/5 rounded-2xl p-8 relative overflow-hidden" onclick="switchView('covered-calls')">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-electric-blue group-hover:text-black transition-colors">
<svg className="iconify" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                  Selling Covered Calls
                </h3>
<p className="text-sm text-slate-400 font-light mb-8">
                  Generate steady income on stocks you already own. The
                  "Landlord" strategy.
                </p>
<div className="flex items-center text-xs text-electric-blue font-medium group-hover:gap-2 transition-all">
                  Start Module
                  <svg className="iconify ml-1" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="feature-card cursor-pointer group bg-panel border border-white/5 rounded-2xl p-8 relative overflow-hidden" onclick="switchView('buying-calls')">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-electric-blue group-hover:text-black transition-colors">
<svg className="iconify" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7L13.5 15.5L8.5 10.5L2 17m14-10h6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                  Buying Calls
                </h3>
<p className="text-sm text-slate-400 font-light mb-8">
                  Leverage small capital for massive upside when you're bullish.
                </p>
<div className="flex items-center text-xs text-electric-blue font-medium group-hover:gap-2 transition-all">
                  Start Module
                  <svg className="iconify ml-1" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="feature-card cursor-pointer group bg-panel border border-white/5 rounded-2xl p-8 relative overflow-hidden" onclick="switchView('buying-puts')">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-electric-blue group-hover:text-black transition-colors">
<svg className="iconify" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20m5-17H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Buying Puts</h3>
<p className="text-sm text-slate-400 font-light mb-8">
                  Profit when markets crash or protect your portfolio from
                  downside.
                </p>
<div className="flex items-center text-xs text-electric-blue font-medium group-hover:gap-2 transition-all">
                  Start Module
                  <svg className="iconify ml-1" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white title-tight mb-4">
                Your Roadmap to Confidence
              </h2>
<p className="text-slate-400 font-light text-lg">
                We don't just teach theory. We build habits.
              </p>
</div>
<div className="relative">

<div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-ml-[0.5px]"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-xl font-medium text-white">
                      Beginner Foundations
                    </h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-400 md:flex-row-reverse">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>What is an Option?</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 md:flex-row-reverse">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Calls vs Puts?</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 md:flex-row-reverse">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Understanding Expiration</span>
</li>
</ul>
</div>
<div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-page border-2 border-electric-blue z-10 order-1 md:order-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 hidden md:block"></div>
<div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-page border-2 border-slate-700 group-hover:border-electric-cyan transition-colors z-10 order-1 md:order-2"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3 md:text-left pl-10">
<h3 className="text-xl font-medium text-white">
                      Confident Trader
                    </h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-400">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Buying for Leverage</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Managing Losing Trades</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Reading Options Chain</span>
</li>
</ul>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
<div className="md:w-1/2 md:text-right pl-10 md:pl-0 md:pr-12 order-3 md:order-1">
<h3 className="text-xl font-medium text-white">
                      Income Strategies
                    </h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-400 md:flex-row-reverse">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>The Wheel Strategy</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 md:flex-row-reverse">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Covered Calls</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 md:flex-row-reverse">
<div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center shrink-0 border border-electric-blue/20">
<svg className="iconify text-electric-blue" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span>Cash Secured Puts</span>
</li>
</ul>
</div>
<div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-page border-2 border-slate-700 group-hover:border-neon-green transition-colors z-10 order-1 md:order-2"></div>
<div className="md:w-1/2 md:pl-12 order-2 md:order-3 hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="waitlist">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-electric-blue/5 pointer-events-none"></div>
<div className="max-w-xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white title-tight mb-6">
              Master the market.
            </h2>
<p className="text-slate-400 font-light text-lg mb-10">
              Join 10,000+ traders getting early access to our interactive
              learning platform.
            </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-all font-light text-sm" placeholder="enter@email.com" type="email"/>
<button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-slate-200 transition-colors text-sm whitespace-nowrap" type="button">
                Join Waitlist
              </button>
</form>
<p className="mt-4 text-[10px] text-slate-600 uppercase tracking-widest">
              No Spam. Unsubscribe anytime.
            </p>
</div>
</section>
</div>


<div className="view-section" id="view-covered-calls">
<div className="max-w-4xl mx-auto py-20 px-6">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group" onclick="switchView('home')">
<svg className="iconify group-hover:-translate-x-1 transition-transform" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5m7 7l-7-7l7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Back to Home
          </button>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-neon-green/10 rounded-lg text-neon-green text-xs font-mono border border-neon-green/20">
              INCOME STRATEGY
            </div>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Selling Covered Calls
          </h1>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
            Imagine owning a rental property. You own the house (100 shares),
            and you collect rent (premium) from a tenant. In exchange, you agree
            to sell the house if the market price skyrockets.
          </p>

<div className="bg-panel border border-white/10 rounded-2xl p-8 mb-12">
<h3 className="text-sm font-mono text-slate-500 mb-6 uppercase">
              Payoff Diagram
            </h3>
<div className="relative h-48 w-full">
<svg className="w-full h-full overflow-visible">

<line stroke="#334155" strokeWidth="1" x1="0" x2="100%" y1="180" y2="180"></line>
<line stroke="#334155" strokeWidth="1" x1="50" x2="50" y1="0" y2="100%"></line>

<path d="M 50 180 L 150 80 L 350 80" fill="none" stroke="#22c55e" strokeWidth="3"></path>
<circle cx="150" cy="80" fill="#050505" r="4" stroke="#fff"></circle>

<text fill="#fff" fontFamily="monospace" fontSize="12" x="160" y="70">
                  Max Profit (Capped)
                </text>
</svg>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-medium text-white mb-4">
                When to use it?
              </h3>
<ul className="space-y-3 text-slate-400 text-sm">
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You own at least 100 shares.
                </li>
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You are neutral or slightly bullish.
                </li>
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You want to generate extra monthly income.
                </li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-4">The Risk</h3>
<p className="text-sm text-slate-400">
                Your profit is capped. If the stock (AMZN) goes to the moon
                ($200+), you still have to sell at your strike price ($160). You
                miss out on the huge rally.
              </p>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-buying-calls">
<div className="max-w-4xl mx-auto py-20 px-6">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group" onclick="switchView('home')">
<svg className="iconify group-hover:-translate-x-1 transition-transform" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5m7 7l-7-7l7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Back to Home
          </button>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-electric-blue/10 rounded-lg text-electric-blue text-xs font-mono border border-electric-blue/20">
              BULLISH STRATEGY
            </div>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Buying Calls
          </h1>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
            This is a pure bet that the stock will go UP. You pay a small fee
            (premium) for the right to buy shares at a fixed price later. It's
            leverage.
          </p>

<div className="bg-panel border border-white/10 rounded-2xl p-8 mb-12">
<h3 className="text-sm font-mono text-slate-500 mb-6 uppercase">
              Payoff Diagram
            </h3>
<div className="relative h-48 w-full">
<svg className="w-full h-full overflow-visible">

<line stroke="#334155" strokeWidth="1" x1="0" x2="100%" y1="150" y2="150"></line>
<line stroke="#334155" strokeWidth="1" x1="50" x2="50" y1="0" y2="100%"></line>

<path d="M 50 170 L 150 170 L 300 20" fill="none" stroke="#3b82f6" strokeWidth="3"></path>
<circle cx="150" cy="170" fill="#050505" r="4" stroke="#fff"></circle>

<text fill="#ef4444" fontFamily="monospace" fontSize="12" x="60" y="190">
                  Limited Loss
                </text>
<text fill="#22c55e" fontFamily="monospace" fontSize="12" x="250" y="40">
                  Unlimited Gain
                </text>
</svg>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-medium text-white mb-4">
                When to use it?
              </h3>
<ul className="space-y-3 text-slate-400 text-sm">
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You expect a big move UP quickly.
                </li>
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You want to control 100 shares without paying full price.
                </li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-4">The Risk</h3>
<p className="text-sm text-slate-400">
                Time Decay (Theta). If the stock stays flat, your option loses
                value every single day. If it doesn't cross your strike price by
                expiration, you lose 100% of your investment.
              </p>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-buying-puts">
<div className="max-w-4xl mx-auto py-20 px-6">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group" onclick="switchView('home')">
<svg className="iconify group-hover:-translate-x-1 transition-transform" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5m7 7l-7-7l7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Back to Home
          </button>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-neon-red/10 rounded-lg text-neon-red text-xs font-mono border border-neon-red/20">
              BEARISH / HEDGE
            </div>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Buying Puts
          </h1>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
            Insurance. You pay a premium to guarantee you can sell your stock at
            a specific price, no matter how low the market crashes. Or, profit
            from a crash.
          </p>

<div className="bg-panel border border-white/10 rounded-2xl p-8 mb-12">
<h3 className="text-sm font-mono text-slate-500 mb-6 uppercase">
              Payoff Diagram
            </h3>
<div className="relative h-48 w-full">
<svg className="w-full h-full overflow-visible">

<line stroke="#334155" strokeWidth="1" x1="0" x2="100%" y1="150" y2="150"></line>
<line stroke="#334155" strokeWidth="1" x1="50" x2="50" y1="0" y2="100%"></line>

<path d="M 50 20 L 200 170 L 350 170" fill="none" stroke="#ef4444" strokeWidth="3"></path>
<circle cx="200" cy="170" fill="#050505" r="4" stroke="#fff"></circle>

<text fill="#22c55e" fontFamily="monospace" fontSize="12" x="70" y="40">
                  Profit on Crash
                </text>
<text fill="#ef4444" fontFamily="monospace" fontSize="12" x="250" y="190">
                  Limited Loss
                </text>
</svg>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-medium text-white mb-4">
                When to use it?
              </h3>
<ul className="space-y-3 text-slate-400 text-sm">
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You think a stock is about to crash.
                </li>
<li className="flex gap-2">
<span className="text-electric-blue">•</span>
                  You own shares and want to sleep at night (Insurance).
                </li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-4">The Risk</h3>
<p className="text-sm text-slate-400">
                Like calls, puts expire. If the market doesn't crash before the
                expiration date, your insurance policy expires worthless, and
                you lose the premium paid.
              </p>
</div>
</div>
</div>
</div>
</main>

<footer className="py-12 border-t border-white/5 bg-page text-center mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs text-slate-600 font-light max-w-md mx-auto">
          Content is for educational purposes only and does not constitute
          financial advice. Options trading involves risk.
        </p>
<p className="text-xs text-slate-700 mt-4">© 2023 Options Demystified.</p>
</div>
</footer>



    </>
  );
}
