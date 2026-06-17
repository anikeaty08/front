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
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex flex-col flex-shrink-0 group" href="#">
<span className="font-playfair italic text-3xl text-purple-900 tracking-tight leading-none group-hover:text-purple-700 transition-colors">Russells</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium ml-0.5 mt-0.5">Curtains &amp; Blinds</span>
</a>

<nav className="hidden lg:flex gap-8 items-center">
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Sale</a>
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Curtains</a>
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Blinds</a>
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Shutters</a>
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Readymade</a>
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Commercial</a>
<a className="text-sm font-medium text-neutral-600 hover:text-purple-700 transition-colors" href="#">Inspiration</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-600 hover:text-purple-700 transition-colors cursor-pointer">
<i className="w-4 h-4 text-neutral-400" data-lucide="phone"></i>
<span>0800 808 300</span>
</div>
<button className="bg-purple-900 text-white hover:bg-purple-800 transition-all text-xs font-medium px-5 py-2.5 rounded-md shadow-sm shadow-purple-900/10 tracking-wide uppercase">
                        Request Consultation
                    </button>
</div>

<div className="lg:hidden">
<i className="w-6 h-6 text-neutral-600" data-lucide="menu"></i>
</div>
</div>
</div>
</header>

<div className="pt-20">

<div className="bg-red-700 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-2 sm:gap-4 text-center">
<span className="font-bold text-lg sm:text-2xl tracking-tight uppercase">Huge Winter Sale</span>
<span className="bg-white/20 px-2 py-0.5 rounded text-xs sm:text-sm font-medium uppercase tracking-wider">Up to 50% Off</span>
<span className="text-[10px] sm:text-xs opacity-80 uppercase tracking-widest hidden sm:inline-block border-l border-white/30 pl-4 ml-2">Selected Styles</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-neutral-900 tracking-tight">
                        The best advice for your home happens <span className="italic text-purple-800">at your place.</span>
</h1>
<p className="text-lg text-neutral-600 leading-relaxed font-light max-w-lg">
                        Safeguard your comfort with Nelson-made curtains and blinds. From thermal performance to a guaranteed perfect fit, we handle the measuring and installation so you don't have to.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-purple-900 text-white px-8 py-4 rounded-md font-medium text-xs uppercase tracking-widest hover:bg-purple-800 transition-all shadow-lg shadow-purple-900/20">
                            Request Free Consultation
                        </button>
<button className="bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-md font-medium text-xs uppercase tracking-widest hover:border-purple-200 hover:bg-purple-50 transition-all">
                            Browse Curtains &amp; Blinds
                        </button>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-500 pt-4">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="font-medium text-neutral-800">Trusted by 5,000+ Kiwi Homeowners</span>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-neutral-100 rounded-2xl -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Modern living room with curtains" className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<div className="border-y border-neutral-200 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-wider text-neutral-600">
<span className="flex items-center gap-2"><i className="w-3 h-3 text-purple-600" data-lucide="check"></i> Premium, NZ-Made Quality</span>
<span className="hidden sm:inline text-neutral-300">•</span>
<span className="flex items-center gap-2"><i className="w-3 h-3 text-purple-600" data-lucide="check"></i> Expert In-home Styling</span>
<span className="hidden sm:inline text-neutral-300">•</span>
<span className="flex items-center gap-2"><i className="w-3 h-3 text-purple-600" data-lucide="check"></i> Guaranteed Perfect Fit</span>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="mb-12">
<h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 mb-4 tracking-tight">Explore the Russells ranges</h2>
<p className="text-neutral-500 font-light max-w-2xl text-lg">From custom NZ-made curtains to ready-to-go options, find the right solution for your windows.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">Up to 50% Off</div>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Custom Curtains</h3>
<p className="text-xs text-neutral-500 mb-2">Made to fit your home</p>
<a className="text-[10px] uppercase font-bold text-purple-700 hover:text-purple-900 underline decoration-purple-200 underline-offset-4" href="#">Browse Curtains</a>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">Up to 50% Off</div>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Custom Blinds</h3>
<p className="text-xs text-neutral-500 mb-2">Control light and privacy</p>
<a className="text-[10px] uppercase font-bold text-purple-700 hover:text-purple-900 underline decoration-purple-200 underline-offset-4" href="#">Browse Blinds</a>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">Up to 50% Off</div>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Custom Shutters</h3>
<p className="text-xs text-neutral-500 mb-2">Timeless style &amp; privacy</p>
<a className="text-[10px] uppercase font-bold text-purple-700 hover:text-purple-900 underline decoration-purple-200 underline-offset-4" href="#">Browse Shutters</a>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5] bg-red-50 flex items-center justify-center border border-red-100">
<div className="text-center p-4">
<span className="block text-3xl font-black text-red-600 tracking-tighter mb-2">SALE</span>
<span className="block text-xs font-bold text-red-800 uppercase tracking-wide">Up to 50% Off</span>
</div>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Quality for less</h3>
<p className="text-xs text-neutral-500 mb-2">Save up to 50%</p>
<a className="text-[10px] uppercase font-bold text-purple-700 hover:text-purple-900 underline decoration-purple-200 underline-offset-4" href="#">Browse Sale</a>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-neutral-800 text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">20% Off</div>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Commercial</h3>
<p className="text-xs text-neutral-500 mb-2">Solutions for business</p>
<a className="text-[10px] uppercase font-bold text-purple-700 hover:text-purple-900 underline decoration-purple-200 underline-offset-4" href="#">Browse Commercial</a>
</div>
</div>
</section>

