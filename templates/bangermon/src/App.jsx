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
      

<nav className="flex items-center justify-between px-6 py-4 border-b border-white/5">
<div className="flex items-center gap-2">
<i className="text-[#FFFF00] fill-[#FFFF00]/20 w-6 h-6" data-lucide="hexagon" strokeWidth="1.5"></i>
<span className="text-white font-medium tracking-tight text-lg">
          DECIBEL
        </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#">Trade</a>
<a className="hover:text-white transition-colors" href="#">Earn</a>
<a className="text-[#FFFF00]" href="#">Bangermon Vault</a>
<a className="hover:text-white transition-colors" href="#">Leaderboard</a>
</div>
<button className="bg-[#FFFF00] hover:bg-[#E6E600] text-black px-4 py-2 rounded-lg text-sm font-normal transition-colors">
        Connect Wallet
      </button>
</nav>
<main>

<section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFFF00]/30 bg-[#FFFF00]/10 text-[#FFFF00] text-xs font-normal uppercase tracking-wider">
<i className="w-3.5 h-3.5" data-lucide="zap" strokeWidth="1.5"></i>
            Season 1 — Live Now
          </div>
<div className="space-y-4">
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-none">
              Bangermon Vault
            </h1>
<h2 className="text-2xl lg:text-3xl font-normal text-[#FFFF00] tracking-tight">
              $50K in PSA-Graded Bangermon Cards
            </h2>
</div>
<p className="text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
            Trade on Decibel to earn tickets. Every week we crack open the vault
            and give away rare, PSA-graded Bangermon cards to lucky winners.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="bg-[#FFFF00] hover:bg-[#E6E600] text-black px-6 py-3 rounded-lg text-sm font-normal transition-colors flex items-center gap-2">
              Start Trading
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="border border-white/10 hover:bg-white/5 text-white px-6 py-3 rounded-lg text-sm font-normal transition-colors">
              View Vault
            </button>
</div>
</div>

<div className="relative w-full max-w-sm mx-auto lg:ml-auto">
<div className="absolute -inset-4 bg-[#FFFF00]/20 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
<img alt="Bangachu" className="relative w-full h-auto rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10" src="bangachu.jpg"/>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
<div className="text-center mb-12 space-y-3">
<p className="text-[#FFFF00] text-xs font-normal uppercase tracking-wider">
            How it works
          </p>
<h3 className="text-3xl font-medium text-white tracking-tight">
            Catch 'Em All in 3 Steps
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#141A25] border border-white/5 rounded-2xl p-8 flex flex-col items-start gap-4">
<div className="w-10 h-10 bg-[#FFFF00] text-black rounded-full flex items-center justify-center font-medium text-lg">
              1
            </div>
<i className="w-6 h-6 text-[#FFFF00]" data-lucide="trending-up" strokeWidth="1.5"></i>
<h4 className="text-xl font-normal text-white tracking-tight">
              Trade on Decibel
            </h4>
<p className="text-slate-400 text-sm leading-relaxed">
              Every $50k in trading volume earns you 1 ticket. The more you
              trade, the more chances you get.
            </p>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-2xl p-8 flex flex-col items-start gap-4">
<div className="w-10 h-10 bg-[#FFFF00] text-black rounded-full flex items-center justify-center font-medium text-lg">
              2
            </div>
<i className="w-6 h-6 text-[#FFFF00]" data-lucide="ticket" strokeWidth="1.5"></i>
<h4 className="text-xl font-normal text-white tracking-tight">
              Earn Tickets
            </h4>
<p className="text-slate-400 text-sm leading-relaxed">
              Tickets automatically entered into the weekly draw. Check your
              ticket count in the dashboard below.
            </p>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-2xl p-8 flex flex-col items-start gap-4">
<div className="w-10 h-10 bg-[#FFFF00] text-black rounded-full flex items-center justify-center font-medium text-lg">
              3
            </div>
<i className="w-6 h-6 text-[#FFFF00]" data-lucide="trophy" strokeWidth="1.5"></i>
<h4 className="text-xl font-normal text-white tracking-tight">
              Win Bangermon Cards
            </h4>
<p className="text-slate-400 text-sm leading-relaxed">
              Winners announced every Friday. Claim your PSA-graded card and
              share your pull!
            </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="bg-[#141A25] border border-white/5 rounded-2xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<i className="text-[#FFFF00] w-5 h-5" data-lucide="circle-dot" strokeWidth="1.5"></i>
<h3 className="text-white font-normal tracking-tight">
                YOUR TICKETS — WEEK 6
              </h3>
</div>
<span className="text-slate-500 text-sm">Resets Monday 00:00 UTC</span>
</div>
<div className="p-6 overflow-x-auto">

<div className="flex items-center gap-2 min-w-max pb-4 border-b border-white/5">
<div className="w-12 h-8 bg-[#FFFF00] rounded flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-black" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-8 bg-[#FFFF00] rounded flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-black" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-8 bg-[#FFFF00] rounded flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-black" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-8 bg-[#FFFF00] rounded flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-black" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-8 border border-[#FFFF00] rounded flex items-center justify-center flex-shrink-0 text-[#FFFF00] text-sm font-normal">
                +1
              </div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
<div className="w-12 h-8 bg-[#1A2235] rounded flex-shrink-0"></div>
</div>
<div className="flex justify-between text-[#475569] text-xs uppercase font-normal mt-2 min-w-max">
<span className="w-12 text-center">50K</span>
<span className="w-12 text-center ml-[220px]">500K</span>
<span className="w-12 text-center ml-[260px]">750K</span>
<span className="w-12 text-center ml-auto">1M</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

<div>
<p className="text-slate-500 text-xs font-normal uppercase tracking-wider mb-2">
                  Volume
                </p>
<div className="text-4xl font-medium text-white tracking-tight">
                  $182.3K
                </div>
<div className="flex justify-between text-sm text-slate-400 mt-3 mb-1">
<span>Ticket #5</span>
<span>$200K</span>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#FFFF00] h-full rounded-full" style={{width: '90%'}}></div>
</div>
<p className="text-[#FFFF00] text-sm mt-2 font-normal">
                  $17.7K to next ticket
                </p>
</div>

<div className="md:text-center md:border-l md:border-r border-white/5 md:px-8">
<p className="text-slate-500 text-xs font-normal uppercase tracking-wider mb-2">
                  Tickets
                </p>
<div className="text-4xl font-medium text-white tracking-tight flex items-baseline md:justify-center gap-1">
<span className="text-[#FFFF00]">4</span>
<span className="text-xl text-slate-500">/ 20</span>
</div>
<p className="text-slate-400 text-sm mt-3">
                  entries in Sunday's draw
                </p>
</div>

<div className="md:text-right">
<p className="text-slate-500 text-xs font-normal uppercase tracking-wider mb-2">
                  Next Draw
                </p>
<div className="text-4xl font-medium text-white tracking-tight">
                  2d 8h
                </div>
<p className="text-slate-400 text-sm mt-3 mb-3">Sunday 5pm UTC</p>
<div className="inline-flex items-center gap-1.5 bg-[#1A2235] border border-white/5 rounded-md px-2.5 py-1 text-sm text-[#FFFF00] font-normal">
                  382 AMPs earned
                  <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<div className="text-center mb-8 space-y-2">
<p className="text-[#FFFF00] text-xs font-normal uppercase tracking-wider">
            This Week's Prizes
          </p>
<h3 className="text-3xl font-medium text-white tracking-tight">
            Week 7 — 3 Cards Up for Grabs
          </h3>
<p className="text-slate-400 text-base">
            Draw happens Friday at 8PM UTC. Cards are revealed one by one.
          </p>
</div>
<div className="flex justify-center mb-10">
<div className="inline-flex items-center gap-3 bg-[#141A25] border border-white/5 rounded-full px-5 py-2">
<i className="text-slate-400 w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-slate-400 text-sm font-normal">
              Next Draw In:
            </span>
<span className="text-[#FFFF00] text-lg font-medium tracking-tight">
              2d 14h 32m 08s
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">

<div className="bg-[#141A25] border border-white/5 rounded-2xl aspect-[3/4] flex flex-col items-center justify-center relative group hover:border-white/10 transition-colors">
<i className="w-16 h-16 text-[#CCCC00]/30 mb-6" data-lucide="help-circle" strokeWidth="1.5"></i>
<div className="flex items-center gap-1.5 bg-[#1A2235] border border-white/5 rounded-full px-3 py-1 mb-3">
<i className="w-3 h-3 text-[#FFFF00]" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-[#FFFF00] text-sm font-normal">Unrevealed</span>
</div>
<p className="text-slate-500 text-base font-normal">Prize #1</p>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-2xl aspect-[3/4] flex flex-col items-center justify-center relative group hover:border-white/10 transition-colors">
<i className="w-16 h-16 text-[#CCCC00]/30 mb-6" data-lucide="help-circle" strokeWidth="1.5"></i>
<div className="flex items-center gap-1.5 bg-[#1A2235] border border-white/5 rounded-full px-3 py-1 mb-3">
<i className="w-3 h-3 text-[#FFFF00]" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-[#FFFF00] text-sm font-normal">Unrevealed</span>
</div>
<p className="text-slate-500 text-base font-normal">Prize #2</p>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-2xl aspect-[3/4] flex flex-col items-center justify-center relative group hover:border-white/10 transition-colors">
<i className="w-16 h-16 text-[#CCCC00]/30 mb-6" data-lucide="help-circle" strokeWidth="1.5"></i>
<div className="flex items-center gap-1.5 bg-[#1A2235] border border-white/5 rounded-full px-3 py-1 mb-3">
<i className="w-3 h-3 text-[#FFFF00]" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-[#FFFF00] text-sm font-normal">Unrevealed</span>
</div>
<p className="text-slate-500 text-base font-normal">Prize #3</p>
</div>
</div>
<div className="flex justify-center gap-4">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-normal transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
            Share the Hype
          </button>
<button className="bg-[#141A25] hover:bg-[#1A2235] border border-white/5 text-[#FFFF00] px-5 py-2.5 rounded-lg text-sm font-normal transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-square" strokeWidth="1.5"></i>
            Speculate in Chat
          </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div className="space-y-2">
<p className="text-[#FFFF00] text-xs font-normal uppercase tracking-wider">
              The Vault
            </p>
<div className="flex items-center gap-4">
<h3 className="text-3xl font-medium text-white tracking-tight">
                Bangerdex — All Cards in the Vault
              </h3>
</div>
<p className="text-slate-400 text-base">
              85 cards across 12 weeks. Hover to see details. Silhouettes are
              yet to be revealed.
            </p>
</div>
<div className="bg-[#1A2235] text-[#FFFF00] text-sm font-normal px-4 py-1.5 rounded-full border border-white/5">
            32 / 85 Revealed
          </div>
</div>

<div className="flex flex-wrap gap-2 mb-8">
<button className="bg-[#FFFF00] text-black px-4 py-1.5 rounded-full text-sm font-normal">
            All
          </button>
<button className="bg-[#141A25] hover:bg-[#1A2235] border border-white/5 text-slate-300 px-4 py-1.5 rounded-full text-sm font-normal transition-colors">
            Available
          </button>
<button className="bg-[#141A25] hover:bg-[#1A2235] border border-white/5 text-slate-300 px-4 py-1.5 rounded-full text-sm font-normal transition-colors">
            This Week
          </button>
<button className="bg-[#141A25] hover:bg-[#1A2235] border border-white/5 text-slate-300 px-4 py-1.5 rounded-full text-sm font-normal transition-colors">
            Claimed
          </button>
<button className="bg-[#141A25] hover:bg-[#1A2235] border border-white/5 text-slate-300 px-4 py-1.5 rounded-full text-sm font-normal transition-colors">
            Unrevealed
          </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">

<div className="bg-[#141A25] border border-white/5 rounded-xl p-3 flex flex-col gap-3 group">
<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg aspect-[3/4] p-2 relative overflow-hidden border border-white/5 flex items-center justify-center">
<div className="w-[85%] h-[90%] bg-gradient-to-br from-[#FFFFCC] to-[#FFFF66] rounded border-2 border-slate-300 relative shadow-lg">
<div className="absolute top-0 w-full h-8 bg-white border-b border-slate-300 flex items-center justify-center">
<span className="text-xs text-black font-medium text-center leading-none">
                    CHARIZARD
                    <br/>
                    HOLO
                  </span>
</div>
<div className="absolute inset-x-2 bottom-2 top-10 bg-gradient-to-tr from-orange-500 to-red-500 border border-[#E6E600] rounded-sm"></div>
</div>
</div>
<div>
<h4 className="text-white font-normal text-base truncate">
                Charizard Holo
              </h4>
<div className="flex items-center gap-2 mt-1.5">
<span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                  PSA 9
                </span>
<span className="text-green-400 text-sm font-normal">$4,500</span>
</div>
</div>
</div>

<div className="bg-[#141A25] border border-[#FFFF00]/30 rounded-xl p-3 flex flex-col gap-3 relative">
<div className="absolute -top-2.5 left-3 bg-[#FFFF00] text-black text-xs font-medium px-2 py-0.5 rounded z-10 uppercase tracking-wider">
              This Week
            </div>
<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg aspect-[3/4] p-2 relative overflow-hidden border border-white/5 flex items-center justify-center">
<div className="w-[85%] h-[90%] bg-gradient-to-br from-[#FFFFCC] to-[#FFFF66] rounded border-2 border-slate-300 relative shadow-lg">
<div className="absolute top-0 w-full h-8 bg-white border-b border-slate-300 flex items-center justify-center">
<span className="text-xs text-black font-medium text-center leading-none">
                    PIKACHU
                    <br/>
                    ILLUSTRATOR
                  </span>
</div>
<div className="absolute inset-x-2 bottom-2 top-10 bg-gradient-to-tr from-[#FFFF00] to-[#CCCC00] border border-[#E6E600] rounded-sm"></div>
</div>
</div>
<div>
<h4 className="text-white font-normal text-base truncate">
                Pikachu Illustrator
              </h4>
<div className="flex items-center gap-2 mt-1.5">
<span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                  PSA 10
                </span>
<span className="text-green-400 text-sm font-normal">$1,200</span>
</div>
</div>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-xl p-3 flex flex-col gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-300 relative">
<div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-xl">
<span className="bg-[#1A2235] text-green-400 border border-green-400/30 text-xs font-normal px-3 py-1 rounded-full">
                Claimed
              </span>
</div>
<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg aspect-[3/4] p-2 relative overflow-hidden border border-white/5 flex items-center justify-center">
<div className="w-[85%] h-[90%] bg-gradient-to-br from-green-100 to-green-300 rounded border-2 border-slate-300 relative shadow-lg">
<div className="absolute top-0 w-full h-8 bg-white border-b border-slate-300 flex items-center justify-center">
<span className="text-xs text-black font-medium text-center leading-none">
                    VENUSAUR
                    <br/>
                    HOLO
                  </span>
</div>
<div className="absolute inset-x-2 bottom-2 top-10 bg-gradient-to-tr from-green-500 to-teal-500 border border-green-500 rounded-sm"></div>
</div>
</div>
<div>
<h4 className="text-white font-normal text-base truncate">
                Venusaur Holo
              </h4>
<div className="flex items-center gap-2 mt-1.5">
<span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                  PSA 8
                </span>
<span className="text-green-400 text-sm font-normal">$380</span>
</div>
</div>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-xl p-3 flex flex-col gap-3">
<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg aspect-[3/4] p-2 relative overflow-hidden border border-white/5 flex items-center justify-center">
<div className="w-[85%] h-[90%] bg-gradient-to-br from-blue-100 to-blue-300 rounded border-2 border-slate-300 relative shadow-lg">
<div className="absolute top-0 w-full h-8 bg-white border-b border-slate-300 flex items-center justify-center">
<span className="text-xs text-black font-medium text-center leading-none">
                    MEW
                    <br/>
                    GOLD STAR
                  </span>
</div>
<div className="absolute inset-x-2 bottom-2 top-10 bg-gradient-to-tr from-blue-400 to-indigo-500 border border-blue-400 rounded-sm"></div>
</div>
</div>
<div>
<h4 className="text-white font-normal text-base truncate">
                Mew Gold Star
              </h4>
<div className="flex items-center gap-2 mt-1.5">
<span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                  PSA 10
                </span>
<span className="text-green-400 text-sm font-normal">$3,200</span>
</div>
</div>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-xl overflow-hidden flex flex-col relative group">
<div className="absolute top-2 right-2 bg-[#FFFF00] text-black text-xs font-semibold px-1.5 py-0.5 rounded z-10">
              W8
            </div>
<div className="bg-gradient-to-b from-purple-900/60 to-[#0B0F17] aspect-[3/4] relative flex flex-col items-center justify-center p-3 text-center border-b border-white/5">
<div className="text-white font-semibold text-base lg:text-lg uppercase tracking-tighter italic drop-shadow-md leading-tight mt-2">
                WHO'S THAT BANGERMON?
              </div>
<div className="flex-1 w-full flex items-center justify-center relative mt-2">

<div className="w-20 h-20 bg-black rounded-full blur-[2px] opacity-80 mix-blend-multiply absolute"></div>
<i className="w-16 h-16 text-black drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" data-lucide="ghost" strokeWidth="1.5"></i>
<span className="absolute text-purple-400 font-semibold text-2xl drop-shadow-lg">
                  ?
                </span>
</div>
</div>
<div className="p-2.5 text-center bg-[#141A25]">
<h4 className="text-white font-normal text-sm">
                Who's that Bangermon?
              </h4>
<p className="text-slate-500 text-xs mt-0.5">Reveals Week 8</p>
</div>
</div>
</div>

<div className="bg-[#141A25] border border-white/5 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<i className="text-[#FFFF00] w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-slate-300 text-sm font-normal">
              Think you know what's hiding behind those silhouettes? Share your
              predictions!
            </p>
</div>
<div className="flex gap-3">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-normal transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
              Share Predictions
            </button>
</div></div></section></main>
    </>
  );
}
