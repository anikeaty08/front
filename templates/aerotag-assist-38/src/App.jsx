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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-tab');
        tabButtons.forEach(b => b.classList.remove('bg-white','ring-1','ring-slate-200','text-slate-900'));
        btn.classList.add('bg-white','ring-1','ring-slate-200','text-slate-900');
        tabPanels.forEach(p => p.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
      });
    });

    // Dropdowns
    document.querySelectorAll('.dd-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const wrap = e.currentTarget.parentElement;
        wrap.querySelector('.dd-menu').classList.toggle('hidden');
      });
    });
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.dd-btn').forEach(btn => {
        const wrap = btn.parentElement;
        if (!wrap.contains(e.target)) {
          wrap.querySelector('.dd-menu')?.classList.add('hidden');
        }
      });
    });
    document.querySelectorAll('.dd-menu button').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const option = e.currentTarget.getAttribute('data-option');
        const wrap = e.currentTarget.closest('.relative');
        const labelEl = wrap.querySelector('.dd-label');
        if (labelEl.textContent.includes('Service Type')) {
          labelEl.textContent = `Filter by Service Type: ${option}`;
        } else if (labelEl.textContent.includes('Priority')) {
          labelEl.textContent = `Priority: ${option}`;
        }
        wrap.querySelector('.dd-menu')?.classList.add('hidden');
      });
    });

    // Reassign modal
    const reassignModal = document.getElementById('reassignModal');
    function openReassign() { reassignModal.classList.remove('hidden'); reassignModal.classList.add('flex'); }
    function closeReassign() { reassignModal.classList.add('hidden'); reassignModal.classList.remove('flex'); }
    document.querySelectorAll('[data-open-reassign]').forEach(b => b.addEventListener('click', openReassign));
    document.getElementById('closeReassign')?.addEventListener('click', closeReassign);
    document.getElementById('closeReassign2')?.addEventListener('click', closeReassign);
    reassignModal.addEventListener('click', (e) => {
      if (e.target === reassignModal) closeReassign();
    });

    // Mobile drawer
    const drawer = document.getElementById('mobileDrawer');
    document.getElementById('mobileSidebarBtn')?.addEventListener('click', () => drawer.classList.remove('hidden'));
    document.getElementById('closeDrawer')?.addEventListener('click', () => drawer.classList.add('hidden'));
    drawer.addEventListener('click', (e) => { if (e.target === drawer) drawer.classList.add('hidden'); });

    // Default active tab
    document.querySelector('[data-tab="tab-active"]')?.click();
  
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

<aside className="hidden lg:flex lg:flex-col w-72 bg-white/90 backdrop-blur border-r border-slate-200">

<div className="flex items-center gap-3 px-5 h-16 border-b border-slate-200">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white text-sm tracking-tight font-medium">AT</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">AeroTag Assist</span>
<span className="text-[12px] text-slate-500 -mt-0.5">Admin Console</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto">
<div className="px-3 py-3">
<div className="text-[11px] uppercase tracking-wide text-slate-500 px-3 mb-1">Main</div>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 text-slate-600 transition-colors" href="#">
<svg className="h-[18px] w-[18px] text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
<span className="text-[14px]">Overview</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-slate-900/5 ring-1 ring-slate-900/10 text-slate-900" href="#">
<svg className="h-[18px] w-[18px] text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3h8M9 7h6M4 11h16M4 21h16M7 15h10M9 19h6"></path>
</svg>
<span className="text-[14px] font-medium">Orders &amp; Bookings</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 text-slate-600" href="#">
<svg className="h-[18px] w-[18px] text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18M12 3v18"></path>
</svg>
<span className="text-[14px]">Queue Monitor</span>
</a>
</li>
</ul>
<div className="text-[11px] uppercase tracking-wide text-slate-500 px-3 mt-5 mb-1">Operations</div>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 text-slate-600" href="#">
<svg className="h-[18px] w-[18px] text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="text-[14px]">Staff</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 text-slate-600" href="#">
<svg className="h-[18px] w-[18px] text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M19 17c-3-6-10-3-13-9"></path>
</svg>
<span className="text-[14px]">Analytics</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 text-slate-600" href="#">
<svg className="h-[18px] w-[18px] text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
</svg>
<span className="text-[14px]">Settings</span>
</a>
</li>
</ul>
</div>
</nav>

