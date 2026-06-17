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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-sm">SF</span>
</div>
<span className="font-semibold tracking-tight text-lg group-hover:text-zinc-600 transition-colors">SalesFinder<span className="text-zinc-400">.ae</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Find a Rep</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Community Feed</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">For Agents</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block">Log in</button>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm ring-1 ring-zinc-900/5 hover:ring-zinc-900/20">
                    Join as Rep
                </button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 border-b border-zinc-100">
<div className="max-w-3xl mx-auto text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Over 2,000 verified reps in Dubai
            </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                Stop searching.<br/>Start trusting.
            </h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
                Connect with verified insurance, real estate, and banking professionals in the UAE. No spam, just experts.
            </p>

<div className="mt-10 p-2 bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 max-w-lg mx-auto flex flex-col sm:flex-row gap-2">
<div className="relative flex-1">
<i className="absolute left-3 top-3.5 w-5 h-5 text-zinc-400" data-lucide="search"></i>
<input className="w-full h-12 pl-10 pr-4 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all" placeholder="I need car insurance..." type="text"/>
</div>
<div className="relative w-full sm:w-40">
<i className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" data-lucide="map-pin"></i>
<select className="w-full h-12 pl-9 pr-8 rounded-xl bg-zinc-50 text-sm font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 appearance-none cursor-pointer">
<option>Dubai</option>
<option>Abu Dhabi</option>
<option>Sharjah</option>
</select>
<i className="absolute right-3 top-4 w-4 h-4 text-zinc-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-6 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">The Usual Friction</h3>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white border-dashed">
<div className="p-2 bg-red-50 text-red-500 rounded-lg">
<i className="w-5 h-5" data-lucide="phone-off"></i>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Spam Calls</h4>
<p className="text-xs text-zinc-500 mt-1">Fill one form, get 20 calls from random numbers.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white border-dashed">
<div className="p-2 bg-red-50 text-red-500 rounded-lg">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Zero Accountability</h4>
<p className="text-xs text-zinc-500 mt-1">Who is this agent? Are they licensed?</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-3xl blur-xl opacity-70"></div>
<div className="relative bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden">
<div className="p-6 border-b border-zinc-100 flex justify-between items-center">
<h3 className="font-semibold text-zinc-900 tracking-tight">Verified Results</h3>
<span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2 py-1 rounded">Insurance / Dubai</span>
</div>

<div className="p-6 hover:bg-zinc-50 transition-colors cursor-pointer group">
<div className="flex gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden">
<img alt="Nihad" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
<div className="bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2">
<h4 className="font-semibold text-zinc-900 text-sm">Nihad Al-Fayed</h4>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Senior Insurance Advisor • 4 Years Exp.</p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-amber-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
                                            4.9 (128)
                                        </div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] font-medium text-zinc-600">🚗 Car Renewal</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] font-medium text-zinc-600">🏥 Health</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i> Responds in 2 mins
                                        </span>
<button className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm shadow-green-200">
<i className="w-3.5 h-3.5" data-lucide="message-circle"></i>
                                            WhatsApp
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">UAE Market Insights</h2>
<p className="text-zinc-500 mt-2 text-sm max-w-md">Don't just buy insurance. Understand the market. Bite-sized updates to keep you informed.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                    View full feed <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid md:grid-cols-3 gap-6">

<article className="group bg-white rounded-2xl border border-zinc-200 p-5 hover:shadow-lg hover:shadow-zinc-200/50 transition-all cursor-pointer h-full flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">SF</div>
<div>
<p className="text-xs font-semibold text-zinc-900">SalesFinder Editorial</p>
<p className="text-[10px] text-zinc-400">2 hours ago</p>
</div>
</div>
<h3 className="font-semibold text-zinc-900 leading-snug mb-2">New RTA fines announced for 2024: What you need to know</h3>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                        The Roads and Transport Authority has updated the traffic fine list. Crossing a red light now carries a heftier penalty and impoundment period. Here is the breakdown...
                    </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<span className="text-[10px] font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded">60 sec read</span>
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-red-500 transition-colors"><i className="w-4 h-4" data-lucide="heart"></i></button>
<button className="text-zinc-400 hover:text-blue-500 transition-colors"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl border border-zinc-200 p-5 hover:shadow-lg hover:shadow-zinc-200/50 transition-all cursor-pointer h-full flex flex-col">
<div className="flex items-center gap-3 mb-4">
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<div className="flex items-center gap-1">
<p className="text-xs font-semibold text-zinc-900">Nihad Al-Fayed</p>
<i className="w-3 h-3 text-blue-500 fill-blue-50" data-lucide="badge-check"></i>
</div>
<p className="text-[10px] text-zinc-400">Insurance Specialist</p>
</div>
</div>
<h3 className="font-semibold text-zinc-900 leading-snug mb-2">Is Zero-Depreciation worth the extra AED 400?</h3>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                        Short answer: Yes, if your car is less than 5 years old. Without it, you pay significantly for parts during a claim. Let me explain the math...
                    </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<i className="w-3 h-3" data-lucide="message-square"></i> 24 comments
                        </div>
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-red-500 transition-colors"><i className="w-4 h-4" data-lucide="heart"></i></button>
<button className="text-zinc-400 hover:text-blue-500 transition-colors"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
</div>
</div>
</article>