<section className="bg-neutral-50 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="mb-12">
<h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 mb-4 tracking-tight">Most Popular Solutions</h2>
<p className="text-neutral-500 font-light max-w-2xl text-lg">Every window has a purpose. Choose the benefit that matters most to you.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
<div className="rounded-lg overflow-hidden h-40 mb-4 bg-neutral-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-semibold text-sm mb-1">Thermal Insulation</h4>
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">Keep warmth in, reduce energy costs.</p>
<a className="text-[10px] font-bold text-neutral-900 uppercase tracking-wide border-b border-neutral-200 pb-0.5 hover:border-purple-600 transition-colors" href="#">Explore Honeycomb</a>
</div>

<div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
<div className="rounded-lg overflow-hidden h-40 mb-4 bg-neutral-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594040226829-7f2a1a06240d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-semibold text-sm mb-1">Privacy &amp; Natural Light</h4>
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">Privacy without blocking daylight.</p>
<a className="text-[10px] font-bold text-neutral-900 uppercase tracking-wide border-b border-neutral-200 pb-0.5 hover:border-purple-600 transition-colors" href="#">Explore Sheer</a>
</div>

<div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
<div className="rounded-lg overflow-hidden h-40 mb-4 bg-neutral-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520699049698-acd2fcc51056?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-semibold text-sm mb-1">Sleep Quality</h4>
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">Block light for better sleep.</p>
<a className="text-[10px] font-bold text-neutral-900 uppercase tracking-wide border-b border-neutral-200 pb-0.5 hover:border-purple-600 transition-colors" href="#">Explore Blockout</a>
</div>

<div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
<div className="rounded-lg overflow-hidden h-40 mb-4 bg-neutral-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590393275627-0c4641372a93?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-semibold text-sm mb-1">Acoustic Comfort</h4>
<p className="text-xs text-neutral-500 mb-3 leading-relaxed">Reduce noise in your home.</p>
<a className="text-[10px] font-bold text-neutral-900 uppercase tracking-wide border-b border-neutral-200 pb-0.5 hover:border-purple-600 transition-colors" href="#">Explore Lined</a>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<span className="text-sm font-medium text-neutral-600">Still not sure what's right?</span>
<button className="bg-purple-900 text-white px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-widest hover:bg-purple-800 transition-colors">
                        Help me choose
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 mb-12 tracking-tight">Our simple 3-step process</h2>
<div className="grid md:grid-cols-3 gap-12">

<div className="relative group">
<div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline gap-4">
<span className="font-playfair text-5xl text-neutral-200 group-hover:text-purple-200 transition-colors">1.</span>
<div>
<h3 className="font-semibold text-lg text-neutral-900 mb-2">We come to you</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Your local consultant will show you our range and take laser-precise measurements.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline gap-4">
<span className="font-playfair text-5xl text-neutral-200 group-hover:text-purple-200 transition-colors">2.</span>
<div>
<h3 className="font-semibold text-lg text-neutral-900 mb-2">Custom made</h3>
<p className="text-neutral-500 text-sm leading-relaxed">We custom make your chosen curtains for a guaranteed perfect fit in our Nelson factory.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline gap-4">
<span className="font-playfair text-5xl text-neutral-200 group-hover:text-purple-200 transition-colors">3.</span>
<div>
<h3 className="font-semibold text-lg text-neutral-900 mb-2">Hassle free install</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Our experienced team will take care of the installation so you can relax.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-100">
<h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 mb-12 tracking-tight">Real homes. Real results.</h2>
<div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video group">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
<i className="w-3 h-3" data-lucide="volume-x"></i> Unmute
                </button>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-white font-playfair text-2xl mb-2">Nancy's home transformation</h3>
