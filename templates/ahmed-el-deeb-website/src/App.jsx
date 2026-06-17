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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-5 py-2.5 rounded-full text-white shadow-lg">
<i className="w-5 h-5 text-orange-500" data-lucide="basketball"></i>
<span className="text-lg font-medium tracking-tight">Hoopify</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-zinc-900/90 backdrop-blur-md px-8 py-3 rounded-full text-zinc-300 text-sm font-medium shadow-lg">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Programs</a>
<a className="hover:text-white transition-colors" href="#">Why Us</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<a className="group flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-sm font-medium text-zinc-900 shadow-lg hover:shadow-xl transition-all" href="#">
                Sign Up
                <svg className="lucide lucide-arrow-up-right w-4 h-4 text-zinc-500 group-hover:text-orange-600 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</nav>

<header className="relative bg-zinc-950 pt-32 pb-20 overflow-hidden min-h-screen flex items-center">

<div className="bg-gradient-to-l from-zinc-900 to-transparent opacity-50 w-1/2 h-full absolute top-0 right-0"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]">
                    Hoop Dreams <br/>
<span className="text-zinc-500">Start With</span> <br/>
                    Real Training
                </h1>
<p className="text-xl text-zinc-400 max-w-lg font-light leading-relaxed">
                    Personalized coaching for beginners to elite players. Master the game with every drill in a system built to grow you from a casual player into a confident baller.
                </p>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100" style={{}}/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100" style={{}}/>
</div>
<div className="bg-white text-zinc-900 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2">
<span>5k+ Happy clients</span>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">

<div className="relative w-full h-full rounded-3xl overflow-hidden group">
<img alt="Basketball Texture" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/227b3ee8-2c5c-43f3-8f62-1d394003d4c1_1600w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
<a className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-12">
<div className="space-y-4">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900">
                        Unlock Real Results <br/>
                        with Real Coaching
                    </h2>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Every session is built to help you improve, grow, and win — on and off the court. We offer more than drills; we deliver results, confidence, and progress.
                    </p>
</div>
<div className="space-y-0 border-t border-zinc-200">
<div className="group py-6 border-b border-zinc-200 cursor-pointer flex items-center justify-between">
<span className="text-xl font-medium text-zinc-900">Pro-Level Coaches</span>
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-zinc-400 group-hover:text-orange-600 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="group py-6 border-b border-zinc-200 cursor-pointer flex items-center justify-between">
<span className="text-xl font-medium text-zinc-900">Mindset &amp; Strategy Training</span>
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-zinc-400 group-hover:text-orange-600 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="group py-6 border-b border-zinc-200 cursor-pointer flex items-center justify-between">
<span className="text-xl font-medium text-zinc-900">Personalized Nutrition</span>
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-zinc-400 group-hover:text-orange-600 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<button className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                    See more
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="bg-zinc-900 rounded-3xl p-6 lg:p-8 relative overflow-hidden aspect-[4/3] group">
<div className="flex justify-between items-start mb-6 z-10 relative">
<span className="text-zinc-400 text-xs font-mono">0/1</span>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="relative z-10 mb-6">
<h3 className="text-white text-xl font-medium mb-1">Pro-Level Coaches</h3>
<p className="text-zinc-400 text-sm">Train with certified professionals who've played at top levels.</p>
</div>
<div className="w-full h-64 rounded-2xl overflow-hidden relative">
<img alt="Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
                        Upcoming Training Sessions 
                        Designed to Push Limits
                    </h2>
</div>
<div className="flex flex-col items-end gap-4">
<p className="text-right text-zinc-500 text-sm max-w-xs">
                        From beginner bootcamps to elite tryouts — we’ve got something for every baller.
                    </p>
<button className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-medium">
                        Explore Now
                        <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-50 rounded-3xl p-8 flex flex-col justify-between h-[400px] border border-zinc-100 group">
<div>
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="basketball"></i>
</div>
<span className="text-xl font-medium text-zinc-900">Basketball 101</span>
</div>
<div className="space-y-2 mb-4">
<div className="flex justify-between text-lg text-zinc-500">
<span>Friday</span>
<span>12:00 - 13:00</span>
</div>
<div className="h-px bg-zinc-200 w-full"></div>
</div>
</div>
<div className="mt-auto">
<button className="w-full bg-zinc-900 text-white py-3 px-4 rounded-full flex justify-between items-center text-sm font-medium group-hover:bg-orange-600 transition-colors">
                            Explore Now
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex gap-2 mt-6">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-zinc-900 transition-colors">
<svg className="lucide lucide-chevron-left w-4 h-4 text-zinc-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-blue-950 rounded-3xl p-8 flex flex-col justify-between h-[400px] relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight leading-tight">
                            The Clutch  Shooter  Workshop
                        </h3>
<p className="text-blue-200 text-sm mt-4">
                            Elite Arena, Sylhet  September 15, 2025
                        </p>
