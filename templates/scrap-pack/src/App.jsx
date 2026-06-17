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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]">
<iconify-icon className="sm:hidden" height="20" icon="solar:box-linear" width="20"></iconify-icon>
<iconify-icon className="hidden sm:block" height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="text-lg sm:text-xl font-semibold tracking-tight text-white">Scrap Pack</span>
</div>
<div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base font-medium">

<a className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 active:scale-95 transition-transform" href="tel:9499895865">
<iconify-icon className="" height="18" icon="solar:phone-linear" width="18"></iconify-icon>
</a>

<a className="hidden md:flex items-center gap-2 text-slate-300 hover:text-white transition-colors" href="tel:9499895865">
<iconify-icon className="text-orange-500" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                    (949) 989-5865
                </a>

<a className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-slate-950 hover:bg-slate-200 active:scale-95 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#quote">
                    Get Estimate
                </a>
</div>
</div>
</nav>

<section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] bg-orange-600/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="flex flex-col items-start gap-6 sm:gap-8">

<div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mt-4 lg:mt-0">
<div className="flex items-center text-amber-500">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-slate-200 border-r border-white/20 pr-2 sm:pr-2.5">5.0 (14)</span>
<span className="text-xs sm:text-sm font-medium text-orange-400">Latino-Owned</span>
</div>

<div className="space-y-4 sm:space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
                        Fast, reliable <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">junk removal</span><br/>
                        in Anaheim.
                    </h1>
<p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed">
                        Cleanups, hauling, moving help, yard waste, and full property cleanouts. We handle the heavy lifting so you don't have to.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-base sm:text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]" href="#quote">
                        Get Free Estimate
                        <iconify-icon className="" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-base sm:text-lg font-medium active:scale-[0.98] transition-all duration-300" href="tel:9499895865">
<iconify-icon className="text-orange-400" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Call Now
                    </a>
</div>
</div>

<div className="relative w-full aspect-square max-w-[280px] sm:max-w-md mx-auto lg:max-w-none flex items-center justify-center group mt-4 lg:mt-0">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-[60px] sm:blur-[80px] group-hover:blur-[100px] transition-all duration-700"></div>
<img alt="Scrap Pack Logo" className="transform hover:-translate-y-4 transition-transform duration-700 ease-out w-full h-auto object-cover bg-center z-10 relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aa86867-d8be-43c6-8c4b-aed8f72b33ac_800w.png"/>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-900/50 relative border-y border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-3 sm:space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Everything we handle</h2>
<p className="text-base md:text-lg text-slate-400">From a single couch to a full property cleanout, our professional team clears your space quickly and affordably.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="group p-6 md:p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] group-hover:bg-orange-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-5 md:mb-6 border border-orange-500/20">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Full-Service Removal</h3>
<p className="text-base md:text-lg text-slate-400">Comprehensive junk removal for homes and businesses. Point to what needs to go, and it's gone.</p>
</div>

<div className="group p-6 md:p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] group-hover:bg-orange-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-5 md:mb-6 border border-orange-500/20">
<iconify-icon height="24" icon="solar:trash-bin-trash-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Debris &amp; Trash Hauling</h3>
<p className="text-base md:text-lg text-slate-400">Construction debris, renovation leftovers, or general household trash hauled away securely.</p>
</div>

<div className="group p-6 md:p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] group-hover:bg-orange-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-5 md:mb-6 border border-orange-500/20">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Yard Cleanups</h3>
<p className="text-base md:text-lg text-slate-400">Branches, fencing, old sheds, and general backyard debris cleared out to reclaim your outdoor space.</p>
</div>

<div className="group p-6 md:p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] group-hover:bg-orange-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-5 md:mb-6 border border-orange-500/20">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Moving Help</h3>
<p className="text-base md:text-lg text-slate-400">Need muscle? We provide heavy lifting and moving assistance to make your transition smooth.</p>
</div>

<div className="group p-6 md:p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] group-hover:bg-orange-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-5 md:mb-6 border border-orange-500/20">
<iconify-icon height="24" icon="solar:home-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Property Cleanouts</h3>
<p className="text-base md:text-lg text-slate-400">Evictions, foreclosures, or estate cleanouts handled with speed, respect, and professionalism.</p>
</div>

