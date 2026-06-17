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
colors: {
tech: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
},
animation: {
'spin-slow': 'spin 8s linear infinite',
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
      

<div className="bg-tech-950 text-white text-xs py-2.5 text-center font-normal tracking-wide relative overflow-hidden group">
<div className="relative z-10 flex items-center justify-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span>Worldwide Launch: The new Series 7 is now available.</span>
<a className="underline decoration-white/50 hover:decoration-white transition-all ml-2" href="#">Pre-order now</a>
</div>
</div>

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-tech-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center md:hidden">
<button className="text-tech-900 hover:text-tech-600 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-tech-950 rounded text-white flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-tech-950">NEXUS</span>
</a>
</div>

<div className="hidden md:flex flex-1 justify-center space-x-10">
<a className="text-sm font-medium text-tech-600 hover:text-tech-950 transition-colors relative group" href="#">
                        Wearables
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-tech-950 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-tech-600 hover:text-tech-950 transition-colors relative group" href="#">
                        Audio
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-tech-950 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-tech-600 hover:text-tech-950 transition-colors relative group" href="#">
                        Computing
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-tech-950 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-tech-600 hover:text-tech-950 transition-colors relative group" href="#">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-tech-950 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center space-x-5">
<button className="text-tech-600 hover:text-tech-950 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hidden md:block text-tech-600 hover:text-tech-950 transition-colors">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-tech-600 hover:text-tech-950 transition-colors relative group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-tech-950 text-white text-[9px] flex items-center justify-center rounded-full font-medium">2</span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative bg-tech-50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[650px] items-center">

<div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-0 flex flex-col items-start z-10 animate-fade-in">
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center px-2 py-1 rounded bg-white border border-tech-200 shadow-sm text-[10px] font-semibold uppercase tracking-wider text-tech-900">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span> New Arrival
                        </span>
<span className="text-xs text-tech-500 font-medium">Series 7 Limited Edition</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-tech-950 leading-[1] mb-6">
                        Engineering <br/> <span className="text-tech-400">perfection.</span>
</h1>
<p className="text-lg text-tech-600 font-light max-w-md mb-10 leading-relaxed">
                        Seamlessly integrated technology for the modern professional. Precision crafted from aerospace-grade titanium.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-medium rounded-lg text-white bg-tech-950 hover:bg-tech-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
<span className="relative z-10 flex items-center gap-2">
                                Shop Now
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="inline-flex items-center justify-center px-8 py-3.5 border border-tech-200 text-sm font-medium rounded-lg text-tech-900 bg-white hover:bg-tech-50 transition-all duration-300 hover:border-tech-300">
                            Watch Keynote
                        </button>
</div>
<div className="mt-12 flex items-center gap-6 text-xs font-medium text-tech-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
                            48h Battery
                        </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:water-linear" width="16"></iconify-icon>
                            Water Resistant
                        </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bluetooth-linear" width="16"></iconify-icon>
                            Bluetooth 5.3
                        </div>
</div>
</div>

<div className="relative h-[400px] lg:h-full w-full overflow-hidden group">
<img alt="Smart Watch" className="absolute inset-0 w-full h-full object-cover object-center lg:scale-110 transition-transform duration-[2s] ease-out animate-fade-in delay-200 opacity-0 mix-blend-multiply" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=2100&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-tech-200 rounded-full opacity-30 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-tech-200 rounded-full opacity-20 pointer-events-none"></div>

<div className="absolute bottom-10 left-10 md:left-20 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-xl max-w-xs animate-fade-in delay-300 opacity-0 transform translate-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tech-100 flex items-center justify-center text-tech-900">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-tech-500 uppercase tracking-wide">Health Tracking</p>
<p className="text-sm font-semibold text-tech-900">Real-time Biometrics</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-tech-200 bg-white py-8 overflow-hidden">
<div className="flex whitespace-nowrap animate-marquee">

<div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold tracking-tight">TECHCRUNCH</span>
<span className="text-xl font-bold tracking-tight">THE VERGE</span>
<span className="text-xl font-bold tracking-tight">WIRED</span>
<span className="text-xl font-bold tracking-tight">ENGADGET</span>
<span className="text-xl font-bold tracking-tight">MKBHD</span>
<span className="text-xl font-bold tracking-tight">UNBOX THERAPY</span>
<span className="text-xl font-bold tracking-tight">TECHCRUNCH</span>
<span className="text-xl font-bold tracking-tight">THE VERGE</span>
<span className="text-xl font-bold tracking-tight">WIRED</span>
<span className="text-xl font-bold tracking-tight">ENGADGET</span>
<span className="text-xl font-bold tracking-tight">MKBHD</span>
<span className="text-xl font-bold tracking-tight">UNBOX THERAPY</span>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="flex flex-col lg:flex-row gap-16">

<aside className="w-full lg:w-64 flex-shrink-0 animate-fade-in">
<div className="sticky top-28 space-y-12">

<div>
<h3 className="text-xs font-semibold text-tech-950 uppercase tracking-widest mb-6">Device Type</h3>
<div className="space-y-4">
<label className="flex items-center group cursor-pointer justify-between hover:bg-tech-50 p-1 -mx-1 rounded transition-colors">
<div className="flex items-center">
<div className="w-4 h-4 border border-tech-300 rounded bg-white peer-checked:bg-tech-900 peer-checked:border-tech-900 transition-all flex items-center justify-center mr-3 relative">
<input className="peer sr-only appearance-none" type="checkbox"/>
<div className="w-2.5 h-2.5 bg-tech-900 rounded-[1px] opacity-0 peer-checked:opacity-100 transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
<span className="text-sm text-tech-600 font-medium group-hover:text-tech-900">All Devices</span>
</div>
<span className="text-xs text-tech-400">142</span>
</label>
<label className="flex items-center group cursor-pointer justify-between hover:bg-tech-50 p-1 -mx-1 rounded transition-colors">
<div className="flex items-center">
<div className="w-4 h-4 border border-tech-300 rounded bg-white relative">
<input checked="" className="peer sr-only appearance-none" type="checkbox"/>
<div className="w-2.5 h-2.5 bg-tech-900 rounded-[1px] opacity-0 peer-checked:opacity-100 transition-opacity absolute top-0.5 left-0.5"></div>
</div>
<span className="text-sm text-tech-600 font-medium group-hover:text-tech-900 ml-3">Smartwatches</span>
</div>
<span className="text-xs text-tech-400">24</span>
</label>
<label className="flex items-center group cursor-pointer justify-between hover:bg-tech-50 p-1 -mx-1 rounded transition-colors">
<div className="flex items-center">
<div className="w-4 h-4 border border-tech-300 rounded bg-white relative">
<input className="peer sr-only appearance-none" type="checkbox"/>
<div className="w-2.5 h-2.5 bg-tech-900 rounded-[1px] opacity-0 peer-checked:opacity-100 transition-opacity absolute top-0.5 left-0.5"></div>
</div>
<span className="text-sm text-tech-600 font-medium group-hover:text-tech-900 ml-3">Headphones</span>
</div>
<span className="text-xs text-tech-400">18</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-tech-950 uppercase tracking-widest mb-6">Finish</h3>
<div className="flex flex-wrap gap-3">
<button className="w-8 h-8 rounded-full bg-[#1c1c1c] border-2 border-white ring-1 ring-tech-200 hover:scale-110 transition-transform focus:ring-tech-900"></button>
<button className="w-8 h-8 rounded-full bg-[#e5e5e5] border-2 border-white ring-1 ring-tech-200 hover:scale-110 transition-transform"></button>
<button className="w-8 h-8 rounded-full bg-[#d4c5b0] border-2 border-white ring-1 ring-tech-200 hover:scale-110 transition-transform"></button>
<button className="w-8 h-8 rounded-full bg-[#2e3a59] border-2 border-white ring-1 ring-tech-200 hover:scale-110 transition-transform"></button>
</div>
</div>

<div className="bg-tech-900 text-white p-6 rounded-2xl relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/20 transition-colors"></div>
<h4 className="text-lg font-semibold mb-2 relative z-10">Nexus Pro+</h4>
<p className="text-xs text-tech-300 mb-4 relative z-10 leading-relaxed">Unlock advanced telemetry features today.</p>
<span className="text-xs border-b border-white pb-0.5 hover:text-tech-200 hover:border-tech-200 transition-colors">Learn More</span>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 animate-fade-in delay-100">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-tech-900">Wearables &amp; Audio</h2>
<p className="text-sm text-tech-500 mt-1">Showing 6 of 42 results</p>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-tech-900 bg-tech-50 rounded hover:bg-tech-100 transition-colors">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="20"></iconify-icon>
</button>
<button className="p-2 text-tech-400 hover:text-tech-900 transition-colors">
<iconify-icon icon="solar:list-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group relative animate-fade-in delay-100">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-tech-100 relative mb-4 border border-transparent group-hover:border-tech-200 transition-colors">
<img alt="Smart Watch" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-tech-900 rounded border border-tech-100 shadow-sm">New</span>
</div>

<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
<button className="flex-1 bg-white text-tech-900 py-2.5 rounded-lg shadow-lg font-medium text-xs hover:bg-tech-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Add
                                </button>
<button className="w-10 bg-white text-tech-900 rounded-lg shadow-lg flex items-center justify-center hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-tech-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                                        Chronos Series 5
                                    </h3>
<p className="mt-1 text-xs text-tech-500">Space Grey Aluminum</p>
</div>
<span className="text-sm font-semibold text-tech-900">$399</span>
</div>

<div className="mt-3 flex gap-3 border-t border-tech-100 pt-3">
<div className="flex items-center gap-1 text-[10px] text-tech-400" title="Battery Life">
<iconify-icon icon="solar:battery-full-linear"></iconify-icon> 24h
                                </div>
<div className="flex items-center gap-1 text-[10px] text-tech-400" title="Connectivity">
<iconify-icon icon="solar:wi-fi-router-linear"></iconify-icon> 5G
                                </div>
</div>
</div>
</div>

<div className="group relative animate-fade-in delay-200">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-tech-100 relative mb-4 border border-transparent group-hover:border-tech-200 transition-colors">
<img alt="Headphones" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
<button className="flex-1 bg-white text-tech-900 py-2.5 rounded-lg shadow-lg font-medium text-xs hover:bg-tech-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Add
                                </button>
<button className="w-10 bg-white text-tech-900 rounded-lg shadow-lg flex items-center justify-center hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-tech-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                                        Sonic Pro ANC
                                    </h3>
<p className="mt-1 text-xs text-tech-500">Matte Black Finish</p>
</div>
<span className="text-sm font-semibold text-tech-900">$299</span>
</div>
<div className="mt-3 flex gap-3 border-t border-tech-100 pt-3">
<div className="flex items-center gap-1 text-[10px] text-tech-400">
<iconify-icon icon="solar:soundwave-linear"></iconify-icon> Hi-Res
                                </div>
<div className="flex items-center gap-1 text-[10px] text-tech-400">
<iconify-icon icon="solar:bluetooth-circle-linear"></iconify-icon> v5.3
                                </div>
</div>
</div>
</div>

<div className="group relative animate-fade-in delay-300">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-tech-100 relative mb-4 border border-transparent group-hover:border-tech-200 transition-colors">
<img alt="Sneakers" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-tech-900 text-white px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded shadow-md">-20%</span>
</div>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
<button className="flex-1 bg-white text-tech-900 py-2.5 rounded-lg shadow-lg font-medium text-xs hover:bg-tech-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Add
                                </button>
<button className="w-10 bg-white text-tech-900 rounded-lg shadow-lg flex items-center justify-center hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-tech-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                                        Titanium Band
                                    </h3>
<p className="mt-1 text-xs text-tech-500">Universal Fit</p>
</div>
<div className="text-right">
<p className="text-xs text-tech-400 line-through">$149</p>
<span className="text-sm font-semibold text-red-600">$119</span>
</div>
</div>
<div className="mt-3 flex gap-3 border-t border-tech-100 pt-3">
<div className="flex items-center gap-1 text-[10px] text-tech-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Grade 5
                                </div>
</div>
</div>
</div>

<div className="group relative animate-fade-in delay-100">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-tech-100 relative mb-4 border border-transparent group-hover:border-tech-200 transition-colors">
<img alt="Smart Home" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1551817958-c963527e3043?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
<button className="flex-1 bg-white text-tech-900 py-2.5 rounded-lg shadow-lg font-medium text-xs hover:bg-tech-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Add
                                </button>
<button className="w-10 bg-white text-tech-900 rounded-lg shadow-lg flex items-center justify-center hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-tech-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                                        Smart Hub Mini
                                    </h3>
<p className="mt-1 text-xs text-tech-500">Home Automation</p>
</div>
<span className="text-sm font-semibold text-tech-900">$89</span>
</div>
<div className="mt-3 flex gap-3 border-t border-tech-100 pt-3">
<div className="flex items-center gap-1 text-[10px] text-tech-400">
<iconify-icon icon="solar:home-wifi-linear"></iconify-icon> Zigbee
                                </div>
</div>
</div>
</div>

<div className="group relative animate-fade-in delay-200">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-tech-100 relative mb-4 border border-transparent group-hover:border-tech-200 transition-colors">
<img alt="Earbuds" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1588117260148-447884962bc5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
<button className="flex-1 bg-white text-tech-900 py-2.5 rounded-lg shadow-lg font-medium text-xs hover:bg-tech-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Add
                                </button>
<button className="w-10 bg-white text-tech-900 rounded-lg shadow-lg flex items-center justify-center hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-tech-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                                        Buds Air
                                    </h3>
<p className="mt-1 text-xs text-tech-500">True Wireless</p>
</div>
<span className="text-sm font-semibold text-tech-900">$129</span>
</div>
<div className="mt-3 flex gap-3 border-t border-tech-100 pt-3">
<div className="flex items-center gap-1 text-[10px] text-tech-400">
<iconify-icon icon="solar:umbrella-linear"></iconify-icon> IPX7
                                </div>
</div>
</div>
</div>

<div className="group relative animate-fade-in delay-300">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-tech-100 relative mb-4 border border-transparent group-hover:border-tech-200 transition-colors">
<img alt="Keyboard" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
<button className="flex-1 bg-white text-tech-900 py-2.5 rounded-lg shadow-lg font-medium text-xs hover:bg-tech-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Add
                                </button>
<button className="w-10 bg-white text-tech-900 rounded-lg shadow-lg flex items-center justify-center hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-tech-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                                        Mech Key 65
                                    </h3>
<p className="mt-1 text-xs text-tech-500">Wireless Mechanical</p>
</div>
<span className="text-sm font-semibold text-tech-900">$185</span>
</div>
<div className="mt-3 flex gap-3 border-t border-tech-100 pt-3">
<div className="flex items-center gap-1 text-[10px] text-tech-400">
<iconify-icon icon="solar:keyboard-linear"></iconify-icon> PBT
                                </div>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center">
<button className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-tech-200 rounded-full text-sm font-medium text-tech-900 hover:bg-tech-50 hover:border-tech-300 hover:shadow-sm transition-all group">
                        Load more products
                        <iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<section className="border-t border-tech-200 bg-tech-50 py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="p-6 bg-white rounded-2xl border border-tech-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-tech-900 rounded-lg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-tech-900 mb-2">Same Day Delivery</h4>
<p className="text-xs text-tech-500 leading-relaxed">Available in select major cities for orders placed before 12 PM.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-tech-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-tech-900 rounded-lg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-tech-900 mb-2">Extended Warranty</h4>
<p className="text-xs text-tech-500 leading-relaxed">2-year comprehensive coverage included on all hardware.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-tech-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-tech-900 rounded-lg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:headphones-round-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-tech-900 mb-2">24/7 Expert Support</h4>
<p className="text-xs text-tech-500 leading-relaxed">Direct access to our technical team whenever you need it.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-tech-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-tech-900 rounded-lg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:restart-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-tech-900 mb-2">30-Day Tech Trial</h4>
<p className="text-xs text-tech-500 leading-relaxed">Test your device. If you don't love it, return it for free.</p>
</div>
</div>
</div>
</section>

<footer className="bg-tech-950 text-white pt-20 pb-10 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-700 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-white rounded text-tech-950 flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter">NEXUS</span>
</a>
<p className="text-tech-400 text-sm font-light max-w-sm leading-relaxed mb-8">
                        Pioneering the future of personal technology. We curate hardware that bridges the gap between utility and art.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-tech-900 flex items-center justify-center text-tech-400 hover:bg-white hover:text-tech-950 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-tech-900 flex items-center justify-center text-tech-400 hover:bg-white hover:text-tech-950 transition-all" href="#">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-tech-900 flex items-center justify-center text-tech-400 hover:bg-white hover:text-tech-950 transition-all" href="#">
<iconify-icon icon="solar:video-frame-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-tech-500">Shop</h4>
<ul className="space-y-4 text-sm font-medium text-tech-300">
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">New Arrivals</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Best Sellers</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Accessories</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Refurbished</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-tech-500">Support</h4>
<ul className="space-y-4 text-sm font-medium text-tech-300">
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Help Center</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Order Status</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Warranty</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Returns</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-tech-500">Stay Ahead</h4>
<p className="text-xs text-tech-400 mb-4">Join 50,000+ tech enthusiasts.</p>
<form className="flex flex-col gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-tech-500" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-tech-900 border border-tech-800 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-tech-500 focus:ring-1 focus:ring-tech-500 placeholder-tech-600 transition-all" placeholder="Email address" type="email"/>
</div>
<button className="bg-white text-tech-950 text-sm font-bold rounded-lg px-4 py-2.5 hover:bg-tech-200 transition-colors w-full" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-tech-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-tech-600">© 2024 Nexus Tech. Crafted with precision.</p>
<div className="flex items-center gap-6 text-xs text-tech-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
