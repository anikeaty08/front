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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-stone-50/80 border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-medium tracking-tighter text-stone-900 flex items-center gap-2" href="#">
<iconify-icon className="text-emerald-600" icon="solar:sprout-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                    C&amp;V
                </a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-stone-900 transition-colors flex items-center gap-1.5" href="#feed">
<iconify-icon icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Market Feed
                    </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1.5" href="#charts">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Trading Data
                    </a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200/60 shadow-sm cursor-pointer hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-500" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-stone-600">EN</span>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<button className="text-stone-500 hover:text-stone-900 transition-colors flex items-center justify-center relative">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-stone-50"></span>
</span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-stone-200 to-stone-300 border border-stone-200 overflow-hidden ml-2 flex items-center justify-center cursor-pointer">
<span className="text-xs font-semibold text-stone-600">ME</span>
</div>
</div>
</div>
</nav>
<main className="flex-1">

<section className="border-b border-stone-200/50 bg-white/50 backdrop-blur-sm pt-12 pb-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-3">
                        Global Trade Feed
                    </h1>
<p className="text-sm font-medium text-stone-500 max-w-xl leading-relaxed">
                        Connect directly with farmers worldwide. View live crop yields, analyze market charts, and negotiate seamlessly with built-in translation.
                    </p>
</div>
<div className="flex items-center gap-6 divide-x divide-stone-200/50">
<div className="flex flex-col pr-6">
<span className="text-2xl font-semibold tracking-tight text-stone-900">12.4k</span>
<span className="text-xs font-medium text-stone-500 mt-0.5">Active Farmers</span>
</div>
<div className="flex flex-col pl-6">
<span className="text-2xl font-semibold tracking-tight text-stone-900">180+</span>
<span className="text-xs font-medium text-stone-500 mt-0.5">Regions Trading</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-10" id="feed">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="flex flex-col rounded-2xl border border-stone-200/60 bg-white shadow-sm overflow-hidden group">
<div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-stone-200"></div>
<div className="p-5 sm:p-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-stone-100 to-stone-200 border border-stone-200 flex items-center justify-center shrink-0">
<span className="text-xs font-semibold text-stone-600">ME</span>
</div>
<div className="flex-1 flex flex-col gap-4">
<textarea className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium text-stone-900 placeholder-stone-400 resize-none outline-none" placeholder="Upload a video or photo of your crop, set your price, and start trading..." rows="2"></textarea>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
<div className="flex items-center gap-3">

<button className="h-8 px-3 inline-flex items-center justify-center rounded-lg bg-stone-50 border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-100 hover:text-stone-900 transition-colors gap-1.5">
<iconify-icon icon="solar:videocamera-add-linear" width="16"></iconify-icon>
                                                Video
                                            </button>
<button className="h-8 px-3 inline-flex items-center justify-center rounded-lg bg-stone-50 border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-100 hover:text-stone-900 transition-colors gap-1.5">
<iconify-icon icon="solar:camera-add-linear" width="16"></iconify-icon>
                                                Photo
                                            </button>
</div>
<div className="flex items-center gap-3">

<div className="relative flex items-center">
<span className="absolute left-3 text-stone-500 text-xs font-medium">$</span>
<input className="h-8 w-24 pl-6 pr-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-xs font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="0.00" type="number"/>
<span className="ml-2 text-stone-500 text-xs font-medium">/ ton</span>
</div>

<button className="h-8 inline-flex items-center justify-center px-4 rounded-lg bg-stone-900 text-stone-50 text-xs font-medium hover:bg-stone-800 transition-colors">
                                                Post Trade
                                            </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 pb-2 mt-2">
<button className="px-4 py-2 rounded-full bg-stone-900 text-stone-50 text-xs font-medium transition-colors">All Crops</button>
<button className="px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-50 transition-colors">Grains</button>
<button className="px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-50 transition-colors">Produce</button>
<button className="px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-50 transition-colors">Livestock feed</button>
</div>

<div className="flex flex-col rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm">

<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 border border-orange-200/50 flex items-center justify-center shrink-0">
<span className="text-xs font-semibold text-orange-700 tracking-tight">MA</span>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900">Mateo Agronomics</h3>
<p className="text-xs font-medium text-stone-500 flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                        Mendoza, Argentina • 2h ago
                                    </p>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-stone-50 border border-stone-100 text-[10px] font-medium text-stone-500 uppercase tracking-widest tooltip" title="Translated from Spanish">
<iconify-icon className="text-emerald-500" icon="solar:earth-linear" width="14"></iconify-icon>
                                Auto-Translated
                            </div>
