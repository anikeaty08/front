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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
<div className="w-px h-full bg-zinc-100/80 absolute left-6"></div>
<div className="w-px h-full bg-zinc-100/80 absolute right-6"></div>
<div className="hidden md:block w-px h-full bg-zinc-100/80 absolute left-[62%]"></div>
<div className="hidden md:block w-px h-full bg-zinc-100/80 absolute left-[38%]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="relative w-6 h-6 flex items-center justify-center text-zinc-950">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="font-display text-xl tracking-tight font-semibold">
            KONNEX
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500 uppercase tracking-wide">
<a className="hover:text-black transition-colors text-black" href="#">
            Raise Details
          </a>
</div>
<button className="flex items-center gap-2 px-5 py-2 bg-zinc-950 text-white text-xs font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200/50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
<span className="">Connect Wallet</span>
</button>
</div>
</nav>

<main className="relative pt-20 min-h-screen flex flex-col overflow-hidden border-b border-zinc-100">

<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center z-0 select-none pointer-events-none overflow-hidden whitespace-nowrap">
<h1 className="text-giant font-semibold text-zinc-950 leading-none opacity-[0.03] tracking-tighter">
          konnex
        </h1>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-10 pointer-events-none flex items-center justify-center mix-blend-hard-light">
<img alt="Robot Head" className="h-[85vh] object-cover grayscale opacity-90 mask-gradient-radial scale-110" src="https://images.unsplash.com/photo-1535378437327-b71280690e17?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 pointer-events-none">

<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] border border-zinc-300/40 rounded-full border-dashed animate-[spin_120s_linear_infinite]"></div>
<div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] border border-zinc-200/60 rounded-full"></div>

<svg className="absolute inset-0 w-full h-full text-zinc-300 stroke-1 opacity-50">
<line stroke="currentColor" x1="62%" x2="75%" y1="35%" y2="25%"></line>
<circle cx="75%" cy="25%" fill="currentColor" r="2"></circle>
</svg>
</div>

<div className="relative z-20 max-w-[1600px] mx-auto px-6 w-full flex-grow flex flex-col justify-center">
<div className="grid md:grid-cols-12 gap-12 h-full items-center">

<div className="md:col-span-5 pt-32 md:pt-0 space-y-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-200 rounded-full bg-white/50 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  KOL Round Open
                </span>
</div>
<h2 className="md:text-7xl leading-[0.95] text-6xl font-semibold text-zinc-950 tracking-tighter font-display">Autonomous Robotics For the Future</h2>
<p className="leading-relaxed text-lg font-normal text-zinc-500 max-w-md">
                Securing the machine economy through Proof-of-Physical-Work.
                Join the strategic round to power the next generation of
                autonomous miners.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-8 py-3 bg-zinc-950 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-zinc-200">
<span>Request Allocation</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-950 text-sm font-medium rounded-full hover:bg-zinc-50 transition-colors">
                View Pitch Deck
              </button>
</div>
</div>

<div className="md:col-span-2 hidden md:block"></div>

<div className="hidden md:col-span-5 h-full md:flex flex-col justify-center py-32 pl-12 relative space-y-24">

<div className="bg-white/40 backdrop-blur-md p-6 border-l border-zinc-200 max-w-xs self-end translate-y-12">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-950 block mb-3">
                Network Status
              </span>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Active Nodes</span>
<span className="font-mono text-zinc-950">1,248</span>
</div>
<div className="w-full bg-zinc-200 h-px"></div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Subnet Capacity</span>
<span className="font-mono text-zinc-950">842 TH/s</span>
</div>
</div>
</div>

<div className="space-y-8 pl-8 border-l border-zinc-200/50">
<div className="relative">
<div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-zinc-950 ring-4 ring-white"></div>
<span className="text-xs font-bold text-zinc-950 block mb-1">
                  Q2 2025
                </span>
<p className="text-[10px] text-zinc-500 leading-tight max-w-[200px]">
                  Testnet V2 launch. On-chain robotic verification and DePIN
                  miner distribution.
                </p>
</div>
<div className="relative opacity-60">
<div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<span className="text-xs font-bold text-zinc-950 block mb-1">
                  Q3 2025
                </span>
<p className="text-[10px] text-zinc-500 leading-tight max-w-[200px]">
                  Mainnet TGE. Strategic round vesting begins. Global node
                  expansion.
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-30 w-full border-t border-zinc-100 bg-white/50 backdrop-blur-sm">
<div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100">
<div className="p-6 text-center">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              Round Cap
            </p>
<p className="text-xl font-semibold text-zinc-950 tracking-tight">
              $2.5M USD
            </p>
</div>
<div className="p-6 text-center">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              Valuation (FDV)
            </p>
<p className="text-xl font-semibold text-zinc-950 tracking-tight">
              $45M
            </p>
</div>
<div className="p-6 text-center">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              Ticker
            </p>
<p className="text-xl font-semibold text-zinc-950 tracking-tight">
              $KNX
            </p>
</div>
<div className="p-6 text-center bg-zinc-50">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              Round Status
            </p>
<div className="flex items-center justify-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<p className="text-sm font-semibold text-zinc-950 tracking-tight">
                Open for KOLs
              </p>