<div className="px-4 py-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-[13px] font-medium leading-tight">Jamie Patel</div>
<div className="text-[12px] text-slate-500 -mt-0.5">Ops Manager</div>
</div>
<button className="p-2 rounded-md hover:bg-slate-50 ring-1 ring-inset ring-slate-200" title="Sign out">
<svg className="h-[18px] w-[18px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<path d="M16 17l5-5-5-5"></path>
<path d="M21 12H9"></path>
</svg>
</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<div className="flex items-center justify-between px-4 h-14 bg-white border-b border-slate-200 lg:hidden">
<button aria-label="Open menu" className="p-2 rounded-md hover:bg-slate-50 ring-1 ring-slate-200" id="mobileSidebarBtn">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M3 12h18M3 18h18"></path>
</svg>
</button>
<div className="text-[14px] font-semibold tracking-tight">AeroTag Assist</div>
<img className="h-8 w-8 rounded-full ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=96&amp;auto=format&amp;fit=crop" />
</img></div>

<header className="px-6 lg:px-10 py-6 border-b border-slate-200 bg-white">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h1 className="text-[22px] sm:text-[26px] md:text-[28px] font-semibold tracking-tight">Orders &amp; Booking Management</h1>
<p className="text-[14px] text-slate-500 mt-1">Monitor all service bookings and manage order queues efficiently.</p>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<input className="peer w-64 h-9 rounded-md border border-slate-200 bg-white pl-9 pr-3 text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300" placeholder="Search orders, guests..." type="text"/>
<svg className="absolute left-2.5 top-2.5 h-[16px] w-[16px] text-slate-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
</div>
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-[13px] hover:bg-slate-50 flex items-center gap-2">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5h18"></path>
<path d="M7 5v14"></path>
<path d="M17 5v6"></path>
<path d="M3 19h18"></path>
</svg>
<span>Date</span>
</button>
</div>
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-[13px] hover:bg-slate-50 flex items-center gap-2">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5h18"></path>
<path d="M7 5v14"></path>
<path d="M17 5v6"></path>
<path d="M3 19h18"></path>
</svg>
              Export
            </button>
<button className="h-9 px-3 rounded-md bg-slate-900 text-white text-[13px] hover:bg-slate-800 ring-1 ring-slate-900/10">New Order</button>
</div>
</div>
</header>

<section className="px-6 lg:px-10 py-4">
<div className="w-full overflow-x-auto">
<div className="inline-flex min-w-full items-center gap-2" role="tablist">
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 rounded-md text-[13px] bg-white ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50" data-tab="tab-active">
<svg className="h-[16px] w-[16px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5h6M7 9h10M5 13h14M7 17h10"></path>
<path d="M8 3h8a2 2 0 0 1 2 2v14l-6-3-6 3V5a2 2 0 0 1 2-2z"></path>
</svg>
              Active Bookings
              <span className="ml-1 text-[12px] text-slate-500">12</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 rounded-md text-[13px] text-slate-700 hover:bg-white hover:ring-1 hover:ring-slate-200" data-tab="tab-queue">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
              Queued Orders
              <span className="ml-1 text-[12px] text-slate-500">4</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 rounded-md text-[13px] text-slate-700 hover:bg-white hover:ring-1 hover:ring-slate-200" data-tab="tab-completed">
<svg className="h-[16px] w-[16px] text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
              Completed Orders
              <span className="ml-1 text-[12px] text-slate-500">86</span>
</button>
</div>
</div>
</section>

<main className="px-6 lg:px-10 pb-10 space-y-8">

<section className="tab-panel" id="tab-active">
<div className="bg-white rounded-lg ring-1 ring-slate-200 overflow-hidden">
<div className="flex items-center justify-between px-5 py-4">
<div>
<h2 className="text-[18px] font-semibold tracking-tight">Ongoing Orders &amp; Bookings</h2>
<p className="text-[13px] text-slate-500">Live operations overview.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border border-slate-200 text-[13px] hover:bg-slate-50 flex items-center gap-1.5">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M7 12h10"></path>
<path d="M10 18h4"></path>
</svg>
                  Columns
                </button>
