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
      
      // Initialize icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Year
      document.getElementById('yearNow').textContent = new Date().getFullYear();

      // Connect modal handlers
      const modal = document.getElementById('connectModal');
      const openBtns = [document.getElementById('connectBtnTop'), document.getElementById('connectBtnHero'), document.getElementById('connectBtnCTA')].filter(Boolean);
      const closeBtn = document.getElementById('closeModal');
      openBtns.forEach(btn => btn?.addEventListener('click', () => {
        modal.classList.remove('hidden');
      }));
      closeBtn?.addEventListener('click', () => modal.classList.add('hidden'));
      modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

      // Newsletter submission
      const newsletterForm = document.getElementById('newsletterForm');
      const newsletterMsg = document.getElementById('newsletterMsg');
      newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value.trim();
        if (!email) return;
        newsletterMsg.textContent = 'Subscribed! Check your inbox.';
        newsletterMsg.classList.remove('text-[#8B94A7]');
        newsletterMsg.classList.add('text-[#52EDC7]');
        newsletterForm.reset();
        setTimeout(() => {
          newsletterMsg.textContent = '';
          newsletterMsg.classList.add('text-[#8B94A7]');
          newsletterMsg.classList.remove('text-[#52EDC7]');
        }, 3500);
      });

      // Chart.js - Portfolio chart
      const ctx = document.getElementById('portfolioChart')?.getContext('2d');
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, 'rgba(82,237,199,0.35)');
        gradient.addColorStop(1, 'rgba(82,237,199,0.00)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Assets',
              data: [112, 118, 114, 121, 128, 126, 131],
              borderColor: '#52EDC7',
              backgroundColor: gradient,
              tension: 0.35,
              fill: true,
              borderWidth: 2,
              pointRadius: 0,
              pointHitRadius: 10
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                displayColors: false,
                backgroundColor: 'rgba(11,13,19,0.95)',
                titleColor: '#ffffff',
                bodyColor: '#C9D1D9',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                padding: 10,
                callbacks: {
                  label: (ctx) => ` $${ctx.parsed.y}k`
                }
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#8B94A7', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                ticks: {
                  color: '#8B94A7',
                  font: { size: 11 },
                  callback: (v) => '$' + v + 'k'
                }
              }
            }
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
      

<div className="pointer-events-none fixed inset-0 -z-10">

