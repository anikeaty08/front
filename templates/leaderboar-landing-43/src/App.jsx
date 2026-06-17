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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="w-full max-w-2xl mx-auto pt-8 pb-4 px-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-medium tracking-tighter text-sm rotate-3">
                LB
            </div>
<span className="font-semibold tracking-tight text-lg text-stone-900">Leaderboard</span>
</div>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Log in
        </button>
</nav>

<main className="flex-grow w-full max-w-2xl mx-auto px-4 sm:px-6 pb-12 flex flex-col">

<div className="text-center py-10 space-y-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium mb-2 border border-purple-200">
<i className="w-3 h-3" data-lucide="sparkles"></i>
<span>Weekly Refresh</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">
                Top Wigglers
            </h1>
<p className="text-stone-500 text-lg font-light max-w-md mx-auto">
                The friendliest competition on the internet. <br className="hidden sm:block"/>Keep wiggling to reach the top!
            </p>
</div>

<div className="bg-white rounded-[2rem] shadow-xl shadow-stone-200/60 border border-stone-100 overflow-hidden">

<div className="flex items-center justify-between p-2 border-b border-stone-100">
<div className="flex bg-stone-50 rounded-xl p-1 gap-1">
<button className="px-4 py-1.5 bg-white rounded-lg shadow-sm text-stone-900 text-sm font-medium border border-stone-200">This Week</button>
<button className="px-4 py-1.5 text-stone-500 hover:text-stone-700 text-sm font-medium transition-colors">All Time</button>
</div>
<div className="px-4 hidden sm:flex items-center gap-2 text-stone-400 text-xs font-medium uppercase tracking-wider">
<span>Rank</span>
<span>Player</span>
<span className="ml-auto">Score</span>
</div>
</div>

<div className="flex flex-col p-3 gap-2">

<div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-yellow-50/50 border border-transparent hover:border-yellow-100 transition-all duration-200 hover-bounce cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-full font-semibold text-lg border-2 border-white shadow-sm">
                        1
                    </div>
<div className="flex-shrink-0 relative">
<img alt="Avatar" className="w-12 h-12 rounded-full bg-stone-100 border border-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=ffdfbf"/>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-stone-100">
<div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[10px]">👑</div>
</div>
</div>
<div className="flex flex-col">
<span className="text-stone-900 font-semibold text-base flex items-center gap-1">
                            Felix The Cat
                            <i className="w-4 h-4 text-blue-400 fill-blue-50" data-lucide="badge-check"></i>
</span>
<span className="text-stone-400 text-sm font-normal">@felix_wiggles</span>
</div>
<div className="ml-auto flex flex-col items-end">
<span className="text-stone-900 font-semibold text-lg tracking-tight">24,892</span>
<span className="text-green-600 text-xs font-medium flex items-center gap-0.5 bg-green-50 px-1.5 rounded-md">
<i className="w-3 h-3" data-lucide="trending-up"></i> 12%
                        </span>
</div>
</div>

<div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all duration-200 hover-bounce cursor-pointer">
<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-stone-100 text-stone-600 rounded-full font-semibold text-lg border-2 border-white shadow-sm">
                        2
                    </div>
<div className="flex-shrink-0">
<img alt="Avatar" className="w-12 h-12 rounded-full bg-stone-100 border border-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Sasha&amp;backgroundColor=c0aede"/>
</div>
<div className="flex flex-col">
<span className="text-stone-900 font-semibold text-base">Sasha Fierce</span>
<span className="text-stone-400 text-sm font-normal">@sasha_f</span>
</div>
<div className="ml-auto flex flex-col items-end">
<span className="text-stone-900 font-semibold text-lg tracking-tight">21,405</span>
<span className="text-stone-400 text-xs font-medium flex items-center gap-0.5">
<i className="w-3 h-3" data-lucide="minus"></i> 0%
                        </span>
</div>
</div>

