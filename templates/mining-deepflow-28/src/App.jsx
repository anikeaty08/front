import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.getElementById('year-span').textContent = new Date().getFullYear();

    const icons = {
      'icon-bell': 'bell',
      'icon-activity': 'activity',
      'icon-activity-2': 'activity',
      'icon-users': 'users',
      'icon-shield': 'shield',
      'icon-rocket': 'rocket',
      'icon-terminal': 'terminal',
      'icon-coin': 'coins',
      'icon-cpu': 'cpu',
      'icon-settings': 'settings',
      'icon-sliders': 'sliders',
      'icon-star': 'star',
      'icon-arrow-right': 'arrow-right',
      'icon-check-circle': 'check-circle'
    };

    document.addEventListener('DOMContentLoaded', function () {
      if (!window.lucide) return;
      for (const [id, name] of Object.entries(icons)) {
        const el = document.getElementById(id);
        if (el) {
          const iconNode = window.lucide.createIconsFromTags
            ? null
            : window.lucide[name.charAt(0).toUpperCase() + name.slice(1)];
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }
      // Fallback simple render
      window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<div className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_65%)] opacity-75 blur-3xl"></div>

<div className="relative flex-1 flex flex-col">

<header className="w-full border-b border-slate-800/70 bg-slate-950/60 backdrop-blur-xl">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center ring-2 ring-sky-400/50 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
<span className="text-xs font-semibold tracking-tight text-slate-950">MD</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight leading-none">
                Mining Deepflow
              </span>
<span className="text-xs text-slate-400 leading-tight">
                AI-optimized crypto mining
              </span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-sky-300 transition-colors" href="#dashboard">
              Dashboard
            </a>
<a className="text-slate-300 hover:text-sky-300 transition-colors" href="#plans">
              Plans
            </a>
<a className="text-slate-300 hover:text-sky-300 transition-colors" href="#network">
              Network
            </a>
<a className="text-slate-300 hover:text-sky-300 transition-colors" href="#faq">
              FAQ
            </a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-sky-500/70 hover:text-sky-100 transition-colors">
<span className="inline-flex" id="icon-bell"></span>
<span>Status</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"></span>
</button>
<button className="rounded-full border border-sky-400/80 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 tracking-tight shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:brightness-110 transition-all">
              Launch Miner
            </button>
</div>
</div>
</header>

<main className="flex-1 w-full">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">

<section className="grid lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-sky-200 shadow-[0_0_32px_rgba(56,189,248,0.4)]">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span>Live</span>
<span className="text-slate-400">Hashrate marketplace v2.1</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                  Mining Deepflow: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">streaming performance</span> from every GPU.
                </h1>
<p className="text-base sm:text-lg text-slate-300/90 max-w-xl">
                  Plug into an AI-tuned mining engine that benchmarks, routes and rebalances your hashrate in real time. No configs, no guesswork — just continuous flow.
                </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 sm:p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Network hashrate</span>
<span className="inline-flex text-sky-300" id="icon-activity"></span>
</div>
<div className="text-lg sm:text-xl font-semibold tracking-tight text-sky-100">
                    142.7 TH/s
                  </div>
<div className="text-[0.7rem] text-emerald-400 mt-1">
                    +4.2% last 24h
                  </div>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 sm:p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Active miners</span>
<span className="inline-flex text-cyan-300" id="icon-users"></span>
</div>
<div className="text-lg sm:text-xl font-semibold tracking-tight text-sky-100">
                    9,384
                  </div>
<div className="text-[0.7rem] text-slate-400 mt-1">
                    312 new today
                  </div>
</div>
<div className="hidden sm:block rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 sm:p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Payout reliability</span>
<span className="inline-flex text-emerald-300" id="icon-shield"></span>
</div>
<div className="text-lg sm:text-xl font-semibold tracking-tight text-sky-100">
                    99.97%
                  </div>
<div className="text-[0.7rem] text-slate-400 mt-1">
                    730d rolling uptime
                  </div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500/90 hover:bg-sky-400 text-xs font-semibold tracking-tight text-slate-950 px-4 sm:px-5 py-2.5 shadow-[0_0_45px_rgba(56,189,248,0.9)] transition-colors">
<span className="inline-flex" id="icon-rocket"></span>
<span>Start mining in 60 seconds</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 text-xs font-medium text-slate-200 px-4 py-2.5 hover:border-sky-400/80 hover:text-sky-100 transition-colors">
<span className="inline-flex" id="icon-terminal"></span>
<span>View CLI setup</span>
</button>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-slate-900 bg-gradient-to-tr from-sky-500 to-cyan-300"></div>
<div className="h-6 w-6 rounded-full border border-slate-900 bg-gradient-to-tr from-fuchsia-500 to-sky-400"></div>
<div className="h-6 w-6 rounded-full border border-slate-900 bg-gradient-to-tr from-emerald-400 to-cyan-200"></div>
</div>
<span>
                    Trusted by <span className="text-sky-200">9k+</span> GPU &amp; ASIC operators.
                  </span>
</div>
</div>
</div>

<div className="relative" id="dashboard">
<div className="absolute -inset-x-8 -inset-y-6 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] blur-3xl opacity-80"></div>
<div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl shadow-[0_0_80px_rgba(15,23,42,0.9)] overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-5 pt-4 sm:pt-5 pb-3 border-b border-slate-800/70">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(34,197,94,0.9)]"></span>
<span className="text-xs font-medium text-slate-200">
                        Deepflow Rig #24
                      </span>
</div>
<p className="text-xs text-slate-400">
                      8× RTX 4090 · EU-West · Auto-switching
                    </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200 hover:border-sky-400/80 transition-colors">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Running</span>
</button>
</div>

<div className="grid gap-4 sm:gap-5 p-4 sm:p-5">

<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-[0.7rem] text-slate-400">Current hashrate</span>
<span className="inline-flex text-sky-300" id="icon-activity-2"></span>
</div>
<div className="text-lg font-semibold tracking-tight text-sky-100">
                        5.42 GH/s
                      </div>
<div className="flex items-center gap-1 mt-1">
<span className="text-[0.65rem] text-emerald-400">+0.18 GH/s</span>
<span className="text-[0.65rem] text-slate-500">/ 15 min</span>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
<div className="flex items-center justify-between mb-1.5">
<span className="text-[0.7rem] text-slate-400">Pool balance</span>
<span className="inline-flex text-amber-300" id="icon-coin"></span>
</div>
<div className="text-lg font-semibold tracking-tight text-amber-200">
                        0.0384 ETH
                      </div>
<div className="text-[0.65rem] text-slate-500 mt-1">
                        Next payout in 02:17:24
                      </div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-3 sm:p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span className="text-xs text-slate-300">Hashrate (GH/s)</span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<button className="px-2 py-0.5 rounded-full border border-slate-700/80 bg-slate-900/80 text-sky-200">
                          24h
                        </button>
<button className="px-2 py-0.5 rounded-full border border-transparent hover:border-slate-700/80">
                          7d
                        </button>
<button className="px-2 py-0.5 rounded-full border border-transparent hover:border-slate-700/80">
                          30d
                        </button>
</div>
</div>
<div className="relative h-28 sm:h-32">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_60%)] opacity-60"></div>
<div className="absolute inset-2 flex flex-col justify-between">
<div className="border-t border-slate-800/70"></div>
<div className="border-t border-slate-800/50"></div>
<div className="border-t border-slate-800/30"></div>
</div>
<svg className="relative w-full h-full" preserveaspectratio="none" viewbox="0 0 200 80">
<defs>
<lineargradient id="deepflowLine" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#38bdf8"></stop>
<stop offset="50%" stop-color="#22c55e"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
<lineargradient id="deepflowFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(56,189,248,0.45)"></stop>
<stop offset="100%" stop-color="rgba(15,23,42,0)"></stop>
</lineargradient>
</defs>
<path d="M0 60 C 25 50, 35 20, 60 30 C 80 38, 95 18, 120 26 C 145 34, 150 10, 175 20 C 190 26, 200 18, 200 18" fill="none" stroke="url(#deepflowLine)" strokeWidth="2"></path>
<path d="M0 80 L0 60 C 25 50, 35 20, 60 30 C 80 38, 95 18, 120 26 C 145 34, 150 10, 175 20 C 190 26, 200 18, 200 18 L200 80 Z" fill="url(#deepflowFill)"></path>
</svg>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-[0.75rem]">
<div className="flex items-center gap-2 text-slate-300">
<span className="inline-flex text-sky-300" id="icon-cpu"></span>
<span>AI optimizer routing to the top 3 pools every 90s.</span>
</div>
<div className="flex-1 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-slate-400">
<span className="inline-flex h-1.5 w-10 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400"></span>
<span>Deepflow mode</span>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[0.7rem] text-slate-200 hover:border-sky-400/80 transition-colors">
<span className="inline-flex" id="icon-settings"></span>
<span>Tuning</span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 right-4 sm:right-8">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 border border-slate-700/80 px-3 py-1 text-[0.65rem] text-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Simulated view of your first rig</span>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="plans">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Scale your hashrate with Deepflow tiers.
                </h2>
