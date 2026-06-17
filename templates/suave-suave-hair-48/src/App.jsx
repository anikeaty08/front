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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="logo-group flex items-center gap-3 group cursor-pointer text-white" href="#">

<h1 className="font-brand text-2xl tracking-tight font-medium uppercase flex items-baseline gap-[1px]">
<span>S</span>

<svg className="scissor-u w-[0.7em] h-[0.7em] fill-current text-rose-300 transition-transform duration-500 ease-out mx-[1px] relative top-[0.1em]" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<g className="scissor-blade-left transition-transform duration-500">

<path d="M7 2 L7 12 Q7 15 9 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>

<circle cx="9.5" cy="18.5" fill="none" r="3" stroke="currentColor" strokeWidth="2"></circle>
</g>

<g className="scissor-blade-right transition-transform duration-500">

<path d="M17 2 L17 12 Q17 15 15 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>

<circle cx="14.5" cy="18.5" fill="none" r="3" stroke="currentColor" strokeWidth="2"></circle>
</g>

<circle className="text-rose-400" cx="12" cy="14" fill="currentColor" r="1"></circle>
</svg>
<span>ave</span>
<span className="w-2"></span> 
<span>Sua</span>

<svg className="comb-v w-[0.75em] h-[0.75em] fill-current text-rose-300 transition-transform duration-500 ease-out mx-[0px] relative top-[0.15em]" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<path d="M4 4 L12 22" stroke="currentColor" strokeLinecap="square" strokeWidth="2.5"></path>

<path d="M12 22 L20 4" stroke="currentColor" strokeWidth="1.5"></path>

<path d="M13 19.5 H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M14 17 H17.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M15 14.5 H19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M16 12 H20.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M17 9.5 H22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M18 7 H23" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span>e</span>
</h1>
</a>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm font-medium text-white hover:border-white/20" href="tel:+447507736102">
<i className="w-4 h-4 text-rose-300" data-lucide="phone"></i>
<span>Book Appointment</span>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                    Accepting Walk-ins &amp; Appointments
                </div>
<h1 className="font-brand text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9] font-medium">
                    Sharp.<br/>
<span className="text-neutral-500 italic pr-2">Suave.</span>Styled.
                </h1>
<p className="text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                    Premium grooming for the modern gentleman. We specialize in precision fades, shape-ups, and beard sculpting. Elevate your look today.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors duration-200 text-lg" href="tel:+447507736102">
<i className="w-5 h-5" data-lucide="phone-call"></i>
                        +44 7507 736102
                    </a>
<button className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors duration-200 text-lg font-medium">
                        View Services
                    </button>
</div>
</div>

<div className="relative h-[600px] hidden lg:block">
<div className="absolute right-0 top-0 w-80 h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10">
<img alt="Sharp fade haircut" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
</div>
<div className="absolute left-10 bottom-10 w-72 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out z-0 grayscale hover:grayscale-0">
<img alt="Barber styling hair" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">

<div className="space-y-8">
<h2 className="font-brand text-4xl sm:text-5xl text-white tracking-tight">The Art of the Cut</h2>
<p className="text-xl text-neutral-400 leading-relaxed font-light">
                        At Suave Suave, we don't just cut hair; we curate confidence. Whether you need a crisp skin fade, a classic taper, or a detailed beard lineup, our chair is ready for you.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-6 rounded-xl bg-white/5 border border-white/5">
<i className="text-rose-300 w-8 h-8 mb-4" data-lucide="scissors"></i>
<h3 className="text-white text-lg font-medium mb-1">Expert Fades</h3>
<p className="text-neutral-500 text-base">Seamless blends and precise lineups.</p>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/5">
<i className="text-rose-300 w-8 h-8 mb-4" data-lucide="crown"></i>
<h3 className="text-white text-lg font-medium mb-1">Beard Care</h3>
<p className="text-neutral-500 text-base">Sculpting and hot towel treatments.</p>
</div>
</div>
</div>

<div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-4 mb-8">
<i className="text-white w-6 h-6" data-lucide="clock"></i>
<h3 className="text-2xl font-medium text-white tracking-tight">Opening Hours</h3>
</div>
<div className="space-y-4 text-lg">

<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-neutral-400">Monday</span>
<span className="text-white font-medium">9:30 AM – 8:00 PM</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-neutral-400">Tuesday</span>
<span className="text-white font-medium">9:30 AM – 8:00 PM</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-neutral-400">Wednesday</span>
<span className="text-white font-medium">9:30 AM – 8:00 PM</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-neutral-400">Thursday</span>
<span className="text-white font-medium">9:30 AM – 8:00 PM</span>
</div>

<div className="flex justify-between items-center pb-3 border-b border-white/5 bg-white/[0.02] -mx-4 px-4 py-2 rounded">
<span className="text-rose-200">Friday</span>
<span className="text-white font-medium">9:00 AM – 9:00 PM</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/5 bg-white/[0.02] -mx-4 px-4 py-2 rounded">
<span className="text-rose-200">Saturday</span>
<span className="text-white font-medium">9:00 AM – 9:00 PM</span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="text-neutral-400">Sunday</span>
<span className="text-white font-medium">10:00 AM – 5:00 PM</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<a className="w-full flex justify-center items-center gap-2 py-3 rounded-lg bg-neutral-100 hover:bg-white text-black font-semibold transition-colors duration-200" href="tel:+447507736102">
                            Call to Book Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-brand text-xl text-neutral-500 tracking-tight uppercase flex items-baseline gap-[1px]">
<span>S</span>

<svg className="w-[0.7em] h-[0.7em] fill-current mx-[1px] relative top-[0.1em]" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 2 L7 12 Q7 15 9 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="9.5" cy="18.5" fill="none" r="3" stroke="currentColor" strokeWidth="2"></circle>
<path d="M17 2 L17 12 Q17 15 15 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="14.5" cy="18.5" fill="none" r="3" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="12" cy="14" fill="currentColor" r="1"></circle>
</svg>
<span>ave</span>
<span className="w-2"></span>
<span>Sua</span>

<svg className="w-[0.75em] h-[0.75em] fill-current mx-[0px] relative top-[0.15em]" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4 L12 22" stroke="currentColor" strokeLinecap="square" strokeWidth="2.5"></path>
<path d="M12 22 L20 4" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M13 19.5 H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M14 17 H17.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M15 14.5 H19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span>e</span>
</span>
</div>
<p className="text-neutral-600 text-sm">© 2024 Suave Suave Hair Salon. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
