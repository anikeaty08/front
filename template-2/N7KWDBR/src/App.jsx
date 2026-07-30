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

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      // Replace icons
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) window.lucide.createIcons();

        // Footer year
        const y = document.getElementById("year");
        if (y) y.textContent = new Date().getFullYear();

        // Chart.js: Transactions last 7 days
        const ctx = document.getElementById("txChart");
        if (ctx && window.Chart) {
          const c = ctx.getContext("2d");
          const gradient = c.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "rgba(99,102,241,0.35)");   // indigo-500
          gradient.addColorStop(1, "rgba(99,102,241,0.00)");

          new Chart(c, {
            type: "line",
            data: {
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Transactions",
                  data: [820, 1040, 960, 1240, 1410, 1320, 1530],
                  borderColor: "rgb(99, 102, 241)",
                  backgroundColor: gradient,
                  fill: true,
                  tension: 0.35,
                  borderWidth: 2,
                  pointRadius: 0,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: "rgba(226,232,240,0.6)", font: { size: 11 } },
                },
                y: {
                  grid: { color: "rgba(148,163,184,0.1)" },
                  ticks: { color: "rgba(226,232,240,0.6)", font: { size: 11 } },
                  suggestedMin: 0,
                },
              },
              plugins: {
                legend: { display: false },
                tooltip: {
                  displayColors: false,
                  backgroundColor: "rgba(2,6,23,0.9)",
                  borderColor: "rgba(255,255,255,0.08)",
                  borderWidth: 1,
                  titleColor: "#fff",
                  bodyColor: "rgba(226,232,240,0.95)",
                  padding: 10,
                },
              },
              interaction: { mode: "index", intersect: false },
            },
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
      

<header className="sticky top-0 z-40 backdrop-blur border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-content-center">
<span className="text-xs font-semibold tracking-tight text-white">IQ</span>
</div>
<span className="text-slate-100 font-medium tracking-tight group-hover:text-white transition">
            IQPay
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition" href="#methods">Methods</a>
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#developers">Developers</a>
<a className="hover:text-white transition" href="#blog">Blog</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="book-open" strokeWidth="1.5"></i>
            Docs
          </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 hover:border-white/20 transition" href="#">
<i className="h-4 w-4" data-lucide="log-in" strokeWidth="1.5"></i>
            Sign in
          </a>
<a className="hidden md:inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-3.5 py-2.5 text-sm text-white hover:bg-indigo-400 transition shadow-sm" href="#">
<i className="h-4 w-4" data-lucide="rocket" strokeWidth="1.5"></i>
            Get started
          </a>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-30">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/40 to-[#0b0f14]"></div>
</div>
<div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
<i className="h-3.5 w-3.5" data-lucide="shield-check" strokeWidth="1.5"></i>
              PCI-ready, CBI-aligned, developer-first
            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              The modern payment facilitator for Iraq
            </h1>
<p className="text-slate-300/90 leading-relaxed">
              Accept local wallets and cards with a single API. Settle in IQD or USD, handle
              reconciliation, and onboard merchants in minutes—with a stack optimized for Next.js.
            </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-white text-sm hover:bg-indigo-400 transition shadow-sm" href="#">
<i className="h-4 w-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                Create account
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white text-sm hover:bg-white/10 hover:border-white/20 transition" href="#">
<i className="h-4 w-4" data-lucide="code-2" strokeWidth="1.5"></i>
                View API docs
              </a>
<span className="inline-flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="server-cog" strokeWidth="1.5"></i>
                Next.js SDK & examples included
              </span>
</div>

<div className="pt-4" id="methods">
<p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Iraqi payment methods</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="wallet" strokeWidth="1.5"></i> ZainCash
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="wallet" strokeWidth="1.5"></i> AsiaHawala
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="credit-card" strokeWidth="1.5"></i> Qi Card
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="wallet" strokeWidth="1.5"></i> FastPay
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="wallet" strokeWidth="1.5"></i> NassPay
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="globe-2" strokeWidth="1.5"></i> Switch
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-white/20 hover:bg-white/10 transition">
<i className="h-3.5 w-3.5" data-lucide="credit-card" strokeWidth="1.5"></i> Visa / Mastercard
                </span>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-6 shadow-2xl">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs uppercase tracking-widest text-slate-400">Today</p>
<h3 className="text-lg font-semibold tracking-tight text-white">Processing overview</h3>
</div>
<div className="inline-flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="clock" strokeWidth="1.5"></i>
                  Live
                </div>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Volume</p>
