import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile menu
      const btn = document.getElementById('mobileMenuBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
      }

      // Chart.js: Response time vs manual posting
      const ctx = document.getElementById('responseChart');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['0m', '15m', '30m', '1h', '3h', '6h', '12h', '24h'],
            datasets: [
              {
                label: 'Turbo List (auto + AI)',
                data: [1, 1, 1, 2, 2, 2, 2, 2],
                borderColor: 'rgb(244, 63, 94)',
                backgroundColor: 'rgba(244, 63, 94, 0.15)',
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 0,
                fill: true
              },
              {
                label: 'Manual posting',
                data: [60, 90, 120, 180, 240, 360, 480, 720],
                borderColor: 'rgb(163, 163, 163)',
                backgroundColor: 'rgba(163, 163, 163, 0.10)',
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                ticks: { color: '#a3a3a3', callback: (v) => v + 's' },
                grid: { color: 'rgba(255,255,255,0.05)' }
              },
              x: {
                ticks: { color: '#a3a3a3' },
                grid: { color: 'rgba(255,255,255,0.05)' }
              }
            },
            plugins: {
              legend: {
                labels: { color: '#e5e5e5', boxWidth: 8, boxHeight: 8, usePointStyle: true, pointStyle: 'line' }
              },
              tooltip: {
                callbacks: {
                  label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}s`
                }
              }
            }
          }
        });
      }

      // Icons
      if (window.lucide) {
        lucide.createIcons();
      }

      // Footer year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950"></div>
<div className="pointer-events-none fixed inset-0 -z-10 opacity-40" style={{background: 'radial-gradient(600px 400px at 10% 10%, rgba(244,63,94,0.20), rgba(0,0,0,0)), radial-gradient(600px 400px at 90% 20%, rgba(255,255,255,0.06), rgba(0,0,0,0))'}}></div>
<div className="pointer-events-none fixed inset-0 -z-10 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">

<span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 overflow-hidden">
<img alt="Turbo List logo" className="w-7 h-7 object-contain" src="https://storage.googleapis.com/msgsndr/MjyEHjDJZG3zbHPDNIPy/media/68fd17d7d332c9bfe61e5373.png"/>
</span>
<span className="text-lg font-semibold tracking-tight">TURBO <span className="text-rose-500">LIST</span></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-300 hover:text-white" href="#features">Features</a>
<a className="text-neutral-300 hover:text-white" href="#how">How it works</a>
<a className="text-neutral-300 hover:text-white" href="#pricing">Pricing</a>
<a className="text-neutral-300 hover:text-white" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-neutral-300 hover:text-white" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/15 hover:bg-white/15" href="#pricing">
<svg className="lucide lucide-rocket h-4 w-4 text-rose-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Start free trial
            </a>
</div>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-inset ring-neutral-800 hover:bg-neutral-900" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
<div className="md:hidden hidden border-t border-neutral-800" id="mobileMenu">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
<a className="block py-2 text-neutral-300 hover:text-white" href="#features">Features</a>
<a className="block py-2 text-neutral-300 hover:text-white" href="#how">How it works</a>
<a className="block py-2 text-neutral-300 hover:text-white" href="#pricing">Pricing</a>
<a className="block py-2 text-neutral-300 hover:text-white" href="#faq">FAQ</a>
<div className="pt-2 flex gap-2">
<a className="flex-1 text-center rounded-md px-3 py-2 ring-1 ring-inset ring-neutral-800 text-neutral-300 hover:bg-neutral-900" href="#">Sign in</a>
<a className="flex-1 text-center rounded-md px-3 py-2 bg-white/10 ring-1 ring-inset ring-white/15 hover:bg-white/15" href="#pricing">Start free</a>
</div>
</nav>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 lg:py-24 grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex text-xs text-neutral-300 bg-neutral-900/60 border-neutral-800 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Your Dealership → Facebook Marketplace in minutes</div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Post more cars. Close more deals.
          </h1>
<p className="sm:text-lg text-base text-neutral-300 mt-4">Select multiple listings on your dealership site and Turbo List auto-imports and posts each one to your Facebook Marketplace—so you don’t. Optional AI chat and voice can reply to every lead instantly.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-3 text-sm font-medium text-white hover:bg-rose-400" href="#pricing">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Start free trial
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium ring-1 ring-inset ring-neutral-800 text-white hover:bg-neutral-900" href="#demo">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book a demo
            </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-6">
<div>
<div className="text-3xl font-semibold tracking-tight">8h+</div>
<div className="text-xs text-neutral-400">Weekly time saved</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight">10x</div>
<div className="text-xs text-neutral-400">More Marketplace reach</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight"><span className="align-baseline">$</span>59</div>
<div className="text-xs text-neutral-400">Starter per month</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-rose-500/10 via-white/5 to-transparent blur-2xl"></div>
<div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
<img className="" src="https://storage.googleapis.com/msgsndr/MjyEHjDJZG3zbHPDNIPy/media/68fd224347cb3b6ccfb5101d.png"/>
<div className="p-4 sm:p-6">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<svg className="lucide lucide-list h-4 w-4 text-rose-400" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
                Auto-imported 3 listings from your dealership site
              </div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-car h-3.5 w-3.5 text-neutral-300" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg> 2019 Civic EX
                  </div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm font-medium">$18,990</span>
<span className="text-[10px] text-neutral-400">Ready</span>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-car h-3.5 w-3.5 text-neutral-300" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg> 2020 RAV4 XLE
                  </div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm font-medium">$27,450</span>
<span className="text-[10px] text-neutral-400">Ready</span>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-car h-3.5 w-3.5 text-neutral-300" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg> 2021 F-150 XLT
                  </div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm font-medium">$39,990</span>
<span className="text-[10px] text-neutral-400">Ready</span>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-megaphone h-4 w-4 text-rose-400" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
                  Post to Facebook Marketplace
                </div>
<button className="inline-flex items-center gap-2 rounded-md bg-rose-500/90 px-3 py-1.5 text-xs font-medium hover:bg-rose-400">
<svg className="lucide lucide-send h-3.5 w-3.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Post all
                </button>
</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
<svg className="lucide lucide-message-circle h-4 w-4 text-emerald-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                AI will auto-reply to incoming leads when enabled.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to move inventory faster</h2>
<p className="mt-3 text-neutral-300">From bulk import to instant AI responses—designed for busy automotive sales teams.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-list-plus h-5 w-5 text-rose-400" data-lucide="list-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H3"></path><path d="M11 12H3"></path><path d="M16 19H3"></path><path d="M18 9v6"></path><path d="M21 12h-6"></path></svg>
<h3 className="font-semibold tracking-tight">Multi-select import</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Pick multiple listings on your dealership site and import with one click. Titles, price, mileage, photos—auto formatted.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-megaphone h-5 w-5 text-rose-400" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<h3 className="font-semibold tracking-tight">Auto-posting to Marketplace</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">We publish each listing on your Facebook Marketplace profile on schedule—no copy-paste.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-message-square h-5 w-5 text-rose-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 className="font-semibold tracking-tight">AI chat + voice</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Optional upgrade: instant responses via chat and voice. Qualify, answer FAQs, and book appointments for you.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock h-5 w-5 text-rose-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="font-semibold tracking-tight">Scheduling &amp; cadence</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Post immediately or drip out over 24 hours to keep your profile fresh.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wand-2 h-5 w-5 text-rose-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<h3 className="font-semibold tracking-tight">Smart formatting</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Descriptions optimized for Marketplace visibility with compliant, consistent details.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-chart-line h-5 w-5 text-rose-400" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h3 className="font-semibold tracking-tight">Insights</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Track posts, views, replies, and appointments to know what actually sells.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-900" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From selection to sale in four steps</h2>
<p className="mt-3 text-neutral-300">No spreadsheets. No duplicate entry.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-xs">1</span>
<i className="h-5 w-5 text-rose-400" data-lucide="mouse-pointer-square"></i>
</div>
<h3 className="mt-3 font-semibold tracking-tight">Select from your dealership site</h3>
<p className="mt-2 text-sm text-neutral-300">Multi-select cars you want to post today.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-xs">2</span>
<svg className="lucide lucide-download h-5 w-5 text-rose-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<h3 className="mt-3 font-semibold tracking-tight">Auto-import</h3>
<p className="mt-2 text-sm text-neutral-300">We pull photos and specs, then format your listings.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-xs">3</span>
<svg className="lucide lucide-send h-5 w-5 text-rose-400" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h3 className="mt-3 font-semibold tracking-tight">Auto-post to Marketplace</h3>
<p className="mt-2 text-sm text-neutral-300">Instantly or on schedule over 24 hours.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-xs">4</span>
<svg className="lucide lucide-headphones h-5 w-5 text-rose-400" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="mt-3 font-semibold tracking-tight">AI replies (optional)</h3>
<p className="mt-2 text-sm text-neutral-300">Chat + voice answers questions and books test drives.</p>
</div>
</div>

<div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
<div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
<h3 className="text-2xl font-semibold tracking-tight">Response time vs manual posting</h3>
<p className="mt-2 text-sm text-neutral-300">Cut lead response from hours to seconds with automated posting and AI replies.</p>
<div className="mt-4">
<div className="relative h-64">
<div className="absolute inset-0">
<canvas height="512" id="responseChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '542px'}} width="1084"></canvas>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
<h3 className="text-2xl font-semibold tracking-tight">What dealers say</h3>
<p className="mt-2 text-sm text-neutral-300">“We post every day without thinking about it—and every lead gets an immediate reply. It feels like an extra rep who never sleeps.”</p>
<div className="mt-6 grid sm:grid-cols-3 gap-3">
<img alt="Showroom" className="h-28 w-full rounded-lg object-cover border border-neutral-800" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Garage" className="h-28 w-full rounded-lg object-cover border border-neutral-800" src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Car lot" className="h-28 w-full rounded-lg object-cover border border-neutral-800" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-900" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple pricing that scales with your lot</h2>
<p className="text-neutral-300 mt-3">Start in minutes. Cancel anytime.</p>
</div>
<div className="grid gap-6 lg:grid-cols-3 mt-10 gap-x-6 gap-y-6">

<div className="flex flex-col bg-neutral-950 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Starter</h3>
<span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] ring-1 ring-inset ring-neutral-800 text-neutral-300">Best for solo</span>
</div>
<div className="mt-4 flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$79</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<p className="text-sm text-neutral-300 mt-2">5 automatic listing posts a day (every 24 hours)</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Multi-select import</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Auto formatting</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-minus h-4 w-4 text-neutral-500" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg> AI chat + voice not included</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-inset ring-white/15 hover:bg-white/15" href="#">Start 7-day free trial</a>
</div>

<div className="flex flex-col bg-gradient-to-b from-rose-500/10 to-transparent border-rose-500/30 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute -top-3 right-4 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-medium text-white">Most Popular</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Pro</h3>
<span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] ring-1 ring-inset ring-neutral-800 text-neutral-300">Per salesperson</span>
</div>
<div className="mt-4 flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$158</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<p className="text-sm text-neutral-300 mt-2">10 automatic listing posts a day (every 24 hours)</p><p className="text-sm text-neutral-300 mt-2">Purchase for an individual salesperson. Manage that salesperson or view their analytics from a manager dashboard.</p><ul className="text-sm text-neutral-300 mt-4 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 seat (per salesperson)</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Manager view: assign, manage, analytics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Starter features</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority posting queue</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> AI chat + voice included</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-400" href="#">Choose Pro</a>
</div>

<div className="flex flex-col bg-neutral-950 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Elite</h3>
<span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] ring-1 ring-inset ring-neutral-800 text-neutral-300">Dealership Pack</span>
</div>

<div className="mt-4 flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight">$1,500</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<p className="mt-2 text-sm text-neutral-300">10 seats included. Usage-based AI included. All Pro features per seat.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 10 seats included</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Usage-based AI included</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Pro features per seat</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Centralized manager analytics</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-inset ring-white/15 hover:bg-white/15" href="#">Choose Elite (10 seats)</a>

<div className="bg-neutral-950 border-neutral-800 border rounded-xl mt-6 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium tracking-tight">Scale 11–16 seats</p>
<span className="text-sm text-neutral-400">$2,000/mo</span>
</div>
<p className="mt-1 text-xs text-neutral-400">Includes usage-based AI chat. All Pro features per seat.</p>
<a className="mt-3 inline-flex items-center justify-center rounded-md bg-rose-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-400" href="#">Choose 11–16 seats</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-900" id="faq">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently asked</h2>
<p className="mt-3 text-neutral-300">Quick answers about posting to Facebook Marketplace with Turbo List.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<h3 className="font-semibold tracking-tight">Do you post directly to our Facebook Marketplace profile?</h3>
<p className="mt-2 text-sm text-neutral-300">Yes. We connect securely to your Facebook account and schedule posts based on your selected cadence.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<h3 className="font-semibold tracking-tight">Can managers see salesperson performance?</h3>
<p className="mt-2 text-sm text-neutral-300">With Pro and Elite, managers can view posts, responses, and appointments per salesperson.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<h3 className="font-semibold tracking-tight">What’s included in usage-based AI?</h3>
<p className="mt-2 text-sm text-neutral-300">You’re billed only for AI chat/voice usage. Elite includes usage-based AI (and AI chat at the 11–16 seat level).</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
<h3 className="font-semibold tracking-tight">Can we cancel anytime?</h3>
<p className="mt-2 text-sm text-neutral-300">Yes—plans are month-to-month with no long-term commitment.</p>
</div>
</div>
</div>
</section>
<footer className="border-t border-neutral-900 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800 overflow-hidden">
<img alt="Turbo List logo" className="h-6 w-6 object-contain" src="https://storage.googleapis.com/msgsndr/MjyEHjDJZG3zbHPDNIPy/media/68fd17d7d332c9bfe61e5373.png"/>
</span>
<span className="text-sm font-medium tracking-tight">TURBO <span className="text-rose-500">LIST</span></span>
</div>
<p className="text-xs text-neutral-400">© <span id="year">2025</span> Turbo List. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
