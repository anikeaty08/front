import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen w-full bg-slate-50 text-slate-900">

<aside className="hidden lg:flex lg:flex-col lg:w-64 border-r backdrop-blur-sm border-slate-200 bg-slate-50/80">
<div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-xs font-semibold tracking-tight">
              VD
            </div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-950">
                View Designer
              </span>
<span className="text-xs text-slate-600">
                Layouts &amp; components
              </span>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors border-slate-300 bg-slate-100/60 text-slate-900 hover:bg-slate-200">
<svg className="lucide lucide-settings-2 h-3.5 w-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
<span>Settings</span>
</button>
</div>
<div className="flex-1 overflow-y-auto">

<div className="px-4 pt-4 pb-3 border-b border-slate-200">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase text-slate-600">
                Page filter
              </span>
<button className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] transition-colors bg-slate-100/70 text-slate-700 hover:bg-slate-200">
<svg className="lucide lucide-sliders-horizontal h-3 w-3" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
<span>Advanced</span>
</button>
</div>
<div className="space-y-2">
<div className="relative flex items-center gap-2 rounded-md border px-2.5 py-1.5 border-slate-300 bg-slate-100/70">
<svg className="lucide lucide-search h-3.5 w-3.5 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent text-xs placeholder-slate-500 focus:outline-none text-slate-800" placeholder="Search pages or views..."/>
</div>
<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs text-slate-700">
<span>Page</span>
<span className="text-[0.65rem] text-slate-500">
                    e.g. DailyReport
                  </span>
</label>
<button className="flex items-center justify-between rounded-md border px-2.5 py-1.5 text-xs transition-colors w-full border-slate-300 bg-slate-100/80 text-slate-800 hover:bg-slate-200">
<span className="truncate">DailyReport</span>
<svg className="lucide lucide-chevron-down h-3.5 w-3.5 text-slate-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="px-4 py-4 border-b border-slate-200">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase text-slate-600">
                Views
              </span>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center justify-center rounded-md border p-1.5 text-[0.65rem] transition-colors border-slate-300 bg-slate-100/80 text-slate-800 hover:bg-slate-200" title="Import from JSON">
<svg className="lucide lucide-import h-3.5 w-3.5" data-lucide="import" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m8 11 4 4 4-4"></path><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1.5 text-[0.65rem] transition-colors border-slate-300 bg-slate-100/80 text-slate-800 hover:bg-slate-200" title="Export to JSON">
<i className="h-3.5 w-3.5" data-lucide="export"></i>
</button>
<button className="inline-flex items-center gap-1 rounded-md bg-sky-500/90 px-2 py-1 text-xs font-medium transition-colors text-slate-50 hover:bg-sky-600" title="Create new view">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New</span>
</button>
</div>
</div>
<div className="space-y-1.5">

<button className="w-full rounded-md border border-sky-500/60 bg-sky-500/10 px-2.5 py-2 text-left text-xs hover:bg-sky-500/15 transition-colors text-slate-900">
<div className="flex items-center justify-between mb-0.5">
<div className="flex items-center gap-1.5">
<div className="h-1.5 w-1.5 rounded-full shadow-[0_0_0_3px_rgba(16,185,129,0.2)] bg-emerald-600"></div>
<span className="font-semibold tracking-tight">
                      Daily Overview
                    </span>
</div>
<span className="text-[0.65rem] text-slate-600">
                    v3 • Auto
                  </span>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-600">
<span>Default for DailyReport</span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-view h-3 w-3 text-slate-500" data-lucide="view" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
<span>Assigned</span>
</span>
</div>
</button>
<button className="w-full rounded-md border px-2.5 py-2 text-left text-xs transition-colors border-slate-200 bg-slate-100/60 text-slate-800 hover:bg-slate-200">
<div className="flex items-center justify-between mb-0.5">
<span className="font-semibold tracking-tight">
                    Compact KPIs
                  </span>
<span className="text-[0.65rem] text-slate-500">v1</span>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>DailyReport</span>
<span>Manual</span>
</div>
</button>
<button className="w-full rounded-md border px-2.5 py-2 text-left text-xs transition-colors border-slate-200 bg-slate-100/60 text-slate-800 hover:bg-slate-200">
<div className="flex items-center justify-between mb-0.5">
<span className="font-semibold tracking-tight">
                    Anomaly Focus
                  </span>
