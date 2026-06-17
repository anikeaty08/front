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
      

<header className="relative overflow-hidden w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-6 lg:px-8 border-b border-stone-200/60 bg-white">

<div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-100/50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-stone-100 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
</div>
<nav className="absolute top-0 w-full max-w-7xl mx-auto py-6 px-6 flex justify-between items-center z-10">
<div className="font-medium tracking-tight text-lg text-emerald-900 uppercase">Wellness Expo</div>
<a className="hidden md:inline-flex text-sm font-medium text-stone-500 hover:text-emerald-700 transition-colors" href="#tickets">Get Tickets</a>
</nav>
<div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Upcoming: April 2026
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1]">
                Inspire a Healthier Life at <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-900">The Wellness Expo</span>, Lagos
            </h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
                Join Nigeria’s leading gathering of wellness brands, fitness innovators, practitioners, and conscious consumers—all exploring holistic solutions for a balanced lifestyle.
            </p>
<div className="flex flex-col items-center gap-2 text-sm text-stone-500 font-medium">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span>April 22nd, 2026</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>8:00 AM–8:03 PM WAT</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>Landmark Event Center, Lagos</span>
</div>
</div>

<div className="grid grid-cols-4 gap-4 md:gap-8 py-6 max-w-xl mx-auto">
<div className="flex flex-col items-center">
<span className="text-2xl md:text-3xl font-medium text-stone-900 tabular-nums tracking-tight">131</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Days</span>
</div>
<div className="flex flex-col items-center border-l border-stone-200 pl-4 md:pl-8">
<span className="text-2xl md:text-3xl font-medium text-stone-900 tabular-nums tracking-tight">20</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Hours</span>
</div>
<div className="flex flex-col items-center border-l border-stone-200 pl-4 md:pl-8">
<span className="text-2xl md:text-3xl font-medium text-stone-900 tabular-nums tracking-tight">12</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Mins</span>
</div>
<div className="flex flex-col items-center border-l border-stone-200 pl-4 md:pl-8">
<span className="text-2xl md:text-3xl font-medium text-stone-900 tabular-nums tracking-tight">42</span>
<span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Secs</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2 text-sm">
                    Get Your Ticket
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-sm shadow-sm">
                    Become a Partner / Exhibitor
                </button>
</div>
</div>
</header>

<section className="bg-white pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-3xl mr-auto ml-auto space-y-12">
<div className="space-y-6">
<span className="text-emerald-600 font-medium tracking-wide uppercase text-xs">Our Mission</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">About The Wellness Expo</h2>
<p className="leading-relaxed text-lg font-light text-stone-500">
                    The Wellness Expo is a dynamic gathering designed to inspire healthier living and connect Nigerians to the world of wellness, fitness, nutrition, aesthetics, and preventive healthcare. It brings together leading brands, innovators, practitioners, and consumers to explore solutions that support a balanced, holistic lifestyle.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-y border-stone-200/60">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-12 text-center">What to Expect</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
<svg aria-hidden="true" data-icon="lucide:compass" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 tracking-tight">Discover</h3>
<p className="text-sm text-stone-500 leading-relaxed">Explore leading brands in fitness, nutrition, beauty, mental health, and preventive care.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 tracking-tight">Learn</h3>
<p className="text-sm text-stone-500 leading-relaxed">Attend expert-led sessions, workshops, and keynote discussions.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
<svg aria-hidden="true" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 tracking-tight">Connect</h3>
<p className="text-sm text-stone-500 leading-relaxed">Network with wellness innovators, practitioners, and like-minded individuals.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 tracking-tight">Experience</h3>
<p className="text-sm text-stone-500 leading-relaxed">Enjoy demos, sampling booths, consultations, and immersive wellness activities.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="tickets">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 space-y-2">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Choose Your Ticket</h2>
<p className="text-stone-500">Unlock access to unforgettable wellness experiences.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-white rounded-3xl p-8 border border-stone-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium text-stone-900">VIP PASS</h3>
<p className="text-xs font-medium text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded mt-2">All Access</p>
</div>
<div className="text-right">
<span className="block text-2xl font-medium text-stone-900 tracking-tight">₦26,125</span>
<span className="text-xs text-stone-400">Incl. ₦1,125 fee</span>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Access to main conference
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Access to exhibition area
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Conference materials
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Complimentary tea break
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Priority seating
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Exclusive networking
                        </div>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">

<div className="flex items-center border border-stone-200 rounded-full h-10 px-1 w-28 justify-between">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-sm font-medium text-stone-900">1</span>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<button className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white h-10 rounded-full text-sm font-medium transition-colors">
                            Get VIP Ticket
                        </button>
