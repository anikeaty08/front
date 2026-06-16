import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize lucide icons with stroke width 1.5
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // FAQ accordion
      document.querySelectorAll('.faq-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const content = btn.parentElement.querySelector('.faq-content');
          const icon = btn.querySelector('[data-lucide]');
          if (content) {
            content.classList.toggle('hidden');
          }
          if (icon) {
            icon.setAttribute('data-lucide', content && content.classList.contains('hidden') ? 'plus' : 'minus');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      });

      // Savings chart
      const ctx = document.getElementById('savingsChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8'],
            datasets: [
              {
                label: 'With Solar',
                data: [90, 82, 75, 70, 66, 63, 61, 60],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6,182,212,0.15)',
                fill: true,
                tension: 0.35,
                borderWidth: 2
              },
              {
                label: 'Grid Only',
                data: [100, 104, 108, 113, 118, 124, 130, 137],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99,102,241,0.08)',
                fill: false,
                tension: 0.35,
                borderWidth: 2,
                borderDash: [6,4]
              }
            ]
          },
          options: {
            plugins: {
              legend: { display: true, labels: { boxWidth: 12, usePointStyle: true } },
              tooltip: { mode: 'index', intersect: false }
            },
            interaction: { mode: 'index', intersect: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { grid: { color: 'rgba(15,23,42,0.08)' }, ticks: { callback: (v)=> v + '%' } },
              x: { grid: { display: false } }
            }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<header className="flex items-center justify-between py-4 md:py-6">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-sm ring-1 ring-black/5">
<i className="h-5 w-5 text-white" data-lucide="bolt"></i>
</span>
<span className="text-lg font-semibold tracking-tight">Logo</span>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">Home</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">Services</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">Work</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">About</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">Industries</a>
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white/60 hover:shadow-sm hover:-translate-y-0.5 transition-all backdrop-blur-sm">
<i className="h-4 w-4" data-lucide="phone"></i>
              Contact
            </button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Get a Quote
            </button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300/70 hover:bg-white hover:shadow-sm transition" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="hidden md:hidden" id="mobileNav">
<div className="mt-2 grid gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">Home</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">Services</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">Work</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">Industries</a>
</div>
</div>

<section className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="absolute inset-0 -z-10">
<img alt="Solar panels under blue sky" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20"></div>
</div>
<div className="grid items-start gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:px-14 lg:py-16">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="leaf"></i>
                Renewable done right
              </div>
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Powering a sustainable future with clean solar energy
              </h1>
<p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
                Harness modern photovoltaics, storage, and monitoring to reduce costs and carbon. Designed for homes and businesses with seamless install and support.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-cyan-600 hover:to-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<i className="h-4 w-4" data-lucide="solar-panel"></i>
                  Explore Solutions
                </a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm transition-all" href="#">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                  Contact Us
                </a>
</div>

<div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
<form className="grid gap-3 sm:grid-cols-2">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="Alex Morgan" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="alex@email.com" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Location / Zip</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="94016" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Monthly bill (USD)</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="120" type="number"/>
</div>
<div className="sm:col-span-2 mt-1 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="lock"></i>
                      We’ll never share your info.
                    </div>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                      Get my estimate
                    </button>
</div>
</form>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600">
                  1,200+ installations with 4.9/5 satisfaction
                </p>
</div>
</div>

<div className="relative">
<div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="message-square"></i>
                    Quick contact
                  </div>
<div className="flex items-center gap-1 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>Avg. response: 1h</span>
</div>
</div>
<form className="mt-4 grid gap-3">
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="Alex Morgan" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="alex@email.com" type="email"/>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Phone</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="(555) 000-0000" type="tel"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Project type</label>
<select className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500">
<option>Residential</option>
<option>Commercial</option>
<option>Utility</option>
</select>
</div>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Message</label>
<textarea className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="Tell us about your roof, goals, and timeline..." rows="4"></textarea>
</div>
<div className="mt-1 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="shield"></i>
                      No spam. Unsubscribe anytime.
                    </div>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                      Send
                    </button>
</div>
</form>
</div>
<div className="pointer-events-none absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl"></div>
</div>
</div>
</section>

<section className="mt-8">
<div className="grid gap-3 sm:gap-4 sm:auto-rows-[160px] auto-rows-[120px] grid-cols-2 sm:grid-cols-6">

<div className="group relative col-span-2 sm:col-span-3 row-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Solar on modern home" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-slate-900/0"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-800 ring-1 ring-slate-200 backdrop-blur">
<i className="h-3.5 w-3.5 text-cyan-600" data-lucide="home"></i>
                Residential
              </div>
</div>

<div className="group relative col-span-2 sm:col-span-3 row-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Commercial solar array" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-slate-900/0"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-800 ring-1 ring-slate-200 backdrop-blur">
<i className="h-3.5 w-3.5 text-cyan-600" data-lucide="building-2"></i>
                Commercial
              </div>
</div>

<div className="group relative col-span-1 sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Solar field" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-slate-900/0"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-800 ring-1 ring-slate-200 backdrop-blur">
<i className="h-3.5 w-3.5 text-cyan-600" data-lucide="mountain"></i>
                Utility
              </div>
</div>

<div className="group relative col-span-1 sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Rooftop solar" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-slate-900/0"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-800 ring-1 ring-slate-200 backdrop-blur">
<i className="h-3.5 w-3.5 text-cyan-600" data-lucide="sun"></i>
                Rooftop
              </div>
</div>
</div>
</section>

<section className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-600">Hectares Installed</p>
<i className="h-4 w-4 text-slate-500" data-lucide="ruler"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">1,200</p>
<p className="mt-1 text-xs text-slate-500">Across residential &amp; commercial</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-600">Countries Served</p>
<i className="h-4 w-4 text-slate-500" data-lucide="globe"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">50+</p>
<p className="mt-1 text-xs text-slate-500">Global logistics &amp; support</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-600">Green Solutions</p>
<i className="h-4 w-4 text-slate-500" data-lucide="leaf"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">95%</p>
<p className="mt-1 text-xs text-slate-500">Recyclable materials</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-600">Satisfied Clients</p>
<i className="h-4 w-4 text-slate-500" data-lucide="smile"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">30k+</p>
<p className="mt-1 text-xs text-slate-500">And counting worldwide</p>
</div>
</section>

<section className="mt-14 grid items-center gap-8 lg:grid-cols-2">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
<h2 className="text-2xl font-semibold tracking-tight">Start your journey to a greener future</h2>
<p className="mt-3 text-base text-slate-700">
              We tailor solar ecosystems—from panels to batteries—to your site and usage. Our team manages audit, design, installation, and monitoring so you can focus on what matters.
            </p>
<ul className="mt-5 grid gap-3 sm:grid-cols-2">
<li className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition">
<i className="-0.5 h-5 w-5 text-cyan-600" data-lucide="shield-check"></i>
<div>
<p className="text-sm font-medium text-slate-900">25-year panel warranty</p>
<p className="text-xs text-slate-600">Best-in-class coverage</p>
</div>
</li>
<li className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition">
<i className="mt-0.5 h-5 w-5 text-cyan-600" data-lucide="cpu"></i>
<div>
<p className="text-sm font-medium text-slate-900">Smart monitoring</p>
<p className="text-xs text-slate-600">Realtime performance data</p>
</div>
</li>
<li className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition">
<i className="mt-0.5 h-5 w-5 text-cyan-600" data-lucide="battery-charging"></i>
<div>
<p className="text-sm font-medium text-slate-900">Storage ready</p>
<p className="text-xs text-slate-600">Peak-shaving &amp; resilience</p>
</div>
</li>
<li className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition">
<i className="mt-0.5 h-5 w-5 text-cyan-600" data-lucide="users"></i>
<div>
<p className="text-sm font-medium text-slate-900">Certified installers</p>
<p className="text-xs text-slate-600">Local, vetted teams</p>
</div>
</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline" href="#">
                How our process works
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative">
<div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
<img alt="Solar installation at scale" className="h-80 w-full object-cover sm:h-[28rem]" src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden w-44 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur sm:block">
<p className="text-xs font-medium text-slate-700">Daily Output</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">42.3 kWh</p>
<p className="text-[10px] text-slate-500">Live monitored</p>
</div>
</div>
</section>

<section className="mt-14">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Our projects</h3>
<p className="mt-1 text-sm text-slate-600">Recent residential, commercial, and utility-scale installations.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline" href="#">
              View all projects
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Rooftop solar on modern home" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-slate-200">Residential</span>
<span className="text-slate-500">San Diego, CA</span>
</div>
<h4 className="mt-2 text-base font-medium text-slate-900">4.2 kW Rooftop + Monitoring</h4>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="sun"></i>
                    Tier-1 panels
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="battery"></i>
                    Battery-ready
                  </span>
</div>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Commercial solar walkway installation" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-slate-200">Commercial</span>
<span className="text-slate-500">Austin, TX</span>
</div>
<h4 className="mt-2 text-base font-medium text-slate-900">175 kW Carport + EV Ready</h4>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="factory"></i>
                    Smart inverters
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="gauge"></i>
                    High throughput
                  </span>
</div>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<img alt="Utility-scale ground mount" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-slate-200">Utility</span>
<span className="text-slate-500">Boulder, CO</span>
</div>
<h4 className="mt-2 text-base font-medium text-slate-900">2.4 MW Ground-Mount Array</h4>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="shield-check"></i>
                    UL certified
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-cyan-600" data-lucide="clock-8"></i>
                    12-week build
                  </span>
</div>
</div>
</article>
</div>
</section>

<section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="max-w-2xl">
<h3 className="text-2xl font-semibold tracking-tight">Savings over time</h3>
<p className="mt-2 text-sm text-slate-600">Illustrative bill reduction with a 6kW rooftop system and battery add-on.</p>
</div>
<div className="mt-6">
<div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
<div className="h-64">
<div className="h-full w-full">
<canvas id="savingsChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-600 to-cyan-500 p-6 sm:p-8 hover:-translate-y-0.5 hover:shadow-md transition-all">
<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-white/80">Product updates</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Stay updated on latest releases</h3>
<p className="mt-2 text-sm text-white/80">New panels, storage, and monitoring features—straight to your inbox.</p>
<form className="mt-5 flex flex-col gap-3 sm:flex-row">
<div className="relative flex-1">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
<i className="h-4 w-4" data-lucide="mail"></i>
</span>
<input className="w-full rounded-full border-0 bg-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter your email" type="email"/>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50" type="submit">
                  Subscribe
                </button>
</form>
</div>
<div className="relative">
<img alt="Solar field at sunset" className="h-56 w-full rounded-2xl object-cover sm:h-64 lg:h-56" src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl"></div>
</div>
</div>
</section>

<section className="mt-16 grid items-start gap-6 lg:grid-cols-3">
<div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-center gap-2 text-amber-500">
<i className="h-5 w-5 fill-amber-500" data-lucide="star"></i>
<i className="h-5 w-5 fill-amber-500" data-lucide="star"></i>
<i className="h-5 w-5 fill-amber-500" data-lucide="star"></i>
<i className="h-5 w-5 fill-amber-500" data-lucide="star"></i>
<i className="h-5 w-5 fill-amber-500" data-lucide="star"></i>
</div>
<blockquote className="mt-4 text-xl font-medium tracking-tight text-slate-900">
              “Switching to solar was incredibly smooth. Professional team, transparent process, and immediate savings—highly recommended.”
            </blockquote>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-900">Renee W.</p>
<p className="text-xs text-slate-600">Product Designer, Oakland</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
<h4 className="text-lg font-semibold tracking-tight">At a glance</h4>
<ul className="mt-4 space-y-3">
<li className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200">
<i className="h-5 w-5 text-cyan-600" data-lucide="sun"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Peak Production</p>
<p className="text-xs text-slate-600">9am–3pm daily</p>
</div>
</div>
<span className="text-sm font-medium text-slate-900">+28%</span>
</li>
<li className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200">
<i className="h-5 w-5 text-cyan-600" data-lucide="piggy-bank"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Avg. Payback</p>
<p className="text-xs text-slate-600">Home system</p>
</div>
</div>
<span className="text-sm font-medium text-slate-900">4.6 yrs</span>
</li>
<li className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200">
<i className="h-5 w-5 text-cyan-600" data-lucide="cloud-sun"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">CO₂ Reduced</p>
<p className="text-xs text-slate-600">Annual estimate</p>
</div>
</div>
<span className="text-sm font-medium text-slate-900">3.1t</span>
</li>
</ul>
</div>
</section>

<section className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight">Frequently asked questions</h3>
<div className="mt-6 grid gap-3 md:grid-cols-2">
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<button className="faq-btn flex w-full items-center justify-between rounded-xl p-3 text-left">
<span className="text-sm font-medium text-slate-900">What size system do I need?</span>
<i className="h-5 w-5 text-slate-500" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-3 pb-3">
<p className="text-sm text-slate-600">We analyze your consumption and roof specifics to model an optimal array and storage package tailored to your goals.</p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<button className="faq-btn flex w-full items-center justify-between rounded-xl p-3 text-left">
<span className="text-sm font-medium text-slate-900">How long is installation?</span>
<i className="h-5 w-5 text-slate-500" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-3 pb-3">
<p className="text-sm text-slate-600">Typical residences install in 1–2 days after permitting and utility approvals are complete.</p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<button className="faq-btn flex w-full items-center justify-between rounded-xl p-3 text-left">
<span className="text-sm font-medium text-slate-900">Are systems customizable?</span>
<i className="h-5 w-5 text-slate-500" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-3 pb-3">
<p className="text-sm text-slate-600">Yes—modules, inverters, battery size, and monitoring options are configured per site.</p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
<button className="faq-btn flex w-full items-center justify-between rounded-xl p-3 text-left">
<span className="text-sm font-medium text-slate-900">What incentives are available?</span>
<i className="h-5 w-5 text-slate-500" data-lucide="plus"></i>
</button>
<div className="faq-content hidden px-3 pb-3">
<p className="text-sm text-slate-600">We help you claim federal, state, and utility incentives to maximize ROI and reduce upfront costs.</p>
</div>
</div>
</div>
</section>

<section className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
<h3 className="text-2xl font-semibold tracking-tight">Let’s get started</h3>
<p className="mt-2 text-sm text-slate-600">Tell us a bit about your project and we’ll reach out within one business day.</p>
<form className="mt-6 grid gap-4">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="relative">
<label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="Alex Morgan" type="text"/>
</div>
<div className="relative">
<label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="alex@email.com" type="email"/>
</div>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Location</label>
<input className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="City, Country" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">How can we help?</label>
<textarea className="w-full rounded-xl border-0 bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:bg-white focus:ring-2 focus:ring-cyan-500" placeholder="Roof size, goals, timeline..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="lock"></i>
                  We respect your privacy.
                </div>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all">
<i className="h-4 w-4" data-lucide="send"></i>
                  Send message
                </button>
</div>
</form>
</div>
<div className="relative overflow-hidden rounded-3xl">
<img alt="Technicians installing rooftop solar" className="h-full min-h-[22rem] w-full object-cover" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/0"></div>
<div className="absolute bottom-4 left-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
<p className="text-sm font-medium">Certified Expert Team</p>
<p className="mt-1 text-xs text-white/80">Engineers, installers, and support specialists</p>
</div>
</div>
</section>

<footer className="mt-16 border-t border-slate-200 pt-12">
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-sm ring-1 ring-black/5">
<i className="h-5 w-5 text-white" data-lucide="bolt"></i>
</span>
<span className="text-lg font-semibold tracking-tight">Logo</span>
</div>
<p className="mt-3 max-w-sm text-sm text-slate-600">
                Turnkey solar systems for homes and businesses—design, installation, financing, and monitoring in one place.
              </p>
<div className="mt-4 flex items-center gap-3 text-slate-600">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-sm">100 Market St, San Francisco, CA</span>
</div>
<div className="mt-2 flex items-center gap-3 text-slate-600">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-sm">+1 (415) 555-0123</span>
</div>
<div className="mt-2 flex items-center gap-3 text-slate-600">
<i className="h-4 w-4" data-lucide="mail"></i>
<span className="text-sm">hello@logo.energy</span>
</div>
<div className="mt-4 flex gap-3">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition" href="#">
<i className="h-4 w-4" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Solutions</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#">Residential Solar</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Commercial Solar</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Battery Storage</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">EV Charging</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Company</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#">About</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Press</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Resources</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#">Help Center</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">ROI Calculator</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Incentives Guide</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Installation FAQs</a></li>
</ul>
</div>
</div>
<div className="mt-10 border-t border-slate-200 py-6">
<div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
<p className="text-xs text-slate-500">© 2025 Logo. All rights reserved.</p>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
<a className="hover:text-slate-900" href="#">Privacy</a>
<span className="h-3 w-px bg-slate-200"></span>
<a className="hover:text-slate-900" href="#">Terms</a>
<span className="h-3 w-px bg-slate-200"></span>
<a className="hover:text-slate-900" href="#">Support</a>
<span className="h-3 w-px bg-slate-200"></span>
<a className="hover:text-slate-900" href="#">Status</a>
</div>
</div>
</div>
</footer>
</div>
</div>





    </>
  );
}