<p className="text-base text-slate-300 max-w-2xl">
                  From a single gaming rig to full-scale farms — Deepflow continuously profiles, prices, and routes your power to the most profitable workloads.
                </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-xs text-slate-200 hover:border-sky-400/80 hover:text-sky-100 transition-colors">
<span className="inline-flex" id="icon-sliders"></span>
<span>Compare all tiers</span>
</button>
</div>
<div className="grid lg:grid-cols-3 gap-4 sm:gap-5">

<div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                      Solo Starter
                    </h3>
<p className="text-xs text-slate-400">
                      Up to 2 GPUs · ideal for desktops
                    </p>
</div>
<span className="text-xs text-sky-300 border border-sky-500/50 rounded-full px-2 py-0.5 bg-slate-900/80">
                    0% pool fee
                  </span>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-50">
                    Free
                  </div>
<div className="text-xs text-slate-500">
                    Lifetime · pay only network fees
                  </div>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Real-time auto-tuning per GPU.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Single-wallet unified payouts.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span>Email-based alerts.</span>
</li>
</ul>
<button className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-200 text-slate-950 text-xs font-semibold tracking-tight px-4 py-2 hover:bg-white transition-colors">
                  Start solo rig
                </button>
</div>

<div className="relative rounded-3xl border border-sky-500/70 bg-gradient-to-b from-sky-900/50 via-slate-950 to-slate-950 p-4 sm:p-5 flex flex-col gap-4 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
<div className="absolute -top-3 right-5">
<div className="inline-flex items-center gap-1 rounded-full bg-sky-500 text-slate-950 text-[0.65rem] font-semibold tracking-tight px-2.5 py-0.5 shadow-[0_0_28px_rgba(56,189,248,0.9)]">
<span className="inline-flex" id="icon-star"></span>
<span>Most used</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                      Deepflow Pro
                    </h3>
