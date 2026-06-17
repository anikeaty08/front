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



      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) {
          // Enhance primary hero icon
          const iconContainer = document.getElementById("primary-icon");
          if (iconContainer) {
            iconContainer.innerHTML = "";
            const icon = lucide.createElement(lucide.Play, {
              size: 16,
              strokeWidth: 1.5,
              class: "text-fuchsia-200"
            });
            iconContainer.appendChild(icon);
          }

          // Replace all data-lucide placeholders
          lucide.createIcons({
            attrs: {
              strokeWidth: 1.5
            }
          });
        }
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
      
<div className="relative min-h-screen overflow-hidden flex flex-col">

<div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_0%,rgba(248,250,252,0.10)_0,transparent_55%),radial-gradient(circle_at_80%_0%,rgba(249,168,212,0.18)_0,transparent_60%),radial-gradient(circle_at_50%_100%,rgba(96,165,250,0.14)_0,transparent_55%)]"></div>
<div className="pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-screen" style="
        background-image:
          radial-gradient(circle at 10% 20%, rgba(255,255,255,0.18) 0, transparent 26%),
          radial-gradient(circle at 80% 30%, rgba(244,114,182,0.22) 0, transparent 32%),
          radial-gradient(circle at 30% 80%, rgba(129,140,248,0.22) 0, transparent 30%),
          radial-gradient(circle at 70% 90%, rgba(244,63,94,0.24) 0, transparent 32%);
        background-size: 220px 220px, 260px 260px, 260px 260px, 260px 260px;
        background-position: 0 0, 100% 0, 0 100%, 100% 100%;
        background-repeat: no-repeat;
      "></div>
<div className="pointer-events-none absolute inset-0 -z-30 bg-gradient-to-b from-black via-slate-950 to-black"></div>

<div className="pointer-events-none absolute inset-x-0 top-24 md:top-32 lg:top-40 -z-10 flex justify-center">
<div className="relative w-[1400px] max-w-none h-64 md:h-80 lg:h-[360px]">

<div className="absolute inset-x-[-10%] top-1/3 h-40 md:h-52 lg:h-64 blur-3xl opacity-80" style="
            background: radial-gradient(120% 220% at 50% 50%, rgba(236,72,153,0.85) 0%, rgba(244,63,94,0.70) 25 rgba(190,24,93,0.0) 70%);
            filter: blur(40px);
          "></div>

<div className="absolute inset-0">

<div className="absolute inset-x-0 top-1/2 h-36 -translate-y-1/2 blur-2xl opacity-80" style="
              background-image: linear-gradient(90deg, rgba(56,189,248,0.35), rgba(129,140,248,0.35), rgba(244,114,182,0.55));
              mask-image: radial-gradient(120% 90% at 50% 50%, black 0%, transparent 75%);
            "></div>

<div className="absolute inset-x-[6%] top-1/2 h-28 -translate-y-1/2 blur-xl opacity-90" style="
              background: conic-gradient(from 220deg, rgba(248,250,252,0.0), rgba(244,114,182,0.75), rgba(248,113,113,0.5), rgba(129,140,248,0.7), rgba(248,250,252,0.0));
              mask-image: radial-gradient(150% 80% at 50% 50%, black 0%, transparent 70%);
            "></div>

<div className="absolute inset-x-[10%] top-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-fuchsia-300 via-rose-50 to-fuchsia-300 shadow-[0_0_45px_rgba(244,114,182,0.85)]"></div>

<div className="absolute inset-0 opacity-80 mix-blend-screen">
<div className="absolute left-[8%] top-1/2 h-16 w-40 -translate-y-1/2 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9)_0,rgba(244,114,182,0.4)_30%,transparent_70%)]"></div>
<div className="absolute left-1/2 top-[48%] h-16 w-56 -translate-x-1/2 -translate-y-1/2 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9)_0,rgba(236,72,153,0.55)_30%,transparent_70%)]"></div>
<div className="absolute right-[6%] top-[52%] h-16 w-40 -translate-y-1/2 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9)_0,rgba(244,63,94,0.5)_30%,transparent_70%)]"></div>
</div>

<div className="absolute inset-x-[6%] top-1/2 h-[1px] -translate-y-1/2 opacity-60" style="
              background-image: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%);
            "></div>
