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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

// Initialize Lucide icons
lucide.createIcons();

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add loading states and interactions
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
});

}
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
      
<div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16 opacity-0 translate-y-8 blur-sm" style={{'animation': `fadeInSlideUp 1.2s ease-out 0.3s forwards`}}>

<section className="grid lg:grid-cols-3 gap-8">

<aside className="space-y-8 opacity-0 translate-x-[-50px] blur-sm" style={{'animation': `fadeInSlideRight 1s ease-out 0.6s forwards`}}>

<article className="rounded-3xl shadow-2xl overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-[1.02] hover:shadow-3xl">
<div className="grid grid-cols-2 h-48 relative overflow-hidden">
<img alt="sparring" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="/assets/60a148c5-013d-456f-89e9-0ce20e7538ee_800w.jpg" style={{}} />
<div className="relative overflow-hidden">
<img alt="training" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="/assets/20f222af-e037-4dea-a697-2b93dc33d3f3_800w.jpg" style={{}} />
<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
<div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 border border-white/20">
<svg className="lucide lucide-camera w-3 h-3 text-black" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="13"></circle></svg>
<span className="text-sm font-semibold text-black">+42</span>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="relative pt-16 pr-8 pb-8 pl-8 backdrop-blur-2xl">
<img alt="dojo logo" className="w-24 h-24 absolute -top-12 left-8 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 object-cover border-white/20 border-4 rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&q=80" />
<span aria-label="verified" className="absolute -top-6 left-28 rounded-full p-2 bg-emerald-400 shadow-lg ring-4 ring-emerald-400/20 transition-all duration-500 group-hover:ring-8 group-hover:ring-emerald-400/40">
<svg className="lucide lucide-check w-3 h-3 text-black transition-transform duration-300 group-hover:scale-125" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `2.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="absolute -top-6 right-8 flex space-x-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
<a aria-label="facebook" className="text-neutral-300 hover:text-blue-400 transition-all duration-300 p-2 rounded-xl hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 hover:scale-110 backdrop-blur-sm" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a aria-label="twitter" className="text-neutral-300 hover:text-sky-400 transition-all duration-300 p-2 rounded-xl hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 hover:scale-110 backdrop-blur-sm" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a aria-label="instagram" className="text-neutral-300 hover:text-pink-400 transition-all duration-300 p-2 rounded-xl hover:bg-pink-500/10 border border-transparent hover:border-pink-500/20 hover:scale-110 backdrop-blur-sm" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20"></rect><path></path><line></line></svg>
</a>
</div>
<h2 className="text-2xl font-bold tracking-tight mb-2 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1s forwards`}}>Nova Martial Arts</h2>
<p className="text-neutral-400 text-sm mb-4 flex items-center gap-2 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.1s forwards`}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
            Established 1998 • 25+ Years of Excellence
          </p>
<div className="flex gap-3 mb-4 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.2s forwards`}}>
<span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg flex items-center gap-1.5 hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              KARATE
            </span>
<span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-neutral-300 border border-white/20 flex items-center gap-1.5 hover:bg-white/20 hover:scale-105 transition-all duration-300">
<svg className="lucide lucide-wind w-3 h-3" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
              AIKIDO
            </span>
</div>
<p className="text-neutral-300 leading-relaxed mb-6 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.3s forwards`}}>Empowering students to grow in discipline, confidence, and community through traditional martial arts training.</p>

