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
      

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0f0f0f]/70 border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-white font-semibold tracking-[0.05em] text-lg hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
                KAIROS
            </a>

<nav className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="bg-[#C5A059] hover:bg-[#b08d4b] text-[#0f0f0f] text-xs font-semibold px-6 py-2.5 rounded-full transition-colors duration-300" href="https://wa.me/27825385716?text=Hi%20Kairos,%20I%E2%80%99d%20like%20to%20book%20a%20chauffeur%20service.">
                    WhatsApp
                </a>
</nav>
</div>
</header>


<div className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Car Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/60 to-[#0f0f0f]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
<span className="text-xs font-medium text-[#C5A059] tracking-wide uppercase">Premium Transport</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 leading-[1.05] drop-shadow-2xl">
                Arrive in 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Excellence.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 font-normal mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                Experience the pinnacle of chauffeured travel in Johannesburg and Cape Town. Where comfort meets punctuality.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="md:w-auto hover:bg-[#b08d4b] transition-all duration-300 gold-glow text-sm font-semibold text-[#0f0f0f] bg-[#C5A059] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://wa.me/27626772146">
                    Book via WhatsApp
                </a>
<a className="w-full md:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300" href="#services">
                    View Services
                </a>
</div>
</div>
</div>

<section className="py-24 px-6 relative bg-[#0f0f0f]" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Services</h2>
<p className="text-neutral-400 max-w-sm">Tailored transport solutions designed for executives, travelers, and private clients.</p>
</div>
<div className="h-px w-full md:w-auto flex-1 bg-gradient-to-r from-white/10 to-transparent md:ml-12 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#141414] border border-white/5 p-8 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 text-[#C5A059] border border-white/5 group-hover:border-[#C5A059]/20 transition-colors">
<svg className="lucide lucide-plane w-5 h-5" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Airport Transfers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Flight-tracked pick-ups &amp; drop-offs ensuring you are never late for a flight.</p>
</div>
</div>

<div className="group relative bg-[#141414] border border-white/5 p-8 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 text-[#C5A059] border border-white/5 group-hover:border-[#C5A059]/20 transition-colors">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Point-to-Point</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Seamless 24/7 city transport from any location to your destination.</p>
</div>
</div>

<div className="group relative bg-[#141414] border border-white/5 p-8 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 text-[#C5A059] border border-white/5 group-hover:border-[#C5A059]/20 transition-colors">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Hourly Hire</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Flexible chauffeur services by the hour for meetings, events, or leisure.</p>
</div>
</div>

<div className="group relative bg-[#141414] border border-white/5 p-8 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 text-[#C5A059] border border-white/5 group-hover:border-[#C5A059]/20 transition-colors">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Corporate</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Professional executive travel solutions for business professionals.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 px-6 bg-[#0a0a0a]" id="about">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase mb-8">About Kairos</h2>
<p className="text-2xl md:text-3xl text-white font-normal leading-relaxed mb-12">
                We provide professional, discreet transport for clients who value punctuality, comfort, and privacy above all else.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div className="flex flex-col items-center gap-3">
<svg className="lucide lucide-shield-check text-[#C5A059] w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium text-neutral-400">Licensed &amp; Insured</span>
</div>
<div className="flex flex-col items-center gap-3">
<svg className="lucide lucide-user-check text-[#C5A059] w-6 h-6" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium text-neutral-400">Pro Chauffeurs</span>
</div>
<div className="flex flex-col items-center gap-3">
<svg className="lucide lucide-clock-4 text-[#C5A059] w-6 h-6" data-lucide="clock-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium text-neutral-400">24/7 Availability</span>
</div>
<div className="flex flex-col items-center gap-3">
<svg className="lucide lucide-sparkles text-[#C5A059] w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium text-neutral-400">Immaculate Vehicles</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/5 via-[#0f0f0f] to-[#0f0f0f]"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to book your ride?</h2>
<p className="text-lg text-neutral-400 mb-12 max-w-lg mx-auto">Message us on WhatsApp. Our team is ready to assist with your itinerary immediately.</p>
<a className="inline-flex items-center gap-2 hover:bg-[#b08d4b] transition-all duration-300 transform hover:scale-[1.01] shadow-[#C5A059]/20 text-base font-semibold text-[#0f0f0f] bg-[#C5A059] rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg" href="https://wa.me/27626772146">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Book on WhatsApp
            </a>
</div>
</section>

<footer className="py-12 border-t border-white/5 px-6 text-center md:text-left bg-[#080808]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="block text-white font-semibold tracking-wide text-base mb-3">KAIROS</span>
<span className="block text-neutral-500 text-xs tracking-wide">Johannesburg | Cape Town | Pretoria</span>
</div>
<div className="flex flex-col gap-4 items-center md:items-end">
<a className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2" href="mailto:info@kairoschauffeurs.co.za">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    info@kairoschauffeurs.co.za
                </a>
<span className="text-xs text-neutral-600">© 2024 Kairos Chauffeurs. All rights reserved.</span>
</div>
</div>
</footer>

    </>
  );
}
