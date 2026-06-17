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



    // Icons
    document.addEventListener('DOMContentLoaded', function() {
      if (window.lucide) {
        lucide.createIcons({ strokeWidth: 1.5 });
      }
      document.getElementById('y').textContent = new Date().getFullYear();
    });

    // Simple "animation on scroll" using transitions (no JS-driven keyframes)
    (function() {
      const els = document.querySelectorAll('[data-animate]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0','translate-y-6');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
      els.forEach((el) => io.observe(el));
    })();
  
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
      

<div className="fixed inset-x-0 top-0 pointer-events-none z-40">
<div style={{height: '12vh', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', maskImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 70%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 70%)'}}></div>
</div>

<div className="fixed inset-x-0 bottom-0 pointer-events-none z-40">
<div style={{height: '22vh', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 70%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 70%)'}}></div>
</div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3) 0, transparent 40%), radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.15) 0, transparent 40%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.2) 0, transparent 40%)'}}></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-medium tracking-tight">ARK</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
<span className="inline-flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 2 5 3 5-3v6l-5 3-5-3z"></path><path d="m7 8 5 3 5-3"></path><path d="m7 13 5 3 5-3v6l-5 3-5-3z"></path></svg>
              PulseChain
            </span>
<span className="h-3 w-[1px] bg-white/10"></span>
<span className="text-emerald-400">Contract: 0xARK…PULSE</span>
</div>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-300 hover:text-white" href="#tokenomics">Tokenomics</a>
<a className="text-sm text-zinc-300 hover:text-white" href="#features">Features</a>
<a className="text-sm text-zinc-300 hover:text-white" href="#gallery">Lore</a>
<a className="text-sm text-zinc-300 hover:text-white" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-zinc-100" href="https://pulsex.com" target="_blank">
            Trade
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/20 px-3 py-2 text-sm">
            Connect
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="18" x="3" y="5"></rect><path d="M7 12h7"></path><path d="M13 9l3 3-3 3"></path></svg>
</button>
</div>
</nav>
</div>
</header>

<section className="relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'}}>

<div className="absolute inset-0 -z-10">
<img alt="Stylized Sunrise Over Planet Horizon" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/446028f7-6403-44a2-8275-60a14e4f3486_3840w.webp"/>
<div className="bg-gradient-to-b from-black/80 via-black/40 to-black absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(180deg, transparent, black 45%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 100%, transparent)'}}></div>
</div>
<div className="sm:px-6 lg:px-8 sm:pt-28 sm:pb-32 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-24 pl-4">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-zinc-300 mb-4">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Live on PulseChain — reflections every block
        </div>
<h1 className="text-[42px] sm:text-6xl md:text-7xl leading-[1.05] font-light tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
          ARK: carry value across the Pulse seas
        </h1>
<p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-300 max-w-[60ch]">
          Every voyage matters. With each trade, value flows back to the fleet: 3% to holders, 3% to lockers, 3% to liquidity, and 2% set aflame. Simple tokenomics—compounded momentum.
        </p>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 px-5 py-3 text-sm font-medium shadow-lg shadow-emerald-500/20 transition-colors" href="https://pulsex.com" target="_blank">
            Buy $ARK
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 6 12 12"></path><path d="M18 6v12H6"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-5 py-3 text-sm" href="#dapp">
            Launch DApp
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10v10H7z"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-5 py-3 text-sm" href="#">
            Litepaper
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2h7l5 5v13a2 2 0 0 1-2 2H8z"></path><path d="M8 2v6h6"></path></svg>
</a>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-xs text-zinc-400">Holders</div>
<div className="text-lg tracking-tight text-emerald-300">3%</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-xs text-zinc-400">Lockers</div>
<div className="text-lg tracking-tight text-emerald-300">3%</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-xs text-zinc-400">Liquidity</div>
<div className="text-lg tracking-tight text-emerald-300">3%</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2">
<div className="text-xs text-zinc-400">Burn</div>
<div className="text-lg tracking-tight text-rose-300">2%</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)', background: 'radial-gradient(600px 50px at 50% 0%, rgba(16,185,129,0.25), transparent 70%)'}}></div>
</section>

<section className="relative z-10" id="dapp">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 sm:pt-10">
<div className="flex flex-col text-center items-center space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-zinc-200">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93 7.76 7.76"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>
          New: ARK Terminal — live distribution feed
        </div>
