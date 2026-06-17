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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2 cursor-pointer">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<iconify-icon height="24" icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">FLOWTECH<span className="text-slate-400 font-normal">BC</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1" href="#ai-assistant">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-linear"></iconify-icon>
                        Smart Support
                    </a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#membership">Plans</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex flex-col items-end leading-none group" href="tel:+18005550199">
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold group-hover:text-blue-600">24/7 Emergency</span>
<span className="text-sm font-semibold tracking-tight">1-800-555-0199</span>
</a>
<button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all shadow-sm shadow-orange-200 flex items-center gap-2">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                        Book Now
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Available for Emergency Response in BC
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Fast, Reliable Plumbing Services in <span className="text-blue-600">British Columbia</span>.
                    </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Licensed experts for your home and business. From leak detection to full installations, we combine traditional craftsmanship with modern technology for faster service.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<button className="bg-slate-900 hover:bg-slate-800 text-white text-base font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                            Book a Plumber
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-base font-medium py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2">
                            Get Free Quote
                        </button>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-slate-500 border-t border-slate-200 pt-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Licensed &amp; Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="20"></iconify-icon>
                            Local BC Pros
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                            1 Hr Response
                        </div>
</div>
</div>

<div className="relative hidden lg:block">

<div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -bottom-12 -left-12 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
<img alt="Plumber fixing sink" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
<div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:microphone-3-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">New Feature</p>
<p className="text-sm font-medium text-slate-800">Use our AI Voice Agent to book instantly.</p>
</div>
<div className="ml-auto">
<iconify-icon className="text-slate-400" icon="solar:round-alt-arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Complete Plumbing Solutions</h2>
<p className="text-slate-600">From emergency repairs to scheduled maintenance, our Red Seal certified plumbers handle it all.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Emergency Repairs</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">24/7 rapid response for burst pipes, severe leaks, and overflowing toilets. We arrive fast to minimize damage.</p>
<a className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700" href="#">
                        Book Emergency
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Leak Detection</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Advanced acoustic and thermal technology to find hidden leaks behind walls or underground without destruction.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Detect Leaks
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Drain Cleaning</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Professional hydro-jetting and snaking to clear stubborn clogs in sinks, showers, and main sewer lines.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Clear Drains
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Water Heaters</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Installation and repair of tankless and traditional water heaters. Ensure hot water reliability year-round.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Fix Heater
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wrench-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Fixture Installation</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Upgrade your kitchen and bathroom with modern faucets, toilets, sinks, and showerheads installed perfectly.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Install Fixtures
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Sump Pumps</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Protect your basement from flooding with sump pump maintenance, battery backups, and backflow prevention.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Protect Home
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
<div className="text-center lg:text-left">
<div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Licensed in BC</h4>
<p className="text-sm text-slate-500">Fully insured and Red Seal certified technicians you can trust.</p>
</div>
<div className="text-center lg:text-left">
<div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Upfront Pricing</h4>
<p className="text-sm text-slate-500">Know the cost before we start. No hidden fees or surprises.</p>
</div>
<div className="text-center lg:text-left">
<div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:broom-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Clean &amp; Respectful</h4>
<p className="text-sm text-slate-500">We wear shoe covers and leave your home cleaner than we found it.</p>
</div>
<div className="text-center lg:text-left">
<div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">5-Star Service</h4>
<p className="text-sm text-slate-500">Hundreds of happy homeowners across British Columbia.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-6 rounded-lg transition-all shadow-md shadow-blue-200">
                    Schedule Service Today
                </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="ai-assistant">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:cpu-linear" width="14"></iconify-icon>
                        Next-Gen Plumbing Support
                    </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                        Plumbing Problem? <br/>
<span className="text-blue-400">Our Virtual Assistant</span> is Ready 24/7.
                    </h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Skip the hold music. Talk to our smart AI assistant or use live chat to instantly book appointments, get rough estimates, or report emergencies at 3 AM.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            No waiting on hold - instant response
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Schedule appointments directly via voice
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-400 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Troubleshoot minor issues with AI guidance
                        </li>
</ul>
<button className="bg-blue-500 hover:bg-blue-400 text-white text-base font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-blue-900/50 flex items-center gap-2">
                        Start Chatting Now
                        <iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="relative">
<div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl relative">

<div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-4">
<div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center relative">
<iconify-icon className="text-white" icon="solar:microphone-3-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 h-3 w-3 bg-green-500 border-2 border-slate-800 rounded-full"></span>
</div>
<div>
<h4 className="text-white font-medium">FlowTech Virtual Assistant</h4>
<p className="text-xs text-blue-300">Online • Responds Instantly</p>
</div>
</div>

<div className="space-y-4">

<div className="flex gap-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-400" icon="solar:robot-linear" width="16"></iconify-icon>
</div>
<div className="bg-slate-700/50 p-3 rounded-2xl rounded-tl-none text-slate-200 text-sm max-w-[85%]">
                                    Hello! I noticed you're in Vancouver. Do you have a plumbing emergency or need to schedule a routine checkup?
                                </div>
</div>

<div className="flex gap-3 justify-end">
<div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-white text-sm max-w-[85%]">
                                    My kitchen sink is leaking badly. I need someone ASAP.
                                </div>
</div>

