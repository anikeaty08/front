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
      {
!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
}

{

      // Initialize Lucide icons with consistent stroke width
      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        // Simple toast on waitlist submit
        const form = document.getElementById("waitlist");
        const toast = document.getElementById("toast");
        form?.addEventListener("submit", (e) => {
          e.preventDefault();
          toast.classList.remove("hidden");
          setTimeout(() => toast.classList.add("hidden"), 3000);
          form.reset();
        });

        // Chart.js line chart with gradient fill
        const ctx = document.getElementById("utilChart");
        if (ctx && window.Chart) {
          const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 160);
          gradient.addColorStop(0, "rgba(217, 70, 239, 0.35)");  // fuchsia
          gradient.addColorStop(1, "rgba(217, 70, 239, 0.02)");
          const line = new Chart(ctx, {
            type: "line",
            data: {
              labels: Array.from({ length: 24 }, (_, i) => (i % 2 === 0 ? i + ":00" : "")),
              datasets: [
                {
                  label: "Intents",
                  data: [800, 1200, 1500, 1100, 2100, 2600, 2800, 2400, 3200, 3300, 3000, 2900, 3100, 3700, 4200, 4800, 5200, 4900, 5300, 5700, 6100, 5900, 6400, 6800],
                  borderColor: "rgba(168, 85, 247, 1)",
                  backgroundColor: gradient,
                  tension: 0.35,
                  fill: true,
                  pointRadius: 0,
                  borderWidth: 2
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: { color: "rgba(255,255,255,0.06)", drawTicks: false },
                  ticks: { color: "rgba(255,255,255,0.5)", font: { size: 10 } }
                },
                y: {
                  grid: { color: "rgba(255,255,255,0.06)", drawTicks: false },
                  ticks: { color: "rgba(255,255,255,0.5)", font: { size: 10 }, callback: (v) => v >= 1000 ? (v/1000) + "k" : v }
                }
              },
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "rgba(10,10,11,0.9)",
                  titleColor: "#fff",
                  bodyColor: "rgba(255,255,255,0.8)",
                  borderColor: "rgba(255,255,255,0.1)",
                  borderWidth: 1,
                  displayColors: false
                }
              },
              interaction: { intersect: false, mode: "index" }
            }
          });
        }
      });
    
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<div className="fixed inset-0 -z-10 overflow-hidden">

<div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(80%_60%_at_50%_30%,black,transparent)]">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="grid" patternunits="userSpaceOnUse" width="32">
<path fill="none" stroke="rgb(255 255 255 / 0.05)" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-blue-500/40"></div>
<div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full blur-3xl opacity-30 bg-cyan-500/30"></div>
<div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full blur-3xl opacity-20 bg-yellow-500/30"></div>
</div>

<div className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="flex items-center gap-3 rounded-xl backdrop-blur px-4 py-3 ring-1 shadow-lg bg-white/10 ring-white/10">
<svg className="lucide lucide-sparkles w-4 h-4 text-fuchsia-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<p className="text-sm font-geist text-white/90">You’re on the list. We’ll ping you soon.</p>
</div>
</div>

<header className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<a className="group inline-flex items-center gap-3" href="#">
<div className="h-8 w-8 grid place-items-center rounded-lg ring-1 group-hover:ring-blue-400/40 transition bg-white/5 ring-white/10">
<span className="text-sm font-semibold tracking-tight font-geist text-white">N</span>
</div>
<span className="text-[17px] font-semibold tracking-tight font-geist text-white">NOVA</span>
<span className="ml-2 hidden md:inline rounded-full border px-2 py-0.5 text-[11px] font-geist border-white/10 text-white/60">AI x Crypto</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="transition font-geist hover:text-white" href="#features">Features</a>
<a className="transition font-geist hover:text-white" href="#agents">Agents</a>
<a className="transition font-geist hover:text-white" href="#token">Network</a>
<a className="transition font-geist hover:text-white" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm ring-1 transition font-geist text-white/90 hover:text-white hover:ring-white/20 ring-white/10" href="#">
<svg className="lucide lucide-file-text w-4 h-4 text-white/70" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
              Litepaper
            </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-medium tracking-tight shadow-lg shadow-blue-500/10 ring-1 hover:opacity-90 active:opacity-80 transition font-geist text-white ring-white/10" href="#waitlist">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
              Join waitlist
            </a>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-white/10"></div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-center py-16 md:py-24">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-5 font-geist border-white/10 bg-white/5 text-white/70">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-fuchsia-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              v0.9 Alpha access opening soon
            </div>