<p className="text-xs text-slate-200">
                      Up to 32 GPUs or 10 ASICs
                    </p>
</div>
<span className="text-xs text-sky-200 border border-sky-400/80 rounded-full px-2 py-0.5 bg-slate-950/80">
                    AI routing unlocked
                  </span>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-sky-100">
                    1.5% of revenue
                  </div>
<div className="text-xs text-slate-400">
                    No fixed fees · cancel anytime
                  </div>
</div>
<ul className="space-y-2 text-sm text-slate-100">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Deepflow AI routes between top-performing chains and pools every block.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300"></span>
<span>Fleet templates &amp; configuration cloning across rigs.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
<span>Priority payouts, sub-accounts, and API access.</span>
</li>
</ul>
<button className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 text-slate-950 text-xs font-semibold tracking-tight px-4 py-2 shadow-[0_0_40px_rgba(56,189,248,0.9)] hover:bg-sky-400 transition-colors">
<span>Upgrade to Deepflow</span>
<span className="inline-flex" id="icon-arrow-right"></span>
</button>
</div>

<div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                      Farm &amp; Grid
                    </h3>
<p className="text-xs text-slate-400">
                      100+ GPUs or enterprise setups
                    </p>
</div>
<span className="text-xs text-amber-300 border border-amber-400/60 rounded-full px-2 py-0.5 bg-slate-900/80">
                    Custom
                  </span>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-50">
                    Contact sales
                  </div>