<span className="text-[0.65rem] text-slate-500">
                    v2 • Draft
                  </span>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-500">
<span>Overview</span>
<span>Not assigned</span>
</div>
</button>
</div>
</div>

<div className="px-4 py-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase text-slate-600">
                Assignment
              </span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-800">
                    Assigned page
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    DailyReport
                  </span>
</div>
<button className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[0.7rem] transition-colors border-slate-300 bg-slate-100/80 text-slate-800 hover:bg-slate-200">
<svg className="lucide lucide-link-2 h-3.5 w-3.5" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>Reassign</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-800">
                    Auto-assign
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    Use as default for page
                  </span>
</div>
<button className="relative inline-flex h-4.5 w-8 items-center rounded-full bg-sky-500/20 border border-sky-500/60">
<span className="ml-3.5 inline-flex h-3.5 w-3.5 transform rounded-full shadow transition-transform bg-sky-600"></span>
</button>
</div>
</div>
</div>
</div>

<div className="border-t px-4 py-3 text-[0.7rem] text-slate-500 border-slate-200">
<div className="flex items-center justify-between">
<span>Last saved</span>
<span className="text-slate-600">2 min ago • Auto</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col backdrop-blur-sm bg-slate-50/90">

<header className="flex items-center justify-between border-b px-3 sm:px-4 py-2.5 border-slate-200">
<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex lg:hidden items-center justify-center rounded-md border p-1.5 text-xs transition-colors border-slate-200 bg-slate-100/80 text-slate-800 hover:bg-slate-200">
<svg className="lucide lucide-panel-left h-4 w-4" data-lucide="panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
</button>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-950">
                  Daily Overview
                </span>
<span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                  Assigned to DailyReport
                </span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-layout-dashboard h-3.5 w-3.5 text-slate-500" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span>Grid view</span>
</span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-wand-2 h-3.5 w-3.5 text-sky-600" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span>Design mode</span>
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<div className="hidden sm:flex text-[0.7rem] bg-slate-100/80 border-slate-200 border rounded-full pt-0.5 pr-0.5 pb-0.5 pl-0.5 items-center">
<button className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 bg-slate-200/90 text-slate-900">
<svg className="lucide lucide-pen-square h-3.5 w-3.5 text-sky-600" data-lucide="pen-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
<span>Design</span>
</button>
<button className="inline-flex gap-1 transition-colors hover:text-slate-900 text-slate-600 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1 gap-y-1 items-center">
<svg className="lucide lucide-eye h-3.5 w-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Preview</span>
</button>
</div>

<div className="hidden sm:flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs transition-colors border-slate-300 bg-slate-100/80 text-slate-800 hover:bg-slate-200">
<svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span className="">Duplicate</span>
</button>
<button className="inline-flex items-center gap-1 rounded-md border border-rose-500/60 bg-rose-500/10 px-2.5 py-1.5 text-xs hover:bg-rose-500/20 transition-colors text-rose-900">
<svg className="lucide lucide-trash-2 h-3.5 w-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
<span>Delete</span>
</button>
</div>
<button className="inline-flex items-center gap-1 rounded-md bg-emerald-500/90 px-3 py-1.5 text-xs font-medium transition-colors text-slate-50 hover:bg-emerald-600">
<svg className="lucide lucide-save h-3.5 w-3.5" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
<span className="">Save changes</span>
</button>
</div>
</header>

<div className="flex flex-1 min-h-0">

<section className="flex-1 flex flex-col border-r bg-gradient-to-b border-slate-200 from-slate-50 via-slate-50 to-slate-50/90">

