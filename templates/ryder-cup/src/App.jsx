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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
teamRed: '#DC2626', // Custom Red
teamBlue: '#1E3A8A', // Custom Navy
}
}
}
}



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
      

<div className="bg-slate-900 text-white py-3 px-4">
<div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium tracking-wide">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                Pine Valley Creek, Oregon
            </span>
<span className="hidden md:block text-slate-400">September 14-16, 2024</span>
<div className="flex items-center gap-4">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-400" data-lucide="cloud-sun"></i>
                    68°F Partly Cloudy
                </span>
</div>
</div>
</div>

<nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
<i className="w-5 h-5 text-amber-400" data-lucide="trophy"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">THE CUP</span>
</div>

<div className="hidden md:flex items-center gap-6 text-base font-medium text-slate-500">
<a className="text-slate-900" href="#">Live Scoring</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pairings</a>
<a className="hover:text-slate-900 transition-colors" href="#">Course Guide</a>
<a className="hover:text-slate-900 transition-colors" href="#">History</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                    Shop
                </button>
<button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10">
                    Watch Live
                    <i className="w-4 h-4" data-lucide="play-circle"></i>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 md:px-8 py-12">

<section className="mb-16">

<div className="flex justify-between items-end mb-4 px-2">
<div className="flex items-center gap-3">
<img alt="USA" className="w-8 h-6 rounded shadow-sm object-cover" src="https://flagcdn.com/us.svg"/>
<div>
<div className="text-rose-600 font-semibold text-2xl tracking-tight leading-none">14.5</div>
<div className="text-xs uppercase tracking-wider font-medium text-slate-400">To Win</div>
</div>
</div>
<div className="text-center pb-1">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">CURRENT SCORE</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-500">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        28/28 Matches Complete
                    </div>
</div>
<div className="flex items-center gap-3 text-right justify-end">
<div>
<div className="text-blue-900 font-semibold text-2xl tracking-tight leading-none">14.0</div>
<div className="text-xs uppercase tracking-wider font-medium text-slate-400">To Retain</div>
</div>
<img alt="Europe" className="w-8 h-6 rounded shadow-sm object-cover" src="https://flagcdn.com/eu.svg"/>
</div>
</div>

<div className="relative h-20 w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 flex bg-slate-100">


<div className="flex-1 flex" style={{flex: '13 1 0%'}}>
<div className="w-full h-full bg-rose-600 flex items-center pl-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] opacity-20"></div>

<div className="absolute inset-0 flex divide-x divide-rose-700/30">

<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
<div className="flex-1"></div>
</div>
<span className="relative z-10 text-white text-5xl font-semibold tracking-tighter drop-shadow-md">13</span>
</div>
</div>


<div className="flex-1 flex" style={{flex: '15 1 0%'}}>
<div className="w-full h-full bg-blue-900 flex items-center justify-end pr-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] opacity-20"></div>
<div className="absolute inset-0 flex divide-x divide-blue-800/30">
<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
<div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
</div>
<span className="relative z-10 text-white text-5xl font-semibold tracking-tighter drop-shadow-md">15</span>
<i className="relative z-10 ml-4 w-8 h-8 text-amber-400 drop-shadow-md" data-lucide="trophy"></i>
</div>
</div>
</div>

<div className="mt-8 border-b border-slate-200">
<div className="flex justify-center space-x-1 md:space-x-8 overflow-x-auto pb-px">
<button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Friday Foursomes</button>
<button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Friday Four-ball</button>
<button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Saturday Foursomes</button>
<button className="px-4 py-3 text-sm font-medium text-slate-900 border-b-2 border-slate-900 whitespace-nowrap">Sunday Singles</button>
</div>
</div>
</section>

<section className="mb-12">
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Featured Match
            </h3>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">

<div className="bg-slate-50 border-b border-slate-100 px-6 py-2 flex justify-between items-center text-sm">
<span className="font-medium text-slate-900">Match 1 - Final</span>
<span className="text-slate-500">Match Complete</span>
</div>
<div className="p-0 md:p-8 flex flex-col md:flex-row items-center justify-between relative">

<div className="flex-1 w-full flex items-center justify-start gap-6 p-6 md:p-0 relative overflow-hidden md:overflow-visible">

<div className="md:hidden absolute left-0 top-0 bottom-0 w-2 bg-rose-600"></div>
<div className="relative">
<div className="w-24 h-24 rounded-full p-1 ring-2 ring-rose-100 bg-white shadow-lg z-10 relative">
<img alt="Cameron Young" className="w-full h-full rounded-full object-cover" src="https://ui-avatars.com/api/?name=Cameron+Young&amp;background=random&amp;size=128"/>
<img className="absolute bottom-0 right-0 w-8 h-6 rounded border border-white shadow-sm" src="https://flagcdn.com/us.svg"/>
</div>
</div>
<div className="text-left">
<h4 className="text-2xl md:text-3xl font-light text-slate-600">Cameron <span className="font-semibold text-slate-900 block md:inline">Young</span></h4>
<div className="mt-2 flex gap-1">
<span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center font-medium">W</span>
<span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-medium">L</span>
<span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-medium">T</span>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center px-8 py-6 md:py-0 w-full md:w-auto bg-slate-50 md:bg-transparent border-y md:border-none border-slate-100">
<div className="text-center">
<div className="text-5xl font-semibold tracking-tighter text-rose-600 mb-2">1 UP</div>
<button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
<i className="w-4 h-4" data-lucide="video"></i>
                                Recap
                            </button>
