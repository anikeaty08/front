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



document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const countEl = document.getElementById('count');
    const incBtn = document.getElementById('increment');
    const decBtn = document.getElementById('decrement');

    incBtn.addEventListener('click', () => {
        let value = parseInt(countEl.textContent, 10);
        if (value < 8) value++;
        countEl.textContent = value.toString().padStart(2, '0');
    });

    decBtn.addEventListener('click', () => {
        let value = parseInt(countEl.textContent, 10);
        if (value > 1) value--;
        countEl.textContent = value.toString().padStart(2, '0');
    });
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
      

<div className="fixed inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

<div className="relative max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">

<header className="flex items-center justify-between py-6 opacity-0 animate-fade-in-up">
<div className="text-sm font-medium tracking-[-0.02em] text-gray-300">PlanetFit</div>
<button className="group flex items-center gap-2 text-sm font-light transition-colors duration-300 text-gray-400 hover:text-gray-200">
<span>Menu</span>
<svg className="lucide lucide-menu w-4 h-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</header>

<div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

<section className="lg:col-span-7 space-y-8 opacity-0 animate-fade-in-up animate-delay-100">
<div className="space-y-6">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.9] tracking-[-0.04em] text-white">
<span className="font-extralight">PLANET</span><span className="font-medium">FIT</span>
<div className="text-3xl sm:text-4xl lg:text-5xl font-extralight mt-2 text-gray-400">
                        FITNESS FOR EVERY BODY
                    </div>
</h1>
<div className="flex items-start gap-6 max-w-md">
<div className="w-px h-16 bg-gradient-to-b to-transparent mt-2 from-gray-700"></div>
<p className="text-sm leading-relaxed font-light text-gray-400">
                        More than just movement — CoreFit is a space where every body is welcomed, supported, and empowered to grow, together.
                    </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-gray-800/50">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/20"></div>
<img alt="Group fitness" className="object-cover w-full h-[320px] sm:h-[420px] lg:h-[500px] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2fd6401-8811-41f8-a983-5ee75d32d114_1600w.jpg"/>
</div>
</section>

<aside className="lg:col-span-5 opacity-0 animate-fade-in-up animate-delay-200">
<div className="rounded-2xl backdrop-blur-xl border overflow-hidden relative bg-gray-900/40 border-gray-800/50">

<button className="absolute top-6 right-6 text-gray-500 transition-colors z-20 hover:text-gray-300">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="relative">
<img alt="Yoga session" className="object-cover w-full h-48" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d23b341-af81-4884-8d05-ffcf1ef7403f_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-gray-900/60"></div>

<div className="absolute bottom-4 left-6 flex items-center gap-3">
<span className="px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-light flex items-center gap-1.5 border bg-black/40 border-gray-700/50">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                            Medium Intensity
                        </span>
<span className="px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-light border bg-black/40 border-gray-700/50">
                            60 min
                        </span>
</div>
</div>

<div className="p-8 space-y-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white">Power Yoga</h2>
<p className="text-sm mt-2 leading-relaxed font-light text-gray-400">
                            A strength-focused practice that builds endurance, flexibility, muscle tone, and improves balance and body awareness.
                        </p>
</div>

<div className="flex items-center gap-4 pb-6 border-b border-gray-800/50">
<img alt="Instructor" className="w-12 h-12 rounded-full object-cover border border-gray-700/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ef91adf-fed8-48c0-b0fe-608779988348_320w.jpg"/>
<div>
<p className="text-sm font-medium text-gray-200">Emma Carter</p>
<p className="text-xs text-gray-500 font-light">Certified Yoga Instructor</p>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-light">10:00 AM, Saturday 12th</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-map-pin w-4 h-4 text-gray-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-light">15 King Street, London</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-users w-4 h-4 text-gray-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-light">4 of 8 spots remaining</span>
</div>
</div>

<div className="flex items-center justify-between py-4">
<span className="text-sm font-light text-gray-300">Participants</span>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/50" id="decrement">
<svg className="lucide lucide-minus w-3 h-3 text-gray-400" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="w-6 text-center font-medium text-white" id="count">01</span>
<button className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/50" id="increment">
<svg className="lucide lucide-plus w-3 h-3 text-gray-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<button className="group w-full flex items-center justify-center gap-3 rounded-xl text-sm font-medium px-6 py-4 transition-all duration-300 bg-white text-black hover:bg-gray-100">
<span>RESERVE SPOT</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</aside>
</div>

