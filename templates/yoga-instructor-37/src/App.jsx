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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-noise mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center group-hover:bg-stone-800 transition-colors duration-300">
<iconify-icon className="text-stone-600 group-hover:text-stone-50 transition-colors duration-300" icon="solar:lotus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter uppercase text-stone-900">Aura.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-wide" href="#practice">Practice</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-wide" href="#philosophy">Philosophy</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-wide" href="#schedule">Schedule</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 transition-all duration-300 group" href="#book">
<span className="text-xs font-medium text-stone-800">Book Session</span>
<iconify-icon className="text-stone-400 group-hover:text-stone-800 transition-colors" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden p-2 text-stone-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-stone-500 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Now accepting new students</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-stone-900 leading-[0.95]">
                    Cultivating <br/>
<span className="font-serif italic font-normal text-stone-500">stillness</span> in <br/>
                    motion.
                </h1>
<p className="text-lg md:text-xl text-stone-500 font-light max-w-lg leading-relaxed">
                    A holistic approach to Vinyasa and restorative yoga, designed to realign the physical body and quiet the modern mind.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="h-12 px-8 rounded bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all flex items-center gap-2">
                        Start Practice
                    </button>
<button className="h-12 w-12 rounded border border-stone-200 flex items-center justify-center hover:border-stone-400 transition-colors group">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="md:col-span-5 relative">

<div className="aspect-[4/5] rounded-lg overflow-hidden relative group">
<img alt="Yoga Pose" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-stone-900/10 rounded-lg pointer-events-none"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded border border-stone-100 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Next Class</span>
<iconify-icon className="text-stone-400" icon="solar:clock-square-linear" width="16"></iconify-icon>
</div>
<div className="text-sm font-medium text-stone-900">Morning Flow • 07:00 AM</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-8">
<div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">500+ Students</span>
</div>
<div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">RYT 500 Certified</span>
</div>
<div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Online &amp; In-Studio</span>
</div>
<div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Holistic Healing</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="practice">
<div className="max-w-6xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">Focus Areas</h2>
<p className="text-stone-500 font-light max-w-md">Curated methodologies to enhance flexibility, strength, and mental clarity.</p>
</div>
<a className="text-sm font-medium text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors w-fit" href="#">View all classes</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-stone-400" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded bg-stone-50 flex items-center justify-center mb-6 text-stone-600">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Vinyasa Flow</h3>
<p className="text-sm text-stone-500 leading-relaxed">Dynamic sequences linking breath with movement to build heat and endurance.</p>
</div>

<div className="group p-8 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-stone-400" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded bg-stone-50 flex items-center justify-center mb-6 text-stone-600">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Hatha Grounding</h3>
<p className="text-sm text-stone-500 leading-relaxed">Slower paced postures held for longer periods to improve alignment and balance.</p>
</div>

<div className="group p-8 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-stone-400" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded bg-stone-50 flex items-center justify-center mb-6 text-stone-600">
<iconify-icon icon="solar:mind-map-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Meditation</h3>
<p className="text-sm text-stone-500 leading-relaxed">Guided mindfulness practices to reduce stress and cultivate inner presence.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-lg overflow-hidden relative group">
<img alt="Meditation" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-8">
<p className="text-stone-100 text-sm font-medium uppercase tracking-wide mb-2">Philosophy</p>
<h3 className="text-white text-2xl md:text-3xl font-serif italic">"Yoga is not about touching your toes. It is about what you learn on the way down."</h3>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-lg border border-stone-100 bg-stone-50 p-8 flex flex-col justify-center">
<iconify-icon className="text-stone-400 mb-4" icon="solar:quote-up-square-linear" strokeWidth="1" width="32"></iconify-icon>
<h4 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Intentional Living</h4>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                        My teaching philosophy is rooted in the belief that the mat is a mirror. How we handle challenges in a pose reflects how we handle challenges in life.
                    </p>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-lg border border-stone-100 bg-white p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl font-light text-stone-900">07</span>
<iconify-icon className="text-amber-500/80" icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-stone-400 uppercase tracking-widest">Years Experience</p>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-lg bg-stone-900 p-6 flex flex-col justify-between text-stone-50 group cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-stone-400 group-hover:text-white transition-colors" icon="solar:letter-linear" width="24"></iconify-icon>
<iconify-icon className="text-stone-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1">Get in touch</h4>
<p className="text-xs text-stone-400">Collaboration &amp; Retreats</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-t border-stone-200" id="schedule">
<div className="max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Weekly Schedule</h2>