<div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-slate-200 bg-slate-50/80">
<div className="flex items-center gap-2 sm:gap-3">
<div className="hidden sm:inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[0.7rem] border-slate-200 bg-slate-100/80">
<span className="text-slate-600">Grid</span>
<button className="inline-flex items-center gap-1 rounded px-2 py-0.5 bg-slate-200 text-slate-900">
<svg className="lucide lucide-columns-3 h-3 w-3 text-sky-600" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span>12 columns</span>
</button>
</div>
<div className="flex items-center gap-1 sm:gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-[0.7rem] transition-colors border-slate-200 bg-slate-100/80 text-slate-800 hover:bg-slate-200">
<svg className="lucide lucide-rows h-3.5 w-3.5 text-sky-600" data-lucide="rows" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 12h18"></path></svg>
<span>Add row</span>
</button>
<button className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-[0.7rem] transition-colors border-slate-200 bg-slate-100/80 text-slate-800 hover:bg-slate-200">
<svg className="lucide lucide-calendar-range h-3.5 w-3.5 text-violet-600" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
<span>Add date filter</span>
</button>
</div>
</div>
<div className="flex items-center gap-1.5 text-[0.7rem]">
<button className="inline-flex items-center justify-center rounded-md border p-1.5 transition-colors border-slate-200 bg-slate-100/80 text-slate-800 hover:bg-slate-200" title="Desktop">
<svg className="lucide lucide-monitor h-3.5 w-3.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1.5 transition-colors border-slate-200 bg-slate-100/60 text-slate-600 hover:bg-slate-200" title="Tablet">
<svg className="lucide lucide-tablet-smartphone h-3.5 w-3.5" data-lucide="tablet-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="10" x="3" y="8"></rect><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"></path><path d="M8 18h.01"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1.5 transition-colors border-slate-200 bg-slate-100/60 text-slate-600 hover:bg-slate-200" title="Mobile">
<svg className="lucide lucide-smartphone h-3.5 w-3.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-auto px-3 sm:px-6 py-3 sm:py-5 flex justify-center">
<div className="w-full max-w-5xl border rounded-xl shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_40px_80px_rgba(15,23,42,0.9)] border-slate-200/80 bg-slate-50/80">

<div className="flex items-center justify-between gap-2 border-b px-3 sm:px-4 py-2 rounded-t-xl border-slate-200 bg-slate-100/70">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mouse-pointer-2 h-3.5 w-3.5 text-slate-600" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
<span className="text-xs text-slate-700">
                      Drag to resize, click to configure components.
                    </span>
</div>
<button className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[0.7rem] transition-colors border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100">
<svg className="lucide lucide-grid-2x2 h-3.5 w-3.5" data-lucide="grid-2x2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
<span>Grid on</span>
</button>
</div>

<div className="border-b border-dashed px-3 sm:px-4 py-3 sm:py-3.5 border-slate-200/80 bg-slate-50/80">
<div className="flex items-center justify-between gap-3 rounded-md border px-3 py-2 border-slate-200 bg-slate-100/80">
<div className="flex items-center gap-2">
<div className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/15 border border-violet-500/40">
<svg className="lucide lucide-calendar-clock h-3 w-3 text-violet-700" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-900">
                          Global date range
                        </span>
<span className="text-[0.7rem] text-slate-500">
                          Used by all charts and tables in this view
                        </span>
</div>
</div>
<div className="flex items-center gap-2 text-[0.7rem]">
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border px-2 py-1 transition-colors border-slate-200 bg-slate-50/80 text-slate-800 hover:bg-slate-100">
<svg className="lucide lucide-clock-3 h-3.5 w-3.5 text-violet-700" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Last 7 days</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1.5 transition-colors border-slate-200 bg-slate-100/80 text-slate-600 hover:bg-slate-200" title="Configure filter">
<svg className="lucide lucide-sliders h-3.5 w-3.5" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg>
</button>
</div>
</div>
</div>

<div className="border-b border-dashed px-3 sm:px-4 py-3 sm:py-4 border-slate-200/80 bg-slate-50/80">
<div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-500">
<div className="flex items-center gap-1.5">
<span className="uppercase tracking-wide">
                        Row 1 • Statistics
                      </span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span>4 columns</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[0.65rem] transition-colors border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200">
<svg className="lucide lucide-grip-horizontal h-3 w-3" data-lucide="grip-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="1"></circle><circle cx="19" cy="9" r="1"></circle><circle cx="5" cy="9" r="1"></circle><circle cx="12" cy="15" r="1"></circle><circle cx="19" cy="15" r="1"></circle><circle cx="5" cy="15" r="1"></circle></svg>
<span>Reorder</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 transition-colors border-slate-200 bg-slate-100/80 text-slate-600 hover:bg-slate-200" title="Row settings">
<svg className="lucide lucide-settings-2 h-3.5 w-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

