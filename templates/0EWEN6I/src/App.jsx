import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize icons with consistent stroke width
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // EPS chart with confidence band
        const ctx = document.getElementById('epsChart');
        if (ctx) {
          const estimateColor = 'rgba(58,134,255,1)';   // brand-500
          const bandFill = 'rgba(58,134,255,0.24)';
          const streetColor = 'rgba(34,211,197,1)';     // accent-2

          new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
              labels: ['-6w', '-5w', '-4w', '-3w', '-2w', '-1w', 'Now'],
              datasets: [
                {
                  label: 'Confidence Band',
                  data: [1.33, 1.34, 1.35, 1.37, 1.38, 1.40, 1.41],
                  tension: 0.35,
                  borderColor: 'transparent',
                  backgroundColor: bandFill,
                  fill: {
                    target: { value: 1.33 }
                  },
                  pointRadius: 0
                },
                {
                  label: 'AI Street Estimate',
                  data: [1.36, 1.36, 1.37, 1.38, 1.39, 1.40, 1.41],
                  tension: 0.35,
                  borderColor: estimateColor,
                  backgroundColor: estimateColor,
                  pointRadius: 0,
                  borderWidth: 2
                },
                {
                  label: 'Human Street',
                  data: [1.34, 1.35, 1.35, 1.36, 1.37, 1.37, 1.37],
                  tension: 0.35,
                  borderColor: streetColor,
                  backgroundColor: streetColor,
                  pointRadius: 0,
                  borderDash: [4,3],
                  borderWidth: 2
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  enabled: true,
                  backgroundColor: 'rgba(19,26,33,.92)',
                  borderColor: 'rgba(255,255,255,.08)',
                  borderWidth: 1,
                  titleColor: '#E6EEF8',
                  bodyColor: '#ACB8C7',
                  padding: 10,
                  displayColors: false
                }
              },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,.06)' },
                  ticks: { color: '#ACB8C7', font: { size: 11 } }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,.06)' },
                  ticks: { color: '#ACB8C7', font: { size: 11 } },
                  suggestedMin: 1.3,
                  suggestedMax: 1.45
                }
              },
              elements: { line: { cubicInterpolationMode: 'monotone' } }
            }
          });
        }

        // Embed sparkline
        const s = document.getElementById('embedSpark');
        if (s) {
          const c = s.getContext('2d');
          new Chart(c, {
            type: 'line',
            data: {
              labels: Array.from({length: 30}, (_, i) => i),
              datasets: [
                {
                  data: [4.7,4.76,4.8,4.82,4.79,4.85,4.9,4.92,4.95,4.97,5.0,4.98,5.02,5.05,5.08,5.06,5.09,5.1,5.12,5.11,5.13,5.15,5.16,5.14,5.12,5.13,5.14,5.15,5.16,5.17],
                  borderColor: 'rgba(58,134,255,1)',
                  backgroundColor: 'rgba(58,134,255,0.24)',
                  fill: true,
                  tension: 0.35,
                  pointRadius: 0,
                  borderWidth: 2
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: {
                x: { display: false },
                y: { display: false, suggestedMin: 4.6, suggestedMax: 5.2 }
              }
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[.07]" style="background-image:
           linear-gradient(var(--grid-major) 1px, transparent 1px),
           linear-gradient(90deg, var(--grid-major) 1px, transparent 1px);
           background-size: 80px 80px, 80px 80px;"></div>
<div className="absolute inset-0 opacity-[.04]" style="background-image:
           linear-gradient(var(--grid-minor) 1px, transparent 1px),
           linear-gradient(90deg, var(--grid-minor) 1px, transparent 1px);
           background-size: 16px 16px, 16px 16px;"></div>
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(58,134,255,.24), transparent 65%)'}}></div>
<div className="absolute top-40 -left-20 w-[700px] h-[700px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(34,211,197,.20), transparent 60%)'}}></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[80px] opacity-20" style={{background: 'conic-gradient(from 90deg at 50% 50%, #1E6BFF 0%, #3A86FF 45%, #22D3C5 100%)'}}></div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[18%] left-[14%] w-2.5 h-2.5 rounded-full bg-[var(--accent-2)] shadow-[0_0_20px_rgba(34,211,197,.6)]"></div>
<div className="absolute top-[30%] left-[42%] w-2.5 h-2.5 rounded-full bg-[var(--brand-500)] shadow-[0_0_20px_rgba(58,134,255,.6)]"></div>
<div className="absolute top-[52%] left-[26%] w-2.5 h-2.5 rounded-full bg-[var(--accent-3)] shadow-[0_0_20px_rgba(139,92,246,.6)]"></div>
<div className="absolute top-[64%] left-[58%] w-2.5 h-2.5 rounded-full bg-[var(--brand-500)] shadow-[0_0_20px_rgba(58,134,255,.6)]"></div>
<div className="absolute top-[36%] left-[72%] w-2.5 h-2.5 rounded-full bg-[var(--accent-2)] shadow-[0_0_20px_rgba(34,211,197,.6)]"></div>

<div className="absolute top-[19%] left-[14%] w-[30%] h-px bg-cyan-300/20"></div>
<div className="absolute top-[31%] left-[42%] w-[20%] h-px bg-blue-300/20"></div>
<div className="absolute top-[52%] left-[26%] w-[35%] h-px bg-violet-300/20"></div>
<div className="absolute top-[64%] left-[34%] w-[24%] h-px bg-cyan-300/20"></div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-[color:var(--glass)]/70 border-b border-[var(--divider)]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="h-7 w-7 rounded-md bg-[var(--brand-500)] text-[var(--bg-0)] grid place-items-center shadow-[0_0_24px_rgba(58,134,255,.25)] font-semibold tracking-tight">PS</div>
<span className="text-[17px] sm:text-[18px] font-semibold tracking-tight text-[var(--text-1)]">PredictStreet</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-[14.5px]">
<a className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors" href="#why">Why</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors" href="#what">What You Get</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors" href="#how">How It Works</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors" href="#api">API &amp; Embeds</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors" href="#pricing">Pricing</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden sm:flex items-center gap-3">
<a className="px-4 py-2 rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] hover:text-white hover:shadow-[0_0_24px_rgba(58,134,255,.18)] transition-all duration-200 ease-[cubic-bezier(.22,.61,.36,1)]" href="#demo">Try the Demo</a>
<a className="px-4 py-2 rounded-lg bg-[var(--brand-500)] text-[var(--bg-0)] hover:bg-[var(--brand-400)] hover:shadow-[0_0_32px_rgba(58,134,255,.25)] transition-all duration-200 ease-[cubic-bezier(.22,.61,.36,1)]" href="#api">Get API Access</a>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-[var(--divider)] p-2 text-[var(--text-2)] hover:text-[var(--text-1)] hover:border-[var(--brand-400)] transition">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
              PredictStreet — The AI Street for Earnings &amp; Ratings
            </h1>
<p className="mt-5 text-[15.5px] leading-relaxed text-[var(--text-2)]">
              Turn a swarm of specialist AI analysts into fast, explainable earnings estimates and clear “AI Analyst Ratings.”
              Get the signal sooner — with confidence bands, scenarios, and the why behind every call.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="px-5 py-3 rounded-xl bg-[var(--brand-500)] text-[var(--bg-0)] hover:bg-[var(--brand-400)] hover:shadow-[0_0_32px_rgba(58,134,255,.28)] transition-all duration-200 ease-[cubic-bezier(.22,.61,.36,1)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--bg-0)]" href="#demo">
                Try the Demo
              </a>
<a className="px-5 py-3 rounded-xl bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] hover:text-white transition-all duration-200 ease-[cubic-bezier(.22,.61,.36,1)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--bg-0)]" href="#api">
                Get API Access
              </a>
</div>
<div className="mt-8 flex items-center gap-3 text-[13px] text-[var(--text-3)]">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Transparent by design. Confidence bands on every call.</span>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,.55)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(0,0,0,.55)] transition-all">
<div className="p-5 sm:p-6 border-b border-[var(--divider)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[var(--bg-2)] border border-[var(--divider)] grid place-items-center text-[var(--text-2)]">
<i className="w-5 h-5" data-lucide="line-chart"></i>
</div>
<div>
<p className="text-sm text-[var(--text-3)]">AI Street Consensus</p>
<h3 className="text-lg font-semibold tracking-tight text-white">AAPL · Q3 EPS</h3>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-md text-[12px] font-medium bg-[var(--success)] text-[var(--bg-0)]">Buy</span>
<span className="px-2 py-1 rounded-md text-[12px] font-medium bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-2)]">Conviction: 0.78</span>
</div>
</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Point Estimate</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">$1.41</p>
<p className="mt-1 text-[12.5px] text-[var(--text-2)]">95% Band: $1.33 – $1.48</p>
</div>
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Surprise vs Street</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">+3.2%</p>
<p className="mt-1 text-[12.5px] text-[var(--text-2)]">Radar: Diverging</p>
</div>
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Next Refresh</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">Live</p>
<div className="mt-1 flex items-center gap-1 text-[12px] text-[var(--text-2)]">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-500)] animate-ping"></span>
                      streaming
                    </div>
</div>
</div>

<div className="mt-6 rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<div className="w-full">
<canvas className="w-full h-36" id="epsChart"></canvas>
</div>
<div className="mt-3 flex flex-wrap items-center gap-3 text-[12.5px] text-[var(--text-3)]">
<span className="inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-[var(--brand-500)]"></span> Estimate
                    </span>
<span className="inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-[var(--accent-2)]"></span> Street
                    </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="waves"></i> Confidence band
                    </span>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Base Case</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">$1.41</p>
</div>
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Bull</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-[var(--accent-2)]">$1.48</p>
</div>
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Bear</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-[#FF6B6B]">$1.33</p>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-2">
<span className="text-[12px] text-[var(--text-3)]">Drivers:</span>
<span className="px-2.5 py-1 rounded-full bg-[color:var(--bg-3)] border border-[var(--divider)] text-[12px] text-[var(--text-2)] hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(58,134,255,.12)] transition">iPhone mix</span>
<span className="px-2.5 py-1 rounded-full bg-[color:var(--bg-3)] border border-[var(--divider)] text-[12px] text-[var(--text-2)]">Gross margin</span>
<span className="px-2.5 py-1 rounded-full bg-[color:var(--bg-3)] border border-[var(--divider)] text-[12px] text-[var(--text-2)]">FX tailwinds</span>
</div>
</div>
</div>
<p className="mt-3 text-[12.5px] text-[var(--text-3)]">Illustrative data for demo.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="why">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Why PredictStreet</h2>
<p className="mt-3 text-[15.5px] text-[var(--text-2)]">Built to be faster, explainable, and production-ready.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-5 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(58,134,255,.18)] transition">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="zap"></i>
<h3 className="mt-3 text-[17px] font-semibold tracking-tight text-white">Faster than human coverage.</h3>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Always-on models refresh with every filing, headline, and macro print.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-5 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(58,134,255,.18)] transition">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="book-open-check"></i>
<h3 className="mt-3 text-[17px] font-semibold tracking-tight text-white">Explainable by design.</h3>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">See drivers, assumptions, and plain-English rationale — not just a score.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-5 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(58,134,255,.18)] transition">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="handshake"></i>
<h3 className="mt-3 text-[17px] font-semibold tracking-tight text-white">Consensus you can trust.</h3>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Our ensemble reconciles multiple expert bots into an AI Street Consensus, benchmarked against Wall Street.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-5 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(58,134,255,.18)] transition">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="server"></i>
<h3 className="mt-3 text-[17px] font-semibold tracking-tight text-white">Production-ready.</h3>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Embeddable widgets and a simple API power apps, terminals, and media sites.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="what">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">What You Get</h2>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="activity"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Earnings Estimates</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Point forecast + confidence interval, updated in real time.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="badge-check"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">AI Analyst Ratings</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Buy/Hold/Sell with conviction level and key catalysts.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="git-branch"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Scenario Paths</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Base/bull/bear with sensitivity to margins, pricing, and volumes.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="box"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Driver Cards</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Filings, transcripts, news, and alternative data the models relied on.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="radar"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Surprise Radar</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Flags where our AI Street Consensus diverges from human consensus.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="bell"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Alerts</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Instant updates on estimate revisions and rating changes.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">How It Works</h2>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="bot"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Specialist Bots</h3>
</div>
<p className="mt-3 text-[14.5px] text-[var(--text-2)]">Fundamental, NLP (filings/transcripts/news), macro, and quant factor models each produce a view.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="layers"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Ensemble &amp; Reconciliation</h3>
</div>
<p className="mt-3 text-[14.5px] text-[var(--text-2)]">We weight, cross-validate, and fuse those views into a single AI Street Consensus with uncertainty bands.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="search-check"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Transparency Layer</h3>
</div>
<p className="mt-3 text-[14.5px] text-[var(--text-2)]">Every output ships with sources, reasoning highlights, and backtests — so you can audit the call.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="workflow">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Built for Your Workflow</h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="trending-up"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Investors &amp; PMs</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Expand coverage, spot estimate drift early, and pressure-test theses with scenario tools.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="newspaper"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Media &amp; Data Publishers</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Drop-in Embeds for ticker pages and articles: Ratings, Estimates, and Surprise Radar.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="smartphone"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Brokerages &amp; Fintech Apps</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Enrich research tabs with real-time AI insights via a clean, rate-limited API.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="api">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">API &amp; Embeds</h2>
<p className="mt-3 text-[15.5px] text-[var(--text-2)]">Simple endpoints. Lightweight embeds. Built for production.</p>
<div className="mt-6 rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-5">
<div className="flex items-center gap-2 text-[13px] text-[var(--text-3)]">
<i className="w-4 h-4" data-lucide="terminal"></i> REST API
              </div>
