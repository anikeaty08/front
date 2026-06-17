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
      
<main className="flex flex-col gap-10 pt-10 pr-4 pb-10 pl-4 items-center">

<section className="w-full max-w-6xl bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden animate-fade-blur delay-100">

<nav className="flex gap-6 sm:px-10 pt-6 pr-6 pb-6 pl-6 items-center justify-between animate-fade-slide delay-200">
<div className="flex items-center gap-2">
<svg className="lucide lucide-box w-6 h-6" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="font-semibold tracking-tight font-sans" style={{}}>NEXUS</span>
</div>
<ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
<li><a className="hover:text-indigo-400 transition-colors font-sans" href="#" style={{}}>Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-sans" href="#" style={{}}>Plans</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors font-sans" href="#" style={{}}>Support</a></li>
</ul>
<div className="flex items-center gap-4 text-sm">
<a className="hidden sm:inline hover:text-indigo-400 transition-colors font-sans" href="#" style={{}}>Login</a>
<a className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-sans" href="#" style={{}}>Get Started</a>
</div>
</nav>

<header className="relative grid md:grid-cols-2">

<div className="relative animate-slide-left delay-300">
<img alt="" className="h-full w-full md:rounded-r-none md:rounded-t-none object-cover rounded-t-3xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed1ea47d-a79b-439d-843e-a77b07aface7_1600w.jpg" style={{}}/>
</div>

<div className="flex flex-col sm:p-12 lg:p-16 gap-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae1952a3-7b58-4714-9f71-0a11ced366f9_1600w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 justify-between animate-slide-right delay-400">
<h1 className="display sm:text-6xl md:text-7xl lg:text-7xl leading-none uppercase !font-extrabold text-5xl tracking-tight font-manrope font-medium animate-fade-blur delay-500" style={{}}>
            DataSync<br/>Pro<br/>Suite
          </h1>
<div className="grid gap-8">

<article className="flex flex-col gap-4 animate-fade-slide delay-600">
<div className="flex items-center gap-3">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<h2 className="display text-xl font-semibold tracking-wide font-sans" style={{}}>Smart Analytics</h2>
</div>
<p className="text-sm text-slate-300 max-w-xs font-sans" style={{}}>Transform data into insights with intelligent processing.</p>
<button className="flex items-center gap-3 text-sm self-start px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors font-sans" style={{}}>
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                View Demo
              </button>
</article>

<article className="flex flex-col gap-4 animate-fade-slide delay-700">
<div className="flex items-center gap-3">
<svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h2 className="display text-xl font-semibold tracking-wide font-sans" style={{}}>Enterprise Security</h2>
</div>
<p className="text-sm text-slate-300 max-w-xs font-sans" style={{}}>Bank-level encryption and compliance for business data.</p>
<button className="flex items-center gap-3 text-sm self-start px-5 py-3 rounded-full bg-lime-500 hover:bg-lime-600 transition-colors font-sans" style={{}}>
                Learn More
                <svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</article>

<article className="flex flex-col gap-4 animate-fade-slide delay-800">
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="" className="w-7 h-7 rounded-full ring-2 ring-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5daf7d77-38db-43d6-99ef-765fb11058b4_800w.jpg" style={{}}/>
<img alt="" className="w-7 h-7 rounded-full ring-2 ring-slate-900" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<img alt="" className="w-7 h-7 rounded-full ring-2 ring-slate-900" src="https://randomuser.me/api/portraits/men/33.jpg"/>
</div>
<h2 className="display text-xl font-semibold tracking-wide font-sans" style={{}}>Limited Time / 50TB</h2>
</div>
<p className="text-sm text-slate-300 max-w-xs font-sans" style={{}}>Join today and receive 50TB storage capacity for new users.</p>
<button className="flex items-center gap-3 text-sm self-start px-5 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors font-sans" style={{}}>
                Discover Features
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>
</div>
</div>
</header>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">

<div className="flex flex-col min-h-[420px] lg:col-span-1 text-white bg-slate-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6edaf09b-bdf5-452f-a440-01295e678315_800w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl justify-between animate-scale-fade delay-900">
<div className="space-y-6">
<div className="flex items-center justify-between animate-fade-slide delay-1000">
<span className="text-sm opacity-70 font-sans" style={{}}>Platform</span>
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<h2 className="display text-4xl leading-tight uppercase font-manrope font-medium animate-fade-blur delay-1100" style={{}}>Transform Your Data Pipeline</h2>
</div>
<div className="flex items-center gap-4 pt-6 animate-fade-slide delay-1200">
<button className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></button>
<button className="p-3 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors"><svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></button>
<button className="p-3 rounded-full bg-lime-500 hover:bg-lime-600 transition-colors"><svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></button>
</div>
</div>

<div className="lg:col-span-1 flex flex-col min-h-[420px] relative overflow-hidden text-white bg-indigo-600 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ba6eb9-a1b0-449f-95b8-463faad7dc74_800w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl justify-between animate-scale-fade delay-1000">
<div className="space-y-6 z-10">
<p className="text-sm opacity-80 font-sans animate-fade-slide delay-1100" style={{}}>Real-time processing</p>
<h2 className="display text-3xl sm:text-4xl leading-tight uppercase font-manrope font-medium animate-fade-blur delay-1200" style={{}}>Scale Without Limits Today</h2>
<a className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm self-start font-sans animate-fade-slide delay-1300" href="#" style={{}}>
            Start Trial
          </a>
</div>
</div>

<div className="flex flex-col min-h-[420px] lg:col-span-1 bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8a33d0d-45b6-4e8f-9b55-3d0c0217f032_800w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl justify-between animate-scale-fade delay-1100">
<div className="space-y-6">
<p className="text-sm text-slate-500 font-sans animate-fade-slide delay-1200" style={{}}>Join thousands</p>
<h2 className="display sm:text-4xl leading-tight uppercase text-3xl font-medium text-slate-900 font-manrope animate-fade-blur delay-1300" style={{}}>Begin Your Journey Now</h2>
</div>
<form className="flex flex-col gap-4 pt-6 animate-fade-slide delay-1400">
<input className="flex-1 px-5 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm placeholder:text-slate-400" placeholder="work@company.com" required="" type="email"/>
<button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white text-sm flex items-center justify-center gap-2 font-sans" style={{}} type="submit">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Continue
          </button>
</form>
</div>
</section>
</main>


    </>
  );
}
