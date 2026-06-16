import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex w-64 flex-col border-r border-zinc-800/60 bg-zinc-950/50 h-full shrink-0">
<div className="px-6 py-8">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white">
<iconify-icon className="text-emerald-500" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                AEROSPORT
            </div>
</div>
<nav className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide flex flex-col gap-8">

<div className="flex flex-col gap-1">
<div className="px-3 pb-2 text-xs font-medium text-zinc-500 uppercase tracking-widest">Menu</div>
<a className="group flex items-center gap-3 rounded-lg bg-zinc-800/50 px-3 py-2 text-sm font-medium text-white transition-colors" href="#">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Home
                </a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:tv-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Live Matches
                    </div>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Upcoming
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Movies
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Series
                </a>
</div>

<div className="flex flex-col gap-1">
<div className="px-3 pb-2 text-xs font-medium text-zinc-500 uppercase tracking-widest">Library</div>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    History
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Favourites
                </a>
</div>

<div className="flex flex-col gap-1 mt-auto">
<div className="px-3 pb-2 text-xs font-medium text-zinc-500 uppercase tracking-widest">Download App</div>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Android APK
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:smart-tv-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Android TV APK
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 hover:bg-zinc-800/30 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:apple-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Apple iOS / TV
                </a>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-950 relative">

<header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md z-10 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-lg font-semibold tracking-tight md:hidden">AEROSPORT</h1>
<div className="hidden md:flex relative items-center">
<iconify-icon className="absolute left-3 text-zinc-500" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="bg-zinc-900 border border-zinc-800 rounded-full py-1.5 pl-9 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64 transition-all" placeholder="Search matches, leagues..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log In</button>
<button className="bg-emerald-500 text-zinc-950 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    Go Premium ($10/mo)
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
<div className="max-w-6xl mx-auto flex flex-col gap-10">

<section>
<div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800/60 shadow-2xl group">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-zinc-900 to-black"></div>

<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
<div className="flex gap-2 items-center">
<span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                                </span>
<span className="text-xs font-medium text-zinc-200 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">UEFA Champions League</span>
</div>
<button className="text-white bg-black/40 backdrop-blur-sm p-1.5 rounded-full hover:bg-black/60 transition-colors">
<iconify-icon icon="solar:maximize-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>

<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-500/90 text-zinc-950 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2">
<div className="flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1 shadow-black drop-shadow-md">Real Madrid vs. Man City</h2>
<p className="text-sm text-zinc-300">Semi-Finals • Leg 2</p>
</div>
</div>

<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-2 text-white">
<button className="hover:text-emerald-400 transition-colors"><iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></button>
<button className="hover:text-emerald-400 transition-colors"><iconify-icon icon="solar:rewind-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></button>
<button className="hover:text-emerald-400 transition-colors"><iconify-icon icon="solar:forward-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></button>
</div>
<div className="flex-1 h-1 bg-zinc-600 rounded-full overflow-hidden relative cursor-pointer">
<div className="absolute top-0 left-0 h-full bg-emerald-500 w-2/3"></div>
</div>
<span className="text-xs text-zinc-400 font-medium">67:42</span>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-sm font-semibold text-zinc-200 tracking-tight uppercase mb-4 flex items-center gap-2">
                        Premium Broadcasters
                    </h3>
<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">

