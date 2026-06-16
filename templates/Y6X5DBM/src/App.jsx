import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Calculator logic
      const amountEl = document.getElementById('amount');
      const aprEl = document.getElementById('apr');
      const monthlyEl = document.getElementById('result-monthly');
      const interestEl = document.getElementById('result-interest');
      const totalEl = document.getElementById('result-total');
      const termButtons = Array.from(document.querySelectorAll('.term-pill'));
      let selectedTerm = 36;

      function formatCurrency(num) {
        return num.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
      }

      function setActiveTerm(term) {
        termButtons.forEach(btn => {
          if (parseInt(btn.dataset.term, 10) === term) {
            btn.classList.add('border-violet-400/60', 'text-white', 'bg-violet-500/20');
          } else {
            btn.classList.remove('border-violet-400/60', 'text-white', 'bg-violet-500/20');
          }
        });
      }

      function calculate() {
        const P = Math.max(0, Number(amountEl.value || 0));
        const apr = Math.max(0, Number(aprEl.value || 0));
        const n = selectedTerm;
        const r = apr / 100 / 12;
        let monthly = 0;
        if (P > 0 && apr >= 0 && n > 0) {
          if (r === 0) {
            monthly = P / n;
          } else {
            const pow = Math.pow(1 + r, n);
            monthly = (P * r * pow) / (pow - 1);
          }
        }
        const total = monthly * n;
        const interest = total - P;

        monthlyEl.textContent = formatCurrency(isFinite(monthly) ? monthly : 0);
        totalEl.textContent = formatCurrency(isFinite(total) ? total : 0);
        interestEl.textContent = formatCurrency(isFinite(interest) ? interest : 0);
      }

      // Init term buttons
      termButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          selectedTerm = parseInt(btn.dataset.term, 10);
          setActiveTerm(selectedTerm);
          calculate();
        });
      });
      setActiveTerm(selectedTerm);

      amountEl.addEventListener('input', calculate);
      aprEl.addEventListener('input', calculate);
      calculate();

      // Chart.js - APR Trend
      const ctx = document.getElementById('aprChart').getContext('2d');
      const gridColor = 'rgba(148,163,184,0.2)';
      const tickColor = '#94a3b8';

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [
            {
              label: 'Avg APR',
              data: [10.4, 10.2, 10.1, 9.9, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.2, 9.1],
              borderColor: 'rgba(139,92,246,0.9)',
              backgroundColor: 'rgba(139,92,246,0.15)',
              pointBackgroundColor: 'rgba(139,92,246,1)',
              pointBorderColor: 'rgba(255,255,255,0.8)',
              pointRadius: 3,
              pointHoverRadius: 5,
              pointHitRadius: 10,
              tension: 0.35,
              fill: true,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(15,23,42,0.9)',
              titleColor: '#e2e8f0',
              bodyColor: '#cbd5e1',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 10,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { color: gridColor, drawBorder: false },
              ticks: { color: tickColor, font: { family: 'Inter' } }
            },
            y: {
              grid: { color: gridColor, drawBorder: false },
              ticks: {
                color: tickColor,
                font: { family: 'Inter' },
                callback: (v) => v + '%'
              }
            }
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at top left, rgba(124,58,237,0.15), transparent 45%), radial-gradient(ellipse at bottom right, rgba(16,185,129,0.12), transparent 40%)'}}></div>
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '36px 36px', mixBlend: 'overlay'}}></div>
<div className="absolute -top-24 -right-32 w-[34rem] h-[34rem] rounded-full bg-violet-500/20 blur-3xl animate-spin" style={{animationDuration: '58s'}}></div>
<div className="absolute -bottom-24 -left-32 w-[40rem] h-[40rem] rounded-full bg-emerald-400/20 blur-3xl animate-spin" style={{animationDuration: '74s', animationDirection: 'reverse'}}></div>
</div>

<header className="sticky top-0 z-50 bg-[#0b0f17]/75 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-white/5 text-slate-100 grid place-items-center shadow-sm ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tight">BL</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors">BlueLine</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="relative text-slate-400 hover:text-emerald-300 transition-colors group" href="#products">
              Products
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-full transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
<a className="relative text-slate-400 hover:text-emerald-300 transition-colors group" href="#rates">
              Rates
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-full transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
<a className="relative text-slate-400 hover:text-emerald-300 transition-colors group" href="#learn">
              Learn
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-full transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
<a className="relative text-slate-400 hover:text-emerald-300 transition-colors group" href="#faq">
              FAQ
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-full transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-lg border border-white/10 bg-white/0 px-3.5 py-2 text-sm text-slate-300 hover:border-violet-500/40 hover:text-white hover:shadow-[0_0_0_1px_rgba(139,92,246,0.2)] transition-all" href="#">
<i className="w-4 h-4 mr-2" data-lucide="log-in"></i>
              Sign in
            </a>
