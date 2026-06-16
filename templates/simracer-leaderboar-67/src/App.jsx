import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 border-b backdrop-blur border-neutral-200/80 bg-neutral-50/70" style={{}}>
<div className="mx-auto max-w-md px-4 pt-3 pb-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 shrink-0 rounded-md border grid place-items-center border-neutral-200 bg-neutral-100/60" style={{}}>
<span className="text-xs font-semibold tracking-tight">SR</span>
</div>
<div className="flex flex-col">
<h1 className="text-xl tracking-tight font-semibold leading-6">Leaderboard</h1>
<p className="text-xs text-neutral-600" style={{}}>Global laptimes</p>
</div>
</div>
<button aria-label="Notifications" className="h-8 w-8 rounded-md border grid place-items-center transition-colors border-neutral-200 bg-neutral-100/60 hover:bg-neutral-200/60 hover:border-neutral-300" style={{}}>
<svg className="lucide lucide-bell h-4 w-4 text-neutral-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<div className="mt-3 inline-flex rounded-lg border p-1 border-neutral-200 bg-neutral-100/60" style={{}}>
<button aria-current="page" className="px-3 py-1.5 text-xs rounded-md font-medium shadow-inner text-neutral-900 bg-neutral-200/80" style={{}}>Global</button>
<button className="px-3 py-1.5 text-xs rounded-md font-medium transition-colors text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/60" style={{}}>Tournaments</button>
</div>
</div>
</header>
<main className="mx-auto max-w-md px-4 pb-28 pt-3">

<section className="rounded-xl border p-3 border-neutral-200 bg-neutral-100/50" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Your avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div>
<p className="text-sm font-medium leading-5">Your Rank</p>
<p className="text-xs leading-4 text-neutral-600" style={{}}>Global GT3 • Spa</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium tabular-nums">#12</p>
<p className="text-xs tabular-nums text-neutral-600" style={{}}>PB 1:34.112 • +1.558s</p>
</div>
</div>
</section>

<section className="mt-4 space-y-2">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight">Top times</h2>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-colors border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>
<svg className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
            Filters
          </button>
</div>
<div className="no-scrollbar flex gap-2 overflow-x-auto">
<button className="whitespace-nowrap rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-800" style={{}}>GT3</button>
<button className="whitespace-nowrap rounded-full border px-3 py-1 text-xs border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>GT4</button>
<button className="whitespace-nowrap rounded-full border px-3 py-1 text-xs border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>F1</button>
<span className="mx-1 w-px self-stretch bg-neutral-200" style={{}}></span>
<button className="whitespace-nowrap rounded-full border px-3 py-1 text-xs border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>All Tracks</button>
<button className="whitespace-nowrap rounded-full border px-3 py-1 text-xs border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>Monza</button>
<button className="whitespace-nowrap rounded-full border px-3 py-1 text-xs border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>Spa</button>
<button className="whitespace-nowrap rounded-full border px-3 py-1 text-xs border-neutral-200 bg-neutral-100/60 text-neutral-700 hover:bg-neutral-200/60" style={{}}>Nürburgring</button>
</div>
</section>

<section className="mt-4 space-y-3">

<div className="flex items-center justify-between px-0.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pinned h-4 w-4 text-neutral-600" data-lucide="map-pinned" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg>
<p className="text-xs text-neutral-700" style={{}}>Spa-Francorchamps • Dry • 22°C</p>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-600" style={{}}>
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="">1,284 drivers</span>
</div>
</div>

<article className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-b p-4 ring-1 ring-inset ring-purple-500/20 from-purple-50/40 to-neutral-100/60" style={{}}>
<div className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl bg-purple-400/10" style={{}}></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-semibold bg-purple-400/20 text-purple-800" style={{}}>1</span>
<img alt="Alex Morgan" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-purple-500/30" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div>
<p className="text-sm font-semibold leading-5 tracking-tight">Alex Morgan</p>
<p className="text-xs text-purple-800/90" style={{}}>Porsche 911 GT3 R • GT3</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-baseline gap-1">
<svg className="lucide lucide-trophy h-4 w-4 text-purple-700" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<p className="font-mono tabular-nums text-xl tracking-tight text-purple-800" style={{}}>1:32.554</p>
</div>
<p className="text-[11px] text-purple-800/80" style={{}}>Leader</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md border border-purple-500/30 px-2 py-0.5 text-[11px] bg-purple-400/10 text-purple-800" style={{}}>
<svg className="lucide lucide-gauge h-3.5 w-3.5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
              TC 3 • ABS 2
            </span>
<span className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] border-neutral-200 bg-neutral-100/60 text-neutral-700" style={{}}>
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Today
            </span>
<span className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] border-neutral-200 bg-neutral-100/60 text-neutral-700" style={{}}>
<svg className="lucide lucide-hash h-3.5 w-3.5" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
              Split 1
            </span>
</div>
</article>

