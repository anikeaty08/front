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
      

<div className="grain"></div>

<nav className="fixed top-0 w-full z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="md:hidden">
<span className="iconify text-stone-600" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>

<a className="font-serif text-2xl tracking-widest text-stone-900 hover:opacity-70 transition-opacity uppercase" href="#">
                S<span className="tracking-tighter">O</span>MA
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide text-stone-600 font-medium">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Lineage</a>
<a className="hover:text-stone-900 transition-colors" href="#classes">Practice</a>
<a className="hover:text-stone-900 transition-colors" href="#retreats">Retreats</a>
<a className="hover:text-stone-900 transition-colors" href="#schedule">Schedule</a>
</div>

<div className="hidden md:block">
<button className="border border-stone-300 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-all duration-500">
                    Book Session
                </button>
</div>

<div className="md:hidden">
<span className="iconify text-stone-600" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
<div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-stone-200 via-stone-100 to-transparent blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 reveal">
<p className="text-stone-500 text-xs uppercase tracking-[0.2em] font-medium mb-4">Established in Silence</p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-900 tracking-tight leading-[0.9]">
                Return to <br/> <span className="italic font-light text-stone-600">the Self</span>
</h1>
<p className="text-stone-600 max-w-lg mx-auto text-lg md:text-xl font-light leading-relaxed pt-4 delay-100 reveal">
                Beyond the physical postures lies the vast ocean of consciousness. We guide you through breath, stillness, and movement towards inner dissolution.
            </p>
<div className="pt-8 flex items-center justify-center space-x-6 delay-200 reveal">
<button className="bg-stone-900 text-stone-50 px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-stone-700 transition-colors">
                    View Schedule
                </button>
<button className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium tracking-wide group">
<span>Our Philosophy</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[3000ms]">
<span className="iconify text-stone-400" data-icon="lucide:arrow-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</header>

<section className="py-24 md:py-32 border-t border-stone-200" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 mb-2">
<span className="iconify text-stone-600" data-icon="lucide:flower-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">The Architecture of Peace</h2>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                        Modern yoga often stops at the body. At Soma, we view asana as merely the first step. Our lineage-based approach integrates Pranayama (breath control), Dhyana (meditation), and Svadyaya (self-inquiry).
                    </p>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                        We are not a gym. We are a sanctuary for the spirit, offering a path to deconstruct the ego and reconnect with the universal source.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start space-x-3 text-stone-700">
<span className="iconify mt-1 text-stone-400" data-icon="lucide:circle" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Traditional Vinyasa Krama</span>
</li>
<li className="flex items-start space-x-3 text-stone-700">
<span className="iconify mt-1 text-stone-400" data-icon="lucide:circle" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Vedic Chanting &amp; Sound Baths</span>
</li>
<li className="flex items-start space-x-3 text-stone-700">
<span className="iconify mt-1 text-stone-400" data-icon="lucide:circle" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Non-dualistic Teachings</span>
</li>
</ul>
</div>
<div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-square overflow-hidden rounded-2xl bg-stone-200">
<img alt="Meditative state" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/50 border-t border-stone-200" id="classes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-xl">
<h2 className="font-serif text-4xl text-stone-900 tracking-tight mb-4">Our Offerings</h2>
<p className="text-stone-500 font-light">Practices designed to align the subtle body and quiet the mind.</p>
</div>
<a className="hidden md:flex items-center space-x-2 text-stone-500 hover:text-stone-900 transition-colors text-sm border-b border-transparent hover:border-stone-900 pb-0.5" href="#">
<span>View full curriculum</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-sm">
<div className="absolute top-8 right-8 text-stone-300 group-hover:text-stone-500 transition-colors">
<span className="iconify" data-icon="lucide:wind" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">Prana Vinyasa</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                        Breath-initiated movement. A slow, rhythmic flow focusing on the energetic alignment rather than just physical shape.
                    </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-200/50">
<span className="text-xs uppercase tracking-wider text-stone-400">75 Mins</span>
<span className="text-xs uppercase tracking-wider text-stone-400">Moderate</span>
</div>
</div>

