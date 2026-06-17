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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 h-16">
<div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">

<div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
<div className="w-8 h-8 bg-[#2E5E3E] rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-[#2E5E3E]">AgroConnect</span>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-auto relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400 group-focus-within:text-[#2E5E3E] transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<input className="w-full bg-stone-100 border border-stone-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E5E3E]/20 focus:border-[#2E5E3E] transition-all placeholder:text-stone-500 text-stone-900" placeholder="Search farmers, crops, or equipment..." type="text"/>
</div>

<div className="flex items-center gap-2 sm:gap-4">
<button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full relative transition-colors">
<i className="w-6 h-6" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full hidden sm:block transition-colors">
<i className="w-6 h-6" data-lucide="message-square"></i>
</button>

<button className="flex items-center gap-2 pl-2 pr-1 py-1 hover:bg-stone-100 rounded-full transition-all border border-transparent hover:border-stone-200">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover border border-stone-200" src="https://images.unsplash.com/photo-1595245802319-e5a916a4220c?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="hidden sm:block text-left pr-2">
<p className="text-xs font-medium text-stone-900 leading-none">John Miller</p>
<p className="text-[10px] text-stone-500 leading-tight pt-0.5">Miller Family Farm</p>
</div>
</button>
</div>
</div>
</nav>

<div className="max-w-7xl mx-auto pt-20 px-4 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-2">

<div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm mb-6">
<div className="flex items-center gap-3 mb-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1595245802319-e5a916a4220c?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<h3 className="font-semibold text-stone-900 tracking-tight">Miller Family Farm</h3>
<div className="flex items-center gap-1 text-xs text-[#2E5E3E] bg-[#2E5E3E]/10 px-1.5 py-0.5 rounded w-fit mt-0.5">
<i className="w-3 h-3" data-lucide="check-circle-2"></i> Verified Owner
                            </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-center border-t border-stone-100 pt-3">
<div>
<span className="block text-lg font-semibold text-stone-900">1.2k</span>
<span className="text-xs text-stone-500">Connections</span>
</div>
<div className="border-l border-stone-100">
<span className="block text-lg font-semibold text-stone-900">450</span>
<span className="text-xs text-stone-500">Acres</span>
</div>
</div>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-[#2E5E3E]/5 text-[#2E5E3E] rounded-xl font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
                        Home Feed
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:text-stone-900 rounded-xl font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="tractor"></i>
                        My Farm
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:text-stone-900 rounded-xl font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users"></i>
                        Groups
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:text-stone-900 rounded-xl font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="store"></i>
                        Marketplace
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:text-stone-900 rounded-xl font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="cloud-sun"></i>
                        Weather &amp; Alerts
                    </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 hover:text-stone-900 rounded-xl font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="book-open"></i>
                        Knowledge Hub
                    </a>
</nav>
<div className="mt-8">
<h4 className="px-4 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">My Groups</h4>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-stone-600 hover:text-[#2E5E3E] transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-[#E6C36A]"></span>
                        Organic Wheat Growers
                    </a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-stone-600 hover:text-[#2E5E3E] transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-[#2E5E3E]"></span>
                        Midwest Cattle Breeders
                    </a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-stone-600 hover:text-[#2E5E3E] transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-[#8B6B3E]"></span>
                        Precision Ag Tech
                    </a>
</div>
</aside>

<main className="col-span-1 lg:col-span-6 space-y-6">

<div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
<div className="flex gap-4">
<img className="w-10 h-10 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1595245802319-e5a916a4220c?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="flex-1">
<input className="w-full bg-stone-50 border-none rounded-lg py-2.5 px-4 text-stone-900 placeholder:text-stone-500 focus:ring-1 focus:ring-[#2E5E3E] mb-3 text-base" placeholder="Share a field update, ask a question, or post a listing..." type="text"/>
<div className="flex items-center justify-between border-t border-stone-100 pt-3">
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-colors">
<i className="w-4 h-4 text-[#2E5E3E]" data-lucide="image"></i> Photo
                                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-colors">
<i className="w-4 h-4 text-[#8B6B3E]" data-lucide="video"></i> Video
                                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-colors">
<i className="w-4 h-4 text-[#E6C36A]" data-lucide="help-circle"></i> Ask Advice
                                    </button>
</div>
<button className="bg-[#2E5E3E] hover:bg-[#254d33] text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                    Post
                                </button>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-[#2E5E3E] text-white text-sm font-medium whitespace-nowrap shadow-sm">
                        All Updates
                    </button>
<button className="px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-50 hover:border-stone-300 transition-colors">
<i className="w-3 h-3 inline mr-1" data-lucide="wheat"></i> Crops
                    </button>
<button className="px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-50 hover:border-stone-300 transition-colors">
<i className="w-3 h-3 inline mr-1" data-lucide="beef"></i> Livestock
                    </button>
<button className="px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-medium whitespace-nowrap hover:bg-stone-50 hover:border-stone-300 transition-colors">
<i className="w-3 h-3 inline mr-1" data-lucide="shopping-tag"></i> Market
                    </button>
</div>

<article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
<div className="p-4">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-semibold text-stone-900 text-sm">Sarah Jenkins</h3>
<span className="text-[#2E5E3E]"><i className="w-3.5 h-3.5" data-lucide="sprout"></i></span>
</div>
<div className="flex items-center text-xs text-stone-500">
<span>2h ago</span>
<span className="mx-1">•</span>
<i className="w-3 h-3 mr-1" data-lucide="map-pin"></i>
<span>Cedar Valley, IA</span>
</div>
</div>
</div>
<button className="text-stone-400 hover:text-stone-600"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>

<p className="text-stone-800 text-base leading-relaxed mb-4">
                            First pass of the corn harvest looks promising despite the dry July we had. Moisture levels are sitting right at 16%. Any neighbors seeing similar yield bumps from the new hybrid seeds? 🚜🌽
                        </p>
</div>

<div className="relative w-full h-80 bg-stone-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=600"/>
</div>

<div className="p-4 border-t border-stone-100">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<button className="flex items-center gap-2 text-stone-500 hover:text-[#2E5E3E] transition-colors group">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="thumbs-up"></i>
<span className="text-sm font-medium">42</span>
</button>
<button className="flex items-center gap-2 text-stone-500 hover:text-[#8B6B3E] transition-colors group">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="message-circle"></i>
<span className="text-sm font-medium">12</span>
</button>
<button className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
</div>
<button className="text-stone-400 hover:text-stone-600">
<i className="w-5 h-5" data-lucide="bookmark"></i>
</button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E6C36A]/20 flex items-center justify-center text-[#8B6B3E] font-bold text-sm">TB</div>
<div>
<h3 className="font-semibold text-stone-900 text-sm">Tom Baker</h3>
<div className="flex items-center text-xs text-stone-500">
<span>Orchard Owner</span>
<span className="mx-1">•</span>
<span>5h ago</span>
</div>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium border border-red-100">Pest Alert</span>
</div>
<p className="text-stone-800 text-base leading-relaxed mb-4">
                        Found signs of Codling Moth in the south block apple trees. Setting traps tonight. Anyone else in the Yakima area seeing early emergence this year?
                    </p>

<div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-2">
<label className="custom-checkbox flex items-center justify-between p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-[#2E5E3E] transition-all">
<span className="text-sm font-medium text-stone-700">Yes, seeing them here too</span>
<input className="hidden" name="pest_poll" type="radio"/>
<div className="w-5 h-5 border-2 border-stone-300 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-white rounded-full hidden"></div>
</div>
</label>
<label className="custom-checkbox flex items-center justify-between p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-[#2E5E3E] transition-all">
<span className="text-sm font-medium text-stone-700">No signs yet</span>
<input className="hidden" name="pest_poll" type="radio"/>
<div className="w-5 h-5 border-2 border-stone-300 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-white rounded-full hidden"></div>
</div>
</label>
</div>
<div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-6">
<button className="flex items-center gap-2 text-stone-500 hover:text-[#2E5E3E]">
<i className="w-5 h-5" data-lucide="thumbs-up"></i>
<span className="text-sm">15</span>
</button>
<button className="flex items-center gap-2 text-stone-500 hover:text-[#8B6B3E]">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-sm">28 Comments</span>
</button>
</div>
</article>

<article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
<div className="p-4 flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<h3 className="font-semibold text-stone-900 text-sm">Green Acres Coop</h3>
<p className="text-xs text-stone-500">Listed in <span className="text-[#2E5E3E] font-medium">Equipment</span> • 1d ago</p>
</div>
</div>
<div className="px-4 pb-4">
<div className="flex flex-col sm:flex-row gap-4 bg-stone-50 rounded-xl p-3 border border-stone-200 hover:bg-stone-100 transition-colors cursor-pointer group">
<img className="w-full sm:w-32 h-32 object-cover rounded-lg" src="https://images.unsplash.com/photo-1530267981375-f0de93fe3e94?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=300"/>
<div className="flex-1 flex flex-col justify-between py-1">
<div>
<h4 className="text-lg font-semibold text-stone-900 group-hover:text-[#2E5E3E] transition-colors tracking-tight">John Deere 5075E Utility Tractor</h4>
<p className="text-sm text-stone-500 mt-1 line-clamp-2">2019 model, 450 hours. Cab with heat/AC, loader ready. Excellent condition, always shed stored.</p>
</div>
<div className="flex items-center justify-between mt-3">
<span className="text-lg font-bold text-[#2E5E3E]">$32,500</span>
<span className="text-xs font-medium bg-white px-2 py-1 rounded border border-stone-200 text-stone-600">50mi away</span>
</div>
</div>
</div>
</div>
</article>
</main>

<aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 h-fit">

<div className="bg-gradient-to-br from-[#2E5E3E] to-[#1a3d26] rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24" data-lucide="cloud-rain"></i>
</div>
<div className="flex justify-between items-start relative z-10">
<div>
<h3 className="text-sm font-medium text-emerald-100 mb-1">My Farm</h3>
<div className="text-3xl font-bold tracking-tight mb-1">72°F</div>
<p className="text-xs text-emerald-200">Partly Cloudy</p>
</div>
<i className="w-8 h-8 text-[#E6C36A]" data-lucide="sun"></i>
</div>
<div className="mt-6 flex justify-between text-center relative z-10">
<div>
<p className="text-[10px] text-emerald-200 uppercase">Precip</p>
<p className="text-sm font-semibold">10%</p>
</div>
<div>
<p className="text-[10px] text-emerald-200 uppercase">Wind</p>
<p className="text-sm font-semibold">8 mph</p>
</div>
<div>
<p className="text-[10px] text-emerald-200 uppercase">Humidity</p>
<p className="text-sm font-semibold">45%</p>
</div>
</div>

<div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 border border-white/20">
<i className="w-4 h-4 text-emerald-200" data-lucide="snowflake"></i>
<span className="text-xs text-emerald-50">Frost warning tonight (2am)</span>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-stone-900 text-sm">Market Prices</h3>
<a className="text-xs text-[#2E5E3E] hover:underline" href="#">View All</a>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center pb-2 border-b border-stone-50 last:border-0 last:pb-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
<i className="w-4 h-4" data-lucide="wheat"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Wheat</p>
<p className="text-xs text-stone-500">/bu</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-stone-900">$6.42</p>
<p className="text-xs text-green-600 flex items-center justify-end">
<i className="w-3 h-3" data-lucide="arrow-up"></i> 1.2%
                                </p>
</div>
</div>
<div className="flex justify-between items-center pb-2 border-b border-stone-50 last:border-0 last:pb-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700">
<i className="w-4 h-4" data-lucide="corn"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Corn</p>
<p className="text-xs text-stone-500">/bu</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-stone-900">$4.85</p>
<p className="text-xs text-red-500 flex items-center justify-end">
<i className="w-3 h-3" data-lucide="arrow-down"></i> 0.5%
                                </p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm">
<h3 className="font-semibold text-stone-900 text-sm mb-4">Farmers Near You</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<img className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<p className="text-sm font-medium text-stone-900">Elena Gomez</p>
<p className="text-xs text-stone-500">Vineyard Manager</p>
</div>
</div>
<button className="p-1.5 rounded-lg border border-stone-200 text-stone-400 hover:text-[#2E5E3E] hover:border-[#2E5E3E] transition-all">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<img className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<p className="text-sm font-medium text-stone-900">Mark Davis</p>
<p className="text-xs text-stone-500">Dairy Farmer</p>
</div>
</div>
<button className="p-1.5 rounded-lg border border-stone-200 text-stone-400 hover:text-[#2E5E3E] hover:border-[#2E5E3E] transition-all">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</button>
</div>
</div>
<button className="w-full mt-4 py-2 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors border-t border-stone-100">
                        View More Suggestions
                    </button>
</div>
</aside>
</div>
</div>

<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 pb-safe z-50">
<div className="flex justify-around items-center p-3">
<a className="flex flex-col items-center gap-1 text-[#2E5E3E]" href="#">
<i className="w-6 h-6" data-lucide="layout-grid"></i>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400 hover:text-[#2E5E3E]" href="#">
<i className="w-6 h-6" data-lucide="search"></i>
<span className="text-[10px] font-medium">Search</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400 hover:text-[#2E5E3E]" href="#">
<div className="bg-[#2E5E3E] rounded-full p-2 -mt-6 shadow-lg border-4 border-white text-white">
<i className="w-6 h-6" data-lucide="plus"></i>
</div>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400 hover:text-[#2E5E3E]" href="#">
<i className="w-6 h-6" data-lucide="store"></i>
<span className="text-[10px] font-medium">Shop</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400 hover:text-[#2E5E3E]" href="#">
<i className="w-6 h-6" data-lucide="menu"></i>
<span className="text-[10px] font-medium">Menu</span>
</a>
</div>
</div>


    </>
  );
}