<p className="text-white/80 text-sm max-w-xl font-light">See how custom curtains helped transform a character bungalow, with expert advice and fabric choices tailored to the home.</p>
</div>
</div>
<div className="mt-8">
<button className="bg-purple-900 text-white px-8 py-3.5 rounded-md font-medium text-xs uppercase tracking-widest hover:bg-purple-800 transition-all">
                    View More Customer Stories
                </button>
</div>
</section>

<section className="border-y border-neutral-200 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-16 w-24 bg-neutral-200 rounded flex items-center justify-center text-xs font-bold text-neutral-400">Q Card</div>
<div className="h-16 w-24 bg-neutral-200 rounded flex items-center justify-center text-xs font-bold text-neutral-400">Gem</div>
<div className="h-16 w-24 bg-neutral-200 rounded flex items-center justify-center text-xs font-bold text-neutral-400">Visa</div>
</div>

<div>
<h3 className="font-semibold text-lg text-neutral-900 mb-2">Quality Without Compromise.</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light">Don't settle for "good enough". Invest in the high-performance curtains your home needs today with our tailored, interest-free payment options.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="relative rounded-2xl overflow-hidden bg-neutral-100 h-64 sm:h-80 flex items-center">
<div className="absolute inset-0">
<div className="w-2/3 h-full bg-neutral-100 absolute left-0 z-10"></div>
<div className="w-2/3 h-full bg-gradient-to-r from-neutral-100 to-transparent absolute left-1/3 z-10"></div>
<img className="w-full h-full object-cover absolute right-0 top-0" src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 px-8 sm:px-16 max-w-xl">
<h3 className="font-semibold text-neutral-500 text-xs uppercase tracking-widest mb-4">Save on Curtains</h3>
<p className="text-neutral-500 text-sm mb-6 leading-relaxed">Refresh your space and bring colour and pattern to any room. Thermal linings help keep the heat inside the room and are available with all our curtains.</p>
<a className="text-xs font-bold text-neutral-900 uppercase tracking-widest border-b-2 border-purple-200 hover:border-purple-600 transition-colors pb-1" href="#">Browse Sale</a>
</div>

<div className="absolute right-0 bottom-0 top-0 bg-red-700 text-white w-64 p-8 flex flex-col justify-center text-center z-20 skew-x-[-12deg] mr-[-30px] shadow-2xl">
<div className="skew-x-[12deg]">
<h4 className="font-bold text-2xl uppercase italic tracking-tighter">Huge Winter Sale</h4>
<div className="text-5xl font-black my-2">50%<span className="text-2xl align-top">OFF</span></div>
<p className="text-xs uppercase tracking-widest opacity-80">Selected Styles</p>
<div className="mt-4 bg-purple-900 py-2 px-4 text-[10px] font-bold uppercase tracking-widest rounded-sm">Plus an extra<br/>10% Off Everything</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center mb-16">
<h2 className="font-playfair text-3xl sm:text-4xl text-purple-900 mb-2 tracking-tight">Trusted by homeowners across New Zealand</h2>
<div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
<span className="font-bold text-neutral-900">Excellent</span>
<span>4.7 based on 263 reviews</span>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="p-6 rounded-xl border border-neutral-100 bg-white hover:border-purple-100 hover:shadow-lg hover:shadow-purple-900/5 transition-all">
<div className="flex text-purple-600 gap-0.5 mb-3">
<i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<h4 className="font-bold text-xs uppercase tracking-wide mb-2">Shellee</h4>
<p className="text-xs text-neutral-500 leading-relaxed line-clamp-4">7 months to get curtains, 3 different installers and we're still waiting on management to get back to me after taking just over a week off...</p>
<p className="text-[10px] text-neutral-300 mt-4">2 days ago</p>
</div>

<div className="p-6 rounded-xl border border-neutral-100 bg-white hover:border-purple-100 hover:shadow-lg hover:shadow-purple-900/5 transition-all">
<div className="flex text-purple-600 gap-0.5 mb-3">
<i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<h4 className="font-bold text-xs uppercase tracking-wide mb-2">Coreen</h4>
<p className="text-xs text-neutral-500 leading-relaxed line-clamp-4">They were fantastic from start to finish with Marion measuring and advising to John installing. I have had many drapes installed over the years...</p>
<p className="text-[10px] text-neutral-300 mt-4">6 days ago</p>
</div>

