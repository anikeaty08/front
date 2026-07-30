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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // Initialize Lucide icons (stroke width 1.5)
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Custom dropdown logic for "Status"
      const statusClassMap = {
        'New': 'bg-slate-'}})
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
      

<header className="sticky top-0 z-40 w-full border-b border-[#E3EAEE]/20 bg-[#092A35] backdrop-blur">
<div className="mx-auto max-w-screen-2xl px-4">
<div className="flex h-20 items-center justify-between">
<div className="flex items-center">

<svg aria-label="Congdon • Coleman" className="h-7 md:h-8 lg:h-9 w-auto" fill="none" role="img" viewBox="0 0 244 35" xmlns="http://www.w3.org/2000/svg">
<title>Congdon • Coleman</title>

<text fill="#FFFFFF" fontFamily="Inter, ui-sans-serif, system-ui" fontSize="20" font-weight="600" letter-spacing="-0.01em" style={{paintOrder: `stroke fill`}}>
              CONGDON
            </text>

<circle cx="126" cy="18" fill="#8BABB6"></circle>
<text fill="#FFFFFF" fontFamily="Inter, ui-sans-serif, system-ui" fontSize="20" font-weight="600" letter-spacing="-0.01em" style={{paintOrder: `stroke fill`}}>
              COLEMAN
            </text>
</svg>
</div>
<nav className="hidden items-center gap-8 text-sm md:flex">
<a className="group inline-flex items-center gap-2 text-slate-300 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Contacts</span>
</a>
<a className="group inline-flex items-center gap-2 text-slate-300 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="home"></i>
<span>Rentals</span>
</a>
<a className="group inline-flex items-center gap-2 text-slate-300 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="edit-3"></i>
<span>Resources</span>
</a>
<button className="group inline-flex items-center gap-2 text-slate-300 hover:text-white">
<i className="h-4 w-4" data-lucide="user-circle"></i>
<span>Admin</span>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="chevron-down"></i>
</button>
</nav>
<div className="flex items-center gap-5">
<button className="relative inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 text-slate-200 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="bell"></i>
<span className="absolute right-1.5 top-1.5 inline-block h-1.5 w-1.5 rounded-full bg-rose-400 ring-2 ring-[#092A35]"></span>
</button>
<div className="flex items-center gap-3">
<div className="hidden text-right sm:block">
<p className="text-xs font-medium text-white">Stephen Maury</p>
</div>
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-screen-2xl px-4 py-6 md:py-8">

<section className="mb-6 flex items-start justify-between">
<div></div>

</section>

<section className="mb-8">
<div className="mb-3 flex items-center justify-between">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Rental Leads</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">
<i className="h-4 w-4" data-lucide="plus"></i>
          New Lead
        </button>