</div>
</div>

<div className="flex-1 w-full flex items-center justify-end gap-6 p-6 md:p-0 flex-row-reverse text-right relative overflow-hidden md:overflow-visible">

<div className="md:hidden absolute right-0 top-0 bottom-0 w-2 bg-blue-900"></div>
<div className="relative">
<div className="w-24 h-24 rounded-full p-1 ring-2 ring-blue-100 bg-white shadow-lg z-10 relative">
<img alt="Justin Rose" className="w-full h-full rounded-full object-cover" src="https://ui-avatars.com/api/?name=Justin+Rose&amp;background=0B1E3D&amp;color=fff&amp;size=128"/>
<img className="absolute bottom-0 left-0 w-8 h-6 rounded border border-white shadow-sm" src="https://flagcdn.com/eu.svg"/>
</div>
</div>
<div className="text-right">
<h4 className="text-2xl md:text-3xl font-light text-slate-600">Justin <span className="font-semibold text-slate-900 block md:inline">Rose</span></h4>
<div className="mt-2 flex gap-1 justify-end">
<span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs flex items-center justify-center font-medium">W</span>
<span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs flex items-center justify-center font-medium">W</span>
<span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-medium">T</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 px-6 py-6 border-t border-slate-200">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Match Momentum</span>
<div className="flex gap-1 text-xs font-medium text-slate-500">
<span>100%</span>
<span className="text-rose-600">USA Win Probability</span>
</div>
</div>

<div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex">
<div className="h-full bg-rose-600 w-full rounded-full"></div>
</div>

<div className="flex justify-between mt-6 text-sm overflow-x-auto">

<div className="flex gap-3 min-w-max mx-auto">

<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-medium">1</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">2</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-medium">3</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">4</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-medium">5</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-medium">6</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-medium">7</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">8</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">9</span></div>

<div className="w-px h-6 bg-slate-300 mx-1"></div>

<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-medium">10</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">11</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-medium">12</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-medium">13</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-medium">14</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">15</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-medium">16</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-medium">17</span></div>
<div className="flex flex-col items-center gap-1"><span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-medium">18</span></div>
</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-xl font-semibold text-slate-900 mb-6">Latest Results</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=S+Scheffler&amp;background=random"/>
<span className="font-medium text-slate-900">Scheffler</span>
</div>
<div className="flex flex-col items-center">
<span className="text-slate-500 text-xs font-medium uppercase mb-1">Final</span>
<div className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded rounded-md">TIED</div>
</div>
<div className="flex items-center gap-3 justify-end">
<span className="font-medium text-slate-900">Rahm</span>
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=J+Rahm&amp;background=0B1E3D&amp;color=fff"/>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=P+Cantlay&amp;background=random"/>
<span className="font-medium text-slate-900">Cantlay</span>
</div>
<div className="flex flex-col items-center">
<span className="text-slate-500 text-xs font-medium uppercase mb-1">Final</span>
<div className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded rounded-md">2 &amp; 1</div>
</div>
<div className="flex items-center gap-3 justify-end">
<span className="font-medium text-slate-400">Fleetwood</span>
<img className="w-10 h-10 rounded-full opacity-60" src="https://ui-avatars.com/api/?name=T+Fleetwood&amp;background=0B1E3D&amp;color=fff"/>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full opacity-60" src="https://ui-avatars.com/api/?name=M+Homa&amp;background=random"/>
<span className="font-medium text-slate-400">Homa</span>
</div>
<div className="flex flex-col items-center">
<span className="text-slate-500 text-xs font-medium uppercase mb-1">Final</span>
<div className="px-3 py-1 bg-blue-50 text-blue-900 text-sm font-semibold rounded rounded-md">1 UP</div>
</div>
<div className="flex items-center gap-3 justify-end">
<span className="font-medium text-slate-900">McIlroy</span>
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=R+McIlroy&amp;background=0B1E3D&amp;color=fff"/>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full opacity-60" src="https://ui-avatars.com/api/?name=J+Thomas&amp;background=random"/>
<span className="font-medium text-slate-400">Thomas</span>
</div>
<div className="flex flex-col items-center">
<span className="text-slate-500 text-xs font-medium uppercase mb-1">Final</span>
<div className="px-3 py-1 bg-blue-50 text-blue-900 text-sm font-semibold rounded rounded-md">4 &amp; 3</div>
</div>
<div className="flex items-center gap-3 justify-end">
<span className="font-medium text-slate-900">Hovland</span>
<img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=V+Hovland&amp;background=0B1E3D&amp;color=fff"/>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 mt-12 py-8">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex justify-center gap-6 mb-4">
<i className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" data-lucide="twitter"></i>
<i className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" data-lucide="instagram"></i>
<i className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" data-lucide="facebook"></i>
</div>
<p className="text-slate-400 text-sm">© 2024 The Local Cup Tournament. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