<a className="group inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 text-white px-4 py-2.5 text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.98] transition-all ring-1 ring-white/10 relative overflow-hidden" href="#apply">
<span className="relative z-10">Apply Now</span>
<i className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 skew-x-[-15deg] opacity-0 group-hover:opacity-100 transition duration-700 translate-x-[-20%] group-hover:translate-x-[220%]"></span>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-20 md:pb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 px-3 py-1 text-xs font-medium">
<span className="relative inline-flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 animate-ping" style={{animationDuration: '1.8s'}}></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
</span>
              Same‑day decisions. No hidden fees.
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Smarter loans with clarity and control
            </h1>
<p className="text-base sm:text-lg text-slate-300">
              Borrow with confidence at competitive fixed rates. Check your offer in minutes without impacting your credit score.
            </p>
<ul className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
<li className="group relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-400/40">
<span className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.12)]"></span>
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="shield-check"></i>
                Soft credit check
              </li>
<li className="group relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-400/40">
<span className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.12)]"></span>
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="clock"></i>
                24–48h funding
              </li>
<li className="group relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-400/40">
<span className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.12)]"></span>
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="percent"></i>
                Fixed APR
              </li>
</ul>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="group inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 text-white px-5 py-3 text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.98] transition-all ring-1 ring-white/10 relative overflow-hidden" href="#apply">
<span className="relative z-10">Get your rate</span>
<i className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 skew-x-[-15deg] opacity-0 group-hover:opacity-100 transition duration-700 translate-x-[-20%] group-hover:translate-x-[220%]"></span>
</a>
<a className="inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-100 px-5 py-3 text-sm font-medium hover:border-emerald-400/40 hover:text-white hover:shadow-sm transition-all" href="#learn">
                Learn more
              </a>
</div>
<div className="flex items-center gap-6 pt-2">
<div className="text-sm text-slate-300">
                Starting APR from
                <span className="font-semibold text-white">7.49%</span>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="text-sm text-slate-300">
                Max loan
                <span className="font-semibold text-white">$50,000</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-violet-500/20 via-emerald-400/10 to-transparent opacity-70 blur-2xl animate-pulse" style={{animationDuration: '3.5s'}}></div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-white">Loan calculator</h3>
<span className="inline-flex items-center text-xs font-medium text-emerald-300 bg-emerald-400/10 border border-emerald-400/30 rounded-md px-2 py-1">
<i className="w-3.5 h-3.5 mr-1" data-lucide="calculator"></i>
                    Live
                  </span>
</div>
<p className="text-sm text-slate-400 mt-1.5">Estimate your monthly payment instantly.</p>
</div>
<div className="p-5 sm:p-6 space-y-5">

<label className="block">
<span className="text-sm font-medium text-slate-200">Amount</span>
<div className="relative mt-2">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</div>
<input className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 focus:border-violet-400/50 transition-all" id="amount" min="1000" placeholder="Enter amount" step="100" type="number" value="12000"/>
</div>
</label>

<div>
<span className="block text-sm font-medium text-slate-200">Term</span>
<div className="mt-2 grid grid-cols-5 gap-2">
<button className="term-pill inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:border-violet-400/40 hover:text-white transition-all active:scale-95" data-term="12" type="button">12m</button>
<button className="term-pill inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:border-violet-400/40 hover:text-white transition-all active:scale-95" data-term="24" type="button">24m</button>
<button className="term-pill inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:border-violet-400/40 hover:text-white transition-all active:scale-95" data-term="36" type="button">36m</button>
<button className="term-pill inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:border-violet-400/40 hover:text-white transition-all active:scale-95" data-term="48" type="button">48m</button>
<button className="term-pill inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:border-violet-400/40 hover:text-white transition-all active:scale-95" data-term="60" type="button">60m</button>
</div>
</div>

<label className="block">
<span className="text-sm font-medium text-slate-200">APR</span>
<div className="mt-2 flex items-center gap-3">
<div className="relative flex-1">
<input className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-slate-100 focus:outline-none focus:ring-4 focus:ring-violet-500/20 focus:border-violet-400/50 transition-all" id="apr" max="30" min="5" step="0.1" type="number" value="7.9"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
</div>
<span className="text-xs text-slate-400">Fixed</span>
</div>
</label>