</div>
</div>
</div>

<header className="relative z-10">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-5 sm:px-6 lg:px-8 lg:pt-6">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl border border-fuchsia-500/40 bg-slate-950/60 shadow-[0_0_24px_rgba(236,72,153,0.45)]">
<span className="text-xs font-semibold tracking-[0.22em] text-fuchsia-300">QN</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-[0.16em] text-slate-100 uppercase">Quantum</span>
<span className="text-[10px] font-normal tracking-[0.26em] text-fuchsia-400/80 uppercase">Neural Systems</span>
</div>
</div>

<nav className="hidden items-center gap-8 text-xs sm:flex sm:text-[13px]">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#platform">Platform</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#engine">AI Engine</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#web3">Web3 Stack</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#resources">Resources</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-slate-700/60 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-black/40 backdrop-blur-md transition hover:border-slate-500/80 hover:bg-slate-900/80 hover:text-slate-50 sm:inline-flex">
              Sign in
            </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/70 bg-gradient-to-r from-fuchsia-500/30 via-rose-500/30 to-fuchsia-500/30 px-3.5 py-1.5 text-xs font-semibold text-fuchsia-50 shadow-[0_0_30px_rgba(236,72,153,0.75)] backdrop-blur-xl transition hover:border-fuchsia-300 hover:shadow-[0_0_40px_rgba(244,114,182,0.95)]">
<span>Book a demo</span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-200/90 text-[10px] font-semibold text-fuchsia-900">
                →
              </span>
</button>
</div>
</div>
</header>

<main className="relative z-10 flex flex-1 items-center">
<div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:items-stretch lg:px-8 lg:py-20">

<div className="relative z-10 flex-1 space-y-8">

<div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium tracking-[0.25em] uppercase text-fuchsia-200 shadow-[0_0_24px_rgba(236,72,153,0.45)] backdrop-blur-xl">
<span className="inline-flex h-1 w-4 rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-sky-400"></span>
<span>Futuristic AI • Web3-native • Real-time</span>
</div>

<div className="space-y-4">
<h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl sm:leading-tight lg:text-[3.25rem]">
                Glowing intelligence for the <span className="text-fuchsia-400">next web</span>.
              </h1>
<p className="max-w-xl text-sm text-slate-300 sm:text-[15px]">
                Quantum-grade AI orchestration for high-tech, Web3-native products. Stream signals, infer patterns,
                and deploy autonomous agents across any chain in milliseconds.
              </p>
</div>

<div className="flex flex-wrap items-center gap-3 pt-2">

