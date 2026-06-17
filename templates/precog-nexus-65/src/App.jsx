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



    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();

      // Counters
      const counters = document.querySelectorAll('.counter');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600;
          const start = performance.now();

          const fmt = (v) => {
            if (suffix === '$') return '$' + Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(v);
            if (suffix === 's') return v.toFixed(1) + 's';
            return Intl.NumberFormat('en-US', { notation: 'compact' }).format(Math.floor(v)) + (suffix || '');
          };

          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            el.textContent = fmt(target * ease);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      }, { threshold: 0.5 });
      counters.forEach(c => io.observe(c));
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
      

<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-b from-cyan-500/20 to-blue-600/10 blur-3xl"></div>
<div className="absolute top-20 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-b from-purple-500/20 to-fuchsia-600/10 blur-3xl"></div>
<div className="absolute bottom-[-12rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-gradient-to-b from-emerald-500/20 to-teal-600/10 blur-3xl"></div>
</div>

<header className="fixed top-4 left-4 right-4 z-50">
<div className="max-w-7xl mx-auto">
<div className="h-14 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>PRECOG NEXUS</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition" href="#">Platform</a>
<a className="text-white/70 hover:text-white transition" href="#">Solutions</a>
<a className="text-white/70 hover:text-white transition" href="#">Enterprise</a>
<a className="text-white/70 hover:text-white transition" href="#">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-4 py-2 text-sm text-white/70 hover:text-white transition">Sign In</button>
<button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition transform hover:scale-105">Launch Console</button>
</div>
<button className="md:hidden p-2 hover:bg-white/10 rounded-lg">
<i className="h-5 w-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="pt-40 pb-16">
<div className="max-w-7xl mx-auto px-4">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-sm font-medium">Dual‑Layer AI Security • 4th‑Gen Blockchain • Institutional Tokenization</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-8 font-light" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>
        Tokenize real‑world assets. Secure in real time.
      </h1>
<p className="max-w-2xl text-lg text-white/70 mb-10">
        PRECOG NEXUS powers compliant tokenization pipelines, instant settlements, and AI‑guarded risk controls—built on a fourth‑generation, parallelized chain with finality under two seconds.
      </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
          Launch Console
          <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="monitor-play" strokeWidth="1.5"></i>
          Watch Demo
        </button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="book-open" strokeWidth="1.5"></i>
          View Docs
        </button>
</div>
<div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/60">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10">
<i className="w-3.5 h-3.5 text-cyan-300" data-lucide="shield-check" strokeWidth="1.5"></i>
          Layer‑1 Anomaly Shield
        </div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10">
<i className="w-3.5 h-3.5 text-purple-300" data-lucide="cpu" strokeWidth="1.5"></i>
          Layer‑2 Policy Engine
        </div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="globe" strokeWidth="1.5"></i>
          Cross‑jurisdictional Compliance
        </div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 flex justify-center">

<div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] flex items-center justify-center scale-[0.65] sm:scale-100 transition-transform duration-700">

<div className="absolute inset-0 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

<div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-[2px]"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-white" viewbox="0 0 600 600">
<circle cx="300" cy="300" fill="none" r="299" stroke="currentColor" strokeWidth="1"></circle>
<circle cx="300" cy="300" fill="none" r="100" stroke="currentColor" strokeWidth="1"></circle>

<line stroke="currentColor" strokeWidth="1" x1="300" x2="300" y1="0" y2="600"></line>
<line stroke="currentColor" strokeWidth="1" x1="0" x2="600" y1="300" y2="300"></line>
<line stroke="currentColor" strokeWidth="1" x1="88" x2="512" y1="88" y2="512"></line>
<line stroke="currentColor" strokeWidth="1" x1="512" x2="88" y1="88" y2="512"></line>
</svg>

<div className="absolute z-20 w-44 h-44 rounded-full bg-black border border-white/10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)] group hover:border-blue-500/30 transition-colors duration-500 cursor-default">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h2 className="text-2xl font-bold bg-gradient-to-b from-blue-100 to-blue-400 bg-clip-text text-transparent tracking-tight" style={{fontFamily: '\'SF Pro Display\', sans-serif'}}>ASSETIZE</h2>
<span className="text-xs text-white/40 tracking-wider uppercase mt-1 font-medium">Dashboard</span>
</div>



