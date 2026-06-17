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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-base font-semibold tracking-tighter uppercase text-stone-900" href="#">
                    Wildhaven
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Destinations</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Experiences</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Journal</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Log in</a>
<a className="bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-1.5" href="#">
                    Book stay
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/60 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-stone-600">Now booking for Summer 2024</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 mb-6 max-w-4xl">
            Disconnect from the noise. <br className="hidden md:block"/> Reconnect with nature.
        </h1>
<p className="text-lg text-stone-500 max-w-2xl mb-10 font-normal leading-relaxed">
            Experience luxury glamping nestled in untouched landscapes. Unplug, unwind, and wake up to the sound of the forest without sacrificing comfort.
        </p>

<div className="w-full max-w-3xl bg-white p-2 rounded-2xl border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row gap-2 relative z-10">
<div className="flex-1 flex items-center px-4 py-3 bg-stone-50 rounded-xl hover:bg-stone-100 cursor-pointer transition-colors group">
<iconify-icon className="text-stone-400 group-hover:text-stone-600 mr-3" icon="solar:map-point-linear" width="20"></iconify-icon>
<div className="flex flex-col items-start">
<span className="text-xs text-stone-500 font-medium">Location</span>
<span className="text-sm text-stone-900">Anywhere</span>
</div>
</div>
<div className="w-px bg-stone-200 hidden sm:block my-2"></div>
<div className="flex-1 flex items-center px-4 py-3 bg-stone-50 rounded-xl hover:bg-stone-100 cursor-pointer transition-colors group">
<iconify-icon className="text-stone-400 group-hover:text-stone-600 mr-3" icon="solar:calendar-linear" width="20"></iconify-icon>
<div className="flex flex-col items-start">
<span className="text-xs text-stone-500 font-medium">Dates</span>
<span className="text-sm text-stone-900">Add dates</span>
</div>
</div>
<div className="w-px bg-stone-200 hidden sm:block my-2"></div>
<div className="flex-1 flex items-center px-4 py-3 bg-stone-50 rounded-xl hover:bg-stone-100 cursor-pointer transition-colors group">
<iconify-icon className="text-stone-400 group-hover:text-stone-600 mr-3" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<div className="flex flex-col items-start">
<span className="text-xs text-stone-500 font-medium">Guests</span>
<span className="text-sm text-stone-900">2 adults</span>
</div>
</div>
<button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors flex items-center justify-center h-full sm:w-auto w-full mt-2 sm:mt-0">
                Search
            </button>
</div>
</main>

<section className="px-6 max-w-7xl mx-auto mb-32 -mt-4">
<div className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
<img alt="Glamping site at dusk" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div>
<h2 className="text-2xl tracking-tight font-medium text-white mb-1">Redwoods Retreat</h2>
<p className="text-sm text-white/80 flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Northern California
                    </p>
</div>
<div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 text-white text-xs">
<iconify-icon icon="solar:sun-2-linear" width="14"></iconify-icon> 72°F Clear
                </div>
</div>
</div>
</section>

<section className="bg-white border-y border-stone-200/50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Everything you need, nothing you don't.</h2>
<p className="text-base text-stone-500">We've stripped away the excess to focus on what matters: comfort, design, and an immersive connection with the outdoors.</p>
</div>
<a className="text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors flex items-center gap-1 border-b border-stone-900 pb-0.5 self-start md:self-auto" href="#">
                    View all amenities <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div>
<div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 mb-5 text-stone-700">
<iconify-icon icon="solar:bed-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-2">Luxury Bedding</h3>
<p className="text-sm text-stone-500 leading-relaxed">Sleep soundly on Casper mattresses fitted with percale cotton sheets and down duvets.</p>
</div>

<div>
<div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 mb-5 text-stone-700">
<iconify-icon icon="solar:bath-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-2">Private En-suites</h3>
<p className="text-sm text-stone-500 leading-relaxed">Enjoy hot showers in your own private bathroom, stocked with organic botanical products.</p>
</div>

