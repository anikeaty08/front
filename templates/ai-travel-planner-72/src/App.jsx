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
      

<div className="relative min-h-screen flex flex-col w-full overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Nature Landscape" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
</div>

<nav className="relative z-50 w-full px-6 py-6 md:px-12 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white text-xl font-semibold tracking-tighter">Ghure Ashi</span>
</div>
<div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#">Destinations</a>
<a className="hover:text-white transition-colors duration-200" href="#">How it works</a>
<a className="hover:text-white transition-colors duration-200" href="#">Inspire me</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-white/90 text-sm font-medium hover:text-white transition-colors duration-200" href="#">Sign in</a>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200">
                    Get Started
                </button>
</div>
</nav>

<div className="flex-1 flex flex-col z-10 mt-[-5vh] pr-4 pl-4 relative items-center justify-center">
<div className="text-center max-w-4xl mx-auto mb-10">
<div className="inline-flex text-xs font-medium text-white/90 bg-white/10 border-white/20 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Meet Ghure Ashi, your AI architect
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6">
                    Design your perfect escape <br className="hidden md:block"/> in <span className="text-cyan-400">seconds.</span>
</h1>
<p className="text-lg md:text-xl text-white/80 font-normal max-w-2xl mx-auto leading-relaxed">
                    Stop stressing over spreadsheets. Tell our AI where you want to go and what you love doing, and get a hyper-personalized itinerary instantly.
                </p>
</div>

<div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 relative z-20">
<div className="w-full md:flex-1 flex items-center bg-white/5 hover:bg-white/10 focus-within:bg-white/10 rounded-2xl md:rounded-full px-5 py-3.5 md:py-4 transition-colors border border-transparent focus-within:border-cyan-500/30 group">
<iconify-icon className="text-cyan-400 text-xl mr-3 group-focus-within:text-cyan-300 transition-colors" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col w-full">
<label className="text-[10px] text-white/50 uppercase tracking-widest font-medium mb-0.5">Destination</label>
<input className="bg-transparent border-none outline-none text-white placeholder-white/40 w-full text-sm font-medium p-0 focus:ring-0" placeholder="e.g. Kyoto, Japan" type="text"/>
</div>
</div>
<div className="hidden md:block w-px h-10 bg-white/10"></div>
<div className="w-full md:w-48 flex items-center bg-white/5 hover:bg-white/10 focus-within:bg-white/10 rounded-2xl md:rounded-full px-5 py-3.5 md:py-4 transition-colors border border-transparent focus-within:border-cyan-500/30 group">
<iconify-icon className="text-cyan-400 text-xl mr-3 group-focus-within:text-cyan-300 transition-colors" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col w-full relative">
<label className="text-[10px] text-white/50 uppercase tracking-widest font-medium mb-0.5">Duration</label>
<input className="bg-transparent border-none outline-none text-white placeholder-white/40 w-full text-sm font-medium p-0 focus:ring-0" placeholder="5 days" type="text"/>
</div>
</div>
<div className="hidden md:block w-px h-10 bg-white/10"></div>
<div className="w-full md:w-56 flex items-center bg-white/5 hover:bg-white/10 focus-within:bg-white/10 rounded-2xl md:rounded-full px-5 py-3.5 md:py-4 transition-colors border border-transparent focus-within:border-cyan-500/30 group cursor-pointer">
<iconify-icon className="text-cyan-400 text-xl mr-3 group-focus-within:text-cyan-300 transition-colors" icon="solar:masks-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col w-full">
<label className="text-[10px] text-white/50 uppercase tracking-widest font-medium mb-0.5">Vibe</label>
<select className="bg-transparent border-none outline-none text-white w-full text-sm font-medium p-0 focus:ring-0 appearance-none cursor-pointer [&amp;&gt;option]:text-emerald-900">
<option className="text-white/40" disabled="" selected="" value="">Select vibe</option>
<option value="chill">Chill &amp; Relaxing</option>
<option value="adventure">Adventure</option>
<option value="culture">Culture &amp; History</option>
<option value="foodie">Foodie Tour</option>
</select>
</div>
<iconify-icon className="text-white/40 text-sm ml-2" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<button className="w-full md:w-auto mt-2 md:mt-0 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-2xl md:rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">Generate Plan</span>
</button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
<span className="text-[10px] text-white uppercase tracking-widest font-medium">Scroll to explore</span>
<div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>
</div>

