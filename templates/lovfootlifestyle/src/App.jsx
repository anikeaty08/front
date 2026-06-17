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
      

<div className="bg-grain"></div>

<div className="bg-[#1c1917] text-[#a8a29e] py-2 text-[10px] uppercase text-center tracking-[0.2em] font-medium border-b border-white/5">
        Complimentary Global Shipping • Obsidian Series
    </div>

<nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#050505]/70 border-b border-white/5 supports-[backdrop-filter]:bg-[#050505]/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-[#a8a29e] hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>

<a className="font-['Space_Grotesk'] font-bold text-2xl tracking-tighter uppercase z-10 text-white" href="#">
                Lovfoot<span className="text-[#78350f]">.</span>
</a>

<div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
<a className="text-xs font-medium uppercase tracking-widest text-[#a8a29e] hover:text-white transition-colors" href="#">Collection</a>
<a className="text-xs font-medium uppercase tracking-widest text-[#a8a29e] hover:text-white transition-colors" href="#">Atelier</a>
<a className="text-xs font-medium uppercase tracking-widest text-[#a8a29e] hover:text-white transition-colors" href="#">Performance</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-[#a8a29e] hover:text-white transition-transform hover:scale-105">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="text-[#a8a29e] hover:text-white transition-transform hover:scale-105 relative">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#d97706] rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] overflow-hidden flex flex-col justify-center items-center bg-[#050505]">

<div className="absolute inset-0 z-0">

<img alt="Signature Shoe" className="w-full h-full object-cover object-center grayscale-[50%] sepia-[40%] brightness-[0.7] contrast-[1.2]" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80"></div>
<div className="absolute inset-0 bg-[#291e15] mix-blend-overlay opacity-40"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
<span className="inline-block py-1.5 px-4 border border-[#d97706]/30 text-[#d97706] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md mb-8 bg-black/20">
                Series 04 — Carbon
            </span>
<h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#78716c]">
                Primal <br/> Elegance.
            </h1>
<p className="text-[#a8a29e] text-sm md:text-lg max-w-lg mx-auto mb-12 leading-relaxed font-light tracking-wide">
                Engineered from the ground up. A fusion of raw earth tones and aerospace-grade composites.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="group relative px-8 py-4 bg-[#e5e5e5] text-black text-xs font-bold uppercase tracking-widest overflow-hidden" href="#">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Men</span>
<div className="absolute inset-0 bg-[#451a03] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>
<a className="group px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all" href="#">
                    Explore Women
                </a>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 bg-black/40 backdrop-blur-md py-5 overflow-hidden flex whitespace-nowrap z-20">
<div className="animate-marquee inline-block px-4 text-[10px] font-bold text-[#78716c] tracking-[0.3em] uppercase">
                • Carbon Plate Architecture • Hand-finished Leather Details • Adaptive Foam • Reactive Sole • 
                Carbon Plate Architecture • Hand-finished Leather Details • Adaptive Foam • Reactive Sole
            </div>
</div>
</header>

<section className="py-32 px-6 max-w-7xl mx-auto relative">

<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#451a03] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
<div>
<h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl tracking-tighter text-white mb-3">The Earth Palette</h2>
<p className="text-[#78716c] text-sm tracking-wide">Inspired by terrain. Built for velocity.</p>
</div>
<a className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-[#d97706] hover:text-white transition-colors mt-4 md:mt-0" href="#">
                View All Models <svg className="iconify ml-2 iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="md:col-span-2 group relative bg-[#0c0a09] border border-white/5 overflow-hidden aspect-[16/9] md:aspect-auto">
<img alt="Sneaker" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 grayscale-[80%] sepia-[20%] group-hover:grayscale-[40%]" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<span className="text-[#d97706] text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">Limited Edition</span>
<h3 className="font-['Space_Grotesk'] text-3xl text-white mb-2">Apex Terra</h3>
<p className="text-sm text-[#a8a29e] mb-6 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Rugged durability meets metropolitan style in a silhouette defined by contrast.
                    </p>
<button className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-[#d97706] hover:border-[#d97706] transition-colors">
                        Shop Now
                    </button>
</div>
</div>

<div className="group relative bg-[#0c0a09] border border-white/5 p-8 flex flex-col justify-between hover:border-[#451a03] transition-colors duration-500">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="iconify text-white iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="relative w-full aspect-square mb-8 flex items-center justify-center">
<div className="absolute w-32 h-32 bg-[#451a03] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<img alt="Shoe" className="w-full h-full object-contain grayscale-[100%] brightness-[1.2] sepia-[0.3] group-hover:-translate-y-4 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-end border-t border-white/10 pt-4">
<div>
<p className="text-[10px] text-[#78716c] uppercase tracking-widest mb-1">Trail</p>
<h3 className="font-['Space_Grotesk'] text-lg text-white">Dune Hiker</h3>
</div>
<span className="text-sm font-medium text-[#d97706]">$225</span>
</div>
</div>
</div>

<div className="group relative bg-[#0c0a09] border border-white/5 p-8 flex flex-col justify-between hover:border-[#451a03] transition-colors duration-500">
<div className="relative w-full aspect-square mb-8 flex items-center justify-center">
<div className="absolute w-32 h-32 bg-[#78350f] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<img alt="Shoe" className="w-full h-full object-contain grayscale-[80%] brightness-[1.1] sepia-[0.2] group-hover:-translate-y-4 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-end border-t border-white/10 pt-4">
<div>
<p className="text-[10px] text-[#78716c] uppercase tracking-widest mb-1">Urban</p>
<h3 className="font-['Space_Grotesk'] text-lg text-white">Obsidian Walker</h3>
</div>
<span className="text-sm font-medium text-[#d97706]">$195</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 overflow-hidden relative border-y border-white/5">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#451a03 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
<div className="order-2 md:order-1">
<span className="text-[#d97706] font-mono text-[10px] tracking-[0.3em] uppercase mb-6 block">Specifications</span>
<h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl text-white tracking-tighter mb-8 leading-[1]">
                    Defying <br/> <span className="text-[#44403c]">Gravity.</span>
</h2>
<p className="text-[#a8a29e] text-sm leading-relaxed mb-10 max-w-md">
                    Our proprietary compound creates a responsive energy return system that feels organic yet powerful. Wrapped in ethically sourced materials dyed with natural earth pigments.
                </p>
<div className="space-y-px bg-white/10">
<div className="group bg-[#050505] p-6 hover:bg-[#1c1917] transition-colors cursor-pointer border-l-2 border-transparent hover:border-[#d97706]">
<h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 flex justify-between items-center">
                            Composite Shank 
                            <svg className="iconify text-[#44403c] group-hover:text-white transition-colors iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</h4>
<p className="text-xs text-[#78716c]">Rigid stability for uneven terrain.</p>
</div>
<div className="group bg-[#050505] p-6 hover:bg-[#1c1917] transition-colors cursor-pointer border-l-2 border-transparent hover:border-[#d97706]">
<h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 flex justify-between items-center">
                            Espresso Knit
                             <svg className="iconify text-[#44403c] group-hover:text-white transition-colors iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</h4>
<p className="text-xs text-[#78716c]">Breathable, high-tensile fiber weave.</p>
</div>
</div>
</div>
<div className="relative order-1 md:order-2 flex justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-[#451a03] to-transparent opacity-30 blur-3xl rounded-full"></div>
<div className="relative w-full aspect-square max-w-md bg-[#0c0a09] rounded-full border border-white/5 flex items-center justify-center shadow-2xl shadow-black">
<img alt="Sole" className="absolute w-[115%] max-w-none grayscale-[100%] sepia-[50%] brightness-[0.8] mix-blend-screen rotate-12 hover:rotate-0 transition-transform duration-[1.5s] ease-in-out" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-0 right-10 bg-[#1c1917]/80 backdrop-blur-md p-4 border border-white/10">
<p className="text-[10px] text-[#78716c] uppercase tracking-widest mb-1">Weight</p>
<p className="text-xl text-white font-mono">198<span className="text-xs text-[#57534e]">g</span></p>
</div>
<div className="absolute bottom-10 left-0 bg-[#1c1917]/80 backdrop-blur-md p-4 border border-white/10">
<p className="text-[10px] text-[#78716c] uppercase tracking-widest mb-1">Drop</p>
<p className="text-xl text-white font-mono">8<span className="text-xs text-[#57534e]">mm</span></p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="relative h-[700px] w-full group overflow-hidden">
<img alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover grayscale-[100%] sepia-[20%] brightness-[0.6] transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&amp;w=2011&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-10 md:p-20 flex flex-col md:flex-row justify-between items-end">
<div className="max-w-2xl">
<h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl text-[#e5e5e5] mb-6 tracking-tighter leading-none">
                        Own the <br/> Darkness.
                    </h2>
<p className="text-[#a8a29e] text-sm md:text-base leading-relaxed mb-10 max-w-md border-l border-[#d97706] pl-6">
                        Join the night runners. The midnight club pushing limits when the city sleeps.
                    </p>
<button className="bg-[#d97706] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#b45309] transition-colors">
                        Join The Club
                    </button>
</div>
</div>
</div>
</section>

<section className="mb-32 px-6 max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-['Space_Grotesk'] text-white tracking-tight">New Arrivals</h2>
<div className="flex gap-2">
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white">
<svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white">
<svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">

<div className="min-w-[300px] snap-center group">
<div className="bg-[#0c0a09] border border-white/5 mb-6 aspect-[3/4] relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover grayscale-[80%] sepia-[10%] opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-white text-[10px] font-bold uppercase tracking-widest flex justify-between">
<span>Add to Cart</span> <span>$180</span>
</button>
</div>
</div>
<h3 className="text-white font-medium text-lg">Stratus Noir</h3>
<p className="text-xs text-[#78716c] mt-1">Midnight Edition</p>
</div>

<div className="min-w-[300px] snap-center group">
<div className="bg-[#0c0a09] border border-white/5 mb-6 aspect-[3/4] relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover grayscale-[80%] sepia-[30%] opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-white text-[10px] font-bold uppercase tracking-widest flex justify-between">
<span>Add to Cart</span> <span>$210</span>
</button>
</div>
</div>
<h3 className="text-white font-medium text-lg">Terra Bronze</h3>
<p className="text-xs text-[#78716c] mt-1">Desert Ops</p>
</div>

<div className="min-w-[300px] snap-center group">
<div className="bg-[#0c0a09] border border-white/5 mb-6 aspect-[3/4] relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover grayscale-[100%] brightness-[0.8] opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-white text-[10px] font-bold uppercase tracking-widest flex justify-between">
<span>Add to Cart</span> <span>$160</span>
</button>
</div>
</div>
<h3 className="text-white font-medium text-lg">Stealth Runner</h3>
<p className="text-xs text-[#78716c] mt-1">Urban Tactical</p>
</div>

<div className="min-w-[300px] snap-center group">
<div className="bg-[#0c0a09] border border-white/5 mb-6 aspect-[3/4] relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover grayscale-[60%] sepia-[40%] opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-white text-[10px] font-bold uppercase tracking-widest flex justify-between">
<span>Add to Cart</span> <span>$195</span>
</button>
</div>
</div>
<h3 className="text-white font-medium text-lg">Canyon Lo</h3>
<p className="text-xs text-[#78716c] mt-1">Limited Release</p>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="font-['Space_Grotesk'] font-bold text-2xl tracking-tighter uppercase block text-white mb-6" href="#">
                        Lovfoot<span className="text-[#78350f]">.</span>
</a>
<p className="text-[#57534e] text-xs leading-relaxed max-w-xs mb-8">
                        Precision engineering for the modern ascetic. <br/>Based in the Pacific Northwest.
                    </p>
<div className="flex gap-6">
<a className="text-[#57534e] hover:text-white transition-colors" href="#"><svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" rx="5" ry="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></a>
<a className="text-[#57534e] hover:text-white transition-colors" href="#"><svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Series</h4>
<ul className="space-y-4 text-xs text-[#78716c]">
<li><a className="hover:text-[#d97706] transition-colors" href="#">Obsidian (Black)</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Terra (Brown)</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Lunar (Grey)</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Limited Releases</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Atelier</h4>
<ul className="space-y-4 text-xs text-[#78716c]">
<li><a className="hover:text-[#d97706] transition-colors" href="#">Our Materials</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Craftsmanship</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Intelligence</h4>
<div className="relative border-b border-[#292524]">
<input className="w-full bg-transparent py-2 text-xs text-white placeholder-[#44403c] focus:outline-none focus:placeholder-transparent" placeholder="EMAIL ADDRESS" type="email"/>
<button className="absolute right-0 top-2 text-[#78716c] hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-[#44403c] uppercase tracking-wider">
<p>© 2024 Lovfoot Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#78716c] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#78716c] transition-colors" href="#">Terms</a>
<a className="hover:text-[#78716c] transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
