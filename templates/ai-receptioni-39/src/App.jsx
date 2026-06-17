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
      

<nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">

<div className="flex bg-orange-600 w-8 h-8 rounded-lg items-center justify-center">
<span className="font-bold text-white text-xl lowercase">d</span>
</div>
<span className="text-2xl font-semibold text-white tracking-tight">
            digalook
          </span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 cursor-pointer hover:text-white transition-colors">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
<span>EN</span>
</div>
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="hover:bg-orange-500 transition-all shadow-orange-900/20 text-sm font-medium text-white bg-orange-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="#demo" onclick="event.preventDefault(); document.querySelector('section.bg-slate-50.pt-24.pb-24').scrollIntoView({ behavior: 'smooth' });">
            Get Started
          </a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">

<img alt="Woman in orange turtleneck using smartphone" className="w-full h-full object-cover object-center lg:object-[center_20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2c6c387-824c-4d2e-bc93-be605759e03b_1600w.png" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl py-12">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-orange-600 text-xs font-semibold uppercase tracking-wider mb-8 shadow-xl border border-white/20">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
</span>
            Stop losing customers today
          </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1] mb-6 drop-shadow-lg">
            I handle every
            <span className="bg-white text-orange-600 px-2 rounded-lg -rotate-1 inline-block mx-1">
              call
            </span>
            and
            <span className="bg-slate-900 text-white px-2 rounded-lg rotate-1 inline-block mx-1">
              booking
            </span>
            for you.
          </h1>
<p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed font-medium max-w-md drop-shadow-md">
            Too busy to answer? I pick up instantly. 24/7. Phone calls,
            WhatsApp, scheduling. The AI receptionist that actually sounds
            human.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center hover:bg-orange-500 transition-all hover:shadow-2xl hover:-translate-y-1 font-medium text-white bg-orange-600 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#demo-form">
              Try Digalook Free
              <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-medium hover:bg-white/30 transition-all shadow-lg" href="#demo" onclick="event.preventDefault(); document.querySelector('#demo-form').scrollIntoView({ behavior: 'smooth' });">
<svg className="lucide lucide-play-circle w-5 h-5 mr-2" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
              Hear a Sample
            </a>
</div>

<div className="flex items-center gap-4 text-sm font-medium text-white/90">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-orange-500 bg-slate-200" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
<img className="w-10 h-10 rounded-full border-2 border-orange-500 bg-slate-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
<img className="w-10 h-10 rounded-full border-2 border-orange-500 bg-slate-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
</div>
<div className="">
<div className="flex items-center gap-1 text-yellow-300 drop-shadow-sm">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-orange-100 text-xs mt-1 drop-shadow-md">
                Trusted by 500+ businesses
              </p>
</div>
</div>
</div>

<div className="hidden lg:block relative h-full">
<div className="absolute bottom-1/4 -left-12 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl shadow-black/20 border-l-4 border-orange-500 max-w-xs animate-in slide-in-from-right duration-1000">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<svg className="lucide lucide-phone-incoming w-5 h-5" data-lucide="phone-incoming" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2v6h6"></path>
<path d="m22 2-6 6"></path>
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<div className="">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                  Live Activity
                </p>
<p className="text-sm font-semibold text-slate-900">
                  Incoming Call from Matteo
                </p>
<p className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
<svg className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Answered &amp; Booked
                </p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="overflow-hidden bg-slate-900 border-slate-800 border-b pt-6 pb-6">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-between gap-8 text-slate-500 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter">
          SALON
          <span className="font-light">PRO</span>
</span>
<span className="text-xl font-bold tracking-tighter hidden md:block">
          BARBER
          <span className="text-orange-500">KING</span>
</span>
<span className="text-xl font-bold tracking-tighter hidden md:block">
          MED
          <span className="font-light italic">CLINIC</span>
</span>
<span className="text-xl font-bold tracking-tighter hidden sm:block">
          PHYSIO
          <span className="font-light">+</span>