<section className="opacity-0 animate-fade-in-up animate-delay-300 mt-24">
<div className="overflow-hidden bg-gray-900/20 border-gray-800/30 border rounded-2xl backdrop-blur">
<div className="lg:p-12 pt-8 pr-8 pb-8 pl-8 space-y-12">
<div className="flex items-start justify-between gap-8 flex-wrap">
<h3 className="text-3xl lg:text-4xl font-light max-w-2xl leading-tight tracking-tight text-white">
                        Helping you feel stronger and move better — at every level.
                    </h3>
<button className="group text-sm font-light flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-gray-200">
<span className="tracking-wide">MEET THE TEAM</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="grid sm:grid-cols-3 gap-8">

<div className="group space-y-4 opacity-0 animate-fade-in-up animate-delay-400">
<div className="overflow-hidden rounded-xl border border-gray-800/30">
<img alt="Laura Mitchell" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c059ff7-8c38-464d-8f88-e40c0828fb57_800w.jpg"/>
</div>
<div className="space-y-1">
<p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-300">Laura Mitchell</p>
<p className="text-xs text-gray-500 font-light">Stretching &amp; Mobility Trainer</p>
</div>
</div>

<div className="group space-y-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<div className="overflow-hidden rounded-xl border border-gray-800/30">
<img alt="Olivia Scott" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c16f9345-2372-4e09-a3f1-83f6dbfd4032_800w.jpg"/>
</div>
<div className="space-y-1">
<p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-300">Olivia Scott</p>
<p className="text-xs text-gray-500 font-light">HIIT &amp; Functional Training</p>
</div>
</div>

<div className="group space-y-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
<div className="overflow-hidden rounded-xl border border-gray-800/30">
<img alt="Sophie Bennett" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49011eae-fe42-4e02-9f4b-45a2b90cc331_800w.jpg"/>
</div>
<div className="space-y-1">
<p className="text-xs font-medium tracking-[0.1em] uppercase text-gray-300">Sophie Bennett</p>
<p className="text-xs text-gray-500 font-light">Mat &amp; Reformer Pilates</p>
</div>
</div>
</div>

<div className="pt-16 border-t border-gray-800/30 space-y-8">
<h4 className="text-2xl font-light tracking-tight text-white">Upcoming Workshops</h4>
<div className="grid sm:grid-cols-2 gap-8">
<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
<h5 className="text-xl font-medium tracking-tight text-white mb-2">Mindful Movement Workshop</h5>
<p className="text-sm font-light text-gray-400 mb-4">
                                Explore techniques to improve body awareness and reduce stress through gentle movement and breathwork.
                            </p>
<div className="flex items-center gap-4 text-gray-400 text-xs font-light uppercase tracking-wide">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">May 15, 2024</span>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>10:00 AM - 12:00 PM</span>
</div>
</div>
<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
<h5 className="text-xl font-medium tracking-tight text-white mb-2">Strength &amp; Stability Workshop</h5>
<p className="text-sm font-light text-gray-400 mb-4">
                                Build foundational strength and improve your functional stability with targeted exercises and expert guidance.
                            </p>
<div className="flex items-center gap-4 text-gray-400 text-xs font-light uppercase tracking-wide">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>June 10, 2024</span>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>2:00 PM - 4:00 PM</span>
</div>
</div>
</div>
</div>
</div>
</div><section className="opacity-0 animate-fade-in-up animate-delay-400 mt-24">
<div className="overflow-hidden bg-gray-900/20 border-gray-800/30 border rounded-2xl backdrop-blur">
<div className="lg:p-12 pt-8 pr-8 pb-8 pl-8 space-y-12">
<div className="flex items-center justify-between flex-wrap gap-8">
<h3 className="text-3xl lg:text-4xl font-light max-w-2xl leading-tight tracking-tight text-white">
          Pricing Plans Designed for Every Body
        </h3>