</div>
</div>

<div className="bg-stone-50/50 rounded-3xl p-8 border border-stone-200 hover:border-stone-300 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium text-stone-900">Exhibition Pass</h3>
<p className="text-xs font-medium text-stone-500 bg-stone-100 inline-block px-2 py-1 rounded mt-2">General Entry</p>
</div>
<div className="text-right">
<span className="block text-2xl font-medium text-stone-900 tracking-tight">Free</span>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Access to exhibition area
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Product demos
                        </div>
<div className="flex items-start gap-3 text-sm text-stone-600">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Brand showcases
                        </div>
<div className="h-[72px]"></div> 
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-200">
<div className="flex items-center border border-stone-200 rounded-full h-10 px-1 w-28 justify-between bg-white">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-sm font-medium text-stone-900">1</span>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<button className="flex-1 bg-white border border-stone-200 hover:bg-stone-50 text-stone-800 h-10 rounded-full text-sm font-medium transition-colors">
                            Get Free Pass
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-emerald-900/5 border-y border-stone-200/60">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-stone-200/50">
<div className="px-4 py-4 space-y-2">
<svg aria-hidden="true" data-icon="lucide:calendar-clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
<h4 className="text-sm font-medium uppercase tracking-wide text-stone-400">Date &amp; Time</h4>
<p className="text-lg font-medium text-stone-800">April 22nd, 2026</p>
<p className="text-stone-500">8:00 AM WAT</p>
</div>
<div className="px-4 py-4 space-y-2">
<svg aria-hidden="true" data-icon="lucide:map" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="text-sm font-medium uppercase tracking-wide text-stone-400">Location</h4>
<p className="text-lg font-medium text-stone-800">Landmark Event Center</p>
<p className="text-stone-500">Lagos, Nigeria</p>
</div>
<div className="px-4 py-4 space-y-2 relative">
<svg aria-hidden="true" data-icon="lucide:building-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
<h4 className="text-sm font-medium uppercase tracking-wide text-stone-400">Hosted By</h4>
<p className="text-lg font-medium text-stone-800">HCA Consults</p>
<a className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800 font-medium" href="#">
                        Contact Organizers <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

<div className="group">
<div className="h-px w-full bg-stone-200 mb-6 group-hover:bg-emerald-500/50 transition-colors"></div>
<div className="text-emerald-700 mb-3">
<svg aria-hidden="true" data-icon="lucide:user" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">For Individuals</h3>
<p className="text-stone-500 leading-relaxed text-sm">
                        Improve your wellbeing with expert insights, product discoveries, and real wellness tools designed for your daily life.
                    </p>
</div>

<div className="group">
<div className="h-px w-full bg-stone-200 mb-6 group-hover:bg-emerald-500/50 transition-colors"></div>
<div className="text-emerald-700 mb-3">
<svg aria-hidden="true" data-icon="lucide:store" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">For Brands</h3>
<p className="text-stone-500 leading-relaxed text-sm">
                        Showcase innovations, expand awareness, and connect meaningfully with thousands of wellness-focused attendees.
                    </p>
</div>

<div className="group">
<div className="h-px w-full bg-stone-200 mb-6 group-hover:bg-emerald-500/50 transition-colors"></div>
<div className="text-emerald-700 mb-3">
<svg aria-hidden="true" data-icon="lucide:briefcase" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">For Professionals</h3>
<p className="text-stone-500 leading-relaxed text-sm">
                        Learn, collaborate, and network with thought leaders shaping the future of wellness in Nigeria.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-emerald-900 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-800 via-emerald-900 to-stone-950 opacity-80"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Be Part of Nigeria’s Biggest Wellness Gathering
            </h2>
<p className="text-lg text-emerald-100 font-light max-w-xl mx-auto">
                Reserve your seat today and take the next step toward a healthier, more connected lifestyle.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="bg-white text-emerald-900 hover:bg-stone-100 px-8 py-3.5 rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-2">
                    Register Now
                </button>
<button className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 text-white hover:bg-emerald-800 px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                    Apply to Exhibit
                </button>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-16 pb-8 px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="font-medium tracking-tight text-lg text-emerald-900 uppercase">Wellness Expo</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-emerald-700 transition-colors" href="#">Contact</a>
<a className="hover:text-emerald-700 transition-colors" href="#">FAQs</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Terms &amp; Conditions</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 border-t border-stone-200 pt-8">
<p>© 2026 The Wellness Expo. All rights reserved.</p>
<div className="flex items-center gap-1">
<span>Powered by</span>
<span className="font-medium text-stone-600">HCA Consults</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
