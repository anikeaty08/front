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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:plane" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-orange-500 transition-colors">AERO</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Flights</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Hotels</a>
<a className="text-white hover:text-orange-500 transition-colors" href="#about">About Us</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Membership</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white">Sign In</button>
<button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                    Book Flight
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-orange-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-orange-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Now flying to 150+ new destinations
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-6 leading-[0.9]">
                Beyond the <br/>
<span className="text-neutral-600">clouds.</span>
</h1>
<p className="max-w-xl mx-auto text-lg text-neutral-400 mb-12 font-light leading-relaxed">
                Experience seamless travel with premium booking services. We connect you to the world with elegance, speed, and safety.
            </p>

<div className="max-w-4xl mx-auto bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 md:p-3 shadow-2xl shadow-orange-900/10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-2">

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-transparent focus:border-orange-500/50 text-white text-sm rounded-xl py-3 pl-10 pr-4 outline-none transition-all placeholder:text-neutral-600 focus:bg-black" placeholder="From where?" type="text"/>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:navigation" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-transparent focus:border-orange-500/50 text-white text-sm rounded-xl py-3 pl-10 pr-4 outline-none transition-all placeholder:text-neutral-600 focus:bg-black" placeholder="To where?" type="text"/>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-transparent focus:border-orange-500/50 text-white text-sm rounded-xl py-3 pl-10 pr-4 outline-none transition-all placeholder:text-neutral-600 focus:bg-black cursor-pointer" onfocus="(this.type='date')" placeholder="Date" type="text"/>
</div>

<button className="w-full orange-gradient hover:opacity-90 text-white font-medium text-sm rounded-xl py-3 transition-opacity flex items-center justify-center gap-2">
                        Search Flights
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 relative" id="about">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-orange-500 font-medium tracking-tight mb-2 flex items-center gap-2">
<iconify-icon icon="lucide:info" width="16"></iconify-icon>
                        About Aero
                    </h2>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-tight">
                        Redefining the standard <br/> of modern aviation.
                    </h3>
</div>
<div className="flex flex-col justify-end">
<p className="text-neutral-400 text-lg font-light leading-relaxed">
                        Founded on the principle that the journey matters as much as the destination. Aero combines cutting-edge technology with human-centric hospitality to deliver an uncompromised flight experience.
                    </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden mb-24">
<div className="bg-neutral-950 p-8 flex flex-col items-center justify-center text-center group hover:bg-neutral-900 transition-colors">
<span className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">120+</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Global Routes</span>
</div>
<div className="bg-neutral-950 p-8 flex flex-col items-center justify-center text-center group hover:bg-neutral-900 transition-colors">
<span className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">15k</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Daily Passengers</span>
</div>
<div className="bg-neutral-950 p-8 flex flex-col items-center justify-center text-center group hover:bg-neutral-900 transition-colors">
<span className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">24/7</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Support</span>
</div>
<div className="bg-neutral-950 p-8 flex flex-col items-center justify-center text-center group hover:bg-neutral-900 transition-colors">
<span className="text-3xl md:text-4xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">0%</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Carbon Net</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Unmatched Safety</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We adhere to the strictest international safety protocols. Your well-being is our absolute priority, monitored by industry-leading experts.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Seamless Punctuality</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Time is luxury. Our optimized logistics and modern fleet ensure you arrive at your destination exactly when you planned.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:globe-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Global Connectivity</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                        From bustling metropolises to remote islands, our expanding network brings the furthest corners of the globe within your reach.
                    </p>
</div>
</div>

<div className="mt-6 p-10 rounded-2xl bg-gradient-to-r from-orange-900/20 to-neutral-900/20 border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-2/3">
<h4 className="text-white font-medium text-xl mb-2">Our Mission</h4>
<p className="text-neutral-400 font-light text-sm">
                        To democratize luxury air travel through technology, ensuring every mile flown is comfortable, sustainable, and memorable.
                    </p>
</div>
<div>
<button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                        Read Full Story
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-orange-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:plane" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">AERO</span>
</a>
<p className="text-neutral-500 text-sm max-w-xs">
                        Designing the future of flight. <br/>Based in San Francisco, flying everywhere.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h5 className="text-white font-medium text-sm mb-4">Company</h5>
<ul className="flex flex-col gap-2 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Support</h5>
<ul className="flex flex-col gap-2 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-neutral-600">© 2023 Aero Inc. All rights reserved.</p>
<div className="flex gap-4 text-neutral-500">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:twitter" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:instagram" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:linkedin" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
