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
      

<div className="border-b border-gray-800/50 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center border border-violet-500/30">
<span className="text-sm font-semibold tracking-tight text-violet-300">P</span>
</div>
<h1 className="text-lg font-semibold tracking-tight">Presence</h1>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-900 flex items-center justify-center text-xs font-medium">A</div>
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-gray-900 -ml-2 flex items-center justify-center text-xs font-medium">J</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
<div className="bg-gradient-to-br from-violet-950/40 to-fuchsia-950/30 border border-violet-500/20 rounded-xl p-4 backdrop-blur-sm">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-5 h-5 text-violet-400" data-lucide="heart"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-sm font-medium text-violet-200">Presence Pulse</h3>
<span className="text-xs text-violet-400/60">2m ago</span>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-2">Alex added an item late tonight with a note: "sorry, forgot again." Taking a moment to remember is caring too. 💜</p>
<button className="text-xs text-violet-300 hover:text-violet-200 font-medium transition-colors">Send a gentle nudge back</button>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
<div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="activity"></i>
<h3 className="text-sm font-medium text-gray-300">Household Rhythm</h3>
</div>
<span className="text-xs text-gray-500">This week</span>
</div>
<div className="grid grid-cols-7 gap-1.5">
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">M</div>
<div className="h-12 bg-blue-500/20 rounded border border-blue-500/30 flex items-end justify-center pb-1">
<span className="text-[9px] text-blue-400 font-medium">3</span>
</div>
</div>
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">T</div>
<div className="h-12 bg-rose-500/20 rounded border border-rose-500/30 flex items-end justify-center pb-1">
<span className="text-[9px] text-rose-400 font-medium">5</span>
</div>
</div>
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">W</div>
<div className="h-12 bg-blue-500/10 rounded border border-blue-500/20 flex items-end justify-center pb-1">
<span className="text-[9px] text-blue-400/60 font-medium">1</span>
</div>
</div>
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">T</div>
<div className="h-12 bg-rose-500/30 rounded border border-rose-500/40 flex items-end justify-center pb-1">
<span className="text-[9px] text-rose-400 font-medium">7</span>
</div>
</div>
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">F</div>
<div className="h-12 bg-blue-500/20 rounded border border-blue-500/30 flex items-end justify-center pb-1">
<span className="text-[9px] text-blue-400 font-medium">4</span>
</div>
</div>
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">S</div>
<div className="h-12 bg-gray-500/10 rounded border border-gray-700/30 flex items-end justify-center pb-1">
<span className="text-[9px] text-gray-500 font-medium">0</span>
</div>
</div>
<div className="text-center">
<div className="text-[10px] text-gray-600 mb-1.5">S</div>
<div className="h-12 bg-rose-500/10 rounded border border-rose-500/20 flex items-end justify-center pb-1">
<span className="text-[9px] text-rose-400/60 font-medium">2</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-800/50">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 border border-blue-500/60"></div>
<span className="text-xs text-gray-400">Alex</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/60"></div>
<span className="text-xs text-gray-400">Jordan</span>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
<div className="mb-6">
<h2 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="list"></i>
                Our List
                <span className="text-gray-600">·</span>
<span className="text-gray-500">8 items</span>
</h2>

<div className="space-y-2">

<div className="group bg-gray-900/60 border border-gray-800/50 rounded-xl p-4 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Chamomile tea</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-medium">A</div>
<span className="text-xs text-gray-500">11:43 PM</span>
</div>
</div>
<div className="bg-violet-950/30 border border-violet-500/20 rounded-lg p-2.5 mb-2">
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" data-lucide="message-circle"></i>
<p className="text-sm text-violet-200 leading-relaxed">"sorry, forgot again — you mentioned you were out last week"</p>
</div>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md text-xs text-amber-300">
<i className="w-3 h-3" data-lucide="moon"></i>
                                    Late night
                                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded-md text-xs text-violet-300">
<i className="w-3 h-3" data-lucide="heart"></i>
                                    Thoughtful
                                </span>