<ol className="divide-y rounded-xl border divide-neutral-100/60 border-neutral-200/80 bg-neutral-100/40" style={{}}>
<li className="flex items-center gap-3 p-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-medium bg-neutral-200 text-neutral-800" style={{}}>2</span>
<img alt="Lina Chen" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium leading-5">Lina Chen</p>
<p className="truncate text-xs text-neutral-600" style={{}}>Ferrari 296 GT3</p>
</div>
<div className="text-right">
<p className="font-mono tabular-nums text-base tracking-tight">1:33.001</p>
<p className="text-[11px] text-amber-700/90" style={{}}>+0.447s</p>
</div>
</li>
<li className="flex items-center gap-3 p-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-medium bg-neutral-200 text-neutral-800" style={{}}>3</span>
<img alt="Mateo Silva" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium leading-5">Mateo Silva</p>
<p className="truncate text-xs text-neutral-600" style={{}}>Mercedes-AMG GT3</p>
</div>
<div className="text-right">
<p className="font-mono tabular-nums text-base tracking-tight">1:33.087</p>
<p className="text-[11px] text-amber-700/90" style={{}}>+0.533s</p>
</div>
</li>
<li className="flex items-center gap-3 p-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-medium bg-neutral-200 text-neutral-800" style={{}}>4</span>
<img alt="Priya Nair" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium leading-5">Priya Nair</p>
<p className="truncate text-xs text-neutral-600" style={{}}>BMW M4 GT3</p>
</div>
<div className="text-right">
<p className="font-mono tabular-nums text-base tracking-tight">1:33.410</p>
<p className="text-[11px] text-amber-700/90" style={{}}>+0.856s</p>
</div>
</li>
<li className="flex items-center gap-3 p-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-medium bg-neutral-200 text-neutral-800" style={{}}>5</span>
<img alt="Danilo Rossi" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium leading-5">Danilo Rossi</p>
<p className="truncate text-xs text-neutral-600" style={{}}>Aston Martin Vantage GT3</p>
</div>
<div className="text-right">
<p className="font-mono tabular-nums text-base tracking-tight">1:33.551</p>
<p className="text-[11px] text-amber-700/90" style={{}}>+0.997s</p>
</div>
</li>
<li className="flex items-center gap-3 p-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-medium bg-neutral-200 text-neutral-800" style={{}}>6</span>
<img alt="Noah Patel" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium leading-5">Noah Patel</p>
<p className="truncate text-xs text-neutral-600" style={{}}>Lamborghini Huracán GT3</p>
</div>
<div className="text-right">
<p className="font-mono tabular-nums text-base tracking-tight">1:33.663</p>
<p className="text-[11px] text-amber-700/90" style={{}}>+1.109s</p>
</div>
</li>
<li className="flex items-center gap-3 p-3">
<span className="grid h-7 w-7 place-items-center rounded-md text-sm font-medium bg-neutral-200 text-neutral-800" style={{}}>7</span>
<img alt="Hana Suzuki" className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-neutral-200" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium leading-5">Hana Suzuki</p>
<p className="truncate text-xs text-neutral-600" style={{}}>McLaren 720S GT3</p>
</div>
<div className="text-right">
<p className="font-mono tabular-nums text-base tracking-tight">1:33.701</p>
<p className="text-[11px] text-amber-700/90" style={{}}>+1.147s</p>
</div>
</li>
</ol>

<div className="mt-4 rounded-xl border p-3 border-neutral-200 bg-neutral-100/50" style={{}}>
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flag h-5 w-5 text-neutral-700" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
<div>
<p className="text-sm font-medium leading-5">Start a tournament</p>
<p className="text-xs leading-4 text-neutral-600" style={{}}>Create brackets, custom rules, and private leaderboards.</p>
</div>
</div>
<button className="rounded-md border border-purple-500/40 px-2.5 py-1 text-xs font-medium transition-colors bg-purple-400/20 text-purple-800 hover:bg-purple-400/30 hover:border-purple-600/50" style={{}}>
              New
            </button>
</div>
</div>
</section>
</main>

<nav className="fixed inset-x-0 bottom-0 z-50 border-t backdrop-blur pb-[env(safe-area-inset-bottom)] border-neutral-200/80 bg-neutral-50/80" style={{}}>
<div className="mx-auto max-w-md">
<div className="grid grid-cols-5 items-center px-2 py-2">
<a className="group flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[11px] text-neutral-600 hover:text-neutral-900" href="#" style={{}}>
<svg className="lucide lucide-home h-5 w-5 group-hover:text-neutral-100" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path className="" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="">Home</span>
</a>
<a aria-current="page" className="group flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[11px] text-neutral-900" href="#" style={{}}>
<svg className="lucide lucide-trophy h-5 w-5 text-neutral-900" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path className="" d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span>Leaders</span>
</a>
<div className="flex items-center justify-center">
<button aria-label="Post a lap" className="relative -mt-8 inline-flex items-center justify-center rounded-full border border-purple-500/40 p-3 shadow-[0_8px_30px_rgba(168,85,247,0.25)] transition-colors bg-purple-400/20 text-neutral-900 hover:bg-purple-400/30 hover:border-purple-600/60" style={{}}>
<svg className="lucide lucide-plus h-6 w-6 text-purple-800" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<a className="group flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[11px] text-neutral-600 hover:text-neutral-900" href="#" style={{}}>
<svg className="lucide lucide-flag h-5 w-5 group-hover:text-neutral-100" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
<span className="">Tournaments</span>
</a>
<a className="group flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[11px] text-neutral-600 hover:text-neutral-900" href="#" style={{}}>
<svg className="lucide lucide-user h-5 w-5 group-hover:text-neutral-100" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="">Profile</span>
</a>
</div>
</div>
</nav>




    </>
  );
}