<div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 translate-y-4 blur-sm hover:bg-white/10 transition-all duration-500" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.4s forwards`}}>
<div className="text-center hover:scale-110 transition-transform duration-300">
<div className="text-xl font-bold text-white">850+</div>
<div className="text-xs text-neutral-400">Students</div>
</div>
<div className="text-center border-l border-r border-white/10 hover:scale-110 transition-transform duration-300">
<div className="text-xl font-bold text-white">12</div>
<div className="text-xs text-neutral-400">Instructors</div>
</div>
<div className="text-center hover:scale-110 transition-transform duration-300">
<div className="text-xl font-bold text-white">98%</div>
<div className="text-xs text-neutral-400">Retention</div>
</div>
</div>
<div className="flex items-center font-medium mb-3 space-x-2 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.5s forwards`}}>
<div className="flex items-center space-x-1">
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400 hover:scale-125 transition-transform duration-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-lg">4.94</span>
</div>
<span className="text-neutral-500">•</span>
<span className="text-neutral-400">2,108 reviews</span>
</div>
<div className="flex items-center text-neutral-400 mb-8 space-x-2 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.6s forwards`}}>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
<span>Wilmington, Delaware</span>
<span className="text-neutral-600">•</span>
<div className="flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-clock w-3 h-3 animate-pulse" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-xs">Open Now</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.7s forwards`}}>
<button aria-label="call us" className="flex items-center justify-center gap-2 font-medium border rounded-2xl py-3 px-4 border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 group backdrop-blur-md">
<svg className="lucide lucide-phone w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Call Us
            </button>
<a aria-label="website" className="flex items-center justify-center gap-2 font-medium bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl py-3 px-4 text-white hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 group backdrop-blur-sm" href="#">
<svg className="lucide lucide-globe w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
              Visit Site
            </a>
</div>
</div>
</article>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500">
<h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2 opacity-0 translate-x-[-20px] blur-sm" style={{'animation': `fadeInSlideRight 0.8s ease-out 1.8s forwards`}}>
<div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
          Facilities & Amenities
        </h3>