<div className="p-6 rounded-xl border border-neutral-100 bg-white hover:border-purple-100 hover:shadow-lg hover:shadow-purple-900/5 transition-all">
<div className="flex text-purple-600 gap-0.5 mb-3">
<i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<h4 className="font-bold text-xs uppercase tracking-wide mb-2">Heidi</h4>
<p className="text-xs text-neutral-500 leading-relaxed line-clamp-4">Rapt with my Curtains! Thank you!</p>
<div className="mt-2 w-12 h-12 bg-neutral-100 rounded overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/></div>
<p className="text-[10px] text-neutral-300 mt-4">1 week ago</p>
</div>

<div className="p-6 rounded-xl border border-neutral-100 bg-white hover:border-purple-100 hover:shadow-lg hover:shadow-purple-900/5 transition-all">
<div className="flex text-purple-600 gap-0.5 mb-3">
<i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<h4 className="font-bold text-xs uppercase tracking-wide mb-2">Tracey</h4>
<p className="text-xs text-neutral-500 leading-relaxed line-clamp-4">Very professional. Kept me updated, and friendly staff, and happy with the result.</p>
<p className="text-[10px] text-neutral-300 mt-4">1 month ago</p>
</div>
</div>
<div className="text-center mt-8">
<a className="text-[10px] uppercase font-bold text-neutral-400 hover:text-purple-700 flex items-center justify-center gap-1" href="#">
<i className="w-3 h-3" data-lucide="message-circle"></i> Read all reviews
                </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="bg-purple-800 rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="relative z-10">
<h2 className="font-playfair text-4xl lg:text-5xl text-white mb-4 tracking-tight">Get expert advice at your place</h2>
<p className="text-purple-200 text-lg font-light mb-8 max-w-2xl mx-auto">Because that's the best place to get the right advice on curtains and blinds.</p>
<button className="bg-purple-900 border border-purple-700 text-white px-8 py-4 rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-white hover:text-purple-900 transition-all shadow-xl">
                        Book a Free Consultation
                    </button>
</div>
</div>
</section>

<footer className="border-t border-neutral-100 bg-neutral-50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<h3 className="font-playfair text-2xl text-purple-900 mb-2">Get in touch with your local Russells consultant.</h3>
<p className="text-purple-800/60 font-playfair italic text-lg mb-6">We come to you anywhere in New Zealand.</p>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 text-[11px] text-neutral-500">
<ul className="space-y-2">
<li><a className="hover:text-purple-700 transition-colors" href="#">Auckland</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Central Otago</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Kapiti Coast</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Mid Canterbury</a></li>
</ul>
<ul className="space-y-2">
<li><a className="hover:text-purple-700 transition-colors" href="#">Bay of Plenty</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Christchurch</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Manawatu</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Napier</a></li>
</ul>
<ul className="space-y-2">
<li><a className="hover:text-purple-700 transition-colors" href="#">Buller</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Gisborne</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Manawatu-Whanganui</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Nelson</a></li>
</ul>
<ul className="space-y-2">
<li><a className="hover:text-purple-700 transition-colors" href="#">Canterbury</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Hawke's Bay</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">Marlborough</a></li>
<li><a className="hover:text-purple-700 transition-colors" href="#">New Plymouth</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-800">
<a href="#">Curtains</a>
<a href="#">Blinds</a>
<a href="#">Shutters</a>
<a href="#">Readymades</a>
<a href="#">Commercial</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-purple-700" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-neutral-400 hover:text-purple-700" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-purple-700" href="#"><i className="w-5 h-5" data-lucide="pinterest"></i></a>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row justify-between items-end gap-4 text-[10px] text-neutral-400">
<div className="space-y-1">
<p>Privacy policy • Terms &amp; Guarantees • Offer terms and conditions</p>
<p>©2025 Russells. All rights reserved.</p>
</div>
<div className="flex items-center gap-4 grayscale opacity-50">
<div className="h-8 w-12 bg-neutral-200"></div>
<div className="h-8 w-12 bg-neutral-200"></div>
<button className="bg-purple-900 text-white px-4 py-2 rounded text-[10px] uppercase font-bold tracking-widest hover:bg-purple-800 transition-colors grayscale-0">Make a Payment</button>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