<div className="group p-6 md:p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] group-hover:bg-orange-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-5 md:mb-6 border border-orange-500/20">
<iconify-icon height="24" icon="solar:sofa-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Furniture &amp; Bulk</h3>
<p className="text-base md:text-lg text-slate-400">Old mattresses, heavy appliances, and bulky furniture removed safely without damaging your home.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-12 md:mb-16 text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3 md:mb-4">How it works</h2>
<p className="text-base md:text-lg text-slate-400">A seamless, stress-free process from start to finish.</p>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">

<div className="hidden md:block absolute top-10 lg:top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

<div className="relative flex flex-col items-center md:text-center group text-center md:items-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-5 md:mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors duration-500">
<span className="text-2xl md:text-3xl font-semibold text-white">1</span>
<div className="absolute inset-0 rounded-full border border-orange-500/0 group-hover:border-orange-500/30 scale-110 transition-all duration-500"></div>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Contact Us</h3>
<p className="text-base md:text-lg text-slate-400">Call or request a quote online. Tell us what needs to be removed and where.</p>
</div>

<div className="relative flex flex-col items-center md:text-center group text-center md:items-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-5 md:mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors duration-500">
<span className="text-2xl md:text-3xl font-semibold text-white">2</span>
<div className="absolute inset-0 rounded-full border border-orange-500/0 group-hover:border-orange-500/30 scale-110 transition-all duration-500"></div>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">Get a Quote</h3>
<p className="text-base md:text-lg text-slate-400">Receive a transparent, upfront estimate with no hidden fees based on your specific needs.</p>
</div>

<div className="relative flex flex-col items-center md:text-center group text-center md:items-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-5 md:mb-6 relative z-10 group-hover:border-orange-500/50 transition-colors duration-500 bg-gradient-to-b from-slate-900 to-orange-950/20">
<span className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">3</span>
<div className="absolute inset-0 rounded-full border border-orange-500/0 group-hover:border-orange-500/50 scale-110 transition-all duration-500"></div>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 md:mb-3">We Remove Everything</h3>
<p className="text-base md:text-lg text-slate-400">Our team arrives on time, hauls it all away efficiently, and sweeps up afterwards.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-900/30 border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-3 md:mb-4">
<iconify-icon className="text-amber-500" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<span className="text-base md:text-lg font-medium text-white">5.0 Star Rated Service</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Trusted by locals.</h2>
</div>
<div className="hidden md:flex gap-2">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 cursor-not-allowed">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-4 sm:px-6 pb-6 md:pb-8 hide-scrollbar" style={{scrollPaddingLeft: 'max(1rem, env(safe-area-inset-left))'}}>

<div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-slate-950 border border-white/5 flex flex-col gap-5 md:gap-6">
<div className="flex items-center text-amber-500">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300 flex-grow">"Price was fair, very professional and hauled it all away quickly. Showed up exactly when they said they would. Highly recommend their services."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-medium text-white">M</div>
<div>
<p className="text-base font-medium text-white">Mark D.</p>
<p className="text-sm text-slate-500">Anaheim, CA</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-slate-950 border border-white/5 flex flex-col gap-5 md:gap-6">
<div className="flex items-center text-amber-500">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300 flex-grow">"The pricing is pretty cheap, especially for the quality and professionalism. They cleared out years of junk from my garage in under two hours."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-medium text-white">S</div>
<div>
<p className="text-base font-medium text-white">Sarah L.</p>
<p className="text-sm text-slate-500">Orange County</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-slate-950 border border-white/5 flex flex-col gap-5 md:gap-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px]"></div>
<div className="flex items-center text-amber-500">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300 flex-grow relative z-10">"I had a massive pile of yard waste and old fencing that was an eyesore. Scrap Pack came in and completely transformed the backyard in one afternoon. From start to finish, the experience was seamless and stress-free."</p>
<div className="flex items-center gap-3 mt-auto relative z-10">
<div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-sm font-medium text-orange-200 border border-orange-500/20">J</div>
<div>
<p className="text-base font-medium text-white">Javier R.</p>
<p className="text-sm text-slate-500">Fullerton, CA</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-slate-950 border border-white/5 flex flex-col gap-5 md:gap-6">
<div className="flex items-center text-amber-500">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300 flex-grow">"Fast communication, gave a quote over text with pictures, and picked up the same day. Doesn't get better than that for a local business."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-medium text-white">E</div>
<div>
<p className="text-base font-medium text-white">Emily C.</p>
<p className="text-sm text-slate-500">Anaheim Hills</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-2 sm:w-6"></div>
</div>
</section>

