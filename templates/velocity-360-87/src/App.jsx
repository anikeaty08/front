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
border: 'rgba(255,255,255,0.08)',
glass: 'rgba(255,255,255,0.03)',
accent: '#3b82f6',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<iconify-icon icon="solar:align-bottom-linear" strokeWidth="1.5" width="24"></iconify-icon>
                VELOCITY
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-white font-medium" href="#">3D Cars</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Models</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Offers</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors" href="#test-drive">
<span>Book Test Drive</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-24 pb-12 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#050505] to-[#050505] -z-10"></div>
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full relative z-10">

<div className="lg:col-span-12 flex flex-col items-center justify-between h-full relative">

<div className="w-full h-[60vh] lg:h-[70vh] relative group cursor-grab active:cursor-grabbing flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[80%] h-[60%] bg-gradient-to-b from-transparent to-black/80 rounded-full blur-3xl absolute bottom-0"></div>

<div className="relative z-10 w-[80%] max-w-4xl aspect-[16/9] bg-zinc-900/30 border border-white/5 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02]">
<iconify-icon className="text-zinc-700 opacity-50 mb-4" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-zinc-500 text-sm tracking-wide">WebGL Canvas Placeholder</span>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
<div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest animate-pulse">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Drag to Rotate
                        </div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 bg-zinc-900/50 backdrop-blur-md p-2 rounded-xl border border-white/10">
<button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors" title="Rotate">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors" title="Zoom In">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors" title="Zoom Out">
<iconify-icon icon="solar:minus-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors" title="Fullscreen">
<iconify-icon icon="solar:maximize-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="w-full flex flex-col md:flex-row items-end justify-between border-t border-white/10 pt-8 mt-auto">
<div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-2">MODEL S <span className="text-zinc-600 font-light">PLAID</span></h1>
<p className="text-xl text-zinc-400 font-light">$89,990 <span className="text-xs text-zinc-600 ml-2">Est. Lease $980/mo</span></p>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button className="px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white/5 transition-colors text-white">View in 360°</button>
<button className="px-6 py-3 bg-blue-600 rounded-full text-sm hover:bg-blue-500 transition-colors text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]">Get Price</button>
</div>
</div>
</div>
</div>
</header>

<section className="min-h-screen bg-[#080808] border-t border-white/5 relative flex flex-col lg:flex-row overflow-hidden">

<aside className="w-full lg:w-80 bg-[#050505] border-r border-white/5 p-6 flex flex-col gap-8 z-20">
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">Model</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors">
<option>Model S Plaid</option>
<option>Model S Long Range</option>
<option>Model X</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">Paint</label>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-black border-2 border-white ring-2 ring-blue-500 ring-offset-2 ring-offset-black"></button>
<button className="w-8 h-8 rounded-full bg-zinc-200 border border-white/10 hover:scale-110 transition-transform"></button>
<button className="w-8 h-8 rounded-full bg-blue-900 border border-white/10 hover:scale-110 transition-transform"></button>
<button className="w-8 h-8 rounded-full bg-red-700 border border-white/10 hover:scale-110 transition-transform"></button>
</div>
<p className="mt-2 text-xs text-zinc-400">Midnight Silver Metallic</p>
</div>
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">Wheels</label>
<div className="grid grid-cols-2 gap-3">
<button className="border border-blue-500 bg-blue-500/10 rounded-lg p-3 text-left">
<div className="text-xs text-white font-medium">21" Arachnid</div>
<div className="text-[10px] text-blue-400">+$4,500</div>
</button>
<button className="border border-white/10 bg-zinc-900/50 rounded-lg p-3 text-left hover:border-white/20">
<div className="text-xs text-zinc-400">19" Tempest</div>
<div className="text-[10px] text-zinc-600">Included</div>
</button>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">View Mode</label>
<div className="flex bg-zinc-900 p-1 rounded-lg">
<button className="flex-1 py-1.5 text-xs font-medium text-black bg-white rounded shadow-sm">Exterior</button>
<button className="flex-1 py-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors">Interior</button>
</div>
</div>
</aside>

<main className="flex-1 relative bg-zinc-900/20">

<div className="absolute inset-0 flex items-center justify-center">
<img alt="Car 3D" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
</div>

<div className="absolute top-1/3 left-1/2 group cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full animate-ping absolute opacity-75"></div>
<div className="w-4 h-4 bg-white rounded-full relative shadow-[0_0_15px_white] flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<div className="absolute left-6 top-0 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
<h4 className="text-xs font-semibold text-white mb-1">Aerodynamic Design</h4>
<p className="text-[10px] text-zinc-400 leading-relaxed">Lowest drag coefficient on earth (.208 Cd).</p>
</div>
</div>
</main>