<div className="group relative rounded-lg border p-3 hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Edit stat">
<svg className="lucide lucide-wand-2 h-3 w-3" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3 w-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-center justify-between mb-1">
<span className="text-[0.7rem] text-slate-600">
                          Total Revenue
                        </span>
<svg className="lucide lucide-bar-chart-3 h-3.5 w-3.5 text-sky-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="flex items-baseline gap-2 mb-1.5">
<span className="text-lg font-semibold tracking-tight text-slate-950">
                          $128.4k
                        </span>
<span className="text-[0.7rem] text-emerald-600">
                          +12.3%
                        </span>
</div>
<div className="h-7 rounded-sm bg-gradient-to-r from-sky-500/20 via-sky-600/30 to-emerald-600/25"></div>
</div>

<div className="group relative rounded-lg border p-3 hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Edit stat">
<svg className="lucide lucide-wand-2 h-3 w-3" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3 w-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-center justify-between mb-1">
<span className="text-[0.7rem] text-slate-600">
                          Active Users
                        </span>
<svg className="lucide lucide-users h-3.5 w-3.5 text-sky-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex items-baseline gap-2 mb-1.5">
<span className="text-lg font-semibold tracking-tight text-slate-950">
                          8,291
                        </span>
<span className="text-[0.7rem] text-emerald-600">
                          +3.1%
                        </span>
</div>
<div className="h-7 rounded-sm bg-gradient-to-r from-emerald-500/20 via-emerald-600/30 to-sky-600/25"></div>
</div>

<div className="group relative rounded-lg border p-3 hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Edit stat">
<svg className="lucide lucide-wand-2 h-3 w-3" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3 w-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-center justify-between mb-1">
<span className="text-[0.7rem] text-slate-600">
                          Error Rate
                        </span>
<svg className="lucide lucide-activity h-3.5 w-3.5 text-rose-700" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="flex items-baseline gap-2 mb-1.5">
<span className="text-lg font-semibold tracking-tight text-slate-950">
                          0.42%
                        </span>
<span className="text-[0.7rem] text-rose-700">
                          +0.08%
                        </span>
</div>
<div className="h-7 rounded-sm bg-gradient-to-r from-rose-500/20 via-amber-600/30 to-slate-300/40"></div>
</div>

<div className="group relative rounded-lg border p-3 hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Edit stat">
<svg className="lucide lucide-wand-2 h-3 w-3" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3 w-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-center justify-between mb-1">
<span className="text-[0.7rem] text-slate-600">
                          Conversion
                        </span>
<svg className="lucide lucide-pie-chart h-3.5 w-3.5 text-emerald-700" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="flex items-baseline gap-2 mb-1.5">
<span className="text-lg font-semibold tracking-tight text-slate-950">
                          5.8%
                        </span>
<span className="text-[0.7rem] text-emerald-600">
                          +0.9%
                        </span>
</div>
<div className="h-7 rounded-sm bg-gradient-to-r from-emerald-500/20 via-emerald-700/30 to-sky-600/25"></div>
</div>
</div>
</div>

<div className="border-b border-dashed px-3 sm:px-4 py-3 sm:py-4 border-slate-200/80 bg-slate-50/80">
<div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-500">
<div className="flex items-center gap-1.5">
<span className="uppercase tracking-wide">
                        Row 2 • Chart &amp; Announcement
                      </span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span>8 / 4 columns</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[0.65rem] transition-colors border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200">
<svg className="lucide lucide-grip-vertical h-3 w-3" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
<span>Reorder</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

<div className="group relative lg:col-span-8 rounded-lg border p-3 sm:p-3.5 hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Configure chart">
<svg className="lucide lucide-sliders-horizontal h-3 w-3" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3 w-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-line-chart h-3.5 w-3.5 text-sky-600" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-xs text-slate-900">
                            Revenue by day
                          </span>
