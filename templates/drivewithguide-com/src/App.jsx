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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<a className="flex items-center gap-2" href="#">

<img alt="DriveWithGuide Logo" className="w-8 h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/809bf63c-c2cc-41c2-8e69-e1cf4f314a5b_320w.png"/>
<span className="text-lg font-semibold tracking-tighter text-slate-900">
              DriveWithGuide
            </span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#planner">
            Plan Trip
          </a>
<a className="hover:text-slate-900 transition-colors" href="#profiles">
            Browse Drivers
          </a>
<a className="hover:text-slate-900 transition-colors" href="#features">
            Features
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900" href="#">
            Sign In
          </a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" href="#">
            Book Trip
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-20">

<img alt="Pakistan Mountains" className="w-full h-full object-cover opacity-25 bg-fade-overlay grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4354a718-56e2-45ca-be76-dcf07d4fe361_3840w.jpg" style={{}}/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-[#FAFAFA] -z-10"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6 shadow-sm backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            Verified Tourism Platform
          </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-slate-900 leading-[1.1] mb-6">
            Explore Pakistan with
            <span className="text-emerald-600">verified</span>
            guides.
          </h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg font-medium">
            Stop worrying about unverified drivers. Book reliable transport with
            specific model details, tracked mileage, and vetted professionals.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-6 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-slate-200/50">
              Find a Driver
              <iconify-icon icon="solar:wheel-angle-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
              Watch Demo
            </button>
</div>
</div>

<div className="relative z-10 hidden lg:block">
<div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200 to-indigo-100 rounded-[2rem] blur-2xl opacity-60"></div>
<div className="relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl shadow-slate-200/50 p-6 ring-1 ring-slate-100">
<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">
                    Trip Configuration
                  </h3>
<p className="text-xs text-slate-400">Hunza Valley Expedition</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                5 Days
              </span>
</div>
<div className="space-y-3">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Selected Vehicle
              </div>
<div className="p-4 rounded-xl border border-emerald-500 bg-emerald-50/20 transition-colors relative">
<div className="absolute top-3 right-3 text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="flex items-start gap-4">
<div className="w-16 h-12 bg-slate-200 rounded-lg overflow-hidden shrink-0">
<img alt="Car" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-slate-900">
                      Toyota Prado TX
                    </span>
<span className="text-xs text-slate-500">2019 Model • 4x4</span>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">
                        85k Mileage
                      </span>
<span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">
                        AC
                      </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<img className="w-10 h-10 rounded-full object-cover border border-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-xs font-medium text-slate-900">
                    Driver: Rashid M.
                  </p>
<p className="text-[10px] text-slate-500 flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
                    4.9 (142 trips)
                  </p>
</div>
</div>
<div className="pt-4 mt-2 flex items-center justify-between">
<div>
<p className="text-xs text-slate-400">Total Est.</p>
<p className="text-lg font-semibold text-slate-900 tracking-tight">
                    $425.00
                  </p>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-800">
                  Proceed to Book
                </button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative py-24 overflow-hidden" id="planner">

<div className="absolute inset-0 -z-20">

<img alt="Valley Background" className="w-full h-full object-cover brightness-[0.35]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db8e615b-f792-4bc8-927d-ed3a32738e09_3840w.jpg"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-12">
<span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-100 border border-indigo-400/30 text-xs font-medium mb-4 backdrop-blur-md">
            AI Travel Planner
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Build Your Perfect Northern Expedition
          </h2>
<p className="text-slate-300">
            Tell us what you love and how much time you have. Our system will
            match you with the best route, vehicle, and guide.
          </p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 max-w-4xl mx-auto">
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="">
<label className="block text-sm font-semibold text-slate-900 mb-4 flex justify-between">
                  Trip Duration
                  <span className="text-emerald-600">5 Days</span>
</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="14" min="3" type="range" value="5"/>
<div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
<span>3 Days</span>
<span>14 Days</span>
</div>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-900 mb-4">
                  Select Your Interests
                </label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:mountains-linear"></iconify-icon>
                      Nature
                    </span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:history-linear"></iconify-icon>
                      History
                    </span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
                      Photo
                    </span>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:chef-hat-linear"></iconify-icon>
                      Food
                    </span>
</label>
</div>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-900 mb-4">
                  Group Size
                </label>
<div className="grid grid-cols-3 gap-3">
<button className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 font-medium">
                    Couple
                  </button>
<button className="px-3 py-2 border border-emerald-500 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                    Family (4)
                  </button>
<button className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 font-medium">
                    Group (10+)
                  </button>
</div>
</div>
<button className="w-full bg-emerald-600 text-white font-medium py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                Generate Free Itinerary
              </button>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="" icon="solar:map-linear" width="120"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                Suggested Route
              </h3>
<div className="space-y-0 relative">

<div className="absolute left-[15px] top-2 bottom-4 w-0.5 bg-slate-200"></div>

<div className="relative flex gap-4 pb-6">
<div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shrink-0 relative z-10 shadow-sm">
                    1
                  </div>
<div className="">
<h4 className="text-sm font-bold text-slate-900">
                      Islamabad Departure
                    </h4>
<p className="text-xs text-slate-500 mt-1">
                      Pick up by Driver Rashid in Toyota Prado.
                    </p>
</div>
</div>

<div className="relative flex gap-4 pb-6">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-slate-500 shrink-0 relative z-10 shadow-sm">
                    2
                  </div>
<div className="">
<h4 className="text-sm font-bold text-slate-900">
                      Naran Stopover
                    </h4>
<p className="text-xs text-slate-500 mt-1">
                      Lunch at River View. Visit Saif-ul-Malook.
                    </p>
</div>
</div>

<div className="relative flex gap-4">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-slate-500 shrink-0 relative z-10 shadow-sm">
                    3
                  </div>
<div className="">
<h4 className="text-sm font-bold text-slate-900">
                      Hunza Arrival
                    </h4>
<p className="text-xs text-slate-500 mt-1">
                      Check-in at Luxus Hunza. Sunset Eagle's Nest.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200 relative" id="profiles">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
              Verified Professionals
            </h2>
<p className="text-slate-500">
              Browse detailed profiles including vehicle models, maintenance
              history, and driver experience.
            </p>
</div>
<div className="flex bg-slate-100 p-1 rounded-xl">
<button className="px-6 py-2 rounded-lg text-sm font-medium bg-white text-slate-900 shadow-sm border border-slate-200">
              All
            </button>
<button className="px-6 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900">
              SUVs
            </button>
<button className="px-6 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900">
              Vans
            </button>
<button className="px-6 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900">
              Guides
            </button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db8e615b-f792-4bc8-927d-ed3a32738e09_800w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold tracking-tight text-slate-900 border border-slate-200">
                PREMIUM
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-sm font-semibold text-slate-900">
                      Ahmed Khan
                    </h4>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-bold"></iconify-icon>
                      Verified
                    </div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">
                    $120
                  </span>
<span className="text-xs text-slate-400">/day</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                Toyota Land Cruiser ZX
              </h3>
<div className="grid grid-cols-2 gap-2 mb-4">
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  2021 Model
                </span>
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  AC / 4x4
                </span>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                View Details
              </button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10a848ad-3bb5-4639-b442-038653936f5e_800w.jpg"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">
                      Bilal Siddiqui
                    </h4>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-bold"></iconify-icon>
                      Verified
                    </div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">
                    $90
                  </span>
<span className="text-xs text-slate-400">/day</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">JEEP</h3>
<div className="grid grid-cols-2 gap-2 mb-4">
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  12 Seats
                </span>
<span className="text-xs text-slate-500 bg-slate-50 border-slate-100 border rounded pt-1 pr-2 pb-1 pl-2">
                  Dual AC
                </span>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                View Details
              </button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 bg-slate-800 relative overflow-hidden">
<img alt="Guide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4354a718-56e2-45ca-be76-dcf07d4fe361_800w.jpg"/>
<div className="absolute top-4 left-4 bg-emerald-500 text-white px-2 py-1 rounded text-[10px] font-bold tracking-tight">
                GUIDE
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop" style={{}}/>
<div>
<h4 className="text-sm font-semibold text-slate-900">
                      Sara Ali
                    </h4>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<iconify-icon className="text-blue-500" icon="solar:diploma-verified-bold"></iconify-icon>
                      Licensed
                    </div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">
                    $45
                  </span>
<span className="text-xs text-slate-400">/day</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2" style={{}}>Adventure Tour</h3>
<div className="grid grid-cols-2 gap-2 mb-4">
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  Hunza &amp; Gilgit
                </span>
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  English/Urdu
                </span>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                View Profile
              </button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Car" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2afca9fc-e8fd-438f-a0ec-e075a2825de7_800w.jpg" style={{}}/>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=100&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">
                      Usman Tariq
                    </h4>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-bold"></iconify-icon>
                      Verified
                    </div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">
                    $55
                  </span>
<span className="text-xs text-slate-400">/day</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Defender
</h3>
<div className="grid grid-cols-2 gap-2 mb-4">
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  7 Seater
                </span>
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  Compact SUV
                </span>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                View Details
              </button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Car" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42c6761c-9801-4c15-b737-2458273253bf_800w.jpg" style={{}}/>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=100&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">
                      Imran Shah
                    </h4>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-bold"></iconify-icon>
                      Verified
                    </div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">
                    $180
                  </span>
<span className="text-xs text-slate-400">/day</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                Toyota Coaster Saloon
              </h3>
<div className="grid grid-cols-2 gap-2 mb-4">
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  22 Seats
                </span>
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  Fridge/Mic
                </span>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                View Details
              </button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 bg-slate-800 relative overflow-hidden">
<img alt="Guide" className="group-hover:scale-105 transition-transform duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5deb36de-8126-43ca-a775-04f35e71cde9_800w.jpg"/>
<div className="absolute top-4 left-4 bg-emerald-500 text-white px-2 py-1 rounded text-[10px] font-bold tracking-tight">
                GUIDE
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="">
<h4 className="text-sm font-semibold text-slate-900" style={{}}>Kamran</h4>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<iconify-icon className="text-blue-500" icon="solar:diploma-verified-bold"></iconify-icon>
                      Mountaineer
                    </div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-slate-900">
                    $60
                  </span>
<span className="text-xs text-slate-400">/day</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                Trekking Expert
              </h3>
<div className="grid grid-cols-2 gap-2 mb-4">
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  K2 Basecamp
                </span>
<span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  First Aid Cert
                </span>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                View Profile
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
            Transforming Tourism in Pakistan
          </h2>
<p className="text-slate-500">
            We replace uncertainty with reliability through our centralized
            vetting system.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-start">

<div className="p-8 rounded-3xl bg-white border border-slate-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon className="" icon="solar:danger-triangle-linear" width="120"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
              Current Challenges
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                Overcharging for transport &amp; accommodation
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                Unverified drivers &amp; unsafe vehicles
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                Zero accountability or trip tracking
              </li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden text-white shadow-2xl shadow-slate-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] opacity-10 bg-cover bg-center"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                DriveWithGuide Standard
              </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  Fixed, transparent pricing &amp; service charges
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  Govt. ID verified drivers &amp; inspected vehicles
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  Real-time GPS tracking &amp; 24/7 Support
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="features">
<div className="absolute inset-0 -z-10">
<img alt="World Map Background" className="w-full h-full object-cover opacity-5 grayscale" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">
            A Complete Travel Ecosystem
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
<div className="md:col-span-2 row-span-1 bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group overflow-hidden relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 mb-4 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
                Verified Profiles
              </h3>