<button className="h-8 px-3 rounded-md border border-slate-200 text-[13px] hover:bg-slate-50 flex items-center gap-1.5">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M6 6v12"></path>
<path d="M18 6v7"></path>
<path d="M3 18h18"></path>
</svg>
                  Density
                </button>
</div>
</div>
<div className="border-t border-slate-200">
<div className="overflow-x-auto">
<table className="min-w-full text-[13px]">
<thead className="bg-slate-50/60">
<tr className="text-left text-slate-600">
<th className="px-4 py-3 font-medium">Order ID</th>
<th className="px-4 py-3 font-medium">Guest Name</th>
<th className="px-4 py-3 font-medium">Service Type</th>
<th className="px-4 py-3 font-medium">Assigned Staff</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Time Placed</th>
<th className="px-4 py-3 font-medium">ETA</th>
<th className="px-4 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">ORD-1042</td>
<td className="px-4 py-3">Alex Morgan</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-sky-50 text-sky-700 ring-1 ring-sky-100">Transport</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>R. Santos</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 ring-1 ring-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> In Progress
                        </span>
</td>
<td className="px-4 py-3 text-slate-600">10:12 AM</td>
<td className="px-4 py-3 text-slate-600">10:32 AM</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700" title="View details">View</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700" data-open-reassign="" title="Reassign">Reassign</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50" title="Cancel">Cancel</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">ORD-1039</td>
<td className="px-4 py-3">Priya N.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">Housekeeping</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>M. Liu</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-100">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Assigned
                        </span>
</td>
<td className="px-4 py-3 text-slate-600">9:55 AM</td>
<td className="px-4 py-3 text-slate-600">10:25 AM</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">View</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700" data-open-reassign="">Reassign</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50">Cancel</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">ORD-1035</td>
<td className="px-4 py-3">Carter V.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-100">Spa &amp; Wellness</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>A. Novak</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span> Delayed
                        </span>
</td>
<td className="px-4 py-3 text-slate-600">9:40 AM</td>
<td className="px-4 py-3 text-slate-600">—</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">View</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700" data-open-reassign="">Reassign</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50">Cancel</button>
</div>
</td>
</tr>

</tbody>
</table>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 border-t border-slate-200 bg-slate-50/60">
<div className="text-[12px] text-slate-500">Showing 1–10 of 12</div>
<div className="flex items-center gap-1.5">
<button aria-label="Prev" className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-white">
<svg className="mx-auto h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<button className="h-8 w-8 rounded-md border border-slate-200 bg-white text-slate-900 hover:bg-slate-50">1</button>
<button className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-white">2</button>
<button aria-label="Next" className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-white">
<svg className="mx-auto h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="tab-panel hidden" id="tab-queue">

<div className="bg-white rounded-lg ring-1 ring-slate-200 overflow-hidden">
<div className="px-5 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h2 className="text-[18px] font-semibold tracking-tight">Smart Queuing System</h2>
<p className="text-[13px] text-slate-500 mt-1 max-w-2xl">
                  When all staff members are busy, incoming orders are temporarily placed in this queue. The system automatically assigns them once a staff member becomes available, ensuring smooth operation and zero service loss.
                </p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 text-[12px] text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md ring-1 ring-slate-200 bg-slate-50">Queue Size: <span className="font-medium text-slate-900">4</span></span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md ring-1 ring-slate-200 bg-slate-50">Avg Wait: <span className="font-medium text-slate-900">7m</span></span>
</div>
</div>
</div>
<div className="px-5 py-4 border-t border-slate-200">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

<div className="flex flex-wrap items-center gap-2">

<div className="relative">
<button className="dd-btn h-9 pl-9 pr-8 rounded-md border border-slate-200 bg-white text-[13px] hover:bg-slate-50 flex items-center gap-2" data-dropdown="serviceType">
<svg className="absolute left-2.5 h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18"></path><path d="M7 5v14"></path><path d="M17 5v6"></path><path d="M3 19h18"></path></svg>
<span className="dd-label">Filter by Service Type: All</span>
<svg className="absolute right-2.5 h-[16px] w-[16px] text-slate-600 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</button>
<div className="dd-menu hidden absolute z-10 mt-1 w-64 bg-white rounded-md ring-1 ring-slate-200 shadow-sm overflow-hidden">
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="All">All</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Room Service">Room Service</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Housekeeping">Housekeeping</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Transport">Transport</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Spa &amp; Wellness">Spa &amp; Wellness</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Maintenance">Maintenance</button>
</div>
</div>

