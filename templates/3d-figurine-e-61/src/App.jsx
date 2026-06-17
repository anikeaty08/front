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



        // Initialize Icons
        lucide.createIcons();

        // Add custom scan animation keyframes to document
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
        `;
        document.head.appendChild(styleSheet);
    
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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<span className="text-white font-semibold tracking-tighter">E</span>
</div>
<span className="text-white font-medium tracking-tight text-sm">ETHERFORM</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Process</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Gallery</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Materials</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Reviews</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="relative text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/10 text-xs font-medium text-indigo-400 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now supporting FFXIV 7.0 Graphics
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Immortalize your <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-300 via-white to-zinc-500">digital legacy.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
                    We transform your game data into high-fidelity, hand-finished physical statues. Compatible with WoW, FFXIV, ESO, and custom OBJ imports.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        Start Configuration <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-800 hover:text-white transition-colors">
                        View Gallery
                    </button>
</div>
</div>

<div className="mt-20 relative w-full h-[400px] md:h-[600px] bg-gradient-to-b from-zinc-900/20 to-transparent border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50"></div>

<div className="relative z-10 w-64 h-80 md:w-96 md:h-[500px] border border-indigo-500/30 rounded-full flex items-center justify-center animate-pulse">
<div className="absolute w-[90%] h-[95%] border border-cyan-500/20 rounded-full rotate-12"></div>
<div className="absolute w-[110%] h-[80%] border border-purple-500/20 rounded-full -rotate-6"></div>
<i className="w-24 h-24 text-indigo-500/50" data-lucide="box"></i>
</div>
<div className="absolute bottom-8 left-8 flex flex-col gap-1">
<span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Model_ID: #X99-2A</span>
<span className="text-xs text-zinc-500">Material: SLA Resin / 8k Resolution</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl text-white font-medium tracking-tight mb-2">The Forge</h2>
<p className="text-zinc-500 text-sm">Configure your hero specifications.</p>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-400">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    System Online
                </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[700px]">

<div className="lg:col-span-4 bg-zinc-900/30 border border-white/5 rounded-xl p-6 flex flex-col h-full backdrop-blur-sm">
<div className="flex-1 space-y-8 overflow-y-auto pr-2 custom-scrollbar">

<div className="space-y-3">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Source Realm</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer hidden" name="game" type="radio"/>
<div className="h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-lg peer-checked:border-indigo-500 peer-checked:text-white text-zinc-400 text-sm font-medium transition-all group-hover:border-zinc-700">
                                        Fantasy MMO
                                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="game" type="radio"/>
<div className="h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-lg peer-checked:border-indigo-500 peer-checked:text-white text-zinc-400 text-sm font-medium transition-all group-hover:border-zinc-700">
                                        Sci-Fi Shooter
                                    </div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Character Data</label>
<div className="border-2 border-dashed border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 rounded-lg p-8 flex flex-col items-center justify-center transition-all cursor-pointer group">
<div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700 mb-3 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-indigo-400" data-lucide="upload-cloud"></i>
</div>
<span className="text-sm text-zinc-300 font-medium">Click to import</span>
<span className="text-xs text-zinc-600 mt-1">.OBJ, .STL or Profile Link</span>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Scale (Height)</label>
<span className="text-xs text-white font-mono bg-zinc-800 px-2 py-1 rounded">180mm</span>
</div>
<input className="w-full" max="350" min="100" type="range" value="180"/>
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>100mm</span>
<span>350mm</span>
</div>
</div>

<div className="space-y-3">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Material Finish</label>
<div className="space-y-2">
<label className="flex items-center justify-between p-3 border border-indigo-500/50 bg-indigo-500/5 rounded-lg cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-indigo-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Primed Grey</span>
<span className="text-xs text-zinc-500">Ready for painting</span>
</div>
</div>
<span className="text-sm text-white font-medium">$140</span>
</label>
<label className="flex items-center justify-between p-3 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 rounded-lg cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600"></div>
<div className="flex flex-col">
<span className="text-sm text-zinc-300 font-medium">Hand Painted</span>
<span className="text-xs text-zinc-500">Masterwork tier</span>
</div>
</div>
<span className="text-sm text-zinc-400 font-medium">$450</span>
</label>
<label className="flex items-center justify-between p-3 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 rounded-lg cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600"></div>
<div className="flex flex-col">
<span className="text-sm text-zinc-300 font-medium">Bronze Cast</span>
<span className="text-xs text-zinc-500">Solid cold cast metal</span>
</div>
</div>
<span className="text-sm text-zinc-400 font-medium">$320</span>
</label>
</div>
</div>
</div>

<div className="pt-6 mt-6 border-t border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-zinc-400">Total Estimate</span>
<span className="text-xl text-white font-semibold tracking-tight">$140.00</span>
</div>
<button className="w-full py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Add to Cart
                        </button>
</div>
</div>

<div className="lg:col-span-8 bg-black border border-white/10 rounded-xl overflow-hidden relative group">

<div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
<button className="w-10 h-10 bg-zinc-900/80 backdrop-blur border border-white/10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="rotate-3d"></i>
</button>
<button className="w-10 h-10 bg-zinc-900/80 backdrop-blur border border-white/10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="zoom-in"></i>
</button>
</div>

<div className="w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">

<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full"></div>
<img alt="3D Figurine Preview" className="relative z-10 w-[300px] md:w-[400px] h-[500px] object-cover mix-blend-lighten grayscale contrast-125 brightness-75 drop-shadow-2xl mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 animate-[scan_3s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-between items-end">
<div>
<h3 className="text-white font-medium text-lg">Paladin T3 Armor Set</h3>
<p className="text-zinc-500 text-xs mt-1">Poly Count: 1.2M • Supports Generated</p>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-indigo-400">Rendering</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-2xl text-white font-medium tracking-tight mb-10">Why Choose Etherform</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5 mb-4 text-indigo-400 group-hover:text-indigo-300">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-white font-medium mb-2">8K SLA Resolution</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We use industrial-grade resin printers to capture every texture of your digital armor, down to 0.02mm layer height.
                    </p>
</div>

<div className="group p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5 mb-4 text-cyan-400 group-hover:text-cyan-300">
<i className="w-5 h-5" data-lucide="paintbrush"></i>
</div>
<h3 className="text-white font-medium mb-2">Artisan Finishing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Choose from raw cleaned resin or commission our partner artists for studio-quality hand painting.
                    </p>
</div>

<div className="group p-6 bg-zinc-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5 mb-4 text-purple-400 group-hover:text-purple-300">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-white font-medium mb-2">Shipping Guarantee</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Custom foam packaging ensures your unique figurine arrives intact. 100% reprint guarantee if broken.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl text-white font-medium tracking-tight">Recent Commissions</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1" href="#">
                    View full gallery <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="relative group aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Figurine" className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Orc Warrior</p>
<p className="text-zinc-400 text-xs">220mm • Hand Painted</p>
</div>
</div>

<div className="relative group aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Figurine" className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Cyber Ninja</p>
<p className="text-zinc-400 text-xs">150mm • Primed Grey</p>
</div>
</div>

<div className="relative group aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Figurine" className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Elven Mage</p>
<p className="text-zinc-400 text-xs">180mm • Clear Resin</p>
</div>
</div>

<div className="relative group aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
<img alt="Figurine" className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Mecha Unit</p>
<p className="text-zinc-400 text-xs">300mm • Bronze Finish</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700">
<span className="text-white text-xs font-semibold">E</span>
</div>
<span className="text-white font-medium text-sm">ETHERFORM</span>
</div>
<p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                        Bridging the gap between the virtual worlds you love and the physical space you inhabit. Hand-crafted in Seattle.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Custom Prints</a></li>
<li><a className="hover:text-zinc-300" href="#">Gift Cards</a></li>
<li><a className="hover:text-zinc-300" href="#">Material Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Support</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-300" href="#">Shipping Policy</a></li>
<li><a className="hover:text-zinc-300" href="#">Returns</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Twitter</a></li>
<li><a className="hover:text-zinc-300" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-300" href="#">Discord</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-zinc-600 text-xs">© 2024 Etherform Inc. All rights reserved.</p>
<div className="flex gap-6 text-zinc-600">
<i className="w-4 h-4 hover:text-zinc-400 cursor-pointer" data-lucide="github"></i>
<i className="w-4 h-4 hover:text-zinc-400 cursor-pointer" data-lucide="twitter"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
