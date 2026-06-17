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
      
      // Initialize Lucide icons with consistent stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Simple single-page swap (hash-based)
      (function () {
        const routeConfig = {
          dashboard:        { title: 'Dashboard',        icon: 'layout-dashboard', desc: 'Overview and insights. Add your dashboard content here.' },
          'sequence-builder':{ title: 'Sequence Builder', icon: 'workflow',         desc: 'Design and automate steps. Add your sequence builder content here.' },
          'sequence-list':  { title: 'Sequence List',    icon: 'list',             desc: 'Browse and manage sequences. Add your sequence list content here.' },
          contacts:         { title: 'Contacts',         icon: 'users',            desc: 'Manage your contacts and segments. Add your contacts content here.' },
          analytics:        { title: 'Analytics',        icon: 'bar-chart-3',      desc: 'Visualize performance. Add your analytics content here.' },
          'email-editor':   { title: 'Email Editor',     icon: 'mail',             desc: 'Create and edit emails. Add your email editor content here.' },
          campaign:         { title: 'Campaign',         icon: 'megaphone',        desc: 'Plan and launch campaigns. Add your campaign content here.' },
          settings:         { title: 'Settings',         icon: 'settings',         desc: 'Add your settings content here. This is a simple placeholder to illustrate layout.' }
        };

        const titleEl = document.getElementById('pageTitle');
        const iconContainer = document.getElementById('pageIconContainer');
        const placeholderTitle = document.getElementById('placeholderTitle');
        const placeholderDesc = document.getElementById('placeholderDesc');

        function setActiveNav(route) {
          document.querySelectorAll('a[data-route]').forEach(a => {
            const isActive = a.dataset.route === route;
            a.classList.toggle('bg-blue-100', isActive);
            a.classList.toggle('text-blue-900', isActive);
            a.classList.toggle('text-blue-700', !isActive);
            a.setAttribute('aria-current', isActive ? 'page' : 'false');
            const icon = a.querySelector('svg, [data-lucide]');
            if (icon) {
              icon.classList.toggle('text-neutral-700', isActive);
              icon.classList.toggle('text-neutral-500', !isActive);
            }
          });
        }

        function renderRoute(route) {
          const conf = routeConfig[route] || routeConfig.dashboard;
          if (titleEl) titleEl.textContent = conf.title;
          if (placeholderTitle) placeholderTitle.textContent = conf.title;
          if (placeholderDesc) placeholderDesc.textContent = conf.desc;

          if (iconContainer) {
            iconContainer.innerHTML = '<i data-lucide="' + conf.icon + '" class="size-7 text-neutral-600"></i>';
            if (window.lucide && typeof lucide.createIcons === 'function') {
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          }
          setActiveNav(route);
        }

        function getRouteFromHash() {
          return (location.hash || '').replace('#', '') || 'dashboard';
        }

        function navigate(route, push) {
          if (push) location.hash = route; else history.replaceState(null, '', '#' + route);
          renderRoute(route);
        }

        // Intercept sidebar link clicks
        document.querySelectorAll('a[data-route]').forEach(a => {
          a.addEventListener('click', (e) => {
            e.preventDefault();
            const route = a.dataset.route || 'dashboard';
            navigate(route, true);
          });
        });

        window.addEventListener('hashchange', () => renderRoute(getRouteFromHash()));

        // Initial route
        renderRoute(getRouteFromHash());
      })();

      // Checkbox behavior (safe no-op without checkboxes)
      (function () {
        const artboard = document.getElementById('artboard');
        if (!artboard) return;
        const allCbx = artboard.querySelectorAll('.cbx');
        allCbx.forEach((btn) => {
          btn.setAttribute('role', 'checkbox');
          btn.setAttribute('tabindex', '0');
          const setVisual = (b, checked) => {
            const span = b.querySelector('span.block');
            if (!span) return;
            b.setAttribute('aria-checked', String(checked));
            span.classList.toggle('bg-indigo-600', checked);
            span.classList.toggle('bg-white', !checked);
            span.classList.toggle('ring-1', checked);
            span.classList.toggle('ring-inset', checked);
            span.classList.toggle('ring-indigo-600/20', checked);
          };
          const initial = btn.getAttribute('aria-checked') === 'true';
          setVisual(btn, initial);
          const toggle = (e) => {
            e.preventDefault();
            const next = !(btn.getAttribute('aria-checked') === 'true');
            setVisual(btn, next);
          };
          btn.addEventListener('click', toggle);
          btn.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') toggle(e);
          });
        });
      })();

      // Export artboard to PNG (safe no-op without button)
      (function () {
        const btn = document.getElementById('exportPngBtn');
        const node = document.getElementById('artboard');
        if (!node || !window.htmlToImage || !btn) return;

        btn.addEventListener('click', async () => {
          try {
            btn.disabled = true;
            btn.classList.add('opacity-80', 'cursor-wait');
            const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 2, backgroundColor: '#ffffff' });
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'artboard.png';
            document.body.appendChild(a);
            a.click();
            a.remove();
          } catch (err) {
            console.error('Export failed:', err);
            alert('Sorry, export failed. Please try again.');
          } finally {
            btn.disabled = false;
            btn.classList.remove('opacity-80', 'cursor-wait');
          }
        });
      })();
    
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
      