<p className="text-2xl font-semibold tracking-tight text-white">IQD 87.4M</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Auth rate</p>
<p className="text-2xl font-semibold tracking-tight text-white">97.8%</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Avg fee</p>
<p className="text-2xl font-semibold tracking-tight text-white">1.75%</p>
</div>
</div>

<div className="mt-5">
<h4 className="text-sm font-medium tracking-tight text-slate-200">Transactions</h4>
<p className="text-xs text-slate-400">Last 7 days</p>
<div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="h-36">
<canvas id="txChart"></canvas>
</div>
</div>
</div>

<div className="mt-5">
<h4 className="text-sm font-medium tracking-tight text-slate-200">Recent payouts</h4>
<div className="mt-2 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.03]">
<div className="flex items-center justify-between p-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-emerald-500/10 border border-emerald-500/20 grid place-content-center">
<i className="h-4 w-4 text-emerald-400" data-lucide="banknote" strokeWidth="1.5"></i>
</span>
<div>
<p className="text-sm text-slate-200">Payout to Al-Nahrain Mart</p>
<p className="text-xs text-slate-400">AsiaHawala • T+0</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-slate-200">IQD 12,950,000</p>
<p className="text-xs text-slate-400">10:42</p>
</div>
</div>
<div className="flex items-center justify-between p-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 grid place-content-center">
<i className="h-4 w-4 text-indigo-400" data-lucide="banknote" strokeWidth="1.5"></i>
</span>
<div>
<p className="text-sm text-slate-200">Payout to Basra Electronics</p>
<p className="text-xs text-slate-400">ZainCash • T+1</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-slate-200">IQD 7,420,000</p>
<p className="text-xs text-slate-400">09:05</p>
</div>
</div>
<div className="flex items-center justify-between p-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-amber-500/10 border border-amber-500/20 grid place-content-center">
<i className="h-4 w-4 text-amber-400" data-lucide="banknote" strokeWidth="1.5"></i>
</span>
<div>
<p className="text-sm text-slate-200">Payout to Erbil Fashion</p>
<p className="text-xs text-slate-400">Qi Card • T+0</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-slate-200">IQD 4,310,000</p>
<p className="text-xs text-slate-400">Yesterday</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -right-4 hidden md:block">
<div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur px-3 py-2 text-xs text-slate-300 shadow-lg">
<i className="inline h-3.5 w-3.5 mr-1" data-lucide="shield" strokeWidth="1.5"></i>
                PCI DSS aligned • CBI compliant
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 md:py-24" id="features">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Everything to run payments at scale</h2>
<p className="text-slate-400 mt-2">Built for local rails with global-grade reliability.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
          Explore all features
        </a>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-indigo-400" data-lucide="code-2" strokeWidth="1.5"></i>
<h3 className="font-medium tracking-tight text-slate-100">First-class for Next.js</h3>
</div>
<p className="text-sm text-slate-400 mt-2">Type-safe SDK, API Routes, and Webhooks that deploy anywhere.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="wallet" strokeWidth="1.5"></i>
<h3 className="font-medium tracking-tight text-slate-100">Local wallets & cards</h3>
</div>
<p className="text-sm text-slate-400 mt-2">ZainCash, AsiaHawala, Qi Card, FastPay, NassPay, Switch, Visa, Mastercard.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-teal-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="font-medium tracking-tight text-slate-100">Compliance built-in</h3>
</div>
<p className="text-sm text-slate-400 mt-2">KYB, PCI controls, dispute tooling, and audit-ready exports.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-amber-400" data-lucide="webhook" strokeWidth="1.5"></i>
<h3 className="font-medium tracking-tight text-slate-100">Real-time webhooks</h3>
</div>
<p className="text-sm text-slate-400 mt-2">Event-driven flows for payments, payouts, and disputes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-pink-400" data-lucide="split" strokeWidth="1.5"></i>
<h3 className="font-medium tracking-tight text-slate-100">Split & route</h3>
</div>
<p className="text-sm text-slate-400 mt-2">Route by method, cost, or risk. Split to multiple sub-merchants.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-cyan-400" data-lucide="recycle" strokeWidth="1.5"></i>
<h3 className="font-medium tracking-tight text-slate-100">Reconciliation</h3>
</div>
<p className="text-sm text-slate-400 mt-2">Automated settlement reports across IQD and USD.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16" id="developers">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-8">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Ship faster with a minimal API</h3>
<p className="text-slate-400 mt-2">Drop-in endpoints, typed SDK, and ready-to-deploy examples.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                API Routes for Payments and Webhooks
              </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                Edge-friendly auth and idempotency keys
              </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                Test with a full sandbox and sample data
              </li>
