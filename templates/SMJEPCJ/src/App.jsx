import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        // Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Simple router
        const pages = document.querySelectorAll('section[data-page]');
        function showPage(name) {
          pages.forEach(p => {
            p.classList.toggle('hidden', p.getAttribute('data-page') !== name);
          });
          // Refresh icons for any newly revealed section (safe no-op otherwise)
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        document.querySelectorAll('.nav-btn, [data-route]').forEach(btn => {
          btn.addEventListener('click', () => showPage(btn.getAttribute('data-route')));
        });
        showPage('dashboard'); // default

        // User menu
        const userBtn = document.getElementById('userMenuBtn');
        const userMenu = document.getElementById('userMenu');
        if (userBtn && userMenu) {
          userBtn.addEventListener('click', () => userMenu.classList.toggle('hidden'));
          document.addEventListener('click', (e) => {
            if (!userMenu.contains(e.target) && !userBtn.contains(e.target)) userMenu.classList.add('hidden');
          });
        }

        // Collections disclosure
        const discBtn = document.getElementById('collectionsDisclosureBtn');
        const discEl = document.getElementById('collectionsDisclosure');
        if (discBtn && discEl) {
          discBtn.addEventListener('click', () => {
            const isHidden = discEl.classList.contains('hidden');
            discEl.classList.toggle('hidden', !isHidden);
            const icon = discBtn.querySelector('[data-lucide="chevron-down"]');
            if (icon) icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
            discBtn.querySelector('span').textContent = isHidden ? 'Collapse' : 'Expand';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }

        // Collections enable/disable
        const toggle = document.getElementById('collectionsToggle');
        const disabledBox = document.getElementById('collectionsDisabled');
        const enabledBox = document.getElementById('collectionsEnabled');
        function applyCollectionsState() {
          const on = toggle.checked;
          disabledBox.classList.toggle('hidden', on);
          enabledBox.classList.toggle('hidden', !on);
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        if (toggle) {
          applyCollectionsState();
          toggle.addEventListener('change', applyCollectionsState);
        }

        // Tabs
        const tabButtons = document.querySelectorAll('.coltab');
        const panels = document.querySelectorAll('[data-colpanel]');
        function activateTab(name) {
          tabButtons.forEach(b => {
            const active = b.getAttribute('data-coltab') === name;
            b.classList.toggle('border-b-2', active);
            b.classList.toggle('border-green-700', active);
            b.classList.toggle('text-slate-900', active);
          });
          panels.forEach(p => p.classList.toggle('hidden', p.getAttribute('data-colpanel') !== name));
          const label = document.getElementById('coltabSelectLabel');
          if (label) label.textContent = name.charAt(0).toUpperCase() + name.slice(1);
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        tabButtons.forEach(b => b.addEventListener('click', () => activateTab(b.getAttribute('data-coltab'))));
        activateTab('catalogue');

        // Tabs dropdown
        const coltabBtn = document.getElementById('coltabSelectBtn');
        const coltabMenu = document.getElementById('coltabSelectMenu');
        if (coltabBtn && coltabMenu) {
          coltabBtn.addEventListener('click', () => coltabMenu.classList.toggle('hidden'));
          coltabMenu.querySelectorAll('button[data-coltab]').forEach(item => {
            item.addEventListener('click', () => {
              activateTab(item.getAttribute('data-coltab'));
              coltabMenu.classList.add('hidden');
            });
          });
          document.addEventListener('click', (e) => {
            if (!coltabBtn.contains(e.target) && !coltabMenu.contains(e.target)) coltabMenu.classList.add('hidden');
          });
        }

        // Campaign type chooser
        const camBtn = document.getElementById('campaignTypeBtn');
        const camMenu = document.getElementById('campaignTypeMenu');
        const camLabel = document.getElementById('campaignTypeLabel');
        if (camBtn && camMenu) {
          camBtn.addEventListener('click', () => camMenu.classList.toggle('hidden'));
          camMenu.querySelectorAll('button[data-camptype]').forEach(item => {
            item.addEventListener('click', () => {
              camLabel.textContent = item.getAttribute('data-camptype');
              camMenu.classList.add('hidden');
            });
          });
          document.addEventListener('click', (e) => {
            if (!camBtn.contains(e.target) && !camMenu.contains(e.target)) camMenu.classList.add('hidden');
          });
        }

        // Charts (minimal)
        const ctxCampaign = document.getElementById('campaignChart');
        if (ctxCampaign) {
          new Chart(ctxCampaign.getContext('2d'), {
            type: 'line',
            data: {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                { label: 'Engagement', data: [820, 910, 760, 980, 1120, 1040, 1200], borderColor: '#16a34a', backgroundColor: 'rgba(22,163,74,0.1)', tension: 0.35 },
                { label: 'Sales', data: [2.1, 2.5, 2.2, 3.1, 3.6, 3.2, 3.9], yAxisID: 'y1', borderColor: '#0ea5e9', backgroundColor: 'rgba(14,165,233,0.1)', tension: 0.35 }
              ]
            },
            options: {
              maintainAspectRatio: false,
              plugins: { legend: { labels: { boxWidth: 10, usePointStyle: true } } },
              scales: { y: { beginAtZero: true }, y1: { beginAtZero: true, position: 'right' } }
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
      
<div className="min-h-screen flex" id="app">

<aside className="hidden lg:flex lg:flex-col w-72 border-r border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="flex items-center gap-3 px-5 h-16 border-b border-slate-200">
<div className="h-8 w-8 rounded-md bg-green-700 text-white flex items-center justify-center text-sm tracking-tight font-semibold">SM</div>
<div>
<p className="text-slate-900 text-[15px] tracking-tight font-medium">Sales Magics</p>
<p className="text-slate-500 text-xs">Grow and convert, elegantly</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto">
<div className="px-4 py-4">
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Core</p>
<ul className="space-y-1">
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="dashboard">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="text-sm">Dashboard</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="collections">
<i className="h-4 w-4" data-lucide="boxes"></i>
<span className="text-sm">Collections</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="payment-links">
<i className="h-4 w-4" data-lucide="link"></i>
<span className="text-sm">Payment Links</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="qtc">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span className="text-sm">QTC Billing</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="funnel">
<i className="h-4 w-4" data-lucide="workflow"></i>
<span className="text-sm">Funnel</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="customers">
<i className="h-4 w-4" data-lucide="users"></i>
<span className="text-sm">Customers</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="reports">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
<span className="text-sm">Reports</span>
</button>
</li>
</ul>
</div>
<div className="px-4 pt-2 pb-4">
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Grow Magics</p>
<ul className="space-y-1">
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="communities">
<i className="h-4 w-4" data-lucide="users"></i>
<span className="text-sm">Communities</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="events">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span className="text-sm">Events</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="content">
<i className="h-4 w-4" data-lucide="file-plus"></i>
<span className="text-sm">Content</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="monetization">
<i className="h-4 w-4" data-lucide="wallet"></i>
<span className="text-sm">Monetization</span>
</button>
</li>
</ul>
</div>
</nav>
<div className="px-4 py-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium tracking-tight text-slate-900">Ava Patel</p>
<p className="truncate text-xs text-slate-500">ava@salesmagics.app</p>
</div>
<button className="ml-auto p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20">
<i className="h-4 w-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<div className="flex-1 min-w-0 flex flex-col">

<header className="flex items-center gap-3 px-4 sm:px-6 h-16 border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<button className="lg:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="panel-left-open"></i>
</button>
<div className="flex-1 flex items-center gap-3">
<div className="relative flex-1 max-w-xl">
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-700" placeholder="Search customers, orders, campaigns..." type="search"/>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600/20">
<span className="hidden sm:inline">Create</span>
<span className="sm:hidden">New</span>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20 relative">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-700 rounded-full ring-2 ring-white"></span>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" id="userMenuBtn">
<i className="h-5 w-5" data-lucide="ellipsis-vertical"></i>
</button>
</div>
</div>

<div className="hidden absolute right-4 top-14 z-20 w-56 rounded-md border border-slate-200 bg-white shadow-lg" id="userMenu">
<div className="py-2">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-100 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="user"></i> Profile
              </button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-100 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="settings"></i> Settings
              </button>
<div className="my-2 border-t border-slate-200"></div>
<button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="log-out"></i> Log out
              </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="px-4 sm:px-6 py-6 space-y-8">

<section className="space-y-6" data-page="dashboard">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-[22px] sm:text-2xl tracking-tight text-slate-900 font-semibold">Welcome back, Ava</h1>
<p className="text-slate-500 text-sm">Login → Dashboard → Quick Actions / Analytics / Notifications</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">This Week</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Custom Range</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition">
<i className="h-4 w-4 text-green-700" data-lucide="megaphone"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Create Campaign</p>
<p className="text-xs text-slate-500">Discount, Coupon, Flash Sale</p>
</div>
</button>
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition" data-route="payment-links">
<i className="h-4 w-4 text-green-700" data-lucide="link-2"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Generate Payment Link</p>
<p className="text-xs text-slate-500">Share via Copy/WhatsApp/Email</p>
</div>
</button>
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition" data-route="funnel">
<i className="h-4 w-4 text-green-700" data-lucide="workflow"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Add Funnel</p>
<p className="text-xs text-slate-500">Sales, Upsell, Order Bump</p>
</div>
</button>
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition" data-route="collections">
<i className="h-4 w-4 text-green-700" data-lucide="package-plus"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Add Product</p>
<p className="text-xs text-slate-500">Catalogue, Pricing, Images</p>
</div>
</button>
</div>
</section>

<section className="hidden space-y-6" data-page="collections">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Collections</h2>
<p className="text-slate-500 text-sm">Dashboard → Collections → [Catalogue / Inventory / Campaigns] → [Details / Actions]</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-sm text-slate-600">Enable</span>

<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" id="collectionsToggle" type="checkbox"/>
<div className="h-6 w-11 rounded-full border border-slate-300 bg-slate-100 peer-checked:bg-green-700 transition-all"></div>
<div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white border border-slate-300 transition-all peer-checked:translate-x-5 peer-checked:border-green-600"></div>
</label>
</div>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Sync</button>
</div>
</div>

<div className="rounded-lg border border-slate-200">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="folder-open"></i>
<p className="text-sm text-slate-700">Collections section</p>
</div>
<button className="px-2 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50 flex items-center gap-1" id="collectionsDisclosureBtn">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
<span>Expand</span>
</button>
</div>
<div className="hidden border-t border-slate-200 p-4 space-y-4" id="collectionsDisclosure">

<div className="rounded-md border border-slate-200 p-4 bg-slate-50" id="collectionsDisabled">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-slate-500 mt-0.5" data-lucide="info"></i>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">Collections are currently disabled</p>
<p className="text-sm text-slate-600">Toggle on to manage your Product Store, Inventory, and Campaigns in one place.</p>
</div>
</div>
</div>

<div className="hidden" id="collectionsEnabled">

<div className="flex items-center gap-2">
<div className="relative">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50 flex items-center gap-2" id="coltabSelectBtn">
<i className="h-4 w-4" data-lucide="layout-panel-left"></i>
<span id="coltabSelectLabel">Catalogue</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-10 mt-1 w-40 rounded-md border border-slate-200 bg-white shadow-sm" id="coltabSelectMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-coltab="catalogue">Catalogue</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-coltab="inventory">Inventory</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-coltab="campaigns">Campaigns</button>
</div>
</div>
<div className="flex-1"></div>
</div>

<div className="mt-2 flex flex-wrap items-center gap-2 border-b border-slate-200">
<button className="coltab px-3 py-2 text-sm rounded-t-md border border-transparent hover:bg-slate-50" data-coltab="catalogue">Catalogue</button>
<button className="coltab px-3 py-2 text-sm rounded-t-md border border-transparent hover:bg-slate-50" data-coltab="inventory">Inventory</button>
<button className="coltab px-3 py-2 text-sm rounded-t-md border border-transparent hover:bg-slate-50" data-coltab="campaigns">Campaigns</button>
</div>

<div className="space-y-4 pt-4" data-colpanel="catalogue">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline-block mr-1" data-lucide="package-plus"></i> Add Product
                        </button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Categories</button>
<div className="ml-auto flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
<i className="h-4 w-4 inline-block mr-1" data-lucide="import"></i> Import
                          </button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
<i className="h-4 w-4 inline-block mr-1" data-lucide="export"></i> Export
                          </button>
</div>
</div>
<p className="text-xs text-slate-500">Product Store: Add Products, manage Categories, set Pricing, upload Images.</p>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Product</th>
<th className="py-2.5 px-4">Category</th>
<th className="py-2.5 px-4">Price</th>
<th className="py-2.5 px-4">Stock</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Hoodie — Forest</td>
<td className="py-2.5 px-4 text-slate-600">Apparel</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$59.00</td>
<td className="py-2.5 px-4 text-slate-600">124</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Active</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Edit</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-600">Accessories</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$29.00</td>
<td className="py-2.5 px-4 text-slate-600">42</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Draft</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Edit</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden space-y-4 pt-4" data-colpanel="inventory">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline-block mr-1" data-lucide="plus"></i> Add SKU
                        </button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Suppliers</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Sync with Catalogue</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-slate-500">Alerts</span>
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Low</span>
<span className="text-xs px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">Out</span>
</div>
</div>
<p className="text-xs text-slate-500">Stock levels with alerts. Add SKU, Supplier info, and sync with Catalogue.</p>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">SKU</th>
<th className="py-2.5 px-4">Product</th>
<th className="py-2.5 px-4">Supplier</th>
<th className="py-2.5 px-4">In Stock</th>
<th className="py-2.5 px-4">Threshold</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">HOD-OLV-S</td>
<td className="py-2.5 px-4 text-slate-600">Hoodie — Forest (S)</td>
<td className="py-2.5 px-4 text-slate-600">Evergreen Co.</td>
<td className="py-2.5 px-4 text-slate-900">12</td>
<td className="py-2.5 px-4 text-slate-600">20</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Low Stock</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Reorder</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">BOTT-SS-750</td>
<td className="py-2.5 px-4 text-slate-600">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-600">Northbase Ltd.</td>
<td className="py-2.5 px-4 text-slate-900">0</td>
<td className="py-2.5 px-4 text-slate-600">15</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">Out of Stock</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Reorder</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden space-y-4 pt-4" data-colpanel="campaigns">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800" id="createCampaignBtn">
<i className="h-4 w-4 inline-block mr-1" data-lucide="megaphone"></i> Create Campaign
                        </button>

<div className="relative">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50 flex items-center gap-2" id="campaignTypeBtn">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i>
<span id="campaignTypeLabel">Choose type</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-10 mt-1 w-44 rounded-md border border-slate-200 bg-white shadow-sm" id="campaignTypeMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-camptype="Discount">Discount</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-camptype="Coupon">Coupon</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-camptype="Flash Sale">Flash Sale</button>
</div>
</div>
<div className="ml-auto flex items-center gap-2">
<input className="px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" placeholder="Search campaigns..." type="search"/>
</div>
</div>
<p className="text-xs text-slate-500">Create campaign → Choose type (Discount, Coupon, Flash Sale). Assign products from Catalogue. Track performance.</p>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Name</th>
<th className="py-2.5 px-4">Type</th>
<th className="py-2.5 px-4">Assigned Products</th>
<th className="py-2.5 px-4">Engagement</th>
<th className="py-2.5 px-4">Sales</th>
<th className="py-2.5 px-4 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Forest Friday</td>
<td className="py-2.5 px-4 text-slate-600">Discount (15%)</td>
<td className="py-2.5 px-4 text-slate-600">Hoodie, Bottle</td>
<td className="py-2.5 px-4 text-slate-900">8.2k</td>
<td className="py-2.5 px-4 text-slate-900">$12.4k</td>
<td className="py-2.5 px-4 text-right"><span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Active</span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Welcome10</td>
<td className="py-2.5 px-4 text-slate-600">Coupon</td>
<td className="py-2.5 px-4 text-slate-600">All Catalogue</td>
<td className="py-2.5 px-4 text-slate-900">3.1k</td>
<td className="py-2.5 px-4 text-slate-900">$4.9k</td>
<td className="py-2.5 px-4 text-right"><span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Paused</span></td>
</tr>
</tbody>
</table>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<h4 className="text-[16px] tracking-tight font-semibold text-slate-900">Performance</h4>
<p className="text-xs text-slate-500">Engagement vs Sales</p>
<div className="mt-3 rounded-md border border-slate-100">
<div className="h-56">
<canvas id="campaignChart"></canvas>
</div>
</div>
</div>
</div>
</div> 
</div> 
</div> 
</section>

<section className="hidden space-y-4" data-page="payment-links">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Payment Links</h2>
<p className="text-slate-500 text-sm">Create and share one-time or recurring links.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
<i className="h-4 w-4 inline mr-1" data-lucide="copy"></i> Quick Copy
                  </button>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline mr-1" data-lucide="plus"></i> New Link
                  </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-1 rounded-lg border border-slate-200 p-4">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Generate link</h3>
<div className="mt-3 space-y-3">
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="package"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm" placeholder="Product or purpose"/>
</div>
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="banknote"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm" placeholder="Amount (USD)" type="number"/>
</div>
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="hash"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm" placeholder="Reference (optional)"/>
</div>
<button className="w-full px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline mr-1" data-lucide="link"></i> Generate
                    </button>
</div>
</div>
<div className="lg:col-span-2 rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Link</th>
<th className="py-2.5 px-4">Product</th>
<th className="py-2.5 px-4">Amount</th>
<th className="py-2.5 px-4">Uses</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">pay.salesmagics.app/l/ab12cd</td>
<td className="py-2.5 px-4 text-slate-600">Hoodie — Forest</td>
<td className="py-2.5 px-4 text-slate-900">$59.00</td>
<td className="py-2.5 px-4 text-slate-600">18</td>
<td className="py-2.5 px-4"><span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Active</span></td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Copy</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">pay.salesmagics.app/l/xy34zz</td>
<td className="py-2.5 px-4 text-slate-600">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-900">$29.00</td>
<td className="py-2.5 px-4 text-slate-600">5</td>
<td className="py-2.5 px-4"><span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Paused</span></td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Copy</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="qtc">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">QTC Billing</h2>
<p className="text-slate-500 text-sm">Quotes → Orders → Invoices → Payments</p>
</div>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline mr-1" data-lucide="file-plus-2"></i> New Quote
                </button>
</div>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Quote #</th>
<th className="py-2.5 px-4">Customer</th>
<th className="py-2.5 px-4">Amount</th>
<th className="py-2.5 px-4">Stage</th>
<th className="py-2.5 px-4">Updated</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Q-1024</td>
<td className="py-2.5 px-4 text-slate-600">Luna Corp</td>
<td className="py-2.5 px-4 text-slate-900">$1,240.00</td>
<td className="py-2.5 px-4"><span className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">Negotiation</span></td>
<td className="py-2.5 px-4 text-slate-600">2d ago</td>
<td className="py-2.5 px-4 text-right"><button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Convert</button></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Q-1025</td>
<td className="py-2.5 px-4 text-slate-600">Northbase Ltd.</td>
<td className="py-2.5 px-4 text-slate-900">$790.00</td>
<td className="py-2.5 px-4"><span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Won</span></td>
<td className="py-2.5 px-4 text-slate-600">4h ago</td>
<td className="py-2.5 px-4 text-right"><button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Invoice</button></td>
</tr>
</tbody>
</table>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Quotes (Open)</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">12</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Conversion Rate</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">41%</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Outstanding</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">$4,320</p>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="funnel">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Funnels</h2>
<p className="text-slate-500 text-sm">Design high-converting journeys.</p>
</div>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline mr-1" data-lucide="plus"></i> New Funnel
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Product Launch</h3>
<span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Active</span>
</div>
<ol className="mt-3 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="mouse-pointer"></i> Landing Page</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="credit-card"></i> Checkout</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="sparkles"></i> Upsell</li>
</ol>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Lead Magnet</h3>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Paused</span>
</div>
<ol className="mt-3 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="download"></i> Opt-in</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail"></i> Email Nurture</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="shopping-bag"></i> Offer</li>
</ol>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="customers">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Customers</h2>
<p className="text-slate-500 text-sm">Profiles and activity.</p>
</div>
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm" placeholder="Search customers..."/>
</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Name</th>
<th className="py-2.5 px-4">Email</th>
<th className="py-2.5 px-4">Orders</th>
<th className="py-2.5 px-4">LTV</th>
<th className="py-2.5 px-4">Tags</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Ava Patel</td>
<td className="py-2.5 px-4 text-slate-600">ava@salesmagics.app</td>
<td className="py-2.5 px-4 text-slate-900">8</td>
<td className="py-2.5 px-4 text-slate-900">$624</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">VIP</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">View</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Kai Chen</td>
<td className="py-2.5 px-4 text-slate-600">kai@example.com</td>
<td className="py-2.5 px-4 text-slate-900">3</td>
<td className="py-2.5 px-4 text-slate-900">$142</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Warm</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">View</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="hidden space-y-4" data-page="reports">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Reports</h2>
<p className="text-slate-500 text-sm">Key metrics at a glance.</p>
</div>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
<i className="h-4 w-4 inline mr-1" data-lucide="download"></i> Export
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Revenue (30d)</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">$28.4k</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Orders</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">1,102</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">AOV</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">$25.77</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Refunds</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">1.7%</p>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Top Products</h3>
<div className="mt-3 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Product</th>
<th className="py-2.5 px-4">Units</th>
<th className="py-2.5 px-4">Revenue</th>
<th className="py-2.5 px-4">Return rate</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Hoodie — Forest</td>
<td className="py-2.5 px-4 text-slate-900">412</td>
<td className="py-2.5 px-4 text-slate-900">$24.3k</td>
<td className="py-2.5 px-4 text-slate-600">0.6%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-900">267</td>
<td className="py-2.5 px-4 text-slate-900">$7.7k</td>
<td className="py-2.5 px-4 text-slate-600">1.2%</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="communities">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Communities</h2>
<p className="text-slate-500 text-sm">Groups, members and engagement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="users"></i>
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Founders Circle</h3>
</div>
<p className="mt-1 text-sm text-slate-600">Private group for early adopters.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
<span>312 members</span>
<span>•</span>
<span>Active: High</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="messages-square"></i>
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Design Guild</h3>
</div>
<p className="mt-1 text-sm text-slate-600">Weekly critiques and showcases.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
<span>148 members</span>
<span>•</span>
<span>Active: Medium</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="code-2"></i>
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Builders Hub</h3>
</div>
<p className="mt-1 text-sm text-slate-600">Tutorials, snippets, support.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
<span>896 members</span>
<span>•</span>
<span>Active: High</span>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="events">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Events</h2>
<p className="text-slate-500 text-sm">Workshops and live sessions.</p>
</div>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline mr-1" data-lucide="calendar-plus"></i> New Event
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Checkout UX Deep Dive</h3>
<span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Upcoming</span>
</div>
<p className="mt-1 text-sm text-slate-600">Oct 12, 10:00–11:30 AM</p>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="map-pin"></i> Online
                  </div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Holiday Campaign Planning</h3>
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Recorded</span>
</div>
<p className="mt-1 text-sm text-slate-600">Sep 02, 2:00–3:00 PM</p>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="play"></i> Watch recording
                  </div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="content">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Content</h2>
<p className="text-slate-500 text-sm">Drafts, posts and media.</p>
</div>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline mr-1" data-lucide="file-plus"></i> New Post
                </button>
</div>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Title</th>
<th className="py-2.5 px-4">Type</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4">Updated</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">How to optimize AOV</td>
<td className="py-2.5 px-4 text-slate-600">Article</td>
<td className="py-2.5 px-4"><span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Published</span></td>
<td className="py-2.5 px-4 text-slate-600">Today</td>
<td className="py-2.5 px-4 text-right"><button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Edit</button></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Holiday playbook</td>
<td className="py-2.5 px-4 text-slate-600">Guide</td>
<td className="py-2.5 px-4"><span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Draft</span></td>
<td className="py-2.5 px-4 text-slate-600">2d ago</td>
<td className="py-2.5 px-4 text-right"><button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Edit</button></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="hidden space-y-4" data-page="monetization">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Monetization</h2>
<p className="text-slate-500 text-sm">Plans, subscriptions and payouts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 p-4">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Starter</h3>
<p className="text-sm text-slate-600">Basic features for personal use.</p>
<p className="mt-2 text-[22px] tracking-tight font-semibold text-slate-900">$9/mo</p>
<button className="mt-3 w-full px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Configure</button>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Growth</h3>
<p className="text-sm text-slate-600">Advanced tools and automations.</p>
<p className="mt-2 text-[22px] tracking-tight font-semibold text-slate-900">$29/mo</p>
<button className="mt-3 w-full px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">Current</button>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Scale</h3>
<p className="text-sm text-slate-600">For teams with complex needs.</p>
<p className="mt-2 text-[22px] tracking-tight font-semibold text-slate-900">$99/mo</p>
<button className="mt-3 w-full px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Contact Sales</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">MRR</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">$12.7k</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Active Subs</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">842</p>
</div>
<div className="rounded-md border border-slate-200 p-4">
<p className="text-xs text-slate-500">Churn</p>
<p className="text-[22px] tracking-tight font-semibold text-slate-900">2.4%</p>
</div>
</div>
</section>
</div>
</main>
</div>
</div>


    </>
  );
}
