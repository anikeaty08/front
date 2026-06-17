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



        // Initialize Lucide icons
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
      

<header className="w-full flex items-center justify-between px-6 py-4 border-b border-terminal text-sm relative z-50 bg-[#070906]">
<div className="flex items-center gap-8">

<a className="flex items-center gap-1 font-medium text-lg tracking-tight" href="#">
<div className="w-4 h-4 bg-neon rounded-sm flex items-center justify-center mr-1">
<div className="w-2 h-2 bg-[#070906]"></div>
</div>
<span className="text-neon">Tx</span><span className="text-white">Flow</span>
</a>

<nav className="hidden lg:flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Trade</a>
<a className="hover:text-white transition-colors" href="#">Vaults</a>
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Explorer</a>
<a className="hover:text-white transition-colors" href="#">Testnet</a>
<a className="text-white transition-colors" href="#">Referrals</a>
<a className="hover:text-white transition-colors" href="#">Learn</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Points</a>
</nav>
</div>

<div className="flex items-center gap-4">
<button className="bg-neon text-[#070906] font-medium px-4 py-1.5 rounded-sm hover:bg-[#4CEB42] transition-colors text-sm">
                CONNECT WALLET
            </button>
</div>
</header>

<main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12 flex flex-col relative z-10">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight max-w-2xl">
                Earn up to a <span className="text-neon blur-[6px] hover:blur-none transition-all duration-300 select-none">40%</span> Rebate when you invite friends!
            </h1>
<div className="flex flex-col items-end gap-3 shrink-0">
<button className="bg-neon text-[#070906] font-medium px-6 py-2.5 rounded-sm flex items-center gap-2 hover:bg-[#4CEB42] transition-colors text-sm">
                    Claim Rewards
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="gift"></i>
</button>
<a className="flex items-center gap-1 text-[#5B6D55] hover:text-[#8C9B86] transition-colors font-mono text-xs tracking-wider uppercase" href="#">
                    View Ruleset
                    <i className="w-3 h-3 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-[#1A2615] mb-12 bg-[#090C08]/30">

<div className="p-6 border-b lg:border-b-0 lg:border-r border-[#1A2615]">
<div className="flex items-center gap-2 text-sm text-[#5B6D55] mb-3">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
                    Traders Referred
                </div>
<div className="font-mono text-3xl text-white tracking-tight">$0.00</div>
</div>

<div className="p-6 border-b lg:border-b-0 lg:border-r border-[#1A2615]">
<div className="flex items-center gap-2 text-sm text-[#5B6D55] mb-3">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="folder-check"></i>
                    Claimed Rebate
                </div>
<div className="font-mono text-3xl text-white tracking-tight">$0.00</div>
</div>

<div className="p-6 border-b lg:border-b-0 lg:border-r border-[#1A2615]">
<div className="flex items-center gap-2 text-sm text-[#5B6D55] mb-3">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="trending-up"></i>
                    Claimable Rebate
                </div>
<div className="font-mono text-3xl text-white tracking-tight">$0.00</div>
</div>

<div className="p-6">
<div className="flex items-center gap-2 text-sm text-[#5B6D55] mb-3">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="trophy"></i>
                    Total Earned
                </div>
<div className="font-mono text-3xl text-white tracking-tight">$0.00</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 mb-16">

<div className="relative bg-[#090C08]/50 border border-[#1A2615] p-8 min-h-[400px]">

<div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-neon"></div>
<div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-neon"></div>
<div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-neon"></div>
<div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-neon"></div>

<div className="flex flex-col gap-8 opacity-40">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-1">Refer users &amp;</h2>
<h2 className="text-2xl font-medium text-neon tracking-tight mb-4">Earn 10% Commission</h2>
<p className="text-sm text-[#8C9B86] leading-relaxed max-w-md">
                            Reach $10k in trading volume to create a referral code and receive 10% of the net fees generated by your referrals.
                        </p>
</div>