<h2 className="text-4xl sm:text-6xl font-light tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
          Watch value cascade on every trade
        </h2>
<p className="max-w-2xl text-zinc-300 text-base sm:text-lg">
          A transparent ledger of movement—see reflections, locker rewards, LP adds, and burns the instant they happen.
        </p>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition" href="https://pulsex.com" target="_blank">
            Start Trading
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-6 py-3 text-sm text-zinc-100" href="#how">
            See how it works
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3-2l12 7a2 2 0 0 1 0 3L8 20a2 2 0 0 1-3-2z"></path></svg>
</a>
</div>
</div>

<div className="relative sm:mt-12 mt-10">
<div className="absolute inset-0 -top-8 mx-auto h-48 max-w-5xl rounded-[28px] bg-emerald-500/20 blur-3xl"></div>

<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" style={{'--fx-filter': 'blur(6px) liquid-glass(2, 12) saturate(1.1)', filter: 'var(--fx-filter)'}}>
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-5 sm:p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl sm:text-2xl font-medium tracking-tight">ARK Terminal</h3>
<div className="flex items-center gap-2 text-zinc-400 text-xs">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span> Live
                </div>
</div>
<div className="space-y-3 max-h-[340px] overflow-y-auto pr-1" id="feed">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-start gap-3 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="h-8 w-8 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/20 flex items-center justify-center text-emerald-300">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 6-6 4 4 8-8"></path><path d="M14 7h7v7"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm text-zinc-200">Trade executed: 10,000 ARK</div>
<div className="text-xs text-zinc-400">Block #12,345,678 · 0.3 PLS fee</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-start gap-3 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-emerald-300">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm">3% to holders</div>
<div className="text-xs text-zinc-400">300 ARK distributed proportionally</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-start gap-3 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-emerald-300">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m7 12 3 3 7-7"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm">3% to lockers</div>
<div className="text-xs text-zinc-400">300 ARK streamed to lock vaults</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-start gap-3 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-emerald-300">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm">3% to liquidity</div>
<div className="text-xs text-zinc-400">300 ARK/PLS added to LP</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-start gap-3 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="h-8 w-8 rounded-md bg-rose-500/10 ring-1 ring-rose-500/20 flex items-center justify-center text-rose-300">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 18L22 12 16 6"></path><path d="M2 12h20"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm text-rose-200">2% burned forever</div>
<div className="text-xs text-zinc-400">200 ARK removed from supply</div>
</div>
</div>
</div>

<div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 p-2 flex items-center gap-2">
<input className="flex-1 bg-transparent outline-none text-sm text-zinc-100 placeholder:text-zinc-500 px-2 py-2" placeholder="Type a command (e.g. /latest, /holders)"/>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 ring-1 ring-emerald-500/20 text-emerald-300 px-3 py-2 text-xs">
                  Run
                  <svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</div>

<div className="border-t border-white/10 lg:border-t-0 lg:border-l p-5 sm:p-8 relative">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(500px 200px at 70% 30%, rgba(16,185,129,0.15), transparent 70%)'}}></div>
<div className="space-y-5">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-300">Supply</span>
<span className="text-sm text-zinc-100">1,000,000,000</span>
</div>
<div className="mt-2 h-2 rounded bg-white/5 overflow-hidden">
<div className="h-full bg-emerald-500/80" style={{width: '74%'}}></div>
</div>
<div className="mt-1 text-[11px] text-zinc-500">Circulating: 740,000,000</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-300">24h Volume</span>
<span className="text-sm text-emerald-300">$1.2M</span>
</div>
<div className="mt-2 grid grid-cols-4 gap-2">
<div className="rounded-lg bg-white/5 p-2 text-center">
<div className="text-xs text-zinc-400">Holders</div>
<div className="text-sm text-zinc-100">3%</div>
</div>
<div className="rounded-lg bg-white/5 p-2 text-center">
<div className="text-xs text-zinc-400">Lockers</div>
<div className="text-sm text-zinc-100">3%</div>
</div>
<div className="rounded-lg bg-white/5 p-2 text-center">
<div className="text-xs text-zinc-400">Liquidity</div>
<div className="text-sm text-zinc-100">3%</div>
</div>
<div className="rounded-lg bg-white/5 p-2 text-center">
<div className="text-xs text-zinc-400">Burn</div>
<div className="text-sm text-rose-300">2%</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/20">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="m18 14-6-6-6 6"></path></svg>
</span>
<span className="text-sm text-zinc-300">Add ARK to Wallet</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<button className="w-full text-left rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-xs">
                      MetaMask
                    </button>