</div>
</div>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800/50 rounded-xl p-4 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Oat milk</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-[10px] font-medium">J</div>
<span className="text-xs text-gray-500">7:15 AM</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded-md text-xs text-orange-300">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
                                    Running low
                                </span>
</div>
</div>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800/50 rounded-xl p-4 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Fresh basil</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-[10px] font-medium">J</div>
<span className="text-xs text-gray-500">Yesterday</span>
</div>
</div>
<div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-2.5 mb-2">
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="message-circle"></i>
<p className="text-sm text-gray-300 leading-relaxed">"for that pasta recipe you wanted to try this weekend 🌿"</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-xs text-emerald-300">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                                    Planning ahead
                                </span>
</div>
</div>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800/50 rounded-xl p-4 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Eggs</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-medium">A</div>
<span className="text-xs text-gray-500">Yesterday</span>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-gray-900/60 border border-red-500/20 rounded-xl p-4 hover:border-red-500/30 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Cat food</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-medium">A</div>
<span className="text-xs text-gray-500">2 days ago</span>
</div>
</div>
<div className="bg-red-950/30 border border-red-500/20 rounded-lg p-2.5 mb-2">
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" data-lucide="message-circle"></i>
<p className="text-sm text-red-200 leading-relaxed">"almost out! Luna's giving me the look"</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded-md text-xs text-red-300">
<i className="w-3 h-3" data-lucide="zap"></i>
                                    Urgent
                                </span>
</div>
</div>
</div>
</div>

<div className="group bg-gray-900/30 border border-gray-800/30 rounded-xl p-4 opacity-60">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md bg-violet-500/20 border-2 border-violet-500/50 transition-colors mt-0.5 flex-shrink-0 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="check"></i>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-400 line-through">Coffee beans</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-[10px] font-medium opacity-60">J</div>
<span className="text-xs text-gray-600">3 days ago</span>
</div>
</div>
<span className="text-xs text-gray-600">✓ Picked up by Alex</span>
</div>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800/50 rounded-xl p-4 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Sourdough bread</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-[10px] font-medium">J</div>
<span className="text-xs text-gray-500">3 days ago</span>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800/50 rounded-xl p-4 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all">
<div className="flex items-start gap-3">
<button className="w-5 h-5 rounded-md border-2 border-gray-700 hover:border-violet-500 transition-colors mt-0.5 flex-shrink-0"></button>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-base font-medium text-gray-100">Spinach</h3>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-medium">A</div>
<span className="text-xs text-gray-500">4 days ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-gray-800/50">
<h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
                Memory Thread
            </h3>
<div className="space-y-3">
<div className="bg-gray-900/40 border border-gray-800/40 rounded-lg p-3">
<p className="text-sm text-gray-400 mb-1.5">Last week, Jordan added chocolate ice cream at 10:47 PM with:</p>
<p className="text-sm text-gray-300 italic">"rough day, need comfort food 🍫"</p>
<p className="text-xs text-gray-500 mt-2">Alex picked it up the next morning ♡</p>
</div>
<div className="bg-gray-900/40 border border-gray-800/40 rounded-lg p-3">
<p className="text-sm text-gray-400 mb-1.5">Two weeks ago, Alex repeatedly added and removed avocados:</p>
<p className="text-sm text-gray-300 italic">"trying to be healthy... maybe next week"</p>
<p className="text-xs text-gray-500 mt-2">Jordan added them back with "we'll start together" ♡</p>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-gray-800/50">
<div className="bg-gray-900/60 border border-gray-800/50 rounded-xl p-4">
<input className="w-full bg-transparent text-base text-gray-100 placeholder-gray-600 outline-none mb-3" placeholder="Add an item..." type="text"/>
<textarea className="w-full bg-gray-800/40 border border-gray-700/40 rounded-lg p-3 text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors resize-none mb-3" placeholder="Add a note or context (optional)..." rows="2"></textarea>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-700 rounded-lg text-xs text-gray-400 hover:text-gray-300 transition-all flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
                            Urgent
                        </button>
<button className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-700 rounded-lg text-xs text-gray-400 hover:text-gray-300 transition-all flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="heart"></i>
                            Special
                        </button>
</div>
<button className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
                        Add
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
