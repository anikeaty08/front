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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple day selection logic
        document.querySelectorAll('#calendar-grid button:not(.booked)').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#calendar-grid button').forEach(b => b.classList.remove('active', 'shadow-lg', 'shadow-amber-100'));
                btn.classList.add('active', 'shadow-lg', 'shadow-amber-100');
            });
        });
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="serif text-2xl font-medium tracking-tighter gold-text">SP</span>
<div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
<span className="text-xs uppercase tracking-[0.2em] font-medium hidden sm:block">Grand Kalyan Mantap</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-widest font-medium hover:gold-text transition-colors" href="#home">Home</a>
<a className="text-xs uppercase tracking-widest font-medium hover:gold-text transition-colors" href="#gallery">Gallery</a>
<a className="text-xs uppercase tracking-widest font-medium hover:gold-text transition-colors" href="#availability">Availability</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-slate-800 transition-all" href="#contact">Enquire Now</a>
</div>
<button className="md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
<img alt="Luxury Hall Interior" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
<span className="text-xs font-medium gold-text uppercase tracking-wider">Grand Opening April 24, 2026</span>
</div>
<h1 className="serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8">
                    Where Grandeur Meets <br/>
<span className="italic font-normal opacity-80">Timeless Traditions</span>
</h1>
<p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                    Haveri's most prestigious venue featuring iconic winged horse statues and neoclassical architecture designed for your most precious celebrations.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 gold-gradient text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-200 hover:scale-[1.02] transition-transform" href="#availability">
                        Check Availability
                        <iconify-icon icon="solar:calendar-date-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors" href="#gallery">
                        View Gallery
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="availability">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-start">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="serif text-3xl tracking-tight mb-2">Check Availability</h2>
<p className="text-sm text-slate-500 font-normal">Select a date to view tentative slot status</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-7 gap-2 mb-4 text-center">
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Sun</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Mon</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Tue</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Wed</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Thu</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Fri</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Sat</span>
</div>
<div className="grid grid-cols-7 gap-2 text-center" id="calendar-grid">

<div className="py-4 text-slate-300">29</div>
<div className="py-4 text-slate-300">30</div>
<div className="py-4 text-slate-300">31</div>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">1</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors booked opacity-40">2</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">3</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">4</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">5</button>
<button className="py-4 text-sm font-medium active shadow-lg shadow-amber-100">6</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">7</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">8</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">9</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors booked opacity-40">10</button>
<button className="py-4 text-sm font-medium hover:bg-white rounded-xl transition-colors">11</button>

</div>
<div className="mt-8 flex gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-amber-500"></div>
<span className="text-xs font-medium">Selected</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<span className="text-xs font-medium text-slate-500">Available</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-50 border border-slate-200"></div>
<span className="text-xs font-medium text-slate-300 line-through">Booked</span>
</div>
</div>
</div>

<div className="lg:pl-10" id="contact">
<h2 className="serif text-3xl tracking-tight mb-4">Reserve Your Date</h2>
<p className="text-sm text-slate-500 mb-10 leading-relaxed">Fill out the form below and our venue manager will contact you within 24 hours to discuss your event requirements.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Full Name</label>
<input className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-sm transition-all focus:shadow-lg focus:shadow-amber-50" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Phone Number</label>
<input className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-sm transition-all" placeholder="+91 00000 00000" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Event Type</label>
<select className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-sm appearance-none transition-all">
<option>Wedding Ceremony</option>
<option>Reception</option>
<option>Engagement</option>
<option>Corporate Event</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Event Date</label>
<input className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-sm transition-all" type="date"/>
</div>
</div>
<button className="w-full py-5 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-3" type="submit">
                            Send Inquiry
                            <iconify-icon icon="solar:paper-plane-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="serif text-4xl tracking-tight mb-4">Architectural Elegance</h2>
<p className="text-slate-500 text-sm max-w-md">Discover our magnificent hall, from the towering grand entrance to the meticulously crafted winged horse statues.</p>
</div>
<div className="flex gap-4">
<span className="text-xs font-medium gold-text uppercase tracking-widest underline underline-offset-8">All View</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest hover:text-slate-600 cursor-pointer">Interior</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest hover:text-slate-600 cursor-pointer">Exterior</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl">
<img alt="Main Hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80 mb-2">Signature Entrance</p>
<h3 className="serif text-2xl">The Iconic Winged Statues</h3>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl aspect-square">
<img alt="Dining Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="group relative overflow-hidden rounded-3xl aspect-square">
<img alt="Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-2 group relative overflow-hidden rounded-3xl h-[300px]">
<img alt="Decoration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-8">
<span className="serif text-3xl font-medium tracking-tighter gold-text">SP</span>
<div className="h-10 w-[1px] bg-slate-200 mx-2"></div>
<span className="text-xs uppercase tracking-[0.2em] font-medium">Grand Kalyan Mantap</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Redefining luxury celebrations in the heart of Haveri. A space where architecture meets emotion, creating memories that last a lifetime.
                    </p>
</div>
<div>
<h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-900 mb-6">Location</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        Guttal Road, Haveri<br/>
                        Karnataka - 581110<br/>
                        India
                    </p>
<a className="inline-flex items-center gap-2 mt-4 text-xs font-semibold gold-text" href="#">
                        Get Directions
                        <iconify-icon icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div>
<h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-900 mb-6">Contact</h4>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-slate-500 hover:gold-text transition-colors" href="tel:9481977142">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            9481977142
                        </a>
<a className="flex items-center gap-3 text-sm text-slate-500 hover:gold-text transition-colors" href="tel:9008561290">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            9008561290
                        </a>
</div>
</div>
</div>
<div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400 font-medium tracking-widest">© 2024 SP GRAND KALYAN MANTAP. ALL RIGHTS RESERVED.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:square-share-line-linear" style={{fontSize: '1.25rem'}}></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" style={{fontSize: '1.25rem'}}></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:videocamera-record-linear" style={{fontSize: '1.25rem'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