<div className="relative">
<button className="dd-btn h-9 pl-9 pr-8 rounded-md border border-slate-200 bg-white text-[13px] hover:bg-slate-50 flex items-center gap-2" data-dropdown="priority">
<svg className="absolute left-2.5 h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6l3 3-3 3-3-3 3-3z"></path><path d="M12 12l3 3-3 3-3-3 3-3z"></path></svg>
<span className="dd-label">Priority: All</span>
<svg className="absolute right-2.5 h-[16px] w-[16px] text-slate-600 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</button>
<div className="dd-menu hidden absolute z-10 mt-1 w-44 bg-white rounded-md ring-1 ring-slate-200 shadow-sm overflow-hidden">
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="All">All</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="High">High</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Medium">Medium</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-slate-50" data-option="Low">Low</button>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-[13px] hover:bg-slate-50 flex items-center gap-2">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
                    Add to Queue
                  </button>
<button className="h-9 px-3 rounded-md bg-slate-900 text-white text-[13px] hover:bg-slate-800 ring-1 ring-slate-900/10 flex items-center gap-2">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Auto-Assign
                  </button>
</div>
</div>
</div>

<div className="border-t border-slate-200">
<div className="overflow-x-auto">
<table className="min-w-full text-[13px]">
<thead className="bg-slate-50/60">
<tr className="text-left text-slate-600">
<th className="px-4 py-3 font-medium">Queue ID</th>
<th className="px-4 py-3 font-medium">Guest Name</th>
<th className="px-4 py-3 font-medium">Service Type</th>
<th className="px-4 py-3 font-medium">Priority</th>
<th className="px-4 py-3 font-medium">Wait Time</th>
<th className="px-4 py-3 font-medium">Queue Position</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Q-208</td>
<td className="px-4 py-3">Nora W.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">Housekeeping</span></td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100">High</span>
</td>
<td className="px-4 py-3 text-slate-600">12m</td>
<td className="px-4 py-3 text-slate-600">#1</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 ring-1 ring-amber-100">Waiting</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Assign Now</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Reorder</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50">Remove</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Q-207</td>
<td className="px-4 py-3">Daniel K.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-sky-50 text-sky-700 ring-1 ring-sky-100">Transport</span></td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 ring-1 ring-amber-100">Medium</span>
</td>
<td className="px-4 py-3 text-slate-600">9m</td>
<td className="px-4 py-3 text-slate-600">#2</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-100">Pending</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Assign Now</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Reorder</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50">Remove</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Q-206</td>
<td className="px-4 py-3">Lena P.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-100">Spa &amp; Wellness</span></td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200">Low</span>
</td>
<td className="px-4 py-3 text-slate-600">7m</td>
<td className="px-4 py-3 text-slate-600">#3</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200">Queued</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Assign Now</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Reorder</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50">Remove</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">Q-205</td>
<td className="px-4 py-3">Aarav S.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-violet-50 text-violet-700 ring-1 ring-violet-100">Maintenance</span></td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 ring-1 ring-amber-100">Medium</span>
</td>
<td className="px-4 py-3 text-slate-600">4m</td>
<td className="px-4 py-3 text-slate-600">#4</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-100">Pending</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Assign Now</button>
<button className="px-2.5 h-8 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">Reorder</button>
<button className="px-2.5 h-8 rounded-md border border-red-200 text-red-700 hover:bg-red-50">Remove</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 sm:px-6 py-6">
<h3 className="text-[15px] font-semibold tracking-tight mb-2">Queue Activity Over Time</h3>
<div className="relative w-full rounded-lg ring-1 ring-slate-200 bg-white p-4 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">

<div className="grid grid-cols-6 grid-rows-4 h-full">
<div className="border-t border-slate-100 row-start-1 col-span-6"></div>
<div className="border-t border-slate-100 row-start-2 col-span-6"></div>
<div className="border-t border-slate-100 row-start-3 col-span-6"></div>
<div className="border-t border-slate-100 row-start-4 col-span-6"></div>
</div>
</div>
<svg className="w-full h-48" viewbox="0 0 600 240">

