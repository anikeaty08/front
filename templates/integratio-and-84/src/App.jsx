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



      // Initialize lucide icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Search and category filter
      const searchInput = document.getElementById('searchInput');
      const filterButtons = document.querySelectorAll('.filter-btn');
      const cards = Array.from(document.querySelectorAll('.integration-card'));
      let activeCategory = 'all';

      function applyFilters() {
        const q = (searchInput?.value || '').toLowerCase().trim();
        cards.forEach(card => {
          const name = (card.dataset.name || '').toLowerCase();
          const cat = (card.dataset.category || '').toLowerCase();
          const matchesSearch = !q || name.includes(q);
          const matchesCat = activeCategory === 'all' || cat === activeCategory;
          card.style.display = (matchesSearch && matchesCat) ? '' : 'none';
        });
      }

      searchInput?.addEventListener('input', applyFilters);
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          activeCategory = btn.dataset.category || 'all';
          filterButtons.forEach(b => {
            if (b === btn) {
              b.classList.remove('bg-white/[0.04]', 'text-white/80');
              b.classList.add('bg-white', 'text-black', 'font-medium');
            } else {
              b.classList.remove('bg-white', 'text-black', 'font-medium');
              b.classList.add('bg-white/[0.04]', 'text-white/80');
            }
          });
          applyFilters();
        });
      });

      // Copy API key and snippet
      const copyKeyBtn = document.getElementById('copyKeyBtn');
      copyKeyBtn?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText('sk_live_xxx');
          copyKeyBtn.innerHTML = '<i data-lucide="check" class="h-4 w-4"></i> Copied';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          setTimeout(() => {
            copyKeyBtn.innerHTML = '<i data-lucide="key" class="h-4 w-4"></i> Copy API key';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }, 1500);
        } catch {}
      });

      const copySnippetBtn = document.getElementById('copySnippetBtn');
      copySnippetBtn?.addEventListener('click', async () => {
        const code = document.getElementById('snippet')?.innerText || '';
        try {
          await navigator.clipboard.writeText(code);
          copySnippetBtn.innerHTML = '<i data-lucide="check" class="h-3.5 w-3.5"></i> Copied';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          setTimeout(() => {
            copySnippetBtn.innerHTML = '<i data-lucide="copy" class="h-3.5 w-3.5"></i> Copy';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }, 1500);
        } catch {}
      });

      // Charts
      const primaryGrid = { color: 'rgba(255,255,255,0.08)', lineWidth: 1 };
      function makeGradient(ctx, color1, color2) {
        const g = ctx.createLinearGradient(0, 0, 0, 160);
        g.addColorStop(0, color1);
        g.addColorStop(1, color2);
        return g;
      }

      const heroCtx = document.getElementById('heroChart')?.getContext('2d');
      if (heroCtx) {
        new Chart(heroCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 30 }, (_, i) => i),
            datasets: [{
              label: 'events/min',
              data: Array.from({ length: 30 }, () => Math.round(30 + Math.random() * 40)),
              borderColor: '#60a5fa',
              borderWidth: 2,
              tension: 0.35,
              fill: true,
              pointRadius: 0,
              backgroundColor: makeGradient(heroCtx, 'rgba(96,165,250,0.32)', 'rgba(96,165,250,0.0)')
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            }
          }
        });
      }

      const volumeCtx = document.getElementById('volumeChart')?.getContext('2d');
      if (volumeCtx) {
        new Chart(volumeCtx, {
          type: 'bar',
          data: {
            labels: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'],
            datasets: [
              {
                label: 'Delivered',
                data: [420, 530, 610, 700, 820, 910, 960, 1000, 940, 880, 760, 650],
                backgroundColor: 'rgba(16,185,129,0.6)',
                borderRadius: 6,
                barThickness: 10
              },
              {
                label: 'Failed',
                data: [10, 12, 9, 15, 17, 11, 9, 8, 12, 14, 13, 11],
                backgroundColor: 'rgba(244,63,94,0.5)',
                borderRadius: 6,
                barThickness: 10
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
            scales: {
              x: {
                grid: { color: primaryGrid.color, lineWidth: primaryGrid.lineWidth },
                ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 } }
              },
              y: {
                grid: { color: primaryGrid.color, lineWidth: primaryGrid.lineWidth },
                ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 } }
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[conic-gradient(at_top_left,_#60a5fa_0%,_#a78bfa_40%,_transparent_60%)] blur-3xl opacity-[0.20]"></div>
<div className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-[conic-gradient(at_bottom_right,_#34d399_0%,_#06b6d4_35%,_transparent_60%)] blur-3xl opacity-[0.18]"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,_rgba(99,102,241,0.18),_transparent_65%)]"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 grid place-items-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10 text-white">
<span className="text-[11px] tracking-tight font-semibold">LL</span>
</div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-sm font-medium text-white/80">LightLink</span>
<span className="text-white/20">/</span>
<span className="text-sm text-white/60">Integrations</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#workflows">Workflows</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#developers">Developers</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#webhooks">Webhooks</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white/5 hover:bg-white/[0.07] ring-1 ring-inset ring-white/10 px-3 py-1.5 text-sm text-white/80 transition-colors">
<i className="h-4 w-4" data-lucide="search"></i>
<span>Search</span>
<span className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/60">⌘K</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium hover:opacity-90 active:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Get started</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>New: OAuth 2.1 + Fine-grained scopes</span>
</div>
<h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Connect everything. <span className="text-white/70">Automate</span> anywhere.
            </h1>
<p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl">
              LightLink unifies your tools into a single integration layer with secure auth, resilient webhooks, and composable workflows.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition" href="#integrations">
<i className="h-4 w-4" data-lucide="plug"></i>
                Explore integrations
              </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 hover:bg-white/[0.07] ring-1 ring-inset ring-white/10 px-4 py-2 text-sm text-white/80 transition" href="#developers">
<i className="h-4 w-4" data-lucide="code-2"></i>
                Get API key
              </a>
<div className="hidden sm:flex items-center gap-2 pl-2 text-xs text-white/50">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                SOC 2 Type II · SSO/SAML · EU data residency
              </div>
</div>

<div className="mt-10 flex items-center gap-6 text-white/40">
<div className="text-xs">Trusted by teams at</div>
<div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
<div className="flex items-center gap-4">
<div className="rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/[0.03] text-[11px] font-medium tracking-tight">NOVA</div>
<div className="rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/[0.03] text-[11px] font-medium tracking-tight">AURUM</div>
<div className="rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/[0.03] text-[11px] font-medium tracking-tight">OSIRIS</div>
<div className="rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/[0.03] text-[11px] font-medium tracking-tight">PLOVER</div>
</div>
</div>
</div>
<div className="lg:col-span-5">

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/80">Recent events</div>
<div className="flex items-center gap-2 text-xs text-white/50">
<i className="h-4 w-4" data-lucide="wifi"></i>
                  Realtime
                </div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2 ring-1 ring-white/10">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<div className="flex-1">
<div className="text-sm text-white/80">stripe.payment_succeeded</div>
<div className="text-xs text-white/50">acct_2JX... • 2s ago</div>
</div>
<span className="rounded-md bg-emerald-400/10 text-emerald-300 px-2 py-0.5 text-[11px] ring-1 ring-emerald-400/20">200</span>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2 ring-1 ring-white/10">
<div className="h-2 w-2 rounded-full bg-sky-400"></div>
<div className="flex-1">
<div className="text-sm text-white/80">github.push</div>
<div className="text-xs text-white/50">org/main • 14s ago</div>
</div>
<span className="rounded-md bg-sky-400/10 text-sky-300 px-2 py-0.5 text-[11px] ring-1 ring-sky-400/20">202</span>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2 ring-1 ring-white/10">
<div className="h-2 w-2 rounded-full bg-violet-400"></div>
<div className="flex-1">
<div className="text-sm text-white/80">notion.page.updated</div>
<div className="text-xs text-white/50">workspace • 1m ago</div>
</div>
<span className="rounded-md bg-violet-400/10 text-violet-300 px-2 py-0.5 text-[11px] ring-1 ring-violet-400/20">200</span>
</div>
</div>
<div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white/80">Event rate</div>
<div className="text-xs text-white/50">Last 60 minutes</div>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md bg-white/[0.04] ring-1 ring-white/10 text-white/70 hover:text-white hover:bg-white/[0.06]">Live</button>
<button className="text-xs px-2 py-1 rounded-md bg-transparent ring-1 ring-white/10 text-white/50 hover:text-white/70">Hourly</button>
</div>
</div>
<div className="mt-3">
<div className="h-32 rounded-lg bg-white/[0.02] ring-1 ring-white/10 p-2">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full"><div className="h-full"><canvas className="h-full w-full" id="heroChart"></canvas></div></div>
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
</div>

<div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Connected</div>
<div className="text-xl font-semibold tracking-tight">48</div>
</div>
<div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Events/min</div>
<div className="text-xl font-semibold tracking-tight">1.2k</div>
</div>
<div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Avg latency</div>
<div className="text-xl font-semibold tracking-tight">132ms</div>
</div>
<div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Retries</div>
<div className="text-xl font-semibold tracking-tight">0.17%</div>
</div>
<div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Regions</div>
<div className="text-xl font-semibold tracking-tight">7</div>
</div>
<div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Uptime</div>
<div className="text-xl font-semibold tracking-tight">99.99%</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Integrations</h2>
<p className="mt-1 text-white/60 text-sm">Install, configure, and monitor your connections.</p>
</div>
<div className="flex-1 sm:flex-none flex items-center gap-3">
<div className="relative flex-1 sm:w-80">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" data-lucide="search"></i>
<input className="w-full rounded-md bg-white/[0.04] ring-1 ring-inset ring-white/10 pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-white/20 transition" id="searchInput" placeholder="Search integrations"/>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="filter-btn rounded-md bg-white text-black px-3 py-2 text-xs font-medium hover:opacity-90" data-category="all">All</button>
<button className="filter-btn rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/[0.06]" data-category="productivity">Productivity</button>
<button className="filter-btn rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/[0.06]" data-category="devtools">DevTools</button>
<button className="filter-btn rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/[0.06]" data-category="payments">Payments</button>
<button className="filter-btn rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/[0.06]" data-category="data">Data</button>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="integrationsGrid">

<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="productivity" data-name="Slack">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/30 text-emerald-300">
<span className="text-sm font-semibold">S</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Slack</div>
<span className="text-[11px] rounded-md bg-emerald-400/10 text-emerald-300 px-2 py-0.5 ring-1 ring-emerald-400/20">Connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Sync channels, users, and send bot messages.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="key-round"></i> OAuth 2.0
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Manage</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Logs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="devtools" data-name="GitHub">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-sky-400/10 ring-1 ring-sky-400/30 text-sky-300">
<span className="text-sm font-semibold">GH</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">GitHub</div>
<span className="text-[11px] rounded-md bg-white/5 text-white/60 px-2 py-0.5 ring-1 ring-white/10">Not connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Webhooks for pushes, PRs, reviews, and more.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="globe"></i> App install
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Connect</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Docs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="productivity" data-name="Notion">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-violet-400/10 ring-1 ring-violet-400/30 text-violet-300">
<span className="text-sm font-semibold">N</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Notion</div>
<span className="text-[11px] rounded-md bg-white/5 text-white/60 px-2 py-0.5 ring-1 ring-white/10">Not connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Sync databases and pages, trigger workflows.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="key-square"></i> OAuth 2.0
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Connect</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Docs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="devtools" data-name="Jira">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-indigo-400/10 ring-1 ring-indigo-400/30 text-indigo-300">
<span className="text-sm font-semibold">J</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Jira</div>
<span className="text-[11px] rounded-md bg-emerald-400/10 text-emerald-300 px-2 py-0.5 ring-1 ring-emerald-400/20">Connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Issues, sprints, automations, and comments.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="key-round"></i> OAuth 2.0
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Manage</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Logs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="productivity" data-name="Salesforce">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-sky-300/10 ring-1 ring-sky-300/30 text-sky-200">
<span className="text-sm font-semibold">SF</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Salesforce</div>
<span className="text-[11px] rounded-md bg-white/5 text-white/60 px-2 py-0.5 ring-1 ring-white/10">Not connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Accounts, contacts, opportunities, and events.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="key"></i> OAuth + JWT
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Connect</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Docs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="payments" data-name="Stripe">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/30 text-emerald-300">
<span className="text-sm font-semibold">St</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Stripe</div>
<span className="text-[11px] rounded-md bg-emerald-400/10 text-emerald-300 px-2 py-0.5 ring-1 ring-emerald-400/20">Connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Payments, invoices, subscriptions, and webhooks.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="lock"></i> Restricted keys
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Manage</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Logs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="data" data-name="Amazon S3">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/30 text-amber-300">
<span className="text-sm font-semibold">S3</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Amazon S3</div>
<span className="text-[11px] rounded-md bg-white/5 text-white/60 px-2 py-0.5 ring-1 ring-white/10">Not connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Buckets, lifecycle rules, signed URLs, and events.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="shield"></i> Access keys
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Connect</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Docs</button>
</div>
</div>
</div>
<div className="integration-card group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="data" data-name="Segment">
<div className="p-4 flex items-start gap-3">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-fuchsia-400/10 ring-1 ring-fuchsia-400/30 text-fuchsia-300">
<span className="text-sm font-semibold">Se</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-white/90">Segment</div>
<span className="text-[11px] rounded-md bg-emerald-400/10 text-emerald-300 px-2 py-0.5 ring-1 ring-emerald-400/20">Connected</span>
</div>
<p className="mt-1 text-xs text-white/60">Sources, destinations, and transformations.</p>
</div>
</div>
<div className="px-4 pb-4 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5" data-lucide="nodes"></i> Token auth
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-2.5 py-1.5 text-xs font-medium hover:opacity-90">Manage</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">Logs</button>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between">
<div className="text-xs text-white/50">Showing 8 of 120 integrations</div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/80 hover:bg-white/[0.06] flex items-center gap-1">
<i className="h-4 w-4" data-lucide="chevron-left"></i> Prev
            </button>
<button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-medium hover:opacity-90 flex items-center gap-1">
              Next <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="relative mt-24" id="workflows">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Composable workflows</h3>
<p className="mt-2 text-sm text-white/60 max-w-xl">
              Orchestrate cross-tool automations with retries, branches, and human-in-the-loop steps. Build from templates or craft your own.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-start gap-3"><i className="h-4 w-4 text-white/60 mt-0.5" data-lucide="workflow"></i><span>Visual builder with typed inputs/outputs</span></li>
<li className="flex items-start gap-3"><i className="h-4 w-4 text-white/60 mt-0.5" data-lucide="clock-4"></i><span>Scheduled runs, cron, and on-demand triggers</span></li>
<li className="flex items-start gap-3"><i className="h-4 w-4 text-white/60 mt-0.5" data-lucide="shield-check"></i><span>Isolation, secrets vault, and audit trail</span></li>
</ul>
<div className="mt-6 flex items-center gap-3">
<button className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90">Open builder</button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]">Templates</button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="text-sm font-medium text-white/80">Workflow preview</div>
<div className="mt-4 grid grid-cols-3 gap-4">
<div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60">Trigger</div>
<div className="mt-2 flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30 text-emerald-300">GH</div>
<div>
<div className="text-sm text-white/80">GitHub push</div>
<div className="text-[11px] text-white/50">main branch</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60">Action</div>
<div className="mt-2 flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-lg bg-sky-400/10 ring-1 ring-sky-400/30 text-sky-300">J</div>
<div>
<div className="text-sm text-white/80">Create Jira</div>
<div className="text-[11px] text-white/50">Bug template</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60">Notify</div>
<div className="mt-2 flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-lg bg-violet-400/10 ring-1 ring-violet-400/30 text-violet-300">S</div>
<div>
<div className="text-sm text-white/80">Slack alert</div>
<div className="text-[11px] text-white/50">#incidents</div>
</div>
</div>
</div>
</div>
<div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60">Run log</div>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80"><i className="h-3.5 w-3.5" data-lucide="play"></i> Started</div>
<div className="text-white/50">09:11:03</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80"><i className="h-3.5 w-3.5" data-lucide="git-commit"></i> Pushed c1a2b3</div>
<div className="text-white/50">09:11:05</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80"><i className="h-3.5 w-3.5 text-emerald-400" data-lucide="check-circle-2"></i> Jira created</div>
<div className="text-white/50">09:11:07</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80"><i className="h-3.5 w-3.5" data-lucide="send"></i> Slack sent</div>
<div className="text-white/50">09:11:07</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-24" id="developers">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div className="max-w-xl">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Built for developers</h3>
<p className="mt-2 text-sm text-white/60">
                Securely authenticate, subscribe to webhooks, and use our SDKs. Strong typing, idempotency, and exhaustive docs included.
              </p>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium hover:opacity-90" id="copyKeyBtn">
<i className="h-4 w-4" data-lucide="key"></i> Copy API key
                </button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-sm text-white/80 hover:bg-white/[0.06]">
<i className="h-4 w-4" data-lucide="book"></i> Docs
                </button>
</div>
<div className="mt-3 text-xs text-white/50">Keys are scoped and can be rotated without downtime.</div>
</div>
<div className="flex-1 w-full">
<div className="rounded-xl bg-black/30 ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<span className="h-2 w-2 rounded-full bg-rose-400/80"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/80"></span>
<span className="ml-2 text-white/50">curl</span>
</div>
<button className="text-xs rounded-md bg-white/[0.04] ring-1 ring-white/10 px-2 py-1 text-white/70 hover:bg-white/[0.06] inline-flex items-center gap-1" id="copySnippetBtn">
<i className="h-3.5 w-3.5" data-lucide="copy"></i> Copy
                  </button>
</div>
<pre className="p-4 text-[12px] leading-5 text-white/80 overflow-auto"><code id="snippet">curl https://api.lightlink.dev/v1/events \
  -H "Authorization: Bearer sk_live_xxx" \
  -H "Idempotency-Key: req_{{uuid}}" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "user.created",
    "data": { "id": "u_123", "email": "user@example.com" }
  }'</code></pre>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">SDKs</div>
<div className="mt-1 text-sm text-white/80 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="hexagon"></i> TypeScript · Python · Go
                  </div>
</div>
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Auth</div>
<div className="mt-1 text-sm text-white/80 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="lock-keyhole"></i> OAuth 2.1 · SSO
                  </div>
</div>
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Reliability</div>
<div className="mt-1 text-sm text-white/80 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="life-buoy"></i> Retries · DLQ · Replay
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-24 mb-24" id="webhooks">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div>
<h4 className="text-xl font-semibold tracking-tight text-white">Webhook deliveries</h4>
<p className="text-sm text-white/60">Observe, retry, and replay failed events.</p>
</div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-medium hover:opacity-90">
<i className="h-3.5 w-3.5" data-lucide="refresh-ccw"></i> Replay all
                </button>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">
<i className="h-3.5 w-3.5" data-lucide="filter"></i> Filter
                </button>
</div>
</div>
<div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 text-[11px] text-white/50 px-3 py-2 border-b border-white/10">
<div className="col-span-4">Event</div>
<div className="col-span-3">Destination</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Latency</div>
<div className="col-span-1 text-right">Code</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 items-center px-3 py-2 text-sm hover:bg-white/[0.03] transition">
<div className="col-span-4 text-white/80 flex items-center gap-2"><i className="h-4 w-4 text-emerald-300" data-lucide="credit-card"></i> stripe.payment_succeeded</div>
<div className="col-span-3 text-white/60">https://api.example.com/webhooks/stripe</div>
<div className="col-span-2">
<span className="text-[11px] rounded-md bg-emerald-400/10 text-emerald-300 px-2 py-0.5 ring-1 ring-emerald-400/20">Delivered</span>
</div>
<div className="col-span-2 text-white/60">118ms</div>
<div className="col-span-1 text-right text-white/60">200</div>
</div>
<div className="grid grid-cols-12 items-center px-3 py-2 text-sm hover:bg-white/[0.03] transition">
<div className="col-span-4 text-white/80 flex items-center gap-2"><i className="h-4 w-4 text-sky-300" data-lucide="git-branch"></i> github.push</div>
<div className="col-span-3 text-white/60">https://api.example.com/webhooks/gh</div>
<div className="col-span-2">
<span className="text-[11px] rounded-md bg-rose-400/10 text-rose-300 px-2 py-0.5 ring-1 ring-rose-400/20">Failed</span>
</div>
<div className="col-span-2 text-white/60">412ms</div>
<div className="col-span-1 text-right text-white/60">500</div>
</div>
<div className="grid grid-cols-12 items-center px-3 py-2 text-sm hover:bg-white/[0.03] transition">
<div className="col-span-4 text-white/80 flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-300" data-lucide="database"></i> segment.track</div>
<div className="col-span-3 text-white/60">https://api.example.com/webhooks/segment</div>
<div className="col-span-2">
<span className="text-[11px] rounded-md bg-amber-400/10 text-amber-300 px-2 py-0.5 ring-1 ring-amber-400/20">Retrying</span>
</div>
<div className="col-span-2 text-white/60">298ms</div>
<div className="col-span-1 text-right text-white/60">429</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div>
<h4 className="text-xl font-semibold tracking-tight text-white">Event volume</h4>
<p className="text-sm text-white/60">Today</p>
</div>
<button className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/80 hover:bg-white/[0.06]">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Export
              </button>
</div>
<div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
<div className="h-40 rounded-lg bg-white/[0.02] ring-1 ring-white/10 p-2">
<div className="h-full"><canvas className="h-full w-full" id="volumeChart"></canvas></div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Delivered</div>
<div className="text-lg font-semibold tracking-tight">94.2%</div>
</div>
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Retries</div>
<div className="text-lg font-semibold tracking-tight">3.6%</div>
</div>
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-3">
<div className="text-[11px] text-white/50">Failures</div>
<div className="text-lg font-semibold tracking-tight">2.2%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 grid place-items-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10 text-white">
<span className="text-[11px] tracking-tight font-semibold">LL</span>
</div>
<div className="text-sm text-white/70">LightLink</div>
</div>
<p className="mt-3 text-sm text-white/60 max-w-sm">The integration layer for modern teams. Secure, reliable, and a joy to build with.</p>
</div>
<div className="text-sm">
<div className="text-white/60">Product</div>
<div className="mt-2 flex flex-col gap-1 text-white/70">
<a className="hover:text-white transition" href="#integrations">Integrations</a>
<a className="hover:text-white transition" href="#workflows">Workflows</a>
<a className="hover:text-white transition" href="#developers">Developers</a>
<a className="hover:text-white transition" href="#webhooks">Webhooks</a>
</div>
</div>
<div className="text-sm">
<div className="text-white/60">Company</div>
<div className="mt-2 flex flex-col gap-1 text-white/70">
<a className="hover:text-white transition" href="#">Changelog</a>
<a className="hover:text-white transition" href="#">Status</a>
<a className="hover:text-white transition" href="#">Security</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
</div>
</div>
<div className="mt-8 text-xs text-white/40">© 2025 LightLink. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