</ul>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-white text-sm hover:bg-indigo-400 transition" href="#">
<i className="h-4 w-4" data-lucide="key-round" strokeWidth="1.5"></i>
                Get sandbox keys
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white text-sm hover:bg-white/10 hover:border-white/20 transition" href="#">
<i className="h-4 w-4" data-lucide="terminal" strokeWidth="1.5"></i>
                CLI install
              </a>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#0c1118] p-4 md:p-5 overflow-hidden">
<div className="flex items-center justify-between text-xs text-slate-400">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="file-code-2" strokeWidth="1.5"></i>
                example/app/api/payments/route.ts
              </span>
<span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">Next.js</span>
</div>
<pre className="mt-3 overflow-auto rounded-lg border border-white/10 bg-[#0a0f15] p-4 text-[12px] leading-6 text-slate-200">
<span className="text-slate-400">// Create a payment (server-only)</span>
export async function POST(req: Request) {"{"}
  const body = await req.json();
  const res = await fetch(process.env.IQPAY_URL + "/v1/payments", {"{"}
    method: "POST",
    headers: {"{"}
      "Authorization": "Bearer " + process.env.IQPAY_KEY,
      "Idempotency-Key": crypto.randomUUID(),
      "Content-Type": "application/json"
    {"}"},
    body: JSON.stringify({"{"}
      amount: body.amount,
      currency: "IQD",
      method: body.method, <span className="text-slate-400">// "zaincash" | "asiahawala" | "qicard" | "fastpay" | "nasspay" | "switch" | "card"</span>
      description: body.description
    {"}"})
  {"}"});
  return new Response(await res.text(), {"{"} status: res.status {"}"});
{"}"}
            </pre>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16" id="blog">
<div className="flex items-end justify-between">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">From the blog</h3>
<p className="text-slate-400 mt-2">Insights on local payments, product updates, and engineering notes.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="newspaper" strokeWidth="1.5"></i>
          View all posts
        </a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">

<article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="h-40 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10">
<img alt="" className="h-full w-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-0.5">
<i className="h-3.5 w-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
                Product
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="calendar" strokeWidth="1.5"></i>
                Jun 2, 2025
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="clock-3" strokeWidth="1.5"></i>
                4 min read
              </span>
</div>
<h4 className="mt-3 text-lg font-medium tracking-tight text-white">Launching the IQPay Sandbox</h4>
<p className="mt-2 text-sm text-slate-400">Spin up test keys, simulate local wallets, and validate webhooks in minutes.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white transition" href="#">
              Read post
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="h-40 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-indigo-500/10">
<img alt="" className="h-full w-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-0.5">
<i className="h-3.5 w-3.5" data-lucide="code-2" strokeWidth="1.5"></i>
                Engineering
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="calendar" strokeWidth="1.5"></i>
                May 24, 2025
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="clock-3" strokeWidth="1.5"></i>
                6 min read
              </span>
</div>
<h4 className="mt-3 text-lg font-medium tracking-tight text-white">Integrating ZainCash using our API</h4>
<p className="mt-2 text-sm text-slate-400">A step-by-step guide to creating charges, handling callbacks, and confirming payments.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white transition" href="#">
              Read post
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="h-40 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-pink-500/10">
<img alt="" className="h-full w-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-0.5">
<i data-lucide="lightbulb" strokeWidth="1.5"></i>
                Insights
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="calendar" strokeWidth="1.5"></i>
                May 9, 2025
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="clock-3" strokeWidth="1.5"></i>
                5 min read
              </span>
