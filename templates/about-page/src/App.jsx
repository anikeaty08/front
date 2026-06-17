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
      

<nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-2xl font-bold italic tracking-tighter text-white">CKO</span>
<span className="text-xs font-semibold tracking-widest text-yellow-400 uppercase mt-1">Kickboxing</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-xs font-medium tracking-widest hover:text-yellow-400 transition-colors uppercase" href="#">Home</a>
<a className="text-xs font-medium tracking-widest text-yellow-400 uppercase" href="#">About</a>
<a className="text-xs font-medium tracking-widest hover:text-yellow-400 transition-colors uppercase" href="#">Classes</a>
<a className="text-xs font-medium tracking-widest hover:text-yellow-400 transition-colors uppercase" href="#">Franchise</a>
</div>
<button className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold tracking-widest uppercase px-6 py-3 transition-colors">
                Book Class
            </button>
</div>
</nav>

<header className="pt-40 pb-20 px-6 border-b border-zinc-900 bg-zinc-950/50">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter uppercase mb-6">
                Our <span className="text-yellow-400">Story</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                Founded on the belief that fitness should be engaging, empowering, and effective. We ditched the treadmills for heavy bags and created a community.
            </p>
</div>
</header>

<section className="py-24 px-6 bg-black">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="space-y-12">
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="h-px w-8 bg-yellow-400"></div>
<span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">The Beginning</span>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight uppercase">More Than Just A Gym</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                        It started in Hoboken, NJ, with a simple idea: take the intensity of a fighter's workout and make it accessible to everyone. No sparring, no getting hit—just the results. We wanted to create a place where people could relieve stress, burn fat, and feel like a champion, regardless of their fitness level.
                    </p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="h-px w-8 bg-yellow-400"></div>
<span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Our Mission</span>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight uppercase">Empowering Every Body</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                        At CKO, you're not a number. You're part of a family. Our mission is to provide an inclusive environment where you can work at your own pace on your own heavy bag. We combine resistance training with high-intensity cardio to deliver a full-body workout that transforms lives.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-900">
<div>
<span className="block text-4xl font-semibold text-white tracking-tight mb-1">25+</span>
<span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Years of Fitness</span>
</div>
<div>
<span className="block text-4xl font-semibold text-white tracking-tight mb-1">100k+</span>
<span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Lives Changed</span>
</div>
</div>
</div>

<div className="relative space-y-4">

<div className="aspect-[4/3] bg-zinc-900 w-full overflow-hidden border border-zinc-800 rounded-sm group cursor-pointer">
<img alt="Gym Interior" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://i.ibb.co/0VZVLQgz/cko-new-banner-22.jpg"/>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 rounded-sm group cursor-pointer">
<img alt="Gloves" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://i.ibb.co/xtDQMgVY/home-section-1.jpg"/>
</div>

<div className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-center items-center text-center rounded-sm hover:border-yellow-400/30 transition-colors duration-500">
<i className="w-10 h-10 text-yellow-400 mb-4 stroke-[1.5]" data-lucide="award"></i>
<span className="text-white text-sm font-semibold uppercase tracking-wide">Rated #1</span>
<span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-1">Fat Burning Workout</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-900 bg-zinc-950 py-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group cursor-default">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300 group-hover:scale-110">
<i className="w-6 h-6 text-white group-hover:text-black transition-colors" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-white uppercase tracking-tight mb-3">Community First</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We build strong relationships. When you walk through our doors, you enter a judgement-free zone designed for support.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300 group-hover:scale-110">
<i className="w-6 h-6 text-white group-hover:text-black transition-colors" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-white uppercase tracking-tight mb-3">High Energy</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Our classes are fueled by pumping music and enthusiastic instructors who keep the motivation high from start to finish.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300 group-hover:scale-110">
<i className="w-6 h-6 text-white group-hover:text-black transition-colors" data-lucide="target"></i>
</div>
<h3 className="text-lg font-semibold text-white uppercase tracking-tight mb-3">Real Results</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We focus on functional fitness. Improve your endurance, strength, and agility with proven kickboxing techniques.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2 block">Start Your Journey</span>
<h2 className="text-4xl font-semibold text-white tracking-tight uppercase mb-4">Book Your Free Class</h2>
<p className="text-zinc-400 text-lg font-light">Fill out the form below to secure your spot. No experience required. Gloves provided.</p>
</div>
<form className="bg-zinc-900/50 p-8 md:p-10 border border-zinc-800 rounded-sm shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">First Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-base px-4 py-3 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all placeholder:text-zinc-600 rounded-sm" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Last Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-base px-4 py-3 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all placeholder:text-zinc-600 rounded-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Email Address</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-base px-4 py-3 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all placeholder:text-zinc-600 rounded-sm" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Phone Number</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-base px-4 py-3 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all placeholder:text-zinc-600 rounded-sm" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="mb-8 space-y-2">
<label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Preferred Location</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-base px-4 py-3 appearance-none focus:outline-none focus:border-yellow-400/50 rounded-sm cursor-pointer">
<option>Select a Club...</option>
<option>New York - Manhattan</option>
<option>New Jersey - Hoboken</option>
<option>California - San Diego</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold tracking-widest uppercase py-4 transition-colors flex items-center justify-center gap-2" type="button">
                    Claim Free Class <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-zinc-600 text-xs mt-4">By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
</form>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-white/5 relative mt-auto">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div>
<h2 className="text-3xl font-semibold text-yellow-400 uppercase tracking-tight mb-2">Near You</h2>
<button className="border border-zinc-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                        Find Class
                    </button>
</div>
<div className="mt-8 md:mt-0 text-right">
<span className="block text-zinc-500 text-xs font-bold tracking-widest uppercase mb-1">Corporate Office</span>
<span className="block text-zinc-300 text-sm font-light">+1 (800) 987-6543</span>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-bold italic tracking-tighter text-white">CKO</span>
</div>
<div className="flex gap-6 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Results</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer">
<i className="w-3 h-3" data-lucide="facebook"></i>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer">
<i className="w-3 h-3" data-lucide="instagram"></i>
</div>
</div>
</div>
<div className="mt-8 text-center md:text-left">
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">
                    © 2024 CKO Kickboxing Holdings, LLC. All Rights Reserved.
                </p>
</div>
</div>
</footer>


    </>
  );
}
