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
      

<div className="bg-slate-950 text-slate-400 text-xs py-2 border-b border-slate-800 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center space-x-6">
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
<i className="w-3 h-3" data-lucide="phone"></i> (410) 432-6140
                </span>
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
<i className="w-3 h-3" data-lucide="mail"></i> info@rwfitness.com
                </span>
</div>
<div className="flex items-center space-x-6">
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="clock"></i> M-F 5am-9pm</span>
<span>Sat 7am-7pm</span>
<span>Sun 8am-5pm</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="group flex flex-col leading-none" href="#">
<span className="text-2xl font-semibold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">ROCKWELL</span>
<span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">Fitness</span>
</a>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="text-slate-900 hover:text-blue-600 transition-colors" href="#">HOME</a>
<div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors">
                    GYM MEMBERSHIPS <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors">
                    CLASSES <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors">
                    PERSONAL TRAINERS <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<a className="hover:text-blue-600 transition-colors" href="#">RED LIGHT THERAPY</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">Sign In</a>
<a className="px-5 py-2.5 text-sm font-medium bg-lime-400 text-slate-900 rounded-full hover:bg-lime-300 transition-all shadow-sm" href="#">FREE CLASS</a>
<a className="px-5 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-sm" href="#">FREE TRIAL</a>
</div>

<button className="lg:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
<div className="md:max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">About Our Gym</span>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                    GET IN THE BEST <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-300">SHAPE EVER</span>
</h1>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2" href="#">
                        SIGN UP ONLINE <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 flex gap-4 hidden md:flex">
<button className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-md"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-md"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</header>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-snug mb-6">
                        YOU DON'T NEED AN EXPENSIVE GYM. <br/>
<span className="text-slate-400">YOU NEED A PLACE THAT MAKES YOU WANT TO WORK OUT.</span>
</h2>
<div className="space-y-4 text-lg text-slate-600 mb-8">
<p>Introducing BYOM:</p>
<p>Build Your Own Membership</p>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-all" href="#">
                        Learn More
                    </a>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
<img alt="Workout Group" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">WHY CHOOSE US?</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        We provide all the bells and whistles that the big gyms provide, but in the comfort of a friendly atmosphere where every member feels at home and at a fraction of the cost.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Friendly atmosphere
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Certified Personal Trainers
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Affordable memberships
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Infrared Sauna
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Red Light Therapy
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Physical therapy on-site
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Smoothie Bar
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Variety of classes
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Yoga
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm md:text-base">
<span className="p-1 rounded-full bg-blue-100 text-blue-600"><i className="w-3 h-3" data-lucide="check"></i></span> Spinning
                        </li>
</ul>
<div className="mt-10">
<a className="px-6 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-sm" href="#">
                            GET STARTED
                        </a>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Classes For Everyone</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            From Yoga and Spinning to HIIT and Powerpump, we offer something for everyone.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<i className="w-6 h-6" data-lucide="dumbbell"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Certified Trainers</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Our CPT's offer comprehensive training, Functional Fitness Training, Weight Loss, Nutrition and more.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2 md:w-1/2">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Amenities</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Featuring a smoothie bar, spray tanning services, infrared sauna, locker rooms and more!
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                    CLASSES AND TRAINING <br/> EXERCISE
                </h2>
<p className="text-lg text-slate-600">
                    Our classes are cutting-edge workouts designed through proven exercise science. The classes feature high-intensity workouts, fun music, and energetic coaches.
                </p>
</div>
<div className="relative group">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group/card cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shadow-sm border border-slate-100">
<img alt="Spinning" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors"></div>
</div>
<div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-100">
<h3 className="text-lg font-medium text-slate-900">Spinning</h3>
<i className="w-5 h-5 text-slate-400 group-hover/card:text-blue-600 transition-colors" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group/card cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shadow-sm border border-slate-100">
<img alt="Free weights" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-100">
<h3 className="text-lg font-medium text-slate-900">Free weights</h3>
<i className="w-5 h-5 text-slate-400 group-hover/card:text-blue-600 transition-colors" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group/card cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shadow-sm border border-slate-100">
<img alt="Personal training" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-100">
<h3 className="text-lg font-medium text-slate-900">Personal training</h3>
<i className="w-5 h-5 text-slate-400 group-hover/card:text-blue-600 transition-colors" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<button className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-slate-100 text-slate-500 hover:text-blue-600 hidden md:flex z-10">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<button className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-slate-100 text-slate-500 hover:text-blue-600 hidden md:flex z-10">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-10">TAKE A VIRTUAL TOUR OF OUR GYM</h2>

<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-300 aspect-video mb-12 bg-slate-900 group cursor-pointer">

<img className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute top-6 left-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">R</div>
<span className="text-white font-medium drop-shadow-md">Rockwell Fitness Virtual Gym Tour</span>
</div>
</div>

<div className="max-w-2xl mx-auto">
<h3 className="text-2xl font-semibold text-slate-900 mb-6">GIVE YOURSELF THE GIFT OF <br/> HEALTH AND WELLNESS.</h3>
<a className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold text-sm rounded-lg hover:bg-blue-600 transition-colors shadow-sm mb-6" href="#">
                    START TODAY
                </a>