</div>
<div className="overflow-x-auto">
<div className="min-w-[960px] rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
<div className="overflow-hidden rounded-md">
<table className="min-w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Name</th>
<th className="px-4 py-3 font-medium">Dates</th>
<th className="px-4 py-3 font-medium">Property/Area</th>
<th className="px-4 py-3 font-medium">Comments</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="relative inline-flex">
<button className="status-btn inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300" data-dropdown-target="status-menu-1" data-status="New" type="button">
<span className="status-label">New</span>
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-9 z-40 hidden w-36 rounded-md border border-slate-200 bg-white p-1.5 shadow-lg" data-dropdown-menu="" id="status-menu-1">
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="New">New</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="Contacted">Contacted</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-emerald-700 hover:bg-emerald-50" data-status-value="Won">Won</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-rose-700 hover:bg-rose-50" data-status-value="Lost">Lost</button>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-slate-900">Jeff Kramer</p>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="mailto:jeff@example.com">jeff@example.com</a>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="tel:+13052465985">(305) 246-5985</a>
</div>
</td>
<td className="px-4 py-3 text-slate-700">
<div className="flex flex-col">
<span>Sat Feb 1 - Sat Mar 15, 2025</span>
<span className="mt-1 inline-flex w-fit items-center rounded-md bg-amber-50 px-2 py-1 text-xs text-amber-700 ring-1 ring-amber-100">Some Flexilibilty</span>
</div>
</td>
<td className="px-4 py-3">Downtown, near Wharf</td>
<td className="px-4 py-3">
<p className="max-w-[260px] truncate text-slate-600" title="Prefers 2BR with parking; pet-friendly.">Prefers 2BR with parking; pet-friendly.</p>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="relative inline-flex">
<button className="status-btn inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-1.5 text-xs text-sky-700 ring-1 ring-sky-200 hover:ring-sky-300" data-dropdown-target="status-menu-2" data-status="Contacted" type="button">
<span className="status-label">Contacted</span>
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-9 z-40 hidden w-36 rounded-md border border-slate-200 bg-white p-1.5 shadow-lg" data-dropdown-menu="" id="status-menu-2">
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="New">New</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="Contacted">Contacted</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-emerald-700 hover:bg-emerald-50" data-status-value="Won">Won</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-rose-700 hover:bg-rose-50" data-status-value="Lost">Lost</button>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-slate-900">Mark Michels</p>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="mailto:mark@summit.com">mark@summit.com</a>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="tel:+16177778821">(617) 777-8821</a>
</div>
</td>
<td className="px-4 py-3 text-slate-700">
<div className="flex flex-col">
<span>Mon Feb 10 - Tue Feb 25, 2025</span>
<span className="mt-1 inline-flex w-fit items-center rounded-md bg-emerald-50 px-2 py-1 text-xs text-emerald-700 ring-1 ring-emerald-100">Some Flexilibilty</span>
</div>
</td>
<td className="px-4 py-3">Surfside or Tom Nevers</td>
<td className="px-4 py-3">
<p className="max-w-[260px] truncate text-slate-600" title="Open to fixer-uppers; budget under $3M.">Open to fixer-uppers; budget under $3M.</p>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="relative inline-flex">
<button className="status-btn inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300" data-dropdown-target="status-menu-3" data-status="New" type="button">
<span className="status-label">New</span>
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-9 z-40 hidden w-36 rounded-md border border-slate-200 bg-white p-1.5 shadow-lg" data-dropdown-menu="" id="status-menu-3">
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="New">New</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="Contacted">Contacted</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-emerald-700 hover:bg-emerald-50" data-status-value="Won">Won</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-rose-700 hover:bg-rose-50" data-status-value="Lost">Lost</button>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-slate-900">Andrea Riggio</p>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="mailto:andrea@urbanedge.com">andrea@urbanedge.com</a>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="tel:+14132309981">(413) 230-9981</a>
</div>
</td>
<td className="px-4 py-3 text-slate-700">
<div className="flex flex-col">
<span>Wed Mar 5 - Wed Mar 12, 2025</span>
<span className="mt-1 inline-flex w-fit items-center rounded-md bg-rose-50 px-2 py-1 text-xs text-rose-700 ring-1 ring-rose-100">Exact Dates</span>
</div>
</td>
<td className="px-4 py-3">Miacomet</td>
<td className="px-4 py-3">
<p className="max-w-[260px] truncate text-slate-600" title="Needs office space; 3 parking spots required.">Needs office space; 3 parking spots required.</p>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="relative inline-flex">
<button className="status-btn inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1.5 text-xs text-emerald-700 ring-1 ring-emerald-200 hover:ring-emerald-300" data-dropdown-target="status-menu-4" data-status="Won" type="button">
<span className="status-label">Won</span>
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-9 z-40 hidden w-36 rounded-md border border-slate-200 bg-white p-1.5 shadow-lg" data-dropdown-menu="" id="status-menu-4">
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="New">New</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="Contacted">Contacted</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-emerald-700 hover:bg-emerald-50" data-status-value="Won">Won</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-rose-700 hover:bg-rose-50" data-status-value="Lost">Lost</button>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-slate-900">Stephen Tester</p>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="mailto:stephen@keyline.com">stephen@keyline.com</a>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="tel:+15088510191">(508) 851-0191</a>
</div>
</td>
<td className="px-4 py-3 text-slate-700">
<div className="flex flex-col">
<span>Thu Feb 20 - Sat Mar 1, 2025</span>
<span className="mt-1 inline-flex w-fit items-center rounded-md bg-emerald-50 px-2 py-1 text-xs text-emerald-700 ring-1 ring-emerald-100">Some Flexilibilty</span>
</div>
</td>
<td className="px-4 py-3">Cisco</td>
<td className="px-4 py-3">
<p className="max-w-[260px] truncate text-slate-600" title="Looking for ocean views; 4+ bedrooms.">Looking for ocean views; 4+ bedrooms.</p>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="relative inline-flex">
<button className="status-btn inline-flex items-center gap-1 rounded-md bg-rose-50 px-2 py-1.5 text-xs text-rose-700 ring-1 ring-rose-200 hover:ring-rose-300" data-dropdown-target="status-menu-5" data-status="Lost" type="button">
<span className="status-label">Lost</span>
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-9 z-40 hidden w-36 rounded-md border border-slate-200 bg-white p-1.5 shadow-lg" data-dropdown-menu="" id="status-menu-5">
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="New">New</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="Contacted">Contacted</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-emerald-700 hover:bg-emerald-50" data-status-value="Won">Won</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-rose-700 hover:bg-rose-50" data-status-value="Lost">Lost</button>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-slate-900">Susan Valencia</p>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="mailto:susanval@gmail.com">susanval@gmail.com</a>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="tel:+16175554137">(617) 555-4137</a>
</div>
</td>
<td className="px-4 py-3 text-slate-700">
<div className="flex flex-col">
<span>Tue Jan 28 - Sat Feb 8, 2025</span>
<span className="mt-1 inline-flex w-fit items-center rounded-md bg-amber-50 px-2 py-1 text-xs text-amber-700 ring-1 ring-amber-100">Some Flexilibilty</span>
</div>
</td>
<td className="px-4 py-3">Sconset</td>
<td className="px-4 py-3">
<p className="max-w-[260px] truncate text-slate-600" title="Wants quiet area; small yard for dog.">Wants quiet area; small yard for dog.</p>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="relative inline-flex">
<button className="status-btn inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-1.5 text-xs text-sky-700 ring-1 ring-sky-200 hover:ring-sky-300" data-dropdown-target="status-menu-6" data-status="Contacted" type="button">
<span className="status-label">Contacted</span>
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-9 z-40 hidden w-36 rounded-md border border-slate-200 bg-white p-1.5 shadow-lg" data-dropdown-menu="" id="status-menu-6">
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="New">New</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-slate-700 hover:bg-slate-50" data-status-value="Contacted">Contacted</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-emerald-700 hover:bg-emerald-50" data-status-value="Won">Won</button>
<button className="menu-item flex w-full items-center justify-between rounded-[6px] px-2 py-1.5 text-left text-xs text-rose-700 hover:bg-rose-50" data-status-value="Lost">Lost</button>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-slate-900">David First</p>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="mailto:david.first@emailmail.com">david.first@emailmail.com</a>
<a className="text-xs text-slate-500 hover:text-slate-700 hover:underline" href="tel:+16175552301">(617) 555-2301</a>
</div>
</td>
<td className="px-4 py-3 text-slate-700">
<div className="flex flex-col">
<span>Sat Feb 15 - Wed Mar 5, 2025</span>
<span className="mt-1 inline-flex w-fit items-center rounded-md bg-emerald-50 px-2 py-1 text-xs text-emerald-700 ring-1 ring-emerald-100">Some Flexilibilty</span>
</div>
</td>
<td className="px-4 py-3">Madaket</td>
<td className="px-4 py-3">
<p className="max-w-[260px] truncate text-slate-600" title="Prefers new construction; HOA okay.">Prefers new construction; HOA okay.</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</main>
<footer className="py-8">
<div className="mx-auto max-w-screen-2xl px-4 text-center text-xs text-slate-500">
<p>© 2025 Congdon • Coleman. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