<div>
<div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 mb-5 text-stone-700">
<iconify-icon icon="solar:fire-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-2">Personal Fire Pits</h3>
<p className="text-sm text-stone-500 leading-relaxed">Every tent comes with a smokeless fire pit, complimentary firewood, and s'mores kits.</p>
</div>

<div>
<div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 mb-5 text-stone-700">
<iconify-icon icon="solar:map-arrow-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-2">Curated Trails</h3>
<p className="text-sm text-stone-500 leading-relaxed">Access miles of private hiking trails right from your doorstep, mapped for all skill levels.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Choose your haven</h2>

<div className="hidden sm:flex bg-stone-100 p-1 rounded-lg border border-stone-200/60">
<button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-sm font-medium text-stone-900">All</button>
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Safari Tents</button>
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Cabins</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative bg-stone-100 border border-stone-200/50">
<img alt="Safari Tent" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">Classic Safari Tent</h3>
<div className="flex items-center gap-1 text-sm font-medium text-stone-900">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="14"></iconify-icon> 4.9
                    </div>
</div>
<p className="text-sm text-stone-500 mb-3 line-clamp-2">Spacious canvas tent on a raised wooden deck, featuring a king-size bed and private outdoor seating area.</p>
<div className="flex items-center gap-4 text-xs text-stone-400 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> Up to 2 guests</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear" width="14"></iconify-icon> 320 sq ft</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-stone-100">
<span className="text-sm text-stone-900"><span className="font-medium">$189</span> <span className="text-stone-500">/ night</span></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative bg-stone-100 border border-stone-200/50">
<img alt="Family Cabin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">A-Frame Cabin</h3>
<div className="flex items-center gap-1 text-sm font-medium text-stone-900">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="14"></iconify-icon> 5.0
                    </div>
</div>
<p className="text-sm text-stone-500 mb-3 line-clamp-2">Modern architectural cabin with floor-to-ceiling windows, full kitchen, and panoramic forest views.</p>
<div className="flex items-center gap-4 text-xs text-stone-400 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> Up to 4 guests</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear" width="14"></iconify-icon> 650 sq ft</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-stone-100">
<span className="text-sm text-stone-900"><span className="font-medium">$345</span> <span className="text-stone-500">/ night</span></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative bg-stone-100 border border-stone-200/50">
<img alt="Riverside Tent" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">Riverside Oasis</h3>
<div className="flex items-center gap-1 text-sm font-medium text-stone-900">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="14"></iconify-icon> 4.8
                    </div>
</div>
<p className="text-sm text-stone-500 mb-3 line-clamp-2">Premium secluded tent situated feet away from a babbling creek, featuring a private soaking tub.</p>
<div className="flex items-center gap-4 text-xs text-stone-400 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> Up to 2 guests</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear" width="14"></iconify-icon> 400 sq ft</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-stone-100">
<span className="text-sm text-stone-900"><span className="font-medium">$275</span> <span className="text-stone-500">/ night</span></span>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-white py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-700 mb-8" icon="solar:quote-left-bold-duotone" width="48"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-8 text-stone-200">
                "The perfect balance of untamed wilderness and refined comfort. We fell asleep to the sound of owls and woke up to espresso in bed. Truly unforgettable."
            </h2>
<div className="flex items-center justify-center gap-4">
<img alt="Guest" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="text-left">
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-stone-400">Stayed in the A-Frame Cabin</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200/50 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="text-lg font-semibold tracking-tighter uppercase text-stone-900 block mb-4" href="#">
                    Wildhaven
                </a>
<p className="text-sm text-stone-500">Elevated outdoor hospitality. Reconnecting people with nature through thoughtful design and curated experiences.</p>
</div>
<div className="flex gap-16 sm:gap-24">
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-2">Explore</span>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Our Locations</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Accommodations</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Activities</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-stone-900 uppercase tracking-wider mb-2">Company</span>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">About Us</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Careers</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Wildhaven Hospitality. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-stone-400 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-stone-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