<ul className="space-y-4">
<li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-[-30px] blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideRight 0.6s ease-out 1.9s forwards`}}>
<div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg>
</div>
<div className="flex-1">
<span className="font-medium block">Smart Lockers</span>
<span className="text-xs text-neutral-400">RFID enabled security</span>
</div>
</li>
<li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-[-30px] blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideRight 0.6s ease-out 2s forwards`}}>
<div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
<svg className="lucide lucide-car w-4 h-4" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="7" cy="17"></circle><path></path><circle cx="17" cy="17"></circle></svg>
</div>
<div className="flex-1">
<span className="font-medium block">On-Site Parking</span>
<span className="text-xs text-neutral-400">50+ spaces available</span>
</div>
</li>
<li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-[-30px] blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideRight 0.6s ease-out 2.1s forwards`}}>
<div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
<svg className="lucide lucide-square w-4 h-4" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect></svg>
</div>
<div className="flex-1">
<span className="font-medium block">Olympic Tatami Mats</span>
<span className="text-xs text-neutral-400">Professional grade flooring</span>
</div>
</li>
<li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-[-30px] blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideRight 0.6s ease-out 2.2s forwards`}}>
<div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
<svg className="lucide lucide-droplets w-4 h-4" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<span className="font-medium block">Eco Showers</span>
<span className="text-xs text-neutral-400">Water-saving technology</span>
</div>
</li>
<li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-[-30px] blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideRight 0.6s ease-out 2.3s forwards`}}>
<div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<span className="font-medium block">High-Speed WiFi</span>
<span className="text-xs text-neutral-400">Free for all members</span>
</div>
</li>
</ul>
</article>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500">
<h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2 opacity-0 translate-x-[-20px] blur-sm" style={{'animation': `fadeInSlideRight 0.8s ease-out 2.4s forwards`}}>
<div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
          Today's Schedule
        </h3>
<ul className="space-y-4">
<li className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.6s ease-out 2.5s forwards`}}>
<div className="flex items-center gap-4">
<div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 backdrop-blur-sm">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<div>
<span className="font-medium block">Karate (Beginner)</span>
<span className="text-xs text-neutral-400">18:00 - 19:00 • Sensei Kim</span>
</div>
</div>
<span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full animate-pulse backdrop-blur-sm border border-emerald-500/30">Available</span>
</li>
<li className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 hover:scale-105 transition-all duration-300 opacity-0 translate-y-4 blur-sm backdrop-blur-md" style={{'animation': `fadeInSlideUp 0.6s ease-out 2.6s forwards`}}>
<div className="flex items-center gap-4">
<div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 backdrop-blur-sm">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="">
<span className="font-medium block">Karate (Advanced)</span>
<span className="text-xs text-neutral-400">19:30 - 21:00 • Sensei Yamada</span>
</div>
</div>
<span className="text-xs text-orange-400 bg-orange-500/20 border-orange-500/30 border rounded-full pt-1 pr-2 pb-1 pl-2 backdrop-blur-sm whitespace-nowrap" id="aura-emddaon9z">3 spots left</span>
</li>
<li className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 opacity-60 opacity-0 translate-y-4 blur-sm backdrop-blur-md" style={{'animation': `fadeInSlideUp 0.6s ease-out 2.7s forwards`}}>
<div className="flex items-center gap-4">
<div className="p-2 rounded-xl bg-neutral-500/20 text-neutral-400 backdrop-blur-sm">
<svg className="lucide lucide-wind w-4 h-4" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div>
<span className="font-medium block">Aikido Flow</span>
<span className="text-xs text-neutral-400">20:00 - 21:30 • Sensei Chen</span>
</div>
</div>
<span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full backdrop-blur-sm border border-red-500/30">Full</span>
</li>
</ul>
<button className="w-full mt-6 border rounded-2xl py-3 font-medium flex items-center justify-center gap-2 border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 group opacity-0 translate-y-4 blur-sm backdrop-blur-md" style={{'animation': `fadeInSlideUp 0.6s ease-out 2.8s forwards`}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
          View Full Schedule
          <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</article>
</aside>

<main className="space-y-8 opacity-0 translate-y-8 blur-sm" style={{'animation': `fadeInSlideUp 1s ease-out 0.8s forwards`}}>

<article className="rounded-3xl shadow-xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-500/30 relative hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group backdrop-blur-xl">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\" cx="\&quot;30\&quot;" cy="\&quot;30\&quot;" fill="\&quot;none\&quot;" fillOpacity="\&quot;0.05\&quot;%3E%3Ccircle" fillRule="\&quot;evenodd\&quot;" group-hover:opacity-50="" height="\&quot;60\&quot;" opacity-30="" transition-opacity="" viewBox="\&quot;0" xmlns="\&quot;http://www.w3.org/2000/svg\&quot;%3E%3Cg"></div>
<div className="p-8 relative backdrop-blur-sm">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3 opacity-0 translate-x-[-20px] blur-sm" style={{'animation': `fadeInSlideRight 0.8s ease-out 1.2s forwards`}}>
<div className="p-2 bg-white/20 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 backdrop-blur-sm border border-white/30">
<svg className="lucide lucide-trophy w-5 h-5 text-white" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-blue-100">Belt Examination</span>
</div>
<span className="text-xs text-blue-200 bg-white/20 px-3 py-1 rounded-full opacity-0 translate-x-4 blur-sm hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30" style={{'animation': `fadeInSlideLeft 0.8s ease-out 1.3s forwards`}}>4 hrs ago</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4 tracking-tight opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.4s forwards`}}>Autumn Belt Examination Registration</h3>
<p className="text-blue-100 leading-relaxed mb-6 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.5s forwards`}}>Registration for the Autumn Belt Examination is now open. Test your skills and advance your rank. Secure your slot by October 5th!</p>
<div className="flex items-center justify-between opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.6s forwards`}}>
<div className="flex items-center gap-4">
<div className="relative group/avatar">
<img alt="sensei" className="w-12 h-12 rounded-full border-2 border-white/30 group-hover/avatar:border-4 group-hover/avatar:border-white/50 group-hover/avatar:scale-110 transition-all duration-300 object-cover" src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=320&q=80" />
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-indigo-600 animate-pulse"></div>
</div>
<div className="">
<span className="font-semibold text-white">Sensei Yamada</span>
<p className="text-sm text-blue-200">Head Instructor</p>
</div>
</div>
<button className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group/btn backdrop-blur-sm border border-white/30">
<svg className="lucide lucide-external-link w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
              Register
            </button>