<h1 className="text-4xl md:text-6xl tracking-tight font-jakarta font-medium text-white">
              The AI-native crypto rail for builders, traders, and on-chain agents
            </h1>
<p className="mt-5 text-[15px] md:text-lg leading-relaxed font-geist text-white/70">
              Automate strategies, ship autonomous apps, and move value across chains with a trust-minimized, AI-optimized network. Gasless UX, intent settlement, and agent wallets baked in.
            </p>

<form className="mt-8 max-w-xl" id="waitlist">
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
<svg className="lucide lucide-mail w-4.5 h-4.5 text-white/40" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
</div>
<input className="w-full rounded-xl pl-10 pr-3 py-3.5 text-sm placeholder-white/40 ring-1 focus:ring-2 focus:ring-blue-500/60 outline-none transition bg-white/5 text-white ring-white/10" name="email" placeholder="you@pretty.cool" required type="email" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium tracking-tight active:scale-[0.99] transition ring-1 font-geist bg-white text-blue-900 hover:bg-white/90 ring-white/10" type="submit">
                  Get early access
                  <svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<p className="mt-3 text-xs font-geist text-white/50">No spam. Just launch updates and invites.</p>
</form>

<div className="mt-10 flex items-center gap-8">
<div className="space-y-1">
<p className="text-2xl tracking-tight font-jakarta font-medium">12ms</p>
<p className="text-xs font-geist text-white/50">Intent settle latency</p>
</div>
<div className="h-10 w-px bg-white/10"></div>
<div className="space-y-1">
<p className="text-2xl tracking-tight font-jakarta font-medium">120k+</p>
<p className="text-xs font-geist text-white/50">Simulated agent tx/mo</p>
</div>
<div className="h-10 w-px bg-white/10"></div>
<div className="space-y-1">
<p className="text-2xl tracking-tight font-jakarta font-medium">8</p>
<p className="text-xs font-geist text-white/50">Chains live at launch</p>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative rounded-2xl ring-1 p-4 md:p-6 overflow-hidden bg-white/5 ring-white/10">
<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
<p className="text-xs font-geist text-white/60">Agent runtime</p>
</div>
<div className="flex items-center gap-2 text-xs font-geist text-white/50">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><rect height="16" rx="2" width="16"></rect><rect height="8" rx="1" width="8"></rect></svg>
                  v0.9
                </div>
</div>
<div className="mt-4 rounded-xl ring-1 overflow-hidden bg-black/40 ring-white/10">
<div className="flex items-center gap-2 border-b px-3 py-2 border-white/10">
<div className="h-2 w-2 rounded-full bg-cyan-400/80"></div>
<div className="h-2 w-2 rounded-full bg-pink-400/80"></div>
<div className="h-2 w-2 rounded-full bg-green-400/80"></div>
<span className="ml-2 text-[11px] font-geist text-white/50">agents/trader.ts</span>
</div>
<pre className="p-4 text-[12px] leading-relaxed overflow-auto"><code className="font-geist text-white/90">
import {"{"} Agent, Wallet, Intent {"}"} from "nova";

const wallet = Wallet.agent({"{"} safe: true, socials: ["x", "lens"] {"}"});

export const Trader = Agent.create({"{"}
  name: "pulse-trader",
  model: "omni:2025-mini",
  risk: "conservative",
  plugins: ["dex", "perps", "alerts"]
{"}"});

on("signal", async (s) ={">"} {"{"}
  const intent = Intent.limit({"{"}
    market: "SOL/USDC",
    side: "buy",
    size: "120 USDC",
    price: s.price * 0.99
  {"}"});

  await Trader.settle(intent, {"{"} wallet, slippage: "0.3%" {"}"});
{"}"});
                </code></pre>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg ring1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-bot w-4 h-4 text-fuchsia-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="16"></rect><path></path><path></path><path></path><path></path></svg>
                    Agents live
                  </div>
<p className="mt-2 text-lg font-semibold tracking-tight font-geist">342</p>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-shield-check w-4 h-4 text-cyan-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                    Fail-safes
                  </div>
<p className="mt-2 text-lg font-semibold tracking-tight font-geist">3 layers</p>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-wallet w-4 h-4 text-emerald-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                    Gas spent
                  </div>