</div>
<h4 className="mt-3 text-lg font-medium tracking-tight text-white">Why local wallets matter in Iraq</h4>
<p className="mt-2 text-sm text-slate-400">Coverage, conversion, and cost advantages across ZainCash, AsiaHawala, and more.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white transition" href="#">
              Read post
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16" id="pricing">
<div className="text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Simple, transparent pricing</h3>
<p className="text-slate-400 mt-2">Start free. Scale with volume discounts and custom routing.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="sprout" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium tracking-tight text-white">Starter</h4>
</div>
<p className="mt-1 text-sm text-slate-400">For projects getting started.</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">1.95%</span>
<span className="text-slate-400 text-sm">+ 500 IQD / txn</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>All local wallets</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Basic dashboard</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Sandbox & test data</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/10 border border-white/10 px-4 py-2.5 text-sm text-white hover:bg-white/15 hover:border-white/20 transition" href="#">
            Get started
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative rounded-2xl border border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-6 ring-1 ring-inset ring-indigo-400/10 shadow-lg">
<span className="absolute -top-3 right-4 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-2 py-0.5 text-[10px] uppercase tracking-widest text-indigo-200">Popular</span>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-indigo-300" data-lucide="rocket" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium tracking-tight text-white">Growth</h4>
</div>
<p className="mt-1 text-sm text-slate-300">For scaling businesses.</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">1.6%</span>
<span className="text-slate-400 text-sm">+ 400 IQD / txn</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-300" data-lucide="check"></i>Cards + wallets + Switch</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-300" data-lucide="check"></i>Smart routing & retries</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-300" data-lucide="check"></i>Priority support</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-sm text-white hover:bg-indigo-400 transition shadow-sm" href="#">
            Start Growth
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-amber-300" data-lucide="building-2" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium tracking-tight text-white">Enterprise</h4>
</div>
<p className="mt-1 text-sm text-slate-400">Complex orgs with high volume.</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">Custom</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-amber-300" data-lucide="check"></i>Dedicated accounts & SLAs</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-amber-300" data-lucide="check"></i>On-prem/CBI alignment support</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-amber-300" data-lucide="check"></i>Volume-based discounts</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/10 border border-white/10 px-4 py-2.5 text-sm text-white hover:bg-white/15 hover:border-white/20 transition" href="#">
            Talk to sales
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24" id="faq">
<div className="text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Frequently asked questions</h3>
<p className="text-slate-400 mt-2">Everything you need to know about IQPay.</p>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-4">

<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.06] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">Which payment methods are supported?</span>
<i className="h-4 w-4 text-slate-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">
            ZainCash, AsiaHawala, Qi Card, FastPay, NassPay, Switch, Visa, and Mastercard—with more coming soon.
          </p>
</details>

<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.06] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">How fast are settlements?</span>
<i className="h-4 w-4 text-slate-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">
            Standard settlement is T+1 for most methods. Same-day (T+0) is available for qualified merchants.
          </p>
</details>

<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.06] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">Do you provide a sandbox?</span>
<i className="h-4 w-4 text-slate-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">
            Yes. Generate test keys, simulate wallet flows, and validate webhooks with realistic test data.
          </p>
</details>

<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.06] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">Is IQPay compliant with CBI and PCI?</span>
<i className="h-4 w-4 text-slate-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">
            IQPay is aligned with Central Bank of Iraq regulations and follows PCI DSS controls across our stack.
          </p>
</details>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-6 pb-24">
<div className="relative overflow-hidden rounded-2xl border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 p-6 md:p-10">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Ready to build with IQPay?</h3>
<p className="text-slate-300 mt-2">Create an account in minutes and start accepting payments today.</p>
<div className="mt-5 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-white text-sm hover:bg-indigo-400 transition shadow-sm" href="#">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Create account
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white text-sm hover:bg-white/10 hover:border-white/20 transition" href="#">
<i className="h-4 w-4" data-lucide="book-open"></i>
                Read the docs
              </a>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="h-5 w-5 text-emerald-400" data-lucide="shield-check"></i>
<span>PCI-ready and CBI-aligned from day one</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Avg auth rate</p>
<p className="text-lg font-semibold text-white">97%+</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Methods</p>
<p className="text-lg font-semibold text-white">7+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-content-center">
<span className="text-xs font-semibold tracking-tight text-white">IQ</span>
</div>
<span className="text-slate-100 font-medium tracking-tight">IQPay</span>
</a>
<p className="mt-3 text-sm text-slate-400">Modern payment facilitation for Iraq, built for developers.</p>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Product</p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition" href="#features">Features</a></li>
<li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition" href="#developers">Developers</a></li>
<li><a className="hover:text-white transition" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Resources</p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition" href="#">Docs</a></li>
<li><a className="hover:text-white transition" href="#blog">Blog</a></li>
<li><a className="hover:text-white transition" href="#">Status</a></li>
<li><a className="hover:text-white transition" href="#">Support</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Legal</p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition" href="#">Terms</a></li>
<li><a className="hover:text-white transition" href="#">Privacy</a></li>
<li><a className="hover:text-white transition" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-slate-500">© <span id="year"></span> IQPay. All rights reserved.</p>
<div className="flex items-center gap-3 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="shield"></i>
<span>PCI DSS aligned • CBI compliant</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
