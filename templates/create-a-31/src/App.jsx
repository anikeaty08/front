import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Mobile menu toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
          menuBtn.innerHTML = '';
          const icon = document.createElement('i');
          icon.setAttribute('data-lucide', menu.classList.contains('hidden') ? 'menu' : 'x');
          menuBtn.appendChild(icon);
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      }

      // Chart.js - EURUSD sample data
      const ctx = document.getElementById('eurusdChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.15)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0.00)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 50 }, (_, i) => i + 1),
            datasets: [{
              label: 'EUR/USD',
              data: [1.08,1.081,1.079,1.082,1.083,1.081,1.084,1.086,1.085,1.087,1.088,1.086,1.089,1.091,1.09,1.092,1.093,1.094,1.093,1.095,1.097,1.096,1.098,1.1,1.101,1.1,1.102,1.103,1.104,1.102,1.105,1.106,1.108,1.107,1.109,1.11,1.111,1.11,1.112,1.113,1.114,1.112,1.115,1.116,1.118,1.117,1.119,1.12,1.121,1.123],
              borderColor: 'rgb(37, 99, 235)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                padding: 10,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { display: false }
              },
              y: {
                grid: { color: 'rgba(148, 163, 184, 0.2)', drawTicks: false },
                ticks: { color: '#64748b', maxTicksLimit: 5 }
              }
            }
          }
        });
      }

      // FAQ toggles
      document.querySelectorAll('.faq-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
          const content = btn.parentElement.querySelector('.faq-content');
          const icon = btn.querySelector('[data-lucide="chevron-down"]');
          if (content) {
            content.classList.toggle('hidden');
            if (icon) {
              icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            }
          }
        });
      });

      // Footer year
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-3 py-2.5 text-sm">
<svg className="lucide lucide-badge-check size-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="font-medium font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>New: Live Mentorship Cohort starts Oct 15 — Limited seats.</p>
<a className="inline-flex items-center gap-1 text-white/90 hover:text-white underline-offset-4 hover:underline font-montserrat" href="#education" style={{transition: 'outline 0.1s ease-in-out'}}>
            Enroll now <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>FX</div>
<span className="text-base font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>FOREXTL</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 font-montserrat" href="#platform" style={{transition: 'outline 0.1s ease-in-out'}}>Platform</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 font-montserrat" href="#education" style={{transition: 'outline 0.1s ease-in-out'}}>Education</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 font-montserrat" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 font-montserrat" href="#company" style={{transition: 'outline 0.1s ease-in-out'}}>Company</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
              Get started <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button aria-label="Open menu" className="md:hidden inline-flex size-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="mobile-menu-btn">
<svg className="lucide lucide-menu size-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobile-menu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-2">
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 font-montserrat" href="#platform" style={{transition: 'outline 0.1s ease-in-out'}}>
              Platform <svg className="lucide lucide-line-chart size-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 font-montserrat" href="#education" style={{transition: 'outline 0.1s ease-in-out'}}>
              Education <svg className="lucide lucide-graduation-cap size-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 font-montserrat" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>
              Pricing <svg className="lucide lucide-credit-card size-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 font-montserrat" href="#company" style={{transition: 'outline 0.1s ease-in-out'}}>
              Company <svg className="lucide lucide-building-2 size-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-4 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-sparkles size-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Trade + Education in one platform
            </div>
<h1 className="sm:text-5xl lg:text-6xl text-3xl font-extrabold text-slate-900 tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Unlock your Financial Potentials.</h1>
<p className="sm:text-lg text-base font-semibold text-slate-600 mt-4 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Access Learning Resources for Smarteer Financial Choices</p><p className="sm:text-lg text-base text-slate-600 mt-4 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>There is a science to wealth creation. We provide modern tools and resources to give confidence with your finance.</p>
<div className="flex flex-col sm:flex-row gap-3 mt-6">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-3 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#platform" style={{transition: 'outline 0.1s ease-in-out'}}>
                Start trading <svg className="lucide lucide-line-chart size-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#education" style={{transition: 'outline 0.1s ease-in-out'}}>
                Explore education <svg className="lucide lucide-graduation-cap size-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</a>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="Student 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Student 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Student 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>10,000+ traders enrolled • 4.9/5 satisfaction</p>
