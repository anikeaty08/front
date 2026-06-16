import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Render Lucide icons
      lucide.createIcons();

      // Parallax tilt for the product card
      (function () {
        const card = document.getElementById('tilt-card');
        const strength = 10; // deg
        const damp = 10; // smoothing

        function handle(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rx = ((y - rect.height / 2) / rect.height) * -strength;
          const ry = ((x - rect.width / 2) / rect.width) * strength;
          card.style.transform = `pers(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        }

        reset() {
          card.style.transform = 'perspective(1100px) translateZ(0) rotateX(0deg) rotateY(0deg)';
        }

        let raf;
        card.addEventListener('mousemove', (e) => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => handle(e));
        });
        card.addEventListener('mouseleave', () => {
          card.style.transition = 'transform 400ms cubic-bezier(0.2,0.8,0.2,1)';
          reset();
          setTimeout(() => (card.style.transition = ''), 400);
        });
      })();

      // Chart.js: Revenue Forecast
      (function () {
        const ctx = document.getElementById('revChart');
        if (!ctx) return;
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 160);
        gradient.addColorStop(0, 'rgba(99,102,241,0.35)');
        gradient.addColorStop(1, 'rgba(99,102,241,0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
            datasets: [
              {
                label: 'Projected',
                data: [18, 21, 19, 24, 27, 29, 28, 33],
                tension: 0.35,
                borderColor: 'rgba(168,85,247,0.9)',
                backgroundColor: gradient,
                fill: true,
                borderWidth: 2,
                pointRadius: 0,
              },
              {
                label: 'Baseline',
                data: [16, 18, 17, 20, 22, 23, 24, 25],
                tension: 0.35,
                borderColor: 'rgba(56,189,248,0.7)',
                borderDash: [4, 4],
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                padding: 10,
                titleColor: '#fff',
                bodyColor: 'rgba(229,231,235,0.9)',
                displayColors: false,
              },
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 } },
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 }, maxTicksLimit: 5 },
              },
            },
          },
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">

<div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(168,85,247,0.20),transparent)]"></div>

<div aria-hidden="true" className="absolute inset-0 opacity-[0.06] mix-blend-overlay">
<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="grid" patternunits="userSpaceOnUse" width="32">
<path d="M32 0H0v32" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 blur-3xl opacity-50" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.12), rgba(59,130,246,0.18), rgba(168,85,247,0.18), rgba(99,102,241,0.12))'}}></div>
</div>

<header className="relative z-10">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
<div className="flex items-center gap-3">
<div className="relative h-8 w-8 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Logo" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-sky-400/20 to-fuchsia-500/20 mix-blend-overlay"></div>
</div>
<span className="text-[17px] font-medium tracking-tight text-white/90">FleetOS</span>
</div>
<div className="hidden items-center gap-8 sm:flex">
<a className="text-sm font-medium text-white/70 hover:text-white/90 transition" href="#">Features</a>
<a className="text-sm font-medium text-white/70 hover:text-white/90 transition" href="#">Pricing</a>
<a className="text-sm font-medium text-white/70 hover:text-white/90 transition" href="#">Docs</a>
<a className="text-sm font-medium text-white/70 hover:text-white/90 transition" href="#">Blog</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden rounded-full border border-white/10 bg-white/0 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.03] sm:block" href="#">Sign in</a>
<a className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_2px_12px_rgba(255,255,255,0.06)] transition hover:bg-white/90" href="#">Join the Waitlist</a>
</div>
</nav>
</header>

<section className="relative z-10">
<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-2 lg:gap-16 lg:px-8">

<div className="relative">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
<i className="h-3.5 w-3.5 text-white/70" data-lucide="sparkles"></i>
            New: Predictive maintenance with live telematics
          </div>
<h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Simplify Car Rental Operations
            <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">with AI.</span>
</h1>
<p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            One command center for amortizations, maintenance, reservations, and payouts—augmented by forecasting, anomaly detection, and hands‑off automation.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow transition hover:bg-white/90" href="#">
              Join the Waitlist
              <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]" href="#">
<i className="h-4 w-4 text-white/70" data-lucide="video"></i>
              Book a Demo
            </a>
</div>
<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
<div className="flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="line-chart"></i>
              AI‑Powered Analytics
            </div>
<div className="flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="activity"></i>
              Real‑time Dashboard
            </div>
<div className="flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="notebook-pen"></i>
              Automated Reports
            </div>
</div>
</div>

<div className="relative">

<div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-2xl"></div>

<div className="group relative mx-auto max-w-[620px] transform-gpu rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur transition will-change-transform" id="tilt-card">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-2">
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-neutral-900/50 px-3 py-2">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"></span>
</div>
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="h-3.5 w-3.5 text-emerald-400/90" data-lucide="badge-check"></i>
                  Live
                </div>
</div>

<div className="mt-3 grid grid-cols-12 gap-3">

<div className="col-span-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white/70">Fleet Status</span>
<span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">+24%</span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2 py-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="car"></i>
<span className="text-xs text-white/70">Active</span>
</div>
<span className="text-xs text-white/60">86</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2 py-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="wrench"></i>
<span className="text-xs text-white/70">Service</span>
</div>
<span className="text-xs text-white/60">12</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2 py-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="clock"></i>
<span className="text-xs text-white/70">Turnover</span>
</div>
<span className="text-xs text-white/60">8</span>
</div>
</div>
</div>
<div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-xs font-medium text-white/70">
<i className="h-4 w-4" data-lucide="scan-line"></i>
                      Anomalies
                    </div>
<div className="mt-2 space-y-2">
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-amber-400/5 px-2 py-1.5">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="alert-triangle"></i>
<span className="text-[11px] text-amber-200/90">Late return risk · 3 vehicles</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-rose-400/5 px-2 py-1.5">
<i className="h-3.5 w-3.5 text-rose-300" data-lucide="battery-warning"></i>
<span className="text-[11px] text-rose-200/90">Low battery · 5 vehicles</span>
</div>
</div>
</div>
</div>

<div className="col-span-8">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs font-medium text-white/70">
<i className="h-4 w-4" data-lucide="trending-up"></i>
                        Revenue Forecast
                      </div>
<div className="flex items-center gap-2 text-[11px] text-white/50">
<span className="rounded-full bg-emerald-400/10 px-2 py-0.5 font-medium text-emerald-300">AI</span>
                        30‑day
                      </div>
</div>

<div className="mt-2 h-44 w-full">
<div className="h-full w-full">
<canvas className="h-full w-full" id="revChart"></canvas>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white/70">Utilization</span>
<span className="text-[11px] text-emerald-300">+12%</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white">91%</p>
<div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[91] bg-gradient-to-r from-sky-400 to-fuchsia-400"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white/70">Avg. Turnover Time</span>
<span className="text-[11px] text-emerald-300">-18%</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white">27m</p>
<div className="mt-2 flex items-center gap-1 text-[11px] text-white/50">
<i className="h-3.5 w-3.5 text-sky-300" data-lucide="zap"></i>
                        Auto‑routing &amp; smart assignment
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -left-6 -top-6 hidden sm:block">
<div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70 shadow backdrop-blur">
                AI Insights
              </div>
</div>
<div className="pointer-events-none absolute -right-4 top-16 hidden sm:block">
<div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/70 shadow backdrop-blur">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="radio"></i>
                Real‑time
              </div>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-white/0 via-white/[0.04] to-white/0"></div>
<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="shield-check"></i>
              SOC2‑ready
            </div>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="server"></i>
              Uptime 99.99%
            </div>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="globe"></i>
              Global infra
            </div>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="lock"></i>
              End‑to‑end encryption
            </div>
</div>
</div>
</div>
</section>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-white/[0.02] to-white/[0.05] p-6 sm:p-8">
<div className="absolute inset-y-0 right-0 w-1/2 opacity-60 [mask-image:linear-gradient(to_left,black,transparent)]">
<img alt="Abstract 3D" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Operate on autopilot.</h2>
<p className="mt-3 text-base text-white/65">Move from spreadsheets to a self‑healing operating system. Start free—upgrade when you grow.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-white/90" href="#">
                Get Started
                <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]" href="#">
<i className="h-4 w-4 text-white/70" data-lucide="code-xml"></i>
                API Docs
              </a>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
