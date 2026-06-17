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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<div className="sticky top-0 z-50 bg-[#F5F2E8] border-b border-[#2C221C]/10 backdrop-blur-md bg-opacity-95">
<div className="max-w-7xl mx-auto px-4 py-3 overflow-hidden">
<div className="flex items-center justify-between md:justify-center gap-6 whitespace-nowrap text-sm md:text-base font-mono text-[#2C221C]/80 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2">
<span className="text-[#E05A38]"><i className="w-4 h-4 inline" data-lucide="trending-up"></i></span>
<span className="font-medium">Andorra Coffee Index: 1.64€</span>
<span className="text-[#E05A38] text-xs bg-[#E05A38]/10 px-1.5 py-0.5 rounded ml-1">+1.2%</span>
</div>
<span className="hidden md:inline text-[#2C221C]/20">•</span>
<div className="flex items-center gap-2">
<span>Lowest: Sant Julià (1.30€)</span>
</div>
<span className="hidden md:inline text-[#2C221C]/20">•</span>
<div className="flex items-center gap-2">
<span>Highest: Escaldes (2.10€)</span>
</div>
</div>
</div>
</div>

<nav className="pt-6 pb-4 px-4 max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="bg-[#E05A38] text-white p-1.5 rounded-lg rotate-3">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<span className="text-xl font-semibold tracking-tight">tassa.ad</span>
</div>
<div className="hidden md:flex gap-8 text-lg font-medium text-[#2C221C]/70">
<a className="hover:text-[#E05A38] transition-colors" href="#">Directori</a>
<a className="hover:text-[#E05A38] transition-colors" href="#">Índex de Preus</a>
<a className="hover:text-[#E05A38] transition-colors" href="#">Sobre Nosaltres</a>
</div>
<button className="hidden md:flex items-center gap-2 text-[#2C221C] font-medium hover:text-[#E05A38] transition-colors">
<span>Login</span>
</button>
</nav>

<main className="max-w-7xl mx-auto px-4 pt-8 pb-16 lg:pt-16 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div className="space-y-4">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-[#2C221C]">
                        Descobreix el <br/>
<span className="text-[#E05A38]">millor cafè</span> d'Andorra.
                    </h1>
<p className="text-xl lg:text-2xl text-[#2C221C]/70 font-medium max-w-lg leading-relaxed">
                        Directori de cafeteries i observatori de preus en temps real. Troba el lloc perfecte per treballar o relaxar-te.
                    </p>
</div>

<div className="relative max-w-lg">
<div className="bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2C221C]/5 flex items-center gap-3">
<div className="pl-3 text-[#E05A38]">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<input className="w-full bg-transparent border-none outline-none text-lg placeholder-[#2C221C]/30 text-[#2C221C] py-3" placeholder="Cerca per parròquia o cafeteria..." type="text"/>
</div>

<div className="flex flex-wrap gap-2 mt-4">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#2C221C]/10 rounded-full text-[#2C221C]/80 hover:border-[#E05A38] hover:text-[#E05A38] transition-all text-sm font-medium shadow-sm">
<i className="w-4 h-4" data-lucide="wifi"></i> Wifi Ràpid
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#2C221C]/10 rounded-full text-[#2C221C]/80 hover:border-[#E05A38] hover:text-[#E05A38] transition-all text-sm font-medium shadow-sm">
<i className="w-4 h-4" data-lucide="dog"></i> Pet Friendly
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#2C221C]/10 rounded-full text-[#2C221C]/80 hover:border-[#E05A38] hover:text-[#E05A38] transition-all text-sm font-medium shadow-sm">
<i className="w-4 h-4" data-lucide="laptop"></i> Coworking
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#2C221C]/10 rounded-full text-[#2C221C]/80 hover:border-[#E05A38] hover:text-[#E05A38] transition-all text-sm font-medium shadow-sm">
<i className="w-4 h-4" data-lucide="sun"></i> Terrassa
                        </button>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out border border-[#2C221C]/5 aspect-[4/3] lg:aspect-square">
<img alt="Latte art on wooden table" className="object-cover w-full h-full opacity-95" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-white/50">
<div className="bg-[#E05A38] rounded-full p-2 text-white">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-xs text-[#2C221C]/60 font-medium uppercase tracking-wider">Mitjana Escaldes</p>
<p className="text-lg font-mono font-semibold text-[#2C221C]">2.10 €</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-[#2C221C]/5 bg-white">
<div className="max-w-7xl mx-auto px-4 py-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#2C221C] mb-2">Market Watch</h2>
<p className="text-lg text-[#2C221C]/60">Anàlisi de preus en temps real.</p>
</div>
<div className="flex gap-2 text-sm font-medium">
<span className="px-3 py-1 rounded-full bg-[#F5F2E8] text-[#2C221C]">1M</span>
<span className="px-3 py-1 rounded-full bg-[#2C221C] text-white">6M</span>
<span className="px-3 py-1 rounded-full bg-[#F5F2E8] text-[#2C221C]">1Y</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-[#FFFDF5] rounded-2xl p-8 border border-[#2C221C]/5 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-sm font-medium text-[#2C221C]/50 uppercase tracking-widest">Preu Mitjà (Andorra la Vella)</p>
<h3 className="text-4xl font-mono font-medium mt-1">1.64 €</h3>
</div>
<div className="text-right">
<p className="text-[#E05A38] font-mono font-medium flex items-center justify-end gap-1">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i> 1.2%
                            </p>
<p className="text-sm text-[#2C221C]/40">vs mes anterior</p>
</div>
</div>

<div className="h-48 w-full mt-auto">
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 150">

<line stroke="#2C221C" stroke-opacity="0.1" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>
<line stroke="#2C221C" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#2C221C" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>

<path d="M0,120 C50,115 80,130 130,90 C180,50 220,70 270,60 C320,50 350,20 400,10" fill="none" stroke="#E05A38" strokeLinecap="round" strokeWidth="3"></path>

<path d="M0,120 C50,115 80,130 130,90 C180,50 220,70 270,60 C320,50 350,20 400,10 V150 H0 Z" fill="#E05A38" fillOpacity="0.05"></path>

<circle cx="130" cy="90" fill="#FFFDF5" r="4" stroke="#E05A38" strokeWidth="2"></circle>
<circle cx="270" cy="60" fill="#FFFDF5" r="4" stroke="#E05A38" strokeWidth="2"></circle>
<circle cx="400" cy="10" fill="#E05A38" r="4"></circle>
</svg>
</div>

<div className="flex justify-between text-xs font-mono text-[#2C221C]/40 mt-2">
<span>OCT</span>
<span>NOV</span>
<span>DEC</span>
<span>JAN</span>
<span>FEB</span>
<span>MAR</span>
</div>
</div>

<div className="bg-[#2C221C] text-[#FFFDF5] rounded-2xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-[#E05A38] rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
<div>
<div className="flex items-center gap-2 text-[#E05A38] mb-4">
<i className="w-5 h-5" data-lucide="zap"></i>
<span className="text-sm font-semibold uppercase tracking-wider">Purchasing Power</span>
</div>
<p className="text-lg opacity-80 leading-relaxed">
                            1 Hour of Work =
                        </p>
<p className="text-6xl font-semibold tracking-tighter mt-2 mb-1">5.1</p>
<p className="text-xl opacity-90">Espressos</p>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-sm opacity-50 font-mono">Based on 2025 Min. Wage</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#2C221C] mb-2">Cafeteries Destacades</h2>
<p className="text-lg text-[#2C221C]/60">Els favorits de la setmana.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#E05A38] font-medium hover:opacity-80 transition-opacity text-lg" href="#">
                Veure totes <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-[#2C221C]/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img alt="Cafe Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-[#2C221C]/5">
<span className="text-[#E05A38] font-mono font-semibold text-lg">1.20 €</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-semibold text-[#2C221C]">Granja L'Espiga</h3>
<p className="text-[#2C221C]/50 flex items-center gap-1 mt-1 text-base">
<i className="w-4 h-4" data-lucide="map-pin"></i> Encamp
                            </p>
</div>
</div>
<div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#2C221C]/5">
<div className="flex gap-2" title="Amenities">
<span className="bg-[#F5F2E8] p-2 rounded-md text-[#2C221C]/70"><i className="w-4 h-4" data-lucide="wifi"></i></span>
<span className="bg-[#F5F2E8] p-2 rounded-md text-[#2C221C]/70"><i className="w-4 h-4" data-lucide="plug"></i></span>
</div>
<span className="ml-auto text-sm text-[#2C221C]/40 font-mono">Updated 2h ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-[#2C221C]/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img alt="Specialty Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-[#2C221C]/5">
<span className="text-[#E05A38] font-mono font-semibold text-lg">2.40 €</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-semibold text-[#2C221C]">Atelier Coffee</h3>
<p className="text-[#2C221C]/50 flex items-center gap-1 mt-1 text-base">
<i className="w-4 h-4" data-lucide="map-pin"></i> Andorra la Vella
                            </p>
</div>
</div>
<div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#2C221C]/5">
<div className="flex gap-2">
<span className="bg-[#F5F2E8] p-2 rounded-md text-[#2C221C]/70"><i className="w-4 h-4" data-lucide="laptop"></i></span>
<span className="bg-[#F5F2E8] p-2 rounded-md text-[#2C221C]/70"><i className="w-4 h-4" data-lucide="dog"></i></span>
</div>
<span className="ml-auto text-sm text-[#2C221C]/40 font-mono">Specialty Roast</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-[#2C221C]/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img alt="Cozy Corner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-[#2C221C]/5">
<span className="text-[#E05A38] font-mono font-semibold text-lg">1.50 €</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-semibold text-[#2C221C]">Bar Muntanya</h3>
<p className="text-[#2C221C]/50 flex items-center gap-1 mt-1 text-base">
<i className="w-4 h-4" data-lucide="map-pin"></i> Canillo
                            </p>
</div>
</div>
<div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#2C221C]/5">
<div className="flex gap-2">
<span className="bg-[#F5F2E8] p-2 rounded-md text-[#2C221C]/70"><i className="w-4 h-4" data-lucide="sun"></i></span>
</div>
<span className="ml-auto text-sm text-[#2C221C]/40 font-mono">Best Views</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-[#2C221C]/5 py-12 text-center text-[#2C221C]/40">
<div className="flex items-center justify-center gap-2 mb-4 opacity-50">
<i className="w-5 h-5" data-lucide="coffee"></i>
<span className="font-semibold tracking-tight">tassa.ad</span>
</div>
<p className="text-base">Fet amb <i className="w-4 h-4 inline mx-1 text-[#E05A38]" data-lucide="heart"></i> a les muntanyes.</p>
</footer>

<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
<button className="bg-[#E05A38] hover:bg-[#CC4D2E] text-white pl-5 pr-6 py-4 rounded-full shadow-[0_10px_30px_rgba(224,90,56,0.4)] flex items-center gap-3 transition-all active:scale-95 group">
<i className="w-6 h-6 group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
<span className="font-semibold text-lg tracking-tight">Comparteix un preu</span>
</button>
</div>


    </>
  );
}
