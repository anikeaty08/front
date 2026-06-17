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
},
colors: {
brand: {
black: '#050505',
dark: '#0a0a0a',
gray: '#888888',
light: '#fafafa',
border: '#e5e5e5'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.1em'
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
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 group hover:bg-white hover:text-black text-white mix-blend-difference" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-widest uppercase z-50" href="#">VELOCITY</a>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-medium uppercase tracking-wide hover:opacity-60 transition-opacity" href="#">Vehicles</a>
<a className="text-xs font-medium uppercase tracking-wide hover:opacity-60 transition-opacity" href="#">Energy</a>
<a className="text-xs font-medium uppercase tracking-wide hover:opacity-60 transition-opacity" href="#">Charging</a>
<a className="text-xs font-medium uppercase tracking-wide hover:opacity-60 transition-opacity" href="#">Shop</a>
</div>
<div className="flex items-center gap-5 z-50">
<button className="hover:opacity-60 transition-opacity"><iconify-icon icon="solar:globe-linear" width="20"></iconify-icon></button>
<button className="hover:opacity-60 transition-opacity"><iconify-icon icon="solar:user-linear" width="20"></iconify-icon></button>
<button className="hover:opacity-60 transition-opacity md:hidden"><iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-300 -z-10 group-hover:bg-white group-hover:shadow-sm"></div>
</nav>

<section className="relative h-screen w-full overflow-hidden bg-brand-dark">
<div className="absolute inset-0 z-0">
<img alt="Hero" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
</div>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-32 px-6 text-center text-white">
<div className="mt-12 animate-fade-in-down">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-2">Model S Plaid</h1>
<p className="text-sm font-light tracking-wide opacity-90">Beyond Ludicrous</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-10 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded-[2px] hover:bg-gray-100 transition-colors min-w-[240px]">Order Now</button>
<button className="px-10 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wide rounded-[2px] hover:bg-white/20 transition-colors min-w-[240px]">Demo Drive</button>
</div>
</div>
</section>

<section className="bg-white">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="relative h-[600px] group overflow-hidden border-r border-brand-border md:border-b-0 border-b">
<img alt="Model Y" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1594913785250-b4618751532f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-12 left-0 w-full text-center">
<h2 className="text-3xl font-medium tracking-tighter text-brand-dark">Model Y</h2>
<a className="text-xs font-medium underline underline-offset-4 decoration-gray-400 mt-2 inline-block" href="#">View Inventory</a>
</div>
<div className="absolute bottom-12 left-0 w-full flex justify-center gap-4 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<button className="px-6 py-2 bg-brand-dark text-white text-xs font-medium rounded-[2px]">Custom Order</button>
<button className="px-6 py-2 bg-gray-100 text-brand-dark text-xs font-medium rounded-[2px]">Learn More</button>
</div>
</div>

<div className="relative h-[600px] group overflow-hidden">
<img alt="Model 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1620802051782-726fa6b93389?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-12 left-0 w-full text-center">
<h2 className="text-3xl font-medium tracking-tighter text-brand-dark">Model 3</h2>
<a className="text-xs font-medium underline underline-offset-4 decoration-gray-400 mt-2 inline-block" href="#">View Inventory</a>
</div>
<div className="absolute bottom-12 left-0 w-full flex justify-center gap-4 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<button className="px-6 py-2 bg-brand-dark text-white text-xs font-medium rounded-[2px]">Custom Order</button>
<button className="px-6 py-2 bg-gray-100 text-brand-dark text-xs font-medium rounded-[2px]">Learn More</button>
</div>
</div>
</div>
</section>

<section className="bg-brand-black text-white py-24 px-6 relative overflow-hidden">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-4 space-y-12 z-10">
<div>
<h3 className="text-5xl font-medium tracking-tighter">1.99s</h3>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">0-60 mph*</p>
</div>
<div>
<h3 className="text-5xl font-medium tracking-tighter">200mph</h3>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Top Speed</p>
</div>
<div>
<h3 className="text-5xl font-medium tracking-tighter">1,020hp</h3>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Peak Power</p>
</div>
</div>

<div className="lg:col-span-8 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
</div></div></div></section>
    </>
  );
}