</div>
<div className="relative z-10">
<button className="w-full bg-white text-blue-950 py-3 px-4 rounded-full flex justify-between items-center text-sm font-medium hover:bg-blue-50 transition-colors">
                            Explore Now
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="bg-zinc-100 rounded-3xl overflow-hidden h-[400px] relative group">
<img alt="Ball Mastery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-red-400"></div>
<div className="w-5 h-5 rounded-full bg-blue-400"></div>
</div>
<span className="text-xs font-bold text-zinc-900">300+ joined</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-medium text-white mb-1">Ball Mastery Camp 2025</h3>
<p className="text-zinc-300 text-xs mb-4">ProHoops Indoor Court, Dhaka</p>
<button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-900 ml-auto hover:scale-110 transition-transform">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-4">
                    Behind Every Transformation, <br/> There's a Trainer
                </h2>
<p className="text-lg text-zinc-500">Our certified trainers are here to guide, support, and transform your journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-blue-950">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl">
<h4 className="font-semibold text-zinc-900">Jason Miller</h4>
<p className="text-xs text-zinc-500 mt-1">Head Coach &amp; Strength</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-green-900">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl">
<h4 className="font-semibold text-zinc-900">Olivia Knight</h4>
<p className="text-xs text-zinc-500 mt-1">Skill Development</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-orange-900">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl">
<h4 className="font-semibold text-zinc-900">Jake Thompson</h4>
<p className="text-xs text-zinc-500 mt-1">Performance &amp; Speed</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-800">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl">
<h4 className="font-semibold text-zinc-900">Sophia Lane</h4>
<p className="text-xs text-zinc-500 mt-1">Junior Division Lead</p>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-12">
<button className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-100 transition-colors">
<svg className="lucide lucide-chevron-left w-5 h-5 text-zinc-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto space-y-16">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-center text-zinc-900">
                Choose the Perfect Training <br/> Plan for Your Journey
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-gradient-to-br from-[#2E1065] to-[#4C1D95] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-purple-900 transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<span className="border border-purple-300/30 text-purple-100 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">Popular</span>
<h3 className="text-5xl font-semibold text-white mt-8 mb-2 tracking-tight">6 Season  Package</h3>
<p className="text-purple-200 text-lg">Individualized Training</p>
</div>
<div className="mt-12 bg-white rounded-full inline-flex items-center px-6 py-2 gap-2 w-fit">
<span className="text-2xl font-bold text-zinc-900">$50</span>
<span className="text-xs text-zinc-500 font-medium">/ Per 6 month</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#0C4A6E] to-[#0369A1] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group">

<img alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-0 right-0 p-8">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-sky-900 transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<span className="border border-sky-300/30 text-sky-100 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">Pro League Plan</span>
<h3 className="text-5xl font-semibold text-white mt-8 mb-2 tracking-tight">12 Season  Package</h3>
<p className="text-sky-200 text-lg">Elite &amp; Team Training</p>
</div>
<div className="mt-12 bg-white rounded-full inline-flex items-center px-6 py-2 gap-2 w-fit">
<span className="text-2xl font-bold text-zinc-900">$80</span>
<span className="text-xs text-zinc-500 font-medium">/ Per 6 month</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-4xl mx-auto text-center">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 text-left">
                    See How Our Coaching Has  Transformed Lives
                </h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white hover:bg-zinc-50">
<svg className="lucide lucide-chevron-left w-4 h-4 text-zinc-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-zinc-800">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<blockquote className="text-2xl lg:text-3xl text-zinc-600 font-light leading-relaxed my-12">
                "Watching these young athletes grow into disciplined, confident players is the best part of this journey. Our coaching philosophy is about building strong people first — the basketball skills come naturally after that."
            </blockquote>
<div className="flex flex-col items-center gap-2">
<p className="text-lg font-medium text-zinc-900">Aiden, <span className="text-zinc-500 font-normal">Intermediate player</span></p>
<div className="flex -space-x-3 mt-2">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-600">+12</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative h-[500px] flex items-center justify-center text-center">
<img alt="Hoop" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-[2px]"></div>
<div className="relative z-10 space-y-8 px-6">
<h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto">
                    Ready to Take Your Game  to the Next Level?
                </h2>
<p className="text-xl text-blue-100 max-w-xl mx-auto">
                    Join a community of players building real skills and confidence.
                </p>
<button className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 group">
                    Join Now
                    <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white pt-24 pb-12 px-6 rounded-t-[3rem] mt-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-2 space-y-6">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-white" data-lucide="basketball"></i>
<span className="text-xl font-medium tracking-tight">Hoopify</span>
</div>
<h3 className="text-3xl font-medium tracking-tight leading-snug">
                        Where passion meets <br/> purpose for every player's <br/> future.
                    </h3>
<div className="text-zinc-500 text-sm space-y-1 mt-8">
<p>1525 Sportsman Drive, Los Angeles, CA</p>
<p>90017, United States</p>
<p className="mt-4">info@basketballrise.com</p>
</div>
</div>
<div className="flex flex-col gap-4 text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Program</a>
<a className="hover:text-white transition-colors" href="#">Why Us</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div>
<div className="bg-zinc-900 rounded-3xl p-4 w-full aspect-square flex items-center justify-center border border-zinc-800">
<img alt="Footer Img" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543791959-12b3f543282a?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
<p>2025 All Right Reserved</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms &amp; Condition</a>
</div>
</div>
<div className="mt-20 text-center select-none pointer-events-none">
<h1 className="text-[15vw] leading-none font-bold text-zinc-900 tracking-tighter opacity-80">
                    Hoopify
                </h1>
</div>
</div>
</footer>


    </>
  );
}
