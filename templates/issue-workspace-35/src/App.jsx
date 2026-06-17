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
      
<div className="min-h-screen flex flex-col">

<header className="border-b backdrop-blur border-neutral-200/80 bg-neutral-50/80" style={{}}>
<div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">

<div className="flex items-center gap-4 min-w-0">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-gradient-to-tr flex items-center justify-center from-blue-500 to-blue-500" style={{}}>

<svg className="h-4 w-4 text-slate-50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24">
<rect height="10" rx="2" width="16" x="4" y="10"></rect>
<path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg tracking-tight font-semibold">Swatimus</span>
<span className="text-xs text-neutral-600" style={{}}>Issue workspace</span>
</div>
</div>
<div className="hidden md:flex items-center flex-1 max-w-md">
<label className="relative flex-1">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-500" style={{}}>

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="7"></circle>
<path d="m16 16 4 4"></path>
</svg>
</span>
<input className="placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500/70 text-sm bg-neutral-100/80 w-full border-neutral-200 border rounded-lg pt-2 pr-3 pb-2 pl-9" placeholder="Search tickets"/>
</label>
</div>
</div>

<nav className="flex items-center gap-1 text-sm">
<button className="px-3 py-1.5 rounded-full border tracking-tight font-medium text-neutral-900 bg-neutral-200/80 border-neutral-300/80" style={{}}>
            Home
          </button>
<button className="px-3 py-1.5 rounded-full transition-colors text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/80" style={{}}>
            Dashboard
          </button>
<button className="px-3 py-1.5 rounded-full transition-colors text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/80" style={{}}>
            S‑AI
          </button>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs tracking-tight transition-colors border-neutral-300/70 bg-neutral-100/80 text-neutral-800 hover:bg-neutral-100 hover:border-blue-500/70" style={{}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-600" style={{}}>

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 3v4"></path>
<path d="M18.5 5.5 16 8"></path>
<path d="M21 12h-4"></path>
<path d="m18.5 18.5-2.5-2.5"></path>
<path d="M12 21v-4"></path>
<path d="M5.5 18.5 8 16"></path>
<path d="M3 12h4"></path>
<path d="M5.5 5.5 8 8"></path>
</svg>
</span>
<span className="">AI Model: Gemini 2.5 Flash Lite</span>
</button>
<button className="flex bg-neutral-100 w-8 h-8 border-neutral-300/80 border rounded-full items-center justify-center" style={{}}>
<span className="text-xs font-medium">YS</span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 space-y-6">

<section className="sm:px-6 sm:py-5 shadow-neutral-50/60 bg-neutral-50/80 border-neutral-200/80 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm space-y-4" style={{}}>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-3 gap-y-3">
<div className="">
<h1 className="text-2xl tracking-tight font-semibold text-neutral-950" style={{}}>Issue Inbox</h1>
<p className="text-sm text-neutral-600" style={{}}>Triage and track active engineering tickets in one view.</p>
</div>
<div className="flex items-center gap-2">
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs uppercase tracking-wide text-neutral-500" style={{}}>Status</span>
<button className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium bg-blue-500/15 border-blue-500/40 text-blue-700" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                In Progress Engineering
                
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium bg-blue-500/15 border-blue-500/40 text-blue-700" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-700" style={{}}></span>
                Pending Engineering
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium bg-blue-500/15 border-blue-500/40 text-blue-700" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-700" style={{}}></span>
                L2.5 Ready
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<button className="ml-1 text-xs text-neutral-600 hover:text-neutral-900" style={{}}>
                Clear all
              </button>
</div>
<div className="flex flex-col md:flex-row gap-3 md:items-center gap-x-3 gap-y-3 items-stretch justify-between">

<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs border-neutral-300/80 bg-neutral-100 text-neutral-800" style={{}}>

<svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24">
<path d="M18 20a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Assigned to me</span>
<svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
</div>
<div className="flex flex-1 items-center gap-2 w-full md:max-w-lg">
<label className="relative flex-1">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-500" style={{}}>

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 4h16"></path>
<path d="M7 12h10"></path>
<path d="M10 20h4"></path>
</svg>
</span>
<input className="placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500/70 text-sm bg-neutral-100/80 w-full border-neutral-200 border rounded-lg pt-2 pr-3 pb-2 pl-9" placeholder="JQL (e.g. project = AE)"/>
</label>

<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs border-neutral-300/80 bg-neutral-100 text-neutral-800 hover:border-blue-500/70" style={{}}>

<svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24">
<path d="m21 16-4 4-4-4"></path>
<path d="M17 20V4"></path>
<path d="m3 8 4-4 4 4"></path>
<path d="M7 4v16"></path>
</svg>
<span className="">Updated · Desc</span>

