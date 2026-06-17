import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
      // Init lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Simple router (added 'contract' alias)
      const views = {
        clients: document.getElementById('view-clients'),
        contact: document.getElementById('view-contact'),
        contract: document.getElementById('view-contact'),
      };
      const title = document.getElementById('pageTitle');

      function setRoute(hash) {
        const route = (hash || '#clients').replace('#','');
        Object.entries(views).forEach(([k, el]) => {
          el.classList.toggle('hidden', k !== route);
        });
        title.textContent = route === 'clients' ? 'Clients' : (route === 'contract' ? 'Contract' : 'Contact');
        // Repaint icons that might be added in hidden view
        lucide.createIcons();
      }
      window.addEventListener('hashchange', () => setRoute(location.hash));
      document.querySelectorAll('[data-route]').forEach(a => {
        a.addEventListener('click', () => {
          const href = a.getAttribute('href');
          if (href?.startsWith('#')) setRoute(href);
        });
      });
      setRoute(location.hash || '#clients');

      // Mobile sidebar toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const sidebar = document.getElementById('sidebar');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
          sidebar.classList.toggle('hidden');
          sidebar.classList.toggle('absolute');
          sidebar.classList.toggle('z-50');
          sidebar.classList.toggle('h-full');
          sidebar.classList.toggle('bg-white');
        });
      }

      // Clients interactions
      const filterPills = document.querySelectorAll('.filter-pill');
      const rows = document.querySelectorAll('[data-row]');
      const details = document.getElementById('client-details');
      const drawer = document.getElementById('client-drawer');
      const drawerClose = document.getElementById('drawerClose');
      const closeDetails = document.getElementById('closeDetails');

      // Default: select first row on xl screens
      function showDetailsFor(row) {
        const name = row.querySelector('div > div > p.font-medium').textContent.trim();
        const email = row.querySelector('div > div > p.text-xs').textContent.trim();
        const avatar = row.querySelector('img').src;

        // Desktop panel
        if (details) {
          details.classList.remove('hidden');
          document.getElementById('detailName').textContent = name;
          document.getElementById('detailEmail').textContent = email;
          document.getElementById('detailAvatar').src = avatar;
        }

        // Drawer for small screens
        if (drawer) {
          document.getElementById('drawerName').textContent = name;
          document.getElementById('drawerEmail').textContent = email;
          document.getElementById('drawerAvatar').src = avatar;
          drawer.style.transform = 'translateY(0%)';
        }
      }

      function hideDrawer() {
        drawer.style.transform = 'translateY(100%)';
      }
      if (drawerClose) drawerClose.addEventListener('click', hideDrawer);
      if (closeDetails) closeDetails.addEventListener('click', hideDrawer);

      rows.forEach(r => {
        r.addEventListener('click', () => {
          rows.forEach(x => x.classList.remove('ring-1', 'ring-neutral-300', 'bg-neutral-50'));
          r.classList.add('ring-1', 'ring-neutral-300', 'bg-neutral-50');
          showDetailsFor(r);
        });
      });

      // Filter logic
      function applyFilter(type) {
        filterPills.forEach(p => p.classList.remove('bg-neutral-900','text-white','border-neutral-900'));
        filterPills.forEach(p => p.classList.add('bg-white','text-neutral-700','border-neutral-200'));
        const active = Array.from(filterPills).find(p => p.dataset.filter === type);
        if (active) {
          active.classList.remove('bg-white','text-neutral-700','border-neutral-200');
          active.classList.add('bg-neutral-900','text-white','border-neutral-900');
        }
        rows.forEach(r => {
          const status = r.dataset.status;
          const show = type === 'all' || status === type;
          r.classList.toggle('hidden', !show);
        });
      }
      filterPills.forEach(p => p.addEventListener('click', () => applyFilter(p.dataset.filter)));
      applyFilter('all');

      // Search (global for clients list)
      const globalSearch = document.getElementById('globalSearch');
      if (globalSearch) {
        globalSearch.addEventListener('input', (e) => {
          const q = e.target.value.trim().toLowerCase();
          rows.forEach(r => {
            const t = r.textContent.toLowerCase();
            r.classList.toggle('hidden', !t.includes(q));
          });
        });
      }

      // Preselect first row on wide screens
      if (window.matchMedia('(min-width: 1280px)').matches && rows[0]) {
        rows[0].click();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="min-h-screen flex">

<aside className="hidden md:flex flex-col w-64 border-r border-neutral-200 bg-white" id="sidebar">
<div className="h-16 flex items-center px-5 border-b border-neutral-200">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center">
<i className="h-4 w-4 text-white" data-lucide="layers"></i>
</div>
<span className="text-[18px] tracking-tight font-semibold">Studio</span>
</div>
</div>
<nav className="flex-1 px-2 py-4">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100" data-route="" href="#clients">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="users"></i>
<span className="font-medium">Clients</span>
</a>

<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100" data-route="" href="#contract">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="file-text"></i>
<span className="font-medium">Contract</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:bg-neutral-100" href="#">
<i className="h-4 w-4" data-lucide="briefcase"></i>
<span className="font-medium">Projects</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:bg-neutral-100" href="#">
<i className="h-4 w-4" data-lucide="settings"></i>
<span className="font-medium">Settings</span>
</a>
</nav>
<div className="border-t border-neutral-200 p-4">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Alex Morgan</p>
<p className="text-xs text-neutral-500">alex@studio.dev</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 bg-white" id="mobileMenuBtn">
<i className="h-5 w-5 text-neutral-700" data-lucide="menu"></i>
</button>
<h1 className="text-[22px] md:text-[26px] tracking-tight font-semibold" id="pageTitle">Clients</h1>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="pl-9 pr-3 h-10 w-64 rounded-md border border-neutral-200 bg-white text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="globalSearch" placeholder="Search clients..." type="text"/>
</div>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800">
<i className="h-4 w-4" data-lucide="plus"></i>
              Add Client
            </button>
</div>
</header>

<main className="flex-1 overflow-hidden">

<section className="h-full" id="view-clients">
<div className="h-full grid grid-cols-1 xl:grid-cols-[1fr,380px]">

<div className="overflow-y-auto">
<div className="px-4 md:px-8 py-5">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2">
<button className="filter-pill inline-flex items-center gap-2 px-3 h-8 rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-100" data-filter="all">
<i className="h-4 w-4 text-neutral-500" data-lucide="list"></i>
                        All
                      </button>
<button className="filter-pill inline-flex items-center gap-2 px-3 h-8 rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-100" data-filter="active">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        Active
                      </button>
<button className="filter-pill inline-flex items-center gap-2 px-3 h-8 rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-100" data-filter="pending">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
                        Pending
                      </button>
</div>
<button className="inline-flex items-center gap-2 px-3 h-8 rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-100">
<i className="h-4 w-4 text-neutral-500" data-lucide="filter"></i>
                      Filter
                    </button>
</div>

<div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 bg-white">
<div className="grid grid-cols-12 px-4 py-3 text-xs font-medium text-neutral-500">
<div className="col-span-4">Client</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Projects</div>
<div className="col-span-2">Last Contact</div>
<div className="col-span-2">Tags</div>
</div>
<div className="h-px bg-neutral-200"></div>

<button className="group grid grid-cols-12 w-full items-center px-4 py-3 hover:bg-neutral-50 focus:bg-neutral-50 text-left" data-row="" data-status="active">
<div className="col-span-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium leading-5">Tom Bradley</p>
<p className="text-xs text-neutral-500">tom@acme.com</p>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-2 px-2.5 h-7 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">Active</span>
</div>
<div className="col-span-2">
<span className="text-sm font-medium">4</span>
</div>
<div className="col-span-2 text-sm text-neutral-700">2 days ago</div>
<div className="col-span-2 flex items-center gap-2">
<span className="inline-flex items-center px-2 h-6 rounded-md text-xs bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200">Enterprise</span>
<span className="inline-flex items-center px-2 h-6 rounded-md text-xs bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200">Tech</span>
</div>
</button>
<div className="h-px bg-neutral-200"></div>

<button className="group grid grid-cols-12 w-full items-center px-4 py-3 hover:bg-neutral-50 focus:bg-neutral-50 text-left" data-row="" data-status="pending">
<div className="col-span-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium leading-5">Sarah Chen</p>
<p className="text-xs text-neutral-500">sarah@globex.com</p>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-2 px-2.5 h-7 rounded-md text-xs font-medium bg-amber-50 text-amber-700 ring-1 ring-amber-100">Pending</span>
</div>
<div className="col-span-2">
<span className="text-sm font-medium">1</span>
</div>
<div className="col-span-2 text-sm text-neutral-700">1 week ago</div>
<div className="col-span-2 flex items-center gap-2">
<span className="inline-flex items-center px-2 h-6 rounded-md text-xs bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200">Startup</span>
</div>
</button>
</div>
</div>
</div>

<div className="hidden xl:block border-l border-neutral-200 bg-white" id="client-details">
<div className="sticky top-16 max-xl:static max-xl:top-auto max-xl:border-t px-6 py-6">
<div className="flex items-start justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Client Details</h2>
<button className="xl:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200" id="closeDetails">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>

<div className="mt-4 flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-full object-cover ring-1 ring-neutral-200" id="detailAvatar" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium" id="detailName">Tom Bradley</p>
<p className="text-sm text-neutral-500">Chief Technology Officer</p>
</div>
</div>

<div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50">
<div className="p-4 space-y-3 text-sm">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-500" data-lucide="mail"></i>
<a className="text-neutral-700 hover:underline" href="mailto:tom@acme.com" id="detailEmail">tom@acme.com</a>
</div>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-500" data-lucide="phone"></i>
<a className="text-neutral-700 hover:underline" href="tel:+15551234567">+1 (555) 123-4567</a>
</div>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-500" data-lucide="map-pin"></i>
<span className="text-neutral-700">San Francisco, CA</span>
</div>
</div>
</div>

<div className="mt-6">
<h3 className="text-sm font-medium text-neutral-900">Recent Activity</h3>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-600" data-lucide="file-text"></i>
</div>
<span className="text-sm">Contract signed</span>
</div>
<span className="text-xs text-neutral-500">2d ago</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
<i className="h-4 w-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-sm">Meeting completed</span>
</div>
<span className="text-xs text-neutral-500">5d ago</span>
</div>
</div>
</div>

<div className="mt-6">
<h3 className="text-sm font-medium text-neutral-900">Documents</h3>
<div className="mt-3 space-y-3">

<label className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-white p-3">
<div className="flex items-center gap-3">
<input className="sr-only peer" type="checkbox"/>
<span className="relative h-5 w-5 rounded-md border border-neutral-300 bg-white ring-0 transition peer-checked:bg-neutral-900 peer-checked:border-neutral-900">
<svg className="absolute inset-0 m-auto h-4 w-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
<div className="h-8 w-8 rounded-md bg-neutral-100 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-600" data-lucide="file"></i>
</div>
<span className="text-sm">Service Agreement.pdf</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="download"></i>
</label>
<label className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-white p-3">
<div className="flex items-center gap-3">
<input className="sr-only peer" type="checkbox"/>
<span className="relative h-5 w-5 rounded-md border border-neutral-300 bg-white ring-0 transition peer-checked:bg-neutral-900 peer-checked:border-neutral-900">
<svg className="absolute inset-0 m-auto h-4 w-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
<div className="h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center">
<i className="h-4 w-4 text-amber-600" data-lucide="file-badge-2"></i>
</div>
<span className="text-sm">Project Proposal.pdf</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="download"></i>
</label>
</div>
</div>
</div>
</div>

<div className="xl:hidden fixed inset-x-0 bottom-0 translate-y-full transition-transform duration-300 will-change-transform z-40" id="client-drawer">
<div className="mx-4 mb-4 rounded-lg border border-neutral-200 bg-white shadow-lg">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<p className="font-medium">Client Details</p>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-neutral-200" id="drawerClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3 text-sm">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-200" id="drawerAvatar" src=""/>
<div>
<p className="font-medium" id="drawerName"></p>
<p className="text-xs text-neutral-500" id="drawerEmail"></p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:underline" data-route="" href="#contact">
<i className="h-4 w-4" data-lucide="contact"></i>
                      Open Contact
                    </a>
</div>
</div>
</div>
</div>
</section>

<section className="hidden h-full overflow-y-auto" id="view-contact">
<div className="px-4 md:px-8 py-6">

<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-50 via-white to-neutral-50"></div>
<div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="" className="h-16 w-16 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div>
<h2 className="text-[22px] md:text-[26px] tracking-tight font-semibold leading-tight">Tom Bradley</h2>
<p className="text-sm text-neutral-500">Chief Technology Officer — Acme</p>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 h-6 rounded-md bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200"><i className="h-3.5 w-3.5" data-lucide="mail"></i> tom@acme.com</span>
<span className="inline-flex items-center gap-1 px-2 h-6 rounded-md bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200"><i className="h-3.5 w-3.5" data-lucide="phone"></i> +1 (555) 123-4567</span>
<span className="inline-flex items-center gap-1 px-2 h-6 rounded-md bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> San Francisco, CA</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-neutral-200 bg-white text-sm font-medium hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="phone-call"></i>
                      Call
                    </button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-neutral-200 bg-white text-sm font-medium hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="mail"></i>
                      Email
                    </button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800">
<i className="h-4 w-4" data-lucide="plus"></i>
                      New Note
                    </button>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="rounded-xl border border-neutral-200 bg-white">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-[18px] tracking-tight font-semibold">Recent Activity</h3>
</div>
<div className="p-5">
<ol className="relative border-l border-neutral-200 ml-3 space-y-6">
<li className="ml-5">
<span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-neutral-900"></span>
<div className="flex items-center justify-between">
<p className="font-medium">Contract signed</p>
<span className="text-xs text-neutral-500">2d ago</span>
</div>
<p className="text-sm text-neutral-600 mt-1">Signed via DocuSign. Contract value $48,000.</p>
</li>
<li className="ml-5">
<span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-600"></span>
<div className="flex items-center justify-between">
<p className="font-medium">Kickoff meeting</p>
<span className="text-xs text-neutral-500">5d ago</span>
</div>
<p className="text-sm text-neutral-600 mt-1">Timeline approved; SOW v2 accepted.</p>
</li>
<li className="ml-5">
<span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-amber-500"></span>
<div className="flex items-center justify-between">
<p className="font-medium">Proposal reviewed</p>
<span className="text-xs text-neutral-500">1w ago</span>
</div>
<p className="text-sm text-neutral-600 mt-1">Requested security questionnaire and redlines.</p>
</li>
</ol>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold">Notes</h3>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-md border border-neutral-200 text-sm font-medium hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="plus"></i>
                        Add
                      </button>
</div>
<div className="p-5 space-y-4">
<div className="p-4 rounded-md border border-neutral-200">
<p className="text-sm">Needs SOC2 mapping by end of month. Prefers weekly updates on Mondays.</p>
<div className="mt-2 text-xs text-neutral-500">By Alex • 3d ago</div>
</div>
<div className="p-4 rounded-md border border-neutral-200">
<p className="text-sm">Interested in enterprise SSO and audit logs add-on.</p>
<div className="mt-2 text-xs text-neutral-500">By Sam • 1w ago</div>
</div>
</div>
</div>
</div>

<aside className="space-y-6">
<div className="rounded-xl border border-neutral-200 bg-white">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-[18px] tracking-tight font-semibold">Contact Details</h3>
</div>
<div className="p-5 space-y-4 text-sm">
<div className="flex items-center justify-between">
<span className="text-neutral-500">Email</span>
<a className="font-medium hover:underline" href="mailto:tom@acme.com">tom@acme.com</a>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-500">Phone</span>
<a className="font-medium hover:underline" href="tel:+15551234567">+1 (555) 123-4567</a>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-500">Location</span>
<span className="font-medium">San Francisco, CA</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-500">Status</span>
<span className="inline-flex items-center gap-2 px-2.5 h-7 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">Active</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-500">Last Contact</span>
<span className="font-medium">2 days ago</span>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-[18px] tracking-tight font-semibold">Attachments</h3>
</div>
<div className="p-5 space-y-3">
<a className="flex items-center justify-between rounded-md border border-neutral-200 p-3 hover:bg-neutral-50" href="#">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-100 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-600" data-lucide="file-text"></i>
</div>
<span className="text-sm">Master Service Agreement.pdf</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="download"></i>
</a>
<a className="flex items-center justify-between rounded-md border border-neutral-200 p-3 hover:bg-neutral-50" href="#">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-100 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-600" data-lucide="file"></i>
</div>
<span className="text-sm">Security Questionnaire.xlsx</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="download"></i>
</a>
</div>
</div>
</aside>
</div>
</div>
</section>
</main>
</div>
</div>


    </>
  );
}
