import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      // Accordion behavior
      document.querySelectorAll('[data-accordion="toggle"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('[data-lucide="chevron-down"]');
          content.classList.toggle('hidden');
          icon && icon.classList.toggle('rotate-180');
        });
      });

      // Scroll to filters (desktop)
      document.getElementById('scrollToFilters')?.addEventListener('click', () => {
        window.scrollTo({ top: 130, behavior: 'smooth' });
      });

      // Collect active filters
      const activeFilters = new Set();
      const activeContainer = document.getElementById('activeFilters');
      function renderActiveChips() {
        activeContainer.innerHTML = '';
        activeFilters.forEach(label => {
          const chip = document.createElement('button');
          chip.className = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs ring-1 ring-orange-200';
          chip.innerHTML = `<span>${label}</span> <i data-lucide="x" class="h-3.5 w-3.5"></i>`;
          chip.addEventListener('click', () => {
            activeFilters.delete(label);
            renderActiveChips();
          });
          activeContainer.appendChild(chip);
        });
        lucide.createIcons();
      }

      // Filter option toggle
      function toggleFilterLabel(el) {
        const label = el.dataset.filter;
        if (!label) return;
        if (activeFilters.has(label)) {
          activeFilters.delete(label);
          el.classList.remove('bg-orange-50','ring-orange-200');
        } else {
          activeFilters.add(label);
          el.classList.add('bg-orange-50','ring-orange-200');
        }
        renderActiveChips();
      }

      document.querySelectorAll('[data-filter]').forEach(el => {
        el.addEventListener('click', () => toggleFilterLabel(el));
      });

      // Apply filters -> simulate load and results
      const applyButtons = ['applyFilters','mobileApply','drawerApply'].map(id => document.getElementById(id)).filter(Boolean);
      applyButtons.forEach(btn => btn.addEventListener('click', simulateFetch));
      document.getElementById('mobileEnrich')?.addEventListener('click', () => showToast('Enrichment queued'));
      document.getElementById('btnEnrich')?.addEventListener('click', () => showToast('Enrichment started'));
      document.getElementById('btnSave')?.addEventListener('click', () => showToast('List saved'));
      document.getElementById('btnExport')?.addEventListener('click', () => showToast('Export prepared'));

      document.getElementById('clearAll')?.addEventListener('click', () => {
        activeFilters.clear();
        document.querySelectorAll('[data-filter]').forEach(el => el.classList.remove('bg-orange-50','ring-orange-200'));
        renderActiveChips();
        document.getElementById('results').classList.add('hidden');
        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('emptyState').classList.remove('hidden');
        updateResultCount(0);
      });

      // View toggle
      const listBtn = document.getElementById('listViewBtn');
      const gridBtn = document.getElementById('gridViewBtn');
      listBtn?.addEventListener('click', () => setView('list'));
      gridBtn?.addEventListener('click', () => setView('grid'));

      // Mobile drawer
      const drawer = document.getElementById('drawer');
      const toggleDrawer = () => drawer.classList.toggle('hidden');
      document.getElementById('mobileToggleDrawer')?.addEventListener('click', toggleDrawer);
      document.getElementById('drawerClose')?.addEventListener('click', toggleDrawer);
      document.getElementById('drawerBackdrop')?.addEventListener('click', toggleDrawer);
      document.getElementById('openMobileFilters')?.addEventListener('click', toggleDrawer);

      // Initial sample results
      const sample = [
        { name:'Taylor Reed', title:'Head of Growth', company:'Valence', location:'Austin, US', enriched:true, img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
        { name:'Jae Kim', title:'VP Marketing', company:'Kintara', location:'NYC, US', enriched:false, img:'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=400&auto=format&fit=crop' },
        { name:'Marta Silva', title:'Demand Gen Manager', company:'Orbital', location:'Lisbon, PT', enriched:true, img:'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop' },
        { name:'Arjun Mehta', title:'VP Sales', company:'Qubik', location:'London, UK', enriched:false, img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
        { name:'Lena
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-white/60">
<div className="mx-auto max-w-7xl px-3 sm:px-6">
<div className="flex items-center gap-3 py-3">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 shadow-sm"></div>
<div className="text-xl tracking-tight font-semibold text-slate-900">Searchleads</div>
</div>

<div className="flex-1 hidden md:flex">
<div className="relative w-full max-w-xl mx-auto">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-xl pl-9 pr-12 py-2.5 text-sm bg-white/90 ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-400/60 outline-none shadow-sm placeholder:text-slate-400 transition" id="globalSearch" placeholder="Search people, companies, or domains"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="px-2 py-0.5 text-[11px] rounded-md bg-slate-100 text-slate-600">/</span>
</div>
</div>
</div>

<div className="ml-auto flex items-center gap-2 sm:gap-3">
<div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/90 ring-1 ring-slate-200 px-2.5 py-1.5 shadow-sm">
<i className="h-4 w-4 text-orange-500" data-lucide="coins"></i>
<span className="text-sm font-medium text-slate-700">Credits: <span className="font-semibold text-slate-900">1,240</span></span>
</div>
<button className="relative rounded-xl ring-1 ring-slate-200 bg-white/90 p-2 shadow-sm hover:shadow transition">
<i className="h-4 w-4 text-slate-600" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-orange-500 text-white text-[10px] px-1">3</span>
</button>
<button className="flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white/90 px-2 py-1 shadow-sm hover:shadow transition">
<img alt="avatar" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<span className="hidden sm:block text-sm font-medium text-slate-700 pr-1">Alex</span>
<i className="h-4 w-4 text-slate-600" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="md:hidden pb-3 -mt-1">
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button className="shrink-0 px-3 py-1.5 rounded-full bg-white/90 ring-1 ring-slate-200 text-sm text-slate-700">Job Title</button>
<button className="shrink-0 px-3 py-1.5 rounded-full bg-white/90 ring-1 ring-slate-200 text-sm text-slate-700">Location</button>
<button className="shrink-0 px-3 py-1.5 rounded-full bg-white/90 ring-1 ring-slate-200 text-sm text-slate-700">Industry</button>
<button className="shrink-0 px-3 py-1.5 rounded-full bg-white/90 ring-1 ring-slate-200 text-sm text-slate-700">Company Size</button>
</div>
</div>
</div>
</header>

<div className="sticky top-[68px] md:top-[72px] z-30 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur border-b border-white/60">
<div className="mx-auto max-w-7xl px-3 sm:px-6">
<div className="flex items-center justify-between gap-3 py-2.5">
<div className="flex items-center gap-2">
<h2 className="text-lg sm:text-xl tracking-tight font-semibold text-slate-900">People</h2>
<span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-orange-50 text-orange-700 px-2.5 py-1 text-xs ring-1 ring-orange-200" id="resultCountBadge">0 results</span>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-1 rounded-xl bg-white/90 ring-1 ring-slate-200 p-1 shadow-sm">
<button className="px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition" id="listViewBtn">
<i className="inline h-4 w-4 mr-1" data-lucide="list"></i>List
            </button>
<button className="px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100 transition" id="gridViewBtn">
<i className="inline h-4 w-4 mr-1" data-lucide="grid-3x3"></i>Grid
            </button>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3.5 py-2 text-sm font-medium shadow hover:opacity-95 transition" id="btnEnrich">
<i className="h-4 w-4" data-lucide="sparkles"></i> Enrich Contacts
          </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow transition" id="btnSave">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save List
          </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow transition" id="btnExport">
<i className="h-4 w-4" data-lucide="download"></i> Export
          </button>
</div>
</div>

<div className="flex flex-wrap gap-2 pb-3" id="activeFilters"></div>
</div>
</div>

<main className="mx-auto max-w-7xl px-3 sm:px-6 py-4 md:py-6">
<div className="grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] gap-4 md:gap-6">

<aside className="hidden md:block">
<div className="sticky top-[128px] space-y-3">
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-50 to-rose-50 border-b border-slate-100">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-orange-600" data-lucide="sliders-horizontal"></i>
<span className="font-semibold text-slate-900 tracking-tight">Filters</span>
</div>
<div className="flex items-center gap-2">
<button className="text-sm text-slate-600 hover:text-slate-900" id="clearAll">Clear</button>
<button className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white px-2.5 py-1.5 text-sm font-medium shadow hover:opacity-95 transition" id="applyFilters">
<i className="h-4 w-4" data-lucide="filter"></i> Apply
                </button>
</div>
</div>
<div className="p-3">

<div className="space-y-2" id="filterGroups">

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="briefcase"></i>
<span className="font-medium text-slate-900">Job Titles</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="relative mb-2">
<i className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full rounded-lg bg-slate-50/70 pl-9 pr-3 py-2 text-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-300 outline-none" placeholder="Search titles"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Job: VP Marketing">VP Marketing</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Job: Head of Growth">Head of Growth</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Job: Demand Gen">Demand Gen</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Job: VP Sales">VP Sales</button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="globe-2"></i>
<span className="font-medium text-slate-900">Location</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="relative mb-2">
<i className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full rounded-lg bg-slate-50/70 pl-9 pr-3 py-2 text-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-300 outline-none" placeholder="Country, region, city"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Location: United States">United States</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Location: United Kingdom">United Kingdom</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Location: DACH">DACH</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Location: Remote">Remote</button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="building-2"></i>
<span className="font-medium text-slate-900">Industry</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="relative mb-2">
<i className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full rounded-lg bg-slate-50/70 pl-9 pr-3 py-2 text-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-300 outline-none" placeholder="Search industries"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Industry: SaaS">SaaS</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Industry: Fintech">Fintech</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Industry: AI">AI</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Industry: E-commerce">E‑commerce</button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="users"></i>
<span className="font-medium text-slate-900">Company Size</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Size: 1-10">1-10</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Size: 11-50">11-50</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Size: 51-200">51-200</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Size: 201-1000">201-1k</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Size: 1000+">1000+</button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="cpu"></i>
<span className="font-medium text-slate-900">Technology</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="relative mb-2">
<i className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full rounded-lg bg-slate-50/70 pl-9 pr-3 py-2 text-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-300 outline-none" placeholder="CRM, data, analytics..."/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Tech: Salesforce">Salesforce</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Tech: HubSpot">HubSpot</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Tech: Segment">Segment</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Tech: Snowflake">Snowflake</button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="banknote"></i>
<span className="font-medium text-slate-900">Revenue Range</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Revenue: &lt; $1M">&lt; $1M</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Revenue: $1–10M">$1–10M</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Revenue: $10–100M">$10–100M</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Revenue: $100M+">$100M+</button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden">
<button className="w-full flex items-center justify-between px-3.5 py-3" data-accordion="toggle">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="rocket"></i>
<span className="font-medium text-slate-900">Funding</span>
</div>
<i className="h-4 w-4 text-slate-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-3.5 pb-3 hidden">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Funding: Bootstrapped">Bootstrapped</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Funding: Seed">Seed</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Funding: Series A-B">Series A‑B</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm text-slate-700 hover:bg-orange-50 hover:ring-orange-200 transition" data-filter="Funding: Series C+">Series C+</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-br from-orange-100/60 to-rose-100/60 ring-1 ring-orange-200/60 p-4 shadow-sm">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-orange-600" data-lucide="lightbulb"></i>
<div>
<div className="font-medium text-slate-900 tracking-tight">Tips</div>
<p className="text-sm text-slate-700 mt-1">Start with Job Title and Location for best results. Use Enrich Contacts to fetch verified emails.</p>
</div>
</div>
</div>
</div>
</aside>

<section className="min-h-[60vh]">

<div className="h-full flex items-center justify-center" id="emptyState">
<div className="max-w-md w-full rounded-2xl bg-white/90 ring-1 ring-slate-200 p-6 text-center shadow-sm">
<div className="relative mx-auto h-40 w-full overflow-hidden rounded-xl ring-1 ring-slate-200 bg-gradient-to-br from-orange-100 via-rose-100 to-orange-50 mb-4">
<img alt="warm illustration" className="h-full w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-rose-500/30"></div>
</div>
<div className="flex items-center justify-center gap-2 mb-2">
<i className="h-5 w-5 text-orange-600" data-lucide="funnel"></i>
<h3 className="text-[22px] tracking-tight font-semibold text-slate-900">Start by selecting filters</h3>
</div>
<p className="text-sm text-slate-600 mb-4">Choose Job Titles, Location, or Industry to fetch targeted leads. You can switch between list and grid at any time.</p>
<div className="flex items-center justify-center gap-2">
<button className="md:hidden inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:opacity-95 transition" id="openMobileFilters">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i> Open Filters
              </button>
<button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:opacity-95 transition" id="scrollToFilters">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i> Open Filters
              </button>
</div>
</div>
</div>

<div className="hidden" id="loadingState">
<div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm animate-pulse">
<div className="h-28 w-full rounded-xl bg-slate-100 mb-3"></div>
<div className="h-4 bg-slate-100 rounded w-2/3 mb-2"></div>
<div className="h-4 bg-slate-100 rounded w-1/2"></div>
</div>
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm animate-pulse">
<div className="h-28 w-full rounded-xl bg-slate-100 mb-3"></div>
<div className="h-4 bg-slate-100 rounded w-2/3 mb-2"></div>
<div className="h-4 bg-slate-100 rounded w-1/2"></div>
</div>
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm animate-pulse">
<div className="h-28 w-full rounded-xl bg-slate-100 mb-3"></div>
<div className="h-4 bg-slate-100 rounded w-2/3 mb-2"></div>
<div className="h-4 bg-slate-100 rounded w-1/2"></div>
</div>
</div>
</div>

<div className="hidden" id="results">
<div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" id="cardGrid">

</div>

<div className="hidden mt-2 overflow-hidden rounded-2xl bg-white/90 ring-1 ring-slate-200 shadow-sm" id="listView">
<div className="grid grid-cols-12 px-4 py-3 bg-slate-50/70 text-xs font-medium text-slate-700">
<div className="col-span-5">Name &amp; Title</div>
<div className="col-span-3">Company</div>
<div className="col-span-2">Location</div>
<div className="col-span-2 text-right pr-2">Enrichment</div>
</div>
<div className="divide-y divide-slate-100" id="listRows"></div>
</div>
</div>
</section>
</div>
</main>

<div className="fixed md:hidden bottom-3 inset-x-0 px-3 z-50">
<div className="mx-auto max-w-lg rounded-2xl bg-white/95 ring-1 ring-slate-200 shadow-lg p-2 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:opacity-95 transition" id="mobileToggleDrawer">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i> Filters
      </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm" id="mobileEnrich">
<i className="h-4 w-4" data-lucide="sparkles"></i> Enrich
        </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm" id="mobileApply">
<i className="h-4 w-4" data-lucide="filter"></i> Apply
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="drawer">
<div className="absolute inset-0 bg-slate-900/30" id="drawerBackdrop"></div>
<div className="absolute bottom-0 inset-x-0 rounded-t-3xl bg-white shadow-2xl ring-1 ring-slate-200 max-h-[80vh] overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-orange-600" data-lucide="sliders-horizontal"></i>
<div className="font-semibold text-slate-900 tracking-tight">Filters</div>
</div>
<button className="rounded-full p-2 hover:bg-slate-50" id="drawerClose">
<i className="h-5 w-5 text-slate-600" data-lucide="x"></i>
</button>
</div>
<div className="p-3 overflow-y-auto">

<div className="space-y-3">
<div>
<div className="text-sm font-medium text-slate-900 mb-2">Job Titles</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Job: VP Marketing">VP Marketing</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Job: Head of Growth">Head of Growth</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Job: Demand Gen">Demand Gen</button>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-2">Location</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Location: United States">United States</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Location: United Kingdom">United Kingdom</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Location: Remote">Remote</button>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-2">Industry</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Industry: SaaS">SaaS</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Industry: Fintech">Fintech</button>
<button className="px-3 py-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 text-sm" data-filter="Industry: AI">AI</button>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-slate-100 bg-slate-50/60">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2.5 text-sm font-medium shadow" id="drawerApply">
<i className="h-4 w-4" data-lucide="filter"></i> Apply Filters
        </button>
</div>
</div>
</div>

<div className="hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-50" id="toast">
<div className="rounded-xl bg-slate-900 text-white px-4 py-2 shadow-lg text-sm flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>
<span id="toastMsg">Saved</span>
</div>
</div>

<section className="mx-auto max-w-7xl px-3 sm:px-6 pb-14">
<h3 className="mt-8 mb-3 text-[22px] tracking-tight font-semibold text-slate-900">Components</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm">
<div className="text-sm text-slate-500 mb-2">Buttons</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-medium shadow">Primary</button>
<button className="px-3 py-2 rounded-xl bg-white ring-1 ring-slate-200 text-sm text-slate-700 shadow-sm">Secondary</button>
<button className="px-3 py-2 rounded-xl bg-slate-100 text-sm text-slate-700">Ghost</button>
</div>
</div>
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm">
<div className="text-sm text-slate-500 mb-2">Chips</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs ring-1 ring-orange-200">Active Filter</span>
<span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">Neutral</span>
</div>
</div>
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm">
<div className="text-sm text-slate-500 mb-2">Cards</div>
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-3 flex gap-3">
<img alt="" className="h-12 w-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="font-medium text-slate-900">Taylor Reed</div>
<div className="text-slate-600">Head of Growth • Valence</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/90 ring-1 ring-slate-200 p-4 shadow-sm">
<div className="text-sm text-slate-500 mb-2">States</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 text-xs rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">Enriched</span>
<span className="px-2 py-1 text-xs rounded-md bg-amber-50 text-amber-700 ring-1 ring-amber-200">Queued</span>
<span className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200">Unknown</span>
</div>
</div>
</div>
</section>

    </>
  );
}
