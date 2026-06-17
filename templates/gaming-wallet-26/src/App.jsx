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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 border-b backdrop-blur-md border-gray-200/80 bg-white/80" style={{}}>
<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white" style={{}}>
<svg className="lucide lucide-trophy h-5 w-5 fill-current" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">SWL</span>
</div>

<div className="hidden max-w-md flex-1 md:block">
<div className="relative group">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 group-focus-within:text-blue-600 transition-colors text-gray-400" style={{}}>
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="block w-full rounded-lg border py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all border-gray-200 bg-gray-50" placeholder="Search matches, news, or players..." style={{}} type="text"/>
</div>
</div>

<div className="flex items-center gap-3">

<div className="hidden lg:flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium border-gray-200 bg-gray-50 text-gray-600" style={{}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
                        Michael Lawal just won ₦20,000
                    </div>

<div className="flex items-center gap-2 rounded-lg border px-3 py-1.5 shadow-sm border-gray-200 bg-white" style={{}}>
<span className="text-xs font-medium text-gray-500" style={{}}>Balance</span>
<span className="text-sm font-semibold text-gray-900" style={{}}>₦120,000</span>
<button className="ml-1 rounded-full p-1 transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100" style={{}}>
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<button className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100" style={{}}>
<svg className="lucide lucide-bell h-5 w-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border border-white" style={{}}></span>
</button>
<div className="h-8 w-8 overflow-hidden rounded-full border border-gray-200 bg-gray-100" style={{}}>
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

<div className="hidden lg:col-span-3 lg:block space-y-8">

<div className="rounded-2xl border p-5 shadow-sm border-gray-200 bg-white" style={{}}>
<button className="group relative flex w-full items-center justify-center gap-2 rounded-xl py-3.5 transition-all hover:shadow-lg active:scale-[0.98] bg-gray-900 text-white hover:bg-gray-800" style={{}}>
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium">Play SuperWinLeague</span>
<span className="absolute -top-2 -right-2 flex h-5 items-center rounded-full px-2 text-[10px] font-bold uppercase tracking-wider shadow-sm ring-2 bg-blue-600 text-white ring-white" style={{}}>
                            ₦100 Entry
                        </span>
</button>
<p className="mt-3 text-center text-xs text-gray-500" style={{}}>
                        Select Fan or Footballer mode. <br/>Win daily cash prizes.
                    </p>
</div>

<div>
<div className="mb-4 flex items-center justify-between">
<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500" style={{}}>Upcoming Matches</h3>
<a className="text-xs font-medium text-blue-600 hover:text-blue-700" href="#" style={{}}>View all</a>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between rounded-xl border p-3 shadow-sm transition-colors cursor-pointer border-gray-200 bg-white hover:border-blue-200" style={{}}>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ring-2 bg-gray-100 ring-white" style={{}}>PSG</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ring-2 bg-blue-900 text-white ring-white" style={{}}>CHE</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900" style={{}}>PSG vs Chelsea</span>
<span className="text-xs text-gray-500" style={{}}>Today, 20:00</span>
</div>
</div>
<svg className="lucide lucide-chevron-right h-4 w-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<div className="flex items-center justify-between rounded-xl border p-3 shadow-sm transition-colors cursor-pointer border-gray-200 bg-white hover:border-blue-200" style={{}}>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ring-2 bg-red-600 text-white ring-white" style={{}}>MUN</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ring-2 bg-red-800 text-white ring-white" style={{}}>LIV</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900" style={{}}>Utd vs Liverpool</span>
<span className="text-xs text-gray-500" style={{}}>Tomorrow, 14:00</span>
</div>
</div>
<svg className="lucide lucide-chevron-right h-4 w-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>

<div>
<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500" style={{}}>Top Players</h3>
<div className="rounded-xl border shadow-sm border-gray-200 bg-white" style={{}}>
<div className="flex items-center justify-between border-b p-3 border-gray-100" style={{}}>
<div className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded text-xs font-bold bg-yellow-100 text-yellow-700">1</span>
<span className="text-sm font-medium text-gray-700" style={{}}>Olatomiwa</span>
</div>
<span className="text-sm font-semibold text-gray-900" style={{}}>27 pts</span>
</div>
<div className="flex items-center justify-between border-b p-3 border-gray-100" style={{}}>
<div className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded text-xs font-bold bg-gray-100 text-gray-600" style={{}}>2</span>
<span className="text-sm font-medium text-gray-700" style={{}}>Mayowa</span>
</div>
<span className="text-sm font-semibold text-gray-900" style={{}}>17 pts</span>
</div>
<div className="flex items-center justify-between p-3">
<div className="flex items-center gap-3">
<span className="flex h-5 w-5 items-center justify-center rounded text-xs font-bold bg-orange-100 text-orange-700" style={{}}>3</span>
<span className="text-sm font-medium text-gray-700" style={{}}>Dante</span>
</div>
<span className="text-sm font-semibold text-gray-900" style={{}}>12 pts</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-6 space-y-8">

<div className="group relative overflow-hidden rounded-2xl shadow-md bg-gray-900" style={{}}>
<img alt="Match Highlight" className="h-[400px] w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-gray-900 via-gray-900/40" style={{}}></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-2 flex items-center gap-2">
<span className="rounded px-2 py-0.5 text-xs font-semibold bg-blue-600 text-white" style={{}}>Highlights</span>
<span className="text-xs font-medium text-gray-300" style={{}}>Yesterday</span>
</div>
<h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white" style={{}}>
                            Aberdeen battle St Mirren to a dramatic level finish
                        </h2>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors bg-white text-gray-900 hover:bg-gray-100" style={{}}>
<svg className="lucide lucide-play h-4 w-4 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                            Watch Highlights
                        </button>
</div>

<div className="absolute bottom-8 right-8 flex gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-white" style={{}}></div>
<div className="h-1.5 w-1.5 rounded-full bg-white/40" style={{}}></div>
<div className="h-1.5 w-1.5 rounded-full bg-white/40" style={{}}></div>
</div>
</div>

<div className="flex items-center gap-1 border-b border-gray-200" style={{}}>
<button className="border-b-2 px-4 py-2 text-sm font-medium border-blue-600 text-blue-600" style={{}}>For You</button>
<button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" style={{}}>Trending</button>
<button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" style={{}}>Latest</button>
<button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700" style={{}}>Matchday</button>
</div>

<div className="grid gap-6 sm:grid-cols-2">

<article className="flex flex-col gap-3 group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-100" style={{}}>
<img alt="News" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-black/10"></div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-blue-600" style={{}}>Trending</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-blue-600 transition-colors text-gray-900" style={{}}>Top 10 goals of the week across Europe</h3>
<p className="text-sm text-gray-500 line-clamp-2" style={{}}>An incredible bicycle kick and a halfway line screamer top the charts this week.</p>
</div>
</article>

<article className="flex flex-col gap-3 group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-100" style={{}}>
<img alt="News" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-black/10"></div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-purple-600">Transfer News</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-purple-600 transition-colors text-gray-900" style={{}}>Germany's 'Toni Kroos' on wishlist of top clubs</h3>
<p className="text-sm text-gray-500 line-clamp-2" style={{}}>Kennet Eichhorn is attracting attention from Real Madrid and Manchester City.</p>
</div>
</article>

<article className="flex flex-col gap-3 group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-100" style={{}}>
<img alt="News" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-black/10"></div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-green-600" style={{}}>Analysis</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-green-600 transition-colors text-gray-900" style={{}}>Tactical breakdown: How City won the derby</h3>
<p className="text-sm text-gray-500 line-clamp-2" style={{}}>Pep's midfield overload proved too much for the opposition to handle.</p>
</div>
</article>

<article className="flex flex-col gap-3 group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-100" style={{}}>
<img alt="News" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-xl ring-black/10"></div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-orange-600" style={{}}>Interview</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-orange-600 transition-colors text-gray-900" style={{}}>Exclusive: The rise of African football talents</h3>
<p className="text-sm text-gray-500 line-clamp-2" style={{}}>We sit down with legends to discuss the future of the game on the continent.</p>
</div>
</article>
</div>
</div>

<div className="hidden lg:col-span-3 lg:block space-y-8">

<div className="rounded-2xl border p-6 shadow-sm border-gray-200 bg-white" style={{}}>
<h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400" style={{}}>Overview</h3>
<div className="flex items-start gap-4">
<div className="relative">
<img alt="Profile" className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full shadow-sm ring-1 bg-white ring-gray-100" style={{}} title="Nigeria">
<span className="text-xs">🇳🇬</span>
</span>
</div>
<div className="">
<h2 className="text-lg font-semibold text-gray-900" style={{}}>Cerebro Jordan</h2>
<p className="text-sm text-gray-500" style={{}}>Footballer Mode</p>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-50" style={{}}>
<span className="text-xs font-medium text-gray-500" style={{}}>Domestic Team</span>
<div className="flex items-center gap-1.5">
<div className="h-4 w-4 rounded-full bg-blue-500" style={{}}></div>
<span className="text-xs font-semibold text-gray-700" style={{}}>Shooting Stars</span>
</div>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-50" style={{}}>
<span className="text-xs font-medium text-gray-500" style={{}}>Intl. Team</span>
<div className="flex items-center gap-1.5">
<div className="h-4 w-4 rounded-full bg-blue-800" style={{}}></div>
<span className="text-xs font-semibold text-gray-700" style={{}}>Chelsea</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 shadow-sm border-gray-200 bg-white" style={{}}>
<div className="mb-1 flex items-center justify-between">
<h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400" style={{}}>Wallet</h3>
<svg className="lucide lucide-credit-card h-4 w-4 text-gray-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="mb-6">
<span className="text-3xl font-semibold tracking-tight text-gray-900" style={{}}>₦120,000</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700" style={{}}>
                            Top Up
                        </button>
<button className="flex items-center justify-center gap-2 rounded-lg border py-2 text-sm font-medium transition-colors border-gray-200 bg-white text-gray-700 hover:bg-gray-50" style={{}}>
                            Withdraw
                        </button>
</div>
</div>

<div className="rounded-2xl border p-6 shadow-sm border-gray-200 bg-white" style={{}}>
<h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-400" style={{}}>Activity</h3>
<div className="flex justify-between">
<div className="flex flex-col items-center gap-2">
<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-100 bg-blue-50 text-blue-600" style={{}}>
<span className="text-sm font-bold">44</span>
</div>
<span className="text-xs font-medium text-gray-500" style={{}}>Wins</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-purple-100 bg-purple-50 text-purple-600" style={{}}>
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs font-medium text-gray-500" style={{}}>Participation</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-100 bg-green-50 text-green-600" style={{}}>
<span className="text-sm font-bold">3</span>
</div>
<span className="text-xs font-medium text-gray-500" style={{}}>Streak</span>
</div>
</div>
<div className="mt-6">
<div className="mb-2 flex justify-between text-xs">
<span className="text-gray-500" style={{}}>Level 4</span>
<span className="font-medium text-gray-900" style={{}}>500/1000 XP</span>
</div>
<div className="h-2 w-full overflow-hidden rounded-full bg-gray-100" style={{}}>
<div className="h-full w-1/2 rounded-full bg-blue-600" style={{}}></div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 z-50 border-t px-6 pb-6 pt-3 lg:hidden border-gray-200 bg-white" style={{}}>
<div className="flex justify-between items-end">
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600" style={{}}>
<svg className="lucide lucide-home h-6 w-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium">Feed</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600" style={{}}>
<svg className="lucide lucide-trophy h-6 w-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-[10px] font-medium">Wins</span>
</button>

<button className="flex h-14 w-14 -translate-y-4 items-center justify-center rounded-full shadow-lg bg-blue-600 text-white shadow-blue-600/30" style={{}}>
<svg className="lucide lucide-play h-6 w-6 ml-0.5 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600" style={{}}>
<svg className="lucide lucide-wallet h-6 w-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="text-[10px] font-medium">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600" style={{}}>
<svg className="lucide lucide-user h-6 w-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</div>


    </>
  );
}