</span>
<span className="text-xl font-bold tracking-tighter">
          SPA
          <span className="text-orange-500">RESORT</span>
</span>
</div>
</div>

<section className="py-24 bg-slate-900 relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="md:flex justify-between items-end mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              You on the front line,
              <br/>
<span className="text-orange-500">Me on the phone.</span>
</h2>
<p className="text-lg text-slate-400 max-w-lg">
              I join your team instantly. No complex setup. While you work, I
              handle the customers waiting on the line.
            </p>
</div>
<a className="hidden md:inline-flex items-center text-orange-500 font-medium hover:text-orange-400 transition-colors" href="#features">
            See all features
            <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Instant Pickup
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Answers calls immediately with a natural tone tailored to your
              brand.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-calendar-check w-6 h-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="m9 16 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Zero Errors</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Manages your agenda without double-bookings. Synced instantly.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-message-square-dashed w-6 h-6" data-lucide="message-square-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19h.01"></path>
<path d="M12 3h.01"></path>
<path d="M16 19h.01"></path>
<path d="M16 3h.01"></path>
<path d="M2 13h.01"></path>
<path d="M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8"></path>
<path d="M2 5a2 2 0 0 1 2-2"></path>
<path d="M2 9h.01"></path>
<path d="M20 3a2 2 0 0 1 2 2"></path>
<path d="M22 13h.01"></path>
<path d="M22 17a2 2 0 0 1-2 2"></path>
<path d="M22 9h.01"></path>
<path d="M8 3h.01"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Auto Reminders
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Sends WhatsApp or SMS reminders so clients never show up late.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-refresh-ccw w-6 h-6" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 16h5v5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Real-time Sync
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              I keep you updated on everything I do. You set the rules, I
              execute.
            </p>
</div>
</div>
</div>
</section>

<div className="bg-orange-50 border-y border-orange-100">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-full shadow-sm text-orange-600">
<svg className="lucide lucide-sparkles w-6 h-6 fill-current" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">
              Never miss another appointment
            </h4>
<p className="text-slate-600">
              I'm here to help you earn more money immediately.
            </p>
</div>
</div>
<a className="w-full md:w-auto text-center px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg" href="#demo-form" onclick="event.preventDefault(); document.querySelector('#demo-form').scrollIntoView({ behavior: 'smooth' });">
          Start Free Trial
        </a>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            The Reality Check
          </span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
            Yes, you are
            <span className="text-red-600 underline decoration-4 decoration-red-200 underline-offset-4">
              losing money
            </span>
            .
          </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
            40% of calls are missed opportunities. Calculate your bleed.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">

<div className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-100 flex flex-col items-center justify-center text-center hover:border-orange-200 transition-colors">
<span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
              Missed calls / week
            </span>
<div className="flex items-center gap-8 mb-2">
<button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all shadow-sm">
<svg className="lucide lucide-minus w-6 h-6" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="text-6xl font-semibold text-slate-900 tracking-tighter">
                10
              </span>
<button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all shadow-sm">
<svg className="lucide lucide-plus w-6 h-6" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-100 flex flex-col items-center justify-center text-center hover:border-orange-200 transition-colors">
<span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
              Avg Ticket Value
            </span>
<div className="flex items-center gap-8 mb-2">
<button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all shadow-sm">
<svg className="lucide lucide-minus w-6 h-6" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="text-6xl font-semibold text-slate-900 tracking-tighter">
                25€
              </span>
<button className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all shadow-sm">
<svg className="lucide lucide-plus w-6 h-6" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-10 rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center text-center shadow-xl">
<span className="text-6xl font-semibold text-white tracking-tighter mb-2">
              400 €
            </span>
<div className="flex items-center gap-2 text-red-400 font-medium bg-red-400/10 px-3 py-1 rounded-full text-sm">
<svg className="lucide lucide-trending-down w-4 h-4" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
              Lost Monthly
            </div>