<button className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/70 bg-fuchsia-500/10 px-5 py-2.5 text-xs font-semibold text-fuchsia-50 shadow-[0_0_30px_rgba(236,72,153,0.55)] backdrop-blur-xl transition hover:border-fuchsia-300 hover:bg-fuchsia-500/20 hover:shadow-[0_0_42px_rgba(244,114,182,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
<span>Launch the AI console</span>
<span className="flex items-center justify-center" id="primary-icon">

<svg className="h-4 w-4 text-fuchsia-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM17 17l4-4-4-4M13 17l4-4-4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</button>

<button className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-4 py-2.5 text-xs font-medium text-slate-100 shadow-[0_0_24px_rgba(15,23,42,0.9)] backdrop-blur-xl transition hover:border-slate-400/80 hover:bg-slate-900/90 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
<span>Explore docs</span>
<span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-500/80 text-[10px]">
                  ?
                </span>
</button>

<div className="flex items-center gap-2 text-[11px] text-slate-400">
<div className="flex -space-x-2">
<img alt="Avatar" className="h-6 w-6 rounded-full border border-slate-700 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="Avatar" className="h-6 w-6 rounded-full border border-slate-700 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="Avatar" className="h-6 w-6 rounded-full border border-slate-700 object-cover" src="https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
</div>
<span className="max-w-[140px]">
                  Teams ship 3.4x faster with Quantum Neural.
                </span>
</div>
</div>

<div className="mt-6 flex flex-wrap gap-4 text-[11px] text-slate-300">
<div className="flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 backdrop-blur-xl">
<div className="h-6 w-12 overflow-hidden rounded-md bg-slate-900/80">
<div className="h-full w-full bg-[radial-gradient(circle_at_0_50%,rgba(244,114,182,0.6)_0,transparent_55%),radial-gradient(circle_at_100%_50%,rgba(56,189,248,0.6)_0,transparent_55%)] opacity-80"></div>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Signal throughput</span>
<span className="text-xs font-semibold text-slate-50">12.4M events/s</span>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 backdrop-blur-xl">
<div className="h-1.5 w-14 rounded-full bg-slate-800">
<div className="h-full w-11 rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-sky-400"></div>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Inference latency</span>
<span className="text-xs font-semibold text-slate-50">&lt; 12ms p95</span>
</div>
</div>
</div>
</div>

<div className="relative mt-4 flex-1 lg:mt-0">

<div className="relative mx-auto max-w-md rounded-3xl border border-slate-700/80 bg-slate-950/60 p-4 shadow-[0_0_60px_rgba(15,23,42,0.95)] backdrop-blur-2xl sm:p-5 lg:mt-10">

<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl border border-fuchsia-400/60 bg-fuchsia-500/10 shadow-[0_0_28px_rgba(236,72,153,0.85)]">
<span className="text-[13px] font-semibold tracking-[0.18em] text-fuchsia-100 uppercase">AI</span>
</div>
<div className="flex flex-col">
<span className="text-[11px] font-medium text-slate-100">Realtime Orchestrator</span>
<span className="text-[10px] text-slate-500">Streaming multi-chain signals</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"></span>
<span>Online</span>
</div>
</div>

<div className="mb-3 h-px bg-gradient-to-r from-transparent via-slate-700/80 to-transparent"></div>

<div className="space-y-2 rounded-2xl border border-slate-700/70 bg-slate-950/80 p-3 text-[11px] font-mono text-slate-200 shadow-inner shadow-black/40">
<div className="flex items-center justify-between text-[10px] text-slate-500">
<span>session: <span className="text-slate-300">#b42e:quantum-edge</span></span>
<span>latency: <span className="text-emerald-300">&lt; 11.7ms</span></span>
</div>
<div className="rounded-xl bg-gradient-to-br from-slate-900/90 via-slate-950/70 to-slate-950/90 p-2.5">
<div className="flex items-center justify-between text-[10px] text-slate-400">
<span>// live inference pipeline</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[9px] text-slate-400">
                      AI · Web3 · Edge
                    </span>
</div>
<pre className="mt-2 overflow-x-auto whitespace-pre text-[11px] leading-relaxed text-slate-200"><span className="text-fuchsia-300">const</span> stream = <span className="text-sky-300">QN</span>.connect({
  chain: <span className="text-emerald-300">'multi'</span>,
  mode: <span className="text-emerald-300">'realtime'</span>,
  model: <span className="text-emerald-300">'neon-orbit-12b'</span>
});

stream.<span className="text-sky-300">onSignal</span>(<span className="text-emerald-300">'tx'</span>, (signal) =&gt; {
  <span className="text-fuchsia-300">const</span> agent = <span className="text-sky-300">QN</span>.<span className="text-sky-300">agent</span>(signal);
  <span className="text-sky-300">agent</span>.react(<span className="text-emerald-300">'optimize-liquidity'</span>);
});</pre>
</div>
</div>

<div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
<div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2">
<div className="mb-1 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Agents</span>
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]"></span>
</div>
<div className="text-xs font-semibold text-slate-50">3,284</div>
<div className="text-[10px] text-emerald-300">+214 live</div>
</div>
<div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2">
<div className="mb-1 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Blocks</span>
<span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"></span>
</div>
<div className="text-xs font-semibold text-slate-50">12.9M</div>
<div className="text-[10px] text-emerald-300">streaming</div>
</div>
<div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2">
<div className="mb-1 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Clusters</span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
</div>
<div className="text-xs font-semibold text-slate-50">42</div>
<div className="text-[10px] text-slate-400">global edge</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<main className="relative z-10 bg-gradient-to-b from-black/60 via-slate-950/80 to-black/95">

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800/80 to-transparent"></div>
</div>

<section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="space-y-1">
<p className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Trusted by teams building the next internet
            </p>
<p className="text-xs text-slate-500">
              From high-frequency trading desks to immersive gaming rails.
            </p>
</div>
<div className="grid flex-1 grid-cols-2 gap-4 text-xs text-slate-400 sm:grid-cols-4">
<div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2 backdrop-blur-xl">
<span className="text-[10px] font-semibold tracking-[0.18em] text-slate-200">NX</span>
<span>NeuroX Labs</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2 backdrop-blur-xl">
<span className="text-[10px] font-semibold tracking-[0.2em] text-slate-200">DR</span>
<span>DeltaRange</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2 backdrop-blur-xl">
<span className="text-[10px] font-semibold tracking-[0.2em] text-slate-200">OS</span>
<span>OrbitStack</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2 backdrop-blur-xl">
<span className="text-[10px] font-semibold tracking-[0.22em] text-slate-200">VG</span>
<span>Vantage Grid</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="platform">
<div className="flex flex-col gap-10 lg:flex-row lg:items-start">
<div className="max-w-sm space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.25em] text-fuchsia-300">
              Platform
            </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.7rem]">
              One orchestration fabric for every signal.
            </h2>