</div>
<div className="flex items-center gap-1.5 text-[0.7rem]">
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 transition-colors border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100">
<i className="h-3 w-3 text-emerald-700" data-lucide="trend-up"></i>
<span>Line</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 transition-colors border-slate-200 bg-slate-50/80 text-slate-600 hover:bg-slate-100" title="Bind data source">
<svg className="lucide lucide-database h-3.5 w-3.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</button>
</div>
</div>

<div className="mt-1">
<div className="flex items-end gap-1.5 h-28 rounded-md bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-50">
<div className="flex-1 h-full flex items-end gap-1.5 px-1">
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/60" style={{height: '40%'}}></div>
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/70" style={{height: '55%'}}></div>
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/50" style={{height: '35%'}}></div>
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/80" style={{height: '75%'}}></div>
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/65" style={{height: '60%'}}></div>
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/40" style={{height: '30%'}}></div>
<div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500/20 to-sky-600/70" style={{height: '65%'}}></div>
</div>
</div>
<div className="mt-1.5 flex items-center justify-between">
<span className="text-[0.7rem] text-slate-500">
                            Uses global date range
                          </span>
<span className="text-[0.7rem] text-emerald-600">
                            Connected to sales.revenue_daily
                          </span>
</div>
</div>
</div>

<div className="group relative lg:col-span-4 rounded-lg border p-3 sm:p-3.5 hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Edit announcement">
<svg className="lucide lucide-pen h-3 w-3" data-lucide="pen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3 w-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-start gap-2.5">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/15 border border-amber-500/40">
<svg className="lucide lucide-megaphone h-3.5 w-3.5 text-amber-700" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5 mb-0.5">
<span className="text-xs font-semibold tracking-tight text-slate-950">
                              Maintenance window today
                            </span>
<span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-1.5 py-0.5 text-[0.65rem] text-amber-800">
                              Announcement
                            </span>
</div>
<p className="text-sm leading-snug text-slate-700">
                            Scheduled downtime from 22:00 to 22:15 UTC. Real-time
                            metrics may be delayed during this period.
                          </p>
<div className="mt-1.5 flex items-center justify-between text-[0.7rem] text-slate-500">
<span>Visible to all roles</span>
<span>Dismissible</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-3 sm:px-4 py-3 sm:py-4 rounded-b-xl bg-slate-50/80">
<div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-500">
<div className="flex items-center gap-1.5">
<span className="uppercase tracking-wide">
                        Row 3 • Table
                      </span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span>12 columns</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[0.65rem] transition-colors border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200">
<svg className="lucide lucide-grip-vertical h-3 w-3" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
<span>Reorder</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 transition-colors border-slate-200 bg-slate-100/80 text-slate-600 hover:bg-slate-200" title="Row options">
<svg className="lucide lucide-more-horizontal h-3.5 w-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
<div className="group relative rounded-lg border hover:border-sky-500/60 transition-colors cursor-pointer border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="absolute inset-0 rounded-lg border border-sky-500/40 opacity-0 group-hover:opacity-100 pointer-events-none" style={{borderStyle: 'dashed'}}></div>
<div className="absolute right-2 top-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="inline-flex items-center justify-center rounded-md border p-1.5 text-[0.65rem] transition-colors bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100" title="Configure table">
<svg className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1.5 text-[0.65rem] hover:bg-rose-500/10 hover:border-rose-500/60 transition-colors bg-slate-50/80 border-slate-200 text-slate-600 hover:text-rose-800" title="Remove">
<svg className="lucide lucide-trash-2 h-3.5 w-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="px-3 sm:px-3.5 pt-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-table-2 h-3.5 w-3.5 text-sky-600" data-lucide="table-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
<span className="text-xs text-slate-900">
                            Recent anomalies
                          </span>
</div>
<div className="flex items-center gap-1.5 text-[0.7rem]">
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 transition-colors border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100">
<svg className="lucide lucide-filter h-3 w-3 text-sky-700" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span>Filters</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1 transition-colors border-slate-200 bg-slate-50/80 text-slate-600 hover:bg-slate-100" title="Bind data source">
<svg className="lucide lucide-database h-3.5 w-3.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</button>
</div>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full border-t text-xs border-slate-200">
<thead className="bg-slate-50/80">
<tr className="text-slate-600">
<th className="whitespace-nowrap border-b px-3 py-2 text-left font-medium border-slate-200">
                              Time
                            </th>