</div>
</div>
</div>
</div>
</main>

<section className="bg-white py-32 relative overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-0 border border-zinc-200 bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200/50">

<div className="lg:col-span-7 p-16 flex flex-col justify-center relative bg-zinc-50">

<div className="absolute top-8 left-8 text-zinc-200">
<svg fill="currentColor" height="40" viewbox="0 0 40 40" width="40">
<path d="M0 0h1v40H0zM0 0v1h40V0z"></path>
</svg>
</div>
<div className="max-w-2xl space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-950 tracking-tighter leading-[1.05]">
                Intelligence needs connection.
                <br/>
<span className="text-zinc-400">Trust demands verification.</span>
</h2>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-light">
<p>
                  Current robotic fleets are isolated silos. Konnex introduces
                  the
                  <strong className="text-zinc-950 font-medium">
                    Universal Robotic Subnet
                  </strong>
                  , allowing autonomous systems to validate work on-chain and
                  settle payments instantly.
                </p>
<p>
                  By investing in Konnex, you are backing the infrastructure
                  layer where machines own their output.
                </p>
</div>
<div className="pt-8 grid grid-cols-2 gap-8">
<div className="space-y-2">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h4 className="font-semibold text-sm text-zinc-950">
                    DePIN Miners
                  </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Hardware nodes that validate physical work proofs.
                  </p>
</div>
<div className="space-y-2">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h4 className="font-semibold text-sm text-zinc-950">
                    Subnet Architecture
                  </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Scalable L2 solution for high-frequency robotic txns.
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#bfd1d9] relative min-h-[600px] border-l border-zinc-200">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '16px 16px'}}></div>

<div className="absolute inset-0 flex items-end justify-center overflow-hidden">

<img alt="Technical Blueprint" className="w-[120%] max-w-none h-auto object-cover object-bottom opacity-80 mix-blend-multiply grayscale contrast-125 mb-[-10%] ml-[10%]" src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-10 right-10 flex flex-col items-end gap-2">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-200 shadow-sm">
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-950">
                  Module: Vision_V1
                </span>
</div>
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-200 shadow-sm">
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-950">
                  Status: Online
                </span>
</div>
</div>

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100 bg-zinc-50">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h3 className="text-3xl font-semibold tracking-tighter text-zinc-950 mb-4">
              Strategic Allocation
            </h3>
<p className="text-zinc-500 max-w-lg">
              The $KNX token powers the Konnex network. It is used for miner
              staking, transaction fees, and governance.
            </p>
</div>
<div className="mt-6 md:mt-0">
<a className="text-sm border-b border-zinc-950 pb-0.5 hover:opacity-60 transition-opacity" href="#">
              Read Full Tokenomics Paper
            </a>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="mb-4 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
<h4 className="text-lg font-semibold text-zinc-950 mb-1">
              Vesting Schedule
            </h4>
<p className="text-zinc-500 text-sm mb-6">
              Designed for long-term alignment.
            </p>
<ul className="space-y-3">
<li className="flex justify-between text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-500">Cliff</span>
<span className="font-mono font-medium">6 Months</span>
</li>
<li className="flex justify-between text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-500">Linear Vesting</span>
<span className="font-mono font-medium">18 Months</span>
</li>
<li className="flex justify-between text-xs">
<span className="text-zinc-500">TGE Unlock</span>
<span className="font-mono font-medium">10%</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="mb-4 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h4 className="text-lg font-semibold text-zinc-950 mb-1">
              Miner Incentives
            </h4>
<p className="text-zinc-500 text-sm mb-6">
              Mining rewards for hardware nodes.
            </p>
<div className="relative pt-2">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Mining Pool</span>
<span className="font-mono font-medium">45% of Total Supply</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-950 h-1.5 rounded-full w-[45%]"></div>
</div>
<p className="text-[10px] text-zinc-400 mt-4 leading-relaxed">
                Miners are rewarded for verifying physical outcomes (PoPW).
                Rewards halve every 24 months.
              </p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-950 opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
<div className="mb-4 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:key" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></g></svg>
</div>
<h4 className="text-lg font-semibold text-zinc-950 mb-1">
              Access Round
            </h4>
<p className="text-zinc-500 text-sm mb-6">
              Exclusive for strategic partners.
            </p>
<form className="space-y-3">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-zinc-950 transition-colors" placeholder="Enter work email" type="email"/>
<button className="w-full bg-zinc-950 text-white text-xs font-medium py-2 rounded hover:bg-zinc-800 transition-colors">
                Request Pitch Deck
              </button>
</form>
<p className="text-[10px] text-zinc-400 mt-3 text-center">
              KYC Required for participation.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-10">
<div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="relative w-5 h-5 flex items-center justify-center text-zinc-950">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-zinc-950">
            KONNEX
          </span>
</div>
<div className="text-[11px] text-zinc-400 font-medium">
          © 2025 Konnex Robotics Inc.
        </div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[10px] text-zinc-500 font-mono">
            SYSTEMS OPERATIONAL
          </span>
</div>
</div>
</footer>

    </>
  );
}
