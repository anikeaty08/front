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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center md:hidden">
<button className="text-stone-600 hover:text-stone-900 p-2">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>

<div className="flex-shrink-0 flex items-center">
<a className="font-serif text-xl sm:text-2xl tracking-tighter text-stone-900 font-medium uppercase" href="#">
                        AARDEWERK ANTIQUES
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-xs uppercase tracking-widest text-stone-900 font-medium transition-colors duration-200" href="#">The Collection</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-200" href="#">Inventory</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-200" href="#">Services</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-200" href="#">Journal</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20"></span>
</button>
<button className="text-stone-500 hover:text-stone-900 transition-colors relative">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div className="space-y-4">
<div className="inline-flex items-center space-x-2 text-stone-500">
<span className="text-xs uppercase tracking-widest">Archive</span>
<span className="text-stone-300">/</span>
<span className="text-xs uppercase tracking-widest text-stone-900">Gallery</span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl tracking-tight text-stone-900">
                    The Archive
                </h1>
<p className="text-stone-500 max-w-lg font-light">
                    A visual history of significant objects that have passed through our collection. Sold items from the 17th to 20th century.
                </p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-stone-900 border border-stone-200 bg-white rounded-md hover:bg-stone-50">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
</button>
<button className="p-2 text-stone-400 border border-transparent hover:text-stone-900">
<span className="iconify" data-icon="lucide:list" data-width="18"></span>
</button>
</div>
</div>

<div className="border-y border-stone-200 py-4 flex flex-wrap gap-x-6 gap-y-2 items-center text-sm">
<span className="text-stone-400 font-medium mr-2">Filter by:</span>
<button className="text-stone-900 font-medium hover:text-stone-600">All Objects</button>
<button className="text-stone-500 hover:text-stone-900">Furniture</button>
<button className="text-stone-500 hover:text-stone-900">Ceramics</button>
<button className="text-stone-500 hover:text-stone-900">Fine Art</button>
<button className="text-stone-500 hover:text-stone-900">Horology</button>
<button className="text-stone-500 hover:text-stone-900 ml-auto flex items-center gap-1">
                Sort: Date (Newest) <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>

<main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-24">

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Antique Bust" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Marble Bust of Apollo</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Roman, Circa 2nd Century AD</p>
</div>
<span className="text-xs font-medium text-stone-400 border border-stone-200 px-2 py-0.5 rounded-sm">Sold</span>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Antique Clock" className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1593156096538-4e55e378c2b7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Ormolu Mantel Clock</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Paris, 1820</p>
</div>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Oil Painting" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1569407228235-9a744831a150?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Still Life with Game</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Dutch School, 17th Century</p>
</div>
<span className="text-xs font-medium text-stone-400 border border-stone-200 px-2 py-0.5 rounded-sm">Sold</span>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Display Cabinet" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1550585675-53818610eb3b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Mahogany Secrétaire</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Empire Period</p>
</div>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100 p-8 flex items-center justify-center">
<img alt="Ceramic Bowl" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out shadow-lg" src="https://images.unsplash.com/photo-1605333396734-710502a24c8c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Kintsugi Tea Bowl</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Edo Period, Japan</p>
</div>
<span className="text-xs font-medium text-stone-400 border border-stone-200 px-2 py-0.5 rounded-sm">Sold</span>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Sofa" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Velvet Chaise Longue</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Victorian, 1890</p>
</div>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Silverware" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1620614838384-850f38b13cfa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Sterling Silver Service</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">George V</p>
</div>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Chair" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Eames Lounge (Early)</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Rosewood, 1958</p>
</div>
<span className="text-xs font-medium text-stone-400 border border-stone-200 px-2 py-0.5 rounded-sm">Sold</span>
</div>
</div>

<div className="break-inside-avoid group cursor-pointer space-y-3">
<div className="relative overflow-hidden rounded-sm bg-stone-100">
<img alt="Rug" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1576014131795-d440191a8e8b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start pt-1">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-snug">Persian Tabriz Carpet</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Late 19th Century</p>
</div>
</div>
</div>
</div>
<div className="mt-20 border-t border-stone-200 pt-12 flex flex-col items-center">
<p className="text-stone-500 mb-6 font-light italic">"The beauty of the past is that it is the past. The beauty of the present is to know it."</p>
<div className="flex gap-4">
<button className="bg-stone-900 text-stone-50 px-8 py-3 rounded-md text-sm font-medium hover:bg-stone-800 transition-all flex items-center shadow-lg shadow-stone-200">
                    View Current Inventory
                </button>
</div>
</div>
</main>

<footer className="bg-white border-t border-stone-200 pt-16 pb-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="font-serif text-xl tracking-tighter text-stone-900 font-medium block mb-6 uppercase" href="#">
                        AARDEWERK ANTIQUES
                    </a>
<p className="text-sm text-stone-500 mb-4">
                        London • New York • Paris
                    </p>
<div className="flex space-x-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-4">Collection</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Furniture</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Fine Art</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Decor</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Jewelry</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Our Appraisers</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Return Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Aardewerk Antiques. All rights reserved.</p>
<div className="flex items-center space-x-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-stone-500">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