<p className="mt-2 text-lg font-semibold tracking-tight font-geist">-72%</p>
</div>
</div>
</div>
<p className="mt-3 text-xs font-geist text-white/50">Sandbox environment. For research and testing only.</p>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="rounded-2xl border p-4 md:p-6 border-white/10 bg-white/5">
<div className="flex items-center justify-between gap-6 opacity-80">
<div className="text-xs font-geist text-white/60">Trusted by early teams from</div>
<div className="flex-1 grid grid-cols-3 sm:grid-cols-6 gap-4">
<div className="h-10 rounded-md ring-1 grid place-items-center text-sm tracking-tight font-geist bg-white/5 ring-white/10 text-white/50">VX</div>
<div className="h-10 rounded-md ring-1 grid place-items-center text-sm tracking-tight font-geist bg-white/5 ring-white/10 text-white/50">OPN</div>
<div className="h-10 rounded-md ring-1 grid place-items-center text-sm tracking-tight font-geist bg-white/5 ring-white/10 text-white/50">GLD</div>
<div className="h-10 rounded-md ring-1 grid place-items-center text-sm tracking-tight font-geist bg-white/5 ring-white/10 text-white/50">ARK</div>
<div className="h-10 rounded-md ring-1 grid place-items-center text-sm tracking-tight font-geist bg-white/5 ring-white/10 text-white/50">SYN</div>
<div className="h-10 rounded-md ring-1 grid place-items-center text-sm tracking-tight font-geist bg-white/5 ring-white/10 text-white/50">PLY</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="features">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-4xl tracking-tight font-jakarta font-medium">Ship AI-native on-chain experiences</h2>
<p className="mt-3 font-geist text-white/70">SDKs, intent settlement, and agent wallets to move value across chains with human-grade safety and sub-second finality.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="group rounded-2xl ring-1 p-6 transition bg-white/5 ring-white/10 hover:ring-blue-400/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-500/15 ring-1 ring-blue-500/30">
<svg className="lucide lucide-brain w-5 h-5 text-fuchsia-300" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Agent SDK</h3>
</div>
<p className="mt-3 text-sm font-geist text-white/70">Cohesive toolkit to build, simulate, and deploy autonomous agents with guardrails and verifiable actions.</p>
<div className="mt-4 flex items-center gap-2 text-sm font-geist text-blue-300">
              Explore SDK <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
<div className="group rounded-2xl ring-1 p-6 transition bg-white/5 ring-white/10 hover:ring-cyan-400/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-cyan-500/15 ring-1 ring-cyan-500/30">
<svg className="lucide lucide-circuit-board w-5 h-5 text-cyan-300" data-lucide="circuit-board" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><circle cx="9" cy="9"></circle><path></path><circle cx="15" cy="15"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Intent Settlement</h3>
</div>
<p className="mt-3 text-sm font-geist text-white/70">Express what you want, not how to do it. Our network compiles intents into optimal on-chain routes.</p>
<div className="mt-4 flex items-center gap-2 text-sm font-geist text-cyan-300">
              See how it works <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
<div className="group rounded-2xl ring-1 p-6 transition bg-white/5 ring-white/10 hover:ring-green-400/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-green-500/15 ring-1 ring-green-500/30">
<svg className="lucide lucide-shield w-5 h-5 text-emerald-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Safety Layers</h3>
</div>
<p className="mt-3 text-sm font-geist text-white/70">Multi-party checks, simulation firewalls, and policy controls to keep agents within risk parameters.</p>
<div className="mt-4 flex items-center gap-2 text-sm font-geist text-green-300">
              docs <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-yellow-500/15 ring-1 ring-yellow-500/30">
<svg className="lucide lucide-qr-code w-5 h-5 text-violet-300" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5"></rect><rect height="5" rx="1" width="5"></rect><rect height="5" rx="1" width="5"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Gasless UX</h3>
</div>
<p className="mt-3 text-sm font-geist text-white/70">Abstract fees and chains away. One tap to sign, all chains supported.</p>
<div className="mt-4 flex items-center gap-2 text-sm font-geist text-yellow-300">
              Try the demo <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