<line stroke="#CBD5E1" strokeWidth="1" x1="32" x2="32" y1="8" y2="212"></line>
<line stroke="#CBD5E1" strokeWidth="1" x1="32" x2="584" y1="212" y2="212"></line>

<g fill="#64748B" fontFamily="Inter" fontSize="11">
<text x="0" y="16">12</text>
<text x="6" y="74">9</text>
<text x="6" y="132">6</text>
<text x="6" y="190">3</text>
<text x="60" y="232">10:00</text>
<text x="160" y="232">10:10</text>
<text x="260" y="232">10:20</text>
<text x="360" y="232">10:30</text>
<text x="460" y="232">10:40</text>
<text x="560" y="232">10:50</text>
</g>

<polyline fill="none" points="32,100 92,120 152,92 212,110 272,90 332,84 392,96 452,82 512,88 572,70" stroke="#0EA5E9" strokeWidth="2"></polyline>

<polygon fill="rgba(14,165,233,.12)" points="32,100 92,120 152,92 212,110 272,90 332,84 392,96 452,82 512,88 572,70 572,212 32,212"></polygon>

<g fill="#0EA5E9">
<circle cx="92" cy="120" r="3"></circle>
<circle cx="152" cy="92" r="3"></circle>
<circle cx="212" cy="110" r="3"></circle>
<circle cx="272" cy="90" r="3"></circle>
<circle cx="332" cy="84" r="3"></circle>
<circle cx="392" cy="96" r="3"></circle>
<circle cx="452" cy="82" r="3"></circle>
<circle cx="512" cy="88" r="3"></circle>
<circle cx="572" cy="70" r="3"></circle>
</g>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="tab-panel hidden" id="tab-completed">
<div className="bg-white rounded-lg ring-1 ring-slate-200 overflow-hidden">
<div className="flex items-center justify-between px-5 py-4">
<div>
<h2 className="text-[18px] font-semibold tracking-tight">Completed Orders &amp; Bookings</h2>
<p className="text-[13px] text-slate-500">Archive of finished tasks with feedback.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border border-slate-200 text-[13px] hover:bg-slate-50">Export CSV</button>
<button className="h-8 px-3 rounded-md border border-slate-200 text-[13px] hover:bg-slate-50">Columns</button>
</div>
</div>
<div className="border-t border-slate-200">
<div className="overflow-x-auto">
<table className="min-w-full text-[13px]">
<thead className="bg-slate-50/60">
<tr className="text-left text-slate-600">
<th className="px-4 py-3 font-medium">Order ID</th>
<th className="px-4 py-3 font-medium">Guest Name</th>
<th className="px-4 py-3 font-medium">Service Type</th>
<th className="px-4 py-3 font-medium">Assigned Staff</th>
<th className="px-4 py-3 font-medium">Completion Time</th>
<th className="px-4 py-3 font-medium">Feedback</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">ORD-1001</td>
<td className="px-4 py-3">Maya R.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-violet-50 text-violet-700 ring-1 ring-violet-100">Maintenance</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>T. Brown</span>
</div>
</td>
<td className="px-4 py-3 text-slate-600">9:15 AM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<svg className="h-[16px] w-[16px] text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
<span className="text-slate-700">Resolved quickly</span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">ORD-1000</td>
<td className="px-4 py-3">Jonas U.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-sky-50 text-sky-700 ring-1 ring-sky-100">Transport</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>M. Patel</span>
</div>
</td>
<td className="px-4 py-3 text-slate-600">8:55 AM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<svg className="h-[16px] w-[16px] text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
<span className="text-slate-700">On schedule</span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">ORD-0999</td>
<td className="px-4 py-3">Evelyn C.</td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">Housekeeping</span></td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>S. Diaz</span>
</div>
</td>
<td className="px-4 py-3 text-slate-600">8:38 AM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<svg className="h-[16px] w-[16px] text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
<span className="text-slate-700">Spotless</span>
</div>
</td>
</tr>

</tbody>
</table>
</div>
</div>

<div className="flex items-center justify-between px-5 py-3 border-t border-slate-200 bg-slate-50/60">
<div className="text-[12px] text-slate-500">Showing 1–10 of 86</div>
<div className="flex items-center gap-1.5">
<button aria-label="Prev" className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-white">
<svg className="mx-auto h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<button className="h-8 w-8 rounded-md border border-slate-200 bg-white text-slate-900 hover:bg-slate-50">1</button>
<button className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-white">2</button>
<button aria-label="Next" className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-white">
<svg className="mx-auto h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>
</main>
</div>
</div>