<p className="text-slate-500 text-sm">
                    It takes 30 days to make a habit.<br/>
                    What are you waiting for?
                </p>
</div>
</div>
</section>

<section className="relative bg-slate-900 text-white">

<div className="relative py-24 px-6 text-center overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight mb-4">CLASS SCHEDULE. <br/> TRAIN WITH US.</h2>
<p className="text-slate-300 text-lg mb-8">
                    Here's a sneak peek of the classes we offer. <br/>
                    This is an example of our recent scheduled classes. <br/>
                    Please click the button below to view most up to date schedule.
                </p>
<a className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors" href="#">
                    VIEW FULL SCHEDULE
                </a>
</div>
</div>

<div className="bg-white text-slate-900 pb-20">
<div className="max-w-5xl mx-auto">

<div className="flex flex-wrap border-b border-slate-200">
<button className="flex-1 py-4 text-xs font-bold uppercase tracking-wider bg-lime-400 text-slate-900 border-r border-slate-300/50">Monday</button>
<button className="flex-1 py-4 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 text-slate-500 border-r border-slate-200">Tuesday</button>
<button className="flex-1 py-4 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 text-slate-500 border-r border-slate-200">Wednesday</button>
<button className="flex-1 py-4 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 text-slate-500 border-r border-slate-200">Thursday</button>
<button className="flex-1 py-4 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 text-slate-500">Friday</button>
</div>

<div className="divide-y divide-slate-100 bg-white">

<div className="flex flex-col md:flex-row md:items-center justify-between py-6 px-6 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-1/3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-semibold text-slate-700">9:00 - 10:30</span>
</div>
<div className="flex items-center justify-between w-full md:w-2/3 mt-2 md:mt-0">
<span className="text-sm font-semibold text-slate-900">Boxing Fitness Class</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between py-6 px-6 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-1/3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-semibold text-slate-700">9:15 - 10:30</span>
</div>
<div className="flex items-center justify-between w-full md:w-2/3 mt-2 md:mt-0">
<span className="text-sm font-semibold text-slate-900">Spin and More</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between py-6 px-6 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-1/3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-semibold text-slate-700">9:30 - 10:30</span>
</div>
<div className="flex items-center justify-between w-full md:w-2/3 mt-2 md:mt-0">
<span className="text-sm font-semibold text-slate-900">Muscle Pump-Lite</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between py-6 px-6 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-1/3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-semibold text-slate-700">6:00 - 7:30</span>
</div>
<div className="flex items-center justify-between w-full md:w-2/3 mt-2 md:mt-0">
<span className="text-sm font-semibold text-slate-900">Introduction to Brazilian Jiu-Jitsu</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between py-6 px-6 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-1/3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-semibold text-slate-700">7:45 - 9:30</span>
</div>
<div className="flex items-center justify-between w-full md:w-2/3 mt-2 md:mt-0">
<span className="text-sm font-semibold text-slate-900">Brazilian Jiu-Jitsu with Carlos and Aaror</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&amp'}}>
<div className="absolute inset-0 bg-slate-900/70"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4">
                YOU CAN DO IT. <br/> START TODAY.
            </h2>
<p className="text-white/80 text-lg">Push your personal limits and build new skills.</p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">
                TAKE A LOOK INSIDE. <br/> COME JOIN US!
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-12">

<div className="relative group aspect-square overflow-hidden rounded-lg bg-slate-100">
<img className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-slate-100">
<img className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-slate-100">
<img className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-slate-100">
<img className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-slate-100">
<img className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-slate-100">
<img className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col items-center">
<a className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-sm mb-4" href="#">
                    LEARN MORE
                </a>
<p className="text-slate-400 text-sm">Push your personal limits and build new skills.</p>
</div>
</div>
</section>

<section className="bg-slate-50 border-t border-slate-200">

<div className="w-full h-64 md:h-80 overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>

<div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white p-2 mb-8 h-[300px] relative">

<img alt="Map Location" className="w-full h-full object-cover rounded-lg opacity-80" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-6">LOCATION AND CONTACT INFO</h3>
<div className="space-y-3 text-slate-600">
<p className="font-medium text-slate-800">Phone: 410-432-6140</p>
<a className="text-blue-600 hover:text-blue-500 hover:underline" href="#">Click For Directions</a>
</div>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">HOURS OF OPERATION</h3>
<div className="divide-y divide-slate-200 border-t border-b border-slate-200 bg-white rounded-lg shadow-sm">
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">5am - 8pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Monday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">5am - 8pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Tuesday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">5am - 8pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Wednesday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">5am - 8pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Thursday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">5am - 8pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Friday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">7am - 7pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Saturday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span className="text-sm font-medium text-slate-900">8am - 6pm</span>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-semibold text-slate-900">Sunday</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-slate-200 py-8 text-center text-slate-400 text-sm">
<p>© 2023 Rockwell Fitness. All rights reserved.</p>
</div>
</section>


    </>
  );
}
