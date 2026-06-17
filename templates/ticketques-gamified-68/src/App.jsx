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
      

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden pb-safe">
<div className="flex justify-around items-center p-3">
<a className="flex flex-col items-center gap-1 text-gray-400" href="/feed">
<span className="iconify" data-icon="lucide:home" data-width="24"></span>
</a>
<a className="flex flex-col items-center gap-1 text-gray-400" href="/explore">
<span className="iconify" data-icon="lucide:compass" data-width="24"></span>
</a>
<div className="-mt-8">
<a className="flex flex-col items-center gap-1 text-[#CF4500]" href="/new">
<span className="iconify" data-icon="lucide:plus" data-width="28"></span>
</a>
</div>
<a className="flex flex-col items-center gap-1 text-gray-400" href="/notifications">
<span className="iconify" data-icon="lucide:bell" data-width="24"></span>
</a>
<a className="flex flex-col items-center gap-1 text-gray-400" href="/profile">
<span className="iconify" data-icon="lucide:user" data-width="24"></span>
</a>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/60 hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="bg-[#CF4500] text-white p-1.5 rounded-lg">
<span className="iconify" data-icon="lucide:ticket" data-width="20"></span>
</div>
<span className="text-xl font-semibold tracking-tighter text-[#323231]">
            TICKETQUEST
          </span>
</div>

<div className="flex-1 max-w-md mx-8">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#CF4500] transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</span>
<input className="w-full bg-[#F5F5F5] border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#CF4500]/20 focus:bg-white transition-all placeholder-gray-400" placeholder="Search for boredom killers..." type="text"/>
</div>
</div>

<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-sm font-medium">
<div className="flex items-center gap-1.5 text-[#038A00] bg-[#038A00]/10 px-3 py-1 rounded-full cursor-help" title="Current Streak">
<span className="iconify" data-icon="lucide:flame" data-width="16"></span>
<span>3 Days</span>
</div>
<div className="flex items-center gap-1.5 text-[#323231]">
<span className="iconify" data-icon="lucide:trophy" data-width="16"></span>
<span>1,240 XP</span>
</div>
</div>
<div className="h-6 w-px bg-gray-200"></div>
<a className="relative text-gray-500 hover:text-[#323231] transition-colors" href="/notifications">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#CF4500] rounded-full border-2 border-white"></span>
</a>
<a href="/profile">
<img alt="User" className="w-9 h-9 rounded-full ring-2 ring-white shadow-sm cursor-pointer" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</a>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-8">