<button className="w-full text-left rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-xs">
                      WalletConnect
                    </button>
</div>
</div>

<div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
<img alt="High-resolution render of planet Mars in space" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d042adbf-9845-4a0c-ba46-4a760213e573_1600w.jpg" style={{maskImage: 'linear-gradient(transparent, black 20%, black 80%, transparent)'}}/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<p className="text-sm text-white/70">Engineered incentives</p>
<h3 className="text-3xl sm:text-5xl font-light tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            Four streams. One mission.
          </h3>
<p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-[80ch]">
            ARK aligns every participant—passive holders, long-term lockers, market makers, and the commons. With each transaction, the ecosystem grows sturdier.
          </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-2xl bg-zinc-950 ring-1 ring-white/10 p-6 md:p-10 relative overflow-hidden">
<div className="absolute -left-10 -top-16 h-64 w-64 rounded-full blur-2xl" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.25), transparent)'}}></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight">Pulse-native reliability</h4>
</div>
<p className="text-neutral-300 max-w-2xl">
            Built for speed and finality on PulseChain. Fees stay minimal. Distributions clear fast. Liquidity stays guarded.
          </p>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xs text-zinc-400">Auditable</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="text-xs text-zinc-400">Secure</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M3 12h18"></path><path d="M8 18h13"></path></svg>
</div>
<span className="text-xs text-zinc-400">Efficient</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="m18 14-6-6-6 6"></path></svg>
</div>
<span className="text-xs text-zinc-400">On‑chain</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="text-xs text-zinc-400">Scalable</span>
</div>
</div>
</div>

<div className="lg:col-span-1 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/10 via-neutral-900 to-slate-900 ring-1 ring-emerald-500/20">
<div className="p-6 sm:p-8">
<div className="relative h-56 sm:h-64 ring-1 ring-inset ring-emerald-500/20 overflow-hidden rounded-2xl bg-neutral-900/60">

<div className="absolute right-5 top-6 w-[75%] rounded-2xl bg-neutral-900/95 ring-1 ring-emerald-500/20">
<div className="flex items-center gap-2 px-4 py-3 border-b border-emerald-500/20">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
<span className="ml-3 text-xs text-emerald-400">Distribution Engine</span>
</div>
<div className="p-4 text-[11px]">
<div className="flex items-center justify-between py-1">
<span className="text-zinc-400">Holders</span><span className="text-emerald-300">3%</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="text-zinc-400">Lockers</span><span className="text-emerald-300">3%</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="text-zinc-400">Liquidity</span><span className="text-emerald-300">3%</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="text-zinc-400">Burn</span><span className="text-rose-300">2%</span>
</div>
</div>
</div>
<div className="absolute left-4 bottom-6 w-[36%] h-[46%] rounded-xl bg-neutral-950/95 ring-1 ring-emerald-500/20 p-2">
<div className="text-[10px] text-emerald-400">ENGINE STATUS</div>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">TPS</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-5 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">84%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">Utilization</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-4 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">66%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400">Finality</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-6 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400">~5s</span>
</div>
</div>
</div>
</div>

<div className="absolute top-4 left-6 w-20 h-4 rounded bg-emerald-500/30"></div>
<div className="absolute top-16 left-2 w-14 h-3 rounded bg-emerald-400/40"></div>
<div className="absolute bottom-16 right-2 w-16 h-2 rounded bg-emerald-300/50"></div>
</div>
<div className="mt-6">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 10 2 2 4-4"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
<h4 className="text-lg font-semibold tracking-tight">Liquidity Guardian</h4>
</div>
<p className="text-sm text-neutral-400 mt-2">
                Continuous LP adds discourage volatility and deepen the market over time.
              </p>
<div className="mt-3">
<a className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300" href="https://pulsex.com" target="_blank">
                  View LP details
                  <svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 rounded-2xl bg-neutral-900 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<h5 className="text-lg sm:text-xl tracking-tight font-medium">Locker Vaults</h5>
