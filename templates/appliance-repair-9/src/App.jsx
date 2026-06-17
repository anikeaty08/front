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
      

<div className="border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-blue-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>
<span className="text-sm font-medium text-slate-500 hidden md:block">Serving Cleveland, Ohio since 1963</span>
</div>
<div className="flex items-center gap-2 w-full md:w-auto">
<div className="relative w-full md:w-64">
<input className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Search..." type="text"/>
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
</div>
<button className="bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-blue-800 transition-colors shadow-sm">Search</button>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-red-600 flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-md">
                    CAS
                </div>
<div>
<h1 className="text-lg font-semibold text-slate-900 tracking-tight leading-none">Complete Appliance Service</h1>
<p className="text-xs text-slate-500 font-medium">Cleveland, Ohio</p>
</div>
</div>
<ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
<li><a className="text-blue-700 hover:text-blue-800 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Promotions</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pro Tips</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Since 1963
            </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                Your Local Appliance Repair <span className="text-blue-700">Experts.</span>
</h1>
<p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                Factory trained technicians and a 30-day warranty on work we perform. We are professionals you can trust.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-700 text-white text-lg font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 active:scale-95" href="#">
<i className="w-5 h-5 mr-2" data-lucide="calendar"></i>
                    Make an Appointment
                </a>
<a className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-red-600 text-white text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-95" href="#">
<i className="w-5 h-5 mr-2" data-lucide="siren"></i>
                    Emergency Service
                </a>
</div>
<div className="flex items-center gap-3 text-slate-900 text-xl font-semibold tracking-tight pt-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-blue-700" data-lucide="phone"></i>
</div>
                (216) 364-2700
            </div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
<img alt="Kitchen Appliances" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">Cleveland's Trusted Choice</p>
<p className="text-white/80 text-sm">Repairing all major brands</p>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10"></div>
</div>
</section>

<section className="bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

<div className="space-y-4">
<div className="flex items-center gap-2 text-slate-900 font-semibold text-lg tracking-tight">
<i className="w-5 h-5 text-blue-700" data-lucide="map-pin"></i>
<h2>Location</h2>
</div>
<div className="space-y-1 text-lg text-slate-600">
<p>4735 Richmond Rd.</p>
<p>Warrensville Heights, Ohio 44128</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:underline mt-2 text-base" href="#">
                        View On A Map <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-slate-900 font-semibold text-lg tracking-tight">
<i className="w-5 h-5 text-blue-700" data-lucide="clock"></i>
<h2>Normal Business Hours</h2>
</div>
<div className="space-y-3 text-lg text-slate-600">
<div className="flex justify-between max-w-xs border-b border-slate-200 pb-2">
<span>Mon - Fri</span>
<span className="font-medium text-slate-900">8:00AM - 5:30PM</span>
</div>
<p className="text-base text-slate-500 leading-relaxed">
<span className="font-medium text-slate-700">Saturday:</span> Shop is closed indefinitely, however office hours vary - please contact Complete Appliance Service at 216-364-2700.
                    </p>
<p className="text-base text-slate-500">
<span className="font-medium text-slate-700">Sunday:</span> Closed (Except for Emergency Advice)
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">We repair everything.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all bg-white">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Dishwashers</h3>
<p className="text-base text-slate-500 leading-relaxed">
                    When spotless becomes spotted or your appliance just isn't getting the job done, call us to get back on track. A properly working dishwasher cleans your dishes and lets you spend your time on things that matter.
                </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all bg-white">
<div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="flame"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Ovens &amp; Ranges</h3>
<p className="text-base text-slate-500 leading-relaxed">
                    Your stove cooks your meals and your oven helps you bake in the love, but sometimes they need a fix or some attention to keep the warm tasty bites coming. Electric, gas, hybrid... we are trained for most brands.
                </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all bg-white">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="snowflake"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Refrigerators</h3>
<p className="text-base text-slate-500 leading-relaxed">
                    Few homes are without a refrigerator, sleep easy knowing you have someone to call if you need yours fixed NOW! Reasonably priced Emergency Service available if the ice cream is ever in peril.
                </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all bg-white">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shirt"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Washers &amp; Dryers</h3>
<p className="text-base text-slate-500 leading-relaxed">
                    Your washer &amp; dryer are most efficient when they are running properly which makes the job easier. Call us to stop out and put things right. Let our experts get you the right parts if you prefer to do the work yourself.
                </p>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-20">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Why Choose Complete Appliance Services?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<p className="text-lg text-slate-300">
                            Thank you for choosing Complete Appliance Services. We are your local appliance repair experts.
                        </p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="shield-check"></i>
</div>
<p className="text-lg text-slate-300">
                            With <strong className="text-white font-semibold">factory trained technicians</strong> and a 30 day warranty on work we perform, we are professionals you can trust.
                        </p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<p className="text-lg text-slate-300">
<strong className="text-white font-semibold">Emergency service</strong> and <strong className="text-white font-semibold">Saturday appointments</strong> are available.
                        </p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="wrench"></i>
</div>
<p className="text-lg text-slate-300">
                            Our <strong className="text-white font-semibold">parts counter</strong> is open during normal business hours for the DIY handyman.
                        </p>
</li>
</ul>
</div>
<div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
<img alt="Appliance Repair" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-blue-900/20"></div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20">
<div className="flex items-center gap-2 mb-8">
<div className="flex text-yellow-400">
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star-half"></i>
</div>
<span className="text-xl font-medium text-slate-900 ml-2">From 2035 reviews</span>
</div>
<div className="space-y-6">

<div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center font-semibold text-lg">N</div>
<div>
<p className="text-base font-semibold text-slate-900">Nancy Navatsyk</p>
<div className="flex text-yellow-400 text-xs">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-slate-400 ml-2">20 days ago</span>
</div>
</div>
</div>
<img alt="Google" className="h-5 opacity-60" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
</div>
<p className="text-lg text-slate-600">
                    Our Speed Queen 10 year old dryer seemingly had no heat and the timer was not working smoothly. We thought it was a heating problem but Aaron figured out that it was the timer which was not working properly...
                </p>
<button className="text-blue-600 text-sm font-medium mt-3 hover:underline">read more</button>
</div>

<div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold text-lg overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-base font-semibold text-slate-900">Grace Nicholas</p>
<div className="flex text-yellow-400 text-xs">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-slate-400 ml-2">23 days ago</span>
</div>
</div>
</div>
<img alt="Google" className="h-5 opacity-60" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
</div>
<p className="text-lg text-slate-600">
                    Complete Appliance technician communicated clearly the process &amp; expectations of the repair. They prepared for the visit to make sure that they have the appropriate parts that they thought they might need.
                </p>
<button className="text-blue-600 text-sm font-medium mt-3 hover:underline">read more</button>
</div>
</div>
<div className="mt-12 flex justify-center">
<div className="relative w-40 h-40 rounded-full border-4 border-slate-100 flex flex-col items-center justify-center bg-white shadow-xl hover:scale-105 transition-transform cursor-pointer">
<div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500 opacity-50"></div>
<span className="text-sm font-medium text-slate-500">Review us on</span>
<img alt="Google" className="h-8 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 bg-blue-900 border-t border-blue-800 p-4 z-50">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-blue-100 text-sm hidden sm:block">
                Questions? Call us at <strong className="text-white">(216) 364-2700</strong>
</div>
<button className="w-full sm:w-auto bg-white text-blue-900 text-lg font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition-colors uppercase tracking-tight">
                Make An Appointment
            </button>
</div>
</div>


    </>
  );
}
