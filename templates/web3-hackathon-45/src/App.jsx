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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
colors: {
lab: {
base: '#0a0a0a',
surface: '#171717',
accent: '#10b981', // Emerald 500
neon: '#34d399', // Emerald 400
muted: '#525252',
}
},
backgroundImage: {
'smoke': 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)',
}
}
}
}

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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl mix-blend-screen fog-anim"></div>
<div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-emerald-950/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-lab-base/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="group flex items-center gap-1 font-mono font-bold tracking-tight text-white text-lg" href="#">
<div className="relative flex items-center justify-center w-10 h-10 border border-emerald-500/50 bg-emerald-900/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
<span>We</span>
<span className="absolute -top-1 -right-1 text-[0.6rem] font-normal opacity-70">74</span>
</div>
<span>b3</span>
<div className="relative flex items-center justify-center w-10 h-10 border border-white/20 bg-white/5 ml-1 group-hover:border-emerald-500/50 transition-colors duration-300">
<span>La</span>
<span className="absolute -top-1 -right-1 text-[0.6rem] font-normal opacity-70">57</span>
</div>
<span>bs</span>
</a>

<div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase text-neutral-400">
<a className="hover:text-emerald-400 transition-colors" href="#manifesto">Manifesto</a>
<a className="hover:text-emerald-400 transition-colors" href="#compounds">Compounds</a>
<a className="hover:text-emerald-400 transition-colors" href="#schedule">Process</a>
</div>

<button className="hidden md:flex items-center gap-2 px-5 py-2 border border-emerald-500/30 text-emerald-400 font-mono text-xs hover:bg-emerald-500 hover:text-black transition-all duration-300 uppercase tracking-widest">
<span>Join Lab</span>
<iconify-icon icon="lucide:flask-conical" strokeWidth="1.5" width="16"></iconify-icon>
</button>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-xs">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Synthesis in Progress
                </div>
<h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.9] mb-8">
                    Respect the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Chemistry.</span>
</h1>
<p className="font-mono text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed mb-10 border-l-2 border-emerald-500/30 pl-6">
                    We are not in the crypto business. We are in the empire business. 
                    48 hours to cook the purest decentralized protocols. 
                    No impurities. No compromises.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative px-8 py-4 bg-emerald-500 text-black font-mono font-semibold text-sm uppercase tracking-wider overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                            Start Cooking
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="px-8 py-4 border border-white/10 text-white font-mono font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
                        View Formula
                    </button>
</div>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none pr-10">
<svg className="stroke-emerald-500" fill="none" height="300" strokeWidth="0.5" viewbox="0 0 100 100" width="300">
<path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"></path>
<path d="M50 10 L50 50 M85 30 L50 50 M85 70 L50 50 M15 70 L50 50 M15 30 L50 50" opacity="0.5"></path>
<circle cx="50" cy="50" r="10"></circle>
</svg>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-6 text-center">
<div className="font-mono text-2xl md:text-3xl text-white font-semibold mb-1">99.1%</div>
<div className="text-xs uppercase tracking-widest text-emerald-500/70">Purity</div>
</div>
<div className="p-6 text-center">
<div className="font-mono text-2xl md:text-3xl text-white font-semibold mb-1">$50k</div>
<div className="text-xs uppercase tracking-widest text-emerald-500/70">Yield</div>
</div>
<div className="p-6 text-center">
<div className="font-mono text-2xl md:text-3xl text-white font-semibold mb-1">48h</div>
<div className="text-xs uppercase tracking-widest text-emerald-500/70">Cook Time</div>
</div>
<div className="p-6 text-center">
<div className="font-mono text-2xl md:text-3xl text-white font-semibold mb-1">500+</div>
<div className="text-xs uppercase tracking-widest text-emerald-500/70">Chemists</div>
</div>
</div>
</div>

<section className="py-24 px-6 relative z-10" id="compounds">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-4">Compounds</h2>
<h3 className="font-sans text-3xl md:text-4xl text-white font-semibold tracking-tight">Active Ingredients</h3>
</div>
<p className="font-mono text-neutral-500 text-xs max-w-xs text-right hidden md:block">
                    Choose your catalyst.<br/>Synthesize the future.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all duration-500">
<div className="absolute top-4 right-4 font-mono text-xs text-neutral-600 group-hover:text-emerald-500/50">01</div>
<div className="w-12 h-12 bg-emerald-900/10 rounded border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:banknote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium mb-3 group-hover:text-emerald-400 transition-colors">Blue Sky DeFi</h4>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Create high-yield protocols. Lending, borrowing, and synthetic assets. Must be chemically pure.
                    </p>
<ul className="font-mono text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500"></div>Liquidity Pools</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500"></div>Yield Farming</li>
</ul>
</div>

<div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all duration-500">
<div className="absolute top-4 right-4 font-mono text-xs text-neutral-600 group-hover:text-emerald-500/50">02</div>
<div className="w-12 h-12 bg-emerald-900/10 rounded border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium mb-3 group-hover:text-emerald-400 transition-colors">Crystal NFTs</h4>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Dynamic metadata. 99.1% pure digital assets. Beyond just JPEGs—utility and access.
                    </p>
<ul className="font-mono text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500"></div>Dynamic Traits</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500"></div>Marketplaces</li>
</ul>
</div>