</div>
</div>
</article>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-500">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4 opacity-0 translate-x-[-20px] blur-sm" style={{'animation': `fadeInSlideRight 0.8s ease-out 1.7s forwards`}}>
<div className="p-2 bg-indigo-500/20 rounded-xl backdrop-blur-sm border border-indigo-500/30">
<svg className="lucide lucide-user-plus w-5 h-5 text-indigo-400" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><line></line><line></line></svg>
</div>
<h3 className="text-xl font-bold tracking-tight">Book a Complimentary Class</h3>
</div>
<p className="text-neutral-300 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.8s forwards`}}>Experience Nova with zero commitment. Try any class for free!</p>
</div>

<div className="mb-6 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 1.9s forwards`}}>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400 animate-pulse" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-sm font-medium text-emerald-400">Most Popular Times</span>
</div>
<div className="text-sm text-neutral-300">Evenings (6-8 PM) and Weekends see highest attendance</div>
</div>
<div className="mb-8 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 2s forwards`}}>
<p className="font-semibold mb-4 text-neutral-200 flex items-center gap-2">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
            Pick a Date
          </p>
<div className="grid grid-cols-5 gap-3">
<button className="border rounded-2xl py-4 flex flex-col items-center border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 hover:scale-110 transition-all duration-300 group backdrop-blur-md">
<span className="text-xs text-neutral-400 uppercase mb-1 group-hover:text-indigo-300 transition-colors duration-300">Oct</span>
<span className="text-lg font-bold group-hover:text-white transition-colors duration-300">12</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">Tue</span>
</button>
<button className="border rounded-2xl py-4 flex flex-col items-center border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 hover:scale-110 transition-all duration-300 group backdrop-blur-md">
<span className="text-xs text-neutral-400 uppercase mb-1 group-hover:text-indigo-300 transition-colors duration-300">Oct</span>
<span className="text-lg font-bold group-hover:text-white transition-colors duration-300">13</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">Wed</span>
</button>
<button className="border rounded-2xl py-4 flex flex-col items-center bg-indigo-500/10 border-indigo-400 backdrop-blur-md">
<span className="text-xs text-indigo-300 uppercase mb-1">Oct</span>
<span className="text-lg font-bold text-white">14</span>
<span className="text-xs text-neutral-400">Thu</span>
</button>
<button className="border rounded-2xl py-4 flex flex-col items-center border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 hover:scale-110 transition-all duration-300 group backdrop-blur-md">
<span className="text-xs text-neutral-400 uppercase mb-1 group-hover:text-indigo-300 transition-colors duration-300">Oct</span>
<span className="text-lg font-bold group-hover:text-white transition-colors duration-300">15</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">Fri</span>
</button>
<button className="border rounded-2xl py-4 flex flex-col items-center border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 hover:scale-110 transition-all duration-300 group backdrop-blur-md">
<span className="text-xs text-neutral-400 uppercase mb-1 group-hover:text-indigo-300 transition-colors duration-300">Oct</span>
<span className="text-lg font-bold group-hover:text-white transition-colors duration-300">16</span>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">Sat</span>
</button>
</div>
</div>
<div className="mb-6 opacity-0 translate-y-4 blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 2.1s forwards`}}>
<p className="font-semibold mb-4 text-neutral-200 flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
            Available Times
          </p>