<button className="group text-sm font-light flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-gray-200">
<span className="tracking-wide">SEE FULL DETAILS</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid sm:grid-cols-3 gap-8">
<div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur flex flex-col justify-between">
<div className="space-y-4">
<h4 className="text-xl font-medium tracking-tight text-white">Basic</h4>
<p className="text-sm font-light text-gray-400">
              Access to all beginner classes and community events.
            </p>
<div className="text-3xl font-semibold tracking-tight text-white">$29<span className="text-base font-light text-gray-400">/month</span></div>
<ul className="space-y-2 text-gray-400 text-sm font-light list-inside">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Unlimited beginner classes
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Access to community events
              </li>
<li className="flex items-center gap-2 text-gray-500 line-through">
<svg className="lucide lucide-x w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                Personal coaching sessions
              </li>
</ul>
</div>
<button className="mt-8 w-full py-3 rounded-xl bg-white text-black font-semibold tracking-tight text-base hover:bg-gray-100 transition-colors duration-300">
            Choose Basic
          </button>
</div>
<div className="bg-gray-800/60 rounded-xl p-8 backdrop-blur flex flex-col justify-between border border-indigo-500 shadow-lg">
<div className="space-y-4">
<h4 className="text-xl font-medium tracking-tight text-white">Pro</h4>
<p className="text-sm font-light text-gray-400">
              Includes all Basic features plus advanced classes and workshops.
            </p>
<div className="text-3xl font-semibold tracking-tight text-white">$59<span className="text-base font-light text-gray-400">/month</span></div>
<ul className="space-y-2 text-gray-400 text-sm font-light list-inside">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Unlimited beginner &amp; intermediate classes
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Access to workshops &amp; webinars
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                2 Personal coaching sessions/month
              </li>
</ul>
</div>
<button className="mt-8 w-full py-3 rounded-xl bg-indigo-500 text-white font-semibold tracking-tight text-base hover:bg-indigo-600 transition-colors duration-300">
            Choose Pro
          </button>
</div>
<div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur flex flex-col justify-between">
<div className="space-y-4">
<h4 className="text-xl font-medium tracking-tight text-white">Elite</h4>
<p className="text-sm font-light text-gray-400">
              All Pro features plus unlimited personal coaching and premium support.
            </p>
<div className="text-3xl font-semibold tracking-tight text-white">$99<span className="text-base font-light text-gray-400">/month</span></div>
<ul className="space-y-2 text-gray-400 text-sm font-light list-inside">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Unlimited classes of all levels
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Unlimited personal coaching
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7"></path></svg>
                Priority support &amp; perks
              </li>
</ul>
</div>
<button className="mt-8 w-full py-3 rounded-xl bg-white text-black font-semibold tracking-tight text-base hover:bg-gray-100 transition-colors duration-300">
            Choose Elite
          </button>
</div>
</div>
</div>
</div>
</section>
</section>
</div><footer className="mt-24 border-t border-gray-800/50 pt-12 pb-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left space-y-2">
<h4 className="text-sm font-semibold tracking-tight text-gray-400">PlanetFit</h4>
<p className="text-xs font-light text-gray-500 max-w-xs">Empowering every body to move, grow, and thrive with expert-led fitness classes and community support.</p>
</div>
<nav className="flex gap-8 text-sm font-light text-gray-400">
<a className="hover:text-gray-200 transition-colors" href="#">About Us</a>
<a className="hover:text-gray-200 transition-colors" href="#">Classes</a>
<a className="hover:text-gray-200 transition-colors" href="#">Schedule</a>
<a className="hover:text-gray-200 transition-colors" href="#">Contact</a>
<a className="hover:text-gray-200 transition-colors" href="#">FAQs</a>
</nav>
<div className="flex gap-6">
<a aria-label="Twitter" className="text-gray-400 hover:text-gray-200 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Facebook" className="text-gray-400 hover:text-gray-200 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Instagram" className="text-gray-400 hover:text-gray-200 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div className="mt-12 border-t border-gray-800/30 pt-6 text-center text-xs font-light text-gray-500">
    © 2024 PlanetFit. All rights reserved.
  </div>
</footer>


    </>
  );
}