<section className="bg-white z-10 pt-24 pb-24 relative">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900 mb-4">Travel planning, reimagined</h2>
<p className="text-emerald-500 text-base font-normal max-w-xl mx-auto">Ghure Ashi analyzes millions of data points to craft a schedule that feels like it was made by a local friend who knows exactly what you like.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="flex flex-col items-start p-6 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
<div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:pen-new-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-emerald-900 mb-3">Tell us your preferences</h3>
<p className="text-emerald-500 text-sm leading-relaxed font-normal">Input your destination, dates, budget, and travel style. Be as specific or as vague as you want.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
<div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-900 tracking-tight mb-3">AI crafts your journey</h3>
<p className="text-emerald-500 text-sm leading-relaxed font-normal">Our engine builds a logical, realistic, and inspiring daily itinerary, complete with hidden gems and classic spots.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
<div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:map-arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-emerald-900 mb-3">Edit &amp; embark</h3>
<p className="text-emerald-500 text-sm leading-relaxed font-normal">Tweak the schedule easily with drag-and-drop. Export to your calendar or maps app and you're ready to go.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-50 border-y border-emerald-100">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900 mb-3">Curated by AI, loved by travelers</h2>
<p className="text-emerald-500 text-base font-normal">Explore sample itineraries generated for different vibes.</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-cyan-600 transition-colors bg-white px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
                    View all templates <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-emerald-200">
<img alt="Dubai" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-emerald-900/90 transition-opacity duration-300"></div>

<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex justify-between items-start mb-3">
<h3 className="text-white text-xl font-semibold tracking-tight leading-none">Dubai, UAE</h3>
<span className="bg-cyan-500/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-medium border border-cyan-400/30 shadow-sm">3 Days</span>
</div>
<p className="text-white/80 text-sm font-normal line-clamp-2 mb-4">A high-energy mix of modern architecture, luxury dining, and desert adventures.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex gap-2">
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors border border-white/5"><iconify-icon icon="solar:buildings-linear"></iconify-icon> City</span>
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors border border-white/5"><iconify-icon icon="solar:sun-linear"></iconify-icon> Warm</span>
</div>
<button className="w-8 h-8 rounded-full bg-white text-cyan-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0 shadow-sm">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-emerald-200">
<img alt="Paris" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-emerald-900/90 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex justify-between items-start mb-3">
<h3 className="text-white text-xl font-semibold tracking-tight leading-none">Paris, France</h3>
<span className="bg-cyan-500/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-medium border border-cyan-400/30 shadow-sm">5 Days</span>
</div>
<p className="text-white/80 text-sm font-normal line-clamp-2 mb-4">A romantic getaway focusing on hidden cafes, art galleries, and evening Seine strolls.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex gap-2">
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors border border-white/5"><iconify-icon icon="solar:cup-linear"></iconify-icon> Culture</span>
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors border border-white/5"><iconify-icon icon="solar:camera-linear"></iconify-icon> Photo</span>
</div>
<button className="w-8 h-8 rounded-full bg-white text-cyan-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0 shadow-sm">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-emerald-200 lg:block hidden">
<img alt="Kyoto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-emerald-900/90 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex justify-between items-start mb-3">
<h3 className="text-white text-xl font-semibold tracking-tight leading-none">Kyoto, Japan</h3>
<span className="bg-cyan-500/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-medium border border-cyan-400/30 shadow-sm">7 Days</span>
</div>
<p className="text-white/80 text-sm font-normal line-clamp-2 mb-4">A tranquil journey through historic temples, bamboo groves, and traditional tea ceremonies.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex gap-2">
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors border border-white/5"><iconify-icon icon="solar:leaf-linear"></iconify-icon> Relax</span>
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors border border-white/5"><iconify-icon icon="solar:home-smile-angle-linear"></iconify-icon> Heritage</span>
</div>
<button className="w-8 h-8 rounded-full bg-white text-cyan-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0 shadow-sm">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-900 mb-6">Ready for your next adventure?</h2>
<p className="text-emerald-500 text-lg font-normal mb-10 max-w-2xl mx-auto">Join thousands of travelers who have switched to smarter, stress-free planning with Ghure Ashi.</p>
<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-sm text-sm">
                Start Planning for Free
            </button>
</div>
</section>

<footer className="bg-emerald-50 py-12 border-t border-emerald-100">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-emerald-900 text-xl font-semibold tracking-tighter">Ghure Ashi</span>
<span className="text-emerald-400 text-sm">© 2024 Ghure Ashi.</span>
</div>
<div className="flex gap-6 text-sm font-medium text-emerald-500">
<a className="hover:text-cyan-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Terms</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