<div className="w-32 h-20 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center snap-start hover:border-zinc-700 transition-colors cursor-pointer">
<span className="font-semibold text-zinc-400 tracking-tight">SkySports</span>
</div>
<div className="w-32 h-20 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center snap-start hover:border-zinc-700 transition-colors cursor-pointer">
<span className="font-semibold text-zinc-400 tracking-tight">BeIN</span>
</div>
<div className="w-32 h-20 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center snap-start hover:border-zinc-700 transition-colors cursor-pointer">
<span className="font-semibold text-zinc-400 tracking-tight">ESPN+</span>
</div>
<div className="w-32 h-20 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center snap-start hover:border-zinc-700 transition-colors cursor-pointer">
<span className="font-semibold text-zinc-400 tracking-tight">SuperSport</span>
</div>
<div className="w-32 h-20 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center snap-start hover:border-zinc-700 transition-colors cursor-pointer">
<span className="font-semibold text-zinc-400 tracking-tight">Sportsfire</span>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Join AeroSport Today</h3>
<p className="text-sm text-zinc-400 mb-6">Create an account to track history, save favorites, and access the Premium Sports Channel Suite.</p>
<form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
<input className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Username" type="text"/>
<input className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Email Address" type="email"/>
<button className="bg-white text-zinc-950 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors shrink-0">Sign Up Free</button>
</form>
</div>
<div className="w-full md:w-64 bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-5 text-center shrink-0">
<span className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-1 block">Premium Tier</span>
<div className="text-2xl font-semibold text-white mb-3 tracking-tight">$10<span className="text-sm text-zinc-500 font-medium">/month</span></div>
<button className="w-full bg-emerald-500 text-zinc-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors">Subscribe Now</button>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white tracking-tight">Major Global Leagues</h3>
<button className="text-xs font-medium text-emerald-500 hover:text-emerald-400">View All</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">August – May</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">English Premier League</h4>
<div className="text-xs text-zinc-400 mb-4">Football</div>
<p className="text-xs text-zinc-500 line-clamp-2">High global viewership; intense parity across top tier teams.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">September – January</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">NFL</h4>
<div className="text-xs text-zinc-400 mb-4">American Football</div>
<p className="text-xs text-zinc-500 line-clamp-2">Short season; single-elimination intensity and high stakes.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">October – June</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">NBA</h4>
<div className="text-xs text-zinc-400 mb-4">Basketball</div>
<p className="text-xs text-zinc-500 line-clamp-2">Fast-paced; high scoring; star-driven entertainment.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">August – May</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">La Liga</h4>
<div className="text-xs text-zinc-400 mb-4">Football</div>
<p className="text-xs text-zinc-500 line-clamp-2">Technical brilliance; tactical depth and historic rivalries.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">March – December</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">Formula 1</h4>
<div className="text-xs text-zinc-400 mb-4">Motorsport</div>
<p className="text-xs text-zinc-500 line-clamp-2">Global circuit; manufacturer-focused elite engineering.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">March – October</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">MLB</h4>
<div className="text-xs text-zinc-400 mb-4">Baseball</div>
<p className="text-xs text-zinc-500 line-clamp-2">162-game grind; highly strategic and stats-driven.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">March – May</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">IPL</h4>
<div className="text-xs text-zinc-400 mb-4">Cricket</div>
<p className="text-xs text-zinc-500 line-clamp-2">T20 format; high entertainment value and fast scoring.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors cursor-pointer group">
<div className="text-xs text-zinc-500 mb-2">October – June</div>
<h4 className="font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">NHL</h4>
<div className="text-xs text-zinc-400 mb-4">Ice Hockey</div>
<p className="text-xs text-zinc-500 line-clamp-2">High endurance physicality and incredible pace.</p>
</div>
</div>
</section>

<section className="pb-12">
<h3 className="text-lg font-semibold text-white tracking-tight mb-4">Elite Global Tournaments</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
<div className="w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-200 tracking-tight">FIFA World Cup</h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 mb-2">
<span>Football</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Quadrennial</span>
</div>
<p className="text-xs text-zinc-400">The pinnacle of global athletic achievement.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
<div className="w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-200 tracking-tight">Olympic Games</h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 mb-2">
<span>Multi-sport</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Quadrennial</span>
</div>
<p className="text-xs text-zinc-400">The greatest gathering of global talent.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
<div className="w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:cup-first-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-200 tracking-tight">The Masters</h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 mb-2">
<span>Golf</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Annual</span>
</div>
<p className="text-xs text-zinc-400">The most iconic tournament in the sport.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
<div className="w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:tennis-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-200 tracking-tight">Wimbledon</h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 mb-2">
<span>Tennis</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Annual</span>
</div>
<p className="text-xs text-zinc-400">The most historic tennis championship.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
<div className="w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:flag-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-200 tracking-tight">Rugby World Cup</h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 mb-2">
<span>Rugby</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Quadrennial</span>
</div>
<p className="text-xs text-zinc-400">The ultimate test of international rugby nations.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
<div className="w-10 h-10 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:bicycling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-200 tracking-tight">Tour de France</h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 mb-2">
<span>Cycling</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Annual</span>
</div>
<p className="text-xs text-zinc-400">The most grueling test of human endurance.</p>
</div>
</div>
</div>
</section>
</div>
</div>

<nav className="md:hidden border-t border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md pb-safe flex justify-around items-center p-3 shrink-0 z-10">
<a className="flex flex-col items-center gap-1 text-white" href="#">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors relative" href="#">
<iconify-icon icon="solar:tv-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-[10px] font-medium">Live</span>
<span className="absolute top-0 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-[10px] font-medium">Series</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</a>
</nav>
</main>

    </>
  );
}