<button className="absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-cyan-400 transition-colors" data-lucide="send"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Transmit</span>
</button>

<button className="absolute top-[22%] right-[22%] -translate-y-1/2 translate-x-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-emerald-400/50 group-hover:bg-emerald-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-emerald-400 transition-colors" data-lucide="shield-check"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Risk Center</span>
</button>

<button className="absolute top-1/2 right-[12%] translate-x-1/2 -translate-y-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-blue-400/50 group-hover:bg-blue-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors" data-lucide="layers"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Tokenize</span>
</button>

<button className="absolute bottom-[22%] right-[22%] translate-y-1/2 translate-x-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-purple-400/50 group-hover:bg-purple-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-purple-400 transition-colors" data-lucide="briefcase"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Store</span>
</button>

<button className="absolute bottom-[12%] left-1/2 -translate-x-1/2 translate-y-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-pink-400/50 group-hover:bg-pink-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-pink-400 transition-colors" data-lucide="arrow-up-down"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Trade</span>
</button>

<button className="absolute bottom-[22%] left-[22%] translate-y-1/2 -translate-x-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-orange-400/50 group-hover:bg-orange-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors" data-lucide="arrow-up"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Invest DA</span>
</button>

<button className="absolute top-1/2 left-[12%] -translate-x-1/2 -translate-y-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-teal-400/50 group-hover:bg-teal-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-teal-400 transition-colors" data-lucide="arrow-up"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Invest RWA</span>
</button>

<button className="absolute top-[22%] left-[22%] -translate-y-1/2 -translate-x-1/2 group w-24 h-24 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-2 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-colors shadow-lg">
<i className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition-colors" data-lucide="credit-card"></i>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">Transact</span>
</button>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl tracking-tight font-light mb-4" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>
          Trusted by leading institutions.
        </h2>
<p className="text-xl text-white/60 max-w-2xl mx-auto">
          From funds to custodians, organizations use PRECOG NEXUS to launch compliant, liquid, and AI‑secured RWA markets.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent group transition">
<div className="aspect-video relative overflow-hidden">
<img alt="Institutional trading floor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">Case Study</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Global REIT</h3>
<p className="text-sm text-white/70">Real Estate Tokenization</p>
</div>
</div>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>$1.2B assets on‑chain</h4>
<p className="text-white/70 mb-6">Digitized property shares with instant settlement and automated compliance across 5 jurisdictions.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div>
<p className="text-sm font-medium">Priya Singh</p>
<p className="text-xs text-white/50">Head of Digital Assets</p>
</div>
</div>
<i className="w-5 h-5 text-white/40 group-hover:translate-x-1 transition" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent group transition">
<div className="aspect-video relative overflow-hidden">
<img alt="Digital custody vault" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">Case Study</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>FinTech Custodian</h3>
<p className="text-sm text-white/70">Qualified Custody</p>
</div>
</div>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Zero policy breaches</h4>
<p className="text-white/70 mb-6">Dual AI layers blocked 100% of attempted sanction violations in real time, without false positives.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div>
<p className="text-sm font-medium">Marcus Lee</p>
<p className="text-xs text-white/50">Chief Risk Officer</p>
</div>
</div>
<i className="w-5 h-5 text-white/40 group-hover:translate-x-1 transition" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent group transition">
<div className="aspect-video relative overflow-hidden">
<img alt="Supply chain visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">Case Study</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Supply Chain Finance</h3>
<p className="text-sm text-white/70">Programmable Credit</p>
</div>
</div>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>99.99% uptime</h4>
<p className="text-white/70 mb-6">On‑chain receivables with dynamic risk pricing via valuation oracles and AI policy hooks.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div>
<p className="text-sm font-medium">Helena Park</p>
<p className="text-xs text-white/50">Platform Lead</p>
</div>
</div>
<i className="w-5 h-5 text-white/40 group-hover:translate-x-1 transition" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-light text-neutral-50 mb-2 counter" data-suffix="$" data-target="2600000000"> $0</div>
<div className="text-white/60">Tokenized Value</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-light text-neutral-50 mb-2 counter" data-suffix="s" data-target="1.8">0.0s</div>
<div className="text-white/60">Avg Finality</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-light text-neutral-50 mb-2 counter" data-suffix="+" data-target="4200">0</div>
<div className="text-white/60">TPS Peak</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-light text-neutral-50 mb-2 counter" data-suffix="+" data-target="160">0</div>
<div className="text-white/60">Institutions Integrated</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl tracking-tight font-light mb-4" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>
          Engineered for regulated markets.
        </h2>