<aside className="hidden md:block md:col-span-3 lg:col-span-2 sticky top-24 h-fit">
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-[#CF4500] bg-[#CF4500]/5 rounded-lg font-medium text-sm transition-colors" href="/feed">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
            Feed
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-white hover:text-[#323231] rounded-lg font-medium text-sm transition-colors" href="/explore">
<span className="iconify" data-icon="lucide:compass" data-width="18"></span>
            Explore
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-white hover:text-[#323231] rounded-lg font-medium text-sm transition-colors" href="/badges">
<span className="iconify" data-icon="lucide:award" data-width="18"></span>
            Badges
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-white hover:text-[#323231] rounded-lg font-medium text-sm transition-colors" href="/community">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
            Community
          </a>
</nav>
<div className="mt-8">
<h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Your Tags
          </h3>
<div className="space-y-1">
<a className="flex items-center justify-between px-3 py-1.5 text-gray-600 hover:bg-white rounded-lg text-sm group transition-colors" href="/tag/philosophy">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#CF4500]"></span>
                #philosophy
              </span>
<span className="text-xs text-gray-400 group-hover:text-[#CF4500]">
                12
              </span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-gray-600 hover:bg-white rounded-lg text-sm group transition-colors" href="/tag/coding-fails">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#038A00]"></span>
                #coding-fails
              </span>
<span className="text-xs text-gray-400 group-hover:text-[#CF4500]">
                5
              </span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-gray-600 hover:bg-white rounded-lg text-sm group transition-colors" href="/tag/random-facts">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                #random-facts
              </span>
<span className="text-xs text-gray-400 group-hover:text-[#CF4500]">
                8
              </span>
</a>
</div>
</div>
</aside>

<div className="col-span-1 md:col-span-9 lg:col-span-7 space-y-6">

<div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm relative group mb-6">

<div className="h-32 bg-gradient-to-r from-[#CF4500] to-[#FF8C42] relative">
<div className="absolute inset-0 bg-black/5"></div>
</div>
<div className="px-6 pb-6 relative">

<div className="flex justify-between items-end -mt-12 mb-4">
<div className="relative">
<img className="w-24 h-24 rounded-full ring-4 ring-white shadow-md bg-white object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="absolute bottom-1 right-1 bg-[#038A00] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-1">
                  Lvl 42
                </div>
</div>
<div className="flex gap-2 mb-1">
<a className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-[#323231] text-sm font-medium rounded-full shadow-sm transition-colors flex items-center justify-center" href="/settings/profile">
                  Edit Profile
                </a>
<button className="p-2 bg-white border border-gray-200 hover:text-[#CF4500] text-gray-500 rounded-full shadow-sm transition-colors" onclick="alert('Profile shared!')">
<span className="iconify" data-icon="lucide:share-2" data-width="18"></span>
</button>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-1">
<h1 className="text-2xl font-semibold tracking-tight text-[#323231]">
                  Alex The Architect
                </h1>
<span className="iconify text-[#038A00]" data-icon="lucide:verified" data-width="20"></span>
</div>
<p className="text-gray-500 text-sm mb-4">
                @blueprint_builder • Member since 2021
              </p>
<p className="text-gray-700 text-sm leading-relaxed max-w-2xl mb-4">
                Designing solutions for digital puzzles. Obsessed with
                structural integrity in code and coffee. Currently exploring the
                intersection of AI and human curiosity. 🏗️
              </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 cursor-pointer transition-colors">
                  #Architecture
                </span>
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 cursor-pointer transition-colors">
                  #SystemsThinking
                </span>
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 cursor-pointer transition-colors">
                  #Espresso
                </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col items-center justify-center text-center">
<div className="text-2xl font-semibold tracking-tight text-[#323231] mb-1">
              12.5k
            </div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Total XP
            </div>
</div>
<div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col items-center justify-center text-center">
<div className="text-2xl font-semibold tracking-tight text-[#323231] mb-1">
              342
            </div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Tickets Solved
            </div>
</div>
<div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col items-center justify-center text-center">
<div className="text-2xl font-semibold tracking-tight text-[#CF4500] mb-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:flame" data-width="20"></span>
              14
            </div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Day Streak
            </div>
</div>
<div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col items-center justify-center text-center">
<div className="text-2xl font-semibold tracking-tight text-[#323231] mb-1">
              Top 5%
            </div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Global Rank
            </div>
</div>
</div>

<div className="border-b border-gray-200 mb-6">
<nav aria-label="Tabs" className="flex gap-8 overflow-x-auto scrollbar-hide">
<a className="border-b-2 border-[#CF4500] py-4 px-1 text-sm font-semibold text-[#CF4500]" href="/profile">
              Overview
            </a>
<a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" href="/profile/tickets">
              Tickets
            </a>
<a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" href="/profile/answers">
              Answers
            </a>
<a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" href="/profile/badges">
              Badges
            </a>
</nav>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-[#323231]">Quest Activity</h3>
<span className="text-xs text-gray-400">Last 30 days</span>
</div>

<div className="flex gap-1.5 h-24 items-end">
<div className="flex-1 bg-gray-100 rounded-t-sm hover:bg-[#CF4500]/50 transition-colors h-[20%]"></div>
<div className="flex-1 bg-[#CF4500]/20 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[40%]"></div>
<div className="flex-1 bg-[#CF4500]/40 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[60%]"></div>
<div className="flex-1 bg-[#CF4500]/10 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[30%]"></div>
<div className="flex-1 bg-gray-100 rounded-t-sm hover:bg-[#CF4500]/50 transition-colors h-[10%]"></div>
<div className="flex-1 bg-[#CF4500] rounded-t-sm hover:bg-[#CF4500] transition-colors h-[80%]"></div>
<div className="flex-1 bg-[#CF4500]/60 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[50%]"></div>
<div className="flex-1 bg-[#CF4500]/80 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[90%]"></div>
<div className="flex-1 bg-gray-100 rounded-t-sm hover:bg-[#CF4500]/50 transition-colors h-[15%]"></div>
<div className="flex-1 bg-[#CF4500]/30 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[45%]"></div>
<div className="flex-1 bg-[#CF4500] rounded-t-sm hover:bg-[#CF4500] transition-colors h-[75%]"></div>
<div className="flex-1 bg-[#CF4500]/50 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[55%]"></div>
<div className="flex-1 bg-[#CF4500]/20 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[35%]"></div>
<div className="flex-1 bg-[#CF4500]/90 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[95%]"></div>
<div className="flex-1 bg-[#CF4500]/40 rounded-t-sm hover:bg-[#CF4500] transition-colors h-[65%]"></div>
</div>
</div>

<h3 className="font-semibold text-[#323231] px-1 pt-2">
              Recent Activity
            </h3>
<article className="bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm">
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1 min-w-[3rem]">
<span className="text-xs font-semibold text-gray-400">OCT</span>
<span className="text-xl font-semibold text-[#323231]">24</span>
</div>
<div className="w-px bg-gray-100 h-auto"></div>
<div className="flex-1">
<p className="text-sm text-gray-500 mb-2">
                    Answered a ticket in
                    <span className="font-medium text-[#323231]">#programming</span>
</p>
<a className="block group" href="/question/css-architecture">
<h4 className="text-base font-semibold text-[#323231] group-hover:text-[#CF4500] transition-colors mb-2">
                      How do you organize large-scale CSS architectures?
                    </h4>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<p className="text-sm text-gray-600 italic">
                        "I usually stick to the ITCSS methodology combined with
                        BEM naming conventions..."
                      </p>
</div>
</a>
<div className="flex items-center gap-4 mt-3">
<span className="text-xs font-medium text-[#038A00] flex items-center gap-1">
<span className="iconify" data-icon="lucide:arrow-big-up" data-width="16"></span>
                      45 Upvotes
                    </span>
<span className="text-xs font-medium text-gray-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:award" data-width="14"></span>
                      Accepted Answer
                    </span>
</div>
</div>
</div>
</article>
<article className="bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm">
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1 min-w-[3rem]">
<span className="text-xs font-semibold text-gray-400">OCT</span>
<span className="text-xl font-semibold text-[#323231]">22</span>
</div>
<div className="w-px bg-gray-100 h-auto"></div>
<div className="flex-1">
<p className="text-sm text-gray-500 mb-2">Unlocked a Badge</p>
<div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-xl border border-yellow-100">
<div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-lg shadow-sm">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-800">
                        Speed Demon
                      </h4>
<p className="text-xs text-gray-600">
                        Answered 5 tickets within 10 minutes of posting.
                      </p>
</div>
</div>
</div>
</div>
</article>
</div>

<div className="space-y-6">

<div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-sm">
<h3 className="font-semibold text-[#323231] mb-4 flex items-center gap-2">
<span className="iconify text-[#CF4500]" data-icon="lucide:trophy" data-width="18"></span>
                Trophy Cabinet
              </h3>
<div className="grid grid-cols-3 gap-3">
<div className="aspect-square bg-[#FFF9F5] rounded-xl flex flex-col items-center justify-center border border-[#CF4500]/10 group cursor-help relative hover:bg-[#FFF2EB] transition-colors" title="Top Contributor 2023">
<span className="iconify text-[#CF4500] mb-1" data-icon="lucide:crown" data-width="24"></span>
<span className="text-[10px] font-semibold text-[#CF4500]">
                    Top 1%
                  </span>
</div>
<div className="aspect-square bg-green-50 rounded-xl flex flex-col items-center justify-center border border-green-100 group cursor-help relative hover:bg-green-100 transition-colors" title="Solution Architect">
<span className="iconify text-green-600 mb-1" data-icon="lucide:check-circle" data-width="24"></span>
<span className="text-[10px] font-semibold text-green-700">
                    Solver
                  </span>
</div>
<div className="aspect-square bg-blue-50 rounded-xl flex flex-col items-center justify-center border border-blue-100 group cursor-help relative hover:bg-blue-100 transition-colors" title="Social Butterfly">
<span className="iconify text-blue-500 mb-1" data-icon="lucide:users" data-width="24"></span>
<span className="text-[10px] font-semibold text-blue-600">
                    Social
                  </span>
</div>
<div className="aspect-square bg-purple-50 rounded-xl flex flex-col items-center justify-center border border-purple-100 group cursor-help relative hover:bg-purple-100 transition-colors" title="Night Owl">
<span className="iconify text-purple-500 mb-1" data-icon="lucide:moon" data-width="24"></span>
<span className="text-[10px] font-semibold text-purple-600">
                    Nocturnal
                  </span>
</div>
<div className="aspect-square bg-gray-50 rounded-xl flex flex-col items-center justify-center border border-gray-200 opacity-50 grayscale">
<span className="iconify text-gray-400 mb-1" data-icon="lucide:lock" data-width="20"></span>
<span className="text-[10px] font-semibold text-gray-500">
                    Locked
                  </span>
</div>
<div className="aspect-square bg-gray-50 rounded-xl flex flex-col items-center justify-center border border-gray-200 opacity-50 grayscale">
<span className="iconify text-gray-400 mb-1" data-icon="lucide:lock" data-width="20"></span>
<span className="text-[10px] font-semibold text-gray-500">
                    Locked
                  </span>
</div>
</div>
<a className="block w-full mt-4 text-xs font-medium text-gray-500 hover:text-[#323231] py-2 rounded-lg transition-colors border border-dashed border-gray-200 text-center" href="/badges">
                View All Badges
              </a>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-sm">
<h3 className="font-semibold text-[#323231] mb-4">Top Topics</h3>
<div className="space-y-3">
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-gray-700">Architecture</span>
<span className="text-gray-400">Lvl 8</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#CF4500] h-full rounded-full w-[85%]"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-gray-700">Philosophy</span>
<span className="text-gray-400">Lvl 5</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#038A00] h-full rounded-full w-[60%]"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-gray-700">Web Dev</span>
<span className="text-gray-400">Lvl 3</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full rounded-full w-[35%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 h-fit">

<div className="bg-gradient-to-br from-[#323231] to-[#1a1a1a] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify" data-icon="lucide:target" data-width="100"></span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-[#CF4500]">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
<span className="text-xs font-bold uppercase tracking-widest">
                Daily Quest
              </span>
</div>
<h3 className="text-lg font-semibold mb-2">The Wise Cracker</h3>
<p className="text-gray-300 text-sm mb-4">
              Answer 3 tickets with the tag #funny to unlock the Jester Badge.
            </p>
<div className="w-full bg-gray-700 h-2 rounded-full mb-2">
<div className="bg-[#CF4500] h-2 rounded-full w-1/3"></div>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>1/3 Completed</span>
<span>+150 XP</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-[#323231]">Top Contributors</h3>
<select className="text-xs bg-[#F5F5F5] border-none rounded-lg py-1 px-2 text-gray-600 outline-none cursor-pointer">
<option>This Week</option>
<option>All Time</option>
</select>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-[#CF4500] w-4 text-center">
                1
              </span>
<img className="w-8 h-8 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?u=l1"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#323231] truncate">
                  Sarah_Snacks
                </p>
<p className="text-xs text-gray-400">240 Answers</p>
</div>
<div className="text-xs font-bold text-[#038A00]">+2k</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-gray-400 w-4 text-center">
                2
              </span>
<img className="w-8 h-8 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?u=l2"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#323231] truncate">
                  Dr_Boredom
                </p>
<p className="text-xs text-gray-400">189 Answers</p>
</div>
<div className="text-xs font-bold text-[#038A00]">+1.8k</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-gray-400 w-4 text-center">
                3
              </span>
<img className="w-8 h-8 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?u=l3"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#323231] truncate">
                  PixelPete
                </p>
<p className="text-xs text-gray-400">150 Answers</p>
</div>
<div className="text-xs font-bold text-[#038A00]">+1.2k</div>
</div>
</div>
<a className="block w-full mt-4 text-xs font-medium text-[#CF4500] hover:bg-[#CF4500]/5 py-2 rounded-lg transition-colors text-center" href="/leaderboard">
            View Full Leaderboard
          </a>
</div>

<div className="flex flex-wrap gap-x-4 gap-y-2 px-2">
<a className="text-xs text-gray-400 hover:text-[#323231]" href="/rules">
            Rules
          </a>
<a className="text-xs text-gray-400 hover:text-[#323231]" href="/about">
            About
          </a>
<a className="text-xs text-gray-400 hover:text-[#323231]" href="/privacy">
            Privacy
          </a>
<span className="text-xs text-gray-300">© 2023 TicketQuest</span>
</div>
</aside>
</main>

    </>
  );
}