<div className="mt-3 grid sm:grid-cols-2 gap-3 text-[13.5px]">
<div className="rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] p-3">GET /estimates</div>
<div className="rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] p-3">GET /ratings</div>
<div className="rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] p-3">GET /scenarios</div>
<div className="rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] p-3">GET /drivers</div>
<div className="rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] p-3">GET /alerts</div>
</div>
<div className="mt-4 flex flex-wrap items-center gap-3">
<span className="px-2.5 py-1 rounded-md text-[12px] bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-2)]">Embeddable Widgets</span>
<span className="px-2.5 py-1 rounded-md text-[12px] bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-2)]">SLAs &amp; Logging</span>
</div>
<div className="mt-5 flex flex-wrap gap-3">
<a className="px-4 py-2 rounded-lg bg-[var(--brand-500)] text-[var(--bg-0)] hover:bg-[var(--brand-400)] hover:shadow-[0_0_28px_rgba(58,134,255,.25)] transition" href="#docs">View API Docs</a>
<a className="px-4 py-2 rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] transition" href="#embeds">See Embeds</a>
</div>
</div>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="layout-dashboard"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Embed Preview · Rating + Estimate</h3>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Ticker</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">NVDA</p>
<span className="mt-2 inline-flex w-fit px-2 py-1 rounded-md text-[12px] font-medium bg-[var(--success)] text-[var(--bg-0)]">Buy</span>
</div>
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">Conviction</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">0.82</p>
<p className="mt-1 text-[12px] text-[var(--text-2)]">With drivers</p>
</div>
<div className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<p className="text-[12px] text-[var(--text-3)]">EPS Next</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">$5.12</p>
<p className="mt-1 text-[12px] text-[var(--text-2)]">Band: $4.80–$5.33</p>
</div>
</div>
<div className="mt-4 rounded-xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-4">
<div className="w-full"><canvas className="w-full h-28" id="embedSpark"></canvas></div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="px-3 py-2 rounded-lg bg-[color:var(--bg-3)] border border-[var(--divider)] text-[12.5px] text-[var(--text-2)]">Transcripts</div>
<div className="px-3 py-2 rounded-lg bg-[color:var(--bg-3)] border border-[var(--divider)] text-[12.5px] text-[var(--text-2)]">Filings</div>
<div className="px-3 py-2 rounded-lg bg-[color:var(--bg-3)] border border-[var(--divider)] text-[12.5px] text-[var(--text-2)]">Alt Data</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="trust">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Trust &amp; Evaluation</h2>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="history"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Backtested</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Against historical prints and analyst surveys.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="waves"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Confidence Bands</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">On every estimate and rating.</p>
</div>
<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[var(--text-2)]" data-lucide="id-card"></i>
<h3 className="text-[17px] font-semibold tracking-tight text-white">Model Cards</h3>
</div>
<p className="mt-2 text-[14.5px] text-[var(--text-2)]">Data sources, limits, and known failure modes.</p>
</div>
</div>
<p className="mt-6 text-[13px] text-[var(--text-3)]">Information is for educational purposes only and not investment advice.</p>
</div>
</section>

