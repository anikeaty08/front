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
      

<nav className="fixed z-50 w-full border-b top-0 bg-gradient-to-r from-neutral-100 to-stone-100 border-black/10 text-black">
<div className="sm:px-6 flex h-16 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a className="group flex items-center gap-3 uppercase text-xl font-semibold tracking-tighter text-black" href="/#">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border text-red-500 shadow-inner transition-colors group-hover:bg-white/10 group-hover:text-red-400 border-black/10 bg-black/5">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="10" x="7" y="4"></rect>
<path className="" d="M7 12l10-4"></path>
<path className="" d="M7 16l10-4"></path>
<path className="" d="M7 8l10-4"></path>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
</svg>
</div>
<span className="">Fade away barber shop</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-800">
<a className="transition-colors hover:text-black" href="#services">Services</a>
<a className="transition-colors hover:text-black" href="#gallery">Work</a>
<a className="transition-colors hover:text-black" href="#location">Location</a>
<a className="px-5 py-2 rounded-lg transition-all duration-300 shadow-lg hover:bg-red-500 text-black bg-red-400 shadow-red-100/20" href="#book">
                    Book Now
                </a>
</div>
<button className="md:hidden text-black">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 sm:px-6 overflow-hidden pt-32 pr-4 pb-20 pl-4 relative">

<div className="absolute inset-0 z-0">
<img alt="Barber Shop Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 backdrop-blur-sm bg-white/5 border-white/10">
<div className="flex text-red-500">
<iconify-icon className="" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="12"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-300">Trusted by 500+ locals</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight mb-6 text-white">
                Book Your Cut in <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-red-200">60 Seconds</span>
</h1>
<p className="text-lg mb-10 font-light max-w-lg mx-auto leading-relaxed text-stone-400">
                Premium haircuts, beard trims, and grooming. No long waits. No hassle. Just great cuts.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-all shadow-lg active:scale-[0.98] hover:bg-red-500 text-white bg-red-600 shadow-red-900/20" href="#book">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    BOOK NOW
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 border px-8 py-4 rounded-xl text-base font-medium transition-all active:scale-[0.98] bg-white/5 hover:bg-white/10 border-white/10 text-white" href="tel:+1234567890">
<iconify-icon className="" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Call / Text Us
                </a>
</div>
</div>
</header>

<section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto" id="services">
<div className="flex items-end justify-between mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-white">Services &amp; Pricing</h2>
<p className="text-sm text-stone-500">Select a service to see availability</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative border rounded-2xl p-6 transition-colors cursor-pointer active:bg-stone-800/50 hover:border-red-500/50 bg-stone-900/50 border-stone-800">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-lg transition-colors group-hover:bg-red-600 bg-stone-800 text-white">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white">$45</span>
</div>
<h3 className="text-lg font-medium mb-1 text-white">Signature Haircut</h3>
<p className="text-sm text-stone-500 mb-4">Consultation, precision cut, wash &amp; style.</p>
<div className="flex items-center gap-1 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    30 Minutes
                </div>
</div>

<div className="group relative border rounded-2xl p-6 transition-colors cursor-pointer active:bg-stone-800/50 hover:border-red-500/50 bg-stone-900/50 border-stone-800">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-lg transition-colors group-hover:bg-red-600 bg-stone-800 text-white">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white">$65</span>
</div>
<h3 className="text-lg font-medium mb-1 text-white">Haircut + Beard</h3>
<p className="text-sm text-stone-500 mb-4">Full service cut with beard sculpting &amp; razor line.</p>
<div className="flex items-center gap-1 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    45 Minutes
                </div>
</div>

<div className="group relative border rounded-2xl p-6 transition-colors cursor-pointer active:bg-stone-800/50 hover:border-red-500/50 bg-stone-900/50 border-stone-800">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-lg transition-colors group-hover:bg-red-600 bg-stone-800 text-white">
<iconify-icon icon="solar:face-scan-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white">$30</span>
</div>
<h3 className="text-lg font-medium mb-1 text-white">Beard Trim</h3>
<p className="text-sm text-stone-500 mb-4">Sculpting, trimming, and hot towel finish.</p>
<div className="flex items-center gap-1 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    20 Minutes
                </div>
</div>

<div className="group relative border rounded-2xl p-6 transition-colors cursor-pointer active:bg-stone-800/50 hover:border-red-500/50 bg-stone-900/50 border-stone-800">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-lg transition-colors group-hover:bg-red-600 bg-stone-800 text-white">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white">$20</span>
</div>
<h3 className="text-lg font-medium mb-1 text-white">Line-Up</h3>
<p className="text-sm text-stone-500 mb-4">Crisp edges around ears, neck, and forehead.</p>
<div className="flex items-center gap-1 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    15 Minutes
                </div>
</div>
</div>
</section>

<section className="border-y py-20 px-4 sm:px-6 border-white/5 bg-stone-900/20">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center text-white">Why Locals Choose The Forge</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-red-500 bg-stone-800">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Master Barbers</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">5+ years average experience. We don't hire rookies, only the best with the blade.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-red-500 bg-stone-800">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Easy Booking</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">Book in seconds from your phone. Real-time availability, no phone tag.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-red-500 bg-stone-800">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Premium Experience</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">Clean shop, complimentary beverage, and a relaxing atmosphere every time.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto" id="gallery">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-white">Recent Cuts</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-[4/5] rounded-xl overflow-hidden group bg-stone-900">
<img alt="Fade haircut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden group bg-stone-900">
<img alt="Beard trim" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden group bg-stone-900">
<img alt="Barber working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden group bg-stone-900">
<img alt="Finished cut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6" id="book">
<div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 relative overflow-hidden border bg-stone-900 border-white/5">

