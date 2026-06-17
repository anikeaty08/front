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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col justify-center group" href="index.html">
<span className="font-['Barlow_Semi_Condensed'] text-xl font-medium tracking-tight uppercase leading-none text-gray-900 group-hover:text-sky-700 transition-colors duration-300">True Lee</span>
<span className="font-['Barlow_Semi_Condensed'] text-xs font-normal tracking-tight uppercase leading-none text-gray-500 mt-1">Loudspeakers</span>
</a>
<ul className="hidden md:flex items-center gap-8">
<li><a className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200" href="products.html">Products</a></li>
<li><a className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200" href="about.html">About</a></li>
<li><a className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200" href="technology.html">Technology</a></li>
<li><a className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200" href="dealers.html">Dealers</a></li>
</ul>
<div className="hidden md:flex items-center gap-4">
<a className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-white text-gray-900 text-base font-normal border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all duration-300" href="contact.html">Request a Quote</a>
</div>
<button aria-label="Toggle menu" className="md:hidden text-gray-600 hover:text-gray-900 transition-colors">
<i className="w-6 h-6" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</nav>

<section className="relative pt-40 pb-32 md:pt-52 md:pb-48 px-6 z-10 flex items-center min-h-[85vh] bg-gradient-to-b from-[#a4c5d8] to-[#e6f0f4] overflow-hidden">
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="max-w-3xl">
<h1 className="font-['Barlow_Semi_Condensed'] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase text-white leading-[0.9] drop-shadow-md">
                    True Lee<br/>
<span className="text-3xl md:text-5xl lg:text-6xl text-white/90 tracking-tight mt-3 block font-normal">Loudspeakers</span>
</h1>
<div className="h-[1px] w-full max-w-[240px] bg-white/40 mt-8 mb-8 rounded-full"></div>
<p className="text-lg md:text-xl text-white/95 max-w-xl font-light leading-relaxed drop-shadow-sm">
                    Premium loudspeakers for the spaces that bring us together. Engineered for clarity. Designed for community.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
<a className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-white text-gray-900 text-base font-normal hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300" href="products.html">
                        Explore Products
                        <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none text-white pointer-events-none z-0">
<svg className="w-full h-[60px] md:h-[120px]" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,100 Q720,0 1440,100 L1440,120 L0,120 Z" fill="currentColor"></path>
</svg>
</div>
</section>

<div className="relative z-20 flex justify-center -mt-16 md:-mt-20 mb-16 px-6">
<a className="inline-flex items-center gap-3 h-14 md:h-16 px-10 md:px-12 rounded-full bg-[#B39B64] text-white text-lg font-normal tracking-tight shadow-xl hover:bg-[#a38b54] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" href="#purpose">
<i className="w-5 h-5" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
            Our Collection
        </a>
</div>

<section className="relative pb-24 px-6 bg-white z-10" id="purpose">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-sky-700 font-normal mb-6">
<i className="w-4 h-4" data-lucide="radio" style={{strokeWidth: '1.5'}}></i>
                Our Purpose
            </div>
<h2 className="text-3xl md:text-4xl font-['Barlow_Semi_Condensed'] font-medium tracking-tight text-gray-900 mb-6">The Sound of Community</h2>
<p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                Every gathering has a voice. A sermon that moves the room. A performance that holds a crowd. A moment shared between strangers who become something more. We build the loudspeakers that carry that voice — clearly, powerfully, and with the warmth it deserves. True Lee exists for the spaces that bring people together.
            </p>
</div>
</section>

<section className="relative py-24 border-t border-gray-200 px-6 bg-gray-100 z-10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div className="text-sm uppercase tracking-widest text-gray-500 font-normal mb-3">Product Line</div>
<h2 className="text-3xl md:text-4xl font-['Barlow_Semi_Condensed'] font-medium tracking-tight text-gray-900">Engineered for Every Space</h2>
<p className="text-base text-gray-600 mt-4 max-w-lg font-light leading-relaxed">
                        From compact point sources to flagship full-range systems — every product shares the same uncompromising engineering and 96kHz DSP platform.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-base text-sky-700 hover:text-sky-800 transition-colors duration-200 group" href="products.html">
                    View All Products 
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden" href="products/at212-mk3.html">
<div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
<i className="w-12 h-12 text-gray-300 group-hover:text-gray-400 transition-colors duration-500" data-lucide="speaker" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-normal uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md border border-sky-100">Full Range</span>
<span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#B39B64] transition-colors duration-300"></span>
</div>
<h4 className="text-xl font-['Barlow_Semi_Condensed'] tracking-tight font-medium text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">AT212-MK3</h4>
<p className="text-base text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                        Dual 12" powered loudspeaker. 3,200W of clear, commanding sound for mid-to-large venues.
                    </p>