<header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
</div>
</header>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 lg:gap-8 py-6">

<aside className="hidden lg:block">
<div className="flex gap-3 mb-6 pt-2 pr-3 pb-2 pl-3 items-center">
<div className="flex size-8 items-center justify-center rounded-md bg-blue-900 text-white">
<svg className="lucide lucide-sparkles size-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="min-w-0">
<p className="truncate text-[14px] font-semibold tracking-tight text-blue-900 font-geist" style={{}}>Untitled UI</p>
<p className="truncate text-[12px] text-blue-500 font-geist" style={{}}>Workspace</p>
</div>
</div>
<nav className="space-y-1">
<a aria-current="page" className="group flex items-center gap-3 text-[13px] hover:bg-blue-100 font-medium text-blue-900 font-geist bg-blue-100 rounded-md pt-2 pr-3 pb-2 pl-3" data-route="dashboard" href="#" style={{}}>
<svg className="lucide lucide-layout-dashboard size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
      Dashboard
    </a>
<a aria-current="false" className="group flex items-center gap-3 text-[13px] hover:bg-blue-100 font-medium font-geist rounded-md pt-2 pr-3 pb-2 pl-3 text-blue-700" data-route="sequence-builder" href="#" style={{}}>
<svg className="lucide lucide-workflow size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
      Sequence Builder
    </a>
<a aria-current="false" className="group flex items-center gap-3 text-[13px] hover:bg-blue-100 font-medium font-geist rounded-md pt-2 pr-3 pb-2 pl-3 text-blue-700" data-route="sequence-list" href="#" style={{}}>
<svg className="lucide lucide-list size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
      Sequence List
    </a>
<a aria-current="false" className="group flex items-center gap-3 text-[13px] hover:bg-blue-100 font-medium font-geist rounded-md pt-2 pr-3 pb-2 pl-3 text-blue-700" data-route="contacts" href="#" style={{}}>
<svg className="lucide lucide-users size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
      Contacts
    </a>
<a aria-current="false" className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-blue-700 hover:bg-blue-100 font-geist" data-route="analytics" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-3 size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
      Analytics
    </a>
<a aria-current="false" className="group flex items-center gap-3 text-[13px] hover:bg-blue-100 font-medium font-geist rounded-md pt-2 pr-3 pb-2 pl-3 text-blue-700" data-route="email-editor" href="#" style={{}}>
<svg className="lucide lucide-mail size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
      Email Editor
    </a>
<a aria-current="false" className="group flex items-center gap-3 text-[13px] hover:bg-blue-100 font-medium font-geist rounded-md pt-2 pr-3 pb-2 pl-3 text-blue-700" data-route="campaign" href="#" style={{}}>
<svg className="lucide lucide-megaphone size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
      Campaign
    </a>
<a aria-current="false" className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium hover:bg-blue-100 font-geist text-blue-700" data-route="settings" href="#" style={{}}>
<svg className="lucide lucide-settings size-4 text-neutral-900" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
      Settings
    </a>
</nav>
<div className="mt-8 flex items-center gap-3 rounded-xl border p-3 border-slate-200">
<img alt="avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-blue-900 font-geist" style={{}}>Frankie Sullivan</p>
<p className="truncate text-[12px] text-blue-500 font-geist" style={{}}>@frankie</p>
</div>
</div>
</aside>

<main className="relative bg-white border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm border-slate-200" id="artboard">

<div className="flex items-center justify-between">
<div className="">
<h1 className="text-[24px] md:text-[28px] font-medium text-blue-900 tracking-tight font-geist" id="pageTitle" style={{}}>Dashboard</h1>
</div>
</div>

<section className="mt-6">
<div className="rounded-xl border border-dashed bg-white px-6 py-16 border-zinc-200">
<div className="mx-auto flex max-w-md flex-col items-center text-center">
<div className="flex size-12 items-center justify-center rounded-full bg-blue-100" id="pageIconContainer"><svg className="lucide lucide-layout-dashboard size-7 text-neutral-600" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg></div>
<h2 className="mt-4 text-[18px] font-medium text-blue-900 tracking-tight font-geist" id="placeholderTitle" style={{}}>Dashboard</h2>
<p className="mt-1 text-[13px] text-blue-600 font-geist" id="placeholderDesc" style={{}}>Overview and insights. Add your dashboard content here.</p>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border bg-white px-3.5 py-2 text-[13px] font-medium text-blue-800 hover:bg-blue-50 font-geist border-slate-200" style={{}}>
<svg className="lucide lucide-plus size-4 text-neutral-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    Add section
                  </button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-3.5 py-2 text-[13px] font-medium text-white hover:bg-blue-900/90 font-geist" style={{}}>
<svg className="lucide lucide-settings size-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Configure
                  </button>
</div>
</div>
</div>
</section>
</main>
</div>
</div>



    </>
  );
}