<p className="text-sm text-slate-300">
              Ingest on-chain events, market data, and user interactions into a single streaming substrate. Let agents coordinate autonomously while you keep human-grade control.
            </p>
</div>
<div className="flex-1 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur-xl">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-fuchsia-400/70 bg-fuchsia-500/10">
<i className="h-3.5 w-3.5 text-fuchsia-300" data-lucide="cpu"></i>
</div>
<span className="text-xs font-medium text-slate-50">Unified event mesh</span>
</div>
<p className="text-[13px] text-slate-300">
                Connect L1s, L2s, off-chain feeds, and your own product telemetry into a fault-tolerant, low-latency bus tuned for AI workloads.
              </p>
<div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
<span className="h-1 w-6 rounded-full bg-gradient-to-r from-fuchsia-400/80 to-sky-400/80"></span>
<span>&lt; 90 ms global propagation</span>
</div>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur-xl">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-sky-400/70 bg-sky-500/10">
<i className="h-3.5 w-3.5 text-sky-300" data-lucide="network"></i>
</div>
<span className="text-xs font-medium text-slate-50">Agent mesh</span>
</div>
<p className="text-[13px] text-slate-300">
                Spin up thousands of cooperative agents that observe, negotiate, and act across protocols with deterministic guarantees.
              </p>
<div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
<span className="h-1 w-6 rounded-full bg-gradient-to-r from-sky-400/80 to-emerald-400/80"></span>
<span>Horizontal scaling to millions of flows</span>
</div>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur-xl">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-emerald-400/70 bg-emerald-500/10">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-medium text-slate-50">Guardrails &amp; policy</span>
</div>
<p className="text-[13px] text-slate-300">
                Encode risk engines, compliance constraints, and kill switches as first-class citizens in the orchestration pipeline.
              </p>
<div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
<span className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-400/80 to-slate-400/80"></span>
<span>Formalized, testable policies</span>
</div>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(15,23,42,0.85)] backdrop-blur-xl">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-purple-400/70 bg-purple-500/10">
<i className="h-3.5 w-3.5 text-purple-300" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium text-slate-50">Observability by design</span>
</div>
<p className="text-[13px] text-slate-300">
                Trace any decision to the underlying signals, prompts, and model versions for full auditability.
              </p>
<div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
<span className="h-1 w-6 rounded-full bg-gradient-to-r from-purple-400/80 to-fuchsia-400/80"></span>
<span>Structured, queryable logs</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="engine">
<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
<div className="space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.25em] text-fuchsia-300">
              AI Engine
            </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.7rem]">
              Models tuned for latency, context, and control.
            </h2>
<p className="text-sm text-slate-300">
              Serve foundation models, specialized pipelines, and tiny edge models behind a single contract. Route requests by cost, jurisdiction, and risk appetite.
            </p>
<div className="mt-4 grid gap-3 text-[13px] text-slate-300 sm:grid-cols-2">
<div className="flex items-start gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<div>
<p className="text-xs font-medium text-slate-50">Latency-aware routing</p>
<p className="mt-1 text-[12px] text-slate-400">
                    Automatically pick the closest, most efficient model endpoint in real time.
                  </p>
