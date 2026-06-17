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
      

<div className="md:hidden fixed bottom-4 inset-x-4 z-50">
<div className="bg-[#112440]/90 backdrop-blur-xl border border-[#48A6D8]/30 rounded-full p-1.5 flex items-center justify-between shadow-[0_10px_40px_rgba(72,166,216,0.2)]">
<a className="flex-1 text-center text-sm font-light text-[#48A6D8] py-3 rounded-full hover:bg-white/5 transition-colors uppercase tracking-widest" href="#menu">Menu</a>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
<a className="flex-1 text-center text-sm font-light text-slate-300 py-3 rounded-full hover:bg-white/5 transition-colors uppercase tracking-widest" href="#music">Music</a>
<a className="ml-2 bg-gradient-to-r from-[#FF4433] to-[#CC2B1C] text-white px-6 py-3 rounded-full text-sm font-light uppercase tracking-widest shadow-[0_0_20px_rgba(255,68,51,0.4)] whitespace-nowrap" href="#menu">Order</a>
</div>
</div>
<nav className="absolute top-0 w-full z-50 bg-[#0A1628]/80 md:bg-[#0A1628]/80 backdrop-blur-md border-b border-white/5 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3 md:py-4">
<a className="flex items-center group relative inline-block py-2 pr-10 md:pr-14" href="#">
<span className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight uppercase transition-transform group-hover:scale-105">
<span className="text-[#FF4433]">Crab</span>
<span className="text-white relative">
                        SHAC<span className="relative inline-block">K<div className="absolute left-[80%] -top-[30%] flex flex-col items-center origin-center group-hover:rotate-[15deg] group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 pointer-events-none">
<span className="text-5xl md:text-6xl relative z-10 drop-shadow-[0_8px_15px_rgba(255,68,51,0.5)] group-hover:drop-shadow-[0_12px_25px_rgba(255,68,51,0.8)] transition-all duration-500">🦀</span>
</div></span>
</span>
</span>
</a>
<div className="hidden md:flex items-center gap-10 text-2xl font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About Us</a>
<a className="hover:text-white transition-colors" href="#music">Live Music</a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="bg-white text-[#0A1628] px-8 py-3 rounded-full text-2xl font-normal tracking-tight hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#menu">
                    Order Now
                </a>
</div>
<button className="md:hidden text-white p-2 flex items-center justify-center bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden px-4 sm:px-6">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#001220]">