</div>

<p className="text-sm text-stone-600 mb-4 font-medium leading-relaxed">
                            Just completed the morning harvest of our premium Malbec grapes. The yield is looking fantastic this season with perfect Brix sugar levels. Ready for immediate wholesale transport. Check the video for quality.
                        </p>

<div className="aspect-video w-full rounded-xl bg-stone-100 relative overflow-hidden mb-5 group cursor-pointer border border-stone-200/50">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-stone-900 border border-white/80 group-hover:bg-white/80 group-hover:scale-105 transition-all shadow-sm">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-stone-900/70 backdrop-blur text-[10px] font-medium text-white">
                                0:45
                            </div>
</div>

<div className="mb-5 rounded-xl border border-stone-100 bg-stone-50/50 p-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="solar:chart-square-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold text-stone-700">Farmer Pricing History (Malbec Grapes)</span>
</div>
<span className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">Past 6 Months</span>
</div>

<div className="h-14 flex items-end justify-between gap-1">
<div className="w-full bg-stone-200 rounded-t-sm h-[60%] relative group cursor-crosshair hover:bg-stone-300 transition-colors"></div>
<div className="w-full bg-stone-200 rounded-t-sm h-[65%] relative group cursor-crosshair hover:bg-stone-300 transition-colors"></div>
<div className="w-full bg-stone-200 rounded-t-sm h-[75%] relative group cursor-crosshair hover:bg-stone-300 transition-colors"></div>
<div className="w-full bg-stone-200 rounded-t-sm h-[70%] relative group cursor-crosshair hover:bg-stone-300 transition-colors"></div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[85%] relative group cursor-crosshair hover:bg-emerald-200 transition-colors"></div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[100%] relative group cursor-crosshair shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">$850</div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-medium text-stone-400">
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
<span>Jan</span>
<span className="text-emerald-600 font-semibold">Feb</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between pt-5 border-t border-stone-100 gap-4">
<div>
<div className="text-2xl font-semibold tracking-tight text-stone-900">$850<span className="text-sm font-medium text-stone-500 tracking-normal"> / ton</span></div>
<div className="text-xs font-medium text-emerald-600 flex items-center gap-1 mt-1">
<iconify-icon icon="solar:trend-down-square-linear" width="16"></iconify-icon>
                                    4% below regional average
                                </div>
</div>
<div className="flex items-center gap-3">
<button className="h-10 inline-flex items-center justify-center px-4 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors gap-2">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                                    Negotiate
                                </button>
<button className="h-10 inline-flex items-center justify-center px-6 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 shadow-sm transition-colors">
                                    Buy Crop
                                </button>
</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm">

<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 border border-emerald-200/50 flex items-center justify-center shrink-0">
<span className="text-xs font-semibold text-emerald-700 tracking-tight">K</span>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900">Kisan Cooperative</h3>
<p className="text-xs font-medium text-stone-500 flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                        Punjab, India • 5h ago
                                    </p>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-stone-50 border border-stone-100 text-[10px] font-medium text-stone-500 uppercase tracking-widest tooltip">
<iconify-icon className="text-emerald-500" icon="solar:earth-linear" width="14"></iconify-icon>
                                Auto-Translated
                            </div>
</div>

<p className="text-sm text-stone-600 mb-4 font-medium leading-relaxed">
                            Harvesting grade-A Basmati rice. Moisture content is optimal at 12%. We have over 500 metric tons available for immediate export. Looking for long-term vendor partnerships.
                        </p>

<div className="grid grid-cols-2 gap-2 mb-5">
<div className="aspect-[4/3] w-full rounded-l-xl bg-stone-100 relative overflow-hidden border border-stone-200/50 flex items-center justify-center cursor-pointer group">
<div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-stone-100 opacity-50"></div>
<iconify-icon className="text-stone-400 group-hover:scale-110 transition-transform" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<div className="grid grid-rows-2 gap-2">
<div className="w-full h-full rounded-tr-xl bg-stone-100 relative overflow-hidden border border-stone-200/50 cursor-pointer"></div>
<div className="w-full h-full rounded-br-xl bg-stone-100 relative overflow-hidden border border-stone-200/50 flex items-center justify-center cursor-pointer">
<span className="text-xs font-medium text-stone-500">+3 Photos</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between pt-5 border-t border-stone-100 gap-4">
<div>
<div className="text-2xl font-semibold tracking-tight text-stone-900">$1,050<span className="text-sm font-medium text-stone-500 tracking-normal"> / MT</span></div>
<div className="text-xs font-medium text-red-500 flex items-center gap-1 mt-1">
<iconify-icon icon="solar:trend-up-square-linear" width="16"></iconify-icon>
                                    Demand increasing globally
                                </div>
