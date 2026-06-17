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
      

<aside className="w-64 fixed inset-y-0 left-0 bg-[#050505] border-r z-50 hidden md:flex flex-col border-orange-800" style={{}}>

<div className="h-16 flex items-center px-6 border-b border-orange-800/50" style={{}}>
<a className="text-lg font-semibold tracking-tighter flex items-center gap-3 text-white" href="#">
<div className="w-8 h-8 bg-[#FFC20E] rounded-lg flex items-center justify-center font-bold text-xs tracking-tighter shadow-[0_0_15px_-3px_rgba(255,194,14,0.4)] text-black">SU</div>
                SUTTON UTD
            </a>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div className="">
<h3 className="px-3 text-[10px] font-semibold uppercase tracking-wider text-orange-500 mb-2" style={{}}>Main</h3>
<div className="space-y-0.5">
<a className="sidebar-link active flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                        Dashboard
                    </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-newspaper w-4 h-4" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
                        News &amp; Media
                    </a>
</div>
</div>

<div className="">
<h3 className="px-3 text-[10px] font-semibold uppercase tracking-wider text-orange-500 mb-2" style={{}}>Matches</h3>
<div className="space-y-0.5">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                        Fixtures &amp; Results
                    </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-trophy w-4 h-4" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                        National League
                    </a>
</div>
</div>

<div>
<h3 className="px-3 text-[10px] font-semibold uppercase tracking-wider text-orange-500 mb-2" style={{}}>Ticketing</h3>
<div className="space-y-0.5">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-ticket w-4 h-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                        Buy Tickets
                    </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                        Season Tickets
                    </a>
</div>
</div>

<div>
<h3 className="px-3 text-[10px] font-semibold uppercase tracking-wider text-orange-500 mb-2" style={{}}>The Squad</h3>
<div className="space-y-0.5">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        First Team
                    </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Women's Team
                    </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-graduation-cap w-4 h-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                        Academy &amp; U18
                    </a>
</div>
</div>

<div>
<h3 className="px-3 text-[10px] font-semibold uppercase tracking-wider text-orange-500 mb-2" style={{}}>Club Info</h3>
<div className="space-y-0.5">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
                        VBS Community Stadium
                    </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all" href="#">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
                        Club Shop
                    </a>
</div>
</div>
</div>