<div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/60 to-[#001220] z-0"></div>

<div className="absolute inset-0 z-10 mix-blend-screen caustics-bg opacity-70"></div>

<div className="absolute inset-0 z-20 opacity-60 mix-blend-overlay">
<svg className="w-full h-full">
<filter height="140%" id="deepWater" width="140%" x="-20%" y="-20%">
<feturbulence basefrequency="0.005 0.01" numoctaves="3" result="noise" type="fractalNoise">
<animate attributename="baseFrequency" dur="15s" repeatcount="indefinite" values="0.005 0.01;0.008 0.015;0.005 0.01"></animate>
</feturbulence>
<fedisplacementmap in="SourceGraphic" in2="noise" scale="45" xchannelselector="R" ychannelselector="G"></fedisplacementmap>
</filter>
<rect fill="url(#oceanGrad)" filter="url(#deepWater)" height="100%" width="100%"></rect>
<defs>
<lineargradient id="oceanGrad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#48A6D8" stop-opacity="0.3"></stop>
<stop offset="40%" stop-color="#112440" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="#001220" stop-opacity="0.9"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute inset-0 z-30">
<div className="bubble w-4 h-4 left-[15%] animate-[bubbleRise_7s_ease-in_infinite]"></div>
<div className="bubble w-2 h-2 left-[30%] animate-[bubbleRise_9s_ease-in_infinite_1s]"></div>
<div className="bubble w-6 h-6 left-[65%] animate-[bubbleRise_12s_ease-in_infinite_3s]"></div>
<div className="bubble w-3 h-3 left-[85%] animate-[bubbleRise_8s_ease-in_infinite_2s]"></div>
<div className="bubble w-5 h-5 left-[48%] animate-[bubbleRise_10s_ease-in_infinite_4s]"></div>
</div>

<div className="absolute inset-0 z-30">
<div className="sea-creature text-4xl md:text-5xl left-[12%] top-[-10%]" style={{animationDuration: '28s', animationDelay: '0s'}}>🦀</div>
<div className="sea-creature text-3xl md:text-4xl left-[35%] top-[-10%]" style={{animationDuration: '35s', animationDelay: '4s'}}>🦐</div>
<div className="sea-creature text-5xl md:text-6xl left-[65%] top-[-10%]" style={{animationDuration: '30s', animationDelay: '2s'}}>🦞</div>
<div className="sea-creature text-2xl md:text-3xl left-[85%] top-[-10%]" style={{animationDuration: '40s', animationDelay: '7s'}}>🐚</div>
<div className="sea-creature text-3xl md:text-4xl left-[20%] top-[-10%]" style={{animationDuration: '38s', animationDelay: '15s'}}>🦪</div>
<div className="sea-creature text-5xl md:text-6xl left-[75%] top-[-10%]" style={{animationDuration: '32s', animationDelay: '12s'}}>🦀</div>
<div className="sea-creature text-4xl md:text-5xl left-[45%] top-[-10%]" style={{animationDuration: '25s', animationDelay: '20s'}}>🦐</div>
</div>

<div className="absolute top-1/4 -left-20 md:left-[10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#48A6D8]/20 md:bg-[#48A6D8]/15 rounded-full blur-[120px] md:blur-[140px] animate-[pulse_6s_ease-in-out_infinite] z-30 pointer-events-none"></div>
</div>
<div className="relative z-40 max-w-4xl mx-auto text-center flex flex-col items-center mt-6 md:mt-12 w-full">
<div className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-white/20 md:border-white/10 bg-white/10 md:bg-white/5 backdrop-blur-md mb-8 md:mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<span className="text-sm md:text-lg font-light text-[#48A6D8] tracking-widest uppercase">BRICK, NEW JERSEY</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[1.1] md:leading-[1.05] mb-6 md:mb-10 w-full flex flex-col items-center">
<span className="text-white drop-shadow-lg block w-full">
                    Fresh Seafood.
                </span>
<a className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4433] to-[#ff8075] md:text-[#FF4433] md:bg-none block drop-shadow-lg live-music-react cursor-pointer" href="#music">Live Music.</a>
<span className="text-liquid shore-vibes-pulse block mt-2 pb-4 drop-shadow-[0_0_25px_rgba(72,166,216,0.3)]">Shore Vibes.</span>
</h1>
<p className="text-xl sm:text-2xl md:text-4xl text-slate-300 md:text-slate-200 max-w-3xl font-thin leading-relaxed mb-10 md:mb-14 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2">
                Where the Jersey Shore comes to eat. Crack into the freshest crab legs, enjoy cold drinks with live bands, and discover the local seafood spot everyone keeps coming back to.
            </p>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
<a className="w-full sm:w-auto bg-gradient-to-br from-[#FF4433] to-[#CC2B1C] text-white px-8 py-4 md:px-10 md:py-4 rounded-full text-xl md:text-3xl font-light tracking-tight hover:from-[#E63728] hover:to-[#B32316] transition-all flex items-center justify-center shadow-[0_0_30px_rgba(255,68,51,0.4)] md:shadow-[0_0_20px_rgba(255,68,51,0.3)] hover:-translate-y-0.5" href="#menu">
                    Order Now
                </a>
<a className="w-full sm:w-auto bg-[#112440]/80 md:bg-white/10 border border-white/20 text-white px-8 py-4 md:px-10 md:py-4 rounded-full text-xl md:text-3xl font-light tracking-tight hover:bg-white/20 transition-all flex items-center justify-center hover:-translate-y-0.5 backdrop-blur-md shadow-lg" href="#music">
                    Explore Music
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative z-10 bg-[#0A1628]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="order-2 lg:order-1 relative px-2 sm:px-0">
<div className="aspect-[4/5] rounded-[2rem] md:rounded-3xl overflow-hidden bg-[#112440]/80 border border-[#48A6D8]/20 md:border-white/10 p-1.5 md:p-2 relative shadow-[0_0_40px_rgba(72,166,216,0.1)] md:shadow-2xl">

<img alt="Mouth-watering fresh seafood on ice outdoors, lobsters, crabs, clams and shrimp" className="w-full h-full object-cover rounded-[1.75rem] md:rounded-2xl"/>
</div>
<div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-[#112440]/95 backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-3xl shadow-2xl scale-90 sm:scale-100 origin-bottom-right">
<div className="flex items-center gap-4 md:gap-5">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#48A6D8]/20 flex items-center justify-center">
<i className="w-6 h-6 md:w-8 md:h-8 text-[#48A6D8]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-3xl md:text-4xl font-light tracking-tight text-white">100%</p>
<p className="text-xl md:text-2xl text-slate-300 md:text-slate-400 mt-0.5 font-thin tracking-tight">Locally Sourced</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-base md:text-xl font-light text-[#48A6D8] tracking-widest uppercase mb-3 md:mb-4">About Us</h2>
<h3 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 md:mb-8 leading-[1.1] md:leading-tight">From the docks<br/>to your table.</h3>
<p className="text-slate-300 md:text-slate-400 font-thin leading-relaxed mb-8 md:mb-10 text-2xl md:text-3xl lg:text-4xl">
                    Located in the heart of Brick Township, The Crab Shack isn't just a restaurant; it's a coastal experience. We partner directly with local New Jersey fishermen to bring you the freshest catch daily, staying true to our deep shore roots.
                </p>

<div className="flex sm:grid sm:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 hide-scrollbar">
<div className="w-[85%] sm:w-auto shrink-0 snap-center group relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-[#112440]">
<img alt="Premium Seafood spread" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
<h4 className="text-2xl md:text-3xl font-light text-[#FF4433] mb-1 tracking-tight">Premium Quality</h4>
<p className="text-base md:text-lg text-slate-300 font-thin leading-relaxed">Hand-selected crab, line-caught fish, and expertly crafted recipes.</p>
</div>
</div>

<div className="w-[85%] sm:w-auto shrink-0 snap-center group relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-[#112440]">
<img alt="Ron and Michele at the Crab Shack" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-[#0A1628]/20"></div>
<div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
<h4 className="text-2xl md:text-3xl font-light text-[#48A6D8] mb-1 tracking-tight">Meet Ron &amp; Michele</h4>
<p className="text-sm md:text-base text-slate-300 font-thin leading-relaxed line-clamp-3 md:line-clamp-none">
                                Ron, a real estate investor &amp; multi-business owner, was a huge fan of the Crab Shack. Fate and taste brought them together, and now they love bringing our town the best fresh seafood!
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 bg-[#061224] border-t border-white/5 overflow-hidden" id="music">
<div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#48A6D8] via-[#061224] to-[#061224]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
<h2 className="text-base md:text-xl font-light text-[#48A6D8] tracking-widest uppercase mb-3 md:mb-4">Out Back</h2>
<h3 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 md:mb-8">Live Music on the Rocks</h3>
<p className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-thin leading-relaxed">
                    Head to the back of the Crab Shack where the ground turns to pebble rocks and the string lights turn on. Grab a bucket of seafood, crack some crabs, and vibe out with the best local bands the Jersey Shore has to offer.
                </p>
</div>
<div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
<div className="lg:col-span-7 relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-[#FF4433]/20 to-[#48A6D8]/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl bg-[#112440]">
<img alt="Outdoor Live Music Experience" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 mix-blend-luminosity hover:mix-blend-normal" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#061224] via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
<div className="bg-black/40 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
<span className="text-white text-base md:text-xl font-normal tracking-widest uppercase">Live Every Weekend</span>
</div>
<i className="w-10 h-10 text-white/50" data-lucide="music" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-4 md:space-y-6">
<h4 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-6 flex items-center gap-3">
<i className="w-8 h-8 text-[#FF4433]" data-lucide="calendar" strokeWidth="1.5"></i>
                        Upcoming Lineup
                    </h4>
<div className="bg-[#112440]/60 backdrop-blur-xl border border-white/5 p-5 md:p-6 rounded-3xl hover:border-[#48A6D8]/30 transition-colors flex items-center justify-between group cursor-pointer">
<div>
<p className="text-base md:text-lg text-[#48A6D8] font-light mb-1">Friday, 7:00 PM</p>
<h5 className="text-2xl md:text-3xl text-white font-normal tracking-tight group-hover:text-[#48A6D8] transition-colors">The Sandy Hooks</h5>
<p className="text-base md:text-xl text-slate-400 font-thin mt-1 tracking-tight">Classic Rock &amp; Coastal Country</p>
</div>
<i className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="bg-[#112440]/60 backdrop-blur-xl border border-white/5 p-5 md:p-6 rounded-3xl hover:border-[#48A6D8]/30 transition-colors flex items-center justify-between group cursor-pointer">
<div>
<p className="text-base md:text-lg text-[#48A6D8] font-light mb-1">Saturday, 6:30 PM</p>
<h5 className="text-2xl md:text-3xl text-white font-normal tracking-tight group-hover:text-[#48A6D8] transition-colors">Boardwalk Brass</h5>
<p className="text-base md:text-xl text-slate-400 font-thin mt-1 tracking-tight">Funk, Soul &amp; Brass Covers</p>
</div>
<i className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="bg-[#112440]/60 backdrop-blur-xl border border-white/5 p-5 md:p-6 rounded-3xl hover:border-[#48A6D8]/30 transition-colors flex items-center justify-between group cursor-pointer">
<div>
<p className="text-base md:text-lg text-[#48A6D8] font-light mb-1">Sunday, 4:00 PM</p>
<h5 className="text-2xl md:text-3xl text-white font-normal tracking-tight group-hover:text-[#48A6D8] transition-colors">Acoustic Sunsets</h5>
<p className="text-base md:text-xl text-slate-400 font-thin mt-1 tracking-tight">Chill Acoustic Vibes</p>
</div>
<i className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 bg-[#0A1628] border-t border-white/5" id="menu">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-base md:text-xl font-light text-[#FF4433] tracking-widest uppercase mb-3 md:mb-4">The Catch</h2>
<h3 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-8">Full Menu</h3>
<div className="flex justify-center mb-8 md:mb-12">
<a className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#112440]/60 md:bg-white/5 border border-[#48A6D8]/30 md:border-white/10 rounded-full backdrop-blur-md overflow-hidden transition-all hover:bg-[#48A6D8]/10 hover:border-[#48A6D8]/50 shadow-[0_0_20px_rgba(72,166,216,0.1)] md:shadow-none" href="#">
<i className="w-6 h-6 md:w-8 md:h-8 text-[#48A6D8]" data-lucide="download" strokeWidth="1.5"></i>
<span className="text-xl md:text-2xl font-light text-white group-hover:text-[#48A6D8] transition-colors tracking-tight">Download Menu PDF</span>
</a>
</div>
</div>
<div className="mb-12 md:mb-16 bg-gradient-to-br from-[#FF4433] via-[#E63728] to-[#991F14] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-[0_15px_50px_rgba(255,68,51,0.25)] md:shadow-2xl group border border-white/20">
<div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
<h4 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-3">Feeling Crabby?</h4>
<p className="text-2xl md:text-4xl text-white/90 font-thin tracking-tight">Check out our Captains Picks for the best claws in town.</p>
</div>
<div className="relative z-10 shrink-0 w-full md:w-auto">
<a className="block text-center bg-white text-[#CC2B1C] px-8 py-4 md:py-3 rounded-full text-xl md:text-2xl font-normal tracking-tight hover:bg-slate-100 transition-colors shadow-xl w-full" href="#captains-picks">View Picks</a>
</div>
</div>
<div className="columns-1 lg:columns-2 xl:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">

<div className="break-inside-avoid bg-[#112440]/60 md:bg-[#112440]/40 backdrop-blur-xl border border-[#48A6D8]/20 md:border-white/5 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#48A6D8]/40 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)] md:shadow-none">
<div className="flex items-center gap-4 mb-6 md:mb-8 pb-5 md:pb-6 border-b border-white/10 md:border-white/5 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="star" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Appetizers</h4>
</div>
<div className="space-y-6 relative z-10">
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Mini Caviar Hot Lobster Rolls</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$28</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Premium Lobster Meat - Butter - Caviar</p>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Octopus Salad</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$19</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Fennel - Roasted Red Peppers - Artichokes - Capers - EVOO</p>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Wood Fired Oysters</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$18</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Butter - Lobster - Parmesan Panko</p>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Crispy Sushi Rice</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$16</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Sushi Tuna - Spicy Mayo - Jalapenos</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-[#112440]/60 md:bg-[#112440]/40 backdrop-blur-xl border border-[#48A6D8]/20 md:border-white/5 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#48A6D8]/40 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)] md:shadow-none">
<div className="flex items-center gap-4 mb-6 md:mb-8 pb-5 md:pb-6 border-b border-white/10 md:border-white/5 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="store" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Entrees</h4>
</div>
<div className="space-y-6 relative z-10">
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Surf and Turf</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$60</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Rib eye - Lobster Tail - Gorgonzola Butter</p>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Mediterranean Fish</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$34</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Cod or Swordfish or Fluke - White Wine Sauce - Artichokes - Red peppers - Capers - Olives</p>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Lobster Mac &amp; Cheese</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$24</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Premium Lobster - Four Cheese Bechamel - Panko</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-gradient-to-br from-[#112440] to-[#1D3B62]/80 md:to-[#1D3B62]/50 backdrop-blur-xl border border-[#48A6D8]/40 md:border-[#48A6D8]/30 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group shadow-[0_10px_40px_rgba(72,166,216,0.15)] md:shadow-[0_0_30px_rgba(72,166,216,0.1)]" id="captains-picks">
<div className="flex items-center gap-4 mb-6 md:mb-8 pb-5 md:pb-6 border-b border-[#48A6D8]/30 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="anchor" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Captains Picks</h4>
</div>
<div className="space-y-6 relative z-10">
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-white transition-colors tracking-tight leading-tight">Broiled Lobster Tails (2)</h5>
<div className="flex-grow border-b-2 border-dotted border-[#48A6D8]/30 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#48A6D8] tracking-tight shrink-0">$45</span>
</div>
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-white transition-colors tracking-tight leading-tight">Steamed Local Blue Claws (6)</h5>
<div className="flex-grow border-b-2 border-dotted border-[#48A6D8]/30 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#48A6D8] tracking-tight shrink-0">$40</span>
</div>
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-white transition-colors tracking-tight leading-tight">King Crab Legs and Butter</h5>
<div className="flex-grow border-b-2 border-dotted border-[#48A6D8]/30 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#48A6D8] tracking-tight shrink-0">$MP</span>
</div>
</div>
</div>

<div className="break-inside-avoid bg-[#112440]/60 md:bg-[#112440]/40 backdrop-blur-xl border border-[#48A6D8]/20 md:border-white/5 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#48A6D8]/40 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)] md:shadow-none">
<div className="flex items-center gap-4 mb-6 md:mb-8 pb-5 md:pb-6 border-b border-white/10 md:border-white/5 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Sandwiches</h4>
</div>
<div className="space-y-6 relative z-10">
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Hot Lobster Roll</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$30</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Premium Lobster Meat - Butter - Brioche</p>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Cold Lobster Roll</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$30</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Premium Lobster Meat - Dill Mayo - Brioche</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-[#112440]/60 md:bg-[#112440]/40 backdrop-blur-xl border border-[#48A6D8]/20 md:border-white/5 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#48A6D8]/40 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)] md:shadow-none">
<div className="flex items-center gap-4 mb-6 md:mb-8 pb-5 md:pb-6 border-b border-white/10 md:border-white/5 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="leaf" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Salads</h4>
</div>
<div className="space-y-6 relative z-10">
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Grilled Salmon Salad</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$18</span>
</div>
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Grilled Jumbo Shrimp</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$18</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Spinach - Sliced Strawberries - Citrus Dressing</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-[#112440]/60 md:bg-[#112440]/40 backdrop-blur-xl border border-[#48A6D8]/20 md:border-white/5 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#48A6D8]/40 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)] md:shadow-none">
<div className="flex items-center gap-4 mb-6 md:mb-8 pb-5 md:pb-6 border-b border-white/10 md:border-white/5 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="soup" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Soups</h4>
</div>
<div className="space-y-6 relative z-10">
<div className="group/item">
<div className="flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Lobster Bisque Bowl</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$28</span>
</div>
<p className="text-base md:text-2xl font-thin text-slate-400 leading-relaxed pr-8 md:pr-0">Premium Lobster Meat - Lobster Bisque Sourdough Bread Bowl</p>
</div>
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">New England Clam</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$9</span>
</div>
</div>
</div>

<div className="break-inside-avoid bg-[#112440]/60 md:bg-[#112440]/40 backdrop-blur-xl border border-[#48A6D8]/20 md:border-white/5 p-6 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#48A6D8]/40 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)] md:shadow-none">
<div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10 md:border-white/5 relative z-10">
<i className="w-8 h-8 md:w-10 md:h-10 text-[#48A6D8]" data-lucide="umbrella" strokeWidth="1.5"></i>
<h4 className="text-3xl md:text-4xl font-normal tracking-tight text-white">Tastefully British</h4>
</div>
<p className="text-base md:text-xl text-[#48A6D8] font-thin mb-6 md:mb-8 italic tracking-wide pr-4">Bloomingdale, NJ's Most Popular Fish and Chips Restaurant</p>
<div className="space-y-6 relative z-10">
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Fish and Chips</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-base md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">Sm $13 / Lg $16</span>
</div>
<div className="group/item flex items-end justify-between gap-3 md:gap-4 mb-1">
<h5 className="text-lg md:text-2xl font-light text-slate-100 group-hover/item:text-[#48A6D8] transition-colors tracking-tight leading-tight">Fish Sandwich and Fries</h5>
<div className="flex-grow border-b-2 border-dotted border-white/10 mb-1 md:mb-2"></div>
<span className="text-lg md:text-2xl font-normal text-[#FF4433] tracking-tight shrink-0">$13</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#061224] pt-20 pb-12 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-2">
<a className="inline-block py-2 pr-10 mb-6" href="#">
<span className="text-3xl md:text-4xl font-normal tracking-tight uppercase">
<span className="text-[#FF4433]">Crab</span>
<span className="text-white">SHACK</span>
</span>
</a>
<p className="text-slate-400 font-thin text-xl md:text-2xl max-w-sm leading-relaxed tracking-tight">
                        The ultimate destination for fresh seafood, cold drinks, and live music on the Jersey Shore.
                    </p>
</div>
<div>
<h5 className="text-white font-normal text-xl tracking-tight mb-6">Quick Links</h5>
<ul className="space-y-4">
<li><a className="text-lg text-slate-400 font-thin hover:text-[#48A6D8] transition-colors" href="#about">About Us</a></li>
<li><a className="text-lg text-slate-400 font-thin hover:text-[#48A6D8] transition-colors" href="#music">Live Music</a></li>
<li><a className="text-lg text-slate-400 font-thin hover:text-[#48A6D8] transition-colors" href="#menu">Full Menu</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-normal text-xl tracking-tight mb-6">Connect</h5>
<div className="flex items-center gap-4">
<a className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#48A6D8]/20 hover:border-[#48A6D8]/50 hover:text-[#48A6D8] transition-all text-slate-400 group" href="#">
<i className="w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF4433]/20 hover:border-[#FF4433]/50 hover:text-[#FF4433] transition-all text-slate-400 group" href="#">
<i className="w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#48A6D8]/20 hover:border-[#48A6D8]/50 hover:text-[#48A6D8] transition-all text-slate-400 group" href="#">
<i className="w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-base text-slate-500 font-thin">
                    © 2023 Crab Shack. All rights reserved.
                </p>
<div className="flex items-center gap-6">
<a className="text-base text-slate-500 font-thin hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-base text-slate-500 font-thin hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