</div>
<div className="flex items-center gap-3">
<button className="h-10 inline-flex items-center justify-center px-4 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors gap-2">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                                    Negotiate
                                </button>
<button className="h-10 inline-flex items-center justify-center px-6 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 shadow-sm transition-colors">
                                    Buy Crop
                                </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4" id="charts">
<div className="sticky top-24 flex flex-col gap-6">

<div className="rounded-2xl border border-stone-200/60 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold text-stone-900 tracking-tight">Market Prices</h3>
<p className="text-[10px] font-medium text-stone-400 uppercase tracking-widest mt-1">Live Global Index</p>
</div>
<button className="h-8 w-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>

<div className="h-28 flex items-end justify-between gap-1.5 mb-6 border-b border-stone-100 pb-2 px-1">
<div className="w-full bg-stone-100 rounded-t-sm h-[40%] relative group cursor-crosshair hover:bg-emerald-100 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">M</div></div>
<div className="w-full bg-stone-100 rounded-t-sm h-[45%] relative group cursor-crosshair hover:bg-emerald-100 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">T</div></div>
<div className="w-full bg-stone-100 rounded-t-sm h-[35%] relative group cursor-crosshair hover:bg-emerald-100 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">W</div></div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[60%] relative group cursor-crosshair hover:bg-emerald-200 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">T</div></div>
<div className="w-full bg-emerald-200 rounded-t-sm h-[75%] relative group cursor-crosshair"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-emerald-600">F</div></div>
<div className="w-full bg-stone-100 rounded-t-sm h-[70%] relative group cursor-crosshair hover:bg-emerald-100 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">S</div></div>
<div className="w-full bg-stone-100 rounded-t-sm h-[85%] relative group cursor-crosshair hover:bg-emerald-100 transition-colors"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">S</div></div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center">
<iconify-icon className="text-stone-600" icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Soybeans</div>
<div className="text-[10px] font-medium text-stone-400">USD / Bushel</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-stone-900">$14.20</div>
<div className="text-xs font-medium text-emerald-500 flex items-center justify-end gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon> +1.2%
                                        </div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center">
<iconify-icon className="text-stone-600" icon="solar:waterdrops-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Corn</div>
<div className="text-[10px] font-medium text-stone-400">USD / Bushel</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-stone-900">$6.85</div>
<div className="text-xs font-medium text-red-500 flex items-center justify-end gap-0.5">
<iconify-icon icon="solar:arrow-right-down-linear" width="12"></iconify-icon> -0.4%
                                        </div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center">
<iconify-icon className="text-stone-600" icon="solar:sun-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Wheat</div>
<div className="text-[10px] font-medium text-stone-400">USD / Bushel</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-stone-900">$8.10</div>
<div className="text-xs font-medium text-emerald-500 flex items-center justify-end gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon> +2.1%
                                        </div>
</div>
</div>
</div>
<button className="w-full mt-6 h-9 inline-flex items-center justify-center rounded-lg bg-stone-50 text-stone-600 text-xs font-medium hover:bg-stone-100 transition-colors">
                                View Full Market
                            </button>
</div>

<div className="rounded-xl border border-stone-200/60 bg-gradient-to-b from-white to-stone-50 p-5 shadow-sm">
<div className="flex gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-600" icon="solar:earth-bold-duotone" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Seamless Negotiations</h4>
<p className="text-xs font-medium text-stone-500 leading-relaxed mt-1">
                                        Chat and negotiate directly with farmers. C&amp;V automatically translates messages between 40+ languages in real-time.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-stone-50 border-t border-stone-200/50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-medium tracking-tighter text-stone-900 mb-4 inline-flex items-center gap-2" href="#">
<iconify-icon className="text-stone-400" icon="solar:sprout-linear" width="24"></iconify-icon>
                        C&amp;V Trade
                    </a>
<p className="text-sm font-medium text-stone-500 max-w-xs mb-6">
                        The global marketplace connecting crop farmers directly with wholesale vendors, powered by real-time data.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-4">Platform</h4>
<ul className="space-y-3">
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Market Feed</a></li>
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Trading Charts</a></li>
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Translation API</a></li>
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Vendor Guidelines</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Global Reach</a></li>
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Support</a></li>
<li><a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-medium text-stone-400">
                    © 2023 C&amp;V Global Trade. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-xs font-medium text-stone-400 hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a className="text-xs font-medium text-stone-400 hover:text-stone-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
