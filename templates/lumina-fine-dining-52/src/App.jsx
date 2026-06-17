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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter uppercase flex items-center gap-2 text-white hover:opacity-80 transition-opacity group" href="#">
<span className="iconify text-orange-500 group-hover:rotate-12 transition-transform duration-500" data-icon="lucide:chef-hat" data-width="24"></span>
                Lumina
            </a>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-stone-400">
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#menu">Menu</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#about">Philosophy</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#experience">Experience</a>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-400 hover:text-white transition-colors">
                    Login
                </button>
<button className="group relative overflow-hidden bg-white text-black text-xs font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-stone-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
<span className="btn-shine"></span>
<span className="relative z-10 flex items-center gap-2">
                        Reserve
                        <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-breathe"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-700/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none animate-breathe delay-500"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-3 mb-8 reveal-text">
<div className="h-[1px] w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
<span className="text-orange-500 text-xs font-medium uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">Michelin Guide 2024</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8 text-white reveal-text delay-100">
                    Taste <br/>
<span className="text-stone-500 italic font-serif pr-2">the</span>Ethos.
                </h1>
<p className="text-lg text-stone-400 mb-10 max-w-md leading-relaxed reveal-text delay-200 font-light">
                    Where nature's raw imperfection meets culinary precision. A sensory journey through the seasons.
                </p>
<div className="flex items-center gap-6 reveal-text delay-300">
<button className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
<span className="iconify group-hover:rotate-90 transition-transform duration-500" data-icon="lucide:arrow-down" data-width="20"></span>
</button>
<span className="text-xs uppercase tracking-widest text-stone-500 group-hover:text-white transition-colors">Explore Menu</span>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[600px] w-full reveal-img delay-200">
<div className="absolute inset-0 rounded-t-[10rem] rounded-b-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
<img alt="Fine Dining" className="object-cover w-full h-full opacity-80 animate-slow-zoom" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-12 -left-6 bg-stone-900/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs animate-float z-20 hover:border-orange-500/30 transition-colors">
<p className="text-stone-300 text-sm font-light italic">"A masterclass in restraint and flavor intensity."</p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]">
<span className="iconify text-black" data-icon="lucide:quote" data-width="12"></span>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-white">NY Times</span>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 border-y border-white/5 bg-black marquee-container overflow-hidden relative z-20">
<div className="marquee-content flex gap-16 whitespace-nowrap items-center text-stone-500 text-sm font-medium uppercase tracking-widest">
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:star" data-width="16"></span> Seasonal Tasting Menu</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:circle" data-width="6"></span> Biodynamic Wines</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:star" data-width="16"></span> Open Fire Kitchen</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:circle" data-width="6"></span> Local Sourcing</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:star" data-width="16"></span> Immersive Dining</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:circle" data-width="6"></span> Private Events</span>

<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:star" data-width="16"></span> Seasonal Tasting Menu</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:circle" data-width="6"></span> Biodynamic Wines</span>
<span className="flex items-center gap-4 group hover:text-white transition-colors"><span className="iconify text-orange-500 group-hover:scale-125 transition-transform" data-icon="lucide:star" data-width="16"></span> Open Fire Kitchen</span>
</div>
</div>

<section className="py-32" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">Curated Atmosphere.</h2>
<p className="text-stone-400 max-w-md font-light">Every texture, sound, and flavor is orchestrated to create a moment of suspension in time.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-stone-900 border border-white/5 hover-glow cursor-pointer">
<img alt="Kitchen" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="iconify text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" data-icon="lucide:flame" data-width="28"></span>
<h3 className="text-2xl font-medium text-white mb-2">The Hearth</h3>
<p className="text-stone-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Center stage is our open wood fire, where primitive techniques meet modern refinement.</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-3xl bg-stone-900 border border-white/5 hover-glow cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-800 to-black"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="iconify text-white group-hover:text-orange-400 transition-colors" data-icon="lucide:wine" data-width="24"></span>
<span className="text-xs font-mono text-stone-500 group-hover:text-white transition-colors">01</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Sommelier's Selection</h3>
<p className="text-stone-400 text-sm font-light">Rare vintages and low-intervention pours.</p>
</div>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-orange-500 to-transparent pointer-events-none transition-opacity duration-500"></div>
</div>

<div className="col-span-1 relative group overflow-hidden rounded-3xl bg-stone-900 border border-white/5 hover-glow p-8 flex flex-col justify-center items-center text-center cursor-pointer">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-500">
<span className="iconify text-orange-400" data-icon="lucide:sprout" data-width="28"></span>
</div>
<h3 className="text-lg font-medium text-white">Botanical</h3>
<p className="text-xs text-stone-500 mt-2">Greenhouse on site</p>
</div>

<div className="col-span-1 relative group overflow-hidden rounded-3xl bg-white text-black border border-white/5 hover-glow p-8 flex flex-col justify-center items-center text-center cursor-pointer">
<div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black/10 transition-all duration-500">
<span className="iconify text-black" data-icon="lucide:clock" data-width="28"></span>
</div>
<h3 className="text-lg font-medium text-black">Private</h3>
<p className="text-xs text-stone-500 mt-2">Chef's Table Only</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900/30 border-y border-white/5" id="menu">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-orange-500 text-xs font-semibold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">Late Autumn</span>
<h2 className="text-4xl md:text-5xl font-medium text-white mt-4 mb-6">Signatures</h2>
<div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
</div>
<div className="space-y-4">