<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)`, backgroundSize: `80px 80px`}}></div>

<div className="absolute -top-40 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-30" style={{background: `radial-gradient(60% 60% at 50% 50%, rgba(82,237,199,0.35), transparent 60%)`}}></div>
<div className="absolute -bottom-40 -left-40 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-25" style={{background: `radial-gradient(60% 60% at 50% 50%, rgba(160,32,240,0.35), transparent 60%)`}}></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem] rounded-full blur-2xl opacity-20 animate-spin slow motion-reduce:animate-none" style={{background: `conic-gradient(from 0deg, rgba(82,237,199,0.25), rgba(0,255,224,0.15), rgba(160,32,240,0.20), rgba(82,237,199,0.25))`, animationDuration: `24s`}}></div>

<div className="absolute inset-0">
<span className="absolute left-[12%] top-[22%] w-1.5 h-1.5 rounded-full bg-white/50 shadow-[0_0_18px_rgba(255,255,255,0.35)] animate-pulse motion-reduce:animate-none"></span>
<span className="absolute left-[68%] top-[28%] w-1 h-1 rounded-full bg-white/40 animate-ping motion-reduce:animate-none"></span>
<span className="absolute left-[78%] top-[62%] w-1.5 h-1.5 rounded-full bg-[#52EDC7]/60 shadow-[0_0_22px_rgba(82,237,199,0.45)] animate-pulse motion-reduce:animate-none"></span>
<span className="absolute left-[32%] top-[70%] w-1 h-1 rounded-full bg-[#00FFE0]/50 animate-ping motion-reduce:animate-none"></span>
<span className="absolute left-[44%] top-[38%] w-1 h-1 rounded-full bg-[#A020F0]/50 animate-pulse motion-reduce:animate-none"></span>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 pt-5">
<nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/15">
<span className="text-white text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>N</span>
</div>
<span className="text-white/90 text-lg md:text-xl font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>NEURAX</span>
</div>
<div className="hidden md:flex items-center gap-7 text-sm">
<a className="text-[#8B94A7] hover:text-white transition-colors" href="#features">Features</a>
<a className="text-[#8B94A7] hover:text-white transition-colors" href="#dashboard">Dashboard</a>
<a className="text-[#8B94A7] hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="text-[#8B94A7] hover:text-white transition-colors" href="#security">Security</a>
<a className="text-[#8B94A7] hover:text-white transition-colors" href="#docs">Docs</a>
</div>
<div className="flex items-center gap-2">
<button aria-label="Connect Wallet" className="group relative inline-flex items-center gap-2 rounded-xl bg-[#52EDC7]/90 px-4 py-2.5 text-[#0B0D13] font-medium shadow-[0_0_24px_rgba(82,237,199,0.35)] ring-1 ring-[#52EDC7]/50 hover:bg-[#52EDC7] hover:ring-[#52EDC7] transition" id="connectBtnTop">
<i className="w-4 h-4 text-[#0B0D13]" data-lucide="zap"></i>
<span>Connect Wallet</span>
<span className="pointer-events-none absolute -inset-px -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition" style={{boxShadow: `0 0 0 1px rgba(82,237,199,0.35), 0 10px 40px rgba(82,237,199,0.30), 0 0 60px rgba(82,237,199,0.25)`}}></span>
</button>
</div>
</nav>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-3"></div>
</header>

<section className="relative" id="hero">

<div className="absolute inset-0 bg-fixed">
<div className="absolute inset-0 opacity-[0.12]" style={{background: `radial-gradient(80% 60% at 60% 0%, rgba(0,255,224,0.25), transparent 60%)`}}></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12 md:pb-20 relative">
<div className="max-w-3xl">
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#8B94A7]">
<span className="h-1.5 w-1.5 rounded-full bg-[#52EDC7] shadow-[0_0_12px_rgba(82,237,199,0.6)]"></span>
            Secure. Seamless. Non-Custodial.
          </p>
<h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] tracking-tight text-white font-semibold" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>
            The Future of Multi-Chain Wallets.
          </h1>
<p className="mt-6 text-base md:text-lg text-[#C9D1D9]/90 max-w-2xl">
            Manage, swap, and secure your assets across chains in one interface.
          </p>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<button className="group relative inline-flex items-center gap-2 rounded-xl bg-[#52EDC7]/90 px-5 py-3 text-[#0B0D13] font-medium shadow-[0_0_30px_rgba(82,237,199,0.35)] ring-1 ring-[#52EDC7]/50 hover:bg-[#52EDC7] hover:ring-[#52EDC7] transition" id="connectBtnHero">
<i className="w-5 h-5 text-[#0B0D13]" data-lucide="zap"></i>
              Connect Wallet
              <span className="pointer-events-none absolute -inset-px -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition" style={{boxShadow: `0 0 0 1px rgba(82,237,199,0.45), 0 16px 60px rgba(82,237,199,0.35), 0 0 80px rgba(82,237,199,0.3)`}}></span>
</button>
<a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white/90 ring-1 ring-white/15 hover:ring-white/30 bg-white/5 hover:bg-white/10 transition" href="#features">
<i className="w-5 h-5 text-white/80" data-lucide="play"></i>
              Learn More
            </a>
</div>
<div className="mt-10 flex flex-wrap items-center gap-2">
<span className="text-xs uppercase tracking-widest text-[#8B94A7]">Your Multi-Chain Gateway.</span>
</div>
</div>

<div className="mt-14">
<div className="flex items-center gap-2 mb-4">
<i className="w-4 h-4 text-white/70" data-lucide="layers"></i>
<span className="text-sm text-[#8B94A7]">Supported Chains & Integrations</span>
</div>
<div className="flex flex-wrap gap-3">

<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-[#52EDC7] hover:border-[#52EDC7]/40 transition">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span> Ethereum
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-[#A020F0] hover:border-[#A020F0]/40 transition">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span> Polygon
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-[#00FFE0] hover:border-[#00FFE0]/40 transition">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span> BSC
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-[#52EDC7] hover:border-[#52EDC7]/40 transition">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span> Avalanche
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-[#A020F0] hover:border-[#A020F0]/40 transition">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span> Arbitrum
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:text-[#00FFE0] hover:border-[#00FFE0]/40 transition">
<span className="h-1.5 w-1.5 rounded-full bg-white/50"></span> Optimism
            </span>
</div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
<div className="mb-8 flex items-center gap-2">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="sparkles"></i>
<h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>
            Built for performance and control
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:translate-y-[-2px] transition hover:border-[#52EDC7]/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="network"></i>
</div>
<h3 className="text-white font-medium">Multi-Chain Access</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Seamless cross-chain swaps.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:translate-y-[-2px] transition hover:border-[#52EDC7]/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="shield-check"></i>
</div>
<h3 className="text-white font-medium">Secure & Audited</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Multi-sig, verified smart contracts.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:translate-y-[-2px] transition hover:border-[#52EDC7]/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="key-round"></i>
</div>
<h3 className="text-white font-medium">Non-Custodial</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Your keys, your assets.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:translate-y-[-2px] transition hover:border-[#52EDC7]/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="fingerprint"></i>
</div>
<h3 className="text-white font-medium">Privacy Layer</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">zk-proofs for secure transactions.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:translate-y-[-2px] transition hover:border-[#52EDC7]/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="activity"></i>
</div>
<h3 className="text-white font-medium">Real-Time Analytics</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Live gas fees & slippage alerts.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:translate-y-[-2px] transition hover:border-[#52EDC7]/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="plug-2"></i>
</div>
<h3 className="text-white font-medium">Integration Ready</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Connect DeFi & Web3 apps easily.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="dashboard">
<div className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<span className="text-xs text-[#8B94A7]">Total Assets</span>
<i className="w-4 h-4 text-white/70" data-lucide="wallet"></i>
</div>
<div className="mt-2 text-2xl text-white tracking-tight" style={{fontFamily: `'JetBrains Mono', monospace`}}>
                $128,420.12
              </div>
<div className="mt-1 text-xs text-[#52EDC7]">+2.8% today</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<span className="text-xs text-[#8B94A7]">Chains Connected</span>
<i className="w-4 h-4 text-white/70" data-lucide="link"></i>
</div>
<div className="mt-2 text-2xl text-white tracking-tight" style={{fontFamily: `'JetBrains Mono', monospace`}}>
                7
              </div>
<div className="mt-1 text-xs text-[#C9D1D9]/70">EVM-first, expanding</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<span className="text-xs text-[#8B94A7]">Active Wallets</span>
<i className="w-4 h-4 text-white/70" data-lucide="users"></i>
</div>
<div className="mt-2 text-2xl text-white tracking-tight" style={{fontFamily: `'JetBrains Mono', monospace`}}>
                12,439
              </div>
<div className="mt-1 text-xs text-[#C9D1D9]/70">24h rolling</div>
</div>
</div>

<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-white font-medium">Portfolio Performance</h3>
<p className="text-xs text-[#8B94A7]">Last 7 days · Real-time</p>
</div>
<div className="flex items-center gap-2">
<button className="text-xs rounded-lg px-2 py-1.5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 transition">7D</button>
<button className="text-xs rounded-lg px-2 py-1.5 ring-1 ring-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition">1M</button>
<button className="text-xs rounded-lg px-2 py-1.5 ring-1 ring-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition">1Y</button>
</div>
</div>
<div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
<div className="h-48 md:h-64 rounded-lg bg-black/20 ring-1 ring-white/5 p-2">
<div className="h-full w-full">
<div className="h-full w-full relative">
<div className="absolute inset-0 rounded-md opacity-10" style={{background: `radial-gradient(60% 60% at 30% 20%, rgba(82,237,199,0.5), transparent 60%)`}}></div>
<div className="h-full w-full"><canvas id="portfolioChart"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="roadmap">
<div className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
<div className="mb-8 flex items-center gap-2">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="route"></i>
<h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>
            Roadmap
          </h2>
</div>
<div className="relative">
<div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/10"></div>
<div className="space-y-6">

<div className="relative pl-12 sm:pl-16">
<div className="absolute left-2.5 sm:left-4 top-1.5 h-4 w-4 rounded-full bg-[#0B0D13] ring-2 ring-[#52EDC7] shadow-[0_0_20px_rgba(82,237,199,0.35)]"></div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<h3 className="text-white font-medium">Q3 2025</h3>
<span className="text-xs text-[#8B94A7]">In progress</span>
</div>
<p className="text-sm text-[#C9D1D9]/90 mt-1">Launch NEURAX Wallet + Audit</p>
</div>
</div>

<div className="relative pl-12 sm:pl-16">
<div className="absolute left-2.5 sm:left-4 top-1.5 h-4 w-4 rounded-full bg-[#0B0D13] ring-2 ring-[#00FFE0] shadow-[0_0_20px_rgba(0,255,224,0.35)]"></div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<h3 className="text-white font-medium">Q4 2025</h3>
<span className="text-xs text-[#8B94A7]">Planned</span>
</div>
<p className="text-sm text-[#C9D1D9]/90 mt-1">Multi-chain bridge + Governance Beta</p>
</div>
</div>

<div className="relative pl-12 sm:pl-16">
<div className="absolute left-2.5 sm:left-4 top-1.5 h-4 w-4 rounded-full bg-[#0B0D13] ring-2 ring-[#A020F0] shadow-[0_0_20px_rgba(160,32,240,0.35)]"></div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<h3 className="text-white font-medium">Q1 2026</h3>
<span className="text-xs text-[#8B94A7]">Planned</span>
</div>
<p className="text-sm text-[#C9D1D9]/90 mt-1">Mobile App + Advanced Privacy Layer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="security">
<div className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
<div className="mb-8 flex items-center gap-2">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="lock"></i>
<h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>
            Security & Trust
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="shield"></i>
</div>
<h3 className="text-white font-medium">Audits</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Independent code audits and continuous monitoring.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">Audit Partner A</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">Audit Partner B</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="bug"></i>
</div>
<h3 className="text-white font-medium">Bug Bounty</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Responsible disclosure and rewards for vulnerabilities.</p>
<a className="mt-3 inline-flex items-center gap-2 text-xs text-[#52EDC7] hover:text-white transition" href="#">
              Program Details
              <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
<i className="w-4.5 h-4.5 text-[#52EDC7]" data-lucide="key-square"></i>
</div>
<h3 className="text-white font-medium">Multi-Sig Policies</h3>
</div>
<p className="mt-3 text-sm text-[#8B94A7]">Operational security with distributed signers and policy thresholds.</p>
<ul className="mt-3 text-xs text-[#C9D1D9]/80 list-disc pl-5 space-y-1">
<li>Role-based approvals</li>
<li>Timelocked upgrades</li>
<li>On-chain transparency</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-25" style={{background: `radial-gradient(60% 60% at 50% 50%, rgba(0,255,224,0.4), transparent 60%)`}}></div>
<div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20" style={{background: `radial-gradient(60% 60% at 50% 50%, rgba(160,32,240,0.4), transparent 60%)`}}></div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-2xl md:text-3xl text-white font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>
                Experience the new standard of Web3 wallets.
              </h3>
<p className="mt-2 text-sm text-[#8B94A7]">Secure, seamless, and cross-chain by design.</p>
</div>
<button className="group relative inline-flex items-center gap-2 rounded-xl bg-[#52EDC7]/90 px-5 py-3 text-[#0B0D13] font-medium shadow-[0_0_30px_rgba(82,237,199,0.35)] ring-1 ring-[#52EDC7]/50 hover:bg-[#52EDC7] hover:ring-[#52EDC7] transition" id="connectBtnCTA">
<i className="w-5 h-5 text-[#0B0D13]" data-lucide="zap"></i>
              Connect Wallet
              <span className="pointer-events-none absolute -inset-px -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition" style={{boxShadow: `0 0 0 1px rgba(82,237,199,0.45), 0 16px 60px rgba(82,237,199,0.35), 0 0 80px rgba(82,237,199,0.3)`}}></span>
</button>
</div>
</div>
</div>
</section>

<footer className="relative" id="docs">
<div className="mx-auto max-w-7xl px-6 pb-10">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/15">
<span className="text-white text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>N</span>
</div>
<div className="flex flex-col">
<span className="text-white/90 text-lg font-semibold tracking-tight" style={{fontFamily: `Poppins, Inter, system-ui, sans-serif`}}>NEURAX</span>
<span className="text-xs text-[#8B94A7]">Your Multi-Chain Gateway.</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="text-sm text-[#8B94A7] hover:text-white transition" href="#">Docs</a>
<a className="text-sm text-[#8B94A7] hover:text-white transition" href="#">Terms</a>
<a className="text-sm text-[#8B94A7] hover:text-white transition" href="#">Privacy</a>
<a className="text-sm text-[#8B94A7] hover:text-white transition" href="#">Careers</a>
<a className="text-sm text-[#8B94A7] hover:text-white transition" href="#">Community</a>
</div>
<form className="w-full md:w-auto" id="newsletterForm">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5">
<div className="px-2">
<i className="w-4.5 h-4.5 text-white/70" data-lucide="mail"></i>
</div>
<input className="w-full md:w-64 bg-transparent text-sm text-white placeholder:text-[#8B94A7] focus:outline-none" id="newsletterEmail" placeholder="Email for updates" required type="email" />
<button className="rounded-lg bg-white/10 hover:bg-white/15 text-xs px-3 py-2 text-white transition" type="submit">
                  Subscribe
                </button>
</div>
<p className="mt-2 text-xs text-[#8B94A7]" id="newsletterMsg"></p>
</form>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-4 flex items-center justify-between text-xs text-[#8B94A7]">
<span>© <span id="yearNow"></span> NEURAX. All rights reserved.</span>
<span className="flex items-center gap-3">
<i className="w-4 h-4 text-white/50" data-lucide="cpu"></i>
              Multi-chain by default
            </span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="connectModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 flex items-end md:items-center justify-center p-4">
<div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
<div className="flex items-center justify-between">
<h3 className="text-white font-medium">Connect Wallet</h3>
<button className="text-white/60 hover:text-white transition" id="closeModal">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<p className="mt-1 text-xs text-[#8B94A7]">Choose a method to connect. You remain in control.</p>
<div className="mt-4 space-y-3">
<button className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-3">
<span className="flex items-center gap-3">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="wallet"></i>
<span className="text-sm text-white">Browser Wallet</span>
</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-right"></i>
</button>
<button className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-3">
<span className="flex items-center gap-3">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="qr-code"></i>
<span className="text-sm text-white">WalletConnect</span>
</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-right"></i>
</button>
<button className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-3">
<span className="flex items-center gap-3">
<i className="w-5 h-5 text-[#52EDC7]" data-lucide="usb"></i>
<span className="text-sm text-white">Hardware Wallet</span>
</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-4 text-[11px] text-[#8B94A7]">
            By connecting, you agree to the Terms and Privacy Policy.
          </div>
</div>
</div>
</div>



    </>
  );
}
