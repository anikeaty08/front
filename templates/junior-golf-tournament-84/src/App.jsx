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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 h-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold tracking-tighter text-sm">
                    WJ
                </div>
<span className="text-lg font-semibold tracking-tight text-slate-900">WJGT</span>
</div>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
<a className="text-slate-900 hover:text-blue-600 transition-colors" href="#">Home</a>
<a className="hover:text-blue-600 transition-colors" href="#">Tournaments</a>
<a className="hover:text-blue-600 transition-colors" href="#" title="World Golf Ranking">WGR</a>
<a className="hover:text-blue-600 transition-colors" href="#">Rankings</a>
<a className="hover:text-blue-600 transition-colors" href="#">Pathway</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Login</a>
<a className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm ring-1 ring-blue-700/50" href="#">
                    Join
                </a>

<button className="md:hidden text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">

<section className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="space-y-6 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    2024 Season Registration Open
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Competitive golf simulation for juniors.
                </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    The official platform to compete in global simulator tournaments, earn recognized WGR points, and progress through competitive divisions.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900" href="#">
<span className="iconify" data-icon="lucide:trophy" data-width="18"></span>
                        Browse Tournaments
                    </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all shadow-sm" href="#">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="18"></span>
                        View Rankings
                    </a>
</div>
</div>


<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-slate-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
<div className="relative bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">

<div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="flex-1 text-center text-[10px] text-slate-400 font-mono">dashboard.wjgt.com/tournaments/live</div>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Current Season Standings</h3>
<p className="text-xs text-slate-500">Division A • Week 12</p>
</div>
<span className="inline-flex items-center gap-1 text-[10px] font-medium bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-md">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live
                            </span>
</div>
<div className="space-y-3">

<div className="grid grid-cols-12 gap-2 text-xs font-medium text-slate-500 border-b border-slate-100 pb-2">
<div className="col-span-1">#</div>
<div className="col-span-5">Player</div>
<div className="col-span-3 text-right">Score</div>
<div className="col-span-3 text-right">WGR Pts</div>
</div>

<div className="grid grid-cols-12 gap-2 items-center text-sm py-1">
<div className="col-span-1 font-medium text-slate-900">1</div>
<div className="col-span-5 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-700 font-bold">JD</div>
<span className="text-slate-700 truncate">J. Doe</span>
</div>
<div className="col-span-3 text-right font-mono text-slate-900">-4</div>
<div className="col-span-3 text-right text-slate-600">500</div>
</div>
<div className="grid grid-cols-12 gap-2 items-center text-sm py-1 bg-slate-50/50 -mx-2 px-2 rounded">
<div className="col-span-1 font-medium text-slate-900">2</div>
<div className="col-span-5 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-600 font-bold">AS</div>
<span className="text-slate-700 truncate">A. Smith</span>
</div>
<div className="col-span-3 text-right font-mono text-slate-900">-2</div>
<div className="col-span-3 text-right text-slate-600">350</div>
</div>
<div className="grid grid-cols-12 gap-2 items-center text-sm py-1">
<div className="col-span-1 font-medium text-slate-900">3</div>
<div className="col-span-5 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-600 font-bold">MK</div>
<span className="text-slate-700 truncate">M. Kim</span>
</div>
<div className="col-span-3 text-right font-mono text-slate-900">E</div>
<div className="col-span-3 text-right text-slate-600">225</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
<div className="text-xs text-slate-400">Updated 2 mins ago</div>
<div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<hr className="border-slate-200/60"/>

<section className="max-w-3xl">
<h2 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">About the Platform</h2>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">What is WJGT?</h3>
<p className="text-slate-600 leading-relaxed text-base">
                The World Junior Golf Tournament (WJGT) is a centralized data and competition platform for junior simulator golf. We bridge the gap between virtual play and real-world progression. Juniors enroll in seasons, compete in verified simulator tournaments, and establish a legitimate World Golf Ranking (WGR) based on performance data—all tracked directly within this dashboard.
            </p>
</section>

<section>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-slate-900" data-icon="lucide:swords" data-width="80"></span>
</div>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 border border-blue-100">
<span className="iconify" data-icon="lucide:swords" data-width="20"></span>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">1. Compete</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        Join seasonal tours and participate in scheduled simulator events. Scores are verified and synced to your player profile instantly.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-slate-900" data-icon="lucide:target" data-width="80"></span>
</div>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 border border-blue-100">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">2. Earn Rankings (WGR)</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        Every tournament counts. Performance algorithms calculate your global ranking, allowing you to benchmark against peers worldwide.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-slate-900" data-icon="lucide:trending-up" data-width="80"></span>
</div>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 border border-blue-100">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">3. Progress by Division</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        Success moves you up. Advance through skill-based divisions as your handicap improves and your tournament portfolio grows.
                    </p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Upcoming Events</h3>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                    View full schedule <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 mb-1">Division A</span>
<h4 className="font-semibold text-slate-900">Winter Invitational</h4>
<p className="text-xs text-slate-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:calendar" data-width="12"></span> Dec 12 - Dec 15
                            </p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:flag" data-width="14"></span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Open for Enrollment</span>
<span className="text-xs text-slate-400">Entry: $25</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 mb-1">Open Division</span>
<h4 className="font-semibold text-slate-900">Global Junior Open</h4>
<p className="text-xs text-slate-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:calendar" data-width="12"></span> Jan 05 - Jan 10
                            </p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:flag" data-width="14"></span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Coming Soon</span>
<span className="text-xs text-slate-400">Entry: $30</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 mb-1">Division B</span>
<h4 className="font-semibold text-slate-900">Regional Qualifier</h4>
<p className="text-xs text-slate-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:calendar" data-width="12"></span> Jan 15 - Jan 18
                            </p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:flag" data-width="14"></span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Coming Soon</span>
<span className="text-xs text-slate-400">Entry: $20</span>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="space-y-4 max-w-xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Season Membership</h2>
<p className="text-slate-300 text-sm leading-relaxed">
                        Membership is required to participate in WJGT events, track official WGR stats, and maintain a player profile. Enrolling grants access to the full competitive calendar for the current season.
                    </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="16"></span>
                            Access to all divisional tournaments
                        </li>
<li className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="16"></span>
                            Official World Golf Ranking (WGR) tracking
                        </li>
</ul>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 min-w-[280px] text-center">
<div className="text-sm font-medium text-slate-300 mb-1">Annual Access</div>
<div className="text-4xl font-bold text-white mb-6">$50 <span className="text-base font-normal text-slate-400">/ season</span></div>
<a className="block w-full py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" href="#">
                        Join WJGT
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">WJ</div>
<span className="text-sm font-semibold text-slate-900">WJGT</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Tournaments</a>
<a className="hover:text-slate-900" href="#">Rankings</a>
<a className="hover:text-slate-900" href="#">Rules</a>
<a className="hover:text-slate-900" href="#">Support</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 World Junior Golf Tournament. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