<div className="rounded-xl border border-violet-500/25 bg-violet-500/10 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-300">Estimated monthly</span>
<span className="text-xl font-semibold tracking-tight text-white" id="result-monthly">$0</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="text-slate-400">Total interest</div>
<div className="font-medium text-slate-100" id="result-interest">$0</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="text-slate-400">Total repayment</div>
<div className="font-medium text-slate-100" id="result-total">$0</div>
</div>
</div>
</div>
<a className="group inline-flex w-full justify-center items-center rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 text-white px-4 py-3 text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.99] transition-all ring-1 ring-white/10 relative overflow-hidden" href="#apply">
<span className="relative z-10">Apply with soft check</span>
<i className="w-4 h-4 ml-1.5 relative z-10 transition-transform group-hover:translate-x-0.5" data-lucide="chevron-right"></i>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 skew-x-[-15deg] opacity-0 group-hover:opacity-100 transition duration-700 translate-x-[-20%] group-hover:translate-x-[220%]"></span>
</a>
<p className="text-[12px] leading-5 text-slate-400">
                  Estimates are for illustration and may differ from your final offer. Checking your rate won’t affect your credit score.
                </p>
</div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="text-2xl font-semibold tracking-tight text-white">4.9★</div>
<div className="text-sm text-slate-400">Customer rating</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="text-2xl font-semibold tracking-tight text-white">250k+</div>
<div className="text-sm text-slate-400">Approved loans</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="text-2xl font-semibold tracking-tight text-white">24–48h</div>
<div className="text-sm text-slate-400">Avg. funding time</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="text-2xl font-semibold tracking-tight text-white">99.99%</div>
<div className="text-sm text-slate-400">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Borrow for what matters</h2>
<p className="mt-2 text-slate-400">Personal loans that fit your life—transparent terms and no surprises.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition"></span>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="piggy-bank"></i>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-white">Debt consolidation</h3>
<p className="mt-2 text-sm text-slate-400">Combine high‑interest balances into a single low monthly payment.</p>
<ul className="mt-4 text-sm text-slate-300 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Fixed rates</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> No prepayment fees</li>
</ul>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition"></span>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-white">Home improvement</h3>
<p className="mt-2 text-sm text-slate-400">Upgrade your space with predictable payments and flexible terms.</p>
<ul className="mt-4 text-sm text-slate-300 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Fund in 24–48h</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> $1k–$50k</li>
</ul>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-400/40 overflow-hidden">
<span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition"></span>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-white">Big purchases</h3>
<p className="mt-2 text-sm text-slate-400">Finance life’s essentials without the credit card crunch.</p>
<ul className="mt-4 text-sm text-slate-300 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Transparent fees</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Early payoff savings</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10" id="rates">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<h3 className="text-2xl tracking-tight font-semibold">Today’s rates</h3>
<span className="text-xs text-slate-400">Updated 5 min ago</span>
</div>
<div className="mt-5 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
<div className="text-sm text-slate-300">Starting APR</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">7.49%</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-sm text-slate-300">Avg. APR</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">9.12%</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-sm text-slate-300Max APR&lt;/div&gt; &lt;div class=" font-semibold="" mt-1="" text-2xl="" text-white"="" tracking-tight="">22.99%</div>
</div>
</div>
<div className="mt-6">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<h4 className="text-sm font-medium text-slate-200">Trend (last 12 months)</h4>
<p className="text-xs text-slate-400 mt-1">Average personal loan APR</p>
<div className="mt-3">
<div className="relative h-48">
<div className="h-full rounded-lg bg-white/[0.02] p-2">
<div className="relative w-full h-full">
<canvas className="w-full h-full" id="aprChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-slate-400">Your actual rate depends on credit profile, term, and loan amount.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<h3 className="text-2xl tracking-tight font-semibold">Why BlueLine</h3>
<p className="mt-2 text-slate-400">We designed borrowing that respects your time and protects your wallet.</p>
<div className="mt-5 space-y-4">
<div className="group flex items-start gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-violet-400/40">
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<div className="font-medium text-white">Fast, transparent approvals</div>
<p className="text-sm text-slate-400 mt-1">Pre‑qualified offers in minutes, no impact on your credit score.</p>
</div>
</div>
<div className="group flex items-start gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-violet-400/40">
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div>
<div className="font-medium text-white">No hidden fees</div>
<p className="text-sm text-slate-400 mt-1">Clear terms, no origination surprises, and no prepayment penalty.</p>
</div>
</div>
<div className="group flex items-start gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-violet-400/40">
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
<div>
<div className="font-medium text-white">Flexible terms</div>
<p className="text-sm text-slate-400 mt-1">Choose a plan that balances monthly affordability and total cost.</p>
</div>
</div>
<div className="group flex items-start gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-violet-400/40">
<div className="h-10 w-10 rounded-lg bg-violet-500/15 text-violet-300 grid place-items-center ring-1 ring-violet-400/30">
<i className="w-5 h-5" data-lucide="headphones"></i>
</div>
<div>
<div className="font-medium text-white">Human support, always</div>
<p className="text-sm text-slate-400 mt-1">Talk to a specialist—no bots—whenever you need help.</p>
</div>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="group inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 text-white px-4 py-3 text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.99] transition-all ring-1 ring-white/10 relative overflow-hidden" href="#apply">
<span className="relative z-10">Check your offer</span>
<i className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 skew-x-[-15deg] opacity-0 group-hover:opacity-100 transition duration-700 translate-x-[-20%] group-hover:translate-x-[220%]"></span>
</a>
<a className="inline-flex justify-center items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-100 px-4 py-3 text-sm font-medium hover:border-emerald-400/40 hover:text-white transition-all" href="#learn">
                Compare rates
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10" id="learn">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Trusted by borrowers nationwide</h2>
<p className="mt-2 text-slate-400">Real stories from people who simplified their finances with BlueLine.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/40">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 shadow" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">María G.</div>
<div className="text-xs text-slate-400">Austin, TX</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“Consolidated my cards and cut my monthly payment by 35%. The process was quick and transparent.”</p>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/40">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 shadow" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Noah P.</div>
<div className="text-xs text-slate-400">Portland, OR</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“Got funded the next day for a bathroom remodel. Loved the fixed rate and no prepayment penalty.”</p>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/40">
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-15deg] translate-x-[-30%] group-hover:translate-x-[220%] transition-transform duration-700"></span>
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 shadow" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium text-white">Aisha K.</div>
<div className="text-xs text-slate-400">Newark, NJ</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“Clear, fair, and fast. The calculator matched my final offer almost exactly.”</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10" id="faq">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Frequently asked questions</h2>
<p className="mt-2 text-slate-400">Everything you need to know about eligibility, rates, and repayments.</p>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-5">
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-violet-400/40 transition-colors">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-white">Will checking my rate affect my credit score?</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">No. We use a soft inquiry to show you pre‑qualified options. Accepting an offer may involve a hard pull.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-violet-400/40 transition-colors">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-white">How fast can I get funded?</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Many customers receive funds within 24–48 hours after approval and verification.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-violet-400/40 transition-colors">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-white">Are there any fees?</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">No hidden fees. We don’t charge prepayment penalties. Any origination costs are disclosed upfront.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-violet-400/40 transition-colors">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-white">What loan amounts and terms are available?</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Borrow from $1,000 to $50,000 with terms from 12 to 60 months, subject to credit approval.</p>
</details>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10" id="apply">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-blue-600/10 to-emerald-500/20">
<div className="absolute -right-16 -top-16 w-64 h-64 bg-violet-500/30 rounded-full blur-3xl animate-spin" style={{animationDuration: '36s'}}></div>
<div className="absolute -left-24 -bottom-24 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-spin" style={{animationDuration: '48s', animationDirection: 'reverse'}}></div>
<div className="relative p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Get your personalized rate in minutes</h3>
<p className="mt-2 text-slate-300">No impact on your credit score. Unlock lower payments today.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="group inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 text-white px-5 py-3 text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.99] transition-all ring-1 ring-white/10 relative overflow-hidden" href="#">
<span className="relative z-10">Start application</span>
<i className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
<span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 skew-x-[-15deg] opacity-0 group-hover:opacity-100 transition duration-700 translate-x-[-20%] group-hover:translate-x-[220%]"></span>
</a>
<a className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.06] text-slate-100 px-5 py-3 text-sm font-medium hover:border-emerald-400/40 hover:text-white transition-all" href="#rates">
                View rates
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-top border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
<div className="flex flex-col md:flex-row gap-8 md:gap-12">
<div className="flex-1">
<a className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-lg bg-white/5 text-slate-100 grid place-items-center ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tight">BL</span>
</div>
<span className="text-base font-medium tracking-tight text-slate-200">BlueLine</span>
</a>
<p className="mt-3 text-sm text-slate-400 max-w-sm">BlueLine Loans is a financial technology company, not a bank. Banking services provided by partner institutions.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
<div>
<div className="font-medium text-white">Company</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-400 hover:text-emerald-300" href="#">About</a></li>
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="font-medium text-white">Resources</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Calculator</a></li>
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Help Center</a></li>
</ul>
</div>
<div>
<div className="font-medium text-white">Legal</div>
<ul className="mt-3 space-y-2">
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Privacy</a></li>
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Terms</a></li>
<li><a className="text-slate-400 hover:text-emerald-300" href="#">Licenses</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© <span id="year"></span> BlueLine Loans. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300 transition-colors" href="#">
<i className="w-4.5 h-4.5" data-lucide="twitter"></i>
</a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300 transition-colors" href="#">
<i className="w-4.5 h-4.5" data-lucide="linkedin"></i>
</a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300 transition-colors" href="#">
<i className="w-4.5 h-4.5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