</div>

<div className="p-10 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="text-7xl font-semibold tracking-tighter mb-2 drop-shadow-md">
              5200 €
            </span>
<div className="flex items-center gap-2 text-white font-medium bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
<svg className="lucide lucide-alert-triangle w-4 h-4" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
              Lost Annually
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-600 relative overflow-hidden">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-800 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-center mb-8">
<div className="bg-white/20 backdrop-blur rounded-full p-4">
<svg className="lucide lucide-quote w-8 h-8 text-white fill-white" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-center tracking-tight text-white mb-16">
          Everyone is talking about me.
          <br/>
          Here is why.
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white text-slate-900 shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 text-orange-500 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-lg text-slate-700 mb-6 font-medium leading-relaxed">
              "We have many questions about prices and infinite treatments.
              Digalook knows everything instantly."
            </p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                M
              </div>
<div>
<p className="text-sm font-bold text-slate-900">Marco D.</p>
<p className="text-xs text-slate-500 font-medium">
                  Tanning Studio Owner
                </p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl transform hover:-translate-y-2 transition-transform duration-300 scale-105 border border-slate-800 relative">
<div className="absolute top-0 right-0 bg-orange-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
              TOP RATED
            </div>
<div className="flex gap-1 text-orange-500 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-lg text-slate-300 mb-6 font-medium leading-relaxed">
              "It's like having a gentle receptionist who never takes a day off.
              Bookings increased by 30%."
            </p>
<div className="flex items-center gap-3 border-t border-slate-800 pt-4">
<img className="w-10 h-10 rounded-full object-cover border border-slate-700" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop" style={{}}/>
<div>
<p className="text-sm font-bold text-white">Laura Gomez</p>
<p className="text-xs text-slate-400 font-medium">
                  Beauty Salon Owner
                </p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white text-slate-900 shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 text-orange-500 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-lg text-slate-700 mb-6 font-medium leading-relaxed">
              "In the era of interruptions, this AI saved my sanity. Clients
              love the instant replies."
            </p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                A
              </div>
<div>
<p className="text-sm font-bold text-slate-900">Alejandro O.</p>
<p className="text-xs text-slate-500 font-medium">Barber Shop</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex justify-center items-center w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-orange-500 mb-6 shadow-lg shadow-orange-500/10">
<svg className="lucide lucide-store w-7 h-7" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
<path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
<path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
</svg>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            I adapt to your business
            <br/>
            like I was born there.
          </h2>
<p className="text-lg text-slate-400">
            Every business is different. I understand, I learn, and I adapt.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-slate-700">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-slate-900/40 backdrop-blur-sm">
<span className="text-white font-semibold text-lg flex items-center gap-2">
<svg className="lucide lucide-scissors w-4 h-4 text-orange-500" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="3"></circle>
<path d="M8.12 8.12 12 12"></path>
<path d="M20 4 8.12 15.88"></path>
<circle cx="6" cy="18" r="3"></circle>
<path d="M14.8 14.8 20 20"></path>
</svg>
                Beauty
              </span>
</div>
</div>
<div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-slate-700">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-slate-900/40 backdrop-blur-sm">
<span className="text-white font-semibold text-lg flex items-center gap-2">
<svg className="lucide lucide-user w-4 h-4 text-orange-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                Barbers
              </span>
</div>
</div>
<div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-slate-700">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&amp;w=600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-slate-900/40 backdrop-blur-sm">
<span className="text-white font-semibold text-lg flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-orange-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                Nail Studios
              </span>
</div>
</div>
<div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-slate-700">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-slate-900/40 backdrop-blur-sm">
<span className="text-white font-semibold text-lg flex items-center gap-2">
<svg className="lucide lucide-droplets w-4 h-4 text-orange-500" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</svg>
                Spa
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-gradient-to-b opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">