<div className="flex items-center gap-6 font-['Barlow_Semi_Condensed'] text-sm uppercase tracking-widest text-gray-500 border-t border-gray-100 pt-5 mt-auto">
<span className="flex items-baseline gap-1"><strong className="text-base text-gray-900 font-normal">142</strong> dB</span>
<span className="flex items-baseline gap-1"><strong className="text-base text-gray-900 font-normal">50Hz</strong> - 18kHz</span>
</div>
</a>

<a className="group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden" href="products/krakatoa.html">
<div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
<i className="w-12 h-12 text-gray-300 group-hover:text-gray-400 transition-colors duration-500" data-lucide="speaker" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-normal uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md border border-sky-100">Full Range</span>
<span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#B39B64] transition-colors duration-300"></span>
</div>
<h4 className="text-xl font-['Barlow_Semi_Condensed'] tracking-tight font-medium text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">Krakatoa</h4>
<p className="text-base text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                        Quintuple 18" flagship point source. 7,500W of immersive, full-range power for the biggest rooms.
                    </p>
<div className="flex items-center gap-6 font-['Barlow_Semi_Condensed'] text-sm uppercase tracking-widest text-gray-500 border-t border-gray-100 pt-5 mt-auto">
<span className="flex items-baseline gap-1"><strong className="text-base text-gray-900 font-normal">145</strong> dB</span>
<span className="flex items-baseline gap-1"><strong className="text-base text-gray-900 font-normal">25Hz</strong> - 19kHz</span>
</div>
</a>

<a className="group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden" href="products/sublim8.html">
<div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
<i className="w-12 h-12 text-gray-300 group-hover:text-gray-400 transition-colors duration-500" data-lucide="speaker" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-normal uppercase tracking-widest text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200">Column System</span>
<span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#B39B64] transition-colors duration-300"></span>
</div>
<h4 className="text-xl font-['Barlow_Semi_Condensed'] tracking-tight font-medium text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">Sublim8</h4>
<p className="text-base text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                        3-way powered column with 18" sub. Architectural elegance meets serious output — 120° wide, 20° focused.
                    </p>
<div className="flex items-center gap-6 font-['Barlow_Semi_Condensed'] text-sm uppercase tracking-widest text-gray-500 border-t border-gray-100 pt-5 mt-auto">
<span className="flex items-baseline gap-1"><strong className="text-base text-gray-900 font-normal">133</strong> dB</span>
<span className="flex items-baseline gap-1"><strong className="text-base text-gray-900 font-normal">35Hz</strong> - 19kHz</span>
</div>
</a>
</div>
</div>
</section>

<section className="relative py-24 border-t border-gray-200 px-6 bg-white z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
<div className="flex flex-col">
<span className="font-['Barlow_Semi_Condensed'] text-5xl text-gray-100 font-medium mb-6 leading-none select-none tracking-tight">01</span>
<h3 className="text-xl font-['Barlow_Semi_Condensed'] tracking-tight font-medium text-gray-900 mb-4">Engineered for Install</h3>
<p className="text-base text-gray-600 font-light leading-relaxed">
                        M10 fly points, steel bar handles, 35mm pole sockets, and CNC-machined birch plywood cabinets built to last decades. Every product is designed for permanent and semi-permanent installations from day one.
                    </p>
</div>
<div className="flex flex-col">
<span className="font-['Barlow_Semi_Condensed'] text-5xl text-gray-100 font-medium mb-6 leading-none select-none tracking-tight">02</span>
<h3 className="text-xl font-['Barlow_Semi_Condensed'] tracking-tight font-medium text-gray-900 mb-4">96kHz DSP Standard</h3>
<p className="text-base text-gray-600 font-light leading-relaxed">
                        Every True Lee product ships with integrated 96kHz digital signal processing — double the resolution of the industry standard. Eight presets at the push of a button. Up to 100 storable via ControlBASS software.
                    </p>
</div>
<div className="flex flex-col">
<span className="font-['Barlow_Semi_Condensed'] text-5xl text-gray-100 font-medium mb-6 leading-none select-none tracking-tight">03</span>
<h3 className="text-xl font-['Barlow_Semi_Condensed'] tracking-tight font-medium text-gray-900 mb-4">Global Power Ready</h3>
<p className="text-base text-gray-600 font-light leading-relaxed">
                        Auto-sensing power supplies (90–250V AC), IP65 weatherproof Neutrik connectors, and polyurea-coated cabinets. Specify with confidence for any venue, any climate, anywhere in the world.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-gray-200 px-6 bg-gray-100 z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-sm uppercase tracking-widest text-gray-500 font-normal mb-4">Our Heritage</div>