<p className="text-sm text-slate-500 max-w-md">
                Every driver and guide undergoes a strict verification process.
                We check licenses, vehicle condition (model/mileage), and
                languages spoken before they can accept a booking.
              </p>
</div>
<div className="mt-8 flex items-center gap-3 relative z-10">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">
                  +2k
                </div>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                100% Verified Badge
              </span>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<iconify-icon icon="solar:map-point-bold" width="100"></iconify-icon>
</div>
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
              Smart Builder
            </h3>
<p className="text-sm text-slate-500">
              Design custom trips or choose pre-made routes. Clear breakdown of
              all costs upfront.
            </p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:gps-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
              Live Tracking
            </h3>
<p className="text-sm text-slate-500">
              Share your real-time location with family. Includes an SOS button
              for emergencies.
            </p>
</div>
<div className="md:col-span-2 bg-slate-50 rounded-2xl border border-slate-200 p-8 flex items-center justify-between hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group">
<div className="max-w-md">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
                Transparent Payments
              </h3>
<p className="text-sm text-slate-500">
                Pay a 10% advance to confirm transport, hotels, and guides. No
                hidden fees. The rest is paid upon service delivery.
              </p>
</div>
<div className="hidden md:block">
<div className="w-32 h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
<span className="text-2xl font-bold text-slate-900 tracking-tighter">
                  10%
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6">
            Sustainable Tourism Model
          </h2>