<div className="p-4 border-t border-orange-800" style={{}}>
<button className="flex items-center gap-3 w-full p-2 rounded-lg transition-colors group hover:bg-orange-900" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs border group-hover:border-[#FFC20E]/50 bg-orange-800 text-white border-orange-700" style={{}}>SU</div>
<div className="flex-1 text-left">
<div className="text-sm font-medium text-white">Guest User</div>
<div className="text-[10px] text-orange-500" style={{}}>Supporter</div>
</div>
</button>
</div>
</aside>

<div className="flex-1 md:ml-64 min-h-screen flex flex-col relative">

<nav className="md:hidden h-16 border-b flex items-center justify-between px-4 bg-[#050505] sticky top-0 z-40 border-orange-800" style={{}}>
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-white" href="#">
<div className="w-8 h-8 bg-[#FFC20E] rounded-lg flex items-center justify-center font-bold text-xs tracking-tighter text-black">SU</div>
                SUTTON UTD
            </a>
<button className="text-orange-400" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<header className="h-16 border-b flex items-center justify-between px-8 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-30 hidden md:flex border-orange-800" style={{}}>
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-white">Match Center</h2>
<div className="h-4 w-px bg-orange-800" style={{}}></div>
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent border-none py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-0 w-64 placeholder:text-orange-600 text-white" placeholder="Search team, news, tickets..." style={{}} type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-orange-500 transition-colors relative hover:text-white" style={{}}>
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 bg-[#FFC20E] rounded-full border border-[#050505]"></span>
</button>
</div>
</header>

<main className="flex-1 p-6 md:p-8 max-w-[1600px] w-full mx-auto">

<div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 justify-between">
<div>
<p className="text-[#FFC20E] text-xs font-medium tracking-widest uppercase mb-1">National League • 24/25</p>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Overview</h1>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 border rounded-lg p-1 pr-3 bg-orange-900 border-orange-800" style={{}}>
<span className="text-xs px-2 py-1 rounded bg-orange-800 text-white" style={{}}>Next</span>
<span className="text-xs text-orange-400" style={{}}>Matchday 18</span>
</div>
<button className="text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2 bg-white text-black hover:bg-orange-200" style={{}}>
<svg className="lucide lucide-ticket w-4 h-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                        Tickets
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4">

<div className="col-span-1 md:col-span-4 lg:col-span-6 row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group green-glow">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&amp;w=2565&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
<div className="bg-gradient-to-t to-transparent from-black via-black/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-[#FFC20E]/10 border border-[#FFC20E]/20 text-[#FFC20E] text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFC20E] animate-pulse"></span>
                                UPCOMING FIXTURE
                            </div>
<svg className="lucide lucide-arrow-up-right w-6 h-6 group-hover:text-white transition-colors text-white/50" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="mt-8">
<div className="flex items-center justify-between w-full max-w-md mb-6">
<div className="text-center">
<div className="w-16 h-16 rounded-full border flex items-center justify-center font-bold text-xl tracking-tighter mb-2 bg-orange-800/50 border-white/10 text-white" style={{}}>SU</div>
<span className="font-medium text-sm text-white">Sutton</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-medium text-orange-500 tracking-tight" style={{}}>VS</span>
<span className="text-xs mt-1 uppercase tracking-widest text-orange-400" style={{}}>Sat 15:00</span>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full border flex items-center justify-center font-bold text-xl tracking-tighter mb-2 bg-blue-900/50 border-white/10 text-white">GAT</div>
<span className="font-medium text-sm text-white">Gateshead</span>
</div>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-2 text-white">Vanarama National League</h2>
<p className="text-sm max-w-sm text-orange-400" style={{}}>The U's face a tough test against promotion-chasing Gateshead at the VBS Community Stadium.</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 glass-panel rounded-3xl p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium tracking-tight flex items-center gap-2 text-white">
<svg className="lucide lucide-trophy w-4 h-4 text-[#FFC20E]" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg> Table
                        </h3>
<button className="text-xs text-orange-500 transition-colors hover:text-white" style={{}}>Full Table</button>
</div>
<div className="flex-1 flex flex-col gap-1">

<div className="grid grid-cols-6 text-xs uppercase tracking-wider mb-2 px-2 text-orange-600" style={{}}>
<span className="col-span-1">#</span>
<span className="col-span-3">Club</span>
<span className="col-span-2 text-right">Pts</span>
</div>

<div className="grid grid-cols-6 items-center p-2 rounded-lg transition-colors group cursor-pointer hover:bg-white/5">
<span className="col-span-1 text-sm group-hover:text-white text-orange-400" style={{}}>1</span>
<div className="col-span-3 flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-orange-500" style={{}}></div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>Barnet</span>
</div>
<span className="col-span-2 text-right text-sm group-hover:text-white font-medium text-orange-400" style={{}}>37</span>
</div>

<div className="grid grid-cols-6 items-center p-2 rounded-lg transition-colors group cursor-pointer hover:bg-white/5">
<span className="col-span-1 text-sm group-hover:text-white text-orange-400" style={{}}>2</span>
<div className="col-span-3 flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-amber-700" style={{}}></div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>York City</span>
</div>
<span className="col-span-2 text-right text-sm group-hover:text-white font-medium text-orange-400" style={{}}>35</span>
</div>

<div className="grid grid-cols-6 items-center p-2 rounded-lg transition-colors group cursor-pointer hover:bg-white/5">
<span className="col-span-1 text-sm group-hover:text-white text-orange-400" style={{}}>3</span>
<div className="col-span-3 flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-yellow-500" style={{}}></div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>Forest Green</span>
</div>
<span className="col-span-2 text-right text-sm group-hover:text-white font-medium text-orange-400" style={{}}>32</span>
</div>

<div className="flex justify-center py-1">
<div className="w-1 h-1 rounded-full mx-0.5 bg-orange-800" style={{}}></div>
<div className="w-1 h-1 rounded-full mx-0.5 bg-orange-800" style={{}}></div>
<div className="w-1 h-1 rounded-full mx-0.5 bg-orange-800" style={{}}></div>
</div>

<div className="grid grid-cols-6 items-center p-2 rounded-lg bg-[#FFC20E]/10 border border-[#FFC20E]/20 cursor-pointer">
<span className="col-span-1 text-sm text-[#FFC20E]">14</span>
<div className="col-span-3 flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-[#FFC20E] flex items-center justify-center text-[8px] font-bold text-black">S</div>
<span className="text-sm font-medium text-white">Sutton Utd</span>
</div>
<span className="col-span-2 text-right text-sm text-[#FFC20E] font-medium">21</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 glass-panel rounded-3xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 z-20">
<div className="backdrop-blur-md border rounded-full p-2 bg-black/40 border-white/10">
<svg className="lucide lucide-star w-4 h-4 text-[#FFC20E] fill-[#FFC20E]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent z-10 to-black/90"></div>

<img alt="Player" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 h-full flex flex-col justify-end p-6">
<div className="flex items-end justify-between">
<div>
<span className="text-[#FFC20E] text-xs font-bold tracking-widest uppercase mb-1 block">One to Watch</span>
<h3 className="text-xl font-medium tracking-tight leading-tight text-white">Josh Coley</h3>
</div>
<div className="text-right">
<div className="text-3xl font-medium tracking-tighter text-white">7</div>
<div className="text-orange-500 text-xs uppercase tracking-wide" style={{}}>Goal Contribs</div>
</div>
</div>

<div className="mt-4 flex gap-1 h-1 w-full rounded-full overflow-hidden bg-orange-800" style={{}}>
<div className="h-full bg-[#FFC20E] w-[70%]"></div>
<div className="h-full w-[30%] bg-orange-700" style={{}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-orange-500 font-medium uppercase tracking-wide" style={{}}>
<span className="">Appearances 16</span>
<span>Goals 4</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 glass-panel flex flex-col group transition-colors rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-between hover:border-white/20">
<div className="flex justify-between items-start">
<div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center mb-3 group-hover:bg-[#FFC20E] group-hover:text-black group-hover:border-[#FFC20E] transition-colors bg-orange-800 border-orange-700" style={{}}>
<svg className="lucide lucide-wallet w-5 h-5 transition-colors" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h4 className="font-medium text-white">Tickets</h4>
<p className="text-xs text-orange-500 mt-1" style={{}}>1 Match Ticket</p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="mt-4 pt-4 border-t border-dashed border-orange-800" style={{}}>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="h-8 w-8 p-0.5 rounded flex items-center justify-center bg-white">
<div className="grid grid-cols-3 gap-0.5 w-full h-full">
<div className="col-span-2 row-span-2 bg-black"></div>
<div className="bg-black"></div>
<div className="bg-black"></div>
<div className="col-span-2 bg-black"></div>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Gandermonium Stand</span>
<span className="text-[10px] text-orange-500" style={{}}>Unreserved Seating</span>
</div>
</div>
<span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded border border-yellow-500/20" style={{}}>Active</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 lg:col-span-6 glass-panel rounded-3xl p-6 flex flex-col sm:flex-row gap-6">
<div className="w-full sm:w-1/3 aspect-video sm:aspect-square rounded-2xl overflow-hidden relative bg-orange-800" style={{}}>
<img alt="Sutton United Training" className="hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 left-2 backdrop-blur text-[10px] px-2 py-0.5 rounded border bg-orange-950/80 text-white border-white/10" style={{}}>INTERVIEW</div>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex items-center gap-2 text-xs text-orange-500 mb-2" style={{}}>
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 2 hours ago
                        </div>
<h3 className="text-xl font-medium tracking-tight mb-2 hover:text-[#FFC20E] cursor-pointer transition-colors text-white">Steve Morison: "We need to turn performances into points."</h3>
<p className="text-sm line-clamp-2 mb-4 text-orange-400" style={{}}>The gaffer reflects on the narrow defeat last weekend and looks ahead to a crucial week of fixtures as the U's look to climb the table.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all text-white" href="#">
                            Read Full Story <svg className="lucide lucide-arrow-right w-4 h-4 text-[#FFC20E]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 glass-panel rounded-3xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#FFC20E]/5 to-transparent"></div>
<div className="relative z-10">
<div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg bg-orange-900 border-orange-800 shadow-black" style={{}}>
<svg className="lucide lucide-shirt w-8 h-8 text-[#FFC20E]" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h3 className="font-medium mb-1 text-white">2024/25 Kits</h3>
<p className="text-xs text-orange-500 mb-4" style={{}}>Official O'Neills Range</p>
<button className="transition-colors text-xs font-medium w-full border rounded-lg pt-2 pb-2 hover:bg-orange-700 text-white bg-orange-800 border-orange-700" style={{}}>
                            Shop Now
                        </button>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
<div className="p-2 rounded-lg bg-orange-800 text-orange-400" style={{}}><svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div>
<div>
<div className="text-xs text-orange-500" style={{}}>Current Form</div>
<div className="text-sm font-medium tracking-tight flex gap-1 text-white">
<span className="text-amber-500" style={{}}>L</span>
<span className="text-orange-600" style={{}}>D</span>
<span className="text-yellow-500" style={{}}>W</span>
<span className="text-amber-500" style={{}}>L</span>
<span className="text-orange-600" style={{}}>D</span>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
<div className="p-2 rounded-lg bg-orange-800 text-orange-400" style={{}}><svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<div>
<div className="text-xs text-orange-500" style={{}}>Avg Attendance</div>
<div className="text-sm font-medium tracking-tight text-white">2,541 <span className="text-orange-500 text-[10px] ml-1" style={{}}>(-)</span></div>
</div>
</div>
<div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
<div className="p-2 rounded-lg bg-orange-800 text-orange-400" style={{}}><svg className="lucide lucide-calendar-days w-5 h-5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg></div>
<div>
<div className="text-xs text-orange-500" style={{}}>Next Away</div>
<div className="text-sm font-medium tracking-tight text-white">Wealdstone</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
<div>
<div className="text-xs text-orange-500" style={{}}>Match Audio</div>
<div className="text-sm font-medium tracking-tight text-white">Subscribed</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full border-4 appearance-none cursor-pointer transition-all duration-300 bg-white border-orange-700" id="toggle" name="toggle" style={{}} type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full cursor-pointer border bg-orange-800 border-orange-700" htmlFor="toggle" style={{}}></label>
</div>
</div>
</div>
<footer className="mt-8 text-center text-[10px] pb-4 text-orange-600" style={{}}>
                © 2024 Sutton United Football Club. All rights reserved.
            </footer>
</main>
</div>


    </>
  );
}