<div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-orange-50/50 border border-transparent hover:border-orange-100 transition-all duration-200 hover-bounce cursor-pointer">
<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-800 rounded-full font-semibold text-lg border-2 border-white shadow-sm">
                        3
                    </div>
<div className="flex-shrink-0">
<img alt="Avatar" className="w-12 h-12 rounded-full bg-stone-100 border border-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Milo&amp;backgroundColor=b6e3f4"/>
</div>
<div className="flex flex-col">
<span className="text-stone-900 font-semibold text-base">Milo Maker</span>
<span className="text-stone-400 text-sm font-normal">@milo_builds</span>
</div>
<div className="ml-auto flex flex-col items-end">
<span className="text-stone-900 font-semibold text-lg tracking-tight">18,900</span>
<span className="text-green-600 text-xs font-medium flex items-center gap-0.5 bg-green-50 px-1.5 rounded-md">
<i className="w-3 h-3" data-lucide="trending-up"></i> 4%
                        </span>
</div>
</div>

<div className="h-px bg-stone-100 mx-4 my-1"></div>

<div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all duration-200 cursor-pointer">
<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-stone-400 font-medium text-base">
                        4
                    </div>
<div className="flex-shrink-0">
<img alt="Avatar" className="w-12 h-12 rounded-full bg-stone-100 border border-stone-100 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://api.dicebear.com/7.x/notionists/svg?seed=Zoe&amp;backgroundColor=ffdfbf"/>
</div>
<div className="flex flex-col">
<span className="text-stone-900 font-medium text-base">Zoe Zebra</span>
<span className="text-stone-400 text-sm font-normal">@zoe_stripes</span>
</div>
<div className="ml-auto flex flex-col items-end">
<span className="text-stone-900 font-medium text-lg tracking-tight">14,220</span>
<span className="text-red-500 text-xs font-medium flex items-center gap-0.5 bg-red-50 px-1.5 rounded-md">
<i className="w-3 h-3" data-lucide="trending-down"></i> 2%
                        </span>
</div>
</div>

<div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all duration-200 cursor-pointer">
<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-stone-400 font-medium text-base">
                        5
                    </div>
<div className="flex-shrink-0">
<img alt="Avatar" className="w-12 h-12 rounded-full bg-stone-100 border border-stone-100 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://api.dicebear.com/7.x/notionists/svg?seed=Leo&amp;backgroundColor=c0aede"/>
</div>
<div className="flex flex-col">
<span className="text-stone-900 font-medium text-base">Leo Lion</span>
<span className="text-stone-400 text-sm font-normal">@leo_roar</span>
</div>
<div className="ml-auto flex flex-col items-end">
<span className="text-stone-900 font-medium text-lg tracking-tight">12,150</span>
<span className="text-green-600 text-xs font-medium flex items-center gap-0.5 bg-green-50 px-1.5 rounded-md">
<i className="w-3 h-3" data-lucide="trending-up"></i> 8%
                        </span>
</div>
</div>

<div className="mt-2 p-1">
<div className="bg-stone-900 text-white rounded-xl p-4 flex items-center justify-between shadow-lg shadow-stone-300/50 transform transition-transform hover:scale-[1.01] cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-700 text-sm font-semibold">
                                42
                            </div>
<div className="flex flex-col">
<span className="font-medium text-sm text-stone-200">You</span>
<span className="font-semibold text-base">Guest User</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="font-mono font-medium text-lg">2,340</span>
<i className="w-5 h-5 text-stone-500" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 p-4 text-center border-t border-stone-100">
<button className="text-sm text-stone-500 font-medium hover:text-stone-800 flex items-center justify-center gap-2 w-full transition-colors">
                    View full leaderboard
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>

<footer className="py-8 text-center text-stone-400 text-sm font-normal">
<p className="flex items-center justify-center gap-2">
            Made with <i className="w-3 h-3 fill-stone-400" data-lucide="heart"></i> for wigglers everywhere.
        </p>
</footer>


    </>
  );
}