<div className="space-y-3">
<div className="flex justify-between text-xs font-mono">
<span className="text-neon">$1,111.12 <span className="text-[#5B6D55]">traded</span></span>
<span className="text-[#5B6D55]">$8,888.88 remaining</span>
</div>
<div className="w-full h-3 bg-[#1A2615] flex">
<div className="h-full w-[12%] progress-dashed"></div>
</div>
<button className="w-full py-3 bg-[#131A11] text-[#5B6D55] text-sm font-medium mt-4 cursor-not-allowed">
                            Create Referral Code
                        </button>
</div>
<div className="h-px w-full bg-[#1A2615]"></div>

<div>
<h3 className="text-base text-white font-medium mb-2">Bind A Referral Code</h3>
<p className="text-sm text-[#8C9B86] mb-4">Bind a referral code to get a 5% discount on your first $50M in trades</p>
<div className="flex h-11 border border-[#1A2615] bg-[#070906] focus-within:border-[#5B6D55] transition-colors">
<div className="w-11 flex items-center justify-center border-r border-[#1A2615]">
<i className="w-4 h-4 text-[#5B6D55] stroke-[1.5]" data-lucide="link"></i>
</div>
<input className="flex-1 bg-transparent px-4 text-sm text-white placeholder:text-[#5B6D55] font-mono outline-none" placeholder="Input_Binding_Code" type="text"/>
<button className="px-8 bg-[#182B14] text-neon text-sm font-medium hover:bg-[#1E3619] transition-colors border-l border-[#1A2615]">
                                Bind
                            </button>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#070906]/70 backdrop-blur-[4px] z-20 flex flex-col items-center justify-center m-[1px]">
<div className="bg-[#090C08] border border-[#1A2615] rounded-full w-16 h-16 flex items-center justify-center mb-6 relative">
<div className="absolute inset-0 rounded-full border border-neon/30 animate-ping opacity-20"></div>
<i className="w-6 h-6 text-neon stroke-[1.5]" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Module Locked</h3>
<p className="text-sm text-[#8C9B86] max-w-[280px] text-center">
                        This feature is currently in the lock-up period and will be available soon.
                    </p>
<div className="mt-6 flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-[#5B6D55] animate-pulse"></div>
<div className="w-1 h-1 rounded-full bg-[#5B6D55] animate-pulse" style={{animationDelay: '150ms'}}></div>
<div className="w-1 h-1 rounded-full bg-[#5B6D55] animate-pulse" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-6">Rebate Structure</h2>
<div className="flex flex-col gap-4">

<div className="border border-[#1A2615] bg-[#090C08]/30 p-6 flex items-center justify-between group">
<div className="flex flex-col items-start gap-3">
<span className="bg-[#1A2615] text-[#8C9B86] text-xs px-2 py-0.5 font-mono">Primary</span>
<div>
<h3 className="text-base text-white font-medium mb-1">Inviter Rebate</h3>
<p className="text-sm text-[#5B6D55] font-mono">// You receive of your invitee's trading fees as commission</p>
</div>
</div>
<div className="text-2xl font-mono text-neon blur-[5px] group-hover:blur-0 transition-all duration-300 select-none">
                            10%
                        </div>
</div>

<div className="border border-[#1A2615] bg-[#090C08]/30 p-6 flex items-center justify-between group">
<div className="flex flex-col items-start gap-3">
<span className="bg-[#1A2615] text-[#8C9B86] text-xs px-2 py-0.5 font-mono">Passive</span>
<div>
<h3 className="text-base text-white font-medium mb-1">XP Boost</h3>
<p className="text-sm text-[#5B6D55] font-mono">// Invitees and inviters receive boost in XP</p>
</div>
</div>
<div className="text-2xl font-mono text-[#8C9B86] blur-[5px] group-hover:blur-0 transition-all duration-300 select-none">
                            +10%
                        </div>
</div>