<div className="group rounded-2xl ring-1 p-6 transition bg-white/5 ring-white/10 hover:ring-cyan-400/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-cyan-500/15 ring-1 ring-cyan-500/30">
<svg className="lucide lucide-sparkles w-5 h-5 text-rose-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Agent Wallets</h3>
</div>
<p className="mt-3 text-sm font-geist text-white/70">Programmable custody, rate limits, and social recovery for bots and humans.</p>
<div className="mt-4 flex items-center gap-2 text-sm font-geist text-cyan-300">
              Learn more <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
<div className="group rounded-2xl ring-1 p-6 transition bg-white/5 ring-white/10 hover:ring-pink-400/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-pink-500/15 ring-1 ring-pink-500/30">
<svg className="lucide lucide-server-cog w-5 h-5 text-amber-300" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Observability</h3>
</div>
<p className="mt-3 text-sm font-geist text-white/70">Trace intents end-to-end. Replays, alerts, and model diffs built-in.</p>
<div className="mt-4 flex items-center gap-2 text-sm font-geist text-pink-300">
              View console <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
</section>

<section className="relative py-16" id="agents">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-stretch">
<div className="rounded-2xl ring-1 p-6 bg-white/5 ring-white/10">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-geist">Autonomous Trading Agents</h3>
<span className="text-xs font-geist text-white/60">Guarded Mode</span>
</div>
<p className="mt-2 text-sm font-geist text-white/70">Spin up AI traders with constraints, intent-based execution, and instant backtesting.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-xl ring-1 p-4 bg-black/40 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-activity w-4 h-4 text-emerald-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  PnL (30d)
                </div>
<p className="mt-2 text-2xl tracking-tight font-jakarta font-medium text-green-300">+8.4%</p>
<p className="text-xs font-geist text-white/40">Simulated, not financial advice</p>
</div>
<div className="rounded-xl ring-1 p-4 bg-black/40 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-timer w-4 h-4 text-cyan-300" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><circle cx="12" cy="14"></circle></svg>
                  Median latency
                </div>
<p className="mt-2 text-2xl tracking-tight font-jakarta font-medium">12ms</p>
<p className="text-xs font-geist text-white/40">Intent to route</p>
</div>
<div className="rounded-xl ring-1 p-4 bg-black/40 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-shield w-4 h-4 text-violet-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Policy hits
                </div>
<p className="mt-2 text-2xl tracking-tight font-jakarta font-medium">0.3%</p>
<p className="text-xs font-geist text-white/40">Prevented risk events</p>
</div>
<div className="rounded-xl ring-1 p-4 bg-black/40 ring-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-white/60">
<svg className="lucide lucide-layers w-4 h-4 text-rose-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                  Chains
                </div>
<p className="mt-2 text-2xl tracking-tight font-jakarta font-medium">8</p>
<p className="text-xs font-geist text-white/40">At launch</p>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="avatar 1" className="h-8 w-8 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop" />
<img alt="avatar 2" className="h-8 w-8 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=200&auto=format&fit=crop" />
<img alt="avatar 3" className="h-8 w-8 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop" />
</div>
<a className="inline-flex items-center gap-2 text-sm transition font-geist text-white/80 hover:text-white" href="#">
                See agent gallery <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
<div className="rounded-2xl ring-1 p-6 bg-white/5 ring-white/10" id="token">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-geist">Network Utilization</h3>
<span className="text-xs font-geist text-white/60">Beta metrics</span>
</div>
<p className="mt-2 text-sm font-geist text-white/70">Requests per minute and settlement throughput on our testnet cluster.</p>
<div className="mt-4">
<h4 className="text-sm font-medium font-geist text-white/80">Routed intents (last 24h)</h4>
<p className="text-xs font-geist text-white/50">Synthetic telemetry</p>
<div className="mt-2 rounded-xl ring-1 p-3 bg-black/40 ring-white/10">
<div className="relative">
<div className="rounded-lg overflow-hidden">
<div className="relative">
<div className="">
<div>
<div>
<div className="relative">
<div>
<div className="relative">
<div>
<div className="relative">
<div>
<div className="relative">
<div>
<div className="relative">
<div className="relative">
<div className="relative">