<span className="text-[11px] text-neutral-300">Long‑term</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Lock ARK to amplify your share of the 3% locker stream.</p>
<div className="mt-5 space-y-2">
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-emerald-500/10 ring-1 ring-emerald-400/20">
<span className="text-sm text-emerald-200">7d Vault</span>
<span className="text-xs text-emerald-300">x1.2</span>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-emerald-500/10 ring-1 ring-emerald-400/20">
<span className="text-sm text-emerald-200">30d Vault</span>
<span className="text-xs text-emerald-300">x1.6</span>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-emerald-500/10 ring-1 ring-emerald-400/20">
<span className="text-sm text-emerald-200">90d Vault</span>
<span className="text-xs text-emerald-300">x2.0</span>
</div>
</div>
<div className="mt-4">
<button className="w-full rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-2.5 text-sm">
              Open Vault
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="tokenomics">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative">
<div className="absolute inset-0" style={{background: 'radial-gradient(600px 250px at 10% 40%, rgba(16,185,129,0.15), transparent 70%), radial-gradient(600px 250px at 90% 60%, rgba(244,63,94,0.15), transparent 70%)'}}></div>
<div className="relative p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<h4 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tokenomics</h4>
<p className="text-neutral-300 max-w-[50ch]">Every transaction redistributes value and fortifies the protocol automatically.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="h-6 w-6 inline-flex items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/20">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
<div>
<div className="text-sm">3% to holders</div>
<div className="text-xs text-neutral-400">Passive reflections into your wallet</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="h-6 w-6 inline-flex items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/20">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</span>
<div>
<div className="text-sm">3% to lockers</div>
<div className="text-xs text-neutral-400">Lock to boost rewards</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="h-6 w-6 inline-flex items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/20">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</span>
<div>
<div className="text-sm">3% to liquidity</div>
<div className="text-xs text-neutral-400">Depth grows, volatility shrinks</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="h-6 w-6 inline-flex items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/20">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 18 22 12 16 6"></path><path d="M2 12h20"></path></svg>
</span>
<div>
<div className="text-sm text-rose-200">2% to burn</div>
<div className="text-xs text-neutral-400">Supply deflation, forever</div>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Treasury</div>
<div className="text-2xl font-semibold tracking-tight mt-1">$3.8M</div>
<div className="mt-3 h-2 rounded bg-white/5 overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '62%'}}></div>
</div>
<div className="text-[11px] text-neutral-500 mt-1">Runway: 24 months</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Holders</div>
<div className="text-2xl font-semibold tracking-tight mt-1">18,942</div>
<div className="mt-3 h-2 rounded bg-white/5 overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '48%'}}></div>
</div>
<div className="text-[11px] text-neutral-500 mt-1">+6.1% 7d</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 sm:col-span-2">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">Reflections (24h)</span>
<span className="text-sm text-emerald-300">+2.1M ARK</span>
</div>
<div className="mt-2 grid grid-cols-12 gap-1 h-16 items-end">
<span className="h-4 bg-emerald-500 rounded"></span>
<span className="h-7 bg-emerald-500/90 rounded"></span>
<span className="h-10 bg-emerald-500/80 rounded"></span>
<span className="h-14 bg-emerald-500 rounded"></span>
<span className="h-12 bg-emerald-400 rounded"></span>
<span className="h-16 bg-emerald-500 rounded"></span>
<span className="h-7 bg-emerald-500/90 rounded"></span>
<span className="h-11 bg-emerald-500/80 rounded"></span>
<span className="h-5 bg-emerald-500 rounded"></span>
<span className="h-13 bg-emerald-400 rounded"></span>
<span className="h-8 bg-emerald-500/90 rounded"></span>
<span className="h-3 bg-emerald-500/70 rounded"></span>
</div>
<div className="text-[11px] text-neutral-500 mt-2">Real-time view in Terminal</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="gallery">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
<div className="mb-6 flex items-end justify-between">
<div>
<h4 className="text-2xl sm:text-3xl font-semibold tracking-tight">ARK Lore</h4>
<p className="text-sm text-neutral-400">Signals from deep space that shaped our narrative.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200" href="#dapp">
          Launch DApp
          <svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