<section className="relative mt-16 sm:mt-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Pricing</h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,0,0,.55)] transition">
<h3 className="text-xl font-semibold tracking-tight text-white">Starter</h3>
<p className="mt-1 text-[14.5px] text-[var(--text-2)]">Free preview on popular tickers, limited refresh</p>
<div className="mt-4">
<a className="inline-flex px-4 py-2 rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] transition" href="#start">Get Started</a>
</div>
</div>

<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--bg-2)] p-6 ring-1 ring-inset ring-[var(--brand-500)]/30">
<h3 className="text-xl font-semibold tracking-tight text-white">Pro</h3>
<p className="mt-1 text-[14.5px] text-[var(--text-2)]">Full coverage, alerts, and embeds</p>
<ul className="mt-4 space-y-2 text-[14px] text-[var(--text-2)]">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--success)]" data-lucide="check-circle-2"></i> Real-time estimates</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--success)]" data-lucide="check-circle-2"></i> AI Analyst Ratings</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--success)]" data-lucide="check-circle-2"></i> Surprise Radar + Alerts</li>
</ul>
<div className="mt-5">
<a className="inline-flex px-4 py-2 rounded-lg bg-[var(--brand-500)] text-[var(--bg-0)] hover:bg-[var(--brand-400)] hover:shadow-[0_0_28px_rgba(58,134,255,.25)] transition" href="#pro">See Plans</a>
</div>
</div>