<div className="flex flex-col mb-12 items-center text-center">
<span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            Live Demo
          </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
            See it in action.

            <span className="text-orange-600">Get a call instantly.</span>
</h2>
<p className="text-lg text-slate-500 max-w-xl">
            Experience how Digalook handles calls with natural language and zero
            latency. Enter your number and we'll call you right now.
          </p>
</div>

<div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-200 p-8 md:p-12 relative overflow-hidden max-w-2xl mx-auto" id="demo-form">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="firstName">
                  First Name
                </label>
<div className="relative">
<input className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400 font-medium shadow-sm" id="firstName" name="firstName" placeholder="Jane" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="lastName">
                  Last Name
                </label>
<div className="relative">
<input className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400 font-medium shadow-sm" id="lastName" name="lastName" placeholder="Doe" type="text"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 flex justify-between" htmlFor="phone">
                Phone Number
                <span className="text-orange-600 text-xs uppercase tracking-wide">
                  Required
                </span>
</label>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<input className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400 font-medium shadow-sm group" id="phone" name="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="email">
                Work Email
              </label>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<input className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400 font-medium shadow-sm" id="email" name="email" placeholder="jane@company.com" type="email"/>
</div>
</div>
<button className="hover:bg-slate-800 transition-all shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 flex gap-2 group text-lg font-bold text-white bg-slate-900 w-full rounded-xl mt-2 pt-4 pb-4 shadow-xl gap-x-2 gap-y-2 items-center justify-center" type="submit">
              Try our AI receptionist now
              <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-xs text-center text-slate-400 mt-6 leading-relaxed px-4">
              I consent to receiving a call from the AI agent for demo purposes.
              Standard rates apply. No spam, we promise.
            </p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12">
          No, I'm not human... but almost.
        </h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
<summary className="flex items-center justify-between">
<h3 className="font-semibold text-slate-900">
                How do I stop answering the phone in my hair salon?
              </h3>
<span className="text-orange-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="mt-4 text-slate-600 leading-relaxed">
              With Digalook, you can forget about managing calls. Our AI
              receptionist handles bookings 24/7 via web, WhatsApp, or phone.
            </p>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
<summary className="flex items-center justify-between">
<h3 className="font-semibold text-slate-900">
                Can I make bookings via WhatsApp with Digalook?
              </h3>
<span className="text-orange-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="mt-4 text-slate-600 leading-relaxed">
              Yes! Digalook integrates fully with WhatsApp to converse with
              clients and secure bookings directly in the chat.
            </p>
</details>
</div>
</div>
</section>

<section className="py-32 bg-orange-600 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto drop-shadow-sm">
          Ready to reclaim your time?
        </h2>
<p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto font-medium">
          Dedicate your time and energy to what truly counts. I'll take care of
          the rest.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<a className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1" href="#demo-form" onclick="event.preventDefault(); document.querySelector('#demo-form').scrollIntoView({ behavior: 'smooth' });">
            Start Today
          </a>
<a className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-white text-orange-600 font-bold hover:bg-orange-50 transition-all shadow-xl" href="#demo-form" onclick="event.preventDefault(); document.querySelector('#demo-form').scrollIntoView({ behavior: 'smooth' });">
<svg className="lucide lucide-calendar w-5 h-5 mr-2" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
            Book a Demo
          </a>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16">
<div className="flex items-center gap-2 mb-6 md:mb-0">
<svg className="w-8 h-8 text-orange-600" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="24" rx="6" width="24"></rect>
</svg>
<span className="text-2xl font-semibold text-white tracking-tight">
              digalook
            </span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-orange-500 transition-colors bg-slate-900 p-3 rounded-full" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="text-slate-400 hover:text-orange-500 transition-colors bg-slate-900 p-3 rounded-full" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-orange-500 transition-colors bg-slate-900 p-3 rounded-full" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
<p>© 2025 Digalook. All rights reserved.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