<h2 className="text-3xl md:text-4xl font-['Barlow_Semi_Condensed'] font-medium tracking-tight text-gray-900 mb-6">Born from BASSBOSS.<br/>Built for Community.</h2>
<p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                        True Lee grows from over a decade of BASSBOSS engineering — loudspeakers that have powered festivals, arenas, and stages around the world. Now, designer David Lee brings that same uncompromising approach to the spaces where communities gather.
                    </p>
<p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                        Same engineering. Same passion. Refined for the environments that matter most — houses of worship, performing arts centers, corporate venues, and everywhere people come together to listen.
                    </p>
<a className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-white text-gray-900 text-base font-normal border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all duration-300" href="about.html">
                        Read Our Story
                    </a>
</div>
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 bg-white flex flex-col items-center justify-center group shadow-sm">
<i className="w-16 h-16 text-gray-200 group-hover:text-gray-300 transition-colors duration-700" data-lucide="music" style={{strokeWidth: '1.5'}}></i>
<div className="font-['Barlow_Semi_Condensed'] text-sm font-normal uppercase tracking-widest text-gray-400 mt-6 z-10">Hero Image Placeholder</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-gray-200 px-6 bg-white z-10">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="text-sm uppercase tracking-widest text-gray-500 font-normal mb-3">Browse by Category</div>
<h2 className="text-3xl font-['Barlow_Semi_Condensed'] font-medium tracking-tight text-gray-900">Find Your System</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<a className="group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center" href="products.html#full-range">
<span className="font-['Barlow_Semi_Condensed'] text-4xl font-medium tracking-tight text-gray-200 group-hover:text-sky-200 transition-colors duration-300 mb-5">4</span>
<h4 className="text-lg font-normal tracking-tight text-gray-900 mb-2">Full Range</h4>
<p className="text-sm text-gray-500 font-light max-w-[160px]">Point source speakers from compact to flagship</p>
</a>
<a className="group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center" href="products.html#subwoofers">
<span className="font-['Barlow_Semi_Condensed'] text-4xl font-medium tracking-tight text-gray-200 group-hover:text-sky-200 transition-colors duration-300 mb-5">3</span>
<h4 className="text-lg font-normal tracking-tight text-gray-900 mb-2">Subwoofers</h4>
<p className="text-sm text-gray-500 font-light max-w-[160px]">Single 18" to dual 18" powered subs</p>
</a>
<a className="group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center" href="products.html#column">
<span className="font-['Barlow_Semi_Condensed'] text-4xl font-medium tracking-tight text-gray-200 group-hover:text-sky-200 transition-colors duration-300 mb-5">1</span>
<h4 className="text-lg font-normal tracking-tight text-gray-900 mb-2">Column Systems</h4>
<p className="text-sm text-gray-500 font-light max-w-[160px]">Architectural column PA with integrated sub</p>
</a>
<a className="group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center" href="products.html#monitors">
<span className="font-['Barlow_Semi_Condensed'] text-4xl font-medium tracking-tight text-gray-200 group-hover:text-sky-200 transition-colors duration-300 mb-5">1</span>
<h4 className="text-lg font-normal tracking-tight text-gray-900 mb-2">Monitors</h4>
<p className="text-sm text-gray-500 font-light max-w-[160px]">Coaxial wedge monitor for stage and playback</p>
</a>
</div>
</div>
</section>

<section className="relative py-28 px-6 overflow-hidden border-t border-gray-200 bg-gray-100 z-10">
<div className="max-w-2xl mx-auto text-center relative z-10">
<div className="text-sm uppercase tracking-widest text-gray-500 font-normal mb-4">Dealer Network</div>
<h2 className="text-3xl md:text-5xl font-['Barlow_Semi_Condensed'] font-medium tracking-tight text-gray-900 mb-6">Ready to Specify True Lee?</h2>
<p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
                True Lee is available exclusively through our authorized dealer network. Connect with a dealer near you or inquire about becoming one.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-sky-700 text-white text-base font-normal hover:bg-sky-800 shadow-md hover:shadow-lg transition-all duration-300" href="dealers.html">
                    Find a Dealer
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-gray-900 text-base font-normal border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all duration-300" href="contact.html">
                    Become a Dealer
                </a>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white pt-20 pb-10 px-6 z-10 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<a className="flex flex-col justify-center mb-6" href="index.html">
<span className="font-['Barlow_Semi_Condensed'] text-xl font-medium tracking-tight uppercase leading-none text-gray-900">True Lee</span>
<span className="font-['Barlow_Semi_Condensed'] text-xs font-normal tracking-tight uppercase leading-none text-gray-500 mt-1">Loudspeakers</span>
</a>
</div></div></div></footer>
    </>
  );
}
