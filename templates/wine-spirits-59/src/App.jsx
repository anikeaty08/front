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
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B48F1F',
},
wine: {
900: '#2C041C',
950: '#1A0210',
}
},
backgroundImage: {
'luxury-gradient': 'radial-gradient(circle at top center, #4a041d 0%, #0a0a0a 60%)',
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<svg aria-hidden="true" className="iconify text-gold-400 group-hover:rotate-12 transition-transform duration-500 iconify--lucide" data-icon="lucide:grape" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 5V2l-5.89 5.89"></path><circle cx="16.6" cy="15.89" r="3"></circle><circle cx="8.11" cy="7.4" r="3"></circle><circle cx="12.35" cy="11.65" r="3"></circle><circle cx="13.91" cy="5.85" r="3"></circle><circle cx="18.15" cy="10.09" r="3"></circle><circle cx="6.56" cy="13.2" r="3"></circle><circle cx="10.8" cy="17.44" r="3"></circle><circle cx="5" cy="19" r="3"></circle></g></svg>
<span className="font-serif text-2xl tracking-tighter text-white font-medium">VINTAGE &amp; VINE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-gold-400 transition-colors" href="#exhibitors">Exhibitors</a>
<a className="hover:text-gold-400 transition-colors" href="#schedule">Schedule</a>
<a className="hover:text-gold-400 transition-colors" href="#venue">Venue</a>
<a className="px-6 py-2 border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-neutral-950 transition-all duration-300 rounded-sm uppercase text-xs tracking-widest" href="#tickets">
                    Book Tickets
                </a>
</div>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-luxury-gradient opacity-80 z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-neutral-400">Oct 24-26, 2024 • Paris, France</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium tracking-tight mb-6 leading-none">
                The Art of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500 italic pr-4">Fine Spirits</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Join the world's most distinguished sommeliers, distillers, and connoisseurs for an immersive three-day exhibition of rare vintages and artisanal spirits.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-neutral-950 text-sm tracking-widest uppercase font-medium transition-colors duration-300" href="#tickets">
                    Reserve Access
                </a>
<a className="w-full md:w-auto px-8 py-4 border border-white/20 hover:border-white/40 text-white text-sm tracking-widest uppercase font-medium transition-colors duration-300 flex items-center justify-center gap-2 group" href="#schedule">
<span>View Program</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:chevron-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</header>

<section className="border-y border-white/5 bg-neutral-950 relative z-20">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<p className="font-serif text-4xl text-white mb-1">250+</p>
<p className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-gold-400 transition-colors">Global Brands</p>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<p className="font-serif text-4xl text-white mb-1">45</p>
<p className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-gold-400 transition-colors">Masterclasses</p>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<p className="font-serif text-4xl text-white mb-1">12</p>
<p className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-gold-400 transition-colors">Michelin Chefs</p>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<p className="font-serif text-4xl text-white mb-1">3</p>
<p className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-gold-400 transition-colors">Days of Excellence</p>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-24 pb-24 relative" id="exhibitors">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-serif mb-4">Curated Selection</h2>
<p className="text-neutral-400 font-light max-w-md">Experience an exclusive assemblage of the world's finest wineries and distilleries.</p>
</div>
<button className="text-gold-400 hover:text-gold-500 flex items-center gap-2 text-sm tracking-widest uppercase transition-colors">
                    View All Exhibitors <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">

<div className="group relative bg-neutral-900 overflow-hidden aspect-[3/4]">
<img alt="Wine" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<p className="text-gold-400 text-xs uppercase tracking-widest mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">Bordeaux</p>
<h3 className="font-serif text-2xl text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Château Margaux</h3>
</div>
</div>

<div className="group relative bg-neutral-900 overflow-hidden aspect-[3/4]">
<img alt="Whiskey" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<p className="text-gold-400 text-xs uppercase tracking-widest mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">Highlands</p>
<h3 className="font-serif text-2xl text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">The Macallan</h3>
</div>
</div>

<div className="group relative bg-neutral-900 overflow-hidden aspect-[3/4]">
<img alt="Champagne" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<p className="text-gold-400 text-xs uppercase tracking-widest mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">Champagne</p>
<h3 className="font-serif text-2xl text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Dom Pérignon</h3>
</div>
</div>

<div className="group relative bg-neutral-900 overflow-hidden aspect-[3/4]">
<img alt="Wine" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<p className="text-gold-400 text-xs uppercase tracking-widest mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">Tuscany</p>
<h3 className="font-serif text-2xl text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Antinori</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="schedule">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wine-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<h2 className="font-serif text-4xl md:text-5xl text-white mb-16 text-center tracking-tight">Program Schedule</h2>
<div className="space-y-8">

<div className="flex items-center gap-4 mb-8">
<h3 className="text-gold-400 font-serif text-2xl italic">Day 1 — October 24</h3>
<div className="h-px bg-white/10 flex-grow"></div>
</div>

<div className="group flex flex-col md:flex-row gap-6 md:items-center p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-400/30 transition-all duration-300">
<div className="md:w-32 flex-shrink-0">
<span className="text-sm font-light text-neutral-400 block">10:00 AM</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Grand Hall</span>
</div>
<div className="flex-grow">
<h4 className="text-xl text-white font-serif tracking-tight mb-1 group-hover:text-gold-400 transition-colors">Opening Ceremony &amp; Grand Tasting</h4>
<p className="text-neutral-400 text-sm font-light">Inaugural toast followed by unrestricted access to the main exhibition floor.</p>
</div>
<div className="flex-shrink-0">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-neutral-400 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wine" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group flex flex-col md:flex-row gap-6 md:items-center p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-400/30 transition-all duration-300">
<div className="md:w-32 flex-shrink-0">
<span className="text-sm font-light text-neutral-400 block">02:00 PM</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Suite A</span>
</div>
<div className="flex-grow">
<h4 className="text-xl text-white font-serif tracking-tight mb-1 group-hover:text-gold-400 transition-colors">Masterclass: The Aging Process</h4>
<p className="text-neutral-400 text-sm font-light">Hosted by Master Distiller James Richardson, exploring oak influence.</p>
</div>
<div className="flex-shrink-0">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-neutral-400 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</span>
</div>
</div>

<div className="group flex flex-col md:flex-row gap-6 md:items-center p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-400/30 transition-all duration-300">
<div className="md:w-32 flex-shrink-0">
<span className="text-sm font-light text-neutral-400 block">07:00 PM</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Rooftop</span>
</div>
<div className="flex-grow">
<h4 className="text-xl text-white font-serif tracking-tight mb-1 group-hover:text-gold-400 transition-colors">Twilight Gala Dinner</h4>
<p className="text-neutral-400 text-sm font-light">Five-course pairing menu prepared by Michelin Star Chef Elena Arzak.</p>
</div>
<div className="flex-shrink-0">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-neutral-400 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-neutral-400 hover:text-white text-sm border-b border-transparent hover:border-white transition-all pb-1">Download Full Itinerary</button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-t border-white/5" id="tickets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl text-white mb-4 tracking-tight">Secure Your Attendance</h2>
<p className="text-neutral-400 font-light">Select your preferred level of access.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="flex flex-col p-8 border border-white/10 bg-neutral-950 hover:border-white/20 transition-colors relative group">
<h3 className="font-serif text-2xl text-white mb-2">Enthusiast</h3>
<div className="text-3xl font-light text-neutral-300 mb-6">€150</div>
<p className="text-neutral-500 text-sm mb-8 leading-relaxed">Perfect for those beginning their journey into fine spirits.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg aria-hidden="true" className="iconify text-neutral-600 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Day pass for exhibition floor
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg aria-hidden="true" className="iconify text-neutral-600 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Complimentary tasting glass
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg aria-hidden="true" className="iconify text-neutral-600 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Event guide
                        </li>
</ul>
<button className="w-full py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase">Select</button>
</div>

<div className="flex flex-col p-8 border border-gold-500/50 bg-neutral-950 relative transform md:-translate-y-4 shadow-2xl shadow-gold-900/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">Most Popular</div>
<h3 className="font-serif text-2xl text-gold-400 mb-2">Connoisseur</h3>
<div className="text-3xl font-light text-white mb-6">€350</div>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">Comprehensive access for the dedicated collector.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-gold-400 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            3-Day exhibition access
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-gold-400 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Priority entry to Masterclasses
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-gold-400 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Access to VIP Lounge
                        </li>
</ul>
<button className="w-full py-3 bg-gold-500 text-black hover:bg-gold-400 transition-all duration-300 text-sm tracking-widest uppercase font-medium">Select</button>
</div>

<div className="flex flex-col p-8 border border-white/10 bg-neutral-950 hover:border-white/20 transition-colors relative group">
<h3 className="font-serif text-2xl text-white mb-2">Sommelier</h3>
<div className="text-3xl font-light text-neutral-300 mb-6">€850</div>
<p className="text-neutral-500 text-sm mb-8 leading-relaxed">The ultimate industry experience with exclusive networking.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg aria-hidden="true" className="iconify text-neutral-600 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            All Connoisseur privileges
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg aria-hidden="true" className="iconify text-neutral-600 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Gala Dinner invitation
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg aria-hidden="true" className="iconify text-neutral-600 mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Private rare vintage tastings
                        </li>
</ul>
<button className="w-full py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase">Select</button>
</div>
</div>
</div>
</section>

<section className="relative bg-neutral-950 border-t border-white/5" id="venue">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-24 flex flex-col justify-center">
<span className="text-gold-400 text-xs tracking-widest uppercase mb-4">The Venue</span>
<h2 className="font-serif text-4xl md:text-5xl text-white mb-8 tracking-tight">Le Grand Palais Éphémère</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Location</h4>
<p className="text-neutral-400 font-light text-sm">2 Place Joffre, 75007 Paris, FranceFacing the Eiffel Tower</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Opening Hours</h4>
<p className="text-neutral-400 font-light text-sm">Thurs - Sat: 10:00 AM - 8:00 PMGala Night: Sat 8:00 PM - Late</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Contact</h4>
<p className="text-neutral-400 font-light text-sm">concierge@vintageandvine.com+33 1 23 45 67 89</p>
</div>
</div>
</div>
</div>
<div className="h-96 lg:h-auto bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-60 hover:grayscale-0 transition-all duration-700"></div>
</div>
</section>

<footer className="bg-black py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:grape" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 5V2l-5.89 5.89"></path><circle cx="16.6" cy="15.89" r="3"></circle><circle cx="8.11" cy="7.4" r="3"></circle><circle cx="12.35" cy="11.65" r="3"></circle><circle cx="13.91" cy="5.85" r="3"></circle><circle cx="18.15" cy="10.09" r="3"></circle><circle cx="6.56" cy="13.2" r="3"></circle><circle cx="10.8" cy="17.44" r="3"></circle><circle cx="5" cy="19" r="3"></circle></g></svg>
<span className="font-serif text-xl tracking-tight text-white">VINTAGE &amp; VINE</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 tracking-wider uppercase">
<a className="hover:text-white transition-colors" href="#">Press</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-gold-400 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-gold-400 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-500 hover:text-gold-400 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div className="text-center mt-12 text-neutral-700 text-xs font-light">
            © 2024 Vintage &amp; Vine Expo. All rights reserved.
        </div>
</footer>

    </>
  );
}