<div className="grid grid-cols-3 gap-3">
<button className="border rounded-xl py-3 px-4 text-sm border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-md hover:scale-105">6:00 PM</button>
<button className="border rounded-xl py-3 px-4 text-sm bg-indigo-500/10 border-indigo-400 text-indigo-300 backdrop-blur-md">6:30 PM</button>
<button className="border rounded-xl py-3 px-4 text-sm border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-md hover:scale-105">7:00 PM</button>
<button className="border rounded-xl py-3 px-4 text-sm border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-md hover:scale-105">7:30 PM</button>
<button className="border rounded-xl py-3 px-4 text-sm border-neutral-600 text-neutral-500 opacity-50 cursor-not-allowed backdrop-blur-md">8:00 PM</button>
<button className="border rounded-xl py-3 px-4 text-sm border-white/20 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-md hover:scale-105">8:30 PM</button>
</div>
</div>
<button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-4 rounded-2xl hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-indigo-500/25 opacity-0 translate-y-4 blur-sm backdrop-blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 2.2s forwards`}}>
<svg className="lucide lucide-calendar-plus w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
          Book Free Trial Class
          <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</article>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-500">
<div className="flex items-center justify-between mb-6 opacity-0 translate-x-[-20px] blur-sm" style={{'animation': `fadeInSlideRight 0.8s ease-out 2.3s forwards`}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-500/20 rounded-xl backdrop-blur-sm border border-amber-500/30">
<svg className="lucide lucide-star w-5 h-5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-xl font-bold tracking-tight">Recent Reviews</h3>
</div>
<button className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group">
            View All
            <svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 opacity-0 translate-y-4 blur-sm hover:scale-[1.02]" style={{'animation': `fadeInSlideUp 0.6s ease-out 2.4s forwards`}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="reviewer" className="w-12 h-12 object-cover border-white/20 border-2 rounded-full" src="https://images.unsplash.com/photo-1640402882370-eb3d172f026e?w=320&q=80" style={{}} />
<div>
<div className="font-semibold">Sarah Chen</div>
<div className="text-xs text-neutral-400">2 days ago</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">Amazing dojo with incredible instructors. The atmosphere is welcoming and the training is top-notch. My confidence has grown tremendously!</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 opacity-0 translate-y-4 blur-sm hover:scale-[1.02]" style={{'animation': `fadeInSlideUp 0.6s ease-out 2.5s forwards`}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="reviewer" className="w-12 h-12 object-cover border-white/20 border-2 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=3840&q=80" />
<div>
<div className="font-semibold">Marcus Rodriguez</div>
<div className="text-xs text-neutral-400">1 week ago</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
<p className="text-neutral-300 leading-relaxed">Been training here for 3 years. Sensei Yamada's teaching style is exceptional. Great community of dedicated martial artists.</p>
</div>
</div>
</article>
</main>

<aside className="space-y-8 opacity-0 translate-x-[50px] blur-sm" style={{'animation': `fadeInSlideLeft 1s ease-out 1s forwards`}}>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500">
<h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2 opacity-0 translate-x-4 blur-sm" style={{'animation': `fadeInSlideLeft 0.8s ease-out 2.6s forwards`}}>
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          Master Instructors
        </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-8 blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideLeft 0.6s ease-out 2.7s forwards`}}>
<div className="relative">
<img alt="sensei yamada" className="w-16 h-16 group-hover:border-4 group-hover:border-emerald-400/50 group-hover:scale-110 transition-all duration-300 object-cover border-white/20 border-2 rounded-full" src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=3840&q=80" />
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `3`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
<div className="flex-1">
<div className="font-semibold text-white">Sensei Yamada</div>
<div className="text-sm text-emerald-400 mb-1">6th Dan Black Belt</div>
<div className="text-xs text-neutral-400">25+ years experience</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-8 blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideLeft 0.6s ease-out 2.8s forwards`}}>
<div className="relative">
<img alt="sensei kim" className="w-16 h-16 group-hover:border-4 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-300 object-cover border-white/20 border-2 rounded-full" src="https://images.unsplash.com/photo-1599140781359-a4c536a7babd?w=320&q=80" />
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
<svg className="lucide lucide-star w-3 h-3 text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `3`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
<div className="flex-1">
<div className="font-semibold text-white">Sensei Kim</div>
<div className="text-sm text-purple-400 mb-1">4th Dan Black Belt</div>
<div className="text-xs text-neutral-400">Specializes in youth programs</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-8 blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideLeft 0.6s ease-out 2.9s forwards`}}>
<div className="relative">
<img alt="sensei chen" className="w-16 h-16 group-hover:border-4 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300 object-cover border-white/20 border-2 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=3840&q=80" />
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
<svg className="lucide lucide-wind w-3 h-3 text-white" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `3`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
</div>
<div className="flex-1">
<div className="font-semibold text-white">Sensei Chen</div>
<div className="text-sm text-blue-400 mb-1">Aikido Master</div>
<div className="text-xs text-neutral-400">15+ years teaching</div>
</div>
</div>
</div>
</article>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500">
<h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2 opacity-0 translate-x-4 blur-sm" style={{'animation': `fadeInSlideLeft 0.8s ease-out 3s forwards`}}>
<div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
          Recent Achievements
        </h3>