<div className="text-xs text-slate-500">
                    Volume pricing · white-glove onboarding
                  </div>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Power-aware routing across datacenters.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>On-premise or hybrid Deepflow controller.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
<span>Dedicated support line &amp; SLO-backed uptime.</span>
</li>
</ul>
<button className="mt-1 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xs text-slate-200 px-4 py-2 hover:border-sky-400/80 hover:text-sky-100 transition-colors">
                  Talk to our team
                </button>
</div>
</div>
</section>

<section className="rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-5 lg:p-6 flex flex-col gap-4" id="network">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  One command to join the Deepflow network.
                </h3>
<p className="text-base text-slate-300 max-w-2xl">
                  Install the agent, paste your wallet, and watch your rig show up on the live topology map in under a minute.
                </p>
</div>
<div className="flex items-center gap-3 text-[0.75rem] text-slate-400">
<div className="flex items-center gap-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>EU</span>
</div>
<div className="flex items-center gap-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>NA</span>
</div>
<div className="flex items-center gap-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>APAC</span>
</div>
<span className="text-sky-200">12 global gateways</span>
</div>
</div>
<div className="grid lg:grid-cols-[2fr,1.2fr] gap-4 sm:gap-5">

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-3 sm:p-4 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="ml-2 text-slate-300">deepflow.sh</span>
</div>
<span className="hidden sm:inline">bash · v2.1</span>
</div>
<div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-3 sm:p-4 font-mono text-xs text-slate-200 space-y-2 overflow-x-auto">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-500">
<span># Install Deepflow agent on Linux</span>
</div>
<div className="whitespace-nowrap">
                    curl -sL install.miningdeepflow.io | bash
                  </div>
<div className="whitespace-nowrap">
                    deepflow attach --wallet 0xYOURWALLET --name "Rig-01"
                  </div>
<div className="flex items-center gap-2 pt-1 text-[0.7rem] text-emerald-400">
<span className="inline-flex" id="icon-check-circle"></span>
<span>Rig visible in dashboard in ~45 seconds.</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_55%)] p-3 sm:p-4 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Deepflow topology snapshot</span>
<span className="text-slate-400">Updated 12s ago</span>
</div>
<div className="relative flex-1 min-h-[8rem] sm:min-h-[9rem]">
<div className="absolute inset-0 rounded-xl border border-slate-700/60 bg-slate-950/60 overflow-hidden">
<div className="absolute inset-0 opacity-60">
<div className="absolute inset-6 border border-dashed border-slate-700/80 rounded-2xl"></div>
<div className="absolute inset-x-10 inset-y-4 border border-dashed border-slate-800/70 rounded-2xl"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative h-16 w-16 rounded-full bg-slate-900/90 border border-sky-500/80 shadow-[0_0_45px_rgba(56,189,248,0.9)] flex items-center justify-center">
<span className="h-6 w-6 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-400 flex items-center justify-center">
<span className="text-[0.7rem] font-semibold tracking-tight text-slate-950">DF</span>
</span>
<div className="absolute -bottom-3 text-[0.6rem] text-sky-100">
                          Core router
                        </div>
</div>
</div>