<aside className="w-full lg:w-80 bg-[#050505] border-l border-white/5 p-6 flex flex-col justify-between z-20">
<div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight">Quick Specs</h3>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:speedometer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">1.99 s</div>
<div className="text-xs text-zinc-500">0-60 mph</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">396 mi</div>
<div className="text-xs text-zinc-500">Range (EPA)</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">1,020 hp</div>
<div className="text-xs text-zinc-500">Peak Power</div>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5">
<h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Highlights</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Tri-Motor All-Wheel Drive
                        </li>
<li className="flex items-start gap-2 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Torque Vectoring
                        </li>
<li className="flex items-start gap-2 text-xs text-zinc-400">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Carbon Sleeved Rotors
                        </li>
</ul>
</div>
</div>
<button className="w-full mt-8 bg-white text-black py-4 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                Book Test Drive
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</aside>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Available Models</h2>
<a className="text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors" href="#">
                View All <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 to-black relative flex items-center justify-center overflow-hidden">
<img alt="Car" className="w-[90%] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white border border-white/10">In Stock</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Model Y</h3>
<span className="text-sm text-zinc-400">$43,990</span>
</div>
<div className="flex gap-4 mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon icon="solar:battery-charge-linear" width="14"></iconify-icon> 330mi
                        </div>
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon icon="solar:stopwatch-linear" width="14"></iconify-icon> 3.5s
                        </div>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-sm text-zinc-300 hover:bg-white hover:text-black transition-all">View in 3D</button>
</div>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 to-black relative flex items-center justify-center overflow-hidden">
<img alt="Car" className="w-[90%] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Model 3</h3>
<span className="text-sm text-zinc-400">$38,990</span>
</div>
<div className="flex gap-4 mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon icon="solar:battery-charge-linear" width="14"></iconify-icon> 272mi
                        </div>
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon icon="solar:stopwatch-linear" width="14"></iconify-icon> 5.8s
                        </div>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-sm text-zinc-300 hover:bg-white hover:text-black transition-all">View in 3D</button>
</div>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 to-black relative flex items-center justify-center overflow-hidden">
<img alt="Car" className="w-[90%] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-md px-2 py-1 rounded text-xs text-blue-300 border border-blue-500/30">New</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Cyber Truck</h3>
<span className="text-sm text-zinc-400">$60,990</span>
</div>
<div className="flex gap-4 mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon icon="solar:battery-charge-linear" width="14"></iconify-icon> 340mi
                        </div>
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon icon="solar:stopwatch-linear" width="14"></iconify-icon> 2.6s
                        </div>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-sm text-zinc-300 hover:bg-white hover:text-black transition-all">View in 3D</button>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden bg-zinc-900 border-y border-white/5">
<img alt="Interior" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none"></div>
<div className="absolute bottom-12 left-12 max-w-sm pointer-events-none">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Cinematic Interior</h2>
<p className="text-zinc-400 text-sm leading-relaxed">Experience a 17” touchscreen with left-right tilt, yoke steering, and a silent glass cabin.</p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
<div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="text-white" icon="solar:360-degrees-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black/80 px-2 py-1 rounded">
                Enter Immersive View
             </div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Performance Data</h2>
<div className="space-y-0">
<div className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-2 transition-colors">
<span className="text-zinc-400 text-sm">Powertrain</span>
<span className="text-white text-sm font-medium">Tri-Motor AWD</span>
</div>
<div className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-2 transition-colors">
<span className="text-zinc-400 text-sm">Acceleration (0-60 mph)</span>
<span className="text-white text-sm font-medium">1.99 s</span>
</div>
<div className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-2 transition-colors">
<span className="text-zinc-400 text-sm">Top Speed</span>
<span className="text-white text-sm font-medium">200 mph</span>
</div>
<div className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-2 transition-colors">
<span className="text-zinc-400 text-sm">Drag Coefficient</span>
<span className="text-white text-sm font-medium">0.208 Cd</span>
</div>
<div className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-2 transition-colors">
<span className="text-zinc-400 text-sm">Supercharging Max</span>
<span className="text-white text-sm font-medium">250 kW</span>
</div>
</div>
<button className="mt-8 text-sm text-blue-500 hover:text-blue-400 flex items-center gap-2">
<iconify-icon icon="solar:sort-from-bottom-to-top-linear" width="18"></iconify-icon> Compare with Competitors
                </button>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 flex flex-col justify-center items-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent"></div>
