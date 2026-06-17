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
sans: ['Manrope', 'sans-serif'],
display: ['Inter', 'sans-serif'],
},
colors: {
electric: {
900: '#0F172A', // Slate 900 base
800: '#1e3a8a', // Blue 900
600: '#2563EB', // Blue 600
400: '#60A5FA', // Blue 400
}
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
      

<header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8">
<div className="max-w-7xl mx-auto flex justify-between items-end">

<div className="flex items-center gap-2 pb-2">
<div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center">
<iconify-icon icon="lucide:box" width="20"></iconify-icon>
</div>
<span className="font-display font-semibold tracking-tight text-lg text-white">NEXUS CAP</span>
</div>

<nav className="flex items-end space-x-1">
<a className="nav-tab px-6 py-3 text-sm font-medium text-slate-300 hover:text-white" href="#">Focus</a>
<a className="nav-tab px-6 py-3 text-sm font-medium text-slate-300 hover:text-white" href="#">Team</a>
<a className="nav-tab px-6 py-3 text-sm font-medium text-slate-300 hover:text-white" href="#">Careers</a>
<a className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-semibold rounded-t-xl transition-colors shadow-[0_-4px_20px_rgba(37,99,235,0.4)] flex items-center gap-2" href="#">
                    Submit Startup
                    <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</nav>
</div>

<div className="h-[1px] w-full bg-white/10 max-w-7xl mx-auto"></div>
</header>
<main className="relative pt-32 pb-20">

<div className="absolute inset-0 grid-bg -z-10 h-[80vh]"></div>

<section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="space-y-8 relative">

<div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
<h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.1] tracking-tight text-white">
                        Capital for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Decentralized Future</span>
</h1>
<p className="text-lg text-slate-300 max-w-lg font-normal leading-relaxed">
                        We invest, advise, and syndicate deals for seed-stage Web3 startups. Reshaping infrastructure, DeFi, and consumer protocols.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-3xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            View Portfolio
                        </button>
<button className="glass-panel px-8 py-4 rounded-3xl font-medium text-sm text-white hover:bg-white/5 transition-all flex items-center gap-2">
                            Read Thesis
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative perspective-1000 group">

<div className="absolute inset-0 bg-blue-600/30 blur-[80px] rounded-full"></div>

<div className="glass-card-light relative rounded-[32px] p-6 md:p-8 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">Portfolio Performance</h3>
<div className="text-4xl font-display font-semibold text-white tracking-tight">$12.4M+</div>
<div className="text-xs text-green-400 mt-1 flex items-center gap-1 font-medium">
<iconify-icon icon="lucide:trending-up" width="14"></iconify-icon>
                                    +128% APY
                                </div>
</div>
<div className="p-3 bg-white/10 rounded-2xl border border-white/10">
<iconify-icon className="text-blue-300" icon="lucide:activity" width="24"></iconify-icon>
</div>
</div>

<div className="h-32 w-full flex items-end justify-between gap-2 mb-8">
<div className="w-full bg-blue-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-blue-500/30 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-blue-500/40 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-blue-500/60 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-blue-500/80 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
<div className="w-full bg-blue-400/20 rounded-t-sm h-[70%]"></div>
</div>

<div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">ZK</div>
<div>
<div className="text-sm font-semibold text-white">ZkSync Layer</div>
<div className="text-xs text-slate-400">Infrastructure</div>
</div>
</div>
<div className="text-sm font-semibold text-green-400">+24%</div>
</div>
</div>

<div className="absolute -z-10 top-12 -right-6 w-full h-full bg-white/5 rounded-[32px] border border-white/5 rotate-6 scale-95"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 pt-8">
<div className="group cursor-pointer">
<div className="text-xs font-mono text-blue-400 mb-2">01</div>
<div className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Seed-stage Tokens</div>
<div className="h-0.5 w-0 group-hover:w-12 bg-blue-500 mt-4 transition-all duration-500"></div>
</div>
<div className="group cursor-pointer">
<div className="text-xs font-mono text-blue-400 mb-2">02</div>
<div className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Angel Syndicate</div>
<div className="h-0.5 w-0 group-hover:w-12 bg-blue-500 mt-4 transition-all duration-500"></div>
</div>
<div className="group cursor-pointer">
<div className="text-xs font-mono text-blue-400 mb-2">03</div>
<div className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Advisory Board</div>
<div className="h-0.5 w-0 group-hover:w-12 bg-blue-500 mt-4 transition-all duration-500"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 mb-32 relative">
<div className="absolute left-0 top-20 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent -z-10 pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="solid-card rounded-[32px] p-8 md:p-10 transform md:translate-y-0 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:coins" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
<iconify-icon icon="lucide:coins" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-semibold text-slate-900 mb-4 tracking-tight">Invest</h3>
<p className="text-slate-500 leading-relaxed text-sm">Acquiring tokens &amp; equity at seed stage. Long-term capital partnership for protocol builders.</p>
</div>