<section className="py-16 md:py-24 relative overflow-hidden">
<div className="absolute right-0 bottom-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-600/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 md:mb-6">Why Anaheim chooses Scrap Pack.</h2>
<p className="text-base md:text-lg text-slate-400 mb-8 md:mb-10">We don't just haul junk; we provide peace of mind. As a local, Latino-owned business, we care about our community and delivering top-tier service.</p>
<div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6">
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-base md:text-lg font-medium text-slate-200">Affordable pricing</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-base md:text-lg font-medium text-slate-200">Fast &amp; efficient service</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-base md:text-lg font-medium text-slate-200">Professional team</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-base md:text-lg font-medium text-slate-200">Stress-free experience</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-base md:text-lg font-medium text-slate-200">Strong communication</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-base md:text-lg font-medium text-slate-200">Local trusted business</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 p-6 md:p-8 flex flex-col justify-end overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-3 border border-orange-500/30 backdrop-blur-md">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                        Based in Anaheim
                    </div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Ready for a clean slate?</h3>
<p className="text-base md:text-lg text-slate-400">Join dozens of satisfied neighbors who trusted us with their space.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative" id="quote">
<div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
<div className="p-8 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden text-center shadow-[0_0_50px_-12px_rgba(249,115,22,0.15)]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-orange-500/10 blur-[60px] md:blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 md:mb-6 relative z-10">Get your space back today.</h2>
<p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto relative z-10">Don't let junk sit around any longer. Contact us for a free, no-obligation estimate and experience premier removal service.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-lg sm:text-xl font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]" href="tel:9499895865">
<iconify-icon height="24" icon="solar:phone-linear" width="24"></iconify-icon>
                        (949) 989-5865
                    </a>
<span className="text-slate-500 text-base font-medium hidden sm:block">or</span>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-white text-slate-950 text-lg sm:text-xl font-medium hover:bg-slate-200 active:scale-[0.98] transition-all duration-300" href="#">
                        Request Quote Online
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-16 pb-8 md:pt-20 md:pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">

<div className="lg:col-span-1 space-y-5 md:space-y-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Scrap Pack</span>
</div>
<p className="text-sm md:text-base text-slate-400 leading-relaxed">Premier junk and debris removal services. Fast, affordable, and professional hauling.</p>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium">
                        Latino-Owned Business
                    </div>
</div>

<div>
<h4 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">Contact Us</h4>
<ul className="space-y-3 md:space-y-4">
<li>
<a className="flex items-center gap-3 text-sm md:text-base text-slate-400 hover:text-orange-400 transition-colors group" href="tel:9499895865">
<iconify-icon className="text-slate-500 group-hover:text-orange-400" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                                (949) 989-5865
                            </a>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-slate-400">
<iconify-icon className="text-slate-500 shrink-0 mt-0.5" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>1796 E Belmont Ave<br/>Anaheim, CA</span>
</li>
</ul>
</div>

<div>
<h4 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">Business Details</h4>
<ul className="space-y-3 md:space-y-4">
<li className="flex items-center gap-3 text-sm md:text-base text-slate-400">
<iconify-icon className="text-slate-500" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                            Open today until 6:00 PM
                        </li>
<li className="flex items-start gap-3 text-sm md:text-base text-slate-400">
<iconify-icon className="text-slate-500 shrink-0 mt-0.5" height="20" icon="solar:map-linear" width="20"></iconify-icon>
<span>Serving Anaheim &amp;<br/>Surrounding Areas</span>
</li>
</ul>
</div>

<div>
<h4 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">Services</h4>
<ul className="space-y-2 md:space-y-3">
<li><a className="text-sm md:text-base text-slate-400 hover:text-white transition-colors" href="#">Junk Removal</a></li>
<li><a className="text-sm md:text-base text-slate-400 hover:text-white transition-colors" href="#">Yard Cleanups</a></li>
</ul>
</div>
</div>
<div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs md:text-sm text-slate-500 text-center md:text-left">© 2024 Scrap Pack Junk Removal Services. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs md:text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
