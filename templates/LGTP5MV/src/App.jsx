import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons();

      // Sidebar handlers
      const openBtn = document.getElementById('openSidebar');
      const closeBtn = document.getElementById('closeSidebar');
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');

      function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      }
      function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }

      if (openBtn) openBtn.addEventListener('click', openSidebar);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
      overlay.addEventListener('click', closeSidebar);

      // Chart.js: Revenue Sparkline
      const ctx = document.getElementById('revChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 160);
        gradient.addColorStop(0, 'rgba(34,197,94,0.25)');
        gradient.addColorStop(1, 'rgba(34,197,94,0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
            datasets: [{
              data: [180, 185, 172, 190, 210, 205, 220, 230, 228, 235, 245, 251],
              tension: 0.35,
              borderColor: 'rgb(34,197,94)',
              backgroundColor: gradient,
              pointRadius: 0,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false, displayColors: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<button aria-label="Open menu" className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 sm:hidden" id="openSidebar">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="h-7 w-7 rounded-md overflow-hidden ring-1 ring-neutral-200">
<img alt="Logo" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[15px] font-medium tracking-tight text-neutral-900">Workspace</span>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="h-9 w-64 bg-white border border-neutral-200 rounded-md pl-9 pr-3 text-sm placeholder-neutral-400 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300" placeholder="Search companies, people, projects"/>
</div>
</div>
<button className="h-9 px-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">New</span>
</div>
</button>
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="p-2 rounded-full ring-1 ring-neutral-200 hover:ring-neutral-300">
<img alt="User" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</button>
</div>
</div>
</header>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 py-6">

<aside className="fixed inset-y-0 left-0 w-[84%] max-w-xs z-50 bg-white border-r border-neutral-200 p-4 sm:static sm:translate-x-0 sm:w-auto sm:max-w-none sm:p-0 sm:border-none transition-transform -translate-x-full sm:transform-none" id="sidebar">
<div className="sm:hidden flex items-center justify-between mb-3">
<span className="text-sm text-neutral-500">Navigation</span>
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100" id="closeSidebar">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<nav className="space-y-2">
<a className="group flex items-center gap-3 px-3 h-10 rounded-md bg-neutral-100 ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="home"></i>
<span className="text-sm font-medium text-neutral-900">Summary</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="database"></i>
<span className="text-sm text-neutral-700">Data sources</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="wallet"></i>
<span className="text-sm text-neutral-700">Financials</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="newspaper"></i>
<span className="text-sm text-neutral-700">News</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="users"></i>
<span className="text-sm text-neutral-700">People</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="git-branch"></i>
<span className="text-sm text-neutral-700">Corporate structure</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="clock"></i>
<span className="text-sm text-neutral-700">Timeline</span>
</a>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="folder"></i>
<span className="text-sm text-neutral-700">Projects</span>
</a>
<div className="pt-2 border-t border-neutral-200"></div>
<a className="group flex items-center gap-3 px-3 h-10 rounded-md hover:bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-200 transition">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="settings"></i>
<span className="text-sm text-neutral-700">Settings</span>
</a>
</nav>
</aside>

<main className="space-y-6">

<section className="relative overflow-hidden rounded-xl ring-1 ring-neutral-200 bg-gradient-to-b from-white to-neutral-50">
<div className="absolute inset-0">
<img alt="Backdrop" className="h-full w-full object-cover opacity-[0.06]" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-3">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">INFLECTION ADVISORY LIMITED</h1>
<span className="inline-flex items-center gap-1 h-6 px-2 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i> Active
                  </span>
</div>
<div className="mt-1 text-sm text-neutral-500">Company No. 15073164</div>
<p className="mt-3 text-sm text-neutral-600 max-w-2xl">No description available. Add a short overview to help your team understand this business at a glance.</p>
<div className="mt-4 flex flex-wrap gap-2">
<button className="h-9 px-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="pencil"></i>
<span className="text-sm font-medium">Edit summary</span>
</div>
</button>
<button className="h-9 px-3 rounded-md bg-white ring-1 ring-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="share-2"></i>
<span className="text-sm font-medium">Share</span>
</div>
</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full sm:w-auto">
<a className="group p-3 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="building-2"></i>
<span className="text-xs text-neutral-500">Companies House</span>
</div>
<div className="mt-1 text-sm font-medium text-neutral-900">Open</div>
</a>
<a className="group p-3 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="globe"></i>
<span className="text-xs text-neutral-500">Website</span>
</div>
<div className="mt-1 text-sm font-medium text-neutral-900">Unavailable</div>
</a>
<a className="group p-3 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="linkedin"></i>
<span className="text-xs text-neutral-500">LinkedIn</span>
</div>
<div className="mt-1 text-sm font-medium text-neutral-900">112 employees</div>
</a>
<a className="group p-3 rounded-lg bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900" data-lucide="file-text"></i>
<span className="text-xs text-neutral-500">Documents</span>
</div>
<div className="mt-1 text-sm font-medium text-neutral-900">0 filings</div>
</a>
</div>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg bg-white ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Revenue</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">—</div>
</div>
<div className="rounded-lg bg-white ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Cash</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">0.00m</div>
</div>
<div className="rounded-lg bg-white ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Employees</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">—</div>
</div>
<div className="rounded-lg bg-white ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Employees (LinkedIn)</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">112</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 rounded-xl bg-white ring-1 ring-neutral-200">
<div className="p-5 border-b border-neutral-200 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Timeline</h2>
<p className="text-sm text-neutral-500">5 most recent events</p>
</div>
<a className="text-sm text-neutral-700 hover:text-neutral-900 flex items-center gap-1">
                View all
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-5">
<ol className="relative border-s border-neutral-200">

<li className="ms-4">
<div className="absolute -start-2.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white ring-2 ring-neutral-300 flex items-center justify-center">
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
<div className="mb-1 text-xs text-neutral-500">August 12, 2025</div>
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium text-neutral-900">INFLECTION ADVISORY LIMITED accepted in Another project</p>
<p className="text-xs text-neutral-500 mt-1">Slava Kuznetsov</p>
</div>
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</li>

<li className="ms-4 mt-6">
<div className="absolute -start-2.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white ring-2 ring-neutral-300 flex items-center justify-center">
<i className="w-3 h-3 text-amber-500" data-lucide="minus"></i>
</div>
<div className="mb-1 text-xs text-neutral-500">August 12, 2025</div>
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium text-neutral-900">INFLECTION ADVISORY LIMITED removed from Another project</p>
<p className="text-xs text-neutral-500 mt-1">Slava Kuznetsov</p>
</div>
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</li>

<li className="ms-4 mt-6">
<div className="absolute -start-2.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white ring-2 ring-neutral-300 flex items-center justify-center">
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
<div className="mb-1 text-xs text-neutral-500">August 12, 2025</div>
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium text-neutral-900">INFLECTION ADVISORY LIMITED accepted in New project for Demo</p>
<p className="text-xs text-neutral-500 mt-1">Slava Kuznetsov</p>
</div>
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</li>
</ol>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-neutral-200">
<div className="p-5 border-b border-neutral-200 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Latest news</h2>
<p className="text-sm text-neutral-500">Auto-curated from trusted sources</p>
</div>
<button className="h-9 px-3 rounded-md bg-white ring-1 ring-neutral-200 text-neutral-700 hover:bg-neutral-50 transition">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="rss"></i>
<span className="text-sm font-medium">Fetch</span>
</div>
</button>
</div>
<div className="p-5 space-y-4">
<article className="group rounded-lg ring-1 ring-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition p-4">
<div className="flex items-start gap-3">
<img alt="News" className="w-14 h-14 rounded-md object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-sm font-medium text-neutral-900 truncate">Consulting market outlook shows steady growth</h3>
<p className="text-xs text-neutral-600 mt-1 line-clamp-2">Analysts expect continued demand for digital transformation and strategy services across EMEA.</p>
</div>
</div>
</article>
<article className="group rounded-lg ring-1 ring-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition p-4">
<div className="flex items-start gap-3">
<img alt="News" className="w-14 h-14 rounded-md object-cover" src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-sm font-medium text-neutral-900 truncate">New AI compliance guidance released</h3>
<p className="text-xs text-neutral-600 mt-1 line-clamp-2">Regulators set expectations for data governance, model auditability, and human oversight.</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-xl bg-white ring-1 ring-neutral-200">
<div className="p-5 border-b border-neutral-200">
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Performance snapshot</h2>
<p className="text-sm text-neutral-500">Last 12 months (example)</p>
</div>
<div className="p-5">
<div className="mt-2">
<div className="h-40">
<div className="h-full">
<canvas id="revChart"></canvas>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Revenue</div>
<div className="mt-1 text-base font-semibold tracking-tight text-neutral-900">$2.3m</div>
</div>
<div className="rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">YoY</div>
<div className="mt-1 text-base font-semibold tracking-tight text-emerald-600">+12%</div>
</div>
<div className="rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Runway</div>
<div className="mt-1 text-base font-semibold tracking-tight text-neutral-900">14 mo</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-neutral-200">
<div className="p-5 border-b border-neutral-200 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Custom fields</h2>
<p className="text-sm text-neutral-500">Fast tags your team cares about</p>
</div>
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-4 h-4" data-lucide="settings-2"></i>
</button>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center justify-between rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center h-6 px-2 rounded-md text-xs font-medium bg-rose-50 text-rose-700 ring-1 ring-rose-200">Value &gt; $50m</span>
<span className="text-xs text-neutral-500">Priority</span>
</div>
<span className="text-xs text-neutral-700">High</span>
</div>
<div className="rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-3">
<div className="text-xs text-neutral-500">Notes</div>
<p className="text-sm text-neutral-700 mt-1 line-clamp-3">This is a very long value that demonstrates how extended text is handled gracefully with proper line-clamping and spacing.</p>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-neutral-200">
<div className="p-5 border-b border-neutral-200">
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Company facts</h2>
<p className="text-sm text-neutral-500">Essentials at a glance</p>
</div>
<div className="p-5 space-y-4">
<div className="rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-4">
<div className="text-xs text-neutral-500">Industry</div>
<p className="mt-1 text-sm text-neutral-900">Management Consulting</p>
<div className="mt-2 text-xs text-neutral-500">Sectors</div>
<p className="mt-1 text-sm text-neutral-700">Computer Software, Technology, Information and Internet</p>
</div>
<div className="rounded-lg bg-neutral-50 ring-1 ring-neutral-200 p-4">
<div className="text-xs text-neutral-500">Registered address</div>
<p className="mt-1 text-sm text-neutral-800">52 Meadway<br/>Barnet<br/>United Kingdom<br/>EN5 5LB</p>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm hidden z-40" id="overlay"></div>


    </>
  );
}
