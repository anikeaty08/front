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
      

<nav className="glass-nav fixed w-full z-50 top-0 left-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg tracking-tight font-semibold flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-black font-bold tracking-tighter text-xs">FX</span>
                FENIX
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors duration-200" href="#location">Location</a>
</div>
<a className="hidden sm:flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium py-2 px-4 rounded-full transition-all" href="tel:8456321799">
<span>Book Appointment</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neutral-800/20 to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 mb-8 backdrop-blur-sm">
<div className="flex text-amber-400">
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300">4.9+ Rating from 140+ Google Reviews</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-tight mb-6">
                Fresh Cuts. Sharp Lines. <br className="hidden md:block"/>
<span className="text-neutral-500">Dominican Excellence.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience premium men’s grooming with a friendly, skilled barber team right here in Wappingers Falls. Precision fades and classic styles.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Book Your Appointment
                </button>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 text-white text-sm font-medium transition-all flex items-center justify-center gap-2" href="#services">
                    View Services &amp; Prices
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-neutral-500 text-xs font-medium uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:map-pin" strokeWidth="1.5"></iconify-icon> Wappingers Falls, NY</span>
<span className="w-1 h-1 bg-neutral-800 rounded-full"></span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:scissors" strokeWidth="1.5"></iconify-icon> Walk-Ins Welcome</span>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-neutral-700 transition-colors">
<iconify-icon icon="lucide:trophy" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Top-Rated Quality</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Consistently high reviews across the Hudson Valley testify to our service.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-neutral-700 transition-colors">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Walk-Ins Welcome</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Flexible scheduling and immediate attention to every guest who walks in.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-neutral-700 transition-colors">
<iconify-icon icon="lucide:scissors" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Expert Barbers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Skilled with fades, classics, modern styles, and precise beard detailing.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:bg-neutral-700 transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Community Vibe</h3>
<p className="text-sm text-neutral-500 leading-relaxed">A local, friendly atmosphere where everyone feels at home.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    A Cut Above The Rest
                </h2>
<p className="text-neutral-400 mb-6 leading-relaxed">
                    At Fenix Dominican Barber Shop, we deliver expert haircuts, line-ups, beard trims, and modern styles in a welcoming, community-focused atmosphere.
                </p>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Whether you’re after a classic look or today’s trendiest cuts, our barbers take pride in precision, style, and personal service that keeps our clients coming back to our chair.
                </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 overflow-hidden">

<img alt="Client" className="w-full h-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">
                            1k+
                        </div>
</div>
<span className="text-sm font-medium text-white">Join our satisfied clients</span>
</div>
</div>

<div className="flex-1 order-1 md:order-2 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-800">
<img alt="Barber cutting hair" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-medium text-sm">Mastery in every detail</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-neutral-900" id="services">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Services</h2>
<p className="text-neutral-500">Professional grooming for the modern gentleman.</p>
</div>
<div className="grid gap-4">

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:scissors" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg">Men's Haircut</h3>
<p className="text-xs text-neutral-500">Fade, Taper, Classic Cut</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-neutral-800 hidden sm:block"></div>
<span className="text-white font-medium font-mono text-lg">$30+</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg">Haircut + Beard Trim</h3>
<p className="text-xs text-neutral-500">Full service grooming</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-neutral-800 hidden sm:block"></div>
<span className="text-white font-medium font-mono text-lg">$45+</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:edit-3" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg">Line-ups &amp; Edge-ups</h3>
<p className="text-xs text-neutral-500">Sharp detailing</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-neutral-800 hidden sm:block"></div>
<span className="text-white font-medium font-mono text-lg">$15+</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:smile" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg">Kid's Cuts</h3>
<p className="text-xs text-neutral-500">Patient &amp; friendly service</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-neutral-800 hidden sm:block"></div>
<span className="text-white font-medium font-mono text-lg">$25+</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-white bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-full text-sm font-medium transition-colors" href="tel:8456321799">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="16"></iconify-icon>
                    Book Appointment Now
                </a>
</div>
</div>
</section>

<section className="py-24" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Client Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
<div>
<div className="flex text-amber-500 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg text-neutral-200 leading-relaxed mb-6">“Great cut, really good attention to detail. The barber took his time and made sure everything was perfect.”</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white text-xs font-bold">G</div>
<div>
<p className="text-white text-sm font-medium">Google Reviewer</p>
<p className="text-xs text-neutral-500">Local Guide</p>
</div>
</div>
</div>

<div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
<div>
<div className="flex text-amber-500 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg text-neutral-200 leading-relaxed mb-6">“Immediate walk-in service and excellent barbers — great experience! The vibe is super chill and professional.”</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white text-xs font-bold">S</div>
<div>
<p className="text-white text-sm font-medium">Satisfied Client</p>
<p className="text-xs text-neutral-500">Regular Customer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900" id="location">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col lg:flex-row">

<div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Visit Fenix</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Address</h4>
<p className="text-neutral-400 text-sm">1560 US-9, Wappingers Falls, NY 12590</p>
<a className="text-xs text-white underline decoration-neutral-600 underline-offset-4 mt-2 inline-block hover:decoration-white transition-all" href="https://maps.google.com/?q=1560+US-9,+Wappingers+Falls,+NY+12590" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Contact</h4>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="tel:8456321799">(845) 632-1799</a>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Hours</h4>
<ul className="text-neutral-400 text-sm space-y-1">
<li className="flex justify-between w-40"><span>Mon – Thu</span> <span className="text-white">10 AM – 7 PM</span></li>
<li className="flex justify-between w-40"><span>Fri – Sat</span> <span className="text-white">9 AM – 7:30 PM</span></li>
<li className="flex justify-between w-40"><span>Sunday</span> <span className="text-white">10 AM – 3 PM</span></li>
</ul>
</div>
</div>
</div>
<div className="mt-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-full text-sm font-medium transition-colors" href="tel:8456321799">
                            Call Now to Book
                         </a>
</div>
</div>

<div className="lg:w-1/2 min-h-[300px] bg-neutral-800 relative">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-neutral-600 mb-4 mx-auto" icon="lucide:map" width="48"></iconify-icon>
<p className="text-neutral-500 text-sm">Map View</p>
<p className="text-neutral-600 text-xs mt-2">1560 US-9, Wappingers Falls</p>
</div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-white text-lg tracking-tight font-semibold flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<span className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center text-black font-bold tracking-tighter text-[10px]">FX</span>
                    FENIX
                </a>
<p className="text-neutral-500 text-sm">Where sharp style meets community spirit. ✂️</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-neutral-900 text-center md:text-left">
<p className="text-neutral-600 text-xs">© 2023 Fenix Dominican Barber Shop. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