</button>
<button className="inline-flex items-center justify-center rounded-full px-3 py-2 text-xs tracking-tight font-medium transition-colors text-neutral-50 bg-blue-500 hover:bg-blue-600" style={{}}>

<svg className="h-3.5 w-3.5 mr-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="7"></circle>
<path d="m16 16 4 4"></path>
</svg>
                  Search
                </button>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border shadow-sm overflow-hidden border-neutral-200/80 bg-neutral-50/80 shadow-neutral-50/60" style={{}}>
<div className="flex sm:px-6 pt-3 pr-4 pb-3 pl-4 gap-x-3 gap-y-3 items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-base tracking-tight font-semibold text-neutral-950" style={{}}>Issues</h2>
<span className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs border bg-neutral-100 text-neutral-700 border-neutral-300/70" style={{}}>
                92
              </span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs border-neutral-300/80 bg-neutral-100 text-neutral-800 hover:border-blue-500/70" style={{}}>

<svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24">
<rect className="" height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect className="" height="11" rx="1" width="7" x="14" y="10"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
<span className="">Select columns</span>
</button>
</div>
</div>
<div className="border-t border-neutral-100/80" style={{}}>
<div className="overflow-x-auto">
<table className="min-w-full divide-y text-sm divide-neutral-100/80" style={{}}>
<thead className="bg-neutral-50/90" style={{}}>
<tr className="">
<th className="whitespace-nowrap px-4 py-2.5 text-left text-xs font-medium sm:px-6 text-neutral-600" style={{}}>
                Key</th>
<th className="px-4 py-2.5 text-left text-xs font-medium sm:w-1/3 text-neutral-600" style={{}}>Summary</th>
<th className="whitespace-nowrap px-4 py-2.5 text-left text-xs font-medium text-neutral-600" style={{}}>Status
              </th>
<th className="whitespace-nowrap px-4 py-2.5 text-left text-xs font-medium text-neutral-600" style={{}}>Priority
              </th>
<th className="whitespace-nowrap px-4 py-2.5 text-left text-xs font-medium text-neutral-600" style={{}}>Assignee
              </th>
<th className="whitespace-nowrap px-4 py-2.5 text-right text-xs font-medium pr-6 text-neutral-600" style={{}}>
                Updated
              </th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100/80 bg-neutral-50" style={{}}>

<tr className="transition-colors hover:bg-neutral-100/80" style={{}}>
<td className="px-4 py-3 sm:px-6 whitespace-nowrap text-xs font-medium text-neutral-800" style={{}}>
                AE‑13466
              </td>
<td className="px-4 py-3 text-sm text-neutral-900" style={{}}>
                Appspace not cancelling reservations on system even if not checked in to
              </td>
<td className="px-4 py-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border bg-neutral-100 text-neutral-800 border-neutral-300/80" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                Pending Engineering
                </span>
</td>
<td className="px-4 py-3 whitespace-nowrap text-sm">
<span className="inline-flex items-center gap-1 text-pink-700" style={{}}>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 17 9 11 13 15 21 7"></path>
<path d="M14 7h7v7"></path>
</svg>
                        High
                      </span>
</td>
<td className="px-4 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-neutral-200 text-neutral-900" style={{}}>
                          U
                        </span>
<span className="text-sm text-neutral-800" style={{}}>Unassigned</span>
</div>
</td>
<td className="px-4 py-3 whitespace-nowrap text-right text-sm pr-6 text-neutral-600" style={{}}>
                2 minutes ago
              </td>
</tr>
<tr className="transition-colors hover:bg-neutral-100/80" style={{}}>
<td className="px-4 py-3 sm:px-6 whitespace-nowrap text-xs font-medium text-neutral-800" style={{}}>
                AE‑13504
              </td>
<td className="px-4 py-3 text-sm text-neutral-900" style={{}}>
                Reservation IOT background queues building
              </td>
<td className="px-4 py-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border bg-neutral-100 text-neutral-800 border-neutral-300/80" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                Pending Engineering
                </span>
</td>
<td className="px-4 py-3 whitespace-nowrap text-sm">
<span className="inline-flex items-center gap-1 text-blue-700" style={{}}>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 9h14"></path>
<path d="M5 15h14"></path>
</svg>
                        Medium
                      </span>
</td>
<td className="px-4 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-neutral-200 text-neutral-900" style={{}}>
                          U
                        </span>
<span className="text-sm text-neutral-800" style={{}}>Unassigned</span>
</div>
</td>
<td className="px-4 py-3 whitespace-nowrap text-right text-sm pr-6 text-neutral-600" style={{}}>
                48 minutes ago
              </td>
</tr>
<tr className="transition-colors hover:bg-neutral-100/80" style={{}}>
<td className="px-4 py-3 sm:px-6 whitespace-nowrap text-xs font-medium text-neutral-800" style={{}}>
                AE‑13429
              </td>
