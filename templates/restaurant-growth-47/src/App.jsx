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
      

<div className="fixed top-0 left-0 -z-10 w-[800px] h-[800px] rounded-full bg-emerald-50/60 blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-multiply"></div>
<div className="fixed bottom-0 right-0 -z-10 w-[600px] h-[600px] rounded-full bg-orange-50/50 blur-3xl translate-x-1/3 translate-y-1/3 opacity-60 mix-blend-multiply"></div>
<main className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto w-full">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 space-y-10 animate-enter">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
<span className="iconify" data-icon="lucide:trending-up" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">GROWTH<span className="text-emerald-600">.</span>IO</span>
</div>

<div className="space-y-6 max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                            Boost Your Restaurant's <span className="text-emerald-600 relative whitespace-nowrap">
<span className="relative z-10">Revenue</span>
<svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed max-w-lg">
                            Join over 4,000 restaurant partners who increased their delivery orders by an average of 35% in their first month with our optimization platform.
                        </p>
</div>

<div className="space-y-6 pt-4">

<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
<span className="iconify" data-icon="lucide:banknote" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900">Instant Payouts</h3>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">Access your earnings daily. No more waiting for weekly settlements to buy inventory.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900">Smart Analytics</h3>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">Visualize peak hours and popular dishes to optimize your menu for higher margins.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900">Zero-Risk Guarantee</h3>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">We only make money when you do. No hidden setup fees or long-term contracts.</p>
</div>
</div>
</div>

<div className="pt-6 border-t border-slate-100 flex items-center gap-6 opacity-80 grayscale transition-all hover:grayscale-0">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Trusted by</span>
</div>
<div className="h-6 w-auto opacity-50"><span className="iconify" data-icon="lucide:chef-hat" data-width="24"></span></div>
<div className="h-6 w-auto opacity-50"><span className="iconify" data-icon="lucide:utensils" data-width="24"></span></div>
<div className="h-6 w-auto opacity-50"><span className="iconify" data-icon="lucide:croissant" data-width="24"></span></div>
<div className="h-6 w-auto opacity-50"><span className="iconify" data-icon="lucide:coffee" data-width="24"></span></div>
</div>
</div>

<div className="lg:col-span-5 relative animate-enter delay-200">

<div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
<div className="p-8 sm:p-10">
<div className="mb-8">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Get Started Today</h2>
<p className="text-sm text-slate-500 mt-2">Fill out the form below to schedule your free demo.</p>
</div>
<form action="#" className="space-y-5">

<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="restaurant_name">Restaurant Name</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:store" data-width="18"></span>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-all shadow-sm bg-slate-50/30 focus:bg-white" id="restaurant_name" name="restaurant_name" placeholder="Bistro 52" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="name">Full Name</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-all shadow-sm bg-slate-50/30 focus:bg-white" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="email">Work Email</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-all shadow-sm bg-slate-50/30 focus:bg-white" id="email" name="email" placeholder="jane@restaurant.com" required="" type="email"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="phone">Phone Number</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-all shadow-sm bg-slate-50/30 focus:bg-white" id="phone" name="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="revenue">Monthly Revenue</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 shadow-sm bg-slate-50/30 focus:bg-white transition-all" id="revenue" name="revenue">
<option>Less than $10k</option>
<option>$10k - $50k</option>
<option>$50k - $100k</option>
<option>$100k+</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>

<button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg shadow-orange-500/30 transition-all duration-200 transform hover:-translate-y-0.5 mt-2" type="submit">
<span className="absolute inset-y-0 left-0 flex items-center pl-3">
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
                                    Calculate Growth
                                </button>
<p className="text-xs text-center text-slate-400 mt-4">
                                    By clicking above, you agree to our <a className="underline hover:text-slate-600" href="#">Terms</a> and <a className="underline hover:text-slate-600" href="#">Privacy Policy</a>.
                                </p>
</form>
</div>
</div>

<div className="absolute -top-10 -right-10 -z-10 text-emerald-100 opacity-50">
<svg fill="none" height="200" viewbox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="99.5" stroke="currentColor"></circle>
<circle cx="100" cy="100" r="79.5" stroke="currentColor"></circle>
<circle cx="100" cy="100" r="59.5" stroke="currentColor"></circle>
</svg>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