<p className="text-slate-400 mb-8 leading-relaxed">
            We empower local service providers while ensuring quality for
            tourists. Our simple commission model keeps the ecosystem healthy
            and predictable.
          </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:hand-money-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-white">10% Service Fee</h4>
<p className="text-sm text-slate-400 mt-1">
                  A flat rate taken in advance on transport, accommodation, and
                  guide services.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:shop-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-white">
                  Open Registration
                </h4>
<p className="text-sm text-slate-400 mt-1">
                  Drivers and hotels apply freely. Only those passing manual
                  admin verification get the badge.
                </p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-slate-800/80 backdrop-blur rounded-2xl p-8 border border-slate-700">
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                  Revenue Split
                </p>
<h3 className="text-3xl font-semibold text-white mt-2">
                  Transparent
                </h3>
</div>
<iconify-icon className="text-slate-500" icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-slate-300 mb-2">
<span>Service Provider (Driver/Hotel)</span>
<span>90%</span>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[90%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-300 mb-2">
<span>DriveWithGuide Platform</span>
<span>10%</span>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 w-[10%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">

<img alt="DriveWithGuide Logo" className="w-6 h-6 object-contain" src="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"/>
<span className="text-base font-semibold text-slate-900 tracking-tight">
                DriveWithGuide
              </span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
              Pakistan's first verified tourism &amp; travel services platform.
              Safe, reliable, and transparent.
            </p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-slate-900" href="#">Browse Drivers</a>
</li>
<li className=""><a className="hover:text-slate-900" href="#">Find Guides</a></li>
<li>
<a className="hover:text-slate-900" href="#">Itinerary Builder</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About Us</a></li>
<li>
<a className="hover:text-slate-900" href="#">Safety Policy</a>
</li>
<li>
<a className="hover:text-slate-900" href="#">Partner with Us</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</li>
<li>
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
</li>
<li>
<a className="hover:text-slate-900" href="#">Refund Policy</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
            © 2023 DriveWithGuide. All rights reserved.
          </p>
<div className="flex gap-4 text-slate-400">
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:bell-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