<div className="fixed inset-0 hidden items-end sm:items-center justify-center z-50" id="reassignModal">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative w-full sm:w-[520px] bg-white rounded-t-lg sm:rounded-lg ring-1 ring-slate-200 shadow-lg">
<div className="px-5 py-4 flex items-center justify-between border-b border-slate-200">
<div>
<h3 className="text-[16px] font-semibold tracking-tight">Reassign Order</h3>
<p className="text-[12px] text-slate-500">Select an available staff member.</p>
</div>
<button aria-label="Close" className="p-2 rounded-md hover:bg-slate-50 ring-1 ring-slate-200" id="closeReassign">
<svg className="h-[16px] w-[16px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
</button>
</div>
<div className="px-5 py-4 space-y-4">
<div className="relative">
<input className="w-full h-9 rounded-md border border-slate-200 pl-9 pr-3 text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" placeholder="Search staff by name or role..." type="text"/>
<svg className="absolute left-2.5 top-2.5 h-[16px] w-[16px] text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.3-4.3"></path></svg>
</div>
<div className="max-h-72 overflow-y-auto divide-y divide-slate-200">

<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img className="h-8 w-8 rounded-full ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] font-medium">Sofia Díaz</div>
<div className="text-[12px] text-slate-500 -mt-0.5">Housekeeping • <span className="text-emerald-600">Available</span></div>
</div>
</div>
<button className="h-8 px-3 rounded-md bg-slate-900 text-white text-[13px] hover:bg-slate-800 ring-1 ring-slate-900/10">Assign</button>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img className="h-8 w-8 rounded-full ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] font-medium">Ming Liu</div>
<div className="text-[12px] text-slate-500 -mt-0.5">Housekeeping • <span className="text-amber-600">Busy</span></div>
</div>
</div>
<button className="h-8 px-3 rounded-md border border-slate-200 text-[13px] text-slate-700 hover:bg-slate-50">Queue</button>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img className="h-8 w-8 rounded-full ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] font-medium">Taylor Brown</div>
<div className="text-[12px] text-slate-500 -mt-0.5">Maintenance • <span className="text-emerald-600">Available</span></div>
</div>
</div>
<button className="h-8 px-3 rounded-md bg-slate-900 text-white text-[13px] hover:bg-slate-800 ring-1 ring-slate-900/10">Assign</button>
</div>
</div>
</div>
<div className="px-5 py-3 border-t border-slate-200 bg-slate-50/60 flex items-center justify-end gap-2">
<button className="h-8 px-3 rounded-md border border-slate-200 text-[13px] hover:bg-white" id="closeReassign2">Close</button>
<button className="h-8 px-3 rounded-md bg-slate-900 text-white text-[13px] hover:bg-slate-800 ring-1 ring-slate-900/10">Save</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="mobileDrawer">
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-y-0 left-0 w-80 max-w-[85%] bg-white ring-1 ring-slate-200 shadow-xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white text-xs tracking-tight font-medium">AT</div>
<span className="text-[15px] font-semibold tracking-tight">AeroTag Assist</span>
</div>
<button aria-label="Close" className="p-2 rounded-md hover:bg-slate-50 ring-1 ring-slate-200" id="closeDrawer">
<svg className="h-[16px] w-[16px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
</button>
</div>
<div className="mt-4 space-y-2">
<a className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 text-[14px] text-slate-700" href="#">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
          Overview
        </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900/5 ring-1 ring-slate-900/10 text-[14px] text-slate-900" href="#">
<svg className="h-[16px] w-[16px] text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5h6M7 9h10M5 13h14M7 17h10"></path><path d="M8 3h8a2 2 0 0 1 2 2v14l-6-3-6 3V5a2 2 0 0 1 2-2z"></path></svg>
          Orders &amp; Bookings
        </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 text-[14px] text-slate-700" href="#">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 17c-3-6-10-3-13-9"></path></svg>
          Analytics
        </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 text-[14px] text-slate-700" href="#">
<svg className="h-[16px] w-[16px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path></svg>
          Settings
        </a>
</div>
</div>
</div>


    </>
  );
}