<img alt="Abstract neon light wave on black" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" style={{}}/>
<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<h5 className="text-2xl font-normal tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Neon Tide</h5>
<p className="text-sm text-white/80">Energy glides across the void—like fees back to the fleet.</p>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
<img alt="Stylized Sunrise Over Planet Horizon" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11cfaede-19cc-45de-a0b6-afd67f0e9eb5_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<h5 className="text-2xl font-normal tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>First Light</h5>
<p className="text-sm text-white/80">Dawn over new waters—Pulse-native by design.</p>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
<img alt="High-resolution render of planet Mars in space" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d042adbf-9845-4a0c-ba46-4a760213e573_1600w.jpg" style={{}}/>
<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<h5 className="text-2xl font-normal tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Mars Forge</h5>
<p className="text-sm text-white/80">Supply tempered by fire—2% burns forever.</p>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl md:col-span-2 lg:col-span-1">
<img alt="Lone wanderer beneath glowing ringed planet" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8f93d8a4-ec94-437f-a234-aaf8130c2498_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<h5 className="text-2xl font-normal tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Pilgrim</h5>
<p className="text-sm text-white/80">Those who lock, endure—3% streams to vaults.</p>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-zinc-900 text-white flex flex-col">
<div className="p-6 sm:p-8 grow">
<h5 className="uppercase text-xs text-zinc-400 tracking-widest mb-4">Our Philosophy</h5>
<p className="text-3xl font-light tracking-tight">Value should flow with intent.</p>
<p className="text-sm text-zinc-300 mt-3">We designed ARK so every action strengthens the commons—holders, lockers, and liquidity.</p>
<div className="grid grid-cols-3 gap-4 pt-6">
<div className="text-center">
<div className="text-2xl font-semibold text-emerald-400">3%</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide">Holders</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-emerald-400">3%</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide">Lockers</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-rose-400">2%</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide">Burn</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8 border-t border-zinc-800">
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm" href="https://pulsex.com" target="_blank">
              Begin the voyage
              <svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="how">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<h4 className="text-2xl font-semibold tracking-tight mb-4">How it works</h4>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="flex items-center gap-2 mb-2">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 6-6 4 4 8-8"></path></svg>
<span className="text-sm">Trade ARK</span>
</div>
<p className="text-sm text-neutral-300">Buy or sell ARK on PulseX. Every transaction triggers distribution.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="flex items-center gap-2 mb-2">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-sm">Lock to boost</span>
</div>
<p className="text-sm text-neutral-300">Stake into vaults to amplify your share of the locker stream.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="flex items-center gap-2 mb-2">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-sm">LP strengthens</span>
</div>
<p className="text-sm text-neutral-300">Auto-liquidity adds steady the market and deepen order books.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div>
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-medium tracking-tight">ARK</span>
</div>
<span className="text-sm text-zinc-400">Pulse-native</span>
</div>
<p className="mt-3 text-sm text-zinc-400 max-w-[40ch]">
            $ARK is a community-driven token on PulseChain. This site is for informational purposes and not financial advice.
          </p>
</div>
<div>
<h6 className="text-sm font-medium tracking-tight mb-3">Resources</h6>
<ul className="space-y-2 text-sm text-zinc-300">
<li><a className="hover:text-white" href="#tokenomics">Tokenomics</a></li>
<li><a className="hover:text-white" href="#dapp">DApp</a></li>
<li><a className="hover:text-white" href="https://pulsex.com" target="_blank">PulseX Chart</a></li>
</ul>
</div>
<div>
<h6 className="text-sm font-medium tracking-tight mb-3">Community</h6>
<ul className="space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3"></path></svg>
<a className="hover:text-white" href="#">Telegram</a>
</li>
<li className="flex items-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 8 6 4-6 4V8Z"></path><path d="M8 8 2 12l6 4V8Z"></path><path d="M8 6l8 4-8 4-8-4 8-4Z"></path><path d="M8 14l8 4-8 4-8-4 8-4Z"></path></svg>
<a className="hover:text-white" href="#">Discord</a>
</li>
<li className="flex items-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h8"></path><path d="M12 2v17"></path></svg>
<a className="hover:text-white" href="#">Docs</a>
</li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
<span>© <span id="y">2025</span> ARK on PulseChain</span>
<span>Contract: 0xARK…PULSE · Made by the community</span>
</div>
</div>
</footer>



    </>
  );
}