<div className="rounded-2xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-6">
<h3 className="text-xl font-semibold tracking-tight text-white">Enterprise</h3>
<p className="mt-1 text-[14.5px] text-[var(--text-2)]">Custom universes, SLAs, and dedicated support</p>
<ul className="mt-4 space-y-2 text-[14px] text-[var(--text-2)]">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--text-2)]" data-lucide="building-2"></i> Private deployments</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--text-2)]" data-lucide="file-cog"></i> Custom models &amp; factors</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--text-2)]" data-lucide="headset"></i> Priority support</li>
</ul>
<div className="mt-5">
<a className="inline-flex px-4 py-2 rounded-lg bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] transition" href="#sales">Talk to Sales</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-16 sm:mt-24 mb-20" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Frequently Asked</h2>
<div className="mt-6 space-y-3">
<details className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-4 group">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-[15.5px] text-white">What’s an “AI Analyst Rating”?</span>
<i className="w-5 h-5 text-[var(--text-2)] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-[14.5px] text-[var(--text-2)]">A buy/hold/sell call produced by our ensemble, with conviction and drivers, refreshed continuously.</p>
</details>
<details className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-4 group">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-[15.5px] text-white">How do you differ from consensus providers?</span>
<i className="w-5 h-5 text-[var(--text-2)] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-[14.5px] text-[var(--text-2)]">We generate forward views from specialist models, reconcile them, and publish AI Street Consensus — with transparent reasoning and uncertainty.</p>
</details>
<details className="rounded-xl border border-[var(--divider)] bg-[color:var(--bg-1)] p-4 group">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="text-[15.5px] text-white">Can I audit the call?</span>
<i className="w-5 h-5 text-[var(--text-2)] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-[14.5px] text-[var(--text-2)]">Yes. Open the Driver Card to see filings, transcript passages, and news the models relied on.</p>
</details>
</div>
</div>
</section>

