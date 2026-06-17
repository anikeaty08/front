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
      

<div className="fixed top-0 left-0 w-full h-[85vh] z-0 video-container overflow-hidden pointer-events-none">

<div className="absolute inset-0 z-10 video-tint"></div>

<video autoplay="" className="w-full h-full object-cover opacity-80 mix-blend-screen filter saturate-0 contrast-125 brightness-125" loop="" muted="" playsinline="">

<source src="https://cdn.pixabay.com/video/2020/04/18/36465-410064998_large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 z-20 bg-blue-900/30 mix-blend-color"></div>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020203] to-transparent z-30"></div>
</div>

<div className="fixed top-[40%] left-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/10 z-0 zodiac-wheel opacity-20 pointer-events-none hidden md:block">
<div className="absolute inset-[15%] rounded-full border border-blue-500/10 border-dashed"></div>
<div className="absolute inset-[30%] rounded-full border border-blue-500/5"></div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 text-4xl text-blue-200/30">♈</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl text-blue-200/30">♎</div>
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-blue-200/30">♋</div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-blue-200/30">♑</div>
<div className="absolute top-[15%] right-[15%] text-3xl text-blue-200/20">♒</div>
<div className="absolute top-[15%] left-[15%] text-3xl text-blue-200/20">♓</div>
<div className="absolute bottom-[15%] right-[15%] text-3xl text-blue-200/20">♏</div>
<div className="absolute bottom-[15%] left-[15%] text-3xl text-blue-200/20">♍</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020203]/70 backdrop-blur-md supports-[backdrop-filter]:bg-[#020203]/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:sun-2-linear" width="22"></iconify-icon>
<span className="text-lg font-vedic text-white tracking-widest">SAMSARA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-blue-200 transition-colors" href="#services">Readings</a>
<a className="hover:text-blue-200 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-blue-200 transition-colors" href="#muhurtha">Muhurtha</a>
</div>
<button className="text-xs font-medium bg-blue-900/20 text-blue-200 border border-blue-500/20 px-4 py-2 rounded-full hover:bg-blue-900/30 transition-all flex items-center gap-2">
                Consultation
                <iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon>
</button>
</div>
</nav>

<section className="relative z-10 pt-44 pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-950/20 text-xs font-medium text-blue-300 mb-8 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
<iconify-icon icon="solar:stars-linear" width="14"></iconify-icon>
<span className="tracking-wide">NOW IN SHRAVANA NAKSHATRA</span>
</div>
<h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                Align with your <br/>
<span className="font-vedic text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">Cosmic Blueprint</span>
</h1>
<p className="text-lg text-slate-300 font-light max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                Ancient Vedic wisdom for the modern soul. Unlocking the precise calculations of Jyotish to reveal your Dharma and life purpose.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-blue-100 hover:bg-white text-blue-950 text-sm font-medium rounded-lg transition-all shadow-[0_0_30px_-5px_rgba(147,197,253,0.3)]">
                    Generate Kundali
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-panel hover:bg-white/5 text-slate-300 text-sm font-medium rounded-lg transition-all border border-white/10 flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Intro
                </button>
</div>
</div>
</section>

<div className="relative z-20 border-y border-white/5 bg-[#020203]/80 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-4">
<div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500" icon="solar:sun-linear"></iconify-icon>
<span>Surya: Libra</span>
</div>
<div className="hidden md:block w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-300" icon="solar:moon-linear"></iconify-icon>
<span>Chandra: Rohini</span>
</div>
<div className="hidden md:block w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-red-400" icon="solar:planet-linear"></iconify-icon>
<span>Mangal: Scorpio</span>
</div>
<div className="hidden md:block w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-yellow-300" icon="solar:star-ring-linear"></iconify-icon>
<span>Guru: Aries (R)</span>
</div>
<div className="hidden md:block w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-2 text-blue-400/80 ml-auto">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Shubh Muhurtha Active
                </div>
</div>
</div>
</div>

<section className="relative z-10 py-24 px-6 bg-[#020203]" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-light text-white mb-2 tracking-tight">Vedic Offerings</h2>
<p className="text-slate-500 text-sm font-light">Precision calculations based on the Sidereal Zodiac.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-blue-500/30 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-200 transition-colors">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Janma Kundali</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                        Complete birth chart analysis. Discover your Rashi (Moon Sign), Nakshatra (Constellation), and the planetary periods (Dashas) currently influencing your life path.
                    </p>
<div className="flex items-center text-xs text-blue-500/80 gap-1 group-hover:gap-2 transition-all">
                        Analyze Chart <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-blue-500/30 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-200 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Matchmaking</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                        Traditional Ashta Koota matching for relationships. We analyze the 36 points of compatibility to ensure harmony in mental, physical, and spiritual realms.
                    </p>
<div className="flex items-center text-xs text-blue-500/80 gap-1 group-hover:gap-2 transition-all">
                        Check Compatibility <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-blue-500/30 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-200 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Prasna &amp; Muhurtha</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                        Question astrology and auspicious timing. Find the perfect moment to start a business, buy a home, or get married based on the Panchang.
                    </p>
<div className="flex items-center text-xs text-blue-500/80 gap-1 group-hover:gap-2 transition-all">
                        Find Timing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square relative flex items-center justify-center">

<svg className="w-full h-full text-white/10 stroke-current" fill="none" strokeWidth="1" viewbox="0 0 400 400">
<rect height="300" width="300" x="50" y="50"></rect>
<line x1="50" x2="350" y1="50" y2="350"></line>
<line x1="350" x2="50" y1="50" y2="350"></line>
<line x1="200" x2="50" y1="50" y2="200"></line>
<line x1="200" x2="350" y1="50" y2="200"></line>
<line x1="50" x2="200" y1="200" y2="350"></line>
<line x1="350" x2="200" y1="200" y2="350"></line>
</svg>

<div className="absolute top-[30%] left-[30%] text-blue-400">
<iconify-icon icon="solar:sun-2-bold" width="24"></iconify-icon>
</div>
<div className="absolute bottom-[30%] right-[30%] text-slate-300">
<iconify-icon icon="solar:moon-bold" width="20"></iconify-icon>
</div>
<div className="absolute top-[50%] right-[20%] text-red-400">
<iconify-icon icon="solar:flame-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-blue-500/50"></span>
<span className="text-xs text-blue-500 uppercase tracking-widest font-medium">Sidereal Precision</span>
</div>
<h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                    Beyond simple sun signs. <br/>
<span className="text-slate-400">The mathematics of destiny.</span>
</h2>
<p className="text-slate-400 font-light mb-6 leading-relaxed">
                    Unlike Western astrology which follows the seasons, Vedic Astrology (Jyotish) is Sidereal—it aligns with the actual constellations in the sky. This accounts for the precession of the equinoxes, offering a more accurate map of your soul's journey.
                </p>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<iconify-icon className="text-blue-400 mb-3" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-1">Dasha System</h4>
<p className="text-xs text-slate-500 leading-relaxed">Unique predictive timeline system specific to your birth star.</p>
</div>
<div>
<iconify-icon className="text-blue-400 mb-3" icon="solar:infinity-linear" width="24"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-1">Karma &amp; Remedy</h4>
<p className="text-xs text-slate-500 leading-relaxed">Practical remedies (Upayas) to mitigate difficult planetary effects.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-2xl mx-auto glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="text-center mb-8">
<h3 className="text-xl font-medium text-white mb-2">Find your Nakshatra</h3>
<p className="text-sm text-slate-400 font-light">Enter birth details to identify your guiding star.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-[#020203] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Date of Birth" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-[#020203] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Time of Birth" type="text"/>
</div>
</div>
<div className="relative">
<input className="w-full bg-[#020203] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Place of Birth" type="text"/>
<iconify-icon className="absolute right-4 top-3.5 text-slate-600" icon="solar:map-point-linear" width="16"></iconify-icon>
</div>

<div className="pt-4 pb-2">
<div className="flex justify-between text-xs text-slate-500 mb-2">
<span>Lahiri (Default)</span>
<span>Raman</span>
<span>KP</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-blue-500/50"></div>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-blue-50 transition-colors mt-2" type="button">
                    Calculate Positions
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-[#010101]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-blue-400" icon="solar:sun-2-linear" width="20"></iconify-icon>
<span className="text-base font-vedic text-white">SAMSARA</span>
</div>
<p className="text-xs text-slate-500 font-light leading-relaxed">
                    Guiding souls through the cosmic ocean using the light of Vedic Astrology. Authentic readings based on classical Parashara principles.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#">Panchang</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Transit Map</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Retrogrades</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
<div className="text-[10px] text-slate-600 uppercase tracking-widest">
                © 2023 Samsara Jyotish
            </div>
<div className="flex gap-4 text-slate-500">
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="solar:globe-linear" width="16"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="solar:chat-round-linear" width="16"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