<div className="flex items-center gap-3 bg-white border border-stone-200 rounded-full p-1 pl-4">
<span className="text-xs font-medium text-stone-500">In-Studio</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stone-800"></div>
</label>
<span className="text-xs font-medium text-stone-900 pr-3">Online</span>
</div>
</div>
<div className="flex flex-col">

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-200 hover:bg-white px-4 -mx-4 rounded transition-colors duration-200 cursor-default">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded bg-stone-100 text-stone-900 border border-stone-200/50">
<span className="text-xs font-bold uppercase">Mon</span>
<span className="text-xs font-light text-stone-500">09</span>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Morning Vinyasa</h4>
<div className="flex items-center gap-2 mt-1">
<iconify-icon className="text-stone-400" icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs text-stone-500">Urban Om Studio</span>
</div>
</div>
</div>
<div className="flex items-center gap-8 mt-4 md:mt-0 pl-[72px] md:pl-0">
<span className="text-sm font-medium text-stone-600">07:00 AM - 08:00 AM</span>
<button className="px-4 py-1.5 rounded border border-stone-200 text-xs font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Book</button>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-200 hover:bg-white px-4 -mx-4 rounded transition-colors duration-200 cursor-default">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded bg-stone-100 text-stone-900 border border-stone-200/50">
<span className="text-xs font-bold uppercase">Wed</span>
<span className="text-xs font-light text-stone-500">11</span>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Power Flow</h4>
<div className="flex items-center gap-2 mt-1">
<iconify-icon className="text-stone-400" icon="solar:videocamera-linear" width="14"></iconify-icon>
<span className="text-xs text-stone-500">Zoom Live</span>
</div>
</div>
</div>
<div className="flex items-center gap-8 mt-4 md:mt-0 pl-[72px] md:pl-0">
<span className="text-sm font-medium text-stone-600">06:30 PM - 07:45 PM</span>
<button className="px-4 py-1.5 rounded border border-stone-200 text-xs font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Book</button>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-200 hover:bg-white px-4 -mx-4 rounded transition-colors duration-200 cursor-default">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded bg-stone-100 text-stone-900 border border-stone-200/50">
<span className="text-xs font-bold uppercase">Fri</span>
<span className="text-xs font-light text-stone-500">13</span>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Yin &amp; Restore</h4>
<div className="flex items-center gap-2 mt-1">
<iconify-icon className="text-stone-400" icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs text-stone-500">Sanctuary Space</span>
</div>
</div>
</div>
<div className="flex items-center gap-8 mt-4 md:mt-0 pl-[72px] md:pl-0">
<span className="text-sm font-medium text-stone-600">05:00 PM - 06:15 PM</span>
<button className="px-4 py-1.5 rounded border border-stone-200 text-xs font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Book</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-2xl mx-auto text-center space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Your Journey</h2>
<p className="text-stone-500 font-light text-sm">Select your commitment level to see membership benefits.</p>
<div className="relative pt-8 pb-4">

<input className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-6 [&amp;::-webkit-slider-thumb]:h-6 [&amp;::-webkit-slider-thumb]:bg-stone-900 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:border-4 [&amp;::-webkit-slider-thumb]:border-white [&amp;::-webkit-slider-thumb]:shadow-md" max="3" min="1" type="range" value="2"/>
<div className="flex justify-between mt-4 text-xs font-medium text-stone-400 uppercase tracking-wider">
<span>Drop-in</span>
<span className="text-stone-900">Monthly</span>
<span>Annual</span>
</div>
</div>
<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 mt-8">
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-4xl font-medium text-stone-900">$85</span>
<span className="text-stone-500 text-sm">/ month</span>
</div>
<ul className="space-y-3 text-left max-w-xs mx-auto mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                        Unlimited Online Classes
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                        4 In-Studio Sessions
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                        Community Workshop Access
                    </li>
</ul>
<button className="w-full py-3 rounded bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-colors">Choose Plan</button>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-stone-700 flex items-center justify-center">
<iconify-icon className="text-stone-300" icon="solar:lotus-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter uppercase text-stone-100">Aura.</span>
</div>
<p className="text-xs font-light leading-relaxed max-w-xs">
                    Reconnecting body and mind through intentional movement and stillness.
                </p>
</div>
<div>
<h4 className="text-stone-100 text-sm font-medium mb-4">Sitemap</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-stone-100 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-stone-100 transition-colors" href="#">Classes</a></li>
<li><a className="hover:text-stone-100 transition-colors" href="#">Retreats</a></li>
<li><a className="hover:text-stone-100 transition-colors" href="#">About</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-100 text-sm font-medium mb-4">Socials</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-stone-100 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-stone-100 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-stone-100 transition-colors" href="#">YouTube</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-100 text-sm font-medium mb-4">Newsletter</h4>
<form className="flex flex-col gap-2">
<input className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-stone-500 placeholder:text-stone-600" placeholder="email@address.com" type="email"/>
<button className="text-xs font-medium text-stone-900 bg-stone-200 rounded px-3 py-2 hover:bg-white transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-stone-800 flex justify-between items-center text-[10px] uppercase tracking-wider">
<span>© 2024 Aura Yoga. All rights reserved.</span>
<div className="flex gap-4">
<span>Privacy</span>
<span>Terms</span>
</div>
</div>
</footer>

    </>
  );
}