</div>
<p className="mt-6 text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Risk Warning: CFDs and Forex are complex instruments and come with a high risk of losing money rapidly due to leverage. Consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
</div>
<div className="relative">
<div className="absolute -inset-x-16 -top-16 -bottom-10 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
<div className="relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
<div className="border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-line-chart size-5 text-slate-700" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>EUR/USD — Live</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-emerald-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>+0.42%</span>
<span className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>1.08345</span>
</div>
</div>
<div className="p-4 sm:p-6">
<div className="grid md:grid-cols-5 gap-6">
<div className="md:col-span-3">
<div className="rounded-lg border border-slate-200 p-3">
<div className="h-56 sm:h-64">
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
<div className="h-full w-full"><div className="h-full w-full"><canvas className="h-full w-full" height="320" id="eurusdChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '285px'}} width="356"></canvas></div></div>
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
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 p-3">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Spread</p>
<p className="text-sm font-semibold mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>0.2 pips</p>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Leverage</p>
<p className="text-sm font-semibold mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>1:30</p>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Swap</p>
<p className="text-sm font-semibold mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>-0.5 / +0.2</p>
</div>
</div>
</div>
<div className="md:col-span-2">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Order Ticket</h3>
<span className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Demo</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Order Type</label>
<div className="mt-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Market</div>
</div>
<div>
<label className="text-xs text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Volume (Lots)</label>
<div className="mt-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>0.50</div>
</div>
<div>
<label className="text-xs text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Stop Loss</label>
<div className="mt-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>1.08100</div>
</div>
<div>
<label className="text-xs text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Take Profit</label>
<div className="mt-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>1.08750</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 hover:border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-square size-4" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Sell
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-3.5 py-2.5 text-sm font-semibold hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-triangle size-4" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Buy
                        </button>
</div>
<div className="mt-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
<p className="text-xs text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Est. risk: <span className="font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>$125</span> • Est. reward: <span className="font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>$275</span> • R:R <span className="font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>1:2.2</span></p>
</div>
</div>
<div className="mt-3 rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-graduation-cap size-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<p className="text-xs font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Tip: Risk 1–2% per trade. Position sizing is covered in Module 3.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Trusted by" className="border-t border-b border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<p className="text-center text-xs font-medium text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Trusted by traders across 60+ countries</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center">
<div className="flex items-center justify-center">
<span className="text-slate-400 text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>ALTIUS</span>
</div>
<div className="flex items-center justify-center">
<span className="text-slate-400 text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>NEXA</span>
</div>
<div className="flex items-center justify-center">
<span className="text-slate-400 text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>SOLVEX</span>
</div>
<div className="flex items-center justify-center">
<span className="text-slate-400 text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>PRIMA</span>
</div>
<div className="flex items-center justify-center">
<span className="text-slate-400 text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>QUANTA</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="platform">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Institutional tools. Retail simplicity.</h2>
<p className="mt-3 text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Everything you need to analyze, execute, and manage risk—paired with the education to use it well.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<svg className="lucide lucide-line-chart size-5 text-slate-700" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Advanced Charts</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Multi-timeframe, drawing tools, and 30+ indicators, engineered for precision.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield size-5 text-slate-700" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Risk Controls</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Built-in position sizing, stop/limit presets, and risk dashboards.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<svg className="lucide lucide-graduation-cap size-5 text-slate-700" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Guided Learning</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Structured curriculum from financial literacy to advanced strategy.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock size-5 text-slate-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>24/5 Support</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Real humans, rapid response—because markets don’t wait.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50" id="education">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>A complete path to financial fluency.</h2>
<p className="mt-3 text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>From budgeting and compounding to macro themes, market structure, and execution. Learn the way professionals think—then apply it live.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-book-open size-5 text-slate-700" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Core Modules</h3>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Financial foundations</li>
<li className="flex items-center gap-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Forex mechanics &amp; liquidity</li>
<li className="flex items-center gap-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Risk &amp; psychology</li>
<li className="flex items-center gap-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Strategy &amp; backtesting</li>
</ul>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-video size-5 text-slate-700" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<h3 className="text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Live Mentorship</h3>
</div>
<p className="mt-3 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Weekly coaching, trade reviews, and accountability for consistent growth.</p>
</div>
</div>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>View syllabus <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Book a consultation</a>
</div>
</div>
<div className="relative">
<div className="aspect-[16/10] rounded-xl border border-slate-200 overflow-hidden bg-white">
<img alt="Students learning trading" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Avg. completion</p>
<p className="text-sm font-semibold mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>6–8 weeks</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Live sessions</p>
<p className="text-sm font-semibold mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Weekly</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Community</p>
<p className="text-sm font-semibold mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Private group</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<p className="text-3xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>60+</p>
<p className="text-sm text-slate-600 mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Countries</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<p className="text-3xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>10k+</p>
<p className="text-sm text-slate-600 mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Active learners</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<p className="text-3xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>30ms</p>
<p className="text-sm text-slate-600 mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Avg. execution</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<p className="text-3xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>4.9/5</p>
<p className="text-sm text-slate-600 mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Learner rating</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Simple, transparent pricing.</h2>
<p className="mt-3 text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Choose a plan to trade or learn—many start with both.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Trading Account</h3>
<span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Low spreads</span>
</div>
<p className="mt-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Tight spreads, fast execution, and robust risk controls.</p>
<div className="mt-4">
<p className="text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>$0</p>
<p className="text-xs text-slate-500 mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Commission on majors • Spreads from 0.1 pips</p>
</div>
<ul className="mt-5 space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> MT-style and web platform</li>
<li className="flex items-center gap-2 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 40+ FX pairs</li>
<li className="flex items-center gap-2 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Negative balance protection</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
              Open account <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Education Suite</h3>