<section className="relative pb-16" id="demo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-[var(--divider)] bg-[color:var(--glass)] backdrop-blur-xl p-8 md:p-12 text-center shadow-[0_12px_32px_rgba(0,0,0,.55)]">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Ready to see the future, sooner?</h3>
<p className="mt-3 text-[15.5px] text-[var(--text-2)]">Try the live demo at predictstreet.ai, explore a few tickers, and add our embeds to your next article or app screen.</p>
<div className="mt-7 flex flex-wrap justify-center gap-3">
<a className="px-5 py-3 rounded-xl bg-[var(--brand-500)] text-[var(--bg-0)] hover:bg-[var(--brand-400)] hover:shadow-[0_0_32px_rgba(58,134,255,.28)] transition" href="#demo-start">Try the Demo</a>
<a className="px-5 py-3 rounded-xl bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] transition" href="#api">Get API Access</a>
<a className="px-5 py-3 rounded-xl bg-[color:var(--bg-2)] border border-[var(--divider)] text-[var(--text-1)] hover:border-[var(--brand-400)] transition" href="#sales">Talk to Sales</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-[var(--divider)]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-[var(--brand-500)] text-[var(--bg-0)] grid place-items-center font-semibold">PS</div>
<span className="text-[14.5px] text-[var(--text-2)]">© <span id="year">2025</span> PredictStreet</span>
</div>
<div className="flex items-center gap-5 text-[14px]">
<a className="text-[var(--text-2)] hover:text-[var(--text-1)]" href="#privacy">Privacy</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)]" href="#terms">Terms</a>
<a className="text-[var(--text-2)] hover:text-[var(--text-1)]" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