<div className="group relative p-8 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-sm">
<div className="absolute top-8 right-8 text-stone-300 group-hover:text-stone-500 transition-colors">
<span className="iconify" data-icon="lucide:moon" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">Yin &amp; Nidra</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                        Deep fascial release followed by psychic sleep. A practice of complete surrender to restore the nervous system.
                    </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-200/50">
<span className="text-xs uppercase tracking-wider text-stone-400">90 Mins</span>
<span className="text-xs uppercase tracking-wider text-stone-400">Gentle</span>
</div>
</div>

<div className="group relative p-8 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-sm">
<div className="absolute top-8 right-8 text-stone-300 group-hover:text-stone-500 transition-colors">
<span className="iconify" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">Kriya &amp; Meditation</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                        Purification techniques involving repetitive action, mantra, and breathwork to awaken the dormant energy (Kundalini).
                    </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-200/50">
<span className="text-xs uppercase tracking-wider text-stone-400">60 Mins</span>
<span className="text-xs uppercase tracking-wider text-stone-400">Advanced</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="iconify inline-block text-stone-400 mb-4" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mb-4">Guides, Not Gurus</h2>
<p className="text-stone-500 font-light">Our teachers are devoted students first, sharing wisdom from established lineages with humility and grace.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="text-center group cursor-pointer">
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl text-stone-900">Elara Vance</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Vedic Chant</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl text-stone-900">Julian Ko</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Pranayama</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl text-stone-900">Sarah M.</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Asana</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-xl text-stone-900">Davide R.</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Meditation</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/50 border-t border-stone-200" id="schedule">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mb-10 text-center">Daily Rhythm</h2>
<div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">

<div className="grid grid-cols-12 gap-4 p-5 bg-stone-50 border-b border-stone-200 text-xs font-medium text-stone-500 uppercase tracking-wider">
<div className="col-span-2">Time</div>
<div className="col-span-5">Practice</div>
<div className="col-span-3">Guide</div>
<div className="col-span-2 text-right"></div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 items-center border-b border-stone-100 hover:bg-stone-50/50 transition-colors group">
<div className="col-span-2 text-stone-900 font-medium font-serif text-lg">06:30</div>
<div className="col-span-5">
<div className="text-stone-900 font-medium">Morning Sadhana</div>
<div className="text-xs text-stone-500 mt-1">Meditation &amp; Kriya</div>
</div>
<div className="col-span-3 text-sm text-stone-600">Davide R.</div>
<div className="col-span-2 text-right">
<button className="text-xs border border-stone-300 rounded-full px-3 py-1.5 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all">Book</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 items-center border-b border-stone-100 hover:bg-stone-50/50 transition-colors group">
<div className="col-span-2 text-stone-900 font-medium font-serif text-lg">08:00</div>
<div className="col-span-5">
<div className="text-stone-900 font-medium">Hatha Sun</div>
<div className="text-xs text-stone-500 mt-1">Solar alignment</div>
</div>
<div className="col-span-3 text-sm text-stone-600">Sarah M.</div>
<div className="col-span-2 text-right">
<button className="text-xs border border-stone-300 rounded-full px-3 py-1.5 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all">Book</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 items-center border-b border-stone-100 hover:bg-stone-50/50 transition-colors group">
<div className="col-span-2 text-stone-900 font-medium font-serif text-lg">17:30</div>
<div className="col-span-5">
<div className="text-stone-900 font-medium">Restorative Sound</div>
<div className="text-xs text-stone-500 mt-1">Crystal bowls &amp; Nidra</div>
</div>
<div className="col-span-3 text-sm text-stone-600">Elara Vance</div>
<div className="col-span-2 text-right">
<button className="text-xs border border-stone-300 rounded-full px-3 py-1.5 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all">Book</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-stone-50/50 transition-colors group">
<div className="col-span-2 text-stone-900 font-medium font-serif text-lg">19:00</div>
<div className="col-span-5">
<div className="text-stone-900 font-medium">Candlelit Yin</div>
<div className="text-xs text-stone-500 mt-1">Deep stretch</div>
</div>
<div className="col-span-3 text-sm text-stone-600">Julian Ko</div>
<div className="col-span-2 text-right">
<button className="text-xs border border-stone-300 rounded-full px-3 py-1.5 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all">Book</button>
</div>
</div>
</div>
<div className="text-center mt-8">
<a className="text-sm text-stone-500 hover:text-stone-900 underline underline-offset-4 decoration-stone-300" href="#">View Full Week Schedule</a>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-6">
<h2 className="font-serif text-4xl text-stone-900 tracking-tight">Energy Exchange</h2>
<p className="text-stone-600 font-light text-lg max-w-md">
                        We offer tiered memberships to support your commitment to the practice. Drop-ins are always welcome for the traveler.
                    </p>
