import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="min-h-screen w-full">
<section className="mx-auto max-w-7xl px-6 py-8">
<header className="mb-6 flex items-end justify-between">
<div>
<h1 className="text-[22px] sm:text-[28px] tracking-tight text-white/95 font-semibold">Area Jobs</h1>
<p className="mt-1 text-sm text-slate-400">Each area enqueues a background job. Status updates while results are being prepared.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-2.5 py-1">
<svg className="text-amber-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v5l3 3"></path></svg>
              Queued
            </span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-2.5 py-1">
<svg className="text-sky-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path></svg>
              Running
            </span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-2.5 py-1">
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Succeeded
            </span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-2.5 py-1">
<svg className="text-rose-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
              Failed
            </span>
</div>
</header>
<div className="space-y-4">

<details className="group rounded-xl border border-slate-800 bg-[#0B0F17] shadow-sm shadow-black/20" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3.5 hover:bg-slate-900/60">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-800">
<span className="text-[11px] font-semibold tracking-tight text-slate-300">DE</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h2 className="truncate text-[18px] tracking-tight font-semibold text-white/90">DRY ETCH</h2>
<span className="inline-flex items-center gap-1.5 rounded-full border border-sky-700/60 bg-sky-950/50 px-2.5 py-1 text-[12px] font-medium text-sky-300">
<svg className="text-sky-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path></svg>
                        Running
                        <span className="text-sky-200/80">42%</span>
</span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-1.5 py-0.5 text-[11px] text-slate-400">
<svg className="" fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path></svg>
                        polling…
                      </span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-400">
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
                        Submitted 2m ago
                      </div>
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Updated 12s ago
                      </div>
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line></svg>
                        Job <span className="ml-1 truncate max-w-[140px] text-slate-300">job_3f29d…c1a7</span>
</div>
</div>
</div>
</div>
<div className="mt-3 h-1.5 w-full overflow-hidden rounded bg-slate-800">
<div className="h-full rounded bg-sky-500/80" style={{width: '42%'}}></div>
</div>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Refresh now" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9"></path><path d="M21 3v7h-7"></path></svg>
</button>
<button aria-label="Pause polling" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" width="4" x="6" y="4"></rect><rect height="16" width="4" x="14" y="4"></rect></svg>
</button>
<button aria-label="Copy Job ID" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</button>
<div className="ml-2 hidden sm:block">
<svg className="text-slate-600 group-open:rotate-180 transition-transform duration-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</summary>
<div className="border-t border-slate-800/80 px-4 py-4">

<div className="rounded-lg border border-slate-800 bg-slate-950/50">
<div className="grid grid-cols-12 gap-2 border-b border-slate-800 px-3 py-2 text-[12px] text-slate-400">
<div className="col-span-3">Lot</div>
<div className="col-span-3">Recipe</div>
<div className="col-span-2">Chamber</div>
<div className="col-span-2">Owner</div>
<div className="col-span-2 text-right">ETA</div>
</div>
<div className="divide-y divide-slate-900/60">
<div className="grid grid-cols-12 gap-2 px-3 py-3">
<div className="col-span-3 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-3 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
</div>
<div className="grid grid-cols-12 gap-2 px-3 py-3">
<div className="col-span-3 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-3 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
</div>
<div className="grid grid-cols-12 gap-2 px-3 py-3">
<div className="col-span-3 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-3 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
<div className="col-span-2 h-4 rounded bg-slate-800/80 animate-pulse"></div>
</div>
</div>
</div>
<div aria-live="polite" className="sr-only">DRY ETCH job is 42 percent complete and running.</div>
</div>
</details>

<details className="group rounded-xl border border-slate-800 bg-[#0B0F17] shadow-sm shadow-black/20">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3.5 hover:bg-slate-900/60">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-800">
<span className="text-[11px] font-semibold tracking-tight text-slate-300">WE</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h2 className="truncate text-[18px] tracking-tight font-semibold text-white/90">WET ETCH</h2>
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-700/60 bg-amber-950/50 px-2.5 py-1 text-[12px] font-medium text-amber-300">
<svg className="text-amber-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v5l3 3"></path></svg>
                        Queued
                      </span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-1.5 py-0.5 text-[11px] text-slate-400">
<svg className="" fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path></svg>
                        polling…
                      </span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-400">
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
                        Submitted 15s ago
                      </div>
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Waiting for worker
                      </div>
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line></svg>
                        Job <span className="ml-1 truncate max-w-[140px] text-slate-300">job_f91ab…6d02</span>
</div>
</div>
</div>
</div>
<div className="mt-3 h-1.5 w-full overflow-hidden rounded bg-slate-800">
<div className="h-full w-1/3 rounded bg-amber-400/70 animate-pulse"></div>
</div>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Refresh now" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9"></path><path d="M21 3v7h-7"></path></svg>
</button>
<button aria-label="Cancel job" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
<button aria-label="Copy Job ID" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</button>
<div className="ml-2 hidden sm:block">
<svg className="text-slate-600 group-open:rotate-180 transition-transform duration-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</summary>
<div className="border-t border-slate-800/80 px-4 py-4">
<div className="rounded-lg border border-dashed border-slate-800/80 bg-slate-950/40 px-4 py-8 text-center text-sm text-slate-400">
                Waiting for worker to pick up job…
              </div>
<div aria-live="polite" className="sr-only">WET ETCH job queued. Waiting to start.</div>
</div>
</details>