<div className="border border-[#1A2615] bg-[#090C08]/30 p-6 flex items-center justify-between group">
<div className="flex flex-col items-start gap-3">
<span className="bg-[#1A2615] text-[#8C9B86] text-xs px-2 py-0.5 font-mono">Bonus</span>
<div>
<h3 className="text-base text-white font-medium mb-1">Fee Discount</h3>
<p className="text-sm text-[#5B6D55] font-mono">// Invitees enjoy a discount on trading fees</p>
</div>
</div>
<div className="text-2xl font-mono text-[#8C9B86] blur-[5px] group-hover:blur-0 transition-all duration-300 select-none">
                            5%
                        </div>
</div>
</div>
</div>
</div>

<div className="mt-8">

<div className="flex items-center justify-between border-b border-[#1A2615] mb-6">
<div className="flex gap-8">
<button className="text-sm text-white font-medium pb-4 border-b-2 border-neon -mb-[1px]">Invitee List</button>
<button className="text-sm text-[#5B6D55] hover:text-[#8C9B86] pb-4 transition-colors">Affiliate List</button>
<button className="text-sm text-[#5B6D55] hover:text-[#8C9B86] pb-4 transition-colors">Claim Records</button>
<button className="text-sm text-[#5B6D55] hover:text-[#8C9B86] pb-4 transition-colors">Commission Records</button>
</div>
<div className="text-sm text-white font-mono pb-4">
                    Total Invitees Invited: <span className="text-neon">4</span>
</div>
</div>

<div className="grid grid-cols-4 px-4 py-3 text-xs font-mono text-[#5B6D55] border-b border-[#1A2615] uppercase tracking-wider">
<div>Batch Number</div>
<div>Receiving Address</div>
<div>Time</div>
<div className="text-right">Referral Commission</div>
</div>

<div className="flex flex-col items-center justify-center py-32 border-b border-[#1A2615]">
<div className="relative w-16 h-16 mb-4">

<svg className="w-full h-full text-[#1A2615] stroke-current" fill="none" strokeWidth="1" viewbox="0 0 100 100">
<path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"></path>
<path d="M50 20 L50 50 M20 35 L50 50 M80 35 L50 50 M50 50 L50 80"></path>
<circle className="fill-[#5B6D55]" cx="50" cy="50" r="4"></circle>

<path className="stroke-neon" d="M45 22 L55 22" strokeWidth="2"></path>
<circle className="fill-neon" cx="20" cy="35" r="2"></circle>
<circle className="fill-neon" cx="80" cy="65" r="2"></circle>
</svg>
</div>
<p className="text-sm text-[#5B6D55]">No data recorded</p>
</div>

<div className="flex items-center justify-between py-6">
<div className="flex items-center gap-2 text-xs font-mono text-[#5B6D55] uppercase">
<div className="w-1.5 h-1.5 bg-neon rounded-sm"></div>
                    Showing 1-10 <span className="text-[#8C9B86]">of 50</span>
</div>
<div className="flex gap-1 text-sm font-mono">
<button className="w-8 h-8 flex items-center justify-center border border-[#1A2615] text-[#5B6D55] hover:text-white hover:border-[#5B6D55] transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-left"></i></button>
<button className="w-8 h-8 flex items-center justify-center border border-neon bg-[#182B14] text-neon">1</button>
<button className="w-8 h-8 flex items-center justify-center border border-[#1A2615] text-[#8C9B86] hover:text-white hover:border-[#5B6D55] transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center border border-[#1A2615] text-[#8C9B86] hover:text-white hover:border-[#5B6D55] transition-colors">3</button>
<div className="w-8 h-8 flex items-center justify-center text-[#5B6D55]">...</div>
<button className="w-8 h-8 flex items-center justify-center border border-[#1A2615] text-[#8C9B86] hover:text-white hover:border-[#5B6D55] transition-colors">42</button>
<button className="w-8 h-8 flex items-center justify-center border border-[#1A2615] text-[#8C9B86] hover:text-white hover:border-[#5B6D55] transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</main>


    </>
  );
}