<div className="group relative flex items-center justify-between p-6 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-orange-500/20 transition-all duration-300 cursor-default">
<div className="flex items-center gap-6">
<span className="text-stone-600 font-mono text-xs group-hover:text-orange-500 transition-colors">01</span>
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.4)] transition-all">Scallop Crudo</h3>
<p className="text-sm text-stone-500">Yuzu vinaigrette, chili oil, micro cilantro</p>
</div>
</div>
<span className="text-white font-mono opacity-50">$24</span>

<div className="fixed pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 w-64 h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10" style={{left: '60%', top: '50%', transform: 'translate(-50%, -50%) rotate(3deg)'}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group relative flex items-center justify-between p-6 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-orange-500/20 transition-all duration-300 cursor-default">
<div className="flex items-center gap-6">
<span className="text-stone-600 font-mono text-xs group-hover:text-orange-500 transition-colors">02</span>
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.4)] transition-all">Wagyu Strip</h3>
<p className="text-sm text-stone-500">Truffle mash, charred broccolini, red wine jus</p>
</div>
</div>
<span className="text-white font-mono opacity-50">$85</span>
<div className="fixed pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 w-64 h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10" style={{left: '60%', top: '50%', transform: 'translate(-50%, -50%) rotate(-2deg)'}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="group relative flex items-center justify-between p-6 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-orange-500/20 transition-all duration-300 cursor-default">
<div className="flex items-center gap-6">
<span className="text-stone-600 font-mono text-xs group-hover:text-orange-500 transition-colors">03</span>
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.4)] transition-all">Miso Black Cod</h3>
<p className="text-sm text-stone-500">Ginger dashi, bok choy, sesame crisp</p>
</div>
</div>
<span className="text-white font-mono opacity-50">$42</span>
<div className="fixed pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 w-64 h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10" style={{left: '60%', top: '50%', transform: 'translate(-50%, -50%) rotate(1deg)'}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-orange-500 pb-1 hover:text-orange-500 hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.8)] transition-all" href="#">
                    View Full Tasting Menu
                    <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden isolate">

<div className="absolute inset-0 bg-stone-900/50">
<div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] -z-10 animate-breathe"></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_5px_rgba(249,115,22,0.8)]"></span>
                Limited Seating
            </span>
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-8 drop-shadow-2xl">Secure your table.</h2>
<div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors">
<div className="relative w-full">
<select className="w-full appearance-none bg-transparent text-white pl-10 pr-4 py-4 rounded-xl hover:bg-white/5 focus:bg-white/10 focus:outline-none transition-colors cursor-pointer text-sm font-medium">
<option className="bg-stone-900">2 Guests</option>
<option className="bg-stone-900">3 Guests</option>
<option className="bg-stone-900">4 Guests</option>
</select>
<span className="iconify absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" data-icon="lucide:users" data-width="16"></span>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="relative w-full">
<input className="w-full bg-transparent text-white pl-10 pr-4 py-4 rounded-xl hover:bg-white/5 focus:bg-white/10 focus:outline-none transition-colors cursor-pointer text-sm font-medium [color-scheme:dark]" type="date"/>
<span className="iconify absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" data-icon="lucide:calendar" data-width="16"></span>
</div>
<button className="group w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 relative overflow-hidden">
<div className="btn-shine"></div>
<span className="relative z-10 flex items-center gap-2">
                        Search
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:search" data-width="16"></span>
</span>
</button>
</div>
<p className="mt-6 text-xs text-stone-500 uppercase tracking-widest">
                Reservations released daily at 10AM EST
            </p>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-white/10 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-4">
<a className="text-2xl font-medium tracking-tighter uppercase flex items-center gap-2 text-white mb-6 group" href="#">
<span className="iconify text-orange-500 group-hover:rotate-12 transition-transform duration-500" data-icon="lucide:chef-hat" data-width="24"></span>
                        Lumina
                    </a>
<p className="text-stone-400 font-light leading-relaxed mb-6">
                        Redefining the boundaries of modern gastronomy through seasonal exploration and artistic presentation.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white hover:bg-white/5 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white hover:bg-white/5 transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-white font-medium mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-stone-500 font-light">
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Philosophy</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Menu</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Wines</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Gallery</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Visit</h4>
<ul className="space-y-4 text-sm text-stone-500 font-light">
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Reservations</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Private Dining</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Events</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-stone-500 font-light">
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Privacy</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Terms</a></li>
<li><a className="hover:text-orange-400 hover:translate-x-1 transition-all inline-block" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-600 uppercase tracking-wider">© 2024 Lumina Restaurant Group.</p>
<div className="flex items-center gap-2 group cursor-help">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
<span className="text-xs text-stone-500 font-medium group-hover:text-white transition-colors">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