<div className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all duration-500">
<div className="absolute top-4 right-4 font-mono text-xs text-neutral-600 group-hover:text-emerald-500/50">03</div>
<div className="w-12 h-12 bg-emerald-900/10 rounded border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:network" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium mb-3 group-hover:text-emerald-400 transition-colors">Infrastructure DAO</h4>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Governance structures for the distribution network. Build tools for decentralized coordination.
                    </p>
<ul className="font-mono text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500"></div>Voting Mechanisms</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500"></div>Treasury Mgmt</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">

<div className="relative z-10 border border-emerald-500/30 bg-black p-8 max-w-md mx-auto transform rotate-[-2deg]">
<div className="flex justify-between items-start mb-12">
<div className="font-mono text-xs text-emerald-500 border border-emerald-500 px-2 py-0.5">PRIZE_POOL_01</div>
<iconify-icon className="text-emerald-400" icon="lucide:gem" width="32"></iconify-icon>
</div>
<div className="text-center py-8">
<h3 className="font-sans text-5xl font-bold text-white tracking-tighter mb-2">$25,000</h3>
<p className="font-mono text-sm text-neutral-400">First Place (Grand Prize)</p>
</div>
<div className="mt-8 pt-6 border-t border-dashed border-white/20 grid grid-cols-2 gap-4 text-xs font-mono text-neutral-500">
<div>SERIAL: HEISEN-01</div>
<div className="text-right">WEIGHT: 50kg</div>
</div>
</div>
<div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
</div>
<div>
<h2 className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-4">Distribution</h2>
<h3 className="font-sans text-3xl md:text-4xl text-white font-semibold tracking-tight mb-6">The Product Must Move</h3>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        We don't do this for charity. We do this for the best product. The highest purity code ships to mainnet and takes the lion's share of the yield.
                    </p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 font-mono text-xs">Ag</div>
<span className="text-neutral-200 font-medium">Second Place</span>
</div>
<span className="font-mono text-emerald-400">$15,000</span>
</div>
<div className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 font-mono text-xs">Cu</div>
<span className="text-neutral-200 font-medium">Third Place</span>
</div>
<span className="font-mono text-emerald-400">$10,000</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="schedule">
<div className="max-w-3xl mx-auto">
<h2 className="text-center font-mono text-emerald-500 text-xs uppercase tracking-widest mb-4">The Process</h2>
<h3 className="text-center font-sans text-3xl text-white font-semibold tracking-tight mb-16">Timeline of Synthesis</h3>
<div className="relative border-l border-white/10 ml-6 space-y-12">

<div className="relative pl-10">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-4 ring-black"></div>
<div className="font-mono text-emerald-400 text-xs mb-1">FRI 18:00</div>
<h4 className="text-lg text-white font-medium mb-2">Lab Doors Open</h4>
<p className="text-sm text-neutral-400">
                        Check-in. Team formation. Distribution of API keys and starter kits.
                        Safety briefing (smart contract audits).
                    </p>
</div>

<div className="relative pl-10">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-700 rounded-full ring-4 ring-black"></div>
<div className="font-mono text-neutral-500 text-xs mb-1">SAT 12:00</div>
<h4 className="text-lg text-white font-medium mb-2">First Reaction</h4>
<p className="text-sm text-neutral-400">
                        Mentor check-ins. Verify code purity. Lunch provided (Pollos Hermanos style).
                    </p>
</div>

<div className="relative pl-10">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-700 rounded-full ring-4 ring-black"></div>
<div className="font-mono text-neutral-500 text-xs mb-1">SUN 16:00</div>
<h4 className="text-lg text-white font-medium mb-2">Submission Deadline</h4>
<p className="text-sm text-neutral-400">
                        Halt synthesis. Deploy to testnet. Submit Git repositories.
                        Any submissions after this time will be considered contaminated.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-lab-base to-emerald-950/20">
<div className="max-w-xl mx-auto text-center">
<div className="inline-block p-4 border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
<h3 className="font-sans text-2xl text-white font-semibold mb-6">Apply to the Lab</h3>
<form className="space-y-4 text-left" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="group">
<label className="block text-xs font-mono text-neutral-500 mb-1 group-focus-within:text-emerald-400">FIRST NAME</label>
<input className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:bg-emerald-500/5 transition-colors font-mono" placeholder="Walter" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-mono text-neutral-500 mb-1 group-focus-within:text-emerald-400">LAST NAME</label>
<input className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:bg-emerald-500/5 transition-colors font-mono" placeholder="White" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-mono text-neutral-500 mb-1 group-focus-within:text-emerald-400">EMAIL</label>
<input className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:bg-emerald-500/5 transition-colors font-mono" placeholder="heisenberg@cook.eth" type="email"/>
</div>
<div className="pt-4">
<button className="w-full bg-emerald-500 text-black font-mono font-semibold py-3 hover:bg-emerald-400 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
<iconify-icon icon="lucide:test-tubes" width="18"></iconify-icon>
                            Begin Registration
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-1 font-mono font-bold tracking-tight text-white text-sm opacity-50">
<div className="flex items-center justify-center w-6 h-6 border border-white/50 bg-white/10">W</div>
<span>eb3</span>
<div className="flex items-center justify-center w-6 h-6 border border-white/50 bg-white/10 ml-1">L</div>
<span>abs</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="lucide:disc" width="20"></iconify-icon></a>
</div>
<p className="text-neutral-600 text-xs font-mono">
                © 2024 Web3 Labs. Keep it pure.
            </p>
</div>
</footer>

    </>
  );
}