<article className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 p-5 shadow-lg h-full flex flex-col text-white">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<div>
<p className="text-xs font-semibold text-white">Weekly Poll</p>
<p className="text-[10px] text-zinc-400">1.2k votes</p>
</div>
</div>
<h3 className="font-semibold text-white leading-snug mb-4">Which health insurance provider has the best claims process?</h3>
<div className="space-y-2 mb-4 flex-1">
<div className="relative h-8 bg-white/5 rounded-lg overflow-hidden flex items-center px-3 text-[10px]">
<div className="absolute inset-0 bg-blue-500/20 w-[45%]"></div>
<span className="relative z-10">Oman Insurance (45%)</span>
</div>
<div className="relative h-8 bg-white/5 rounded-lg overflow-hidden flex items-center px-3 text-[10px]">
<div className="absolute inset-0 bg-white/10 w-[30%]"></div>
<span className="relative z-10">AXA / GIG (30%)</span>
</div>
<div className="relative h-8 bg-white/5 rounded-lg overflow-hidden flex items-center px-3 text-[10px]">
<div className="absolute inset-0 bg-white/10 w-[25%]"></div>
<span className="relative z-10">Daman (25%)</span>
</div>
</div>
<button className="w-full py-2 bg-white text-zinc-900 text-xs font-semibold rounded-lg hover:bg-zinc-100 transition-colors">Vote Now</button>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white">
<div className="max-w-4xl mx-auto text-center mb-16">
<span className="text-indigo-400 font-medium text-xs tracking-wider uppercase">For Professionals</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-6">Built for top performers.</h2>
<p className="text-zinc-400 max-w-lg mx-auto leading-relaxed">Stop chasing cold leads. Position yourself as an expert, build your reputation, and let qualified clients come to you.</p>
</div>
<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

<div className="bg-zinc-800/50 p-6 rounded-2xl border border-white/5">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h3 className="text-lg font-semibold mb-2">High-Intent Leads</h3>
<p className="text-sm text-zinc-400">Users contact you because they saw your profile and reviews. Conversion rates are 3x higher.</p>
</div>

<div className="bg-zinc-800/50 p-6 rounded-2xl border border-white/5">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Trust Badge</h3>
<p className="text-sm text-zinc-400">Verification proves you are licensed and active. Stand out from the generic noise.</p>
</div>

<div className="relative bg-white text-zinc-900 p-6 rounded-2xl border border-zinc-200 shadow-xl overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
<h3 className="text-lg font-semibold mb-1">Verified Pro</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold tracking-tight">AED 99</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i> Verified Badge
                    </li>
<li className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i> Analytics Dashboard
                    </li>
<li className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="check"></i> Priority Support
                    </li>
</ul>
<button className="w-full py-2.5 bg-zinc-900 text-white font-medium text-sm rounded-lg hover:bg-zinc-800 transition-all">Start Free Trial</button>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-10">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white text-[10px]">SF</div>
<span className="font-semibold tracking-tight text-sm">SalesFinder.ae</span>
</div>
<p className="text-xs text-zinc-500 max-w-xs">Connecting the UAE with trusted professionals. Building transparency in Insurance, Real Estate, and Banking.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="font-semibold text-xs text-zinc-900 mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Browse Reps</a></li>
<li><a className="hover:text-zinc-900" href="#">Community</a></li>
<li><a className="hover:text-zinc-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-xs text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-900" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-zinc-50 flex justify-between items-center text-[10px] text-zinc-400">
<p>© 2024 SalesFinder UAE. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-4 h-4 cursor-pointer hover:text-zinc-900 transition-colors" data-lucide="instagram"></i>
<i className="w-4 h-4 cursor-pointer hover:text-zinc-900 transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer hover:text-zinc-900 transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