</div>
</div>
<div className="flex items-start gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]"></span>
<div>
<p className="text-xs font-medium text-slate-50">Deterministic flows</p>
<p className="mt-1 text-[12px] text-slate-400">
                    Compose attention, tools, and policies into repeatable execution graphs.
                  </p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_0_40px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span>neon-orbit-12b · edge-eu-central</span>
</div>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] text-slate-500">
                9.8 ms p95
              </span>
</div>
<div className="mt-3 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/90 p-3">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>curl snippet</span>
<span className="flex items-center gap-1 rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-400">
<i className="h-3 w-3 text-slate-400" data-lucide="terminal"></i>
<span>copy</span>
</span>
</div>
<pre className="mt-2 overflow-x-auto whitespace-pre text-[11px] leading-relaxed text-slate-200">curl https://api.quantumneural.dev/infer \
  -H "Authorization: Bearer &lt;token&gt;" \
  -d '{
    "model": "neon-orbit-12b",
    "chain": "multi",
    "input": "Monitor liquidity spikes &amp; rebalance"
  }'</pre>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
<div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-2">
<p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Tokens / s</p>
<p className="mt-1 text-xs font-semibold text-slate-50">42k</p>
</div>
<div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-2">
<p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Context</p>
<p className="mt-1 text-xs font-semibold text-slate-50">64k</p>
</div>
<div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-2">
<p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Regions</p>
<p className="mt-1 text-xs font-semibold text-slate-50">11</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="web3">
<div className="flex flex-col gap-8 lg:flex-row lg:items-start">
<div className="max-w-sm space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.25em] text-fuchsia-300">
              Web3 Stack
            </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.7rem]">
              Chain-agnostic by default, sovereign by design.
            </h2>
<p className="text-sm text-slate-300">
              Plug into major chains, rollups, and app-chains without re-writing your logic. Keep control of your keys, signers, and execution environment.
            </p>
</div>
<div className="flex-1 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_0_40px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
<div className="grid gap-4 md:grid-cols-[1.3fr,0.9fr]">
<div className="space-y-3">
<div className="flex items-center justify-between">
<p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">Connected networks</p>
<span className="rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-400">
                    18 active
                  </span>
</div>
<div className="grid grid-cols-2 gap-2 text-[12px] text-slate-200">
<div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span>Mainnet L1</span>
</div>
<span className="text-[11px] text-slate-400">live</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"></span>
<span>Rollup L2</span>
</div>
<span className="text-[11px] text-slate-400">live</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]"></span>
<span>App-chain</span>
</div>
<span className="text-[11px] text-slate-400">pilot</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]"></span>
<span>Testnets</span>
</div>
<span className="text-[11px] text-slate-400">sandbox</span>
</div>
</div>
<div className="mt-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 text-[11px] text-slate-300">
<div className="mb-2 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Multisig policy</span>
<span className="flex items-center gap-1 text-[10px] text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i>
<span>enforced</span>
</span>
</div>
<pre className="overflow-x-auto whitespace-pre text-[11px] leading-relaxed text-slate-200">if (agent.tx.size &gt; 250_000) {
  require(multisig(3, 5));
  require(riskScore(agent) &lt; 0.32);
}</pre>
</div>
</div>
<div className="flex flex-col justify-between gap-4">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 text-[11px] text-slate-300">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Signer vault</span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
</div>
<p className="mt-2 text-[12px] text-slate-400">
                    Plug your own HSM, custody provider, or module account while Quantum Neural handles orchestration.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 text-[11px] text-slate-300">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Gas abstraction</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-400">beta</span>
</div>
<p className="mt-2 text-[12px] text-slate-400">
                    Let agents fund and rebalance gas wallets, with guardrails, across chains and rollups.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="resources">
<div className="flex flex-col gap-8 lg:flex-row lg:items-start">
<div className="max-w-sm space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.25em] text-fuchsia-300">
              Resources
            </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.7rem]">
              Learn, prototype, deploy in a weekend.
            </h2>
<p className="text-sm text-slate-300">
              Opinionated starters, real-world playbooks, and reference architectures for trading, gaming, and infrastructure teams.
            </p>