<div className="absolute inset-0">
<div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]"></div>
<div className="absolute right-[22%] top-[30%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]"></div>
<div className="absolute left-[22%] bottom-[30%] h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,0.9)]"></div>
<div className="absolute right-[18%] bottom-[26%] h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 200 120">
<defs>
<lineargradient id="topologyLine" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.5"></stop>
<stop offset="50%" stop-color="#22c55e" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="#a855f7" stop-opacity="0.5"></stop>
</lineargradient>
</defs>
<path d="M40 30 Q 100 55 160 35" fill="none" stroke="url(#topologyLine)" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M40 90 Q 100 60 160 85" fill="none" stroke="url(#topologyLine)" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M55 60 Q 100 55 145 60" fill="none" stroke="rgba(148,163,184,0.6)" stroke-dasharray="3 3" strokeWidth="0.8"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<span>Avg. route latency: <span className="text-emerald-400">18 ms</span></span>
<span>Orphans: <span className="text-sky-200">0.12%</span></span>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-6 lg:gap-10" id="faq">
<div className="space-y-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-50">
                Built for miners who care about every watt.
              </h3>
<p className="text-base text-slate-300">
                Mining Deepflow continuously learns from thousands of GPUs and ASICs, feeding optimal configs back into your rigs. You keep full control — Deepflow just handles the grind.
              </p>
<div className="space-y-3">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 sm:p-4">
<div className="flex items-center justify-between gap-2">
<div>
<h4 className="text-sm font-medium text-slate-100">
                        Do I need to reconfigure my existing rigs?
                      </h4>
<p className="text-sm text-slate-400 mt-1">
                        No. Install the agent side-by-side with your current stack. Deepflow gradually takes over routing; you can roll back instantly.
                      </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-3 sm:p-4">
<div className="flex items-center justify-between gap-2">
<div>
<h4 className="text-sm font-medium text-slate-100">
                        Which chains and pools are supported?
                      </h4>
<p className="text-sm text-slate-400 mt-1">
                        Ethereum-family, Bitcoin, and the top GPU-friendly chains. New pools are evaluated and added automatically as profitability shifts.
                      </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-3 sm:p-4">
<div className="flex items-center justify-between gap-2">
<div>
<h4 className="text-sm font-medium text-slate-100">
                        How does Mining Deepflow get paid?
                      </h4>
<p className="text-sm text-slate-400 mt-1">
                        For Pro and Farm tiers, a small percentage of mined rewards is routed to the protocol wallet at payout time. No lock-ins, no hidden fees.
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-800/80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_65%),_linear-gradient(to_bottom,_#020617,_#020617)] p-4 sm:p-5 flex flex-col gap-4">
<div className="space-y-2">
<h4 className="text-lg font-semibold tracking-tight text-slate-50">
                  Ready to drop into Deepflow?
                </h4>
<p className="text-base text-slate-300">
                  Share your email and we’ll send you your personalized onboarding script based on your hardware.
                </p>
</div>
<form className="space-y-3">
<div className="space-y-1.5">
<label className="text-xs text-slate-300">Email</label>
<div className="flex flex-col sm:flex-row gap-2">
<input className="flex-1 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" placeholder="you@rigfarm.io" type="email"/>
<button className="rounded-xl bg-sky-500 text-slate-950 text-xs font-semibold tracking-tight px-4 py-2 hover:bg-sky-400 transition-colors" type="submit">
                      Get script
                    </button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-300">Hardware profile (optional)</label>
<select className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
<option>Mixed GPUs (NVIDIA / AMD)</option>
<option>RTX 30/40 series only</option>
<option>ASIC-heavy farm</option>
<option>Single gaming PC</option>
</select>
</div>
<p className="text-[0.7rem] text-slate-500">
                  No spam. We send one email with your script and tuning tips for Mining Deepflow — nothing else.
                </p>
</form>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-900/80 bg-slate-950/80">
<div className="max-w-6xl mx-auto py-4 sm:py-5 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-semibold tracking-tight text-slate-200">Mining Deepflow</span>
<span>·</span>
<span>© <span id="year-span"></span></span>
</div>
<div className="flex items-center gap-4 text-[0.7rem] text-slate-400">
<a className="hover:text-sky-300 transition-colors" href="#">Status</a>
<a className="hover:text-sky-300 transition-colors" href="#">Docs</a>
<a className="hover:text-sky-300 transition-colors" href="#">Terms</a>
<a className="hover:text-sky-300 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>
</div>
</div>


    </>
  );
}
