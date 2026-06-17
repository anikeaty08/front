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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
bg: '#F2F7F5',
dark: '#123028',
primary: '#1F4D42',
accent: '#D4E66D',
surface: '#ffffff',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



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
      

<main className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm w-full max-w-[1440px] mx-auto overflow-hidden relative flex flex-col pb-10">

<nav className="flex md:px-10 md:py-8 z-20 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="flex items-center gap-3">
<div className="text-brand-primary">
<svg className="fill-current text-blue-500" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L12 22" stroke="currentColor" strokeWidth="0"></path>
<path d="M2 12L22 12" stroke="currentColor" strokeWidth="0"></path>
<path className="fill-lime-400" d="M4 12C4 7.58172 7.58172 4 12 4V12H4Z"></path>
<path className="fill-blue-600" d="M12 12V20C16.4183 20 20 16.4183 20 12H12Z"></path>
</svg>
</div>
<span className="text-brand-dark -translate-x-1 -translate-y-1 text-lg font-semibold tracking-tight font-poppins scale-110">Aveley Dental Practice</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-500">
<a className="hover:text-brand-dark transition-colors font-poppins" href="#">Home</a>
<a className="hover:text-brand-dark transition-colors font-poppins" href="#">Treatments</a>
<a className="hover:text-brand-dark transition-colors font-poppins" href="#">New Patients</a>
<a className="hover:text-brand-dark transition-colors font-poppins" href="#">Fees</a>
<a className="hover:text-brand-dark transition-colors font-poppins" href="#">Contact</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden lg:block text-sm font-normal underline decoration-1 underline-offset-4 text-brand-dark opacity-60 hover:opacity-100 transition-opacity" href="tel:1239310000">
                    Emergency: 01708 123 456
                </a>
<button className="bg-brand-bg hover:bg-emerald-50 transition-colors p-2.5 rounded-full text-brand-dark group">
<svg className="lucide lucide-menu w-5 h-5 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<div className="flex flex-col md:pt-8 md:pb-8 w-full pt-4 pr-4 pb-6 pl-4">

<div className="text-center max-w-4xl mx-auto mb-10 md:mb-14 z-10 relative">
<h1 className="text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05] tracking-tight">
<span className="block text-brand-primary md:mb-2 italic font-serif-custom opacity-90 mb-1 scale-105">Elevate Your Smile.</span>
<span className="block -translate-y-1 italic font-instrument-serif scale-105">Exceptional Care.</span><span className="block italic text-gray-300 font-instrument-serif scale-105">Glistening Results.</span>
</h1>
</div>

<div className="relative w-full max-w-[1360px] mx-auto aspect-[4/5] md:aspect-[16/9] lg:aspect-[2.2/1] rounded-[2rem] overflow-hidden group shadow-sm">

<img alt="Clean dental practice interior" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:top-8 md:bottom-8 w-auto md:w-[360px] bg-white/95 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl flex flex-col justify-center">
<div className="mb-5">
<h3 className="text-lg font-semibold tracking-tight text-brand-dark">Book an Appointment</h3>
<p className="text-xs text-gray-500 mt-1">New patients welcome. Register today.</p>
</div>
<form className="space-y-3" onsubmit="event.preventDefault();">

<div className="group">
<input className="w-full bg-gray-50 border border-gray-200 text-brand-dark text-sm rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent block p-3 outline-none placeholder-gray-400 transition-all" placeholder="Full Name" type="text"/>
</div>

<div className="group">
<input className="w-full bg-gray-50 border border-gray-200 text-brand-dark text-sm rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent block p-3 outline-none placeholder-gray-400 transition-all" placeholder="Phone Number" type="tel"/>
</div>

<div className="group">
<input className="w-full bg-gray-50 border border-gray-200 text-brand-dark text-sm rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent block p-3 outline-none placeholder-gray-400 transition-all" placeholder="Email Address" type="email"/>
</div>

<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent block p-3 outline-none appearance-none cursor-pointer transition-all hover:bg-gray-100">
<option>General Check-up</option>
<option>Hygienist Appointment</option>
<option>Invisalign Consultation</option>
<option>Emergency Appointment</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<button className="w-full mt-2 bg-brand-dark hover:bg-brand-primary text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
<span className="text-sm">Request Booking</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>

<div className="w-full max-w-[1360px] mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-gray-100 group hover:border-brand-accent/30 transition-colors">
<div className="mb-2 p-3 bg-white rounded-full shadow-sm text-brand-primary group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-3xl font-semibold text-brand-dark tracking-tight mb-1">98%</span>
<span className="text-sm text-gray-500 font-medium">Patient Retention Rate</span>
</div>

<div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-gray-100 group hover:border-brand-accent/30 transition-colors">
<div className="mb-2 p-3 bg-white rounded-full shadow-sm text-brand-primary group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-3xl font-semibold text-brand-dark tracking-tight mb-1">5.0</span>
<span className="text-sm text-gray-500 font-medium">Average Patient Rating</span>
</div>

<div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-gray-100 group hover:border-brand-accent/30 transition-colors">
<div className="mb-2 p-3 bg-white rounded-full shadow-sm text-brand-primary group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-3xl font-semibold text-brand-dark tracking-tight mb-1">&lt;10m</span>
<span className="text-sm text-gray-500 font-medium">Average Wait Time</span>
</div>
</div>

<div className="mt-16 border-t border-dashed border-gray-200 pt-10 w-full max-w-[1000px] mx-auto">
<p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted Partners &amp; Providers</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 flex items-center select-none cursor-default group">
<div className="bg-blue-600 text-white px-2 py-1 font-bold italic tracking-tighter text-lg leading-none">NHS</div>
</div>

<div className="h-8 flex items-center font-medium text-2xl tracking-tight text-slate-800 cursor-default">
                        invisalign
                    </div>

<div className="h-8 flex items-center font-semibold text-2xl text-purple-800 cursor-default tracking-tight">
                        Denplan
                    </div>

<div className="h-8 flex items-center font-bold text-xl text-brand-dark cursor-default tracking-tight">
                        CQC
                        <span className="bg-brand-dark h-1.5 w-1.5 rounded-full ml-0.5"></span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