<div className="solid-card rounded-[32px] p-8 md:p-10 transform md:translate-y-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:compass" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
<iconify-icon icon="lucide:compass" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-semibold text-slate-900 mb-4 tracking-tight">Advise</h3>
<p className="text-slate-500 leading-relaxed text-sm">Scaling support and expert guidance for navigating the complex Web3 regulatory landscape.</p>
</div>

<div className="solid-card rounded-[32px] p-8 md:p-10 transform md:translate-y-16 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:network" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
<iconify-icon icon="lucide:network" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-semibold text-slate-900 mb-4 tracking-tight">Syndicate</h3>
<p className="text-slate-500 leading-relaxed text-sm">Connecting angel investors to exclusive high-potential allocations in top-tier rounds.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 mb-32 md:mt-20">
<div className="bg-slate-900 rounded-[40px] border border-white/5 p-8 md:p-16 relative overflow-hidden">

<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
<svg height="100%" viewbox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 0 200 L 400 200" stroke="url(#grad1)" strokeWidth="0.5"></path>
<path d="M 200 0 L 200 400" stroke="url(#grad1)" strokeWidth="0.5"></path>
<circle cx="200" cy="200" fill="none" r="100" stroke="url(#grad1)" strokeWidth="0.5"></circle>
<circle cx="200" cy="200" fill="none" r="150" stroke="url(#grad1)" strokeWidth="0.5"></circle>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(37,99,235)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgb(37,99,235)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(37,99,235)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="md:w-1/2 relative z-10">
<h2 className="text-3xl font-display font-semibold text-white mb-12 tracking-tight">The Pillars of Web3</h2>
<div className="space-y-10">
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all text-white">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">Infrastructure</h4>
<p className="text-slate-400 text-sm">Blockchain protocols and core layers driving the new internet.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all text-white">
<iconify-icon icon="lucide:landmark" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">DeFi</h4>
<p className="text-slate-400 text-sm">Low-cost, fair, and transparent financial systems for everyone.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all text-white">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">Consumer Web3</h4>
<p className="text-slate-400 text-sm">User-centric dApps and decentralized business models.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
<h2 className="text-3xl font-display font-semibold text-white mb-10 tracking-tight">Our Partners</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-[24px] p-6 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Ivan Maltsev, PhD</h3>
<span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[10px] uppercase font-bold tracking-wider border border-blue-500/30">General Partner</span>
</div>
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border-2 border-white/10">

<div className="w-full h-full bg-gradient-to-br from-slate-500 to-slate-800 flex items-center justify-center text-xs text-white">IM</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed">Portfolio manager with 8 years of experience. Expert in International Economy and Tokenomics.</p>
</div>

<div className="glass-panel rounded-[24px] p-6 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Dima Foremnyi</h3>
<span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] uppercase font-bold tracking-wider border border-purple-500/30">Technical Lead</span>
</div>
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border-2 border-white/10">
<div className="w-full h-full bg-gradient-to-br from-purple-500 to-slate-800 flex items-center justify-center text-xs text-white">DF</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed">Former core developer at Ethereum Foundation. Specializes in ZK-rollups and Layer 2 scaling.</p>
</div>

<div className="glass-panel rounded-[24px] p-6 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-white">Taras Yavorskyy</h3>
<span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-[10px] uppercase font-bold tracking-wider border border-teal-500/30">Head of Product</span>
</div>
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border-2 border-white/10">
<div className="w-full h-full bg-gradient-to-br from-teal-500 to-slate-800 flex items-center justify-center text-xs text-white">TY</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed">Product strategist with a background in consumer fintech. Leading UX research for portfolio dApps.</p>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-4 md:px-8">
<div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-[40px] p-10 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAgMjBWMjBoMjB2MjBIMjB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tight mb-8">Building the next Unicorn?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-blue-50 transition-all w-full sm:w-auto flex justify-center items-center gap-2">
                            Apply for Funding
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-2xl font-medium text-sm text-white border border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto">
                            Check Vacancies
                        </button>
</div>
<div className="flex items-center justify-center gap-8 text-blue-200">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:send" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