<th className="whitespace-nowrap border-b px-3 py-2 text-left font-medium border-slate-200">
                              Metric
                            </th>
<th className="whitespace-nowrap border-b px-3 py-2 text-left font-medium border-slate-200">
                              Value
                            </th>
<th className="whitespace-nowrap border-b px-3 py-2 text-left font-medium border-slate-200">
                              Threshold
                            </th>
<th className="whitespace-nowrap border-b px-3 py-2 text-left font-medium border-slate-200">
                              Severity
                            </th>
<th className="whitespace-nowrap border-b px-3 py-2 text-left font-medium border-slate-200">
                              Owner
                            </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-100/80">
<td className="whitespace-nowrap px-3 py-1.5 text-slate-800">
                              09:12
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-800">
                              Error rate
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-rose-700">
                              2.3%
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-600">
                              1.0%
                            </td>
<td className="whitespace-nowrap px-3 py-1.5">
<span className="inline-flex rounded-full bg-rose-500/15 border border-rose-500/40 px-2 py-0.5 text-[0.65rem] text-rose-800">
                                Critical
                              </span>
</td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-700">
                              api-core
                            </td>
</tr>
<tr className="hover:bg-slate-100/80">
<td className="whitespace-nowrap px-3 py-1.5 text-slate-800">
                              08:47
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-800">
                              Latency p95
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-amber-700">
                              620ms
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-600">
                              400ms
                            </td>
<td className="whitespace-nowrap px-3 py-1.5">
<span className="inline-flex rounded-full bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 text-[0.65rem] text-amber-800">
                                High
                              </span>
</td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-700">
                              web-edge
                            </td>
</tr>
<tr className="hover:bg-slate-100/80">
<td className="whitespace-nowrap px-3 py-1.5 text-slate-800">
                              08:02
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-800">
                              Signups
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-emerald-700">
                              +184
                            </td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-600">
                              +90
                            </td>
<td className="whitespace-nowrap px-3 py-1.5">
<span className="inline-flex rounded-full bg-emerald-500/15 border border-emerald-500/40 px-2 py-0.5 text-[0.65rem] text-emerald-800">
                                Positive
                              </span>
</td>
<td className="whitespace-nowrap px-3 py-1.5 text-slate-700">
                              growth
                            </td>
</tr>
</tbody>
</table>
</div>
<div className="px-3 sm:px-3.5 py-2 border-t text-[0.7rem] text-slate-500 flex items-center justify-between border-slate-200">
<span>Showing 3 of 42 rows</span>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 transition-colors border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100">
<svg className="lucide lucide-chevron-left h-3 w-3 text-slate-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span>Prev</span>
</button>
<button className="inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 transition-colors border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100">
<span>Next</span>
<svg className="lucide lucide-chevron-right h-3 w-3 text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>

<button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed px-3 py-2 text-[0.7rem] hover:border-sky-500/60 transition-colors border-slate-300 bg-slate-100/60 text-slate-700 hover:bg-slate-100">
<svg className="lucide lucide-plus h-3.5 w-3.5 text-sky-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add component to this row</span>
</button>
</div>
</div>
</div>
</section>

<aside className="w-72 border-l backdrop-blur-sm hidden md:flex md:flex-col border-slate-200 bg-slate-50/90">

<div className="border-b px-3 pt-3 border-slate-200">
<div className="inline-flex rounded-full border p-0.5 text-[0.7rem] border-slate-200 bg-slate-100/80">
<button className="inline-flex items-center gap-1 rounded-full px-3 py-1 bg-slate-200/90 text-slate-900">
<svg className="lucide lucide-shapes h-3.5 w-3.5 text-sky-600" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
<span>Components</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors text-slate-600 hover:text-slate-900">
<svg className="lucide lucide-panel-right-open h-3.5 w-3.5" data-lucide="panel-right-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M15 3v18"></path><path d="m10 15-3-3 3-3"></path></svg>
<span>Properties</span>
</button>
</div>
<p className="mt-2 mb-2 text-xs text-slate-600">
                Drag components into the layout or click to add to the last
                selected row.
              </p>
</div>

<div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">

<div className="">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-700">
                    Statistics
                  </span>