<td className="px-4 py-3 text-sm text-neutral-900" style={{}}>
                Visitor Management showing incorrect file &amp; printer not working
              </td>
<td className="px-4 py-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border bg-neutral-100 text-neutral-800 border-neutral-300/80" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                Pending Engineering
                </span>
</td>
<td className="px-4 py-3 whitespace-nowrap text-sm">
<span className="inline-flex items-center gap-1 text-pink-700" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 17 9 11 13 15 21 7"></path>
<path d="M14 7h7v7"></path>
</svg>
                        Highest
                      </span>
</td>
<td className="whitespace-nowrap pt-3 pr-4 pb-3 pl-4">
<div className="flex items-center gap-2">
<img alt="Avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
<span className="text-sm text-neutral-800" style={{}}>Yoon Sean</span>
</div>
</td>
<td className="px-4 py-3 whitespace-nowrap text-right text-sm pr-6 text-neutral-600" style={{}}>
                3 hours ago
              </td>
</tr>

<tr className="transition-colors hover:bg-neutral-100/80" style={{}}>
<td className="px-4 py-3 sm:px-6 whitespace-nowrap text-xs font-medium text-neutral-800" style={{}}>
                AE‑13540
              </td>
<td className="px-4 py-3 text-sm text-neutral-900" style={{}}>
                Device Group doesn't populate
              </td>
<td className="px-4 py-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border bg-neutral-100 text-neutral-800 border-neutral-300/80" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                Pending Engineering
                </span>
</td>
<td className="px-4 py-3 whitespace-nowrap text-sm">
<span className="inline-flex items-center gap-1 text-blue-700" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 9h14"></path>
<path d="M5 15h14"></path>
</svg>
                        Medium
                      </span>
</td>
<td className="px-4 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-neutral-200 text-neutral-900" style={{}}>
                          U
                        </span>
<span className="text-sm text-neutral-800" style={{}}>Unassigned</span>
</div>
</td>
<td className="px-4 py-3 whitespace-nowrap text-right text-sm pr-6 text-neutral-600" style={{}}>
                3 hours ago
              </td>
</tr>
<tr className="transition-colors hover:bg-neutral-100/80" style={{}}>
<td className="px-4 py-3 sm:px-6 whitespace-nowrap text-xs font-medium text-neutral-800" style={{}}>
                AE‑13576
              </td>
<td className="px-4 py-3 text-sm text-neutral-900" style={{}}>
                Issue with Card not saving/appearing in designated folder
              </td>
<td className="px-4 py-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border bg-neutral-100 text-neutral-800 border-neutral-300/80" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                Pending Engineering
                </span>
</td>
<td className="px-4 py-3 whitespace-nowrap text-sm">
<span className="inline-flex items-center gap-1 text-blue-700" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 9h14"></path>
<path d="M5 15h14"></path>
</svg>
                        Medium
                      </span>
</td>
<td className="px-4 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-neutral-200 text-neutral-900" style={{}}>
                          SL
                        </span>
<span className="text-sm text-neutral-800" style={{}}>Steven Lu</span>
</div>
</td>
<td className="px-4 py-3 whitespace-nowrap text-right text-sm pr-6 text-neutral-600" style={{}}>
                5 hours ago
              </td>
</tr>
<tr className="transition-colors hover:bg-neutral-100/80" style={{}}>
<td className="px-4 py-3 sm:px-6 whitespace-nowrap text-xs font-medium text-neutral-800" style={{}}>
                AE‑12507
              </td>
<td className="px-4 py-3 text-sm text-neutral-900" style={{}}>
                Embedded credentials on Webview Card (1.5.2 and over)
              </td>
<td className="px-4 py-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border border-blue-500/40 bg-neutral-100 text-blue-800" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600" style={{}}></span>
                In Progress Engineering
                </span>
</td>
<td className="px-4 py-3 whitespace-nowrap text-sm">
<span className="inline-flex items-center gap-1 text-blue-700" style={{}}>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 9h14"></path>
<path d="M5 15h14"></path>
</svg>
                        Medium
                      </span>
</td>
<td className="px-4 py-3 whitespace-nowrap">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
<span className="text-sm text-neutral-800" style={{}}>Khai Hong</span>
</div>
</td>
<td className="px-4 py-3 whitespace-nowrap text-right text-sm pr-6 text-neutral-600" style={{}}>
                6 hours ago
              </td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 border-t text-xs border-neutral-100/80 text-neutral-600" style={{}}>
<span>Showing 1–20 of 92 issues</span>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs disabled:opacity-40 border-neutral-300/80 bg-neutral-100 hover:border-blue-500/70" style={{}}>

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m15 18-6-6 6-6"></path>
</svg>
                  Prev
                </button>
<button className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs border-neutral-300/80 bg-neutral-100 hover:border-blue-500/70" style={{}}>
                  Next
                  
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