<div className="space-y-4">
<div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 hover:scale-105 transition-all duration-300 opacity-0 translate-y-4 blur-sm backdrop-blur-md" style={{'animation': `fadeInSlideUp 0.6s ease-out 3.1s forwards`}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-amber-500/20 rounded-xl backdrop-blur-sm">
<svg className="lucide lucide-trophy w-4 h-4 text-amber-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<span className="font-semibold text-amber-400">State Championship</span>
</div>
<p className="text-sm text-neutral-300">1st Place Team Kata - Delaware State Tournament 2024</p>
</div>
<div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 hover:scale-105 transition-all duration-300 opacity-0 translate-y-4 blur-sm backdrop-blur-md" style={{'animation': `fadeInSlideUp 0.6s ease-out 3.2s forwards`}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-emerald-500/20 rounded-xl backdrop-blur-sm">
<svg className="lucide lucide-award w-4 h-4 text-emerald-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
</div>
<span className="font-semibold text-emerald-400">Certification</span>
</div>
<p className="text-sm text-neutral-300">JKA Approved Training Center - Official Recognition</p>
</div>
<div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:scale-105 transition-all duration-300 opacity-0 translate-y-4 blur-sm backdrop-blur-md" style={{'animation': `fadeInSlideUp 0.6s ease-out 3.3s forwards`}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-indigo-500/20 rounded-xl backdrop-blur-sm">
<svg className="lucide lucide-users w-4 h-4 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<span className="font-semibold text-indigo-400">Community Impact</span>
</div>
<p className="text-sm text-neutral-300">850+ Students Served - Growing Every Month</p>
</div>
</div>
</article>

<article className="rounded-3xl shadow-xl p-8 bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500">
<h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2 opacity-0 translate-x-4 blur-sm" style={{'animation': `fadeInSlideLeft 0.8s ease-out 3.4s forwards`}}>
<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          Get in Touch
        </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-8 blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideLeft 0.6s ease-out 3.5s forwards`}}>
<div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div>
<div className="font-medium text-white">(302) 555-0142</div>
<div className="text-xs text-neutral-400">Mon-Fri 9AM-9PM</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-8 blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideLeft 0.6s ease-out 3.6s forwards`}}>
<div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
</div>
<div className="">
<div className="font-medium text-white">info@novamartialarts.com</div>
<div className="text-xs text-neutral-400">Quick response guaranteed</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group opacity-0 translate-x-8 blur-sm hover:scale-105 backdrop-blur-md" style={{'animation': `fadeInSlideLeft 0.6s ease-out 3.7s forwards`}}>
<div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
</div>
<div>
<div className="font-medium text-white">1847 Kirkwood Hwy</div>
<div className="text-xs text-neutral-400">Wilmington, DE 19805</div>
</div>
</div>
</div>
<button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-2xl hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-cyan-500/25 opacity-0 translate-y-4 blur-sm backdrop-blur-sm" style={{'animation': `fadeInSlideUp 0.8s ease-out 3.8s forwards`}}>
<i className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" data-lucide="directions"></i>
          Get Directions
        </button>
</article>
</aside>
</section>
</div>



    </>
  );
}