</div>
<div className="flex-1 grid gap-4 md:grid-cols-3">
<article className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-[0_0_30px_rgba(15,23,42,0.7)] backdrop-blur-xl">
<div className="h-28 w-full overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/80">
<img alt="Dashboard code" className="h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;w=640&amp;q=80"/>
</div>
<div className="mt-3 flex-1 space-y-1.5">
<p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Playbook</p>
<h3 className="text-xs font-medium text-slate-50">
                  DeFi risk sentinel agents
                </h3>
<p className="text-[12px] text-slate-400">
                  Detect anomalies, throttle liquidity, and auto-hedge risk using streaming inference.
                </p>
</div>
<button className="mt-3 inline-flex items-center gap-1 text-[11px] text-fuchsia-300 hover:text-fuchsia-200">
<span>Open guide</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</button>
</article>
<article className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-[0_0_30px_rgba(15,23,42,0.7)] backdrop-blur-xl">
<div className="h-28 w-full overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/80">
<img alt="3d wireframe" className="h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=640&amp;q=80"/>
</div>
<div className="mt-3 flex-1 space-y-1.5">
<p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Template</p>
<h3 className="text-xs font-medium text-slate-50">
                  Gaming economy orchestrator
                </h3>
<p className="text-[12px] text-slate-400">
                  Balance sinks, sources, and rewards with AI-driven agents tuned to your game.
                </p>
</div>
<button className="mt-3 inline-flex items-center gap-1 text-[11px] text-fuchsia-300 hover:text-fuchsia-200">
<span>View template</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</button>
</article>
<article className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-[0_0_30px_rgba(15,23,42,0.7)] backdrop-blur-xl">
<div className="h-28 w-full overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/80">
<img alt="Developer workspace" className="h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&amp;fit=crop&amp;w=640&amp;q=80"/>
</div>
<div className="mt-3 flex-1 space-y-1.5">
<p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Reference</p>
<h3 className="text-xs font-medium text-slate-50">
                  Observability &amp; audit trails
                </h3>
<p className="text-[12px] text-slate-400">
                  Ship production-grade logging, tracing, and replay for every agent decision.
                </p>
</div>
<button className="mt-3 inline-flex items-center gap-1 text-[11px] text-fuchsia-300 hover:text-fuchsia-200">
<span>See patterns</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</button>
</article>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16">
<div className="rounded-3xl border border-fuchsia-500/40 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-black/90 p-6 shadow-[0_0_60px_rgba(236,72,153,0.35)] backdrop-blur-2xl">
<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
<div className="space-y-2">
<p className="text-[11px] font-medium uppercase tracking-[0.25em] text-fuchsia-300">
                Get access
              </p>
<h2 className="text-xl font-semibold tracking-tight text-slate-50">
                Start orchestrating agents on live networks in days, not months.
              </h2>
<p className="text-[13px] text-slate-300">
                Join the early access program for priority support, architecture sessions, and co-designed pilots.
              </p>
</div>
<div className="w-full max-w-xs space-y-3">
<div className="flex flex-col gap-2 text-[12px]">
<div className="flex rounded-full border border-slate-700/80 bg-slate-950/90 px-3 py-2 text-slate-200">
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="you@team.xyz" type="email"/>
<button className="ml-2 inline-flex items-center gap-1 rounded-full border border-fuchsia-400/70 bg-fuchsia-500/20 px-3 py-1 text-[11px] font-medium text-fuchsia-50 hover:border-fuchsia-300 hover:bg-fuchsia-500/30">
<span>Request access</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-[11px] text-slate-500">
                  No spam. We review each project manually.
                </p>
</div>
</div>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-800/80 to-transparent"></div>
<footer className="mt-4 flex flex-col items-start justify-between gap-3 text-[11px] text-slate-500 sm:flex-row sm:items-center">
<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold tracking-[0.2em] text-slate-200">QN</span>
<span>Quantum Neural Systems</span>
<span className="text-slate-700">•</span>
<span>2025</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300" href="#">Status</a>
<a className="hover:text-slate-300" href="#">Docs</a>
<a className="hover:text-slate-300" href="#">Security</a>
</div>
</footer>
</div>
</section>
</main>


    </>
  );
}