<div className="relative">
<div className="relative">
<canvas className="!h-40 !w-full" height="320" id="utilChart" style={{display: `block`, boxSizing: `border-box`, height: `160px`, width: `520px`}} width="1040"></canvas>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs font-geist text-white/60">Avg RPM</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-geist">3.1k</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs font-geist text-white/60">Peak</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-geist">7.8k</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs font-geist text-white/60">Success</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-geist text-green-300">99.96%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="rounded-2xl ring-1 p-6 md:p-10 bg-white/5 ring-white/10">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl ring-1 p-6 bg-black/40 ring-white/10">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium font-geist">Asha</p>
<p className="text-xs font-geist text-white/50">@asha.builds</p>
</div>
</div>
<p className="mt-4 text-sm font-geist text-white/80">Spun up a PnL-positive agent in an afternoon. The intent compiler is unreal.</p>
</div>
<div className="rounded-xl ring-1 p-6 bg-black/40 ring-white/10">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium font-geist">Leo</p>
<p className="text-xs font-geist text-white/50">@leoz</p>
</div>
</div>
<p className="mt-4 text-sm font-geist text-white/80">Gasless UX with policy guards is exactly what we needed for onboarding.</p>
</div>
<div className="rounded-xl ring-1 p-6 bg-black/40 ring-white/10">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium font-geist">Kai</p>
<p className="text-xs font-geist text-white/50">@kaicode</p>
</div>
</div>
<p className="mt-4 text-sm font-geist text-white/80">Observability is baked-in. Watching intents replay is addictive.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16" id="faq">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<h3 className="text-2xl md:text-3xl tracking-tight font-jakarta font-medium">Questions</h3>
<div className="mt-8 space-y-4">
<details className="group rounded-xl ring-1 p-5 bg-white/5 ring-white/10">
<summary className="flex cursor-pointer items-center justify-between list-none">
<span className="text-sm font-medium font-geist">Is this available on mainnet?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition text-white/60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</summary>
<p className="mt-3 text-sm font-geist text-white/70">We’re in closed beta on testnets. Mainnet support is rolling out chain-by-chain.</p>
</details>
<details className="group rounded-xl ring-1 p-5 bg-white/5 ring-white/10">
<summary className="flex cursor-pointer items-center justify-between list-none">
<span className="text-sm font-medium font-geist">Do I need tokens to use it?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition text-white/60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</summary>
<p className="mt-3 text-sm font-geist text-white/70">No. End-users experience gasless, abstracted flows. Devs can optionally stake for priority lanes.</p>
</details>
<details className="group rounded-xl ring-1 p-5 bg-white/5 ring-white/10">
<summary className="flex cursor-pointer items-center justify-between list-none">
<span className="text-sm font-medium font-geist">Is this financial advice?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 group-open:rotate-180 transition text-white/60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</summary>
<p className="mt-3 text-sm font-geist text-white/70">No. Everything here is experimental and for research. Do your own research and use at your own risk.</p>
</details>
</div>
</div>
</section>

<section className="relative py-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="rounded-2xl bg-gradient-to-r from-blue-500/10 via-yellow-500/10 to-cyan-500/10 ring-1 p-8 md:p-12 ring-white/10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight font-jakarta font-medium">Build the next wave of autonomous apps</h3>
<p className="mt-3 font-geist text-white/70">Join the alpha and get access to SDKs, templates, and office hours with the core team.</p>
</div>
<div className="justify-self-start md:justify-self-end">
<a className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium tracking-tight transition ring-1 font-geist bg-white text-blue-900 hover:bg-white/90 ring-white/10" href="#waitlist">
                Join the waitlist
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="border-t py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-white/10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-lg ring-1 bg-white/5 ring-white/10">
<span className="text-sm font-semibold tracking-tight font-geist text-white">N</span>
</div>
<span className="text-sm font-geist text-white/70">© 2025 NOVA Labs</span>
</div>
<div className="flex items-center gap-6 text-sm text-white/70">
<a className="transition font-geist hover:text-white" href="#">Docs</a>
<a className="transition font-geist hover:text-white" href="#">Security</a>
<a className="transition font-geist hover:text-white" href="#">Careers</a>
<a className="transition font-geist hover:text-white" href="#">Contact</a>
<div className="flex items-center gap-4">
<a className="transition hover:text-white" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg></a>
<a className="transition hover:text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></a>
<a className="transition hover:text-white" href="#"><svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg></a>
</div>
</div>
</div>
</div>
<div className="text-center pb-8">
<p className="text-[11px] font-geist text-white/40">This is a technology preview. Not an offer to sell or a solicitation to buy any asset.</p>
</div>
</footer>


    </>
  );
}