<img alt="Engine" className="w-[80%] opacity-80 mix-blend-lighten" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="mt-8 text-center relative z-10">
<h3 className="text-white font-medium mb-2">Carbon Sleeved Rotors</h3>
<p className="text-zinc-400 text-xs max-w-xs mx-auto">Maintain power at top speed with carbon-sleeved rotors that wrap the motor.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] border-y border-white/5 py-24">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Financing Options</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 border border-white/10 rounded-2xl bg-[#050505] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-500" icon="solar:tag-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Seasonal Lease Offer</h3>
<p className="text-3xl font-semibold text-white mb-4">$849 <span className="text-sm font-normal text-zinc-500">/mo</span></p>
<ul className="space-y-2 mb-8">
<li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> 36 months</li>
<li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> $4,500 down payment</li>
<li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> 10,000 miles / year</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white/5 text-white text-sm hover:bg-white hover:text-black transition-colors border border-white/5">Calculate Lease</button>
</div>

<div className="p-8 border border-white/10 rounded-2xl bg-[#050505] relative overflow-hidden">
<h3 className="text-lg font-medium text-white mb-2">Loan Financing</h3>
<p className="text-3xl font-semibold text-white mb-4">2.99% <span className="text-sm font-normal text-zinc-500">APR</span></p>
<div className="flex gap-4 mb-8 opacity-50">
<div className="h-8 w-16 bg-zinc-800 rounded"></div>
<div className="h-8 w-16 bg-zinc-800 rounded"></div>
<div className="h-8 w-16 bg-zinc-800 rounded"></div>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 text-white text-sm hover:bg-white hover:text-black transition-colors border border-white/5">Apply for Credit</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6">
<div className="flex flex-col items-center text-center">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12">Owner Experiences</h2>
<div className="max-w-3xl relative">
<div className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 text-zinc-500 hover:text-white cursor-pointer hidden md:block">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-6">
<div className="flex gap-1 text-yellow-500 mb-2">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl md:text-2xl text-zinc-300 font-light italic">"The acceleration is unlike anything I've ever experienced. It's not just a car; it's a piece of future technology that I get to drive every day."</p>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div className="text-left">
<div className="text-white text-sm font-medium">Alex Chen</div>
<div className="text-zinc-500 text-xs">Model S Owner, California</div>
</div>
</div>
</div>
<div className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 text-zinc-500 hover:text-white cursor-pointer hidden md:block">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#050505] relative" id="test-drive">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 lg:p-24">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Schedule a Drive</h2>
<p className="text-zinc-400 text-sm mb-8">Experience the future of driving at your nearest showroom.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider">First Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:bg-zinc-900 transition-colors" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:bg-zinc-900 transition-colors" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider">Email Address</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:bg-zinc-900 transition-colors" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider">Phone</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:bg-zinc-900 transition-colors" type="tel"/>
</div>
<div className="flex items-start gap-3 mt-4">
<label className="flex items-center gap-3 cursor-pointer">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-700 rounded bg-zinc-900 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-opacity-0 checkbox-icon" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-zinc-500">I agree to receive updates about products and services.</span>
</label>
<style>.custom-checkbox:checked + div iconify-icon { opacity: 1; }</style>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-lg font-medium transition-colors mt-4" type="submit">Confirm Booking</button>
</form>
</div>

<div className="bg-zinc-900 relative min-h-[400px]">
<div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex flex-col items-center">
<iconify-icon className="text-blue-500 animate-bounce" icon="solar:map-point-linear" width="48"></iconify-icon>
<div className="mt-4 bg-[#050505] border border-white/10 p-4 rounded-xl shadow-2xl max-w-xs text-center">
<h4 className="text-white font-medium text-sm">Velocity Downtown</h4>
<p className="text-zinc-500 text-xs mt-1">100 Innovation Dr, Tech City</p>
<p className="text-blue-500 text-xs mt-2 cursor-pointer hover:underline">Get Directions</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-16">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon icon="solar:align-bottom-linear" width="24"></iconify-icon>
                        VELOCITY
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Accelerating the world's transition to sustainable energy with high-performance electric vehicles.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Vehicles</h4>
<ul className="space-y-3 text-xs text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Model S</a></li>
<li><a className="hover:text-white transition-colors" href="#">Model 3</a></li>
<li><a className="hover:text-white transition-colors" href="#">Model X</a></li>
<li><a className="hover:text-white transition-colors" href="#">Model Y</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cyber Truck</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Ownership</h4>
<ul className="space-y-3 text-xs text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Charging</a></li>
<li><a className="hover:text-white transition-colors" href="#">Insurance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Account</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-xs text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Investors</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<p className="text-[10px] text-zinc-600">© 2023 Velocity Motors Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