<span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Best value</span>
</div>
<p className="mt-2 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Full curriculum, live mentorship, community, and tools.</p>
<div className="mt-4">
<p className="text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>$49</p>
<p className="text-xs text-slate-500 mt-1 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>per month • Cancel anytime</p>
</div>
<ul className="mt-5 space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Structured modules + quizzes</li>
<li className="flex items-center gap-2 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Weekly live coaching</li>
<li className="flex items-center gap-2 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-check-circle-2 size-4 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Strategy templates and checklists</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
              Start learning <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Real outcomes from real traders.</h2>
<p className="mt-3 text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Confidence is a skill you build. Here’s what our members say.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client A" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Akin O.</p>
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Lagos, NG</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>The risk modules and checklists changed how I approach trades. My losers are smaller, winners more consistent.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client B" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Melissa P.</p>
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Austin, US</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Love the mentorship calls. Clear frameworks, no fluff. The platform is clean and fast.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client C" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Ethan S.</p>
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>London, UK</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>The education path made everything click—from macro to execution. Highly recommended.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Questions, answered.</h2>
<p className="mt-3 text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>If you can’t find it here, we’re one message away.</p>
</div>
<div className="mt-8 mx-auto max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">

<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-sm font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Is FOREXTL suitable for beginners?</span>
<svg className="lucide lucide-chevron-down size-5 text-slate-600 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content mt-2 hidden">
<p className="text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Yes. The education path starts with financial fundamentals and gradually builds to trading strategies with examples and checklists.</p>
</div>
</div>

<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-sm font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Do you offer a demo account?</span>
<svg className="lucide lucide-chevron-down size-5 text-slate-600 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content mt-2 hidden">
<p className="text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Absolutely. Practice execution and test strategies with virtual funds before going live.</p>
</div>
</div>

<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-sm font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>What’s included in mentorship?</span>
<svg className="lucide lucide-chevron-down size-5 text-slate-600 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content mt-2 hidden">
<p className="text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Weekly live sessions, Q&amp;A, trade reviews, and accountability. You’ll also get templates for journaling and risk management.</p>
</div>
</div>

<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-sm font-semibold text-slate-900 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Are there hidden fees?</span>
<svg className="lucide lucide-chevron-down size-5 text-slate-600 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content mt-2 hidden">
<p className="text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>No hidden platform fees. Trading costs are transparent—spreads and swaps are published in-app.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Ready to trade smarter and learn faster?</h3>
<p className="mt-3 text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Join thousands leveling up their financial literacy and execution—one framework at a time.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 justify-end">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-3 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Create free account</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Talk to an expert</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50" id="company">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white text-sm font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>FX</div>
<span className="text-base font-semibold tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>FOREXTL</span>
</a>
<p className="mt-3 text-sm text-slate-600 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Trade better. Learn deeper. Build lasting confidence in the markets.</p>
</div>
<div>
<p className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Product</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#platform" style={{transition: 'outline 0.1s ease-in-out'}}>Platform</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Security</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Education</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#education" style={{transition: 'outline 0.1s ease-in-out'}}>Curriculum</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Mentorship</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Community</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Company</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>About</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Careers</a></li>
</ul>
</div>
</div>
<div className="mt-10 border-t border-slate-200 pt-6">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Risk Warning: Trading Forex and CFDs involves significant risk and may not be suitable for all investors. You could lose more than your initial investment. Ensure you fully understand the risks and seek independent advice if necessary.</p>
<div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>© <span className="font-montserrat" id="year" style={{transition: 'outline 0.1s ease-in-out'}}>2025</span> FOREXTL. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-slate-500 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms</a>
<a className="text-xs text-slate-500 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy</a>
<a className="text-xs text-slate-500 hover:text-slate-900 font-montserrat" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Cookie Policy</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