<span className="text-[0.65rem] text-slate-500">
                    KPI cards
                  </span>
</div>
<button className="group w-full rounded-lg border p-2.5 text-left hover:border-sky-500/60 transition-colors border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-badge-dollar-sign h-3.5 w-3.5 text-emerald-700" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
<span className="text-xs text-slate-900">
                        Stat group
                      </span>
</div>
<span className="rounded-full border px-1.5 py-0.5 text-[0.65rem] bg-slate-50/70 border-slate-200 text-slate-600">
                      4 per row
                    </span>
</div>
<p className="text-sm text-slate-600">
                    Add a responsive row of summary KPIs with trend badges.
                  </p>
</button>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-700">
                    Chart
                  </span>
<span className="text-[0.65rem] text-slate-500">
                    Line, bar, area
                  </span>
</div>
<button className="group w-full rounded-lg border p-2.5 text-left hover:border-sky-500/60 transition-colors border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-area-chart h-3.5 w-3.5 text-sky-600" data-lucide="area-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></path></svg>
<span className="text-xs text-slate-900">
                        Chart component
                      </span>
</div>
<span className="rounded-full border px-1.5 py-0.5 text-[0.65rem] bg-slate-50/70 border-slate-200 text-slate-600">
                      4–12 cols
                    </span>
</div>
<p className="text-sm text-slate-600">
                    Visualize metrics using time series or categorical charts.
                  </p>
</button>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-700">
                    Table
                  </span>
<span className="text-[0.65rem] text-slate-500">
                    Data grid
                  </span>
</div>
<button className="group w-full rounded-lg border p-2.5 text-left hover:border-sky-500/60 transition-colors border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-table-2 h-3.5 w-3.5 text-sky-700" data-lucide="table-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
<span className="text-xs text-slate-900">
                        Table component
                      </span>
</div>
<span className="rounded-full border px-1.5 py-0.5 text-[0.65rem] bg-slate-50/70 border-slate-200 text-slate-600">
                      Paginated
                    </span>
</div>
<p className="text-sm text-slate-600">
                    Show detailed event or record lists with sorting and paging.
                  </p>
</button>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-700">
                    Announcement
                  </span>
<span className="text-[0.65rem] text-slate-500">
                    Text / alerts
                  </span>
</div>
<button className="group w-full rounded-lg border p-2.5 text-left hover:border-sky-500/60 transition-colors border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-megaphone h-3.5 w-3.5 text-amber-700" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<span className="text-xs text-slate-900">
                        Announcement card
                      </span>
</div>
<span className="rounded-full border px-1.5 py-0.5 text-[0.65rem] bg-slate-50/70 border-slate-200 text-slate-600">
                      Rich text
                    </span>
</div>
<p className="text-sm text-slate-600">
                    Communicate important messages directly within the view.
                  </p>
</button>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-700">
                    Date filter
                  </span>
<span className="text-[0.65rem] text-slate-500">
                    Global scope
                  </span>
</div>
<button className="group w-full rounded-lg border p-2.5 text-left hover:border-sky-500/60 transition-colors border-slate-200 bg-slate-100/80 hover:bg-slate-100">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-calendar-range h-3.5 w-3.5 text-violet-700" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
<span className="text-xs text-slate-900">
                        Global date picker
                      </span>
</div>
<span className="rounded-full border px-1.5 py-0.5 text-[0.65rem] bg-slate-50/70 border-slate-200 text-slate-600">
                      1 per view
                    </span>
</div>
<p className="text-sm text-slate-600">
                    Control the time range for all components in this view.
                  </p>
</button>
</div>
</div>

<div className="border-t px-3 py-3 text-[0.7rem] text-slate-500 border-slate-200">
<div className="flex items-center justify-between mb-1.5">
<span>Selection</span>
<span className="text-slate-600">Chart: Revenue by day</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border px-2 py-1.5 text-xs transition-colors border-slate-200 bg-slate-50/80 text-slate-800 hover:bg-slate-100">
<svg className="lucide lucide-code-2 h-3.5 w-3.5 text-sky-700" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span>View JSON</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border p-1.5 text-xs transition-colors border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100" title="Copy config">
<svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>
</aside>
</div>
</main>
</div>


    </>
  );
}