<details className="group rounded-xl border border-slate-800 bg-[#0B0F17] shadow-sm shadow-black/20">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3.5 hover:bg-slate-900/60">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-800">
<span className="text-[11px] font-semibold tracking-tight text-slate-300">CM</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h2 className="truncate text-[18px] tracking-tight font-semibold text-white/90">CMP</h2>
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/50 px-2.5 py-1 text-[12px] font-medium text-emerald-300">
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Succeeded
                      </span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-400">
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
                        Completed 8s ago
                      </div>
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line></svg>
                        Job <span className="ml-1 truncate max-w-[140px] text-slate-300">job_b2ca1…9f11</span>
</div>
</div>
</div>
</div>
<div className="mt-3 h-1.5 w-full overflow-hidden rounded bg-slate-800">
<div className="h-full rounded bg-emerald-500/80" style={{width: '100%'}}></div>
</div>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Open in logs" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"></path></svg>
</button>
<button aria-label="Refresh data" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9"></path><path d="M21 3v7h-7"></path></svg>
</button>
<div className="ml-2 hidden sm:block">
<svg className="text-slate-600 group-open:rotate-180 transition-transform duration-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</summary>
<div className="border-t border-slate-800/80 px-4 py-4">

<div className="rounded-lg border border-slate-800 bg-slate-950/50">
<div className="grid grid-cols-12 gap-2 border-b border-slate-800 px-3 py-2 text-[12px] text-slate-400">
<div className="col-span-3">Lot</div>
<div className="col-span-3">Recipe</div>
<div className="col-span-2">Chamber</div>
<div className="col-span-2">Owner</div>
<div className="col-span-2 text-right">Score</div>
</div>
<div className="divide-y divide-slate-900/60 text-[13px]">
<div className="grid grid-cols-12 gap-2 px-3 py-2 hover:bg-slate-900/40">
<div className="col-span-3 truncate text-slate-200">L-0193A</div>
<div className="col-span-3 truncate text-slate-300">CMP_Std_A1</div>
<div className="col-span-2 text-slate-300">CMB-02</div>
<div className="col-span-2 text-slate-300">dpeters</div>
<div className="col-span-2 text-right text-emerald-400">98.4</div>
</div>
<div className="grid grid-cols-12 gap-2 px-3 py-2 hover:bg-slate-900/40">
<div className="col-span-3 truncate text-slate-200">L-0210B</div>
<div className="col-span-3 truncate text-slate-300">CMP_Std_B2</div>
<div className="col-span-2 text-slate-300">CMB-03</div>
<div className="col-span-2 text-slate-300">kchoi</div>
<div className="col-span-2 text-right text-emerald-400">96.9</div>
</div>
</div>
</div>
<div aria-live="polite" className="sr-only">CMP job succeeded. Results available.</div>
</div>
</details>

<details className="group rounded-xl border border-slate-800 bg-[#0B0F17] shadow-sm shadow-black/20">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3.5 hover:bg-slate-900/60">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-800">
<span className="text-[11px] font-semibold tracking-tight text-slate-300">ME</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h2 className="truncate text-[18px] tracking-tight font-semibold text-white/90">METROLOGY</h2>
<span className="inline-flex items-center gap-1.5 rounded-full border border-rose-700/60 bg-rose-950/50 px-2.5 py-1 text-[12px] font-medium text-rose-300">
<svg className="text-rose-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                        Failed
                      </span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-1.5 py-0.5 text-[11px] text-slate-400">
<svg className="" fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 9.5l5 5M14.5 9.5l-5 5"></path></svg>
                        2 retries used
                      </span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-400">
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v5"></path><path d="M12 16h.01"></path></svg>
                        Timeout during aggregation
                      </div>
<div className="flex items-center gap-1">
<svg className="text-slate-500" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line></svg>
                        Job <span className="ml-1 truncate max-w-[140px] text-slate-300">job_92cc0…4ea9</span>
</div>
</div>
</div>
</div>
<div className="mt-3 h-1.5 w-full overflow-hidden rounded bg-slate-800">
<div className="h-full rounded bg-rose-500/80" style={{width: '67%'}}></div>
</div>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="View error details" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</button>
<button aria-label="Retry job" className="inline-flex h-8 px-2 items-center justify-center gap-1.5 rounded-md border border-rose-700/50 bg-rose-900/40 text-rose-200 hover:bg-rose-900/60 hover:border-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40">
<svg className="" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                  Retry
                </button>
<div className="ml-2 hidden sm:block">
<svg className="text-slate-600 group-open:rotate-180 transition-transform duration-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</summary>
<div className="border-t border-slate-800/80 px-4 py-4">
<div className="rounded-lg border border-rose-800/50 bg-rose-950/30 p-4">
<div className="mb-2 flex items-center gap-2 text-rose-300">
<svg className="" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                  Aggregation exceeded time limit (120s)
                </div>
<pre className="overflow-x-auto text-[12px] leading-relaxed text-rose-200/90 whitespace-pre-wrap">Error: context deadline exceeded
at AggregateResults (svc/metrics.go:214)
at Worker.HandleJob (worker/job.go:88)</pre>
</div>
<div aria-live="polite" className="sr-only">METROLOGY job failed. Error details available.</div>
</div>
</details>
</div>

<div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="text-[12px] text-slate-400">
              Tip: Status pill + progress show the job state for each accordion-group. Content will auto-fill the grid once jobs succeed.
            </div>
<div className="flex items-center gap-3 text-[12px]">
<div className="inline-flex items-center gap-1 text-slate-400">
<span className="relative inline-flex h-3 w-3">
<span className="absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-sky-300 animate-ping"></span>
</span>
                polling
              </div>
<div className="inline-flex items-center gap-1 text-slate-400">
<svg className="text-slate-400" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
                expand
              </div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
