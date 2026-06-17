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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter uppercase cursor-pointer hover:text-zinc-300 transition-colors font-quicksand">
                A E T H E R
            </div>
<div className="hidden md:flex space-x-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors font-quicksand" href="#collection">Collection</a>
<a className="hover:text-white transition-colors font-quicksand" href="#craft">Craftsmanship</a>
<a className="hover:text-white transition-colors font-quicksand" href="#specs">Specifications</a>
</div>
<div>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors font-quicksand">
                    Pre-order
                </button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-16">
<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950 z-10"></div>

<img alt="Premium Watch" className="w-full h-full object-cover object-center opacity-40 scale-100 hover:scale-105 transition-transform duration-[10000ms] ease-out" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center space-x-2 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-full px-3 py-1 mb-8 cursor-pointer hover:bg-zinc-800 transition-colors group">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 group-hover:animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 font-quicksand">Series 01 Available Now</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tighter text-white mb-6 leading-tight font-quicksand font-medium">
                Engineering <br/> meets eternity.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-light mb-10 leading-relaxed font-quicksand">
                Precision machined from aerospace-grade titanium. Driven by a bespoke automatic caliber. Designed for those who value the absolute minimum.
            </p>
<a className="group flex items-center space-x-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#collection">
<span className="font-quicksand">Explore the collection</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</header>

<section className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900" id="craft">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-4 font-quicksand font-medium">Relentless pursuit of perfection.</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-2xl font-light font-quicksand">Every component is considered, refined, and engineered to exist purely for its function. No superfluous details.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group border border-transparent hover:border-zinc-800 bg-zinc-950 hover:bg-zinc-900/30 p-6 rounded-2xl transition-all duration-300 cursor-default">
<div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-xl text-zinc-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2 font-quicksand">Grade 5 Titanium</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed font-quicksand">Machined to exacting tolerances, offering superior strength-to-weight ratio and exceptional corrosion resistance.</p>
</div>

<div className="group border border-transparent hover:border-zinc-800 bg-zinc-950 hover:bg-zinc-900/30 p-6 rounded-2xl transition-all duration-300 cursor-default">
<div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-xl text-zinc-300" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2 font-quicksand">20 ATM Water Resistance</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed font-quicksand">Engineered with a triple-sealed crown and reinforced sapphire crystal, ready for profound depths.</p>
</div>

<div className="group border border-transparent hover:border-zinc-800 bg-zinc-950 hover:bg-zinc-900/30 p-6 rounded-2xl transition-all duration-300 cursor-default">
<div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-xl text-zinc-300" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2 font-quicksand">Caliber A-01</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed font-quicksand">A custom automatic movement featuring a 72-hour power reserve and anti-magnetic silicon escapement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-quicksand font-medium">The Series 01</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative aspect-square md:aspect-[4/5] bg-zinc-900 overflow-hidden rounded-2xl cursor-pointer">
<img alt="Obsidian Black" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80"></div>
<div className="absolute top-6 right-6">
<div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-800 text-xs font-medium px-3 py-1 rounded-full text-white font-quicksand">
                            $1,850
                        </div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h3 className="text-2xl font-medium tracking-tight text-white mb-1 font-quicksand">Obsidian Black</h3>
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<p className="text-sm text-zinc-400 font-light font-quicksand">Brushed Titanium / Black Dial</p>
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square md:aspect-[4/5] bg-zinc-900 overflow-hidden rounded-2xl cursor-pointer">
<img alt="Arctic Silver" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80"></div>
<div className="absolute top-6 right-6">
<div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-800 text-xs font-medium px-3 py-1 rounded-full text-white font-quicksand">
                            $1,850
                        </div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h3 className="text-2xl font-medium tracking-tight text-white mb-1 font-quicksand">Arctic Silver</h3>
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<p className="text-sm text-zinc-400 font-light font-quicksand">Polished Titanium / White Dial</p>
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="specs">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
<div className="flex-1">
<h2 className="text-2xl tracking-tight text-white mb-6 font-quicksand font-medium">Technical Specifications</h2>
<div className="space-y-4">
<div className="flex justify-between border-b border-zinc-900 pb-4">
<span className="text-sm text-zinc-500 font-light font-quicksand">Case Diameter</span>
<span className="text-sm text-zinc-300 font-medium font-quicksand">39.5 mm</span>
</div>
<div className="flex justify-between border-b border-zinc-900 pb-4">
<span className="text-sm text-zinc-500 font-light font-quicksand">Thickness</span>
<span className="text-sm text-zinc-300 font-medium font-quicksand">9.8 mm</span>
</div>
<div className="flex justify-between border-b border-zinc-900 pb-4">
<span className="text-sm text-zinc-500 font-light font-quicksand">Lug to Lug</span>
<span className="text-sm text-zinc-300 font-medium font-quicksand">46.2 mm</span>
</div>
<div className="flex justify-between border-b border-zinc-900 pb-4">
<span className="text-sm text-zinc-500 font-light font-quicksand">Crystal</span>
<span className="text-sm text-zinc-300 font-medium font-quicksand">Domed Sapphire, AR Coated</span>
</div>
</div>
</div>
<div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
<h3 className="text-lg font-medium tracking-tight text-white mb-4 font-quicksand">Configure Output</h3>
<p className="text-xs text-zinc-500 font-light mb-8 font-quicksand">Customize your timepiece assembly preferences prior to pre-order.</p>

<div className="flex items-center justify-between mb-6">
<span className="text-sm text-zinc-300 font-medium font-quicksand">Exhibition Caseback</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-zinc-950 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-zinc-950"></div>
</label>
</div>

<div className="mb-8">
<span className="block text-xs text-zinc-500 font-light mb-2 font-quicksand">Strap Selection</span>
<div className="w-full bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer hover:border-zinc-700 transition-colors">
<span className="font-quicksand">Integrated Titanium Bracelet</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<button className="w-full bg-white text-black text-sm font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors font-quicksand">
                        Save Configuration
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
<div className="text-sm font-semibold tracking-tighter uppercase text-zinc-600 mb-4 md:mb-0 font-quicksand">
                A E T H E R
            </div>
<div className="flex space-x-6 text-xs font-light text-zinc-500">
<a className="hover:text-zinc-300 transition-colors font-quicksand" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors font-quicksand" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors font-quicksand" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