<div className="flex gap-3 items-center">
<div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-400" icon="solar:robot-linear" width="16"></iconify-icon>
</div>
<div className="flex gap-1 items-end h-6">
<div className="w-1 bg-blue-400 rounded-full voice-wave" style={{animationDelay: '0s'}}></div>
<div className="w-1 bg-blue-400 rounded-full voice-wave" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-blue-400 rounded-full voice-wave" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-blue-400 rounded-full voice-wave" style={{animationDelay: '0.3s'}}></div>
</div>
</div>

<div className="flex gap-3">
<div className="bg-slate-700/50 p-3 rounded-2xl rounded-tl-none text-slate-200 text-sm max-w-[85%] ml-11">
                                    I can have a licensed technician at your home within 45 minutes. Would you like to confirm this booking?
                                </div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-700 flex gap-2">
<div className="h-10 flex-grow bg-slate-900 rounded-lg border border-slate-600"></div>
<div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="flex justify-center gap-1 text-orange-400 mb-3">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Trusted by BC Families</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-slate-50 rounded-2xl">
<p className="text-slate-600 mb-6 italic">"The voice assistant feature is incredible. I booked a plumber at 11 PM on a Sunday, and they showed up Monday morning sharp. Fixed the leak quickly."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center font-semibold text-slate-600">SJ</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Vancouver, BC</p>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl">
<p className="text-slate-600 mb-6 italic">"Super clean work. The technician wore boot covers and explained everything clearly. Pricing was exactly what they quoted upfront."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center font-semibold text-slate-600">MR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Mike Ross</p>
<p className="text-xs text-slate-500">Burnaby, BC</p>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl">
<p className="text-slate-600 mb-6 italic">"We use FlowTech for our strata property maintenance. Reliable, professional, and the digital reporting is very helpful."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center font-semibold text-slate-600">EL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Emily Liu</p>
<p className="text-xs text-slate-500">Richmond, BC</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-blue-600 font-medium hover:text-blue-700 flex items-center justify-center gap-2 mx-auto">
                    Book Your Plumbing Service
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="membership">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
<div className="p-10 md:w-3/5">
<h3 className="text-2xl font-semibold text-slate-900 mb-2">The FlowTech Care Plan</h3>
<p className="text-slate-600 mb-6 text-sm">Prevent emergencies before they happen. Join our membership for peace of mind.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Annual whole-home plumbing inspection
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Priority scheduling for emergencies
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            15% Discount on all repairs
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Free water heater flush
                        </li>
</ul>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 px-6 rounded-lg w-full md:w-auto">
                        Join Care Plan
                    </button>
</div>
<div className="bg-blue-600 p-10 md:w-2/5 flex flex-col justify-center text-white text-center md:text-left">
<div className="mb-4">
<iconify-icon icon="solar:shield-star-linear" width="48"></iconify-icon>
</div>
<p className="text-blue-100 text-sm mb-1">Starting at just</p>
<p className="text-4xl font-bold mb-2">$19<span className="text-lg font-normal text-blue-200">/mo</span></p>
<p className="text-blue-100 text-xs">Save hundreds on potential repairs.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Serving the Lower Mainland</h2>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon> Vancouver
                </span>
<span className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon> Burnaby
                </span>
<span className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon> Richmond
                </span>
<span className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon> Surrey
                </span>
<span className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon> North Vancouver
                </span>
<span className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon> Coquitlam
                </span>
</div>
<div className="mt-8">
<a className="text-blue-600 text-sm font-medium hover:underline" href="#">Check Service Availability</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-center">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">Need a Plumber You Can Trust? We’re Ready.</h2>
<p className="text-slate-400 mb-10 text-lg">Licensed, insured, and backed by smart technology for the fastest response in BC.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-orange-500 hover:bg-orange-600 text-white text-base font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-orange-900/50">
                    Book Service Now
                </button>
<button className="bg-transparent border border-slate-600 hover:bg-slate-800 text-white text-base font-medium py-3 px-8 rounded-lg transition-all">
                    Call 1-800-555-0199
                </button>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">FLOWTECH</span>
</div>
<p className="text-slate-500 text-sm mb-4">Modern plumbing solutions for British Columbia homes and businesses.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400" href="#">Emergency Repair</a></li>
<li><a className="hover:text-blue-400" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-blue-400" href="#">Water Heaters</a></li>
<li><a className="hover:text-blue-400" href="#">Leak Detection</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400" href="#">About Us</a></li>
<li><a className="hover:text-blue-400" href="#">Reviews</a></li>
<li><a className="hover:text-blue-400" href="#">Careers</a></li>
<li><a className="hover:text-blue-400" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 1-800-555-0199</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> help@flowtechbc.ca</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Vancouver, BC</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
<p>© 2024 FlowTech Plumbing BC. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg shadow-blue-600/40 flex items-center justify-center transition-all hover:scale-105 group">
<iconify-icon className="group-hover:hidden" height="28" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<iconify-icon className="hidden group-hover:block" height="28" icon="solar:microphone-3-linear" width="28"></iconify-icon>
</button>

<div className="absolute bottom-full right-0 mb-3 w-48 bg-white text-slate-800 text-xs font-medium p-3 rounded-lg shadow-xl border border-slate-100 hidden md:block">
            Chat or speak with our 24/7 Virtual Assistant
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-100"></div>
</div>
</div>

    </>
  );
}