<div className="flex flex-col space-y-4 pt-4">
<div className="flex items-center space-x-3 text-stone-700">
<span className="iconify text-stone-400" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Mat and prop storage included</span>
</div>
<div className="flex items-center space-x-3 text-stone-700">
<span className="iconify text-stone-400" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Access to tea lounge and library</span>
</div>
<div className="flex items-center space-x-3 text-stone-700">
<span className="iconify text-stone-400" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Quarterly private consultation</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col hover:border-stone-400 transition-colors">
<div className="mb-4">
<h3 className="font-serif text-xl text-stone-900">Seeker</h3>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">5 Class Pass</p>
</div>
<div className="mb-6">
<span className="text-3xl font-serif text-stone-900">$110</span>
<span className="text-stone-500 text-sm">/ bundle</span>
</div>
<button className="mt-auto w-full py-3 rounded-lg border border-stone-300 text-sm font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Select</button>
</div>

<div className="p-6 rounded-2xl bg-stone-900 border border-stone-900 flex flex-col text-stone-50 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<span className="iconify text-stone-700" data-icon="lucide:infinity" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="mb-4">
<h3 className="font-serif text-xl text-stone-50">Sadhaka</h3>
<p className="text-xs text-stone-400 mt-1 uppercase tracking-wide">Unlimited Monthly</p>
</div>
<div className="mb-6">
<span className="text-3xl font-serif text-stone-50">$180</span>
<span className="text-stone-400 text-sm">/ month</span>
</div>
<button className="mt-auto w-full py-3 rounded-lg bg-stone-50 text-stone-900 text-sm font-medium hover:bg-stone-200 transition-all">Join</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 pt-20 pb-10 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="font-serif text-2xl tracking-widest text-stone-900 uppercase" href="#">
                        S<span className="tracking-tighter">O</span>MA
                    </a>
<p className="mt-4 text-sm text-stone-500 font-light leading-relaxed">
                        A sacred space for the study of self through the lens of ancient yogic technology.
                    </p>
</div>
<div>
<h5 className="font-medium text-stone-900 mb-4 text-sm">Studio</h5>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li><a className="hover:text-stone-800" href="#">The Space</a></li>
<li><a className="hover:text-stone-800" href="#">Rentals</a></li>
<li><a className="hover:text-stone-800" href="#">Karma Yoga</a></li>
<li><a className="hover:text-stone-800" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-stone-900 mb-4 text-sm">Practice</h5>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li><a className="hover:text-stone-800" href="#">Class Types</a></li>
<li><a className="hover:text-stone-800" href="#">Private Instruction</a></li>
<li><a className="hover:text-stone-800" href="#">Workshops</a></li>
<li><a className="hover:text-stone-800" href="#">Online Library</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-stone-900 mb-4 text-sm">Reflections</h5>
<p className="text-sm text-stone-500 font-light mb-4">Join our newsletter for moon cycles and studio updates.</p>
<div className="flex border-b border-stone-300 pb-2">
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-stone-400 text-stone-800" placeholder="Email address" type="email"/>
<button className="text-stone-400 hover:text-stone-900 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-xs text-stone-400 font-light">
<div className="mb-4 md:mb-0">
                    © 2024 SOMA Yoga Studio. All rights reserved.
                </div>
<div className="flex space-x-6">
<a className="hover:text-stone-600" href="#">Privacy</a>
<a className="hover:text-stone-600" href="#">Terms</a>
<a className="hover:text-stone-600" href="#">Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