<div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-red-500/10"></div>
<div className="relative z-10 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">Ready to Look Sharp?</h2>
<p className="mb-8 max-w-lg mx-auto text-stone-400">
                    Select a time that works for you. No account required to view availability.
                </p>

<div className="rounded-2xl border p-6 max-w-sm mx-auto shadow-2xl bg-stone-950 border-stone-800">
<div className="flex items-center justify-between mb-6 border-b pb-4 border-white/5">
<span className="font-medium text-white">Next Available</span>
<span className="text-xs font-medium px-2 py-1 rounded text-red-500 bg-red-500/10">Today</span>
</div>
<div className="space-y-3 mb-6">
<button className="w-full text-left px-4 py-3 rounded-xl border transition-all flex justify-between group hover:border-red-500 border-stone-800 hover:bg-stone-900">
<span className="text-sm text-stone-300">2:00 PM</span>
<span className="text-xs text-stone-500 group-hover:text-red-500">Select</span>
</button>
<button className="w-full text-left px-4 py-3 rounded-xl border transition-all flex justify-between group hover:border-red-500 border-stone-800 hover:bg-stone-900">
<span className="text-sm text-stone-300">3:30 PM</span>
<span className="text-xs text-stone-500 group-hover:text-red-500">Select</span>
</button>
<button className="w-full text-left px-4 py-3 rounded-xl border transition-all flex justify-between group hover:border-red-500 border-stone-800 hover:bg-stone-900">
<span className="text-sm text-stone-300">4:15 PM</span>
<span className="text-xs text-stone-500 group-hover:text-red-500">Select</span>
</button>
</div>
<button className="w-full py-3 rounded-xl font-medium transition-colors bg-white text-stone-950 hover:bg-stone-200">
                        View Full Calendar
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5" id="location">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2 text-white">
<iconify-icon className="text-red-500" icon="solar:chat-square-like-linear"></iconify-icon>
                    What Guys Are Saying
                </h3>
<div className="space-y-4">
<div className="p-5 rounded-xl border bg-stone-900/30 border-white/5">
<div className="flex mb-2 text-red-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic text-stone-400">"Best fade in the city. The vibe is chill and they respect your time. In and out in 45 mins looking crisp."</p>
<p className="text-xs text-stone-500 mt-2 font-medium">— Marcus T.</p>
</div>
<div className="p-5 rounded-xl border bg-stone-900/30 border-white/5">
<div className="flex mb-2 text-red-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic text-stone-400">"Finally found a barber who understands how to trim a beard properly. Highly recommend the full service."</p>
<p className="text-xs text-stone-500 mt-2 font-medium">— Jason R.</p>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2 text-white">
<iconify-icon className="text-red-500" icon="solar:map-point-linear"></iconify-icon>
                    Find Us
                </h3>
<div className="w-full h-48 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border bg-stone-900 border-white/5">

<div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&amp;zoom=14&amp;size=600x300&amp;sensor=false')] bg-cover bg-center opacity-50 grayscale"></div>
<button className="relative z-10 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium border transition-colors bg-stone-950/80 text-white border-white/10 hover:bg-stone-900">
                        Open in Maps
                     </button>
</div>
<div className="flex flex-col gap-4 text-sm">
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-500 mt-1 flex-shrink-0" icon="solar:map-point-linear" width="18"></iconify-icon>
<div>
<p className="font-medium text-white">1248 Market Street</p>
<p className="text-stone-500">Downtown District, City, ST 90210</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-500 mt-1 flex-shrink-0" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<div>
<div className="flex justify-between w-48 mb-1">
<span className="text-stone-400">Mon - Fri</span>
<span className="text-white">9am - 7pm</span>
</div>
<div className="flex justify-between w-48">
<span className="text-stone-400">Saturday</span>
<span className="text-white">10am - 5pm</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 mt-2">
<a className="flex items-center gap-2 border-b pb-0.5 transition-colors hover:text-red-500 hover:border-red-500 text-white border-white/20" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                            (555) 123-4567
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-12 pb-28 md:pb-12 px-4 sm:px-6 border-white/5 bg-stone-950">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-lg font-bold tracking-tight mb-2 text-white">THE FORGE</p>
<p className="text-xs text-stone-600">© 2024 The Forge Barber Shop. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon>
</a>
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-8 text-center md:text-left">
<p className="text-[10px] uppercase tracking-wider text-stone-700">
                Cancellation Policy: Please provide 24 hours notice for cancellations to avoid a fee.
            </p>
</div>
</footer>

<div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
<a className="flex items-center justify-between p-4 rounded-xl shadow-xl transition-colors hover:bg-red-500 text-white shadow-black/50 bg-red-600" href="#book">
<div className="flex flex-col items-start">
<span className="text-xs font-medium uppercase tracking-wider text-red-100">Next Slot Today</span>
<span className="font-semibold">Book Appointment</span>
</div>
<div className="p-2 rounded-lg bg-white/20">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
</a>
</div>

    </>
  );
}
