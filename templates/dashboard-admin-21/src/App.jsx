import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });

      // Sidebar toggle (mobile)
      const menuBtn = document.getElementById('menuBtn');
      const sidebar = document.getElementById('sidebar');
      if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
          sidebar.classList.toggle('hidden');
          sidebar.classList.toggle('fixed');
          sidebar.classList.toggle('inset-y-0');
          sidebar.classList.toggle('z-40');
        });
      }

      // Close CMS banner
      const closeBanner = document.getElementById('closeBanner');
      const cmsBanner = document.getElementById('cmsBanner');
      if (closeBanner && cmsBanner) {
        closeBanner.addEventListener('click', () => cmsBanner.remove());
      }

      // Select all checkboxes
      const selectAll = document.getElementById('selectAll');
      const rowChecks = () => Array.from(document.querySelectorAll('.rowCheck'));
      if (selectAll) {
        selectAll.addEventListener('change', (e) => {
          rowChecks().forEach(cb => cb.checked = e.target.checked);
        });
      }

      // Simple client-side search by title
      const search = document.getElementById('search');
      const rows = () => Array.from(document.querySelectorAll('#tableBody tr'));
      if (search) {
        search.addEventListener('input', (e) => {
          const q = e.target.value.trim().toLowerCase();
          rows().forEach(tr => {
            const titleCell = tr.querySelector('td:nth-child(2)');
            const title = titleCell ? titleCell.innerText.toLowerCase() : '';
            tr.style.display = title.includes(q) ? '' : 'none';
          });
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex">

<aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-white border-r border-zinc-200" id="sidebar">

<div className="h-14 px-4 border-b border-zinc-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-amber-100"></span>
<span className="text-sm font-semibold tracking-tight">Acme Inc</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto p-3 space-y-6">
<div>
<div className="px-2 pb-2 text-[11px] uppercase tracking-wide text-zinc-500">Analytics</div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="layout-dashboard"></i>
<span className="font-medium">Overview</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="activity"></i>
<span className="font-medium">Analytics</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="eye"></i>
<span className="font-medium">Visibility</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="bar-chart-2"></i>
<span className="font-medium">Reports</span>
</a>
</li>
</ul>
</div>
<div>
<div className="px-2 pb-2 text-[11px] uppercase tracking-wide text-zinc-500">Content</div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="calendar"></i>
<span className="font-medium">Planner</span>
</a>
</li>
<li>
<a aria-current="page" className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm bg-zinc-900/5 text-zinc-900 ring-1 ring-inset ring-zinc-200" href="#">
<i className="h-4 w-4 text-zinc-600" data-lucide="file-text"></i>
<span className="font-semibold">Articles</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="youtube"></i>
<span className="font-medium">YouTube</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="radio"></i>
<span className="font-medium">Podcasts</span>
</a>
</li>
</ul>
</div>
<div>
<div className="px-2 pb-2 text-[11px] uppercase tracking-wide text-zinc-500">Settings</div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="plug"></i>
<span className="font-medium">Integrations</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="users"></i>
<span className="font-medium">Users</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="palette"></i>
<span className="font-medium">Branding</span>
</a>
</li>
</ul>
</div>
</nav>

<div className="border-t border-zinc-200 p-3 mt-auto">
<a className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-zinc-50" href="#">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-zinc-500" data-lucide="help-circle"></i>
<span className="text-sm font-medium">Help</span>
</div>
</a>
<div className="mt-2 flex items-center gap-3 px-2.5 py-2 rounded-lg">
<img alt="Avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<span className="text-sm font-medium">AI M.</span>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="h-14 bg-white border-b border-zinc-200 px-3 md:px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-md border border-zinc-200 text-zinc-700" id="menuBtn">
<i className="h-4 w-4" data-lucide="menu"></i>
</button>
<h1 className="text-[20px] tracking-tight font-semibold">Articles</h1>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-md text-sm font-medium border border-zinc-200 bg-white hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="wand-2"></i>
              Quick actions
            </button>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-md text-sm font-medium border border-zinc-200 bg-white hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="bot"></i>
              AI Chat
            </button>
</div>
</header>

<main className="p-3 md:p-6 space-y-4">

<section className="relative bg-white border border-zinc-200 rounded-xl p-4 md:p-5" id="cmsBanner">
<button className="absolute right-3 top-3 h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50" id="closeBanner">
<i className="h-4 w-4 text-zinc-600" data-lucide="x"></i>
</button>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="space-y-2">
<span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 text-amber-800 px-2.5 py-0.5 text-xs font-medium">
<i className="h-3.5 w-3.5" data-lucide="alert-triangle"></i>
                  CMS Not Connected
                </span>
<div className="text-sm text-zinc-700 font-medium">
                  Connect your CMS to publish articles automatically
                </div>
<p className="text-xs text-zinc-500">You can always do this later in settings.</p>
</div>
<div className="shrink-0">
<button className="inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800">
                  Connect CMS
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="bg-white border border-zinc-200 rounded-xl overflow-hidden">

<div className="p-4 md:p-5 border-b border-zinc-200 space-y-3">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-md text-sm font-medium border border-zinc-200 bg-white hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="chevron-down"></i>
<span>September 2025</span>
</button>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" data-lucide="calendar"></i>
<input className="h-9 pl-9 pr-3 rounded-md border border-zinc-200 text-sm text-zinc-700 bg-white" type="date" value="2025-09-01"/>
</div>
<div className="relative w-56">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" data-lucide="search"></i>
<input className="h-9 w-full pl-9 pr-3 rounded-md border border-zinc-200 text-sm text-zinc-700 bg-white" id="search" placeholder="Search articles" type="text" />
</input></div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium border border-zinc-200 bg-white hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="plus"></i>
                    Add Keywords
                  </button>
</div>
</div>

<div className="flex items-center gap-1">
<button className="h-8 px-3 rounded-md text-sm font-semibold bg-zinc-900 text-white">All</button>
<button className="h-8 px-3 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 border border-transparent">Drafts</button>
<button className="h-8 px-3 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 border border-transparent">Needs Review</button>
<button className="h-8 px-3 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 border border-transparent">Scheduled</button>
<button className="h-8 px-3 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-50 border border-transparent">Published</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="bg-white">
<tr className="border-b border-zinc-200">
<th className="w-10 px-4 py-3 text-left">

<label className="inline-flex items-center relative select-none">
<input className="peer sr-only" id="selectAll" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</th>
<th className="px-4 py-3 text-left text-xs font-medium text-zinc-500">Title</th>
<th className="px-4 py-3 text-left text-xs font-medium text-zinc-500">Tags</th>
<th className="px-4 py-3 text-left text-xs font-medium text-zinc-500">Status</th>
<th className="px-4 py-3 text-left text-xs font-medium text-zinc-500">Date</th>
<th className="px-4 py-3 text-left text-xs font-medium text-zinc-500">Volume</th>
<th className="px-4 py-3 text-right text-xs font-medium text-zinc-500">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200" id="tableBody">

<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3">
<div className="text-sm font-medium text-zinc-900">How to Create a Cohesive Brand Identity</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200 px-2 py-0.5 text-xs font-medium">How-to</span>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200 px-2 py-0.5 text-xs font-medium">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Published
                      </span>
</td>
<td className="px-4 py-3 text-zinc-700">09/15/2025</td>
<td className="px-4 py-3 text-zinc-700">320</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 text-zinc-700 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">How to Optimize Your Website for Conversions</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200 px-2 py-0.5 text-xs font-medium">How-to</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">03/12/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">How to Choose the Right Typography for Your Brand</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200 px-2 py-0.5 text-xs font-medium">How-to</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">07/22/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Figma vs. Sketch: Which Design Tool Should You Choose?</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">11/05/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Top 5 Logo Design Software Options Compared</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">01/30/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Adobe Illustrator vs. Canva: Best Tool for Your Needs</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">05/14/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">10 Inspiring Website Redesigns of 2025</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200 px-2 py-0.5 text-xs font-medium">Listicle</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">08/09/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">7 Essential Tools Every Design Agency Should Use</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200 px-2 py-0.5 text-xs font-medium">Listicle</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">02/18/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">5 Branding Mistakes to Avoid in Your Next Project</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-zinc-50 text-zinc-700 ring-1 ring-inset ring-zinc-200 px-2 py-0.5 text-xs font-medium">—</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">09/01/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Figma vs. Sketch: Which Design Tool Should You Choose?</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">12/15/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">The Future of UX Design: Trends to Watch in 2026</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200 px-2 py-0.5 text-xs font-medium">Article</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">04/25/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">10 Color Palettes for Modern Branding</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200 px-2 py-0.5 text-xs font-medium">Listicle</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>Review</span></td>
<td className="px-4 py-3 text-zinc-700">10/10/2025</td>
<td className="px-4 py-3 text-zinc-700">265</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Comparing Prototyping Tools: Figma, InVision, and Adobe XD</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>Review</span></td>
<td className="px-4 py-3 text-zinc-700">06/30/2025</td>
<td className="px-4 py-3 text-zinc-700">478</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Figma vs. Sketch: Which Design Tool Should You Choose?</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">11/05/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">The Future of UX Design: Trends to Watch in 2026</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200 px-2 py-0.5 text-xs font-medium">Article</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Scheduled</span></td>
<td className="px-4 py-3 text-zinc-700">04/25/2025</td>
<td className="px-4 py-3 text-zinc-500">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="w-10 px-4 py-3">
<label className="inline-flex items-center relative select-none">
<input className="peer sr-only rowCheck" type="checkbox"/>
<span className="h-4 w-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="h-3 w-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
</label>
</td>
<td className="px-4 py-3"><div className="text-sm font-medium">Comparing Prototyping Tools: Figma, InVision, and Adobe XD</div></td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium">Comparison</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200 px-2 py-0.5 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>Review</span></td>
<td className="px-4 py-3 text-zinc-700">06/30/2025</td>
<td className="px-4 py-3 text-zinc-700">478</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-zinc-200 hover:bg-zinc-50">View</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="pencil"></i></button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50"><i className="h-4 w-4 text-zinc-600" data-lucide="more-vertical"></i></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 md:p-5 border-t border-zinc-200">
<div className="text-xs text-zinc-600">Viewing 1–13 of 36 results</div>
<div className="flex items-center gap-1">
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="chevron-left"></i>
</button>
<button className="h-8 w-8 rounded-md border border-zinc-200 bg-zinc-900 text-white font-semibold">1</button>
<button className="h-8 w-8 rounded-md border border-zinc-200 hover:bg-zinc-50">2</button>
<button className="h-8 w-8 rounded-md border border-zinc-200 hover:bg-zinc-50">3</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-50">
<i className="h-4 w-4 text-zinc-600" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>
</main>
</div>
</div>




    </>
  );
}