<p className="text-xl text-white/70 max-w-2xl mx-auto">
          Purpose‑built for institutional tokenization, compliance, and instant settlement—secured by AI at every layer.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="coins" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>End‑to‑End Tokenization</h3>
<p className="text-white/70">Model assets, mint compliant tokens, manage lifecycle events, and orchestrate distributions with programmable flows.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Dual AI Security</h3>
<p className="text-white/70">Layer‑1 anomaly detection screens flows on‑chain; Layer‑2 policy engine enforces KYC/AML, sanctions, and limits in real time.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>4th‑Gen Chain</h3>
<p className="text-white/70">Parallelized execution, optimistic networking, and zk‑verified state for sub‑2s finality at global scale.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="satellite" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Trusted Oracles</h3>
<p className="text-white/70">Valuation, reference data, and attestation feeds with cryptographic proofs and slashing for integrity.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="file-check-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Compliance Automation</h3>
<p className="text-white/70">Jurisdictional rules packaged as reusable policies—versioned, auditable, and easy to extend.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>Monitoring &amp; Audit</h3>
<p className="text-white/70">Real‑time observability, anomaly alerts, and immutable audit trails for regulators and internal controls.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 md:p-16">
<h2 className="text-4xl sm:text-5xl tracking-tight font-light mb-6" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>
          Bring real‑world value on‑chain—securely.
        </h2>
<p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Start with a compliant tokenization pipeline, connect custody and oracles, and go live with AI‑guarded markets.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
            Start Building
            <i className="w-5 h-5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
            Talk to Sales
          </button>
</div>
<p className="text-sm text-white/40 mt-6">Free sandbox. No credit card required. SOC 2 | ISO 27001.</p>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="grid md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, system-ui, sans-serif'}}>PRECOG NEXUS</span>
</div>
<p className="text-white/70 max-w-md">
            Institutional platform for tokenizing real‑world assets on a 4th‑generation blockchain with dual‑layer AI security.
          </p>
<div className="flex gap-3 mt-6">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</button>
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</button>
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div>
<h5 className="font-semibold mb-4">Platform</h5>
<ul className="space-y-3 text-white/70">
<li><a className="hover:text-white transition" href="#">Console</a></li>
<li><a className="hover:text-white transition" href="#">Tokenization</a></li>
<li><a className="hover:text-white transition" href="#">Compliance</a></li>
<li><a className="hover:text-white transition" href="#">Observability</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold mb-4">Solutions</h5>
<ul className="space-y-3 text-white/70">
<li><a className="hover:text-white transition" href="#">Real Estate</a></li>
<li><a className="hover:text-white transition" href="#">Funds &amp; Credit</a></li>
<li><a className="hover:text-white transition" href="#">Commodities</a></li>
<li><a className="hover:text-white transition" href="#">Treasury</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold mb-4">Support</h5>
<ul className="space-y-3 text-white/70">
<li><a className="hover:text-white transition" href="#">Documentation</a></li>
<li><a className="hover:text-white transition" href="#">API Reference</a></li>
<li><a className="hover:text-white transition" href="#">Status</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
<p className="text-white/40 text-sm">© 2025 PRECOG NEXUS. All rights reserved.</p>
<div className="flex gap-6 text-white/40 text-sm mt-4 md:mt-0">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
